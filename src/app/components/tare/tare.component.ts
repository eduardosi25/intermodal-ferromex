import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TareFacadeService } from '../../common/facade-services/facade/tare-facade.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Response } from '../../models/Response';
import { Equipment } from '../../models/equipment';

@Component({
  selector: 'app-tare',
  templateUrl: './tare.component.html',
  styleUrls: ['./tare.component.css']
})
export class TareComponent implements OnInit {

  constructor(private facadeService: TareFacadeService) { }

  @Input() public apiToken: string;
  @Input() public captchaToken: string;

  public equipment = 'FXE711025';
  public equipments: Equipment[];
  public taraEquipment: any[];

  public errorMsg: any;
  public loading = false;

  ngOnInit() {
    this.searchTare(this.equipment);
  }

  public searchTare(equipment: any): void {
    this.loading = true;
    this.facadeService.tareSearch(this.equipment, this.apiToken, this.captchaToken).subscribe(
      (data: Response<Equipment[]>) => {
        this.loading = false;
        console.log(data);
        if (data.success) {
          if (data.response instanceof Array) {
            this.equipments = <Equipment[]>data.response;
          }
        }
      }, (data: any) => {
        this.loading = false;
        if (data instanceof HttpErrorResponse) {
          alert(data.message);
        } else if (!data.error.success) {
          this.errorMsg = data.error.status.message;
          alert(this.errorMsg);
        }
      });
  }


}
