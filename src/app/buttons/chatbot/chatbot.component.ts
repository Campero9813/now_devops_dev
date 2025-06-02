import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import * as BotUI from 'botui'; // Importa BotUI como un módulo

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent {
  title = "my first app";
  ngOnInit() {

    //----------- chatbot's code --------------//
    /*
    (function (d, m) {
      var kommunicateSettings = {
        appId: "ba78756f48f81b00b2b61c25f0607189",
        popupWidget: true,
        automaticChatOpenOnNavigation: true,
      };
      var s = document.createElement("script");
      s.type = "text/javascript";
      s.async = true;
      s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
      var h = document.getElementsByTagName("head")[0];
      h.appendChild(s);
      (window as any).kommunicate = m;
      m._globals = kommunicateSettings;
    })(document, (window as any).kommunicate || {});
    */
    //----------- chatbot's code end --------------//

  }
}
