import { Component, signal, computed } from '@angular/core';
import { Router } from '@angular/router';

interface OnboardingSlide {
    title: string;
    description: string;
    image: string;
}

@Component({
    selector: 'app-onboarding',
    standalone: true,
    templateUrl: './onboarding.component.html',
    styleUrl: './onboarding.component.scss'
})

export class OnboardingComponent {

    current = signal(0);

    slides: OnboardingSlide[] = [
        {
            title: 'Bienvenido a HuertIA',
            description: 'Lleva el control de tu jardín desde un solo lugar.',
            image: '/brote.gif'
        },
        {
            title: 'Registra cada cuidado',
            description: 'Guarda siembras, riegos, fertilizaciones, podas y cosechas fácilmente.',
            image: '/planta-agua.gif'
        },
        {
            title: 'Cultiva con inteligencia',
            description: 'Consulta el historial de tus plantas y recibe recomendaciones para cuidarlas mejor.',
            image: '/planta-de-hoja1.gif'
        }
    ];

    isLast = computed(() =>
        this.current() === this.slides.length - 1
    );

    constructor(private router: Router) { }

    next(): void {

        if (!this.isLast()) {
            this.current.update(value => value + 1);
            return;
        }

        localStorage.setItem('onboarding', 'true');
        this.router.navigate(['/login']);
    }

    skip(): void {

        localStorage.setItem('onboarding', 'true');
        this.router.navigate(['/login']);
    }

    goTo(index: number) {
        this.current.set(index);
    }

}