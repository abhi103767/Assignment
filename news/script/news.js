let news = JSON.parse(localStorage.getItem('news'));
news = news[0];
console.log(news);
let parent = document.getElementById('container');
show_news(news);
function show_news(news){
let div = document.createElement('div');
let onediv = document.createElement('div');
    let img = document.createElement('img');

    img.src = news.urlToImage;
    console.log(img.src);

    let Title = document.createElement('h2');
    Title.innerText = news.title;

    let des = document.createElement('p');
    des.innerText = news.description;
   onediv.append(Title,des);
   onediv.padding = '20px';
    div.append(img,onediv);
    parent.append(div);
}

let icon = document.getElementById('home-icons');
icon.addEventListener('click',() => {
 window.location.href = 'home.html';
});