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
	}
]


let bookList = document.getElementById("bookList");

for (article in articles){
    const liElement = document.createElement("li");
    liElement.setAttribute("class", "article")
    liElement.style.listStyleType = "none";
    const articleDetails = document.createElement("summary");
    const articeElement = document.createElement("article");

    const ul = document.createElement("ul");
    ul.setAttribute("class", "articleDetails")
    articleDetailsSection(ul);
    articleDetails.appendChild(ul);
    liElement.appendChild(articleDetails);
    articleSection(articeElement);
    liElement.appendChild(articeElement);
    bookList.appendChild(liElement);
}



function articleDetailsSection(ul){

    //console.log(articles[article]);

    for(i=0;i<=4;i++){
    const li = document.createElement("li");
    let text;
    if(i==0){
        const timeElement = document.createElement("time");
        const timeInfo = document.createTextNode(articles[article].date);
        timeElement.appendChild(timeInfo);
        li.appendChild(timeElement);
        ul.appendChild(li);
    } else if(i==1){
        text = document.createTextNode(articles[article].ages);
        li.appendChild(text);
        ul.appendChild(li);
    } else if(i==2){
        text = document.createTextNode(articles[article].genre);
        li.appendChild(text);
        ul.appendChild(li);
    } else if(i==3){
        text = document.createTextNode(articles[article].stars);
        li.appendChild(text);
        ul.appendChild(li);
    }
    
    
    }
}

function articleSection(articeElement){
    const h2 = document.createElement("h2");
    titleText = document.createTextNode(articles[article].title);
    h2.appendChild(titleText);
    articeElement.appendChild(h2);

    const imgElement = document.createElement("img");
    imgElement.setAttribute("src", articles[article].imgSrc);
    imgElement.setAttribute("alt", articles[article].imgAlt);
    articeElement.appendChild(imgElement);

    const p = document.createElement("p");
    titleText = document.createTextNode(articles[article].description);
    p.appendChild(titleText);
    const a = document.createElement("a");
    a.setAttribute("href", "");
    a.setAttribute("class", "textLink");
    linkText = document.createTextNode(" Read More...");
    a.appendChild(linkText);
    p.appendChild(a);
    articeElement.appendChild(p);


}