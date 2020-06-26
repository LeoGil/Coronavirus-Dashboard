(this["webpackJsonpcoronavirus-dashboard"]=this["webpackJsonpcoronavirus-dashboard"]||[]).push([[0],{46:function(e,a,t){e.exports=t.p+"static/media/logo.fa1e2a0b.png"},47:function(e,a,t){e.exports=t(98)},86:function(e,a,t){},87:function(e,a,t){},93:function(e,a,t){},94:function(e,a,t){},95:function(e,a,t){},96:function(e,a,t){},98:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(19),c=t.n(o),s=t(10),l=t(1),i=t(5),d=t.n(i),m=t(12),u=t(3),f=t(41),p=(t(69),t(16)),b=t.n(p),v=t(42),E=t.n(v).a.create({baseURL:"https://apicoviddashboard.herokuapp.com"});t(86);function h(e){var a=e.globaldata,t=new Intl.NumberFormat;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"text-center title-components"},"Global Data"),r.a.createElement("article",{className:"global-article"},r.a.createElement("section",{className:"cases"},r.a.createElement("div",{className:"global-data-title top-color-1"},"Cases",r.a.createElement("span",{className:"global-data-numbers color-cases"},t.format(a.cases)),"New cases today",r.a.createElement("span",{className:"global-data-numbers color-new-case"},t.format(a.todayCases))),r.a.createElement("div",{className:"global-data-title top-color-2"},"Deaths",r.a.createElement("span",{className:"global-data-numbers color-death"},t.format(a.deaths)),"New deaths today",r.a.createElement("span",{className:"global-data-numbers color-new-death"},t.format(a.todayDeaths))),r.a.createElement("div",{className:"global-data-title top-color-3"},"Recovered",r.a.createElement("span",{className:"global-data-numbers color-recovered"},t.format(a.recovered)),"New recoveries today",r.a.createElement("span",{className:"global-data-numbers color-new-recoveries"},t.format(a.todayRecovered))),r.a.createElement("div",{className:"global-data-title top-color-4"},"Active cases",r.a.createElement("span",{className:"global-data-numbers color-active"},t.format(a.active)),"Tests",r.a.createElement("span",{className:"global-data-numbers color-tests"},t.format(a.tests))),r.a.createElement("div",{className:"global-data-title top-color-5"},"Countries affected",r.a.createElement("span",{className:"global-data-numbers color-affected"},t.format(a.affectedCountries)),"Criticals cases",r.a.createElement("span",{className:"global-data-numbers color-critical"},t.format(a.critical))))))}t(87);var g="/Coronavirus-Dashboard/",y=new Intl.NumberFormat;function N(e){var a=e.country;a.iso2="MS Zaandam"===a.country?"US":a.iso2,a.iso2="Diamond Princess"===a.country?"US":a.iso2;var t=Math.round(100*a.active/a.cases),n=Math.round(100*a.recovered/a.cases),o=Math.ceil(100*a.deaths/a.cases);return r.a.createElement("div",{className:"col-xl-3 col-lg-4"},r.a.createElement(s.b,{to:"".concat(g).concat(a.iso2),className:"unstyled-link"},r.a.createElement("article",{className:"pais-article"},r.a.createElement("figure",{className:"flag"},r.a.createElement("img",{src:"https://cdn.u21.io/flags/4x3/".concat(a.iso2.toLowerCase(),".svg"),alt:"flag ".concat(a.country)}),r.a.createElement("figcaption",{className:"text-bold font-smaller text-center"},a.country)),r.a.createElement("div",{className:"progress shadow",style:{height:"7px"}},r.a.createElement("div",{className:"progress-bar bg-active",role:"progressbar",style:{width:"".concat(t,"%")},"aria-valuenow":t,"aria-valuemin":"0","aria-valuemax":"100"}),r.a.createElement("div",{className:"progress-bar bg-recovered",role:"progressbar",style:{width:"".concat(n,"%")},"aria-valuenow":n,"aria-valuemin":"0","aria-valuemax":"100"}),r.a.createElement("div",{className:"progress-bar bg-death",role:"progressbar",style:{width:"".concat(o,"%")},"aria-valuenow":o,"aria-valuemin":"0","aria-valuemax":"100"})),r.a.createElement("section",{className:"cases"},r.a.createElement("div",null,"Cases",r.a.createElement("span",{className:"color-cases"},y.format(a.cases)),a.todayCases>0&&r.a.createElement("span",{className:"color-cases new-today"},"+ ",y.format(a.todayCases))),r.a.createElement("div",null,"Deaths",r.a.createElement("span",{className:"color-death"},y.format(a.deaths)),a.todayDeaths>0&&r.a.createElement("span",{className:"color-death new-today"},"+ ",y.format(a.todayDeaths))),r.a.createElement("div",null,"Recovered",r.a.createElement("span",{className:"color-recovered"},y.format(a.recovered)),a.todayRecovered>0&&r.a.createElement("span",{className:"color-recovered new-today"},"+ ",y.format(a.todayRecovered))),r.a.createElement("div",null,"Active Cases",r.a.createElement("span",{className:"color-active"},y.format(a.active)))))))}var C=t(11);function w(e){var a=e.timeline,t=e.timelineDataLoaded;return Object(n.useEffect)((function(){if(t){var e=[],n=[],r=[],o=[],c=[];Object.keys(a.cases).forEach((function(t){e.push(t),n.push(a.cases[t])})),Object.keys(a.deaths).forEach((function(e){r.push(a.deaths[e])})),Object.keys(a.recovered).forEach((function(e){o.push(a.recovered[e])})),Object.keys(a.cases).forEach((function(e){c.push(a.cases[e]-(a.deaths[e]+a.recovered[e]))}));var s=document.getElementById("cav_cases").getContext("2d");new C(s,{type:"line",options:{tooltips:{mode:"index",intersect:!1},legend:{labels:{fontColor:"white"}},scales:{yAxes:[{ticks:{fontColor:"white"}}],xAxes:[{ticks:{fontColor:"white"}}]}},data:{labels:e,datasets:[{label:"Total Cases",fill:!1,lineTension:.1,backgroundColor:"rgba(14, 233, 203,0.4)",borderColor:"#0ee9cb",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"#0ee9cb",pointBackgroundColor:"#0ee9cb",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"#0ee9cb",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:2,pointHitRadius:2,data:n.map((function(e){return e}))},{label:"Total Recovered",fill:!1,lineTension:.1,backgroundColor:"rgba(52, 127, 213,0.4)",borderColor:"#347fd5",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"#347fd5",pointBackgroundColor:"#347fd5",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"#347fd5",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:2,pointHitRadius:2,data:o.map((function(e){return e}))},{label:"Total Deaths",fill:!1,lineTension:.1,backgroundColor:"rgba(243, 83, 83,0.4)",borderColor:"#f35353",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"#f35353",pointBackgroundColor:"#f35353",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"#f35353",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:2,pointHitRadius:2,data:r.map((function(e){return e}))},{label:"Active cases",fill:!1,lineTension:.1,backgroundColor:"rgba(255,193,55,0.4)",borderColor:"#ffc137",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"#ffc137",pointBackgroundColor:"#ffc137",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"#ffc137",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:2,pointHitRadius:2,data:c.map((function(e){return e}))}]}})}}),[t]),r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Timeline cases and deaths"),r.a.createElement("canvas",{className:"mt-4",height:"164px",id:"cav_cases"}))}function O(e){var a=e.countries,t=Object(n.useState)(),o=Object(u.a)(t,2),c=o[0],s=o[1],l=Object(n.useState)(!1),i=Object(u.a)(l,2),f=i[0],p=i[1];return Object(n.useEffect)((function(){if(void 0!==a[0]){for(var e=[],t=0;t<5;t++)e.push(a[t].iso2);(function(){var a=Object(m.a)(d.a.mark((function a(){var t;return d.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,E.post("/top_countries_timeline",e);case 2:t=a.sent,s(t.data),p(!0);case 5:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}})()()}}),[a]),Object(n.useEffect)((function(){if(c&&!1===f){var e=[],a=[],t=[],n=[];Object.keys(c[0].timeline.cases).forEach((function(a){e.push(a)}));for(var r=0;r<c.length;r++){t.push(c[r].country),a.push(c[r].timeline.cases);var o="#".concat(Math.floor(16777215*Math.random()).toString(16));n.push({label:t[r],fill:!1,lineTension:.1,borderColor:o,borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:o,pointBackgroundColor:o,pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:o,pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:2,pointHitRadius:2,data:Object.values(a[r]).map((function(e){return e}))})}var s=document.getElementById("cav_cases_top_countries").getContext("2d");new C(s,{type:"line",options:{tooltips:{mode:"index",intersect:!1},legend:{labels:{fontColor:"white"}},scales:{yAxes:[{ticks:{fontColor:"white"}}],xAxes:[{ticks:{fontColor:"white"}}]}},data:{labels:e,datasets:n}})}}),[c,f]),r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Timeline cases from top 5 countries"),r.a.createElement("canvas",{className:"mt-4",height:"164px",id:"cav_cases_top_countries"}))}function x(e){var a=e.data,t=e.timelineDataLoaded,o=e.country,c=void 0===o?"Global":o;return Object(n.useEffect)((function(){if(t){var e=document.getElementById("pie_cases").getContext("2d");new C(e,{type:"pie",options:{legend:{labels:{fontColor:"white"}}},data:{labels:["Active","Recovered","Death"],datasets:[{backgroundColor:["#ffc137","#347fd5","#f35353"],data:[a.active,a.recovered,a.deaths]}]}})}}),[t]),r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,c," active, deaths and recovered"),r.a.createElement("canvas",{className:"mt-4",id:"pie_cases"}))}var j=t(22),B=t(23);function D(){var e=Object(j.a)(["\n  .charts {\n    section {\n      box-shadow: 0.2rem 1rem 0.65rem rgba(0, 0, 0, 0.342);\n    }\n  }\n  @media all and (min-width: 700px) and (max-width: 1499px) {\n    .charts {\n      div {\n        display: flex;\n        flex-wrap: wrap;\n        justify-content: center;\n        section {\n          margin: 1rem;\n          flex: 1 50%;\n          max-width: 47%;\n        }\n      }\n    }\n  }\n\n  @media all and (min-width: 1500px) {\n    display: flex;\n    .global-data {\n      flex: 0 0 25%;\n      max-width: 25%;\n    }\n    .charts {\n      flex: 0 0 75%;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      div {\n        width: 60%;\n      }\n    }\n  }\n"]);return D=function(){return e},e}function k(){var e=Object(j.a)(["\n  @media all and (max-width: 499px) {\n    display: none !important;\n  }\n"]);return k=function(){return e},e}var S=B.a.div(k()),R=B.a.main(D());function H(){var e=Object(n.useState)([]),a=Object(u.a)(e,2),t=a[0],o=a[1],c=Object(n.useState)([]),s=Object(u.a)(c,2),l=s[0],i=s[1],p=Object(n.useState)(!1),v=Object(u.a)(p,2),g=v[0],y=v[1],C=Object(n.useState)(0),j=Object(u.a)(C,2),B=j[0],D=j[1],k=Object(n.useState)(0),H=Object(u.a)(k,2),_=H[0],T=H[1],A=Object(n.useState)(),L=Object(u.a)(A,2),I=L[0],W=L[1],F=Object(n.useState)(!1),M=Object(u.a)(F,2),J=M[0],U=M[1],P=Object(n.useState)(!1),G=Object(u.a)(P,2),Z=G[0],q=G[1];return Object(n.useEffect)((function(){var e=function(){var e=Object(m.a)(d.a.mark((function e(){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.get("/countries");case 2:(a=e.sent).data=Object.values(a.data),o(a.data),U(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),a=function(){var e=Object(m.a)(d.a.mark((function e(){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.get("/global");case 2:a=e.sent,i(a.data),U(!1),q(!0);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e(),a()}),[_]),Object(n.useEffect)((function(){var e=null;return g&&(e=setInterval((function(){D((function(e){return e+1})),B%10===0&&0!==B&&(T((function(e){return e+1})),D(0))}),1e3)),function(){return clearInterval(e)}}),[g,B]),Object(n.useEffect)((function(){E.get("/global_timeline").then((function(e){W(e.data),y(!0),U(!0)}))}),[]),!1===g?r.a.createElement("div",{className:"loading"},r.a.createElement(b.a,{type:"bars",color:"#eee"})):r.a.createElement("div",{className:"container-fluid"},r.a.createElement(f.NotificationContainer,null),r.a.createElement(R,null,r.a.createElement("div",{className:"global-data"},r.a.createElement(h,{globaldata:l})),r.a.createElement("div",{className:"charts"},r.a.createElement(S,null,r.a.createElement("section",{className:"chart-div"},r.a.createElement(w,{timeline:I,timelineDataLoaded:J})),r.a.createElement("section",{className:"chart-div"},r.a.createElement(O,{countries:t})),r.a.createElement("section",{className:"chart-div"},r.a.createElement(x,{data:l,timelineDataLoaded:Z}))))),r.a.createElement("div",{className:"row justify-content-md-center"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h1",{className:"text-center text-white title-components"},"Countries Data")),t.map((function(e){return r.a.createElement(N,{key:e.country,country:e})}))))}t(93);var _=new Intl.NumberFormat;function T(e){var a=e.country;return a.iso2="MS Zaandam"===a.country?"US":a.iso2,a.iso2="Diamond Princess"===a.country?"US":a.iso2,r.a.createElement("article",{className:"pais-details-article"},r.a.createElement("figure",{className:"flag"},r.a.createElement("img",{src:"https://cdn.u21.io/flags/4x3/".concat(a.iso2.toLowerCase(),".svg"),alt:"flag ".concat(a.country)}),r.a.createElement("figcaption",null,a.country)),r.a.createElement("section",{className:"cases"},r.a.createElement("div",null,"Cases",r.a.createElement("span",{className:"country-data-numbers color-cases"},_.format(a.cases)),"New Cases Today",r.a.createElement("span",{className:"country-data-numbers color-new-case"},_.format(a.todayCases))),r.a.createElement("div",null,"Deaths",r.a.createElement("span",{className:"country-data-numbers color-death"},_.format(a.deaths)),"New Deaths Today",r.a.createElement("span",{className:"country-data-numbers color-new-death"},_.format(a.todayDeaths))),r.a.createElement("div",null,"Recovered",r.a.createElement("span",{className:"country-data-numbers color-recovered"},_.format(a.recovered)),"New Recovered Today",r.a.createElement("span",{className:"country-data-numbers color-new-recoveries"},_.format(a.todayRecovered))),r.a.createElement("div",null,"Active Cases",r.a.createElement("span",{className:"country-data-numbers color-active"},_.format(a.active)),"Tests",r.a.createElement("span",{className:"country-data-numbers color-tests"},_.format(a.tests))),r.a.createElement("div",null,"Population",r.a.createElement("span",{className:"country-data-numbers color-affected"},_.format(a.population)),"Critical",r.a.createElement("span",{className:"country-data-numbers color-critical"},_.format(a.critical)))))}function A(e){var a=e.data,t=e.timelineDataLoaded;return Object(n.useEffect)((function(){if(t){var e=document.getElementById("pie_tests").getContext("2d");new C(e,{type:"pie",options:{legend:{labels:{fontColor:"white"}}},data:{labels:["".concat(a.country," population"),"Tests"],datasets:[{backgroundColor:["#da8213","#6bfb31"],data:[a.population,a.tests]}]}})}}),[t]),r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,a.country," Population / Tests"),r.a.createElement("canvas",{className:"mt-4",id:"pie_tests"}))}t(94);function L(){var e=Object(l.e)().country_code,a=Object(n.useState)(!1),t=Object(u.a)(a,2),o=t[0],c=t[1],s=Object(n.useState)(!1),i=Object(u.a)(s,2),f=i[0],p=i[1],v=Object(n.useState)([]),h=Object(u.a)(v,2),g=h[0],y=h[1],N=Object(n.useState)([]),C=Object(u.a)(N,2),O=C[0],j=C[1];return Object(n.useEffect)((function(){(function(){var a=Object(m.a)(d.a.mark((function a(){var t;return d.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,E.get("/country_timeline/".concat(e));case 2:t=a.sent,j(t.data.timeline),p(!0);case 5:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}})()()}),[]),Object(n.useEffect)((function(){(function(){var a=Object(m.a)(d.a.mark((function a(){var t;return d.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,E.get("/country/".concat(e));case 2:t=a.sent,y(t.data),c(!0);case 5:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}})()()}),[]),o?r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement(T,{country:g})),r.a.createElement("div",{className:"col-8"},r.a.createElement("section",{className:" chart-div"},r.a.createElement(w,{timeline:O,timelineDataLoaded:f}))),r.a.createElement("div",{className:"col-4"},r.a.createElement("div",{className:"col-12"},r.a.createElement("section",{className:"chart-div"},r.a.createElement(x,{data:g,timelineDataLoaded:f,country:g.country,pageLoaded:o}))),r.a.createElement("div",{className:"col-12"},r.a.createElement("section",{className:"chart-div"},r.a.createElement(A,{data:g,timelineDataLoaded:f})))))):r.a.createElement("div",{className:"loading"},r.a.createElement(b.a,{type:"bars",color:"#eee"}))}t(95);var I=t(46),W=t.n(I),F=function(){return r.a.createElement("div",{id:"main-header"},r.a.createElement(s.b,{to:g,className:"title-brand"},r.a.createElement("img",{src:W.a,alt:"Covid Dashboard",className:"logo"}),"DASHBOARD",r.a.createElement("div",{className:"blob red"})),r.a.createElement("nav",{className:"my-2 my-md-0 mr-md-3"},r.a.createElement(s.b,{to:g,className:"p-2 text-white"},"Features")))};function M(){return r.a.createElement(s.a,null,r.a.createElement(l.a,{path:g,component:F}),r.a.createElement(l.a,{exact:!0,path:g,component:H}),r.a.createElement(l.a,{exact:!0,path:"".concat(g,":country_code"),component:L}))}t(96),t(97);var J=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(M,null))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(J,null)),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.bcccc90a.chunk.js.map