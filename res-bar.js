let myRes = ["0","0"]
let wpm=[0,0,0,0,0,0,0,0,0,0,0,0]
let runtot=[0,0,0,0,0,0,0,0,0,0,0,0,0]
const mnth= ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"]
let stdt=0;


const myResults =[
  ["0","0","0"],    /* JAN */   
  ["0","0","1"],    /*  */    
  ["0","0","1"],    /*  */    
  ["0","0","1"],    /*  */
  ["0","0","1"],    /* FEB  */
  ["0","0","1"],    /*  */
  ["0","0","1"],    /*  */
  ["0","0","1"],    /* */
  ["0","0","1"],    /*  MAR */
  ["0","0","1"],    /*  */    
  ["0","0","1"],    /*  */
  ["0","0","1"],    /*  */
  ["0","0","1"],    /*  */
  ["0","0","1"],    /* APR */
  ["0","0","1"],    /*  */
  ["0","0","1"],    /*  */
  ["0","0","1"],    /*  */
  ["0","0","1"],    /* MAY  */    
  ["0","0","1"],    /*  */
  ["0","0","1"],    /*  */ 
  ["0","0","1"],    /* */
  ["0","0","1"],    /* JUN  */
  ["0","0","1"],    /*  */
  ["0","0","1"],    /*  */
  ["0","0","1"],    /* */
  ["0","0","1"],    /*  */
  ["0","0","1"],    /*JUL  */
  ["0","0","1"],    /*  */    
  ["0","0","1"],    /*  */
  ["0","0","1"],    /* */
  ["0","0","1"],    /*AUG   */
  ["0","0","1"],    /*  */
  ["0","0","1"],    /*  */
  ["0","0","1"],    /* */
  ["0","0","1"],    /* SEP  */    
  ["0","0","1"],    /*  */
  ["0","0","1"],    /*  */
  ["0","0","1"],    /*  */
  ["0","0","1"],    /*  */
  ["0","0","1"],    /*OCT */
  ["0","0","1"],    /*  */
  ["0","0","1"],    /*  */
  ["0","0","1"],    /*  */    
  ["0","0","1"],    /* NOV */
  ["0","0","1"],    /* F*/
  ["0","0","1"],    /*  */
  ["0","0","1"],    /*   */
  ["0","0","1"],    /* DEC  */
  ["0","0","1"],    /*  */
  ["0","0","1"],    /*  */
  ["0","0","1"],    /*  */
  ["0","0","1"]     /*  */
  ]
 let kk=`"JAN 6, 2025"`;
st=kk.slice(1,4);

if (st=="JAN"){
  stdt = 1;
}else if (st=="APR"){
stdt=4;
}

for (let zz=0; zz<=51; zz++){
    const d = new Date(kk);
     let a=d.setDate(d.getDate()+(zz*7));
    let e=new Date(a);
    let month = d.getMonth();
    wpm[month]=wpm[month]+1;

    for (let i=0; i<=11; i++){ 
      if(month==i){
      mmm=mnth[i];
      mm=i+1;
      }
    }
       let day = d.getDate();
       dd=day.toString();
       let year = d.getFullYear();
       year = year.toString();
       yy = year.slice(2,4);
       shortDate=`${dd} ${mmm} ${yy}`;
       fileRef=`Ranks ${mm} ${dd} ${yy}.htm`;
      myResults[zz][0]=shortDate;
      myResults[zz][1]=fileRef;
    /*myResults[zz][2]=1;*/   

}

if (stdt==4){
AprilStart();
}
for (pp=1;pp<=12;pp++){
  runtot[0]=1;
  runtot[pp]=runtot[pp-1]+wpm[pp-1];
}

function AprilStart(){
runtot[0]=wpm[0];
runtot[1]=wpm[1];
runtot[2]=wpm[2];
for(let zz=3;zz<=11;zz++){
  wpm[zz-3]=wpm[zz];
}
wpm[9]=runtot[0];
wpm[10]=runtot[1];
wpm[11]=runtot[2];

for(let zz=0;zz<=12;zz++){
  runtot[zz]=0;
}

}
