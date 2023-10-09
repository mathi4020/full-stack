
 
setInterval( function r1() {
        var div=document.getElementById("gh");
        var randomColor = Math.floor(Math.random()*16777215).toString(16);
        div.style.backgroundColor = "#"+randomColor;
         },1000);
            