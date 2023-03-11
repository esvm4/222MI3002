import { Component } from '@angular/core';

@Component({
  selector: 'app-b17',
  templateUrl: './b17.component.html',
  styleUrls: ['./b17.component.css'],
})
export class B17Component {
  customer = {
    ID: 'Cus123',
    Name: 'Obama',
    Email: 'obama@gmail.com',
    Age: 67,
    Image:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fapi.time.com%2Fwp-content%2Fuploads%2F2014%2F12%2Fpresident-barack-obama.jpg&f=1&nofb=1&ipt=5ec6d5966f6cfc5d367c6b31be58be5cf57aababadec8f0be97444e8824a9200&ipo=images',
  };
}
