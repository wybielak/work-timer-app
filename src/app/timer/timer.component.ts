import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wta-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  start_time = new Date();
  start_hours: any;
  start_minutes: any;

  end_time = new Date();
  end_hours: any;
  end_minutes: any;

  time = 0

  hours = 0;
  minutes = 0;
  seconds = 0;

  intv: any;

  is_on = false;

  ngOnInit(): void {
      
  }

  timeInator() {
    this.time += 1;
    this.update_time();
  }

  start_work() {
    this.start_time = new Date();
    this.intv = setInterval(() => this.timeInator(), 1000);
    
    this.start_hours = this.start_time.getHours();
    this.start_minutes = this.start_time.getMinutes();

    this.time = 0;
    this.is_on = true;
  }

  end_work() {
    this.end_time = new Date();
    clearInterval(this.intv);

    this.end_hours = this.end_time.getHours();
    this.end_minutes = this.end_time.getMinutes();

    this.is_on = false;
  }
  
  update_time() {
    this.seconds = Math.floor(this.time % 60);
    this.minutes = Math.floor((this.time / 60) % 60);
    this.hours = Math.floor(this.time / 3600);
  }
}
