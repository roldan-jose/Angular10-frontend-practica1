export class registroModel {
    idPersona?: number;
    nombre: string;
    email: string;
    telefono: string;
    fecha: Date = new Date();
    ciudadEstado: string;

    constructor(){
        this.nombre = '';
        this.email = '';
        this.telefono = '';
        this.fecha = new Date();
        this.ciudadEstado = 'México';
    }
}

