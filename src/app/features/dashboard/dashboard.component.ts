import { Component, signal} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { DatePipe } from '@angular/common';


import { BottomNavbarComponent } from '../../shared/components/bottom-navbar/bottom-navbar.component';
import { FloatingMenuComponent } from '../../shared/components/floating-menu/floating-menu.component';



@Component({
    selector: 'app-dashboard',
    standalone: true,
    imports: [RouterLink, RouterLinkActive,DatePipe, BottomNavbarComponent, FloatingMenuComponent],
    templateUrl: './dashboard.component.html'
})

export class DashboardComponent { 
    fechaActual = new Date();
}