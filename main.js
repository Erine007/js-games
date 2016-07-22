var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
c.width = window.innerWidth;
c.height = window.innerHeight*.9;



var bg = document.getElementById('bg');
function animate(){
  if(player.dead){
    //alert("you suck")
    //window.location.href ="http://www.google.com"
    return;
  }
  ctx.drawImage(bg,0, 0 );
  player.update();
  player.render();
  enemy.update();
  enemy.render();
  window.requestAnimationFrame(animate);
}

animate();
ctx.drawImage(bg,0,0, c.width , c.height);
