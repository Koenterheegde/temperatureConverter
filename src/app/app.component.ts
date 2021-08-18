import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  result!:string
  typeOfDegrees!:string
  amountOfDegrees!:number

  calculate() {
    if (this.amountOfDegrees) {
      if (this.typeOfDegrees == "Fahrenheit") {
        this.result = ((this.amountOfDegrees-32)*(5/9)).toString()+'\xB0C'
      } else if (this.typeOfDegrees == "Celsius") {
        this.result = ((9/5*this.amountOfDegrees)+32).toString()+'\xB0F'
      } else {
        this.result = "No type selected!"
      }
    }else{
      this.result = "Enter an amount of degrees"
    }
  }


}
