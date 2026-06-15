/* ============================================================
   PAIXÃO LOPES — script.js (Vanilla ES6)
   ============================================================ */
(function () {
  "use strict";
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------------------------------------------------------
     DADOS — Serviços (18, por área)
  --------------------------------------------------------- */
  const SERVICOS = [
    { area: "prev", areaLabel: "Previdenciário", title: "Aposentadoria", desc: "Análise do melhor regime e a entrada certa após tantas reformas." },
    { area: "prev", areaLabel: "Previdenciário", title: "BPC LOAS — Idoso", desc: "Benefício assistencial para idosos em situação de vulnerabilidade." },
    { area: "prev", areaLabel: "Previdenciário", title: "BPC LOAS — Deficiente", desc: "Garantia do benefício para pessoas com deficiência." },
    { area: "prev", areaLabel: "Previdenciário", title: "Salário Maternidade", desc: "Para empregadas, autônomas e seguradas especiais." },
    { area: "prev", areaLabel: "Previdenciário", title: "Pensão por Morte", desc: "Reconhecimento e regularização do direito dos dependentes." },
    { area: "prev", areaLabel: "Previdenciário", title: "Auxílio-Reclusão", desc: "Amparo aos dependentes do segurado de baixa renda." },
    { area: "prev", areaLabel: "Previdenciário", title: "Auxílio-Acidente", desc: "Indenização por sequela que reduza a capacidade de trabalho." },
    { area: "prev", areaLabel: "Previdenciário", title: "Planejamento Previdenciário", desc: "Estratégia para você se aposentar no melhor momento e valor." },
    { area: "prev", areaLabel: "Previdenciário", title: "Cálculos Previdenciários", desc: "Apuração precisa de tempo de contribuição e renda do benefício." },
    { area: "trab", areaLabel: "Trabalhista", title: "Rescisão Indireta", desc: "Quando o empregador descumpre o contrato, agimos por você." },
    { area: "trab", areaLabel: "Trabalhista", title: "Reclamatória Trabalhista", desc: "Cobrança de verbas e direitos não pagos pelo empregador." },
    { area: "trab", areaLabel: "Trabalhista", title: "Acidente de Trabalho", desc: "Defesa dos direitos do trabalhador acidentado e estabilidade." },
    { area: "trab", areaLabel: "Trabalhista", title: "Cálculos Trabalhistas", desc: "Liquidação e conferência de valores em processos trabalhistas." },
    { area: "empr", areaLabel: "Empresarial", title: "Defesa de Reclamada", desc: "Defesa estratégica de empregadores em ações trabalhistas." },
    { area: "empr", areaLabel: "Empresarial", title: "Parecer para Empregadores", desc: "Pareceres técnicos para decisões seguras na sua empresa." },
    { area: "empr", areaLabel: "Empresarial", title: "Consultoria Empresarial", desc: "Acompanhamento preventivo para reduzir passivos trabalhistas." },
    { area: "civel", areaLabel: "Cível & Família", title: "Direito do Consumidor", desc: "Cobranças indevidas, negativações e contratos abusivos." },
    { area: "civel", areaLabel: "Cível & Família", title: "Divórcio", desc: "Condução sensível e segura da dissolução conjugal." }
  ];

  const list = $("#svcList");
  const moreWrap = $("#svcMoreWrap");
  const btnMore = $("#btnSvcMore");
  let mostrarTodos = false;

  function renderServicos(area = "todos") {
    const rows = $$(".svc-row");
    let visiveisCount = 0;
    
    rows.forEach(row => {
      const pertenceAArea = area === "todos" || row.dataset.area === area;
      let show = pertenceAArea;
      
      // Se for a aba "todos" e não deve mostrar todos, exibe apenas os 6 primeiros
      if (area === "todos" && !mostrarTodos) {
        if (visiveisCount >= 6) {
          show = false;
        }
      }
      
      row.style.display = show ? "" : "none";
      if (show) {
        visiveisCount++;
        row.querySelector(".svc-num").textContent = String(visiveisCount).padStart(2, "0");
      }
    });

    // Controla a visibilidade e o rótulo do botão "Ver mais / Ver menos"
    if (area === "todos" && SERVICOS.length > 6) {
      if (moreWrap) {
        moreWrap.style.display = "flex";
        requestAnimationFrame(() => moreWrap.classList.add("in"));
      }
      
      if (btnMore) {
        if (mostrarTodos) {
          btnMore.innerHTML = `
            Ver menos serviços
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 14px; height: 14px; transform: translateY(1px);"><path d="m18 15-6-6-6 6" stroke-linecap="round" stroke-linejoin="round"/></svg>
          `;
        } else {
          btnMore.innerHTML = `
            Ver mais serviços
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 14px; height: 14px; transform: translateY(1px);"><path d="m6 9 6 6 6-6" stroke-linecap="round" stroke-linejoin="round"/></svg>
          `;
        }
      }
    } else {
      if (moreWrap) {
        moreWrap.style.display = "none";
        moreWrap.classList.remove("in");
      }
    }
  }

  if (list) {
    list.innerHTML = SERVICOS.map((s, i) => `
      <article class="svc-row" data-area="${s.area}">
        <div class="svc-num">${String(i + 1).padStart(2, "0")}</div>
        <div class="svc-main">
          <h3>${s.title}</h3>
          <p>${s.desc}</p>
        </div>
        <div class="svc-area">${s.areaLabel}</div>
        <div class="svc-arrow">
          <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M7 17 17 7M9 7h8v8" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </div>
      </article>`).join("");
      
    // Inicializa a exibição de serviços
    renderServicos("todos");
  }

  // Evento do botão "Ver mais / Ver menos"
  if (btnMore) {
    btnMore.addEventListener("click", () => {
      if (!mostrarTodos) {
        // Ação: Mostrar todos
        mostrarTodos = true;
        
        // Revela os itens ocultados com transição suave
        const rows = $$(".svc-row");
        rows.forEach(row => {
          if (row.style.display === "none") {
            row.classList.add("is-hiding");
            row.style.display = "";
            setTimeout(() => {
              row.classList.remove("is-hiding");
            }, 30);
          }
        });
        
        renderServicos("todos");
      } else {
        // Ação: Ocultar excedentes
        mostrarTodos = false;
        
        const rows = $$(".svc-row");
        const area = "todos";
        let visiveisCount = 0;
        
        // Aplica classe is-hiding para animação de encolhimento nas linhas excedentes
        rows.forEach(row => {
          if (row.dataset.area === area || area === "todos") {
            if (visiveisCount >= 6) {
              row.classList.add("is-hiding");
            }
            visiveisCount++;
          }
        });
        
        setTimeout(() => {
          renderServicos("todos");
          
          // Rola de volta para o início da seção de forma suave (considerando a navbar fixa)
          const servicosEl = $("#servicos");
          if (servicosEl) {
            const topOffset = servicosEl.getBoundingClientRect().top + window.scrollY - 100;
            window.scrollTo({ top: topOffset, behavior: "smooth" });
          }
          
          // Remove a classe de animação após ocultar
          rows.forEach(row => row.classList.remove("is-hiding"));
        }, 280);
      }
    });
  }

  // filtro de serviços com transição suave
  const tabs = $$(".svc-tab");
  tabs.forEach(tab => tab.addEventListener("click", () => {
    tabs.forEach(t => {
      t.classList.remove("active");
      t.setAttribute("aria-selected", "false");
    });
    tab.classList.add("active");
    tab.setAttribute("aria-selected", "true");
    const area = tab.dataset.area;
    const rows = $$(".svc-row");
    rows.forEach(row => row.classList.add("is-hiding"));
    setTimeout(() => {
      if (area === "todos") {
        mostrarTodos = false;
      }
      renderServicos(area);
      $$(".svc-row").forEach(row => row.classList.remove("is-hiding"));
    }, 280);
  }));

  /* ---------------------------------------------------------
     DEPOIMENTOS — Carrossel
  --------------------------------------------------------- */
  const depoTrack = $("#depoTrack");
  const depoPrev = $("#depoPrev");
  const depoNext = $("#depoNext");
  const depoDots = $("#depoDots");
  
  if (depoTrack && depoPrev && depoNext) {
    const slides = $$(".depo__slide", depoTrack);
    let currentIndex = 0;
    let slidesPerView = 3;
    
    function getSlidesPerView() {
      if (window.innerWidth <= 960) return 1;
      if (window.innerWidth <= 1100) return 2;
      return 3;
    }
    
    function updateSlidesPerView() {
      slidesPerView = getSlidesPerView();
      const maxIndex = Math.max(0, slides.length - slidesPerView);
      if (currentIndex > maxIndex) currentIndex = maxIndex;
      updateCarousel();
    }
    
    function createDots() {
      if (!depoDots) return;
      const totalDots = Math.max(1, slides.length - slidesPerView + 1);
      depoDots.innerHTML = "";
      depoDots.setAttribute("role", "tablist");
      depoDots.setAttribute("aria-label", "Navegação de depoimentos");
      for (let i = 0; i < totalDots; i++) {
        const dot = document.createElement("button");
        dot.className = "depo__dot" + (i === currentIndex ? " active" : "");
        dot.setAttribute("role", "tab");
        dot.setAttribute("aria-selected", i === currentIndex ? "true" : "false");
        dot.setAttribute("aria-label", "Ir para depoimento " + (i + 1));
        dot.addEventListener("click", () => {
          currentIndex = i;
          updateCarousel();
        });
        depoDots.appendChild(dot);
      }
    }
    
    function updateCarousel() {
      const slideWidth = slides[0].getBoundingClientRect().width;
      const gap = 32;
      const offset = currentIndex * (slideWidth + gap);
      depoTrack.style.transform = "translateX(-" + offset + "px)";
      
      // Atualizar dots
      if (depoDots) {
        $$(".depo__dot", depoDots).forEach((dot, i) => {
          dot.classList.toggle("active", i === currentIndex);
          dot.setAttribute("aria-selected", i === currentIndex ? "true" : "false");
        });
      }
      
      // Atualizar estado dos botões
      const maxIndex = Math.max(0, slides.length - slidesPerView);
      depoPrev.disabled = currentIndex === 0;
      depoNext.disabled = currentIndex >= maxIndex;
    }
    
    depoPrev.addEventListener("click", () => {
      if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
      }
    });
    
    depoNext.addEventListener("click", () => {
      const maxIndex = Math.max(0, slides.length - slidesPerView);
      if (currentIndex < maxIndex) {
        currentIndex++;
        updateCarousel();
      }
    });
    
    // Touch/swipe support
    let startX = 0;
    let isDragging = false;
    let currentTranslate = 0;
    
    depoTrack.addEventListener("touchstart", (e) => {
      startX = e.touches[0].clientX;
      isDragging = true;
      const style = window.getComputedStyle(depoTrack);
      const matrix = new WebKitCSSMatrix(style.transform);
      currentTranslate = matrix.m41;
    }, { passive: true });
    
    depoTrack.addEventListener("touchmove", (e) => {
      if (!isDragging) return;
      const diff = e.touches[0].clientX - startX;
      depoTrack.style.transform = "translateX(" + (currentTranslate + diff) + "px)";
    }, { passive: true });
    
    depoTrack.addEventListener("touchend", (e) => {
      if (!isDragging) return;
      isDragging = false;
      const diff = e.changedTouches[0].clientX - startX;
      const threshold = 50;
      
      if (diff > threshold && currentIndex > 0) {
        currentIndex--;
      } else if (diff < -threshold) {
        const maxIndex = Math.max(0, slides.length - slidesPerView);
        if (currentIndex < maxIndex) currentIndex++;
      }
      updateCarousel();
    }, { passive: true });
    
    // Resize handler
    let resizeTimer;
    window.addEventListener("resize", () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        updateSlidesPerView();
        createDots();
      }, 150);
    });
    
    // Init
    updateSlidesPerView();
    createDots();
  }

  /* ---------------------------------------------------------
     DEPOIMENTOS — Controle de Expansão (Mobile)
  --------------------------------------------------------- */
  const expandBtn = $("#depoExpandBtn");
  if (expandBtn) {
    expandBtn.addEventListener("click", () => {
      const carousel = $(".depo__carousel");
      if (carousel) {
        const isOpen = carousel.classList.toggle("expanded");
        expandBtn.classList.toggle("active", isOpen);
        
        const textSpan = $("span", expandBtn);
        if (textSpan) {
          textSpan.textContent = isOpen ? "Visualizar menos avaliações" : "Visualizar mais avaliações";
        }
        
        // Mostrar/ocultar navegação quando expandido
        const navs = $$(".depo__nav");
        const dots = $(".depo__dots");
        navs.forEach(nav => nav.style.display = isOpen ? "none" : "");
        if (dots) dots.style.display = isOpen ? "none" : "";
        
        // Resetar posição do carrossel
        if (depoTrack) {
          depoTrack.style.transform = isOpen ? "translateX(0)" : "";
          if (!isOpen && typeof updateCarousel === 'function') {
            currentIndex = 0;
            updateCarousel();
          }
        }
        
        // Ajustar slides para mostrar todos quando expandido
        const slides = $$(".depo__slide");
        slides.forEach(slide => {
          slide.style.flex = isOpen ? "0 0 100%" : "";
          slide.style.minWidth = isOpen ? "0" : "";
        });
        
        // Scroll suave para a seção
        if (isOpen) {
          const depoSection = $("#depoimentos");
          if (depoSection) {
            depoSection.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }
      }
    });
  }

  /* ---------------------------------------------------------
     DADOS — FAQ
  --------------------------------------------------------- */
  const FAQ = [
    { q: "Vocês atendem online?", a: "Sim. Além do atendimento presencial em Campo Grande, conduzimos consultas e processos de forma totalmente online, por WhatsApp e videochamada, para clientes em todo o Rio de Janeiro." },
    { q: "Como funciona a primeira consulta?", a: "É uma conversa para entendermos a sua situação. Você nos conta o caso, tiramos suas dúvidas em linguagem simples e explicamos os caminhos possíveis — com transparência sobre prazos e expectativas, sem compromisso." },
    { q: "Quais documentos preciso para dar entrada na aposentadoria?", a: "Em geral: documento de identidade, CPF, comprovante de residência, carteira de trabalho e o extrato do CNIS (Cadastro Nacional de Informações Sociais). Na consulta indicamos exatamente o que o seu caso exige — cada história é única." },
    { q: "Vocês atendem empregadores?", a: "Sim. Atuamos na defesa de empresas em reclamatórias trabalhistas, emitimos pareceres técnicos e oferecemos consultoria preventiva para reduzir passivos e dar segurança às decisões do empregador." },
    { q: "Qual é a área de atendimento?", a: "Atendemos clientes em todo o estado do Rio de Janeiro. Nosso escritório fica na R. Campo Grande, 1014 — sala 526, em Campo Grande." }
  ];

  const faqList = $("#faqList");
  const faqAnswerPanel = $("#faqAnswerPanel");
  const faqModal = $("#faqModal");
  const faqModalBody = $("#faqModalBody");
  const faqModalClose = $("#faqModalClose");
  const faqModalOverlay = $("#faqModalOverlay");

  function getWaLink(pergunta) {
    const baseText = `Olá, li a dúvida "${pergunta}" no site e gostaria de saber mais.`;
    return `https://wa.me/5521987142286?text=${encodeURIComponent(baseText)}`;
  }

  function getAnswerHTML(item) {
    return `
      <div class="faq__answer-content">
        <div class="faq__answer-badge" aria-hidden="true">✦</div>
        <h3 class="faq__answer-q">${item.q}</h3>
        <p class="faq__answer-a">${item.a}</p>
        <div class="faq__answer-divider"></div>
        <div class="faq__answer-footer">
          <span>Ainda tem dúvidas sobre esse assunto?</span>
          <a href="${getWaLink(item.q)}" target="_blank" rel="noopener" class="btn btn-outline">
            Falar com as advogadas
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </a>
        </div>
      </div>
    `;
  }

  if (faqList) {
    faqList.innerHTML = FAQ.map((f, i) => `
      <button class="faq__item-btn${i === 0 ? " active" : ""}" data-index="${i}">
        <span class="faq__item-num">${String(i + 1).padStart(2, "0")}</span>
        <span class="faq__item-q">${f.q}</span>
        <svg class="faq__item-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </button>`).join("");

    // Inicializa a primeira resposta no desktop
    if (faqAnswerPanel && FAQ.length > 0) {
      faqAnswerPanel.innerHTML = getAnswerHTML(FAQ[0]);
    }

    const faqButtons = $$(".faq__item-btn", faqList);

    faqButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        const index = parseInt(btn.dataset.index, 10);
        const item = FAQ[index];
        const isMobile = window.innerWidth < 1024;

        if (isMobile) {
          // Lógica Mobile: Abrir modal Bottom Sheet
          if (faqModal && faqModalBody) {
            faqModalBody.innerHTML = getAnswerHTML(item);
            faqModal.classList.add("open");
            faqModal.setAttribute("aria-hidden", "false");
            document.body.classList.add("no-scroll"); // trava o scroll de fundo
          }
        } else {
          // Lógica Desktop: Atualizar painel de resposta fixo
          faqButtons.forEach(b => b.classList.remove("active"));
          btn.classList.add("active");

          if (faqAnswerPanel) {
            const currentContent = $(".faq__answer-content", faqAnswerPanel);
            if (currentContent) {
              currentContent.classList.add("fade-out");
              setTimeout(() => {
                faqAnswerPanel.innerHTML = getAnswerHTML(item);
                const newContent = $(".faq__answer-content", faqAnswerPanel);
                if (newContent) {
                  newContent.classList.add("fade-in");
                }
              }, 200);
            } else {
              faqAnswerPanel.innerHTML = getAnswerHTML(item);
            }
          }
        }
      });
    });

    // Fechar modal no mobile
    const closeModal = () => {
      if (faqModal) {
        faqModal.classList.remove("open");
        faqModal.setAttribute("aria-hidden", "true");
        document.body.classList.remove("no-scroll"); // libera o scroll
      }
    };

    if (faqModalClose) faqModalClose.addEventListener("click", closeModal);
    if (faqModalOverlay) faqModalOverlay.addEventListener("click", closeModal);
  }

  /* ---------------------------------------------------------
     NAVBAR — scroll + burger + active link + premium effects
     (Otimizado: rAF batching evita forced reflow)
  --------------------------------------------------------- */
  const nav = $("#nav");
  const navWrapper = $("#navWrapper");
  let lastScrollY = 0;
  let ticking = false;

  const onScroll = () => {
    const scrollY = window.scrollY;
    const isScrolled = scrollY > 60;
    
    // Toggle scrolled class
    nav.classList.toggle("scrolled", isScrolled);
    if (navWrapper) navWrapper.classList.toggle("scrolled", isScrolled);
    
    lastScrollY = scrollY;
    ticking = false;
  };
  
  onScroll();
  window.addEventListener("scroll", () => {
    if (!ticking) {
      requestAnimationFrame(onScroll);
      ticking = true;
    }
  }, { passive: true });

  // Smooth transition for hide/show
  if (navWrapper) {
    navWrapper.style.transition = "padding .6s cubic-bezier(0.16, 1, 0.3, 1)";
  }

  const burger = $("#burger");
  const drawer = $("#drawer");
  const drawerOverlay = $("#drawerOverlay");
  const drawerClose = $("#drawerClose");

  const toggleMenu = (force) => {
    const open = force !== undefined ? force : !drawer.classList.contains("open");
    drawer.classList.toggle("open", open);
    drawerOverlay.classList.toggle("open", open);
    nav.classList.toggle("menu-open", open);
    burger.setAttribute("aria-expanded", String(open));
    document.body.classList.toggle("no-scroll", open);
    // Ensure nav is visible when menu is open
    if (open) nav.style.transform = "translateY(0)";
  };

  burger.addEventListener("click", () => toggleMenu(true));
  drawerClose.addEventListener("click", () => toggleMenu(false));
  drawerOverlay.addEventListener("click", () => toggleMenu(false));

  $$(".drawer__nav a").forEach(a => a.addEventListener("click", () => toggleMenu(false)));

  // active nav link by section
  const navLinks = $$(".nav__links a");
  const sections = navLinks.map(a => $(a.getAttribute("href"))).filter(Boolean);
  const spy = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const id = "#" + e.target.id;
        navLinks.forEach(a => a.classList.toggle("active", a.getAttribute("href") === id));
      }
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  sections.forEach(s => spy.observe(s));

  /* ---------------------------------------------------------
     SCROLL REVEAL
  --------------------------------------------------------- */
  const revealEls = $$(".reveal");
  if (reduce) {
    revealEls.forEach(el => el.classList.add("in"));
  } else {
    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add("in"); obs.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    revealEls.forEach(el => io.observe(el));
  }

  /* ---------------------------------------------------------
     COUNTERS
  --------------------------------------------------------- */
  const counters = $$("[data-count]");
  const animateCount = (el) => {
    const target = +el.dataset.count;
    const plain = el.dataset.plain === "1";
    const suffix = el.dataset.suffix || "";
    const dur = 1500, t0 = performance.now();
    const step = (now) => {
      const p = Math.min((now - t0) / dur, 1);
      const val = Math.floor(p * target);
      el.textContent = (plain ? val : val.toLocaleString("pt-BR")) + (p === 1 ? suffix : "");
      if (p < 1) requestAnimationFrame(step);
      else el.textContent = (plain ? target : target.toLocaleString("pt-BR")) + suffix;
    };
    requestAnimationFrame(step);
  };
  if (reduce) {
    counters.forEach(el => {
      const plain = el.dataset.plain === "1";
      el.textContent = (plain ? +el.dataset.count : (+el.dataset.count).toLocaleString("pt-BR")) + (el.dataset.suffix || "");
    });
  } else {
    const cio = new IntersectionObserver((entries, obs) => {
      entries.forEach(e => { if (e.isIntersecting) { animateCount(e.target); obs.unobserve(e.target); } });
    }, { threshold: 0.5 });
    counters.forEach(el => cio.observe(el));
  }

  /* ---------------------------------------------------------
     HERO — entrada (LCP otimizado: classe loaded imediata)
  --------------------------------------------------------- */
  const hero = $("#inicio");
  if (hero) {
    requestAnimationFrame(() => hero.classList.add("loaded"));
    // Garante LCP visível mesmo se JS falhar
    document.documentElement.classList.add("hero-ready");
  }

  /* ---------------------------------------------------------
     FORMULÁRIO — validação real + deeplink WhatsApp
  --------------------------------------------------------- */
  const form = $("#contactForm");
  if (form) {
    const setErr = (input, bad) => input.closest(".form__row").classList.toggle("invalid", bad);
    const validators = {
      nome: v => v.trim().length >= 2,
      email: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()),
      telefone: v => (v.replace(/\D/g, "").length >= 10),
      area: v => v.trim() !== "",
      mensagem: v => v.trim().length >= 5
    };
    // máscara simples de telefone
    const tel = $("#f-tel");
    tel.addEventListener("input", () => {
      let d = tel.value.replace(/\D/g, "").slice(0, 11);
      if (d.length > 6) tel.value = `(${d.slice(0,2)}) ${d.slice(2,7)}-${d.slice(7)}`;
      else if (d.length > 2) tel.value = `(${d.slice(0,2)}) ${d.slice(2)}`;
      else if (d.length > 0) tel.value = `(${d}`;
    });

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      let ok = true;
      Object.keys(validators).forEach(name => {
        const input = form.elements[name];
        const valid = validators[name](input.value);
        setErr(input, !valid);
        if (!valid && ok) input.focus();
        ok = ok && valid;
      });
      if (!ok) return;

      const nome = form.elements.nome.value.trim();
      const email = form.elements.email.value.trim();
      const telv = form.elements.telefone.value.trim();
      const area = form.elements.area.value;
      const msg = form.elements.mensagem.value.trim();
      
      const textoCompleto = `Olá, me chamo ${nome}, vim através do site e gostaria de uma informação.

- E-mail: ${email}
- Telefone: ${telv}
- Serviço: ${area}
- Situação: ${msg}`;

      const texto = encodeURIComponent(textoCompleto);
      window.open(`https://wa.me/5521987142286?text=${texto}`, "_blank");

      form.style.display = "none";
      $("#formOk").classList.add("show");
    });

    // limpa erro ao digitar
    $$("input, select, textarea", form).forEach(el =>
      el.addEventListener("input", () => el.closest(".form__row").classList.remove("invalid")));
  }

  /* ---------------------------------------------------------
     WHATSAPP PREMIUM - Balão de mensagem
  --------------------------------------------------------- */
  function initWaPremium() {
    const bubble = document.getElementById('wa-message-bubble');
    const typing = document.getElementById('wa-typing');
    const realMessage = document.getElementById('wa-real-message');
    const closeBtn = document.getElementById('wa-close-btn');
    const mainBtn = document.getElementById('wa-main-btn');

    if (!bubble) return;

    // Verifica se o usuário já fechou o balão nesta sessão
    const isClosed = sessionStorage.getItem('waBubbleClosed') === '1';

    if (!isClosed) {
      // Mostrar o balão após 5 segundos
      setTimeout(() => {
        bubble.classList.add('show');

        // Simular digitação por 2.5 segundos antes de mostrar a mensagem
        setTimeout(() => {
          if (typing) typing.style.display = 'none';
          if (realMessage) {
            realMessage.style.display = 'block';
            realMessage.style.opacity = '0';
            realMessage.style.transform = 'translateY(6px)';
            realMessage.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            requestAnimationFrame(() => {
              realMessage.style.opacity = '1';
              realMessage.style.transform = 'translateY(0)';
            });
          }
        }, 2500);
      }, 5000);
    }

    // Fechar balão
    if (closeBtn) {
      closeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        bubble.classList.remove('show');
        sessionStorage.setItem('waBubbleClosed', '1');
      });
    }

    // Ao clicar no botão, remove o balão
    if (mainBtn) {
      mainBtn.addEventListener('click', () => {
        bubble.classList.remove('show');
        sessionStorage.setItem('waBubbleClosed', '1');
      });
    }
  }

  initWaPremium();

  /* ---------------------------------------------------------
     ANO no rodapé (dinâmico, mantém 2026+)
  --------------------------------------------------------- */
})();
