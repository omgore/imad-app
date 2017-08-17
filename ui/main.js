console.log('Loaded!');

// var element = document.getElementById('main-text');
// element.innerHTML = 'New value';

// //move image madi
// var img = document.getElementById('madi');
// img.onclick =  function () {
//     console.log('in on click funtion of image madi');
//     img.style.marginLeft = '100 px';  
// };


//counter code
var counter = 0;
var button = document.getElementById('counter');
button.onclick = function () {
  //make request to counter endpoint
  
  //capture the respnse and store to variable
  
  //render the variable to span
  
  counter = counter + 1;
  var span = document.getElementById('count');
  span.innerHTML = counter.toString();
};