import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-index",
  templateUrl: "./index.component.html",
  styleUrls: ["./index.component.css"]
})
export class IndexComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  items = [
    {
      src: "/assets/img/services/s1.png",
      title: "Wp developing",
      desc:
        "WP Developmemt and Optimisation according to various needs from themes to plugins."
    },
    {
      src: "/assets/img/services/s2.png",
      title: "ui/ux design",
      desc:
        "Frontend Design and Templating using leading Frameworks like ReactJs and Angular8."
    },
    {
      src: "/assets/img/services/s3.png",
      title: "content development",
      desc:
        "Writing contect for different websites, blogs, classifieds and printed adverts."
    },
    {
      src: "/assets/img/services/s4.png",
      title: "seo optimize",
      desc:
        "Web Content and SEO Optimizations at the very convenience of being at same place."
    }
  ];
}
