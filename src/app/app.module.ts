import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { ProductListsComponent } from './components/product-lists/product-lists.component';
import { MenuComponent } from './components/menu/menu.component';
import { ApproutingModule } from './approuting/approuting.module'
import { AddproductComponent } from './component/addproduct/addproduct.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListsComponent,
    MenuComponent,
    AddproductComponent
  ],
  imports: [
    BrowserModule,
    ApproutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
