import { Component } from '@angular/core';
import { League } from '../../models/sports.model';
import { LeaguesService } from 'src/app/services/leagues.service';

@Component({
  selector: 'app-sports-dashboard',
  templateUrl: './sports-dashboard.component.html',
  styleUrls: ['./sports-dashboard.component.scss'],
})
export class SportsDashboardComponent {
  data: any = {};

  constructor(private leaguesService: LeaguesService) {}

  ngOnInit(): void {
    this.leaguesService.getLeagues().subscribe((data) => {
      this.data = data;
    });
  }
}
