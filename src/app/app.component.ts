import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

  string1: string = ''
  reverseStringName = ''
  reverseString(event: any){
    // this.reverseStringName = ''
    this.reverseStringName = event.target.value.split("").reverse("").join("")
    console.log(this.reverseStringName)
    console.log(event.target.value)
  }
}
