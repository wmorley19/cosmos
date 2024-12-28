"use strict";(self.webpackChunkdocs_openc3_com=self.webpackChunkdocs_openc3_com||[]).push([["4045"],{6974:function(e,t,n){n.r(t),n.d(t,{metadata:()=>i,contentTitle:()=>r,default:()=>h,assets:()=>c,toc:()=>d,frontMatter:()=>a});var i=JSON.parse('{"id":"introduction","title":"Introduction","description":"This site aims to be a comprehensive guide to OpenC3 COSMOS. We\'ll cover topics such","source":"@site/docs/introduction.md","sourceDirName":".","slug":"/","permalink":"/docs/","draft":false,"unlisted":false,"editUrl":"https://github.com/OpenC3/cosmos/tree/main/docs.openc3.com/docs/introduction.md","tags":[],"version":"current","sidebarPosition":0,"frontMatter":{"title":"Introduction","sidebar_position":0,"slug":"/"},"sidebar":"defaultSidebar","next":{"title":"Getting Started","permalink":"/docs/getting-started"}}'),o=n("5893"),s=n("65");let a={title:"Introduction",sidebar_position:0,slug:"/"},r=void 0,c={},d=[{value:"So what is COSMOS, exactly?",id:"so-what-is-cosmos-exactly",level:2},{value:"COSMOS Architecture",id:"cosmos-architecture",level:3},{value:"Helpful Hints",id:"helpful-hints",level:2}];function l(e){let t={a:"a",admonition:"admonition",h2:"h2",h3:"h3",img:"img",p:"p",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"This site aims to be a comprehensive guide to OpenC3 COSMOS. We'll cover topics such\nas getting your configuration up and running, developing test and operations scripts,\nbuilding custom telemetry screens, and give you some advice on participating in the future\ndevelopment of COSMOS itself."}),"\n",(0,o.jsx)(t.h2,{id:"so-what-is-cosmos-exactly",children:"So what is COSMOS, exactly?"}),"\n",(0,o.jsx)(t.p,{children:"COSMOS is a suite of applications that can be used to control a set of embedded systems. These systems can be\nanything from test equipment (power supplies, oscilloscopes, switched power strips, UPS devices, etc), to\ndevelopment boards (Arduinos, Raspberry Pi, Beaglebone, etc), to satellites."}),"\n",(0,o.jsx)(t.h3,{id:"cosmos-architecture",children:"COSMOS Architecture"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"COSMOS Architecture",src:n(6535).Z+"",width:"1155",height:"538"})}),"\n",(0,o.jsx)(t.p,{children:"COSMOS 5 is a cloud native, containerized, microservice oriented command and control system. All the COSMOS microservices are docker containers which is why Docker is shown containing the entire COSMOS system. The green boxes on the left represent external embedded systems (Targets) which COSMOS connects to. The Redis data store contains the configuration for all the microservices, the current value table, as well as data streams containing decommutated data. The Minio data store contains plugins, targets, configuration data, text logs as well as binary logs of all the raw, decommutated, and reduced data. Users interact with COSMOS from a web browser which routes through the internal Traefik load balancer."}),"\n",(0,o.jsx)(t.p,{children:"Keep reading for an in-depth discussion of each of the COSMOS Tools."}),"\n",(0,o.jsx)(t.h2,{id:"helpful-hints",children:"Helpful Hints"}),"\n",(0,o.jsx)(t.p,{children:"Throughout this guide there are a number of small-but-handy pieces of\ninformation that can make using COSMOS easier, more interesting, and less\nhazardous. Here's what to look out for."}),"\n",(0,o.jsx)(t.admonition,{title:"ProTips\u2122 help you get more from COSMOS",type:"note",children:(0,o.jsx)(t.p,{children:"These are tips and tricks that will help you be a COSMOS wizard!"})}),"\n",(0,o.jsx)(t.admonition,{title:"Notes are handy pieces of information",type:"info",children:(0,o.jsx)(t.p,{children:"These are for the extra tidbits sometimes necessary to understand COSMOS."})}),"\n",(0,o.jsx)(t.admonition,{title:"Warnings help you not blow things up",type:"warning",children:(0,o.jsx)(t.p,{children:"Be aware of these messages if you wish to avoid certain death."})}),"\n",(0,o.jsx)(t.admonition,{title:"Find a problem in the documentation or in COSMOS itself?",type:"note",children:(0,o.jsxs)(t.p,{children:["Both using and hacking on COSMOS should be fun, simple, and easy, so if for\nsome reason you find it's a pain, please ",(0,o.jsx)(t.a,{href:"https://github.com/OpenC3/cosmos/issues/new/choose",children:"create an issue"})," on\nGitHub describing your experience so we can make it better."]})})]})}function h(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},6535:function(e,t,n){n.d(t,{Z:function(){return i}});let i=n.p+"assets/images/architecture-b78f12eba076a0c07af7abdd9dd4187c59aa6b4f5c51b47ad03f73e9f98a6ed6.png"},65:function(e,t,n){n.d(t,{Z:function(){return r},a:function(){return a}});var i=n(7294);let o={},s=i.createContext(o);function a(e){let t=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);