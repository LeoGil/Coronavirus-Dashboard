(this["webpackJsonpcoronavirus-dashboard"]=this["webpackJsonpcoronavirus-dashboard"]||[]).push([[0],{49:function(e,n,a){e.exports=a.p+"static/media/logo.fa1e2a0b.png"},50:function(e,n,a){e.exports=a(95)},95:function(e,n,a){"use strict";a.r(n);var t=a(0),r=a.n(t),o=a(23),c=a.n(o),s=a(14),l=a(2),i=a(7),d=a.n(i),m=a(13),u=a(1),b=a(44),f=(a(72),a(20)),p=a.n(f),h=a(45),g=a.n(h).a.create({baseURL:"https://apicoviddashboard.herokuapp.com"}),v=a(5),x=a(6);function y(){var e=Object(v.a)(["\n  .container-fluid {\n    padding: 1rem;\n    font-family: 'Open Sans', -apple-system, Helvetica, sans-serif !important;\n    font-weight: 600;\n    background: "," !important;\n    color: "," !important;\n    overflow-x: hidden !important;\n  }\n\n  a {\n    color: "," !important;\n    text-decoration: none !important;\n  }\n\n  .loading {\n    height: calc(100vh - 59px);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background: "," !important;\n    color: "," !important;\n  }\n\n  .notification {\n    box-shadow: none !important;\n  }\n\n  .title-components {\n    font-family: 'Ubuntu', 'Open Sans', -apple-system, Helvetica, sans-serif !important;\n    text-align: center;\n    font-weight: 800 !important;\n    font-size: 55px;\n  }\n\n  .chart-div {\n    background: ",";\n    border-radius: 5px;\n    padding: 20px;\n    margin-bottom: 20px;\n  }\n\n  .color-cases {\n    color: ",";\n  }\n\n  .color-death {\n    color: ",";\n  }\n\n  .color-recovered {\n    color: ",";\n  }\n\n  .color-active {\n    color: ",";\n  }\n\n  .color-new-case {\n    color: ",";\n  }\n\n  .color-new-death {\n    color: ",";\n  }\n\n  .color-new-recoveries {\n    color: ",";\n  }\n\n  .color-tests {\n    color: ",";\n  }\n\n  .color-critical {\n    color: ",";\n  }\n\n  .color-affected {\n    color: ",";\n  }\n\n  .bg-active {\n    background-color: "," !important;\n  }\n\n  .bg-recovered {\n    background-color: "," !important;\n  }\n\n  .bg-death {\n    background-color: "," !important;\n  }\n"]);return y=function(){return e},e}var w="#161e2c",E="#29344a",N="#6bfb31",C="#eee",k="#0ee9cb",O="#f35353",j="#347fd5",B="#ffc137",D="#ff8a37",S="#af1c1c",H="#2a8e3c",R="#6bfb31",_="#dc3b1f",L="#da8213",T=x.b.div(y(),w,C,C,w,C,E,k,O,j,B,D,S,H,R,_,L,B,j,O);function W(){var e=Object(v.a)(["\n  .global-article {\n    border-radius: 0.5rem;\n    width: 100%;\n    font-weight: 800;\n\n    .cases {\n      display: flex;\n      flex-wrap: wrap;\n      @media all and (max-width: 499px) {\n        flex-direction: column;\n      }\n      div {\n        min-width: 21rem;\n        flex: 1 1 auto;\n        display: flex;\n        flex-direction: column;\n        text-align: center;\n      }\n\n      .global-data-title {\n        border: 3px solid ",";\n        ","\n        margin: 1rem;\n        @media all and (max-width: 499px) {\n          margin: 0.5rem 0.3rem;\n        }\n        border-radius: 0.5rem;\n        background-color: ",";\n        font-size: 1.5rem;\n        @media all and (max-width: 499px) {\n          font-size: 1rem;\n        }\n        &:hover {\n          filter: brightness(1.2);\n          transition: all 0.2s;\n          position: relative;\n          border: 3px solid ",";\n        }\n        box-shadow: 0.2rem 1rem 0.65rem rgba(0, 0, 0, 0.342);\n      }\n      .global-data-numbers {\n        font-size: 3rem;\n        @media all and (max-width: 499px) {\n          font-size: 1.7rem;\n        }\n        font-weight: 800;\n      }\n    }\n  }\n"]);return W=function(){return e},e}function z(){var e=Object(v.a)(["\n    ","\n  "]);return z=function(){return e},e}var A={"top-color-1":D,"top-color-2":S,"top-color-3":H,"top-color-4":R,"top-color-5":_};var I=x.b.div(W(),E,function(){var e="";for(var n in A)e+="\n      &.".concat(n," {\n        border-top: 1rem solid ").concat(A[n],";\n      }\n    ");return Object(x.a)(z(),e)}(),E,N);function F(e){var n=e.globaldata,a=new Intl.NumberFormat;return r.a.createElement(I,null,r.a.createElement("h1",{className:"title-components"},"Global Data"),r.a.createElement("article",{className:"global-article"},r.a.createElement("section",{className:"cases"},r.a.createElement("div",{className:"global-data-title top-color-1"},"Cases",r.a.createElement("span",{className:"global-data-numbers color-cases"},a.format(n.cases)),"New cases today",r.a.createElement("span",{className:"global-data-numbers color-new-case"},a.format(n.todayCases))),r.a.createElement("div",{className:"global-data-title top-color-2"},"Deaths",r.a.createElement("span",{className:"global-data-numbers color-death"},a.format(n.deaths)),"New deaths today",r.a.createElement("span",{className:"global-data-numbers color-new-death"},a.format(n.todayDeaths))),r.a.createElement("div",{className:"global-data-title top-color-3"},"Recovered",r.a.createElement("span",{className:"global-data-numbers color-recovered"},a.format(n.recovered)),"New recoveries today",r.a.createElement("span",{className:"global-data-numbers color-new-recoveries"},a.format(n.todayRecovered))))))}function J(){var e=Object(v.a)(["\n  .pais-article {\n    margin: 20px auto 10px;\n    padding: 20px;\n    border-radius: 0.5rem;\n    background: ",";\n    font-weight: 800;\n    font-size: 18px;\n    border: 3px solid ",";\n    &:hover {\n      filter: brightness(1.2);\n      transition: all 0.2s;\n      position: relative;\n      top: -10px;\n      border: 3px solid ",";\n    }\n    box-shadow: 0.2rem 1rem 0.65rem rgba(0, 0, 0, 0.342);\n    .flag {\n      margin-right: 55px;\n      display: grid;\n      grid-template-columns: 1fr 5fr;\n      font-size: x-large;\n      align-items: center;\n      img {\n        height: 48px;\n        border-radius: 20%;\n        box-shadow: 0.31rem 0.29rem 0.65rem rgba(0, 0, 0, 0.342);\n      }\n    }\n\n    .cases {\n      display: flex;\n      flex-wrap: wrap;\n      min-height: 67px;\n      div {\n        flex: 1 1 auto;\n        display: flex;\n        flex-direction: column;\n      }\n    }\n\n    .new-today {\n      font-size: 12px;\n      margin-top: -5px;\n    }\n  }\n"]);return J=function(){return e},e}var M=x.b.div(J(),E,E,N),P="/Coronavirus-Dashboard/",U=new Intl.NumberFormat;function G(e){var n=e.country;n.iso2="MS Zaandam"===n.country?"US":n.iso2,n.iso2="Diamond Princess"===n.country?"US":n.iso2;var a=Math.round(100*n.active/n.cases),t=Math.round(100*n.recovered/n.cases),o=Math.ceil(100*n.deaths/n.cases);return r.a.createElement(M,{className:"col-lg-4 col-md-6"},r.a.createElement(s.b,{to:"".concat(P).concat(n.iso2),className:"unstyled-link"},r.a.createElement("article",{className:"pais-article"},r.a.createElement("figure",{className:"flag"},r.a.createElement("img",{src:"https://cdn.u21.io/flags/4x3/".concat(n.iso2.toLowerCase(),".svg"),alt:"flag ".concat(n.country)}),r.a.createElement("figcaption",{className:"text-bold font-smaller text-center"},n.country)),r.a.createElement("div",{className:"progress shadow",style:{height:"7px"}},r.a.createElement("div",{className:"progress-bar bg-active",role:"progressbar",style:{width:"".concat(a,"%")},"aria-valuenow":a,"aria-valuemin":"0","aria-valuemax":"100"}),r.a.createElement("div",{className:"progress-bar bg-recovered",role:"progressbar",style:{width:"".concat(t,"%")},"aria-valuenow":t,"aria-valuemin":"0","aria-valuemax":"100"}),r.a.createElement("div",{className:"progress-bar bg-death",role:"progressbar",style:{width:"".concat(o,"%")},"aria-valuenow":o,"aria-valuemin":"0","aria-valuemax":"100"})),r.a.createElement("section",{className:"cases"},r.a.createElement("div",null,"Cases",r.a.createElement("span",{className:"color-cases"},U.format(n.cases)),n.todayCases>0&&r.a.createElement("span",{className:"color-cases new-today"},"+ ",U.format(n.todayCases))),r.a.createElement("div",null,"Deaths",r.a.createElement("span",{className:"color-death"},U.format(n.deaths)),n.todayDeaths>0&&r.a.createElement("span",{className:"color-death new-today"},"+ ",U.format(n.todayDeaths))),r.a.createElement("div",null,"Recovered",r.a.createElement("span",{className:"color-recovered"},U.format(n.recovered)),n.todayRecovered>0&&r.a.createElement("span",{className:"color-recovered new-today"},"+ ",U.format(n.todayRecovered))),r.a.createElement("div",null,"Active Cases",r.a.createElement("span",{className:"color-active"},U.format(n.active)))))))}var Z=a(3);function q(e){var n=e.timeline,a=e.timelineDataLoaded;return Z.defaults.LineWithLine=Z.defaults.line,Z.controllers.LineWithLine=Z.controllers.line.extend({draw:function(e){if(this.chart.tooltip._active&&this.chart.tooltip._active.length){var n=this.chart.tooltip._active[0],a=this.chart.ctx,t=n.tooltipPosition().x,r=this.chart.scales["y-axis-0"].top,o=this.chart.scales["y-axis-0"].bottom;a.save(),a.beginPath(),a.moveTo(t,r),a.lineTo(t,o),a.lineWidth=1,a.strokeStyle="#fe3860",a.stroke(),a.restore()}Z.controllers.line.prototype.draw.call(this,e)}}),Object(t.useEffect)((function(){if(a){var e=[],t=[],r=[],o=[],c=[];Object.keys(n.cases).forEach((function(a){e.push(a),t.push(n.cases[a])})),Object.keys(n.deaths).forEach((function(e){r.push(n.deaths[e])})),Object.keys(n.recovered).forEach((function(e){o.push(n.recovered[e])})),Object.keys(n.cases).forEach((function(e){c.push(n.cases[e]-(n.deaths[e]+n.recovered[e]))}));var s=document.getElementById("cav_cases").getContext("2d");new Z(s,{type:"LineWithLine",options:{tooltips:{mode:"index",intersect:!1},legend:{labels:{fontColor:"white"}},scales:{yAxes:[{ticks:{fontColor:"white"}}],xAxes:[{ticks:{fontColor:"white"}}]}},data:{labels:e,datasets:[{label:"Total Cases",fill:!1,lineTension:.1,backgroundColor:"rgba(14, 233, 203,0.4)",borderColor:"#0ee9cb",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"#0ee9cb",pointBackgroundColor:"#0ee9cb",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"#0ee9cb",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:2,pointHitRadius:2,data:t.map((function(e){return e}))},{label:"Total Recovered",fill:!1,lineTension:.1,backgroundColor:"rgba(52, 127, 213,0.4)",borderColor:"#347fd5",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"#347fd5",pointBackgroundColor:"#347fd5",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"#347fd5",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:2,pointHitRadius:2,data:o.map((function(e){return e}))},{label:"Total Deaths",fill:!1,lineTension:.1,backgroundColor:"rgba(243, 83, 83,0.4)",borderColor:"#f35353",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"#f35353",pointBackgroundColor:"#f35353",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"#f35353",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:2,pointHitRadius:2,data:r.map((function(e){return e}))},{label:"Active cases",fill:!1,lineTension:.1,backgroundColor:"rgba(255,193,55,0.4)",borderColor:"#ffc137",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"#ffc137",pointBackgroundColor:"#ffc137",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"#ffc137",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:2,pointHitRadius:2,data:c.map((function(e){return e}))}]}})}}),[a]),r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Timeline cases and deaths"),r.a.createElement("canvas",{className:"mt-4",height:"170rem",id:"cav_cases"}))}function K(e){var n=e.countries,a=Object(t.useState)(),o=Object(u.a)(a,2),c=o[0],s=o[1],l=Object(t.useState)(!1),i=Object(u.a)(l,2),b=i[0],f=i[1];return Object(t.useEffect)((function(){if(void 0!==n[0]&&!1===b){for(var e=[],a=0;a<5;a++)e.push(n[a].iso2);(function(){var n=Object(m.a)(d.a.mark((function n(){var a;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,g.post("/top_countries_timeline",e);case 2:a=n.sent,s(a.data),f(!0);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}})()()}}),[n,b]),Object(t.useEffect)((function(){if(c&&!1===b){var e=[],n=[],a=[],t=[];Object.keys(c[0].timeline.cases).forEach((function(n){e.push(n)}));for(var r=0;r<c.length;r++){a.push(c[r].country),n.push(c[r].timeline.cases);var o="#".concat(Math.floor(16777215*Math.random()).toString(16));7!==o.length&&(o+="6"),t.push({label:a[r],fill:!1,lineTension:.1,borderColor:o,borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:o,pointBackgroundColor:o,pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:o,pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:2,pointHitRadius:2,data:Object.values(n[r]).map((function(e){return e}))})}var s=document.getElementById("cav_cases_top_countries").getContext("2d");new Z(s,{type:"LineWithLine",options:{tooltips:{mode:"index",intersect:!1},legend:{labels:{fontColor:"white"}},scales:{yAxes:[{ticks:{fontColor:"white"}}],xAxes:[{ticks:{fontColor:"white"}}]}},data:{labels:e,datasets:t}})}}),[c,b]),r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Timeline cases from top 5 countries"),r.a.createElement("canvas",{className:"mt-4",height:"170rem",id:"cav_cases_top_countries"}))}a(26);function Q(e){var n=e.data,a=e.timelineDataLoaded,o=e.country,c=void 0===o?"Global":o;return Object(t.useEffect)((function(){if(a){var e=document.getElementById("pie_cases").getContext("2d");new Z(e,{type:"pie",options:{legend:{labels:{fontColor:"white"}}},data:{labels:["Active","Recovered","Death"],datasets:[{backgroundColor:["#ffc137","#347fd5","#f35353"],data:[n.active,n.recovered,n.deaths]}]}})}}),[a]),r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,c," active, deaths and recovered"),r.a.createElement("canvas",{className:"mt-4",height:"110rem",id:"pie_cases"}))}function V(){var e=Object(v.a)(["\n  @media all and (min-width:499px){\n    display: flex;\n\n    .global-data {\n      flex: 1 25%;\n\n      /* max-width: 25%; */\n      /* height: 100vh; */\n    }\n    .countries-data{\n      display: flex;\n      flex-wrap: wrap;\n      justify-content: center;\n\n      /* background: ","; */\n      border-radius: 12px;\n      .countries-panel {\n        border-radius: 12px;\n        background: ",";\n\n        display: flex;\n        flex-wrap: wrap;\n\n        height: 50rem;\n        overflow-y: scroll;\n      }\n    }\n  }\n"]);return V=function(){return e},e}function X(){var e=Object(v.a)(["\n  display: flex;\n  flex-wrap: wrap;\n\n  section {\n    flex: 1;\n\n    margin: 1rem;\n    /* max-width: 50%; */\n\n    box-shadow: 0.2rem 1rem 0.65rem rgba(0, 0, 0, 0.342);\n  }\n  \n  .break {\n      flex-basis: 100%;\n      height: 0;\n    }\n\n  .recent-changes {\n    height: inherit;\n    overflow-y: scroll;\n  }\n\n  @media all and (max-width: 499px) {\n    display: none !important;\n  }\n\n"]);return X=function(){return e},e}var Y="#161e2c",$="#29344a",ee=x.b.div(X()),ne=x.b.main(V(),$,Y);function ae(){var e=Object(t.useState)([]),n=Object(u.a)(e,2),a=n[0],o=n[1],c=Object(t.useState)([]),s=Object(u.a)(c,2),l=(s[0],s[1],Object(t.useState)([])),i=Object(u.a)(l,2),f=i[0],h=i[1],v=Object(t.useState)(!1),x=Object(u.a)(v,2),y=x[0],w=x[1],E=Object(t.useState)(!1),N=Object(u.a)(E,2),C=N[0],k=N[1],O=Object(t.useState)(0),j=Object(u.a)(O,2),B=j[0],D=j[1],S=Object(t.useState)(0),H=Object(u.a)(S,2),R=H[0],_=H[1],L=Object(t.useState)(),T=Object(u.a)(L,2),W=T[0],z=T[1],A=Object(t.useState)(!1),I=Object(u.a)(A,2),J=(I[0],I[1]),M=Object(t.useState)(!1),P=Object(u.a)(M,2),U=P[0],Z=P[1];return Object(t.useEffect)((function(){var e=function(){var e=Object(m.a)(d.a.mark((function e(){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.get("/countries");case 2:(n=e.sent).data=Object.values(n.data),w(!0),o(n.data),J(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),n=function(){var e=Object(m.a)(d.a.mark((function e(){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.get("/global");case 2:n=e.sent,h(n.data),J(!1),Z(!0);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e(),n()}),[R]),Object(t.useEffect)((function(){var e=null;return y&&(e=setInterval((function(){D((function(e){return e+1})),B%10===0&&0!==B&&(_((function(e){return e+1})),D(0))}),1e3)),function(){return clearInterval(e)}}),[y,B]),Object(t.useEffect)((function(){g.get("/global_timeline").then((function(e){z(e.data),k(!0),J(!0)}))}),[]),!1===y?r.a.createElement("div",{className:"loading"},r.a.createElement(p.a,{type:"bars",color:"#eee"})):r.a.createElement("div",{className:"container-fluid"},r.a.createElement(b.NotificationContainer,null),r.a.createElement(ee,null,r.a.createElement("section",{className:"chart-div"},r.a.createElement(q,{timeline:W,timelineDataLoaded:C})),r.a.createElement("section",{className:"chart-div"},r.a.createElement(K,{countries:a})),r.a.createElement("section",{className:"break"}),r.a.createElement("section",{className:"chart-div"},r.a.createElement(Q,{data:f,timelineDataLoaded:U})),r.a.createElement("section",{className:"chart-div recent-changes"})),r.a.createElement(ne,null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-xl-3 col-lg-12 global-data"},r.a.createElement(F,{globaldata:f})),r.a.createElement("div",{className:"col-xl-9 col-lg-12 countries-data"},r.a.createElement("h1",{className:"col-12 title-components"},"Countries Data"),r.a.createElement("div",{className:"countries-panel"},a.map((function(e){return r.a.createElement(G,{key:e.country,country:e})})))))))}function te(){var e=Object(v.a)(["\n  display: flex;\n  flex-direction: column;\n  margin: 1rem 0;\n  font-weight: 800;\n  font-size: 18px;\n\n  .flag {\n    display: flex;\n    font-size: x-large;\n    align-items: center;\n    @media all and (max-width: 499px) {\n      justify-content: center;\n    }\n    img {\n      height: 48px;\n      border-radius: 20%;\n    }\n    figcaption {\n      margin-left: 1rem;\n    }\n  }\n\n  .cases {\n    display: flex;\n    flex-wrap: wrap;\n    @media all and (min-width: 500px) {\n      background: ",";\n      border-radius: 0.5rem;\n    }\n    div {\n      @media all and (max-width: 499px) {\n        background: ",";\n        border-radius: 0.5rem;\n      }\n      margin: 0.5rem;\n      padding: 0.5rem;\n      flex: 1 1 auto;\n      display: flex;\n      flex-direction: column;\n      text-align: center;\n      .country-data-numbers {\n        font-size: 2.5rem;\n        @media all and (max-width: 499px) {\n          font-size: 1.7rem;\n        }\n        font-weight: 800;\n      }\n    }\n  }\n"]);return te=function(){return e},e}var re=x.b.article(te(),E,E),oe=new Intl.NumberFormat;function ce(e){var n=e.country;return n.iso2="MS Zaandam"===n.country?"US":n.iso2,n.iso2="Diamond Princess"===n.country?"US":n.iso2,r.a.createElement(re,null,r.a.createElement("figure",{className:"flag"},r.a.createElement("img",{src:"https://cdn.u21.io/flags/4x3/".concat(n.iso2.toLowerCase(),".svg"),alt:"flag ".concat(n.country)}),r.a.createElement("figcaption",null,n.country)),r.a.createElement("section",{className:"cases"},r.a.createElement("div",null,"Cases",r.a.createElement("span",{className:"country-data-numbers color-cases"},oe.format(n.cases)),"New Cases Today",r.a.createElement("span",{className:"country-data-numbers color-new-case"},oe.format(n.todayCases))),r.a.createElement("div",null,"Deaths",r.a.createElement("span",{className:"country-data-numbers color-death"},oe.format(n.deaths)),"New Deaths Today",r.a.createElement("span",{className:"country-data-numbers color-new-death"},oe.format(n.todayDeaths))),r.a.createElement("div",null,"Recovered",r.a.createElement("span",{className:"country-data-numbers color-recovered"},oe.format(n.recovered)),"New Recovered Today",r.a.createElement("span",{className:"country-data-numbers color-new-recoveries"},oe.format(n.todayRecovered))),r.a.createElement("div",null,"Active Cases",r.a.createElement("span",{className:"country-data-numbers color-active"},oe.format(n.active)),"Tests",r.a.createElement("span",{className:"country-data-numbers color-tests"},oe.format(n.tests))),r.a.createElement("div",null,"Population",r.a.createElement("span",{className:"country-data-numbers color-affected"},oe.format(n.population)),"Critical",r.a.createElement("span",{className:"country-data-numbers color-critical"},oe.format(n.critical)))))}function se(e){var n=e.timeline,a=e.timelineDataLoaded;return Z.defaults.LineWithLine=Z.defaults.line,Z.controllers.LineWithLine=Z.controllers.line.extend({draw:function(e){if(this.chart.tooltip._active&&this.chart.tooltip._active.length){var n=this.chart.tooltip._active[0],a=this.chart.ctx,t=n.tooltipPosition().x,r=this.chart.scales["y-axis-0"].top,o=this.chart.scales["y-axis-0"].bottom;a.save(),a.beginPath(),a.moveTo(t,r),a.lineTo(t,o),a.lineWidth=1,a.strokeStyle="#fe3860",a.stroke(),a.restore()}Z.controllers.line.prototype.draw.call(this,e)}}),Object(t.useEffect)((function(){if(a){var e=[],t=[],r=[];Object.keys(n.cases).forEach((function(a){e.push(a),t.push(n.cases[a])})),Object.keys(n.deaths).forEach((function(e){r.push(n.deaths[e])}));var o=document.getElementById("cav_cases_daily").getContext("2d");new Z(o,{type:"LineWithLine",options:{tooltips:{mode:"index",intersect:!1},legend:{labels:{fontColor:"white"}},scales:{yAxes:[{ticks:{fontColor:"white"}}],xAxes:[{ticks:{fontColor:"white"}}]}},data:{labels:e,datasets:[{label:"Daily Cases",fill:!1,lineTension:.1,backgroundColor:"rgba(255, 138, 55,0.4)",borderColor:"#ff8a37",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"#ff8a37",pointBackgroundColor:"#ff8a37",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"#ff8a37",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:2,pointHitRadius:2,data:t.map((function(e){return e}))},{label:"Daily Deaths",fill:!1,lineTension:.1,backgroundColor:"rgba(175, 28, 28,0.4)",borderColor:"#af1c1c",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"#af1c1c",pointBackgroundColor:"#af1c1c",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"#af1c1c",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:2,pointHitRadius:2,data:r.map((function(e){return e}))}]}})}}),[a]),r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Timeline daily cases and deaths"),r.a.createElement("canvas",{className:"mt-4",height:"170rem",id:"cav_cases_daily"}))}function le(e){var n=e.data,a=e.timelineDataLoaded;return Object(t.useEffect)((function(){if(a){var e=document.getElementById("pie_tests").getContext("2d");new Z(e,{type:"pie",options:{legend:{labels:{fontColor:"white"}}},data:{labels:["".concat(n.country," population"),"Tests"],datasets:[{backgroundColor:["#da8213","#6bfb31"],data:[n.population,n.tests]}]}})}}),[a]),r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,n.country," Population / Tests"),r.a.createElement("canvas",{className:"mt-4",height:"110rem",id:"pie_tests"}))}function ie(){var e=Object(v.a)(["\n  img {\n    height: 48px;\n    border-radius: 20%;\n  }\n"]);return ie=function(){return e},e}var de=x.b.div(ie());function me(){var e=Object(l.e)().country_code,n=Object(t.useState)(!1),a=Object(u.a)(n,2),o=a[0],c=a[1],s=Object(t.useState)(!1),i=Object(u.a)(s,2),b=i[0],f=i[1],h=Object(t.useState)(!1),v=Object(u.a)(h,2),x=v[0],y=v[1],w=Object(t.useState)([]),E=Object(u.a)(w,2),N=E[0],C=E[1],k=Object(t.useState)([]),O=Object(u.a)(k,2),j=O[0],B=O[1],D=Object(t.useState)([]),S=Object(u.a)(D,2),H=S[0],R=S[1];return Object(t.useEffect)((function(){(function(){var n=Object(m.a)(d.a.mark((function n(){var a;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,g.get("/country_timeline/".concat(e));case 2:a=n.sent,B(a.data.timeline),f(!0);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}})()()}),[]),Object(t.useEffect)((function(){(function(){var n=Object(m.a)(d.a.mark((function n(){var a;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,g.get("/country_timeline_new/".concat(e));case 2:a=n.sent,R(a.data.timeline),y(!0);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}})()()}),[]),Object(t.useEffect)((function(){(function(){var n=Object(m.a)(d.a.mark((function n(){var a;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,g.get("/country/".concat(e));case 2:a=n.sent,C(a.data),c(!0);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}})()()}),[]),o?r.a.createElement(de,{className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement(ce,{country:N})),r.a.createElement("div",{className:"col-lg-6 col-md-12"},r.a.createElement("section",{className:" chart-div"},r.a.createElement(q,{timeline:j,timelineDataLoaded:b}))),r.a.createElement("div",{className:"col-lg-6 col-md-12"},r.a.createElement("section",{className:" chart-div"},r.a.createElement(se,{timeline:H,timelineDataLoaded:x}))),r.a.createElement("div",{className:"col-lg-6 col-md-12"},r.a.createElement("section",{className:"chart-div"},r.a.createElement(Q,{data:N,timelineDataLoaded:b,country:N.country,pageLoaded:o}))),r.a.createElement("div",{className:"col-lg-6 col-md-12"},r.a.createElement("section",{className:"chart-div"},r.a.createElement(le,{data:N,timelineDataLoaded:b}))))):r.a.createElement("div",{className:"loading"},r.a.createElement(p.a,{type:"bars",color:"#eee"}))}function ue(){var e=Object(v.a)(["\n  padding: 0.5rem;\n  height: 100%;\n  width: 100%;\n  background: ",";\n  font-size: 18px;\n  font-weight: bold;\n  color: ",";\n  display: flex;\n  * {\n    display: flex;\n  }\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: center;\n  @media all and (max-width: 499px) {\n    flex-direction: column;\n    height: 120px;\n  }\n  .title-brand {\n    align-items: center;\n\n    .logo {\n      margin: auto 0.5rem;\n      width: 32px;\n      height: 32px;\n    }\n\n    .blob {\n      background: black;\n      border-radius: 50%;\n      box-shadow: 0 0 0 0 rgba(0, 0, 0, 1);\n      margin: 10px;\n      height: 20px;\n      width: 20px;\n      transform: scale(1);\n      animation: pulse-black 2s infinite;\n    }\n\n    @keyframes pulse-black {\n      0% {\n        transform: scale(0.95);\n        box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);\n      }\n\n      70% {\n        transform: scale(1);\n        box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);\n      }\n\n      100% {\n        transform: scale(0.95);\n        box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);\n      }\n    }\n\n    .blob.white {\n      background: white;\n      box-shadow: 0 0 0 0 rgba(255, 255, 255, 1);\n      animation: pulse-white 2s infinite;\n    }\n\n    @keyframes pulse-white {\n      0% {\n        transform: scale(0.95);\n        box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7);\n      }\n\n      70% {\n        transform: scale(1);\n        box-shadow: 0 0 0 10px rgba(255, 255, 255, 0);\n      }\n\n      100% {\n        transform: scale(0.95);\n        box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);\n      }\n    }\n\n    .blob.red {\n      background: rgba(255, 82, 82, 1);\n      box-shadow: 0 0 0 0 rgba(255, 82, 82, 1);\n      animation: pulse-red 2s infinite;\n    }\n\n    @keyframes pulse-red {\n      0% {\n        transform: scale(0.95);\n        box-shadow: 0 0 0 0 rgba(255, 82, 82, 0.7);\n      }\n\n      70% {\n        transform: scale(1);\n        box-shadow: 0 0 0 10px rgba(255, 82, 82, 0);\n      }\n\n      100% {\n        transform: scale(0.95);\n        box-shadow: 0 0 0 0 rgba(255, 82, 82, 0);\n      }\n    }\n\n    .blob.orange {\n      background: rgba(255, 121, 63, 1);\n      box-shadow: 0 0 0 0 rgba(255, 121, 63, 1);\n      animation: pulse-orange 2s infinite;\n    }\n\n    @keyframes pulse-orange {\n      0% {\n        transform: scale(0.95);\n        box-shadow: 0 0 0 0 rgba(255, 121, 63, 0.7);\n      }\n\n      70% {\n        transform: scale(1);\n        box-shadow: 0 0 0 10px rgba(255, 121, 63, 0);\n      }\n\n      100% {\n        transform: scale(0.95);\n        box-shadow: 0 0 0 0 rgba(255, 121, 63, 0);\n      }\n    }\n\n    .blob.yellow {\n      background: rgba(255, 177, 66, 1);\n      box-shadow: 0 0 0 0 rgba(255, 177, 66, 1);\n      animation: pulse-yellow 2s infinite;\n    }\n\n    @keyframes pulse-yellow {\n      0% {\n        transform: scale(0.95);\n        box-shadow: 0 0 0 0 rgba(255, 177, 66, 0.7);\n      }\n\n      70% {\n        transform: scale(1);\n        box-shadow: 0 0 0 10px rgba(255, 177, 66, 0);\n      }\n\n      100% {\n        transform: scale(0.95);\n        box-shadow: 0 0 0 0 rgba(255, 177, 66, 0);\n      }\n    }\n\n    .blob.blue {\n      background: rgba(52, 172, 224, 1);\n      box-shadow: 0 0 0 0 rgba(52, 172, 224, 1);\n      animation: pulse-blue 2s infinite;\n    }\n\n    @keyframes pulse-blue {\n      0% {\n        transform: scale(0.95);\n        box-shadow: 0 0 0 0 rgba(52, 172, 224, 0.7);\n      }\n\n      70% {\n        transform: scale(1);\n        box-shadow: 0 0 0 10px rgba(52, 172, 224, 0);\n      }\n\n      100% {\n        transform: scale(0.95);\n        box-shadow: 0 0 0 0 rgba(52, 172, 224, 0);\n      }\n    }\n\n    .blob.green {\n      background: rgba(51, 217, 178, 1);\n      box-shadow: 0 0 0 0 rgba(51, 217, 178, 1);\n      animation: pulse-green 2s infinite;\n    }\n\n    @keyframes pulse-green {\n      0% {\n        transform: scale(0.95);\n        box-shadow: 0 0 0 0 rgba(51, 217, 178, 0.7);\n      }\n\n      70% {\n        transform: scale(1);\n        box-shadow: 0 0 0 10px rgba(51, 217, 178, 0);\n      }\n\n      100% {\n        transform: scale(0.95);\n        box-shadow: 0 0 0 0 rgba(51, 217, 178, 0);\n      }\n    }\n\n    .blob.purple {\n      background: rgba(142, 68, 173, 1);\n      box-shadow: 0 0 0 0 rgba(142, 68, 173, 1);\n      animation: pulse-purple 2s infinite;\n    }\n\n    @keyframes pulse-purple {\n      0% {\n        transform: scale(0.95);\n        box-shadow: 0 0 0 0 rgba(142, 68, 173, 0.7);\n      }\n\n      70% {\n        transform: scale(1);\n        box-shadow: 0 0 0 10px rgba(142, 68, 173, 0);\n      }\n\n      100% {\n        transform: scale(0.95);\n        box-shadow: 0 0 0 0 rgba(142, 68, 173, 0);\n      }\n    }\n  }\n"]);return ue=function(){return e},e}var be=x.b.header(ue(),E,C),fe=a(49),pe=a.n(fe),he=function(){return r.a.createElement(be,null,r.a.createElement(s.b,{to:P,className:"title-brand"},r.a.createElement("img",{src:pe.a,alt:"Covid Dashboard",className:"logo"}),"DASHBOARD",r.a.createElement("div",{className:"blob red"})),r.a.createElement("nav",{className:"my-2 my-md-0 mr-md-3"},r.a.createElement(s.b,{to:P,className:"p-2 text-white"},"Features")))};function ge(){return r.a.createElement(s.a,null,r.a.createElement(l.a,{path:P,component:he}),r.a.createElement(l.a,{exact:!0,path:P,component:ae}),r.a.createElement(l.a,{exact:!0,path:"".concat(P,":country_code"),component:me}))}a(94);var ve=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(T,null,r.a.createElement(ge,null)))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ve,null)),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.9f95a7fb.chunk.js.map