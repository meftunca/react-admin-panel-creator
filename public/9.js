(window.webpackJsonp=window.webpackJsonp||[]).push([[9,21],{"2SgU":function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),o=n("ZqOF"),l=n.n(o),i=n("3ZzI"),c=n.n(i),s=n("6ZaM"),u=n.n(s),p=n("pPbJ"),m=n.n(p),f=n("Jkrb"),d=n("fSNh"),b=n("cA6V"),y=n.n(b),h=n("zC/A"),v=n.n(h),g=n("cUz1"),E=n.n(g),_=n("nZsZ"),k=n.n(_),w=n("XaW4"),O=n.n(w),x=n("JOJA"),j=n.n(x),I=n("ctcd"),F=n.n(I),S=n("n5s8"),C=n.n(S),N=n("1DzM"),A=n.n(N),P=n("XdPI"),B=n.n(P),T=n("MwB+"),z=n.n(T),D=n("pNnn"),J=n("JgXy"),M=n.n(J);function R(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Z(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function W(e){return(W="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function q(){return(q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function V(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function L(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function G(e,t,n){return t&&L(e.prototype,t),n&&L(e,n),e}function X(e,t){return!t||"object"!==W(t)&&"function"!=typeof t?K(e):t}function $(e){return($=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function H(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&U(e,t)}function U(e,t){return(U=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function K(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var Y=n("zJgK"),Q=function(e){function t(e){var n;return V(this,t),(n=X(this,$(t).call(this,e))).post=function(e){axios.post(window.location.origin.replace("https","http")+":8000/create-form",e).then(function(e){return console.log(e)})},n.view=function(){return console.log("view")},n.send=function(){return n.handleClick()},n.add=function(){return n.setState({appendInput:n.state.appendInput.concat("")})},n.state={appendInput:[""],formData:{}},n.handleClick=n.handleClick.bind(K(K(n))),n.setFormApi=n.setFormApi.bind(K(K(n))),n}return H(t,a["Component"]),G(t,[{key:"handleClick",value:function(){var e=this.formApi.getState().values,t=[];e.formItem=Object.values(e.formItem)[0],e.formItem.map(function(e){t.push({name:e.name,label:e.label})}),e.tableItem=t,this.setState({formData:e}),this.post(e)}},{key:"setFormApi",value:function(e){this.formApi=e}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props,a=t.classes;t.theme;return r.a.createElement(m.a,{className:a.paper,elevation:1},r.a.createElement(c.a,{container:!0,spacing:24},r.a.createElement(c.a,{item:!0,md:12},r.a.createElement(u.a,{component:"h5",variant:"h4"},"Form Creator")),r.a.createElement(c.a,{item:!0,md:12},r.a.createElement(d.Form,{id:"form-"+name,getApi:this.setFormApi},r.a.createElement(c.a,{container:!0,spacing:24},te.map(function(t,n){return r.a.createElement(ee,q({appendSize:e.state.appendInput,classes:a},t,{key:n}))})))),r.a.createElement(c.a,{item:!0,md:12},r.a.createElement(ne,{classes:a,view:this.view,send:this.send,add:this.add})),r.a.createElement(c.a,{item:!0,md:12},r.a.createElement(k.a,{style:{padding:12},id:"json-pretty",data:this.state.formData,theme:n("E7TV"),space:2}))))}}]),t}(),ee=Object(d.asField)(function(e){var t,n=e.fieldState,a=e.fieldApi,o=Z(e,["fieldState","fieldApi"]),l=n.value,i=a.setValue,s=a.setTouched,p=o.onChange,m=o.onBlur,f=o.appendSize,b=(o.initialValue,o.classes),y=o.FormItem,h=o.label,v=o.icon,g=o.breakpoint,_=(o.validate,o.field),k=o.forwardedRef,w=o.scope,x=o.list,I=o.type,S=o.selectData,N=(Z(o,["onChange","onBlur","appendSize","initialValue","classes","FormItem","label","icon","breakpoint","validate","field","forwardedRef","scope","list","type","selectData"]),Y);return r.a.createElement(c.a,q({item:!0},g),null==w?r.a.createElement(r.a.Fragment,null,"select"==I?r.a.createElement(A.a,{className:b.formControl,fullWidth:!0},r.a.createElement(F.a,null,h),r.a.createElement(B.a,(R(t={autoWidth:!0,value:l,id:h.replace(" ","_"),label:h,inputRef:k},"value",l||0===l?l:""),R(t,"onChange",function(e){i(e.target.value),p&&p(e)}),R(t,"onBlur",function(e){s(),m&&m(e)}),R(t,"input",r.a.createElement(z.a,{fullWidth:!0,name:_,id:N})),t),r.a.createElement(C.a,{value:""},r.a.createElement("em",null,"None")),S.map(function(e,t){return r.a.createElement(C.a,{value:e,key:t},e)}))):"control"==I?r.a.createElement(j.a,{control:r.a.createElement(O.a,{id:h.replace(" ","_"),inputRef:k,value:"false",onChange:function(e){i(e.target.value),p&&p(e)},onBlur:function(e){s(),m&&m(e)}}),label:h}):r.a.createElement(y,{id:h.replace(" ","_"),label:h,inputRef:k,value:l||0===l?l:"",onChange:function(e){i(e.target.value),p&&p(e)},onBlur:function(e){s(),m&&m(e)},className:b.textField,fullWidth:!0,InputProps:""!=v&&{startAdornment:r.a.createElement(E.a,{position:"start"},r.a.createElement("i",{className:"material-icons"},v))}})):r.a.createElement(r.a.Fragment,null,"scope"==w.type?r.a.createElement(c.a,{container:!0,spacing:16,style:{width:"90%",margin:"0 5%"}},r.a.createElement(c.a,{item:!0,md:12},r.a.createElement(u.a,{variant:"body2",gutterBottom:!0},w.title),""!=w.description&&r.a.createElement(u.a,{variant:"body2",gutterBottom:!0},w.description)),r.a.createElement(d.Scope,{scope:_},x.map(function(e,t){return r.a.createElement(ee,q({classes:b},e,{key:t}))}))):r.a.createElement(r.a.Fragment,null,r.a.createElement(d.Scope,{scope:_},r.a.createElement(c.a,{container:!0},r.a.createElement(u.a,{variant:"body2",gutterBottom:!0},w.title),""!=w.description&&r.a.createElement(u.a,{variant:"body2"},w.description)),r.a.createElement(M.a,{component:"nav",className:b.root},f.map(function(e,t){return r.a.createElement(D.default,{title:t+1+". input alanı",open:f.length==1+t,key:t},r.a.createElement(d.Scope,{scope:_+"["+t+"]"},x.map(function(e,t){return r.a.createElement(ee,q({field:e.field+"["+t+"]",classes:b},e,{key:t}))})))}))))))}),te=[{field:"name",validate:"",FormItem:l.a,label:"Formun ismi",icon:"face",breakpoint:{xs:12,md:6}},{field:"title",validate:"",FormItem:l.a,label:"Formun Başlığı",icon:"title",breakpoint:{xs:12,md:6}},{field:"post_url",validate:"",FormItem:l.a,label:"Gönderileceği url",icon:"insert_link",breakpoint:{xs:12,md:6}},{field:"get_url",validate:"",FormItem:l.a,label:"Tablo verilerinin alınacağı url",icon:"insert_link",breakpoint:{xs:12,md:6}},{scope:{title:"Başlık Ayarları",type:"scope",append:!1,description:""},field:"header",breakpoint:{xs:12,md:12},list:[{field:"label",validate:"",FormItem:l.a,label:"Başlık etiketi",icon:"label",breakpoint:{xs:12,md:6}},{field:"icon",validate:"",FormItem:l.a,label:"Başlık simgesi",icon:"change_history",breakpoint:{xs:12,md:6}}]},{scope:{title:"Rota Ayarları",type:"scope",append:!1,description:""},field:"route",breakpoint:{xs:12,md:12},list:[{field:"path",validate:"",FormItem:l.a,label:"Rotayı buraya yazın",icon:"router",breakpoint:{xs:12,md:6}},{field:"exact",validate:"",FormItem:O.a,label:"Exact durumu",icon:"warning",breakpoint:{xs:12,md:6},type:"control"}]},{scope:{title:"Form input oluşturma",type:"array",append:!1,description:"Bu alanda hazır form,veri tablosu ve mongoDB collection oluşturmak için hazır yapıları kullanarak yeni alanlar oluşturabilirsiniz."},field:"formItem",breakpoint:{xs:12,md:12},list:[{field:"name",validate:"",FormItem:l.a,label:"İnput ismi",icon:"title",breakpoint:{xs:12,md:6}},{field:"icon",validate:"",FormItem:l.a,label:"İnput simgesi",icon:"change_history",breakpoint:{xs:12,md:6}},{field:"label",validate:"",FormItem:l.a,label:"İnput etiketi",icon:"label",breakpoint:{xs:12,md:6}},{field:"type",validate:"",FormItem:l.a,label:"İnput tipi",icon:"merge_type",breakpoint:{xs:12,md:6}},{field:"regex",validate:"",FormItem:l.a,label:"İnput regex(beta)",icon:"format_shapes",breakpoint:{xs:12,md:6}},{field:"required",validate:"",FormItem:O.a,label:"Zorunluluk durumu",icon:"warning",breakpoint:{xs:12,md:6},type:"control"},{field:"mongoType",validate:"",FormItem:l.a,label:"Mongo db sütun tipi",icon:"db",breakpoint:{xs:12,md:12},type:"select",selectData:["String","Number","Date","Buffer","Boolean","Mixed","ObjectId","Array","Decimal128","Map"]}]}],ne=function(e){function t(){var e,n;V(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=X(this,(e=$(t)).call.apply(e,[this].concat(r)))).state={value:0},n.handleChange=function(e,t){n.setState({value:t})},n}return H(t,r.a.Component),G(t,[{key:"render",value:function(){var e=this.props,t=e.classes,n=e.view,a=e.send,o=e.add,l=this.state.value;return r.a.createElement(y.a,{value:l,onChange:this.handleChange,showLabels:!0,className:t.management},r.a.createElement(v.a,{onClick:a,label:"Gönder ve yükle",icon:r.a.createElement("i",{className:"material-icons"},"send")}),r.a.createElement(v.a,{onClick:n,label:"Göster",icon:r.a.createElement("i",{className:"material-icons"},"rate_review")}),r.a.createElement(v.a,{onClick:o,label:"Yeni Satır Ekle",icon:r.a.createElement("i",{className:"material-icons"},"add")}))}}]),t}();t.default=Object(f.b)(function(e){return{container:{display:"flex",flexWrap:"wrap"},paper:{padding:16},management:{backgroundColor:"#f3f3f3"},textField:{marginLeft:8,marginRight:8},dense:{marginTop:16},menu:{width:200}}},{withTheme:!0})(Q)},E7TV:function(e,t,n){"use strict";e.exports={main:"line-height:1.3;color:#66d9ef;background:#272822;overflow:auto;",key:"color:#f92672;",string:"color:#fd971f;",value:"color:#a6e22e;",boolean:"color:#ac81fe;"}},nZsZ:function(e,t,n){"use strict";var a,r=this&&this.__extends||(a=function(e,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),o=this&&this.__assign||function(){return(o=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},l=this&&this.__rest||function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&(n[a[r]]=e[a[r]])}return n},i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},c=i(n("17x9")),s=i(n("q1tI"));function u(e,t){return t&&t[e]?' style="'+t[e]+'"':""}var p=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),t.prototype.render=function(){var e=this.props,t=e.json,n=e.data,a=e.replacer,r=e.space,i=e.themeClassName,c=e.theme,p=e.silent,m=l(e,["json","data","replacer","space","themeClassName","theme","silent"]),f=n||t;if("string"==typeof f)try{f=JSON.parse(f)}catch(e){return p||console.warn("[react-json-pretty]: "+e.message),s.createElement("div",o({},m,{dangerouslySetInnerHTML:{__html:"<pre class="+i+u("main",c)+">"+f+"</pre>"}}))}return s.createElement("div",o({},m,{dangerouslySetInnerHTML:{__html:"<pre class="+i+u("main",c)+">"+this._pretty.call(this,c,f,a,+r)+"</pre>"}}))},t.prototype._pretty=function(e,t,n,a){var r=JSON.stringify(t,"function"==typeof n?n:null,isNaN(a)?2:a);return r?r.replace(/&/g,"&amp;").replace(/\\"([^,])/g,"\\&quot;$1").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/^( *)("[^"]+": )?("[^"]*"|[\w.+-]*)?([,[{]|\[\s*\],?|\{\s*\},?)?$/gm,this._replace.bind(null,e)):r},t.prototype._replace=function(e,t,n,a,r,o){var l="<span class=__json-key__"+u("key",e)+">",i="<span class=__json-value__"+u("value",e)+">",c="<span class=__json-string__"+u("string",e)+">",s="<span class=__json-boolean__"+u("boolean",e)+">",p=n||"";return a&&(p=p+'"'+l+a.replace(/^"|":\s$/g,"")+'</span>": '),r&&(p="true"===r||"false"===r?p+s+r+"</span>":p+('"'===r[0]?c:i)+r+"</span>"),p+(o||"")},t.propTypes={data:c.any,json:c.any,replacer:c.func,silent:c.bool,space:c.oneOfType([c.number,c.string]),theme:c.object,themeClassName:c.string},t.defaultProps={data:"",json:"",silent:!0,space:2,themeClassName:"__json-pretty__"},t}(s.Component);e.exports=p},pNnn:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),o=n("Jkrb"),l=n("NABS"),i=n.n(l),c=n("4eE1"),s=n.n(c),u=n("ciEP"),p=n.n(u),m=n("3ZzI"),f=n.n(m);function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],a=!0,r=!1,o=void 0;try{for(var l,i=e[Symbol.iterator]();!(a=(l=i.next()).done)&&(n.push(l.value),!t||n.length!==t);a=!0);}catch(e){r=!0,o=e}finally{try{a||null==i.return||i.return()}finally{if(r)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var b=Object(o.a)(function(e){return{root:{width:"100%",maxWidth:360},nested:{paddingLeft:16}}});var y=function(e){return r.a.createElement("i",{className:"material-icons"},e.name)};t.default=function(e){b();var t=d(r.a.useState(e.open),2),n=t[0],a=t[1];return console.log("prop",e),r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,{button:!0,onClick:function(){a(!n)}},r.a.createElement(s.a,{primary:e.title}),n?r.a.createElement(y,{name:"expand_less"}):r.a.createElement(y,{name:"expand_more"})),r.a.createElement(p.a,{in:n,timeout:"auto",unmountOnExit:!0},r.a.createElement(f.a,{container:!0,spacing:16},e.children)))}}}]);