function countBs(str, char) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] === "B") {
            count++;
        }
    }
    return count;
}
console.log(countBs("BBBBbbBBBbbbbb"));