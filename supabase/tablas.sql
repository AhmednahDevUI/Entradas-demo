-- 01-tablas.sql · Fase 4 · Crea las tablas del proyecto
 
create table public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  nombre text not null default '',
  rol text not null default 'cliente'
    check (rol in ('cliente', 'admin', 'portero'))
);


 -- 02-eventos.sql · Fase 4 · Crea la tabla de eventos
create table public.eventos (
  id uuid primary key default gen_random_uuid(),
  titulo text not null,
  descripcion text not null default '',
  lugar text not null,
  fecha_inicio timestamptz not null,
  precio_cents integer not null check (precio_cents >= 0),
  aforo integer not null check (aforo > 0),
  publicado boolean not null default false,
  creado_en timestamptz not null default now()
);
 
 -- 03 entradas.sql · Fase 4 · Crea la tabla de entradas
create table public.entradas (
    id uuid primary key default gen_random_uuid(),
    evento_id uuid not null references public.eventos (id),
    usuario_id uuid not null references public.profiles (id) on delete cascade,
    codigo text not null unique,
    estado text not null default 'valida'
        check (estado in ('valida', 'usada', 'cancelada')),
    precio_pagado_cents integer not null check (precio_pagado_cents >= 0),
    usada_en timestamptz,
    creado_en timestamptz not null default now()
);