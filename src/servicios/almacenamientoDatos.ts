import { NativeStorage } from '@ionic-native/native-storage';
import {Injectable} from '@angular/core';

interface AlmacenamientoDAO{

	guardar(key:string,datos:JSON):Promise<any>;

	extraer(key:string):Promise<any>;

	borrar(key:string):Promise<any>;

	limpiarTodo():Promise<any>;

	obtenerClaves():Promise<any>;

}

@Injectable()
export class AlmacenamientoDatos implements AlmacenamientoDAO{



	constructor(private nativeStorage:NativeStorage){

	}

	public guardar(key:string,datos:JSON):Promise<any>{

		return this.nativeStorage.setItem(key, datos);
	}

	public extraer(key:string):Promise<any>{

		return this.nativeStorage.getItem(key);
	}

	public borrar(key:string):Promise<any>{

		return this.nativeStorage.remove(key);
	}

	public limpiarTodo():Promise<any>{

		return this.nativeStorage.clear();
	}

	public obtenerClaves():Promise<any>{

		return this.nativeStorage.keys();
	}

	
}

