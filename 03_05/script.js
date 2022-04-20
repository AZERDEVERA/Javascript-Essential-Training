/**
 * Create a Backpack object.
 */

const backpack = {
    name: 'Everyday Backpack',
    volume: 30,
    color: 'grey',
    pocketNum: 15,
    strapLength: {
        left: 26,
        right: 26,
    },
    lidOpen: false,
    toggleLid: function(lidStatus) {
        this.lidOpen = lidStatus;
    },
    newStrapLength: function(lengthLeft, lengthRight) {
        this.strapLength.left = lengthLeft;
        this.strapLength.right = lengthRight;
    },
};
console.log(`backpack object: ${JSON.stringify(backpack)}`);
console.log(`The backpack object: ${backpack}`, backpack);
console.log(`The pocketNum value: ${backpack.pocketNum}`);
console.log(`Strap length Left: ${backpack.strapLength.left}`);

//bracket notation gives more controll and allow us to do more things
var query = 'pocketNum';
console.log(`pocketNumb value: ${backpack[query]}`);

//String interpolation -> ` ${}`
console.log(`The pocketNum value: ${backpack['pocketNum']}`);