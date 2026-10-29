
"use strict";

/* ==========================================================
   MBOGAMBOGA — MAIN JAVASCRIPT
   Kiswahili / English
   Auto / Light / Dark
   Fixed price per kg — no delivery
   ========================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const $ = (selector) => document.querySelector(selector);
  const $$ = (selector) => [...document.querySelectorAll(selector)];

  const money = (amount) =>
    "TZS " + new Intl.NumberFormat("en-TZ", {
      maximumFractionDigits: 0
    }).format(amount);

  const storage = {
    get(key) {
      try {
        return localStorage.getItem(key);
      } catch {
        return null;
      }
    },
    set(key, value) {
      try {
        localStorage.setItem(key, value);
      } catch {
        // Local storage may be unavailable.
      }
    }
  };

  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  );

  const translations = {
    sw: {
      navHome: "Mwanzo",
      navAbout: "Kuhusu",
      navBlog: "Habari",
      navServices: "Huduma",
      navShop: "Sokoni",
      navContact: "Mawasiliano",

      heroTag: "Karibu Mbogamboga",
      heroTitle: "Kilimo Bora,<br>Maisha Bora.",
      heroDescription:
        "Tunakuletea utaalamu, ushauri na suluhisho za kisasa za kilimo kwa maendeleo endelevu ya wakulima.",
      exploreServices: "Gundua Huduma Zetu",
      contactUs: "Wasiliana Nasi",

      aboutTag: "Kuhusu Mtaalamu Mkuu",
      aboutTitle: "Kutana na Bwanashamba",
      expertBadge: "Mtaalamu wa Kilimo",
      mainExpertRole: "Mtaalamu Mkuu wa Kilimo",
      aboutDescription:
        "Isack Kiwelu ni mtaalamu wa kilimo anayejikita katika kuwasaidia wakulima kuboresha uzalishaji, matumizi ya teknolojia za kisasa na usimamizi bora wa mashamba.",
      educationTitle: "Elimu",
      educationDescription:
        "Chuo cha kilimo Ikiriguru, Chuo cha kilimo Israel",
      experienceTitle: "Uzoefu",
      experienceDescription:
        "Uzoefu wa zaidi miaka 5 kwenye ulimaji na ufugaji. Baadhi ya miradi ni mradi A, mradi B.",
      specializationTitle: "Utaalamu",
      specializationDescription:
        "Ushauri wa kilimo na usimamizi wa mazao.",
      contactExpert: "Wasiliana na Mtaalamu",

      blogTag: "HABARI NA MAARIFA",
      blogTitle: "Habari Mpya za Kilimo",
      blogDescription:
        "Pata habari, elimu na mbinu bora za kilimo kutoka kwa Bwanashamba.",

      servicesTag: "Tunachofanya",
      servicesTitle: "Huduma Zetu",
      servicesDescription:
        "Tunatoa huduma za kitaalamu zinazolenga kuongeza uzalishaji na maendeleo ya kilimo.",

      service1Title: "Ushauri wa Kilimo",
      service1Description:
        "Ushauri wa kitaalamu kuhusu mbinu bora za uzalishaji na usimamizi wa mashamba.",
      service2Title: "Udhibiti wa Wadudu",
      service2Description:
        "Ushauri wa kudhibiti wadudu na magonjwa yanayoathiri uzalishaji wa mazao.",
      service3Title: "Uchambuzi wa Udongo",
      service3Description:
        "Huduma za ushauri kuhusu rutuba ya udongo na matumizi sahihi ya mbolea.",
      service4Title: "Mafunzo kwa Wakulima",
      service4Description:
        "Mafunzo ya vitendo na nadharia kuhusu mbinu za kisasa za kilimo.",
      service5Title: "Usimamizi wa Mazao",
      service5Description:
        "Ufuatiliaji wa mazao kuanzia maandalizi ya shamba hadi mavuno.",
      service6Title: "Ukaguzi wa Mashamba",
      service6Description:
        "Kutembelea mashamba na kutoa mapendekezo ya kitaalamu.",
      inquireService: "Ulizia Huduma Hii",

      shopTag: "Mazao Yetu",
      shopTitle: "Bidhaa Zinazopatikana",
      shopDescription:
        "Nunua mazao bora kutoka shambani kwa bei maalumu kwa kila kilogramu.",
      availableNow: "Yanapatikana Sasa",
      cucumberName: "Matango Mabichi",
      cucumberDescription:
        "Matango safi na bora kutoka shambani. Yanapatikana kwa oda za rejareja na jumla.",
      perKg: "kwa kilo",
      taxIncluded: "Bei inajumuisha kodi zinazotumika.",
      quantityLabel: "Kiasi (kg)",
      addToCart: "Weka Kwenye Kikapu",
      orderingComingSoon:
        "Kuagiza Mtandaoni Kunakuja Hivi Karibuni!",
      orderingComingSoonDescription:
        "Oda na malipo ya mtandaoni bado hayapatikani. Wasiliana nasi kwa maulizo.",

      contactTag: "Tuongee",
      contactTitle: "Wasiliana Nasi",
      contactDescription:
        "Una swali kuhusu huduma zetu au unahitaji ushauri wa kilimo? Tutumie ujumbe.",
      contactInfoTitle: "Tupo Tayari Kukusaidia",
      contactInfoDescription:
        "Wasiliana nasi kwa maelezo zaidi kuhusu huduma, mafunzo na bidhaa zetu.",
      phoneLabel: "Simu",
      locationLabel: "Mahali",
      locationValue: "Tanzania",
      nameLabel: "Jina Kamili",
      serviceLabel: "Huduma Unayohitaji",
      selectService: "Chagua Huduma",
      otherInquiry: "Mengineyo",
      messageLabel: "Ujumbe Wako",
      sendMessage: "Tuma Ujumbe",

      cartTitle: "Kikapu Chako",
      emptyCart: "Kikapu chako kiko wazi.",
      subtotal: "Jumla ya Bidhaa",
      proceedCheckout: "Endelea na Malipo",

      checkoutTitle: "Kamilisha Oda Yako",
      orderNotesLabel: "Maelekezo ya Ziada (Si lazima)",
      checkoutSubtotal: "Bei ya Bidhaa",
      checkoutTotal: "Jumla ya Malipo",
      paymentMethod: "Chagua Njia ya Malipo",
      payNow: "Lipa Sasa",
      securePaymentNote:
        "Malipo ya mtandaoni bado hayajafunguliwa.",

      receiptTitle: "Risiti ya Malipo",
      downloadReceipt: "Pakua Risiti (PDF)",

      footerDescription:
        "Tunajenga kilimo bora kupitia utaalamu, teknolojia na ushirikiano na wakulima.",
      quickLinks: "Viungo Muhimu",
      footerServices: "Huduma Zetu",
      rightsReserved: "Haki zote zimehifadhiwa.",

      pricePending: "Bei itawekwa",
      removeItem: "Ondoa",
      paymentUnavailable:
        "Malipo ya mtandaoni bado hayajafunguliwa. Hakuna fedha zilizokatwa.",
      contactUnavailable:
        "Fomu bado haijaunganishwa na huduma ya kutuma ujumbe.",
      productUnavailable:
        "Bei ya bidhaa bado haijathibitishwa.",
      autoTheme: "Mandhari ya kifaa",
      lightTheme: "Mandhari angavu",
      darkTheme: "Mandhari meusi"
    },

    en: {
      navHome: "Home",
      navAbout: "About",
      navBlog: "Blog",
      navServices: "Services",
      navShop: "Shop",
      navContact: "Contact",

      heroTag: "Welcome to Mbogamboga",
      heroTitle: "Better Farming,<br>Better Living.",
      heroDescription:
        "We provide agricultural expertise, professional guidance and modern farming solutions to support sustainable growth.",
      exploreServices: "Explore Our Services",
      contactUs: "Contact Us",

      aboutTag: "About Our Lead Expert",
      aboutTitle: "Meet Bwanashamba",
      expertBadge: "Agricultural Expert",
      mainExpertRole: "Lead Agricultural Specialist",
      aboutDescription:
        "Isack Kiwelu is an agricultural specialist dedicated to helping farmers improve production, adopt modern technologies and manage farms effectively.",
      educationTitle: "Education",
      educationDescription:
        "Ikiriguru Agricultural College and agricultural studies in Israel.",
      experienceTitle: "Experience",
      experienceDescription:
        "Over five years of experience in crop farming and livestock keeping. Projects include Project A and Project B.",
      specializationTitle: "Specialization",
      specializationDescription:
        "Agricultural consulting and crop management.",
      contactExpert: "Contact the Expert",

      blogTag: "NEWS & KNOWLEDGE",
      blogTitle: "Latest Agricultural News",
      blogDescription:
        "Discover agricultural news, insights and practical farming advice from Bwanashamba.",

      servicesTag: "What We Do",
      servicesTitle: "Our Services",
      servicesDescription:
        "We provide professional agricultural services to improve farm productivity and development.",

      service1Title: "Agricultural Consulting",
      service1Description:
        "Professional advice on effective farming methods and farm management.",
      service2Title: "Pest Management",
      service2Description:
        "Guidance on controlling pests and diseases affecting crop production.",
      service3Title: "Soil Analysis",
      service3Description:
        "Advice on soil fertility and appropriate fertilizer use.",
      service4Title: "Farmer Training",
      service4Description:
        "Practical and theoretical training in modern agricultural techniques.",
      service5Title: "Crop Management",
      service5Description:
        "Crop monitoring from land preparation to harvesting.",
      service6Title: "Farm Inspection",
      service6Description:
        "Farm visits and professional agricultural recommendations.",
      inquireService: "Inquire About This Service",

      shopTag: "Our Produce",
      shopTitle: "Available Products",
      shopDescription:
        "Buy quality farm produce at a fixed price per kilogram.",
      availableNow: "Available Now",
      cucumberName: "Fresh Cucumbers",
      cucumberDescription:
        "Fresh, quality cucumbers directly from the farm. Available for retail and wholesale orders.",
      perKg: "per kilogram",
      taxIncluded: "Price includes applicable taxes.",
      quantityLabel: "Quantity (kg)",
      addToCart: "Add to Basket",
      orderingComingSoon: "Online Ordering Coming Soon!",
      orderingComingSoonDescription:
        "Online orders and payments are not yet available. Please contact us for inquiries.",

      contactTag: "Get in Touch",
      contactTitle: "Contact Us",
      contactDescription:
        "Have questions about our services or need agricultural advice? Send us a message.",
      contactInfoTitle: "We're Here to Help",
      contactInfoDescription:
        "Contact us for more information about our services, training and products.",
      phoneLabel: "Phone",
      locationLabel: "Location",
      locationValue: "Tanzania",
      nameLabel: "Full Name",
      serviceLabel: "Service Required",
      selectService: "Select a Service",
      otherInquiry: "Other Inquiry",
      messageLabel: "Your Message",
      sendMessage: "Send Message",

      cartTitle: "Your Basket",
      emptyCart: "Your basket is empty.",
      subtotal: "Products Total",
      proceedCheckout: "Proceed to Checkout",

      checkoutTitle: "Complete Your Order",
      orderNotesLabel: "Additional Instructions (Optional)",
      checkoutSubtotal: "Products Total",
      checkoutTotal: "Total Payment",
      paymentMethod: "Select Payment Method",
      payNow: "Pay Now",
      securePaymentNote:
        "Online payments are not yet available.",

      receiptTitle: "Payment Receipt",
      downloadReceipt: "Download Receipt (PDF)",

      footerDescription:
        "Building better agriculture through expertise, technology and collaboration with farmers.",
      quickLinks: "Quick Links",
      footerServices: "Our Services",
      rightsReserved: "All rights reserved.",

      pricePending: "Price pending",
      removeItem: "Remove",
      paymentUnavailable:
        "Online payments are not available yet. No money has been charged.",
      contactUnavailable:
        "The contact form is not yet connected to a messaging service.",
      productUnavailable:
        "The product price has not yet been confirmed.",
      autoTheme: "System theme",
      lightTheme: "Light theme",
      darkTheme: "Dark theme"
    }
  };

  let language =
    storage.get("mbogamboga-language") === "en"
      ? "en"
      : "sw";

  const t = (key) => translations[language][key] ?? key;

  /* ==========================================================
     THEME
     ========================================================== */

  const systemTheme = window.matchMedia(
    "(prefers-color-scheme: dark)"
  );

  const themeModes = ["auto", "light", "dark"];

  let themeMode = storage.get("mbogamboga-theme") || "auto";

  if (!themeModes.includes(themeMode)) {
    themeMode = "auto";
  }

  const resolvedTheme = () =>
    themeMode === "auto"
      ? (systemTheme.matches ? "dark" : "light")
      : themeMode;

  function updateThemeButton() {
    const button = $("#themeToggle");
    const icon = $("#themeIcon");

    if (!button || !icon) return;

    icon.className =
      resolvedTheme() === "dark"
        ? "fa-solid fa-sun"
        : "fa-solid fa-moon";

    button.title = t({
      auto: "autoTheme",
      light: "lightTheme",
      dark: "darkTheme"
    }[themeMode]);

    button.setAttribute("aria-label", button.title);
    button.dataset.mode = themeMode;
  }

  function applyTheme() {
    document.documentElement.dataset.theme = resolvedTheme();
    updateThemeButton();
  }

  $("#themeToggle")?.addEventListener("click", () => {
    const index = themeModes.indexOf(themeMode);
    themeMode = themeModes[(index + 1) % themeModes.length];

    storage.set("mbogamboga-theme", themeMode);
    applyTheme();
  });

  const systemThemeChanged = () => {
    if (themeMode === "auto") applyTheme();
  };

  if (systemTheme.addEventListener) {
    systemTheme.addEventListener("change", systemThemeChanged);
  } else {
    systemTheme.addListener(systemThemeChanged);
  }

  /* ==========================================================
     PRODUCTS AND FIXED PRICING
     ========================================================== */

  const products = {
    "cucumber-001": {
      id: "cucumber-001",
      nameKey: "cucumberName",
      image: "images/products/matango.jpg",
      unit: "kg",

      // Set the confirmed TZS price per kg here later.
      price: null,

      // Ordering remains unavailable for now.
      available: false
    }
  };

  const validPrice = (product) =>
    product &&
    Number.isFinite(product.price) &&
    product.price > 0;

  function updateProductDisplay() {
    const product = products["cucumber-001"];
    const price = $("#cucumberPrice");
    const button = $(".add-to-cart");

    if (price) {
      price.textContent = validPrice(product)
        ? money(product.price)
        : t("pricePending");

      price.dataset.priceStatus = validPrice(product)
        ? "confirmed"
        : "pending";
    }

    // Online ordering is deliberately disabled.
    if (button) button.disabled = true;
  }

  /* ==========================================================
     QUANTITY
     ========================================================== */

  const quantityInput = $("#productQuantity");

  const quantity = () => {
    const value = Number(quantityInput?.value);

    return Number.isSafeInteger(value) && value >= 1
      ? Math.min(value, 1000000)
      : 1;
  };

  const setQuantity = (value) => {
    if (!quantityInput) return;

    quantityInput.value = String(
      Math.max(1, Math.min(1000000, value))
    );
  };

  $("#increaseQuantity")?.addEventListener("click", () => {
    setQuantity(quantity() + 1);
  });

  $("#decreaseQuantity")?.addEventListener("click", () => {
    setQuantity(quantity() - 1);
  });

  quantityInput?.addEventListener("change", () => {
    setQuantity(quantity());
  });

  /* ==========================================================
     CART
     ========================================================== */

  const CART_KEY = "mbogamboga-cart";

  function loadCart() {
    try {
      const saved = JSON.parse(storage.get(CART_KEY) || "[]");

      if (!Array.isArray(saved)) return [];

      return saved
        .filter((item) =>
          item &&
          products[item.id] &&
          Number.isSafeInteger(item.quantity) &&
          item.quantity >= 1 &&
          item.quantity <= 1000000
        )
        .map((item) => ({
          id: item.id,
          quantity: item.quantity
        }));
    } catch {
      return [];
    }
  }

  let cart = loadCart();

  function saveCart() {
    storage.set(CART_KEY, JSON.stringify(cart));
  }

  const cartQuantity = () =>
    cart.reduce((sum, item) => sum + item.quantity, 0);

  // Fixed price per kg × kilograms.
  // No extra fees.
  const cartTotal = () =>
    cart.reduce((sum, item) => {
      const product = products[item.id];

      if (!validPrice(product)) return sum;

      return sum + product.price * item.quantity;
    }, 0);

  function renderCart() {
    const container = $("#cartItems");
    const count = $("#cartCount");

    if (count) {
      count.textContent = String(cartQuantity());
    }

    if (container) {
      container.replaceChildren();

      if (cart.length === 0) {
        const empty = document.createElement("p");
        empty.className = "empty-cart-message";
        empty.textContent = t("emptyCart");
        container.appendChild(empty);
      } else {
        cart.forEach((item) => {
          const product = products[item.id];
          if (!product) return;

          const wrapper = document.createElement("div");
          wrapper.className = "cart-item";

          const image = document.createElement("img");
          image.src = product.image;
          image.alt = t(product.nameKey);

          const info = document.createElement("div");
          info.className = "cart-item-info";

          const heading = document.createElement("h4");
          heading.textContent = t(product.nameKey);

          const amount = document.createElement("p");
          amount.textContent = `${item.quantity} kg`;

          const price = document.createElement("p");
          price.textContent = validPrice(product)
            ? money(product.price * item.quantity)
            : t("pricePending");

          info.append(heading, amount, price);

          const remove = document.createElement("button");
          remove.type = "button";
          remove.className = "remove-cart-item";
          remove.dataset.removeId = item.id;
          remove.textContent = "×";
          remove.setAttribute("aria-label", t("removeItem"));

          wrapper.append(image, info, remove);
          container.appendChild(wrapper);
        });
      }
    }

    if ($("#cartSubtotal")) {
      $("#cartSubtotal").textContent = money(cartTotal());
    }

    // Ordering is coming soon.
    if ($("#checkoutButton")) {
      $("#checkoutButton").disabled = true;
    }
  }

  $("#cartItems")?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-remove-id]");
    if (!button) return;

    cart = cart.filter(
      (item) => item.id !== button.dataset.removeId
    );

    saveCart();
    renderCart();
    updateCheckoutSummary();
  });

  /* ==========================================================
     CHECKOUT — TOTAL ONLY
     ========================================================== */

  function updateCheckoutSummary() {
    const total = cartTotal();

    if ($("#checkoutSubtotal")) {
      $("#checkoutSubtotal").textContent = money(total);
    }

    if ($("#checkoutTotal")) {
      $("#checkoutTotal").textContent = money(total);
    }

    const payButton = $("#payNowButton");

    if (payButton) {
      payButton.disabled = true;
      payButton.title = t("paymentUnavailable");
    }
  }

  /* ==========================================================
     CART AND MODALS
     ========================================================== */

  const cartDrawer = $("#cartDrawer");
  const cartBackdrop = $("#cartBackdrop");

  const checkoutModal = $("#checkoutModal");
  const checkoutBackdrop = $("#checkoutBackdrop");

  const receiptModal = $("#receiptModal");
  const receiptBackdrop = $("#receiptBackdrop");

  let previousCartFocus = null;
  let previousCheckoutFocus = null;

  function syncBodyScroll() {
    const open = [
      cartDrawer,
      checkoutModal,
      receiptModal
    ].some((element) => element?.classList.contains("open"));

    document.body.classList.toggle("no-scroll", open);
  }

  function openCart() {
    previousCartFocus = document.activeElement;

    renderCart();
    cartDrawer?.classList.add("open");
    cartDrawer?.setAttribute("aria-hidden", "false");

    if (cartBackdrop) cartBackdrop.hidden = false;

    syncBodyScroll();
    $("#closeCart")?.focus();
  }

  function closeCart(restoreFocus = true) {
    cartDrawer?.classList.remove("open");
    cartDrawer?.setAttribute("aria-hidden", "true");

    if (cartBackdrop) cartBackdrop.hidden = true;

    syncBodyScroll();

    if (restoreFocus) previousCartFocus?.focus();
  }

  function closeCheckout() {
    checkoutModal?.classList.remove("open");
    checkoutModal?.setAttribute("aria-hidden", "true");

    if (checkoutBackdrop) checkoutBackdrop.hidden = true;

    syncBodyScroll();
    previousCheckoutFocus?.focus();
  }

  function closeReceipt() {
    receiptModal?.classList.remove("open");
    receiptModal?.setAttribute("aria-hidden", "true");

    if (receiptBackdrop) receiptBackdrop.hidden = true;

    syncBodyScroll();
  }

  $("#cartToggle")?.addEventListener("click", openCart);
  $("#closeCart")?.addEventListener("click", () => closeCart());
  cartBackdrop?.addEventListener("click", () => closeCart());

  $("#closeCheckout")?.addEventListener("click", closeCheckout);
  checkoutBackdrop?.addEventListener("click", closeCheckout);

  $("#closeReceipt")?.addEventListener("click", closeReceipt);
  receiptBackdrop?.addEventListener("click", closeReceipt);

  $("#checkoutForm")?.addEventListener("submit", (event) => {
    event.preventDefault();

    if ($("#paymentStatus")) {
      $("#paymentStatus").textContent = t("paymentUnavailable");
    }
  });

  /* ==========================================================
     LANGUAGE
     ========================================================== */

  function applyLanguage() {
    document.documentElement.lang = language;

    $$("[data-i18n]").forEach((element) => {
      const key = element.dataset.i18n;
      const value = t(key);

      if (key === "heroTitle") {
        element.innerHTML = value;
      } else {
        element.textContent = value;
      }
    });

    if ($("#currentLanguage")) {
      $("#currentLanguage").textContent = language.toUpperCase();
    }

    const toggle = $("#languageToggle");

    if (toggle) {
      toggle.setAttribute(
        "aria-label",
        language === "sw"
          ? "Switch to English"
          : "Badilisha kwenda Kiswahili"
      );
    }

    updateThemeButton();
    updateProductDisplay();
    renderCart();
    updateCheckoutSummary();
    renderBlog();
  }

  $("#languageToggle")?.addEventListener("click", () => {
    language = language === "sw" ? "en" : "sw";

    storage.set("mbogamboga-language", language);
    applyLanguage();
  });

  /* ==========================================================
     NAVIGATION
     ========================================================== */

  const header = $("#siteHeader");
  const menu = $("#mainNav");
  const menuToggle = $("#menuToggle");

  function closeMobileMenu() {
    menu?.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");

    const icon = menuToggle?.querySelector("i");
    if (icon) icon.className = "fa-solid fa-bars";
  }

  menuToggle?.addEventListener("click", () => {
    const isOpen = menu?.classList.toggle("open");

    menuToggle.setAttribute(
      "aria-expanded",
      String(Boolean(isOpen))
    );

    const icon = menuToggle.querySelector("i");

    if (icon) {
      icon.className = isOpen
        ? "fa-solid fa-xmark"
        : "fa-solid fa-bars";
    }
  });

  $$(".nav-link").forEach((link) => {
    link.addEventListener("click", closeMobileMenu);
  });

  function updateNavigation() {
    header?.classList.toggle("scrolled", window.scrollY > 40);

    let activeId = "home";

    $$("main section[id]").forEach((section) => {
      if (section.getBoundingClientRect().top <= 150) {
        activeId = section.id;
      }
    });

    $$(".nav-link").forEach((link) => {
      const active = link.getAttribute("href") === `#${activeId}`;

      link.classList.toggle("active", active);

      if (active) {
        link.setAttribute("aria-current", "location");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  window.addEventListener("scroll", updateNavigation, {
    passive: true
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 900) closeMobileMenu();
    updateNavigation();
  });

  updateNavigation();

  /* ==========================================================
     SCROLL REVEAL
     ========================================================== */

  const revealElements = $$(
    ".section-heading, .about-grid, .blog-heading, " +
    ".service-card, .product-card, .contact-info, " +
    ".contact-form-wrapper"
  );

  if (
    "IntersectionObserver" in window &&
    !reducedMotion.matches
  ) {
    const observer = new IntersectionObserver(
      (entries, instance) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("visible");
          instance.unobserve(entry.target);
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px 30px 0px"
      }
    );

    revealElements.forEach((element) => {
      element.classList.add("reveal");
      observer.observe(element);
    });
  }

  /* ==========================================================
     SERVICE INQUIRIES
     ========================================================== */

  $$(".service-inquiry").forEach((button) => {
    button.addEventListener("click", () => {
      const select = $("#contactService");

      if (select) {
        select.value = button.dataset.service;
      }

      $("#contact")?.scrollIntoView({
        behavior: reducedMotion.matches ? "auto" : "smooth"
      });

      window.setTimeout(() => {
        select?.focus({ preventScroll: true });
      }, reducedMotion.matches ? 0 : 450);
    });
  });

  /* ==========================================================
     CONTACT FORM
     ========================================================== */

  $("#contactForm")?.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!event.currentTarget.reportValidity()) return;

    if ($("#contactFormStatus")) {
      $("#contactFormStatus").textContent =
        t("contactUnavailable");
    }
  });

  /* ==========================================================
     BLOG CAROUSEL
     ========================================================== */

  const blogCarousel = $("#blogCarousel");
  const blogTrack = $("#blogTrack");
  const blogPagination = $("#blogPagination");
  const blogPrevious = $("#blogPrevious");
  const blogNext = $("#blogNext");
  const blogPlayToggle = $("#blogPlayToggle");
  const blogPlayText = $("#blogPlayText");

  const blogArticles = (
  Array.isArray(window.MBOGAMBOGA_BLOGS)
    ? window.MBOGAMBOGA_BLOGS
    : []
)
  .filter((article) => {
    return (
      article &&
      typeof article.id === "string" &&
      typeof article.title === "string" &&
      typeof article.description === "string" &&
      typeof article.image === "string" &&
      typeof article.date === "string" &&
      Array.isArray(article.content) &&
      ["sw", "en"].includes(article.language) &&
      /^\d{4}-\d{2}-\d{2}$/.test(article.date) &&
      !Number.isNaN(
        new Date(`${article.date}T00:00:00`).getTime()
      )
    );
  })
  .sort((a, b) => b.date.localeCompare(a.date));

  let blogIndex = 0;
  let blogTimer = null;
  let blogPlaying = !reducedMotion.matches;
  let blogHovering = false;
  let blogFocusInside = false;
  let blogVisible = true;

  const blogLabels = () =>
    language === "sw"
      ? {
          new: "MPYA",
          read: "Soma Habari",
          pause: "Sitisha mwendo",
          play: "Endelea",
          empty: "Hakuna habari zilizochapishwa bado.",
          article: "Habari"
        }
      : {
          new: "NEW",
          read: "Read Article",
          pause: "Pause movement",
          play: "Resume",
          empty: "No articles have been published yet.",
          article: "Article"
        };

  const blogText = (value) => {
  return typeof value === "string" ? value : "";
};

  const blogCardsPerView = () => {
    if (window.innerWidth <= 650) return 1;
    if (window.innerWidth <= 950) return 2;
    return 3;
  };

  const blogMaxIndex = () =>
    Math.max(0, blogArticles.length - blogCardsPerView());

  const formatBlogDate = (value) =>
    new Intl.DateTimeFormat(
      language === "sw" ? "sw-TZ" : "en-GB",
      {
        day: "numeric",
        month: "long",
        year: "numeric"
      }
    ).format(new Date(`${value}T00:00:00`));

  function isNewBlog(dateString) {
    const published = new Date(`${dateString}T00:00:00`);
    const today = new Date();

    published.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);

    const ageDays = (today - published) / 86400000;

    return ageDays >= 0 && ageDays < 7;
  }

  function safeBlogLink(value) {
    try {
      const url = new URL(value, window.location.href);

      if (["https:", "http:"].includes(url.protocol)) {
        return url.href;
      }
    } catch {
      // Ignore invalid links.
    }

    return null;
  }

  
