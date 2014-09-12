var spy;

QUnit.begin(function () {
    spy = sinon.spy(console, 'log');
});

test("should display 5 - Hello", function () {
    log("Hello");
    equal(spy.calledWith('5', 'Hello'), true);
});

test("should display 11 - Hello World", function () {
    log("Hello World");
    equal(spy.calledWith('11', 'Hello World'), true);
});
