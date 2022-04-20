/**
 * Challenge: Create a new object type
 *
 * - Create a new object type "Book" using a class or an object constructor function.
 * - Add at least 5 book objects.
 */

import Backpack from './Backpack.js';
import Book from './Book.js';

const everydayPack = new Backpack(
    'Everyday Backpack',
    30,
    'grey',
    15,
    26,
    26,
    false,
    'December 5, 2018 15:00:00 PST'
);

console.log('The everydayPack object:', everydayPack);
console.log('The pocketNum value:', everydayPack.pocketNum);
console.log('Days since aquired:', everydayPack.backpackAge());

const book_1 = new Book(
    'Angels and Demons',
    'Dan Brown',
    '1995, 11, 17',
    30,
    4
);

console.log('The book_1 object:', book_1);
console.log(`Age of book_1: ${book_1.bookAge()}`);