import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import{FormsModule,ReactiveFormsModule} from '@angular/forms'
import { HttpClientModule} from '@angular/common/http';
import { SurComponent } from './sur/sur.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    SurComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
