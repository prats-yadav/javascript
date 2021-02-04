var webseries = [{
    "title": "Breaking Bad",
    "director": "Vince Gilligan",
    "star": "Bryan Cranston",
    "streamingOn":"Netflix"
},
{
    "title": "Game of Thrones",
    "director": "David Benioff",
    "star": "Emilia Clarke",
    "streamingOn":"Netflix"
},
{
    "title": "Mirzapur",
    "director": "Puneet Krishna",
    "star": "Pankaj Tripathi",
    "streamingOn":"AmazonPrime"
},
{
    "title": "The Boys",
    "director": "Eric Kripke",
    "star": "Karl Urban",
    "streamingOn":"AmazonPrime"
},
{
    "title": "Daredevil",
    "director": "Drew Goddard",
    "star": "Charlie Cox",
    "streamingOn":"Netflix"
},
{
    "title": "The Walking Dead",
    "director": "Frank Darabont",
    "star": "Andrew Lincoln",
    "streamingOn":"AMC"
}
];

let cardContainer;

let createTaskCard = (task) => {

let card = document.createElement('div');
card.className = 'card shadow cursor-pointer';

let cardBody = document.createElement('div');
cardBody.className = 'card';

let title = document.createElement('h3');
title.innerText = task.title;
title.className = 'card-title';

let director = document.createElement('div');
director.innerText = task.director;
director.className = 'card-director';

let star = document.createElement('div');
star.innerText = task.star;
star.className = 'card-star';

let streamingOn = document.createElement('div');
streamingOn.innerText = task.streamingOn;
streamingOn.className = 'card-streamingOn';
 
cardBody.appendChild(title);
cardBody.appendChild(director);
cardBody.appendChild(star);
cardBody.appendChild(streamingOn);
card.appendChild(cardBody);
cardContainer.appendChild(card);

}

let initListOfTasks = () => {
    if (cardContainer) {
      document.getElementById('card-container').replaceWith(cardContainer);
      return;
    }

cardContainer = document.getElementById('card-container');
webseries.forEach((task) => {
    createTaskCard(task);
});
};

initListOfTasks();