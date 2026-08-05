import { Component, inject } from '@angular/core';

import { BottomNavbarComponent } from '../../../../shared/components/bottom-navbar/bottom-navbar.component';
import { FloatingMenuComponent } from '../../../../shared/components/floating-menu/floating-menu.component';

import { PlantCardComponent } from '../../components/plant-card/plant-card.component';
import { PlantDetailModalComponent } from '../../components/plant-detail-modal/plant-detail-modal.component';

import { PlantsService } from '../../services/plants.service';
import { Plant } from '../../models/plant.model';

@Component({
    selector: 'app-my-plants',
    standalone: true,
    imports: [
        FloatingMenuComponent,
        BottomNavbarComponent,
        PlantCardComponent,
        PlantDetailModalComponent
    ],
    templateUrl: './plants.component.html'
})
export class PlantsComponent {

    private service = inject(PlantsService);

    plants = this.service.getPlants();

    showModal = false;

    selectedIndex = 0;

    openPlant(index: number) {

        this.selectedIndex = index;
        this.showModal = true;

    }

    closePlant() {

        this.showModal = false;

    }

}