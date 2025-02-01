const menu = document.getElementById("menu");
menu.addEventListener("click", toggleMenu);
let ulClassList = document.querySelector("ul").classList;

window.addEventListener("resize", handleResize);
window.addEventListener("load", handleResize);

function toggleMenu(){
    if(ulClassList[0] == "hide"){
        ulClassList.remove("hide");
    } else {
        ulClassList.add("hide");
    }
}

function handleResize(){
    if(window.innerWidth > 1000){
        menu.style.display = "none";
        ulClassList.remove("hide");
    } else {
        menu.style.display = "inline";
        ulClassList.add("hide");
    }
}

function viewerTemplate(imagePath, alt){
    return `<div class="modal">
        <button class="close-modal">X</button>
        <img src="${imagePath}" alt="${alt}">
    </div>`;
}

function viewHandler(event){
    // create a variable to hold the element that was clicked on from event.target
    let element = event.target;
    console.log(element);
	// get the src attribute from that element and 'split' it on the "-"
    let splitSrc = element.src.split("-");
	// construct the new image file name by adding "-full.jpeg" to the first part of the array from the previous step
    let newImageFile = splitSrc[0] + "-full.jpeg";
    console.log(newImageFile);
	// insert the viewerTemplate into the top of the body element
	// (element.insertAdjacentHTML("afterbegin", htmltoinsert))
    document.getElementsByTagName("body")[0].insertAdjacentHTML("afterbegin", viewerTemplate(newImageFile, splitSrc[0]));

	// add a listener to the close button (X) that calls a function called closeViewer when clicked
    document.getElementsByClassName("close-modal")[0].addEventListener("click", closeViewer);
}

document.getElementsByClassName("gallery")[0].addEventListener("click", viewHandler);

function closeViewer(event){
    document.getElementsByTagName("div")[0].remove();
}