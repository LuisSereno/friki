export interface AdivinanzaBase {

	pregunta: string;

	respuesta: string;

}

export class Adivinanza implements AdivinanzaBase {

	pregunta: string;

	respuesta: string;


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
    static fromJSON(json: Adivinanza|string): Adivinanza {
        if (typeof json === 'string') {
            // if it's a string, parse it first
            return JSON.parse(json, Adivinanza.reviver);
        } else {
            // create an instance of the User class
            let hist = Object.create(Adivinanza.prototype);
            // copy all the fields from the json object
            return Object.assign(hist, json,{});
        }
    }

    // reviver can be passed as the second parameter to JSON.parse
    // to automatically call User.fromJSON on the resulting value.
    // Ejemplo de uso let user = JSON.parse(data, User.reviver);
    static reviver(key: string, value: any): any {
        return key === "" ? Adivinanza.fromJSON(value) : value;
    }


}