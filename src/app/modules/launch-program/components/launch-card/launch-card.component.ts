import { Component, Input, OnInit } from '@angular/core';
import { LaunchProgram } from './../../interface/launch-program-link.interface';

@Component({
  selector: 'app-launch-card',
  templateUrl: './launch-card.component.html',
  styleUrls: ['./launch-card.component.scss'],
})
export class LaunchCardComponent implements OnInit {
  @Input() launchProgram: LaunchProgram;
  noImageUrl = 'https://dummyimage.com/280x260/ebebeb/5c5c5c.jpg&text=No+Image';

  constructor() {}

  ngOnInit(): void {}
}
