const selectElement = document.getElementById("js-theme-select");
selectElement.addEventListener("change", changeTheme);

const changeTheme = () => {
    let option = selectElement.getAttribute("option");
    if(option == "dark"){
        document.body.setAttribute("class", "dark");
        document.querySelector("img").setAttribute("src", "byui-logo_white.png");
    } else {
        document.body.removeAttribute("class", "dark");
        document.querySelector("img").setAttribute("src", "byui-logo_blue.webp");
    }
}