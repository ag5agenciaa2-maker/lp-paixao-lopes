# README de Estrutura — Paixão Lopes Advogados Associados

> Leia este arquivo ANTES de criar ou editar qualquer página `.html` deste projeto.
> Ele existe para evitar os erros recorrentes já vistos aqui: footer sem estilo (classes
> erradas), nav sem efeito de scroll, página sem cookie/drawer, WhatsApp widget ausente.

---

## 1. Mapa de páginas

| Arquivo | Pasta | Profundidade (`{{BASE}}`) | Observação |
|---|---|---|---|
| `index.html` | raiz | `` (vazio) | Página principal — fonte de verdade do nav/footer |
| `nossa-historia.html` | raiz | `` (vazio) | Nav mostra "Nossa História" como item ativo |
| `politica-de-privacidade.html` | raiz | `` (vazio) | `noindex, follow` |
| `termos-e-condicoes.html` | raiz | `` (vazio) | `noindex, follow` |

Todas as páginas atuais estão na raiz do projeto — nenhuma em subpasta ainda. Se uma página
nova for criada em subpasta (ex: `blog/post.html`), `{{BASE}}` = `../`.

---

## 2. Template canônico

Ponto de partida obrigatório para qualquer página nova (ou ao sincronizar uma existente):

**`docs/_nav-footer-template.html`**

Contém: nav + drawer mobile + footer + banner de cookies LGPD + modal de preferências +
widget WhatsApp + scripts finais, todos com o placeholder `{{BASE}}` marcando caminhos
relativos. Substitua `{{BASE}}` por `""` (raiz) ou `"../"` (subpasta) ao colar.

Também contém `{{WA_CONTEXT_MESSAGE}}` — customize a mensagem pré-preenchida do link do
WhatsApp para refletir o contexto da página (ex.: "...sobre a política de privacidade").

---

## 3. Regra de profundidade de caminho

| Elemento | Raiz (`{{BASE}}=""`) | Subpasta (`{{BASE}}="../"`) |
|---|---|---|
| Logo/imagens | `assets/logo-....webp` | `../assets/logo-....webp` |
| CSS principal | `style.css` | `../style.css` |
| Cookie CSS | `cookie-banner.css` | `../cookie-banner.css` |
| Script principal | `script.js` | `../script.js` |
| Cookie JS | `cookie-banner.js` | `../cookie-banner.js` |
| Link para home | `index.html#secao` | `../index.html#secao` |
| Link para páginas legais | `politica-de-privacidade.html` | `../politica-de-privacidade.html` |

---

## 4. Itens obrigatórios em TODA página

1. **Nav idêntico** ao `index.html`, envolvido em `<div class="nav-wrapper" id="navWrapper">`
   — sem esse wrapper, o efeito de scroll (`.scrolled`, mudança de cor/padding) não funciona,
   porque `script.js` busca `#navWrapper` especificamente (ver `script.js:479`).
2. **Footer idêntico**, com as classes exatas: `.foot__top`, `.foot__about`, `.foot__col`
   (×3: Navegação, Serviços, Contato), `.foot__contact`, `.foot__divider`, `.foot__bottom`,
   `.foot__bottom-left`, `.foot__copy`, `.foot__legal-links`, `.foot__bottom-right`.
   **Nunca usar `.foot__credits` / `.foot__legal`** — essas classes não existem em
   `style.css` e deixam o rodapé sem estilo (bug real já corrigido em 3 páginas, 2026-08-12).
3. **Drawer mobile** completo (`#drawerOverlay`, `#drawer`, `.drawer__nav` com os mesmos
   links do nav desktop).
4. **Banner de cookie LGPD + modal de preferências** completos (`#ck-banner`, `#ck-modal`,
   as 5 categorias: Necessário, Funcional, Analítico, Desempenho, Publicidade).
5. **Widget WhatsApp** (`.wa-premium-container`, `#wa-main-btn`, `#wa-message-bubble`).
   Ver armadilha #2 abaixo — sem isso a página fica sem o botão flutuante de contato.
6. **Scripts na ordem certa**: `cookie-banner.js` **antes** de `script.js`, ambos com `defer`,
   no fim do `<body>`.
7. **Meta tags obrigatórias**: `charset`, `viewport`, `canonical`, `favicon`
   (`assets/favicon-paixao-lopes-advogados.ico`).

