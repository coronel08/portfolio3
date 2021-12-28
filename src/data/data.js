// Data for work experience that changes upon click
let workData = [
    {
        job: "Freelance",
        about: "Working as an Independent Contractor for IT services and Web Development. My largest client was Restraunt Brands International, where I serviced their So Cal chains (KFC and Taco Bell). I have continued to develop websites over the past few years for many other clients using HTML, CSS, and Javascript",
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
        about: "ALJ Electronics abreviated as ALJCO is an electronics company with an online e-commerce presence. Specializing in the sale of commercial and industrial laundry equipment and the manufacturing of parts",
        primWork: "Digital Marketing",
        primDuties: [
            "E-Commerce: Managed Fullfilled By Amazon, Ebay, and Google Shopping feeds and accounts",
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
        about: "Reborn Cabinets is one of the largest cabinet companies in the nation with 7 locations located across the west coast. Partnered with Home Depot, Kohler, and Costco they maintain a stronghold in the remodeling industry",
        primWork: "Marketing Manager",
        primDuties: [
            "Held accountable for the efficiency of marketing campaigns (generating leads and sales). Executed weekly profitability reports using Excel, VBA, and Python on marketing campaigns (+30M annual revenue)",
            "Directed the launch and partnership of national brands: Kohler, Home Depot, and Sam’s Club",
            "Tech Integration: Led the transition to digital lead captures that integrated into our CRM for an improved efficiency of 30%. Also integrated Five9 an automated call center dialer",
        ],
        secWork: "IT",
        secDuties: [
            "Support: Managed over 100 devices with Mobile Device Management system, onboarding setup for new employees on Microsoft AD and thinClient/ Remote Desktop",
            "HelpDesk: Assist the department with technical issues Audio/Visual, Email, Microsoft Server , and general computer troubleshooting",
            "Database: Simple SQL commands and database integrity"
        ],
    },
    {
        job: "Other",
        about: "I enjoy music and help my friend run Open Door Records, a music label as a hobby.",
        primWork: "Education",
        primDuties: [
            "CSUDH: BA in Advertising and Marketing, honors in major",
            "Coding Bootcamp: Completed coding bootcamp with focus on full stack web development",
        ],
        secWork: "Skills",
        secDuties: [
            "Drums",
            "Gardening"
        ],
    },
]




// Data for Projects sections
let projData = [
    {
        project: "Venues",
        git: "https://github.com/coronel08/Web-Dev-Bootcamp-Colt-Steele/tree/main/concertzone",
        link: "https://strawberry-cobbler-84290.herokuapp.com/",
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
        git:"https://github.com/coronel08/flashcard_quiz",
        link:"http://www.flashcard.fdlme.com/",
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
        git:"https://github.com/coronel08/yelp_roulette",
        link:"https://yelp-roulette-tau.vercel.app/",
        photo: "https://raw.githubusercontent.com/coronel08/wp-child/main/myspace/static/photos/yelpr.png",
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
        git: "#",
        link: "https://www.lobosecurity.com/",
        photo: "https://github.com/coronel08/wp-child/blob/main/myspace/static/photos/lobo-security.png?raw=true",
        built: [
            '<i class="fab fa-wordpress-simple fa-lg"></i>',
            '<i class="fab fa-elementor fa-lg"></i>',
            '<i class="far fa-file-code fa-lg"></i>',
        ],
        about: "Website made for customer on Wordpress",
        tags: "Frontend"
    },
    {
        project: "Myspace",
        git: "https://github.com/coronel08/wp-child/tree/main/myspace",
        link: "https://fdlme.com/",
        photo: "https://raw.githubusercontent.com/coronel08/wp-child/main/myspace/static/photos/myspace.png",
        built: [
            '<i class="fab fa-bootstrap fa-lg"></i>',
            '<i class="fab fa-wordpress fa-lg"></i>',
            '<i class="fab fa-html5 fa-lg"></i>',
            '<i class="fab fa-js fa-lg"></i>'
        ],
        about: "Portfolio site meant to look like my Mysapce a decade ago?",
        tags: "Frontend"
    },
    {
        project: "Burger",
        git: "#",
        link: "#",
        photo: "https://github.com/coronel08/wp-child/blob/main/myspace/static/photos/Takeout.png?raw=true",
        built: [
            '<i class="fab fa-bootstrap fa-lg"></i>',
            '<i class="fab fa-wordpress fa-lg"></i>',
            '<i class="fab fa-html5 fa-lg"></i>',
            '<i class="fab fa-js fa-lg"></i>'
        ],
        about: "Website made for customer using Bootstrap on Wordpress",
        tags: "Frontend"
    },
    {
        project: "Shopify",
        git: "https://github.com/coronel08/shopify-test",
        link: "#",
        photo: "https://github.com/coronel08/shopify-test/blob/master/public/images/shopify-project.png?raw=true",
        built: [
            '<i class="fab fa-bootstrap fa-lg"></i>',
            '<i class="fab fa-shopify fa-lg"></i>',
            '<i class="fab fa-js fa-lg"></i>'
        ],
        about: "Built as a test for an interview as a Frontend Web Developer, built on Shopify",
        tags: "Frontend"
    },
    {
        project: "Elite Staffing",
        git: "#",
        link: "https://elitestaffing.us/",
        photo: "https://raw.githubusercontent.com/coronel08/wp-child/main/myspace/static/photos/elite.png",
        built: [
            '<i class="fab fa-wordpress fa-lg"></i>',
            '<i class="fab fa-html5 fa-lg"></i>',
            '<i class="fab fa-js fa-lg"></i>'
        ],
        about: "Built for a staffing agency integrating their previous employment software and system",
        tags: "Frontend"
    },
    {
        project: "HD Webscrape",
        git: "https://github.com/coronel08/HomeDepot_PriceScrape",
        link: "#",
        photo: "https://github.com/coronel08/HomeDepot_PriceScrape/raw/master/webscrape.gif",
        built: [
            '<i class="fab fa-python fa-lg"></i>',
            '<i class="fas fa-file-excel fa-lg"></i>',
        ],
        about: "Automated monthly price audit process with Python, Web Scraping, and Excel for ALJ Electronics. Checks all competitors pricing and let's us know if we are offering the best price",
        tags: "Python"
    },
    {
        project: "Twilio",
        git: "https://github.com/coronel08/twilio_update_ip",
        link: "#",
        photo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftwilio-cms-prod.s3.amazonaws.com%2Fimages%2Fsip-interface_diagram_v2-2x.width-1600.png&f=1&nofb=1",
        built: [
            '<i class="fab fa-python fa-lg"></i>',
            '<i class="fas fa-sms fa-lg"></i>',
        ],
        about: "Created a number that forwards calls and texts from another number, seperating your business and personal cell number. Built with Python, Twilio API, and AWS",
        tags: "Python"
    },
]

module.exports = {
    workData,
    projData
}