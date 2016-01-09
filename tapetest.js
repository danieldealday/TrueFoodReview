var test = require('tape');

test('Test 1: X should be string and should equal "This is a test"', function (t) {
    var x = 'This is a test';
    t.equal(typeof x, 'string');
    t.equal(x, 'This is a test');
    t.end();
});
