import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderdetailService {

  constructor() { }

  carDetails = [
    {
      id: 1,
      carName: 'Civic Sedan',
      carPrice: '$15.504',
      carSpec: '40/08',
      carImg1: '../../../assets/img/xe-1.png',
      carImg2: '../../../assets/img/xe-1-hover.png',
      carBackgorund: 'img-1',
      carDelay: 'delay-1'
    },
    {
      id: 2,
      carName: 'Accord Sedan',
      carPrice: '$25.504',
      carSpec: '30/08',
      carImg1: '../../../assets/img/xe-2.png',
      carImg2: '../../../assets/img/xe-2-hover.png',
      carBackgorund: 'img-2',
      carDelay: 'delay-2'
    },
    {
      id: 3,
      carName: 'Accord Hybird',
      carPrice: '$25.607',
      carSpec: '47/48',
      carImg1: '../../../assets/img/xe-3.png',
      carImg2: '../../../assets/img/xe-3-hover.png',
      carBackgorund: 'img-3',
      carDelay: 'delay-3'
    },
    {
      id: 4,
      carName: 'Clarity Plugin Hybird',
      carPrice: '$33.302',
      carSpec: '44/58',
      carImg1: '../../../assets/img/xe-4.png',
      carImg2: '../../../assets/img/xe-4-hover.png',
      carBackgorund: 'img-4',
      carDelay: 'delay-4'
    },
    {
      id: 5,
      carName: 'Civic Si Sedan',
      carPrice: '$24.704',
      carSpec: '40/08',
      carImg1: '../../../assets/img/xe-1.png',
      carImg2: '../../../assets/img/xe-1-hover.png',
      carBackgorund: 'img-5',
      carDelay: 'delay-5'
    },
    {
      id: 6,
      carName: 'Clarity Electric',
      carPrice: 'Lease Only',
      carSpec: '89',
      carImg1: '../../../assets/img/xe-3.png',
      carImg2: '../../../assets/img/xe-3-hover.png',
      carBackgorund: 'img-6',
      carDelay: 'delay-6'
    }
  ];
}
