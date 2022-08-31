let jonSnowHealth = 100;

//String(jonSnowHealth); //non destructive
//jonSnowHealth = jonSnowHealth + ""; //destructive

// jonSnowHealth = Boolean(jonSnowHealth); //destructive

//console.log(typeof jonSnowHealth); //js only knows what the current value is

let myWinner = 'Jon is the winner';
// myWinner.replace('Jon', 'Danny'); //non destructive so if we want the value to change we need to tell js
myWinner = myWinner.replace('Jon', 'Danny') //don't change data, create new data (don't reuse variables)

if(myWinner.includes('Danny')){

console.log(myWinner);
}

let mySplitString = myWinner.split(' ');
console.log(mySplitString);

let myAlmostKebabString = mySplitString.join('-');
console.log(myAlmostKebabString);
let myKebabString = myAlmostKebabString.toLowerCase();
console.log(myKebabString);

const myKebabCaseString = myWinner.split(" ").join('-').toLowerCase();
console.log({ myKebabCaseString });









const isJonAlive = () => {
    if(jonSnowHealth > 0) {
      console.log('Jon is alive')
    } else {
        console.log('Jon is not alive')
    }
}

isJonAlive();

function attackJon(damage) {
    //jonSnowHealth - damage; NO ASSIGNMENT OPERATOR DOES NOT WORK
    jonSnowHealth -= damage; //THIS WILL WORK
}

attackJon(30);
console.log(jonSnowHealth);
