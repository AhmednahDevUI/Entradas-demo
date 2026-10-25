 02-permisos.sql · Fase 4 · Quién puede usar cada tabla
 
-- Cerradura 1: GRANT
grant select on public.profiles to authenticated;
grant select on public.eventos to anon, authenticated;
grant select on public.entradas to authenticated;
 
-- Cerradura 2: activar RLS (sin normas, nadie ve ninguna fila)
alter table public.profiles enable row level security;
alter table public.eventos enable row level security;
alter table public.entradas enable row level security;