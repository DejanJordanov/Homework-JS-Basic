const yearOfBirth = prompt("Enter the year you were born:");
const convertedYearOfBirth = Number(yearOfBirth);

const zodiacSign = (convertedYearOfBirth - 4) % 12;

if (zodiacSign === 0) {
    console.log("Your Chinese Zodiac sign is a Rat");
} else if (zodiacSign === 1) {
    console.log("Your Chinese Zodiac sign is an Ox");
} else if (zodiacSign === 2) {
    console.log("Your Chinese Zodiac sign is a Tiger");
} else if (zodiacSign === 3) {
    console.log("Your Chinese Zodiac sign is a Rabbit");
} else if (zodiacSign === 4) {
    console.log("Your Chinese Zodiac sign is a Dragon");
} else if (zodiacSign === 5) {
    console.log("Your Chinese Zodiac sign is a Snake");
} else if (zodiacSign === 6) {
    console.log("Your Chinese Zodiac sign is a Horse");
} else if (zodiacSign === 7) {
    console.log("Your Chinese Zodiac sign is a Goat");
} else if (zodiacSign === 8) {
    console.log("Your Chinese Zodiac sign is a Monkey");
} else if (zodiacSign === 9) {
    console.log("Your Chinese Zodiac sign is a Rooster");
} else if (zodiacSign === 10) {
    console.log("Your Chinese Zodiac sign is a Dog");
} else { (zodiacSign === 11)
    console.log("Your Chinese Zodiac sign is a Pig");
}
