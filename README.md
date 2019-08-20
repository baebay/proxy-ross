# Seabay Proxy
<img src="./readme/seabay.png" width="200" />

## About

Seabay is a web clone of the popular e-commerce site, eBay. This application is composed of several, independent services deployed and composed using service oriented architecture. We also developed this project to showcase our styling abilities, as well as to practice using Agile methodologies and TDD.

### Contributors
- [Doris Hui](https://github.com/dorishui)
- [Hadley A. Crowl](https://github.com/hadleyac)
- [Justan O. Human](https://github.com/justanotherhuman)
- [Miles Zander](https://github.com/mileszander)
- [Ross F. Calimlim](https://github.com/rcalimlim)

### Tech Stack

We used a number of different technologies as we developed separate services that we then composed into a single, seamless application. However overall we used JavaScript, ReactJS, and Material-UI on the front end, with NodeJS/Express back ends. Some applications use MongoDB wrapped with Mongoose, while others use MySQL. For the most part, these services were deployed on Amazon EC2 instances using PM2. However, the proxy and shopping cart service are deployed on DigitalOcean.

<img src="https://raw.githubusercontent.com/voodootikigod/logo.js/master/js.png" width="100">
<img src="https://icons-for-free.com/iconfiles/png/512/design+development+facebook+framework+mobile+react+icon-1320165723839064798.png" width="110" />
<img src="https://s3.amazonaws.com/contentkit-dev-deploymentbucket-3hlcbqx9f9nl/static/cjiy4tseq0tnw0103bc5s7sxj/material-ui.png" width="180" />
<img src="https://lh5.googleusercontent.com/rdAoVdYKOCnmtev6t7DJrEY7mG4iYsRPqeTH0Z-OrlsVmiea3q5SMtOGNSa7HzJcyxcIcelTacG5gPNgyBoIviiNcLbohQAicvpldcfM32Klb_ewouDRd67OtYhUAU1CEZB4rBqB" width="130" />
<img src="https://lh6.googleusercontent.com/tKlT8lGB2bTDqSilr_a2y8vaO-QBUdcUIYASnslf-RAKTxUEiEBq-_gTVBP0irIP1ZWNuSvp1fouOJrQBXUr0joVmBZzNyOec4jBpOyVogPZMOYhPH6YQwYOiLdZnfuaDnFel9rn" width="150" />
<img src="https://cdn.iconscout.com/icon/free/png-256/mongodb-3-1175138.png" width="100" />
<img src="https://camo.githubusercontent.com/b63663c8500f5eceaabf8e0c0f57d9d4f511ebf7/687474703a2f2f7777772e6572696b61736c616e642e636f6d2f7374617469632f696d616765732f6d6f6e676f6f73652e706e67" width="120" />
<img src="https://upload.wikimedia.org/wikipedia/en/thumb/6/62/MySQL.svg/1200px-MySQL.svg.png" width="170" />
<img src="https://raw.githubusercontent.com/unitech/pm2/master/pres/pm2.20d3ef.png" width="190" />
<img src="https://markmcgookin.files.wordpress.com/2017/07/mocha5.png?w=499" width="190" />
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/AWS_Simple_Icons_AWS_Cloud.svg/2000px-AWS_Simple_Icons_AWS_Cloud.svg.png" width="140" />
<img src="https://cdn.slant.co/9c445354-9f20-438e-9cb7-ab1834fbc771/-/format/jpeg/-/progressive/yes/-/preview/480x480/" width="150" />
<img src="" width="100" />
<img src="" width="100" />


### Technical Challenges / Research

- The greatest technical challenge we faced was finding a reliable way for our services to communicate with each other while maintaining loose coupling between them. After a good deal of research, we settled on an event listener approach. We collectively agreed on certain events that would emit well-defined types of data that each component could consume from the document object.


## Client Deliverables

-

### Minimum Viable Product (MVP)

-

### How the App Works
<img src="./readme/quickflix-search.gif" width="300" />
<img src="./readme/quickflix-movie-search.gif" width="200" />

### Workflow

We used an Agile workflow with Trello for ticket management, milestone tracking, and sprint planning. We followed service oriented archictecture by developing standalone services that could be combined into a seamless user experience.

We used a feature branch git workflow that required one reviewer to merge into master.

### Future Features
-