(function () {
    var Avenger = /** @class */ (function () {
        /*nombre: string;
        equipo: string;
        nombreReal?: string;
        
        puedePelear?: boolean;
        peleasGanadas?: number;*/
        /* constructor(nombre:string,equipo:string,nombreReal?:string,puedePelear?:boolean,peleasGanadas?:number){
             this.nombre=nombre;
             this.equipo=equipo;
             this.nombreReal=nombreReal;
             this.puedePelear=puedePelear;
             this.peleasGanadas=peleasGanadas;
         }*/
        function Avenger(nombre, equipo, nombreReal, puedePelear, peleasGanadas) {
            this.nombre = nombre;
            this.equipo = equipo;
            this.nombreReal = nombreReal;
            this.puedePelear = puedePelear;
            this.peleasGanadas = peleasGanadas;
        }
        return Avenger;
    }());
    var antman = new Avenger('Antman', 'capi');
    console.log(antman);
})();
