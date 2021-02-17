const possibleMoves = require('./index');

test('chess possibleMoves function is defined', () => {
  expect(possibleMoves).toBeDefined();
});

test('Calling possibleMoves with no valid parameters to return false', () => {
    var returnVal = possibleMoves();
    expect(returnVal).toBe(false);
});

test('Calling possibleMoves with Out of board Vertical value "D44" to return false', () => {
    var returnVal = possibleMoves("King","D44");
    expect(returnVal).toBe(false);
});

test('Calling possibleMoves with Out of board Horizontal value "Z5" to return false', () => {
    var returnVal = possibleMoves("King","Z5");
    expect(returnVal).toEqual(false);
});

test('Calling possibleMoves with wrong position parameter "D" to return false', () => {
    var returnVal = possibleMoves("King","D");
    expect(returnVal).toBe(false);
});

test('Calling possibleMoves with wrong piece parameter "Kinger" to return false', () => {
    var returnVal = possibleMoves("Kinger","D5");
    expect(returnVal).toBe(false);
});

test('Calling possibleMoves with King and Center position "King", "D5" to return correct values', () => {
    var returnVal = possibleMoves("King","D5");
    expect(returnVal).toEqual("E5,C5,D6,D4,E6,E4,C4,C6");
});

test('Calling possibleMoves with King and Corner position "King", "A1" to return correct values', () => {
    var returnVal = possibleMoves("King","A1");
    expect(returnVal).toEqual("B1,A2,B2");
});

test('Calling possibleMoves with King and Boundary Middle position "King", "A4" to return correct values', () => {
    var returnVal = possibleMoves("King","A4");
    expect(returnVal).toEqual("B4,A5,A3,B5,B3");
});

test('Calling possibleMoves with King and Random position "King", "B7" to return correct values', () => {
    var returnVal = possibleMoves("King","B7");
    expect(returnVal).toEqual("C7,A7,B8,B6,C8,C6,A6,A8");
});

test('Calling possibleMoves with King and Center position "Queen", "D5" to return correct values', () => {
    var returnVal = possibleMoves("Queen","D5");
    expect(returnVal).toEqual("E5,C5,F5,B5,G5,A5,H5,D6,D4,D7,D3,D8,D2,D1,E6,E4,C4,C6,F7,F3,B3,B7,G8,G2,A2,A8,H1");
});

test('Calling possibleMoves with King and Corner position "Queen", "A1" to return correct values', () => {
    var returnVal = possibleMoves("Queen","A1");
    expect(returnVal).toEqual("B1,C1,D1,E1,F1,G1,H1,A2,A3,A4,A5,A6,A7,A8,B2,C3,D4,E5,F6,G7,H8");
});

test('Calling possibleMoves with King and Boundary Middle position "Queen", "A4" to return correct values', () => {
    var returnVal = possibleMoves("Queen","A4");
    expect(returnVal).toEqual("B4,C4,D4,E4,F4,G4,H4,A5,A3,A6,A2,A7,A1,A8,B5,B3,C6,C2,D7,D1,E8");
});

test('Calling possibleMoves with King and Random position "Queen", "B7" to return correct values', () => {
    var returnVal = possibleMoves("Queen","B7");
    expect(returnVal).toEqual("C7,A7,D7,E7,F7,G7,H7,B8,B6,B5,B4,B3,B2,B1,C8,C6,A6,A8,D5,E4,F3,G2,H1");
});