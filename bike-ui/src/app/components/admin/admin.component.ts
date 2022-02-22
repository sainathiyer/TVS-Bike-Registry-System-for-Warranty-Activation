import { Component, OnInit } from '@angular/core';
import { BikeService } from 'src/app/services/bike.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public bikes;

  constructor(private bikeServcie: BikeService) { }

  ngOnInit(): void {
    this.getBikes();
  }

  getBikes(){
    this.bikeServcie.getBikes().subscribe(
      data => {this.bikes=data},
      err => console.error(err),
      () => console.log('bikes loaded')
    );
  }

}
