import { Component } from "@angular/core";

@Component({
  selector: "app-root", // <app-root></app-root>
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  // Variável pública
  // Any -> Qualquer Coisa
  // [] -> Um Array (Lista)
  // Se não inicializar é undefined, se inicializar é vazio
  public todos: any[] = [];

  // Construtor chamado toda vez que meu componente inicia
  constructor() {
    this.todos.push("Passear com o Cachorro");
    this.todos.push("Ir ao Supermercado");
    this.todos.push("Cortar o Cabelo");
  }
}
