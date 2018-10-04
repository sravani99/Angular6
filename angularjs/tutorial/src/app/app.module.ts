import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ArrayComponent } from './array/array.component';
import { ThenComponent } from './then/then.component';
import { Arraymodule } from './array/array.module';
import { ThenModule } from './then/then.module';
import { RouterModule } from '@angular/router';
import { routes} from './app.route'
import { PageNotFound } from './pageNotFound.component';
import{ SourceComponent} from './source/source.component'
@NgModule({
  declarations: [
    AppComponent,ArrayComponent,ThenComponent,PageNotFound,SourceComponent
],
  imports: [
    BrowserModule,FormsModule,Arraymodule,ThenModule,RouterModule.forRoot(routes,{enableTracing:true})

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
