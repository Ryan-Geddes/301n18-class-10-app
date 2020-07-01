'use strict';

function renderThings(list) {
  const template = $('#thingsToDoTemplate').html();
  const container = $('#things');
  list.forEach(item => {
    let newItemHTML = Mustache.render(template, item);
    container.append(newItemHTML);
  });
}

function showThingsToDo() {
  
  let things = [];
  let source = 'http://localhost:3000/todo';
  $.ajax(source)
    .then(data =>{
      data.forEach(item =>{
        things.push(item);
      });      
      renderThings(things);
    });
  
}

$(document).ready(function () {
  showThingsToDo();
});
