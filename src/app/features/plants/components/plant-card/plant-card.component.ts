import { Component, input } from '@angular/core';
import { Plant } from '../../models/plant.model';

@Component({
    selector: 'app-plant-card',
    standalone: true,
    templateUrl: './plant-card.component.html'

})

export class PlantCardComponent {

    plant = input.required<Plant>();

}