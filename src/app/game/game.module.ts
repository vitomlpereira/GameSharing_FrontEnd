import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {GameRoutingModule} from './game.rounting.module';

import { GameComponent } from './game.component';
import { GameAddComponent } from './game-add/game-add.component';
import { GameEditComponent } from './game-edit/game-edit.component';

import { GameService } from './game.service';
import { MaterialModule } from '../../app/core/material/material.module';



@NgModule({
  declarations: [
    GameComponent,
    GameAddComponent,
    GameEditComponent
  ],
  imports: [
    CommonModule,
    GameRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    GameService
  ]

})
export class GameModule { }
