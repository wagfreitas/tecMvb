import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Preferences } from '@capacitor/preferences';
import { ResetPasswordPage } from '../reset-password/reset-password.page';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { AuthenticationService } from 'src/app/services/authentication.service';

import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  state: boolean = false;
  type: string = "password";
  loginForm: FormGroup;
  errorMessage: string = '';
  validation_messages!: {
    'email': [
      { type: 'required', message: 'Email é requerido' },
      { type: 'pattern', message: 'Digite um email válido' }
    ],
    'password': [
      { type: 'required', message: 'Senha é requerido' },
      { type: 'minLenght', message: 'Senha deve ter ao  menos 5 caracteres' }
    ],
  }

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private modalController: ModalController,
    private utilService: UtilService
  ) {
    this.loginForm = new FormGroup({
      'email': new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      'password': new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(5)
      ])),
    })

  }

  ngOnInit() {
    this.getStorage();
    if (localStorage['CapacitorStorage.isLoggedIn'] === 'true') {
      this.router.navigate(['/tabs/home'])
    }
  }

  onClick() {

  }

  doLogin(values: any) {
    const { email, password } = values
    const auth = getAuth();
    let user: any
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        user = userCredential.user.uid;
        if (user) {
          this.setStorage();
          this.router.navigate(['/tabs/home'])
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        this.utilService.errorToast('Ocorreu um Erro na Autenticação, Verifique Email e Senha', 'red')
      });
  }

  changeType(valor: any) {
    if (valor) {
      return "text";
    };
    return "password";
  }

  passwordView() {
    this.state = !this.state
    this.type = this.changeType(this.state)
  }

  async setStorage() {
    await Preferences.set({
      key: 'isLoggedIn',
      value: 'true'
    })
  }

  async getStorage() {
    async () => {
      const { value } = await Preferences.get({ key: 'isLoggedIn' });
    }
  }

  onSignup() {
    this.router.navigate(['signup']);
  }
  onHome() {
    this.router.navigate(['/tabs/home']);
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
