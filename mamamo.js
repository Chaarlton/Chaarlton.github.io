
{
document.getElementById('bt1').onclick = function(){
  document.getElementById('bxx1').className = "open";
}

document.getElementById('sara').onclick = function(){
  document.getElementById('bxx1').className = "games";
}

document.getElementById('bt2').onclick = function(){
  document.getElementById('bxx2').className = 'open';
}
document.getElementById('saraa').onclick = function(){
  document.getElementById('bxx2').className = 'games';
}

document.getElementById('bt3').onclick = function(){
  document.getElementById('bxx3').className = 'open';
}
document.getElementById('saraaa').onclick = function(){
  document.getElementById('bxx3').className = 'games';
}

}

history.scrollRestoration = 'manual';

function myHome(){
  window.scrollTo(0,0)
}
function myInfo(){
  window.scrollTo(0,800)
}
function contMe(){
  window.scrollTo(0,2500)
}
{

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop >= 0 || document.documentElement.scrollTop >= 0) {
    document.getElementById('hma').className = 'actbtn';
    document.getElementById('hmb').className = 'btnsp';
    document.getElementById('hmc').className = 'btnsp';
  } 
 if (document.body.scrollTop >= 800 || document.documentElement.scrollTop >= 800) {
  document.getElementById('hma').className = 'btnsp';
  document.getElementById('hmb').className = 'actbtn';
  document.getElementById('hmc').className = 'btnsp';

  }
  if (document.body.scrollTop >= 1500 || document.documentElement.scrollTop >=1500) {
    document.getElementById('hma').className = 'btnsp';
    document.getElementById('hmb').className = 'btnsp';
    document.getElementById('hmc').className = 'actbtn';
  
    } else {
    
  }
}


}
