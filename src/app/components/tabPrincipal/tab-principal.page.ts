import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';


@Component({
  selector: 'app-tab-principal',
  templateUrl: 'tab-principal.page.html',
  styleUrls: ['tab-principal.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class TabPrincipalPage {
  constructor() {}
}
