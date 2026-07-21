---
segmento: Advocacia
bairros: [Campo Grande]
---

# SITE DNA — Paixão Lopes Advogados Associados

**Nicho:** Advocacia previdenciária, trabalhista, cível e empresarial (boutique, atendimento por sócias-fundadoras).
**Posicionamento:** "Justiça com proximidade e clareza" — escritório boutique de duas irmãs advogadas, atendimento humanizado e direto pelas sócias, sem cartelas de associados anônimos. Estética de alfaiataria jurídica clássica (bordô + dourado + serifada).
**Stack Técnica:** HTML5 estático + CSS puro (custom properties, sem framework) + JavaScript vanilla (ES6, sem dependências externas) + Google Fonts (Cormorant Garamond + Plus Jakarta Sans) + Google Maps iframe embed + JSON-LD Schema.org + módulo próprio de cookie consent (`cookie-banner.css`/`cookie-banner.js`).
**Data de criação:** 2026-07-20

---

## 1. IDENTIDADE VISUAL

### 1.1 Tokens de Marca — CSS Custom Properties (`:root`, style.css linhas 6-40)

| Token | Valor | Uso |
|---|---|---|
| `--bordo` | `#6E1423` | Cor primária (botões, ícones, destaque `em`) |
| `--bordo-escuro` | `#3D0A14` | Fundos escuros (seção Sobre, Contato, Footer, hover de botões) |
| `--bordo-2` | `#561019` | Fundo da seção Impacto |
| `--ouro` | `#C9A227` | Cor de acento (eyebrows, bordas, ícones, sublinhado ativo) |
| `--ouro-claro` | `#E8D6A0` | Hover de `.btn-gold` |
| `--champagne` | `#EFE3BF` | Tom de apoio claro |
| `--marfim` | `#F5F1E8` | Fundo principal do body |
| `--marfim-2` | `#FBF8F1` | Fundo alternativo claro |
| `--grafite` | `#2A2A2A` | Cor de texto principal |
| `--grafite-50` | `#6b6760` | Texto secundário/muted |
| `--serif` | `"Cormorant Garamond", Georgia, "Times New Roman", serif` | Headings (h1-h3) |
| `--sans` | `"Plus Jakarta Sans", system-ui, -apple-system, sans-serif` | Body, botões, UI |
| `--sp-1` … `--sp-7` | `8px, 16px, 24px, 40px, 64px, 96px, 140px` | Escala de espaçamento |
| `--maxw` | `1280px` | Largura máxima do `.wrap` |
| `--gut` | `clamp(20px, 5vw, 72px)` | Gutter lateral responsivo |
| `--ease` | `cubic-bezier(0.16, 1, 0.3, 1)` | Easing padrão de reveal/transições |
| `--ease-2` | `cubic-bezier(0.25, 0.46, 0.45, 0.94)` | Easing secundário |
| `--ease-bounce` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Easing com bounce (burger, balão WhatsApp) |
| `--radius` | `2px` | Raio de borda padrão (quase reto — estética "cartão de visita") |

Não há `@font-face` — fontes carregadas via Google Fonts com técnica `preload as="style" onload` (ver seção 7).

### 1.2 Tipografia — Tabela Completa

| Elemento | font-family | font-size | weight | line-height | letter-spacing | Observações |
|---|---|---|---|---|---|---|
| `body` | `--sans` | 17px | 400 (padrão) | 1.6 | normal | `-webkit-font-smoothing: antialiased` |
| `h1, h2, h3` | `--serif` | contextual | 500 | 1.04 | -.01em | Cormorant Garamond |
| `.section-title` | `--serif` | `clamp(2.1rem, 5vw, 3.6rem)` | 500 | 1.04 | -.01em | cor `--bordo-escuro`; `em` interno itálico `--bordo` |
| Hero `h1` | `--serif` | `clamp(3.2rem, 7vw, 8rem)` | 500 | 1.04 | -.01em | animação por linha (translateY 105%→0) |
| `.eyebrow` | `--sans` | 12.5px | 600 | normal | .28em | uppercase, cor `--ouro`, `::before` linha 34×1px |
| `.btn` | `--sans` | 14px | 600 | normal | .06em | uppercase |
| `.stats-num` (Sobre) | `--serif` | `clamp(1.8rem, 3.5vw, 2.5rem)` | 500 | 1.04 | -.01em | cor `--ouro` |
| Fonte cookie-banner | `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Inter', sans-serif` | — | — | — | — | Não usa as fontes do site principal |

Google Fonts requisitadas: **Cormorant Garamond** (pesos 300;400;500;600;700, itálico e normal) e **Plus Jakarta Sans** (pesos 300;400;500;600;700).

### 1.3 Sistema de Cores Funcionais — rgba() e Opacidades

| Contexto | Valor rgba/hex | Uso |
|---|---|---|
| Shadow botão primário | `rgba(110,20,35,.7)` / hover `rgba(110,20,35,.8)` | `.btn-primary` box-shadow |
| Navbar glass (topo) | `linear-gradient(180deg, rgba(245,241,232,.65), rgba(245,241,232,.40))` | `.nav::before` |
| Navbar glass (scrolled) | `rgba(61,10,20,.88)` | `.nav.scrolled::before` |
| Borda navbar | `rgba(201,162,39,.15)` → `.25` scrolled | `.nav::before` border |
| Shadow navbar | `0 4px 24px -8px rgba(61,10,20,.12), 0 1px 0 rgba(255,255,255,.3) inset` | estado topo |
| Ghost light border | `rgba(245,241,232,.4)` | `.btn-ghost-light` |
| Impacto grain/gradient | radial-gradients dourados sutis | `.impacto::before` |
| Impacto big quote | `rgba(201,162,39,.04)` | aspas gigante decorativa |
| Impact highlight bg | `rgba(201,162,39,.03)` | `.impact-step--highlight` |
| Portrait border | `rgba(201,162,39,.3)` | `.ph-portrait-block` |
| Sobre names tag bg | `rgba(61,10,20,.95)` | `.sobre__names-tag` |
| Form glass bg | `rgba(61,10,20,.45)` | `.form` (Contato) |
| Form border | `rgba(201,162,39,.2)` | `.form` |
| Form input border | `rgba(245,241,232,.25)` | inputs (estado normal) |
| Form erro | `#fca5a5` | `.err-msg` |
| Drawer overlay | `rgba(0,0,0,.6)` | `.drawer-overlay` |
| WA bubble bg | `rgba(255,255,255,.92)` | `.wa-bubble` (glassmorphism) |
| WA bubble border | `rgba(201,162,39,.25)` / cauda `.35` | `.wa-bubble`, `.wa-bubble::before` |
| WA bubble shadow | `0 20px 40px rgba(61,10,20,.15)` | `.wa-bubble` |
| WA badge | `#ff3b30` | `.wa-badge` (desativado por `MODO_COMPLIANCE`) |
| WA botão verde | `linear-gradient(135deg,#25d366,#128c7e)` | `.wa-float-btn` |
| Cookie banner bg | `#1a1a1a` | `.ck-banner` |
| Cookie accent | `#C9A227` (`--ck-accent`, mesma marca) | botões/bordas do cookie banner |
| Cookie overlay | `rgba(0,0,0,.55)` | `.ck-modal` |

