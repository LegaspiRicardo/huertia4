import { Injectable } from '@angular/core';

import { Cultivation } from '../models/cultivation.model';

@Injectable({
    providedIn: 'root'
})

export class CultivationService {

    private cultivations: Cultivation[] = [

        {
            id: 1,
            plantId: 1,
            plantName: 'Tomate',
            scientificName: 'Solanum lycopersicum',
            nickname: 'Tomate del patio',
            image: '/plantas/tomate.jpg',
            place: 'Maceta',
            sowingDate: '2026-07-10',
            lastWatering: 'Hace 2 días'
        },

        {
            id: 2,
            plantId: 2,
            plantName: 'Lechuga',
            scientificName: 'Lactuca sativa',
            nickname: 'Lechuga romana',
            image: '/plantas/lechuga.jpg',
            place: 'Jardín',
            sowingDate: '2026-07-21',
            lastWatering: 'Hoy'
        },

        {
            id: 3,
            plantId: 3,
            plantName: 'Zanahoria',
            scientificName: 'Daucus carota',
            nickname: 'Zanahorias del huerto',
            image: '/plantas/zanahoria.jpg',
            place: 'Maceta',
            sowingDate: '2026-07-28',
            lastWatering: 'Ayer'
        },

        {
            id: 4,
            plantId: 4,
            plantName: 'Chile',
            scientificName: 'Capsicum annuum',
            nickname: 'Habanero',
            image: '/plantas/chile.jpg',
            place: 'Jardín',
            sowingDate: '2026-08-02',
            lastWatering: 'Hace 3 días'
        },

        {
            id: 5,
            plantId: 5,
            plantName: 'Pepino',
            scientificName: 'Cucumis sativus',
            nickname: 'Pepino trepador',
            image: '/plantas/pepino.jpg',
            place: 'Invernadero',
            sowingDate: '2026-07-18',
            lastWatering: 'Hoy'
        },

        {
            id: 6,
            plantId: 6,
            plantName: 'Espinaca',
            scientificName: 'Spinacia oleracea',
            nickname: 'Espinaca orgánica',
            image: '/plantas/espinaca.jpg',
            place: 'Maceta',
            sowingDate: '2026-07-12',
            lastWatering: 'Hace 1 día'
        },

        {
            id: 7,
            plantId: 7,
            plantName: 'Fresa',
            scientificName: 'Fragaria × ananassa',
            nickname: 'Fresas colgantes',
            image: '/plantas/fresa.jpg',
            place: 'Maceta',
            sowingDate: '2026-06-30',
            lastWatering: 'Hoy'
        },

        {
            id: 8,
            plantId: 8,
            plantName: 'Papa',
            scientificName: 'Solanum tuberosum',
            nickname: 'Papa blanca',
            image: '/plantas/papa.jpg',
            place: 'Jardín',
            sowingDate: '2026-06-20',
            lastWatering: 'Hace 2 días'
        },

        {
            id: 9,
            plantId: 9,
            plantName: 'Cebolla',
            scientificName: 'Allium cepa',
            nickname: 'Cebolla morada',
            image: '/plantas/cebolla.jpg',
            place: 'Jardín',
            sowingDate: '2026-07-14',
            lastWatering: 'Ayer'
        }

    ];

    getCultivations() {

        return this.cultivations;

    }

}