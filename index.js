
   /*sidepanel*/ 
   function openNav() {
    document.getElementById("mySidepanel").classList.toggle("show_sidepanel");
   
 }
 
 function closeNav() {
   document.getElementById("mySidepanel").classList.toggle("show_sidepanel");
 }


  function toggle(event) {
    let y = document.getElementById("arrow");
    let x = document.getElementById("drop");
    x.classList.toggle("mod2");
    y.classList.toggle("mod2");
  }



window.onload=function(event){
  document.getElementById(0).src="assets/images/layout1.png";
  let text = '{"cellFrequency":[' +
  '{"key":"Frequency Center","value":"+28.000" },' +
  '{"key":"Actual","value":"+42.000" },' +
  '{"key":"Upper","value":"+30.000" },' +
  '{"key":"Lower","value":"+14.000" },' +
  '{"key":"Delta","value":"+16.000" }]}';
  
  obj = JSON.parse(text);
  let ele = document.getElementsByClassName("curveleft")[0].innerHTML;
  let tr = "";
  for(let i=0;i<5;i++){
    tr=tr+"<tr><td><b>"+obj.cellFrequency[i].key+"</b></td><td>"+obj.cellFrequency[i].value+"</td></tr>";
  }
  document.getElementsByClassName("curveleft")[0].innerHTML = ele + tr;
}


  function box(){
     document.getElementById("myModal").classList.toggle("mod1");
  }

  window.onclick = function(event) {
    if(event.target !== document.getElementsByClassName("Createticket")[0]
    &&(event.target !== document.getElementsByClassName("close")[0]))
       {
        document.getElementById("myModal").classList.remove("mod1");
     }

     if(event.target !== document.getElementsByClassName("inside")[0]
     &&(event.target !== document.getElementsByClassName("dropdown")[0])
     &&(event.target !== document.getElementsByClassName("arrow-up")[0]))
        {
         document.getElementById("drop").classList.remove("mod2");
         document.getElementById("arrow").classList.remove("mod2");
      }
     
  }

  function active(index){
    console.log("inside");
    let img = ["layout","pie","ticket","setting"];
    for(let i=0;i<4;i++){
      if(i==index){
        document.getElementById(i).src="assets/images/"+img[i]+"1.png";
        console.log("true");
      }
      else{
        document.getElementById(i).src="assets/images/"+img[i]+".png";
        console.log("false")
      }
    }
  }

 
  function myFunction() {
    let btnText = document.getElementById("myBtn");
    
    document.getElementsByClassName("communication")[5].classList.toggle("more");
    if(btnText.innerHTML==="more"){
      btnText.innerHTML="less";
    }
    else{
      btnText.innerHTML="more";
    }
       
 }
  