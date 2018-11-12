import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { MegaMenuModule } from 'primeng/megamenu';
import { ElectricmeterService } from 'src/app/services/electricmeter.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ElectricmeterCreateComponent } from './components/electricmeter-create/electricmeter-create.component';
import { ElectricmeterListComponent } from './components/electricmeter-list/electricmeter-list.component';
import { GatewaysCreateComponent } from './components/gateways-create/gateways-create.component';
import { GatewaysListComponent } from './components/gateways-list/gateways-list.component';
import { WatermeterCreateComponent } from './components/watermeter-create/watermeter-create.component';
import { WatermeterListComponent } from './components/watermeter-list/watermeter-list.component';
import { FormsModule } from '@angular/forms';
import { WatermeterService } from 'src/app/services/watermeter.service';
import { Gateways } from 'src/app/models/gateways';
import { GatewaysService } from 'src/app/services/gateways.service';

@NgModule({
  declarations: [
    AppComponent,
    ElectricmeterListComponent,
    ElectricmeterCreateComponent,
    WatermeterListComponent,
    WatermeterCreateComponent,
    GatewaysListComponent,
    GatewaysCreateComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    TableModule,
    CardModule,
    ButtonModule,
    MegaMenuModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ElectricmeterService, WatermeterService, GatewaysService],
  bootstrap: [AppComponent]
})
export class AppModule {}
