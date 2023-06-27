import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { NavController, AlertController } from '@ionic/angular';
import { CadastrosService } from 'src/app/services/cadastros.service';

@Component({
  selector: 'app-cadastro-geral',
  templateUrl: './cadastro-geral.page.html',
  styleUrls: ['./cadastro-geral.page.scss'],
})
export class CadastroGeralPage implements OnInit {
  serviceForm: FormGroup;
  
  constructor(
    private navCtrl: NavController,
    private router: Router,
    private cadastroService: CadastrosService,
    private alertCtrl: AlertController
  ) {
    this.serviceForm = new FormGroup({
      "nome": new FormControl('', Validators.compose([
        Validators.pattern(''),
        Validators.required,
      ])),
      "valor": new FormControl('', Validators.compose([
        Validators.pattern(''),
        Validators.required,
      ]))
    })
  }

  ngOnInit() {
  }
  
  onBack() {
    this.router.navigate(['tabs/home']);
  }

  onSave(values: any) {
    this.cadastroService.addCliente(this.serviceForm.value).subscribe((res) => {
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
}
