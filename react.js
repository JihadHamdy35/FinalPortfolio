/// Home Media Css List (700 , more than 700)
let css700 = "";
let currentPage = 0;
function homeDisplay700() {
    document.querySelector(".centrize").style.width = "90%";
    let listIconLi = document.createElement("li");
    let listIcon = document.createElement("img");
    listIcon.setAttribute("src", "./Images/Wmenu.png");
    listIcon.setAttribute("alt", "menu");
    listIcon.setAttribute("class", "custom blackWhite");
    listIconLi.appendChild(listIcon);
    document.querySelector("header ul").appendChild(listIconLi);
    let ul = document.querySelector("header ul");
    ul.style.width = "fit-content";
    listIcon.onclick = function () {
        document.getElementsByClassName("css700Ul")[0].style.animationName = "displayBlock";
        document.getElementsByClassName("css700Ul")[0].style.display = "block";
        document.getElementsByClassName("css700Ul")[0].style.width = "50%";
        document.querySelector("header .css700Ul img").style.display = "block";
        document.querySelector("header .css700Ul ul").style.display = "block";
    }
    document.querySelector("header .css700Ul img").onclick = function () {
        document.getElementsByClassName("css700Ul")[0].style.animationName = "displayNone";
        document.getElementsByClassName("css700Ul")[0].style.width = "0";
        document.getElementsByClassName("css700Ul")[0].style.display = "none";
        document.querySelector("header .css700Ul img").style.display = "none";
        document.querySelector("header .css700Ul ul").style.display = "none";
    }
}
function homeDisplay1000() {
    let li = document.querySelectorAll("header ul li");
    let hrefs = [
        "home",
        "about",
        "experience",
        "pricing",
        "portfolio",
        "contact",
    ];
    let ul = document.querySelector("header ul");
    ul.style.width = "70%";
    for (let i = 5; i >= 0; i--) {
        let li = document.createElement("li");
        let a = document.createElement("a");
        a.setAttribute("href", `#${hrefs[i]}`);
        a.innerText = `${hrefs[i]}`;
        li.prepend(a);
        ul.prepend(li);
    }
}
function css1000List() {
    homeDisplay1000();
}
function css700List() {
    homeDisplay700();
}
function listDisplay() {
    if (window.innerWidth <= 700) {
        document.querySelector("html").style.setProperty("--currentPortfolioHeight", "fit-content");
        document.querySelector("html").style.setProperty("--currentPortfolioWidth", "100%");
        if (css700 === "true") return;
        else {
            css700List();
            let li = document.querySelectorAll("header .css1000Ul li");
            if (css700 === "false") {
                for (let i = 0; i < li.length - 2; i++) li[i].remove();
            }
            css700 = "true";
        }
    } else {
        document.querySelector("html").style.setProperty("--currentPortfolioHeight", "100%");
        document.querySelector("html").style.setProperty("--currentPortfolioWidth", "32%");
        if (css700 === "false") return;
        else {
            css1000List();
            let li = document.querySelectorAll("header .css1000Ul li");
            if (css700 === "true") li[7].remove();
            css700 = "false";
        }
    }
    headerHover(css700);
}
//Home header Hover
function createDot(ele) {
    let dots = document.createElement("span");
    dots.setAttribute("class", "dot");
    ele.appendChild(dots);
}
function headerHover(media) {
    let ul = null;
    let len = 6;
    if (media === "true") {
        ul = document.querySelectorAll("header .css700Ul ul")[0];
    }
    else {
        ul = document.querySelectorAll("header ul")[0];
    }
    let listItems = ul.getElementsByTagName("li");
    for (let i = 0; i < len; i++) {
        let a = listItems[i].getElementsByTagName("a")[0];
        a.onmouseenter = function () {
            a.style.color = getComputedStyle(document.getElementsByTagName("html")[0]).getPropertyValue("--currentColor");
        }
        a.onmouseleave = function () {
            a.style.color = getComputedStyle(document.getElementsByTagName("html")[0]).getPropertyValue("--textColor");
        }
        if (media === "true") {
            a.onclick = () => document.querySelector("header .css700Ul img").click();
        }
    }
}
function currentSection(css700) {
    let top = window.pageYOffset;
    let ul = null;
    let listItems = null;
    let sectionHeights = [0, 0, 0, 0, 0, 0];
    for (let i = 0; i < 6; i++) {
        if (i == 0) {
            sectionHeights[i] += document.getElementById("home").offsetHeight;
        }
        else if (i == 1) {
            sectionHeights[i] += sectionHeights[i - 1] + document.getElementById("about").offsetHeight;
        }
        else if (i == 2) {
            sectionHeights[i] += sectionHeights[i - 1] + document.getElementById("experience").offsetHeight;
        }
        else if (i == 3) {
            sectionHeights[i] += sectionHeights[i - 1] + document.getElementById("pricing").offsetHeight;
        }
        else if (i == 4) {
            sectionHeights[i] += sectionHeights[i - 1] + document.getElementById("portfolio").offsetHeight;
        }
        else if (i == 5) {
            sectionHeights[i] += sectionHeights[i - 1] + document.getElementById("contact").offsetHeight;
        }
    }
    if (css700 === "true") {
        ul = document.querySelectorAll("header .css700Ul ul")[0];
        listItems = ul.querySelectorAll("li");
    }
    else {
        ul = document.querySelectorAll("header .css1000Ul")[0];
        listItems = ul.querySelectorAll("li");
    }
    for (let i = 0; i < 6; i++) {
        if (i == 0) {
            if (top >= 0 && top <= sectionHeights[i]) {
                if (listItems[currentPage].getElementsByClassName("dot")[0] !== undefined) {
                    listItems[currentPage].getElementsByClassName("dot")[0].remove();
                }
                createDot(listItems[i]);
                currentPage = i;
            }
        }
        else {
            if (top > sectionHeights[i - 1] - 200 && top <= sectionHeights[i]) {
                if (listItems[currentPage].getElementsByClassName("dot")[0] !== undefined) {
                    listItems[currentPage].getElementsByClassName("dot")[0].remove();
                }
                createDot(listItems[i]);
                currentPage = i;
            }
        }
    }
}
// Portfolio list Javascript
function portfolioList(ele) {
    let lis = document.querySelectorAll("#portfolio .list ul li");
    for (let i = 0; i < lis.length; i++) {
        if (lis[i].querySelector("span") !== null) {
            lis[i].querySelector("span").remove();
            lis[i].removeAttribute("class");
        }
    }
    ele.setAttribute("class", "active");
    createDot(ele);
}
function portfolioListOnclick() {
    let lis = document.querySelectorAll("#portfolio .list ul li");
    for (let i = 0; i < lis.length; i++) {
        lis[i].onclick = function () {
            portfolioList(lis[i]);
            portfolioDisplayDivs(lis[i]);
        }
    }
}
function portfolioDisplayDivs(ele) {
    let text = ele.innerText.toLowerCase();
    let lis = document.querySelectorAll("#portfolio .websites a");
    let linksDivs = {
        "amazon": "first",
        "portfolio": "first",
        "traffico": "first",
        "oldBook": "second",
        "onlineSchool": "second",
        "newBook": "second",
    };
    if (text === "all" || text === "html") {
        for (let i = 0; i < lis.length; i++) {
            if (css700 === "true") lis[i].style.display = "block";
            else lis[i].style.display = "initial";
            lis[i].style.animationName = "displayAon";
            lis[i].style.animationDuration = "0.7s";
            lis[i].style.animationdIterationCount = "1";
            lis[i].style.animationDirection = "alternate";
            document.querySelector(`#portfolio .websites .${linksDivs[`${lis[i].getAttribute("class")}`]}`).
                appendChild(lis[i]);
        }
    }
    else {
        for (let i = 0; i < lis.length; i++) {
            if (lis[i].getAttribute("liType").includes(text)) {
                document.querySelector("#portfolio .websites .first").
                    appendChild(lis[i]);
                if (css700 === "true") lis[i].style.display = "block";
                else lis[i].style.display = "initial";
                lis[i].style.animationName = "displayAon";
                lis[i].style.animationDuration = "0.7s";
                lis[i].style.animationdIterationCount = "1";
                lis[i].style.animationDirection = "alternate";
            }
            else {
                lis[i].style.display = "none";
                lis[i].style.animationName = "displayAoff";
                lis[i].style.animationDuration = "0.7s";
                lis[i].style.animationdIterationCount = "1";
                lis[i].style.animationDirection = "alternate";
            }
        }
    }
    setTimeout(() => {
        for (let i = 0; i < lis.length; i++) {
            lis[i].style.setProperty("animation", "none");
        }
    }, 1000);
}
function scrollBetweenReviews() {
    let divs = document.querySelectorAll("#portfolio .scroll div");
    for (let i = 0; i < 3; i++) {
        divs[i].onclick = function () {
            let reviews = document.querySelectorAll("#portfolio .reviews");
            for (let j = 0; j < 3; j++) {
                divs[j].removeAttribute("class");
                if (i != j) {
                    reviews[j].style.display = "none";
                }
                else {
                    reviews[j].style.display = "block";
                }
            }
            divs[i].setAttribute("class", "active");
        }
    }
}
// Contact Javascript
function contactSection() {
    let inputs = document.querySelectorAll("#contact input");
    let labels = document.querySelectorAll("#contact label");
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].onfocus = function () {
            inputs[i].style.marginTop = "0";
            inputs[i].style.borderBottom = "solid var(--currentColor) 0.5px";
            labels[i].style.color = "var(--currentColor)";
            inputs[i].style.transitionProperty = "margin-top";
            inputs[i].style.transitionDuration = "0.3s";
        }
        inputs[i].onblur = function () {
            inputs[i].style.marginTop = "-1em";
            inputs[i].style.borderBottom = "solid var(--textColor) 0.5px";
            labels[i].style.color = "var(--textColor)";
            inputs[i].style.transitionProperty = "margin-top";
            inputs[i].style.transitionDuration = "0.3s";
        }
    }
}
// Dialog Javascript
let dialog = document.getElementsByTagName("dialog")[0];
let cover = document.getElementById("cover");
let currentcolor = 2;
let currentBG = 1;
let colors = dialog.querySelectorAll(".colorsDiv div");
document.querySelector("header .custom").onclick = function () {
    dialog.setAttribute("open", true);
    cover.style.zIndex = "0";
    cover.style.backgroundColor = "black";
    cover.style.opacity = "0.5";
    dialog.style.zIndex = "1";
}
cover.onclick = function () {
    dialog.removeAttribute("open");
    cover.style.zIndex = "-1";
    cover.style.backgroundColor = `${getComputedStyle(document.querySelector("html")).getPropertyValue("--bgColor")}`;
}
// color change
function experienceIcons(ele) {
    let imgs = document.querySelectorAll("#experience img");
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].src = `./Images/${imgs[i].getAttribute("alt")}${ele}.png`;
    }
}
function changeColor() {
    for (let i = 0; i < colors.length; i++) {
        colors[i].onclick = function () {
            colors[currentcolor].removeAttribute("class");
            currentcolor = i;
            colors[currentcolor].setAttribute("class", "active");
            document.querySelector("html").style.setProperty("--currentColor"
                , `var(--${colors[i].getAttribute("id")})`);
            if (i === 1) {
                document.querySelector("html").style.setProperty("--btnColor"
                    , `black`);
            }
            else {
                document.querySelector("html").style.setProperty("--btnColor"
                    , `white`);
            }
            experienceIcons(i);
        }
    }
}
function blackWhite(ele) {
    let imgs = document.querySelectorAll(".blackWhite");
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].src = `./Images/${ele}${imgs[i].getAttribute("alt")}.png`;
    }
}
function changeBgColor() {
    let bg = dialog.querySelectorAll(".backgroundDiv .b1");
    for (let i = 0; i < bg.length; i++) {
        bg[i].onclick = function () {
            bg[currentBG].setAttribute("id", " ");
            currentBG = i;
            bg[currentBG].setAttribute("id", "active");
            document.querySelector("html").style.setProperty("--bgColor"
                , `var(--${bg[i].innerText.toLowerCase()})`);
            if (i === 0) {
                document.querySelector("html").style.setProperty("--textColor"
                    , `black`);
                document.querySelector("html").style.setProperty("--divBg"
                    , `white`);
                blackWhite("B");
            }
            else {
                document.querySelector("html").style.setProperty("--textColor"
                    , `white`);
                if (i === 1) {
                    document.querySelector("html").style.setProperty("--divBg"
                        , `rgb(42, 38, 65)`);
                }
                else {
                    document.querySelector("html").style.setProperty("--divBg"
                        , `rgb(27, 26, 26)`);
                }
                blackWhite("W");
            }
        }
    }
}
// All function out calls 
let functionCalls = function () {
    window.onresize = function () {
        listDisplay();
        currentSection(css700);
    }
    listDisplay();
    currentSection(css700);
    document.onscroll = function () {
        currentSection(css700);
    }
    portfolioListOnclick();
    portfolioList(document.querySelectorAll("#portfolio .list ul li")[0]);
    scrollBetweenReviews();
    contactSection();
    changeColor();
    changeBgColor();
}
functionCalls();
