import { match } from "./match.js";
import { jest } from '@jest/globals'


test('matching occurs correctly',()=>{
    const card1 = {getAttribute: () =>"red"};
    const card2 = {getAttribute: () => "red"};

    console.log = jest.fn();
    const res = match(card1,card2);

    expect(res).toBeUndefined();
    expect(card1.getAttribute("colour")).toEqual(card2.getAttribute("colour"));
    expect(card1.getAttribute("type")).toEqual(card2.getAttribute("type"));
    expect(console.log).toHaveBeenCalledWith("match has been found");
}
)