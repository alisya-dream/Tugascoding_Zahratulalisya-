// =====================
// LOADER

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    loader.classList.add("loader-hidden");

    setTimeout(() => {

        loader.style.display = "none";

    }, 1000);
});


// =====================
// LEAFLET MAP

const map = L.map('map').setView([-4.2699, 138.0804], 5);

L.tileLayer(
'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
{
    attribution:'© OpenStreetMap'
}).addTo(map);


// HOTSPOTS

const hotspots = [

    {
        coords:[-4.2699,138.0804],
        title:"Illegal Logging",
        description:"Massive forest clearing detected in Papua."
    },

    {
        coords:[-2.5337,140.7181],
        title:"Mining Expansion",
        description:"Mining activities threaten biodiversity."
    },

    {
        coords:[-3.3670,135.5000],
        title:"Indigenous Village",
        description:"Local communities depend on rainforest ecosystems."
    }
];

hotspots.forEach(hotspot => {

    L.marker(hotspot.coords)
    .addTo(map)
    .bindPopup(`
        <h3>${hotspot.title}</h3>
        <p>${hotspot.description}</p>
    `);
});


// =====================
// COUNTER ANIMATION
// =====================

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    counter.innerText = "0";

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");

        const current = +counter.innerText;

        const increment = target / 100;

        if(current < target){

            counter.innerText =
            `${Math.ceil(current + increment)}`;

            setTimeout(updateCounter, 20);

        } else {

            counter.innerText = target.toLocaleString();
        }
    };

    updateCounter();
});


// =====================
// SCROLL REVEAL
// =====================

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {

    reveals.forEach(reveal => {

        const windowHeight = window.innerHeight;

        const revealTop =
        reveal.getBoundingClientRect().top;

        const revealPoint = 100;

        if(revealTop < windowHeight - revealPoint){

            reveal.classList.add("active");
        }
    });
});


// =====================
// BEFORE AFTER SLIDER

const slider = document.querySelector(".slider");

slider.addEventListener("input", (e) => {

    document.querySelector(".before-image-container")
    .style.width = e.target.value + "%";
});


// =====================
// AR BUTTON

const arButton = document.getElementById("ar-button");

arButton.addEventListener("click", () => {

    alert("Launching AR Forest Experience...");
});


// =====================
// PARALLAX HERO

window.addEventListener("scroll", () => {

    const scrollY = window.pageYOffset;

    document.querySelector(".hero-content")
    .style.transform =
    `translateY(${scrollY * 0.3}px)`;
});