// Data for work experience that changes upon click
let workData = [
    {
        job: "Freelance",
        about: "Working as an Independent Contractor for IT services and Web Development. My largest client was Restraunt Brands International, where I serviced their So Cal chains, KFC and Taco Bell. I have continued to develop websites over the past few years for many other clients using HTML, CSS, and Javascript",
        primWork: "Network & IT",
        primDuties: [
            "Networking: Setup and Installation, Cabling, VLAN, DMZ, VPN, Access Points, Firewalls, Network Segmentation",
            "Server: Migrations, Cloud Integration, Shares(SMB/NFS), Hardware and Software troubleshooting, Linux and Windows, Raid, Backups",
            "PBX and VOIP using Softphones, Avaya, 3cx, and Five9 auto dialer"
        ],
        secWork: "Web Dev",
        secDuties: [
            "Web Servers: Load Balancing(Application, Network), Apache, Nginx, Reverse Proxys, Port Forwarding",
            "Web Development: React, Wordpress, Magento, Shopify, Full Stack, Microservices, API Development Docker and Kubernetes"
        ],
    },
    {
        job: "ALJ",
        about: "ALJ Work",
        primWork: "Digital Marketing",
        primDuties: [
            "Setup and Installation, Cabling, VLAN, DMZ, VPN, Access Points, Firewalls, Network Segmentation",
            "SEO & Adwords: Research keywords, clients, and create a marketing funnel",
            "CRM Campaigns: Tracking the ROI of our marketing campaigns digital a"
        ],
        secWork: "Front End",
        secDuties: [
            "HTML/CSS/JS: Make changes to website built on Magento E-Commerce framework",
            "Content: Created using Canva, Photoshop, Figma for digital campaigns(email, website) and physical(mailers, flyers, brochures)"
        ],
    },
    {
        job: "Reborn",
        about: "Reborn Cabinets Work",
        primWork: "Marketing Manager",
        primDuties: [
            "Recruitment and Training: Setup and Installation, Cabling, VLAN, DMZ, VPN, Access Points, Firewalls, Network Segmentation",
            "Orn: Migrations, Cloud Integration, Shares(SMB/NFS), Hardware and Software troubleshooting, Linux and Windows, Raid, Backups",
            "Cabinet and VOIP using Softphones, Avaya, 3cx, and Five9 auto dialer"
        ],
        secWork: "IT",
        secDuties: [
            "Tech Integration: Led the transition to digital lead captures that integrated into our CRM for an improved efficiency of 30%. Also integrated Five9 an automated call center dialer",
            "Support: Managed over 100 devices with Mobile Device Management system, onboarding setup for new employees on Microsoft AD and thinClient/ Remote Desktop",
            "HelpDesk: Assist the department with technical issues Audio/Visual, email, and general computer troubleshooting"
        ],
    },
    {
        job: "Other",
        about: "Other Work",
        primWork: "Other Marketing",
        primDuties: [
            "Other: Setup and Installation, Cabling, VLAN, DMZ, VPN, Access Points, Firewalls, Network Segmentation",
            "Other2: Migrations, Cloud Integration, Shares(SMB/NFS), Hardware and Software troubleshooting, Linux and Windows, Raid, Backups",
            "PBX and VOIP using Softphones, Avaya, 3cx, and Five9 auto dialer"
        ],
        secWork: "Other",
        secDuties: [
            "Other4 Servers: Load Balancing(Application, Network), Apache, Nginx, Reverse Proxys, Port Forwarding",
            "Other Development: React, Wordpress, Magento, Shopify, Full Stack, Microservices, API Development Docker and Kubernetes"
        ],
    },
]




