export class Personaje {

	private id: number;

	private nombre: string;

	private descripcion: string;

	private foto: string;

	private nivel: number;

	private experiencia: number;

	private latitud: number;

	private longitud: number;

	private velocidad: number;

	private esquivar: number;

	private distancia: number;

	private fuerza: number;

	private vida: number;

	private defensa: number;

	private mana: number;

	private resistencia: number;

	private alma: number;

	private suerte: number;

	private ataque_especial: Array<number>;

	private ultimo_combate: Date;


	constructor() {
		this.id = 0;
		this.nombre = "Herodes";
		this.descripcion = "Rey de reyes";
		this.foto = "";
		this.latitud = 0;
		this.longitud = 0;
		this.velocidad = 1;
		this.esquivar = 1;
		this.distancia = 1;
		this.mana = 1;
		this.resistencia = 1;
		this.alma = 1;
		this.fuerza = 1;
		this.vida = 1;
		this.suerte = 1;
		this.defensa=1;
		this.ataque_especial=new Array<number>();
		this.ultimo_combate = new Date();
	}

	public getId(): number {
		return this.id;
	}

	public setId(identificador: number) {
		this.id = identificador;
	}

	public getNombre(): string {
		return this.nombre;
	}

	public setNombre(nombre:string){
		this.nombre = nombre;
	}

	public getDescripcion()  : string{
		return this.descripcion;
	}

	public setDescripcion(descripcion:string){
		this.descripcion = descripcion;
	}

	public getFoto()  : string{
		return this.foto;
	}

	public setFoto(foto:string){
		this.foto = foto;
	}

	public getLatitud()  : number{
		return this.latitud;
	}

	public setLatitud(lat:number){
		this.latitud = lat;
	}

	public getLongitud()  : number{
		return this.longitud;
	}

	public setLongitud(lon:number){
		this.longitud = lon;
	}

	public getVelocidad()  : number{
		return this.velocidad;
	}

	public setVelocidad(velocidad:number){
		this.velocidad = velocidad;
	}

	public getEsquivar()  : number{
		return this.esquivar;
	}

	public setEsquivar(esquivar:number){
		this.esquivar = esquivar;
	}

	public getDistancia()  : number{
		return this.distancia;
	}

	public setDistancia(distancia:number){
		this.distancia = distancia;
	}

	public getMana()  : number{
		return this.mana;
	}

	public setMana(mana:number){
		this.mana = mana;
	}

	public getResistencia()  : number{
		return this.resistencia;
	}

	public setResistencia(resistencia:number){
		this.resistencia = resistencia;
	}

	public getAlma()  : number{
		return this.alma;
	}

	public setAlma(alma:number){
		this.alma = alma;
	}

	public getSuerte() : number{
		return this.suerte;
	}

	public setSuerte(suerte:number){
		this.suerte = suerte;
	}

	public getFuerza()  : number{
		return this.fuerza;
	}

	public setFuerza(fuerza:number){
		this.fuerza = fuerza;
	}

	public setVida(vida:number){
		this.vida = vida;
	}

	public getVida()  : number{
		return this.vida;
	}

	public setDefensa(defe:number){
		this.defensa = defe;
	}

	public getDefensa()  : number{
		return this.defensa;
	}

	public getNivel() : number{
		return this.nivel;
	}

	public setNivel(nivel:number){
		this.nivel = nivel;
	}

	public getAtaqueEspecial() : Array<number>{
		return this.ataque_especial;
	}

	public setAtaqueEspecial(especial: Array<number>){
		this.ataque_especial = especial;
	}
	public getExperiencia(): number{
		return this.experiencia;
	}

	public setExperiencia(exp:number){
		this.experiencia = exp;
	}

	public getUltimoCombate() : Date{
		return this.ultimo_combate;
	}

	public setUltimoCombate(ulcom:Date){
		this.ultimo_combate = ulcom;
	}

/*	public abstract ataquePrimario();

	public abstract ataqueSecundario();

	public abstract defensaNormal();

	public abstract defensaConversion();*/

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
    static fromJSON(json: Personaje|string): Personaje {
        if (typeof json === 'string') {
            // if it's a string, parse it first
            return JSON.parse(json, Personaje.reviver);
        } else {
            // create an instance of the User class
            let hist = Object.create(Personaje.prototype);
            // copy all the fields from the json object
            return Object.assign(hist, json,{});
        }
    }

    // reviver can be passed as the second parameter to JSON.parse
    // to automatically call User.fromJSON on the resulting value.
    // Ejemplo de uso let user = JSON.parse(data, User.reviver);
    static reviver(key: string, value: any): any {
        return key === "" ? Personaje.fromJSON(value) : value;
    }

}