import { Component, Input } from '@angular/core';
import { LeagueResults, Team, Result } from '../../models/sports.model';

@Component({
  selector: 'app-results',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent {
  @Input() dataSource!: LeagueResults;
  standings!: Team[];
  topTeamsResults!: Set<Result>;
}
