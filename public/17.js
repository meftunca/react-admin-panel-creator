(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{Ew2V:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return R});var a=n("q1tI"),r=n.n(a),o=n("vDqi"),i=n.n(o),c=n("Jkrb"),l=n("JgXy"),u=n.n(l),f=n("NABS"),s=n.n(f),m=n("4eE1"),p=n.n(m),y=n("DJ9Z"),b=n.n(y),d=n("QGGi"),h=n.n(d),v=n("6ZaM"),w=n.n(v),E=n("xQ8m"),g=n("qJ/b"),_=n.n(g),k=n("jZk8"),O=n.n(k),j=n("WqRt"),S=n.n(j),P=n("++m4"),x=n.n(P),J=n("DvoB");function D(e){return(D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function q(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function N(e,t){return!t||"object"!==D(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function T(e){return(T=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function B(e,t){return(B=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}E.a.addLocale(x.a);var C=new E.a("tr-TR"),R=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=N(this,T(t).call(this))).state={data:[]},e}var n,o,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&B(e,t)}(t,a["Component"]),n=t,(o=[{key:"componentDidMount",value:function(){var e=this;i.a.post("http://localhost:8000/twitter",{id:"lorem ipsm"}).then(function(t){console.log(t.data),e.setState({data:t.data})})}},{key:"render",value:function(){return r.a.createElement(F,{data:this.state.data})}}])&&q(n.prototype,o),c&&q(n,c),t}(),Z=Object(c.a)(function(e){return{root:{width:"100%",maxHeight:400,backgroundColor:"#fff",overflowX:"hidden",overflowY:"scroll"},inline:{display:"inline"},chip:{margin:6}}});function F(e){var t=e.data,n=Z();return r.a.createElement(u.a,{className:n.root,subheader:r.a.createElement(S.a,{component:"div"},"Twitter Posts")},t!=[]&&t.map(function(e,t){var a=e.user,o=e.text,i=e.created_at,c=e.entities;return r.a.createElement(r.a.Fragment,{key:t},r.a.createElement(s.a,{alignItems:"flex-start"},r.a.createElement(b.a,null,r.a.createElement(h.a,{alt:a.name,src:a.profile_image_url})),r.a.createElement(p.a,{primary:"Brunch this weekend?",secondary:r.a.createElement(r.a.Fragment,null,r.a.createElement(w.a,{component:"span",className:n.inline,color:"textPrimary"},C.format(new Date(i)))," — "+o,r.a.createElement("br",null),r.a.createElement("div",null,c.user_mentions.map(function(e,t){e.screen_name;var a=e.name;return r.a.createElement(_.a,{avatar:r.a.createElement(h.a,null,r.a.createElement(O.a,null)),variant:"outlined",label:a,key:t,className:n.chip})})))})),r.a.createElement(J.a,null))}))}}}]);