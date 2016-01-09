function hybrid(count, min, max) {
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
    for (var i = min; i < max; i++) {
        pool.push(i)
    }
    var poolSize = max - min;

    var ret = [];

    while (count > 0) {
        var index = Math.floor(Math.random() * poolSize);
        if (ret.indexOf(pool[index]) == -1) {
            ret.push(pool[index]);
            count--;
        }
        else {
            pool.splice(index, 1);
            poolSize--;
        }
    }

    return ret;
}

module.exports = hybrid;
