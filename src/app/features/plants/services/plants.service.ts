import { Injectable } from '@angular/core';
import { Plant } from '../models/plant.model';

@Injectable({
    providedIn: 'root'
})
export class PlantsService {

    private plants: Plant[] = [

        {
            id: 1,
            name: 'Tomate',
            scientificName: 'Solanum lycoper',
            image: '/plantas/tomate.webp',
            unlocked: true
        },

        {
            id: 2,
            name: 'Lechuga',
            scientificName: 'Lactuca sativa',
            image: '/plantas/lechuga.webp',
            unlocked: true
        },

        {
            id: 3,
            name: 'Zanahoria',
            scientificName: 'Daucus carota',
            image: '/plantas/zanahoria.webp',
            unlocked: false
        },

        {
            id: 4,
            name: 'Chile',
            scientificName: 'Capsicum annuum',
            image: '/plantas/chile.webp',
            unlocked: false
        },

        {
            id: 5,
            name: 'Pepino',
            scientificName: 'Cucumis sativus',
            image: '/plantas/pepino.webp',
            unlocked: false
        },

        {
            id: 6,
            name: 'Espinaca',
            scientificName: 'Spinacia oleracea',
            image: '/plantas/espinaca.webp',
            unlocked: true
        },

        {
            id: 7,
            name: 'Fresa',
            scientificName: 'Fragaria',
            image: '/plantas/fresa.webp',
            unlocked: false
        },

        {
            id: 8,
            name: 'Papa',
            scientificName: 'Solanum tuberosum',
            image: '/plantas/papa.webp',
            unlocked: false
        },

        {
            id: 9,
            name: 'Cebolla',
            scientificName: 'Allium cepa',
            image: '/plantas/cebolla.webp',
            unlocked: true
        }

    ];

    getPlants() {

        return this.plants;

    }

}