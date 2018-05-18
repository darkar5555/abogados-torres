import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AbogadoService {

  abogados: any = [
    {
      "id": 1,
      "email": "jose.dinner@gmail.com",
      "images" : "assets/images/abogado1.jpg",
      "nombre" : "Jose Dinner Paredes 1", 
      "areas": "Tributacion, Aduanas y Comercio Exterior y Coorporativo",
      "educacion": ["Pontificia Universidad Catolica del Perú, 1967.",
        "Escuela de Graduacion de la Pontificia Universidad Catolica del Perú, Magister en Derecho Civil, 1989.",
        "Estudio Olaechea (1969-1979) Relator General y Presidente de Comites de Resolucion en diversas Jornadas Nacionales de Derecho Tributario y Jornadas Nacionales de Tributacion.",
        "Ex Presidente del Instituto Peruano de Derecho Tributario, de la Asociacion Fiscal Internacional (IFA) Grupo Peruano y del Instituto Latinoamericano de Derecho Tributario.",
        "Conferencista en diversos foros nacionales e internacionales, en materia tributaria"
      ],
      "trayectoria": ["Hernandez & Cia Abogados (1992-A la fecha)",
        "Estudio Rubio Leguía, Normand, Hernandez y Asociados (1980-1991)."
      ],
      "membresias" : [
        "Colegio de Abogados de Lima.",
        "Miembro del Instituto Peruano de Derecho Tributario.",
        "Miembro de la International Fiscal Association.",
        "Miembro de la Asociación Española de Derecho Financiero.",
        "Miembro de la Asociación Peruana de Derecho Marítimo y Comercial.",
        "Miembro de la Comisión Consultiva de Derecho Tributario del Colegio de Abogados de Lima."
      ]
    },
    {
      "id": 2,
      "email": "jose.dinner@gmail.com",
      "images" : "assets/images/abogado2.jpg", 
      "nombre" : "Jose Dinner Paredes 2",
      "areas": "Tributacion, Aduanas y Comercio Exterior y Coorporativo",
      "educacion": ["Pontificia Universidad Catolica del Perú, 1967.",
        "Escuela de Graduacion de la Pontificia Universidad Catolica del Perú, Magister en Derecho Civil, 1989.",
        "Estudio Olaechea (1969-1979) Relator General y Presidente de Comites de Resolucion en diversas Jornadas Nacionales de Derecho Tributario y Jornadas Nacionales de Tributacion.",
        "Ex Presidente del Instituto Peruano de Derecho Tributario, de la Asociacion Fiscal Internacional (IFA) Grupo Peruano y del Instituto Latinoamericano de Derecho Tributario.",
        "Conferencista en diversos foros nacionales e internacionales, en materia tributaria"
      ],
      "trayectoria": ["Hernandez & Cia Abogados (1992-A la fecha)",
        "Estudio Rubio Leguía, Normand, Hernandez y Asociados (1980-1991)."
      ],
      "membresias" : [
        "Colegio de Abogados de Lima.",
        "Miembro del Instituto Peruano de Derecho Tributario.",
        "Miembro de la International Fiscal Association.",
        "Miembro de la Asociación Española de Derecho Financiero.",
        "Miembro de la Asociación Peruana de Derecho Marítimo y Comercial.",
        "Miembro de la Comisión Consultiva de Derecho Tributario del Colegio de Abogados de Lima."
      ]
    },
    {
      "id": 3,
      "email": "jose.dinner@gmail.com",
      "images" : "assets/images/abogado3.jpg", 
      "nombre" : "Jose Dinner Paredes 3",
      "areas": "Tributacion, Aduanas y Comercio Exterior y Coorporativo",
      "educacion": ["Pontificia Universidad Catolica del Perú, 1967.",
        "Escuela de Graduacion de la Pontificia Universidad Catolica del Perú, Magister en Derecho Civil, 1989.",
        "Estudio Olaechea (1969-1979) Relator General y Presidente de Comites de Resolucion en diversas Jornadas Nacionales de Derecho Tributario y Jornadas Nacionales de Tributacion.",
        "Ex Presidente del Instituto Peruano de Derecho Tributario, de la Asociacion Fiscal Internacional (IFA) Grupo Peruano y del Instituto Latinoamericano de Derecho Tributario.",
        "Conferencista en diversos foros nacionales e internacionales, en materia tributaria"
      ],
      "trayectoria": ["Hernandez & Cia Abogados (1992-A la fecha)",
        "Estudio Rubio Leguía, Normand, Hernandez y Asociados (1980-1991)."
      ],
      "membresias" : [
        "Colegio de Abogados de Lima.",
        "Miembro del Instituto Peruano de Derecho Tributario.",
        "Miembro de la International Fiscal Association.",
        "Miembro de la Asociación Española de Derecho Financiero.",
        "Miembro de la Asociación Peruana de Derecho Marítimo y Comercial.",
        "Miembro de la Comisión Consultiva de Derecho Tributario del Colegio de Abogados de Lima."
      ]
    },
    {
      "id": 4,
      "email": "jose.dinner@gmail.com",
      "images" : "assets/images/abogado4.jpg",
      "nombre" : "Jose Dinner Paredes 4",
      "areas": "Tributacion, Aduanas y Comercio Exterior y Coorporativo",
      "educacion": ["Pontificia Universidad Catolica del Perú, 1967.",
        "Escuela de Graduacion de la Pontificia Universidad Catolica del Perú, Magister en Derecho Civil, 1989.",
        "Estudio Olaechea (1969-1979) Relator General y Presidente de Comites de Resolucion en diversas Jornadas Nacionales de Derecho Tributario y Jornadas Nacionales de Tributacion.",
        "Ex Presidente del Instituto Peruano de Derecho Tributario, de la Asociacion Fiscal Internacional (IFA) Grupo Peruano y del Instituto Latinoamericano de Derecho Tributario.",
        "Conferencista en diversos foros nacionales e internacionales, en materia tributaria"
      ],
      "trayectoria": ["Hernandez & Cia Abogados (1992-A la fecha)",
        "Estudio Rubio Leguía, Normand, Hernandez y Asociados (1980-1991)."
      ],
      "membresias" : [
        "Colegio de Abogados de Lima.",
        "Miembro del Instituto Peruano de Derecho Tributario.",
        "Miembro de la International Fiscal Association.",
        "Miembro de la Asociación Española de Derecho Financiero.",
        "Miembro de la Asociación Peruana de Derecho Marítimo y Comercial.",
        "Miembro de la Comisión Consultiva de Derecho Tributario del Colegio de Abogados de Lima."
      ]
    },
  ];

  constructor() { }

  public getAbogados(){
    return this.abogados;
  }

  public getAbogado(id){
    return this.abogados.find((abogado)=>{
      return abogado.id == id;
    }) || null;
  }
}
