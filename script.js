let mobiel_icon = document.getElementById("mobile_icon");
let main_menu = document.getElementById("main_menu");

mobiel_icon.addEventListener("click", () => {
    main_menu.classList.toggle('hidden');
})