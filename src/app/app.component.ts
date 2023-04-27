import { Component, EnvironmentInjector, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class AppComponent {
  public environmentInjector = inject(EnvironmentInjector);

  constructor(
    private router: Router,
    private menuController: MenuController
  ) {}

  clientes() {
    this.router.navigate(['clientes']);
  }
  logout() {
    this.router.navigate(['login']);
    this.menuController.close();
  }
  home() {
    this.router.navigate(['home']);
    this.menuController.close();
  }
  profile() {
    this.router.navigate(['artist-profile']);
    this.menuController.close();
  }
  produtos() {

  }
  servicos() {

  }
  payment() {

  }
  notification() {

  }
  settings() {

  }
  about() {

  }
}
