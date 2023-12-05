import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tickNumbers: number[] = []

  onIntervalTick(tickCount) {
    this.tickNumbers.push(tickCount)
  }
}