### 1.4 Estilo Geral

Identidade "alfaiataria jurídica" — paleta bordô profundo (`#6E1423`/`#3D0A14`) e dourado (`#C9A227`) sobre fundo marfim (`#F5F1E8`), com tipografia serifada Cormorant Garamond nos títulos (peso 500, `letter-spacing:-.01em`) contrastando com Plus Jakarta Sans em caixa-alta e tracking largo (`.28em`) nos eyebrows/botões — um vocabulário editorial de escritório tradicional, não de "startup jurídica". O raio de borda quase nulo (`--radius:2px`) reforça a seriedade (nada de cards arredondados "friendly"); os únicos elementos com curvas suaves ficam isolados no ecossistema do balão de WhatsApp (`border-radius:24px 24px 4px 24px`) e no cookie-banner (`--ck-radius:12px`), sinalizando que são "widgets utilitários", não a linguagem central da marca. Toda a moldura visual usa glassmorphism seletivo (`backdrop-filter: blur()`) em três pontos-chave — navbar, formulário de contato e balão de WhatsApp — e nunca no restante do layout, que é opaco e sólido.

---

## 2. LAYOUT — SEÇÃO POR SEÇÃO

### 2.1 Navbar

**Estrutura:** `.nav-wrapper` (`position:fixed; top:0; z-index:100`) contendo `.nav` (pill flutuante, `border-radius:100px`, `max-width:900px`), com logo (`.nav__brand`, 38px/32px scrolled), `.nav__links` (Início, Serviços, Depoimentos, Sobre, Contato) e burger mobile (`.burger`, 3 barras).

**Fundo:** estado topo com glassmorphism claro `linear-gradient(180deg, rgba(245,241,232,.65), rgba(245,241,232,.40))` + `backdrop-filter: blur(20px) saturate(1.2)`; ao rolar (`.scrolled`) vira `rgba(61,10,20,.88)` opaco escuro.

**Elementos restritos:** nenhum — a navbar não tem elementos flutuantes próprios além do burger/drawer.

**Animação:** entrada via `@keyframes navSlideDown` (opacity 0→1, `translateY(-30px) scale(.96)`→`translateY(0) scale(1)`); links entram com stagger via `@keyframes navLinkIn` (delays .2s a .6s, passo .08s por `nth-child`), brand com delay .1s.

**Micro-interações:** links com sublinhado dourado central expandindo (`::after` width 0→100%, `left:50%→0`); logo com glow radial + rotação `-2deg scale(1.08)` no hover; burger transforma em X via `--ease-bounce`.

**Diferenciador visual:** pill flutuante com glassmorphism duplo estado (claro→escuro conforme scroll), não uma barra full-width tradicional.

### 2.2 Hero

**Estrutura:** `#inicio`, `.hero` (`min-height:100svh`), contendo `.hero__bg` (camadas de fundo), `.hero__particles` (10 spans), `.hero__seal` (selo/brasão com anéis orbitais), `.hero__kicker` ("Advocacia · Rio de Janeiro"), `h1` em duas `.line` ("Justiça com *proximidade* / e clareza."), `.hero__sub`, `.hero__actions` (2 CTAs).

**Fundo:** `background: var(--marfim)`; `.hero__bg-grad` com 3 radial-gradients dourado/bordô sutis; `.hero__bg-noise` textura SVG feTurbulence inline (opacity .4/.025); 3 `.hero__bg-orb` com `blur(80px)`.

**Elementos restritos:** selo/brasão `.hero__seal` (`width:clamp(200px,30vw,400px)`, posicionado `right:clamp(30px,8vw,100px)`) com 3 anéis orbitais (`.r2`/`.r3`, opacidades .35/.18/.08) e glow radial pulsante; 10 partículas douradas 2-3px com trajetórias/delays individuais por `nth-child`.

**Animação:** orbes (`orbFloat` 18-25s), partículas (`particle` 10-15s), selo (`sealFloat` 6s + `sealPulse` 4s no drop-shadow), anéis (`ringSpin` 20s/30s reverse/40s), glow (`glowPulse` 4s). Título revela por linha (`translateY(105%)→0`, transition 1s, delays .15s/.3s) disparado por `.hero.loaded` (classe JS via `requestAnimationFrame`).

**Micro-interações:** nenhuma interação direta do usuário na hero (é puramente decorativa/carregamento).

**Diferenciador visual:** LCP protegido por fallback inline no `<head>` (fonte Georgia forçada + opacidade/transform já visíveis) para evitar CLS antes do CSS carregar; elementos CSS órfãos (`.hero__rating`, `.hero__scroll` com `starFill`/`scrolldown`/`scrollDot`) existem no CSS mas não são usados no HTML atual.

### 2.3 Impacto

**Estrutura:** `#impacto`, `.impacto__container` grid `1.1fr 1fr`, com `.impacto__content` (sticky) e 3 `.impacto-step` ("A dor que assombra", "Nossa resposta" destacado, "O resultado prático").

**Fundo:** `background: var(--bordo-2)` (`#561019`), `::before` radial-gradients dourados + `.impacto__grain` textura SVG noise `opacity:.03`.

**Elementos restritos:** `.impacto__big-quote` — aspas gigantes `28vw`, cor `rgba(201,162,39,.04)`, puramente decorativa.

**Animação:** `.impacto__content` usa `position:sticky; top:130px` no scroll (desktop); some no `max-width:991px`.

