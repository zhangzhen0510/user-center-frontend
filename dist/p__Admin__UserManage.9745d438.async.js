(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[210],{32070:function(){},61004:function(W,D,e){"use strict";e.r(D),e.d(D,{default:function(){return Q},waitTime:function(){return H},waitTimePromise:function(){return M}});var p=e(11849),j=e(12968),b=e(20352),m=e(90636),Z=e(3182),I=e(28991),i=e(81253),E=e(59250),f=e(13013),s=e(57663),d=e(71577),B=e(30887),x=e(18515),N=e(84305),y=e(39559),w=e(57254),g=e(44545),T=e(94184),P=e.n(T),u=e(67294),X=e(32070),$=["key","name"],L=function(n){var t=n.children,r=n.menus,a=n.onSelect,l=n.className,o=n.style,O=(0,u.useContext)(y.ZP.ConfigContext),c=O.getPrefixCls,K=c("pro-table-dropdown"),R=u.createElement(x.Z,{onClick:function(C){return a&&a(C.key)}},r==null?void 0:r.map(function(S){return u.createElement(x.Z.Item,{key:S.key},S.name)}));return u.createElement(f.Z,{overlay:R,className:P()(K,l)},u.createElement(d.Z,{style:o},t," ",u.createElement(w.Z,null)))},k=function(n){var t=n.className,r=n.style,a=n.onSelect,l=n.menus,o=l===void 0?[]:l,O=n.children,c=(0,u.useContext)(y.ZP.ConfigContext),K=c.getPrefixCls,R=K("pro-table-dropdown"),S=u.createElement(x.Z,{onClick:function(U){a==null||a(U.key)},items:o.map(function(C){var U=C.key,V=C.name,A=(0,i.Z)(C,$);return(0,I.Z)((0,I.Z)({key:U},A),{},{title:A.title,label:V})})});return u.createElement(f.Z,{overlay:S,className:P()(R,t)},u.createElement("a",{style:r},O||u.createElement(g.Z,null)))};k.Button=L;var F=k,z=e(93760),G=e(93387),h=e(85893),M=function(){var v=(0,Z.Z)((0,m.Z)().mark(function n(){var t,r=arguments;return(0,m.Z)().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return t=r.length>0&&r[0]!==void 0?r[0]:100,l.abrupt("return",new Promise(function(o){setTimeout(function(){o(!0)},t)}));case 2:case"end":return l.stop()}},n)}));return function(){return v.apply(this,arguments)}}(),H=function(){var v=(0,Z.Z)((0,m.Z)().mark(function n(){var t,r=arguments;return(0,m.Z)().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return t=r.length>0&&r[0]!==void 0?r[0]:100,l.next=3,M(t);case 3:case"end":return l.stop()}},n)}));return function(){return v.apply(this,arguments)}}(),J=[{dataIndex:"id",valueType:"indexBorder",width:48},{title:"\u7528\u6237\u540D",dataIndex:"username",copyable:!0,ellipsis:!0,tip:"\u6807\u9898\u8FC7\u957F\u4F1A\u81EA\u52A8\u6536\u7F29"},{title:"\u7528\u6237\u8D26\u6237",dataIndex:"userAccount",copyable:!0},{title:"\u5934\u50CF",dataIndex:"avatarUrl",render:function(n,t){return(0,h.jsx)("div",{children:(0,h.jsx)(b.Z,{src:t.avatarUrl,width:100})})}},{title:"\u6027\u522B",dataIndex:"gender"},{title:"\u7535\u8BDD",dataIndex:"phone",copyable:!0},{title:"\u90AE\u4EF6",dataIndex:"email",copyable:!0},{title:"\u661F\u7403\u7F16\u53F7",dataIndex:"planetCode",copyable:!0},{title:"\u72B6\u6001",dataIndex:"userStatus"},{title:"\u89D2\u8272",dataIndex:"userRole",valueType:"select",valueEnum:{0:{text:"\u666E\u901A\u7528\u6237",status:"Default"},1:{text:"\u7BA1\u7406\u5458",status:"Success"}}},{title:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"createTime",valueType:"dateTime"},{title:"\u64CD\u4F5C",valueType:"option",key:"option",render:function(n,t,r,a){return[(0,h.jsx)("a",{onClick:function(){var o;a==null||(o=a.startEditable)===null||o===void 0||o.call(a,t.id)},children:"\u7F16\u8F91"},"editable"),(0,h.jsx)("a",{href:t.url,target:"_blank",rel:"noopener noreferrer",children:"\u67E5\u770B"},"view"),(0,h.jsx)(F,{onSelect:function(){return a==null?void 0:a.reload()},menus:[{key:"copy",name:"\u590D\u5236"},{key:"delete",name:"\u5220\u9664"}]},"actionGroup")]}}],Q=function(){var v=(0,u.useRef)();return(0,h.jsx)(z.Z,{columns:J,actionRef:v,cardBordered:!0,request:(0,Z.Z)((0,m.Z)().mark(function n(){var t,r,a,l,o=arguments;return(0,m.Z)().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return t=o.length>0&&o[0]!==void 0?o[0]:{},r=o.length>1?o[1]:void 0,a=o.length>2?o[2]:void 0,console.log(r,a),c.next=6,(0,G.pz)();case 6:return l=c.sent,c.abrupt("return",{data:l});case 8:case"end":return c.stop()}},n)})),editable:{type:"multiple"},columnsState:{persistenceKey:"pro-table-singe-demos",persistenceType:"localStorage",onChange:function(t){console.log("value: ",t)}},rowKey:"id",search:{labelWidth:"auto"},options:{setting:{listsHeight:400}},form:{syncToUrl:function(t,r){return r==="get"?(0,p.Z)((0,p.Z)({},t),{},{created_at:[t.startTime,t.endTime]}):t}},pagination:{pageSize:5,onChange:function(t){return console.log(t)}},dateFormatter:"string",headerTitle:"\u9AD8\u7EA7\u8868\u683C"})}},34952:function(W,D,e){"use strict";var p=e(22122),j=e(15105),b=e(67294),m=function(i,E){var f={};for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&E.indexOf(s)<0&&(f[s]=i[s]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var d=0,s=Object.getOwnPropertySymbols(i);d<s.length;d++)E.indexOf(s[d])<0&&Object.prototype.propertyIsEnumerable.call(i,s[d])&&(f[s[d]]=i[s[d]]);return f},Z={border:0,background:"transparent",padding:0,lineHeight:"inherit",display:"inline-block"},I=b.forwardRef(function(i,E){var f=function(g){var T=g.keyCode;T===j.Z.ENTER&&g.preventDefault()},s=function(g){var T=g.keyCode,P=i.onClick;T===j.Z.ENTER&&P&&P()},d=i.style,B=i.noStyle,x=i.disabled,N=m(i,["style","noStyle","disabled"]),y={};return B||(y=(0,p.Z)({},Z)),x&&(y.pointerEvents="none"),y=(0,p.Z)((0,p.Z)({},y),d),b.createElement("div",(0,p.Z)({role:"button",tabIndex:0,ref:E},N,{onKeyDown:f,onKeyUp:s,style:y}))});D.Z=I}}]);
