const header__mobile = document.querySelector(".header__mobile");
const header__mobile__close = document.querySelector(".header__mobile__close");
const header__mobile__open = document.querySelector(".header__mobile__open");
const header = document.querySelector(".header");
const toggleHeader = ()=>{
    header__mobile.classList.toggle("active");
}
header__mobile__close.addEventListener("click", toggleHeader);
header__mobile__open.addEventListener("click", toggleHeader);

// SRORRL
window.addEventListener("scroll", () => {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        header.classList.add("active");
    } else {
        header.classList.remove('active')
    }
})