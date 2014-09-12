test("isPalindrome() exists as method on String", function () {
    equal(String.prototype.hasOwnProperty('isPalindrome'), true);
    equal(typeof String.prototype.isPalindrome, 'function');
});

test("return true for a palindrome", function () {
    equal("racecar".isPalindrome(), true);
    equal("hannah".isPalindrome(), true);
});

test("return false when not a palindrome", function () {
    equal("spacecar".isPalindrome(), false);
    equal("facecar".isPalindrome(), false);
});
