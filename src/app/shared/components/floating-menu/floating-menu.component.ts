import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-floating-menu',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './floating-menu.component.html',
})
export class FloatingMenuComponent {

    isOpen = signal(false);
    toggleMenu() {
    this.isOpen.update(value => !value);
    }

    closeMenu() {
    this.isOpen.set(false);
    }
}