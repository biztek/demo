import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule , routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatDividerModule} from '@angular/material/divider';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ViewCaseComponent } from './case/view-case/view-case.component';
import {MatTreeModule} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import { ListViewComponent } from './case/view-case/list-view/list-view.component';
import { WindowFrameComponent } from './window-frame/window-frame.component';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import { MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatRadioModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { CaseEditComponent } from './case/view-case/case-edit/case-edit.component';
import { CaseEditreSolutionComponent } from './case/view-case/case-editre-solution/case-editre-solution.component';
import { OpenDatabaseComponent } from './file/open-database/open-database.component';
import { ImportCasesComponent } from './file/import/import-cases/import-cases.component';
import { TransmitCasesComponent } from './file/export/transmit-cases/transmit-cases.component';
import { CasImportComponent } from './cas-import/cas-import.component';
import { TreeModule } from 'angular-tree-component';
import { RunCaseComponent } from './run-case/run-case.component';
import { ControlListComponent } from './control-list/control-list.component';
import { NewDatabaseComponent } from './file/new-database/new-database.component';
import { SharedFollowUpComponent } from './file/import/shared-follow-up/shared-follow-up.component';
import { ReloadCasesComponent } from './file/import/reload-cases/reload-cases.component';
import { ExportCasesComponent } from './file/export/export-cases/export-cases.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    // ViewCaseComponent,
    ListViewComponent,
    WindowFrameComponent,
    routingComponents,
    CaseEditComponent,
    CaseEditreSolutionComponent,
    OpenDatabaseComponent,
    ImportCasesComponent,
    TransmitCasesComponent,
    CasImportComponent,
    RunCaseComponent,
    ControlListComponent,
    NewDatabaseComponent,
    SharedFollowUpComponent,
    ReloadCasesComponent,
    ExportCasesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatDividerModule,
    MatTreeModule,
    MatIconModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    FormsModule,
    ReactiveFormsModule,
    AgGridModule.withComponents([]),
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatSelectModule,
    MatTableModule,
    MatIconModule,
    MatTabsModule,
    TreeModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
