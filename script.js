// alert("Hello, Welcome to JS")
function check(){
    box=document.getElementById("from").value;
    document.getElementById("to").innerHTML=box;
}
function submit(){
    box=document.getElementsByTagName("input");
    data=document.getElementsByTagName("p");
    data[0].innerHTML=box[0].value;
    data[1].innerHTML=box[1].value;
    data[2].innerHTML=box[2].value;
    
    // for (i=0; i<box.length;i++){
    // data[i].innerHTML=box[i].value;
    //     }
    }

function sub(){
    area=document.getElementById("mydiv");
    box=area.getElementsByTagName("input");
    data=document.getElementsByTagName("p");

    for (i=0;i<box.length;i++){
        data[i].innerHTML=box[i].value;
    }
}


function sub1(){
   area=document.getElementById("area");
   box=area.getElementsByTagName("input");
   data=document.getElementsByTagName("p");
            for(i=0;i<box.length;i++){
                data[i].innerHTML=box[i].value;
                // data[i].style.color="yellow";
                data[i].className="myarea";
            }
}

// Date and Time
          
  function changecolor(){
    date=new Date();
    hour=date.getHours();
    minute=date.getMinutes();
    seconds=date.getSeconds();
    timing=date.toLocaleTimeString();
    x=document.getElementById("para");
    x.innerHTML= timing;
        if(seconds%2==0){
            x.style.color="red";
        }else{
            x.style.color="blue";
        }
    }
    function start(){
    clear=setInterval(changecolor,1000);  
 }
   function stop(){
    clearInterval(clear);
   }