
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
                    // aynchronously wait for the document to be added to a collection in the Firestore database
                    await addDoc(collection(db,"memory_game"),{
                        num_clicks: num_clicks, // contains the number of clicks as a field
                        time_to_complete: Timestamp.now() // contains a timestamp as a field showing the time taken to win the game
                    });
                }
            }