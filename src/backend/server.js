// import express from "express";
// import nodemailer from "nodemailer";
// import bodyParser from "body-parser";
// import cors from "cors";

// const app = express();
// app.use(cors());
// app.use(bodyParser.json());

// const transporter = nodemailer.createTransport({
//   host: "ssl0.ovh.net",
//   port: 465,
//   secure: true,
//   auth: {
//     user: "contact@lespritbrique.com",
//     pass: "Juggernaut_06!",
//   },
// });

// app.post("/send-email", async (req, res) => {
//     const { name, email, subject, message, recaptchaToken } = req.body;
  
//     const secretKey = '6Lc-hlQqAAAAACcCO9DhhKe32e1-hPfuDfD0P_dG';
//     const response = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${recaptchaToken}`, {
//       method: 'POST',
//     });
//     const data = await response.json();
  
//     if (!data.success) {
//       return res.status(400).send("Échec de la vérification du reCAPTCHA.");
//     }
  
//     if (!name || !email || !subject || !message) {
//       return res.status(400).send("Tous les champs sont obligatoires.");
//     }
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       return res.status(400).send("Adresse email invalide.");
//     }
//     if (message.length > 500) {
//       return res.status(400).send("Le message est trop long.");
//     }
  
//     const mailOptions = {
//       from: `"${name}" <${email}>`,
//       to: "contact@lespritbrique.com",
//       subject: subject,
//       text: message,
//     };
  
//     transporter.sendMail(mailOptions, (error, info) => {
//       if (error) {
//         console.log(error);
//         res.status(500).send("Erreur lors de l'envoi de l'email.");
//       } else {
//         console.log("Email envoyé: " + info.response);
//         res.status(200).send("Email envoyé avec succès.");
//       }
//     });
//   });
  

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
// });
