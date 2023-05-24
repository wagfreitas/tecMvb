import { Component, OnInit } from '@angular/core';
import { NavController , AlertController} from '@ionic/angular';
import { ClientesService } from 'src/app/services/clientes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-clientes',
  templateUrl: './add-clientes.page.html',
  styleUrls: ['./add-clientes.page.scss'],
})
export class AddClientesPage implements OnInit {
  cep: string = '';
  logradouro: string = '';
  bairro: string = '';
  complemento: string = '';
  numero: string = '';
  fone: string = '';
  cliente: string = '';

  constructor(
    private navCtrl: NavController,
    private clienteService: ClientesService,
    private alertCtrl: AlertController
  ) {}

  ngOnInit() {}

  onBack() {
    this.navCtrl.back();
  }
  onSave() {
    const dadosCliente = {
      logradouro: this.logradouro,
      numero: this.numero,
      complemento: this.complemento,
      nome: this.cliente,
      fone: this.fone,
      cep: this.cep,
    };

    this.clienteService.addCliente(dadosCliente).subscribe((res) => {
      if (res.message === 'Cliente Criado com Sucesso') {
        Swal.fire(
          'Bom Trabalho!',
          'Cadastro realizado com sucesso !',
          'success'
        )
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Algo deu errado ',
          footer: '<a href="">Verigique sua Internet</a>'
        })
      }
    });
  }

  getCep() {
    const url = `http://viacep.com.br/ws/${this.cep}/json`;
    fetch(url)
      .then((response) => response.json())
      .then((dados) => {
        this.logradouro = dados.logradouro;
        this.complemento = dados.complemento;
        this.bairro = dados.bairro;
      });
  }
}
