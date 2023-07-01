import { Component } from '@angular/core';

@Component({
  selector: 'app-planes',
  templateUrl: './planes.component.html',
  styleUrls: ['./planes.component.css']
})
export class PlanesComponent {
  redirectToWhatsApp(selectedPackage: string): void {
    const phoneNumber = '573223913372'; // Número de teléfono de tu cuenta de WhatsApp
    const message = '¡Hola! Estoy interesado en el paquete: ' + selectedPackage + ' de entrenamiento personal* ';

    const link = 'https://wa.me/' + phoneNumber + '?text=' + encodeURIComponent(message);
    window.open(link, '_blank');
  }
}
