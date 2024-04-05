function greetings(callback) {
    setTimeout(function () {
        console.log("Good morning everyone");
        callback();

    }, 1000);
}

function welcome(callback) {
    setTimeout(function () {
        console.log("Welcome to our class today");
        callback();

    }, 1500)
}

function present(callback) {
    setTimeout(function () {
        console.log("Start the assignment presentation");
        callback();

    }, 5000);
}

function study(callback) {
    setTimeout(function () {
        console.log("Start the actual class");
        callback();

    }, 6000);
}

function questions(callback) {
    setTimeout(function () {
        console.log("Do you have any questions?")
        callback();
    }, 2000);
}

function bye(callback) {
    setTimeout(function () {
        console.log("Have a good afternoon");
        callback();
    }, 500);
}
greetings(function () {
    welcome(function () {
        present(function () {
            study(function () {
                questions(function () {
                    bye(function () {
                        console.log("Class completed!");
                    })
                })
            })
        })
    })
})