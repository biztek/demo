import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//imported components
 
import { ViewComponent } from './view/view.component';
import { ViewCaseComponent } from './view-case/view-case.component';
import { OpenDatabaseComponent } from './open-database/open-database.component';
import { HomeComponent } from './home/home.component';
import { ImportCasesComponent } from './import-cases/import-cases.component';
import { TransmitCasesComponent } from './transmit-cases/transmit-cases.component';
import { CasImportComponent } from './cas-import/cas-import.component';
import { RunCaseComponent } from './run-case/run-case.component';
import { ControlListComponent } from './control-list/control-list.component';
// component url paths
const routes: Routes = [
{path: 'view-find',component: ViewComponent },
{path: 'view-case',component: ViewCaseComponent },
{path: 'open-database',component: OpenDatabaseComponent },
{path: 'home',component: HomeComponent },
{path: 'import-cases',component: ImportCasesComponent },
{path: 'transmit-cases',component: TransmitCasesComponent },
{path: 'cas-import',component: CasImportComponent },
{path: 'run-case',component: RunCaseComponent },
{path: 'control-list',component: ControlListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// 'routingComponents'  has declared in app.module.ts so that all components are imported

export const routingComponents = [ViewComponent,ViewCaseComponent]
