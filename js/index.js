const themeToggle = document.getElementById("darkmode-toggle");
const body = document.body;
const navItems = document.querySelectorAll(".header__nav__item");
const socialSvgs = Array.from(document.querySelectorAll(".social__svg"));
const greetingLines = Array.from(document.querySelectorAll(".home__greeting-line"));
const aboutMe = document.querySelector(".about__me__title");
const aboutExperience = document.querySelector(".about__experience__title");
const aboutEducation = document.querySelector(".about__education__title");
const techStack = document.querySelector(".tech-stack__title");
const projectsTitle = document.querySelector(".projects__title");
const contactTitle = document.querySelector(".contact__title");
const projectsItemTitle = Array.from(document.querySelectorAll(".projects__item__title"));
const projectsItemTech = document.querySelectorAll(".projects__item__tech");
const projectsItemTechItems = document.querySelectorAll(".projects__item__tech__items");
let changeElementsTitles = [aboutMe, aboutExperience, aboutEducation, techStack, projectsTitle, contactTitle]
changeElementsTitles.push(...projectsItemTech);
const aboutDescription = document.querySelector(".about__me__description");
const aboutPositions = document.querySelectorAll(".about__experience__item-pos");
const techStackDescription = document.querySelector(".tech-stack__description");
const projectsDescription = document.querySelector(".projects__description");
const footerAuthor = document.querySelector(".footer__author");
const footerAuthorDecor = document.querySelectorAll(".footer__author__decor");
let changeElementsDescription = [aboutDescription, techStackDescription, projectsDescription, footerAuthor];
changeElementsDescription.push(...aboutPositions);
changeElementsDescription.push(...navItems);
let footerAuthorDecorArray = Array.from(footerAuthorDecor);
changeElementsDescription.push(...footerAuthorDecorArray);
const techStackSvgs = Array.from(document.querySelectorAll(".tech-stack__item-svg"));
let projectsItemsArray = Array.from(document.querySelectorAll(".projects__item"));
let projectsItemDescriptionArray = Array.from(document.querySelectorAll(".projects__item__description"));
projectsItemDescriptionArray.push(...projectsItemTechItems);
const projectsItemLink = Array.from(document.querySelectorAll(".projects__item__link"));
const projectsLinkSvg = Array.from(document.querySelectorAll(".projects__item__link-svg"));
const footerLogoSvg = Array.from(document.querySelectorAll(".footer__logo-svg"));
const footerSocialSvg = Array.from(document.querySelectorAll(".footer__social-svg"));
const footerNavElements = document.querySelectorAll('.footer__nav ul li a');
let footerPhoneEemailNav = Array.from(document.querySelectorAll(".footer__phone-email"));
footerPhoneEemailNav.push(...footerNavElements);

function changeStyleAttribute(elements, attr, color) {
  if (Array.isArray(elements)) {
    elements.forEach(element => {
      element.style[attr] = color;
    });
  } else {
    elements.style[attr] = color;
  }
}

themeToggle.addEventListener("change", function() {
  if (themeToggle.checked) {
    changeStyleAttribute(body, "backgroundColor", "#191919");
    changeStyleAttribute(socialSvgs, "fill", "#A7A7A7");
    changeStyleAttribute(changeElementsDescription, "color", "#A7A7A7");
    changeStyleAttribute(greetingLines, "color", "#D9D9D9");
    changeStyleAttribute(changeElementsTitles, "color", "#CCCCCC");
    changeStyleAttribute(techStackSvgs, "fill", "#FFFFFF");
    changeStyleAttribute(projectsItemsArray, "backgroundColor", "#363636");
    changeStyleAttribute(projectsItemDescriptionArray, "color", "#CCCCCC");
    changeStyleAttribute(projectsItemTitle, "color", "#CCCCCC");
    changeStyleAttribute(projectsItemLink, "color", "#FFFFFF");
    changeStyleAttribute(projectsLinkSvg, "stroke", "#FFFFFF");
    changeStyleAttribute(footerLogoSvg, "fill", "#A7A7A7");
    changeStyleAttribute(footerPhoneEemailNav, "color", "#A7A7A7");
    changeStyleAttribute(footerSocialSvg, "fill", "#A7A7A7");
    changeStyleAttribute(footerAuthorDecorArray, "backgroundColor", "#191919");
    changeStyleAttribute(footerAuthorDecorArray, "webkitTextFillColor", "#A7A7A7");
  } else {
    changeStyleAttribute(body, "backgroundColor", "#FFFFFF");
    changeStyleAttribute(socialSvgs, "fill", "#666666");
    changeStyleAttribute(changeElementsDescription, "color", "#666666");
    changeStyleAttribute(greetingLines, "color", "#42446E");
    changeStyleAttribute(changeElementsTitles, "color", "#42446E");
    changeStyleAttribute(techStackSvgs, "fill", "#000000");
    changeStyleAttribute(projectsItemsArray, "backgroundColor", "#FFFFFF");
    changeStyleAttribute(projectsItemDescriptionArray, "color", "#666666");
    changeStyleAttribute(projectsItemTitle, "color", "#000000");
    changeStyleAttribute(projectsItemLink, "color", "#000000");
    changeStyleAttribute(projectsLinkSvg, "stroke", "#000000");
    changeStyleAttribute(footerLogoSvg, "fill", "#42446E");
    changeStyleAttribute(footerPhoneEemailNav, "color", "#42446E");
    changeStyleAttribute(footerSocialSvg, "fill", "#42446E");
    changeStyleAttribute(footerAuthorDecorArray, "backgroundColor", "#FFFFFF");
    changeStyleAttribute(footerAuthorDecorArray, "webkitTextFillColor", "#666666");
  }
});
