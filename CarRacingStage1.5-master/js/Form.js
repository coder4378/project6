class Form {

  constructor() {
    this.input = createInput("");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.reset=createButton('replay')
    this.getName=createElement("h2")
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
    this.getName.hide();
  }

  display(){
    background(BG)
    this.title.html("Car Racing Game");
    this.title.position(displayWidth/2 - 50, 0);
    this.getName.html("what is your name")
    this.getName.position(displayWidth/2,250)
    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    this.button.position(displayWidth/2 + 30, displayHeight/2);
    this.reset.position(displayWidth-90,15);
    
    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      this.getName.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " +"\n"+ player.name+"\n"+"waiting for other player to join")
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);
    });
this.reset.mousePressed(()=>{
player.updateCount(0)
game.update(0)
Player.updateRank(0)
}
);
  }
}
