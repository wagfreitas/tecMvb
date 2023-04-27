import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
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
