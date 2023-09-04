import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'portfolio-button',
    templateUrl: './button.component.html',
})
export class ButtonComponent {

    @Input('buttonText')
    public buttonText: string = '';

    @Output('buttonClick')
    public click: EventEmitter<void> = new EventEmitter();

    public onClick(): void {
        this.click.emit();
    }

}
