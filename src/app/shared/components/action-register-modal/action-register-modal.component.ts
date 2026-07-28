import { Component, Input, Output,EventEmitter, signal } from '@angular/core';

@Component({
    selector: 'app-action-register-modal',
    standalone: true,
    templateUrl: './action-register-modal.component.html'
})
export class ActionRegisterModalComponent {

    @Input() open = false;
    @Output() close = new EventEmitter<void>();
    step = signal(1);
    selectedAction = signal('');

actions = [
  {
    id: 'watering',
    name: 'Riego',
    icon: '/gotaVerde.png'
  },
  {
    id: 'planting',
    name: 'Siembra',
    icon: '/plantaVerde.png'
  },
  {
    id: 'fertilizer',
    name: 'Fertilización',
    icon: '/fertilizante.png'
  },
  {
    id: 'pruning',
    name: 'Poda',
    icon: '/tijeras.png'
  },
  {
    id: 'pesticide',
    name: 'Pesticida',
    icon: '/mariquita.png'
  }
];

    select(action: any) {
        this.selectedAction.set(action);
    }

    next() {
        if (!this.selectedAction()) return;
    this.step.set(2);
    }

    back() {
    this.step.set(1);
    }

    closeModal() {
    this.step.set(1);
    this.selectedAction.set('');
    this.close.emit();
    }
}