// Data for Projects sections
let projData = [
    {
        project: "Venues",
        photo: "https://raw.githubusercontent.com/coronel08/my-portfolio/main/images/conertzone.png",
        built: [
            '<i class="fab fa-node fa-lg"></i>',
            '<i class="fab fa-js fa-lg"></i>',
            '<i class="fas fa-database fa-lg"></i>'
        ],
        about: "Using MongoDB for DB and the Node framework, Express, as server handling backend such as authentication as well as frontend using EJS templates. Practiced cloud deployment, hosted on Heroku and also using Mongo Atlas as a cloud based Database.",
        tags: "Full Stack"
    },
    {
        project: "Quiz",
        photo: "https://raw.githubusercontent.com/coronel08/wp-child/main/myspace/static/photos/flashcard.gif",
        built: [
            '<i class="fab fa-docker fa-lg"></i>',
            '<i class="fab fa-python fa-lg"></i>',
            '<i class="fab fa-react fa-lg"></i>',
            '<i class="fab fa-css3-alt fa-lg"></i>'
        ],
        about: "A full stack quiz app. The backend, admin, API, and database modeling done in Django. The frontend parses the json api and uses the framework to organize the html and visual components as well as the interactive javascript components.",
        tags: "Full Stack"
    },
    {
        project: "Yelp API",
        photo: "https://mdbootstrap.com/img/Photos/Horizontal/Nature/6-col/img%20(132).jpg",
        built: [
            '<i class="fab fa-bootstrap fa-lg"></i>',
            '<i class="fab fa-react fa-lg"></i>',
            '<i class="fab fa-yelp fa-lg"></i>',
            '<i class="fab fa-js fa-lg"></i>'
        ],
        about: "A simple solution for when you don't want to think about what's for lunch. Uses React/Next as the frontend for the yelp API. Deployed to vercel",
        tags: "Full Stack"
    },
    {
        project: "Lobo Security",
        photo: "https://github.com/coronel08/wp-child/blob/main/myspace/static/photos/lobo-security.png?raw=true",
        built: [
            '<i class="fab fa-wordpress-simple fa-lg"></i>',
            '<i class="fab fa-elementor fa-lg"></i>',
            '<i class="far fa-file-code fa-lg"></i>',
        ],
        about: "",
        tags: "Frontend"
    },
    {
        project: "Myspace",
        photo: "https://raw.githubusercontent.com/coronel08/wp-child/main/myspace/static/photos/myspace.png",
        built: [
            '<i class="fab fa-bootstrap fa-lg"></i>',
            '<i class="fab fa-wordpress fa-lg"></i>',
            '<i class="fab fa-html5 fa-lg"></i>',
            '<i class="fab fa-js fa-lg"></i>'
        ],
        about: "",
        tags: "Frontend"
    },
    {
        project: "Burger",
        photo: "https://github.com/coronel08/wp-child/blob/main/myspace/static/photos/Takeout.png?raw=true",
        built: [
            '<i class="fab fa-bootstrap fa-lg"></i>',
            '<i class="fab fa-wordpress fa-lg"></i>',
            '<i class="fab fa-html5 fa-lg"></i>',
            '<i class="fab fa-js fa-lg"></i>'
        ],
        about: "",
        tags: "Frontend"
    },
    {
        project: "Shopify",
        photo: "https://github.com/coronel08/shopify-test/blob/master/public/images/shopify-project.png?raw=true",
        built: [
            '<i class="fab fa-bootstrap fa-lg"></i>',
            '<i class="fab fa-shopify fa-lg"></i>',
            '<i class="fab fa-js fa-lg"></i>'
        ],
        about: "",
        tags: "Frontend"
    },
    {
        project: "HD Webscrape",
        photo: "https://github.com/coronel08/HomeDepot_PriceScrape/raw/master/webscrape.gif",
        built: [
            '<i class="fab fa-python fa-lg"></i>',
            '<i class="fas fa-file-excel fa-lg"></i>',
        ],
        about: "",
        tags: "Python"
    },
    {
        project: "Twilio",
        photo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftwilio-cms-prod.s3.amazonaws.com%2Fimages%2Fsip-interface_diagram_v2-2x.width-1600.png&f=1&nofb=1",
        built: [
            '<i class="fab fa-python fa-lg"></i>',
            '<i class="fas fa-sms fa-lg"></i>',
        ],
        about: "",
        tags: "Python"
    },
]

module.exports = {
    workData,
    projData
}