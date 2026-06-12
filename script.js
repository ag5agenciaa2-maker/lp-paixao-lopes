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
      let n = 0;
      rows.forEach(row => {
        const show = area === "todos" || row.dataset.area === area;
        row.style.display = show ? "" : "none";
        row.classList.remove("is-hiding");
        if (show) { row.querySelector(".svc-num").textContent = String(++n).padStart(2, "0"); }
      });
    }, 280);
  }));

  /* ---------------------------------------------------------
     DADOS — Depoimentos (reais · Google)
  --------------------------------------------------------- */
  const DEPO = [
    { nome: "Rafael Lopes", quando: "Local Guide · há 7 meses", txt: "Atendimento humanizado e sincero, que dialoga de maneira simples, nos permitindo compreender a difícil tarefa de entender em qual regime você pode se aposentar diante de tantas reformas em menos de 30 anos. Muito obrigado." },
    { nome: "Marcela Paixão", quando: "há 7 meses", txt: "Atua com profissionalismo e de forma humanizada; nas consultorias possui o cuidado de esclarecer cada ponto de forma que nós, clientes, entendemos. Extremamente competente e dedicada. Eu indico!" },
    { nome: "Daniela Gomes", quando: "há 7 meses", txt: "Profissional competente, dedicada e extremamente comprometida. Demonstra conhecimento jurídico e uma postura ética admirável. Atenciosa e busca sempre a melhor solução para seus clientes." },
    { nome: "Cassiane Souza", quando: "há 7 meses", txt: "Graças à ajuda da Dra. Márcia ocorreu tudo certo. Só tenho a agradecer. Bem atenciosa, me ajudou em cada detalhe. Muito grata." },
    { nome: "Adriana Regina", quando: "há 7 meses", txt: "Uma pessoa maravilhosa, competente, muito profissional e justa. Tenho eterna gratidão por ela." },
    { nome: "Gabriel Duarte", quando: "há 4 meses", txt: "Uma profissional maravilhosa, super competente em tudo que faz, atenciosa e dedicada. Indico seus serviços de olhos fechados. Obrigado." }
  ];

  const stage = $("#depoStage");
  const dotsWrap = $("#depoDots");
  let cur = 0, timer = null;

  if (stage) {
    stage.innerHTML = DEPO.map((d, i) => `
      <figure class="depo__slide${i === 0 ? " active" : ""}" data-i="${i}">
        <div class="mark" aria-hidden="true">“</div>
        <blockquote>${d.txt}</blockquote>
        <figcaption class="depo__who">
          <span class="avatar">${d.nome.charAt(0)}</span>
          <b>${d.nome}</b>
          <span class="stars">★★★★★</span>
          <small>${d.quando} · no Google</small>
        </figcaption>
      </figure>`).join("");

    dotsWrap.innerHTML = DEPO.map((_, i) => `<button data-i="${i}" class="${i === 0 ? "active" : ""}" aria-label="Avaliação ${i + 1}"></button>`).join("");

    const slides = $$(".depo__slide", stage);
    const dots = $$("button", dotsWrap);

    function go(n) {
      cur = (n + DEPO.length) % DEPO.length;
      slides.forEach((s, i) => s.classList.toggle("active", i === cur));
      dots.forEach((d, i) => d.classList.toggle("active", i === cur));
    }
    function auto() {
      if (reduce) return;
      clearInterval(timer);
      timer = setInterval(() => go(cur + 1), 6000);
    }
    $("#depoNext").addEventListener("click", () => { go(cur + 1); auto(); });
    $("#depoPrev").addEventListener("click", () => { go(cur - 1); auto(); });
    dots.forEach(d => d.addEventListener("click", () => { go(+d.dataset.i); auto(); }));
    auto();
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
  if (faqList) {
    faqList.innerHTML = FAQ.map(f => `
      <div class="faq__item">
        <button class="faq__q" aria-expanded="false">
          <h3>${f.q}</h3>
          <span class="faq__icon" aria-hidden="true"></span>
        </button>
        <div class="faq__a"><div class="faq__a-inner">${f.a}</div></div>
      </div>`).join("");

    $$(".faq__item", faqList).forEach(item => {
      const btn = $(".faq__q", item);
      const panel = $(".faq__a", item);
      btn.addEventListener("click", () => {
        const open = item.classList.contains("open");
        $$(".faq__item", faqList).forEach(o => {
          o.classList.remove("open");
          $(".faq__q", o).setAttribute("aria-expanded", "false");
          $(".faq__a", o).style.maxHeight = null;
        });
        if (!open) {
          item.classList.add("open");
          btn.setAttribute("aria-expanded", "true");
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    });
  }

  /* ---------------------------------------------------------
     NAVBAR — scroll + burger + active link
  --------------------------------------------------------- */
  const nav = $("#nav");
  const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 60);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  const burger = $("#burger");
  const drawer = $("#drawer");
  const drawerOverlay = $("#drawerOverlay");
  const drawerClose = $("#drawerClose");

  const toggleMenu = (force) => {
    const open = force !== undefined ? force : !drawer.classList.contains("open");
    drawer.classList.toggle("open", open);
    drawerOverlay.classList.toggle("open", open);
    burger.setAttribute("aria-expanded", String(open));
    document.body.style.overflow = open ? "hidden" : "";
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
     HERO — entrada
  --------------------------------------------------------- */
  const hero = $("#inicio");
  if (hero) requestAnimationFrame(() => hero.classList.add("loaded"));

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
