import { Component, Input, OnInit } from '@angular/core';
import { Device } from '../device';
import { EnumService } from '../enum.service';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.css']
})
export class DeviceListComponent implements OnInit {
  devices: Device[] = [];
  constructor(
    private es: EnumService
  ) {
    {
      this.devices.push(new Device('POI 1',this.es.next()));
    }
  }

  ngOnInit() {
 
  }

  dumpJson() {
    console.log(JSON.stringify(this.devices, null, 4));
  }
}