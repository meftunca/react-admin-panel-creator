(window.webpackJsonp=window.webpackJsonp||[]).push([[13,24],{Ew2V:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),l=n("Jkrb"),i=n("JgXy"),o=n.n(i),c=n("NABS"),u=n.n(c),s=n("4eE1"),m=n.n(s),f=n("DJ9Z"),p=n.n(f),d=n("QGGi"),y=n.n(d),b=n("6ZaM"),g=n.n(b),v=n("xQ8m"),h=n("TSYQ"),E=n.n(h),w=n("qJ/b"),k=n.n(w),x=n("jZk8"),S=n.n(x),_=n("WqRt"),C=n.n(_),N=n("1IiC"),O=n.n(N),z=n("cUz1"),T=n.n(z),j=n("ZqOF"),P=n.n(j),q=n("++m4"),F=n.n(q),A=n("z3yt"),D=n("2iEm"),I=n("vDqi"),J=n.n(I);function Z(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],a=!0,r=!1,l=void 0;try{for(var i,o=e[Symbol.iterator]();!(a=(i=o.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(e){r=!0,l=e}finally{try{a||null==o.return||o.return()}finally{if(r)throw l}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function H(e){return(H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function B(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function M(e,t){return!t||"object"!==H(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function R(e){return(R=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function G(e,t){return(G=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var Q=n("o6/g");v.a.addLocale(F.a);var X=new v.a("tr-TR"),Y=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=M(this,R(t).call(this))).update=function(){J.a.post(window.location.origin+":5000/twitter",{id:"lorem ipsm"}).then(function(t){e.setState({data:t.data,visible:!0})})},e.state={data:[],visible:!1},e}var n,l,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&G(e,t)}(t,a["Component"]),n=t,(l=[{key:"componentDidMount",value:function(){this.update()}},{key:"render",value:function(){var e=this.props.classes;return 0==this.state.visible?r.a.createElement("a",null):r.a.createElement(V,{data:this.state.data,classes:e,full:!this.props.full,update:this.update})}}])&&B(n.prototype,l),i&&B(n,i),t}();function V(e){var t=e.data,n=e.update,l=e.full,i=e.classes,c=Z(r.a.useState(""),2),s=c[0],f=c[1],d=Z(r.a.useState(""),2),b=d[0],v=d[1],h=Z(r.a.useState(!1),2),w=h[0],x=h[1],_=r.a.createRef();return r.a.createElement("div",{className:i.relative},r.a.createElement(o.a,{className:null==l?i.root:i.fullHg,subheader:r.a.createElement(A.unstable_Box,{display:"flex",justifyContent:"space-between",p:1,bgcolor:"background.paper"},r.a.createElement(A.unstable_Box,null,r.a.createElement(C.a,{component:"div"},"Twitter Posts")),r.a.createElement(A.unstable_Box,null,r.a.createElement(O.a,{size:"small",onClick:n},r.a.createElement("i",{className:"material-icons"},"refresh"))))},t!=[]&&null==t[0].code?r.a.createElement(a.Fragment,null,t.map(function(e,t){var n=e.user,l=e.text,o=e.created_at,c=e.entities;return r.a.createElement(a.Fragment,{key:t},r.a.createElement(u.a,null,r.a.createElement(p.a,null,r.a.createElement(y.a,{alt:n.name,src:n.profile_image_url})),r.a.createElement(m.a,{secondary:r.a.createElement(a.Fragment,null,l,r.a.createElement("div",{className:i.gutterMargin}),r.a.createElement(g.a,{component:"span",className:i.inline,color:"textPrimary"},X.format(new Date(o))),c.user_mentions.map(function(e,t){var n=e.screen_name;e.name;return r.a.createElement(k.a,{avatar:r.a.createElement(y.a,{component:"span"},r.a.createElement(S.a,null)),component:"span",variant:"outlined",label:n,key:t,className:i.chip})}))})))})):r.a.createElement(g.a,{component:"p",className:i.inlineCustom,color:"textPrimary"},"Şuan Twitter Apisini kullanamazsınız. Gerekli bilgileri girmek için =>",r.a.createElement(D.a,{to:"/api-yonetimi"},"Adresine gidin"))),t!=[]&&null==t[0].code&&r.a.createElement("div",{className:null!=l&&i.bottomFix},r.a.createElement(u.a,null,r.a.createElement(P.a,{id:"twitter-post-button",className:E()(i.margin,i.textField),variant:"filled",type:"textarea",label:"Twitter post",value:s,onChange:function(e){var t=e.target;return f(t.value)},fullWidth:!0,InputProps:{endAdornment:r.a.createElement(T.a,{variant:"filled",position:"end"},r.a.createElement(O.a,{color:"secondary","aria-label":"Toggle password visibility",onClick:function(){x(!w),_.current.click()}},r.a.createElement("i",{className:"material-icons",style:{fontSize:16}},"image")),r.a.createElement(O.a,{color:"primary","aria-label":"Toggle password visibility",onClick:function(){s.length<1||s.length>239?alert("lütfen "+s.length+"'den "+(s.length<1?"fazla ":"az ")+"karakter kullanın"):J.a.post("http://localhost:5000/twitter-post",{status:s+"\n Deneme zamanı : "+Date.now(),file:b}).then(function(e){setTimeout(function(){return n()},1e3)})}},r.a.createElement("i",{className:"material-icons",style:{fontSize:16}},"send")))}})),r.a.createElement("input",{type:"file",hidden:!0,ref:_,onChange:function(){var e=_.current.files;console.log(e),Q(e[0],function(e,t){e||v(t)})}})))}t.default=Object(l.b)(function(e){return{relative:{position:"relative"},root:{width:"100%",maxHeight:400,backgroundColor:"#fff",overflowX:"hidden",overflowY:"scroll"},fullHg:{maxHeight:"80vh",width:"100%",backgroundColor:"#fff",overflowX:"hidden",overflowY:"scroll",position:"relative"},bottomFix:{position:"absolute",bottom:"-10vh",left:0,right:0},inline:{display:"inline"},inlineCustom:{display:"inline",padding:"5px 15px",margin:20},chip:{margin:6},margin:{margin:8},gutterMargin:{margin:"4px 0"}}})(Y)},sZqC:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),l=n("3ZzI"),i=n.n(l),o=n("sSH7"),c=n("Ew2V");t.default=function(){return r.a.createElement(i.a,{container:!0,spacing:16},r.a.createElement(i.a,{item:!0,xs:12,md:6},r.a.createElement(o.default,null)),r.a.createElement(i.a,{item:!0,xs:12,md:6},r.a.createElement(c.default,null)))}}}]);