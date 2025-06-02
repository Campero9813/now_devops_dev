import { Component } from '@angular/core';

@Component({
  selector: 'app-chatbot-button',
  templateUrl: './chatbot-button.component.html',
  styleUrls: ['./chatbot-button.component.css']
})
export class ChatbotButtonComponent {

  chatbotVisible = false;

  toggleChatbot() {
    this.chatbotVisible = !this.chatbotVisible;
  }
}
