import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ServiceService } from './service.service';
import { FormsModule } from '@angular/forms';
import {DeleteComponent} from './delete/delete.component';
import { HomeComponent } from './home/home.component'
const appRoutes: Routes = [
  {path:'', component: HomeComponent},
  {path:'delete', component: DeleteComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    DeleteComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
