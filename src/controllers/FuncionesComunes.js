/*
COMPROBAR SI UN ID EXISTE EN LA BASE DE DATOS
Ej: Para un album, comprobar si todas las ids de sus canciones corresponden a canciones de la bd

Si el ID existe o el campo esta vacio, devuelve true, en caso contrario, devuelve false
*/

module.exports.comprobarId = async (campo, modulo) => {
    if (campo != null) {//Si el campo es nulo, no hace nada

        if (Array.isArray(campo)) {//Si es un vector, se comprueban todos sus campos
            for (i = 0; i < campo.length; i++) {
                let ref = await modulo.findById(campo[i]);
                if (!ref) {
                  return false;
                }
            }
        }
        else {                      //Si solo es un string, solo se comprueba una vez
            let ref = await modulo.findById(campo);
            if (!ref) {
                return false;
            }
        }
        
    }

    return true;
}