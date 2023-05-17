import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { FormBuilder, FormArray, FormGroup, Validators, FormControl, NgForm } from '@angular/forms';

interface Produto {
  tipo: string;
  valor: string;
  flag: string;
}

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {
   prodForm: FormGroup;
   produtos: FormArray;
   materiais: FormArray;
   deslocamentos: FormArray;;


  @ViewChild("f", { read: true, static: false }) userProfileForm: NgForm;

  custos = [
    {
      tipo: 'Carro',
      valor: '5.00',
      flag: '1',
    },
    {
      tipo: 'Moto',
      valor: '5.00',
      flag: '1',
    },
    {
      tipo: 'Metro',
      valor: '9.00',
      flag: '1',
    },
    {
      tipo: 'Hora Trabalhada',
      valor: '50.00',
      flag: '2',
    },

    {
      tipo: 'Hora Assistente',
      valor: '25.00',
      flag: '2',
    },
    {
      tipo: 'Carburador',
      valor: '100.00',
      flag: '3',
    },
    {
      tipo: 'Vela de igniçao',
      valor: '50.00',
      flag: '3',
    },
    {
      tipo: 'Bomba de combustível',
      valor: '30.00',
      flag: '3',
    },
  ];

  constructor(
    private fb: FormBuilder
  ) {

  }

  ngOnInit() {
     this.cadProdForm();
  }


  cadProdForm(){
    this.prodForm = this.fb.group({
      produtos: this.fb.array([this.initProdutosFields()]),
      materiais: this.fb.array([this.initMateriaisFields()]),
      deslocamentos: this.fb.array([this.initDeslocamentosFields()])
    })

  }

  initProdutosFields(): FormGroup{
    return this.fb.group({
      tipoProd: [''],
      valorProd: ['']
    })

  }

  initMateriaisFields(): FormGroup {
    return this.fb.group({
      nomeMaterial: [''],
      qtdeMaterial: [''],
      valorUnitMaterial: ['']
    })
  }

  initDeslocamentosFields(): FormGroup{
    return this.fb.group({
      tipoDeslocamento: [''],
      distancia: [''],
      valorUnitDeslocamento: ['']
    })



  }







}
