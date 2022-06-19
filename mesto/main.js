(()=>{"use strict";var e={d:(t,r)=>{for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};function t(e){e.classList.remove("popup_opened"),document.removeEventListener("keyup",e.ESChandler),e.ESChandler=null}function r(e){e.classList.add("popup_opened"),e.ESChandler=function(e){return function(r){"Escape"===r.key&&t(e)}}(e),document.addEventListener("keyup",e.ESChandler)}e.d({},{a:()=>L});var n={baseUrl:"https://nomoreparties.co/v1/plus-cohort-11",headers:{authorization:"7da4e682-e653-495f-9d74-1a03b7d57194","Content-Type":"application/json"}},o="/cards",c="/users/me",a="/cards/likes/";function l(e,t){return e.ok?e.json():Promise.reject("".concat(t+e.status))}var u=document.querySelector("#card-template").content,i=document.querySelector(".big-img"),d=i.querySelector("img"),s=i.querySelector("figcaption");function f(e,t){e.querySelector(".card__like-count").textContent=t.likes.length,e.myLike=t.likes.some((function(e){return e._id===L})),e.myLike?e.querySelector(".card__like").classList.add("card__like_set"):e.querySelector(".card__like").classList.remove("card__like_set")}function m(e){var t=u.querySelector(".card").cloneNode(!0);t.querySelector(".card__name").textContent=e.name;var c=t.querySelector(".card__image");return c.alt=e.name,c.src=e.link,t._id=e._id,t.ownerId=e.owner._id,t.ownerId!==L?t.querySelector(".card__delete").style.display="none":t.querySelector(".card__delete").addEventListener("click",(function(e){(function(e){var t=e.target.closest(".card");return fetch(n.baseUrl+o+"/"+t._id,{method:"DELETE",headers:n.headers}).then((function(e){return l(e,"Ошибка deleteCard: ")}))})(e).then((function(){e.target.closest(".card").remove(),console.log("delete card success")})).catch((function(e){console.log(e)}))})),c.addEventListener("click",(function(){d.src=c.src,d.alt=e.name,s.textContent=e.name,r(i)})),f(t,e),t.querySelector(".card__like").addEventListener("click",(function(e){(function(e){var t=e.target.closest(".card");return t.myLike?fetch(n.baseUrl+a+t._id,{method:"DELETE",headers:n.headers}).then((function(e){return l(e,"Ошибка delete like: ")})):fetch(n.baseUrl+a+t._id,{method:"PUT",headers:n.headers}).then((function(e){return l(e,"Ошибка put like: ")}))})(e).then((function(e){console.log("put/delete like success"),f(t,e)})).catch((function(e){console.log(e)}))})),t}function p(e,t){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];r?t.prepend(e):t.append(e)}var y={formSelector:".form",inputSelector:".form__field",submitButtonSelector:".form__button",inactiveButtonClass:"form__button_disabled",inputErrorClass:"form__field_error",errorClass:"form__error_visible"},v=function(e,t){var r=e.querySelector(t.formSelector),n=Array.from(e.querySelectorAll(t.inputSelector)),o=r.querySelector(t.submitButtonSelector);n.forEach((function(e){b(r,e,t.inputErrorClass,t.errorClass),e.value=""})),_(n,o,t.inactiveButtonClass)};function _(e,t,r){h(e)?(t.classList.add(r),t.disabled=!0):(t.classList.remove(r),t.disabled=!1)}var h=function(e){return e.some((function(e){return!e.validity.valid}))},S=function(e,t,r,n,o){var c=e.querySelector(".".concat(t.id,"-error"));t.classList.add(n),c.textContent=r,c.classList.add(o)},b=function(e,t,r,n){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(r),o.classList.remove(n),o.textContent=""},q=document.querySelector(".profile__name"),g=document.querySelector(".profile__description"),E=document.querySelector(".profile__avatar");function C(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;e&&(q.textContent=e),t&&(g.textContent=t),r&&(E.style.backgroundImage="url('".concat(r,"')"))}function k(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var L,A,x=document.querySelector(".content"),U=x.querySelector(".profile__avatar"),O=document.querySelector(".popup-avatar-edit"),P=O.querySelector('.form[name="popup-avatar-edit-form"]'),j=document.querySelector(".popup-profile-edit"),w=x.querySelector(".profile__edit-button"),T=j.querySelector('.form[name="popup-profile-edit-form"]'),B=x.querySelector(".profile__name"),I=x.querySelector(".profile__description"),D=j.querySelector("#form__field-name"),N=j.querySelector("#form__field-profession"),J=P.querySelector("#form__field-ava"),M=document.querySelector(".popup-card-add"),H=x.querySelector(".profile__add-button"),z=M.querySelector('.form[name="popup-card-add-form"]'),$=M.querySelector("#card-add-name"),F=M.querySelector("#card-add-link"),G=x.querySelector(".elements"),K=document.querySelectorAll(".popup"),Q=document.querySelectorAll(".popup__close");Promise.all([fetch(n.baseUrl+o,{headers:n.headers}).then((function(e){return l(e,"Ошибка getInitialCards: ")})),fetch(n.baseUrl+c,{headers:n.headers}).then((function(e){return l(e,"Ошибка getMe: ")}))]).then((function(e){var t,r,n=(r=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,c=[],a=!0,l=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(c.push(n.value),!t||c.length!==t);a=!0);}catch(e){l=!0,o=e}finally{try{a||null==r.return||r.return()}finally{if(l)throw o}}return c}}(t,r)||function(e,t){if(e){if("string"==typeof e)return k(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?k(e,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=n[0],c=n[1];console.log("init cards",o),o.forEach((function(e){return p(m(e),G)})),console.log("user",c),C(c.name,c.about,c.avatar),L=c._id})).catch((function(e){console.log(e)})),U.addEventListener("click",(function(){v(O,y),r(O)})),H.addEventListener("click",(function(){return r(M)})),w.addEventListener("click",(function(){v(j,y),r(j),D.value=B.textContent,N.value=I.textContent})),P.addEventListener("submit",(function(e){var r;e.preventDefault(),P.querySelector(".form__button").textContent="Сохранение...",(r=J.value,fetch(n.baseUrl+"/users/me/avatar",{method:"PATCH",headers:n.headers,body:JSON.stringify({avatar:r})}).then((function(e){return l(e,"Ошибка editAvatar: ")}))).then((function(e){console.log("user avatar updated",e),C(null,null,e.avatar),t(O)})).catch((function(e){console.log(e)})).finally((function(){P.querySelector(".form__button").textContent="Сохранить"}))})),T.addEventListener("submit",(function(e){var r,o;e.preventDefault(),T.querySelector(".form__button").textContent="Сохранение...",(r=D.value,o=N.value,fetch(n.baseUrl+c,{method:"PATCH",headers:n.headers,body:JSON.stringify({name:r,about:o})}).then((function(e){return l(e,"Ошибка editProfile: ")}))).then((function(e){console.log("userinfo updated",e),C(e.name,e.about),t(j)})).catch((function(e){console.log(e)})).finally((function(){T.querySelector(".form__button").textContent="Сохранить"}))})),H.addEventListener("click",(function(){v(M,y),r(M)})),z.addEventListener("submit",(function(e){var r,c;e.preventDefault(),z.querySelector(".form__button").textContent="Сохранение...",(r=$.value,c=F.value,fetch(n.baseUrl+o,{method:"POST",headers:n.headers,body:JSON.stringify({name:r,link:c})}).then((function(e){return l(e,"Ошибка addCardOnServer: ")}))).then((function(e){p(m(e),G,!0),t(M),$.value="",F.value=""})).catch((function(e){console.log(e)})).finally((function(){z.querySelector(".form__button").textContent="Сохранить"}))})),Q.forEach((function(e){e.addEventListener("click",(function(){t(e.closest(".popup"))}))})),K.forEach((function(e){e.addEventListener("click",(function(r){r.target.classList.contains("popup")&&t(e)}))})),A=y,Array.from(document.querySelectorAll(A.formSelector)).forEach((function(e){e.addEventListener("submit",(function(e){e.preventDefault()})),function(e,t){var r=Array.from(e.querySelectorAll(t.inputSelector)),n=e.querySelector(t.submitButtonSelector);_(r,n,t.inactiveButtonClass),r.forEach((function(o){o.addEventListener("input",(function(){(function(e,t,r,n){t.validity.valid?b(e,t,r,n):S(e,t,t.validationMessage,r,n)})(e,o,t.inputErrorClass,t.errorClass),_(r,n,t.inactiveButtonClass)}))}))}(e,A)}))})();
//# sourceMappingURL=main.js.map