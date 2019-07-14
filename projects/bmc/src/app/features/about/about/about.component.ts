import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { ROUTE_ANIMATIONS_ELEMENTS } from '../../../core/core.module';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'bmc-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  inViewportChange: any;
  skills = [
    { icon: 'js', skill: 'JavaScript', level: 90 },
    { icon: 'html5', skill: 'HTML5', level: 80 },
    { icon: 'css3-alt', skill: 'CSS3', level: 20 },
    { icon: 'angular', skill: 'Angular', level: 95 },
    { icon: 'react', skill: 'React', level: 15 },
    { icon: 'git-alt', skill: 'Git', level: 95 },
    { icon: 'gitlab', skill: 'GitLab', level: 95 },
    { icon: 'microsoft', skill: 'ASP.NET', level: 40 }
  ];

  constructor() {}

  ngOnInit() {
    this.inViewportChange = new Subject<boolean>().pipe(debounceTime(2000));

    this.inViewportChange.subscribe((inViewport: boolean) => {
      // if (inViewport === true) {
        // this.skills.forEach(skill => {
          // skill.level = 0;
        // });
      // }
      console.log('in view', this.skills);
    });
  }

  scrollToSkills() {
    const element = document.getElementsByClassName('skills')[0];
    element.scrollIntoView({ behavior: 'smooth' });
  }

  onInViewportChange(inViewport: boolean) {
    this.inViewportChange.next(inViewport);
  }
}
