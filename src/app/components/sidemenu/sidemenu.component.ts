import { Component } from '@angular/core';

@Component({
    selector: 'portfolio-sidemenu',
    templateUrl: './sidemenu.component.html',
})
export class SidemenuComponent {

    /** Redirige al usuario a la ruta para descargar el CV */
    public descargarCV(): void {
        console.log('Descargar CV....');
    }
}
