const quote_url = "https://api.quotable.io/random";
// console.log(quote_url);

fetch(quote_url)
    .then((response) => response.json())
    .then((data) => {
        // console.log(data);
        document.getElementById("quote_of_the_day").innerHTML = data.content + " - " + data.author;
    }
);
