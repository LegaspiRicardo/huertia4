import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router'
import { ActionRegisterModalComponent } from '../action-register-modal/action-register-modal.component';

@Component({
    selector: 'app-bottom-navbar',
    standalone: true,
    imports: [RouterLink, RouterLinkActive, ActionRegisterModalComponent],
    templateUrl: './bottom-navbar.component.html'
})
export class BottomNavbarComponent {

    showActionRegisterModal = signal(false);

    openActionRegisterModal() {
        this.showActionRegisterModal.set(true);
    }

    closeActionRegisterModal() {
        this.showActionRegisterModal.set(false);
    }

    
}