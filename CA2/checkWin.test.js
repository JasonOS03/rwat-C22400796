import { match } from "./match.js";
import { jest } from '@jest/globals';
import { checkWin } from "./checkWin.js";


test('verify checkWin is correctly called', async ()=>{
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
    const the_size = 4;
    const num_clicks = 5;
    global.addDoc = jest.fn();
    global.collection = jest.fn(() => "fake_collection");
    global.Timestamp = { now: jest.fn( ()=> "fake_timestamp")};
    global.alert = jest.fn();
    console.log = jest.fn();

    await checkWin(db,the_size,new_div,num_clicks);
    expect(alert).toHaveBeenCalledWith("game has been won!");
    expect(console.log).toHaveBeenCalledWith("Database: ",db);
    expect(addDoc).toHaveBeenCalled();
    expect(collection).toHaveBeenCalledWith(db,"memory_game");

}
)