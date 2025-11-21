document.addEventListener('DOMContentLoaded', () => {
    const ease = "power4.inOut";

    document.querySelectorAll(".nav-bar-buttons").forEach((link) => {
        link.addEventListener('click', (event) =>{
            event.preventDefault();
            const href = link.getAttribute("href");

            if(href && !href.startsWith('#') && href !== window.location.pathname){
                animateTranstion().then(() =>{
                    window.location.href = href;
                });
            };
        });
    });

    document.querySelectorAll('.a').forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const href = link.getAttribute('href');

            if(href && !href.startsWith('#') && href !== window.location.pathname){
                animateTranstion().then(() => {
                    window.location.href = href;
                });
            };
        });
    });

    revealTransition().then(() => {
        gsap.set(".block", { visibility: "hidden" });
    })

    function revealTransition() {
        return new Promise((resolve) => {
            console.log('reveal');
            gsap.set('.block', { scaleY: 1});
            gsap.to('.block', {
                scaleY: 0,
                duration: .5,
                stagger:{
                    each: 0.1,
                    from: 'start',
                    grid: 'auto',
                    axis: 'x'
                },
                ease: ease,
                onComplete: resolve,
            });
        });
    };

    function animateTranstion() {
        return new Promise((resolve) => {
            gsap.set('.block', { visibility: 'visible', scaleY: 0});
            gsap.to('.block', {
                scaleY: 1,
                duration: .65,
                stagger:{
                    each: 0.1,
                    from: 'start',
                    grid: [2,5],
                    axis: 'x'
                },
                ease: ease,
                onComplete: resolve,
            });

        });
    };
});