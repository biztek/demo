import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
// Drop down Values 
toppings = new FormControl();
toppingList: string[] = ['MQRQUETTE', 'BALDWIN', 'MADISON'];
record = new FormControl();
recordList: string[] = ['Database,Unfiltered', 'Database,Unfiltered', 'Stastistical subfile','Queues'];
file = new FormControl();
fileList: string[] = ['New Filter', 'Clinical Trials Search-Brest', 'Clinical Trials Search-Melanoma','Clinical Trials Search-Ovary'];
sortby = new FormControl();
sortbyList: string[] = ['Accession #', 'Medical record #', 'name','Social Security #','Terminal Digit','Date First Contact'];
//Tabel Settiings 
  
columnDefs = [
  {headerName: 'PrQ', field: 'prQ' },
  {headerName: 'Susp', field: 'susp' },
  {headerName: 'Tp', field: 'tp'},
  {headerName: 'Vs', field: 'vs'},
  {headerName: 'Name:Last', field: 'last'},
  {headerName: 'First', field: 'first'},
  {headerName: 'Mid', field: 'mid'},
  {headerName: 'Acc #', field: 'acc'},
  {headerName: 'Sq', field: 'sq'},
  {headerName: 'Med Rec #', field: 'medrec'},
  {headerName: 'Birt date', field: 'birthdate'},
  {headerName: 'Soc Sec', field: 'socsec'},
  {headerName: 'Site', field: 'site'},
  {headerName: 'Lat', field: 'lat'},
  {headerName: 'Hist', field: 'hist'},
  {headerName: 'Class', field: 'class'},
  {headerName: 'Date Dx', field: 'datedx'},
  {headerName: 'AKA last', field: 'akalast'},
  {headerName: 'AKA First', field: 'akafirst'},
  {headerName: 'Maiden', field: 'maiden'},
  {headerName: 'Hospital', field: 'hospital'},
  {headerName: 'Link Flag', field: 'linkflag'},
  {headerName: 'Date Contact', field: 'datecontact'},
  {headerName: 'State', field: 'state'},
  {headerName: 'Rx Summary', field: 'rxsummary'},
];

