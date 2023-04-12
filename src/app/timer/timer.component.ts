import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wta-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  start_time = new Date();
  end_time = new Date();
  time = 0;

  hours = 0;
  minutes = 0;

  is_on = false;

  ngOnInit(): void {
      
  }

  start_work() {
    this.start_time = new Date()
    this.time = 0
    this.update_time()
    this.is_on = true
  }

  end_work() {
    this.end_time = new Date()
    this.time = (this.end_time?.getTime() - this.start_time.getTime()) / 1000;
    this.update_time()
    this.is_on = false;
  }

  update_time() {
    this.minutes = Math.round(Math.floor(this.time % 3600) / 60);
    this.hours = Math.floor(this.time / 3600);
  }


}
