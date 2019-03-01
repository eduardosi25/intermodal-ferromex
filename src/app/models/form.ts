export class HelpUsForm {
    constructor(
   public tipoAyuda: string,
   public tipoPortal: string,
   public localidad: string,
   public descripcion: string,
   public nombre = '',
   public telefono = '',
   public email = ''
    ){}
}