rowData = [
  { prQ: 0, susp: 2, tp: 0, vs:1,last:'ABEBLL',first:'ROBERT' ,mid:' ' ,acc: 200403096,sq: '02',
    medrec: '00157' ,birthdate:'01/05/33' ,socsec:659991219 ,site: 'C341' ,lat: 2 ,hist: 81403,
    class: 20 ,datedx: '09/25/06',akalast: ' ',akafirst: ' ',maiden: ' ',hospital: '0006441720' ,
    linkflag: 1 ,datecontact: '01/14/08' ,state:'wl' ,rxsummary: 'SRH'
  },
  { prQ: 0, susp: 2, tp: 0, vs:1,last:'ABEBON',first:'JOHN' ,mid:' ' ,acc: 200402466,sq: '00',
    medrec: '721291' ,birthdate:'06/01/21' ,socsec:659999170 ,site: 'C341' ,lat: 2 ,hist: 81403,
    class: 20 ,datedx: '03/08/04',akalast: ' ',akafirst: ' ',maiden: ' ',hospital: '0006441720' ,
    linkflag: 1 ,datecontact: '04/01/07' ,state:'wl' ,rxsummary: 'RH'
  },
  { prQ: 0, susp: 2, tp: 0, vs:1,last:'AGEBLL',first:'ROBERT' ,mid:' ' ,acc: 199902307,sq: '02',
    medrec: '442278' ,birthdate:'08/05/29' ,socsec:659997812 ,site: 'C619' ,lat: 0 ,hist: 81403,
    class: 20 ,datedx: '09/21/06',akalast: ' ',akafirst: ' ',maiden: ' ',hospital: '0006441720' ,
    linkflag: 1 ,datecontact: '09/23/08' ,state:'wl' ,rxsummary: 'R'
  },
  { prQ: 0, susp: 2, tp: 0, vs:1,last:'ApEBLL',first:'ROBERT' ,mid:' ' ,acc: 199901641,sq: '03',
    medrec: '372291' ,birthdate:'11/05/26' ,socsec:659999147 ,site: 'C619' ,lat: 2 ,hist: 81403,
    class: 20 ,datedx: '12/02/05',akalast: ' ',akafirst: ' ',maiden: ' ',hospital: '0006441720' ,
    linkflag: 1 ,datecontact: '11/29/07' ,state:'wl' ,rxsummary: 'RH'
  },
  { prQ: 0, susp: 2, tp: 0, vs:1,last:'AREBON',first:'JOHN' ,mid:' ' ,acc: 199701176  ,sq: '02',
    medrec: '712072' ,birthdate:'05/01/24' ,socsec:659997243 ,site: 'C619' ,lat: 2 ,hist: 81403,
    class: 20 ,datedx: '06/11/07',akalast: ' ',akafirst: ' ',maiden: ' ',hospital: '0006441720' ,
    linkflag: 1 ,datecontact: '11/06/07' ,state:'wl' ,rxsummary: ''
  },
  { prQ: 0, susp: 2, tp: 0, vs:1,last:'CHEBON',first:'JOHN' ,mid:' ' ,acc: 200400868,sq: '00',
    medrec: '381223' ,birthdate:'09/01/24' ,socsec:659992389 ,site: 'C619' ,lat: 2 ,hist: 81403,
    class: 20 ,datedx: '02/05/04',akalast: ' ',akafirst: ' ',maiden: ' ',hospital: '0006441720' ,
    linkflag: 1 ,datecontact: '10/19/06' ,state:'wl' ,rxsummary: 'R'
  },
  { prQ: 0, susp: 2, tp: 0, vs:1,last:'CMEBLL',first:'ROBERT' ,mid:' ' ,acc: 200403282,sq: '02',
    medrec: '322015' ,birthdate:'03/05/28' ,socsec:659991510,site: 'C341' ,lat: 2 ,hist: 81403,
    class: 20 ,datedx: '11/19/04',akalast: ' ',akafirst: ' ',maiden: ' ',hospital: '0006441720' ,
    linkflag: 1 ,datecontact: '01/03/08' ,state:'wl' ,rxsummary: 'RH'
  },
  { prQ: 0, susp: 2, tp: 0, vs:1,last:'CMEBNO',first:'MARk' ,mid:' ' ,acc: 200400820,sq: '02',
    medrec: '851003' ,birthdate:'05/10/44' ,socsec:659990391 ,site: 'C619' ,lat: 0 ,hist: 81403,
    class: 20 ,datedx: '07/13/04',akalast: ' ',akafirst: ' ',maiden: ' ',hospital: '0006441720' ,
    linkflag: 1 ,datecontact: '11/06/07' ,state:'wl' ,rxsummary: 'S'
  },
  { prQ: 0, susp: 2, tp: 0, vs:1,last:'DAEBON',first:'JOHN' ,mid:' ' ,acc: 200400195,sq: '02',
    medrec: '371653' ,birthdate:'08/01/22' ,socsec:659995361 ,site: 'C619' ,lat: 0 ,hist: 81403,
    class: 20 ,datedx: '01/15/04',akalast: ' ',akafirst: ' ',maiden: ' ',hospital: '0006441720' ,
    linkflag: 1 ,datecontact: '10/06/07' ,state:'wl' ,rxsummary: 'RH'
  },
  { prQ: 0, susp: 2, tp: 0, vs:' ',last:'DOODy',first:'HOWDY' ,mid:' ' ,acc: 201600001,sq: '02',
    medrec: '3456789' ,birthdate:'03/03/43' ,socsec:445678934 ,site: 'C443' ,lat: ' ' ,hist: ' ',
    class: 10 ,datedx: '01/05/16',akalast: ' ',akafirst: ' ',maiden: ' ',hospital: '0006441720' ,
    linkflag: 0 ,datecontact: '04/05/16' ,state:'wl' ,rxsummary: ' '
  },

];
public onRowClicked() {
this.router.navigate(['view-case']);
}
  constructor(private router: Router) { }

  ngOnInit() {
  }

}

