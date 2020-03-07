// Реализовать метод `.delay`
// ...


function Foo() {

    const callbackFunc = () => {
        console.log("Wow! 1");
    };

    callbackFunc.delay = (time) => {
        setTimeout(callbackFunc, time);
    };

    return callbackFunc
}

Foo()();

const a = new Foo();

a.delay(1000);

a();



// ============= еще один вариант
function Foo2() {
    return console.log("Wow! 2");
}

Foo2.prototype.delay = (time) => {
    setTimeout(Foo2, time);
};

const b = new Foo2(); // Wow 2

b.delay(1000); // Wow 2

Foo2(); // Wow 2



// =============== вариант 3
function Foo3() {
    this.standart = () => {
        console.log("Wow! 3");
    };
}

Foo3.prototype = {
    delay:function(time) {
        setTimeout(this.standart, time);
    }
};

var c  = new Foo3();

c.delay(2000);

c.standart();
