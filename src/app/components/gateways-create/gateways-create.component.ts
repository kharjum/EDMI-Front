import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { GatewaysService } from 'src/app/services/gateways.service';
import { Gateways } from 'src/app/models/gateways';

@Component({
  selector: 'app-gateways-create',
  templateUrl: './gateways-create.component.html',
  styleUrls: ['./gateways-create.component.css']
})
export class GatewaysCreateComponent implements OnInit {

  form: FormGroup;
  gateways: Gateways;
  id: number;


  constructor(
    private fb: FormBuilder,
    private electricmeterservice: GatewaysService,
    private router: ActivatedRoute
  ) { }

  ngOnInit() {
    this.gateways = new Gateways();
    this.router.params.subscribe(
      params => {
        this.id = params['id'];
        const list: Array<Gateways> = <Gateways[]>(
          JSON.parse(localStorage.getItem('gateways'))
        );
        list.forEach(element => {
          if (element.id == this.id) {
            this.gateways = element;
          }
        });
      },
      error => {
        // TODO: error
      }
    );

    this.form = this.fb.group({
      serialNumber: [this.gateways.serialNumber, Validators.required],
      firmwareVersion: [
        this.gateways.firmwareVersion,
        Validators.required
      ],
      state: [this.gateways.state, Validators.required],
      id: [this.gateways.id]
    });
  }

  submit() {
    if (this.id) {
      this.electricmeterservice.editGateways(this.form.value).subscribe();
    } else {
      this.electricmeterservice
        .createGateways(this.form.value)
        .subscribe();
    }
  }

}
