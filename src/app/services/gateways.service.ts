import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Gateways } from 'src/app/models/gateways';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class GatewaysService {
  
  webApiUrl = 'https://localhost:44306/api/Gateways/';
  constructor(private http: HttpClient) { }

  getAllGateways() {
    return this.http.get<Gateways[]>(this.webApiUrl);
  }

  removeGateways(id: number) {
    return this.http.delete<any>(this.webApiUrl + id);
  }

  createGateways(gateways: Gateways): any {
    return this.http.post<Gateways>(this.webApiUrl, gateways);
  }

  editGateways(gateways: Gateways): any {
    return this.http.put<Gateways>(
      this.webApiUrl + gateways.id,
      gateways
    );
  }
}
