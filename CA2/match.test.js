import { match } from "./match.js";
import { jest } from '@jest/globals';


test('matching occurs correctly',()=>{
    const flip1 = jest.fn();
    const flip2 = jest.fn();
    const card1 = 
    {getAttribute(attribute)
    {
        if(attribute == 'colour')
        {
            return "red";
        }
        if(attribute == 'type')
        {
            return "circle";
        }
    }, flip: flip1};
    const card2 = 
    {getAttribute(attribute)
    {
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
    expect(card1.getAttribute("colour")).toEqual(card2.getAttribute("colour"));
    expect(card1.getAttribute("type")).toEqual(card2.getAttribute("type"));
    expect(console.log).toHaveBeenCalledWith("match has been found");
    expect(flip1).not.toHaveBeenCalled();
    expect(flip2).not.toHaveBeenCalled();
}
)

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
    expect(card1.getAttribute("colour")).not.toEqual(card2.getAttribute("colour"));
    expect(card1.getAttribute("type")).toEqual(card2.getAttribute("type"));
    expect(console.log).not.toHaveBeenCalledWith("match has been found");
    expect(flip1).toHaveBeenCalled();
    expect(flip2).toHaveBeenCalled();
}
)

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
        if(attribute == 'colour')
        {
            return "red";
        }
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
    expect(card1.getAttribute("colour")).not.toEqual(card2.getAttribute("colour"));
    expect(card1.getAttribute("type")).not.toEqual(card2.getAttribute("type"));
    expect(console.log).not.toHaveBeenCalledWith("match has been found");
    expect(flip1).toHaveBeenCalled();
    expect(flip2).toHaveBeenCalled();
}
)