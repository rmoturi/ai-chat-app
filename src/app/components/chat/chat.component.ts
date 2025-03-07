import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AIService } from '../../services/ai.service';

@Component({
  selector: 'app-chat',
  imports: [FormsModule],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  question: string = '';
  answer: string = '';

  constructor(private aiService: AIService) { }

  async askAI() {
    if (this.question.trim()) {
      await this.aiService.askQuestion(this.question).subscribe({
        next: (response: any) => {
          this.answer = response.choices[0].message.content;
        },
        error: (error) => {
          this.answer = 'Error occurred while fetching response';
        }
      });
      this.question = '';
    }
  }
}
