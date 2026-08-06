import { Component, input, output } from '@angular/core';

import { Cultivation } from '../../models/cultivation.model';

@Component({

    selector: 'app-cultivation-card',

    standalone: true,

    templateUrl: './cultivation-card.component.html'

})

export class CultivationCardComponent {

    cultivation = input.required<Cultivation>();

    selected = output<Cultivation>();

    open(){

        this.selected.emit(this.cultivation());

    }

}