**Micro-interações:** `.impacto-step` com barra dourada `::before` que expande (`scaleX(0)→1`) no hover e eleva `translateY(-4px)`.

**Diferenciador visual:** `.impact-step--highlight` com fundo dourado ultra-sutil `rgba(201,162,39,.03)` isolando visualmente o passo "Nossa resposta" como argumento central.

### 2.4 Serviços

**Estrutura:** `#servicos`, `.svc-tabs` (Todos/Previdenciário/Trabalhista/Cível & Família/Empresarial, `data-area`), `#svcList` (18 linhas `.svc-row` injetadas via JS), `#btnSvcMore` ("Ver mais serviços").

**Fundo:** herda `--marfim` (sem classe própria de background).

**Elementos restritos:** nenhum flutuante; `.svc-num` serif itálico dourado numerando cada linha, renumerado dinamicamente conforme filtro.

**Animação:** troca de aba/expansão usa classe `.is-hiding` (opacity:0, translateY(12px), pointer-events:none) com timing JS de 280ms antes de re-renderizar.

**Micro-interações:** `.svc-row` no hover ganha overlay `::before` gradient dourado, `padding-left:28px`, fundo `rgba(255,255,255,.35)`; `.svc-num` no hover vira `--bordo` com `scale(1.06) translateX(-4px)`.

**Diferenciador visual:** lista filtrável por área com limite de 6 linhas visíveis por padrão na aba "Todos" (expansível), grid `.svc-row` de 4 colunas (`80px 1fr 180px 40px`) que colapsa para `48px 1fr` em mobile (`≤760px`), com tabs virando scroll horizontal sem scrollbar.

### 2.5 Confiança

**Estrutura:** `#confianca`, `.confianca__grid` (`1.15fr 0.85fr`), `.confianca__manifesto` em 3 colunas ("Atendimento Humano", "Transparência Real", "Sócias no Comando") com separadores verticais, `.ph-portrait-block` (retrato Dra. Márcia Paixão).

**Fundo:** herda `--marfim` / claro.

**Elementos restritos:** `.ph-portrait-block` com moldura passe-partout (padding 12px), borda dourada fina `rgba(201,162,39,.3)`.

**Animação:** nenhuma própria além do `.reveal` global.

**Micro-interações:** retrato eleva `translateY(-4px)` no hover e intensifica borda/shadow.

**Diferenciador visual:** manifesto em 3 colunas com divisores `::after` de 1px entre elas (não cards separados), reforçando leitura editorial contínua.

### 2.6 Sobre

**Estrutura:** `#sobre`, `.sobre__img-wrapper` (retrato das duas sócias) + `.sobre__names-tag` (nomes/datas), texto narrativo, `#counters` com 2 estatísticas (`data-count="2024" data-plain="1"` / `100%`).

**Fundo:** `background: var(--bordo-escuro)` (`#3D0A14`) com radial-gradient dourado.

**Elementos restritos:** `.sobre__stats-grid` com divisor vertical central dourado `::before` e "nó" decorativo `.axis-node` (círculo com "✦").

**Animação:** contadores animam de 0 ao valor final em 1500ms via `requestAnimationFrame`, disparado por `IntersectionObserver` (threshold .5, dispara uma vez).

**Micro-interações:** nenhuma interativa direta.

**Diferenciador visual:** `.sobre__names-tag` sobrepõe a foto como uma "placa" (`rgba(61,10,20,.95)`) citando as duas advogadas com datas de atuação (2020/2023), reforçando storytelling de duas irmãs.

### 2.7 Depoimentos

**Estrutura:** `#depoimentos`, `.depo__carousel` com `.depo__track` (flex, 9 slides), `.depo__nav` (prev/next circulares), `.depo__dots`, rating 5.0★ com "48 avaliações reais no Google", botão "Visualizar mais avaliações" (mobile).

**Fundo:** claro, herda `--marfim`.

**Elementos restritos:** nenhum flutuante.

**Animação:** `.depo__track { transition: transform .6s var(--ease) }`; suporte a swipe touch (threshold 50px); resize com debounce 150ms.

**Micro-interações:** dots (`8px`, área de toque 12px via `background-clip:content-box`) — `.active` fica dourado + `scale(1.2)`; botões nav `:disabled { opacity:.3 }`.

**Diferenciador visual:** `slidesPerView` responsivo (3 desktop / 2 ≤1100px / 1 ≤960px); modo `.expanded` no mobile empilha todos os depoimentos em coluna (`flex-direction:column; transform:none!important`) via botão dedicado.

### 2.8 FAQ

**Estrutura:** `#faq`, lista `#faqList` (5 perguntas, botões `.faq__item-btn`) + `#faqAnswerPanel` fixo (desktop) OU `#faqModal` bottom-sheet (mobile).

**Fundo:** claro, painel de resposta com fundo `#FFFDF9`.

**Elementos restritos:** `.faq__answer-panel::before` cria moldura interna extra (`inset:6px`).

**Animação:** desktop — `@keyframes faqFadeIn`/`faqFadeOut` (translateY 10px↔0) com timing JS de 200ms entre fade-out e substituição de conteúdo; mobile — modal `translateY(100%)→0`, overlay `backdrop-filter: blur(8px)`.

**Micro-interações:** borda esquerda de 2px transparente que fica dourada no hover/active; `.active` ganha fundo `rgba(255,255,255,.8)`.

**Diferenciador visual:** arquitetura dupla — painel fixo lado a lado no desktop (`grid-template-columns: 1fr 1.15fr`), modal bottom-sheet completamente diferente no mobile (`≤1023px`), não é o mesmo componente reescalado.

### 2.9 Localização

**Estrutura:** `#localizacao`, `.local__bleed-grid` full-bleed (`1fr 1fr`, `min-height:520px`) com `.local__info-list` (Endereço, Consultas Presenciais, Horário, Contato Direto) + iframe Google Maps.

**Fundo:** `.local { padding:0 }` — seção sem padding lateral, sangrada até a borda da viewport.

**Elementos restritos:** nenhum flutuante.

**Animação:** `.local__bleed-map iframe { filter: grayscale(.65) sepia(.12) contrast(1.03) }`, remove filtro no hover (`transition: filter .8s`).

**Micro-interações:** `.local__info-list` com borda esquerda dourada 2px (`padding-left:28px`); mapa "revela cor" ao hover.

