import { TestBed } from '@angular/core/testing';
import { LeaguesService } from '../app/services/leagues.service';

describe('LeaguesService', () => {
  let service: LeaguesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeaguesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
