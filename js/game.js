class Game {
    constructor(){

    }
    play(){
      form.hide()
      textSize(20)
      text("Game Start",200,200)
      player.getPlayerInfo()
      if(allplayers !== undefined){
        var player_position = 130
        for (var i in allplayers){
          if (i=== "player" + player.index){
            fill("red")
          }
          else{
            fill("black")
          }
          player_position=player_position+20
          textSize(15)
          text(allplayers[i].name + "" + allplayers[i].distance,120,player_position)
        }
      }
      if(keyIsDown("up")&& player.index!== null){
        player.distance+=50
        player.update()
      }
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
  
    start(){
      if(gameState === 0){
        player = new Player();
        player.getCount();
        form = new Form()
        form.display();
      }
    }
  }

















