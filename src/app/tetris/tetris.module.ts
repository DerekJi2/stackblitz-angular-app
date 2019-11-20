import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../_shared/shared.module';

import { TetrisGameComponent } from './tetris-game/tetris-game.component';

@NgModule({
  declarations: [
    TetrisGameComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    TetrisGameComponent,    
  ],
  exports: [
    TetrisGameComponent,
  ]
})
export class TetrisModule { }
