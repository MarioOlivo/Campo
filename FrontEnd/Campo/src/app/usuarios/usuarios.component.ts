import { Component, OnInit } from '@angular/core';
import { adminCampoService } from '../services/admincamposervice.service';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  UsuariosComponent:{ iduser: number } | any;
  constructor(private service: adminCampoService) { }

  public async ngOnInit()  {
    
  }


}
