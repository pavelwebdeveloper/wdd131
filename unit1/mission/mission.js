const themeSelector = document.getElementById("js-theme-select");


function changeTheme() {
    let option = themeSelector.value;
    console.log(themeSelector);

    console.log(option);
    
    if(option == "dark"){
        document.body.setAttribute("class", "dark");
        document.querySelector("img").setAttribute("src", "byui-logo_white.png");
    } else {
        document.body.removeAttribute("class", "dark");
        document.querySelector("img").setAttribute("src", "byui-logo_blue.webp");
    }
}

themeSelector.addEventListener("change", changeTheme);


