
// Реализовать класс Futures

function Futures(executor) {

    executor(
        (value) => {
            if (!this.status) {
                this.status = "resolve";
                this.value = value;
                if (this.onResolve) {
                    this.onResolve(this.value);
                }
            }
        },

        (value) => {
            if (!this.status) {
                this.status = "reject";
                this.value = value;
                if (this.onReject) {
                    this.onReject(this.value);
                }
            }
        },
    );

}

Futures.prototype.then = function (onResolve, onReject) {
    if (this.status) {
        if (this.status === "resolve") {
            onResolve(this.value);
        } else {
            onReject(this.value);
        }
    } else {
        this.onResolve = onResolve;
        this.onReject = onReject;
    }
};



// Тест #1
var foo = new Futures(function (resolve, reject) {
    resolve(123);
});

foo.then(function (val) {
    console.log("foo.resolved:", val === 123);
}, function () {
    console.log("foo.resolved: fail");
});


// Тест #2
var bar = new Futures(function (resolve, reject) {
    setTimeout(resolve.bind(null, "fail"), 300);
    setTimeout(reject.bind(null, "ok"), 200);
});

bar.then(function () {
    console.log("bar.rejected: fail");
}, function (val) {
    console.log("bar.rejected:", val === "ok");
});
