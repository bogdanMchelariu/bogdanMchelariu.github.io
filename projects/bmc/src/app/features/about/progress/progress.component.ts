import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input
} from '@angular/core';

@Component({
  selector: 'bmc-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class ProgressComponent implements OnInit {
  @Input()
  icon: string;
  @Input()
  skill: string;
  @Input()
  level = 0;
  constructor() {}

  ngOnInit() {}
}
