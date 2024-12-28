"use strict";(self.webpackChunkdocs_openc3_com=self.webpackChunkdocs_openc3_com||[]).push([["4593"],{254:function(e,t,i){i.r(t),i.d(t,{metadata:()=>n,contentTitle:()=>o,default:()=>c,assets:()=>l,toc:()=>h,frontMatter:()=>s});var n=JSON.parse('{"id":"tools/tlm-grapher","title":"Telemetry Grapher","description":"Graph real time or historical data","source":"@site/docs/tools/tlm-grapher.md","sourceDirName":"tools","slug":"/tools/tlm-grapher","permalink":"/docs/tools/tlm-grapher","draft":false,"unlisted":false,"editUrl":"https://github.com/OpenC3/cosmos/tree/main/docs.openc3.com/docs/tools/tlm-grapher.md","tags":[],"version":"current","frontMatter":{"title":"Telemetry Grapher","description":"Graph real time or historical data","sidebar_custom_props":{"myEmoji":"\uD83D\uDEE0\uFE0F"}},"sidebar":"defaultSidebar","previous":{"title":"Table Manager","permalink":"/docs/tools/table-manager"},"next":{"title":"Telemetry Viewer","permalink":"/docs/tools/tlm-viewer"}}'),a=i("5893"),r=i("65");let s={title:"Telemetry Grapher",description:"Graph real time or historical data",sidebar_custom_props:{myEmoji:"\uD83D\uDEE0\uFE0F"}},o=void 0,l={},h=[{value:"Introductions",id:"introductions",level:2},{value:"Telemetry Grapher Menus",id:"telemetry-grapher-menus",level:2},{value:"File Menu Items",id:"file-menu-items",level:3},{value:"Open Configuration",id:"open-configuration",level:4},{value:"Save Configuration",id:"save-configuration",level:4},{value:"Graph Menu Items",id:"graph-menu-items",level:3},{value:"Selecting Items",id:"selecting-items",level:2},{value:"Graph Window Management",id:"graph-window-management",level:2}];function d(e){let t={h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"introductions",children:"Introductions"}),"\n",(0,a.jsx)(t.p,{children:"Telemetry Grapher is a graphing application that allows for one or more telemetry points per graph. It supports multiple graphs per screen which can be resized and reordered. Multiple configurations can be saved and restored for different situations."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Telemetry Grapher",src:i(6090).Z+"",width:"1270",height:"927"})}),"\n",(0,a.jsx)(t.h2,{id:"telemetry-grapher-menus",children:"Telemetry Grapher Menus"}),"\n",(0,a.jsx)(t.h3,{id:"file-menu-items",children:"File Menu Items"}),"\n",(0,a.jsx)("img",{src:i(7690).Z,alt:"File Menu",style:{float:"left","margin-right":"50px",height:"90px"}}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Open a saved configuration (graphs and items)"}),"\n",(0,a.jsx)(t.li,{children:"Save the current configuration"}),"\n",(0,a.jsx)(t.li,{children:"Reset the configuration (default settings)"}),"\n"]}),"\n",(0,a.jsx)(t.h4,{id:"open-configuration",children:"Open Configuration"}),"\n",(0,a.jsx)(t.p,{children:"The Open Configuration dialog displays a list of all saved configurations. You select a configuration and then click Ok to load it. You can delete existing configurations by clicking the Trash icon next to a configuration name."}),"\n",(0,a.jsx)(t.h4,{id:"save-configuration",children:"Save Configuration"}),"\n",(0,a.jsx)(t.p,{children:"The Save Configuration dialog also displays a list of all saved configurations. You click the Configuration Name text field, enter the name of your new configuration, and click Ok to save. You can delete existing configurations by clicking the Trash icon next to a configuration name."}),"\n",(0,a.jsx)(t.h3,{id:"graph-menu-items",children:"Graph Menu Items"}),"\n",(0,a.jsx)("img",{src:i(8814).Z,alt:"File Menu",style:{float:"left","margin-right":"50px",height:"150px"}}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Add a new graph"}),"\n",(0,a.jsx)(t.li,{children:"Start / Resume graphing"}),"\n",(0,a.jsx)(t.li,{children:"Pause graph"}),"\n",(0,a.jsx)(t.li,{children:"Stop graph"}),"\n",(0,a.jsx)(t.li,{children:"Edit grapher settings"}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"Editing the grapher settings brings up a dialog to change settings affecting every graph in the Telemetry Grapher tool. Changing the Seconds Graphed changes the visible windows displaying graph points. The smaller of Seconds Graphed and Points Graphed will be used when calculating the number of points to display. Changing the Points Saved will affect performance of the browser window if set too high. The default of 1,000,000 points can store over 11.5 days of 1Hz data points."}),"\n",(0,a.jsx)(t.p,{children:"Editing an individual graph by clicking the pencil icon in title bar of the graph brings up the edit graph dialog."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Edit Graph",src:i(3957).Z+"",width:"592",height:"766"})}),"\n",(0,a.jsx)(t.p,{children:"Editing the Start Date and Start Time will re-query the data to begin at the specified time. This operation can take several seconds depending on how far back data is requested. Similarly, specifying the End Date and End Time will limit the data request to the specified time. Leaving the End Date / End Time fields blank will cause Telemetry Grapher to continue to graph items in real-time as they arrive."}),"\n",(0,a.jsx)(t.p,{children:"Changing the Min Y and Max Y values simply sets the graph scale. Deleting the Min Y and Max Y values allows the graph to scale automatically as values arrive. Compare the following graph with the minimum set to 0 and the maximum set to 100 with the first graph image (auto-scale)."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Min Max",src:i(6280).Z+"",width:"1247",height:"718"})}),"\n",(0,a.jsx)(t.h2,{id:"selecting-items",children:"Selecting Items"}),"\n",(0,a.jsx)(t.p,{children:"Selecting a target from the Select Target drop down automatically updates the available packets in the Select Packet drop down which updates the available items in the Select Item drop down. Clicking Add Item adds the item to the graph which immediately begins graphing."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Temp 1",src:i(7045).Z+"",width:"1247",height:"829"})}),"\n",(0,a.jsx)(t.p,{children:"As time passes, the main graph fills up and starts scrolling while the overview graph at the bottom shows the entire history."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Temp 1 History",src:i(1260).Z+"",width:"1247",height:"829"})}),"\n",(0,a.jsx)(t.p,{children:"Selecting a new item and adding it to the graph automatically fills the graph with history until the beginning of the first item. This allows you to add items to the graph incrementally and maintain full history."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Temp1 Temp2",src:i(6895).Z+"",width:"1247",height:"829"})}),"\n",(0,a.jsx)(t.h2,{id:"graph-window-management",children:"Graph Window Management"}),"\n",(0,a.jsx)(t.p,{children:"All graphs can be moved around the browser window by clicking their title bar and moving them. Other graphs will move around intelligently to fill the space. This allows you order the graphs no matter which order they were created in."}),"\n",(0,a.jsx)(t.p,{children:"Each graph has a set of window buttons in the upper right corner. The first shrinks or grows the graph both horizontally and vertically to allow for 4 graphs in the same browser tab. Note that half height graphs no longer show the overview graph."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Four Graphs",src:i(4424).Z+"",width:"1247",height:"710"})}),"\n",(0,a.jsx)(t.p,{children:"The second button shrinks or grows the graph horizontally so it will either be half or full width of the browser window. This allows for two full width graphs on top of each other."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Two Full Width",src:i(7177).Z+"",width:"1247",height:"833"})}),"\n",(0,a.jsx)(t.p,{children:"The second button shrinks or grows the graph vertically so it will either be half or full height of the browser window. This allows for two full height graphs side by side."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Two Full Height",src:i(1866).Z+"",width:"1247",height:"833"})}),"\n",(0,a.jsx)(t.p,{children:"The line button minimizes the graph to effectively hide it. This allows you to focus on a single graph without losing existing graphs."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Minimized",src:i(4207).Z+"",width:"1247",height:"833"})}),"\n",(0,a.jsx)(t.p,{children:"The final X button closes the graph."})]})}function c(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},7690:function(e,t,i){i.d(t,{Z:function(){return n}});let n=i.p+"assets/images/file_menu-1c05cfc08f9d07b3f7122d2fe1ad98ed428dc563d2c5d2edddbed71f46779eb8.png"},8814:function(e,t,i){i.d(t,{Z:function(){return n}});let n=i.p+"assets/images/graph_menu-289cbbb168622f661c1c98a7bd2c1b43f888e9c3560ba4e1d435ab62d0aad6de.png"},3957:function(e,t,i){i.d(t,{Z:function(){return n}});let n=i.p+"assets/images/edit_graph-9618076f837e0d358ea0bfbf503d43b377805d818370405536f5a1c049209e99.png"},4424:function(e,t,i){i.d(t,{Z:function(){return n}});let n=i.p+"assets/images/four_graphs-1aa5a7cb9ce51cec815fc9d8740b40e113bd171c4977711d47ef1e6daf02719e.png"},6280:function(e,t,i){i.d(t,{Z:function(){return n}});let n=i.p+"assets/images/graph_min_max-75be4a19a7e13a1b9b7a18a9b898b170c8ded7768b01ce6c6effd566ac8e071a.png"},7045:function(e,t,i){i.d(t,{Z:function(){return n}});let n=i.p+"assets/images/graph_temp1-028d8660c779136ff017b0b8a9fadb294e9ff478a65d7bd73032c3c2ed4f03d0.png"},6895:function(e,t,i){i.d(t,{Z:function(){return n}});let n=i.p+"assets/images/graph_temp1_temp2-ad650da0ddf1fb5c6e9764b737bfab3027f5abcb935ad86d9716dfdf13032dca.png"},1260:function(e,t,i){i.d(t,{Z:function(){return n}});let n=i.p+"assets/images/graph_temp1_time-53c18518755d1d1c816db7f0a67e26c5408aba32b644fda519b5ecf7a7ee9b27.png"},4207:function(e,t,i){i.d(t,{Z:function(){return n}});let n=i.p+"assets/images/minimized-47ddb9b9b68b47aae3d0a12cb39ab767adf446acbe213c0b5565c1bfaf8a463f.png"},6090:function(e,t,i){i.d(t,{Z:function(){return n}});let n=i.p+"assets/images/telemetry_grapher-3a37c074a25b7912a76d96fd46a1431d27202d71374f78c829f273e5cb342233.png"},1866:function(e,t,i){i.d(t,{Z:function(){return n}});let n=i.p+"assets/images/two_full_height-ccba2940b80345f3569ea47b7ddd3390c08195de91559f5586f85e36e411afd6.png"},7177:function(e,t,i){i.d(t,{Z:function(){return n}});let n=i.p+"assets/images/two_full_width-0116adbf994500a24d4717e002d32098f8d6197bcece510b84b90400f23feade.png"},65:function(e,t,i){i.d(t,{Z:function(){return o},a:function(){return s}});var n=i(7294);let a={},r=n.createContext(a);function s(e){let t=n.useContext(r);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);