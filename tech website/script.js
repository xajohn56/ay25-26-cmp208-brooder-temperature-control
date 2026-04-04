/* Toggles the profile dropdown menu */
function toggleMenu() {
    let menu = document.getElementById("dropdown");
    if (menu) {
        menu.style.display = (menu.style.display === "block") ? "none" : "block";
    }
}

/* Closes the menu if the user clicks anywhere outside of the profile image */
window.onclick = function(event) {
    if (!event.target.matches('.profile-img')) {
        let dropdowns = document.getElementsByClassName("dropdown");
        for (let i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.style.display === "block") {
                openDropdown.style.display = "none";
            }
        }
    }
}