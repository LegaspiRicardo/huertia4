import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Cultivation } from '../../models/cultivation.model';

@Component({

    selector: 'app-cultivation-modal',

    standalone: true,

    templateUrl: './cultivation-modal.component.html'

})

export class CultivationModalComponent {

    @Input() open = false;

    @Input() cultivation!: Cultivation | null;

    @Output() close = new EventEmitter<void>();

    closeModal() {

        this.close.emit();

    }

}