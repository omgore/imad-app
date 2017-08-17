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
var button = document.getElementById('counter');
button.onclick = function () {
  //create request
  var request = new XMLHttpRequest();
  
  //capture the respnse and store to variable
  request.onreadystatechange = function() {
    if(request.readyState == XMLHttpRequest.DONE)
    {
        //take some action
        if(request.status == 200)
        {
            var counter = request.responseText;
            var span = document.getElementById('count');
            span.innerHTML = counter.toString();
        }
        //not done yet
    }
  };
  
  //make request to counter endpoint
  
  request.open('GET','http://omgore2.imad.hasura-app.io/counter', true);
  request.send(null);

};