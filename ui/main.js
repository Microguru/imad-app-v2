console.log('Loaded!');
//change the text of main text

var button= document.getElementById('counter');

button.onclick =function() {
    
   var request=new XMLhttpRequest();
    request.onreadystatechange= function(){
        if(request.readyState === XMLHttpRequest.DONE){
             if(request.readystatus===200){
    var counter=request.responseText;
    var span=document.getElementById('count');
    span.innerHtml =counter.toString();
   
    

         }  
         }
};
request.open('GET','http://microguru.imad.hasura-app.io/submit-name?name=' +name , true);
  request.send(null);
};
//sumit

var submit=document.getElementById('submit_btn');
submit.onclick= function(){
    
     request.onreadystatechange= function(){
        if(request.readyState === XMLHttpRequest.DONE){
             if(request.readystatus===200){
                 var names= request.responseText;
                 names =JSON.parse(names);
    var list="";
    for(var i=0;i<names.lenght;i++){
        list +='<li>'+name[i]+'<li>'
;    }
    var ul=document.getElementById('namelist');
    ul.innerHtml= list;
             }
        }
    };
    var nameInput =document.getElementById('name');
var name = nameInput.value;
      request.open('GET','http://microguru.imad.hasura-app.io/submit-name?name=' +name , true);
  request.send(null);
};