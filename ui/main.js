console.log('Loaded!');

var element = document.getElementById('main-text');
element.innerHTML = 'New value';

//move image madi
var img = document.getElementById('madi');
img.onClick =  function () {
  img.style.marginLeft = '100 px';  
};