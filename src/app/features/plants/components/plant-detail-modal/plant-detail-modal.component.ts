import {
    Component,
    EventEmitter,
    Input,
    Output,
    OnChanges,
    SimpleChanges
} from '@angular/core';

import { Plant } from '../../models/plant.model';

@Component({
    selector: 'app-plant-detail-modal',
    standalone: true,
    templateUrl: './plant-detail-modal.component.html'
})
export class PlantDetailModalComponent implements OnChanges {

    @Input() open = false;

    @Input() plants: Plant[] = [];

    @Input() currentIndex = 0;

    @Output() close = new EventEmitter<void>();

    private touchStartX = 0;

    currentPlant!: Plant;

    ngOnChanges(changes: SimpleChanges): void {

        if (this.plants.length > 0) {

            this.currentPlant = this.plants[this.currentIndex];

        }

    }

    previousPlant() {

        if (this.currentIndex > 0) {

            this.currentIndex--;

            this.currentPlant = this.plants[this.currentIndex];

        }

    }

    nextPlant() {

        if (this.currentIndex < this.plants.length - 1) {

            this.currentIndex++;

            this.currentPlant = this.plants[this.currentIndex];

        }

    }

    touchStart(event: TouchEvent) {

        this.touchStartX = event.changedTouches[0].clientX;

    }

    touchEnd(event: TouchEvent) {

        const endX = event.changedTouches[0].clientX;

        const distance = endX - this.touchStartX;

        if (distance > 80) {

            this.previousPlant();

        }

        if (distance < -80) {

            this.nextPlant();

        }

    }

    closeModal() {

        this.close.emit();

    }

}