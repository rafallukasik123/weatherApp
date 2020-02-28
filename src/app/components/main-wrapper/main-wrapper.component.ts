import {Component, OnInit} from '@angular/core';
import {MainService} from '../../services/main.service';

@Component({
  selector: 'app-main-wrapper',
  templateUrl: './main-wrapper.component.html',
  styleUrls: ['./main-wrapper.component.css']
})
export class MainWrapperComponent implements OnInit {
  constructor(private mainService: MainService) {
  }

  ngOnInit(): void {
    this.mainService.getPosition().then(pos => {
      // @ts-ignore
      this.mainService.getByGeographicCoordinates(pos.lat, pos.lon).subscribe(res => {
          console.log(res);
        },
        err => console.log('HTTP Error', err));
    });
  }


}
