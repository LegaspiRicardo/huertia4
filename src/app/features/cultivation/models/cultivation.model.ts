export interface Cultivation {

    id: number;

    plantId: number;

    plantName: string;

    scientificName: string;

    nickname: string;

    image: string;

    place: 'Maceta' | 'Jardín' | 'Invernadero' | 'Hidroponía';

    sowingDate: string;

    lastWatering?: string;

    photo?: string;

}