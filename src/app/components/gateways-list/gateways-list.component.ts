import { Component, OnInit } from '@angular/core';
import { GatewaysService } from 'src/app/services/gateways.service';

@Component({
  selector: 'app-gateways-list',
  templateUrl: './gateways-list.component.html',
  styleUrls: ['./gateways-list.component.css']
})
export class GatewaysListComponent implements OnInit {

  gatewaysList: any[];
  cols: any[];

  constructor(private gatewaysservice: GatewaysService) { }

  ngOnInit() {
    this.getAllGateways();

    this.cols = [
      { field: 'id', header: 'Id' },
      { field: 'serialNumber', header: 'Serial Number' },
      { field: 'firmwareVersion', header: 'Firmware Version' },
      { field: 'state', header: 'State' },
      { field: 'ip', header: 'Ip'},
      { field: 'port', header: 'Port'}
    ];
  }

  getAllGateways() {
    this.gatewaysservice.getAllGateways().subscribe(
      data => {
        this.gatewaysList = data;
        const val = JSON.stringify(data);
        localStorage.setItem('gateways', val);
      },
      error => {
        console.log(error);
      }
    );
  }

  removeGateways(id: number) {
    this.gatewaysservice.removeGateways(id).subscribe(
      data => {
        window.location.reload();
      }, error => {
        // muestra un dialogo con el error
      }
    );
  }
}


