import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import * as Highcharts from 'highcharts/modules/stock.src';
import { Router } from '@angular/router';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { FormComponent} from '../form/form.component';
import { LoginService } from '../login.service';

// import CanvasJS from 'canvasjs';
declare var CanvasJS: any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private router: Router, private dialog: MatDialog,private service : LoginService) { }
  showMap: any = true;
  chart: any;
  peopleChart: any;
  barChart : any;
  machineLearning : any;
  donate:any;
  stateList : Array<Object>=[];
  ngOnInit() {

    this.service.chatbot().subscribe(res => {

      console.log("res",res["_body"]);
      this.donate = JSON.parse(res["_body"]);
    });


    this.service.donatersList().subscribe(res => {

      console.log("res",res["_body"]);
      this.stateList = JSON.parse(res["_body"]);
    });
    this.service.machineLearning().subscribe(res => {

      this.machineLearning = JSON.parse(res["_body"]); 
    });

    this.getChart();
    this.getPeopleChart();
  }
  getChart() {
    const that = this;
    this.chart = new Chart({


      chart: {
        type: 'bubble',
        plotBorderWidth: 1,
        zoomType: 'xy',
        backgroundColor: '#e6dbdb'
      },

      legend: {
        enabled: true,
        labelFormatter: function () {
          return this.name ;
      }
      },
      xAxis: {
        visible: false
      },

      yAxis: {
        visible: false
      },
      title: {
        text: 'Affected Areas',
        style: {
          fontWeight: 'bold',
          fontSize: '20px',
          color: 'rgb(67, 112, 112)'

      }
      },

      credits: {
        enabled: false
      },


      tooltip: {
        useHTML: true,
        headerFormat: '<table>',
        pointFormat: '<tr><th colspan="2"><span>{point.name}</span></th></tr>' +
          '<td></tr>',
        footerFormat: '</table>',
        followPointer: true,
        style: {
          fontSize: '16px',
        }

      },

      plotOptions: {
        series: {

          cursor: 'pointer',
          events: {
            click: function (event) {
              that.showMap = true;
            }
          },
          dataLabels: {
            enabled: true,
            format: ''

          },
          animation: true

        },
        bubble: {
          minSize: 40,
          maxSize: 40
        }

      },

      series: [{
        name: 'Highly Affected',
        data: [
        // { x: 50, y: 60, z: 120, name: "Thiruvalla" },
         // { x: 62.5, y: 52.5, z: 120, name: "Mavelikkara" },
          { x: 77.5, y: 75.5, z: 120, name: "Kodungallur" },
          { x: 52.5, y: 80, z: 120, name: "Chengannur"},
         
         { x: 65, y: 65, z: 120, name: "Kothamangalam" },
          { x: 60, y: 80, z: 120, name: "Alappuzha" }
        ],
        color: '#FF0000'

      },{
        name:'Moderate Affected',
    data:[
      { x: 80, y: 70, z: 120, name: "Thissur"},
     // { x: 55, y: 70, z: 120, name: "Mallapally"},
      { x: 70, y: 80, z: 120, name: "Muvattupuzha"},
      { x: 72.5, y: 70, z: 120, name: "Kunnathunad" }
    ],
    color:"#FFF263"
  },
  {
    name:'Less Affected',

    data:[
      { x: 67.5, y: 57.5, z: 120, name: "Aluva"},
      { x: 75.5, y: 60, z: 120, name: "Wadakkancheri"},
     // { x: 75, y: 50, z: 120, name: "Mukundapuram"},
      { x: 57.5, y: 65, z: 120, name: "Cherthala"}

    ]
  }
  ]

    });
  }

  getPeopleChart() {
    this.peopleChart = new Chart({
      chart: {
        type: 'column',
        backgroundColor: '#e6dbdb'
      },
      title: {
        text: 'Disaster Toll',
        style: {
          fontWeight: 'bold',
          fontSize: '20px',
          color: 'rgb(67, 112, 112)'

      }
      },
      credits: {
        enabled: false
      },
      xAxis: {
        categories: ['Alive', 'Injured', 'Missing', 'Dead']
      },
      yAxis: {
        min: 0,
        title: {
          text: 'People Count',
          style: {
            fontWeight: 'bold',
            fontSize: '20px',
            color: 'rgb(67, 112, 112)'
        }
        },
        stackLabels: {
          enabled: false,

        }
      },
      tooltip: {
        headerFormat: '<b></b><br/>',
        pointFormat: '{point.stackTotal}'
      },
      plotOptions: {
        column: {
          stacking: 'normal',
          dataLabels: {
            enabled: false,
            color: (Highcharts.theme && Highcharts.theme.dataLabelsColor)
          }
        }
      },
      series: [{
        name: 'Alive',
        data: [3200, 0, 0, 0 ]
      }, {
        name: 'Injured',
        data: [0, 1728, 0, 0]
      }, {
        name: 'Missing',
        data: [0, 0, 840, 0]
      }, {
        name: 'Dead',
        data: [0, 0, 0, 425]
      }]
    });
  }

  onClick() {
    console.log('AS', this.showMap);
this.showMap = true;
console.log('AS', this.showMap);
  }

  // feedbackForm() {
  //   this.router.navigate(['feedback']);
  // }

  openFeedback() {
    const dialogConfig =  new MatDialogConfig();
    dialogConfig.minWidth =  400;
    dialogConfig.minHeight =  300;
    this.dialog.open(FormComponent, dialogConfig);
  }
}



