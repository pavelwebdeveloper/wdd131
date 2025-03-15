import recipes from "./recipes.mjs";

console.log(recipes.length);

console.log(randomNumberGenerator());
console.log(randomRecipeGenerator());


console.log("tagsTemplate");
console.log(recipeTemplate(randomRecipeGenerator()));
//console.log(ratingTemplate(recipes[3].rating));

function randomNumberGenerator(){
    return Math.floor(Math.random()*recipes.length); // will give a number 0-7
}

function randomRecipeGenerator(){
    return recipes[randomNumberGenerator()];
}

function recipeTemplate(recipe){
    return `<section>
            <figure><img src="${recipe.image}" alt="${recipe.name}"></figure>
            <article><summary>${tagsTemplate(recipe.tags)}</summary>
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