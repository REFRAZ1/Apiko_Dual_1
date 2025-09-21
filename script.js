
enterAge = prompt("Який у вас вік?");
s_age = parseInt(enterAge);

enterName = prompt("Яке ваше ім'я?");
s_name = enterName;

person = {
    age: s_age,
    name: s_name
};

console.log(`Ім'я: ${person.name}, вік: ${person.age}`);

if (person.age >= 18) {
    console.log("Доступ дозволено");
}
else if (person.age < 18) {
    console.log("Доступ заборонено");
}
else {
    console.log("Виникла помилка!");
};