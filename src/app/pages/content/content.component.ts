import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover:string = "https://cdn.mos.cms.futurecdn.net/tUEVUXvvWxqMfUQm7asxL6.jpg"
  contentTitle:string = "Minha Notícia"
  contentDescription:string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac enim nec nisl viverra rhoncus."
  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      console.log(value.get("id"))
    )
  }

}
