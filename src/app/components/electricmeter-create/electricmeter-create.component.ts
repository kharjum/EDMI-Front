import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ElectricmeterService } from 'src/app/services/electricmeter.service';
import { Electricmeter } from 'src/app/models/electricmeter';
import { ActivatedRoute } from '@angular/router';
import { Message } from 'primeng/components/common/api';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-electricmeter-create',
  templateUrl: './electricmeter-create.component.html',
  styleUrls: ['./electricmeter-create.component.css']
})
export class ElectricmeterCreateComponent implements OnInit {
  form: FormGroup;
  electricmeter: Electricmeter;
  id: number;
  msgs: Message[] = [];

  constructor(
    private fb: FormBuilder,
    private electricmeterservice: ElectricmeterService,
    private router: ActivatedRoute,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.electricmeter = new Electricmeter();
    this.router.params.subscribe(
      params => {
        this.id = params['id'];
        const list: Array<Electricmeter> = <Electricmeter[]>(
          JSON.parse(localStorage.getItem('electricmeters'))
        );
        list.forEach(element => {
          if (element.id == this.id) {
            this.electricmeter = element;
          }
        });
      },
      error => {
        // TODO: error
      }
    );

    this.form = this.fb.group({
      serialNumber: [this.electricmeter.serialNumber, Validators.required],
      firmwareVersion: [
        this.electricmeter.firmwareVersion,
        Validators.required
      ],
      state: [this.electricmeter.state, Validators.required],
      id: [this.electricmeter.id]
    });
  }

  submit() {
    if (this.id) {
      this.electricmeterservice.editElectricmeter(this.form.value).subscribe();
    } else {
      this.electricmeterservice
        .createElectricmeter(this.form.value)
        .subscribe();
    }
  }

  showSuccess() {
    this.msgs = [];
    this.msgs.push({
      severity: 'success',
      summary: 'Success ',
      detail: 'The operation has been completed'
    });
  }
}
