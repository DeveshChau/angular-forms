import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SimpleFormComponent } from './forms-td/simple-form/simple-form.component';
import { SampleFormComponent } from './forms-td/sample-form/sample-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleFormComponent,
    SampleFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
