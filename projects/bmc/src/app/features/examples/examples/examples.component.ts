import { Store, select } from '@ngrx/store';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';

import {
  routeAnimations,
  selectIsAuthenticated
} from '../../../core/core.module';

import { State } from '../examples.state';

@Component({
  selector: 'bmc-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.scss'],
  animations: [routeAnimations],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExamplesComponent implements OnInit {
  isAuthenticated$: Observable<boolean>;

  examples = [
    { link: 'todos', label: 'bmc.examples.menu.todos' },
    { link: 'stock-market', label: 'bmc.examples.menu.stocks' },
    { link: 'theming', label: 'bmc.examples.menu.theming' },
    { link: 'crud', label: 'bmc.examples.menu.crud' },
    {
      link: 'simple-state-management',
      label: 'bmc.examples.menu.simple-state-management'
    },
    { link: 'form', label: 'bmc.examples.menu.form' },
    { link: 'notifications', label: 'bmc.examples.menu.notifications' },
    { link: 'authenticated', label: 'bmc.examples.menu.auth', auth: true }
  ];

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.isAuthenticated$ = this.store.pipe(select(selectIsAuthenticated));
  }
}
