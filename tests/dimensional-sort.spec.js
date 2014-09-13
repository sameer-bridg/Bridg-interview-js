test("sorts multidimensional array", function () {
    var table = [[9,10], [1,4], [4,2]];
    var expected = [[1,4], [2,4], [9,10]];
    deepEqual( dimensionSort(table), expected );

    table = [[9,8], [2,3], [4,5], [3,4]];
    expected = [[2,3], [3,4], [4,5], [8,9]];
    deepEqual( dimensionSort(table), expected );
});