---

## 5. Armadilhas conhecidas deste projeto

1. **Footer com classes erradas mata o estilo.** `nossa-historia.html`,
   `politica-de-privacidade.html` e `termos-e-condicoes.html` foram criadas com
   `.foot__credits` / `.foot__legal` em vez de `.foot__bottom` / `.foot__bottom-left` /
   `.foot__legal-links` — essas classes não existem em `style.css`, então o rodapé renderizava
   sem nenhum estilo (texto cru, sem cor de fundo, sem grid). Corrigido em 2026-08-12.
   **Sempre confira contra o template**, não copie de uma página secundária existente sem
   validar antes.

2. **Widget WhatsApp depende de `#servicos` existir na página.** O script
   `initWaPremium()` em `script.js` usa um `IntersectionObserver` sobre
   `document.getElementById('servicos')` para revelar o botão flutuante só quando o
   usuário rola até a seção de serviços — comportamento pensado para a home. Páginas
   secundárias (Nossa História, Termos, Política) **não têm** essa seção, então sem o
   fallback abaixo o botão nunca aparecia (ficava com `visibility: hidden` para sempre).
   `script.js` já tem a correção:
   ```js
   if (!targetSection) { mainBtn.classList.add('visible'); }
   ...
   if (targetSection) observer.observe(targetSection);
   ```
   Se reescrever `initWaPremium()`, preserve esse fallback.

3. **Nav sem `.nav-wrapper#navWrapper` perde o efeito de scroll.** Páginas legais antigas
   usavam `<header class="nav scrolled" id="nav">` direto no body, sem o wrapper — o JS
   nunca conseguia alternar a classe `.scrolled` dinamicamente (`script.js:489`). Mesmo com
   `class="nav scrolled"` fixo no HTML, isso trava o header no estado "scrolled" o tempo
   todo (não é bug visual grave, mas perde a transição). Sempre envolver no wrapper.

4. **`ERR_CONNECTION_RESET` em testes locais não é bug do site.** O servidor `npx serve`
   usado para QA local é instável com múltiplas conexões simultâneas do Chromium/Playwright
   — imagens ou CSS podem falhar aleatoriamente em um teste e carregar normalmente no
   seguinte. Antes de reportar uma imagem/CSS "quebrado", rode o teste 2x.

5. **Imagens apagadas do disco mas presentes no git.** Algumas imagens `.webp` já
   desapareceram do diretório de trabalho sem commit de remoção (ex.:
   `paixao-lopes-advogadas-socias-escritorio.webp`). Se uma imagem referenciada no HTML
   der 404, rodar `git status` — se aparecer como deletada (`D`), restaurar com
   `git checkout -- <caminho>` antes de qualquer outra ação.

6. **Carrossel `.hh-carousel` (Nossa História) com `will-change` permanente pode falhar
   no primeiro paint.** O slide `.is-active` deve nascer com `transform: none` já resolvido
   (não depender da transição CSS rodar para chegar lá), e `will-change` só deve ser
   aplicado durante a troca ativa de slide (classe `.is-animating`, controlada por JS).
   Ver CSS/JS de `nossa-historia.html` como referência se replicar esse componente.

---

## 6. Como verificar depois de editar nav/footer

1. Abrir a página no navegador (ou servidor local) e conferir:
   - Header aparece corretamente, com efeito de scroll ao rolar (desktop).
   - Footer com 4 colunas, cores e ícones corretos (não texto cru sem estilo).
   - Hamburger mobile abre/fecha o drawer com animação.
   - Links do nav/drawer/footer apontam para o lugar certo, considerando `{{BASE}}`.
   - Banner de cookies aparece na primeira visita; botão "Cookies" no rodapé reabre o modal.
   - Botão flutuante do WhatsApp está visível (imediatamente, se a página não tiver
     `#servicos`; após rolar até `#servicos`, se for a home).
2. Checar console do navegador: nenhum 404 em CSS/JS/imagens.
3. Se algo estiver sem estilo, comparar as classes usadas contra `style.css` — não assumir
   que uma classe existe só porque "parece" com o padrão do resto do projeto.

---

> Template = o código pra colar (`_nav-footer-template.html`).
> Este README = as regras pra não errar de novo.
> Nenhum dos dois é publicado (pasta `docs/` é bloqueada pelo `robots.txt`).
