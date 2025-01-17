<template>
    <div class="shader-container">
      <canvas ref="canvas"></canvas>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        gl: null,
        program: null,
        time: 0,
        resizeTimeout: null, // Pour stocker le délai lors du redimensionnement
        animationFrameId: null, // Stocke l'ID de l'animation pour pouvoir l'annuler
      };
    },
    mounted() {
      window.addEventListener('resize', this.handleResize);
      this.initCanvas();
    },
    beforeUnmount() {
      window.removeEventListener('resize', this.handleResize);
      cancelAnimationFrame(this.animationFrameId); // Arrêter l'animation si le composant est démonté
    },
    methods: {
      handleResize() {
        cancelAnimationFrame(this.animationFrameId);
        clearTimeout(this.resizeTimeout);
        this.resizeCanvas();
        this.startAnimation();
      },
      initCanvas() {
        const canvas = this.$refs.canvas;
        this.resizeCanvas();
  
        const gl = canvas.getContext("webgl");
        if (!gl) {
          console.error("WebGL not supported");
          return;
        }
  
        this.gl = gl;
  
        // Créer le programme de shader
        const vertexShader = this.createShader(gl, gl.VERTEX_SHADER, this.vertexSource());
        const fragmentShader = this.createShader(gl, gl.FRAGMENT_SHADER, this.fragmentSource());
        this.program = this.createProgram(gl, vertexShader, fragmentShader);
  
        gl.useProgram(this.program);
  
        // Configuration des attributs de position
        const positionLocation = gl.getAttribLocation(this.program, "a_position");
  
        // Création d'un rectangle plein écran
        const positionBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
        const positions = new Float32Array([
          -1, -1,
           1, -1,
          -1,  1,
          -1,  1,
           1, -1,
           1,  1,
        ]);
        gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);
  
        // Liage des attributs
        gl.enableVertexAttribArray(positionLocation);
        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
        gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);
        
        // Uniformes
        const timeLocation = gl.getUniformLocation(this.program, "u_time");
  
        // Démarrer l'animation
        this.startAnimation();
      },
      startAnimation() {
        const gl = this.gl;
        const timeLocation = gl.getUniformLocation(this.program, "u_time");
  
        const animate = () => {
          this.time += 0.05;
          gl.uniform1f(timeLocation, this.time);
          this.render();
          this.animationFrameId = requestAnimationFrame(animate); // Stocker l'ID de l'animation
        };
        animate();
      },
      resizeCanvas() {
        const canvas = this.$refs.canvas;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
  
        const gl = this.gl;
        if (gl) {
          gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
          this.render(); // Rendu après redimensionnement
        }
      },
      render() {
        const gl = this.gl;
        if (gl) {
          gl.clearColor(0, 0, 0, 0); // Gardez le fond transparent
          gl.clear(gl.COLOR_BUFFER_BIT);
          gl.drawArrays(gl.TRIANGLES, 0, 6);
        }
      },
      createShader(gl, type, source) {
        const shader = gl.createShader(type);
        gl.shaderSource(shader, source);
        gl.compileShader(shader);
        if (gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
          return shader;
        }
        console.error(gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
      },
      createProgram(gl, vertexShader, fragmentShader) {
        const program = gl.createProgram();
        gl.attachShader(program, vertexShader);
        gl.attachShader(program, fragmentShader);
        gl.linkProgram(program);
        return program;
      },
      vertexSource() {
        return `
        attribute vec4 a_position;
        varying vec2 v_texCoord;
  
        void main() {
            gl_Position = a_position;
            v_texCoord = (a_position.xy + 1.0) * 0.5; // Normaliser les coordonnées
        }`;
      },
      fragmentSource() {
        return `
        precision mediump float;
  
        varying vec2 v_texCoord;
        uniform float u_time;
  
        void main() {
            // Générer une couleur de fond
            vec3 color = vec3(0.0);
  
            // Effet de bruit
            float noiseScale = 10.0; // Échelle du bruit
            float noise = fract(sin(dot(v_texCoord.xy * noiseScale, vec2(12.9898, 78.233))) * 43758.5453 + u_time);
            color += noise * 0.07; // Augmentez l'intensité du grain pour le rendre plus visible
  
            // Appliquer la couleur finale avec une transparence
            gl_FragColor = vec4(color, 0.07);
        }`;
      },
    },
  };
  </script>
  
  <style scoped>
  .shader-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%; 
    z-index: 9999;
    pointer-events: none; 
  }
  </style>
  