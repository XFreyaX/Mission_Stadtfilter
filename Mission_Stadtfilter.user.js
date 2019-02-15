// ==UserScript==
// @name         Mission_Stadtfilter
// @namespace    Leitstellenspiel
// @version      0.1
// @description  filtert ungewollte Städte aus der Missionsliste
// @author       x_Freya_x
// @include      https://www.leitstellenspiel.de/*
// @require      https://code.jquery.com/jquery-3.3.1.js
// ==/UserScript==

(() => {
    'use strict';

    var forbidden_places = ["Stadt A",""Stadt B",""Stadt C"]; // Edit this line with city names - this city missions will be hidden
    var t, tt, i;

    const filterit = () => {
        var ml = $('.missionSideBarEntry');
        ml.each(function(){
            t = $(this);
            tt = t.text();
            for (i = 0; i < forbidden_places.length; i++) {
                if (tt.indexOf(forbidden_places[i]) >= 0) {
                    t.css('display', 'none');
                } else {
                }
            }
        });
    };

    let timerID = setInterval(filterit, 20000);
})();
