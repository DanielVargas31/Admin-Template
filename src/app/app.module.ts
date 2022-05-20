import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { MasterPageComponent } from './components/master-page/master-page.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomSelectComponent } from './shared/custom-select/custom-select.component';
import { CustomSelectSearchComponent } from './shared/custom-select-search/custom-select-search.component';
import { LoaderComponent } from './shared/loader/loader.component';
import { CustomFilterPipe } from './pipes/custom-filter.pipe';
import { MasterPageModule } from './components/master-page/master-page.module';
import { DatatableViewComponent } from './components/datatable-view/datatable-view.component';
import { ConfigurationComponent } from './components/configuration/configuration.component';
import { UsersComponent } from './components/configuration/users/users.component';
import { SystemComponent } from './components/configuration/system/system.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MastersComponent } from './components/configuration/masters/masters.component';
import { DatatableComponent } from './shared/datatable/datatable.component';
import { HttpConfigInterceptor } from './interceptors/httpconfig.interceptor';
import { NotFoundPageComponent } from './shared/not-found-page/not-found-page.component';
import { UnauthorizedComponent } from './shared/unauthorized/unauthorized.component';
import { ReasonsComponent } from './components/configuration/masters/reasons/reasons.component';
import { SubReasonsComponent } from './components/configuration/masters/sub-reasons/sub-reasons.component';
import { ResponsabilitiesComponent } from './components/configuration/masters/responsabilities/responsabilities.component';
import { CustomCalendarComponent } from './shared/custom-calendar/custom-calendar.component';
import { DatatableFilterPipe } from './pipes/datatable-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MasterPageComponent,
    DashboardComponent,
    CustomSelectComponent,
    CustomSelectSearchComponent,
    LoaderComponent,
    CustomFilterPipe,
    DatatableViewComponent, 
    ConfigurationComponent,
    UsersComponent,
    SystemComponent,
    MastersComponent,
    DatatableComponent,
    NotFoundPageComponent,
    UnauthorizedComponent,
    ReasonsComponent,
    SubReasonsComponent,
    ResponsabilitiesComponent,
    CustomCalendarComponent,
    DatatableFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MasterPageModule,
    HttpClientModule,
    PaginationModule.forRoot(),ModalModule.forRoot(),TooltipModule.forRoot(), TabsModule.forRoot(),
    PopoverModule.forRoot(), BsDatepickerModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpConfigInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  exports: [
    CustomSelectComponent,
    CustomSelectSearchComponent,
    DatatableComponent,
    CustomCalendarComponent
  ],
})
export class AppModule { }
