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

// textnode
function check(){
        value=document.getElementById("myinput").value;
        element=document.createElement("p");
        text=document.createTextNode(value);
        element.appendChild(text);
        div=document.getElementById("mydiv");
        mydiv.appendChild(element);
    }

// chat
function sendsms(){
        value1=document.getElementById("input1").value;
        value2=document.getElementById("input2").value;
        element=document.createElement("li");

        if(value1 !=""){
            text1=document.createTextNode(value1);
            element.appendChild(text1);
            mydiv=document.getElementById("div2");
            mydiv.appendChild(element);
            element.style.color="red";
            document.getElementById("input1").value="";
        }else if (value2 !=""){
            text2=document.createTextNode(value2);
            element.appendChild(text2);
            mydiv=document.getElementById("div2");
            mydiv.appendChild(element);
            element.style.color="blue";
            document.getElementById("input2").value="";
        }
}

function send(i){
    x=document.getElementById("i1");
    switch(i){
    case 0: x.value+=0; break;
    case 1: x.value+=1;break;
    case 2: x.value+=2;break;
    case 3: x.value+=3;break;
    case 4: x.value+=4;break;
    case 5: x.value+=5;break;
    case 6: x.value+=6;break;
    case 7: x.value+=7;break;
    case 8: x.value+=8;break;
    case 9: x.value+=9;break;


    case '+':x.value+='+';break;
    case '-':x.value+='-';break;
    case '*':x.value+='*';break;
    case '/':x.value+='/';break;
    case '.':x.value+='.';break;
    case 'AC':x.value=' ';break;

    case 'log':result=eval(Math.log10(x.value));x.value=result;
    break;
    case '√': result=eval(Math.sqrt(x.value));x.value=result;
    break;
    case '1/x': result=eval(1/x.value);
    x.value=result;
    break;
    case '=':result=eval(x.value);
    x.value=result;break;
    


    }
}

  x=["img/1.jpg","img/2.jpg","img/3.jpg"];
  slide=document.getElementById("m1");
  count=-1;
  function forward(){
    count=count+1; //count=0
    {
        if(count==x.length) //0,1,2,3
        {
            count=0;
        }
        slide.src=x[count];
    }
    console.log(count);
  }

  function backward()
  {
    count=count-1; //count=0
    if(count<=x.length)// 0,1,2,3
    {
        if(count==-1 || count==-2)
        {
            count=2;
        }
        slide.src=x[count];//2,1,0
    }
    console.log(count)
  }

//   refresh,reload
function Refresh()
  {
    // time=document.getElementById("i1").value;
    // time=parseInt(time);
    time=3;
    setTimeout("location.reload(true)",time*1000);
    if(setTimeout("location.assign('https://www.google.com/search?q=sunday+disturbers&rlz=1C1GGRV_enIN1053IN1053&oq=sunday+dis&gs_lcrp=EgZjaHJvb')",time*1000))
    {
        document.getElementById("h2").
        style.color="white";
        document.getElementsById("b1").style.backgroundColor="yellow"
    }
}
        setInterval(Refresh,3000);
