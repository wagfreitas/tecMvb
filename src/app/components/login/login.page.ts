import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ResetPasswordPage } from '../reset-password/reset-password.page';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class LoginPage implements OnInit {

  constructor(
    private router: Router,
    private NavCtrl: NavController,
    private modalController: ModalController
  ) { }

  ngOnInit() {
  }

  onClick() {

  }
  onSignup() {
    this.router.navigate(['signup']);
  }
  onHome() {
    this.router.navigate(['/tabs/principal']);
  }

  async onForgot() {
    const modal = await this.modalController.create({
      component: ResetPasswordPage,
      cssClass: 'custom_modal',
      componentProps: { value: 123 }
    });

    await modal.present();

  }

}
