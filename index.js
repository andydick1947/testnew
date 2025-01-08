for (let x=1; x<=7; x++){ 
  
  let z=`sidebtn${x}`;
  let y=document.getElementById(z);
  y.addEventListener("click",function(e){  

   if(z=="sidebtn1"){ 
      clean();
      myintro();
   }

   if(z=="sidebtn2"){ 
      clean()
      myloc()
   }

   if(z=="sidebtn3"){ 
      clean()
      mycttee()
   }

   if(z=="sidebtn4"){ 
      clean()
      mymeets()
   }

   if(z=="sidebtn5"){ 
      clean()
      myfees()
   }

   if(z=="sidebtn6"){ 
      clean()
      myres()
   }

   if(z=="sidebtn7"){ 
      clean()
      myarch()
   }
  })
  };

   function clean(){
      const cleanse = document.getElementById("mainsect");
      while (cleanse.hasChildNodes()) {
         cleanse.removeChild(cleanse.firstChild);

   }
}

function myintro(){
      const int='<p id="myintro" class="mytxt">    The Bridge Club was founded around 1996 as the Monday Night Bridge Club, the first Director being Derek Branch. The Club continues to meet in the Llantonian Hall.  The aim of the club is to provide a regular facility for Duplicate Bridge allowing all pairs to play the same boards over the course of the evening. Ideally people attend in pairs although every attempt is made to cater for those without a regular partner.</p>';
      const div=document.createElement("div");
      const mydiv=document.getElementById("mainsect");
      mydiv.appendChild(div);
      div.innerHTML=int;
}

function myloc(){
   const loc='<p id="myloc" class="mytxt">The Llantonian Hall is situated at the far end of the Car Park it shares with the Rugby Club. Access is directly off the roundabout passed the surgery.</p>';
   const div=document.createElement("div");
   const mydiv=document.getElementById("mainsect");
   mydiv.appendChild(div);
   div.innerHTML=loc;

  const loc1='<img id="img2" src="images/lh.jpg"></img>';
   const div1=document.createElement("div");
   const mydiv1=document.getElementById("mainsect");
   mydiv1.appendChild(div1);
   div1.innerHTML=loc1;
}

function mycttee(){
      const cte='<table id="tbl"><tr><th colspan="2">THE COMMITTEE</th></tr><tr><td>Chairman/Director:</td><td>Allan Evans</td></tr><tr><td>Treasurer:</td><td>Andrew Leonard</td><tr><td>Seceratary/Partnership Co-ordinator:</td><td>Meryl Phillips</td></tr><tr><td>Scorer:</td><td>Andy Dick</td></tr></table><br>';
      const div=document.createElement("div");
      const mydiv=document.getElementById("mainsect");
      mydiv.appendChild(div);
      div.innerHTML=cte;

   const cte1='<img id="img3" src="images/chimps.png"></img>';
   const div1=document.createElement("div");
   const mydiv1=document.getElementById("mainsect");
   mydiv1.appendChild(div1);
   div1.innerHTML=cte1;
}

function mymeets(){
   const mts='<p id="meets" class="mytxt">The club meets on Monday evenings at 6.45, with play starting at 7.00 and aiming to finish by 10.00. There are also two party evenings each year</p>';
      const div=document.createElement("div");
      const mydiv=document.getElementById("mainsect");
      mydiv.appendChild(div);
      div.innerHTML=mts;
}

function myfees(){
   const fees='<p id="mycttee" class="mytxt">The Fees are paid annually in January. They have been held steady at £65 for the year 2025. There is no Table charge for members, however, visitors pay £4 for each session.</p>';
      const div=document.createElement("div");
      const mydiv=document.getElementById("mainsect");
      mydiv.appendChild(div);
      div.innerHTML=fees;
}

function myres(){
      const res='<iframe id="frm1" src="res-mnths.html"></iframe>';
      const div=document.createElement("div");
      const mydiv=document.getElementById("mainsect");
      mydiv.appendChild(div);
      div.innerHTML=res;
}

function myarch(){
      const arc='<iframe id="frm1" src="https://andydick1947.github.io/LLArchive/"></iframe>';
      const div=document.createElement("div");
      const mydiv=document.getElementById("mainsect");
      mydiv.appendChild(div);
      div.innerHTML=arc;
}
