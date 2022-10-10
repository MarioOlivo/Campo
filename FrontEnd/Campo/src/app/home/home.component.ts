import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { adminCampoService } from '../services/admincamposervice.service';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items: MenuItem[] = [];
  snomproducto: any='';
  usuarioid:{ iduser: number } | any;
  constructor(
    private rutaActiva:ActivatedRoute,
    private router: Router,
    private service: adminCampoService) { }

    public productos: any;
    public producto:any;
    public flVisible:any=false;
  ngOnInit(): void {
    this.getProductosAll();
    this.items = [
      {
        label: 'INICIO',
        icon: 'pi pi-home',
        command: () => {
          this.regresarInicio()
        }
      }
    ];
  }
  async getProductosAll(){
        this.productos = await this.service.getProductosAll().toPromise();

        console.log(this.productos);
        
   // return this.productos;

  }
    //#region barra
    regresarInicio() {
      //window.location.href = "";
    }
    buscarProducto(){
      return this.snomproducto;
    }
  public async getProductosbyid(pid:any){
    this.producto = await this.service.getProductosbyid(pid).toPromise(); 
  }

}
