(() => {

    // Tipos
    const batman:string = 'Bruce';
    const superman:string = 'Clark';
  
    const existe:boolean = false;
  
    // Tuplas
    const parejaHeroes:[string,string] = [batman,superman];
    const villano:[string,number,boolean] = ['Lex Lutor',5,true];
  
    // Arreglos
    const aliados:string[] = ['Mujer Maravilla','Acuaman','San', 'Flash'];
  
    //Enumeraciones
    enum force{
      acua=0,
      bat=1,
      flash=5,
      super=100
    };


    const fuerzaFlash:force = force.flash;
    const fuerzaSuperman:force = force.super;
    const fuerzaBatman:force = force.bat;
    const fuerzaAcuaman:force = force.acua;
  
    // Retorno de funciones

    function activar_batiseñal():string{
      return 'activada';
    }
  
    function pedir_ayuda():void{
      console.log('Auxilio!!!');
    }
  
    // Aserciones de Tipo
    const poder: any = '100';
    const largoDelPoder:number = (poder as string).length;
    console.log( largoDelPoder );
  
  
  })()
  
  