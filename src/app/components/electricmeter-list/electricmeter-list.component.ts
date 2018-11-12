import { Component, OnInit } from '@angular/core';
import { ElectricmeterService } from 'src/app/services/electricmeter.service';
import { Electricmeter } from 'src/app/models/electricmeter';

@Component({
  selector: 'app-electricmeter-list',
  templateUrl: './electricmeter-list.component.html',
  styleUrls: ['./electricmeter-list.component.css']
})
export class ElectricmeterListComponent implements OnInit {
  electricmeterList: any[];
  cols: any[];

  constructor(private electricmeterservice: ElectricmeterService) {}

  ngOnInit() {
    this.getAllElectricMeters();

    this.cols = [
      { field: 'id', header: 'Id' },
      { field: 'serialNumber', header: 'Serial Number' },
      { field: 'firmwareVersion', header: 'Firmware Version' },
      { field: 'state', header: 'State' }
    ];
  }

  getAllElectricMeters() {
    this.electricmeterservice.getAllElectricMeter().subscribe(
      data => {
        this.electricmeterList = data;
        const val = JSON.stringify(data);
        localStorage.setItem('electricmeters', val);
      },
      error => {
        console.log(error);
      }
    );
  }

  removeElectricMeter(id: number) {
    this.electricmeterservice.removeElectirMeter(id).subscribe(
      data => {
        window.location.reload();
      }, error => {
        // muestra un dialogo con el error
      }
    );
  }
}
