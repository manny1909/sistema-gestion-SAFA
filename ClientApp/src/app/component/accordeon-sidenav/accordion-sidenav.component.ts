import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { NgIf } from '@angular/common';
import { CdkAccordionModule } from '@angular/cdk/accordion';

@Component({
    selector: 'app-accordion-sidenav',
    templateUrl: './accordion-sidenav.component.html',
    styleUrls: ['./accordion-sidenav.component.scss'],
    standalone: true,
    imports: [CdkAccordionModule, NgIf, MatIconModule]
})
export class accordionSidenavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
