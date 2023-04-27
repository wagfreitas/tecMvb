import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { AgendamentosPage } from '../agendamentos/agendamentos.page';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.page.html',
  styleUrls: ['./agenda.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AgendaPage implements OnInit {

  constructor(
    private modalController: ModalController,
    private router: Router,
    private NavCtrl: NavController
  ) { }

  ngOnInit() {
  }

  onClick() {

  }

  onWork() {
    this.router.navigate(['artist-work']);
  }
  onBack() {
    this.NavCtrl.back();
  }
  onFollow() {
    this.router.navigate(['following']);
  }

  async onService() {
    const modal = await this.modalController.create({
      component: AgendamentosPage,
      // cssClass: 'make_modal',
      showBackdrop: true,
      componentProps: { value: 123 }
    });

    await modal.present();

  }

}
