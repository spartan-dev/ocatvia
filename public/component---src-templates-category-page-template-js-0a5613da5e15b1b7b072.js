(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{WaCy:function(e,t,a){var n=a("q1tI");function r(e){return n.createElement("svg",e,[n.createElement("title",{key:0},"SEARCH"),n.createElement("g",{id:"propuesta-1",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",key:1},n.createElement("g",{id:"SUBGATEGORÍA-TEQUILA",transform:"translate(-1002.000000, -214.000000)",stroke:"#E85633",strokeWidth:"2"},n.createElement("g",{id:"SEARCH",transform:"translate(1004.000000, 214.000000)"},n.createElement("polygon",{id:"Path",points:"0.702008232 1.36051306 15.3510573 1.35369299 9.34464476 9.35093608 9.35873357 13.9990766 6.67943549 15.365425 6.65305261 9.32706585"}))))])}r.defaultProps={width:"20px",height:"17px",viewBox:"0 0 20 17",version:"1.1"},e.exports=r,r.default=r},X1pz:function(e,t,a){"use strict";a.r(t);var n=a("KQm4"),r=a("q1tI"),l=a.n(r),c=a("wEEd"),i=a("0Ve7"),s=function(e){var t=e.onChange,a=e.arr,n={name:"TAMAÑO",arr:e.weights};return l.a.createElement("div",{className:"text-navbar px-5 mb-16"},l.a.createElement("p",{className:"title"},"FILTROS"),l.a.createElement("div",{className:"mt-8"},l.a.createElement("p",{className:"font-gotham-medium my-6"},n.name),l.a.createElement("ul",null,n.arr.map((function(e,n){return l.a.createElement("li",{className:"font-gotham-book my-3",key:n},l.a.createElement("input",{type:"checkbox",name:e,checked:a.includes(e),className:"checkbox mr-5",onChange:function(e){var a=e.target;return t(a)}}),l.a.createElement("span",null,e))})))))},m=a("I/Ru"),o=a("bPrE"),u=a("eH4H"),d=a("Al62"),p=a("6Drz"),f=a.n(p),E=a("1pbw"),b=a.n(E),g=a("WaCy"),h=a.n(g);t.default=function(e){var t=e.data,a=t.shopifyCollection,p=a.products,E=a.title,g=t.allShopifyCollection.edges,v=Object(r.useState)(!1),k=v[0],N=v[1],x=Object(r.useState)([]),C=x[0],y=x[1],w=Object(r.useState)(!1),O=w[0],S=w[1],L=Object(r.useState)(p),A=L[0],I=L[1],R=Object(c.b)(k,null,d.b),j=Object(n.a)(new Set(p.map((function(e){return e.variants[0].weight+" oz"})))),z=function(e){var t=e.name;if(e.checked){y((function(e){return[t].concat(Object(n.a)(e))}));var a=p.filter((function(e){return e.variants[0].weight===Number(t.replace(/ oz/,""))}));C.length>0?I((function(e){return[].concat(Object(n.a)(a),Object(n.a)(e))})):I(a)}else{y(C.filter((function(e){return e!==t})));var r=A.filter((function(e){return e.variants[0].weight!==Number(t.replace(/ oz/,""))}));C.length-1>0?I(r):I(p)}},P=[{name:"Menor a mayor precio",click:function(){A.sort((function(e,t){return e.variants[0].price-t.variants[0].price}))}},{name:"Mayor a menor precio",click:function(){A.sort((function(e,t){return t.variants[0].price-e.variants[0].price}))}},{name:"Alfabéticamente",click:function(){A.sort((function(e,t){return e.title<t.title?-1:e.title>t.title?1:0}))}}];return l.a.createElement(m.a,null,R.map((function(e){var t=e.item,a=e.key,n=e.props;return t&&l.a.createElement(o.a,{key:a,className:"shadow-yellow fixed p-6",style:n,onClick:function(){return N(!k)}},l.a.createElement(s,{onChange:z,arr:C,weights:j}))})),l.a.createElement("div",{className:"container"},l.a.createElement("p",{className:"title pt-6 md:pt-24"},E),l.a.createElement("div",{className:"sm:flex justify-between items-center mt-8 sm:mt-2 mb-14"},l.a.createElement("p",{className:"price"},A.length,l.a.createElement("span",{className:"inline-block ml-1 currency"},"productos")),l.a.createElement("div",{className:"font-gotham-medium flex md:w-96"},l.a.createElement("div",{className:"flex items-center h-12 border-r-2 border-yellow"},l.a.createElement("span",null,"FILTRAR"),l.a.createElement("button",{onClick:function(){return N(!0)}},l.a.createElement(h.a,{className:"ml-2 mr-6"}))),l.a.createElement("div",{className:"flex items-center relative"},l.a.createElement("span",{className:"inline-block ml-4 mr-2"},"ORDENAR POR"),l.a.createElement("button",{onClick:function(){return S(!O)}},l.a.createElement(f.a,{className:O&&"transform rotate-180"})),O&&l.a.createElement("div",{className:"absolute top-12 z-20 text-sm bg-white border border-beige w-48",onMouseLeave:function(){return S(!1)}},P.map((function(e,t){return l.a.createElement("button",{key:t,className:"py-2 px-4 hover:bg-pink-light w-full text-left border-b border-beige",onClick:function(){S(!1),e.click()}},e.name)})))))),0!==C.length&&l.a.createElement("div",{className:"bg-pink-light lg:mr-8 pt-5 px-6 flex flex-col lg:flex-row justify-end items-center mb-10"},l.a.createElement("ul",{className:"flex flex-row-reverse flex-wrap"},C.map((function(e,t){return l.a.createElement("li",{key:t,className:"flex items-center justify-between mb-5 filter-badge"},l.a.createElement("span",null,e),l.a.createElement("button",{className:"ml-1",onClick:function(){return z({name:e,checked:!1})}},l.a.createElement(b.a,{className:"w-4 h-4"})))}))),l.a.createElement("button",{className:"font-gotham-book text-red w-auto mb-5",onClick:function(){y([]),I(p)}},"Limpiar filtros")),l.a.createElement("div",{className:"flex flex-wrap sm:-mr-7"},A.map((function(e,t){return l.a.createElement(u.a,{key:t,img:e.variants[0].image,name:e.title,handle:e.handle,mililiters:e.variants[0].weight,price:e.variants[0].price,variantId:e.variants[0].shopifyId,btnClassName:"btn-shop",className:"product-card sm:mr-7"})}))),l.a.createElement(i.a,{title:"CATEGORÍAS RELACIONADAS",edges:Object(d.a)(g),className:"lg:mt-4 mb-4 lg:mb-12"})))}},YEES:function(e,t,a){var n=a("q1tI");function r(e){return n.createElement("svg",e,[n.createElement("title",{key:0},"SHOP 2"),n.createElement("g",{id:"propuesta-1",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",key:1},n.createElement("g",{id:"home",transform:"translate(-380.000000, -1127.000000)",stroke:"#ECAB2F",strokeWidth:"2"},n.createElement("g",{id:"SELECTION",transform:"translate(158.000000, 758.000000)"},n.createElement("g",{id:"Group",transform:"translate(222.000000, 369.000000)"},[n.createElement("path",{d:"M21.9552862,11 C22.4767874,11 22.954511,11.2003818 23.3122086,11.5307275 C23.6699062,11.8610733 23.9075777,12.3213829 23.9489749,12.8412384 L23.9489749,12.8412384 L24.7452956,22.8412384 C24.7891364,23.3917804 24.6056756,23.9079726 24.2736191,24.2974894 C23.9486913,24.6786441 23.4814795,24.9385041 22.9457286,24.9905633 L22.9457286,24.9905633 L9.29369104,25 C8.74140629,25 8.24140629,24.7761424 7.87947748,24.4142136 C7.52662829,24.0613644 7.30500966,23.5772846 7.29411234,23.041465 L7.29411234,23.041465 L8.23770623,12.8137481 C8.28577838,12.2997855 8.52550258,11.8463484 8.88226023,11.5214021 C9.23901788,11.1964557 9.71280897,11 10.2290149,11 L10.2290149,11 Z",id:"Rectangle",key:0}),n.createElement("path",{d:"M11,13.4884017 L11,8 C11,6.8954305 11.8954305,6 13,6 L19,6 C20.1045695,6 21,6.8954305 21,8 L21,13.7025326 L21,13.7025326",id:"Rectangle",key:1}),n.createElement("circle",{id:"Oval",cx:"16",cy:"16",r:"15",key:2})]))))])}r.defaultProps={width:"32px",height:"32px",viewBox:"0 0 32 32",version:"1.1"},e.exports=r,r.default=r},eH4H:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),l=a("Wbzz"),c=a("9eSz"),i=a.n(c),s=a("iGDP"),m=a("YEES"),o=a.n(m),u=a("FGyW");t.a=function(e){var t=e.img,a=e.name,c=e.handle,m=e.mililiters,d=e.price,p=e.className,f=e.btnClassName,E=e.variantId,b=Object(n.useContext)(s.a).addProductToCart,g=Object(l.useStaticQuery)("2757653515");return r.a.createElement("article",{className:p},r.a.createElement("div",{className:"bg-white mb-12"},r.a.createElement("div",{className:"p-9 border border-beige relative"},null==t?r.a.createElement(i.a,{fluid:g.allFile.edges[0].node.childImageSharp.fluid,alt:a,title:a}):r.a.createElement(i.a,{fluid:t.localFile.childImageSharp.fluid,alt:a,title:a}),r.a.createElement("button",{className:f,onClick:function(){b(E).then((function(e){u.b.dark("Item agregado",{position:"top-right",autoClose:5e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}))}},r.a.createElement(o.a,null))),r.a.createElement("div",{className:"flex flex-col items-start"},r.a.createElement(l.Link,{to:"/"+c,className:"name text-lg sm:text-base md:text-sm lg:text-base xl:text-lg mt-4 "},a),r.a.createElement("p",{className:"mililiters my-1"},m," oz"),r.a.createElement("p",{className:"price"},d,r.a.createElement("span",{className:"inline-block ml-1 currency"},"USD")))),r.a.createElement(u.a,{position:"top-right",autoClose:5e3,hideProgressBar:!0,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!1}))}}}]);
//# sourceMappingURL=component---src-templates-category-page-template-js-0a5613da5e15b1b7b072.js.map