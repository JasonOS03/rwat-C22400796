
 export async function checkWin(db,the_size,div,num_clicks)
            {
                const cards = div.querySelectorAll("shape-card");
                // initialize the total
                let totalFaceUp = 0;
                cards.forEach(card =>{
                    if(card.isFaceUp())
                    {
                        // if the card is face up increment the total
                        totalFaceUp += 1;
                    }
                })
                // if the total cards face up == size of the grid
                if(totalFaceUp == the_size)
                {
                    alert("game has been won!");
                    console.log("Database: ", db);
                    await addDoc(collection(db,"memory_game"),{
                        num_clicks: num_clicks,
                        time_to_complete: Timestamp.now()
                    });
                }
            }