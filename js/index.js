const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "nav-item-7": "Cookies",
    "nav-item-8": "Cake",
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

// Example: Update the img src for the logo, make nav text green
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

// navbar links, also appending 2 links in to navbar
let navBar = document.querySelector("nav");
navBar.appendChild( document.createElement("a"));
navBar.prepend( document.createElement("a"));
console.log(navBar);
for (let i = 0; i < navBar.children.length; i++){
  navBar.children[i].textContent = siteContent.nav["nav-item-" + (i + 1)];
  navBar.children[i].style.color = "green";
}

// navbar logo
document.getElementById("logo-img").src = siteContent.nav["img-src"];

// h1
document.querySelector("h1").textContent = siteContent.cta["h1"];

// button
document.querySelector("button").textContent = siteContent.cta["button"];

// cta image
document.getElementById("cta-img").src = siteContent.cta["img-src"];

// textcontent
let temp = ["features", "about", "services", "product", "vision"];
let i = 0;
temp.forEach(element => {
  document.getElementsByClassName("text-content")[i].children[0].textContent = siteContent["main-content"][element + "-h4"];
  document.getElementsByClassName("text-content")[i].children[1].textContent = siteContent["main-content"][element + "-content"];
  i++;
});

// mid image
document.getElementById("middle-img").src = siteContent["main-content"]["middle-img-src"];

// contact h4
document.getElementsByClassName("contact")[0].children[0].textContent = siteContent["contact"]["contact-h4"];

// contact address
document.getElementsByClassName("contact")[0].children[1].textContent = siteContent["contact"]["address"];

// contact phone
document.getElementsByClassName("contact")[0].children[2].textContent = siteContent["contact"]["phone"];

// contact email
document.getElementsByClassName("contact")[0].children[3].textContent = siteContent["contact"]["email"];

// footer
document.querySelector("footer").children[0].textContent = siteContent["footer"]["copyright"];

// task 3 stuff, refer to line 46 loop



