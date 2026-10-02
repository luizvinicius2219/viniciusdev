# vinicius.dev

Portfólio pessoal de **Luiz Vinícius**, Data Engineer com foco em engenharia e análise de dados, automação, Auditoria Contínua e IA aplicada.

A experiência visual foi inspirada em portfólios de engenharia com estética de terminal e navegação editorial, mas toda a implementação, identidade, conteúdo e componentes deste projeto são próprios.

## Arquitetura

- **Vercel** → frontend Next.js
- **Render** → API FastAPI
- **Supabase** → PostgreSQL para mensagens de contato e futuras áreas dinâmicas
- **GitHub** → versionamento e integração com os deploys

```text
viniciusdev/
├─ app/                 # Next.js App Router
├─ components/          # componentes da interface
├─ data/                # conteúdo estruturado do portfólio
├─ public/              # currículo e assets públicos
├─ backend/             # FastAPI para Render
├─ supabase/            # schema SQL
└─ render.yaml          # Blueprint do Render
```

## 1. Rodar o frontend

```bash
npm install
npm run dev
```

Crie `.env.local` a partir de `.env.example`:

```env
NEXT_PUBLIC_API_URL=http://localhost:8000
```

## 2. Criar o banco no Supabase

Abra o **SQL Editor** do projeto Supabase e execute:

```text
supabase/schema.sql
```

A tabela `contact_messages` utiliza RLS sem políticas públicas. As inserções são feitas apenas pelo backend com a chave `service_role`.

## 3. Rodar o backend

```bash
cd backend
python -m venv .venv
# Windows: .venv\Scripts\activate
# Linux/macOS: source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```

Crie `backend/.env` com:

```env
SUPABASE_URL=https://SEU-PROJETO.supabase.co
SUPABASE_SERVICE_ROLE_KEY=SEU_SERVICE_ROLE_KEY
FRONTEND_ORIGINS=http://localhost:3000
```

## 4. Deploy no Render

O `render.yaml` já define o serviço web.

Configure no Render:

- `SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`
- `FRONTEND_ORIGINS=https://SEU-DOMINIO.vercel.app`

Depois valide:

```text
GET /health
```

## 5. Deploy na Vercel

Importe este repositório na Vercel e adicione:

```env
NEXT_PUBLIC_API_URL=https://SEU-BACKEND.onrender.com
```

O frontend pode ser publicado diretamente a partir da raiz do repositório.

## Conteúdo atual

A V1 já inclui:

- Hero em estética terminal/data engineering
- carreira em formato `git log --career`
- projetos profissionais: SAM, AuditCount/ContaEstoque, Fraude e Auditoria Contínua
- projetos públicos: Fipei e Controle de Frotas
- stack agrupada por domínio
- formação acadêmica
- links GitHub, LinkedIn e YouTube
- currículo em PDF
- formulário de contato integrado Render → Supabase
- layout responsivo

## Próximas evoluções sugeridas

- painel administrativo para editar projetos/stack via Supabase
- área de artigos/cases
- endpoint de atividade pública do GitHub
- analytics próprio e contagem de visitas
- domínio customizado
- Open Graph image própria

## Autor

Luiz Vinícius  
GitHub: https://github.com/luizvinicius2219  
LinkedIn: https://www.linkedin.com/in/devluizvinicius/
