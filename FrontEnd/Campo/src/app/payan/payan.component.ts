import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Element } from 'chart.js';
import { adminCampoService } from '../services/admincamposervice.service';

@Component({
  selector: 'app-payan',
  templateUrl: './payan.component.html',
  styleUrls: ['./payan.component.css'],
})
export class PayanComponent implements OnInit {
  listaimagen: any = [];
  public productos: any;
  public producto: any;
  public flVisible: any = false;
  constructor(private service: adminCampoService,public dialog: MatDialog) {}

  ngOnInit(): void {
    // console.log(ELEMENT_DATA);
   // this.listaimagen = ELEMENT_DATA;

    this.getProductosAll();
    //this.usuarios();
    //this.getProductosAll();
    // for (let index = 0; index < 10; index++) {
    //   //const element = array[index];
    //   this.listaimagen.push({
    //     id: index,
    //     nombre: 'imagen' + index,
    //     ruta: '../../assets/principal/0101.jpg',
    //   });
    // }

    //    this.dataSource= this.listaimagen;
  }
  displayedColumns: string[] = ['position', 'ruta', 'name'];
  dataSource = new MatTableDataSource();

  applyFilter(event: Event) {
    
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this.listaimagen = this.dataSource.filteredData
    
  }

  async getProductosAll() {
    this.productos = await this.service.productosall();

    this.dataSource =new MatTableDataSource(this.productos['data']);
    this.listaimagen = this.productos['data'];

    // return this.productos;
  }

  async usuarios() {
    var response: any;
    response = await this.service.usuariosphp();
    console.log(response);
  }
   

  openDialog(pid:number) {
    // this.dialog.open(DialogElement);
    const dialogRef = this.dialog.open(DialogElement, {
      
      data: {name: '', id: pid},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     // this.animal = result;
    });
  }
}


@Component({
  selector: 'modal',
  templateUrl: 'modal.component.html',
})
export class DialogElement implements OnInit{

constructor(  public dialogRef: MatDialogRef<DialogElement>,private service: adminCampoService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData){}

listaimagen:any=[];
  ngOnInit(): void {
console.log(this.data);

    this.productosid()
  }

  async productosid(){
    var response = await this.service.productoid(this.data.id);
    console.log(response);
    
     this.listaimagen = response;
  }

}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  ruta: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    ruta: '../../assets/principal/0101.jpg',
    name: 'Tomate',
    weight: 1.0079,
    symbol: 'To',
  },
  {
    position: 2,
    ruta: '../../assets/principal/0201.jpg',
    name: 'Limon',
    weight: 4.0026,
    symbol: 'Li',
  },
  {
    position: 3,
    ruta: '../../assets/principal/0301.jpg',
    name: 'Chile',
    weight: 6.941,
    symbol: 'Ch',
  },
  {
    position: 4,
    ruta: '../../assets/principal/0401.jpg',
    name: 'Zanahoria',
    weight: 9.0122,
    symbol: 'Za',
  },
  {
    position: 5,
    ruta: '../../assets/principal/0501.jpg',
    name: 'Pepino',
    weight: 10.811,
    symbol: 'pe',
  },
  {
    position: 6,
    ruta: '../../assets/principal/0601.jpg',
    name: 'Cebolla',
    weight: 12.0107,
    symbol: 'Ce',
  },
  {
    position: 7,
    ruta: '../../assets/principal/0701.jpg',
    name: 'Berenjena',
    weight: 14.0067,
    symbol: 'Be',
  },
  {
    position: 8,
    ruta: '../../assets/principal/0801.jpg',
    name: 'Ajo',
    weight: 15.9994,
    symbol: 'ajo',
  },
  {
    position: 9,
    ruta: '../../assets/principal/0901.jpg',
    name: 'Apio',
    weight: 18.9984,
    symbol: 'Ap',
  },
  {
    position: 10,
    ruta: '../../assets/principal/1001.jpg',
    name: 'Brocoli',
    weight: 20.1797,
    symbol: 'Br',
  },
  {
    position: 11,
    ruta: '../../assets/principal/1101.jpg',
    name: 'Calabacin',
    weight: 14.0067,
    symbol: 'ca',
  },
  {
    position: 12,
    ruta: '../../assets/principal/1201.jpg',
    name: 'Calabaza',
    weight: 15.9994,
    symbol: 'ca',
  },
  {
    position: 13,
    ruta: '../../assets/principal/1301.jpg',
    name: 'Repollo',
    weight: 18.9984,
    symbol: 'Col',
  },
  {
    position: 14,
    ruta: '../../assets/principal/1401.jpg',
    name: 'Champiñon',
    weight: 20.1797,
    symbol: 'cha',
  },
];



export interface DialogData {
  id: number;
  name: string;
}
