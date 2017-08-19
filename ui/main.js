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

var nameInput = document.getElementById('name');
var name = nameInput.value;

var submit = document.getElementById('submit');
submit.onclick = function () {
  //make request to server and send name
  
   //create request
  var request = new XMLHttpRequest();
  
  //capture the respnse and store to variable
  request.onreadystatechange = function() {
    if(request.readyState == XMLHttpRequest.DONE)
    {
        //take some action
    if(request.status == 200)
    {
        //capture list of names and render it in list
        var names = request.responseText;
        names = JSON.parse(names);
      var list = '';
      for (var i=0; i<names.length;  i++)
      {
          list += '<li>' + names[i] + '</li>';
      }
      var ul = document.getElementById('namelist');
      ul.innerHTML = list;
            }
            //not done yet
    }
  };
  
  //make request to counter endpoint
  
  request.open('GET','http://omgore2.imad.hasura-app.io/submit-name?name=' + name, true);
  request.send(null);
  
};