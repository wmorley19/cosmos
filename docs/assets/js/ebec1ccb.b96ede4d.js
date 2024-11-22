"use strict";(self.webpackChunkdocs_openc3_com=self.webpackChunkdocs_openc3_com||[]).push([[6417],{3238:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"getting-started/key_concepts","title":"Key Concepts","description":"Projects, Containerization, Frontend, Backend","source":"@site/docs/getting-started/key_concepts.md","sourceDirName":"getting-started","slug":"/getting-started/key_concepts","permalink":"/docs/getting-started/key_concepts","draft":false,"unlisted":false,"editUrl":"https://github.com/OpenC3/cosmos/tree/main/docs.openc3.com/docs/getting-started/key_concepts.md","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"sidebar_position":5,"title":"Key Concepts","description":"Projects, Containerization, Frontend, Backend","sidebar_custom_props":{"myEmoji":"\ud83d\udca1"}},"sidebar":"defaultSidebar","previous":{"title":"Upgrading","permalink":"/docs/getting-started/upgrading"},"next":{"title":"Requirements and Design","permalink":"/docs/getting-started/requirements"}}');var o=t(4848),r=t(8453);const i={sidebar_position:5,title:"Key Concepts",description:"Projects, Containerization, Frontend, Backend",sidebar_custom_props:{myEmoji:"\ud83d\udca1"}},a="OpenC3 COSMOS Key Concepts",c={},d=[{value:"Projects",id:"projects",level:2},{value:"Containerization",id:"containerization",level:2},{value:"Images",id:"images",level:3},{value:"Containers",id:"containers",level:3},{value:"Docker Compose",id:"docker-compose",level:3},{value:"Environment File",id:"environment-file",level:3},{value:"Kubernetes",id:"kubernetes",level:3},{value:"Frontend",id:"frontend",level:2},{value:"Vue.js",id:"vuejs",level:3},{value:"Single-Spa",id:"single-spa",level:3},{value:"Astro UX",id:"astro-ux",level:3},{value:"Backend",id:"backend",level:2},{value:"Redis",id:"redis",level:3},{value:"MinIO",id:"minio",level:3},{value:"Ruby on Rails",id:"ruby-on-rails",level:3}];function l(e){const s={a:"a",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.header,{children:(0,o.jsx)(s.h1,{id:"openc3-cosmos-key-concepts",children:"OpenC3 COSMOS Key Concepts"})}),"\n",(0,o.jsx)(s.h2,{id:"projects",children:"Projects"}),"\n",(0,o.jsxs)(s.p,{children:["The main COSMOS ",(0,o.jsx)(s.a,{href:"https://github.com/OpenC3/cosmos",children:"repo"})," contains all the source code used to build and run COSMOS. However, users (not developers) of COSMOS should use the COSMOS ",(0,o.jsx)(s.a,{href:"https://github.com/OpenC3/cosmos-project",children:"project"})," to launch COSMOS. The project consists of the ",(0,o.jsx)(s.a,{href:"https://github.com/OpenC3/cosmos-project/blob/main/openc3.sh",children:"openc3.sh"})," and ",(0,o.jsx)(s.a,{href:"https://github.com/OpenC3/cosmos-project/blob/main/openc3.bat",children:"openc3.bat"})," files for starting and stopping COSMOS, the ",(0,o.jsx)(s.a,{href:"https://github.com/OpenC3/cosmos-project/blob/main/compose.yaml",children:"compose.yaml"})," for configuring the COSMOS containers, and the ",(0,o.jsx)(s.a,{href:"https://github.com/OpenC3/cosmos-project/blob/main/.env",children:".env"})," file for setting runtime variables. Additionally, the COSMOS project contains user modifiable config files for both Redis and Traefik."]}),"\n",(0,o.jsx)(s.h2,{id:"containerization",children:"Containerization"}),"\n",(0,o.jsx)(s.h3,{id:"images",children:"Images"}),"\n",(0,o.jsxs)(s.p,{children:["Per ",(0,o.jsx)(s.a,{href:"https://docs.docker.com/get-started/overview/#images",children:"Docker"}),', "An image is a read-only template with instructions for creating a Docker container." The base operating system COSMOS uses is called ',(0,o.jsx)(s.a,{href:"https://www.alpinelinux.org/",children:"Alpine Linux"}),". It is a simple and compact image with a full package system that allows us to install our dependencies. Starting with Alpine, we create a ",(0,o.jsx)(s.a,{href:"https://docs.docker.com/engine/reference/builder/",children:"Dockerfile"})," to add Ruby and Python and a few other packages to create our own docker image. We further build upon that image to create a NodeJS image to support our frontend and additional images to support our backend."]}),"\n",(0,o.jsx)(s.h3,{id:"containers",children:"Containers"}),"\n",(0,o.jsxs)(s.p,{children:["Per ",(0,o.jsx)(s.a,{href:"https://www.docker.com/resources/what-container/",children:"Docker"}),', "a container is a standard unit of software that packages up code and all its dependencies so the application runs quickly and reliably from one computing environment to another." Also per ',(0,o.jsx)(s.a,{href:"https://docs.docker.com/guides/walkthroughs/what-is-a-container/",children:"Docker"}),', "A container is an isolated environment for your code. This means that a container has no knowledge of your operating system, or your files. It runs on the environment provided to you by Docker Desktop. Containers have everything that your code needs in order to run, down to a base operating system." COSMOS utilizes containers to provide a consistent runtime environment. Containers make it easy to deploy to local on-prem servers, cloud environments, or air-gapped networks.']}),"\n",(0,o.jsx)(s.p,{children:"The COSMOS Open Source containers consist of the following:"}),"\n",(0,o.jsxs)(s.table,{children:[(0,o.jsx)(s.thead,{children:(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.th,{children:"Name"}),(0,o.jsx)(s.th,{children:"Description"})]})}),(0,o.jsxs)(s.tbody,{children:[(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"cosmos-openc3-cosmos-init-1"}),(0,o.jsx)(s.td,{children:"Copies files to Minio and configures COSMOS then exits"})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"cosmos-openc3-operator-1"}),(0,o.jsx)(s.td,{children:"Main COSMOS container that runs the interfaces and target microservices"})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"cosmos-openc3-cosmos-cmd-tlm-api-1"}),(0,o.jsx)(s.td,{children:"Rails server that provides all the COSMOS API endpoints"})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"cosmos-openc3-cosmos-script-runner-api-1"}),(0,o.jsx)(s.td,{children:"Rails server that provides the Script API endpoints"})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"cosmos-openc3-redis-1"}),(0,o.jsx)(s.td,{children:"Serves the static target configuration"})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"cosmos-openc3-redis-ephemeral-1"}),(0,o.jsxs)(s.td,{children:["Serves the ",(0,o.jsx)(s.a,{href:"https://redis.io/docs/data-types/streams",children:"streams"})," containing the raw and decomutated data"]})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"cosmos-openc3-minio-1"}),(0,o.jsx)(s.td,{children:"Provides a S3 like bucket storage interface and also serves as a static webserver for the tool files"})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"cosmos-openc3-traefik-1"}),(0,o.jsx)(s.td,{children:"Provides a reverse proxy and load balancer with routes to the COSMOS endpoints"})]})]})]}),"\n",(0,o.jsxs)(s.p,{children:["The container list for ",(0,o.jsx)(s.a,{href:"https://openc3.com/enterprise",children:"Enterprise COSMOS"})," consists of the following:"]}),"\n",(0,o.jsxs)(s.table,{children:[(0,o.jsx)(s.thead,{children:(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.th,{children:"Name"}),(0,o.jsx)(s.th,{children:"Description"})]})}),(0,o.jsxs)(s.tbody,{children:[(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"cosmos-enterprise-openc3-metrics-1"}),(0,o.jsx)(s.td,{children:"Rails server that provides metrics on COSMOS performance"})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"cosmos-enterprise-openc3-keycloak-1"}),(0,o.jsx)(s.td,{children:"Single-Sign On service for authentication"})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"cosmos-enterprise-openc3-postgresql-1"}),(0,o.jsx)(s.td,{children:"SQL Database for use by Keycloak"})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"openc3-nfs *"}),(0,o.jsx)(s.td,{children:"Network File System pod only for use in Kubernetes to share code libraries between containers"})]})]})]}),"\n",(0,o.jsx)(s.h3,{id:"docker-compose",children:"Docker Compose"}),"\n",(0,o.jsxs)(s.p,{children:["Per ",(0,o.jsx)(s.a,{href:"https://docs.docker.com/compose/",children:"Docker"}),', "Compose is a tool for defining and running multi-container Docker applications. With Compose, you use a YAML file to configure your application\'s services. Then, with a single command, you create and start all the services from your configuration." OpenC3 uses compose files to both build and run COSMOS. The ',(0,o.jsx)(s.a,{href:"https://github.com/OpenC3/cosmos-project/blob/main/compose.yaml",children:"compose.yaml"})," is where ports are exposed and environment variables are used."]}),"\n",(0,o.jsx)(s.h3,{id:"environment-file",children:"Environment File"}),"\n",(0,o.jsxs)(s.p,{children:["COSMOS uses an ",(0,o.jsx)(s.a,{href:"https://docs.docker.com/compose/environment-variables/env-file/",children:"environment file"})," along with Docker Compose to pass environment variables into the COSMOS runtime. This ",(0,o.jsx)(s.a,{href:"https://github.com/OpenC3/cosmos-project/blob/main/.env",children:".env"})," file consists of simple key value pairs that contain the version of COSMOS deployed, usernames and passwords, and much more."]}),"\n",(0,o.jsx)(s.h3,{id:"kubernetes",children:"Kubernetes"}),"\n",(0,o.jsxs)(s.p,{children:["Per ",(0,o.jsx)(s.a,{href:"https://kubernetes.io/",children:"Kubernetes.io"}),', "Kubernetes, also known as K8s, is an open-source system for automating deployment, scaling, and management of containerized applications. It groups containers that make up an application into logical units for easy management and discovery." ',(0,o.jsx)(s.a,{href:"https://openc3.com/enterprise",children:"COSMOS Enterprise"})," provides ",(0,o.jsx)(s.a,{href:"https://helm.sh/docs/topics/charts/",children:"Helm charts"})," for easy deployment to Kubernetes in various cloud environments."]}),"\n",(0,o.jsxs)(s.p,{children:["COSMOS Enterprise also provides ",(0,o.jsx)(s.a,{href:"https://www.terraform.io/",children:"Terraform"})," scripts to deploy COSMOS infrastructure on various cloud environments."]}),"\n",(0,o.jsx)(s.h2,{id:"frontend",children:"Frontend"}),"\n",(0,o.jsx)(s.h3,{id:"vuejs",children:"Vue.js"}),"\n",(0,o.jsxs)(s.p,{children:["The COSMOS frontend is fully browser native and is implemented in the Vue.js framework. Per ",(0,o.jsx)(s.a,{href:"https://vuejs.org/guide/introduction.html",children:"Vue.js"}),', "Vue is a JavaScript framework for building user interfaces. It builds on top of standard HTML, CSS, and JavaScript and provides a declarative and component-based programming model that helps you efficiently develop user interfaces, be they simple or complex." COSMOS utilizes Vue.js and the ',(0,o.jsx)(s.a,{href:"https://vuetifyjs.com/en/",children:"Vuetify"})," Component Framework UI library to build all the COSMOS tools which run in the browser of your choice. COSMOS 5 utilized Vue.js 2.x and Vuetify 2.x while COSMOS 6 utilizes Vue.js 3.x and Vuetify 3.x."]}),"\n",(0,o.jsx)(s.h3,{id:"single-spa",children:"Single-Spa"}),"\n",(0,o.jsxs)(s.p,{children:["While COSMOS itself is written in Vue.js, we utilize a technology called ",(0,o.jsx)(s.a,{href:"https://single-spa.js.org/",children:"single-spa"})," to allow COSMOS developers to create applications in any javascript framework they choose. Single-spa is a micro frontend framework and acts as a top level router to render the application being requested. COSMOS provides sample applications ready to plug into single-spa in Angular, React, Svelte, and Vue."]}),"\n",(0,o.jsx)(s.h3,{id:"astro-ux",children:"Astro UX"}),"\n",(0,o.jsxs)(s.p,{children:["Per ",(0,o.jsx)(s.a,{href:"https://www.astrouxds.com/",children:"AstroUXDS"}),', "The Astro Space UX Design System enables developers and designers to build rich space app experiences with established interaction patterns and best practices." COSMOS utilizes the Astro design guidelines for color, typograpy, and iconograpy. In some cases, e.g. ',(0,o.jsx)(s.a,{href:"https://www.astrouxds.com/components/clock/",children:"Astro Clock"}),", COSMOS directly incorporates Astro components."]}),"\n",(0,o.jsx)(s.h2,{id:"backend",children:"Backend"}),"\n",(0,o.jsx)(s.h3,{id:"redis",children:"Redis"}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.a,{href:"https://redis.io/",children:"Redis"})," is an in-memory data store with support for strings, hashes, lists, sets, sorted sets, streams, and more. COSMOS uses Redis to store both our configuration and data. If you look back at our ",(0,o.jsx)(s.a,{href:"/docs/getting-started/key_concepts#containers",children:"container list"})," you'll notice two redis containers: cosmos-openc3-redis-1 and cosmos-openc3-redis-ephemeral-1. The ephemeral container contains all the real-time data pushed into ",(0,o.jsx)(s.a,{href:"https://redis.io/docs/data-types/streams/",children:"Redis streams"}),". The other redis container contains COSMOS configuration that is meant to persist. ",(0,o.jsx)(s.a,{href:"https://openc3.com/enterprise",children:"COSMOS Enterprise"})," provides helm charts that setup ",(0,o.jsx)(s.a,{href:"https://redis.io/docs/management/scaling/",children:"Redis Cluster"})," to perform horizontal scaling where data is shared across multiple Redis nodes."]}),"\n",(0,o.jsx)(s.h3,{id:"minio",children:"MinIO"}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.a,{href:"https://min.io/",children:"MinIO"})," is a high-performance, S3 compatible object store. COSMOS uses this storage technology to host both the COSMOS tools themselves and the long term log files. ",(0,o.jsx)(s.a,{href:"https://openc3.com/enterprise",children:"COSMOS Enterprise"})," deployed in a cloud environment uses the available cloud native bucket storage technology, e.g. AWS S3, GCP Buckets, and Azure Blob Storage. Using bucket storage allows COSMOS to directly serve the tools as a static website and thus we don't need to deploy Tomcat or Nginx for example."]}),"\n",(0,o.jsx)(s.h3,{id:"ruby-on-rails",children:"Ruby on Rails"}),"\n",(0,o.jsxs)(s.p,{children:["The COSMOS API and Script Runner backends are powered by ",(0,o.jsx)(s.a,{href:"https://rubyonrails.org/",children:"Ruby on Rails"}),". Rails is a web application development framework written in the Ruby programming language. Rails (and our familiarity with Ruby) allows us to write less code while accomplishing more than many other languages and frameworks."]})]})}function h(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},8453:(e,s,t)=>{t.d(s,{R:()=>i,x:()=>a});var n=t(6540);const o={},r=n.createContext(o);function i(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);