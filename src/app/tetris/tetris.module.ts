import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { TetrisGameComponent } from './tetris-game/tetris-game.component';
import { ControlPanelComponent } from './control-panel/control-panel.component';
import { TetrisPlaygroundComponent } from './tetris-playground/tetris-playground.component';
import { InfoPanelComponent } from './info-panel/info-panel.component';

@NgModule({
  declarations: [
    TetrisGameComponent,
    ControlPanelComponent,
    TetrisPlaygroundComponent,
    InfoPanelComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    TetrisGameComponent,
  ]
})
export class TetrisModule { }
