const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const anchors = document.querySelectorAll("nav a");
anchors.forEach((item, index) => item.textContent = siteContent["nav"][`nav-item-${index+1}`]);

//cta
const header = document.querySelector("h1");
const headerButton = document.querySelector(".cta button");
const ctaImg = document.querySelector("#cta-img");
header.textContent = siteContent["cta"]["h1"];
headerButton.textContent = siteContent["cta"]["button"];
ctaImg.src = siteContent["cta"]["img-src"];

//main content
const topHeaders = document.querySelectorAll(".top-content h4");
const topParagraphs = document.querySelectorAll(".top-content p");
topHeaders[0].textContent = siteContent["main-content"]["features-h4"];
topParagraphs[0].textContent = siteContent["main-content"]["features-content"];
topHeaders[1].textContent = siteContent["main-content"]["about-h4"];
topParagraphs[1].textContent = siteContent["main-content"]["about-content"];

const middleImg = document.querySelector("#middle-img");
middleImg.src = siteContent["main-content"]["middle-img-src"];

const bottomHeaders = document.querySelectorAll(".bottom-content h4");
const bottomParagraphs = document.querySelectorAll(".bottom-content p");
bottomHeaders[0].textContent = siteContent["main-content"]["services-h4"];
bottomParagraphs[0].textContent = siteContent["main-content"]["services-content"];
bottomHeaders[1].textContent = siteContent["main-content"]["product-h4"];
bottomParagraphs[1].textContent = siteContent["main-content"]["product-content"];
bottomHeaders[2].textContent = siteContent["main-content"]["vision-h4"];
bottomParagraphs[2].textContent = siteContent["main-content"]["vision-content"];

//contact
const contactHeader = document.querySelector(".contact h4");
const contactInfo = document.querySelectorAll(".contact p");
contactHeader.textContent = siteContent["contact"]["contact-h4"];
contactInfo[0].textContent = siteContent["contact"]["address"];
contactInfo[1].textContent = siteContent["contact"]["phone"];
contactInfo[2].textContent = siteContent["contact"]["email"];

//footer
const footerContent = document.querySelector("footer p");
footerContent.textContent = siteContent["footer"]["copyright"];

//style changes and added elements
anchors.forEach(item => item.style.color = "green");

const navigation = document.querySelector("nav");
const newAnchor = document.createElement("a");
newAnchor.href = "#";
newAnchor.style.color = "green";
newAnchor.textContent = "Somewhere";
navigation.appendChild(newAnchor);
const newAnchorTwo = document.createElement("a");
newAnchorTwo.href = "#";
newAnchorTwo.style.color = "green";
newAnchorTwo.textContent = "Navigation";
navigation.prepend(newAnchorTwo);