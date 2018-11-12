import { Component } from '@angular/core';
import { MenuItem } from 'primeng/components/common/menuitem';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'EMDIFront';
  items: MenuItem[];

  ngOnInit() {
    this.items = [
      {
        label: 'Electricmeter',
        icon: 'fa fa-fw fa-check',
        routerLink: ['/electricmeter-list']
      },
      {
        label: 'Gateways',
        icon: 'fa fa-fw fa-check',
        routerLink: ['/gateways-list']
      },
      {
        label: 'Watermeter',
        icon: 'fa fa-fw fa-check',
        routerLink: ['/watermeter-list']
      }
    ];
  }
}
