# V6 — refinamento visual e interação

Esta versão consolida o direcionamento final antes do deploy:

- cursor nativo oculto em desktop, mantendo apenas o cursor customizado e wave;
- favicon próprio `LV`;
- menu com hover/pill animada e preview dos projetos;
- card `git log --career` com experiências de 2023, 2024 e 2025, anos, ícones e descrição dinâmica;
- preview de projetos com expansão por hover e descrição/impacto;
- `TECH SYSTEM` reposicionado logo após carreira/projetos, mantendo camadas 3D e carrosséis de stack;
- mapa substituído por um globo estilizado com node de Recife, órbitas, ping e horário local;
- Spotify estabilizado: vinil anima no hover, waveform e player oficial sempre acessível dentro do card;
- reunião/Cal.com com CTA mais forte;
- citação com samurai pixel-art original e animação CSS (respiração, partículas e slash);
- cards de projetos completos com scan/hover;
- fotos pessoais continuam no final (`Beyond Work`).

## Observação sobre Spotify

Browsers e o embed oficial do Spotify podem bloquear autoplay sem clique/gesto explícito. A V6 mantém o player sempre visível e funcional e usa o hover para animar o vinil, sem fazer o embed desaparecer.

## Ordem principal

1. Hero
2. Career + Projects preview
3. TECH SYSTEM
4. Work Experience detalhada
5. Selected Work
6. Signals (redes, localização, música, reunião, GitHub, samurai)
7. Journal/Formação
8. Contato
9. Beyond Work

## Instalação local

Extraia `viniciusdev_work` sobre `C:\viniciusdev`, preserve `.git`, apague `.next` e execute `npm run dev`.
