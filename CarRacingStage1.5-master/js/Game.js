class Game {
  constructor(){
this.move=createButton("Up")
  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
    
    car1 = createSprite(100,200);
    car1.addImage("car1anim",c1)
    car2 = createSprite(300,200);
    car2.addImage("car2anim",c2)
    car3 = createSprite(500,200);
    car3.addImage("car3anim",c3)
    car4 = createSprite(700,200);
    car4.addImage("car4anim",c4)
    
      
    cars = [car1, car2, car3, car4];
    this.move.position(displayWidth-90,500);
    
  }

  play(){
    form.hide();

    Player.getPlayerInfo();
    player.getRank();
    if(allPlayers !== undefined){
      //var display_position = 100;
    background("brown")
    image(trackAnim,0,-displayHeight*4,displayWidth,displayHeight*5)
   
      //index of the array
      var index = 0;

      //x and y position of the cars
      var x = 180;
      var y;
    

      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;

        //position the cars a little away from each other in x direction
        x = x + 250;
        //use data form the database to display the cars in y direction
        textSize(20)
        
        text("Your rank"+player.rank +allPlayers[plr].name,x-15,y+70)
        y = displayHeight - allPlayers[plr].distance;
        cars[index-1].x = x;
        cars[index-1].y = y;

        if (index === player.index){
        fill("yellow")
        ellipse(x,y,70,70)
        
          camera.position.x = displayWidth/2;
          camera.position.y = cars[index-1].y
        }
       
        //textSize(15);
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }

    }
    if(player.distance>4150&&player.distance<4400){
      gameState=2
      player.rank+=1
      Player.updateRank(player.rank)
 
    }

    if(keyIsDown(UP_ARROW) && player.index !== null&&player.distance<4400){
      player.distance +=random(6,10)
      raceS.play()
      player.update();
    }
      this.move.mousePressed(()=>{
        player.distance +=random(6,10)
        raceS.play()
        player.update();
      });
    

    drawSprites();

  }
  end(){
  console.log(player.rank)


  }
}
