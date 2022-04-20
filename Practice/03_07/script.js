/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const desktopComputer = {
    brandName: 'Acer',
    processor: {
        brandName: 'Intel',
        model: 'Corei-7',
        generation: '8th gen',
        clockspeed: '4ghz',
    },
    ram: {
        brandName: 'kingston',
        size: '16g',
        quantity: '2',
        speed: '4000Mhz',
    },
    overclockable: true,
    liquidCooled: true,
    storage: {
        name: 'western digital',
        capacity: '2 terabytes',
        type: 'SSD',
    },
};

console.log(`ram brand: ${desktopComputer.ram.brandName}`);