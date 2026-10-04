# V8 — correções focadas antes da página de projetos

Esta versão corrige apenas os pontos combinados antes de evoluir a área de projetos:

- cursor nativo removido no desktop; fica somente o ponto verde com rings/wave;
- carreira volta ao formato bento compacto;
- Magnum exibe `2025 – Atual` dentro do hover do card;
- bio passa a usar o headline profissional completo definido pelo usuário;
- avatar recebe efeito wave/ripple;
- Spotify usa a Spotify IFrame API e tenta `play()` no hover, mantendo o player montado e visível;
- ao sair do card de música, o player recebe `pause()`;
- CTA da reunião fica em português: `Marque uma reunião comigo`;
- footer recebe identidade, navegação, ícones sociais, tecnologias e status do build;
- formação/system journal continuam fora da home;
- a estrutura de páginas de projetos fica para a próxima etapa.

## Observação sobre Spotify

A aplicação chama a API oficial do embed para tocar no `pointerenter`. Navegadores podem bloquear áudio automático antes de qualquer interação do usuário com a página. O player permanece disponível para clique e, após uma interação permitida pelo navegador, o hover pode acionar o playback normalmente.
