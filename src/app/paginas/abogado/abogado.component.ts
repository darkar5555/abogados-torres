import { Component, OnInit } from '@angular/core';
import { AbogadoService } from '../../services/abogado.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-abogado',
  templateUrl: './abogado.component.html',
  styleUrls: ['./abogado.component.css']
})
export class AbogadoComponent implements OnInit {

  abogado = {};
  id = null;
  constructor(private abogadoService : AbogadoService, private route: ActivatedRoute) {
    this.id= this.route.snapshot.params['id'];
    this.abogado = abogadoService.getAbogado(this.id);
    console.log(this.abogado);
    
   }

  ngOnInit() {
  }

}
