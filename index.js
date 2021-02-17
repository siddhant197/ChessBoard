//Function to get all the possible Horizontal Moves a Piece can Move
function getHorizontalMoves(x, y, xMoves, pieceMoves){
    const xMovesArray = [];
    for(let num of pieceMoves){
        //Checking if the possible move is not out of bounds of board
        if((xMoves.indexOf(x)+num >= 0) && (xMoves.indexOf(x)+num <=7)){
            xMovesArray.push(xMoves[xMoves.indexOf(x)+num]+y);
        }
    }
    return xMovesArray.toString();
}

//Function to get all the possible Vertical Moves a Piece can Move
function getVerticalMoves(x, y, yMoves, pieceMoves){
    const yMovesArray = [];
    for(let num of pieceMoves){
        //Checking if the possible move is not out of bounds of board
        if((yMoves.indexOf(y)+num >= 0) && (yMoves.indexOf(y)+num <=7)){
            yMovesArray.push(x+yMoves[yMoves.indexOf(y)+num]);
        }
    }
    return yMovesArray.toString();
}

//Function to get all the possible Diagonal Moves a Piece can Move
function getDiagonalMoves(x, y, xMoves, yMoves, pieceMoves){
    const xyMovesArray = [];
    for(var numx of pieceMoves){
        //Checking if the possible move is not out of bounds of board
        if((xMoves.indexOf(x)+numx >= 0) && (xMoves.indexOf(x)+numx <=7)){
            let xAlpha = xMoves[xMoves.indexOf(x)+numx];
            for(let num of [numx,(-1)*numx]){
                //Checking if the possible move is not out of bounds of board
                if((yMoves.indexOf(y)+num >= 0) && (yMoves.indexOf(y)+num <=7)){
                    xyMovesArray.push(xAlpha+yMoves[yMoves.indexOf(y)+num]);
                }
            }
        }
    }
    return xyMovesArray.toString();
}


//Seperate Function to check all possible moves a horse can make since it can move 2.5 steps
function getHorseMoves(x, y, xMoves, yMoves){
    const moveComplete = [];
    for(let moves of [1, -1]){
        if((xMoves.indexOf(x)+moves >= 0) && (xMoves.indexOf(x)+moves <= 7)){
            var moveAlpha = xMoves[xMoves.indexOf(x)+moves];
        }
        if((xMoves.indexOf(x)+(moves*2) >= 0) && (xMoves.indexOf(x)+(moves*2) <= 7)){
            var moveSecond = xMoves[xMoves.indexOf(x)+(moves*2)];
        }
        for(let moreMoves of [moves*1, moves*(-1)]){
            let doubleMoves = moreMoves*2;
            if(moveSecond!=undefined && (yMoves.indexOf(y)+moreMoves >= 0) && (yMoves.indexOf(y)+moreMoves <= 7)){
                if(!moveComplete.includes(moveSecond+yMoves[yMoves.indexOf(y)+moreMoves])){
                    moveComplete.push(moveSecond+yMoves[yMoves.indexOf(y)+moreMoves]);
                }
            }
            if(moveAlpha!=undefined && (yMoves.indexOf(y)+doubleMoves >= 0) && (yMoves.indexOf(y)+doubleMoves <= 7)){
                if(!moveComplete.includes(moveAlpha+yMoves[yMoves.indexOf(y)+doubleMoves])){
                    moveComplete.push(moveAlpha+yMoves[yMoves.indexOf(y)+doubleMoves]);
                }
            }
        }
    }
    return moveComplete;
}

//Function to check all possible moves piece can move from it's current position
//Parameters Accepted is one of the Pieces from (King, Queen, Bishop, Horse, Rook, Pawn)
//And It's Current position which from range A1,A2,A3,A4,A5,A6,A7,A8, similarly for B1...B8, C1...C8, D1...D8,
//E1...E8, F1...F8, G1...G8, H1...H8

function possibleMoves(piece, pos){
    //Two Arrays to handle Horizontal moves & Vertical Moves
    const xMoves = ['A','B','C','D','E','F','G','H'];
    const yMoves = ['1','2','3','4','5','6','7','8'];
    const validPiece = ['King','Queen','Bishop','Horse', 'Rook', 'Pawn'];
    const kingMoves = [1, -1]; //Since King can only move +1 or -1 in either of the directions
    const rqbMoves = [1,-1,2,-2,3,-3,4,-4,5,-5,6,-6,7,-7,8,-8]; //Since Bishop, Queen can move across board in either of the directions
    const pawnMoves = [1];
    const possibleMovesArray = []; //Array to store all the possible moves a piece can move

    //Checking if the input given are either of valid pieces
    if(validPiece.indexOf(piece) < 0){
        console.log("Invalid Input");
        return false;
    }

    //Checking if the input given are either of valid position
    if(!piece || pos.length!=2 || !xMoves.includes(pos[0]) || !yMoves.includes(pos[1])){
        console.log("Invalid Input");
        return false;
    }

    //Switch case to validate between Pieces
    switch(piece) {
        //Get Moves for King
        case "King":
            //Get Horizontal, Vertical and Diagonal Moves
            possibleMovesArray.push(getHorizontalMoves(pos[0], pos[1], xMoves, kingMoves));
            possibleMovesArray.push(getVerticalMoves(pos[0], pos[1], yMoves, kingMoves));
            possibleMovesArray.push(getDiagonalMoves(pos[0], pos[1], xMoves, yMoves, kingMoves));
          break;
        //Get Moves for Queen
        case "Queen":
            //Get Horizontal Moves, Vertical and Diagonal Moves
            possibleMovesArray.push(getHorizontalMoves(pos[0], pos[1], xMoves, rqbMoves));
            possibleMovesArray.push(getVerticalMoves(pos[0], pos[1], yMoves, rqbMoves));
            possibleMovesArray.push(getDiagonalMoves(pos[0], pos[1], xMoves, yMoves, rqbMoves));
          break;
        //Get Moves for Bishop
        case "Bishop":
            //Get Diagonal Moves since Bishop can only move in this direction
            possibleMovesArray.push(getDiagonalMoves(pos[0], pos[1], xMoves, yMoves, rqbMoves));
          break;
        //Get Moves for Rook
        case "Rook":
            //Get Horizontal Moves, Vertical Moves since Rook can move only in these directions
            possibleMovesArray.push(getHorizontalMoves(pos[0], pos[1], xMoves, rqbMoves));
            possibleMovesArray.push(getVerticalMoves(pos[0], pos[1], yMoves, rqbMoves));
          break;
        //Get Moves for Pawn
        case "Pawn":
            //Get Horizontal Moves, Pawn can move only in only one direction and we are assuming that board is empty so no diagonal move
            possibleMovesArray.push(getVerticalMoves(pos[0], pos[1], yMoves, pawnMoves));
          break;
        case "Horse":
            //Get possible moves for Horse since it can move 2.5 steps
            possibleMovesArray.push(getHorseMoves(pos[0], pos[1], xMoves, yMoves));
          break;
        default:
            console.log("Invalid Input");
            return false;
      }
      if(possibleMovesArray.length>0 && possibleMovesArray.toString()!=""){
          console.log(possibleMovesArray.toString());
          return possibleMovesArray.toString();
        }else{
          console.log("No Possible Move");
          return false;
        }
}

module.exports = possibleMoves;