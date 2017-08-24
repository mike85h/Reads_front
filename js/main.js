const prodURL = 'https://stormy-ocean-79229.herokuapp.com/'
const devURL = 'http://localhost:8080/'

$(document).ready(function(){
    $('#showAllBooks').bind("click", getAllBooks);
    $('#showAllAuthors').bind("click", getAllAuthors)
});

// $('#showAllBooks').on('click', getAllBooks());
// $('#showAllAuthors').on('click', getAllAuthors());


function getAllBooks(){
  $('#mainSection').empty();
  $.get(prodURL + 'books/', function(data){
    for(let i = 0; i < data.length; i++){
      $('#mainSection').append(
        `<div class="book" id=${data[i].id}>
          <img class="bookCover" src="${data[i].coverURL}" alt="Book Cover Photo" height="200" width="100">
          ${data[i].title}<br>
          ${data[i].genre}<br>
          ${data[i].description}<br><br>
        </div>`
      )
    }
  })
}

function getAllAuthors(){
  $('#mainSection').empty();
  $.get(prodURL + 'authors/', function(data){
    for(let i = 0; i < data.length; i++){
      $('#mainSection').append(
        `<div class="author" id=${data[i].id}>
          <img class="author" src="${data[i].portraitURL}" alt="Author Portrait" height="200" width="100">
          ${data[i].fname} ${data[i].lname}<br>
          ${data[i].bio}<br><br>
        </div>`
      )
    }
  })
}
