(this["webpackJsonpcoronavirus-dashboard"]=this["webpackJsonpcoronavirus-dashboard"]||[]).push([[0],{39:function(e,a,t){e.exports=t.p+"static/media/logo.fa1e2a0b.png"},40:function(e,a,t){e.exports=t(93)},80:function(e,a,t){},81:function(e,a,t){},87:function(e,a,t){},88:function(e,a,t){},89:function(e,a,t){},90:function(e,a,t){},91:function(e,a,t){},93:function(e,a,t){"use strict";t.r(a);var r=t(0),o=t.n(r),n=t(17),c=t.n(n),s=t(10),l=t(1),i=t(5),d=t.n(i),m=t(12),u=t(3),f=t(36),p=(t(62),t(14)),b=t.n(p),v=t(37),E=t.n(v).a.create({baseURL:"https://apicoviddashboard.herokuapp.com"});t(80);function h(e){var a=e.globaldata,t=new Intl.NumberFormat;return o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",{className:"text-center title-components"},"Global Data"),o.a.createElement("article",{className:"global-article"},o.a.createElement("section",{className:"cases"},o.a.createElement("div",{className:"global-data-title top-color-1"},"Cases",o.a.createElement("span",{className:"global-data-numbers color-cases"},t.format(a.cases)),"New cases today",o.a.createElement("span",{className:"global-data-numbers color-new-case"},t.format(a.todayCases))),o.a.createElement("div",{className:"global-data-title top-color-2"},"Deaths",o.a.createElement("span",{className:"global-data-numbers color-death"},t.format(a.deaths)),"New deaths today",o.a.createElement("span",{className:"global-data-numbers color-new-death"},t.format(a.todayDeaths))),o.a.createElement("div",{className:"global-data-title top-color-3"},"Recovered",o.a.createElement("span",{className:"global-data-numbers color-recovered"},t.format(a.recovered)),"New recoveries today",o.a.createElement("span",{className:"global-data-numbers color-new-recoveries"},t.format(a.todayRecovered))),o.a.createElement("div",{className:"global-data-title top-color-4"},"Active cases",o.a.createElement("span",{className:"global-data-numbers color-active"},t.format(a.active)),"Tests",o.a.createElement("span",{className:"global-data-numbers color-tests"},t.format(a.tests))),o.a.createElement("div",{className:"global-data-title top-color-5"},"Countries affected",o.a.createElement("span",{className:"global-data-numbers color-affected"},t.format(a.affectedCountries)),"Criticals cases",o.a.createElement("span",{className:"global-data-numbers color-critical"},t.format(a.critical))))))}t(81);var g="/Coronavirus-Dashboard/",y=new Intl.NumberFormat;function N(e){var a=e.country;a.iso2="MS Zaandam"===a.country?"US":a.iso2,a.iso2="Diamond Princess"===a.country?"US":a.iso2;var t=Math.round(100*a.active/a.cases),r=Math.round(100*a.recovered/a.cases),n=Math.ceil(100*a.deaths/a.cases);return o.a.createElement("div",{className:"col-xl-3 col-lg-4"},o.a.createElement(s.b,{to:"".concat(g).concat(a.iso2),className:"unstyled-link"},o.a.createElement("article",{className:"pais-article"},o.a.createElement("figure",{className:"flag"},o.a.createElement("img",{src:"https://cdn.u21.io/flags/4x3/".concat(a.iso2.toLowerCase(),".svg"),alt:"flag ".concat(a.country)}),o.a.createElement("figcaption",{className:"text-bold font-smaller text-center"},a.country)),o.a.createElement("div",{className:"progress shadow",style:{height:"7px"}},o.a.createElement("div",{className:"progress-bar bg-active",role:"progressbar",style:{width:"".concat(t,"%")},"aria-valuenow":t,"aria-valuemin":"0","aria-valuemax":"100"}),o.a.createElement("div",{className:"progress-bar bg-recovered",role:"progressbar",style:{width:"".concat(r,"%")},"aria-valuenow":r,"aria-valuemin":"0","aria-valuemax":"100"}),o.a.createElement("div",{className:"progress-bar bg-death",role:"progressbar",style:{width:"".concat(n,"%")},"aria-valuenow":n,"aria-valuemin":"0","aria-valuemax":"100"})),o.a.createElement("section",{className:"cases"},o.a.createElement("div",null,"Cases",o.a.createElement("span",{className:"color-cases"},y.format(a.cases)),a.todayCases>0&&o.a.createElement("span",{className:"color-cases new-today"},"+ ",y.format(a.todayCases))),o.a.createElement("div",null,"Deaths",o.a.createElement("span",{className:"color-death"},y.format(a.deaths)),a.todayDeaths>0&&o.a.createElement("span",{className:"color-death new-today"},"+ ",y.format(a.todayDeaths))),o.a.createElement("div",null,"Recovered",o.a.createElement("span",{className:"color-recovered"},y.format(a.recovered)),a.todayRecovered>0&&o.a.createElement("span",{className:"color-recovered new-today"},"+ ",y.format(a.todayRecovered))),o.a.createElement("div",null,"Active Cases",o.a.createElement("span",{className:"color-active"},y.format(a.active)))))))}var C=t(11);function O(e){var a=e.timeline,t=e.timelineDataLoaded;return Object(r.useEffect)((function(){if(t){var e=[],r=[],o=[],n=[],c=[];Object.keys(a.cases).forEach((function(t){e.push(t),r.push(a.cases[t])})),Object.keys(a.deaths).forEach((function(e){o.push(a.deaths[e])})),Object.keys(a.recovered).forEach((function(e){n.push(a.recovered[e])})),Object.keys(a.cases).forEach((function(e){c.push(a.cases[e]-(a.deaths[e]+a.recovered[e]))}));var s=document.getElementById("cav_cases").getContext("2d");new C(s,{type:"line",options:{tooltips:{mode:"index",intersect:!1},legend:{labels:{fontColor:"white"}},scales:{yAxes:[{ticks:{fontColor:"white"}}],xAxes:[{ticks:{fontColor:"white"}}]}},data:{labels:e,datasets:[{label:"Total Cases",fill:!1,lineTension:.1,backgroundColor:"rgba(14, 233, 203,0.4)",borderColor:"#0ee9cb",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"#0ee9cb",pointBackgroundColor:"#0ee9cb",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"#0ee9cb",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:2,pointHitRadius:2,data:r.map((function(e){return e}))},{label:"Total Recovered",fill:!1,lineTension:.1,backgroundColor:"rgba(52, 127, 213,0.4)",borderColor:"#347fd5",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"#347fd5",pointBackgroundColor:"#347fd5",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"#347fd5",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:2,pointHitRadius:2,data:n.map((function(e){return e}))},{label:"Total Deaths",fill:!1,lineTension:.1,backgroundColor:"rgba(243, 83, 83,0.4)",borderColor:"#f35353",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"#f35353",pointBackgroundColor:"#f35353",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"#f35353",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:2,pointHitRadius:2,data:o.map((function(e){return e}))},{label:"Active cases",fill:!1,lineTension:.1,backgroundColor:"rgba(255,193,55,0.4)",borderColor:"#ffc137",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"#ffc137",pointBackgroundColor:"#ffc137",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"#ffc137",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:2,pointHitRadius:2,data:c.map((function(e){return e}))}]}})}}),[t]),o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",null,"Timeline cases and deaths"),o.a.createElement("canvas",{className:"mt-4",height:"164px",id:"cav_cases"}))}function w(e){var a=e.countries,t=Object(r.useState)(),n=Object(u.a)(t,2),c=n[0],s=n[1],l=Object(r.useState)(!1),i=Object(u.a)(l,2),f=i[0],p=i[1];return Object(r.useEffect)((function(){if(void 0!==a[0]){for(var e=[],t=0;t<5;t++)e.push(a[t].iso2);(function(){var a=Object(m.a)(d.a.mark((function a(){var t;return d.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,E.post("/top_countries_timeline",e);case 2:t=a.sent,s(t.data),p(!0);case 5:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}})()()}}),[a]),Object(r.useEffect)((function(){if(c&&!1===f){var e=[],a=[],t=[],r=[];Object.keys(c[0].timeline.cases).forEach((function(a){e.push(a)}));for(var o=0;o<c.length;o++){t.push(c[o].country),a.push(c[o].timeline.cases);var n="#"+Math.floor(16777215*Math.random()).toString(16);r.push({label:t[o],fill:!1,lineTension:.1,borderColor:n,borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:n,pointBackgroundColor:n,pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:n,pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:2,pointHitRadius:2,data:Object.values(a[o]).map((function(e){return e}))})}var s=document.getElementById("cav_cases_top_countries").getContext("2d");new C(s,{type:"line",options:{tooltips:{mode:"index",intersect:!1},legend:{labels:{fontColor:"white"}},scales:{yAxes:[{ticks:{fontColor:"white"}}],xAxes:[{ticks:{fontColor:"white"}}]}},data:{labels:e,datasets:r}})}}),[c,f]),o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",null,"Timeline cases from top 5 countries"),o.a.createElement("canvas",{className:"mt-4",height:"164px",id:"cav_cases_top_countries"}))}function j(e){var a=e.data,t=e.timelineDataLoaded,n=e.country,c=void 0===n?"Global":n;return Object(r.useEffect)((function(){if(t){var e=document.getElementById("pie_cases").getContext("2d");new C(e,{type:"pie",options:{legend:{labels:{fontColor:"white"}}},data:{labels:["Active","Recovered","Death"],datasets:[{backgroundColor:["#ffc137","#347fd5","#f35353"],data:[a.active,a.recovered,a.deaths]}]}})}}),[t]),o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",null,c," active, deaths and recovered"),o.a.createElement("canvas",{className:"mt-4",id:"pie_cases"}))}t(87);function x(){var e=Object(r.useState)([]),a=Object(u.a)(e,2),t=a[0],n=a[1],c=Object(r.useState)([]),s=Object(u.a)(c,2),l=s[0],i=s[1],p=Object(r.useState)(!1),v=Object(u.a)(p,2),g=v[0],y=v[1],C=Object(r.useState)(0),x=Object(u.a)(C,2),B=x[0],D=x[1],k=Object(r.useState)(0),S=Object(u.a)(k,2),R=S[0],H=S[1],_=Object(r.useState)(),T=Object(u.a)(_,2),A=T[0],L=T[1],I=Object(r.useState)(!1),W=Object(u.a)(I,2),F=W[0],M=W[1],J=Object(r.useState)(!1),U=Object(u.a)(J,2),P=U[0],G=U[1];return Object(r.useEffect)((function(){var e=function(){var e=Object(m.a)(d.a.mark((function e(){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.get("/countries");case 2:(a=e.sent).data=Object.values(a.data),n(a.data),M(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),a=function(){var e=Object(m.a)(d.a.mark((function e(){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.get("/global");case 2:a=e.sent,i(a.data),M(!1),G(!0);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e(),a()}),[R]),Object(r.useEffect)((function(){var e=null;return g&&(e=setInterval((function(){D((function(e){return e+1})),B%10===0&&0!==B&&(H((function(e){return e+1})),D(0))}),1e3)),function(){return clearInterval(e)}}),[g,B]),Object(r.useEffect)((function(){E.get("/global_timeline").then((function(e){L(e.data),y(!0),M(!0)}))}),[]),!1===g?o.a.createElement("div",{className:"loading"},o.a.createElement(b.a,{type:"bars",color:"#eee"})):o.a.createElement("div",{className:"container-fluid"},o.a.createElement(f.NotificationContainer,null),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-6"},o.a.createElement("section",{className:"chart-div"},o.a.createElement(O,{timeline:A,timelineDataLoaded:F}))),o.a.createElement("div",{className:"col-6"},o.a.createElement("section",{className:"chart-div"},o.a.createElement(w,{countries:t}))),o.a.createElement("div",{className:"col-4"},o.a.createElement("section",{className:"chart-div"},o.a.createElement(j,{data:l,timelineDataLoaded:P})))),o.a.createElement(h,{globaldata:l}),o.a.createElement("div",{className:"row justify-content-md-center"},o.a.createElement("div",{className:"col-12"},o.a.createElement("h1",{className:"text-center text-white title-components"},"Countries Data")),t.map((function(e){return o.a.createElement(N,{key:e.country,country:e})}))))}t(88);var B=new Intl.NumberFormat;function D(e){var a=e.country;return a.iso2="MS Zaandam"===a.country?"US":a.iso2,a.iso2="Diamond Princess"===a.country?"US":a.iso2,o.a.createElement("article",{className:"pais-details-article"},o.a.createElement("figure",{className:"flag"},o.a.createElement("img",{src:"https://cdn.u21.io/flags/4x3/".concat(a.iso2.toLowerCase(),".svg"),alt:"flag ".concat(a.country)}),o.a.createElement("figcaption",null,a.country)),o.a.createElement("section",{className:"cases"},o.a.createElement("div",null,"Cases",o.a.createElement("span",{className:"country-data-numbers color-cases"},B.format(a.cases)),"New Cases Today",o.a.createElement("span",{className:"country-data-numbers color-new-case"},B.format(a.todayCases))),o.a.createElement("div",null,"Deaths",o.a.createElement("span",{className:"country-data-numbers color-death"},B.format(a.deaths)),"New Deaths Today",o.a.createElement("span",{className:"country-data-numbers color-new-death"},B.format(a.todayDeaths))),o.a.createElement("div",null,"Recovered",o.a.createElement("span",{className:"country-data-numbers color-recovered"},B.format(a.recovered)),"New Recovered Today",o.a.createElement("span",{className:"country-data-numbers color-new-recoveries"},B.format(a.todayRecovered))),o.a.createElement("div",null,"Active Cases",o.a.createElement("span",{className:"country-data-numbers color-active"},B.format(a.active)),"Tests",o.a.createElement("span",{className:"country-data-numbers color-tests"},B.format(a.tests))),o.a.createElement("div",null,"Population",o.a.createElement("span",{className:"country-data-numbers color-affected"},B.format(a.population)),"Critical",o.a.createElement("span",{className:"country-data-numbers color-critical"},B.format(a.critical)))))}function k(e){var a=e.data,t=e.timelineDataLoaded;return Object(r.useEffect)((function(){if(t){var e=document.getElementById("pie_tests").getContext("2d");new C(e,{type:"pie",options:{legend:{labels:{fontColor:"white"}}},data:{labels:["".concat(a.country," population"),"Tests"],datasets:[{backgroundColor:["#da8213","#6bfb31"],data:[a.population,a.tests]}]}})}}),[t]),o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",null,a.country," Population / Tests"),o.a.createElement("canvas",{className:"mt-4",id:"pie_tests"}))}t(89);function S(){var e=Object(l.e)().country_code,a=Object(r.useState)(!1),t=Object(u.a)(a,2),n=t[0],c=t[1],s=Object(r.useState)(!1),i=Object(u.a)(s,2),f=i[0],p=i[1],v=Object(r.useState)([]),h=Object(u.a)(v,2),g=h[0],y=h[1],N=Object(r.useState)([]),C=Object(u.a)(N,2),w=C[0],x=C[1];return Object(r.useEffect)((function(){(function(){var a=Object(m.a)(d.a.mark((function a(){var t;return d.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,E.get("/country_timeline/".concat(e));case 2:t=a.sent,x(t.data.timeline),p(!0);case 5:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}})()()}),[]),Object(r.useEffect)((function(){(function(){var a=Object(m.a)(d.a.mark((function a(){var t;return d.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,E.get("/country/".concat(e));case 2:t=a.sent,y(t.data),c(!0);case 5:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}})()()}),[]),n?o.a.createElement("div",{className:"container-fluid"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-12"},o.a.createElement(D,{country:g})),o.a.createElement("div",{className:"col-8"},o.a.createElement("section",{className:" chart-div"},o.a.createElement(O,{timeline:w,timelineDataLoaded:f}))),o.a.createElement("div",{className:"col-4"},o.a.createElement("div",{className:"col-12"},o.a.createElement("section",{className:"chart-div"},o.a.createElement(j,{data:g,timelineDataLoaded:f,country:g.country,pageLoaded:n}))),o.a.createElement("div",{className:"col-12"},o.a.createElement("section",{className:"chart-div"},o.a.createElement(k,{data:g,timelineDataLoaded:f})))))):o.a.createElement("div",{className:"loading"},o.a.createElement(b.a,{type:"bars",color:"#eee"}))}t(90);var R=t(39),H=t.n(R),_=function(){return o.a.createElement("div",{id:"main-header"},o.a.createElement(s.b,{to:g,className:"title-brand"},o.a.createElement("img",{src:H.a,alt:"Covid Dashboard",className:"logo"}),"DASHBOARD",o.a.createElement("div",{className:"blob red"})),o.a.createElement("nav",{className:"my-2 my-md-0 mr-md-3"},o.a.createElement(s.b,{to:g,className:"p-2 text-white"},"Features")))};function T(){return o.a.createElement(s.a,null,o.a.createElement(l.a,{path:g,component:_}),o.a.createElement(l.a,{exact:!0,path:g,component:x}),o.a.createElement(l.a,{exact:!0,path:"".concat(g,":country_code"),component:S}))}t(91),t(92);var A=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(T,null))};c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(A,null)),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.006e9cea.chunk.js.map