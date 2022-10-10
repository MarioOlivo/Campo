import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpParams, HttpRequest } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { data } from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class adminCampoService {
  constructor(private http: HttpClient) { }

//Consumo de apis a servidores internos
  public getProductosAll(){
  //  console.log(environment.apiService+'/all' );
    
    return this.http.get(environment.apiService );
  }


  public getProductosbyid(vId :any){
    console.log(environment.apiService+'/byid/'+vId);
    
    return this.http.get(environment.apiService+'/byid/'+vId);
  }



  /**
   * name
   */
  public usuariosphp() {
    var url = "http://192.168.10.203/apiadmin/admin";
    return this.http.get(url).toPromise();
  }



  productosall(){
    var url = "http://192.168.10.214/apicampo/api/productos/";
    return this.http.get(url).toPromise();
  }


  productoid(pid:number){
 var url =`http://192.168.10.214/apicampo/api/productos/${pid}`;
    return this.http.get(url).toPromise();
  }
}
