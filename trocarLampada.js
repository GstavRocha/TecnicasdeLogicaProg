export class Lampada{
    // 0 para lampada queimada 1 para lampada funciona
   luz = 1;

   Lampada(luz){
       this.luz = luz;
   }

   function Verifica(luz) {
       if(this.luz == luz){
           return true;
       }else{
           return false;
       }
       
   }
}