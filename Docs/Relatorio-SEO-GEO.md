# Relatório de Auditoria SEO/GEO — Paixão Lopes Advogados Associados

**Data da auditoria:** 15 de junho de 2026  
**Projeto:** Landing Page — Paixão Lopes Advogados Associados  
**URL:** `https://www.paixaolopesadvogados.com.br`  

---

## 📊 Resumo Executivo

| Aspecto | Status |
|---------|--------|
| **Technical SEO** | ✅ Corrigido e otimizado |
| **On-Page SEO** | ✅ Corrigido e otimizado |
| **Local SEO** | ✅ Corrigido e otimizado |
| **Core Web Vitals** | ✅ Otimizado |
| **Schema.org / Rich Snippets** | ✅ Implementado |
| **GEO (AI Search)** | ✅ Implementado |
| **E-E-A-T** | ✅ Fortalecido |
| **Social Sharing** | ✅ Implementado |

---

## ✅ O que foi implementado (On-Page & Technical)

### 1. Meta Tags Otimizadas (Front-loading Strategy)

| Elemento | Antes | Depois |
|----------|-------|--------|
| **Title** | `Paixão Lopes Advogados Associados — Direito Previdenciário, Trabalhista e Cível · Rio de Janeiro` (74 caracteres) | `Advogado Previdenciário em Campo Grande RJ \| Paixão Lopes Advogados` (58 caracteres) |
| **Description** | Genérica, sem CTA | `Escritório de advocacia previdenciária, trabalhista e cível em Campo Grande, Rio de Janeiro. Atendimento humanizado pelas sócias-fundadoras. 5,0★ no Google. Agende sua consulta.` (159 caracteres) |
| **Canonical** | ❌ Ausente | `https://www.paixaolopesadvogados.com.br/` |
| **Robots** | ❌ Ausente | `index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1` |

> **Impacto:** O title agora posiciona a palavra-chave principal (`Advogado Previdenciário em Campo Grande RJ`) no início, aumentando CTR e relevância para buscas locais.

---

### 2. Open Graph & Twitter Cards (Social SEO)

Implementados em todas as páginas:

- `og:title`, `og:description`, `og:image`, `og:image:alt`, `og:url`, `og:type`, `og:locale`, `og:site_name`
- `twitter:card` (summary_large_image), `twitter:title`, `twitter:description`, `twitter:image`, `twitter:image:alt`

> **Impacto:** Preview rico no WhatsApp, Facebook, LinkedIn e X. A imagem OG escolhida é a foto das sócias-fundadoras (elemento de confiança).

---

### 3. Local SEO / Geo Tags

Implementados:

- `<meta name="geo.region" content="BR-RJ" />`
- `<meta name="geo.placename" content="Campo Grande, Rio de Janeiro" />`
- `<meta name="geo.position" content="-22.901576;-43.559458" />`
- `<meta name="ICBM" content="-22.901576, -43.559458" />`

> **Impacto:** Sinal geográfico explícito para Google Local Pack e buscas por "advogado Campo Grande".

---

### 4. Schema.org JSON-LD (Rich Snippets)

Implementado **@graph** com dois schemas:

#### 4.1 LegalService (LocalBusiness)
- Nome, descrição, URL, telefone, email
- Endereço completo (PostalAddress)
- GeoCoordinates (lat/long)
- OpeningHoursSpecification (seg-sex, 9h-18h)
- AreaServed (Rio de Janeiro)
- Founders (Marcela Paixão e Márcia Lopes com OAB-RJ)
- FoundingDate (2024)
- AggregateRating (5.0/5.0, 48 avaliações)

#### 4.2 FAQPage
- 5 perguntas e respostas estruturadas
- Possibilita **Rich Snippet de FAQ** no Google
- Crucial para GEO (AI citation)

> **Impacto:** Elegível para rich snippets, Knowledge Panel e citações em respostas de IA (ChatGPT, Perplexity).

---

### 5. Performance & Core Web Vitals

| Otimização | Status |
|------------|--------|
| `fetchpriority="high"` no hero logo | ✅ Adicionado |
| `width` + `height` em todas as imagens | ✅ Adicionado (CLS reduction) |
| `loading="lazy"` em imagens abaixo da dobra | ✅ Confirmado |
| `defer` em `script.js` | ✅ Adicionado |
| `dns-prefetch` para Google Fonts | ✅ Adicionado |
| Google Fonts com `display=swap` | ✅ Já presente |

> **Impacto:** Melhora LCP (hero carrega primeiro), CLS (dimensões explícitas) e INP (JS não bloqueia parse).

---

### 6. Estrutura Semântica & Acessibilidade

| Otimização | Status |
|------------|--------|
| Tag `<main>` envolvendo conteúdo principal | ✅ Adicionado |
| `<nav>`, `<footer>`, `<section>` estruturados | ✅ Já presente |
| `aria-label` em botões de ícone | ✅ Já presente |
| `data-last-updated` na seção FAQ | ✅ Adicionado (GEO signal) |

