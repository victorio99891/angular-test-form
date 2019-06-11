import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-programmer-home-page',
  templateUrl: './programmer-home-page.component.html',
  styleUrls: ['./programmer-home-page.component.css']
})
export class ProgrammerHomePageComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  goHome() {
    this.router.navigate(['/']);
  }
}
