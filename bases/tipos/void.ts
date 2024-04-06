(()=>{

    function callBatman():void{
        return;
    }

    const callSuper = ():void=>{
        return null; //null no es void por eso se queja
    }

    const a = callBatman()
    console.log(a);

})()