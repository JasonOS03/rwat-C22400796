 export function match(card1,card2)
    {
        // if both cards are the same color and have the same type
        if(card1.getAttribute("colour") === card2.getAttribute("colour") && card1.getAttribute("type") === card2.getAttribute("type"))
        {
            console.log("match has been found");
        }
        else
        {
            // flip both cards back over after 1 second if they do not match
            setTimeout(() =>{
            card1.flip();
            card2.flip();
            },1000);
        }
    }