import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clasification',
  templateUrl: './clasification.component.html',
  styleUrls: ['./clasification.component.css']
})
export class ClasificationComponent implements OnInit {


  lista = [
    {name: "Labrador Retriever" , img:"https://cdn.pixabay.com/photo/2018/03/31/06/31/dog-3277416_1280.jpg" },
    {name: "Dachshund" , img:"https://cdn.pixabay.com/photo/2019/08/19/07/45/corgi-4415649_1280.jpg" },
    {name: "Bulldog" , img:"https://cdn.pixabay.com/photo/2016/07/15/15/55/dachshund-1519374_1280.jpg" },
    {name: "Golden Retriever" , img:"https://cdn.pixabay.com/photo/2015/11/17/13/13/puppy-1047521_1280.jpg" },
  
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
