import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aul-_08-03-t';

  alertar() {
    alert("Você Clicou no botão")
  }

  salvar(evento:any):void {
    alert(`Pacote Comprado`)
    console.log(evento)
    }
}
