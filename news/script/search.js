let i = 1;
let curr = JSON.parse(localStorage.getItem('current_news'));

function search_news(){
    let name = document.getElementById('name').value;
    if ( i == 1){
        name = curr;
    }
    console.log(name);
    fetch(`https://newsapi.org/v2/everything?q=${name}&apiKey=2af7aae3913f41af8fc5eed65b746932`)
    .then((res) => {
       return res.json()
    })
    .then((res) => {
     let data = res;
    console.log(data);
    showNew(data.articles)
    })
    i++;
    
}
if ( i == 1){
    search_news();
}


let parent = document.getElementById('container');
function showNew(list_news){
    parent.innerHTML = null;
    list_news.forEach((news) => {
     let div = document.createElement('div');
     let img = document.createElement('img');
     img.src = news.urlToImage;
     console.log(img.src);

     let Title = document.createElement('h5');
     Title.innerText = news.title;
     Title.onclick = () => {
        window.location.href = 'news.html';
         detail_news(news);
     }
     div.append(img,Title);
     parent.append(div);

    })
}

if (localStorage.getItem('news') === null){
  localStorage.setItem('news',JSON.stringify([]));
}
// console.log(localStorage.getItem('news'));

function detail_news(d){
  let edit  = JSON.parse(localStorage.getItem('news'))
  if ( edit.length > 0){
      edit.pop();
  }
  edit.push(d);
  localStorage.setItem('news',JSON.stringify(edit));
  

}

let icon = document.getElementById('home-icons');
icon.addEventListener('click',() => {
  window.location.href = 'home.html';
});