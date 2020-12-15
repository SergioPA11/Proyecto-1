import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    var map = L.map('map').setView([28.140811, -15.4921491], 10.5);
    var popup = L.popup();

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: 'pk.eyJ1Ijoic2VyZ2lvcGExMSIsImEiOiJja2libnFvZzIxMTR6MnN0Z3ZvMXU3eGU5In0.2XrcyC4TpekDLFY-pKom8Q'
    }).addTo(map);

    L.polygon([
        [28.179555, -15.420051], //1
        [28.166843, -15.440307], //2
        [28.153223, -15.431724], //3
        [28.132334, -15.442024], //4
        [28.126884, -15.457817], //5
        [28.125498, -15.467648], //6
        [28.136319, -15.479782], //7
        [28.121169, -15.495219], //8
        [28.085395, -15.512405], //9
        [28.078126, -15.507599], //10
        [28.053890, -15.526481], //11
        [28.049497, -15.508813], //12
        [28.060858, -15.477730], //13
        [28.035248, -15.452127], //14
        [28.027224, -15.454384], //15
        [28.040255, -15.426231], //16
        [28.031467, -15.399109], //17
        [28.047890, -15.416926], //18
        [28.052282, -15.413649], //19
        [28.061602, -15.420810], //20
        [28.076596, -15.414741], //21
        [28.086235, -15.416926], //22
        [28.091482, -15.413042], //23
        [28.103796, -15.412435], //24
        [28.111291, -15.415591], //25
        [28.130932, -15.429143], //26
        [28.150196, -15.424858], //27
        [28.151709, -15.412155], //28
        [28.172594, -15.405632]  //29
    ]).addTo(map);

    function onMapClick(e) {
      popup
          .setLatLng(e.latlng)
          .setContent("You clicked the map at " + e.latlng)
          .openOn(map);
  }
  
  map.on('click', onMapClick);
    
  }

  datos(){
    this.router.navigateByUrl("/datos");
}

  
}

