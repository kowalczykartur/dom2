
var listElem = document.getElementById('list');
var buttonElem = document.getElementById('addElem');
buttonElem.addEventListener('click', function(e) {
  var element = document.createElement('li');
    var number = document.getElementsByTagName('li').length;
    element.innerHTML = 'item '+ number;
    list.appendChild(element);
    number ++;
    
});
