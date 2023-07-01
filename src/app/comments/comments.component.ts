import { Component } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent {
  comments = [
    { 
      author: 'Ana Gómez',
      content: 'Excelente entrenador personal, me ha ayudado a alcanzar mis objetivos de forma efectiva y segura. Sus rutinas son desafiantes pero muy gratificantes. Lo recomiendo totalmente.' 
    },
    { 
      author: 'Daniel Calderón', 
      content: 'Desde que comencé a entrenar con este entrenador, he visto resultados increíbles. Su conocimiento y experiencia me han ayudado a mejorar mi forma física y aumentar mi resistencia. ¡Estoy muy satisfecho con sus servicios!' 
    },
    { 
      author: 'María Torres', 
      content: 'Estoy impresionado con las clases de entrenamiento personal. El entrenador personal me ha desafiado y motivado a superar mis propias expectativas. Los resultados que he obtenido han sido evidentes tanto física como mentalmente. ¡No puedo esperar para seguir asistiendo!' 
    },
    { 
      author: 'Sofía Fernández', 
      content: 'El entrenador personal del gimnasio es excepcional. Es muy atento, se adapta a mis necesidades y siempre me motiva a dar lo mejor de mí. Gracias a él, he logrado perder peso y ganar fuerza. ¡Lo recomiendo ampliamente!' 
    },
    { 
      author: 'Carlos Ramírez', 
      content: 'Las clases de entrenamiento personal son una combinación perfecta de efectividad y diversión. Cada sesión está diseñada para hacer que cada minuto cuente, y la variedad de ejercicios mantiene el entrenamiento interesante. ¡Me siento emocionado por el progreso que he logrado hasta ahora!' 
    },
    { 
      author: 'Laura Pérez', 
      content: 'Las clases de entrenamiento personal son una experiencia única. Cada sesión me desafía de manera diferente y me ayuda a superar obstáculos. El entrenador personal me brinda la orientación y el apoyo necesarios para lograr mis metas. ¡Estoy muy agradecida!' 
    },
  ];
}