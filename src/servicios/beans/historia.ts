import { Accion } from './accion';

export class Historia {

	private orden:number;

	private presentacion:Array<Accion>;

	private nudo:Array<Accion>;

	private desenlace:Array<Accion>;

	constructor() {
		this.orden=0;
		this.presentacion=new Array<Accion>();
		this.nudo=new Array<Accion>();
		this.desenlace=new Array<Accion>();

	}

	public getOrden(): number {
		return this.orden;
	}

	public setOrden(ord: number) {
		this.orden = ord;
	}

	public getPresentacion(): Array<Accion> {
		return this.presentacion;
	}

	public setPresentacion(presen: Array<Accion>) {
		this.presentacion = presen;
	}

	public getNudo(): Array<Accion> {
		return this.nudo;
	}

	public setNudo(nudo: Array<Accion>) {
		this.nudo = nudo;
	}

	public getDesenlace(): Array<Accion> {
		return this.desenlace;
	}

	public setDesenlace(desen: Array<Accion>) {
		this.desenlace = desen;
	}

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
    static fromJSON(json: Historia|string): Historia {
    	var objetoCreado=null;
        if (typeof json === 'string') {
            // if it's a string, parse it first
            objetoCreado= JSON.parse(json, Historia.reviver);

            var arrayAcciones:Array<Accion>;
            if (objetoCreado.getPresentacion()){
            	arrayAcciones=new Array<Accion>();
            	for (let accion of objetoCreado.getPresentacion()){
            		arrayAcciones.push(Accion.fromJSON(accion));
            	}
            	objetoCreado.setPresentacion(arrayAcciones);
            }

            if (objetoCreado.getNudo()){
            	arrayAcciones=new Array<Accion>();
            	for (let accion of objetoCreado.getNudo()){
            		arrayAcciones.push(Accion.fromJSON(accion));
            	}
            	objetoCreado.setNudo(arrayAcciones);
            }

            if (objetoCreado.getDesenlace()){
            	arrayAcciones=new Array<Accion>();
            	for (let accion of objetoCreado.getDesenlace()){
            		arrayAcciones.push(Accion.fromJSON(accion));
            	}
            	objetoCreado.setDesenlace(arrayAcciones);
            }
        } else {
            // create an instance of the User class
            let hist = Object.create(Historia.prototype);
            // copy all the fields from the json object
            objetoCreado= Object.assign(hist, json,{});

            var arrayAcciones:Array<Accion>;
            if (objetoCreado.getPresentacion()){
            	arrayAcciones=new Array<Accion>();
            	for (let accion of objetoCreado.getPresentacion()){
            		arrayAcciones.push(Accion.fromJSON(accion));
            	}
            	objetoCreado.setPresentacion(arrayAcciones);
            }

            if (objetoCreado.getNudo()){
            	arrayAcciones=new Array<Accion>();
            	for (let accion of objetoCreado.getNudo()){
            		arrayAcciones.push(Accion.fromJSON(accion));
            	}
            	objetoCreado.setNudo(arrayAcciones);
            }

            if (objetoCreado.getDesenlace()){
            	arrayAcciones=new Array<Accion>();
            	for (let accion of objetoCreado.getDesenlace()){
            		arrayAcciones.push(Accion.fromJSON(accion));
            	}
            	objetoCreado.setDesenlace(arrayAcciones);
            }

        }

        return objetoCreado;
    }

    // reviver can be passed as the second parameter to JSON.parse
    // to automatically call User.fromJSON on the resulting value.
    // Ejemplo de uso let user = JSON.parse(data, User.reviver);
    static reviver(key: string, value: any): any {
        return key === "" ? Historia.fromJSON(value) : value;
    }


}
