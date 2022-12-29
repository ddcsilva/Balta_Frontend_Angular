import { Component } from "@angular/core";
import { Todo } from "src/models/todo.model";

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
  public todos: Todo[] = [];
  public titulo: String = "Minhas Tarefas";

  // Construtor chamado toda vez que meu componente inicia
  constructor() {
    this.todos.push(new Todo(1, "Passear com o Cachorro", false));
    this.todos.push(new Todo(2, "Ir ao Supermercado", false));
    this.todos.push(new Todo(3, "Cortar o Cabelo", true));
  }

  alteraTexto() {
    this.titulo = "Teste";
  }
}
