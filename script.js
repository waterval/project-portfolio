//Initialize Animate on Scroll (AOS):
AOS.init({
    easing: "ease-in-out-back",
    duration: 250,
    once: true
});

//Initialize parallax 3D effect:
const scrollOptions = { capture: false, passive: true };

function onScroll() {
    document
        .querySelector(".parallax-container")
        .style.setProperty("--y", `${window.scrollY}px`);
}

if ("IntersectionObserver" in window) {
    const referenceImage = document.querySelector(".parallax-item:last-child");

    const observer = new IntersectionObserver(entries => {
        let [{ isIntersecting }] = entries;

        if (isIntersecting) {
            window.addEventListener("scroll", onScroll, scrollOptions);
        } else {
            window.removeEventListener("scroll", onScroll, scrollOptions);
        }
    });

    observer.observe(referenceImage);
} else {
    window.addEventListener("scroll", onScroll, scrollOptions);
}
