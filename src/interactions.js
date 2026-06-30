(function () {
  const setInert = (element, isInert) => {
    if (!element || !("inert" in element)) return;
    element.inert = isInert;
  };

  const closeMenu = () => {
    const menuButton = document.querySelector("[data-menu-button]");
    const nav = document.querySelector("[data-nav]");
    closeServicesMenu();
    if (!menuButton || !nav) return;
    menuButton.setAttribute("aria-expanded", "false");
    nav.classList.remove("is-open");
    document.body.classList.remove("menu-open");
  };

  const setServicesMenuState = (isOpen) => {
    const servicesTrigger = document.querySelector("[data-services-trigger]");
    const servicesHost = document.querySelector(".nav__service");
    const servicesMenu = document.querySelector("[data-services-menu]");

    servicesHost?.classList.toggle("is-open", isOpen);
    servicesTrigger?.setAttribute("aria-expanded", String(isOpen));
    servicesMenu?.setAttribute("aria-hidden", String(!isOpen));
    setInert(servicesMenu, !isOpen);
  };

  const closeServicesMenu = () => {
    setServicesMenuState(false);
  };

  const closeEmailPopover = () => {
    const emailPopover = document.querySelector("[data-email-popover]");
    if (!emailPopover) return;
    emailPopover.classList.remove("is-open");
    setTimeout(() => {
      if (!emailPopover.classList.contains("is-open")) {
        emailPopover.hidden = true;
      }
    }, 180);
  };

  const openEmailPopover = (trigger) => {
    const emailPopover = document.querySelector("[data-email-popover]");
    if (!emailPopover) return;

    const rect = trigger.getBoundingClientRect();
    const popoverWidth = Math.min(340, window.innerWidth - 28);
    const left = Math.min(
      Math.max(14, rect.left + rect.width / 2 - popoverWidth / 2),
      window.innerWidth - popoverWidth - 14
    );
    const top = Math.min(rect.bottom + 10, window.innerHeight - 260);

    emailPopover.style.width = `${popoverWidth}px`;
    emailPopover.style.left = `${left}px`;
    emailPopover.style.top = `${Math.max(14, top)}px`;
    emailPopover.style.transformOrigin = `${rect.left + rect.width / 2 - left}px 0`;
    emailPopover.hidden = false;

    requestAnimationFrame(() => {
      emailPopover.classList.add("is-open");
      emailPopover.querySelector("a")?.focus({ preventScroll: true });
    });
  };

  const toggleContactPanel = () => {
    const panel = document.querySelector("[data-contact-panel]");
    const backdrop = document.querySelector("[data-contact-backdrop]");
    const toggles = document.querySelectorAll("[data-contact-toggle]");
    if (!panel) return;

    const isOpen = !panel.classList.contains("is-open");
    panel.classList.toggle("is-open", isOpen);
    backdrop?.classList.toggle("is-open", isOpen);
    backdrop?.setAttribute("aria-hidden", String(!isOpen));
    panel.setAttribute("aria-hidden", String(!isOpen));
    setInert(panel, !isOpen);
    toggles.forEach((toggle) => toggle.setAttribute("aria-expanded", String(isOpen)));
  };

  const initHeroVideo = () => {
    const video = document.querySelector("[data-hero-video]");
    const toggle = document.querySelector("[data-hero-audio-toggle]");
    if (!video) return;

    const start = Number(video.dataset.heroVideoStart || 33);
    const end = Number(video.dataset.heroVideoEnd || 45);
    let isSeeking = false;

    const seekToStart = () => {
      if (!Number.isFinite(video.duration) || video.duration <= start) return;
      isSeeking = true;
      video.currentTime = start;
      isSeeking = false;
    };

    const playFromSegment = () => {
      if (video.currentTime < start || video.currentTime >= end) {
        seekToStart();
      }
      video.play?.().catch(() => {});
    };

    video.addEventListener("loadedmetadata", playFromSegment, { once: true });
    video.addEventListener("timeupdate", () => {
      if (isSeeking || video.currentTime < end) return;
      seekToStart();
      video.play?.().catch(() => {});
    });
    video.addEventListener("ended", playFromSegment);

    toggle?.addEventListener("click", () => {
      const shouldUnmute = video.muted;
      video.muted = !shouldUnmute;
      toggle.classList.toggle("is-muted", video.muted);
      toggle.setAttribute("aria-pressed", String(shouldUnmute));
      toggle.setAttribute(
        "aria-label",
        shouldUnmute ? "Silenciar video" : "Activar audio del video"
      );
      playFromSegment();
    });
  };

  window.CardioInteractions = {
    init() {
      const menuButton = document.querySelector("[data-menu-button]");
      const nav = document.querySelector("[data-nav]");
      const servicesTrigger = document.querySelector("[data-services-trigger]");
      const servicesHost = document.querySelector(".nav__service");
      const contactPanel = document.querySelector("[data-contact-panel]");
      const servicesMenu = document.querySelector("[data-services-menu]");

      setInert(contactPanel, true);
      setInert(servicesMenu, true);
      initHeroVideo();

      menuButton?.addEventListener("click", () => {
        const isOpen = menuButton.getAttribute("aria-expanded") === "true";
        menuButton.setAttribute("aria-expanded", String(!isOpen));
        nav?.classList.toggle("is-open", !isOpen);
        document.body.classList.toggle("menu-open", !isOpen);
      });

      nav?.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
          closeServicesMenu();
          closeMenu();
        });
      });

      servicesTrigger?.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        setServicesMenuState(!servicesHost?.classList.contains("is-open"));
      });

      document.querySelectorAll("[data-contact-toggle]").forEach((toggle) => {
        toggle.addEventListener("click", () => {
          closeMenu();
          toggleContactPanel();
        });
      });

      document.querySelector("[data-contact-close]")?.addEventListener("click", toggleContactPanel);

      document.querySelectorAll("[data-email-trigger]").forEach((trigger) => {
        trigger.addEventListener("click", (event) => {
          event.preventDefault();
          openEmailPopover(trigger);
        });
      });

      document.querySelector("[data-email-close]")?.addEventListener("click", closeEmailPopover);

      document.addEventListener("click", (event) => {
        const target = event.target;
        if (!(target instanceof Element)) return;

        if (!target.closest(".nav__service")) {
          closeServicesMenu();
        }

        const emailPopover = document.querySelector("[data-email-popover]");
        if (
          emailPopover &&
          !emailPopover.hidden &&
          !target.closest("[data-email-popover]") &&
          !target.closest("[data-email-trigger]")
        ) {
          closeEmailPopover();
        }
      });

      document.addEventListener("keydown", (event) => {
        if (event.key !== "Escape") return;
        closeMenu();
        closeServicesMenu();
        closeEmailPopover();
      });

      const revealItems = document.querySelectorAll(".reveal");
      if ("IntersectionObserver" in window) {
        const revealObserver = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              entry.target.classList.toggle("is-visible", entry.isIntersecting);
            });
          },
          { threshold: 0.18, rootMargin: "-8% 0px -8% 0px" }
        );

        revealItems.forEach((item, index) => {
          item.style.setProperty("--reveal-delay", `${Math.min(index * 35, 140)}ms`);
          revealObserver.observe(item);
        });
      } else {
        revealItems.forEach((item) => item.classList.add("is-visible"));
      }
    }
  };
})();
