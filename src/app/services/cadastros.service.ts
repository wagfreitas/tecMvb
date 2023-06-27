import { Injectable } from '@angular/core';
import  {BehaviorSubject, Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Servico } from '../shared/model/servicos';

@Injectable({
  providedIn: 'root'
})
export class CadastrosService {

  private apiURL = environment.apiURL
  private _servicoData = new BehaviorSubject<Servico>(null)

  constructor( private http: HttpClient) { }

  public getAllServico(): void{
    this.http.get(`${this.apiURL}/servico`).subscribe((retorno: Servico) => {
      this.setAgenda(retorno)
    })
   }
   
   public addCliente(arrService: Servico): Observable<any>{

    const retorno = this.http.post(`${this.apiURL}/servico/create`, arrService)
    this.getAllServico()
    return retorno
   }
 
   private  setAgenda(dados: Servico): void {
      this._servicoData.next(dados);
    }
 
    public getAgenda(): Observable<Servico> {
      return this._servicoData.asObservable();
    }
 }
