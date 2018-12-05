import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule} from '@angular/router';
import {ProductListsComponent } from '../components/product-lists/product-lists.component';
import { AddproductComponent} from '../component/addproduct/addproduct.component';
const routes:Routes = [
  {path:"",component:ProductListsComponent},

  {path:"add",component:AddproductComponent},
]


@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports:[
    RouterModule
  ],

  declarations: [],
})
export class ApproutingModule { }
