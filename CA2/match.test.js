import { match } from "./match.js";
import { jest } from '@jest/globals';


test('matching occurs correctly',()=>{
    // mock functions to simulate the flipping of two separate cards i.e card.flip
    const flip1 = jest.fn();
    const flip2 = jest.fn();
    // create the first card
    const card1 = 
    {getAttribute(attribute)
    {
        // return red if attribute is colour
        if(attribute == 'colour')
        {
            return "red";
        }
        // return circle if attribute is type
        if(attribute == 'type')
        {
            return "circle";
        }
    }, flip: flip1};
    // create the second card
    const card2 = 
    {getAttribute(attribute)
    {
        // return red if attribute is colour
        if(attribute == 'colour')
        {
            return "red";
        }
        // return circle if attribute is type
        if(attribute == 'type')
        {
            return "circle";
        }
        // add the flip function (mock)
    }, flip: flip2};

    // create a fake timer to simulate timeout
    jest.useFakeTimers();

    
    // create fake function for console.log to check if it has been called
    console.log = jest.fn();
    // calling the match function
    const res = match(card1,card2);

    // advance timers by 1 second 
    jest.advanceTimersByTime(1000);

    // assert that the match function should not return anything
    expect(res).toBeUndefined();
    // assert that the first cards colour should be equal to the second card's colour
    expect(card1.getAttribute("colour")).toEqual(card2.getAttribute("colour"));
    // assert that the second cards colour should be equal to the second card's colour
    expect(card1.getAttribute("type")).toEqual(card2.getAttribute("type"));
    // assert that the console.log was called with match has been found
    expect(console.log).toHaveBeenCalledWith("match has been found");
    // assert that both cards will stay face up, i.e they will not be flipped back to be face down
    expect(flip1).not.toHaveBeenCalled();
    expect(flip2).not.toHaveBeenCalled();
}
)
// test when a card has one different attribute to another card
test('matching logic does not occur correctly when one of the card attributes do not match', ()=>{
    const flip1 = jest.fn();
    const flip2 = jest.fn();
    const card1 = 
    {getAttribute(attribute)
    {
        if(attribute == 'colour')
        {
            return "blue";
        }
        if(attribute == 'type')
        {
            return "circle";
        }
    }, flip: flip1};
    const card2 = 
    {getAttribute(attribute)
    {
        // different colour than card1
        if(attribute == 'colour')
        {
            return "red";
        }
        if(attribute == 'type')
        {
            return "circle";
        }
    }, flip: flip2};

    jest.useFakeTimers();

    

    console.log = jest.fn();
    const res = match(card1,card2);

    jest.advanceTimersByTime(1000);

    expect(res).toBeUndefined();
    // assert that the colours of the cards will not be equal
    expect(card1.getAttribute("colour")).not.toEqual(card2.getAttribute("colour"));
    expect(card1.getAttribute("type")).toEqual(card2.getAttribute("type"));
    // match expected not to be found so the console.log is expected not be called with match has been found
    expect(console.log).not.toHaveBeenCalledWith("match has been found");
    // assert that both cards will flip back over in this case
    expect(flip1).toHaveBeenCalled();
    expect(flip2).toHaveBeenCalled();
}
)
// test when a card has both attributes different to card2
test('matching logic does not occur correctly when both of the card attributes do not match', ()=>{
    const flip1 = jest.fn();
    const flip2 = jest.fn();
    const card1 = 
    {getAttribute(attribute)
    {
        if(attribute == 'colour')
        {
            return "blue";
        }
        if(attribute == 'type')
        {
            return "circle";
        }
    }, flip: flip1};
    const card2 = 
    {getAttribute(attribute)
    {
        // different colour to card1
        if(attribute == 'colour')
        {
            return "red";
        }
        // different type to card1
        if(attribute == 'type')
        {
            return "square";
        }
    }, flip: flip2};

    jest.useFakeTimers();

    

    console.log = jest.fn();
    const res = match(card1,card2);

    jest.advanceTimersByTime(1000);

    expect(res).toBeUndefined();
    // assert that the colours will not be equal
    expect(card1.getAttribute("colour")).not.toEqual(card2.getAttribute("colour"));
    // assert that the types will not be equal
    expect(card1.getAttribute("type")).not.toEqual(card2.getAttribute("type"));
    expect(console.log).not.toHaveBeenCalledWith("match has been found");
    // assert that the cards will be flipped back over
    expect(flip1).toHaveBeenCalled();
    expect(flip2).toHaveBeenCalled();
}
)