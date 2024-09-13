(function () {
    var hamburgerMenu = document.getElementById("hamburger-menu");
    var navLinks = document.getElementById("links");
    hamburgerMenu === null || hamburgerMenu === void 0 ? void 0 : hamburgerMenu.addEventListener("click", function () {
        if (navLinks) {
            navLinks.classList.toggle("show");
        }
        else {
            console.error("Navigation links not found.");
        }
    });
})();
(function () {
    var Button = document.getElementById("toggle-button");
    var contact = document.getElementById("contact");
    Button === null || Button === void 0 ? void 0 : Button.addEventListener("click", function () {
        if (contact) {
            if (contact.classList.contains("hidden")) {
                contact.classList.remove("hidden");
                Button.textContent = "Hide Contact";
            }
            else {
                contact.classList.add("hidden");
                Button.textContent = "Show Contact";
            }
        }
        else {
            console.error("Contact section not found.");
        }
    });
})();
