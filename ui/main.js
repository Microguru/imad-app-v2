console.log('Loaded!');
//change the text of main text

var button= document.getElementById('counter');

button.onclick =function() {
    
   var request=new XMLhttpRequest();
    
    
    request.onreadystatechange= function(){
        if(request.readyState === XMLHttpRequest.DONE){
             if(request.readystatus===200){
                 var counter =request.responseText;
                 var span =document.getElementById('count');
                 span.innerHtml=counter.toString();
             }
        }
    };
    
  request.open('GET','http://http://microguru.imad.hasura-app.io/counter',true)
  request.send(null);
    
};