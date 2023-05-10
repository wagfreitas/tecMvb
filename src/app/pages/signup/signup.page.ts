
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { AuthenticationService } from 'src/app/services/authentication.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  email: string = '';
  loginForm: FormGroup;
  errorMessage: string = '';
  validation_messages!: {
    'email': [
      {type: 'required', message: 'Email é requerido'},
      {type: 'pattern', message: 'Digite um email válido' }
    ],
    'password': [
      {type: 'required', message: 'Senha é requerido'},
      {type: 'minLenght', message: 'Senha deve ter ao  menos 5 caracteres' }
    ],
  }
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private navCtrl: NavController
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
  }

  onback() {
    this.navCtrl.back();
  }

  doCadastro(values: any) {
    const {email, password } = values
    const auth = getAuth();
    let user: any
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        user = userCredential.user.uid;
        if (user) {
          this.router.navigate(['/'])
        }


      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

      });

  }

  onForgot() {

  }

  onLogin() {
    this.router.navigate(['/'])
  }

  onfacebook() {

  }

  onGoogle() {

  }

  onSignUp() {
    this.router.navigate(['login']);
  }

}
