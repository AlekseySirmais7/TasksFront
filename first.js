// Параллельные вычисления

function parallel(callbacks, final) {

    if (callbacks.length) {
        callbacks.forEach((item, i) => {
            if (item.length) {
                callbacks[i] =  new Promise(item)
            } else {
                callbacks[i] = Promise.resolve( item() )
            }
        })
        Promise.all(callbacks).then(final)
    }

}


parallel([
    function (resolve) {
        setTimeout(function () {
            resolve(10);
        }, 50);
    },
    function () {
        return 5;
    },
    function (resolve) {
        setTimeout(function () {
            resolve(0);
        }, 10)
    }
], function (results) {
    console.log(results); // [10, 5, 0]
});