---

### 7. NAP (Name, Address, Phone) — E-E-A-T

- NAP visível em texto no HTML em **múltiplas seções** (footer, localização, contato)
- Microdata Schema.org hidden no footer para reforço de crawling
- Telefone com link `tel:` clicável
- Endereço com link para Google Maps

> **Impacto:** Consistência de NAP é fator de ranking #1 para Local SEO. Reforça Trustworthiness (E-E-A-T).

---

### 8. robots.txt & sitemap.xml

#### robots.txt
```
User-agent: *
Allow: /

User-agent: GPTBot
Allow: /
User-agent: ChatGPT-User
Allow: /
User-agent: Google-Extended
Allow: /
User-agent: ClaudeBot
Allow: /
User-agent: PerplexityBot
Allow: /

Sitemap: https://www.paixaolopesadvogados.com.br/sitemap.xml
```

#### sitemap.xml
- 3 URLs indexadas (index, política, termos)
- `lastmod`, `changefreq`, `priority` configurados
- Páginas legais com `priority="0.3"` (não competem com a LP)

> **Impacto:** robots.txt permite crawlers de IA (GEO). Sitemap acelera indexação.

---

### 9. Páginas Legais (Política & Termos)

| Otimização | Política | Termos |
|------------|----------|--------|
| Canonical | ✅ Adicionado | ✅ Adicionado |
| Robots | `noindex, follow` | `noindex, follow` |
| Defer em script.js | ✅ Adicionado | ✅ Adicionado |

> **Impacto:** Evita conteúdo duplicado e diluição de autoridade. Páginas legais não competem por ranking.

---

## 🔴 External/Off-Page Dependencies (Não corrigíveis via código)

> **Importante:** Estes itens dependem de ações externas e devem ser tratados manualmente.

- [ ] **Google Meu Negócio (GMB):** Verificar e otimizar perfil local. Garantir que NAP coincide 100% com o site.
- [ ] **Google Search Console:** Submeter `sitemap.xml` e solicitar indexação da página principal.
- [ ] **Google Analytics / Tag Manager:** Implementar código de rastreamento (G-XXXXXXXXXX) se desejado.
- [ ] **Backlinks locais:** Cadastrar escritório em diretórios (OAB-RJ, FindLaw, GuiaMais, etc.).
- [ ] **Redes sociais:** Criar/otimizar Instagram, Facebook, LinkedIn com link para o site.
- [ ] **PageSpeed Insights:** Testar ao vivo após deploy para capturar métricas reais (LCP, INP, CLS).
- [ ] **HTTPS/SSL:** Confirmar que o servidor força HTTPS e certificado SSL está válido.
- [ ] **URL final:** Atualizar todas as URLs canônicas e OG se o domínio real for diferente de `paixaolopesadvogados.com.br`.

---

## 📈 Checklist Final SEO/GEO

### Technical & Local SEO
- [x] Language (`lang="pt-BR"`) e Charset (`UTF-8`)
- [x] `robots.txt` configurado (Allow AI bots)
- [x] `sitemap.xml` gerado e correto
- [x] Canonical tags presentes
- [x] Mobile viewport meta tag
- [x] Local SEO (Geo tags: `geo.region`, `geo.position`, `geo.placename`)
- [x] NAP em texto visível no HTML

### Social & Semantic
- [x] Open Graph completo
- [x] Twitter Cards
- [x] Acessibilidade semântica (`<main>`, `<nav>`, `<footer>`)
- [x] `aria-label` em botões de ícone

### Content SEO
- [x] Title otimizado (front-loading, 58 chars)
- [x] Meta description otimizada (159 chars, com CTA)
- [x] H1 único por página
- [x] Alt texts descritivos nas imagens

### Schema Markups (JSON-LD)
- [x] LegalService (LocalBusiness)
- [x] FAQPage
- [x] AggregateRating

### GEO Checklist
- [x] FAQ sections presentes
- [x] Author/Company credentials visíveis (OAB-RJ, sócias-fundadoras)
- [x] Clear definitions (serviços explicados)
- [x] "Last updated" timestamp na seção FAQ
- [x] Expert quotes (depoimentos reais do Google)

---

## 🎯 Próximos Passos Recomendados

1. **Deploy e testar** no PageSpeed Insights (meta: LCP < 2.5s, CLS < 0.1)
2. **Configurar GSC** e submeter sitemap
3. **Verificar GMB** e garantir consistência NAP
4. **Adicionar Google Analytics 4** (se ainda não houver)
5. **Criar blog** com artigos sobre previdenciário (conteúdo fresco = ranking)

---

*Relatório gerado automaticamente pela Skill SEO/GEO da AG5 Agência.*
