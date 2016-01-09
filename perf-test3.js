var funcs = {
    pool: require('./unique-random-ints'),
    check: require('./fast-uri'),
}

function testFuncs(count, max) {
    for (var func in funcs) {
        var start = Date.now();
        var result = funcs[func](count, max);
        var end = Date.now();
        if (func == "pool")
            var pool = end-start;
        else var check = end-start;
    }
    if (pool < check) return true;
    return false;
}

var counts = [];
var max = 1000;
for (var i = 0; i < 100; i++) {
    for (var count = max/10; count <= max; count+=max/100) {
        if (testFuncs(count, max)) {
            console.log(count);
            counts.push(count);
            break;
        }
    }
}

console.log("\nResult: "+(counts.reduce(function(a,b){return a+b;})*100)/(counts.length*max)+"%");
