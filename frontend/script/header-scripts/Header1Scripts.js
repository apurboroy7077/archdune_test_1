const Header1Scripts = () => {
  const mobileNavbarBbtn = document.querySelector(".mobile-navbar-btn");
  const allHadItem = document.querySelector(".header-item");
  const mobileNavbarBtn = document.querySelector(".mobile-navbar-btn");

  mobileNavbarBbtn.addEventListener("click", () => {
    allHadItem.classList.toggle("h-active");
    mobileNavbarBtn.classList.toggle("h-active");
  });

  const header = document.querySelector(".project_page_header");
  // const mainBar = document.querySelector("main");

  window.addEventListener("scroll", function () {
    header.classList.toggle(
      "project_page_header_while_scroll",
      window.scrollY > 150
    );
  });

  const active_page = window.location.pathname;
  const navLinks = document.querySelectorAll(".all-had-item a");

  navLinks.forEach((link) => {
    if (
      (link.pathname === "/" && active_page === "/index.html") ||
      link.pathname === active_page
    ) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
};

export default Header1Scripts;
