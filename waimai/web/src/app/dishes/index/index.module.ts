import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index.component';
import {YzPageModule, YzSizeModule} from '@yunzhi/ng-common';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {DishesRoutingModule} from '../dishes-routing.module';
import {PipeModule} from '../pipe/pipe.module';



@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    CommonModule,
    YzSizeModule,
    YzPageModule,
    ReactiveFormsModule,
    RouterModule,
    DishesRoutingModule,
    PipeModule
  ]
})
export class IndexModule { }
