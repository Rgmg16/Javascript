function cc1() {
    return new Promise((resolve, reject) => {
        setTimeout(function () {

            const chal1 = true;
            if (chal1) {
                resolve("Challenge 1 complete!")
            }

            else {
                reject("Challenge 1 incomplete!")
            }



        }, 500);
    })
}

function cc2() {
    return new Promise((resolve, reject) => {
        setTimeout(function () {

            const chal2 = true;
            if (chal2) {
                resolve("Challenge 2 complete!")
            }

            else {
                reject("Challenge 2 incomplete!")
            }



        }, 500);
    })
}

function cc3() {
    return new Promise((resolve, reject) => {
        setTimeout(function () {

            const chal3 = true;
            if (chal3) {
                resolve("Challenge 3 complete!")
            }

            else {
                reject("Challenge 3 incomplete!")
            }



        }, 500);
    })
}

function cc4() {
    return new Promise((resolve, reject) => {
        setTimeout(function () {

            const chal4 = true;
            if (chal4) {
                resolve("Challenge 4 complete!")
            }

            else {
                reject("Challenge 4 incomplete!")
            }



        }, 500);
    })
}

cc1().then(value => { console.log(value); return cc2() })
    .then(value => { console.log(value); return cc3() })
    .then(value => { console.log(value); return cc4() })
    .then(value => { console.log(value); setTimeout(function () { console.log("All challenges completed!") }, 500) })
   
