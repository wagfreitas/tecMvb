import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilService } from 'src/app/services/util.service';
import { ServicosManagementService } from 'src/app/services/servicos-management.service';
import { AgendaService } from 'src/app/services/agenda.service';

@Component({
  selector: 'app-tab-principal',
  templateUrl: './tab-principal.page.html',
  styleUrls: ['./tab-principal.page.scss'],
})
export class TabPrincipalPage implements OnInit {

  [x: string]: any;
  image1: any
  your: any;
  color1: string
  constructor(
    public util: UtilService,
    private router: Router,
    private servicoManagement: ServicosManagementService,
    private agendaService: AgendaService
  ) { }

  ngOnInit(): void {
    this.agendaService.getAllAgenda();
    this.agendaService.getAgenda().subscribe(res => {
      res
    })
  }

  onClientes() {
    this.router.navigate(['/add-clientes']);
  }

  onAgenda() {
    this.router.navigate(['tabs/tab3']);
  }
  onClick() {

  }

  onServicos() {
    this.router.navigate(['/cad-geral']);
  }
}