**Diferenciador visual:** mapa estilizado com filtro sépia/grayscale que "colore" ao interagir — tratamento editorial em vez de mapa cru do Google.

### 2.10 Contato / Formulário

**Estrutura:** `#contato`, `.form` (`#contactForm`: Nome, E-mail, Telefone/WhatsApp, Serviço [select 8 opções], Situação [textarea]) + `#formOk` (tela de sucesso oculta).

**Fundo:** `background-image: linear-gradient(rgba(61,10,20,.94), rgba(61,10,20,.97)), url('assets/bg-contato-premium.png')`, cover/center.

**Elementos restritos:** nenhum flutuante externo.

**Animação:** troca form→`#formOk` com classe `.show` após envio válido.

**Micro-interações:** inputs sem borda lateral, apenas `border-bottom:1px solid rgba(245,241,232,.25)`, foco muda cor para `--ouro`; `.form__row.invalid` exibe `.err-msg` (`#fca5a5`) e remove `.invalid` ao digitar.

**Diferenciador visual:** `.form` com glassmorphism completo (`backdrop-filter: blur(16px)`, `background: rgba(61,10,20,.45)`) sobre imagem de fundo — único formulário "vidro fosco" do site.

### 2.11 Footer

**Estrutura:** `.foot`, `.foot__top` grid 4 colunas (Marca, Navegação, Serviços, Contato com ícones SVG inline), microdata oculta (`itemscope itemtype="https://schema.org/LegalService"`), `.foot__bottom` (copyright, toggle de cookies, links legais, crédito AG5).

**Fundo:** `background: var(--bordo-escuro)`, `border-top: 1px solid rgba(201,162,39,.2)`.

**Elementos restritos:** toggle de cookies estilo iOS mini (`#cookie-toggle`, 28×14px, bolinha 2px↔15px).

**Animação:** nenhuma própria.

**Micro-interações:** toggle de cookies muda cor dourado/`#888` conforme estado ativo/inativo.

**Diferenciador visual:** duplicação silenciosa de dados estruturados via microdata `display:none` reforçando o JSON-LD do `<head>` (redundância técnica de SEO, não visual).

### 2.12 Balão de WhatsApp flutuante

**Estrutura:** `.wa-premium-container` (`fixed; bottom:24px; right:24px; z-index:2000`) com `.wa-bubble` (`#wa-message-bubble`: header com avatar 45px + nome "Dra. Márcia Paixão", `.wa-typing` 3 spans, `#wa-real-message` oculto) e `.wa-float-btn` (`#wa-main-btn`, 60×60px redondo).

**Fundo:** balão `rgba(255,255,255,.92)` + `backdrop-filter: blur(15px)`; botão `linear-gradient(135deg,#25d366,#128c7e)`.

**Elementos restritos:** cauda triangular via `::before` (`transform:rotate(45deg)`, herda background, bordas dourada `rgba(201,162,39,.35)`); badge `.wa-badge` (`#ff3b30`, 15px) desativado por `MODO_COMPLIANCE=true` no JS.

**Animação:** `IntersectionObserver` (threshold .1) na seção `#servicos` dispara timeline única: t=0s botão ganha `.visible`; t=25s balão ganha `.show`; +2.5s troca `.wa-typing` por `.wa-message-text` (`.is-hidden`/`.is-visible`); +15s remove `.show` automaticamente. Transição do balão: `all .6s cubic-bezier(0.34,1.56,0.64,1)` (translateY 20px scale .95 → 0/1).

**Micro-interações:** botão fechar `#wa-close-btn` cancela todos os timers e seta `userClosed=true` (não reaparece); botão principal hover `scale(1.08)`.

**Diferenciador visual:** simulação de conversa real com avatar, indicador de digitação animado (`@keyframes wa-typing-ani`) e mensagem que "chega" depois — não é um ícone estático de WhatsApp, é uma micro-encenação de atendimento humano cronometrada.

### 2.13 Modal de Cookies

**Estrutura:** `.ck-banner` (`#ck-banner`, fixed bottom) com título "Valorizamos sua privacidade" + botões Personalizar/Rejeitar/Aceitar todos; `.ck-modal` (`#ck-modal`) com 5 categorias (Necessário fixo + Funcional/Analítico/Desempenho/Publicidade com toggles).

**Fundo:** banner `#1a1a1a` com borda superior `rgba(201,162,39,.12)` e `backdrop-filter: blur(10px)`; modal box branco `#ffffff` com `border-top: 2px solid var(--ck-accent)` sobre overlay `rgba(0,0,0,.55)`.

**Elementos restritos:** `#ck-prefs-btn` (botão flutuante) oculto por config (`showFloatingBtn:false`).

**Animação:** banner `transform: translateY(100%)` → `.ck-banner--visible { translateY(0) }` (`.42s var(--ck-ease-out)`), aparece após `bannerDelay:600ms`; modal `translateY(14px) scale(.98)` → `(0,1)`.

**Micro-interações:** toggles iOS-style (34×19px, bolinha `translateX(15px)`); toast de feedback (`.ck-toast`) confirma cada ação ("Todos os cookies aceitos.", etc).

**Diferenciador visual:** módulo de compliance com paleta e identidade visual próprias (dourado `--ck-accent` reaproveitado da marca, mas tipografia system-ui própria), persistência em `localStorage` (`site_cookie_consent`, expira 365 dias) e API pública `window.CookieBanner`.

---

## 3. COMPONENTES REUTILIZÁVEIS

### 3.1 Botões
```css
.btn { display:inline-flex; align-items:center; gap:10px; font-family: var(--sans); font-size:14px; font-weight:600; letter-spacing:.06em; text-transform:uppercase; padding:17px 30px; border-radius: var(--radius); transition: transform .35s var(--ease), background .35s var(--ease), color .35s var(--ease), box-shadow .35s var(--ease); position:relative; }
.btn svg { width:16px; height:16px; flex:none; }

.btn-primary { background: var(--bordo); color: var(--marfim); box-shadow: 0 10px 28px -16px rgba(110,20,35,.7); }
.btn-primary:hover { background: var(--bordo-escuro); transform: translateY(-3px); box-shadow: 0 18px 38px -16px rgba(110,20,35,.8); }

.btn-gold { background: var(--ouro); color: var(--bordo-escuro); }
.btn-gold:hover { background: var(--ouro-claro); transform: translateY(-3px); }

.btn-outline { border:1px solid currentColor; color: var(--bordo-escuro); }
.btn-outline:hover { background: var(--bordo-escuro); color: var(--marfim); border-color: var(--bordo-escuro); transform: translateY(-3px); }

.btn-ghost-light { border:1px solid rgba(245,241,232,.4); color: var(--marfim); }
.btn-ghost-light:hover { background: var(--marfim); color: var(--bordo-escuro); transform: translateY(-3px); }

.btn-wa { background:#1faa55; color:#fff; }
.btn-wa:hover { background:#17924a; transform: translateY(-3px); }
```

