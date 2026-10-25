-- 03-perfiles.sql · Fase 4 · Crear el perfil al registrarse (nombre obligatorio)

create or replace function public.crear_perfil()
returns trigger
language plpgsql
security definer set search_path = ''
as $$
declare
  v_nombre text := trim(coalesce(new.raw_user_meta_data ->> 'nombre', ''));
begin
  if v_nombre = '' then
    raise exception 'El nombre es obligatorio';
  end if;

  insert into public.profiles (id, nombre, rol)
  values (new.id, v_nombre, 'cliente');
  return new;
end;
$$;

drop trigger if exists al_crear_usuario on auth.users;

create trigger al_crear_usuario
  after insert on auth.users
  for each row execute function public.crear_perfil();

-- Segunda protección: la tabla tampoco admite nombres vacíos
alter table public.profiles
  drop constraint if exists profiles_nombre_no_vacio;

alter table public.profiles
  add constraint profiles_nombre_no_vacio check (length(trim(nombre)) > 0);