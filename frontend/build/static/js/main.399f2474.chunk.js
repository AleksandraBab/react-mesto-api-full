(this.webpackJsonpmesto=this.webpackJsonpmesto||[]).push([[0],{29:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),c=n(19),i=n.n(c),s=(n(29),n(24)),r=n(2),l=n(3),u=n.p+"static/media/logo.bbe2a6ea.svg",p=n(10),d=n(0);var m=function(e){var t=Object(l.h)(),n=Object(l.g)();return Object(d.jsxs)("header",{className:"header page__header",children:[Object(d.jsx)("img",{className:"logo",src:u,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f Mesto Russia"}),Object(d.jsxs)("div",{className:"header__text",children:[!e.loggedIn&&Object(d.jsx)(p.b,{to:"/sign-in"===t.pathname?"/sign-up":"/sign-in",className:"header__link",children:"/sign-in"===t.pathname?"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f":"\u0412\u043e\u0439\u0442\u0438"}),e.loggedIn&&Object(d.jsx)("p",{className:"header__text",children:e.userEmail}),e.loggedIn&&Object(d.jsx)("p",{onClick:function(){localStorage.removeItem("jwt"),e.logIn(!1),e.removeUser({_id:null,name:"",about:"",avatar:""}),e.removeEmail(null),n.push("/sign-in")},className:"header__link header__link_type_logout",children:"\u0412\u044b\u0439\u0442\u0438"})]})]})};var j=function(){var e=new Date;return Object(d.jsx)("footer",{className:"footer section page__footer",children:Object(d.jsxs)("p",{className:"footer__copyright",children:["\xa9","".concat(e.getFullYear()," Mesto Russia")]})})},b=o.a.createContext({_id:null,name:"",about:"",avatar:""});var _=function(e){var t=e.card,n=e.onCardClick,a=e.onCardLike,c=e.onDelClick,i=o.a.useContext(b),s=t.owner===i._id,r=t.likes.some((function(e){return e===i._id}));return Object(d.jsxs)("li",{className:"element",children:[Object(d.jsxs)("div",{className:"element__image-wrapper",children:[Object(d.jsx)("img",{className:"element__image",src:t.link,alt:t.name,onClick:function(){return n(t)}}),Object(d.jsx)("button",{type:"button",className:"".concat(s?"element__delete-btn":"element__delete-btn_hidden"),"aria-label":"\u0423\u0434\u0430\u043b\u0438\u0442\u044c",onClick:function(){return c(t)}})]}),Object(d.jsxs)("div",{className:"element__caption",children:[Object(d.jsx)("h2",{className:"element__heading",children:t.name}),Object(d.jsxs)("div",{className:"element__like",children:[Object(d.jsx)("button",{type:"button",className:"element__like-btn ".concat(r&&"element__like-btn_liked"),"aria-label":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u0438\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435",onClick:function(){return a(t)}}),Object(d.jsx)("span",{className:"element__likecounter",children:t.likes.length})]})]})]})};var h=function(e){var t=e.onEditProfile,n=e.onAddPlace,a=e.onEditAvatar,c=e.onCardClick,i=e.cards,s=e.onCardLike,r=e.onDelClick,l=o.a.useContext(b);return Object(d.jsxs)("main",{className:"content",children:[Object(d.jsxs)("section",{className:"profile section page__section",children:[Object(d.jsxs)("div",{className:"profile__avatar-block",onClick:a,children:[Object(d.jsx)("img",{className:"profile__avatar",src:l.avatar,alt:l.name}),Object(d.jsx)("div",{className:"profile__bckgrnd"})]}),Object(d.jsxs)("div",{className:"profile__info",children:[Object(d.jsxs)("div",{className:"profile__row",children:[Object(d.jsx)("h1",{className:"profile__name",children:l.name}),Object(d.jsx)("button",{type:"button",className:"profile__edit-btn","aria-label":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",onClick:t})]}),Object(d.jsx)("p",{className:"profile__caption",children:l.about})]}),Object(d.jsx)("button",{type:"button",className:"profile__add-btn","aria-label":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443",onClick:n})]}),Object(d.jsx)("section",{className:"elements section page__section",children:Object(d.jsx)("ul",{className:"elements__grid-items",children:i.map((function(e){return Object(d.jsx)(_,{card:e,onCardClick:c,onCardLike:s,onDelClick:r},e._id)}))})})]})};var f=function(e){var t=e.card,n=e.onClose,o=e.stopProp,c=Object(a.useRef)(null);return Object(d.jsx)("div",{className:"popup popup_type_image ".concat(t&&"popup_opened"),onClick:n,children:Object(d.jsxs)("figure",{className:"popup__figure",onClick:o,ref:c,children:[Object(d.jsx)("button",{type:"button",className:"popup__close-btn popup__close-btn_place_image","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u0431\u0435\u0437 \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f",onClick:n}),Object(d.jsx)("img",{className:"popup__image",src:null===t||void 0===t?void 0:t.link,alt:null===t||void 0===t?void 0:t.name}),Object(d.jsx)("figcaption",{className:"popup__caption",children:t?t.name:""})]})})},O=n(9),g=n(5);var v=function(e){var t=e.title,n=e.name,a=e.buttonText,o=e.children,c=e.onSubmit,i=e.valid,s=e.type;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h2",{className:"popup__heading ".concat(s?"popup__heading_type_".concat(s):""),children:t}),Object(d.jsxs)("form",{className:"popup__form popup__form_type_".concat(n," ").concat(s?"popup__form_type_".concat(s):""),name:n,onSubmit:c,noValidate:!0,children:[o,Object(d.jsx)("button",{type:"submit",disabled:!i,className:"popup__submit-btn popup__submit-btn_type_".concat(n," ").concat(i?"":"popup__submit-btn_disabled"," ").concat(s?"popup__submit-btn_type_login":""),children:a})]})]})};var x=function(e){var t=e.title,n=e.name,a=e.buttonText,o=e.children,c=e.isOpen,i=e.onClose,s=e.stopProp,r=e.onSubmit,l=e.valid;return Object(d.jsx)("div",{className:"popup popup_type_".concat(n," ").concat(c&&"popup_opened"),onClick:i,children:Object(d.jsxs)("div",{className:"popup__container",onClick:s,children:[Object(d.jsx)("button",{type:"button",className:"popup__close-btn popup__close-btn_place_".concat(n),"aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u0431\u0435\u0437 \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f",onClick:i}),Object(d.jsx)(v,{title:t,name:n,onSubmit:r,buttonText:a,valid:l,children:o})]})})};function k(e){var t=e.onUpdateUser,n=e.buttonText,a=e.isOpen,c=e.onClose,i=e.stopProp,s=o.a.useContext(b),l=o.a.useState({userName:"",caption:""}),u=Object(r.a)(l,2),p=u[0],m=u[1],j=o.a.useState({nameValid:!0,descValid:!0}),_=Object(r.a)(j,2),h=_[0],f=_[1];o.a.useEffect((function(){m({userName:s.name,caption:s.about})}),[s,a]),o.a.useEffect((function(){var e=p.userName.trim().length>1,t=p.caption.trim().length>1;f({nameValid:e,descValid:t})}),[p]);var v=o.a.useCallback((function(e){var t=e.target,n=t.name,a=t.value;m((function(e){return Object(g.a)(Object(g.a)({},e),{},Object(O.a)({},n,a))}))}),[p]);var k=p.userName,C=p.caption,y=h.nameValid,N=h.descValid,S=y&&N;return Object(d.jsxs)(x,{title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",name:"edit",buttonText:n,isOpen:a,onClose:c,stopProp:i,onSubmit:function(e){e.preventDefault(),t({name:k,about:C})},valid:S,children:[Object(d.jsx)("input",{value:k,onChange:v,type:"text",name:"userName",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f",id:"name",className:"popup__input popup__input_type_name ".concat(y?"":"popup__input_type_error"),required:!0,minLength:"2",maxLength:"40"}),Object(d.jsx)("input",{value:C,onChange:v,name:"caption",type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u044e",id:"caption",className:"popup__input popup__input_type_caption ".concat(N?"":"popup__input_type_error"),required:!0,minLength:"2",maxLength:"200"})]})}function C(e){var t=e.onUpdateAvatar,n=e.isOpen,a=e.onClose,c=e.stopProp,i=e.buttonText,s=o.a.useRef();return Object(d.jsx)(x,{title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",name:"avatar",buttonText:i,isOpen:n,onClose:a,stopProp:c,onSubmit:function(e){e.preventDefault(),s.current.value.length>2&&(t({avatar:s.current.value}),s.current.value="")},valid:!0,children:Object(d.jsx)("input",{ref:s,type:"url",name:"avatar",placeholder:"\u0412\u0441\u0442\u0430\u0432\u044c\u0442\u0435 \u0441\u0441\u044b\u043b\u043a\u0443 \u043d\u0430 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435",id:"avatar",className:"popup__input popup__input_type_avatar",required:!0})})}function y(e){var t=e.onAddPlace,n=e.isOpen,a=e.onClose,c=e.stopProp,i=e.buttonText,s=o.a.useState({placeName:"",link:""}),l=Object(r.a)(s,2),u=l[0],p=l[1],m=o.a.useState({nameValid:!1,linkValid:!1}),j=Object(r.a)(m,2),b=j[0],_=j[1];o.a.useEffect((function(){n||p({placeName:"",link:""})}),[n]);var h=o.a.useCallback((function(e){var t=e.target,n=t.name,a=t.value;p((function(e){return Object(g.a)(Object(g.a)({},e),{},Object(O.a)({},n,a))}))}),[u]);o.a.useEffect((function(){var e=u.placeName.trim().length>1,t=u.link.trim().length>1;_({nameValid:e,linkValid:t})}),[u]);var f=u.placeName,v=u.link,k=b.nameValid,C=b.linkValid,y=k&&C;return Object(d.jsxs)(x,{title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",name:"add",buttonText:i,isOpen:n,onClose:a,stopProp:c,onSubmit:function(e){e.preventDefault(),t({name:f,link:v})},valid:y,children:[Object(d.jsx)("input",{value:f,onChange:h,type:"text",name:"placeName",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",id:"place",className:"popup__input popup__input_type_place",required:!0,minLength:"2"}),Object(d.jsx)("input",{value:v,onChange:h,type:"url",name:"link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",id:"src",className:"popup__input popup__input_type_src",required:!0})]})}function N(e){var t=e.onCardDelete,n=e.card,a=e.onClose,o=e.stopProp,c=e.buttonText;return Object(d.jsx)(x,{title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",name:"del",buttonText:c,isOpen:n,onClose:a,stopProp:o,onSubmit:function(e){e.preventDefault(),t(n)},valid:!0})}var S=function(e){var t=e.title,n=e.name,a=e.buttonText,c=e.onLogIn,i=o.a.useState({email:"",password:""}),s=Object(r.a)(i,2),l=s[0],u=s[1],p=function(e){var t=e.target,n=t.name,a=t.value;u((function(e){return Object(g.a)(Object(g.a)({},e),{},Object(O.a)({},n,a))}))},m=l.email,j=l.password;return Object(d.jsx)("div",{className:"enter",children:Object(d.jsxs)(v,{title:t,name:n,onSubmit:function(e){e.preventDefault();var t=l.email,n=l.password;n&&t&&c(n,t)},buttonText:a,valid:"true",type:"login",children:[Object(d.jsx)("input",{value:m,type:"url",name:"email",placeholder:"Email",id:"email",className:"popup__input popup__input_type_login",onChange:p,required:!0}),Object(d.jsx)("input",{value:j,type:"password",name:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",id:"password",className:"popup__input popup__input_type_login",onChange:p,required:!0})]})})};var T=function(e){var t=e.title,n=e.name,a=e.buttonText,c=e.onRegister,i=o.a.useState({password:"",email:""}),s=Object(r.a)(i,2),l=s[0],u=s[1],m=function(e){var t=e.target,n=t.name,a=t.value;u((function(e){return Object(g.a)(Object(g.a)({},e),{},Object(O.a)({},n,a))}))},j=l.password,b=l.email;return Object(d.jsxs)("div",{className:"enter",children:[Object(d.jsxs)(v,{title:t,name:n,onSubmit:function(e){e.preventDefault();var t=l.password,n=l.email;c(t,n)},buttonText:a,valid:"true",type:"login",children:[Object(d.jsx)("input",{value:b,type:"url",name:"email",placeholder:"Email",id:"regemail",className:"popup__input popup__input_type_login",onChange:m,required:!0}),Object(d.jsx)("input",{alue:j,type:"password",name:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",id:"regpassword",className:"popup__input popup__input_type_login",onChange:m,required:!0})]}),Object(d.jsxs)("p",{className:"enter__text",children:["\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b? ",Object(d.jsx)(p.b,{to:"/sign-in",className:"enter__link",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})};function P(e){var t=e.isOpen,n=e.onClose,a=e.stopProp,o=e.state;return Object(d.jsx)("div",{className:"popup ".concat(t&&"popup_opened"),onClick:n,children:Object(d.jsxs)("div",{className:"popup__container",onClick:a,children:[Object(d.jsx)("button",{type:"button",className:"popup__close-btn","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u0431\u0435\u0437 \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f",onClick:n}),Object(d.jsx)("div",{className:"popup__img ".concat(o?"popup__img_type_success":"popup__img_type_bad")}),Object(d.jsx)("h2",{className:"popup__heading popup__heading_type_reg",children:o?"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!":"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437."})]})})}var w=n(21),I=function(e){var t=e.component,n=Object(w.a)(e,["component"]);return Object(d.jsx)(l.b,{children:function(){return n.loggedIn?Object(d.jsx)(t,Object(g.a)({},n)):Object(d.jsx)(l.a,{to:"/sign-in"})}})},E=n(22),A=n(23),L="".concat(window.location.protocol,"//").concat("api.capibara.students.nomoredomains.monster"),D=function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))},R=new(function(){function e(t){Object(E.a)(this,e),this._url=t.baseUrl,this._headers=t.headers}return Object(A.a)(e,[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}},{key:"getInitialData",value:function(e){return Promise.all([this.getProfileInfo(e),this.getInitialCards(e)])}},{key:"getInitialCards",value:function(e){return fetch("".concat(this._url,"/cards"),{headers:{Authorization:"Bearer ".concat(e),"Content-Type":"application/json"}}).then(this._checkResponse)}},{key:"getProfileInfo",value:function(e){return fetch("".concat(this._url,"/users/me"),{headers:{Authorization:"Bearer ".concat(e),"Content-Type":"application/json"}}).then(this._checkResponse)}},{key:"postItem",value:function(e,t){return fetch("".concat(this._url,"/cards"),{method:"POST",headers:{Authorization:"Bearer ".concat(t),"Content-Type":"application/json"},body:JSON.stringify({name:e.name,link:e.link})}).then(this._checkResponse)}},{key:"deleteItem",value:function(e,t){return fetch("".concat(this._url,"/cards/").concat(e),{method:"DELETE",headers:{Authorization:"Bearer ".concat(t),"Content-Type":"application/json"}}).then(this._checkResponse)}},{key:"editProfileInfo",value:function(e,t){return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:{Authorization:"Bearer ".concat(t),"Content-Type":"application/json"},body:JSON.stringify({name:e.name,about:e.about})}).then(this._checkResponse)}},{key:"editAvatar",value:function(e,t){return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:{Authorization:"Bearer ".concat(t),"Content-Type":"application/json"},body:JSON.stringify({avatar:e.avatar})}).then(this._checkResponse)}},{key:"setLike",value:function(e,t){return fetch("".concat(this._url,"/cards/").concat(e,"/likes"),{method:"PUT",headers:{Authorization:"Bearer ".concat(t),"Content-Type":"application/json"}}).then(this._checkResponse)}},{key:"deleteLike",value:function(e,t){return fetch("".concat(this._url,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:{Authorization:"Bearer ".concat(t),"Content-Type":"application/json"}}).then(this._checkResponse)}}]),e}())({baseUrl:L});var V=function(){var e=Object(l.g)(),t=o.a.useState(!1),n=Object(r.a)(t,2),a=n[0],c=n[1],i=o.a.useState(!1),u=Object(r.a)(i,2),p=u[0],_=u[1],O=o.a.useState(!1),g=Object(r.a)(O,2),v=g[0],x=g[1],w=o.a.useState(null),E=Object(r.a)(w,2),A=E[0],V=E[1],B=o.a.useState(null),U=Object(r.a)(B,2),q=U[0],z=U[1],J=o.a.useState([]),F=Object(r.a)(J,2),M=F[0],H=F[1],G=o.a.useState(!1),Y=Object(r.a)(G,2),K=Y[0],Q=Y[1],W=o.a.useState(!1),X=Object(r.a)(W,2),Z=X[0],$=X[1],ee=o.a.useState(!1),te=Object(r.a)(ee,2),ne=te[0],ae=te[1],oe=o.a.useState(""),ce=Object(r.a)(oe,2),ie=ce[0],se=ce[1],re=o.a.useState("\u0414\u0430"),le=Object(r.a)(re,2),ue=le[0],pe=le[1],de=o.a.useState("\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"),me=Object(r.a)(de,2),je=me[0],be=me[1],_e=o.a.useState("\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"),he=Object(r.a)(_e,2),fe=he[0],Oe=he[1],ge=o.a.useState("\u0421\u043e\u0437\u0434\u0430\u0442\u044c"),ve=Object(r.a)(ge,2),xe=ve[0],ke=ve[1],Ce=o.a.useState(o.a.useContext(b)),ye=Object(r.a)(Ce,2),Ne=ye[0],Se=ye[1],Te=function(){x(!1),c(!1),_(!1),V(null),z(null),Q(!1)},Pe=function(e){e.stopPropagation()};o.a.useEffect((function(){if(ne){var e=localStorage.getItem("jwt"),t=function(e){"Escape"===e.key&&Te()};return R.getInitialData(e).then((function(e){Se(e[0]),H(e[1].reverse())})).catch((function(e){console.log(e)})),document.addEventListener("keydown",t),function(){document.removeEventListener("keydown",t)}}}),[ne]),o.a.useEffect((function(){Ie()}),[ne]);var we=function(e){$(e)},Ie=function(){if(localStorage.getItem("jwt")){var t=localStorage.getItem("jwt");(n=t,fetch("".concat(L,"/users/me"),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(n)}}).then(D)).then((function(t){t.email!==ie&&(se(t.email),Se(t)),ae(!0),e.push("/")})).catch((function(e){console.log(e)}))}var n};return Object(d.jsxs)(b.Provider,{value:Ne,children:[Object(d.jsx)(m,{loggedIn:ne,logIn:function(e){ae(e)},userEmail:ie,removeUser:function(e){Se(e)},removeEmail:function(e){se(e)}}),Object(d.jsxs)(l.d,{children:[Object(d.jsx)(l.b,{path:"/sign-in",children:Object(d.jsx)(S,{title:"\u0412\u0445\u043e\u0434",buttonText:"\u0412\u043e\u0439\u0442\u0438",name:"login",onLogIn:function(t,n){(function(e,t){return fetch("".concat(L,"/signin"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:t,password:e})}).then(D)})(t,n).then((function(t){localStorage.setItem("jwt",t.token),ae(!0),e.push("/")})).catch((function(e){we(!1),Q(!0),console.log(e)}))}})}),Object(d.jsx)(l.b,{path:"/sign-up",children:Object(d.jsx)(T,{title:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",buttonText:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f",name:"register",onRegister:function(t,n){(function(e,t){return fetch("".concat(L,"/signup"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({password:e,email:t})}).then(D)})(t,n).then((function(){we(!0),Q(!0),e.push("/sign-in")})).catch((function(e){console.log(e),we(!1),Q(!0)}))}})}),Object(d.jsx)(I,{path:"/",exact:!0,loggedIn:ne,component:h,onEditAvatar:function(){x(!0)},onEditProfile:function(){c(!0)},onAddPlace:function(){_(!0)},onCardClick:function(e){V(e)},onDelClick:function(e){z(e)},cards:M,onCardLike:function(e){var t=localStorage.getItem("jwt"),n=e.likes.some((function(e){return e===Ne._id})),a=function(t){var n=M.map((function(n){return n._id===e._id?t:n}));H(n)};n?R.deleteLike(e._id,t).then((function(e){a(e)})).catch((function(e){console.log(e)})):R.setLike(e._id,t).then((function(e){a(e)})).catch((function(e){console.log(e)}))}})]}),Object(d.jsx)(j,{}),Object(d.jsx)(k,{isOpen:a,onClose:Te,stopProp:Pe,onUpdateUser:function(e){var t=localStorage.getItem("jwt");be("\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435..."),R.editProfileInfo(e,t).then((function(e){Se(e),Te()})).catch((function(e){console.log(e)})).finally((function(){be("\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c")}))},buttonText:je}),Object(d.jsx)(C,{isOpen:v,onClose:Te,stopProp:Pe,onUpdateAvatar:function(e){var t=localStorage.getItem("jwt");Oe("\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435..."),R.editAvatar(e,t).then((function(e){Se(e),Te()})).catch((function(e){console.log(e)})).finally((function(){Oe("\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c")}))},buttonText:fe}),Object(d.jsx)(y,{isOpen:p,onClose:Te,stopProp:Pe,onAddPlace:function(e){var t=localStorage.getItem("jwt");ke("\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435..."),R.postItem(e,t).then((function(e){H([e].concat(Object(s.a)(M))),Te()})).catch((function(e){console.log(e)})).finally((function(){ke("\u0421\u043e\u0437\u0434\u0430\u0442\u044c")}))},buttonText:xe}),Object(d.jsx)(N,{onClose:Te,stopProp:Pe,card:q,onCardDelete:function(e){var t=localStorage.getItem("jwt");pe("\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435..."),R.deleteItem(e._id,t).then((function(){var t=M.filter((function(t){return t!==e}));H(t),Te()})).catch((function(e){console.log(e)})).finally((function(){pe("\u0414\u0430")}))},buttonText:ue}),Object(d.jsx)(f,{card:A,onClose:Te,stopProp:Pe}),Object(d.jsx)(P,{isOpen:K,onClose:Te,stopProp:Pe,state:Z})]})},B=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,40)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),o(e),c(e),i(e)}))};i.a.render(Object(d.jsx)(o.a.StrictMode,{children:Object(d.jsx)(p.a,{children:Object(d.jsx)(V,{})})}),document.getElementById("root")),B()}},[[39,1,2]]]);
//# sourceMappingURL=main.399f2474.chunk.js.map