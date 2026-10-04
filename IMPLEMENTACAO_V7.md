# Implementação V7

A V7 reorganiza a home para uma lógica bento compacta, reduz duplicações e aproxima a navegação da referência visual definida pelo usuário.

## Alterações principais

- Home simplificada para: Hero -> Carreira/Projetos -> Tech System -> Localização/Spotify -> Agenda/GitHub -> Samurai/Contato -> Beyond Work.
- Removidos da home os blocos longos de System Journal, Formação, experiência detalhada duplicada, projetos completos duplicados e formulário extenso.
- Carreira atualizada para:
  - 2023–2024 · Grupo Parvi · Data Analyst Intern
  - 2024–2025 · Grupo Parvi · Data Engineer
  - 2025–Atual · Magnum Tires · Data Engineer Pleno
- Projetos agora possuem preview interativo com descrição, impacto e tags no próprio card.
- Tech System permanece imediatamente abaixo de carreira/projetos.
- Spotify refeito sem state de hover no React; iframe fica sempre montado e visível para evitar desaparecimento ao cruzar o mouse para dentro do player.
- Localização permanece como globo escuro com ponto de Recife, label e relógio local.
- ORCID foi removido como card principal e mantido em links sociais/footer.
- Contato reduzido a card compacto para manter o ritmo do dashboard.
- Beyond Work permanece no final da página.
