const quote = document.getElementById("text");
const author = document.getElementById("author");
const newQuote = document.getElementById("new-quote"); //Butoon


newQuote.addEventListener("click", getQuote); //Button


function getQuote(){
    $.getJSON('https://api.quotable.io/random', (data) => { //uses jQuery
      console.log(data);
      quote.textContent = data.content;//Access the data & use it for quote id section
      author.innerHTML = ` ${data.author} `; //Access data & use it for author id section
    });
}
