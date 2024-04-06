"use strict";
(() => {
    let avengers = 10;
    console.log(avengers);
    const villians = 20;
    if (avengers < villians) {
        console.log("estamos en problemas");
    }
    else {
        console.log("estamos salvados");
    }
    avengers = Number("55A");
    console.log({ avengers });
})();
