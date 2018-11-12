import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ElectricmeterListComponent } from 'src/app/components/electricmeter-list/electricmeter-list.component';
import { ElectricmeterCreateComponent } from 'src/app/components/electricmeter-create/electricmeter-create.component';
import { WatermeterListComponent } from 'src/app/components/watermeter-list/watermeter-list.component';
import { WatermeterCreateComponent } from 'src/app/components/watermeter-create/watermeter-create.component';
import { GatewaysListComponent } from 'src/app/components/gateways-list/gateways-list.component';
import { GatewaysCreateComponent } from 'src/app/components/gateways-create/gateways-create.component';

const appRoutes: Routes = [
  {
    path: 'electricmeter-list',
    component: ElectricmeterListComponent,
    data: { title: 'List of Electricmeter' }
  },
  {
    path: 'electricmeter-detail/:id',
    component: ElectricmeterCreateComponent,
    data: { title: 'Detail of Electricmeter' }
  },
  {
    path: 'electricmeter-create',
    component: ElectricmeterCreateComponent,
    data: { title: 'Create Electricmeter' }
  },
  {
    path: 'watermeter-list',
    component: WatermeterListComponent,
    data: { title: 'List of Watermeter' }
  },
  {
    path: 'watermeter-detail/:id',
    component: WatermeterCreateComponent,
    data: { title: 'Detail of Watermeter' }
  },
  {
    path: 'watermeter-create',
    component: WatermeterCreateComponent,
    data: { title: 'Create Watermeter' }
  },
  {
    path: 'gateways-list',
    component: GatewaysListComponent,
    data: { title: 'List of Gateways' }
  },
  {
    path: 'gateways-detail/:id',
    component: GatewaysCreateComponent,
    data: { title: 'Detail of Gateways' }
  },
  {
    path: 'gateways-create',
    component: GatewaysCreateComponent,
    data: { title: 'Create Gateways' }
  },
  { path: '', redirectTo: '/electricmeter-list', pathMatch: 'full' },
  { path: '**', component: ElectricmeterListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
