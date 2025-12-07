
import { jest } from '@jest/globals';
import { checkWin } from "./checkWin.js";

// test to check correct asynchronous checkWin logic
test('verify checkWin is correctly called', async ()=>{
    // create a fake div returning four cards, all of which are face up
    const new_div = {
        querySelectorAll: jest.fn(() =>
        [
            {isFaceUp: () => true},
            {isFaceUp: () => true},
            {isFaceUp: () => true},
            {isFaceUp: () => true},
        ]),
    };
    // assert that the fake div exists 
    expect(new_div).not.toBeNull();


    const db = "fakeDB"; // initialize a fake db
    const the_size = 4; // the size of the grid of cards is 4
    const num_clicks = 5; // the number of clicks performed by the user is 5
    global.addDoc = jest.fn();// create a mock addDoc function (Firestore)
    global.collection = jest.fn(() => "fake_collection"); // create a mock collection
    global.Timestamp = { now: jest.fn( ()=> "fake_timestamp")}; // create a mock timestamp
    global.alert = jest.fn(); // create a mock alert 
    console.log = jest.fn(); // create a mock console.log


    await checkWin(db,the_size,new_div,num_clicks); // call checkWin function
    expect(alert).toHaveBeenCalledWith("game has been won!"); // assert that the alert will have been called with game has been won
    expect(console.log).toHaveBeenCalledWith("Database: ",db); // assert that the console.log called with name of the database
    expect(addDoc).toHaveBeenCalled(); // assert that the addDoc Firestore function will have been called
    expect(collection).toHaveBeenCalledWith(db,"memory_game"); // assert that the collection will have been called with the memory_game database

}
)
// test to verify checkWin does not indicate user has won if the grid size and number of cards face up does not match
test('checkWin is not correctly called when the grid size does not match the total cards face up', async ()=>{
    const new_div = {
        querySelectorAll: jest.fn(() =>
        [
            {isFaceUp: () => true},
            {isFaceUp: () => true},
            {isFaceUp: () => true},
            {isFaceUp: () => true},
        ]),
    };
    expect(new_div).not.toBeNull();


    const db = "fakeDB";
    const the_size = 6;
    const num_clicks = 10;
    global.addDoc = jest.fn();
    global.collection = jest.fn(() => "fake_collection");
    global.Timestamp = { now: jest.fn( ()=> "fake_timestamp")};
    global.alert = jest.fn();
    console.log = jest.fn();

    await checkWin(db,the_size,new_div,num_clicks);
    expect(alert).not.toHaveBeenCalledWith("game has been won!"); // expect alert to not have been called
    expect(console.log).not.toHaveBeenCalledWith("Database: ",db); // assert console.log will not have been called with the database name
    expect(addDoc).not.toHaveBeenCalled(); // assert that the addDoc function was not called
    expect(collection).not.toHaveBeenCalledWith(db,"memory_game"); // assert that the collection was not called with the database

}
)