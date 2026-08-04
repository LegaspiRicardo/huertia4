import { Component, inject } from '@angular/core';

import { PlantCardComponent } from '../../components/plant-card/plant-card.component';
import { FloatingMenuComponent } from '../../../../shared/components/floating-menu/floating-menu.component';
import { BottomNavbarComponent } from '../../../../shared/components/bottom-navbar/bottom-navbar.component';
import { PlantsService } from '../../services/plants.service';

@Component({

    selector: 'app-my-plants',
    standalone: true,
    imports: [
        PlantCardComponent, BottomNavbarComponent, FloatingMenuComponent
    ],
    templateUrl: './my-plants.component.html'
})

export class MyPlantsComponent {

    private service = inject(PlantsService);
    plants = this.service.getPlants();

}