function moveSecHand(){
  let date = new Date();
  let ss = date.getSeconds();
  let m = date.getMinutes();
  let h= date.getHours();
  h = h%12;
  let sAngle = ss*6;
  let mAngle = m*6;
  let hAngle = h*30 + ((m)/2) ;
  document.getElementById("seconds-hand").style.transform =  'rotate('+ (sAngle) +'deg)';
 document.getElementById("minutes-hand").style.transform =  'rotate('+ (mAngle) +'deg)'; 
document.getElementById("hours-hand").style.transform =  'rotate('+ (hAngle) +'deg)';
}

var timr = setInterval(()=>{
  moveSecHand();
}, 1000);