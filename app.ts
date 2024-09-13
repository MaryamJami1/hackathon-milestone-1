(() => {
    const hamburgerMenu = document.getElementById("hamburger-menu") as HTMLButtonElement | null;
    const navLinks = document.getElementById("links") as HTMLElement | null;
    
    hamburgerMenu?.addEventListener("click", () => {
      if (navLinks) {
        navLinks.classList.toggle("show");
      } else {
        console.error("Navigation links not found.");
      }
    });
    
})();




(() => {
    const Button = document.getElementById("toggle-button") as HTMLButtonElement | null;
    const contact = document.getElementById("contact") as HTMLElement | null;
  
    Button?.addEventListener("click", () => {
      if (contact) {
        if (contact.classList.contains("hidden")) {
          contact.classList.remove("hidden");
          Button!.textContent = "Hide Contact";
        } else {
          contact.classList.add("hidden");
          Button!.textContent = "Show Contact";
        }
      } else {
        console.error("Contact section not found.");
      }
    });
  })();
  


