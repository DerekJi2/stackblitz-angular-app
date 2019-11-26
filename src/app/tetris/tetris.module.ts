import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { TetrisGameComponent } from './tetris-game/tetris-game.component';
import { ControlPanelComponent } from './control-panel/control-panel.component';
import { TetrisPlaygroundComponent } from './tetris-playground/tetris-playground.component';
import { InfoPanelComponent } from './info-panel/info-panel.component';
import { TetrisBoardComponent } from './tetris-board/tetris-board.component';
import { TetrisSquareUnitComponent } from './tetris-square-unit/tetris-square-unit.component';

@NgModule({
  declarations: [
    TetrisGameComponent,
    ControlPanelComponent,
    TetrisPlaygroundComponent,
    InfoPanelComponent,
    TetrisBoardComponent,
    TetrisSquareUnitComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
  ],
  exports: [
    TetrisGameComponent,
  ]
})
export class TetrisModule { }
