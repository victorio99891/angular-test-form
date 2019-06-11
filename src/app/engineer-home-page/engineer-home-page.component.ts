import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-engineer-home-page',
  templateUrl: './engineer-home-page.component.html',
  styleUrls: ['./engineer-home-page.component.css']
})
export class EngineerHomePageComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  goHome() {
    this.router.navigate(['/']);
  }
}
