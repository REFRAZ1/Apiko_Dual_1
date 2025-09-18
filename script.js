
signA = prompt("Який у вас вік?");
Age = parseInt(signA);

signN = prompt("Яке ваше ім'я?");
Name = String(signN);

person = {
    age: Age,
    name: Name
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