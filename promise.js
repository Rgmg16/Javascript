function greetings() {
    return new Promise((resolve, reject) => {
        setTimeout(function () {

            const greetings = true;
            if (greetings) {
                resolve("Good morning everyone!")
            }

            else {
                reject("Greetings not done")
            }



        }, 500);
    })
}

function welcome() {
    return new Promise((resolve, reject) => {
        setTimeout(function () {

            const studydone = true;
            if (studydone) {
                resolve("Welcome to today's class")
            }

            else {
                reject("Welcoming was not done")
            }



        }, 500);
    })
}

function present() {
    return new Promise((resolve, reject) => {
        setTimeout(function () {

            const studydone = true;
            if (studydone) {
                resolve("Presenting taking place")
            }

            else {
                reject("Presentations were not done")
            }



        }, 500);
    })

}

function study() {
    return new Promise((resolve, reject) => {
        setTimeout(function () {

            const studydone = true;
            if (studydone) {
                resolve("Studying took place")
            }

            else {
                reject("Studying did not take place")
            }



        }, 500);
    })
}

function questions() {
    return new Promise((resolve, reject) => {
        setTimeout(function () {

            const studydone = true;
            if (studydone) {
                resolve("Do you have any questions? ")
            }

            else {
                reject("Questions were not asked")
            }



        }, 500);
    })
}

function bye() {
    return new Promise((resolve, reject) => {
        setTimeout(function () {

            const studydone = true;
            if (studydone) {
                resolve("Have a good afternoon!")
            }

            else {
                reject("Bye was not said")
            }



        }, 500);
    })
}

// The process below is called "Method chaining"
greetings().then(value => { console.log(value); return welcome() })
    .then(value => { console.log(value); return present() })
    .then(value => { console.log(value); return study() })
    .then(value => { console.log(value); return questions() })
    .then(value => { console.log(value); return bye() })
    .then(value => { console.log(value); setTimeout(function () { console.log("Class completed!") }, 500) })