function createBlogCard(article) {
  const labels = blogLabels();

  const card = document.createElement("article");
  card.className = "blog-card";
  card.lang = article.language;

  const imageWrapper = document.createElement("div");
  imageWrapper.className = "blog-card-image";

  const image = document.createElement("img");
  image.src = article.image;
  image.alt = article.title;
  image.loading = "lazy";

  imageWrapper.appendChild(image);

  if (isNewBlog(article.date)) {
    const badge = document.createElement("span");
    badge.className = "blog-new-badge";
    badge.textContent = labels.new;
    imageWrapper.appendChild(badge);
  }

  const content = document.createElement("div");
  content.className = "blog-card-content";

  const date = document.createElement("time");
  date.className = "blog-date";
  date.dateTime = article.date;

  const calendar = document.createElement("i");
  calendar.className = "fa-regular fa-calendar";

  const dateText = document.createElement("span");

  dateText.textContent = new Intl.DateTimeFormat(
    article.language === "sw" ? "sw-TZ" : "en-GB",
    {
      day: "numeric",
      month: "long",
      year: "numeric"
    }
  ).format(new Date(`${article.date}T00:00:00`));

  date.append(calendar, dateText);

  const heading = document.createElement("h3");
  heading.textContent = article.title;

  const description = document.createElement("p");
  description.className = "blog-card-description";
  description.textContent = article.description;

  const link = document.createElement("a");
  link.className = "blog-read-more";

  // Internal article link — no external website.
  link.href =
    `article.html?id=${encodeURIComponent(article.id)}`;

  // The button follows the article's original language.
  const linkText = document.createElement("span");
  linkText.textContent =
    article.language === "sw"
      ? "Soma Habari"
      : "Read Article";

  const arrow = document.createElement("i");
  arrow.className = "fa-solid fa-arrow-right";

  link.append(linkText, arrow);

  content.append(date, heading, description, link);
  card.append(imageWrapper, content);

  return card;
}


  function updateBlogControls() {
    if (!blogPagination) return;

    blogPagination.replaceChildren();

    const max = blogMaxIndex();

    for (let index = 0; index <= max; index++) {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.className = "blog-dot";

      if (index === blogIndex) {
        dot.classList.add("active");
        dot.setAttribute("aria-current", "true");
      }

      dot.setAttribute(
        "aria-label",
        `${blogLabels().article} ${index + 1}`
      );

      dot.addEventListener("click", () => {
        goToBlog(index);
        startBlogTimer();
      });

      blogPagination.appendChild(dot);
    }

    const canMove = max > 0;

    if (blogPrevious) blogPrevious.disabled = !canMove;
    if (blogNext) blogNext.disabled = !canMove;
    if (blogPlayToggle) blogPlayToggle.hidden = !canMove;

    if (blogPlayText) {
      blogPlayText.textContent = blogPlaying
        ? blogLabels().pause
        : blogLabels().play;
    }

    const icon = blogPlayToggle?.querySelector("i");

    if (icon) {
      icon.className = blogPlaying
        ? "fa-solid fa-pause"
        : "fa-solid fa-play";
    }
  }

  function goToBlog(index) {
    if (!blogCarousel || !blogTrack) return;

    blogIndex = Math.max(
      0,
      Math.min(index, blogMaxIndex())
    );

    const cards = blogTrack.querySelectorAll(".blog-card");
    const target = cards[blogIndex];
    const first = cards[0];

    if (target && first) {
      const left = target.offsetLeft - first.offsetLeft;

      blogCarousel.scrollTo({
        left,
        behavior: reducedMotion.matches ? "auto" : "smooth"
      });
    }

    updateBlogControls();
  }

  function stopBlogTimer() {
    if (blogTimer !== null) {
      window.clearInterval(blogTimer);
      blogTimer = null;
    }
  }

  function startBlogTimer() {
    stopBlogTimer();

    if (
      !blogPlaying ||
      reducedMotion.matches ||
      blogHovering ||
      blogFocusInside ||
      !blogVisible ||
      document.hidden ||
      blogMaxIndex() === 0
    ) {
      return;
    }

    blogTimer = window.setInterval(() => {
      const next =
        blogIndex >= blogMaxIndex()
          ? 0
          : blogIndex + 1;

      goToBlog(next);
    }, 4500);
  }

  function renderBlog() {
    if (!blogTrack) return;

    blogTrack.replaceChildren();

    if (blogArticles.length === 0) {
      const empty = document.createElement("p");
      empty.className = "blog-empty";
      empty.textContent = blogLabels().empty;
      blogTrack.appendChild(empty);
    } else {
      blogArticles.forEach((article) => {
        blogTrack.appendChild(createBlogCard(article));
      });
    }

    blogIndex = Math.min(blogIndex, blogMaxIndex());

    updateBlogControls();
    goToBlog(blogIndex);
    startBlogTimer();
  }

  blogPrevious?.addEventListener("click", () => {
    goToBlog(
      blogIndex === 0
        ? blogMaxIndex()
        : blogIndex - 1
    );
    startBlogTimer();
  });

  blogNext?.addEventListener("click", () => {
    goToBlog(
      blogIndex >= blogMaxIndex()
        ? 0
        : blogIndex + 1
    );
    startBlogTimer();
  });

  blogPlayToggle?.addEventListener("click", () => {
    blogPlaying = !blogPlaying;
    updateBlogControls();
    startBlogTimer();
  });

  blogCarousel?.addEventListener("mouseenter", () => {
    blogHovering = true;
    stopBlogTimer();
  });

  blogCarousel?.addEventListener("mouseleave", () => {
    blogHovering = false;
    startBlogTimer();
  });

  blogCarousel?.addEventListener("focusin", () => {
    blogFocusInside = true;
    stopBlogTimer();
  });

  blogCarousel?.addEventListener("focusout", (event) => {
    if (!blogCarousel.contains(event.relatedTarget)) {
      blogFocusInside = false;
      startBlogTimer();
    }
  });

  blogCarousel?.addEventListener(
    "scroll",
    () => {
      const cards = [...blogTrack.querySelectorAll(".blog-card")];

      if (!cards.length) return;

      const firstLeft = cards[0].offsetLeft;
      const scrollLeft = blogCarousel.scrollLeft;

      let closest = 0;
      let smallestDistance = Infinity;

      cards.forEach((card, index) => {
        if (index > blogMaxIndex()) return;

        const distance = Math.abs(
          card.offsetLeft - firstLeft - scrollLeft
        );

        if (distance < smallestDistance) {
          smallestDistance = distance;
          closest = index;
        }
      });

      if (closest !== blogIndex) {
        blogIndex = closest;
        updateBlogControls();
      }
    },
    { passive: true }
  );

  window.addEventListener("resize", () => {
    goToBlog(Math.min(blogIndex, blogMaxIndex()));
    startBlogTimer();
  });

  document.addEventListener("visibilitychange", startBlogTimer);

  if ("IntersectionObserver" in window && blogCarousel) {
    const observer = new IntersectionObserver(
      (entries) => {
        blogVisible = entries[0].isIntersecting;
        startBlogTimer();
      },
      { threshold: 0.1 }
    );

    observer.observe(blogCarousel);
  }

  if (reducedMotion.addEventListener) {
    reducedMotion.addEventListener("change", (event) => {
      if (event.matches) blogPlaying = false;

      updateBlogControls();
      startBlogTimer();
    });
  }

  /* ==========================================================
     KEYBOARD ACCESSIBILITY
     ========================================================== */

  function getOpenDialog() {
    if (receiptModal?.classList.contains("open")) {
      return receiptModal;
    }

    if (checkoutModal?.classList.contains("open")) {
      return checkoutModal;
    }

    if (cartDrawer?.classList.contains("open")) {
      return cartDrawer;
    }

    return null;
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      if (receiptModal?.classList.contains("open")) {
        closeReceipt();
      } else if (checkoutModal?.classList.contains("open")) {
        closeCheckout();
      } else if (cartDrawer?.classList.contains("open")) {
        closeCart();
      } else {
        closeMobileMenu();
      }
    }

    if (event.key !== "Tab") return;

    const dialog = getOpenDialog();
    if (!dialog) return;

    const focusable = [
      ...dialog.querySelectorAll(
        'button:not([disabled]), ' +
        'a[href], input:not([disabled]), ' +
        'select:not([disabled]), ' +
        'textarea:not([disabled]), ' +
        '[tabindex]:not([tabindex="-1"])'
      )
    ].filter((element) => element.getClientRects().length > 0);

    if (!focusable.length) {
      event.preventDefault();
      dialog.focus();
      return;
    }

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (
      event.shiftKey &&
      document.activeElement === first
    ) {
      event.preventDefault();
      last.focus();
    } else if (
      !event.shiftKey &&
      document.activeElement === last
    ) {
      event.preventDefault();
      first.focus();
    }
  });

  /* ==========================================================
     INITIALIZATION
     ========================================================== */

  const year = $("#currentYear");

  if (year) {
    year.textContent = String(new Date().getFullYear());
  }

  applyTheme();
  applyLanguage();

  console.info("MBOGAMBOGA frontend initialized.");
});
