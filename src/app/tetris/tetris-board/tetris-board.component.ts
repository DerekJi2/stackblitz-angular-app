import { Component, OnInit } from '@angular/core';
import { SquareMatrixService } from '../../_core/services/square-matrix.service';

@Component({
  selector: 'app-tetris-board',
  templateUrl: './tetris-board.component.html',
  styleUrls: ['./tetris-board.component.scss']
})
export class TetrisBoardComponent implements OnInit {

  constructor(
    public matrixSvc: SquareMatrixService,
  ) {
  }

  get Columns(): Array<number[]> {
    const cols = this.matrixSvc.columns();
    console.log(cols.length);
    return cols;
  }

  public Row(x: number): number[] {
    return this.matrixSvc.row(x);
  }

  ngOnInit() {
    this.matrixSvc.reset();

    this.matrixSvc.spreadUpAndDown();
  }

}