(this["webpackJsonpcoronavirus-dashboard"]=this["webpackJsonpcoronavirus-dashboard"]||[]).push([[0],{50:function(e,n,a){e.exports=a.p+"static/media/logo.fa1e2a0b.png"},51:function(e,n,a){e.exports=a(96)},96:function(e,n,a){"use strict";a.r(n);var t=a(0),r=a.n(t),o=a(24),c=a.n(o),s=a(13),i=a(2),l=a(8),d=a.n(l),m=a(14),u=a(1),b=a(45),f=(a(73),a(21)),p=a.n(f),h=a(46),g=a.n(h).a.create({baseURL:"https://apicoviddashboard.herokuapp.com"}),v=a(5),x=a(6),y=a(19);function w(){var e=Object(v.a)(['\n *{\n    margin: 0;\n    padding: 0;\n    outline: 0;\n    box-sizing: border-box;\n    /* Firefox Scrollbar Width "auto" or "thin"  */\n    scrollbar-width: auto;\n    scrollbar-color:\n      /* scroll thumb */\n      ',"\n      /* scroll track */\n      ",";\n  }\n\n  /* Chrome Scrollbar */\n  ::-webkit-scrollbar {\n    width: 10px;\n\n    &-thumb {\n      background: ",";\n      border-radius: 10px;\n      &:hover{\n        background: ",";\n      }\n    }\n\n    &-track{\n      box-shadow: inset 0 0 5px ",";\n      border-radius: 10px;\n    }\n  }\n\n  body {\n    -webkit-font-smoothing: antialiased;\n    font-family: 'Open Sans', -apple-system, Helvetica, sans-serif !important;\n    font-weight: 600;\n    background: "," !important;\n    color: "," !important;\n    overflow-x: hidden !important;\n  }\n\n  a {\n    color: "," !important;\n    text-decoration: none !important;\n  }\n\n  .loading {\n    height: calc(100vh - 59px);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background: "," !important;\n    color: "," !important;\n  }\n\n  .notification {\n    box-shadow: none !important;\n  }\n\n  .title-components {\n    text-align: center;\n    font-weight: 800 !important;\n    font-size: 55px;\n  }\n\n  .chart-div {\n    background: ",";\n    border-radius: 5px;\n    padding: 20px;\n    margin-bottom: 20px;\n  }\n\n\n  .color-cases {\n    color: ",";\n  }\n\n  .color-death {\n    color: ",";\n  }\n\n  .color-recovered {\n    color: ",";\n  }\n\n  .color-active {\n    color: ",";\n  }\n\n  .color-new-case {\n    color: ",";\n  }\n\n  .color-new-death {\n    color: ",";\n  }\n\n  .color-new-recoveries {\n    color: ",";\n  }\n\n  .color-tests {\n    color: ",";\n  }\n\n  .color-critical {\n    color: ",";\n  }\n\n  .color-affected {\n    color: ",";\n  }\n\n  .bg-active {\n    background-color: "," !important;\n  }\n\n  .bg-recovered {\n    background-color: "," !important;\n  }\n\n  .bg-death {\n    background-color: "," !important;\n  }\n"]);return w=function(){return e},e}var E="#161e2c",O="#222c45",C="#29344a",k="#6bfb31",j="#eee",N="#0ee9cb",S="#f35353",B="#347fd5",D="#ffc137",H="#ff8a37",R="#af1c1c",L="#2a8e3c",_="#6bfb31",W="#dc3b1f",T="#da8213",A=Object(x.a)(w(),Object(y.a)(.06,C),Object(y.a)(.03,E),O,Object(y.a)(.06,C),Object(y.b)(.2,C),E,j,j,E,j,C,N,S,B,D,H,R,L,_,W,T,D,B,S);function z(){var e=Object(v.a)(["\n  .global-article {\n    border-radius: 0.5rem;\n    width: 100%;\n    font-weight: 800;\n\n    .cases {\n      display: flex;\n      flex-wrap: wrap;\n      @media all and (max-width: 499px) {\n        flex-direction: column;\n      }\n      div {\n        flex: 1 1 auto;\n        display: flex;\n        flex-direction: column;\n        text-align: center;\n      }\n\n      .global-data-title {\n        margin: 1rem;\n        @media all and (max-width: 499px) {\n          margin: 0.5rem 0.3rem;\n        }\n        border: 3px solid ",";\n\n        ","\n\n        background: ",";\n        border-radius: 0.5rem;\n        font-size: 1.5rem;\n        @media all and (max-width: 499px) {\n          font-size: 1rem;\n        }\n        &:hover {\n          filter: brightness(1.2);\n          transition: all 0.2s;\n        }\n        box-shadow: 0.2rem 1rem 0.65rem rgba(0, 0, 0, 0.342);\n      }\n      .global-data-numbers {\n        font-size: 3rem;\n        @media all and (max-width: 499px) {\n          font-size: 1.7rem;\n        }\n        font-weight: 800;\n      }\n    }\n  }\n"]);return z=function(){return e},e}function I(){var e=Object(v.a)(["\n    ","\n  "]);return I=function(){return e},e}var J={"top-color-1":H,"top-color-2":R,"top-color-3":L,"top-color-4":_,"top-color-5":W};var F=x.c.div(z(),C,function(){var e="";for(var n in J)e+="\n      &.".concat(n," {\n        border-top: 1rem solid ").concat(J[n],";\n      }\n    ");return Object(x.b)(I(),e)}(),C);function P(e){var n=e.globaldata,a=new Intl.NumberFormat;return r.a.createElement(F,null,r.a.createElement("h1",{className:"title-components"},"Global Data"),r.a.createElement("article",{className:"global-article"},r.a.createElement("section",{className:"cases"},r.a.createElement("div",{className:"global-data-title top-color-1"},"Cases",r.a.createElement("span",{className:"global-data-numbers color-cases"},a.format(n.cases)),"New cases today",r.a.createElement("span",{className:"global-data-numbers color-new-case"},a.format(n.todayCases))),r.a.createElement("div",{className:"global-data-title top-color-2"},"Deaths",r.a.createElement("span",{className:"global-data-numbers color-death"},a.format(n.deaths)),"New deaths today",r.a.createElement("span",{className:"global-data-numbers color-new-death"},a.format(n.todayDeaths))),r.a.createElement("div",{className:"global-data-title top-color-3"},"Recovered",r.a.createElement("span",{className:"global-data-numbers color-recovered"},a.format(n.recovered)),"New recoveries today",r.a.createElement("span",{className:"global-data-numbers color-new-recoveries"},a.format(n.todayRecovered))))))}function M(){var e=Object(v.a)(["\n  @media all and (max-width: 499px) {\n    padding: 0;\n  }\n  article {\n    margin: 20px auto 10px;\n    padding: 20px;\n\n    font-size: 18px;\n    font-weight: 800;\n    background: ",";\n    border-radius: 0.5rem;\n    border: 3px solid ",";\n    box-shadow: 0.2rem 1rem 0.65rem rgba(0, 0, 0, 0.342);\n\n    transition: all ease-in 0.11s, transform ease-in-out 0.09s;\n    &:hover {\n      filter: brightness(1.2);\n      transform: translateY(-10px);\n      border: 3px solid ",";\n    }\n    figure {\n      display: grid;\n      grid-template-columns: 1fr 5fr;\n      align-items: center;\n\n      margin-right: 55px;\n      font-size: x-large;\n\n      img {\n        height: 48px;\n        border-radius: 20%;\n        box-shadow: 0.31rem 0.29rem 0.65rem rgba(0, 0, 0, 0.342);\n      }\n    }\n\n    section {\n      display: flex;\n      flex-wrap: wrap;\n\n      margin-top: 8px;\n      min-height: 67px;\n\n      div {\n        align-items: center;\n        flex: 1 1 auto;\n        display: flex;\n        flex-direction: column;\n\n        .new-today {\n          margin-top: -5px;\n          font-size: 12px;\n        }\n      }\n    }\n  }\n"]);return M=function(){return e},e}var U=x.c.div(M(),C,C,k),G="/Coronavirus-Dashboard/",Z=new Intl.NumberFormat;function Y(e){var n=e.country;n.iso2="MS Zaandam"===n.country?"US":n.iso2,n.iso2="Diamond Princess"===n.country?"US":n.iso2;var a=Math.round(100*n.active/n.cases),t=Math.round(100*n.recovered/n.cases),o=Math.ceil(100*n.deaths/n.cases);return r.a.createElement(U,{className:"col-lg-4 col-md-6"},r.a.createElement(s.b,{to:"".concat(G).concat(n.iso2),className:"unstyled-link"},r.a.createElement("article",null,r.a.createElement("figure",null,r.a.createElement("img",{src:"https://cdn.u21.io/flags/4x3/".concat(n.iso2.toLowerCase(),".svg"),alt:"flag ".concat(n.country)}),r.a.createElement("figcaption",{className:"text-bold font-smaller text-center"},n.country)),r.a.createElement("div",{className:"progress shadow",style:{height:"7px"}},r.a.createElement("div",{className:"progress-bar bg-active",role:"progressbar",style:{width:"".concat(a,"%")},"aria-valuenow":a,"aria-valuemin":"0","aria-valuemax":"100"}),r.a.createElement("div",{className:"progress-bar bg-recovered",role:"progressbar",style:{width:"".concat(t,"%")},"aria-valuenow":t,"aria-valuemin":"0","aria-valuemax":"100"}),r.a.createElement("div",{className:"progress-bar bg-death",role:"progressbar",style:{width:"".concat(o,"%")},"aria-valuenow":o,"aria-valuemin":"0","aria-valuemax":"100"})),r.a.createElement("section",null,r.a.createElement("div",null,"Cases",r.a.createElement("span",{className:"color-cases"},Z.format(n.cases)),n.todayCases>0&&r.a.createElement("span",{className:"color-cases new-today"},"+ ",Z.format(n.todayCases))),r.a.createElement("div",null,"Deaths",r.a.createElement("span",{className:"color-death"},Z.format(n.deaths)),n.todayDeaths>0&&r.a.createElement("span",{className:"color-death new-today"},"+ ",Z.format(n.todayDeaths))),r.a.createElement("div",null,"Recovered",r.a.createElement("span",{className:"color-recovered"},Z.format(n.recovered)),n.todayRecovered>0&&r.a.createElement("span",{className:"color-recovered new-today"},"+ ",Z.format(n.todayRecovered))),r.a.createElement("div",null,"Active Cases",r.a.createElement("span",{className:"color-active"},Z.format(n.active)))))))}var q=a(3);function K(e){var n=e.timeline,a=e.timelineDataLoaded;return q.defaults.LineWithLine=q.defaults.line,q.controllers.LineWithLine=q.controllers.line.extend({draw:function(e){if(this.chart.tooltip._active&&this.chart.tooltip._active.length){var n=this.chart.tooltip._active[0],a=this.chart.ctx,t=n.tooltipPosition().x,r=this.chart.scales["y-axis-0"].top,o=this.chart.scales["y-axis-0"].bottom;a.save(),a.beginPath(),a.moveTo(t,r),a.lineTo(t,o),a.lineWidth=1,a.strokeStyle="#fe3860",a.stroke(),a.restore()}q.controllers.line.prototype.draw.call(this,e)}}),Object(t.useEffect)((function(){if(a){var e=[],t=[],r=[],o=[],c=[];Object.keys(n.cases).forEach((function(a){e.push(a),t.push(n.cases[a])})),Object.keys(n.deaths).forEach((function(e){r.push(n.deaths[e])})),Object.keys(n.recovered).forEach((function(e){o.push(n.recovered[e])})),Object.keys(n.cases).forEach((function(e){c.push(n.cases[e]-(n.deaths[e]+n.recovered[e]))}));var s=document.getElementById("cav_cases").getContext("2d");new q(s,{type:"LineWithLine",options:{tooltips:{mode:"index",intersect:!1},legend:{labels:{fontColor:"white"}},scales:{yAxes:[{ticks:{fontColor:"white"}}],xAxes:[{ticks:{fontColor:"white"}}]}},data:{labels:e,datasets:[{label:"Total Cases",fill:!1,lineTension:.1,backgroundColor:"rgba(14, 233, 203,0.4)",borderColor:"#0ee9cb",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"#0ee9cb",pointBackgroundColor:"#0ee9cb",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"#0ee9cb",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:2,pointHitRadius:2,data:t.map((function(e){return e}))},{label:"Total Recovered",fill:!1,lineTension:.1,backgroundColor:"rgba(52, 127, 213,0.4)",borderColor:"#347fd5",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"#347fd5",pointBackgroundColor:"#347fd5",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"#347fd5",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:2,pointHitRadius:2,data:o.map((function(e){return e}))},{label:"Total Deaths",fill:!1,lineTension:.1,backgroundColor:"rgba(243, 83, 83,0.4)",borderColor:"#f35353",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"#f35353",pointBackgroundColor:"#f35353",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"#f35353",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:2,pointHitRadius:2,data:r.map((function(e){return e}))},{label:"Active cases",fill:!1,lineTension:.1,backgroundColor:"rgba(255,193,55,0.4)",borderColor:"#ffc137",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"#ffc137",pointBackgroundColor:"#ffc137",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"#ffc137",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:2,pointHitRadius:2,data:c.map((function(e){return e}))}]}})}}),[a]),r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Timeline cases and deaths"),r.a.createElement("canvas",{className:"mt-4",height:"170rem",id:"cav_cases"}))}function Q(e){var n=e.countries,a=Object(t.useState)(),o=Object(u.a)(a,2),c=o[0],s=o[1],i=Object(t.useState)(!1),l=Object(u.a)(i,2),b=l[0],f=l[1];return Object(t.useEffect)((function(){if(void 0!==n[0]&&!1===b){for(var e=[],a=0;a<5;a++)e.push(n[a].iso2);(function(){var n=Object(m.a)(d.a.mark((function n(){var a;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,g.post("/top_countries_timeline",e);case 2:a=n.sent,s(a.data),f(!0);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}})()()}}),[n,b]),Object(t.useEffect)((function(){if(c&&!1===b){var e=[],n=[],a=[],t=[];Object.keys(c[0].timeline.cases).forEach((function(n){e.push(n)}));for(var r=0;r<c.length;r++){a.push(c[r].country),n.push(c[r].timeline.cases);var o="#".concat(Math.floor(16777215*Math.random()).toString(16));7!==o.length&&(o+="6"),t.push({label:a[r],fill:!1,lineTension:.1,borderColor:o,borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:o,pointBackgroundColor:o,pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:o,pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:2,pointHitRadius:2,data:Object.values(n[r]).map((function(e){return e}))})}var s=document.getElementById("cav_cases_top_countries").getContext("2d");new q(s,{type:"LineWithLine",options:{tooltips:{mode:"index",intersect:!1},legend:{labels:{fontColor:"white"}},scales:{yAxes:[{ticks:{fontColor:"white"}}],xAxes:[{ticks:{fontColor:"white"}}]}},data:{labels:e,datasets:t}})}}),[c,b]),r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Timeline cases from top 5 countries"),r.a.createElement("canvas",{className:"mt-4",height:"170rem",id:"cav_cases_top_countries"}))}var V=a(27);function X(){var e=Object(v.a)(["\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  overflow-y: auto;\n\n  background: ",";\n  border-radius: 5px;\n  padding: 20px;\n  margin-bottom: 20px;\n\n  div {\n    figure {\n      display: flex;\n      img {\n        height: 40px;\n        border-radius: 20%;\n        box-shadow: 0.31rem 0.29rem 0.65rem rgba(0, 0, 0, 0.342);\n      }\n      figcaption {\n        margin-left: 20px;\n        margin-top: 8px;\n      }\n    }\n  }\n"]);return X=function(){return e},e}var $=x.c.div(X(),C);function ee(e){var n=e.stateAtual,a=e.stateNovo,o=Object(t.useState)((function(){var e=sessionStorage.getItem("@Coronavirus-Dashboard:recentChanges");return e?JSON.parse(e):[]})),c=Object(u.a)(o,2),s=c[0],i=c[1],l=[];return Object(t.useEffect)((function(){sessionStorage.setItem("@Coronavirus-Dashboard:recentChanges",JSON.stringify(s))}),[s]),Object(t.useEffect)((function(){if(void 0!==n){!function(){var e=n,t=a;function r(e){return function(n){return 0===e.filter((function(e){return e.cases===n.cases&&e.recovered===n.recovered&&e.deaths===n.deaths})).length}}var o=e.filter(r(t)),c=t.filter(r(e)),d=o.concat(c);if(0!==Object.keys(d).length&&d.constructor===Array){d=d.sort((function(e,n){return e.iso2<n.iso2?-1:e.iso2>n.iso2?1:0}));for(var m=1;m<d.length;m++)d[m].iso2===d[m-1].iso2&&(d[m].cases>d[m-1].cases&&(l[m]={text:"".concat(d[m].country,": +").concat(d[m].cases-d[m-1].cases," cases "),iso2:d[m].iso2}),d[m].recovered>d[m-1].recovered&&(void 0===l[m]?l[m]={text:"".concat(d[m].country,": +").concat(d[m].recovered-d[m-1].recovered," recovered "),iso2:d[m].iso2}:l[m].text="".concat(l[m].text,"+").concat(d[m].recovered-d[m-1].recovered," recovered ")),d[m].deaths>d[m-1].deaths&&(void 0===l[m]?l[m]={text:"".concat(d[m].country,": +").concat(d[m].deaths-d[m-1].deaths," deaths "),iso2:d[m].iso2}:l[m].text="".concat(l[m].text,"+").concat(d[m].deaths-d[m-1].deaths," deaths ")),void 0!==l[m]&&(l[m].text="".concat(l[m].text," (").concat(new Date(Date.now()).toLocaleString(),")")));var u=l.filter((function(e){return void 0!==e}));i([].concat(Object(V.a)(u),Object(V.a)(s)))}}()}}),[n,a]),r.a.createElement($,null,r.a.createElement("h2",null,"Recent changes"),r.a.createElement("div",{className:"change-content"},s.map((function(e){return r.a.createElement("div",{key:e.text+e.iso2},r.a.createElement("figure",null,r.a.createElement("img",{src:"https://cdn.u21.io/flags/4x3/".concat(e.iso2.toLowerCase(),".svg"),alt:"flag ".concat(e.text)}),r.a.createElement("figcaption",{className:"text-bold font-smaller"},r.a.createElement("p",null,e.text))))}))))}function ne(e){var n=e.data,a=e.timelineDataLoaded,o=e.country,c=void 0===o?"Global":o;return Object(t.useEffect)((function(){if(a){var e=document.getElementById("pie_cases").getContext("2d");new q(e,{type:"pie",options:{legend:{labels:{fontColor:"white"}}},data:{labels:["Active","Recovered","Death"],datasets:[{backgroundColor:["#ffc137","#347fd5","#f35353"],data:[n.active,n.recovered,n.deaths]}]}})}}),[a]),r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,c," active, deaths and recovered"),r.a.createElement("canvas",{className:"mt-4",height:"110rem",id:"pie_cases"}))}function ae(){var e=Object(v.a)(["\n  @media all and (min-width: 499px) {\n    margin-top: 1rem;\n    display: flex;\n    flex-wrap: wrap;\n    @media all and (max-width: 1500px) {\n      flex-direction: column;\n    }\n\n    .global-data {\n      flex: 0 25%;\n    }\n    .countries-data {\n      flex: 1;\n      display: flex;\n      flex-wrap: wrap;\n      justify-content: center;\n\n      border-radius: 12px;\n\n      .countries-panel {\n        border-radius: 12px;\n        background: ",";\n\n        display: flex;\n        flex-wrap: wrap;\n\n        height: 50rem;\n        overflow-y: scroll;\n      }\n    }\n  }\n"]);return ae=function(){return e},e}function te(){var e=Object(v.a)(["\n  display: flex;\n  flex-wrap: wrap;\n\n  section {\n    width: calc(50% - 1rem);\n    margin: 0.5rem;\n\n    box-shadow: 0.2rem 1rem 0.65rem rgba(0, 0, 0, 0.342);\n    position: relative;\n  }\n\n  @media all and (max-width: 499px) {\n    display: none !important;\n  }\n"]);return te=function(){return e},e}var re=x.c.div(te()),oe=x.c.main(ae(),E);function ce(){var e=Object(t.useState)([]),n=Object(u.a)(e,2),a=n[0],o=n[1],c=Object(t.useState)([]),s=Object(u.a)(c,2),i=s[0],l=s[1],f=Object(t.useState)(!1),h=Object(u.a)(f,2),v=h[0],x=h[1],y=Object(t.useState)(!1),w=Object(u.a)(y,2),E=w[0],O=w[1],C=Object(t.useState)(0),k=Object(u.a)(C,2),j=k[0],N=k[1],S=Object(t.useState)(0),B=Object(u.a)(S,2),D=B[0],H=B[1],R=Object(t.useState)(),L=Object(u.a)(R,2),_=L[0],W=L[1],T=Object(t.useState)(!1),A=Object(u.a)(T,2),z=A[0],I=A[1],J=Object(t.useRef)();Object(t.useEffect)((function(){function e(){return(e=Object(m.a)(d.a.mark((function e(){var n,t,r,c,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([g.get("/countries"),g.get("/global")]);case 2:n=e.sent,t=Object(u.a)(n,2),r=t[0],c=t[1],s=Object.values(r.data),void 0!==a[0]&&Object.keys(s).forEach((function(e){s[e].updated<a[e].updated&&(s[e]=a[e])})),o(s),l(c.data),I(!0),x(!0);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[D]),Object(t.useEffect)((function(){var e=null;return v&&(e=setInterval((function(){N((function(e){return e+1})),j%30===0&&0!==j&&(J.current=a,H((function(e){return e+1})),N(0))}),1e3)),function(){return clearInterval(e)}}),[v,j,a]);var F=J.current;return Object(t.useEffect)((function(){g.get("/global_timeline").then((function(e){W(e.data),O(!0)}))}),[]),!1===v?r.a.createElement("div",{className:"loading"},r.a.createElement(p.a,{type:"bars",color:"#eee"})):r.a.createElement("div",{className:"container-fluid py-3"},r.a.createElement(b.NotificationContainer,null),r.a.createElement(re,null,r.a.createElement("section",{className:"chart-div"},r.a.createElement(K,{timeline:_,timelineDataLoaded:E})),r.a.createElement("section",{className:"chart-div"},r.a.createElement(Q,{countries:a})),r.a.createElement("section",{className:"chart-div"},r.a.createElement(ne,{data:i,timelineDataLoaded:z})),r.a.createElement("section",{className:"chart-div"},r.a.createElement(ee,{stateAtual:F,stateNovo:a}))),r.a.createElement(oe,null,r.a.createElement("section",{className:"global-data"},r.a.createElement(P,{globaldata:i})),r.a.createElement("section",{className:"countries-data"},r.a.createElement("h1",{className:"col-12 title-components"},"Countries Data"),r.a.createElement("div",{className:"countries-panel"},a.map((function(e){return r.a.createElement(Y,{key:e.country,country:e})}))))))}function se(){var e=Object(v.a)(["\n  display: flex;\n  flex-direction: column;\n  margin: 1rem 0;\n  font-weight: 800;\n  font-size: 18px;\n\n  .flag {\n    display: flex;\n    font-size: x-large;\n    align-items: center;\n    @media all and (max-width: 499px) {\n      justify-content: center;\n    }\n    img {\n      height: 48px;\n      border-radius: 20%;\n    }\n    figcaption {\n      margin-left: 1rem;\n    }\n  }\n\n  .cases {\n    display: flex;\n    flex-wrap: wrap;\n    @media all and (min-width: 500px) {\n      background: ",";\n      border-radius: 0.5rem;\n    }\n    div {\n      @media all and (max-width: 499px) {\n        background: ",";\n        border-radius: 0.5rem;\n      }\n      margin: 0.5rem;\n      padding: 0.5rem;\n      flex: 1 1 auto;\n      display: flex;\n      flex-direction: column;\n      text-align: center;\n      .country-data-numbers {\n        font-size: 2.5rem;\n        @media all and (max-width: 499px) {\n          font-size: 1.7rem;\n        }\n        font-weight: 800;\n      }\n    }\n  }\n"]);return se=function(){return e},e}var ie=x.c.article(se(),C,C),le=new Intl.NumberFormat;function de(e){var n=e.country;return n.iso2="MS Zaandam"===n.country?"US":n.iso2,n.iso2="Diamond Princess"===n.country?"US":n.iso2,r.a.createElement(ie,null,r.a.createElement("figure",{className:"flag"},r.a.createElement("img",{src:"https://cdn.u21.io/flags/4x3/".concat(n.iso2.toLowerCase(),".svg"),alt:"flag ".concat(n.country)}),r.a.createElement("figcaption",null,n.country)),r.a.createElement("section",{className:"cases"},r.a.createElement("div",null,"Cases",r.a.createElement("span",{className:"country-data-numbers color-cases"},le.format(n.cases)),"New Cases Today",r.a.createElement("span",{className:"country-data-numbers color-new-case"},le.format(n.todayCases))),r.a.createElement("div",null,"Deaths",r.a.createElement("span",{className:"country-data-numbers color-death"},le.format(n.deaths)),"New Deaths Today",r.a.createElement("span",{className:"country-data-numbers color-new-death"},le.format(n.todayDeaths))),r.a.createElement("div",null,"Recovered",r.a.createElement("span",{className:"country-data-numbers color-recovered"},le.format(n.recovered)),"New Recovered Today",r.a.createElement("span",{className:"country-data-numbers color-new-recoveries"},le.format(n.todayRecovered))),r.a.createElement("div",null,"Active Cases",r.a.createElement("span",{className:"country-data-numbers color-active"},le.format(n.active)),"Tests",r.a.createElement("span",{className:"country-data-numbers color-tests"},le.format(n.tests))),r.a.createElement("div",null,"Population",r.a.createElement("span",{className:"country-data-numbers color-affected"},le.format(n.population)),"Critical",r.a.createElement("span",{className:"country-data-numbers color-critical"},le.format(n.critical)))))}function me(e){var n=e.timeline,a=e.timelineDataLoaded;return q.defaults.LineWithLine=q.defaults.line,q.controllers.LineWithLine=q.controllers.line.extend({draw:function(e){if(this.chart.tooltip._active&&this.chart.tooltip._active.length){var n=this.chart.tooltip._active[0],a=this.chart.ctx,t=n.tooltipPosition().x,r=this.chart.scales["y-axis-0"].top,o=this.chart.scales["y-axis-0"].bottom;a.save(),a.beginPath(),a.moveTo(t,r),a.lineTo(t,o),a.lineWidth=1,a.strokeStyle="#fe3860",a.stroke(),a.restore()}q.controllers.line.prototype.draw.call(this,e)}}),Object(t.useEffect)((function(){if(a){var e=[],t=[],r=[];Object.keys(n.cases).forEach((function(a){e.push(a),t.push(n.cases[a])})),Object.keys(n.deaths).forEach((function(e){r.push(n.deaths[e])}));var o=document.getElementById("cav_cases_daily").getContext("2d");new q(o,{type:"LineWithLine",options:{tooltips:{mode:"index",intersect:!1},legend:{labels:{fontColor:"white"}},scales:{yAxes:[{ticks:{fontColor:"white"}}],xAxes:[{ticks:{fontColor:"white"}}]}},data:{labels:e,datasets:[{label:"Daily Cases",fill:!1,lineTension:.1,backgroundColor:"rgba(255, 138, 55,0.4)",borderColor:"#ff8a37",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"#ff8a37",pointBackgroundColor:"#ff8a37",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"#ff8a37",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:2,pointHitRadius:2,data:t.map((function(e){return e}))},{label:"Daily Deaths",fill:!1,lineTension:.1,backgroundColor:"rgba(175, 28, 28,0.4)",borderColor:"#af1c1c",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"#af1c1c",pointBackgroundColor:"#af1c1c",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"#af1c1c",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:2,pointHitRadius:2,data:r.map((function(e){return e}))}]}})}}),[a]),r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Timeline daily cases and deaths"),r.a.createElement("canvas",{className:"mt-4",height:"170rem",id:"cav_cases_daily"}))}function ue(e){var n=e.data,a=e.timelineDataLoaded;return Object(t.useEffect)((function(){if(a){var e=document.getElementById("pie_tests").getContext("2d");new q(e,{type:"pie",options:{legend:{labels:{fontColor:"white"}}},data:{labels:["".concat(n.country," population"),"Tests"],datasets:[{backgroundColor:["#da8213","#6bfb31"],data:[n.population,n.tests]}]}})}}),[a]),r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,n.country," Population / Tests"),r.a.createElement("canvas",{className:"mt-4",height:"110rem",id:"pie_tests"}))}function be(){var e=Object(v.a)(["\n  img {\n    height: 48px;\n    border-radius: 20%;\n  }\n"]);return be=function(){return e},e}var fe=x.c.div(be());function pe(){var e=Object(i.e)().country_code,n=Object(t.useState)(!1),a=Object(u.a)(n,2),o=a[0],c=a[1],s=Object(t.useState)(!1),l=Object(u.a)(s,2),b=l[0],f=l[1],h=Object(t.useState)(!1),v=Object(u.a)(h,2),x=v[0],y=v[1],w=Object(t.useState)([]),E=Object(u.a)(w,2),O=E[0],C=E[1],k=Object(t.useState)([]),j=Object(u.a)(k,2),N=j[0],S=j[1],B=Object(t.useState)([]),D=Object(u.a)(B,2),H=D[0],R=D[1];return Object(t.useEffect)((function(){(function(){var n=Object(m.a)(d.a.mark((function n(){var a;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,g.get("/country_timeline/".concat(e));case 2:a=n.sent,S(a.data.timeline),f(!0);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}})()()}),[]),Object(t.useEffect)((function(){(function(){var n=Object(m.a)(d.a.mark((function n(){var a;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,g.get("/country_timeline_new/".concat(e));case 2:a=n.sent,R(a.data.timeline),y(!0);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}})()()}),[]),Object(t.useEffect)((function(){(function(){var n=Object(m.a)(d.a.mark((function n(){var a;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,g.get("/country/".concat(e));case 2:a=n.sent,C(a.data),c(!0);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}})()()}),[]),o?r.a.createElement(fe,{className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement(de,{country:O})),r.a.createElement("div",{className:"col-lg-6 col-md-12"},r.a.createElement("section",{className:" chart-div"},r.a.createElement(K,{timeline:N,timelineDataLoaded:b}))),r.a.createElement("div",{className:"col-lg-6 col-md-12"},r.a.createElement("section",{className:" chart-div"},r.a.createElement(me,{timeline:H,timelineDataLoaded:x}))),r.a.createElement("div",{className:"col-lg-6 col-md-12"},r.a.createElement("section",{className:"chart-div"},r.a.createElement(ne,{data:O,timelineDataLoaded:b,country:O.country,pageLoaded:o}))),r.a.createElement("div",{className:"col-lg-6 col-md-12"},r.a.createElement("section",{className:"chart-div"},r.a.createElement(ue,{data:O,timelineDataLoaded:b}))))):r.a.createElement("div",{className:"loading"},r.a.createElement(p.a,{type:"bars",color:"#eee"}))}function he(){var e=Object(v.a)(["\n  padding: 0.5rem;\n  height: 100%;\n  width: 100%;\n  background: ",";\n  font-size: 18px;\n  font-weight: bold;\n  color: ",";\n  display: flex;\n  * {\n    display: flex;\n  }\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: center;\n  @media all and (max-width: 499px) {\n    flex-direction: column;\n    height: 120px;\n  }\n  .title-brand {\n    align-items: center;\n\n    .logo {\n      margin: auto 0.5rem;\n      width: 32px;\n      height: 32px;\n    }\n\n    .blob {\n      background: black;\n      border-radius: 50%;\n      box-shadow: 0 0 0 0 rgba(0, 0, 0, 1);\n      margin: 10px;\n      height: 20px;\n      width: 20px;\n      transform: scale(1);\n      animation: pulse-black 2s infinite;\n    }\n\n    @keyframes pulse-black {\n      0% {\n        transform: scale(0.95);\n        box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);\n      }\n\n      70% {\n        transform: scale(1);\n        box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);\n      }\n\n      100% {\n        transform: scale(0.95);\n        box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);\n      }\n    }\n\n    .blob.white {\n      background: white;\n      box-shadow: 0 0 0 0 rgba(255, 255, 255, 1);\n      animation: pulse-white 2s infinite;\n    }\n\n    @keyframes pulse-white {\n      0% {\n        transform: scale(0.95);\n        box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7);\n      }\n\n      70% {\n        transform: scale(1);\n        box-shadow: 0 0 0 10px rgba(255, 255, 255, 0);\n      }\n\n      100% {\n        transform: scale(0.95);\n        box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);\n      }\n    }\n\n    .blob.red {\n      background: rgba(255, 82, 82, 1);\n      box-shadow: 0 0 0 0 rgba(255, 82, 82, 1);\n      animation: pulse-red 2s infinite;\n    }\n\n    @keyframes pulse-red {\n      0% {\n        transform: scale(0.95);\n        box-shadow: 0 0 0 0 rgba(255, 82, 82, 0.7);\n      }\n\n      70% {\n        transform: scale(1);\n        box-shadow: 0 0 0 10px rgba(255, 82, 82, 0);\n      }\n\n      100% {\n        transform: scale(0.95);\n        box-shadow: 0 0 0 0 rgba(255, 82, 82, 0);\n      }\n    }\n\n    .blob.orange {\n      background: rgba(255, 121, 63, 1);\n      box-shadow: 0 0 0 0 rgba(255, 121, 63, 1);\n      animation: pulse-orange 2s infinite;\n    }\n\n    @keyframes pulse-orange {\n      0% {\n        transform: scale(0.95);\n        box-shadow: 0 0 0 0 rgba(255, 121, 63, 0.7);\n      }\n\n      70% {\n        transform: scale(1);\n        box-shadow: 0 0 0 10px rgba(255, 121, 63, 0);\n      }\n\n      100% {\n        transform: scale(0.95);\n        box-shadow: 0 0 0 0 rgba(255, 121, 63, 0);\n      }\n    }\n\n    .blob.yellow {\n      background: rgba(255, 177, 66, 1);\n      box-shadow: 0 0 0 0 rgba(255, 177, 66, 1);\n      animation: pulse-yellow 2s infinite;\n    }\n\n    @keyframes pulse-yellow {\n      0% {\n        transform: scale(0.95);\n        box-shadow: 0 0 0 0 rgba(255, 177, 66, 0.7);\n      }\n\n      70% {\n        transform: scale(1);\n        box-shadow: 0 0 0 10px rgba(255, 177, 66, 0);\n      }\n\n      100% {\n        transform: scale(0.95);\n        box-shadow: 0 0 0 0 rgba(255, 177, 66, 0);\n      }\n    }\n\n    .blob.blue {\n      background: rgba(52, 172, 224, 1);\n      box-shadow: 0 0 0 0 rgba(52, 172, 224, 1);\n      animation: pulse-blue 2s infinite;\n    }\n\n    @keyframes pulse-blue {\n      0% {\n        transform: scale(0.95);\n        box-shadow: 0 0 0 0 rgba(52, 172, 224, 0.7);\n      }\n\n      70% {\n        transform: scale(1);\n        box-shadow: 0 0 0 10px rgba(52, 172, 224, 0);\n      }\n\n      100% {\n        transform: scale(0.95);\n        box-shadow: 0 0 0 0 rgba(52, 172, 224, 0);\n      }\n    }\n\n    .blob.green {\n      background: rgba(51, 217, 178, 1);\n      box-shadow: 0 0 0 0 rgba(51, 217, 178, 1);\n      animation: pulse-green 2s infinite;\n    }\n\n    @keyframes pulse-green {\n      0% {\n        transform: scale(0.95);\n        box-shadow: 0 0 0 0 rgba(51, 217, 178, 0.7);\n      }\n\n      70% {\n        transform: scale(1);\n        box-shadow: 0 0 0 10px rgba(51, 217, 178, 0);\n      }\n\n      100% {\n        transform: scale(0.95);\n        box-shadow: 0 0 0 0 rgba(51, 217, 178, 0);\n      }\n    }\n\n    .blob.purple {\n      background: rgba(142, 68, 173, 1);\n      box-shadow: 0 0 0 0 rgba(142, 68, 173, 1);\n      animation: pulse-purple 2s infinite;\n    }\n\n    @keyframes pulse-purple {\n      0% {\n        transform: scale(0.95);\n        box-shadow: 0 0 0 0 rgba(142, 68, 173, 0.7);\n      }\n\n      70% {\n        transform: scale(1);\n        box-shadow: 0 0 0 10px rgba(142, 68, 173, 0);\n      }\n\n      100% {\n        transform: scale(0.95);\n        box-shadow: 0 0 0 0 rgba(142, 68, 173, 0);\n      }\n    }\n  }\n"]);return he=function(){return e},e}var ge=x.c.header(he(),C,j),ve=a(50),xe=a.n(ve),ye=function(){return r.a.createElement(ge,null,r.a.createElement(s.b,{to:G,className:"title-brand"},r.a.createElement("img",{src:xe.a,alt:"Covid Dashboard",className:"logo"}),"DASHBOARD",r.a.createElement("div",{className:"blob red"})),r.a.createElement("nav",{className:"my-2 my-md-0 mr-md-3"},r.a.createElement(s.b,{to:G,className:"p-2 text-white"},"Features")))};function we(){return r.a.createElement(s.a,null,r.a.createElement(i.a,{path:G,component:ye}),r.a.createElement(i.a,{exact:!0,path:G,component:ce}),r.a.createElement(i.a,{exact:!0,path:"".concat(G,":country_code"),component:pe}))}a(95);var Ee=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(s.a,null,r.a.createElement(we,null)),r.a.createElement(A,null))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Ee,null)),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.255099aa.chunk.js.map