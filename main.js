var   isInGame=false;

// 1 => player O
// 2 => player X

var playerXscore=0;
var playerOscore=0;
 var currentplayer=1;
  
 var img =["xo-o-blue-line-circle-alphabet-letter-logo-icon-template-vecto-creative-company-vector-design-95768527.webp",
 "images (1).jpg" 
 ,"rungkhun170900370.jpg"];

 var boardcode =[0,0,0,0,0,0,0,0,0];

var statusvalues =["Waiting to start new game",
playerturn,
winnerplayer,
"Game ended in a draw"];

// 0 => for waiting to start game
// 1 => for game in progress
// 2 => for game end with a winner
// 3 => for game end with draw

function playerturn(){
 return   "It is " + (currentplayer==1 ? "O" : "X") + "Turn";
}

function winnerplayer()
{
 return "player " + (currentplayer==1 ? "O" : "X") + " Has Win";
}

 var board = document.getElementById("board");
 console.log(board.childen);

 var statusparg =document.getElementById("status");

 var playerXscorescreen = document.getElementById("playerXscore");
var playerOscorescrean = document.getElementById("playerOscore");


function playermove(e){
    console.log("clicked",e.target);
    var cellindex = e.target.getAttribute ("index");
    
    if(isInGame){
        if(boardcode[cellindex]== 0 ){

            boardcode [cellindex]=currentplayer;
            e.target.src = img [currentplayer];
    
    }

        // check winner
if(iswinner()){
    isInGame=false;

statusparg.innerText=statusvalues[2]();
if(currentplayer==1){
    playerOscorescrean.innerText=++playerOscore;
}else{
    playerXscorescreen.innerText=++playerXscore;
}
}


      // check draw
else if(isdraw()){
    isInGame =false;
    statusparg.innerText=statusvalues[3];
}


      // next turn
else{

    console.log(boardcode);

    currentplayer = currentplayer == 1 ? 2 : 1;

    statusparg.innerText = statusvalues[1]();
}


  // if game is ended
    }else{
        statusparg.innerText=statusvalues[0];

    }}

var winningconditions = [
    //condition row
[0,1,2],[3,4,5] ,[6,7,8] ,
    //condition cols
 [0,3,6] , [1,4,7] , [2,5,8] ,
     //condition cross axies
  [0,4,8] , [2,4,8]];


function iswinner(){
    for(var i=0; i<winningconditions.length;i++){
        var currrentcondition =winningconditions[i];
        
            var index1 = currrentcondition[0];
            var index2 = currrentcondition[1];
            var index3 = currrentcondition[2];
            if ( boardcode[index1]===boardcode[index2]&&boardcode[index2]
                ===boardcode[index3]
        &&boardcode[index2] !=0
            ){
             return true;   
            }
        }
        return false ;
}


function isdraw(){
    for (var i = 0; i <boardcode.length; i++) {
        if (boardcode[i] == 0) 
        return false;
      }
      return true;
}

function newgame(){
    isInGame =true;

    statusparg.innerText=statusvalues[1]();
    boardcode =[0,0,0,0,0,0,0,0,0]; 
for(var i=0; i<board.children.length;i++){
    board.children[i].children[0].src=img[0];
}
   // statusparg.innerText=  " It is" + (currentplayer==1 ? "O" :  "X"  )+ "turn" ;
}

for (let i = 0; i < board.children.length; i++) {
    board.children[i].addEventListener("click", playermove);
}
