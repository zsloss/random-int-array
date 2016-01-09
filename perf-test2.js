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

var max = 100000;
for (var count = 0; count <= max/5; count+=1000) {
    testFuncs(count==0?1:count, max);
}
