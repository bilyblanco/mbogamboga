
"use strict";

/* ==========================================================
   MBOGAMBOGA — MAIN JAVASCRIPT
   Version: 1.0
   Language: Kiswahili / English
   Themes: Auto / Light / Dark
   ========================================================== */

document.addEventListener("DOMContentLoaded", () => {

  /* ========================================================
     1. HELPERS
  ======================================================== */

  const $ = (selector) => document.querySelector(selector);

  const $$ = (selector) =>
    Array.from(document.querySelectorAll(selector));

  const formatMoney = (amount) => {
    return "TZS " + new Intl.NumberFormat("en-TZ", {
      maximumFractionDigits: 0
    }).format(amount);
  };

  const safeStorage = {
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
        // Storage may be unavailable.
      }
    }
  };

  const announce = (element, message) => {
    if (element) element.textContent = message;
  };

  /* ========================================================
     2. TRANSLATIONS
  ======================================================== */

  const translations = {
    sw: {
      navHome: "Mwanzo",
      navAbout: "Kuhusu",
      navTeam: "Wataalamu",
      navServices: "Huduma",
      navShop: "Sokoni",
      navGallery: "Picha",
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
        "Bwanashamba ni mtaalamu wa kilimo anayejikita katika kuwasaidia wakulima kuboresha uzalishaji, matumizi ya teknolojia za kisasa na usimamizi bora wa mashamba.",
      educationTitle: "Elimu",
      educationDescription:
        "Historia ya elimu na vyeti itawekwa hapa.",
      experienceTitle: "Uzoefu",
      experienceDescription:
        "Uzoefu wa kazi na miradi ya kilimo.",
      specializationTitle: "Utaalamu",
      specializationDescription:
        "Ushauri wa kilimo na usimamizi wa mazao.",
      contactExpert: "Wasiliana na Mtaalamu",

      teamTag: "Timu Yetu",
      teamTitle: "Wataalamu Wetu",
      teamDescription:
        "Kutana na wataalamu wanaoshirikiana kutoa huduma bora za kilimo.",
      teamRole1: "Mtaalamu wa Mazao",
      teamRole2: "Mtaalamu wa Udongo",
      teamRole3: "Mtaalamu wa Wadudu",
      teamBio1:
        "Anajishughulisha na uzalishaji na utunzaji wa mazao.",
      teamBio2:
        "Anatoa ushauri kuhusu rutuba na afya ya udongo.",
      teamBio3:
        "Anasaidia wakulima kudhibiti wadudu na magonjwa.",

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
        "Nunua mazao bora kutoka shambani kwa bei nafuu na huduma ya usafirishaji.",
      availableNow: "Yanapatikana Sasa",
      cucumberName: "Matango Mabichi",
      cucumberDescription:
        "Matango safi na bora kutoka shambani. Yanapatikana kwa oda za rejareja na jumla.",
      perKg: "kwa kilo",
      taxIncluded: "Bei inajumuisha kodi zinazotumika.",
      quantityLabel: "Kiasi (kg)",
      addToCart: "Weka Kwenye Kikapu",
      freeDeliveryPromo:
        "Delivery bure kwa oda zinazozidi kilo 1,000!",

      galleryTag: "Kazi Zetu",
      galleryTitle: "Maktaba ya Picha",
      galleryDescription:
        "Tazama picha za mashamba, mafunzo, miradi na shughuli mbalimbali za kilimo.",

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
      deliveryCalculatedCheckout:
        "Delivery itahesabiwa wakati wa checkout.",
      proceedCheckout: "Endelea na Malipo",

      checkoutTitle: "Kamilisha Oda Yako",
      regionLabel: "Mkoa",
      selectRegion: "Chagua Mkoa",
      districtLabel: "Wilaya",
      selectDistrict: "Chagua Wilaya",
      addressLabel: "Anwani ya Kufikishia",
      orderNotesLabel: "Maelekezo ya Ziada (Si lazima)",
      orderSummary: "Muhtasari wa Oda",
      deliveryFee: "Gharama ya Delivery",
      grandTotal: "Jumla ya Malipo",
      paymentMethod: "Chagua Njia ya Malipo",
      payNow: "Lipa Sasa",
      securePaymentNote:
        "Malipo salama kupitia payment gateway.",

      receiptTitle: "Risiti ya Malipo",
      downloadReceipt: "Pakua Risiti (PDF)",

      footerDescription:
        "Tunajenga kilimo bora kupitia utaalamu, teknolojia na ushirikiano na wakulima.",
      quickLinks: "Viungo Muhimu",
      footerServices: "Huduma Zetu",
      rightsReserved: "Haki zote zimehifadhiwa.",

      pricePending: "Bei itawekwa",
      cartAdded: "Bidhaa imeongezwa kwenye kikapu.",
      removeItem: "Ondoa",
      freeDelivery: "BURE",
      deliveryPending: "Inasubiri eneo",
      deliveryQuote:
        "Gharama ya delivery itathibitishwa kulingana na eneo lako.",
      deliveryFree:
        "Hongera! Oda yako inapata delivery bure.",
      paymentUnavailable:
        "Malipo ya mtandaoni bado hayajaunganishwa. Hakuna fedha zilizokatwa.",
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
      navTeam: "Experts",
      navServices: "Services",
      navShop: "Shop",
      navGallery: "Gallery",
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
        "Bwanashamba is an agricultural specialist dedicated to helping farmers improve production, adopt modern technologies and manage farms effectively.",
      educationTitle: "Education",
      educationDescription:
        "Education history and qualifications will appear here.",
      experienceTitle: "Experience",
      experienceDescription:
        "Professional experience and agricultural projects.",
      specializationTitle: "Specialization",
      specializationDescription:
        "Agricultural consulting and crop management.",
      contactExpert: "Contact the Expert",

      teamTag: "Our Team",
      teamTitle: "Meet Our Experts",
      teamDescription:
        "Meet the professionals working together to deliver quality agricultural services.",
      teamRole1: "Crop Specialist",
      teamRole2: "Soil Specialist",
      teamRole3: "Pest Management Specialist",
      teamBio1:
        "Specializes in crop production and management.",
      teamBio2:
        "Provides guidance on soil fertility and health.",
      teamBio3:
        "Helps farmers manage pests and crop diseases.",

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
        "Buy quality farm produce with convenient delivery services.",
      availableNow: "Available Now",
      cucumberName: "Fresh Cucumbers",
      cucumberDescription:
        "Fresh, quality cucumbers directly from the farm. Available for retail and wholesale orders.",
      perKg: "per kilogram",
      taxIncluded: "Price includes applicable taxes.",
      quantityLabel: "Quantity (kg)",
      addToCart: "Add to Basket",
      freeDeliveryPromo:
        "Free delivery on orders exceeding 1,000 kg!",

      galleryTag: "Our Work",
      galleryTitle: "Photo Gallery",
      galleryDescription:
        "Explore photos of farms, training sessions, projects and agricultural activities.",

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
      subtotal: "Products Subtotal",
      deliveryCalculatedCheckout:
        "Delivery will be calculated during checkout.",
      proceedCheckout: "Proceed to Checkout",

      checkoutTitle: "Complete Your Order",
      regionLabel: "Region",
      selectRegion: "Select Region",
      districtLabel: "District",
      selectDistrict: "Select District",
      addressLabel: "Delivery Address",
      orderNotesLabel: "Additional Instructions (Optional)",
      orderSummary: "Order Summary",
      deliveryFee: "Delivery Fee",
      grandTotal: "Grand Total",
      paymentMethod: "Select Payment Method",
      payNow: "Pay Now",
      securePaymentNote:
        "Secure payments through a payment gateway.",

      receiptTitle: "Payment Receipt",
      downloadReceipt: "Download Receipt (PDF)",

      footerDescription:
        "Building better agriculture through expertise, technology and collaboration with farmers.",
      quickLinks: "Quick Links",
      footerServices: "Our Services",
      rightsReserved: "All rights reserved.",

      pricePending: "Price pending",
      cartAdded: "Product added to basket.",
      removeItem: "Remove",
      freeDelivery: "FREE",
      deliveryPending: "Awaiting location",
      deliveryQuote:
        "Delivery charges will be confirmed based on your location.",
      deliveryFree:
        "Congratulations! Your order qualifies for free delivery.",
      paymentUnavailable:
        "Online payments are not yet connected. No money has been charged.",
      contactUnavailable:
        "The contact form is not yet connected to a messaging service.",
      productUnavailable:
        "The product price has not yet been confirmed.",
      autoTheme: "System theme",
      lightTheme: "Light theme",
      darkTheme: "Dark theme"
    }
  };

  let currentLanguage =
    safeStorage.get("mbogamboga-language") === "en"
      ? "en"
      : "sw";

  const t = (key) =>
    translations[currentLanguage][key] || key;

  const applyLanguage = () => {
    document.documentElement.lang = currentLanguage;

    $$("[data-i18n]").forEach((element) => {
      const key = element.dataset.i18n;
      const value = t(key);

      // Only the trusted hero title needs a line break.
      if (key === "heroTitle") {
        element.innerHTML = value;
      } else {
        element.textContent = value;
      }
    });

    const languageLabel = $("#currentLanguage");

    if (languageLabel) {
      languageLabel.textContent =
        currentLanguage.toUpperCase();
    }

    const languageToggle = $("#languageToggle");

    if (languageToggle) {
      languageToggle.setAttribute(
        "aria-label",
        currentLanguage === "sw"
          ? "Switch to English"
          : "Badilisha kwenda Kiswahili"
      );
    }

    updateProductDisplay();
    renderCart();
    updateCheckoutSummary();
    updateThemeButton();
  };

  $("#languageToggle")?.addEventListener("click", () => {
    currentLanguage =
      currentLanguage === "sw" ? "en" : "sw";

    safeStorage.set(
      "mbogamboga-language",
      currentLanguage
    );

    applyLanguage();
  });

  /* ========================================================
     3. AUTOMATIC / MANUAL THEME
  ======================================================== */

  const systemTheme = window.matchMedia(
    "(prefers-color-scheme: dark)"
  );

  const validThemes = ["auto", "light", "dark"];

  let themePreference =
    safeStorage.get("mbogamboga-theme") || "auto";

  if (!validThemes.includes(themePreference)) {
    themePreference = "auto";
  }

  const resolvedTheme = () => {
    if (themePreference === "auto") {
      return systemTheme.matches ? "dark" : "light";
    }

    return themePreference;
  };

  const updateThemeButton = () => {
    const button = $("#themeToggle");
    const icon = $("#themeIcon");

    if (!button || !icon) return;

    const theme = resolvedTheme();

    icon.className =
      theme === "dark"
        ? "fa-solid fa-sun"
        : "fa-solid fa-moon";

    const labels = {
      auto: t("autoTheme"),
      light: t("lightTheme"),
      dark: t("darkTheme")
    };

    button.title =
      labels[themePreference] +
      " — " +
      (currentLanguage === "sw"
        ? "Bonyeza kubadilisha"
        : "Click to change");

    button.setAttribute(
      "aria-label",
      button.title
    );

    button.dataset.mode = themePreference;
  };

  const applyTheme = () => {
    document.documentElement.dataset.theme =
      resolvedTheme();

    updateThemeButton();
  };

  // Clicking cycles through Auto -> Light -> Dark.
  $("#themeToggle")?.addEventListener("click", () => {
    const index = validThemes.indexOf(themePreference);

    themePreference =
      validThemes[(index + 1) % validThemes.length];

    safeStorage.set(
      "mbogamboga-theme",
      themePreference
    );

    applyTheme();
  });

  const onSystemThemeChange = () => {
    if (themePreference === "auto") {
      applyTheme();
    }
  };

  if (systemTheme.addEventListener) {
    systemTheme.addEventListener(
      "change",
      onSystemThemeChange
    );
  } else if (systemTheme.addListener) {
    systemTheme.addListener(onSystemThemeChange);
  }

  applyTheme();

  /* ========================================================
     4. NAVIGATION
  ======================================================== */

  const header = $("#siteHeader");
  const menu = $("#mainNav");
  const menuToggle = $("#menuToggle");

  const closeMobileMenu = () => {
    menu?.classList.remove("open");

    menuToggle?.setAttribute(
      "aria-expanded",
      "false"
    );

    const icon = menuToggle?.querySelector("i");

    if (icon) {
      icon.className = "fa-solid fa-bars";
    }
  };

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

  const navLinks = $$(".nav-link");

  const updateNavigation = () => {
    header?.classList.toggle(
      "scrolled",
      window.scrollY > 40
    );

    const sections = $$("main section[id]");

    let activeId = "home";

    sections.forEach((section) => {
      if (
        section.getBoundingClientRect().top <= 150
      ) {
        activeId = section.id;
      }
    });

    navLinks.forEach((link) => {
      const active =
        link.getAttribute("href") === "#" + activeId;

      link.classList.toggle("active", active);

      if (active) {
        link.setAttribute("aria-current", "location");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  };

  window.addEventListener(
    "scroll",
    updateNavigation,
    { passive: true }
  );

  window.addEventListener("resize", () => {
    if (window.innerWidth > 900) {
      closeMobileMenu();
    }
  });

  updateNavigation();

  /* ========================================================
     5. SCROLL REVEAL
  ======================================================== */

  const revealElements = $$(
    ".section-heading, .about-grid, .team-card, " +
    ".service-card, .product-card, .gallery-item, " +
    ".contact-info, .contact-form-wrapper"
  );

  if (
    "IntersectionObserver" in window &&
    !window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches
  ) {
    revealElements.forEach((element) => {
      element.classList.add("reveal");
    });

    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px 30px 0px"
      }
    );

    revealElements.forEach((element) => {
      revealObserver.observe(element);
    });
  }

  /* ========================================================
     6. GALLERY LIGHTBOX
  ======================================================== */

  const lightbox = $("#galleryLightbox");
  const lightboxImage = $("#lightboxImage");

  let previousLightboxFocus = null;

  const openLightbox = (src, alt) => {
    if (!lightbox || !lightboxImage) return;

    previousLightboxFocus = document.activeElement;

    lightboxImage.src = src;
    lightboxImage.alt = alt || "Gallery Image";

    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");

    syncBodyScroll();

    $("#closeLightbox")?.focus();
  };

  const closeLightbox = () => {
    if (!lightbox) return;

    lightbox.classList.remove("open");
    lightbox.setAttribute("aria-hidden", "true");

    lightboxImage.removeAttribute("src");

    syncBodyScroll();

    previousLightboxFocus?.focus();
  };

  $$(".gallery-item").forEach((button) => {
    button.addEventListener("click", () => {
      const image = button.querySelector("img");

      openLightbox(
        button.dataset.image || image?.src,
        image?.alt
      );
    });
  });

  $("#closeLightbox")?.addEventListener(
    "click",
    closeLightbox
  );

  lightbox?.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });

  /* ========================================================
     7. SERVICE INQUIRIES
  ======================================================== */

  $$(".service-inquiry").forEach((button) => {
    button.addEventListener("click", () => {
      const serviceId = button.dataset.service;

      const serviceSelect = $("#contactService");

      if (serviceSelect) {
        serviceSelect.value = serviceId;
      }

      $("#contact")?.scrollIntoView({
        behavior: window.matchMedia(
          "(prefers-reduced-motion: reduce)"
        ).matches ? "auto" : "smooth"
      });

      window.setTimeout(() => {
        serviceSelect?.focus({
          preventScroll: true
        });
      }, 450);
    });
  });

  /* ========================================================
     8. PRODUCT DATA
     Price must come from verified backend data.
  ======================================================== */

  const products = {
    "cucumber-001": {
      id: "cucumber-001",
      nameKey: "cucumberName",
      image: "images/products/matango.jpg",
      unit: "kg",

      // No actual price has been supplied yet.
      price: null,

      available: false
    }
  };

  const updateProductDisplay = () => {
    const product = products["cucumber-001"];

    const priceElement = $("#cucumberPrice");
    const addButton = $(".add-to-cart");

    if (priceElement) {
      priceElement.textContent =
        product.price === null
          ? t("pricePending")
          : formatMoney(product.price);

      priceElement.dataset.priceStatus =
        product.price === null
          ? "pending"
          : "confirmed";
    }

    if (addButton) {
      addButton.disabled =
        !product.available ||
        product.price === null;
    }
  };

  /* ========================================================
     9. QUANTITY CONTROLS
  ======================================================== */

  const quantityInput = $("#productQuantity");

  const getQuantity = () => {
    const value = Number(quantityInput?.value);

    if (!Number.isSafeInteger(value) || value < 1) {
      return 1;
    }

    return Math.min(value, 1000000);
  };

  const setQuantity = (quantity) => {
    if (!quantityInput) return;

    quantityInput.value = String(
      Math.max(1, Math.min(1000000, quantity))
    );
  };

  $("#increaseQuantity")?.addEventListener(
    "click",
    () => setQuantity(getQuantity() + 1)
  );

  $("#decreaseQuantity")?.addEventListener(
    "click",
    () => setQuantity(getQuantity() - 1)
  );

  quantityInput?.addEventListener("change", () => {
    setQuantity(getQuantity());
  });

  /* ========================================================
     10. SHOPPING CART
  ======================================================== */

  const CART_KEY = "mbogamboga-cart";

  const loadCart = () => {
    try {
      const stored = JSON.parse(
        safeStorage.get(CART_KEY) || "[]"
      );

      if (!Array.isArray(stored)) return [];

      return stored.filter((item) => {
        return (
          item &&
          typeof item.id === "string" &&
          Number.isSafeInteger(item.quantity) &&
          item.quantity > 0 &&
          item.quantity <= 1000000 &&
          products[item.id]
        );
      }).map((item) => ({
        id: item.id,
        quantity: item.quantity
      }));
    } catch {
      return [];
    }
  };

  let cart = loadCart();

  const saveCart = () => {
    safeStorage.set(
      CART_KEY,
      JSON.stringify(cart)
    );
  };

  const cartQuantity = () => {
    return cart.reduce(
      (sum, item) => sum + item.quantity,
      0
    );
  };

  const cartSubtotal = () => {
    return cart.reduce((sum, item) => {
      const product = products[item.id];

      if (
        !product ||
        product.price === null ||
        !product.available
      ) {
        return sum;
      }

      return sum + product.price * item.quantity;
    }, 0);
  };

  const cartIsValid = () => {
    return cart.length > 0 && cart.every((item) => {
      const product = products[item.id];

      return (
        product &&
        product.available &&
        Number.isFinite(product.price) &&
        product.price > 0
      );
    });
  };

  const renderCart = () => {
    const cartItems = $("#cartItems");
    const cartCount = $("#cartCount");

    if (cartCount) {
      cartCount.textContent = String(cartQuantity());
    }

    if (!cartItems) return;

    cartItems.replaceChildren();

    if (cart.length === 0) {
      const emptyMessage = document.createElement("p");

      emptyMessage.className = "empty-cart-message";
      emptyMessage.textContent = t("emptyCart");

      cartItems.appendChild(emptyMessage);
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

        const title = document.createElement("h4");
        title.textContent = t(product.nameKey);

        const quantity = document.createElement("p");
        quantity.textContent =
          item.quantity + " " + product.unit;

        const price = document.createElement("p");
        price.textContent =
          product.price === null
            ? t("pricePending")
            : formatMoney(
                product.price * item.quantity
              );

        info.append(title, quantity, price);

        const removeButton =
          document.createElement("button");

        removeButton.type = "button";
        removeButton.className = "remove-cart-item";
        removeButton.dataset.removeId = item.id;
        removeButton.textContent = "×";
        removeButton.setAttribute(
          "aria-label",
          t("removeItem")
        );

        wrapper.append(
          image,
          info,
          removeButton
        );

        cartItems.appendChild(wrapper);
      });
    }

    const subtotalElement = $("#cartSubtotal");

    if (subtotalElement) {
      subtotalElement.textContent =
        formatMoney(cartSubtotal());
    }

    const checkoutButton = $("#checkoutButton");

    if (checkoutButton) {
      checkoutButton.disabled = !cartIsValid();
    }
  };

  const addToCart = (productId, quantity) => {
    const product = products[productId];

    if (
      !product ||
      !product.available ||
      product.price === null
    ) {
      window.alert(t("productUnavailable"));
      return;
    }

    const existingItem = cart.find(
      (item) => item.id === productId
    );

    if (existingItem) {
      existingItem.quantity = Math.min(
        1000000,
        existingItem.quantity + quantity
      );
    } else {
      cart.push({
        id: productId,
        quantity
      });
    }

    saveCart();
    renderCart();
    openCart();
  };

  $$(".add-to-cart").forEach((button) => {
    button.addEventListener("click", () => {
      addToCart(
        button.dataset.productId,
        getQuantity()
      );
    });
  });

  $("#cartItems")?.addEventListener(
    "click",
    (event) => {
      const button = event.target.closest(
        "[data-remove-id]"
      );

      if (!button) return;

      cart = cart.filter(
        (item) =>
          item.id !== button.dataset.removeId
      );

      saveCart();
      renderCart();
      updateCheckoutSummary();
    }
  );

  /* ========================================================
     11. CART DRAWER & MODALS
  ======================================================== */

  const cartDrawer = $("#cartDrawer");
  const cartBackdrop = $("#cartBackdrop");

  const checkoutModal = $("#checkoutModal");
  const checkoutBackdrop = $("#checkoutBackdrop");

  const receiptModal = $("#receiptModal");
  const receiptBackdrop = $("#receiptBackdrop");

  let previousCartFocus = null;
  let previousCheckoutFocus = null;

  function syncBodyScroll() {
    const anyOpen =
      cartDrawer?.classList.contains("open") ||
      checkoutModal?.classList.contains("open") ||
      receiptModal?.classList.contains("open") ||
      lightbox?.classList.contains("open");

    document.body.classList.toggle(
      "no-scroll",
      Boolean(anyOpen)
    );
  }

  const openCart = () => {
    previousCartFocus = document.activeElement;

    renderCart();

    cartDrawer?.classList.add("open");
    cartDrawer?.setAttribute(
      "aria-hidden",
      "false"
    );

    if (cartBackdrop) {
      cartBackdrop.hidden = false;
    }

    syncBodyScroll();
    $("#closeCart")?.focus();
  };

  const closeCart = (restoreFocus = true) => {
    cartDrawer?.classList.remove("open");
    cartDrawer?.setAttribute(
      "aria-hidden",
      "true"
    );

    if (cartBackdrop) {
      cartBackdrop.hidden = true;
    }

    syncBodyScroll();

    if (restoreFocus) {
      previousCartFocus?.focus();
    }
  };

  $("#cartToggle")?.addEventListener(
    "click",
    openCart
  );

  $("#closeCart")?.addEventListener(
    "click",
    () => closeCart()
  );

  cartBackdrop?.addEventListener(
    "click",
    () => closeCart()
  );

  const openCheckout = () => {
    if (!cartIsValid()) return;

    previousCheckoutFocus = document.activeElement;

    closeCart(false);

    checkoutModal?.classList.add("open");
    checkoutModal?.setAttribute(
      "aria-hidden",
      "false"
    );

    if (checkoutBackdrop) {
      checkoutBackdrop.hidden = false;
    }

    updateCheckoutSummary();
    syncBodyScroll();

    $("#closeCheckout")?.focus();
  };

  const closeCheckout = () => {
    checkoutModal?.classList.remove("open");
    checkoutModal?.setAttribute(
      "aria-hidden",
      "true"
    );

    if (checkoutBackdrop) {
      checkoutBackdrop.hidden = true;
    }

    syncBodyScroll();
    previousCheckoutFocus?.focus();
  };

  $("#checkoutButton")?.addEventListener(
    "click",
    openCheckout
  );

  $("#closeCheckout")?.addEventListener(
    "click",
    closeCheckout
  );

  checkoutBackdrop?.addEventListener(
    "click",
    closeCheckout
  );

  const closeReceipt = () => {
    receiptModal?.classList.remove("open");
    receiptModal?.setAttribute(
      "aria-hidden",
      "true"
    );

    if (receiptBackdrop) {
      receiptBackdrop.hidden = true;
    }

    syncBodyScroll();
  };

  $("#closeReceipt")?.addEventListener(
    "click",
    closeReceipt
  );

  receiptBackdrop?.addEventListener(
    "click",
    closeReceipt
  );

  /* ========================================================
     12. DELIVERY REGIONS
     Initial selectable locations only.
     These are NOT delivery prices.
  ======================================================== */

  const regions = [
    "Arusha",
    "Dar es Salaam",
    "Dodoma",
    "Geita",
    "Iringa",
    "Kagera",
    "Katavi",
    "Kigoma",
    "Kilimanjaro",
    "Lindi",
    "Manyara",
    "Mara",
    "Mbeya",
    "Morogoro",
    "Mtwara",
    "Mwanza",
    "Njombe",
    "Pwani",
    "Rukwa",
    "Ruvuma",
    "Shinyanga",
    "Simiyu",
    "Singida",
    "Songwe",
    "Tabora",
    "Tanga",
    "Kaskazini Pemba",
    "Kusini Pemba",
    "Kaskazini Unguja",
    "Kusini Unguja",
    "Mjini Magharibi"
  ];

  // Initial district choices. Additional districts
  // will be provided by the backend/location dataset.
  const districts = {
    "Dar es Salaam": [
      "Ilala",
      "Kinondoni",
      "Temeke",
      "Ubungo",
      "Kigamboni"
    ],
    "Dodoma": [
      "Dodoma",
      "Bahi",
      "Chamwino",
      "Chemba",
      "Kondoa",
      "Kongwa",
      "Mpwapwa"
    ],
    "Arusha": [
      "Arusha",
      "Arumeru",
      "Karatu",
      "Longido",
      "Monduli",
      "Ngorongoro"
    ],
    "Morogoro": [
      "Morogoro",
      "Kilosa",
      "Kilombero",
      "Mvomero",
      "Ulanga",
      "Gairo",
      "Malinyi"
    ],
    "Mwanza": [
      "Ilemela",
      "Nyamagana",
      "Magu",
      "Misungwi",
      "Kwimba",
      "Sengerema",
      "Ukerewe"
    ]
  };

  const regionSelect = $("#deliveryRegion");
  const districtSelect = $("#deliveryDistrict");

  const createOption = (value, label) => {
    const option = document.createElement("option");

    option.value = value;
    option.textContent = label;

    return option;
  };

  if (regionSelect) {
    regions.forEach((region) => {
      regionSelect.appendChild(
        createOption(region, region)
      );
    });
  }

  regionSelect?.addEventListener("change", () => {
    const region = regionSelect.value;

    districtSelect.replaceChildren(
      createOption("", t("selectDistrict"))
    );

    const availableDistricts =
      districts[region] || [];

    if (availableDistricts.length === 0 && region) {
      districtSelect.appendChild(
        createOption(
          "other",
          currentLanguage === "sw"
            ? "Wilaya nyingine (eleza kwenye anwani)"
            : "Other district (specify in address)"
        )
      );
    } else {
      availableDistricts.forEach((district) => {
        districtSelect.appendChild(
          createOption(district, district)
        );
      });
    }

    districtSelect.disabled = !region;

    updateCheckoutSummary();
  });

  districtSelect?.addEventListener(
    "change",
    updateCheckoutSummary
  );

  /* ========================================================
     13. DELIVERY CALCULATION
  ======================================================== */

  const FREE_DELIVERY_THRESHOLD_KG = 1000;

  const deliveryIsFree = () => {
    // This applies to total order weight.
    return cartQuantity() > FREE_DELIVERY_THRESHOLD_KG;
  };

  const updateCheckoutSummary = () => {
    const subtotal = cartSubtotal();

    const subtotalElement = $("#checkoutSubtotal");
    const deliveryElement = $("#checkoutDelivery");
    const totalElement = $("#checkoutTotal");
    const deliveryStatus = $("#deliveryStatus");
    const payButton = $("#payNowButton");

    if (subtotalElement) {
      subtotalElement.textContent =
        formatMoney(subtotal);
    }

    if (deliveryIsFree() && cartIsValid()) {
      if (deliveryElement) {
        deliveryElement.textContent =
          t("freeDelivery");
      }

      announce(
        deliveryStatus,
        t("deliveryFree")
      );

      if (totalElement) {
        totalElement.textContent =
          formatMoney(subtotal);
      }
    } else {
      // Delivery cost must be confirmed by backend.
      if (deliveryElement) {
        deliveryElement.textContent =
          t("deliveryPending");
      }

      announce(
        deliveryStatus,
        t("deliveryQuote")
      );

      if (totalElement) {
        totalElement.textContent =
          formatMoney(subtotal) + " + delivery";
      }
    }

    // Payments stay disabled until backend integration.
    if (payButton) {
      payButton.disabled = true;
      payButton.title = t("paymentUnavailable");
    }
  };

  /* ========================================================
     14. CHECKOUT FORM
  ======================================================== */

  $("#checkoutForm")?.addEventListener(
    "submit",
    (event) => {
      event.preventDefault();

      announce(
        $("#paymentStatus"),
        t("paymentUnavailable")
      );
    }
  );

  /* ========================================================
     15. CONTACT FORM
  ======================================================== */

  $("#contactForm")?.addEventListener(
    "submit",
    (event) => {
      event.preventDefault();

      const form = event.currentTarget;

      if (!form.reportValidity()) return;

      announce(
        $("#contactFormStatus"),
        t("contactUnavailable")
      );
    }
  );

  /* ========================================================
     16. KEYBOARD ACCESSIBILITY
  ======================================================== */

  const getOpenDialog = () => {
    if (lightbox?.classList.contains("open")) {
      return lightbox;
    }

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
  };

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      if (lightbox?.classList.contains("open")) {
        closeLightbox();
      } else if (
        receiptModal?.classList.contains("open")
      ) {
        closeReceipt();
      } else if (
        checkoutModal?.classList.contains("open")
      ) {
        closeCheckout();
      } else if (
        cartDrawer?.classList.contains("open")
      ) {
        closeCart();
      } else {
        closeMobileMenu();
      }
    }

    if (event.key !== "Tab") return;

    const dialog = getOpenDialog();

    if (!dialog) return;

    const focusable = Array.from(
      dialog.querySelectorAll(
        'button:not([disabled]), ' +
        'a[href], input:not([disabled]), ' +
        'select:not([disabled]), ' +
        'textarea:not([disabled]), ' +
        '[tabindex]:not([tabindex="-1"])'
      )
    ).filter((element) => {
      return element.getClientRects().length > 0;
    });

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

  /* ========================================================
     17. FOOTER YEAR
  ======================================================== */

  const yearElement = $("#currentYear");

  if (yearElement) {
    yearElement.textContent =
      new Date().getFullYear();
  }

  /* ========================================================
     18. INITIALIZE
  ======================================================== */

  applyLanguage();
  applyTheme();
  updateProductDisplay();
  renderCart();
  updateCheckoutSummary();

  console.info(
    "MBOGAMBOGA frontend initialized successfully."
  );

});
