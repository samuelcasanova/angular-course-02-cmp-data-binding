import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.css'
})
export class GameControlComponent {
  incrementalNumber = 1
  interval: NodeJS.Timeout
  @Output('intervalTick') intervalTick = new EventEmitter<number>()

  onStart() {
    if (!this.interval) {
      this.interval = setInterval(() => {
        this.intervalTick.emit(this.incrementalNumber++)
      }, 1000)
    }
  }

  onStop() {
    if (this.interval) {
      clearInterval(this.interval)
    }
  }
}
