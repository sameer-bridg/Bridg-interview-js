// Some expensive operation
function expensiveOperation(callback) {
    return function() {
        setTimeout(function () {
            callback( ~~(Math.random(10)*100) );
        }, 100);
    }()
}

function slowAdd(a) {
    for (i = 0; i < 50; i++) {
        expensiveOperation(function (n) {
            console.log(a + n);
        });
    }
}
