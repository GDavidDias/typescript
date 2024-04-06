"use strict";
(() => {
    // Tipos
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    // Tuplas
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    // Arreglos
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    //Enumeraciones
    let force;
    (function (force) {
        force[force["acua"] = 0] = "acua";
        force[force["bat"] = 1] = "bat";
        force[force["flash"] = 5] = "flash";
        force[force["super"] = 100] = "super";
    })(force || (force = {}));
    ;
    const fuerzaFlash = force.flash;
    const fuerzaSuperman = force.super;
    const fuerzaBatman = force.bat;
    const fuerzaAcuaman = force.acua;
    // Retorno de funciones
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    // Aserciones de Tipo
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
