import { Component, OnInit } from '@angular/core';
interface RazaDePerro {
  nombre: string;
  altura: string;
  peso: string;
  origen: string;
}



@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  dataSource:any
  constructor() { }

  ngOnInit(): void {
    this.dataSource = this.generarDatosAleatorios(20)
    console.log(this.dataSource)
  }

  displayedColumns: string[] = ['nombre', 'altura', 'peso', 'origen'];


generarDatosAleatorios(cantidad: number): any[] {
    const nombresRazas = ['Labrador Retriever', 'Bulldog', 'Dachshund', 'Husky Siberiano', 'Golden Retriever', /* ... más razas ... */];
    const alturas = ['50-60 cm', '30-40 cm', '20-25 cm', '50-65 cm', '55-61 cm', /* ... más alturas ... */];
    const pesos = ['20-35 kg', '15-25 kg', '3-7 kg', '20-27 kg', '25-34 kg', /* ... más pesos ... */];
    const origenes = ['Canadá', 'Inglaterra', 'Alemania', 'Rusia', 'Escocia', /* ... más orígenes ... */];
  
    const datosGenerados: any[] = [];
  
    for (let i = 0; i < cantidad; i++) {
      const raza = nombresRazas[Math.floor(Math.random() * nombresRazas.length)];
      const altura = alturas[Math.floor(Math.random() * alturas.length)];
      const peso = pesos[Math.floor(Math.random() * pesos.length)];
      const origen = origenes[Math.floor(Math.random() * origenes.length)];
  
      const datos = { nombre: raza, altura: altura, peso: peso, origen: origen };
      datosGenerados.push(datos);
    }
  
    return datosGenerados;
  }
  
}
