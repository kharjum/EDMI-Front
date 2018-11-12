import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Electricmeter } from 'src/app/models/electricmeter';

@Injectable()
export class ElectricmeterService {
  webApiUrl = 'https://localhost:44306/api/ElectricMeters/';
  constructor(private http: HttpClient) {}

  getAllElectricMeter() {
    return this.http.get<Electricmeter[]>(this.webApiUrl);
  }

  removeElectirMeter(id: number) {
    return this.http.delete<any>(this.webApiUrl + id);
  }

  createElectricmeter(electricmeter: Electricmeter): any {
    return this.http.post<Electricmeter>(this.webApiUrl, electricmeter);
  }

  editElectricmeter(electricmeter: Electricmeter): any {
    return this.http.put<Electricmeter>(
      this.webApiUrl + electricmeter.id,
      electricmeter
    );
  }
}
