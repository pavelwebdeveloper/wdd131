import games from "./games.mjs";


function renderGames(games) {
	// get the element we will output the recipes into
    const mainElement = document.getElementsByTagName("main")[0];
	// use the recipeTemplate function to transform our recipe objects into recipe HTML strings
    let gameHtml = '';
    console.log(games);
    games.forEach(game => gameHtml += gameTemplate(game));
    

	// Set the HTML strings as the innerHTML of our output element.
    mainElement.innerHTML = gameHtml;
}

function gameTemplate(game){
    return `<section>
            <figure><img src="${game.image}" alt="${game.name}"></figure>
            <article>
            <summary>${tagsTemplate(game.tags)}</summary>
            <h2>${game.name}</h2>
            <p>${game.description}</p>
            <a href="${game.wikipediaLink}" target="_blank">More about ${game.name} on Wikipedia</a>
            </article>
        </section>`;
}

function tagsTemplate(tags) {
	// loop through the tags list and transform the strings to HTML
    let html = "";
    tags.forEach(tag => {
        html += `<mark>${tag}</mark>`;
    });
	return html;
}

function searchHandler(event){
    event.preventDefault();
    let searchString = document.getElementById("search").value.toLowerCase();
    console.log("Here is the search string !!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
    console.log(searchString);
    console.log("Here is the filtered list !!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
    console.log(filterGames(searchString));
    renderGames(filterGames(searchString));
}

function filterGames(query){
    function searchCallback(game){
      
        return (game.name.toLowerCase().includes(query) || game.description.toLowerCase().includes(query) 
        || game.tags.find((tag)=>{return tag.toLowerCase().includes(query)}))
      }

      let filteredGamesList = games.filter(searchCallback);
      
    return filteredGamesList;
}

function init() {
    
    // render the game with renderGames.
    renderGames(games);
  }

init();

document.getElementById("searchButton").addEventListener("click", searchHandler);