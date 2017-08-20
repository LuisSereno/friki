import { Personaje } from './personaje';
import { Adivinanza } from './adivinanza';

interface AccionBase{

	tipo: number;

    estado: boolean;

	experiencia: number;

	fechaMaxima: Date;

	fechaMinima: Date;

	url: string;

	texto: string;

	enemigo: Personaje;

	adivinanza: Adivinanza;


}

export class Accion implements AccionBase {

	tipo: number;

    estado: boolean = false;

	experiencia: number;

	fechaMaxima: Date;

	fechaMinima: Date;

	url: string;

	texto: string;

	enemigo: Personaje;

	adivinanza: Adivinanza;


	/**
       ESTA PARTE ES OBLIGADA PARA USAR LOS JSON Y ENVIARLE LAS ENTIDADES
	   http://choly.ca/post/typescript-json/
    **/
    // toJSON is automatically used by JSON.stringify
    toJSON():{} {
        // copy all fields from `this` to an empty object and return in
        var json=Object.assign({}, this);
        return json;
    }

    // fromJSON is used to convert an serialized version
    // of the User to an instance of the class
    static fromJSON(json: Accion|string): Accion {
        var objetoCreado=null;
        if (typeof json === 'string') {
            // if it's a string, parse it first
            objetoCreado= JSON.parse(json, Accion.reviver);

            if (objetoCreado.adivinanza){
                objetoCreado.adivinanza=Adivinanza.fromJSON(objetoCreado.adivinanza);
            }
            if (objetoCreado.enemigo){
                objetoCreado.enemigo=Personaje.fromJSON(objetoCreado.enemigo);
            }
        } else {
            // create an instance of the User class
            let hist = Object.create(Accion.prototype);
            // copy all the fields from the json object
            objetoCreado= Object.assign(hist, json,{});

            if (objetoCreado.adivinanza){
                objetoCreado.adivinanza=Adivinanza.fromJSON(objetoCreado.adivinanza);
            }
            if (objetoCreado.enemigo){
                objetoCreado.enemigo=Personaje.fromJSON(objetoCreado.enemigo);
            }
        }

        return objetoCreado;
    }

    // reviver can be passed as the second parameter to JSON.parse
    // to automatically call User.fromJSON on the resulting value.
    // Ejemplo de uso let user = JSON.parse(data, User.reviver);
    static reviver(key: string, value: any): any {
        return key === "" ? Accion.fromJSON(value) : value;
    }

}