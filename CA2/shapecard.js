/* expects attributes:
   type = 'circle' | 'square' | 'triangle' 
   colour = 'red' | 'blue' | 'green' | 'yellow' | 'orange' | 'purple' 
   
   public methods:
   flip()
   isFaceDown()
   getUniqueRandomCardsAsHTML (static)

   (see examples below and in the HTML file)
   */


export class ShapeCard extends HTMLElement {
    static observedAttributes = ["type", "colour"];

    static HEIGHT = '100px';
    static WIDTH = '100px';
    static BORDER = '1px';

    static SHAPE_DATA = { circle: { tag: 'circle' }, square: { tag: 'rect' }, triangle: { tag: 'polygon' } };
    static get SHAPES() {
        return Object.keys(ShapeCard.SHAPE_DATA);
    }
    static shapeTag(type) {
        return ShapeCard.SHAPE_DATA[type].tag;
    }
    static COLOURS = ['red', 'green', 'blue', 'yellow', 'orange', 'purple'];

    static COMBINATIONS = ShapeCard.SHAPES.map(s => ShapeCard.COLOURS.map(c => [s, c])).flat();

    static getUniqueRandomCardsAsHTML(count, duplicate) {
        if (count > this.COMBINATIONS.length) {
            throw new Error(`Cannot get ${count} unique shape cards. Maximum is ${this.COMBINATIONS.length}.`);
        }

        return ShapeCard.COMBINATIONS.
            // shuffle COMBINATIONS 
            reduce((acc, val) => {
                return acc.toSpliced(Math.floor(Math.random() * (acc.length + 1)), 0, val);
            }, []).
            // take only first rows * cols / 2 combinations
            slice(0, count).
            // create two of each card
            reduce((acc, val) => {
                for (let i = 0; i < (duplicate ? 2 : 1); ++i) {
                    acc.splice(Math.floor(Math.random() * (acc.length + 1)), 0, val);
                }
                return acc;
            }, []).
            // map to shape-card elements and join together
            map(([type, colour]) => `<shape-card type="${type}" colour="${colour}"></shape-card>`).join('');
    }

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.shadowRoot.appendChild(document.getElementById('shape-card-template').content.cloneNode(true));

        this.#setShape(null, this.getAttribute('type'));
        this.#setColour(this.getAttribute('colour'));

        this.style.setProperty("--card-width", ShapeCard.WIDTH);
        this.style.setProperty("--card-height", ShapeCard.HEIGHT);
        this.style.setProperty("--card-border", ShapeCard.BORDER);
    }

    attributeChangedCallback(name, oldVal, newVal) {
        if (this.shadowRoot) {
            if (name == 'type') {
                this.#setShape(oldVal, newVal);
            } else if (name == 'colour') {
                this.#setColour(newVal);
            }
        }
    }

    #setShape(oldVal, newVal) {
        if (newVal && !(newVal in ShapeCard.SHAPE_DATA)) {
            throw new Error(`Invalid shape type attribute ${newVal}. Expected one of ${ShapeCard.SHAPES.join(', ')}.`);
        }
        // make the old shape invisible and the new shape visible
        oldVal && this.shadowRoot.querySelector(ShapeCard.shapeTag(oldVal))?.setAttribute('fill-opacity', '0');
        newVal && this.shadowRoot.querySelector(ShapeCard.shapeTag(newVal))?.setAttribute('fill-opacity', '1');
    }

    #setColour(newVal) {
        if (newVal && !ShapeCard.COLOURS.includes(newVal)) {
            throw new Error(`Invalid colour attribute ${newVal}. Expected one of ${ShapeCard.COLOURS.join(', ')}.`);
        }
        // change the colour of the shape
        newVal && this.shadowRoot.querySelector(ShapeCard.shapeTag(this.getAttribute("type")))?.setAttribute('fill', newVal);
    }

    isFaceUp() {
        const card = this.shadowRoot.querySelector('.card');
        return card.classList.contains('card-face-up');
    }

    flip() {
        const card = this.shadowRoot.querySelector('.card');
        card.classList.toggle('card-face-down');
        card.classList.toggle('card-face-up');
    }
}
customElements.define('shape-card', ShapeCard);

export class MemGame extends HTMLElement
{
    connectedCallback()
    {
        // create the div with a grid display and a gap between elements set to 20px
        const div = document.createElement("div");
        div.style.display = "grid";
        div.style.gap = "20px";

        // get the size attribute
        const grid_size = this.getAttribute("size");

        // split the size by x to get the individual numbers and assign them as rows and columns
        const[rows,cols] = grid_size.split("x");

        // parse the row and columns into integers
        const parsed_rows = parseInt(rows);
        const parsed_cols = parseInt(cols);

        // the total grid size is the rows*columns
        let the_size = parsed_rows*parsed_cols;
        const card_numbers = the_size/2;
        // get a specified number of random cards and assign to a variable
        const cards = ShapeCard.getUniqueRandomCardsAsHTML(card_numbers, true);

        // display the cards
        div.innerHTML =
        `${cards}`;

        this.appendChild(div);

        // duplicate the rows a (parsed_rows) number of times 
        div.style.gridTemplateRows = "auto ".repeat(parsed_rows);
        div.style.gridTemplateColumns = "auto ".repeat(parsed_cols);

        let flipped = []

         const select_cards = div.querySelectorAll("shape-card")

         select_cards.forEach(card => {
            card.addEventListener('click', ()=>
            {
               if(flipped.length < 2 && !card.isFaceUp() )
               {
                 card.flip();
                 flipped.push(card);
               }
               else
                {
                    return;
                }
                if(flipped.length == 2)
                {
                    match(flipped[0],flipped[1]);
                    checkWin();

                    flipped = [];
                }
            })

            function match(card1,card2)
            {
                if(card1.getAttribute("colour") === card2.getAttribute("colour") && card1.getAttribute("type") === card2.getAttribute("type"))
                {
                    console.log("match has been found");
                }
                else
                {
                    setTimeout(() =>{
                    card1.flip();
                    card2.flip();
                    },1000);
                }
            }
            function checkWin()
            {
                const cards = div.querySelectorAll("shape-card")
                let totalFaceUp = 0;
                cards.forEach(card =>{
                    if(card.isFaceUp())
                    {
                        totalFaceUp += 1;
                    }
                })
                if(totalFaceUp == the_size)
                {
                    alert("game has been won!")
                }
            }
            
         });





    }
}
customElements.define('mem-game',MemGame);
