import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { TetrisGameComponent } from './tetris-game/tetris-game.component';

@NgModule({
  declarations: [
    TetrisGameComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    TetrisGameComponent,
  ]
})
export class TetrisModule { }
