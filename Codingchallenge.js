function cc1(callback) {
    setTimeout(function () {
        console.log("Challenge 1 complete!");
        callback();

    }, 1000);
}

function cc2(callback) {
    setTimeout(function () {
        console.log("Challenge 2 complete!");
        callback();

    }, 1500)
}

function cc3(callback) {
    setTimeout(function () {
        console.log("Challenge 3 complete!");
        callback();

    }, 5000);
}

function cc4(callback) {
    setTimeout(function () {
        console.log("Challenge 4 complete!");
        callback();

    }, 6000);
}

cc1(function(){
    cc2(function(){
        cc3(function(){
            cc4(function(){
                console.log("All challenges completed!");
            })
        })
    })
})