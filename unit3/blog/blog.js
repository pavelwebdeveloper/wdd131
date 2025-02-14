const articles = [
	{
		id: 1,
		title: 'Septimus Heap Book One: Magyk',
		date: 'July 5, 2022',
		description:
			'If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.',
		imgSrc: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg',
		imgAlt: 'Book cover for Septimus Heap 1',
		ages: '10-14',
		genre: 'Fantasy',
		stars: '****'
	},
	{
		id: 2,
		title: 'Magnus Chase Book One: Sword of Summer',
		date: 'December 12, 2021',
		description:
			'The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.',
		imgSrc:
			'https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300',
		imgAlt: 'Book cover for Magnus Chase 1',
		ages: '12-16',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐'
	},
    {
        id: 3,
        title: "Belgariad Book One: Pawn of Prophecy",
        date: "Feb 12, 2022",
        description:
        "A fierce dispute among the Gods and the theft of a powerful Orb leaves the World divided into five kingdoms. Young Garion, with his 'Aunt Pol' and an elderly man calling himself Wolf --a father and daughter granted near-immortality by one of the Gods -- set out on a complex mission.",
        imgSrc:
        "https://images-na.ssl-images-amazon.com/images/I/41ZxXA+nInL.jpg",
        imgAlt: "Book cover for Pawn of Prophecy",
        ages: "12-16",
        genre: "Fantasy",
        stars: "⭐⭐⭐⭐⭐"
        }
]


let bookList = document.getElementById("bookList");

const articleOutput = function(article){
    const liElement = document.createElement("li");
    liElement.setAttribute("class", "article")
    liElement.style.listStyleType = "none";
    const articleDetails = document.createElement("summary");
    const articeElement = document.createElement("article");

    const ul = document.createElement("ul");
    ul.setAttribute("class", "articleDetails")
    articleDetailsSection(ul, article);
    articleDetails.appendChild(ul);
    liElement.appendChild(articleDetails);
    articleSection(articeElement, article);
    liElement.appendChild(articeElement);
    bookList.appendChild(liElement);
}


articles.forEach(articleOutput);

function articleDetailsSection(ul, article){

    console.log("Inside articleDetailsSection function");
    console.log(article);

    for(i=0;i<=4;i++){
    const li = document.createElement("li");
    let text;
        if(i==0){
            const timeElement = document.createElement("time");
            const timeInfo = document.createTextNode(article.date);
            timeElement.appendChild(timeInfo);
            li.appendChild(timeElement);
            ul.appendChild(li);
        } else if(i==1){
            text = document.createTextNode(article.ages);
            li.appendChild(text);
            ul.appendChild(li);
        } else if(i==2){
            text = document.createTextNode(article.genre);
            li.appendChild(text);
            ul.appendChild(li);
        } else if(i==3){
            text = document.createTextNode(article.stars);
            li.appendChild(text);
            ul.appendChild(li);
        }   
    }
}

function articleSection(articeElement, article){
    const h2 = document.createElement("h2");
    titleText = document.createTextNode(article.title);
    h2.appendChild(titleText);
    articeElement.appendChild(h2);

    const imgElement = document.createElement("img");
    imgElement.setAttribute("src", article.imgSrc);
    imgElement.setAttribute("alt", article.imgAlt);
    articeElement.appendChild(imgElement);

    const p = document.createElement("p");
    titleText = document.createTextNode(article.description);
    p.appendChild(titleText);
    const a = document.createElement("a");
    a.setAttribute("href", "");
    a.setAttribute("class", "textLink");
    linkText = document.createTextNode(" Read More...");
    a.appendChild(linkText);
    p.appendChild(a);
    articeElement.appendChild(p);


}