### 3.2 Eyebrow / Badge
```css
.eyebrow { font-family: var(--sans); font-size:12.5px; font-weight:600; letter-spacing:.28em; text-transform:uppercase; color: var(--ouro); position:relative; padding-left:44px; }
.eyebrow::before { content:''; position:absolute; left:0; top:50%; width:34px; height:1px; background: var(--ouro); }
```

### 3.3 Sistema `.reveal` (scroll reveal com stagger)
```css
.reveal { opacity:0; transform: translateY(34px); transition: opacity .8s var(--ease), transform .8s var(--ease); will-change: transform, opacity; }
.reveal.in { opacity:1; transform:none; }
.reveal.d1 { transition-delay: .08s; }
.reveal.d2 { transition-delay: .16s; }
.reveal.d3 { transition-delay: .24s; }
.reveal.d4 { transition-delay: .32s; }
```
JS: `IntersectionObserver({threshold:.12, rootMargin:"0px 0px -8% 0px"})` adiciona `.in` e faz `unobserve` (dispara uma única vez por elemento). Se `prefers-reduced-motion: reduce`, todos recebem `.in` imediatamente sem observer.

### 3.4 Card/linha de serviço (`.svc-row`)
```css
.svc-row { display:grid; grid-template-columns: 80px 1fr 180px 40px; align-items:center; position:relative; padding:24px 0; transition: padding-left .35s var(--ease), background .35s var(--ease); }
.svc-row::before { content:''; position:absolute; inset:0; background: linear-gradient(90deg, rgba(201,162,39,.08), transparent); opacity:0; transition: opacity .35s var(--ease); }
.svc-row:hover { padding-left:28px; background: rgba(255,255,255,.35); }
.svc-row:hover::before { opacity:1; }
.svc-row.is-hiding { opacity:0; transform: translateY(12px); pointer-events:none; }
.svc-num { font-family: var(--serif); font-style:italic; color: var(--ouro); transition: color .35s var(--ease), transform .35s var(--ease); }
.svc-row:hover .svc-num { color: var(--bordo); transform: scale(1.06) translateX(-4px); }
```

### 3.5 FAQ Accordion (item + painel)
```css
.faq__item-btn { display:grid; grid-template-columns: auto 1fr auto; align-items:center; gap:16px; width:100%; text-align:left; border-left:2px solid transparent; padding:20px 24px; transition: border-color .3s var(--ease), background .3s var(--ease); }
.faq__item-btn:hover, .faq__item-btn.active { border-left-color: var(--ouro); }
.faq__item-btn.active { background: rgba(255,255,255,.8); }

.faq__answer-panel { background:#FFFDF9; border:1px solid rgba(201,162,39,.35); position:relative; }
.faq__answer-panel::before { content:''; position:absolute; inset:6px; border:1px solid rgba(201,162,39,.15); pointer-events:none; }

@keyframes faqFadeIn { from { opacity:0; transform: translateY(10px); } to { opacity:1; transform:none; } }
@keyframes faqFadeOut { from { opacity:1; transform:none; } to { opacity:0; transform: translateY(-10px); } }
```

### 3.6 Avatar/Bolha do WhatsApp Premium
```css
.wa-bubble {
  width:300px; position:absolute; bottom:85px; right:0;
  background: rgba(255,255,255,.92);
  backdrop-filter: blur(15px); -webkit-backdrop-filter: blur(15px);
  border: 1px solid rgba(201,162,39,.25);
  border-radius: 24px 24px 4px 24px;
  box-shadow: 0 20px 40px rgba(61,10,20,.15);
  padding:20px;
  opacity:0; visibility:hidden;
  transform: translateY(20px) scale(0.95);
  transition: all .6s cubic-bezier(0.34,1.56,0.64,1);
}
.wa-bubble.show { opacity:1; visibility:visible; transform: translateY(0) scale(1); }
.wa-bubble::before {
  content:''; position:absolute; bottom:-10px; right:22px;
  width:20px; height:20px; background:inherit;
  border-right:1px solid rgba(201,162,39,.35);
  border-bottom:1px solid rgba(201,162,39,.35);
  transform: rotate(45deg);
  border-bottom-right-radius:4px;
  z-index:-1;
}
@keyframes wa-typing-ani { 0%,60%,100% { transform: translateY(0); opacity:.4; } 30% { transform: translateY(-4px); opacity:1; } }
```

### 3.7 Contadores animados
```js
function animateCount(el) {
  const target = Number(el.dataset.count);
  const plain = el.dataset.plain === "1";
  const suffix = el.dataset.suffix || "";
  const duration = 1500;
  const start = performance.now();
  function tick(now) {
    const p = Math.min((now - start) / duration, 1);
    const val = Math.floor(p * target);
    el.textContent = (plain ? val : val.toLocaleString("pt-BR")) + (p === 1 ? suffix : "");
    if (p < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}
```
Trigger: `IntersectionObserver({threshold:.5})`, dispara uma vez e `unobserve`.

