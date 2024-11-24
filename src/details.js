import { gsap } from "../node_modules/gsap/all.js";
import data from "../data.js"
const menu = document.getElementById("burgerM")
const PhoneMenu = document.getElementById("phoneNav")
const links = document.querySelectorAll("#phoneNav p")
const header = document.getElementById("")
menu.addEventListener("click", () => {
    PhoneMenu.classList.toggle("hidden")
    PhoneMenu.classList.add("flex")
    tl.reversed(!tl.reversed());
})
var tl = gsap.timeline({ paused: true });

tl.from(PhoneMenu, {
    duration: 1,
    opacity: 0,
    height: '22vh',
    ease: 'expo.inOut',
})
tl.to(links, {
    duration: 1,
    opacity: 1,
    stagger: 0.7,
    ease: 'expo.inOut',
}, "-=0.5");

tl.reverse();
//getData pased on the params id
let params = new URLSearchParams(document.location.search)
let id = params.get("id")
const findData = data.find(obj => obj.id == id)
const slideContainer = document.getElementById("slideShow")
findData.images.forEach(Element=>{
    const image = document.createElement("img")
    image.classList.add("mySlides" ,"my-4", "rounded-2xl", "h-96" ,"object-center","md:w-[100%]","md:h-[100%]")
    image.setAttribute("src",Element)
    slideContainer.append(image)
})
const city = document.getElementById("city")
const place = document.getElementById("place")
const tags = document.getElementById("tags")
const description = document.getElementById("description")
const link = document.getElementById("links")
city.innerText = findData.city
place.innerText = findData.name
description.innerText = findData.description
description.classList.add("text-[#728083]","leading-7","text-sm","my-6")
findData.tags.forEach(Element=>{
    const button = document.createElement("button")
    button.classList.add("rounded-full", "px-4" ,"py-1" ,"text-[#2f4b4d]" ,"border" ,"border-[#2f4b4d]" ,"mb-2" ,"mr-2","bg-white")
    button.innerText = Element
    tags.append(button)
})
const instagrame = document.createElement("a")
instagrame.setAttribute("href",findData.instagramLink)
instagrame.classList.add("flex","items-center","gap-3","bg-[#2f4b4d]","rounded-full","px-4","py-2","text-white","w-44")
instagrame.innerHTML = `<img src="./image/instagram.svg">
    <p>Instagram</p>
`
link.append(instagrame)
const map = document.createElement("a")
map.setAttribute("href",findData.maplink)
map.classList.add("flex","items-center","gap-3","bg-[#2f4b4d]","rounded-full","px-4","py-2","text-white","w-44")
map.innerHTML = `<img src="./image/map.svg">
    <p>map</p>
`
link.append(map)

// SLIDER
let index = 0
function slideShow(){
    let i;
    let slides = document.querySelectorAll(".mySlides")
    // hide all images
    for(i = 0;i<slides.length;i++){
        slides[i].style.display = "none"
    }
    index++
    if(index >= slides.length){
        index = 0
    }
    slides[index].style.display = "block"
    setTimeout(() => {
        slideShow()
    }, 2000);
}
slideShow()
