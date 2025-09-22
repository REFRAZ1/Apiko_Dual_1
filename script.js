
const enterAge = prompt("Який у вас вік?");
const s_age = parseInt(enterAge);

const enterName = prompt("Яке ваше ім'я?");

const person = {
        age: s_age,
    name: enterName
};

console.log(`Ім'я: ${person.name}, вік: ${person.age}`);

const ageVerification = 18;

if (person.age >= ageVerification) {
    console.log("Доступ дозволено");
}
else if (person.age < ageVerification) {
    console.log("Доступ заборонено");
}
else {
    console.log("Виникла помилка!");
};
