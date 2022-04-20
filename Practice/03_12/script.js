/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

import DesktopComputer from './DesktopComputer.js';

const deskComputer_1 = new DesktopComputer(
    'Acer',
    'miniATX',
    true,
    false,
    'Western Digital',
    '2 Terabytes',
    'Kingston',
    '16gigabytes',
    '4000Mhz',
    'Intel',
    'Corei11',
    '4gigahertz'
);

console.log('The deskComputer_1 object:', deskComputer_1);
console.log(`Ram Brand: ${deskComputer_1.ram.brand}`);