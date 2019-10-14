const coin = {
    state: 0,
    flip: function() {
        this.state = Math.floor(Math.random() * 2)
    

        // 1. One point: Randomly set your coin object's "state" property to be either 
        //    0 or 1: use "this.state" to access the "state" property on this object.
    },
    toString: function() {
        if (this.state === 0){
            return "Heads"
        }
        else if (this.state === 1){
            return "Tails"
        }
        
        // 2. One point: Return the string "Heads" or "Tails", depending on whether
        //    "this.state" is 0 or 1.
    },
    toHTML: function() {
        const image = document.createElement('img')

        if (this.state === 0){
            image.src = "./images/heads.png"
            
        }
        else if (this.state === 1) {
            image.src = "./images/tails.png"
            
        }

        // 3. One point: Set the properties of this image element to show either face-up
        //    or face-down, depending on whether this.state is 0 or 1.
        document.body.appendChild(image)
        return image;
        
    }
   
}

coin.flip()
coin.toHTML()
// console.log(coin)
// console.log(coin.toString())
// coin.flip()
// console.log(coin.toString())

function display20Flips() {
    const results = [];
    for (let i = 0; i < 20; i++){
        coin.flip()
        results.push(coin.toString)
        const thisDiv = document.createElement("div")
        thisDiv.textContent = coin.toString()
        document.body.appendChild(thisDiv)   
    }
    // 4. One point: Use a loop to flip the coin 20 times, each time displaying the result 
    //of the flip as a string on the page.  After your loop completes, return an array with 
    //the result of each flip.
}

display20Flips()

function display20Images() {
    const results = [];
    for (let i = 0; i < 20; i++){
        coin.flip()
        results.push(coin.toString)
        const thisDiv = document.createElement("div")
        thisDiv.appendChild(coin.toHTML())
        document.body.appendChild(thisDiv)
    }
    // 5. One point: Use a loop to flip the coin 20 times, and display the results of each 
    //flip as an image on the page.  After your loop completes, return an array with result of each flip.
}
display20Images()
