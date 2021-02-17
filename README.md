# ChessBoard
Empty ChessBoard to Accept Piece and it's Position as parameter and calculate all possible moves for the same.

# Valid Parameters
Piece - King, Queen, Bishop, Rook, Pawn, Horse
Position - one from range A1,A2,A3,A4,A5,A6,A7,A8, similarly for B1...B8, C1...C8, D1...D8,E1...E8, F1...F8, G1...G8, H1...H8

# Unit Testing using jest
Install Jest using command "npm install --save-dev jest"
Run Test cases using command "jest ." in the same directory the index.js and test.js are in

# Test Cases Coverage
1. Test cases cover below negative scenario 
    Invalid Piece
    Invalid Pos - 0 and 1
    input given doesn't have space
    pos is only 1 char or more than 2 char
    out of boundary value from board

2. Test cases cover scenarios for below
    For Each piece - King, Queen, Bishop, Rook, Pawn, Horse
    For Different Positions - such as Centre, Corner, Boundary line Middle, Random


