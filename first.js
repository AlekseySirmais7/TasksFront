// Реализовать метод `.delay`
// ...

function foo() {
    console.log("Wow!");
}

foo.delay = (time) => {
    setTimeout(foo, time);
};

foo.delay(300);

foo.delay(3000);