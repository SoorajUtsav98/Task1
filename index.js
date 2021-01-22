
function openNav() {
    document.getElementById("sidenav").style.width = "250px";
   /* document.getElementById("mainparent").style.marginLeft = "250px";*/
    
  }
  function closeNav() {
    document.getElementById("sidenav").style.width = "0";
    // document.getElementById("main").style.marginLeft = "0";
  }

  function toggle() {
    
    var x = document.getElementsByClassName("dropdown")[0];
    console.log(x.style.display);
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  window.onclick = function(event) {
    if(!document.getElementsByClassName('inside')[0].contains(event.target)&& !(document.getElementsByClassName("dropdown")[0].style.display!="none"&&document.getElementsByClassName('dropdown')[0].contains(event.target))) {
        document.getElementsByClassName("dropdown")[0].style.display="none";
    }
  }
window.onload=function(event){
  var text = '{"cellFrequency":[' +
  '{"key":"Frequency Center","value":"+28.000" },' +
  '{"key":"Actual","value":"+42.000" },' +
  '{"key":"Upper","value":"+30.000" },' +
  '{"key":"Lower","value":"+14.000" },' +
  '{"key":"Delta","value":"+16.000" }]}';
  
  obj = JSON.parse(text);
  var ele = document.getElementsByClassName("curveleft")[0].innerHTML;
  var tr = "";
  for(var i=0;i<5;i++){
    tr=tr+"<tr><td><b>"+obj.cellFrequency[i].key+"</b></td><td>"+obj.cellFrequency[i].value+"</td></tr>";
  }
  document.getElementsByClassName("curveleft")[0].innerHTML = ele + tr;
}
  function box(){
    var modal = document.getElementById("myModal");
    modal.style.display = "block";


  }
  function closebox(){
    var modal = document.getElementById("myModal");
    modal.style.display = "none";


  }
  

  function active(index){
    console.log("inside");
    for(var i=0;i<4;i++){
      if(i==index){
        document.getElementById(i).style.width="35px";
        document.getElementById(i).style.height="35px";
        console.log("true");
      }
      else{
        document.getElementById(i).style.width="28px";
        document.getElementById(i).style.height="28px";
        console.log("false")
      }
    }
  }

  function closeModal() {
    document.getElementsByClassName("modal")[0].style.display="none";
    // document.getElementById("main").style.marginLeft = "0";
  }

  function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "less";
      moreText.style.display = "inline";
    }
  }