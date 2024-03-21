import { Component, Input, OnInit } from '@angular/core';
import { Team } from '../../models/sports.model';


@Component({
  selector: 'app-league-table',
  templateUrl: './league-table.component.html',
  styleUrls: ['./league-table.component.scss'],
})
export class LeagueTableComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'points'];
  @Input() dataSource: Team[] = [];
  initialAmountTeamsDisplayed = 4;
  _originalDataSource: Team[];
  allRowsDisplayed = false;

  constructor() {
    this._originalDataSource = this.dataSource;
  }

  ngOnInit(): void {
    this._originalDataSource = this.dataSource;
    this.dataSource = this.dataSource.slice(
      0,
      this.initialAmountTeamsDisplayed
    );
  }

  toggleAllRows() {
    if (this.allRowsDisplayed) {
      this.dataSource = this.dataSource.slice(
        0,
        this.initialAmountTeamsDisplayed
      );
      this.allRowsDisplayed = false;
    } else {
      this.dataSource = this._originalDataSource.slice(0, 20);
      this.allRowsDisplayed = true;
    }
  }
}
