(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{39:function(e,n,t){"use strict";t.r(n);var r=t(15),c=t.n(r),o=t(6),u=t(3),i=t(1),a=t(0),d=function(e){var n=e.dPerson,t=e.id;return Object(a.jsx)("button",{onClick:function(){return n(t)},children:"delete"})},s=function(e){var n=e.person,t=e.dPerson;return Object(a.jsxs)("li",{children:[n.name," ",n.number,Object(a.jsx)(d,{id:n.id,dPerson:t})]})},l=function(e){var n=e.people,t=e.dPerson;return Object(a.jsx)("ul",{children:n.map((function(e){return Object(a.jsx)(s,{person:e,dPerson:t},e.name.split("").reduce((function(e,n){return e+n.charCodeAt(0)}),0))}))})},b=function(e){return Object(a.jsxs)("form",{onSubmit:e.addPerson,children:[Object(a.jsxs)("div",{children:["name: ",Object(a.jsx)("input",{value:e.newName,onChange:e.handleNewName})]}),Object(a.jsxs)("div",{children:["number: ",Object(a.jsx)("input",{value:e.newNumber,onChange:e.handleNewNumber})]}),Object(a.jsx)("div",{children:Object(a.jsx)("button",{type:"submit",children:"add"})})]})},f=function(e){var n=e.filter,t=e.handleFilter;return Object(a.jsxs)(a.Fragment,{children:["filter shown with ",Object(a.jsx)("input",{value:n,onChange:t})]})},j=t(4),h=t.n(j),m="/api/people",O=function(){return h.a.get(m).then((function(e){return e.data}))},p=function(e){return h.a.post(m,e).then((function(e){return e.data}))},v=function(e,n){return h.a.put("".concat(m,"/").concat(e),n).then((function(e){return e.data}))},x=function(e,n){return h.a.delete("".concat(m,"/").concat(e),n).then((function(e){return e.data}))},g=function(e){var n=e.message;return null===n?null:Object(a.jsx)("div",{style:{color:"green",fontSize:20,background:"lightgrey",borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10},children:n})},w=function(e){var n=e.message;return null===n?null:Object(a.jsx)("div",{style:{color:"red",fontSize:20,background:"lightgrey",borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10},children:n})},N=function(){var e=Object(i.useState)([]),n=Object(u.a)(e,2),t=n[0],r=n[1],c=Object(i.useState)(""),d=Object(u.a)(c,2),s=d[0],j=d[1],h=Object(i.useState)(""),m=Object(u.a)(h,2),N=m[0],S=m[1],y=Object(i.useState)(""),k=Object(u.a)(y,2),P=k[0],C=k[1],T=Object(i.useState)(null),A=Object(u.a)(T,2),B=A[0],F=A[1],z=Object(i.useState)(null),D=Object(u.a)(z,2),E=D[0],I=D[1];Object(i.useEffect)((function(){O().then((function(e){r(e)}))}),[]);var J=""===P?t:t.filter((function(e){return e.name.toLowerCase().includes(P.toLowerCase())}));return Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:"Phonebook"}),Object(a.jsx)(g,{message:B}),Object(a.jsx)(w,{message:E}),Object(a.jsx)(f,{filter:P,handleFilter:function(e){return C(e.target.value)}}),Object(a.jsx)("h3",{children:"Add a new"}),Object(a.jsx)(b,{addPerson:function(e){e.preventDefault();var n={name:s,number:N};t.map((function(e){return e.name})).includes(s)?function(e,n){if(window.confirm("".concat(e.name," is already in the phonebook, replace the old number with a new one?"))){var c=Object(o.a)(Object(o.a)({},e),{},{number:n});v(e.id,c).then((function(n){r(t.map((function(t){return t.id!==e.id?t:n})))})).then((function(e){F("Modified ".concat(s)),setTimeout((function(){F(null)}),5e3),j("")})).catch((function(e){I("".concat(e.response.data.error)),setTimeout((function(){I(null)}),5e3)}))}}(t.find((function(e){return e.name===s})),N):p(n).then((function(e){r(t.concat(e))})).then((function(e){F("Added ".concat(s)),setTimeout((function(){F(null)}),5e3),j("")})).catch((function(e){I("".concat(e.response.data.error)),setTimeout((function(){I(null)}),5e3)}))},newName:s,handleNewName:function(e){return j(e.target.value)},newNumber:N,handleNewNumber:function(e){return S(e.target.value)}}),Object(a.jsx)("h3",{children:"Numbers"}),Object(a.jsx)(l,{people:J,dPerson:function(e){var n=t.find((function(n){return n.id===e}));window.confirm("Delete ".concat(n.name))&&x(e,n).then((function(n){r(t.filter((function(n){return n.id!==e})))})).catch((function(e){I("Information of ".concat(n.name," has already been removed from server")),setTimeout((function(){I(null)}),5e3)}))}})]})};c.a.render(Object(a.jsx)(N,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.3ec064fa.chunk.js.map