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

var nameInput =document.getElementById('name');
var name = nameInput.value;
var submit=document.getElementById('submit_btn');
submit.onclick= function(){
    
    
    
    
    
    
    var names= ['name1','name2','name3'];
    var list="";
    for(var i=0;i<names.lenght;i++){
        list +='<li>'+name[i]+'<li>'
;    }
    var ul=document.getElementById('namelist');
    ul.innerHtml= list;
    
};