import { Component, Input, OnInit } from '@angular/core';
import { Device } from '../device';
import { EnumService } from '../enum.service';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})
export class DeviceComponent implements OnInit {
  @Input() device: Device;
  constructor(
    private es: EnumService
  ) { }

  ngOnInit() {
  }
  onClick() {
    this.device.cpri_device.push(new Device('', this.es.next()));
  }
  onErase() {
    this.device.cpri_device.pop();
  }  
}