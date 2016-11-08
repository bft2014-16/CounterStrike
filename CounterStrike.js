"use strict";
var zaehler = 0;
var startZeit;

function buttonGedrueckt()
    if (startZeit){
            var zeit = Date.getMilliseconds - startZeit)/1000;
            document.getElementById("tacho").innerHTML="das sind " + (zaehler/zeit) + 
    }else{
        startZeit = new Date().getMilliseconds;
    }
    zaehler++;
    document.getElementById("ZaehlerAnzeige").innerHTML = "Du hast " + zaehler + " mal gedrückt!!!";
}