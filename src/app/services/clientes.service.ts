import { Injectable } from '@angular/core';
import  {BehaviorSubject, Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Cliente } from '../shared/model/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private apiURL = environment.apiURL
  private _clienteData = new BehaviorSubject<Cliente>(null)

  constructor( private http: HttpClient) { }

  public getAllCliente(): void{
    this.http.get(`${this.apiURL}/cliente`).subscribe((retorno: Cliente) => {
      this.setAgenda(retorno)
    })
   }

   public addCliente(arrCliente: Cliente): Observable<any>{
    console.log(arrCliente)
   const retorno = this.http.post(`${this.apiURL}/cliente/create`, arrCliente)
   this.getAllCliente()
   return retorno
  }

  private  setAgenda(dados: Cliente): void {
     this._clienteData.next(dados);
   }

   public getAgenda(): Observable<Cliente> {
     return this._clienteData.asObservable();
   }
}
