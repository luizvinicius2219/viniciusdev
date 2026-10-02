-- Execute no SQL Editor do Supabase.

create extension if not exists pgcrypto;

create table if not exists public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(name) between 2 and 120),
  email text not null,
  subject text not null check (char_length(subject) between 3 and 180),
  message text not null check (char_length(message) between 10 and 4000),
  status text not null default 'new' check (status in ('new', 'read', 'replied', 'archived')),
  created_at timestamptz not null default now()
);

alter table public.contact_messages enable row level security;

-- Não existe policy para anon/authenticated de propósito.
-- O formulário grava somente via backend Render usando a SERVICE_ROLE_KEY.

create index if not exists contact_messages_created_at_idx
  on public.contact_messages (created_at desc);

create index if not exists contact_messages_status_idx
  on public.contact_messages (status);
