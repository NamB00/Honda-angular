import { Component, OnInit } from '@angular/core';
import { OrderdetailService } from 'src/app/services/orderdetail.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private service: OrderdetailService) { }

  carDetails: any
  ngOnInit(): void {
    this.carDetails = this.service.carDetails;
  }



}
