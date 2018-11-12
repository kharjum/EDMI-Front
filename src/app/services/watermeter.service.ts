import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Watermeter } from 'src/app/models/watermeter';

@Injectable()
export class WatermeterService {
  webApiUrl = 'https://localhost:44306/api/WaterMeters/';
  constructor(private http: HttpClient) {}

  getAllWaterMeter() {
    return this.http.get<Watermeter[]>(this.webApiUrl);
  }

  removeWaterMeter(id: number) {
    return this.http.delete<any>(this.webApiUrl + id);
  }

  createWatermeter(watermeter: Watermeter): any {
    return this.http.post<Watermeter>(this.webApiUrl, watermeter);
  }

  editWatermeter(watermeter: Watermeter): any {
    return this.http.put<Watermeter>(
      this.webApiUrl + watermeter.id,
      watermeter
    );
  }
}
