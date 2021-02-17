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
    const queenMoves = [1,-1,2,-2,3,-3,4,-4,5,-5,6,-6,7,-7,8,-8]; //Since Queen can move across board in either of the directions
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
        case "King":
            //Get Horizontal Moves
            possibleMovesArray.push(getHorizontalMoves(pos[0], pos[1], xMoves, kingMoves));
          break;
        case "Queen":
            //Get Horizontal Moves
            possibleMovesArray.push(getHorizontalMoves(pos[0], pos[1], xMoves, queenMoves));
          break;
        default:
            console.log("Invalid Input");
            return false;
      } 
}

module.exports = possibleMoves;