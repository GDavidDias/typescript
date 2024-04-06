"use strict";
(() => {
    function callBatman() {
        return;
    }
    const callSuper = () => {
        return null; //null no es void por eso se queja
    };
    const a = callBatman();
    console.log(a);
})();
