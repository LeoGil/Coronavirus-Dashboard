(this["webpackJsonpcoronavirus-dashboard"]=this["webpackJsonpcoronavirus-dashboard"]||[]).push([[0],{46:function(e,a,n){e.exports=n.p+"static/media/logo.fa1e2a0b.png"},47:function(e,a,n){e.exports=n(92)},92:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),o=n(21),c=n.n(o),s=n(12),l=n(1),i=n(7),d=n.n(i),m=n(14),u=n(3),b=n(41),f=(n(69),n(18)),p=n.n(f),g=n(42),h=n.n(g).a.create({baseURL:"https://apicoviddashboard.herokuapp.com"}),v=n(4),x=n(5);function w(){var e=Object(v.a)(["\n  .container-fluid {\n    padding: 1rem;\n    font-family: 'Open Sans', -apple-system, Helvetica, sans-serif !important;\n    font-weight: 600;\n    background: "," !important;\n    color: "," !important;\n    overflow-x: hidden !important;\n  }\n\n  a {\n    color: "," !important;\n    text-decoration: none !important;\n  }\n\n  .loading {\n    height: calc(100vh - 59px);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background: "," !important;\n    color: "," !important;\n  }\n\n  .notification {\n    box-shadow: none !important;\n  }\n\n  .title-components {\n    font-family: 'Ubuntu', 'Open Sans', -apple-system, Helvetica, sans-serif !important;\n    text-align: center;\n    font-weight: 800 !important;\n    font-size: 55px;\n  }\n\n  .chart-div {\n    background: ",";\n    border-radius: 5px;\n    padding: 20px;\n    margin-bottom: 20px;\n  }\n\n  .color-cases {\n    color: ",";\n  }\n\n  .color-death {\n    color: ",";\n  }\n\n  .color-recovered {\n    color: ",";\n  }\n\n  .color-active {\n    color: ",";\n  }\n\n  .color-new-case {\n    color: ",";\n  }\n\n  .color-new-death {\n    color: ",";\n  }\n\n  .color-new-recoveries {\n    color: ",";\n  }\n\n  .color-tests {\n    color: ",";\n  }\n\n  .color-critical {\n    color: ",";\n  }\n\n  .color-affected {\n    color: ",";\n  }\n\n  .bg-active {\n    background-color: "," !important;\n  }\n\n  .bg-recovered {\n    background-color: "," !important;\n  }\n\n  .bg-death {\n    background-color: "," !important;\n  }\n"]);return w=function(){return e},e}var E="#161e2c",y="#29344a",N="#6bfb31",C="#eee",O="#0ee9cb",j="#f35353",k="#347fd5",B="#ffc137",D="#ff8a37",S="#af1c1c",H="#2a8e3c",R="#6bfb31",_="#dc3b1f",T="#da8213",z=x.b.div(w(),E,C,C,E,C,y,O,j,k,B,D,S,H,R,_,T,B,k,j);function A(){var e=Object(v.a)(["\n  .global-article {\n    border-radius: 0.5rem;\n    width: 100%;\n    font-weight: 800;\n\n    .cases {\n      display: flex;\n      flex-wrap: wrap;\n      @media all and (max-width: 499px) {\n        flex-direction: column;\n      }\n      div {\n        min-width: 23rem;\n        flex: 1 1 auto;\n        display: flex;\n        flex-direction: column;\n        text-align: center;\n      }\n\n      .global-data-title {\n        border: 3px solid ",";\n        ","\n        margin: 1rem;\n        @media all and (max-width: 499px) {\n          margin: 0.5rem 0.3rem;\n        }\n        border-radius: 0.5rem;\n        background-color: ",";\n        font-size: 1.5rem;\n        @media all and (max-width: 499px) {\n          font-size: 1rem;\n        }\n        &:hover {\n          filter: brightness(1.2);\n          transition: all 0.2s;\n          position: relative;\n          border: 3px solid ",";\n        }\n        box-shadow: 0.2rem 1rem 0.65rem rgba(0, 0, 0, 0.342);\n      }\n      .global-data-numbers {\n        font-size: 3rem;\n        @media all and (max-width: 499px) {\n          font-size: 1.7rem;\n        }\n        font-weight: 800;\n      }\n    }\n  }\n"]);return A=function(){return e},e}function L(){var e=Object(v.a)(["\n    ","\n  "]);return L=function(){return e},e}var I={"top-color-1":D,"top-color-2":S,"top-color-3":H,"top-color-4":R,"top-color-5":_};var W=x.b.div(A(),y,function(){var e="";for(var a in I)e+="\n      &.".concat(a," {\n        border-top: 1rem solid ").concat(I[a],";\n      }\n    ");return Object(x.a)(L(),e)}(),y,N);function F(e){var a=e.globaldata,n=new Intl.NumberFormat;return r.a.createElement(W,null,r.a.createElement("h1",{className:"title-components"},"Global Data"),r.a.createElement("article",{className:"global-article"},r.a.createElement("section",{className:"cases"},r.a.createElement("div",{className:"global-data-title top-color-1"},"Cases",r.a.createElement("span",{className:"global-data-numbers color-cases"},n.format(a.cases)),"New cases today",r.a.createElement("span",{className:"global-data-numbers color-new-case"},n.format(a.todayCases))),r.a.createElement("div",{className:"global-data-title top-color-2"},"Deaths",r.a.createElement("span",{className:"global-data-numbers color-death"},n.format(a.deaths)),"New deaths today",r.a.createElement("span",{className:"global-data-numbers color-new-death"},n.format(a.todayDeaths))),r.a.createElement("div",{className:"global-data-title top-color-3"},"Recovered",r.a.createElement("span",{className:"global-data-numbers color-recovered"},n.format(a.recovered)),"New recoveries today",r.a.createElement("span",{className:"global-data-numbers color-new-recoveries"},n.format(a.todayRecovered))),r.a.createElement("div",{className:"global-data-title top-color-4"},"Active cases",r.a.createElement("span",{className:"global-data-numbers color-active"},n.format(a.active)),"Tests",r.a.createElement("span",{className:"global-data-numbers color-tests"},n.format(a.tests))),r.a.createElement("div",{className:"global-data-title top-color-5"},"Countries affected",r.a.createElement("span",{className:"global-data-numbers color-affected"},n.format(a.affectedCountries)),"Criticals cases",r.a.createElement("span",{className:"global-data-numbers color-critical"},n.format(a.critical))))))}function M(){var e=Object(v.a)(["\n  .pais-article {\n    margin: 20px auto 10px;\n    padding: 20px;\n    border-radius: 0.5rem;\n    background: ",";\n    font-weight: 800;\n    font-size: 18px;\n    border: 3px solid ",";\n    &:hover {\n      filter: brightness(1.2);\n      transition: all 0.2s;\n      position: relative;\n      top: -10px;\n      border: 3px solid ",";\n    }\n    box-shadow: 0.2rem 1rem 0.65rem rgba(0, 0, 0, 0.342);\n    .flag {\n      margin-right: 55px;\n      display: grid;\n      grid-template-columns: 1fr 5fr;\n      font-size: x-large;\n      align-items: center;\n      img {\n        height: 48px;\n        border-radius: 20%;\n        box-shadow: 0.31rem 0.29rem 0.65rem rgba(0, 0, 0, 0.342);\n      }\n    }\n\n    .cases {\n      display: flex;\n      flex-wrap: wrap;\n      min-height: 67px;\n      div {\n        flex: 1 1 auto;\n        display: flex;\n        flex-direction: column;\n      }\n    }\n\n    .new-today {\n      font-size: 12px;\n      margin-top: -5px;\n    }\n  }\n"]);return M=function(){return e},e}var J=x.b.div(M(),y,y,N),U="/Coronavirus-Dashboard/",P=new Intl.NumberFormat;function G(e){var a=e.country;a.iso2="MS Zaandam"===a.country?"US":a.iso2,a.iso2="Diamond Princess"===a.country?"US":a.iso2;var n=Math.round(100*a.active/a.cases),t=Math.round(100*a.recovered/a.cases),o=Math.ceil(100*a.deaths/a.cases);return r.a.createElement(J,{className:"col-xl-3 col-lg-4"},r.a.createElement(s.b,{to:"".concat(U).concat(a.iso2),className:"unstyled-link"},r.a.createElement("article",{className:"pais-article"},r.a.createElement("figure",{className:"flag"},r.a.createElement("img",{src:"https://cdn.u21.io/flags/4x3/".concat(a.iso2.toLowerCase(),".svg"),alt:"flag ".concat(a.country)}),r.a.createElement("figcaption",{className:"text-bold font-smaller text-center"},a.country)),r.a.createElement("div",{className:"progress shadow",style:{height:"7px"}},r.a.createElement("div",{className:"progress-bar bg-active",role:"progressbar",style:{width:"".concat(n,"%")},"aria-valuenow":n,"aria-valuemin":"0","aria-valuemax":"100"}),r.a.createElement("div",{className:"progress-bar bg-recovered",role:"progressbar",style:{width:"".concat(t,"%")},"aria-valuenow":t,"aria-valuemin":"0","aria-valuemax":"100"}),r.a.createElement("div",{className:"progress-bar bg-death",role:"progressbar",style:{width:"".concat(o,"%")},"aria-valuenow":o,"aria-valuemin":"0","aria-valuemax":"100"})),r.a.createElement("section",{className:"cases"},r.a.createElement("div",null,"Cases",r.a.createElement("span",{className:"color-cases"},P.format(a.cases)),a.todayCases>0&&r.a.createElement("span",{className:"color-cases new-today"},"+ ",P.format(a.todayCases))),r.a.createElement("div",null,"Deaths",r.a.createElement("span",{className:"color-death"},P.format(a.deaths)),a.todayDeaths>0&&r.a.createElement("span",{className:"color-death new-today"},"+ ",P.format(a.todayDeaths))),r.a.createElement("div",null,"Recovered",r.a.createElement("span",{className:"color-recovered"},P.format(a.recovered)),a.todayRecovered>0&&r.a.createElement("span",{className:"color-recovered new-today"},"+ ",P.format(a.todayRecovered))),r.a.createElement("div",null,"Active Cases",r.a.createElement("span",{className:"color-active"},P.format(a.active)))))))}var Z=n(13);function q(e){var a=e.timeline,n=e.timelineDataLoaded;return Object(t.useEffect)((function(){if(n){var e=[],t=[],r=[],o=[],c=[];Object.keys(a.cases).forEach((function(n){e.push(n),t.push(a.cases[n])})),Object.keys(a.deaths).forEach((function(e){r.push(a.deaths[e])})),Object.keys(a.recovered).forEach((function(e){o.push(a.recovered[e])})),Object.keys(a.cases).forEach((function(e){c.push(a.cases[e]-(a.deaths[e]+a.recovered[e]))}));var s=document.getElementById("cav_cases").getContext("2d");new Z(s,{type:"line",options:{tooltips:{mode:"index",intersect:!1},legend:{labels:{fontColor:"white"}},scales:{yAxes:[{ticks:{fontColor:"white"}}],xAxes:[{ticks:{fontColor:"white"}}]}},data:{labels:e,datasets:[{label:"Total Cases",fill:!1,lineTension:.1,backgroundColor:"rgba(14, 233, 203,0.4)",borderColor:"#0ee9cb",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"#0ee9cb",pointBackgroundColor:"#0ee9cb",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"#0ee9cb",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:2,pointHitRadius:2,data:t.map((function(e){return e}))},{label:"Total Recovered",fill:!1,lineTension:.1,backgroundColor:"rgba(52, 127, 213,0.4)",borderColor:"#347fd5",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"#347fd5",pointBackgroundColor:"#347fd5",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"#347fd5",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:2,pointHitRadius:2,data:o.map((function(e){return e}))},{label:"Total Deaths",fill:!1,lineTension:.1,backgroundColor:"rgba(243, 83, 83,0.4)",borderColor:"#f35353",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"#f35353",pointBackgroundColor:"#f35353",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"#f35353",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:2,pointHitRadius:2,data:r.map((function(e){return e}))},{label:"Active cases",fill:!1,lineTension:.1,backgroundColor:"rgba(255,193,55,0.4)",borderColor:"#ffc137",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"#ffc137",pointBackgroundColor:"#ffc137",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"#ffc137",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:2,pointHitRadius:2,data:c.map((function(e){return e}))}]}})}}),[n]),r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Timeline cases and deaths"),r.a.createElement("canvas",{className:"mt-4",height:"164px",id:"cav_cases"}))}function K(e){var a=e.countries,n=Object(t.useState)(),o=Object(u.a)(n,2),c=o[0],s=o[1],l=Object(t.useState)(!1),i=Object(u.a)(l,2),b=i[0],f=i[1];return Object(t.useEffect)((function(){if(void 0!==a[0]){for(var e=[],n=0;n<5;n++)e.push(a[n].iso2);(function(){var a=Object(m.a)(d.a.mark((function a(){var n;return d.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,h.post("/top_countries_timeline",e);case 2:n=a.sent,s(n.data),f(!0);case 5:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}})()()}}),[a]),Object(t.useEffect)((function(){if(c&&!1===b){var e=[],a=[],n=[],t=[];Object.keys(c[0].timeline.cases).forEach((function(a){e.push(a)}));for(var r=0;r<c.length;r++){n.push(c[r].country),a.push(c[r].timeline.cases);var o="#".concat(Math.floor(16777215*Math.random()).toString(16));t.push({label:n[r],fill:!1,lineTension:.1,borderColor:o,borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:o,pointBackgroundColor:o,pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:o,pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:2,pointHitRadius:2,data:Object.values(a[r]).map((function(e){return e}))})}var s=document.getElementById("cav_cases_top_countries").getContext("2d");new Z(s,{type:"line",options:{tooltips:{mode:"index",intersect:!1},legend:{labels:{fontColor:"white"}},scales:{yAxes:[{ticks:{fontColor:"white"}}],xAxes:[{ticks:{fontColor:"white"}}]}},data:{labels:e,datasets:t}})}}),[c,b]),r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Timeline cases from top 5 countries"),r.a.createElement("canvas",{className:"mt-4",height:"164px",id:"cav_cases_top_countries"}))}function Q(e){var a=e.data,n=e.timelineDataLoaded,o=e.country,c=void 0===o?"Global":o;return Object(t.useEffect)((function(){if(n){var e=document.getElementById("pie_cases").getContext("2d");new Z(e,{type:"pie",options:{legend:{labels:{fontColor:"white"}}},data:{labels:["Active","Recovered","Death"],datasets:[{backgroundColor:["#ffc137","#347fd5","#f35353"],data:[a.active,a.recovered,a.deaths]}]}})}}),[n]),r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,c," active, deaths and recovered"),r.a.createElement("canvas",{className:"mt-4",id:"pie_cases"}))}function V(){var e=Object(v.a)(["\n  .charts {\n    section {\n      box-shadow: 0.2rem 1rem 0.65rem rgba(0, 0, 0, 0.342);\n    }\n  }\n  @media all and (min-width: 700px) and (max-width: 1499px) {\n    .charts {\n      div {\n        display: flex;\n        flex-wrap: wrap;\n        justify-content: center;\n        section {\n          margin: 1rem;\n          flex: 1 50%;\n          max-width: 47%;\n        }\n      }\n    }\n  }\n\n  @media all and (min-width: 1500px) {\n    display: flex;\n    .global-data {\n      flex: 0 0 25%;\n      max-width: 25%;\n    }\n    .charts {\n      flex: 0 0 75%;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      div {\n        width: 60%;\n      }\n    }\n  }\n"]);return V=function(){return e},e}function X(){var e=Object(v.a)(["\n  @media all and (max-width: 499px) {\n    display: none !important;\n  }\n"]);return X=function(){return e},e}var Y=x.b.div(X()),$=x.b.main(V());function ee(){var e=Object(t.useState)([]),a=Object(u.a)(e,2),n=a[0],o=a[1],c=Object(t.useState)([]),s=Object(u.a)(c,2),l=s[0],i=s[1],f=Object(t.useState)(!1),g=Object(u.a)(f,2),v=g[0],x=g[1],w=Object(t.useState)(0),E=Object(u.a)(w,2),y=E[0],N=E[1],C=Object(t.useState)(0),O=Object(u.a)(C,2),j=O[0],k=O[1],B=Object(t.useState)(),D=Object(u.a)(B,2),S=D[0],H=D[1],R=Object(t.useState)(!1),_=Object(u.a)(R,2),T=_[0],z=_[1],A=Object(t.useState)(!1),L=Object(u.a)(A,2),I=L[0],W=L[1];return Object(t.useEffect)((function(){var e=function(){var e=Object(m.a)(d.a.mark((function e(){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.get("/countries");case 2:(a=e.sent).data=Object.values(a.data),o(a.data),z(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),a=function(){var e=Object(m.a)(d.a.mark((function e(){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.get("/global");case 2:a=e.sent,i(a.data),z(!1),W(!0);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e(),a()}),[j]),Object(t.useEffect)((function(){var e=null;return v&&(e=setInterval((function(){N((function(e){return e+1})),y%10===0&&0!==y&&(k((function(e){return e+1})),N(0))}),1e3)),function(){return clearInterval(e)}}),[v,y]),Object(t.useEffect)((function(){h.get("/global_timeline").then((function(e){H(e.data),x(!0),z(!0)}))}),[]),!1===v?r.a.createElement("div",{className:"loading"},r.a.createElement(p.a,{type:"bars",color:"#eee"})):r.a.createElement("div",{className:"container-fluid"},r.a.createElement(b.NotificationContainer,null),r.a.createElement($,null,r.a.createElement("div",{className:"global-data"},r.a.createElement(F,{globaldata:l})),r.a.createElement("div",{className:"charts"},r.a.createElement(Y,null,r.a.createElement("section",{className:"chart-div"},r.a.createElement(q,{timeline:S,timelineDataLoaded:T})),r.a.createElement("section",{className:"chart-div"},r.a.createElement(K,{countries:n})),r.a.createElement("section",{className:"chart-div"},r.a.createElement(Q,{data:l,timelineDataLoaded:I}))))),r.a.createElement("div",{className:"row justify-content-md-center"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h1",{className:"text-center text-white title-components"},"Countries Data")),n.map((function(e){return r.a.createElement(G,{key:e.country,country:e})}))))}function ae(){var e=Object(v.a)(["\n  display: flex;\n  flex-direction: column;\n  margin: 1rem 0;\n  font-weight: 800;\n  font-size: 18px;\n\n  .flag {\n    display: flex;\n    font-size: x-large;\n    align-items: center;\n    @media all and (max-width: 499px) {\n      justify-content: center;\n    }\n    img {\n      height: 48px;\n      border-radius: 20%;\n    }\n    figcaption {\n      margin-left: 1rem;\n    }\n  }\n\n  .cases {\n    display: flex;\n    flex-wrap: wrap;\n    @media all and (min-width: 500px) {\n      background: ",";\n      border-radius: 0.5rem;\n    }\n    div {\n      @media all and (max-width: 499px) {\n        background: ",";\n        border-radius: 0.5rem;\n      }\n      margin: 0.5rem;\n      padding: 0.5rem;\n      flex: 1 1 auto;\n      display: flex;\n      flex-direction: column;\n      text-align: center;\n      .country-data-numbers {\n        font-size: 2.5rem;\n        @media all and (max-width: 499px) {\n          font-size: 1.7rem;\n        }\n        font-weight: 800;\n      }\n    }\n  }\n"]);return ae=function(){return e},e}var ne=x.b.article(ae(),y,y),te=new Intl.NumberFormat;function re(e){var a=e.country;return a.iso2="MS Zaandam"===a.country?"US":a.iso2,a.iso2="Diamond Princess"===a.country?"US":a.iso2,r.a.createElement(ne,null,r.a.createElement("figure",{className:"flag"},r.a.createElement("img",{src:"https://cdn.u21.io/flags/4x3/".concat(a.iso2.toLowerCase(),".svg"),alt:"flag ".concat(a.country)}),r.a.createElement("figcaption",null,a.country)),r.a.createElement("section",{className:"cases"},r.a.createElement("div",null,"Cases",r.a.createElement("span",{className:"country-data-numbers color-cases"},te.format(a.cases)),"New Cases Today",r.a.createElement("span",{className:"country-data-numbers color-new-case"},te.format(a.todayCases))),r.a.createElement("div",null,"Deaths",r.a.createElement("span",{className:"country-data-numbers color-death"},te.format(a.deaths)),"New Deaths Today",r.a.createElement("span",{className:"country-data-numbers color-new-death"},te.format(a.todayDeaths))),r.a.createElement("div",null,"Recovered",r.a.createElement("span",{className:"country-data-numbers color-recovered"},te.format(a.recovered)),"New Recovered Today",r.a.createElement("span",{className:"country-data-numbers color-new-recoveries"},te.format(a.todayRecovered))),r.a.createElement("div",null,"Active Cases",r.a.createElement("span",{className:"country-data-numbers color-active"},te.format(a.active)),"Tests",r.a.createElement("span",{className:"country-data-numbers color-tests"},te.format(a.tests))),r.a.createElement("div",null,"Population",r.a.createElement("span",{className:"country-data-numbers color-affected"},te.format(a.population)),"Critical",r.a.createElement("span",{className:"country-data-numbers color-critical"},te.format(a.critical)))))}function oe(e){var a=e.data,n=e.timelineDataLoaded;return Object(t.useEffect)((function(){if(n){var e=document.getElementById("pie_tests").getContext("2d");new Z(e,{type:"pie",options:{legend:{labels:{fontColor:"white"}}},data:{labels:["".concat(a.country," population"),"Tests"],datasets:[{backgroundColor:["#da8213","#6bfb31"],data:[a.population,a.tests]}]}})}}),[n]),r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,a.country," Population / Tests"),r.a.createElement("canvas",{className:"mt-4",id:"pie_tests"}))}function ce(){var e=Object(v.a)(["\n  img {\n    height: 48px;\n    border-radius: 20%;\n  }\n"]);return ce=function(){return e},e}var se=x.b.div(ce());function le(){var e=Object(l.e)().country_code,a=Object(t.useState)(!1),n=Object(u.a)(a,2),o=n[0],c=n[1],s=Object(t.useState)(!1),i=Object(u.a)(s,2),b=i[0],f=i[1],g=Object(t.useState)([]),v=Object(u.a)(g,2),x=v[0],w=v[1],E=Object(t.useState)([]),y=Object(u.a)(E,2),N=y[0],C=y[1];return Object(t.useEffect)((function(){(function(){var a=Object(m.a)(d.a.mark((function a(){var n;return d.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,h.get("/country_timeline/".concat(e));case 2:n=a.sent,C(n.data.timeline),f(!0);case 5:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}})()()}),[]),Object(t.useEffect)((function(){(function(){var a=Object(m.a)(d.a.mark((function a(){var n;return d.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,h.get("/country/".concat(e));case 2:n=a.sent,w(n.data),c(!0);case 5:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}})()()}),[]),o?r.a.createElement(se,{className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement(re,{country:x})),r.a.createElement("div",{className:"col-8"},r.a.createElement("section",{className:" chart-div"},r.a.createElement(q,{timeline:N,timelineDataLoaded:b}))),r.a.createElement("div",{className:"col-4"},r.a.createElement("div",{className:"col-12"},r.a.createElement("section",{className:"chart-div"},r.a.createElement(Q,{data:x,timelineDataLoaded:b,country:x.country,pageLoaded:o}))),r.a.createElement("div",{className:"col-12"},r.a.createElement("section",{className:"chart-div"},r.a.createElement(oe,{data:x,timelineDataLoaded:b})))))):r.a.createElement("div",{className:"loading"},r.a.createElement(p.a,{type:"bars",color:"#eee"}))}function ie(){var e=Object(v.a)(["\n  padding: 0.5rem;\n  height: 100%;\n  width: 100%;\n  background: ",";\n  font-size: 18px;\n  font-weight: bold;\n  color: ",";\n  display: flex;\n  * {\n    display: flex;\n  }\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: center;\n  @media all and (max-width: 499px) {\n    flex-direction: column;\n    height: 120px;\n  }\n  .title-brand {\n    align-items: center;\n\n    .logo {\n      margin: auto 0.5rem;\n      width: 32px;\n      height: 32px;\n    }\n\n    .blob {\n      background: black;\n      border-radius: 50%;\n      box-shadow: 0 0 0 0 rgba(0, 0, 0, 1);\n      margin: 10px;\n      height: 20px;\n      width: 20px;\n      transform: scale(1);\n      animation: pulse-black 2s infinite;\n    }\n\n    @keyframes pulse-black {\n      0% {\n        transform: scale(0.95);\n        box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);\n      }\n\n      70% {\n        transform: scale(1);\n        box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);\n      }\n\n      100% {\n        transform: scale(0.95);\n        box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);\n      }\n    }\n\n    .blob.white {\n      background: white;\n      box-shadow: 0 0 0 0 rgba(255, 255, 255, 1);\n      animation: pulse-white 2s infinite;\n    }\n\n    @keyframes pulse-white {\n      0% {\n        transform: scale(0.95);\n        box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7);\n      }\n\n      70% {\n        transform: scale(1);\n        box-shadow: 0 0 0 10px rgba(255, 255, 255, 0);\n      }\n\n      100% {\n        transform: scale(0.95);\n        box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);\n      }\n    }\n\n    .blob.red {\n      background: rgba(255, 82, 82, 1);\n      box-shadow: 0 0 0 0 rgba(255, 82, 82, 1);\n      animation: pulse-red 2s infinite;\n    }\n\n    @keyframes pulse-red {\n      0% {\n        transform: scale(0.95);\n        box-shadow: 0 0 0 0 rgba(255, 82, 82, 0.7);\n      }\n\n      70% {\n        transform: scale(1);\n        box-shadow: 0 0 0 10px rgba(255, 82, 82, 0);\n      }\n\n      100% {\n        transform: scale(0.95);\n        box-shadow: 0 0 0 0 rgba(255, 82, 82, 0);\n      }\n    }\n\n    .blob.orange {\n      background: rgba(255, 121, 63, 1);\n      box-shadow: 0 0 0 0 rgba(255, 121, 63, 1);\n      animation: pulse-orange 2s infinite;\n    }\n\n    @keyframes pulse-orange {\n      0% {\n        transform: scale(0.95);\n        box-shadow: 0 0 0 0 rgba(255, 121, 63, 0.7);\n      }\n\n      70% {\n        transform: scale(1);\n        box-shadow: 0 0 0 10px rgba(255, 121, 63, 0);\n      }\n\n      100% {\n        transform: scale(0.95);\n        box-shadow: 0 0 0 0 rgba(255, 121, 63, 0);\n      }\n    }\n\n    .blob.yellow {\n      background: rgba(255, 177, 66, 1);\n      box-shadow: 0 0 0 0 rgba(255, 177, 66, 1);\n      animation: pulse-yellow 2s infinite;\n    }\n\n    @keyframes pulse-yellow {\n      0% {\n        transform: scale(0.95);\n        box-shadow: 0 0 0 0 rgba(255, 177, 66, 0.7);\n      }\n\n      70% {\n        transform: scale(1);\n        box-shadow: 0 0 0 10px rgba(255, 177, 66, 0);\n      }\n\n      100% {\n        transform: scale(0.95);\n        box-shadow: 0 0 0 0 rgba(255, 177, 66, 0);\n      }\n    }\n\n    .blob.blue {\n      background: rgba(52, 172, 224, 1);\n      box-shadow: 0 0 0 0 rgba(52, 172, 224, 1);\n      animation: pulse-blue 2s infinite;\n    }\n\n    @keyframes pulse-blue {\n      0% {\n        transform: scale(0.95);\n        box-shadow: 0 0 0 0 rgba(52, 172, 224, 0.7);\n      }\n\n      70% {\n        transform: scale(1);\n        box-shadow: 0 0 0 10px rgba(52, 172, 224, 0);\n      }\n\n      100% {\n        transform: scale(0.95);\n        box-shadow: 0 0 0 0 rgba(52, 172, 224, 0);\n      }\n    }\n\n    .blob.green {\n      background: rgba(51, 217, 178, 1);\n      box-shadow: 0 0 0 0 rgba(51, 217, 178, 1);\n      animation: pulse-green 2s infinite;\n    }\n\n    @keyframes pulse-green {\n      0% {\n        transform: scale(0.95);\n        box-shadow: 0 0 0 0 rgba(51, 217, 178, 0.7);\n      }\n\n      70% {\n        transform: scale(1);\n        box-shadow: 0 0 0 10px rgba(51, 217, 178, 0);\n      }\n\n      100% {\n        transform: scale(0.95);\n        box-shadow: 0 0 0 0 rgba(51, 217, 178, 0);\n      }\n    }\n\n    .blob.purple {\n      background: rgba(142, 68, 173, 1);\n      box-shadow: 0 0 0 0 rgba(142, 68, 173, 1);\n      animation: pulse-purple 2s infinite;\n    }\n\n    @keyframes pulse-purple {\n      0% {\n        transform: scale(0.95);\n        box-shadow: 0 0 0 0 rgba(142, 68, 173, 0.7);\n      }\n\n      70% {\n        transform: scale(1);\n        box-shadow: 0 0 0 10px rgba(142, 68, 173, 0);\n      }\n\n      100% {\n        transform: scale(0.95);\n        box-shadow: 0 0 0 0 rgba(142, 68, 173, 0);\n      }\n    }\n  }\n"]);return ie=function(){return e},e}var de=x.b.header(ie(),y,C),me=n(46),ue=n.n(me),be=function(){return r.a.createElement(de,null,r.a.createElement(s.b,{to:U,className:"title-brand"},r.a.createElement("img",{src:ue.a,alt:"Covid Dashboard",className:"logo"}),"DASHBOARD",r.a.createElement("div",{className:"blob red"})),r.a.createElement("nav",{className:"my-2 my-md-0 mr-md-3"},r.a.createElement(s.b,{to:U,className:"p-2 text-white"},"Features")))};function fe(){return r.a.createElement(s.a,null,r.a.createElement(l.a,{path:U,component:be}),r.a.createElement(l.a,{exact:!0,path:U,component:ee}),r.a.createElement(l.a,{exact:!0,path:"".concat(U,":country_code"),component:le}))}n(91);var pe=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(z,null,r.a.createElement(fe,null)))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(pe,null)),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.22b6c916.chunk.js.map