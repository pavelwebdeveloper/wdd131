import recipes from "./recipes.mjs";

console.log(recipes.length);

console.log(randomNumberGenerator());



console.log("tagsTemplate");
//console.log(recipeTemplate(randomRecipeGenerator()));
//console.log(ratingTemplate(recipes[3].rating));

function randomNumberGenerator(){
    return Math.floor(Math.random()*recipes.length); // will give a number 0-7
}

function getRandomListEntry(){
    return recipes[randomNumberGenerator()];
}

function recipeTemplate(recipe){

    console.log("inside recipeTemplate");
    console.log(recipe);
    return `<section>
            <figure><img src="${recipe.image}" alt="${recipe.name}"></figure>
            <article>${tagsTemplate(recipe.tags)}
            <h2>${recipe.name}</h2>
            <mark>${ratingTemplate(recipe.rating)}</mark>
            <p>${recipe.description}</p>
            </article>
        </section>`;
}

function tagsTemplate(tags) {
	// loop through the tags list and transform the strings to HTML
    let html = "";
    tags.forEach(tag => {
        html += `<summary>${tag}</summary>`;
    });
	return html;
}

function ratingTemplate(rating) {
	// begin building an html string using the ratings HTML written earlier as a model.
	let html = `<span
	class="rating"
	role="img"
	aria-label="Rating: ${rating} out of 5 stars"
>`
// our ratings are always out of 5, so create a for loop from 1 to 5

    for(let i=1;i<=5;i++){

   

		// check to see if the current index of the loop is less than our rating
        if(i<=rating){
		// if so then output a filled star
            html += `<span aria-hidden="true" class="icon-star">⭐</span>`;
		// else output an empty star
        } else {
            html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
        }
    }
	// after the loop, add the closing tag to our string
	html += `</span>`
	// return the html string
	return html
}

function renderRecipes(recipeList) {
	// get the element we will output the recipes into
    const mainElement = document.getElementsByTagName("main")[0];
	// use the recipeTemplate function to transform our recipe objects into recipe HTML strings
    let recipeHtml = '';
    recipeList.forEach(recipe => recipeHtml += recipeTemplate(recipe));
    

	// Set the HTML strings as the innerHTML of our output element.
    mainElement.innerHTML = recipeHtml;
}

function init() {
  // get a random recipe
  const recipe = getRandomListEntry();
  // render the recipe with renderRecipes.
  renderRecipes([recipe]);
}

function searchHandler(event){
    event.preventDefault();
    let searchString = document.getElementById("search").value.toLowerCase();
    console.log("Here is the search string !!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
    console.log(searchString);
    console.log("Here is the filtered list !!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
    console.log(filterRecipes(searchString));
    renderRecipes(filterRecipes(searchString));
}

function filterRecipes(query){
    function searchCallback(recipe){
      
        return (recipe.name.toLowerCase().includes(query) || recipe.description.toLowerCase().includes(query) 
        || recipe.tags.find((tag)=>{return tag.toLowerCase().includes(query)}) || recipe.recipeIngredient.find((ingredient)=>{return ingredient.toLowerCase().includes(query)}))
      }

      let filteredRecipesList = recipes.filter(searchCallback);
      
    return filteredRecipesList;
}
init();

document.getElementById("searchButton").addEventListener("click", searchHandler);