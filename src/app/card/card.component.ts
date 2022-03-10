import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input()
  plan:string = "Plano"

  @Input()
  price:string = "Preço"

  @Input()
  storage:string = "Armazenamento"

  @Input()
  user:string = "qtdUsuario"

  @Input()
  up:string = "upload"

  @Input()
  bg: string = '#424242'

  @Input()
  fColor: string = 'black'

  @Input()
  alturaCard: string = '320px'
  
  alertar() {
    alert("Você Clicou no botão")
  }
  
  @Input()
  @Output()
  eventoPersonalizado: EventEmitter <any> = new EventEmitter<any>()

  emitirEventoPersonalizado():void {
    this.eventoPersonalizado.emit(console.log("Pacote Comprado"))
  }

}

