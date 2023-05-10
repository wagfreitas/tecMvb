import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {

  constructor(
    public modalController: ModalController,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onClick() {

  }

  onClose() {
    this.modalController.dismiss();
  }

  onSubmit() {
    this.router.navigate(['forget-password']);
    this.modalController.dismiss();
  }

}
