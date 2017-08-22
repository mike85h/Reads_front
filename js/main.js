const prodURL = 'https://stormy-ocean-79229.herokuapp.com/'
const devURL = 'http://localhost:8080/'

function getAllBooks(){
  $.get(prodURL, function(data){
    $('body').append(
      `<h1>All Books</h1>`
    )
    for(let i = 0; i < data.length; i++){
      $('body').append(
        `<div id=${data[i].title}>
          ${data[i].title}<br>
          ${data[i].genre}<br>
          ${data[i].description}<br>
          ${data[i].coverURL}<br><br>
        </div>`
      )
    }
  })
}

getAllBooks();
