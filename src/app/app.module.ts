import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MarkdownModule } from 'ngx-markdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogPostListComponent } from './components/blog-post-list/blog-post-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './components/material/material.module';
import { SportsDashboardComponent } from './components/sports-dashboard/sports-dashboard.component';
import { MatTableModule } from '@angular/material/table';
import { LeagueTableComponent } from './components/league-table/league-table.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogPostListComponent,
    SportsDashboardComponent,
    LeagueTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MarkdownModule.forRoot(),
    MaterialModule,
    BrowserAnimationsModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
