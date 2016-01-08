function makeUniqueRandomInts(count, min, max) {
    if (count == undefined)
        throw new Error("You must supply a count as the first argument.");
    if (min == undefined)
        throw new Error("You must supply a second argument as the min (or max if no min is supplied).");
    if (max == undefined) {
        max = min;
        min = 0;
    }
    if (min > max)
        throw new Error("Your min is greater than your max!");
    if (count > max - min)
        count = max - min;

    var pool = [];
    for (var i = min; i < max; i++)
        pool.push(i)

    var ret = [];

    for (var i = 0; i < count; i++) {
        var index = Math.floor(Math.random() * pool.length);
        ret.push(pool[index]);
        pool.splice(index, 1);
    }

    return ret;
}

module.exports = makeUniqueRandomInts;
