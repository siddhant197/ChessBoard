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
    const bqMoves = [1,-1,2,-2,3,-3,4,-4,5,-5,6,-6,7,-7,8,-8]; //Since Bishop, Queen can move across board in either of the directions
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
            possibleMovesArray.push(getHorizontalMoves(pos[0], pos[1], xMoves, queenMoves));
            possibleMovesArray.push(getVerticalMoves(pos[0], pos[1], yMoves, queenMoves));
            possibleMovesArray.push(getDiagonalMoves(pos[0], pos[1], xMoves, yMoves, queenMoves));
          break;
        case "Bishop":
            //Get Diagonal Moves since Bishop can only move in this direction
            possibleMovesArray.push(getDiagonalMoves(pos[0], pos[1], xMoves, yMoves, queenMoves));
          break;
        case "Rook":
            //Get Horizontal Moves, Vertical Moves since Rook can move only in these directions
            possibleMovesArray.push(getHorizontalMoves(pos[0], pos[1], xMoves, rqbMoves));
            possibleMovesArray.push(getVerticalMoves(pos[0], pos[1], yMoves, rqbMoves));
          break;
        default:
            console.log("Invalid Input");
            return false;
      }
      console.log(possibleMovesArray.toString());
      return possibleMovesArray.toString();
}

module.exports = possibleMoves;