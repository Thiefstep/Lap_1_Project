const randomiseButton = document.querySelector("#btn-randomise");

randomiseButton.addEventListener("click", displayFact);

async function displayFact() {
    const res = await fetch("http://localhost:3000/facts/random");
    const fact = await res.json();
  
    const textElement = document.querySelector("#text");
    const authorElement = document.querySelector("#play");
  
    textElement.textContent = fact["text"];
    authorElement.textContent = fact["play"];

  }
  //This shows a quote as soon as the page loads
  displayFact();
