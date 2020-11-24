var playing;
var score;
var trialsLeft;
var step;
var action;
var fruits = ["apple","cherries","grapes","mango","Orange","Peach","pear","Pineapple","watermelon"];
$(function(){
    //click on start reset button
    $("#startreset").click(function(){

        //we are playing
        if(playing == true){
            
            //reload the page
            location.reload;
        }else{

            //we are not playing
            playing = true;//game initiated
            //set score to 0
            score = 0;//set score to 0
            $("#scorevalue").html(score);

            //show trial box
            $("#trialsLeft").show();
            trialsLeft = 3;
            addHearts();

            //hide Game over box
            $("#gameOver").hide();

            //change button text
            $("#startreset").html("Reset Game");

            startAction();

        }
    });

    $("#fruit1").mouseover(function(){
        score++;
        $("#scorevalue").html(score); //update score
        $("#slidesound")[0].play();//play sound

        //stop fruit 
        clearInterval(action);

        //hide the fruit
        $("#fruit1").hide("explode",500);//slice fruit

        //send new fruit
        setTimeout(startAction,1000);
    });


    
      
          
//slice fruit
    //play sound
    //explode fr
    

function addHearts(){
    $("#trialsLeft").empty();
    for(i =0; i < trialsLeft; i++){
        $("#trialsLeft").append('<img src="heart.png" class="life">');
    }
}
function startAction(){
   $("#fruit1").show();
   chooseFruit(); //choose random fruit
   $("#fruit1").css({'left':Math.round(550*Math.random()),'top':-50});
   step = 1 + Math.round(5* Math.random());//change step

   //move fruit down by step every 10ms
   action = setInterval(function(){
       $("#fruit1").css("top",$("#fruit1").position().top + step);//move the fruit by one step

       //check is the fruit is too low
   if($("#fruit1").position().top > $("#fruitContainer").height()){
        
    //check if any trail left
    if( trialsLeft > 1){
        $("#fruit1").show();
        chooseFruit(); //choose random fruit
        $("#fruit1").css({'left':Math.round(550*Math.random()),'top':-50});
        step = 1 + Math.round(5* Math.random());//change step

        //reduce trials by one
        trialsLeft --;

        //populte trialsLegt box
        addHearts();
    }
    else{
        //Game over
        playing = false;//we are not playing anymore
        $("#startreset").html("Start Game");//change button to start game
        $("#gameOver").show();
        $("#gameOver").html("<p> Game Over!</p><p>Your score is "+ score +"</p>");
        $("#trialsLeft").hide();
        stopAction();
    }

}

   },10);

   
}

//generate random fruit
function chooseFruit(){
    $("#fruit1").attr('src', fruits[Math.round(8*Math.random())] +'.png');
}

//stop dropping fruit
function stopAction(){
    clearInterval(action);
    $("#fruit1").hide();
}
});