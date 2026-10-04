# V10 — correções de layout e atividade GitHub corporativa

- Corrigido o rodapé em todas as rotas sem alterar o conteúdo visual existente.
- Botão de retorno da página `/projects` simplificado para um controle circular apenas com chevron.
- Avatar recebeu interação Wave real: o ripple acompanha o ponteiro dentro da imagem e o rótulo `Wave` fica no canto.
- Card de atividade GitHub passa a usar um snapshot real da conta corporativa `Auditoria-MGM` obtido pela conexão GitHub do ChatGPT.
- O heatmap usa somente datas e contagens agregadas de commits; mensagens e conteúdo dos repositórios privados não são publicados.
- Snapshot: 663 commits únicos indexados nos repositórios acessíveis; 538+ no recorte de aproximadamente 12 meses; 9 repositórios acessíveis.
- Para atividade ao vivo após deploy será necessário, numa etapa posterior, um backend/credencial de leitura segura; a V10 não expõe token no frontend.
