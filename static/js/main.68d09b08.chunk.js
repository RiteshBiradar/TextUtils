(this["webpackJsonplearning-react"]=this["webpackJsonplearning-react"]||[]).push([[0],{15:function(e,a,t){},16:function(e,a,t){},17:function(e,a,t){"use strict";t.r(a);var l=t(0),o=t.n(l),n=t(6),c=t.n(n);t(15),t(16);function r(){const[e,a]=Object(l.useState)({color:"black",backgroundColor:"white"}),[t,n]=Object(l.useState)("Enable Dark Mode");return o.a.createElement("div",{className:"container",style:e},o.a.createElement("div",{className:"accordion",id:"accordionExample"},o.a.createElement("div",{className:"accordion-item"},o.a.createElement("h2",{className:"accordion-header"},o.a.createElement("button",{className:"accordion-button",type:"button",style:e,"data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne"},"Accordion Item #1")),o.a.createElement("div",{id:"collapseOne",className:"accordion-collapse collapse show","data-bs-parent":"#accordionExample"},o.a.createElement("div",{className:"accordion-body",style:e},o.a.createElement("strong",null,"This is the first item's accordion body.")," It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",o.a.createElement("code",null,".accordion-body"),", though the transition does limit overflow."))),o.a.createElement("div",{className:"accordion-item"},o.a.createElement("h2",{className:"accordion-header"},o.a.createElement("button",{className:"accordion-button collapsed",style:e,type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo"},"Accordion Item #2")),o.a.createElement("div",{id:"collapseTwo",className:"accordion-collapse collapse","data-bs-parent":"#accordionExample"},o.a.createElement("div",{className:"accordion-body",style:e},o.a.createElement("strong",null,"This is the second item's accordion body.")," It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",o.a.createElement("code",null,".accordion-body"),", though the transition does limit overflow."))),o.a.createElement("div",{className:"accordion-item"},o.a.createElement("h2",{className:"accordion-header"},o.a.createElement("button",{className:"accordion-button collapsed",style:e,type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree"},"Accordion Item #3")),o.a.createElement("div",{id:"collapseThree",className:"accordion-collapse collapse","data-bs-parent":"#accordionExample"},o.a.createElement("div",{className:"accordion-body",style:e},o.a.createElement("strong",null,"This is the third item's accordion body.")," It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",o.a.createElement("code",null,".accordion-body"),", though the transition does limit overflow.")))),o.a.createElement("div",{className:"btn btn-primary my-2",onClick:()=>{"black"===e.color?(a({color:"white",backgroundColor:"black"}),n("Enable Light Mode")):(a({color:"black",backgroundColor:"white"}),n("Enable Dark Mode"))}},t))}var s=t(3);function i(e){return o.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode)},o.a.createElement("div",{className:"container-fluid"},o.a.createElement(s.b,{className:"navbar-brand",to:"/"},e.title),o.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},o.a.createElement("span",{className:"navbar-toggler-icon"})),o.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},o.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},o.a.createElement("li",{className:"nav-item"},o.a.createElement(s.b,{className:"nav-link active","aria-current":"page",to:"/"},"Home")),o.a.createElement("li",{className:"nav-item"},o.a.createElement(s.b,{className:"nav-link active","aria-current":"page",to:"/aboutus"},"AboutUs"))),o.a.createElement("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light")},o.a.createElement("input",{className:"form-check-input",type:"checkbox",role:"switch",id:"flexSwitchCheckDefault",onClick:e.toggleMode}),o.a.createElement("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault"},"Enable ","light"===e.mode?"dark":"light"," mode")))))}function m(e){const[a,t]=Object(l.useState)("");return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",null,o.a.createElement("h1",null,e.heading),o.a.createElement("div",{className:"mb-3"},o.a.createElement("textarea",{className:"form-control",id:"myBox",rows:"8",value:a,style:{backgroundColor:"dark"===e.mode?"#00122a":"white",color:"dark"===e.mode?"white":"black"},onChange:e=>{console.log("Change has occured in the text box"),t(e.target.value)}}),o.a.createElement("button",{className:"btn btn-primary my-3",onClick:()=>{console.log("Uppercase button was clicked");let l=a.toUpperCase();t(l),e.showAlert("Converted to UpperCase","success")}}," Convert to UpperCase"),o.a.createElement("button",{className:"btn btn-primary my-3 mx-2",onClick:()=>{console.log("Lowercase button was clicked");let l=a.toLowerCase();t(l),e.showAlert("Converted to LowerCase","success")}}," Convert to LowerCase"),o.a.createElement("button",{className:"btn btn-primary my-3",onClick:()=>{console.log("Lowercase button was clicked");let l="";for(var o=a.length;o>=0;o--)l=l+=a.charAt(o);t(l),e.showAlert("The text has been reversed","success")}}," Convert to Reverse"),o.a.createElement("button",{className:"btn btn-primary my-3 mx-2",onClick:()=>{var a=document.getElementById("myBox");a.select(),navigator.clipboard.writeText(a.value),e.showAlert("Copied to clipboard!","success")}}," Copy Text"))),o.a.createElement("div",{className:"container my-3"},o.a.createElement("h1",null,"Your text summary :"),o.a.createElement("p",null,""===a?0:a.trim().split(" ").length," words, ",a.length," characters")))}function d(e){return e.alert&&o.a.createElement("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert"},o.a.createElement("strong",null,(e=>{const a=e.toLowerCase();return a.charAt(0).toUpperCase()+a.slice(1)})(e.alert.type)," :"),e.alert.msg)}var u=t(2);var h=function(){const[e,a]=Object(l.useState)("light"),[t,n]=Object(l.useState)(null),c=(e,a)=>{n({msg:e,type:a}),setTimeout(()=>{n(null)},1200)};return o.a.createElement(o.a.Fragment,null,o.a.createElement(s.a,null,o.a.createElement(i,{title:"TextUtils",mode:e,toggleMode:()=>{"light"===e?(a("dark"),document.body.style.backgroundColor="#00122a",document.body.style.color="white",c("Dark Mode has been enabled","success")):(a("light"),document.body.style.backgroundColor="white",document.body.style.color="black",c("Light Mode has been enabled","success"))}}),o.a.createElement(d,{alert:t}),o.a.createElement("div",{className:"container my-5"},o.a.createElement("div",{className:"container"},o.a.createElement(u.c,null,o.a.createElement(u.a,{exact:!0,path:"/aboutus",element:o.a.createElement(r,null)}),o.a.createElement(u.a,{exact:!0,path:"/",element:o.a.createElement(m,{heading:"Enter the text below to analyze :",mode:e,showAlert:c})}))))))};var b=e=>{e&&e instanceof Function&&t.e(3).then(t.bind(null,18)).then(a=>{let{getCLS:t,getFID:l,getFCP:o,getLCP:n,getTTFB:c}=a;t(e),l(e),o(e),n(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(h,null))),b()},7:function(e,a,t){e.exports=t(17)}},[[7,1,2]]]);
//# sourceMappingURL=main.68d09b08.chunk.js.map