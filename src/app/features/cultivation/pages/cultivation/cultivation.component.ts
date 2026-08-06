import { Component, inject } from '@angular/core';

import { BottomNavbarComponent } from '../../../../shared/components/bottom-navbar/bottom-navbar.component';
import { FloatingMenuComponent } from '../../../../shared/components/floating-menu/floating-menu.component';

import { CultivationCardComponent } from '../../components/cultivation-card/cultivation-card.component';
import { CultivationModalComponent } from '../../components/cultivation-modal/cultivation-modal.component';

import { CultivationService } from '../../services/cultivation.service';
import { Cultivation } from '../../models/cultivation.model';

@Component({

    selector: 'app-cultivation',

    standalone: true,

    imports: [

        FloatingMenuComponent,

        BottomNavbarComponent,

        CultivationCardComponent,

        CultivationModalComponent

    ],

    templateUrl: './cultivation.component.html'

})

export class CultivationComponent {

    private service = inject(CultivationService);

    cultivations = this.service.getCultivations();

    selectedCultivation: Cultivation | null = null;

    showModal = false;

    openCultivation(cultivation: Cultivation) {
        console.log(cultivation);

        this.selectedCultivation = cultivation;

        this.showModal = true;

    }

    closeCultivation() {

        this.showModal = false;

        this.selectedCultivation = null;

    }

}