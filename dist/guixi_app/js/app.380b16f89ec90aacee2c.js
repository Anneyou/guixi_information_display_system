webpackJsonp([1],{HCV6:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("7+uW"),o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var s=n("VU/8")({name:"App"},o,!1,function(t){n("Zgez")},null,null).exports,a=n("/ocq"),r={name:"Common",props:{companyName:{type:String},fields:{type:Array}}},l={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"community-home"},[n("div",{staticClass:"community-home-head"},[t._m(0),t._v(" "),n("div",{staticClass:"head-right"},[n("div",{staticClass:"company-name"},[t._v(t._s(t.companyName))]),t._v(" "),t._t("communityBreadcrumns",[n("div",{staticClass:"community-breadcrumns"})])],2)]),t._v(" "),n("div",{staticClass:"community-home-body"},[t._t("fieldsList")],2)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"head-left"},[e("img",{staticClass:"home-logo",attrs:{src:n("pH4d"),alt:""}})])}]};var c=n("VU/8")(r,l,!1,function(t){n("y3h9")},null,null).exports,u=n("mtWM"),d=n.n(u),m=n("fZjL"),p=n.n(m);var f=function(t){var e=decodeURI(t).split("?")[1],n=e.split("&"),i={};if(0===e.trim().length)return i;for(var o=0;o<n.length;o++){var s=n[o].split("="),a=s[0],r=s[1];i[a]=r}return i},h={data:function(){return{routes:f(location.href),queryString:this.getQueryString()}},methods:{firstUpperCase:function(t){return t.replace(/\b(\w)(\w*)/g,function(t,e,n){return e.toUpperCase()+n.toLowerCase()})},getQueryString:function(){var t=f(location.href);return p()(t).map(function(e){return e+"="+t[e]}).join("&")}}},v={mixins:[h],name:"Home",data:function(){return{home:"",buildings:[]}},components:{Common:c},created:function(){this.doRequst()},methods:{doRequst:function(){var t=this;d.a.get(this.baseUrl+"home?"+this.getQueryString()).then(function(e){t.home=e.data.home,t.buildings=e.data.result}).catch(function(t){console.log(t)})}}},_={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Common",{attrs:{companyName:t.baseCompany,fields:t.buildings}},[n("template",{slot:"communityBreadcrumns"},[n("div",{staticClass:"community-name"},[t._v(t._s(t.home))])]),t._v(" "),n("template",{slot:"fieldsList"},[n("div",{staticClass:"home-building"},[t._l(t.buildings,function(e){return[n("router-link",{key:e.id,staticClass:"community-home-body-item",attrs:{to:{name:"Building",query:{home:t.home,building:e}}}},[n("i",{staticClass:"icon-icon_dong"}),t._v(" "),n("span",{staticClass:"building-name"},[t._v(t._s(e)+"栋")])])]})],2)])],2)},staticRenderFns:[]};var g=n("VU/8")(v,_,!1,function(t){n("mEdZ")},"data-v-4ce5ad24",null).exports,y={mixins:[h],name:"Building",components:{Common:c},data:function(){return{home:"",building:"",units:[]}},created:function(){this.doRequst()},methods:{doRequst:function(){var t=this;d.a.get(this.baseUrl+"building?"+this.getQueryString()).then(function(e){t.home=e.data.home,t.building=e.data.building,t.units=e.data.result}).catch(function(t){console.log(t)})}}},C={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Common",{attrs:{companyName:t.baseCompany,fields:t.units}},[n("template",{slot:"communityBreadcrumns"},[n("div",{staticClass:"community-breadcrumns"},[n("router-link",{attrs:{to:{name:"Home",query:{home:t.routes.home}}}},[t._v(t._s(t.routes.home))]),t._v(" >\n      "),n("span",[t._v(t._s(t.routes.building)+"栋")])],1)]),t._v(" "),n("template",{slot:"fieldsList"},[n("div",{staticClass:"building-unit"},[t._l(t.units,function(e,i){return[n("router-link",{key:i,staticClass:"community-home-body-item",attrs:{to:{name:"Unit",query:{home:t.home,building:t.building,unit:e}}}},[n("i",{staticClass:"icon-icon_danyuan"}),t._v(" "),n("span",{staticClass:"building-name"},[t._v(t._s(e)+"单元")])])]})],2)])],2)},staticRenderFns:[]};var b=n("VU/8")(y,C,!1,function(t){n("d7tT")},null,null).exports,S={props:{company:{type:String}},data:function(){return{opened:!1}},computed:{statusClass:function(){return{open:this.opened}}},methods:{close:function(){this.opened=!1},open:function(){this.opened=!0}}},U={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modal",class:t.statusClass,on:{click:t.close}},[t._t("header"),t._v(" "),t._t("content",[n("div",{staticClass:"content",on:{click:function(t){t.stopPropagation()}}},[n("p",[t._v("请关注微信公众号【"+t._s(t.company)+"】")]),t._v(" "),n("p",[t._v("以便接收纠错反馈。")])])]),t._v(" "),t._t("footer")],2)},staticRenderFns:[]};var x=this,k={mixins:[h],components:{Common:c,Modal:n("VU/8")(S,U,!1,function(t){n("s+J7")},null,null).exports},data:function(){return{home:"",building:"",unit:"",floors:[],houses:[],redirectUrl:"",ignoreScrollEvent:!1}},created:function(){this.doRequest()},methods:{doRequest:function(){var t=this;d.a.get(this.baseUrl+"unit?"+this.getQueryString()).then(function(e){t.home=e.data.home,t.building=e.data.building,t.unit=e.data.unit,t.floors=e.data.floors,t.houses=e.data.floors[e.data.floors.length-1].data,t.redirectUrl=e.data.redirectUrl})},getStatusClass:function(t){return{"room-rent-out":"出租"===t,"room-leave-unused":"闲置"===t,"room-self-use":"自用"===t}},getQuery:function(t,e){var n={};return n[t]=e,n},getRoom:function(t){return t<10?"0"+t:t},scrollFixed:function(t){this.ignoreScrollEvent?this.ignoreScrollEvent=!1:(this.updateScrollTop(this.$refs.fixedScrollContainer,this.$refs.bodyScrollContainer),this.syncScrollTop(this.$refs.fixedScrollContainer,this.$refs.bodyScrollContainer))},scrollX:function(t){this.$refs.bodyScrollContainer.scrollLeft=this.refs.bodyFixedHeader.scrollLeft},scrollBody:function(t){this.ignoreScrollEvent?this.ignoreScrollEvent=!1:(this.updateScrollTop(this.$refs.bodyScrollContainer,this.$refs.fixedScrollContainer),this.syncScrollTop(this.$refs.fixedScrollContainer,this.$refs.bodyScrollContainer),this.$refs.bodyFixedHeader.scrollLeft=this.$refs.bodyScrollContainer.scrollLeft)},syncScrollTop:n("rNNc").a.debounce(function(t,e){x.updateScrollTop(t,e)},100),updateScrollTop:function(t,e){this.ignoreScrollEvent=!0,e.scrollTop=t.scrollTop},openModal:function(){var t=this;this.$refs.modalRef.open(),setTimeout(function(){location.href=t.redirectUrl},3e3)}}},R={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Common",{attrs:{companyName:t.baseCompany}},[n("template",{slot:"communityBreadcrumns"},[n("div",{staticClass:"community-breadcrumns"},[n("router-link",{attrs:{to:{name:"Home",query:{home:t.routes.home}}}},[t._v(t._s(t.routes.home))]),t._v(" >\n        "),n("router-link",{attrs:{to:{name:"Building",query:{home:t.routes.home,building:t.routes.building}}}},[t._v(t._s(t.routes.building)+"栋")]),t._v(" >\n        "),n("span",[t._v(t._s(t.routes.unit)+"单元")])],1)]),t._v(" "),n("template",{slot:"fieldsList"},[n("div",{staticClass:"room-table"},[n("div",{staticClass:"datable-table-container"},[n("div",{staticClass:"fixed-table"},[n("div",{ref:"fixedScrollContainer",staticClass:"scroll-container",on:{scroll:t.scrollFixed}},[n("table",[n("colgroup",[n("col",{attrs:{width:"10"}})]),t._v(" "),n("tbody",[t._l(t.floors,function(e,i){return[n("tr",{key:i},[n("td",{staticClass:"column-first"},[t._v(t._s(e.floor)+"楼")])])]})],2)])])]),t._v(" "),n("div",{staticClass:"body-table"},[n("div",{staticClass:"body-table-wrapper"},[n("div",{ref:"bodyScrollContainer",staticClass:"scroll-container",on:{scroll:t.scrollBody}},[n("table",[n("colgroup",[n("col",{attrs:{width:"10"}}),t._v(" "),t._l(t.houses,function(t,e){return[n("col",{key:e,attrs:{width:"30"}})]})],2),t._v(" "),n("tbody",[t._l(t.floors,function(e,i){return[n("tr",{key:i},[n("td",[n("span",[t._v(t._s(e.floor)+"楼")])]),t._v(" "),t._l(e.data,function(e,i){return[n("td",{key:i},[n("span",[n("span",[t._v(t._s(e.room)+"号")]),t._v(" "),n("i",{class:t.getStatusClass(e.status)})])])]})],2)]})],2)])])])])]),t._v(" "),n("div",{staticClass:"table-legend"},[n("div",{staticClass:"legend-item"},[n("i",{staticClass:"room-rent-out"}),t._v(" "),n("span",[t._v("出租")])]),t._v(" "),n("div",{staticClass:"legend-item"},[n("i",{staticClass:"room-self-use"}),t._v(" "),n("span",[t._v("自用")])]),t._v(" "),n("div",{staticClass:"legend-item"},[n("i",{staticClass:"room-leave-unused"}),t._v(" "),n("span",[t._v("闲置")])])])]),t._v(" "),n("button",{staticClass:"error-correction-button",on:{click:t.openModal}},[t._v("纠错")])])],2),t._v(" "),n("Modal",{ref:"modalRef",attrs:{company:"智慧桂溪",extendClass:"tip-modal"}})],1)},staticRenderFns:[]};var q=n("VU/8")(k,R,!1,function(t){n("YcmW")},null,null).exports,F={mixins:[h],name:"Company",data:function(){return{information:{},doRequestQueryString:"company="+this.getQueryValue(),authorize:!1}},components:{Common:c},created:function(){this.athorizedFunc(),this.doRequst()},computed:{showButton:function(){return"true"===this.authorize}},methods:{doRequst:function(){var t=this;d.a.get(this.baseUrl+"company?"+this.doRequestQueryString).then(function(e){t.information=e.data.result[0]||{},localStorage.setItem("company",t.getQueryValue()),localStorage.setItem("company_url",location.href),t.authorize=t.parseStringToObject(t.getQueryString()).authorize,t.authorize||(location.href=e.data.authorizedRedirectUrl+"/oauth/authorize?client_id="+e.data.clientId+"&response_type=code&key=value&redirect_uri="+location.origin+"/guixi_app/authorized")}).catch(function(t){console.log(t)})},athorizedFunc:function(){},getRequestQueryString:function(){var t=this.parseStringToObject(this.getQueryString());return t.code&&delete t.code,p()(t).map(function(e){return e+"="+t[e]}).join("=")},parseStringToObject:function(t){for(var e={},n=t.split("&"),i=0,o=n.length;i<o;i++){var s=n[i].split("=");e[s[0]]=s[1]}return e},getQueryValue:function(){return this.parseStringToObject(this.getRequestQueryString()).company}}},T={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Common",{attrs:{companyName:t.baseCompany}},[n("template",{slot:"communityBreadcrumns"},[n("div",{staticClass:"description"},[t._v(t._s(t.baseDescription))])]),t._v(" "),n("template",{slot:"fieldsList"},[n("div",{staticClass:"company-body"},[n("div",{staticClass:"title"},[t._v(t._s(t.information.company))]),t._v(" "),n("div",{staticClass:"list"},[n("div",{staticClass:"list-item"},[n("div",{staticClass:"left-head"},[t._v("企业联络人及联系方式")]),t._v(" "),n("div",{staticClass:"right-body"},[t._v(t._s(t.information.business_contact))])]),t._v(" "),n("div",{staticClass:"list-item"},[n("div",{staticClass:"left-head"},[t._v("网格协管员及联系电话")]),t._v(" "),n("div",{staticClass:"right-body"},[t._v(t._s(t.information.grid_coordinator))])]),t._v(" "),n("div",{staticClass:"list-item"},[n("div",{staticClass:"left-head"},[t._v("社区民警及联系电话")]),t._v(" "),n("div",{staticClass:"right-body"},[t._v(t._s(t.information.community_police))])])])]),t._v(" "),t.showButton?n("router-link",{staticClass:"error-correction-button",attrs:{to:{name:"Enterprise",query:{company:t.information.company}}}},[t._v("查看企业信息")]):t._e()],1)],2)},staticRenderFns:[]};var E=n("VU/8")(F,T,!1,function(t){n("Tlqx")},"data-v-485a101c",null).exports,$={props:{fileName:{type:String},responseUrl:{type:String}},data:function(){return{file:{icon:this.getIcon()}}},methods:{getIcon:function(){var t="";switch(this.fileName.split(".")[1]){case"xlsx":t="icon-Icon_excel";break;case"pdf":t="icon-Icon_pdf";break;case"jpg":case"png":t="icon-icon_image";break;case"word":t="icon-Icon_word";break;default:t="icon-Icon_file"}return t}}},z={render:function(){var t=this.$createElement,e=this._self._c||t;return e("a",{attrs:{href:this.responseUrl}},[e("i",{staticClass:"file-icon",class:this.file.icon})])},staticRenderFns:[]};var Q={mixins:[h],name:"Company",data:function(){return{company:this.getQueryString().split("=")[1],information:{},responseUrl:"",companyQueryUrl:"",updateUrl:""}},components:{Common:c,File:n("VU/8")($,z,!1,function(t){n("f7EJ")},null,null).exports},created:function(){this.doRequst()},methods:{doRequst:function(){var t=this;d.a.get(this.baseUrl+"enterprise?"+this.getQueryString()).then(function(e){t.responseUrl=e.data.response_url,t.companyQueryUrl=e.data.query_url,t.updateUrl=e.data.update_url,e.data.result[0]&&(t.information=e.data.result[0])}).catch(function(t){console.log(t)})},goToUrl:function(t){location.href=t}}},w={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Common",{attrs:{companyName:t.baseCompany}},[n("template",{slot:"communityBreadcrumns"},[n("div",{staticClass:"description"},[t._v(t._s(t.baseDescription))])]),t._v(" "),n("template",{slot:"fieldsList"},[n("div",{staticClass:"company-body"},[n("div",{staticClass:"head"},[n("div",{staticClass:"title"},[t._v(t._s(t.company))]),t._v(" "),n("button",{on:{click:function(e){return t.goToUrl(t.companyQueryUrl)}}},[t._v("企业自查上报")])]),t._v(" "),n("div",{staticClass:"list"},[n("div",{staticClass:"list-item"},[n("div",{staticClass:"left-head"},[t._v("治安责任书")]),t._v(" "),n("div",{staticClass:"right-body"},[t.information.public_security_responsibility_letter?n("File",{attrs:{fileName:t.information.public_security_responsibility_letter,responseUrl:t.responseUrl}}):t._e()],1)]),t._v(" "),n("div",{staticClass:"list-item"},[n("div",{staticClass:"left-head"},[n("div",{staticClass:"title"},[t._v("花名册")]),t._v(" "),n("button",{staticClass:"up-button",on:{click:function(e){return t.goToUrl(t.updateUrl)}}},[t._v("更新")])]),t._v(" "),n("div",{staticClass:"right-body"},[t.information.roster?n("File",{attrs:{fileName:t.information.roster,responseUrl:t.responseUrl}}):t._e()],1)]),t._v(" "),n("div",{staticClass:"list-item"},[n("div",{staticClass:"left-head"},[t._v("登记表")]),t._v(" "),n("div",{staticClass:"right-body"},[t.information.registration_form?n("File",{attrs:{fileName:t.information.registration_form,responseUrl:t.responseUrl}}):t._e()],1)]),t._v(" "),n("div",{staticClass:"list-item"},[n("div",{staticClass:"left-head"},[t._v("单位调查表")]),t._v(" "),n("div",{staticClass:"right-body"},[t.information.work_unit_questionnaire?n("File",{attrs:{fileName:t.information.work_unit_questionnaire,responseUrl:t.responseUrl}}):t._e()],1)]),t._v(" "),n("div",{staticClass:"list-item"},[n("div",{staticClass:"left-head"},[t._v("网格员工作痕迹")]),t._v(" "),n("div",{staticClass:"right-body"},[t.information.grid_work_traces?n("File",{attrs:{fileName:t.information.grid_work_traces,responseUrl:t.responseUrl}}):t._e()],1)])])])])],2)},staticRenderFns:[]};var N=n("VU/8")(Q,w,!1,function(t){n("z27o")},"data-v-173ac606",null).exports,B={mixins:[h],name:"Athorized",data:function(){return{url:localStorage.getItem("company"),code:""}},methods:{goToUrlFunc:function(){var t=this;this.code=this.parseStringToObject(this.getQueryString()).code,d.a.get(this.baseUrl+"authorized?code="+this.code).then(function(e){var n=t.getAuthorizeFunc(e.data);location.href=localStorage.getItem("company_url")+"&authorize="+n})},parseStringToObject:function(t){for(var e={},n=t.split("&"),i=0,o=n.length;i<o;i++){var s=n[i].split("=");e[s[0]]=s[1]}return e},getAuthorizeFunc:function(t){var e=[];t.map(function(t){e.push(t.name)});var n=localStorage.getItem("company");return Boolean(e.indexOf(n)>-1)}}},V={render:function(){var t=this.$createElement;return(this._self._c||t)("button",{staticClass:"authorized-btn",on:{click:this.goToUrlFunc}},[this._v("确认授权")])},staticRenderFns:[]};var I=n("VU/8")(B,V,!1,function(t){n("HCV6")},"data-v-2adfce19",null).exports,H={baseUrl:location.origin+"/guixi_app/server/",baseCompany:"成都高新区桂溪街道办事处",baseDescription:"人口服务管理社会化信息采集点"};i.a.use(a.a),i.a.prototype.baseUrl=H.baseUrl,i.a.prototype.baseCompany=H.baseCompany,i.a.prototype.baseDescription=H.baseDescription;var L=new a.a({mode:"history",routes:[{name:"Home",path:"/guixi_app/home",component:g},{name:"Building",path:"/guixi_app/building",component:b},{name:"Unit",path:"/guixi_app/unit",component:q},{name:"Company",path:"/guixi_app/company",component:E},{name:"Authorized",path:"/guixi_app/authorized",component:I},{name:"Enterprise",path:"/guixi_app/enterprise",component:N}]});n("uMhA"),n("kXGG");i.a.config.productionTip=!1,new i.a({el:"#app",router:L,components:{App:s},template:"<App/>"})},Tlqx:function(t,e){},YcmW:function(t,e){},Zgez:function(t,e){},d7tT:function(t,e){},f7EJ:function(t,e){},kXGG:function(t,e){},mEdZ:function(t,e){},pH4d:function(t,e,n){t.exports=n.p+"guixi_app/img/image_logo.8711a2a.png"},"s+J7":function(t,e){},uMhA:function(t,e){},y3h9:function(t,e){},z27o:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.380b16f89ec90aacee2c.js.map