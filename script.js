/* =========================================
   silly.io
   Main Website Script
========================================= */


/* =========================================
   ELEMENTS
========================================= */

const navButtons =
    document.querySelectorAll(".nav-button");

const pages =
    document.querySelectorAll(".tab-page");

const goButtons =
    document.querySelectorAll("[data-go]");

const brand =
    document.querySelector(".brand");

const mobileMenu =
    document.getElementById("mobileMenu");

const navLinks =
    document.querySelector(".nav-links");

const cursorGlow =
    document.querySelector(".cursor-glow");


/* =========================================
   TAB SYSTEM
========================================= */

function openTab(tabName) {

    const selectedPage =
        document.getElementById(tabName);

    if (!selectedPage) {
        return;
    }


    /* Remove active page */

    pages.forEach(page => {

        page.classList.remove("active");

    });


    /* Remove active buttons */

    navButtons.forEach(button => {

        button.classList.remove("active");

    });


    /* Open selected page */

    selectedPage.classList.add("active");


    /* Highlight selected button */

    const selectedButton =
        document.querySelector(
            `.nav-button[data-tab="${tabName}"]`
        );

    if (selectedButton) {

        selectedButton.classList.add("active");

    }


    /* Close mobile menu */

    navLinks.classList.remove("open");


    /* Update URL */

    history.replaceState(
        null,
        "",
        `#${tabName}`
    );


    /* Scroll to top */

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================
   NAVIGATION
========================================= */

navButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            openTab(
                button.dataset.tab
            );

        }
    );

});


/* =========================================
   BRAND BUTTON
========================================= */

if (brand) {

    brand.addEventListener(
        "click",
        () => {

            openTab("home");

        }
    );

}


/* =========================================
   HERO BUTTONS
========================================= */

goButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            openTab(
                button.dataset.go
            );

        }
    );

});


/* =========================================
   LOAD TAB FROM URL
========================================= */

function loadInitialTab() {

    const hash =
        window.location.hash
            .replace("#", "");

    const page =
        document.getElementById(hash);

    if (page) {

        openTab(hash);

    } else {

        openTab("home");

    }

}

loadInitialTab();


/* =========================================
   BROWSER BACK/FORWARD
========================================= */

window.addEventListener(
    "hashchange",
    () => {

        const hash =
            window.location.hash
                .replace("#", "");

        if (hash) {

            openTab(hash);

        }

    }
);


/* =========================================
   MOBILE MENU
========================================= */

if (mobileMenu) {

    mobileMenu.addEventListener(
        "click",
        () => {

            navLinks.classList.toggle("open");

        }
    );

}


/* =========================================
   CURSOR GLOW
========================================= */

document.addEventListener(
    "mousemove",
    event => {

        if (!cursorGlow) {
            return;
        }

        cursorGlow.style.left =
            `${event.clientX}px`;

        cursorGlow.style.top =
            `${event.clientY}px`;

    }
);


/* =========================================
   CARD 3D TILT
========================================= */

const cards =
    document.querySelectorAll(
        ".glass-card, .developer-card, .feature-card"
    );


cards.forEach(card => {

    card.addEventListener(
        "mousemove",
        event => {

            const rect =
                card.getBoundingClientRect();

            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;

            const centerX =
                rect.width / 2;

            const centerY =
                rect.height / 2;

            const rotateX =
                (y - centerY) / 35;

            const rotateY =
                (centerX - x) / 35;


            card.style.transform =
                `
                perspective(800px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                translateY(-4px)
                `;
        }
    );


    card.addEventListener(
        "mouseleave",
        () => {

            card.style.transform = "";

        }
    );

});


/* =========================================
   RANDOM TWINKLING STARS
========================================= */

function createTwinkle() {

    const star =
        document.createElement("div");


    star.className =
        "random-twinkle";


    star.style.position =
        "fixed";

    star.style.left =
        `${Math.random() * 100}%`;

    star.style.top =
        `${Math.random() * 100}%`;

    star.style.width =
        "2px";

    star.style.height =
        "2px";

    star.style.borderRadius =
        "50%";

    star.style.background =
        "white";

    star.style.pointerEvents =
        "none";

    star.style.zIndex =
        "-1";

    star.style.boxShadow =
        "0 0 10px rgba(255,255,255,0.9)";


    document.body.appendChild(star);


    const animation =
        star.animate(
            [
                {
                    opacity: 0,
                    transform: "scale(0.4)"
                },

                {
                    opacity: 1,
                    transform: "scale(1.8)"
                },

                {
                    opacity: 0,
                    transform: "scale(0.4)"
                }
            ],
            {
                duration:
                    1200 +
                    Math.random() * 2200,

                easing:
                    "ease-in-out"
            }
        );


    animation.onfinish =
        () => {

            star.remove();

        };

}


/* New twinkle every ~0.4 sec */

setInterval(
    createTwinkle,
    400
);


/* =========================================
   KEYBOARD SHORTCUTS
========================================= */

const keyboardTabs = {

    "1": "home",
    "2": "info",
    "3": "developers",
    "4": "features",
    "5": "discord"

};


document.addEventListener(
    "keydown",
    event => {

        const tab =
            keyboardTabs[event.key];

        if (tab) {

            openTab(tab);

        }

    }
);


/* =========================================
   PAGE TITLE EASTER EGG
========================================= */

document.addEventListener(
    "visibilitychange",
    () => {

        if (
            document.visibilityState ===
            "visible"
        ) {

            document.title =
                "silly.io ✦";

        } else {

            document.title =
                "come back ♡";

        }

    }
);


/* =========================================
   DISCORD BUTTON
========================================= */

const discordButton =
    document.querySelector(
        ".discord-join"
    );


if (discordButton) {

    discordButton.addEventListener(
        "click",
        () => {

            console.log(
                "%c♡ Welcome to the silly.io community!",
                "color:#ff75d2;font-size:16px;font-weight:bold;"
            );

        }
    );

}


/* =========================================
   CONSOLE EASTER EGG
========================================= */

console.log(

`%c
       ✦ silly.io ✦

   welcome, developer :)

   if you're reading this,
   you're probably one of us.

   ♡
`,

"color:#ff75d2;font-size:15px;font-weight:bold;"

);


/* =========================================
   IMAGE ERROR HANDLING
========================================= */

/*
    If a developer PFP doesn't exist,
    automatically use image/icon.png.
*/

document
    .querySelectorAll(".developer-pfp img")
    .forEach(img => {

        img.addEventListener(
            "error",
            () => {

                if (
                    img.src.endsWith(
                        "image/icon.png"
                    )
                ) {
                    return;
                }

                img.src =
                    "image/icon.png";

            }
        );

    });

