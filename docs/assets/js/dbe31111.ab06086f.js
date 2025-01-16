"use strict";(self.webpackChunkdocs_openc3_com=self.webpackChunkdocs_openc3_com||[]).push([["9564"],{8729:function(e,t,n){n.r(t),n.d(t,{metadata:()=>i,contentTitle:()=>c,default:()=>h,assets:()=>l,toc:()=>o,frontMatter:()=>r});var i=JSON.parse('{"id":"tools/admin","title":"Admin","description":"Administer COSMOS, install plugins, change settings","source":"@site/docs/tools/admin.md","sourceDirName":"tools","slug":"/tools/admin","permalink":"/docs/tools/admin","draft":false,"unlisted":false,"editUrl":"https://github.com/OpenC3/cosmos/tree/main/docs.openc3.com/docs/tools/admin.md","tags":[],"version":"current","frontMatter":{"title":"Admin","description":"Administer COSMOS, install plugins, change settings","sidebar_custom_props":{"myEmoji":"\uD83D\uDEE0\uFE0F"}},"sidebar":"defaultSidebar","previous":{"title":"Tools","permalink":"/docs/tools"},"next":{"title":"Autonomic (Enterprise)","permalink":"/docs/tools/autonomic"}}'),s=n("5893"),a=n("65");let r={title:"Admin",description:"Administer COSMOS, install plugins, change settings",sidebar_custom_props:{myEmoji:"\uD83D\uDEE0\uFE0F"}},c=void 0,l={},o=[{value:"Introduction",id:"introduction",level:2},{value:"Plugins",id:"plugins",level:3},{value:"Targets",id:"targets",level:3},{value:"Interfaces",id:"interfaces",level:3},{value:"Routers",id:"routers",level:3},{value:"Microservices",id:"microservices",level:3},{value:"Packages",id:"packages",level:3},{value:"Tools",id:"tools",level:3},{value:"Redis",id:"redis",level:3},{value:"Secrets",id:"secrets",level:3},{value:"Settings",id:"settings",level:3}];function d(e){let t={a:"a",h2:"h2",h3:"h3",img:"img",p:"p",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsx)(t.p,{children:"Admin has it's own dedicated button at the top of the tools list. It is responsible for administering the COSMOS system including installing new plugins, viewing configuration, storing secrets and changing settings."}),"\n",(0,s.jsx)(t.h3,{id:"plugins",children:"Plugins"}),"\n",(0,s.jsx)(t.p,{children:"The Plugins tab is where you install new plugins into the COSMOS system. Plugins can dynamically add targets, microservices, interfaces, protocols, Telemetry Viewer widgets, and entire tools into the COSMOS runtime. The following screenshot shows the Plugins tab when only the COSMOS Demo is installed:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Plugins",src:n(6753).Z+"",width:"2200",height:"874"})}),"\n",(0,s.jsx)(t.p,{children:"The plugin gem name is listed along with all the targets it contains. You can Download, Edit, Upgrade, or Delete (uninstall) the plugin using the buttons to the right. If a plugin's target has been modified, the target name turns into a link which when clicked will download the changed files. New plugins are installed by clicking the top field."}),"\n",(0,s.jsx)(t.h3,{id:"targets",children:"Targets"}),"\n",(0,s.jsx)(t.p,{children:"The Targets tab shows all the targets installed and what plugin they came from. Clicking the eyeball shows the raw JSON that makes up the target configuration."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Targets",src:n(4578).Z+"",width:"2200",height:"964"})}),"\n",(0,s.jsx)(t.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,s.jsx)(t.p,{children:"The Interfaces tab shows all the interfaces installed. Clicking the eyeball shows the raw JSON that makes up the interface configuration."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Interfaces",src:n(4939).Z+"",width:"2200",height:"766"})}),"\n",(0,s.jsx)(t.h3,{id:"routers",children:"Routers"}),"\n",(0,s.jsx)(t.p,{children:"The Routers tab shows all the routers installed. Clicking the eyeball shows the raw JSON that makes up the router configuration."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Routers",src:n(3983).Z+"",width:"2200",height:"480"})}),"\n",(0,s.jsx)(t.h3,{id:"microservices",children:"Microservices"}),"\n",(0,s.jsx)(t.p,{children:"The Microservices tab shows all the microservices installed, their update time, state, and count. Clicking the eyeball shows the raw JSON that makes up the microservice configuration."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Microservices",src:n(1348).Z+"",width:"2200",height:"1226"})}),"\n",(0,s.jsx)(t.h3,{id:"packages",children:"Packages"}),"\n",(0,s.jsx)(t.p,{children:"The Packages tab shows all the Ruby gems and Python packages installed in the system. You can also install packages from this tab if you're in an offline (air gapped) environment where COSMOS can't pull dependencies from Rubygems or Pypi."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Packages",src:n(6858).Z+"",width:"2200",height:"2620"})}),"\n",(0,s.jsx)(t.h3,{id:"tools",children:"Tools"}),"\n",(0,s.jsx)(t.p,{children:"The Tools tab lists all the tools installed. You can reorder the tools in the Navigation bar by dragging and dropping the left side grab handle."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Tools",src:n(7816).Z+"",width:"2200",height:"2192"})}),"\n",(0,s.jsxs)(t.p,{children:["You can also add links to existing tools in the navigation bar by using the Add button. Any ",(0,s.jsx)(t.a,{href:"https://pictogrammers.com/library/mdi/",children:"material design icons"})," can be used as the Tool icon."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Add Tool",src:n(68).Z+"",width:"2060",height:"232"})}),"\n",(0,s.jsx)(t.h3,{id:"redis",children:"Redis"}),"\n",(0,s.jsx)(t.p,{children:"The Redis tab allows you to interact directly with the underlying Redis database, making it easy to modify or delete data. THIS IS DANGEROUS, and should only be performed by COSMOS developers."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Redis",src:n(6810).Z+"",width:"2200",height:"1254"})}),"\n",(0,s.jsx)(t.h3,{id:"secrets",children:"Secrets"}),"\n",(0,s.jsxs)(t.p,{children:["The Secrets tab allows you to create secrets that can be used by Interfaces or Microservices using the ",(0,s.jsx)(t.a,{href:"../configuration/plugins#secret",children:"SECRET"})," keyword. Secrets require setting the Secret Name and then can be set to an individual value using the Secret Value, or to the contents of a file (like a certificate file) using the file selector. In the following example the USERNAME and PASSWORD were set to values while CA_FILE was set using an uploaded certificate file."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Secrets",src:n(5193).Z+"",width:"2200",height:"962"})}),"\n",(0,s.jsx)(t.h3,{id:"settings",children:"Settings"}),"\n",(0,s.jsx)(t.p,{children:"The Settings tab contains various settings used throughout COSMOS. These including clearing saved tool configuration, hiding the Astro Clock, changing the system time zone, adding a top and bottom banner, creating a subtitle in the navigation bar, and changing the URLs of the various package libraries."}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.img,{alt:"Settings1",src:n(9924).Z+"",width:"2200",height:"2172"}),"\n",(0,s.jsx)(t.img,{alt:"Settings2",src:n(9239).Z+"",width:"2200",height:"2436"})]})]})}function h(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},68:function(e,t,n){n.d(t,{Z:function(){return i}});let i=n.p+"assets/images/add_tool-6919be6e6c05db133a8816a9fc03bf98b0789a8525da4cdaa7b041b25bf9edb8.png"},4939:function(e,t,n){n.d(t,{Z:function(){return i}});let i=n.p+"assets/images/interfaces-fa10646a27eb9045b70c2c485498a864bed1896ff171b7f31f8698288e08ae73.png"},1348:function(e,t,n){n.d(t,{Z:function(){return i}});let i=n.p+"assets/images/microservices-805cc7d137958ac8183579cdb9a9845e7aef79db19723f0773f4ea4d957b48a1.png"},6858:function(e,t,n){n.d(t,{Z:function(){return i}});let i=n.p+"assets/images/packages-3bfae1a91b0534077280c323a40e879a8ac6a7c3ac45376b3c706a098dab12c3.png"},6753:function(e,t,n){n.d(t,{Z:function(){return i}});let i=n.p+"assets/images/plugins-aabbe060bec19e6fa2490b737f20758af9000066121f5af85f260a3b14f9b3d8.png"},6810:function(e,t,n){n.d(t,{Z:function(){return i}});let i=n.p+"assets/images/redis-4553b5b35292cca3df1fa08577f2175efef34e0fdfe512f30ca70785b086b24f.png"},3983:function(e,t,n){n.d(t,{Z:function(){return i}});let i=n.p+"assets/images/routers-489fe07165973feede7a63adf71781cca7ecb1f7d17c069761c1c57e70cf926e.png"},5193:function(e,t,n){n.d(t,{Z:function(){return i}});let i=n.p+"assets/images/secrets-c8daf324829a0d4dde1d30f9da89d884ca06ce458e400dfa5d1de4ccb10395a1.png"},9924:function(e,t,n){n.d(t,{Z:function(){return i}});let i=n.p+"assets/images/settings1-36a446ec0455ae5ab3a6d225647264647e517e1e2d83da5c639a63756e0339a6.png"},9239:function(e,t,n){n.d(t,{Z:function(){return i}});let i=n.p+"assets/images/settings2-c18e478b65ba569bea37a2bb185b4702e347aecc570fbc7b26a6e66aeecc9129.png"},4578:function(e,t,n){n.d(t,{Z:function(){return i}});let i=n.p+"assets/images/targets-c02c28769712aa226fdcbd3b90329285aeb39e775b9be1df6ab0e2ad31231518.png"},7816:function(e,t,n){n.d(t,{Z:function(){return i}});let i=n.p+"assets/images/tools-d3ea80e2fdc04e5b85743146ebaf1fc7f1406b7b5e6ec9b700ed35dedc8d16e6.png"},65:function(e,t,n){n.d(t,{Z:function(){return c},a:function(){return r}});var i=n(7294);let s={},a=i.createContext(s);function r(e){let t=i.useContext(a);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);