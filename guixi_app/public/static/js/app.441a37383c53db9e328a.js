webpackJsonp([1],{FYvt:function(t,e){},FdTV:function(t,e){},Ipoo:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("7+uW"),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var o=s("VU/8")({name:"App"},i,!1,function(t){s("ffao")},null,null).exports,a=s("/ocq"),r={name:"Common",props:{companyName:{type:String},fields:{type:Array}}},l={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"community-home"},[s("div",{staticClass:"community-home-head"},[t._m(0),t._v(" "),s("div",{staticClass:"head-right"},[s("div",{staticClass:"company-name"},[t._v(t._s(t.companyName))]),t._v(" "),t._t("communityBreadcrumns",[s("div",{staticClass:"community-breadcrumns"})])],2)]),t._v(" "),s("div",{staticClass:"community-home-body"},[t._t("fieldsList")],2)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"head-left"},[e("img",{staticClass:"home-logo",attrs:{src:s("pH4d"),alt:""}})])}]};var c=s("VU/8")(r,l,!1,function(t){s("jh54")},null,null).exports,u=s("mtWM"),d=s.n(u),m=s("fZjL"),v=s.n(m);var f=function(t){var e=decodeURI(t).split("?")[1],s=e.split("&"),n={};if(0===e.trim().length)return n;for(var i=0;i<s.length;i++){var o=s[i].split("="),a=o[0],r=o[1];n[a]=r}return n},_={data:function(){return{routes:f(location.href),queryString:this.getQueryString()}},methods:{firstUpperCase:function(t){return t.replace(/\b(\w)(\w*)/g,function(t,e,s){return e.toUpperCase()+s.toLowerCase()})},getQueryString:function(){var t=f(location.href);return v()(t).map(function(e){return e+"="+t[e]}).join("&")}}};var p=s("VU/8")(_,null,!1,function(t){s("uFWL")},null,null).exports,h={mixins:[p],name:"Home",data:function(){return{home:"",buildings:[]}},components:{Common:c},created:function(){this.doRequst()},methods:{doRequst:function(){var t=this;d.a.get(this.baseUrl+"home?"+this.getQueryString()).then(function(e){t.home=e.data.home,t.buildings=e.data.result}).catch(function(t){console.log(t)})}}},C={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("Common",{attrs:{companyName:t.baseCompany,fields:t.buildings}},[s("template",{slot:"communityBreadcrumns"},[s("div",{staticClass:"community-name"},[t._v(t._s(t.home))])]),t._v(" "),s("template",{slot:"fieldsList"},[s("div",{staticClass:"home-building"},[t._l(t.buildings,function(e){return[s("router-link",{key:e.id,staticClass:"community-home-body-item",attrs:{to:{name:"Building",query:{home:t.home,building:e}}}},[s("i",{staticClass:"icon-icon_dong"}),t._v(" "),s("span",{staticClass:"building-name"},[t._v(t._s(e)+"栋")])])]})],2)])],2)},staticRenderFns:[]};var y=s("VU/8")(h,C,!1,function(t){s("Ipoo")},"data-v-d1032bb6",null).exports,b={mixins:[p],name:"Building",components:{Common:c},data:function(){return{home:"",building:"",units:[]}},created:function(){this.doRequst()},methods:{doRequst:function(){var t=this;d.a.get(this.baseUrl+"building?"+this.getQueryString()).then(function(e){t.home=e.data.home,t.building=e.data.building,t.units=e.data.result}).catch(function(t){console.log(t)})}}},g={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("Common",{attrs:{companyName:t.baseCompany,fields:t.units}},[s("template",{slot:"communityBreadcrumns"},[s("div",{staticClass:"community-breadcrumns"},[s("router-link",{attrs:{to:{name:"Home",query:{home:t.routes.home}}}},[t._v(t._s(t.routes.home))]),t._v(" >\n      "),s("span",[t._v(t._s(t.routes.building)+"栋")])],1)]),t._v(" "),s("template",{slot:"fieldsList"},[s("div",{staticClass:"building-unit"},[t._l(t.units,function(e,n){return[s("router-link",{key:n,staticClass:"community-home-body-item",attrs:{to:{name:"Unit",query:{home:t.home,building:t.building,unit:e}}}},[s("i",{staticClass:"icon-icon_danyuan"}),t._v(" "),s("span",{staticClass:"building-name"},[t._v(t._s(e)+"单元")])])]})],2)])],2)},staticRenderFns:[]};var k=s("VU/8")(b,g,!1,function(t){s("FdTV")},null,null).exports,x={props:{company:{type:String}},data:function(){return{opened:!1}},computed:{statusClass:function(){return{open:this.opened}}},methods:{close:function(){this.opened=!1},open:function(){this.opened=!0}}},w={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"modal",class:t.statusClass,on:{click:t.close}},[t._t("header"),t._v(" "),t._t("content",[s("div",{staticClass:"content",on:{click:function(t){t.stopPropagation()}}},[s("p",[t._v("请关注公众号【"+t._s(t.company)+"】")]),t._v(" "),s("p",[t._v("为了后期接受到纠错结果消息")]),t._v(" "),s("p",[t._v("请不要取关公众号")])])]),t._v(" "),t._t("footer")],2)},staticRenderFns:[]};var U={redirectBaseUrl:"beta.skylarkly.com",namespace:1,flow_id:833,baseUrl:"http://localhost:3001/",baseCompany:"成都高新区桂溪街道办事处",baseDescription:"人口服务管理社会化信息采集点"},R={mixins:[p],components:{Common:c,Modal:s("VU/8")(x,w,!1,function(t){s("iQ9i")},null,null).exports},data:function(){return{home:"",building:"",unit:"",floors:[],houses:[]}},created:function(){this.doRequest()},methods:{doRequest:function(){var t=this;d.a.get(this.baseUrl+"unit?"+this.getQueryString()).then(function(e){t.home=e.data.home,t.building=e.data.building,t.unit=e.data.unit,t.floors=e.data.floors,t.houses=e.data.floors[e.data.floors.length-1].data})},getStatusClass:function(t){return{"room-rent-out":"出租"===t,"room-leave-unused":"闲置"===t,"room-self-use":"自用"===t}},getQuery:function(t,e){var s={};return s[t]=e,s},getRoom:function(t){return t<10?"0"+t:t},scrollFixed:function(t){var e=t.target.scrollTop;this.$refs.bodyScrollContainer.scrollTop=e},scrollX:function(t){var e=t.target.scrollLeft;this.$refs.bodyScrollContainer.scrollLeft=e},scrollBody:function(t){var e=t.target.scrollTop,s=t.target.scrollLeft;this.$refs.fixedScrollContainer.scrollTop=e,this.$refs.bodyFixedHeader.scrollLeft=s},openModal:function(){this.$refs.modalRef.open(),setTimeout(function(){location.href="https://"+U.redirectBaseUrl+"/namespaces/"+U.namespace+"/yet_another_workflow/flows/"+U.flow_id+"/journeys/new"},3e3)}}},q={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("Common",{attrs:{companyName:t.baseCompany}},[s("template",{slot:"communityBreadcrumns"},[s("div",{staticClass:"community-breadcrumns"},[s("router-link",{attrs:{to:{name:"Home",query:{home:t.routes.home}}}},[t._v(t._s(t.routes.home))]),t._v(" >\n        "),s("router-link",{attrs:{to:{name:"Building",query:{home:t.routes.home,building:t.routes.building}}}},[t._v(t._s(t.routes.building)+"栋")]),t._v(" >\n        "),s("span",[t._v(t._s(t.routes.unit)+"单元")])],1)]),t._v(" "),s("template",{slot:"fieldsList"},[s("div",{staticClass:"room-table"},[s("div",{staticClass:"datable-table-container"},[s("div",{staticClass:"fixed-table"},[s("div",{staticClass:"fixed-table-header"},[s("table",{staticClass:"normal-table"},[s("colgroup",[s("col",{attrs:{width:"64.9"}})]),t._v(" "),s("thead",[s("tr",[s("th")])])])]),t._v(" "),s("div",{ref:"fixedScrollContainer",staticClass:"scroll-container",on:{scroll:t.scrollFixed}},[s("table",[s("colgroup",[s("col",{attrs:{width:"64.9"}})]),t._v(" "),s("tbody",[t._l(t.floors,function(e,n){return[s("tr",{key:n},[s("td",{staticClass:"column-first"},[t._v(t._s(e.floor)+"楼")])])]})],2)])])]),t._v(" "),s("div",{staticClass:"body-table"},[s("div",{staticClass:"body-table-wrapper"},[s("div",{ref:"bodyFixedHeader",staticClass:"fixed-table-header",on:{scroll:t.scrollX}},[s("table",[s("colgroup",[t._l(t.houses,function(t,e){return[s("col",{key:e,attrs:{width:"38.35"}})]})],2),t._v(" "),s("thead",[s("tr",[t._l(t.houses,function(e,n){return[s("th",{key:n},[s("div",[t._v(t._s(t.getRoom(Number(e.room))))])])]})],2)])])]),t._v(" "),s("div",{ref:"bodyScrollContainer",staticClass:"scroll-container",on:{scroll:t.scrollBody}},[s("table",[s("colgroup",[t._l(t.houses,function(t,e){return[s("col",{key:e,attrs:{width:"38.35"}})]})],2),t._v(" "),s("tbody",[t._l(t.floors,function(e,n){return[s("tr",{key:n},[t._l(e.data,function(e,n){return[s("td",{key:n},[s("div",[s("i",{class:t.getStatusClass(e.status)})])])]})],2)]})],2)])])])])]),t._v(" "),s("div",{staticClass:"table-legend"},[s("div",{staticClass:"legend-item"},[s("i",{staticClass:"room-rent-out"}),t._v(" "),s("span",[t._v("出租")])]),t._v(" "),s("div",{staticClass:"legend-item"},[s("i",{staticClass:"room-self-use"}),t._v(" "),s("span",[t._v("自用")])]),t._v(" "),s("div",{staticClass:"legend-item"},[s("i",{staticClass:"room-leave-unused"}),t._v(" "),s("span",[t._v("闲置")])])])]),t._v(" "),s("button",{staticClass:"error-correction-button",on:{click:t.openModal}},[t._v("纠错")])])],2),t._v(" "),s("Modal",{ref:"modalRef",attrs:{company:t.baseCompany,extendClass:"tip-modal"}})],1)},staticRenderFns:[]};var F=s("VU/8")(R,q,!1,function(t){s("kw8+")},null,null).exports,S={mixins:[p],name:"Company",data:function(){return{information:{}}},components:{Common:c},created:function(){this.doRequst()},methods:{doRequst:function(){var t=this;d.a.get(this.baseUrl+"company?"+this.getQueryString()).then(function(e){t.information=e.data.result[0]}).catch(function(t){console.log(t)})}}},B={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("Common",{attrs:{companyName:t.baseCompany}},[s("template",{slot:"communityBreadcrumns"},[s("div",{staticClass:"description"},[t._v(t._s(t.baseDescription))])]),t._v(" "),s("template",{slot:"fieldsList"},[s("div",{staticClass:"company-body"},[s("div",{staticClass:"title"},[t._v(t._s(t.information.company))]),t._v(" "),s("div",{staticClass:"list"},[s("div",{staticClass:"list-item"},[s("div",{staticClass:"left-head"},[t._v("企业联络人及联系方式")]),t._v(" "),s("div",{staticClass:"right-body"},[t._v(t._s(t.information.business_contact))])]),t._v(" "),s("div",{staticClass:"list-item"},[s("div",{staticClass:"left-head"},[t._v("网格协管员及联系电话")]),t._v(" "),s("div",{staticClass:"right-body"},[t._v(t._s(t.information.grid_coordinator))])]),t._v(" "),s("div",{staticClass:"list-item"},[s("div",{staticClass:"left-head"},[t._v("社区民警及联系电话")]),t._v(" "),s("div",{staticClass:"right-body"},[t._v(t._s(t.information.community_police))])])])]),t._v(" "),s("router-link",{staticClass:"error-correction-button",attrs:{to:{name:"Enterprise",query:{company:t.information.company}}}},[t._v("查看企业信息")])],1)],2)},staticRenderFns:[]};var L=s("VU/8")(S,B,!1,function(t){s("fwHX")},"data-v-0db0d223",null).exports,$={mixins:[p],name:"Company",data:function(){return{company:this.getQueryString().split("=")[1],information:{}}},components:{Common:c},created:function(){this.doRequst()},methods:{doRequst:function(){var t=this;d.a.get(this.baseUrl+"enterprise?"+this.getQueryString()).then(function(e){t.information=e.data.result[0]}).catch(function(t){console.log(t)})}}},H={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("Common",{attrs:{companyName:t.baseCompany}},[s("template",{slot:"communityBreadcrumns"},[s("div",{staticClass:"description"},[t._v(t._s(t.baseDescription))])]),t._v(" "),s("template",{slot:"fieldsList"},[s("div",{staticClass:"company-body"},[s("div",{staticClass:"head"},[s("div",{staticClass:"title"},[t._v(t._s(t.company))]),t._v(" "),s("button",[t._v("企业自查上报")])]),t._v(" "),s("div",{staticClass:"list"},[s("div",{staticClass:"list-item"},[s("div",{staticClass:"left-head"},[t._v("治安责任书")]),t._v(" "),s("div",{staticClass:"right-body"},[t._v(t._s(t.information.public_security_responsibility_letter||"无"))])]),t._v(" "),s("div",{staticClass:"list-item"},[s("div",{staticClass:"left-head"},[s("div",{staticClass:"title"},[t._v("花名册")]),t._v(" "),s("button",{staticClass:"up-button"},[t._v("更新")])]),t._v(" "),s("div",{staticClass:"right-body"},[t._v(t._s(t.information.roster||"无"))])]),t._v(" "),s("div",{staticClass:"list-item"},[s("div",{staticClass:"left-head"},[t._v("登记表")]),t._v(" "),s("div",{staticClass:"right-body"},[t._v(t._s(t.information.registration_form||"无"))])]),t._v(" "),s("div",{staticClass:"list-item"},[s("div",{staticClass:"left-head"},[t._v("单位调查表")]),t._v(" "),s("div",{staticClass:"right-body"},[t._v(t._s(t.information.work_unit_questionnaire||"无"))])]),t._v(" "),s("div",{staticClass:"list-item"},[s("div",{staticClass:"left-head"},[t._v("网格员工作痕迹")]),t._v(" "),s("div",{staticClass:"right-body"},[t._v(t._s(t.information.grid_work_traces||"无"))])])])])])],2)},staticRenderFns:[]};var E=s("VU/8")($,H,!1,function(t){s("FYvt")},"data-v-bce6cc34",null).exports;n.a.use(a.a),n.a.prototype.baseUrl=U.baseUrl,n.a.prototype.baseCompany=U.baseCompany,n.a.prototype.baseDescription=U.baseDescription;var Q=new a.a({routes:[{name:"Home",path:"/home",component:y},{name:"Building",path:"/building",component:k},{name:"Unit",path:"/unit",component:F},{name:"Company",path:"/company",component:L},{name:"Enterprise",path:"/enterprise",component:E}]});s("uMhA"),s("kXGG");n.a.config.productionTip=!1,new n.a({el:"#app",router:Q,components:{App:o},template:"<App/>"})},ffao:function(t,e){},fwHX:function(t,e){},iQ9i:function(t,e){},jh54:function(t,e){},kXGG:function(t,e){},"kw8+":function(t,e){},pH4d:function(t,e,s){t.exports=s.p+"static/img/image_logo.8711a2a.png"},uFWL:function(t,e){},uMhA:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.441a37383c53db9e328a.js.map