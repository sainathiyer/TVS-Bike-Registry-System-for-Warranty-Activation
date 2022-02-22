import { Component, OnInit } from '@angular/core';
import { Form, FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { BikeService } from 'src/app/services/bike.service';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  models: string[] = [
    'TVS Wego 110CC',
    'TVS Apache RTR 160',
    'TVS Jupiter 165',
  ];
  bikeform: FormGroup;
  validMessage: string = "";
  constructor(private bikeService: BikeService) { }

  ngOnInit(): void {
    this.bikeform = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      model: new FormControl('', Validators.required),
      serialNumber: new FormControl('', Validators.required),
      purchasePrice: new FormControl('', Validators.required),
      purchaseDate: new FormControl('', Validators.required),
      contact: new FormControl()
    });
  }

  submitRegistration(){
    if(this.bikeform.valid){
      this.validMessage="Your Bike Registration has been Submitted. Thankyou!";
      this.bikeService.createBikeRegistration(this.bikeform.value).subscribe(
        data => {
          this.bikeform.reset();
          return true;
        },
        error => {
          return throwError(error);
        }
      )
    } else{
      this.validMessage = "Please fill out the form before Submitting!";
    }
  }

}
