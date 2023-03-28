import { Component } from '@angular/core';
import { Serve1Service } from './serve1.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  options: string[] = ['60', '65', '70','75','80','85','90','95','100'];
  selectedOption: string = '';
  weather: number = 0;
  constructor() { }
  op: string = '';
  onSelect(no: number) {
    if (no < 0)
      this.op = 'freezing';
    else if (no >= 0 && no < 10)
      this.op = 'cold'
    else if (no >= 10 && no < 20)
      this.op = 'cool'
    else if (no >= 20 && no < 30)
      this.op = 'warm'
    else
      this.op='hot'
  }
  place: string = '';
  onsw(): void {
    //var a = document.getElementById('place').v;
    console.log(this.place);
    const EService = new Serve1Service();
    EService.onClicked(this.place);
  }
  ngOnInit(): void {
  }
}
