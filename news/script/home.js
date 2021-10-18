
    
    fetch('http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=2af7aae3913f41af8fc5eed65b746932').then((res) => {
        return  res.json();
      })
      .then((res) =>{
          let data = res.articles;
         console.log(data);
         showNew(data);
      });
  
      let parent = document.getElementById('container');
      function showNew(list_news){
          list_news.forEach((news) => {
           let div = document.createElement('div');
           let img = document.createElement('img');
           img.src = news.urlToImage;
           console.log(img.src);
  
           let Title = document.createElement('h5');
           Title.innerText = news.title;
           Title.onclick = () => {
               detail_news(news);
               window.location.href = 'news.html';
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
  function search_news(){
      if ( localStorage.getItem('current_news') === null){
          localStorage.setItem('current_news',JSON.stringify(''));
      }
      let name = document.getElementById('name').value;
       
      let edit = JSON.parse(localStorage.getItem('current_news'));
      edit = name;
      localStorage.setItem('current_news',JSON.stringify(edit));
      window.location.href = 'search.html';
  
  }