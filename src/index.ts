// src/index.ts
document.addEventListener("DOMContentLoaded", () => {
    const textBox = document.getElementById("text-box") as HTMLTextAreaElement;
    textBox.addEventListener("input", () => {
      console.log("Text Box Content:", textBox.value);
    });
  });
  