# Implementação V5 — Portfolio Luiz Vinícius

Versão focada em profundidade visual, microinterações e estrutura profissional, inspirada na experiência de navegação do site de referência, com identidade e conteúdo próprios.

## Principais mudanças

- Paleta refeita para preto/grafite com verde terminal como cor de destaque.
- Alternância entre tom Obsidian e Graphite, sem tema claro.
- Cursor customizado em formato de seta, label contextual, dois anéis com atraso e ondas ao clicar.
- Efeito magnético em CTAs, links e cards relevantes.
- Hero mais sóbrio e menos genérico, com texto alinhado ao currículo.
- Mascote utilizado uma única vez como asset principal de identidade.
- Experiência profissional transformada em console `git log --career` interativo.
- Experiências, métricas e entregas clicáveis com nós e painel de profundidade.
- Stack reestruturada em seis camadas: Data Engineering, Backend & APIs, Automation, Analytics & BI, Cloud & Delivery e Web & AI.
- Carrossel contínuo de tecnologias; hover pausa o movimento e destaca a camada correspondente.
- Pilha 3D interativa para representar as camadas do produto.
- Spotify em card de vinil animado, com player oficial incorporado para tocar a música sem sair do site.
- Card de reunião com agenda visual animada e link para Cal.com.
- Mapa de Recife incorporado e estilizado.
- GitHub Activity com consulta pública ao número de repositórios do perfil e grade visual animada.
- Frase pessoal em painel animado com grid técnico.
- Fotos movidas integralmente para o final da página em seção `Beyond Work`.
- Galeria com cortes menores, hover, lightbox, navegação por teclado e setas.
- Layout responsivo e `prefers-reduced-motion` respeitado.

## Conteúdo profissional usado

A V5 usa os dados do currículo para construir a experiência, incluindo Magnum Tires, Grupo Parvi, SAM, AuditCount/ContaEstoque, Fraude, Auditoria Contínua, pipelines, 20+ automações, 120+ concessionárias e as principais tecnologias informadas.

## Música

O player oficial do Spotify fica dentro do site. Por restrições de autoplay dos navegadores e do próprio Spotify, o hover anima o disco e prepara o player, enquanto a reprodução é iniciada pelo usuário no player incorporado.

## Arquivos principais alterados

- `app/globals.css`
- `app/page.tsx`
- `app/layout.tsx`
- `data/portfolio.ts`
- `components/BentoDashboard.tsx`
- `components/ExperienceSystem.tsx`
- `components/StackSystem.tsx`
- `components/VinylPlayer.tsx`
- `components/PersonalGallery.tsx`
- `components/InteractionLayer.tsx`
- `components/Nav.tsx`
- `components/Icon.tsx`

## Validação local

```powershell
cd C:\viniciusdev
Remove-Item -Recurse -Force .next -ErrorAction SilentlyContinue
npm install
npm run dev
```

Abrir `http://localhost:3000` e usar `Ctrl + Shift + R` se o navegador ainda mantiver CSS antigo em cache.
