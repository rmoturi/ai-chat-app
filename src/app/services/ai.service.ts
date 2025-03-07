import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AIService {
  //private apiUrl = 'https://api.openai.com/v1/chat/completions';
private apiUrl = 'https://api.groq.com/openai/v1/chat/completions'; 
  private apiKey = ''; // Replace with your AI API key
  constructor(private http: HttpClient) {}

  askQuestion(question: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.apiKey}`
    });

    const body = {
      model: 'llama-3.3-70b-versatile',
      messages: [{ role: 'user', content: question }]
    };

    return this.http.post(this.apiUrl, body, { headers });
  }
}
