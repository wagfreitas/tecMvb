
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-concept-detail',
  templateUrl: './concept-detail.page.html',
  styleUrls: ['./concept-detail.page.scss'],
})
export class ConceptDetailPage implements OnInit {

  constructor(
    private router: Router,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  onBack() {
    this.navCtrl.back();
  }

  onGoing() {
    this.router.navigate(['event-joining']);
  }

  onDiscussion() {
    this.router.navigate(['discussion']);
  }

  onTicket() {
    this.router.navigate(['ticket']);
  }

  onOrganizer() {
    this.router.navigate(['organizer']);
  }

}
