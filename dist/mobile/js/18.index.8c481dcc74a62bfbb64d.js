(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{147:function(a,s,t){(a.exports=t(3)(!1)).push([a.i,'.address[data-v-72020ccb]{height:100vh;background:#f5f5f5}.address .content[data-v-72020ccb]{height:calc(100vh - 170rem/75);overflow-y:auto}.address .content ul[data-v-72020ccb]{width:100%}.address .content ul li+li[data-v-72020ccb]{border-top:.04rem solid #eee}.address .content ul li[data-v-72020ccb]{height:auto;background:#fff}.address .content ul li .address-info[data-v-72020ccb]{margin:0 3vw;padding:.13333rem 0}.address .content ul li .address-info .address-name[data-v-72020ccb]{font-size:16px}[data-dpr="2"] .address .content ul li .address-info .address-name[data-v-72020ccb]{font-size:32px}[data-dpr="3"] .address .content ul li .address-info .address-name[data-v-72020ccb]{font-size:48px}.address .content ul li .address-info .address-name .default-address[data-v-72020ccb]{color:#b84747}.address .content ul li .address-info .address-name .address-detail[data-v-72020ccb]{text-align:justify}.address .content ul li .address-info .address-name .receiver-phone[data-v-72020ccb]{color:#999;font-size:12px;margin:.26667rem 0}[data-dpr="2"] .address .content ul li .address-info .address-name .receiver-phone[data-v-72020ccb]{font-size:24px}[data-dpr="3"] .address .content ul li .address-info .address-name .receiver-phone[data-v-72020ccb]{font-size:36px}.address .content ul li .address-info .option[data-v-72020ccb]{color:#666;font-size:14px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center}[data-dpr="2"] .address .content ul li .address-info .option[data-v-72020ccb]{font-size:28px}[data-dpr="3"] .address .content ul li .address-info .option[data-v-72020ccb]{font-size:42px}.address .content ul li .address-info .option .edit-del[data-v-72020ccb]{width:3.73333rem;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.address .btn-add-address[data-v-72020ccb],.address .content ul li .address-info .option .edit-del[data-v-72020ccb]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.address .btn-add-address[data-v-72020ccb]{height:1.2rem;background:#c83c3b;color:#fff;font-size:16px;text-align:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}[data-dpr="2"] .address .btn-add-address[data-v-72020ccb]{font-size:32px}[data-dpr="3"] .address .btn-add-address[data-v-72020ccb]{font-size:48px}',""])},148:function(a,s,t){var e=t(147);"string"==typeof e&&(e=[[a.i,e,""]]),e.locals&&(a.exports=e.locals),(0,t(2).default)("656dbfc2",e,!0,{})},200:function(a,s,t){"use strict";t.r(s);var e=t(8),d=t.n(e),n=t(0),i={store:n.a,data:function(){return{myInfo:n.a.state.myInfo,company:n.a.state.company}},computed:{defaultAddress:function(){return n.a.state.myInfo.address.default},addressList:function(){return n.a.state.myInfo.address.container}},methods:{setDefault:function(a){n.a.commit("syncState",{stateName:"myInfo",stateValue:{address:d()({},n.a.state.myInfo.address,{default:a})}}),n.a.commit("syncSession","myInfo")},deleted:function(a){n.a.commit("syncState",{stateName:"myInfo",stateValue:{address:d()({},n.a.state.myInfo.address,{container:n.a.state.myInfo.address.container.filter(function(s,t){return t!==a})})}}),n.a.commit("syncSession","myInfo")}}},c=t(1),r=Object(c.a)(i,function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("div",{staticClass:"address"},[t("v-Header",{attrs:{title:"收货地址",option:"",leftBackTo:-1}}),a._v(" "),t("div",{staticClass:"content"},[t("ul",a._l(a.addressList,function(s,e){return s.address?t("li",{key:e,on:{click:function(s){a.setDefault(e)}}},[t("div",{staticClass:"address-info"},[t("div",{staticClass:"address-name"},[e===a.defaultAddress?t("span",{staticClass:"default-address"},[t("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[t("use",{attrs:{"xlink:href":"#icon-htmal5icon14"}})]),a._v("（默认）\n            ")]):a._e(),a._v(" "),t("span",{staticClass:"address-detail"},[a._v(a._s(s.address))]),a._v(" "),t("div",{staticClass:"receiver-phone"},[t("span",[a._v(a._s(s.name))]),a._v(" "),t("span",[a._v(a._s(s.phone))])]),a._v(" "),t("div",{staticClass:"option"},[t("span",{staticClass:"select"},[a._v("选择")]),a._v(" "),t("span",{staticClass:"edit-del"},[t("router-link",{staticClass:"address-select",attrs:{tag:"label",to:"/"+a.company+"/newaddress?id="+e}},[t("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[t("use",{attrs:{"xlink:href":"#icon-bianji"}})]),a._v("编辑\n                ")]),a._v(" "),t("label",{on:{click:function(s){a.deleted(e)}}},[t("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[t("use",{attrs:{"xlink:href":"#icon-shanchu"}})]),a._v("删除 \n                ")])],1)])])])]):a._e()}))]),a._v(" "),t("router-link",{staticClass:"btn-add-address",attrs:{tag:"div",to:"/"+a.company+"/newaddress"}},[t("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[t("use",{attrs:{"xlink:href":"#icon-add1"}})]),a._v("\n    新增地址\n  ")])],1)},[],!1,function(a){t(148)},"data-v-72020ccb",null);s.default=r.exports}}]);