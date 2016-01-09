var funcs = {
    pool: require('./unique-random-ints'),
    check: require('./fast-uri'),
    hybrid: require('./hybrid')
}

function testFuncs(count, max) {
    console.log("Count: "+count+", Max: "+max+"\n");
    for (var func in funcs) {
        console.time(func);
        var result = funcs[func](count, max);
        console.timeEnd(func);
    }
    console.log("\n");
}

for (var max = 10; max <= 100000; max*=10) {
    for (var count = 1; count <= max; count*=10) {
        testFuncs(count, max);
    }
}
