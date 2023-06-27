import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController, AlertController } from '@ionic/angular';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-add-clientes',
  templateUrl: './add-clientes.page.html',
  styleUrls: ['./add-clientes.page.scss'],
})
export class AddClientesPage implements OnInit {
  clientForm: FormGroup;

  constructor(
    private navCtrl: NavController,
    private clienteService: ClientesService,
    private alertCtrl: AlertController
  ) {
    this.clientForm = new FormGroup({
      "nome": new FormControl('', Validators.compose([
        Validators.pattern(''),
        Validators.required,
      ])),
      "cep": new FormControl('', Validators.compose([
        Validators.pattern('')
      ])),
      "logradouro": new FormControl('', Validators.compose([
        Validators.pattern('')
      ])),
      "bairro": new FormControl('', Validators.compose([
        Validators.pattern('')
      ])),
      "numero": new FormControl('', Validators.compose([
        Validators.pattern('')
      ])),
      "complemento": new FormControl('', Validators.compose([
        Validators.pattern('')
      ])),
      "fone": new FormControl('', Validators.compose([
        Validators.pattern(''),
        Validators.required,
      ]))
    })
  }

  ngOnInit() { }

  onBack() {
    this.navCtrl.back();
  }

  onSave(values: any) {
    this.clienteService.addCliente(this.clientForm.value).subscribe((res) => {
      if (res.message === 'Cliente Criado com Sucesso') {
        this.alertCtrl.create(
          {
            header: 'YESS!!!',
            subHeader: 'Tudo certo ',
            buttons: ['Dismiss']
          }
        )
      } else {
        this.alertCtrl.create(
          {
            header: 'NOOOO!!!',
            subHeader: 'Algo deu errado  ',
            buttons: ['Dismiss']
          }
        )
      }
    });
  }

  getCep() {
    const url = `http://viacep.com.br/ws/${this.clientForm.value.cep}/json`;

    fetch(url)
      .then((response) => response.json())
      .then((dados) => {
        this.clientForm.patchValue({
          logradouro: dados.logradouro,
          complemento: dados.complemento,
          bairro: dados.bairro
        });
      });
  }
}
