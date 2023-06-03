import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { FormBuilder, FormArray, FormGroup, Validators, FormControl, NgForm } from '@angular/forms';

import { AgendaService } from 'src/app/services/agenda.service';
import { UtilService } from 'src/app/services/util.service';

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
   custosForm: FormGroup;
   horas: FormArray;
   materiais: FormArray;
   deslocamentos: FormArray;
   submitted = false;
   final = {};
   arrayMaterial = [];
   arrayDeslocamento = [];
   arrayHoras = [];
   finalMateriais = [];
   finalDeslocamento = [];
   finalHoras = [];
   openMaterial: boolean = false;
   openHoras: boolean= false;
   openDeslocamentos: boolean= false;
   ValorTotal: number = 0;
   valorMateriais:number =0;
   valorDeslocamentos: number = 0;
   valorHoras: number = 0;
   confirma: boolean = true;
   idAgenda: string;
   result: any

  @ViewChild("f", { read: true, static: false }) cadPaymentForm: NgForm;

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
    private fb: FormBuilder,
    private agendaService: AgendaService,
    private utilService: UtilService
  ) {


  }

  ngOnInit() {

    this.idAgenda = this.agendaService.getIdAgenda()

    this.arrayMaterial = this.custos.filter(x => x.flag === '3');
    this.arrayHoras= this.custos.filter(x => x.flag === '2');
    this.arrayDeslocamento = this.custos.filter(x => x.flag === '1');


     this.cadProdForm();

  }

  get f() {
    return this.custosForm.controls;
  }


  cadProdForm(){
    this.custosForm = this.fb.group({
      horas: this.fb.array([this.initHorasFields()]),
      materiais: this.fb.array([this.initMateriaisFields()]),
      deslocamentos: this.fb.array([this.initDeslocamentosFields()])
    })

  }

  initHorasFields(): FormGroup{
    return this.fb.group({
      tipoHoras: ['', Validators.required],
      qtdeHoras: ['', Validators.required],
      valorHoras: ['']
    })

  }

  initMateriaisFields(): FormGroup {
    return this.fb.group({
      nomeMaterial: ['', Validators.required],
      qtdeMaterial: ['', Validators.required],
      valorUnitMaterial: ['']
    })
  }

  initDeslocamentosFields(): FormGroup{
    return this.fb.group({
      tipoDeslocamento: ['', Validators.required],
      distancia: ['', Validators.required],
      valorUnitDeslocamento: ['']
    })

  }


  addMaterial(i): void {
    const int = i
    this.materiais.push(this.initMateriaisFields());
  }

  addHoras(h): void {
    const int = h

    this.horas = this.custosForm.get("horas") as FormArray;
    this.horas.push(this.initHorasFields());
  }

  addDeslocamento(h): void {
    const int = h

    this.deslocamentos = this.custosForm.get("deslocamentos") as FormArray;
    this.deslocamentos.push(this.initDeslocamentosFields());


  }


  removeMaterial(i: number): void {
    this.materiais = this.custosForm.get("materiais") as FormArray;
    this.materiais.removeAt(i);
  }

  removeHoras(i: number): void {
    this.horas= this.custosForm.get("horas") as FormArray;
    this.horas.removeAt(i);
  }

  removeDeslocamento(i: number): void {
    this.deslocamentos= this.custosForm.get("deslocamentos") as FormArray;
    this.deslocamentos.removeAt(i);
  }


  manager(val: any): void {
    if(this.confirma != true){
      this.ValorTotal = 0;
      this.valorMateriais = 0;
      this.valorHoras = 0;
      this.valorDeslocamentos = 0;
      this.finalDeslocamento = [];
      this.finalHoras = [];
      this.finalMateriais= [];
    }
    this.sumMateriais(val.materiais);
    this.sumDeslocamentos(val.deslocamentos);
    this.sumHoras(val.horas)
    this.submitted = true;
    this.confirma = false

  }

  gravar(){
    this.final = {
      materiais: this.finalMateriais,
      deslocamentos: this.finalDeslocamento,
      horas: this.finalHoras
    }

    this.agendaService.updateAgenda(this.final, this.idAgenda).subscribe(res =>{
      this.result = res
      this.utilService.showSimpleAlert(res.mensagem)

    })

  }

  sumMateriais(valMat){
    const valorTotal = 0
    valMat.forEach(element => {
      const materialTipo = element.nomeMaterial
      const materialFilter = this.arrayMaterial.find(x => x.tipo === materialTipo && x.flag === '3')
      const valorSel = materialFilter.valor
      const valor = parseFloat(valorSel) * parseFloat(element.qtdeMaterial);
      this.valorMateriais = this.valorMateriais + valor

      let finalMat = {
        nomeMaterial : element.nomeMaterial,
        qtdeMaterial: element.qtdeMaterial,
        valorMaterial: valor
      }
      this.finalMateriais.push(finalMat)
      this.ValorTotal = this.ValorTotal + valor
    });

  }

  sumDeslocamentos(valDesl){

    valDesl.forEach(element => {
      const deslocamentoTipo = element.tipoDeslocamento
      const deslocamentoFilter = this.arrayDeslocamento.find(x => x.tipo === deslocamentoTipo && x.flag === '1')
      const valorSel = deslocamentoFilter.valor
      const valor = parseFloat(valorSel) * parseFloat(element.distancia);
      this.valorDeslocamentos = this.valorDeslocamentos + valor;

      let finalDesl= {
        tipoDeslocamento : element.tipoDeslocamento,
        distancia: element.distancia,
        valorDeslocamento: valor
      }
      this.finalDeslocamento.push(finalDesl)
      this.ValorTotal = this.ValorTotal + valor;
    });

  }

  sumHoras(valHoras){

    valHoras.forEach(element => {
      const horasTipo = element.tipoHoras
      const horasFilter = this.arrayHoras.find(x => x.tipo === horasTipo && x.flag === '2')
      const valorSel = horasFilter.valor
      const valor = parseFloat(valorSel) * parseFloat(element.qtdeHoras);
      this.valorHoras = this.valorHoras + valor

      let finalHor = {
        tipoHoras : element.tipoHoras,
        qtdwHoras: element.qtdeHoras,
        valorMaterial: valor
      }
      this.finalHoras.push(finalHor)

      this.ValorTotal = this.ValorTotal + valor
    });

  }

  openMaterialList(){
    this.openMaterial = !this.openMaterial
  }

  openHorasList(){
    this.openHoras= !this.openHoras
  }

  openDeslocamentoList(){
    this.openDeslocamentos = !this.openDeslocamentos
  }

}
