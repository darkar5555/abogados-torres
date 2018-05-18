import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  forma: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.forma = this.fb.group({
      nombre: [null, [Validators.required]],
      email: [null, [Validators.required]],
      telefono: [null, [Validators.required]],
      cargo: [null, Validators.required],
      area: [null, Validators.required],
      mensaje: [null, [Validators.required]]
    });
  }

}
