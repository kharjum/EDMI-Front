import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { WatermeterService } from 'src/app/services/watermeter.service';
import { ActivatedRoute } from '@angular/router';
import { Watermeter } from 'src/app/models/watermeter';

@Component({
  selector: 'app-watermeter-create',
  templateUrl: './watermeter-create.component.html',
  styleUrls: ['./watermeter-create.component.css']
})
export class WatermeterCreateComponent implements OnInit {

  form: FormGroup;
  watermeter: Watermeter;
  id: number;

  constructor(
    private fb: FormBuilder,
    private watermeterservice: WatermeterService,
    private router: ActivatedRoute
  ) { }

  ngOnInit() {
    this.watermeter = new Watermeter();
    this.router.params.subscribe(
      params => {
        this.id = params['id'];
        const list: Array<Watermeter> = <Watermeter[]>(
          JSON.parse(localStorage.getItem('watermeters'))
        );
        list.forEach(element => {
          if (element.id == this.id) {
            this.watermeter = element;
          }
        });
      },
      error => {
        // TODO: error
      }
    );

    this.form = this.fb.group({
      serialNumber: [this.watermeter.serialNumber, Validators.required],
      firmwareVersion: [
        this.watermeter.firmwareVersion,
        Validators.required
      ],
      state: [this.watermeter.state, Validators.required],
      id: [this.watermeter.id]
    });
  }

  submit() {
    if (this.id) {
      this.watermeterservice.editWatermeter(this.form.value).subscribe();
    } else {
      this.watermeterservice
        .createWatermeter(this.form.value)
        .subscribe();
    }
  }

}

