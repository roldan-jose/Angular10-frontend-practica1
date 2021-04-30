export class EnvioEmailModel{
    paraTo: string;
    asunto: string;
    Body: string;

    constructor(){
        this.paraTo = '';
        this.asunto = '';
        this.Body = '';
    }
}