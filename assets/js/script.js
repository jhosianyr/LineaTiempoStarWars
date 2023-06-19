import { generator, buscarPersonaje } from "./functions.js"

document.addEventListener('DOMContentLoaded', function () {
    const generadorFunciones = {
        seccion1a5: generator(1, 5),
        seccion6a10: generator(6, 10),
        seccion11a15: generator(11, 15)
    };

const secciones = document.querySelectorAll('.secciones');

    secciones.forEach(seccion => {
        seccion.addEventListener('mouseenter', () => {
            let valor = seccion.getAttribute('value');
            switch (parseInt(valor)) {
                case 1:
                    const rango1 = generadorFunciones.seccion1a5.next();
                    buscarPersonaje(rango1, valor);
                    break;
                case 6:
                    const rango2 = generadorFunciones.seccion6a10.next();
                    buscarPersonaje(rango2, valor);
                    break;
                case 11:
                    const rango3 = generadorFunciones.seccion11a15.next();
                    buscarPersonaje(rango3, valor);
                    break;
            }
        });
    });
});