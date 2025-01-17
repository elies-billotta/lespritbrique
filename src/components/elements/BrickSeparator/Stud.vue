<template>
    <div class="brick-separator">
      <div class="brick-separator__brick">
        <span class="dot"></span>
      </div>
    </div>
  </template>
  
  <style scoped>
  .brick-separator {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: 10%; /* Chaque stud occupe 10% de la largeur du conteneur */
  }
  
  .brick-separator__brick {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    background-color: var(--red);
    padding: 0.3rem;
  }
  
  .dot {
    height: 20px;
    width: 20px;
    border-radius: 50%;
    display: inline-block;
    box-shadow: 1px 1px 2px var(--black);
    background-color: var(--red-clear);
  }
  </style>
  