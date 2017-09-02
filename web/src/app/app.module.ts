import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ApiService} from './services/api.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MdButtonModule,
  MdCardModule,
  MdCheckboxModule,
  MdInputModule,
  MdListModule,
  MdMenuModule,
  MdProgressBarModule,
  MdRadioModule,
  MdSelectModule,
  MdSlideToggleModule
} from '@angular/material';
import {MethodSelectorComponent} from './method-selector/method-selector.component';
import {MethodActionsComponent} from './method-actions/method-actions.component';
import {MethodFormComponent} from './method-actions/method-form/method-form.component';
import {ResponseFormComponent} from './method-actions/response-form/response-form.component';
import {MethodsFormService} from "./services/methods-form-service";

@NgModule({
  declarations: [
    AppComponent,
    MethodSelectorComponent,
    MethodActionsComponent,
    MethodFormComponent,
    ResponseFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    JsonpModule,
    BrowserAnimationsModule,
    MdRadioModule,
    MdButtonModule,
    MdInputModule,
    MdButtonModule,
    MdProgressBarModule,
    MdListModule,
    MdCardModule,
    MdMenuModule,
    MdSelectModule,
    MdCheckboxModule,
    MdSlideToggleModule
  ],
  providers: [MethodsFormService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
