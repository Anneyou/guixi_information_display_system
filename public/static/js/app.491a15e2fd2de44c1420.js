webpackJsonp([1],{"10MT":function(t,e){},FdTV:function(t,e){},Ipoo:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("7+uW"),s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var o=i("VU/8")({name:"App"},s,!1,function(t){i("ffao")},null,null).exports,a=i("/ocq"),r={name:"Common",props:{companyName:{type:String},fields:{type:Array}}},l={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"community-home"},[i("div",{staticClass:"community-home-head"},[t._m(0),t._v(" "),i("div",{staticClass:"head-right"},[i("div",{staticClass:"company-name"},[t._v(t._s(t.companyName))]),t._v(" "),t._t("communityBreadcrumns",[i("div",{staticClass:"community-breadcrumns"})])],2)]),t._v(" "),i("div",{staticClass:"community-home-body"},[t._t("fieldsList")],2)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"head-left"},[e("img",{staticClass:"home-logo",attrs:{src:i("pH4d"),alt:""}})])}]};var c=i("VU/8")(r,l,!1,function(t){i("jh54")},null,null).exports,u=i("mtWM"),d=i.n(u),m=i("fZjL"),p=i.n(m);var f=function(t){var e=decodeURI(t).split("?")[1],i=e.split("&"),n={};if(0===e.trim().length)return n;for(var s=0;s<i.length;s++){var o=i[s].split("="),a=o[0],r=o[1];n[a]=r}return n},v={data:function(){return{routes:f(location.href),queryString:this.getQueryString()}},methods:{firstUpperCase:function(t){return t.replace(/\b(\w)(\w*)/g,function(t,e,i){return e.toUpperCase()+i.toLowerCase()})},getQueryString:function(){var t=f(location.href);return p()(t).map(function(e){return e+"="+t[e]}).join("&")}}};var h=i("VU/8")(v,null,!1,function(t){i("uFWL")},null,null).exports,_={mixins:[h],name:"Home",data:function(){return{home:"",buildings:[]}},components:{Common:c},created:function(){this.doRequst()},methods:{doRequst:function(){var t=this;d.a.get(this.baseUrl+"home?"+this.getQueryString()).then(function(e){t.home=e.data.home,t.buildings=e.data.result}).catch(function(t){console.log(t)})}}},g={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("Common",{attrs:{companyName:t.baseCompany,fields:t.buildings}},[i("template",{slot:"communityBreadcrumns"},[i("div",{staticClass:"community-name"},[t._v(t._s(t.home))])]),t._v(" "),i("template",{slot:"fieldsList"},[i("div",{staticClass:"home-building"},[t._l(t.buildings,function(e){return[i("router-link",{key:e.id,staticClass:"community-home-body-item",attrs:{to:{name:"Building",query:{home:t.home,building:e}}}},[i("i",{staticClass:"icon-icon_dong"}),t._v(" "),i("span",{staticClass:"building-name"},[t._v(t._s(e)+"栋")])])]})],2)])],2)},staticRenderFns:[]};var y=i("VU/8")(_,g,!1,function(t){i("Ipoo")},"data-v-d1032bb6",null).exports,b={mixins:[h],name:"Building",components:{Common:c},data:function(){return{home:"",building:"",units:[]}},created:function(){this.doRequst()},methods:{doRequst:function(){var t=this;d.a.get(this.baseUrl+"building?"+this.getQueryString()).then(function(e){t.home=e.data.home,t.building=e.data.building,t.units=e.data.result}).catch(function(t){console.log(t)})}}},C={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("Common",{attrs:{companyName:t.baseCompany,fields:t.units}},[i("template",{slot:"communityBreadcrumns"},[i("div",{staticClass:"community-breadcrumns"},[i("router-link",{attrs:{to:{name:"Home",query:{home:t.routes.home}}}},[t._v(t._s(t.routes.home))]),t._v(" >\n      "),i("span",[t._v(t._s(t.routes.building)+"栋")])],1)]),t._v(" "),i("template",{slot:"fieldsList"},[i("div",{staticClass:"building-unit"},[t._l(t.units,function(e,n){return[i("router-link",{key:n,staticClass:"community-home-body-item",attrs:{to:{name:"Unit",query:{home:t.home,building:t.building,unit:e}}}},[i("i",{staticClass:"icon-icon_danyuan"}),t._v(" "),i("span",{staticClass:"building-name"},[t._v(t._s(e)+"单元")])])]})],2)])],2)},staticRenderFns:[]};var U=i("VU/8")(b,C,!1,function(t){i("FdTV")},null,null).exports,x={props:{company:{type:String}},data:function(){return{opened:!1}},computed:{statusClass:function(){return{open:this.opened}}},methods:{close:function(){this.opened=!1},open:function(){this.opened=!0}}},S={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"modal",class:t.statusClass,on:{click:t.close}},[t._t("header"),t._v(" "),t._t("content",[i("div",{staticClass:"content",on:{click:function(t){t.stopPropagation()}}},[i("p",[t._v("请关注公众号【"+t._s(t.company)+"】")]),t._v(" "),i("p",[t._v("为了后期接受到纠错结果消息")]),t._v(" "),i("p",[t._v("请不要取关公众号")])])]),t._v(" "),t._t("footer")],2)},staticRenderFns:[]};var k={mixins:[h],components:{Common:c,Modal:i("VU/8")(x,S,!1,function(t){i("iQ9i")},null,null).exports},data:function(){return{home:"",building:"",unit:"",floors:[],houses:[],redirectUrl:""}},created:function(){this.doRequest()},methods:{doRequest:function(){var t=this;d.a.get(this.baseUrl+"unit?"+this.getQueryString()).then(function(e){t.home=e.data.home,t.building=e.data.building,t.unit=e.data.unit,t.floors=e.data.floors,t.houses=e.data.floors[e.data.floors.length-1].data,t.redirectUrl=e.data.redirectUrl})},getStatusClass:function(t){return{"room-rent-out":"出租"===t,"room-leave-unused":"闲置"===t,"room-self-use":"自用"===t}},getQuery:function(t,e){var i={};return i[t]=e,i},getRoom:function(t){return t<10?"0"+t:t},scrollFixed:function(t){var e=t.target.scrollTop;this.$refs.bodyScrollContainer.scrollTop=e},scrollX:function(t){var e=t.target.scrollLeft;this.$refs.bodyScrollContainer.scrollLeft=e},scrollBody:function(t){var e=t.target.scrollTop,i=t.target.scrollLeft;this.$refs.fixedScrollContainer.scrollTop=e,this.$refs.bodyFixedHeader.scrollLeft=i},openModal:function(){var t=this;this.$refs.modalRef.open(),setTimeout(function(){location.href=t.redirectUrl},3e3)}}},F={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("Common",{attrs:{companyName:t.baseCompany}},[i("template",{slot:"communityBreadcrumns"},[i("div",{staticClass:"community-breadcrumns"},[i("router-link",{attrs:{to:{name:"Home",query:{home:t.routes.home}}}},[t._v(t._s(t.routes.home))]),t._v(" >\n        "),i("router-link",{attrs:{to:{name:"Building",query:{home:t.routes.home,building:t.routes.building}}}},[t._v(t._s(t.routes.building)+"栋")]),t._v(" >\n        "),i("span",[t._v(t._s(t.routes.unit)+"单元")])],1)]),t._v(" "),i("template",{slot:"fieldsList"},[i("div",{staticClass:"room-table"},[i("div",{staticClass:"datable-table-container"},[i("div",{staticClass:"fixed-table"},[i("div",{staticClass:"fixed-table-header"},[i("table",{staticClass:"normal-table"},[i("colgroup",[i("col",{attrs:{width:"64.9"}})]),t._v(" "),i("thead",[i("tr",[i("th")])])])]),t._v(" "),i("div",{ref:"fixedScrollContainer",staticClass:"scroll-container",on:{scroll:t.scrollFixed}},[i("table",[i("colgroup",[i("col",{attrs:{width:"64.9"}})]),t._v(" "),i("tbody",[t._l(t.floors,function(e,n){return[i("tr",{key:n},[i("td",{staticClass:"column-first"},[t._v(t._s(e.floor)+"楼")])])]})],2)])])]),t._v(" "),i("div",{staticClass:"body-table"},[i("div",{staticClass:"body-table-wrapper"},[i("div",{ref:"bodyFixedHeader",staticClass:"fixed-table-header",on:{scroll:t.scrollX}},[i("table",[i("colgroup",[t._l(t.houses,function(t,e){return[i("col",{key:e,attrs:{width:"38.35"}})]})],2),t._v(" "),i("thead",[i("tr",[t._l(t.houses,function(e,n){return[i("th",{key:n},[i("div",[t._v(t._s(t.getRoom(Number(e.room))))])])]})],2)])])]),t._v(" "),i("div",{ref:"bodyScrollContainer",staticClass:"scroll-container",on:{scroll:t.scrollBody}},[i("table",[i("colgroup",[t._l(t.houses,function(t,e){return[i("col",{key:e,attrs:{width:"38.35"}})]})],2),t._v(" "),i("tbody",[t._l(t.floors,function(e,n){return[i("tr",{key:n},[t._l(e.data,function(e,n){return[i("td",{key:n},[i("div",[i("i",{class:t.getStatusClass(e.status)})])])]})],2)]})],2)])])])])]),t._v(" "),i("div",{staticClass:"table-legend"},[i("div",{staticClass:"legend-item"},[i("i",{staticClass:"room-rent-out"}),t._v(" "),i("span",[t._v("出租")])]),t._v(" "),i("div",{staticClass:"legend-item"},[i("i",{staticClass:"room-self-use"}),t._v(" "),i("span",[t._v("自用")])]),t._v(" "),i("div",{staticClass:"legend-item"},[i("i",{staticClass:"room-leave-unused"}),t._v(" "),i("span",[t._v("闲置")])])])]),t._v(" "),i("button",{staticClass:"error-correction-button",on:{click:t.openModal}},[t._v("纠错")])])],2),t._v(" "),i("Modal",{ref:"modalRef",attrs:{company:t.baseCompany,extendClass:"tip-modal"}})],1)},staticRenderFns:[]};var R=i("VU/8")(k,F,!1,function(t){i("cKZF")},null,null).exports,q={mixins:[h],name:"Company",data:function(){return{information:{},doRequestQueryString:"company="+this.getQueryValue(),authorize:!1}},components:{Common:c},created:function(){this.athorizedFunc(),this.doRequst()},computed:{showButton:function(){return"true"===this.authorize}},methods:{doRequst:function(){var t=this;d.a.get(this.baseUrl+"company?"+this.doRequestQueryString).then(function(e){t.information=e.data.result[0]||{},localStorage.setItem("company",t.getQueryValue()),document.cookie="company="+location.href,t.authorize=t.parseStringToObject(t.getQueryString()).authorize,t.authorize||(location.href=e.data.authorizedRedirectUrl+"/oauth/authorize?client_id="+e.data.clientId+"&response_type=code&key=value&redirect_uri="+location.origin+"/#/guixi_app/authorized")}).catch(function(t){console.log(t)})},athorizedFunc:function(){},getRequestQueryString:function(){var t=this.parseStringToObject(this.getQueryString());return t.code&&delete t.code,p()(t).map(function(e){return e+"="+t[e]}).join("=")},parseStringToObject:function(t){for(var e={},i=t.split("&"),n=0,s=i.length;n<s;n++){var o=i[n].split("=");e[o[0]]=o[1]}return e},getQueryValue:function(){return this.parseStringToObject(this.getRequestQueryString()).company}}},Q={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("Common",{attrs:{companyName:t.baseCompany}},[i("template",{slot:"communityBreadcrumns"},[i("div",{staticClass:"description"},[t._v(t._s(t.baseDescription))])]),t._v(" "),i("template",{slot:"fieldsList"},[i("div",{staticClass:"company-body"},[i("div",{staticClass:"title"},[t._v(t._s(t.information.company))]),t._v(" "),i("div",{staticClass:"list"},[i("div",{staticClass:"list-item"},[i("div",{staticClass:"left-head"},[t._v("企业联络人及联系方式")]),t._v(" "),i("div",{staticClass:"right-body"},[t._v(t._s(t.information.business_contact))])]),t._v(" "),i("div",{staticClass:"list-item"},[i("div",{staticClass:"left-head"},[t._v("网格协管员及联系电话")]),t._v(" "),i("div",{staticClass:"right-body"},[t._v(t._s(t.information.grid_coordinator))])]),t._v(" "),i("div",{staticClass:"list-item"},[i("div",{staticClass:"left-head"},[t._v("社区民警及联系电话")]),t._v(" "),i("div",{staticClass:"right-body"},[t._v(t._s(t.information.community_police))])])])]),t._v(" "),t.showButton?i("router-link",{staticClass:"error-correction-button",attrs:{to:{name:"Enterprise",query:{company:t.information.company}}}},[t._v("查看企业信息")]):t._e()],1)],2)},staticRenderFns:[]};var w=i("VU/8")(q,Q,!1,function(t){i("xQtm")},"data-v-042c70dc",null).exports,T={props:{fileName:{type:String},responseUrl:{type:String}},data:function(){return{file:{icon:this.getIcon()}}},methods:{getIcon:function(){var t="";switch(this.fileName.split(".")[1]){case"xlsx":t="icon-Icon_excel";break;case"pdf":t="icon-Icon_pdf";break;case"jpg":case"png":t="icon-icon_image";break;case"word":t="icon-Icon_word";break;default:t="icon-Icon_file"}return t}}},z={render:function(){var t=this.$createElement,e=this._self._c||t;return e("a",{attrs:{href:this.responseUrl}},[e("i",{staticClass:"file-icon",class:this.file.icon})])},staticRenderFns:[]};var N={mixins:[h],name:"Company",data:function(){return{company:this.getQueryString().split("=")[1],information:{},responseUrl:""}},components:{Common:c,File:i("VU/8")(T,z,!1,function(t){i("f7EJ")},null,null).exports},created:function(){this.doRequst()},methods:{doRequst:function(){var t=this;d.a.get(this.baseUrl+"enterprise?"+this.getQueryString()).then(function(e){t.responseUrl=e.data.response_url,e.data.result[0]&&(t.information=e.data.result[0])}).catch(function(t){console.log(t)})}}},V={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("Common",{attrs:{companyName:t.baseCompany}},[i("template",{slot:"communityBreadcrumns"},[i("div",{staticClass:"description"},[t._v(t._s(t.baseDescription))])]),t._v(" "),i("template",{slot:"fieldsList"},[i("div",{staticClass:"company-body"},[i("div",{staticClass:"head"},[i("div",{staticClass:"title"},[t._v(t._s(t.company))]),t._v(" "),i("button",[t._v("企业自查上报")])]),t._v(" "),i("div",{staticClass:"list"},[i("div",{staticClass:"list-item"},[i("div",{staticClass:"left-head"},[t._v("治安责任书")]),t._v(" "),i("div",{staticClass:"right-body"},[t.information.public_security_responsibility_letter?i("File",{attrs:{fileName:t.information.public_security_responsibility_letter,responseUrl:t.responseUrl}}):t._e()],1)]),t._v(" "),i("div",{staticClass:"list-item"},[i("div",{staticClass:"left-head"},[i("div",{staticClass:"title"},[t._v("花名册")]),t._v(" "),i("button",{staticClass:"up-button"},[t._v("更新")])]),t._v(" "),i("div",{staticClass:"right-body"},[t.information.roster?i("File",{attrs:{fileName:t.information.roster,responseUrl:t.responseUrl}}):t._e()],1)]),t._v(" "),i("div",{staticClass:"list-item"},[i("div",{staticClass:"left-head"},[t._v("登记表")]),t._v(" "),i("div",{staticClass:"right-body"},[t.information.registration_form?i("File",{attrs:{fileName:t.information.registration_form,responseUrl:t.responseUrl}}):t._e()],1)]),t._v(" "),i("div",{staticClass:"list-item"},[i("div",{staticClass:"left-head"},[t._v("单位调查表")]),t._v(" "),i("div",{staticClass:"right-body"},[t.information.work_unit_questionnaire?i("File",{attrs:{fileName:t.information.work_unit_questionnaire,responseUrl:t.responseUrl}}):t._e()],1)]),t._v(" "),i("div",{staticClass:"list-item"},[i("div",{staticClass:"left-head"},[t._v("网格员工作痕迹")]),t._v(" "),i("div",{staticClass:"right-body"},[t.information.grid_work_traces?i("File",{attrs:{fileName:t.information.grid_work_traces,responseUrl:t.responseUrl}}):t._e()],1)])])])])],2)},staticRenderFns:[]};var $=i("VU/8")(N,V,!1,function(t){i("10MT")},"data-v-0059a846",null).exports,B={mixins:[h],name:"Athorized",data:function(){return{url:localStorage.getItem("company"),code:""}},methods:{goToUrlFunc:function(){var t=this;this.code=this.parseStringToObject(this.getQueryString()).code,d.a.get(this.baseUrl+"authorized?code="+this.code).then(function(e){var i=t.getAuthorizeFunc(e.data);location.href=document.cookie.slice(8)+"&authorize="+i})},parseStringToObject:function(t){for(var e={},i=t.split("&"),n=0,s=i.length;n<s;n++){var o=i[n].split("=");e[o[0]]=o[1]}return e},getAuthorizeFunc:function(t){var e=[];t.map(function(t){e.push(t.name)});var i=localStorage.getItem("company");return Boolean(e.indexOf(i)>-1)}}},E={render:function(){var t=this.$createElement;return(this._self._c||t)("button",{staticClass:"authorized-btn",on:{click:this.goToUrlFunc}},[this._v("确认授权")])},staticRenderFns:[]};var L=i("VU/8")(B,E,!1,function(t){i("TOgX")},"data-v-31d6f936",null).exports,j={baseUrl:"http://localhost:3001/",baseCompany:"成都高新区桂溪街道办事处",baseDescription:"人口服务管理社会化信息采集点"};n.a.use(a.a),n.a.prototype.baseUrl=j.baseUrl,n.a.prototype.baseCompany=j.baseCompany,n.a.prototype.baseDescription=j.baseDescription;var I=new a.a({routes:[{name:"Home",path:"/guixi_app/home",component:y},{name:"Building",path:"/guixi_app/building",component:U},{name:"Unit",path:"/guixi_app/unit",component:R},{name:"Company",path:"/guixi_app/company",component:w},{name:"Authorized",path:"/guixi_app/authorized",component:L},{name:"Enterprise",path:"/guixi_app/enterprise",component:$}]});i("uMhA"),i("kXGG");n.a.config.productionTip=!1,new n.a({el:"#app",router:I,components:{App:o},template:"<App/>"})},TOgX:function(t,e){},cKZF:function(t,e){},f7EJ:function(t,e){},ffao:function(t,e){},iQ9i:function(t,e){},jh54:function(t,e){},kXGG:function(t,e){},pH4d:function(t,e,i){t.exports=i.p+"static/img/image_logo.8711a2a.png"},uFWL:function(t,e){},uMhA:function(t,e){},xQtm:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.491a15e2fd2de44c1420.js.map