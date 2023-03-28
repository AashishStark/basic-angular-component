import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Serve1Service {
  onClicked(place: string) {
    if (place == 'Chennai')
      alert("Temperature is too high");
    else if(place=="Madurai")
      alert("Temperature is normal");
  }
  constructor() { }
}
