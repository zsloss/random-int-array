function fastURI(count, max) {
    if (count > max)
        count = max;

    ret = [];

    while (count > 0) {
        var rnd = Math.floor(Math.random() * max);
        if (ret.indexOf(rnd) == -1) {
            ret.push(rnd);
            count--;
        }
    }

    return ret;
}

module.exports = fastURI;
