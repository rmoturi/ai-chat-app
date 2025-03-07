import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from "./components/counter/counter.component";
import { ChatComponent } from "./components/chat/chat.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CounterComponent, ChatComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-1';
}
