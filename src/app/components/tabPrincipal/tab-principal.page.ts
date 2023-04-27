import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { UtilService } from 'src/app/services/util.service';


@Component({
  selector: 'app-tab-principal',
  templateUrl: 'tab-principal.page.html',
  styleUrls: ['tab-principal.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class TabPrincipalPage implements OnInit {
[x: string]: any;
  image1: any
your: any;
  constructor(
    public util: UtilService,
    private router: Router
  ) {}

  ngOnInit(): void {

    this.image1 = '../../assets/images/4.jpg'

  }

  onProfile() {
    this.router.navigate(['artist-profile']);
  }

  onAgenda() {
    this.router.navigate(['agenda']);
  }
  onClick() {

  }


}
