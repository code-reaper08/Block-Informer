(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"48fe":function(t,e,n){"use strict";n.r(e);var c=n("7a23"),r=n("5fa3"),a=n.n(r),s=function(t){return Object(c["t"])("data-v-684784e5"),t=t(),Object(c["r"])(),t},i={class:"blockdata"},o={class:"container pt-5 pb-5"},u={class:"row pt-5"},l=s((function(){return Object(c["e"])("div",{class:"col container"},[Object(c["e"])("div",{id:"imgdiv"},[Object(c["e"])("img",{class:".img-fluid",src:a.a,alt:"..."})])],-1)})),b=s((function(){return Object(c["e"])("div",{id:"Intropara",class:"col"},[Object(c["e"])("h2",null,"Find all the informations regarding BTC Blockchain"),Object(c["e"])("p",null,"Latest data at your service")],-1)})),h={class:"container"},f={class:"infoitem"},j=s((function(){return Object(c["e"])("h3",null,"BTC sent in the past 24 hours",-1)})),d={class:"infoitem"},O=s((function(){return Object(c["e"])("h3",null,"Number of transactions in the past 24 hours",-1)})),p={class:"infoitem"},m=s((function(){return Object(c["e"])("h3",null,"Total Bitcoins in circulation",-1)})),v={class:"infoitem"},g=s((function(){return Object(c["e"])("h3",null,"Estimated time until the next block",-1)})),w={class:"infoitem"},k=s((function(){return Object(c["e"])("h3",null,"Current block reward in BTC",-1)})),x=s((function(){return Object(c["e"])("h1",null,"Latest block data",-1)})),R={class:"infoitem"},T=s((function(){return Object(c["e"])("h3",null,"Hash",-1)})),B={class:"infoitem"},C=s((function(){return Object(c["e"])("h3",null,"Index",-1)})),z={class:"infoitem"},q=s((function(){return Object(c["e"])("h3",null,"Height",-1)})),L={class:"infoitem"},y=s((function(){return Object(c["e"])("h3",null,"Time",-1)}));function A(t,e,n,r,a,s){var A=Object(c["x"])("Footer");return Object(c["q"])(),Object(c["d"])(c["a"],null,[Object(c["e"])("div",i,[Object(c["e"])("div",o,[Object(c["e"])("div",u,[l,b,Object(c["e"])("div",h,[Object(c["e"])("div",f,[j,Object(c["e"])("span",null,Object(c["z"])(a.btcsent)+" Satoshi",1)]),Object(c["e"])("div",d,[O,Object(c["e"])("span",null,Object(c["z"])(a.tc),1)]),Object(c["e"])("div",p,[m,Object(c["e"])("span",null,Object(c["z"])(a.totalbtc),1)]),Object(c["e"])("div",v,[g,Object(c["e"])("span",null,Object(c["z"])(a.eta)+" Seconds",1)]),Object(c["e"])("div",w,[k,Object(c["e"])("span",null,Object(c["z"])(a.rwrd)+" BTC",1)]),x,Object(c["e"])("div",R,[T,Object(c["e"])("span",null,Object(c["z"])(a.latesthsh),1)]),Object(c["e"])("div",B,[C,Object(c["e"])("span",null,Object(c["z"])(a.latestind),1)]),Object(c["e"])("div",z,[q,Object(c["e"])("span",null,Object(c["z"])(a.latestheight),1)]),Object(c["e"])("div",L,[y,Object(c["e"])("span",null,Object(c["z"])(a.latesttime),1)])])])])]),Object(c["h"])(A)],64)}var E=n("1da1"),F=(n("96cf"),n("d3b7"),n("fd2d")),I={name:"Blockdata",components:{Footer:F["a"]},data:function(){return{totalbtc:"",latestind:"",latesthsh:"",latestheight:"",latesttime:"",tc:"",btcsent:"",eta:"",rwrd:""}},methods:{getLatestdata:function(){var t=this;return Object(E["a"])(regeneratorRuntime.mark((function e(){var n,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://cors-anywhere.herokuapp.com/https://blockchain.info/latestblock");case 2:return n=e.sent,e.next=5,n.json();case 5:c=e.sent,t.latestind=c.block_index,t.latesthsh=c.hash,t.latestheight=c.height,t.latesttime=c.time;case 10:case"end":return e.stop()}}),e)})))()},gettotalBTC:function(){var t=this;return Object(E["a"])(regeneratorRuntime.mark((function e(){var n,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://blockchain.info/q/totalbc");case 2:return n=e.sent,e.next=5,n.json();case 5:c=e.sent,t.totalbtc=c;case 7:case"end":return e.stop()}}),e)})))()},getTransacCount:function(){var t=this;return Object(E["a"])(regeneratorRuntime.mark((function e(){var n,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://blockchain.info/q/24hrtransactioncount");case 2:return n=e.sent,e.next=5,n.json();case 5:c=e.sent,t.tc=c;case 7:case"end":return e.stop()}}),e)})))()},getBTCsent:function(){var t=this;return Object(E["a"])(regeneratorRuntime.mark((function e(){var n,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://blockchain.info/q/24hrbtcsent");case 2:return n=e.sent,e.next=5,n.json();case 5:c=e.sent,t.btcsent=c;case 7:case"end":return e.stop()}}),e)})))()},getETA:function(){var t=this;return Object(E["a"])(regeneratorRuntime.mark((function e(){var n,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://blockchain.info/q/eta");case 2:return n=e.sent,e.next=5,n.json();case 5:c=e.sent,t.eta=c;case 7:case"end":return e.stop()}}),e)})))()},getReward:function(){var t=this;return Object(E["a"])(regeneratorRuntime.mark((function e(){var n,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://blockchain.info/q/bcperblock");case 2:return n=e.sent,e.next=5,n.json();case 5:c=e.sent,t.rwrd=c;case 7:case"end":return e.stop()}}),e)})))()}},mounted:function(){this.getLatestdata(),this.gettotalBTC(),this.getTransacCount(),this.getBTCsent(),this.getETA(),this.getReward()}},_=(n("9997"),n("6b0d")),H=n.n(_);const J=H()(I,[["render",A],["__scopeId","data-v-684784e5"]]);e["default"]=J},"5fa3":function(t,e,n){t.exports=n.p+"img/Analyze-bro.6cec96d7.svg"},9997:function(t,e,n){"use strict";n("bcfc")},bcfc:function(t,e,n){}}]);
//# sourceMappingURL=about.a9fac242.js.map