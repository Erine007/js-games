var player={
    x : 0,
    y: 100,
    velX : 0,
    velY : 0,
    sprite : [document.getElementById("playerf1"),
               document.getElementById("playerf2"),
               document.getElementById("playerf3"),
               document.getElementById("playerf4"),
               document.getElementById("playerf5"),
               document.getElementById("playerf6"),
               document.getElementById("playerf7"),
               document.getElementById("playerf8"),
               document.getElementById("playerf9"),
               document.getElementById("playerf10"),
               document.getElementById("playerf11"),
               document.getElementById("playerf12"),
               document.getElementById("enemy"),
  ],
  ticks: 0,
  spriteNum:0,
  dir: "left",



  update: function(){
    this.ticks++;
  this.x =this.x + this.velX;
  this.y =this.y + this.velY;
  if (this.velX != 0 || this.velY !=0)
  if (this.ticks % 10 === 0)
    this.spriteNum = this.spriteNum +1;
  if (this.spriteNum > 10) this.spriteNum =0;

  },
  render: function(){
    //ctx.fillRect(this.x,this.y,300,85);
    if (this.dir == "right")
    ctx.restore();
    ctx.drawImage(this.sprite[this.spriteNum], this.x, this.y, 50 ,50);
    }
  }

function flipCtx(ctx){
  ctx.save();
  ctx.translate(player.x = 50);
  ctx.scale(-1,1);
  ctx.translate(-player.x-50,0);

}
function restoreCtx(){
  ctx.restore();

}
