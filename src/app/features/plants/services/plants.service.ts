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
            cultivated: true
        },

        {
            id: 2,
            name: 'Lechuga',
            scientificName: 'Lactuca sativa',
            image: '/plantas/lechuga.webp',
            cultivated: true
        },

        {
            id: 3,
            name: 'Zanahoria',
            scientificName: 'Daucus carota',
            image: '/plantas/zanahoria.webp',
                        cultivated: true
        },

        {
            id: 4,
            name: 'Chile',
            scientificName: 'Capsicum annuum',
            image: '/plantas/chile.webp',
                        cultivated: true
        },

        {
            id: 5,
            name: 'Pepino',
            scientificName: 'Cucumis sativus',
            image: '/plantas/pepino.webp',
                        cultivated: false
        },

        {
            id: 6,
            name: 'Espinaca',
            scientificName: 'Spinacia oleracea',
            image: '/plantas/espinaca.webp',
                        cultivated: true
        },

        {
            id: 7,
            name: 'Fresa',
            scientificName: 'Fragaria',
            image: '/plantas/fresa.webp',
                        cultivated: true
        },

        {
            id: 8,
            name: 'Papa',
            scientificName: 'Solanum tuberosum',
            image: '/plantas/papa.webp',
             cultivated: false
        },

        {
            id: 9,
            name: 'Cebolla',
            scientificName: 'Allium cepa',
            image: '/plantas/cebolla.webp',
             cultivated: true
        }

    ];

    getPlants() {

        return this.plants;

    }

}