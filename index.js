
//Function to check all possible moves piece can move from it's current position
//Parameters Accepted is one of the Pieces from (King, Queen, Bishop, Horse, Rook, Pawn)
//And It's Current position which from range A1,A2,A3,A4,A5,A6,A7,A8, similarly for B1...B8, C1...C8, D1...D8,
//E1...E8, F1...F8, G1...G8, H1...H8

function possibleMoves(piece, pos){
    //Two Arrays to handle Horizontal moves & Vertical Moves
    const xMoves = ['A','B','C','D','E','F','G','H'];
    const yMoves = ['1','2','3','4','5','6','7','8'];
    const validPiece = ['King','Queen','Bishop','Horse', 'Rook', 'Pawn'];

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
          break;
        case "Queen":
          break;
        default:
            console.log("Invalid Input");
            return false;
      } 
}

module.exports = possibleMoves;