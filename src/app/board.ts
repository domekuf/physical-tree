export class Board {
  ip_address_v6: string = "fe80::72b3:d5ff:fe29:c363";
  mac_address: string = "80::b3:ff:29:63";
  commercial_code: string = 'XR19AX35WM2/48Y';
  constructor (
    public name_fpga: string,
    public serial_number: string
  ) {
  }
}