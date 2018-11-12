import { Component, OnInit } from '@angular/core';
import { WatermeterService } from 'src/app/services/watermeter.service';
import { Watermeter } from 'src/app/models/watermeter';

@Component({
  selector: 'app-watermeter-list',
  templateUrl: './watermeter-list.component.html',
  styleUrls: ['./watermeter-list.component.css']
})
export class WatermeterListComponent implements OnInit {
  watermeterList: any[];
  cols: any[];

  constructor(private watermeterservice: WatermeterService) {}

  ngOnInit() {
    this.getAllWaterMeters();

    this.cols = [
      { field: 'id', header: 'Id' },
      { field: 'serialNumber', header: 'Serial Number' },
      { field: 'firmwareVersion', header: 'Firmware Version' },
      { field: 'state', header: 'State' }
    ];
  }

  getAllWaterMeters() {
    this.watermeterservice.getAllWaterMeter().subscribe(
      data => {
        this.watermeterList = data;
        const val = JSON.stringify(data);
        localStorage.setItem('watermeters', val);
      },
      error => {
        console.log(error);
      }
    );
  }

  removeWaterMeter(id: number) {
    this.watermeterservice.removeWaterMeter(id).subscribe(
      data => {
        window.location.reload();
      }, error => {
        // muestra un dialogo con el error
      }
    );
  }
}
