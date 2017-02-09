console.log('Loaded!');

var button= document.getElementById('counter');
var counter=3;

button.onclick =function() {
    
    
//
counter =counter+1;
var span = document.getElementById('count');
span.innerHtml =counter.toString();
    
    
};
alert('check');

