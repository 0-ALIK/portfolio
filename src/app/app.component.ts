import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import anime from 'animejs/lib/anime.es.js';
import { Gradient } from 'whatamesh';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styles: [`
        #gradient-canvas {
            --gradient-color-1: #3b0764;
            --gradient-color-2: #3b82f6;
            --gradient-color-3: #3b0764;
            --gradient-color-4: #3b82f6;
        }
    `]
})
export class AppComponent implements OnInit, AfterViewInit {

    /** Referencia al contenedor principal del portafolio */
    @ViewChild('mainSection', { static: false })
    public mainSection!: ElementRef;

    public ngOnInit(): void {
        const gradient = new Gradient();
        gradient.initGradient("#gradient-canvas");
    }

    public ngAfterViewInit(): void {
        this.mainSectionAnimation();
    }

    /** Define la animación de entrada del portafolio */
    private mainSectionAnimation(): void {
        anime({
            targets: this.mainSection.nativeElement,
            scaleX: [0, 1],
            scaleY: [0, 1],
            duration: 1000,
            easing: 'easeInOutQuad'
        });
    }

}