### 3.8 Modal de Cookies completo (estrutura + CSS essencial)
```css
:root {
  --ck-bg:#1a1a1a; --ck-accent:#C9A227; --ck-accent-dark:#a3821d;
  --ck-modal-bg:#ffffff; --ck-toggle-off:#d0d5db; --ck-toggle-on: var(--ck-accent);
  --ck-radius:12px; --ck-transition:280ms cubic-bezier(0.4,0,0.2,1);
  --ck-ease-out:cubic-bezier(0.16,1,0.3,1);
  --ck-z-banner:9000; --ck-z-overlay:9050; --ck-z-modal:9100; --ck-z-float:8999;
}
.ck-banner { position:fixed; bottom:0; left:0; right:0; z-index:var(--ck-z-banner);
  background: var(--ck-bg); border-top:1px solid rgba(201,162,39,.12);
  box-shadow: 0 -4px 24px rgba(0,0,0,.22); backdrop-filter: blur(10px);
  transform: translateY(100%); transition: transform .42s var(--ck-ease-out); }
.ck-banner--visible { transform: translateY(0); }

.ck-modal { position:fixed; inset:0; z-index:var(--ck-z-modal); background: rgba(0,0,0,.55);
  opacity:0; pointer-events:none; transition: opacity var(--ck-transition); }
.ck-modal--visible { opacity:1; pointer-events:all; }
.ck-modal__box { background: var(--ck-modal-bg); border-radius:12px; border-top:2px solid var(--ck-accent);
  max-width:520px; max-height:88vh; transform: translateY(14px) scale(.98); opacity:0;
  transition: transform var(--ck-transition), opacity var(--ck-transition); }
.ck-modal--visible .ck-modal__box { transform: translateY(0) scale(1); opacity:1; }

.ck-toggle { width:34px; height:19px; border-radius:20px; background: var(--ck-toggle-off); position:relative; }
.ck-toggle input:checked + .ck-toggle__slider { transform: translateX(15px); background: var(--ck-accent); }
```
JS (comportamento completo em cookie-banner.js): `CONFIG = {storageKey:'site_cookie_consent', expiryDays:365, bannerDelay:600, showFloatingBtn:false, privacyPolicyUrl:'politica-de-privacidade.html'}`. Estado default `{necessary:true, functional:false, analytics:false, performance:false, advertising:false, decided:false, timestamp:null}`, persistido em `localStorage`. `init()` verifica expiração (365 dias); se já decidido, aplica preferências sem mostrar banner; senão exibe após 600ms. `acceptAll()`/`rejectAll()`/`saveCustom()` disparam evento `cookieConsentUpdated`, atualizam ícone do toggle no footer e mostram toast. API pública: `window.CookieBanner = { open, acceptAll, rejectAll, saveCustom, getPreferences, hasDecided, reset }`.

---

## 4. SISTEMA GLOBAL DE ANIMAÇÕES

| Keyframe | Duração | Efeito | Onde é usado |
|---|---|---|---|
| `navSlideDown` | — (entrada única) | opacity 0→1, `translateY(-30px) scale(.96)` → `translateY(0) scale(1)` | `.nav` ao carregar |
| `navLinkIn` | — | `translateY(-6px)`→0, opacity 0→1 | `.nav__links a` (stagger .2s-.6s, passo .08s) e `.nav__brand` (.1s) |
| `orbFloat` | 18-25s infinito | translate/scale variando em 4 estágios (0/25/50/75/100%) | `.hero__bg-orb` (3 orbes) |
| `particle` | 10-15s infinito | opacity 0→.6→.3→.6→0, `translateY 0→-120px`, scale 0→1→.8→1→0 | `.hero__particles span` (10 partículas, delays 0-8.5s) |
| `sealFloat` | 6s infinito | `translateY -50%→-52%`, `translateX 0→5px` | `.hero__seal` |
| `sealPulse` | 4s infinito | intensidade do `drop-shadow` | `.hero__seal img` |
| `ringSpin` | 20s / 30s (reverse) / 40s linear infinito | rotação 360° | `.hero__seal-ring`, `.r2`, `.r3` |
| `glowPulse` | 4s infinito | opacity .6↔1, scale 1↔1.1 | `.hero__seal-glow` |
| `lineGrow` | delay .5s | width 0→34px | `.hero__kicker::before` |
| `starFill` | — (CSS órfão) | clip-path preenchendo estrelas | `.hero__rating` (não usado no HTML atual) |
| `scrolldown` / `scrollDot` | — (CSS órfão) | barra/ponto de scroll animando | `.hero__scroll` (não usado no HTML atual) |
| `faqFadeIn` / `faqFadeOut` | .2-.3s aprox | `translateY(10px)↔0` + opacity | `.faq__answer-panel` (desktop, via JS) |
| `wa-typing-ani` | ~1.4s infinito | `translateY 0↔-4px`, opacity .4↔1 | `.wa-typing span` (3 bolinhas, delays .2s/.4s) |

---

## 5. COMPORTAMENTOS JAVASCRIPT

