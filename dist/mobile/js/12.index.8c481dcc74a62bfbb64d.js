(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{11:function(t,a,i){"use strict";var e=i(15),o=i.n(e),s={domFunc:function(t){var a=t.dom,i=t.style;for(var e in i)a.style[e]=i[e]},fetchData:function(t){var a=t.url,i=t.data,e=t.header;return new o.a(function(t,o){fetch(a+i,e).then(function(t){return t.json()}).then(function(a){return t(a)}).catch(function(t){return o(t)})})},sleep:function(t){return new o.a(function(a){return setTimeout(a,t)})},isMobile:function(){for(var t=navigator.userAgent,a=["Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"],i=!1,e=0;e<a.length;e+=1)if(t.indexOf(a[e])>0){i=!0;break}return i},isDomInPathFunc:function(t){for(var a=t.path,i=t.selector,e=0;e<a.length;e+=1){if(a[e]===document.querySelector(i))return a[e];if(a[e]===document.body)return!1}},isIdInPathFunc:function(t){for(var a=t.path,i=t.id,e=0;e<a.length;e+=1){if(a[e].id===i)return a[e];if(a[e]===document.body)return!1}},isClassInPathFunc:function(t){for(var a=t.path,i=t.className,e=0;e<a.length;e+=1){if(a[e].classList.contains(i))return a[e];if(a[e]===document.body)return!1}},createElementFromHTML:function(t){var a=document.createElement("div");return a.innerHTML=t.trim(),a.firstChild},domToggleAnimation:function(t){var a=t.dom,i=t.animationName,e=t.animationDuration,o=t.animationFillMode;a.style.animationName===i[1]?(a.style.animationDuration=e,a.style.animationFillMode=o,a.style.animationName=i[0]):(a.style.animationDuration=e,a.style.animationFillMode=o,a.style.animationName=i[1])},transformStringToBool:function(t){return"true"===t},addArrProp:function(t){return Array.prototype.slice.call(t)},showDomFunc:function(t){var a=t.allDom,i=t.showDom;a.forEach(function(t){t.style.display="none"}),i.forEach(function(t){t.style.display="flex"})},addEvent:function(t){var a=t.dom,i=t.event,e=t.func;return a.addEventListener(i,e,!1),a},isDomFunc:function(t){for(var a=t.path,i=t.dom,e=0;e<a.length;e+=1){if(a[e]===i)return i;if(a[e]===document.body)return!1}},isNumeric:function(t){return!isNaN(parseFloat(t))&&isFinite(t)},getPath:function(t){return t.path||t.composedPath&&t.composedPath()||function(t){for(var a=[];t;){if(a.push(t),"HTML"===t.tagName)return a.push(document),a.push(window),a;t=t.parentElement}}(t.target)},tottleShowSelect:function(t){var a=t.dom,i=t.styles,e=a.parentElement.parentElement.querySelectorAll("."+i.active).length,o=a.parentElement.parentElement.children.length-1;a.parentElement.parentElement.children[0].className=0===e?"":o>e?i.halfSelect:i.allSelect},numberFormat:function(t,a,i,e){t=(t+"").replace(/[^0-9+-Ee.]/g,"");var o=isFinite(+t)?+t:0,s=isFinite(+a)?Math.abs(a):0,n=void 0===e?",":e,d=void 0===i?".":i,c="";c=(s?function(t,a){var i=Math.pow(10,a);return""+Math.ceil(t*i)/i}(o,s):""+Math.round(o)).split(".");for(var r=/(-?\d+)(\d{3})/;r.test(c[0]);)c[0]=c[0].replace(r,"$1"+n+"$2");return(c[1]||"").length<s&&(c[1]=c[1]||"",c[1]+=new Array(s-c[1].length+1).join("0")),c.join(d)}};a.a=s},133:function(t,a,i){(t.exports=i(3)(!1)).push([t.i,'blockquote[data-v-9a690c1a],body[data-v-9a690c1a],caption[data-v-9a690c1a],dd[data-v-9a690c1a],div[data-v-9a690c1a],dl[data-v-9a690c1a],dt[data-v-9a690c1a],fieldset[data-v-9a690c1a],form[data-v-9a690c1a],h1[data-v-9a690c1a],h2[data-v-9a690c1a],h3[data-v-9a690c1a],h4[data-v-9a690c1a],h5[data-v-9a690c1a],h6[data-v-9a690c1a],input[data-v-9a690c1a],li[data-v-9a690c1a],ol[data-v-9a690c1a],p[data-v-9a690c1a],pre[data-v-9a690c1a],td[data-v-9a690c1a],textarea[data-v-9a690c1a],th[data-v-9a690c1a],ul[data-v-9a690c1a]{padding:0;margin:0}fieldset[data-v-9a690c1a],img[data-v-9a690c1a]{border:none}table[data-v-9a690c1a]{border-collapse:separate;border-spacing:0}li[data-v-9a690c1a],ol[data-v-9a690c1a],ul[data-v-9a690c1a]{list-style:none;list-style-type:none;padding:0;margin:0}address[data-v-9a690c1a],caption[data-v-9a690c1a],cite[data-v-9a690c1a],code[data-v-9a690c1a],dfn[data-v-9a690c1a],em[data-v-9a690c1a],strong[data-v-9a690c1a],th[data-v-9a690c1a],var[data-v-9a690c1a]{font-weight:400;font-style:normal}caption[data-v-9a690c1a],th[data-v-9a690c1a]{text-align:left}h1[data-v-9a690c1a],h2[data-v-9a690c1a],h3[data-v-9a690c1a],h4[data-v-9a690c1a],h5[data-v-9a690c1a],h6[data-v-9a690c1a]{font-weight:400;font-size:100%}q[data-v-9a690c1a]:after,q[data-v-9a690c1a]:before{content:""}abbr[data-v-9a690c1a],acronym[data-v-9a690c1a]{border:0}a[data-v-9a690c1a]{text-decoration:none;color:#000;cursor:pointer}input[data-v-9a690c1a]:-webkit-autofill{-webkit-box-shadow:0 0 0 1000px #fff inset}[data-v-9a690c1a],[data-v-9a690c1a]:after,[data-v-9a690c1a]:before{-webkit-box-sizing:border-box;box-sizing:border-box}.clearfix[data-v-9a690c1a]{display:block}.clearfix[data-v-9a690c1a]:after{content:" ";display:block;height:0;clear:both;visibility:hidden}sup[data-v-9a690c1a]{vertical-align:super}sub[data-v-9a690c1a]{vertical-align:sub}a[data-v-9a690c1a],a[data-v-9a690c1a]:active,a[data-v-9a690c1a]:hover,a[data-v-9a690c1a]:link,a[data-v-9a690c1a]:visited{text-decoration:none}.icon[data-v-9a690c1a],.svgicon[data-v-9a690c1a]{width:1em;height:1em;vertical-align:-.15em;fill:currentColor;overflow:hidden;font-size:inherit}input[data-v-9a690c1a]::-webkit-input-placeholder{color:#ccc}input[data-v-9a690c1a]:-moz-placeholder,input[data-v-9a690c1a]::-moz-placeholder{color:#ccc}input[data-v-9a690c1a]:-ms-input-placeholder{color:#ccc}body[data-v-9a690c1a],p[data-v-9a690c1a]{margin:0;padding:0}img[lazy=loading][data-v-9a690c1a]{width:40px;height:300px;margin:auto}img[data-v-9a690c1a]{max-height:100%;max-width:100%}.fade-enter-active[data-v-9a690c1a],.fade-leave-active[data-v-9a690c1a]{-webkit-transition:opacity .2s;transition:opacity .2s}.fade-enter[data-v-9a690c1a],.fade-leave-to[data-v-9a690c1a]{opacity:0;min-height:100vh}.fade1-enter-active[data-v-9a690c1a],.fade1-leave-active[data-v-9a690c1a]{-webkit-transition:opacity .2s;transition:opacity .2s}.fade1-enter[data-v-9a690c1a],.fade1-leave-to[data-v-9a690c1a]{opacity:0}.mint-swipe[data-v-9a690c1a]{height:5.33333rem;margin-top:1.06667rem;overflow:hidden}.mint-swipe .mint-swipe-indicators .mint-swipe-indicator[data-v-9a690c1a]{width:.2rem;height:.2rem;margin:0 .1rem}.mint-swipe img[data-v-9a690c1a]{width:100%}section[data-v-9a690c1a]{font-size:10px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}[data-dpr="2"] section[data-v-9a690c1a]{font-size:20px}[data-dpr="3"] section[data-v-9a690c1a]{font-size:30px}section .lists[data-v-9a690c1a]{background:#f5f5f5;height:calc(100vh - 160rem / 75);overflow-y:scroll}section .lists .list-item[data-v-9a690c1a]{width:100vw;background:#fff;margin-bottom:.5rem}section .lists .list-item .lists-box[data-v-9a690c1a]{width:94vw;margin:0 3vw}section .lists .list-item .lists-box .order-info[data-v-9a690c1a]{border-bottom:.03rem solid #eee;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:.2rem 0}section .lists .list-item .lists-box .order-info .id-time .order-id[data-v-9a690c1a]{font-size:15px;color:#666;display:block}[data-dpr="2"] section .lists .list-item .lists-box .order-info .id-time .order-id[data-v-9a690c1a]{font-size:30px}[data-dpr="3"] section .lists .list-item .lists-box .order-info .id-time .order-id[data-v-9a690c1a]{font-size:45px}section .lists .list-item .lists-box .order-info .id-time .order-time[data-v-9a690c1a]{font-size:12px;color:#999;display:block}[data-dpr="2"] section .lists .list-item .lists-box .order-info .id-time .order-time[data-v-9a690c1a]{font-size:24px}[data-dpr="3"] section .lists .list-item .lists-box .order-info .id-time .order-time[data-v-9a690c1a]{font-size:36px}section .lists .list-item .lists-box .order-info .order-status[data-v-9a690c1a]{font-size:16px;color:#d9a656}[data-dpr="2"] section .lists .list-item .lists-box .order-info .order-status[data-v-9a690c1a]{font-size:32px}[data-dpr="3"] section .lists .list-item .lists-box .order-info .order-status[data-v-9a690c1a]{font-size:48px}section .lists .list-item .lists-box .goods-list .good-item[data-v-9a690c1a]{border-bottom:.03rem solid #eee;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;padding:.2rem 0}section .lists .list-item .lists-box .goods-list .good-item img[data-v-9a690c1a]{width:2rem;height:2rem;border:.03rem solid #eee;border-radius:.1rem}section .lists .list-item .lists-box .goods-list .good-item .good-info[data-v-9a690c1a]{width:4.53333rem}section .lists .list-item .lists-box .goods-list .good-item .good-info h1[data-v-9a690c1a]{font-size:16px;color:#666}[data-dpr="2"] section .lists .list-item .lists-box .goods-list .good-item .good-info h1[data-v-9a690c1a]{font-size:32px}[data-dpr="3"] section .lists .list-item .lists-box .goods-list .good-item .good-info h1[data-v-9a690c1a]{font-size:48px}section .lists .list-item .lists-box .goods-list .good-item .good-info p[data-v-9a690c1a]{font-size:13px;color:#999}[data-dpr="2"] section .lists .list-item .lists-box .goods-list .good-item .good-info p[data-v-9a690c1a]{font-size:26px}[data-dpr="3"] section .lists .list-item .lists-box .goods-list .good-item .good-info p[data-v-9a690c1a]{font-size:39px}section .lists .list-item .lists-box .goods-list .good-item .price-num[data-v-9a690c1a]{width:2.34667rem;text-align:right}section .lists .list-item .lists-box .goods-list .good-item .price-num .current-cost[data-v-9a690c1a]{font-size:15px;color:#666}[data-dpr="2"] section .lists .list-item .lists-box .goods-list .good-item .price-num .current-cost[data-v-9a690c1a]{font-size:30px}[data-dpr="3"] section .lists .list-item .lists-box .goods-list .good-item .price-num .current-cost[data-v-9a690c1a]{font-size:45px}section .lists .list-item .lists-box .goods-list .good-item .price-num .prime-cost[data-v-9a690c1a]{font-size:13px;color:#999;text-decoration:line-through}[data-dpr="2"] section .lists .list-item .lists-box .goods-list .good-item .price-num .prime-cost[data-v-9a690c1a]{font-size:26px}[data-dpr="3"] section .lists .list-item .lists-box .goods-list .good-item .price-num .prime-cost[data-v-9a690c1a]{font-size:39px}section .lists .list-item .lists-box .goods-list .good-item .price-num .good-num[data-v-9a690c1a]{font-size:13px;color:#666}[data-dpr="2"] section .lists .list-item .lists-box .goods-list .good-item .price-num .good-num[data-v-9a690c1a]{font-size:26px}[data-dpr="3"] section .lists .list-item .lists-box .goods-list .good-item .price-num .good-num[data-v-9a690c1a]{font-size:39px}section .lists .list-item .lists-box .amount[data-v-9a690c1a]{text-align:right;font-size:13px;color:#666;padding:.2rem 0;border-bottom:.03rem solid #eee}[data-dpr="2"] section .lists .list-item .lists-box .amount[data-v-9a690c1a]{font-size:26px}[data-dpr="3"] section .lists .list-item .lists-box .amount[data-v-9a690c1a]{font-size:39px}section .lists .list-item .lists-box .amount span[data-v-9a690c1a]{font-size:15px}[data-dpr="2"] section .lists .list-item .lists-box .amount span[data-v-9a690c1a]{font-size:30px}[data-dpr="3"] section .lists .list-item .lists-box .amount span[data-v-9a690c1a]{font-size:45px}section .lists .list-item .lists-box .options[data-v-9a690c1a]{text-align:right;padding:.2rem 0}section .lists .list-item .lists-box .options button[data-v-9a690c1a]{width:2rem;height:.8rem;border:.03rem solid #ccc;border-radius:.1rem;background:none;font-size:13px;color:#666;margin-left:.1rem}[data-dpr="2"] section .lists .list-item .lists-box .options button[data-v-9a690c1a]{font-size:26px}[data-dpr="3"] section .lists .list-item .lists-box .options button[data-v-9a690c1a]{font-size:39px}section .lists .list-item .lists-box .options button.pay[data-v-9a690c1a],section .lists .list-item .lists-box .options button.return[data-v-9a690c1a]{border:.03rem solid #e63131;color:#e63131}section .lists .list-item .lists-box .options button.confirm[data-v-9a690c1a]{border:.03rem solid #d9a656;color:#d9a656}',""])},134:function(t,a,i){var e=i(133);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals),(0,i(2).default)("3f3bc52e",e,!0,{})},211:function(t,a,i){"use strict";i.r(a);var e=i(0),o=(i(11),{store:e.a,data:function(){return{company:e.a.state.company}},computed:{defaultImg:function(){return e.a.state.defaultImg},orderlist:function(){return e.a.state.orderlist.filter(function(t){return"待付款"===t.status})}}}),s=i(1),n=Object(s.a)(o,function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("section",{staticClass:"being"},[i("ul",{staticClass:"lists"},t._l(t.orderlist,function(a,e){return i("li",{key:e,staticClass:"list-item"},[i("div",{staticClass:"lists-box"},[i("div",{staticClass:"order-info"},[i("div",{staticClass:"id-time"},[i("label",{staticClass:"order-id"},[t._v("订单号："+t._s(a.order_id))]),t._v(" "),i("span",{staticClass:"order-time"},[t._v("下单时间：")])]),t._v(" "),i("label",{staticClass:"order-status"},[t._v(t._s(a.status))])]),t._v(" "),i("ul",{staticClass:"goods-list"},t._l(a.list,function(a,e){return i("li",{key:e,staticClass:"good-item"},[i("img",{staticClass:"goodImg",attrs:{src:a.goods_image,onerror:t.defaultImg}}),t._v(" "),i("div",{staticClass:"good-info"},[i("h1",[t._v(t._s(a.goods_name))]),t._v(" "),i("p",[t._v(t._s(a.weight)+"  "+t._s(a.type))])]),t._v(" "),i("div",{staticClass:"price-num"},[i("p",{staticClass:"current-cost"},[t._v("￥"+t._s(a.price))]),t._v(" "),i("p",{staticClass:"prime-cost"},[t._v("￥2400.00")]),t._v(" "),i("p",{staticClass:"good-num"},[t._v("×"+t._s(a.num))])])])})),t._v(" "),t._m(0,!0),t._v(" "),i("div",{staticClass:"options"},[i("router-link",{staticClass:"detail",attrs:{tag:"button",to:"/"+t.company+"/orderdetail?orderid="+a.order_id}},[t._v("\n              查看订单\n            ")]),t._v(" "),i("button",{staticClass:"delete"},[t._v("删除")]),t._v(" "),i("button",{staticClass:"pay"},[t._v("付款")])],1)])])}))])},[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"amount"},[this._v("\n            共件商品 合计：￥"),a("span")])}],!1,function(t){i(134)},"data-v-9a690c1a",null);a.default=n.exports}}]);