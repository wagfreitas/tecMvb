import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroGeralPageRoutingModule } from './cadastro-geral-routing.module';

import { CadastroGeralPage } from './cadastro-geral.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    CadastroGeralPageRoutingModule
  ],
  declarations: [CadastroGeralPage]
})
export class CadastroGeralPageModule {}