| Função/Comportamento | Trigger | Ação executada | Classes add/remove | Elementos afetados |
|---|---|---|---|---|
| `renderServicos(area)` | Chamada inicial + clique em tab/botão | Filtra/renumera `.svc-row` por `data-area`; limita a 6 na aba "todos" | (re-render de HTML) | `#svcList`, `.svc-row`, `.svc-num` |
| Botão "Ver mais/menos" | Clique `#btnSvcMore` | Expande/colapsa lista com fade escalonado (30ms) ou saída (280ms) + scroll suave de volta | `.is-hiding` | `.svc-row`, `#btnSvcMore` |
| Tabs `.svc-tab` | Clique | Marca aba ativa, oculta linhas (280ms), re-renderiza filtro | `.active`, `aria-selected`, `.is-hiding` | `.svc-tab`, `.svc-row` |
| Carrossel depoimentos | DOM ready / resize (debounce 150ms) / touch | Calcula `slidesPerView` (1/2/3), translada `.depo__track`, atualiza dots e `disabled` de nav | `.active` (dots), `disabled` (botões) | `.depo__track`, `.depo__dot`, `.depo__nav` |
| Swipe touch depoimentos | `touchstart/move/end` | Detecta arraste ≥50px e troca slide | — | `.depo__track` |
| Expansão depoimentos mobile | Clique `#depoExpandBtn` | Empilha todos os slides em coluna, oculta nav/dots, `scrollIntoView` | `.expanded` | `.depo__carousel`, `.depo__slide` |
| FAQ render + clique | Chamada inicial / clique `.faq__item-btn` | Mobile: abre modal bottom-sheet com resposta injetada. Desktop: fade-out/troca/fade-in no painel fixo | `.active`, `.open`, `aria-hidden`, `.fade-out`, `.fade-in`, `body.no-scroll` | `#faqList`, `#faqModal`, `#faqAnswerPanel` |
| Fechar modal FAQ | Clique fechar/overlay | Remove modal, libera scroll | remove `.open`, `aria-hidden=true` | `#faqModal`, `body` |
| `onScroll()` (navbar) | scroll (throttle via rAF) | Alterna estado visual da navbar quando `scrollY > 60` | `.scrolled` | `#nav`, `#navWrapper` |
| Burger/drawer | Clique `#burger` | Abre/fecha drawer mobile, trava scroll | `.open`, `.menu-open`, `aria-expanded`, `body.no-scroll` | `#drawer`, `#drawerOverlay`, `.nav` |
| Nav active spy | `IntersectionObserver` (rootMargin `-45% 0px -50% 0px`) | Marca link ativo conforme seção visível | `.active` | `.nav__links a` |
| Scroll reveal | `IntersectionObserver` (threshold .12) | Revela elemento uma única vez | `.in` | `.reveal` (todas as seções) |
| Contadores animados | `IntersectionObserver` (threshold .5) | Anima número de 0 até `data-count` em 1500ms | — | `[data-count]` (Sobre) |
| Hero loaded | `requestAnimationFrame` no load | Dispara cascata de entrada CSS do hero | `.loaded` (`.hero`), `.hero-ready` (`html`, fallback) | `.hero`, `html` |
| Máscara telefone | `input` em `#f-tel` | Formata `(XX) XXXXX-XXXX` | — | `#f-tel` |
| Validação/envio formulário | `submit` `#contactForm` | Valida campos, marca inválidos, monta texto e abre `wa.me`, mostra tela de sucesso | `.invalid`, `.show` | `.form__row`, `#formOk` |
| Remoção de erro ao digitar | `input` em qualquer campo | Remove estado de erro | remove `.invalid` | `.form__row` |
| WhatsApp Premium — trigger de viewport | `IntersectionObserver` (threshold .1) em `#servicos`, dispara uma vez | Timeline: t=0s botão `.visible`; t=25s balão `.show`; +2.5s troca typing→mensagem; +15s auto-esconde | `.visible`, `.show`, `.is-hidden`, `.is-visible`, `.is-in` | `.wa-float-btn`, `.wa-bubble`, `.wa-typing`, `.wa-message-text` |
| Fechar balão WA manualmente | Clique `#wa-close-btn` | Cancela todos os timers, marca `userClosed=true` (não reaparece) | remove `.show` | `.wa-bubble` |
| Clique botão principal WA | Clique `#wa-main-btn` | Fecha balão/badge e cancela timers antes de abrir `wa.me` | remove `.show` | `.wa-bubble`, `.wa-badge` |
| Cookie: `init()` | Load da página | Verifica `localStorage`/expiração (365 dias); aplica preferências ou exibe banner após 600ms | `.ck-banner--visible` | `#ck-banner` |
| Cookie: `acceptAll()` | Clique `#ck-accept-all` / `#ck-modal-accept-all` | Seta todas categorias true, salva, toast, atualiza ícone footer | esconde banner/modal | `#ck-banner`, `#ck-modal`, `#cookie-toggle` |
| Cookie: `rejectAll()` | Clique `#ck-reject` / `#ck-modal-reject` | Mantém só `necessary`, salva, toast | idem | idem |
| Cookie: `saveCustom()` | Clique `#ck-modal-save` | Lê checkboxes individuais, salva, toast | idem | `.ck-toggle` inputs |
| Cookie: abrir/fechar modal | Clique `#ck-customize`/`#ck-prefs-link`/Escape | Toggla visibilidade, trava/libera scroll, foco no botão fechar | `.ck-modal--visible`, `body.no-scroll` | `#ck-modal` |

---

## 6. RESPONSIVIDADE

| Breakpoint | Mudanças principais |
|---|---|
| `@media (prefers-reduced-motion: reduce)` | Zera duração de animações/transições (`.001ms`), `scroll-behavior:auto`, reveal/contadores aplicam estado final direto sem observer |
| `max-width: 991px` | `.impacto__container` vira 1 coluna; `.impacto__content` perde `position:sticky` |
| `max-width: 1100px` | Depoimentos: `slidesPerView=2` (`.depo__slide { flex:0 0 calc(50% - 16px) }`); hero seal reduz/reposiciona; `.hero__inner { max-width:720px }` |
| `max-width: 1024px` | Grids de Confiança/Contato/Localização/FAQ/Sobre viram 1 coluna; footer vira 2 colunas |
| `max-width: 1023px` | FAQ: painel de resposta fixo ocultado, só existe modal bottom-sheet; Localização empilha em 1 coluna |
| `min-width: 961px` | Oculta botão "ver mais avaliações" dos depoimentos (exclusivo mobile) |
| `max-width: 960px` | Depoimentos: `slidesPerView=1` (100% por slide), nav do carrossel some |
| `max-width: 767px` | Mapa reduz altura para 300px; ações de localização empilham; cookie banner/modal reorganizam em coluna, botões `flex:1` |
| `max-width: 760px` | Breakpoint mobile principal: navbar compacta + burger visível; hero reduz padding e oculta orbes; tabs de serviços viram scroll horizontal sem scrollbar; grid `.svc-row` colapsa para `48px 1fr` (oculta `.svc-area`/`.svc-arrow`); form em 1 coluna; footer em 1 coluna |
| `max-width: 480px` | Ajustes finos em `.sobre__stats-grid` e `.wa-premium-container` (`bottom/right:20px`; balão `width:260px; bottom:75px`) |
| `max-height: 800px and min-width: 761px` | Hero comprime verticalmente (laptops de tela curta) |

---

## 7. PERFORMANCE & SEO TÉCNICO

