
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { CalendarComponent } from 'ionic2-calendar';
import * as moment from 'moment';

import { AgendaService } from 'src/app/services/agenda.service';
import { Agenda } from 'src/app/shared/model/agenda';


@Component({
  selector: 'app-my-calendar',
  templateUrl: './my-calendar.page.html',
  styleUrls: ['./my-calendar.page.scss'],
})
export class MyCalendarPage implements OnInit {
  eventSource = [];
  viewTitle: string;
  numEvent: number

  calendar = {
    mode: 'month',
    currentDate: new Date(),
  };

  current: any = 1;
  selectedDate: Date;

  @ViewChild(CalendarComponent) myCal: CalendarComponent;

  bookings: any[] = [];



  constructor(
    private navCtrl: NavController,
    private router: Router,
    private AgendaService: AgendaService
  ) {
    this.AgendaService.getAgenda().subscribe((ret) => {
      console.log(ret)
    this.createRandomEvents(ret)
    })
  }

  slideOpts3 = {
    slidesPerView: 3.5,
  };

  ngOnInit() {

  }

  next() {
    this.myCal.slideNext();
  }

  back() {
    this.myCal.slidePrev();
  }

  onViewTitleChanged(title) {
    this.viewTitle = title;
  }

  onDateSelected(event) {
    const events = this.eventSource.filter(x => moment(x.startTime).format('DD-MM-YYYY') == moment(event).format('DD-MM-YYYY'));
    this.bookings = events;
  }

  // Calendar event was clicked
  async onEventSelected(event) {
    console.log(event);
  }

  createRandomEvents(agendaList) {


  var events = [];

  agendaList.map(res => {

    var date = new Date();
    var eventType = res.status;
    var startDay = new Date(res.dateInicio);
    var endDay = new Date(res.dateFim);
    var categoria = res.categoria;


      events.push({
        title: res.name,
        startTime: startDay,
        endTime: endDay,
        categoria: categoria,
        allDay: true,
        cliente: res.cliente,
        endereco: res.address,

      })
  })

    this.eventSource = events;
    console.log(this.eventSource);
  }

  removeEvents() {
    this.eventSource = [];
  }

  onMenu() {
    this.router.navigate(['tabs/home']);

  }

  onDetail() {
    this.router.navigate(['concept-detail']);
  }

  goToAddEvent(){
    this.router.navigate(['tabs/tab5'])
  }

}
