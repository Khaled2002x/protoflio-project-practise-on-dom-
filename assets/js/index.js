// ^ Write your JavaScript code here
var dom = {
  html: document.querySelector("html"),
  toogel_dark: document.getElementById("theme-toggle-button"),
  settings_toggle: document.querySelector("#settings-toggle"),
  settings_sidebar: document.querySelector("#settings-sidebar"),
  close_settings: document.getElementById("close-settings"),
  portfolio_filter_tabs: document.querySelectorAll(".portfolio-filter"),
  portfolio_items: document.querySelectorAll(".portfolio-item"),
  nav_link: document.querySelectorAll("nav a"),
  sections: document.querySelectorAll("section"),
  href_link: document.querySelectorAll("a [href]"),
};

//scroll spy
window.addEventListener("scroll", () => {
  let current_section = "";
  dom.sections.forEach((section) => {
    let start_section = section.offsetTop;
    if (pageYOffset >= start_section - 100) {
      current_section = section.getAttribute("id");
    }
    dom.nav_link.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current_section}`) {
        link.classList.add("active");
      }
    });
  });
});

dom.toogel_dark.addEventListener("click", () => {
  dom.html.classList.toggle("dark");
});
dom.settings_toggle.addEventListener("click", () => {
  dom.settings_sidebar.classList.toggle("translate-x-full");
});
dom.close_settings.addEventListener("click", () => {
  dom.settings_sidebar.classList.add("translate-x-full");
});
//nav tap task
dom.portfolio_filter_tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    dom.portfolio_filter_tabs.forEach((t) => t.classList.remove("active"));
    dom.portfolio_items.forEach((c) => c.classList.remove("active"));
    tab.classList.add("active");
    let target = tab.dataset.filter;
    console.log(target);
    if (target === "all") {
      dom.portfolio_items.forEach((item) => item.classList.add("active"));
    } else {
      document
        .querySelectorAll(`[data-category="${target}"]`)
        .forEach((item) => item.classList.add("active"));
    }
  });
});
window.addEventListener("load", () => {
  dom.portfolio_items.forEach((item) => item.classList.add("active"));
});
///