| Recurso | Implementação |
|---|---|
| Preload imagem LCP | `<link rel="preload" href="assets/logo-paixao-lopes-advogados-mobile.webp" as="image" fetchpriority="high">` |
| Preconnect fontes | `<link rel="preconnect" href="https://fonts.googleapis.com">` e `https://fonts.gstatic.com` (`crossorigin`) |
| DNS-prefetch | `//fonts.googleapis.com`, `//fonts.gstatic.com` |
| Fontes assíncronas | Google Fonts via `<link rel="preload" as="style" onload="this.rel='stylesheet'">` + `<noscript>` fallback (Cormorant Garamond + Plus Jakarta Sans) |
| CSS assíncrono | `style.css` e `cookie-banner.css` via mesma técnica `preload onload` |
| Fallback LCP inline | `<style>` no `<head>` força Georgia/Times New Roman em `.hero__kicker, h1, .hero__sub, .hero__actions` com opacidade/transform já visíveis antes do CSS externo carregar |
| fetchpriority alto | Imagem do selo hero (`400×400`) |
| loading="lazy" | Retratos (Confiança, Sobre) e iframe do mapa, todos com `width`/`height` explícitos |
| referrerpolicy | `no-referrer-when-downgrade` no iframe do mapa |
| Scripts defer | `script.js` e `cookie-banner.js` |
| Schema.org JSON-LD | `@graph` com **LegalService** (endereço, geo, `openingHoursSpecification`, `areaServed` 7 bairros, `founder` ×2, `hasOfferCatalog` 18 serviços, `aggregateRating` 5.0/48), **WebSite**, **WebPage** (`dateModified:2026-06-15`), **FAQPage** (5 perguntas) |
| Meta SEO | title, description, canonical, robots (`max-image-preview:large` etc), Open Graph completo, Twitter Card `summary_large_image` |
| Geo tags | `geo.region=BR-RJ`, `geo.placename`, `geo.position=-22.901576;-43.559458`, `ICBM` |
| Microdata redundante | Bloco `display:none` no footer com `itemscope itemtype="https://schema.org/LegalService"` duplicando nome/telefone/endereço |

---

## 8. ANTI-PADRÕES REGISTRADOS

- ❌ **Clichê evitado:** ícones de "balança da justiça"/colunas gregas genéricos de template jurídico. **Feito no lugar:** selo/brasão customizado (`.hero__seal`, `logo-...mobile.webp`) com anéis orbitais dourados (`ringSpin`) e glow pulsante, tratado como peça heráldica própria da marca, não clipart de banco de imagens. **Prova:** `style.css`, bloco `.hero__seal`/`.hero__seal-ring`/`.hero__seal-glow`.

- ❌ **Clichê evitado:** hero genérico com foto de "advogado de terno apontando para câmera". **Feito no lugar:** hero 100% tipográfico/abstrato (gradientes, orbes, partículas, selo), foto real das sócias reservada para as seções Confiança e Sobre, mais editorial. **Prova:** ausência de `<img>` de pessoa em `#inicio`; retratos só em `.ph-portrait-block` e `.sobre__img-wrapper`.

- ❌ **Clichê evitado:** botão de WhatsApp genérico verde fixo sem contexto. **Feito no lugar:** balão premium com glassmorphism, avatar da sócia, indicador de digitação e timeline de aparição cronometrada (25s + 2.5s + 15s) simulando atendimento real, com modo compliance que desativa badge de urgência falsa. **Prova:** `script.js`, IIFE `initWaPremium`, constantes `DELAY_BALAO=25000`, `DURATION_TYPING=2500`, `DURATION_BALAO_VISIVEL=15000`, flag `MODO_COMPLIANCE=true`.

- ❌ **Clichê evitado:** grid de "6 cards de serviço com ícone genérico" tradicional de landing jurídica. **Feito no lugar:** lista tabular filtrável por área (`.svc-row` grid `80px 1fr 180px 40px`) com numeração serifada itálica e expansão progressiva (6 → 18 itens), tratamento de "índice de sumário" e não de vitrine de ícones. **Prova:** `renderServicos()` em `script.js`, array `SERVICOS` com 18 entradas e `data-area`.

- ❌ **Clichê evitado:** depoimentos em cards estáticos de carrossel genérico com setas grandes. **Feito no lugar:** carrossel com `slidesPerView` responsivo (3/2/1), suporte a swipe touch real (`WebKitCSSMatrix`, threshold 50px) e modo de expansão total em coluna no mobile. **Prova:** `script.js`, lógica de `updateCarousel()`/`createDots()`/touch handlers.

- ❌ **Clichê evitado:** border-radius grande "friendly" em todos os componentes (tendência de SaaS moderno). **Feito no lugar:** `--radius: 2px` quase reto em toda a UI principal, reservando curvas (`24px`/`12px`) só para os dois widgets utilitários (balão WA e cookie banner), separando visualmente "marca" de "ferramenta". **Prova:** `:root { --radius: 2px; }` vs. `.wa-bubble { border-radius:24px 24px 4px 24px }` e `--ck-radius:12px`.

- ❌ **Clichê evitado:** formulário de contato "flat" em card branco comum. **Feito no lugar:** formulário em glassmorphism escuro (`background: rgba(61,10,20,.45); backdrop-filter: blur(16px)`) sobre imagem de fundo, inputs sem borda lateral (só `border-bottom`), reforçando estética de "papel timbrado". **Prova:** `.form` em `style.css`, seção Contato.

- ❌ **Clichê evitado:** cookie banner com biblioteca terceirizada (CookieBot, OneTrust) fora da identidade visual. **Feito no lugar:** módulo próprio (`cookie-banner.css`/`.js`) com paleta reaproveitada da marca (`--ck-accent:#C9A227`), persistência própria em `localStorage` e API pública (`window.CookieBanner`), com 5 categorias reais de consentimento (não só aceitar/rejeitar). **Prova:** `cookie-banner.js`, `CONFIG.storageKey='site_cookie_consent'`, objeto de estado com 5 categorias.

- ❌ **Clichê evitado:** contadores de "anos de experiência" inflacionados/genéricos tipo "+500 clientes atendidos". **Feito no lugar:** apenas 2 métricas honestas e verificáveis — ano de fundação da parceria (2024, `data-plain="1"` sem formatação de milhar) e cobertura geográfica (100% RJ) — refletindo escritório jovem sem fingir décadas de mercado. **Prova:** `#counters` no HTML, `data-count="2024" data-plain="1"`.

- ❌ **Clichê evitado:** mapa do Google cru sem tratamento visual. **Feito no lugar:** iframe com filtro CSS `grayscale(.65) sepia(.12) contrast(1.03)` que só revela cor plena no hover, unificando a paleta bordô/dourado até no componente de terceiros. **Prova:** `.local__bleed-map iframe` em `style.css`.

---

**Arquivos-fonte analisados:**
- `index.html` (1394 linhas)
- `style.css` (2873 linhas)
- `script.js` (748 linhas)
- `cookie-banner.css` (427 linhas)
- `cookie-banner.js` (314 linhas)
</content>
