(()=>{

    //TRATAR DE NUNCA USAR ANY, PARA ESO USAMOS TYPESCRIPT PARA
    //USAR LOS TIPADOS
    let avenger:any = 123;
    let exists;
    let power;

    avenger='dr strange';

    //console.log(avenger.charAt(0));

    //lo casteamos para tratarlo como string
    console.log((avenger as string).charAt(0)); 

    avenger=150.21325
    //console.log(avenger.toFixed(2));

    //lo casteamos para tratarlo como numero
    console.log(<number>avenger.toFixed(2));

    console.log(exists);
    console.log(power);

}) ()