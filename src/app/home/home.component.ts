import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private meta:Meta) {
    meta.updateTag({name:'description', content:'Iron Core ofrece entrenamiento personal de alta calidad en Villeta, Cundinamarca. Descubre nuestros planes y comentarios de nuestros clientes satisfechos.'})
    meta.updateTag({name:'copyright', content:'Copyright - Iron Core - Edgar Enrique Calderón Ramírez'})
    meta.updateTag({name: 'author', content: 'Daniel David Calderón Tinjaca'});
    meta.updateTag({name:'robots', content:'index, follow'})
    meta.updateTag({name: 'language', content: 'es'});
  }

  // Se agrega el siguiente código para realizar el desplazamiento suave al elemento (SECCION) correspondiente
  scrollToComponent(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
