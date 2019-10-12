 var numsquares=6;
 var colors=randomgenerated(numsquares);
 var squares=document.querySelectorAll(".square");
 var displaymessage=document.getElementById("displaymessage");
 var h1=document.querySelector("h1");
 for( var i=0;i<squares.length;i++){
     squares[i].style.backgroundColor=colors[i];
     squares[i].addEventListener("click",function(){
         var clickedcolor=this.style.backgroundColor;
         if(selectedcolor===clickedcolor){
             displaymessage.textContent="CORRECT"
             changecolor(selectedcolor);
             h1.style.backgroundColor=selectedcolor;
             reset.textContent="PLAY AGAIN?"
         }
         else{
             this.style.backgroundColor="#232323";
             displaymessage.textContent="WRONG";
         }
     });
 }
 
 var displaycolor=document.getElementById("display");
 var selectedcolor=pickcolor();
 displaycolor.textContent=selectedcolor;
 function changecolor(color){
     for(var i=0; i<squares.length;i++){
         squares[i].style.backgroundColor=color;
     }
 }
 function pickcolor(){
     var random=Math.floor(Math.random()*colors.length);
     return colors[random];
 }
 function randomnumber(){
     var r=Math.floor(Math.random()*256);
     var g=Math.floor(Math.random()*256);
     var b=Math.floor(Math.random()*256);
     return "rgb(" + r +", " + g +", " + b + ")";
 }
 function randomgenerated(num){
     var arr=[];
     for(var i=0; i<num;i++){
         arr.push(randomnumber());
     }
     return arr;
 }
 var reset=document.querySelector("#reset");
 reset.addEventListener("click",function(){
     colors=randomgenerated(numsquares);
     selectedcolor=pickcolor();
     for(var i=0;i<squares.length;i++){
         squares[i].style.backgroundColor=colors[i];
     }
     displaycolor.textContent=selectedcolor;
     h1.style.backgroundColor="steelblue";
     displaymessage.textContent=" "
 });
 var easy=document.querySelector("#easy");
 var hard=document.querySelector("#hard");
 easy.addEventListener("click",function(){
     easy.classList.add("selected");
     hard.classList.remove("selected");
     colors=randomgenerated(numsquares);
     selectedcolor=pickcolor();
     numsquares=3;
     displaycolor.textContent=selectedcolor;
     for(var i=0; i<squares.length;i++){
         if(colors[i]){
             squares[i].style.backgroundColor=colors[i];
         }
         else{
             squares[i].style.display="none";
         }
     }
 });
 hard.addEventListener("click",function(){
     easy.classList.remove("selected");
     hard.classList.add("selected");
     colors=randomgenerated(numsquares);
     selectedcolor=pickcolor();
     numsquares=6;
     displaycolor.textContent=selectedcolor;
     for(var i=0;i<squares.length;i++){
         squares[i].style.backgroundColor=colors[i];
         squares[i].style.display="block";
     }
 });