import {Component} from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: `servers.component.html`,
  styleUrls: ['./servers.component.css']
})

export class ServersComponent {
  allowNewServer = false;
  serverCreationStatus = "No server was created.";
  serverName = "N/A";
  serverCreated = false;
  servers = ['TestServer', 'DevServer', 'ProdServer']

  constructor() {
    setTimeout( () => {
      this.allowNewServer = true;
    },2000);
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = "Server " + this.serverName + " was created."
  }


  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
