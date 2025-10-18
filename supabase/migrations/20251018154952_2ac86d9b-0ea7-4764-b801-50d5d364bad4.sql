-- Criar tabela para armazenar mensagens de contato
CREATE TABLE public.contact_messages (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  read BOOLEAN NOT NULL DEFAULT false
);

-- Adicionar índice para ordenação por data
CREATE INDEX idx_contact_messages_created_at ON public.contact_messages(created_at DESC);

-- Habilitar Row Level Security
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

-- Criar enum para roles de usuário
CREATE TYPE public.app_role AS ENUM ('admin', 'user');

-- Criar tabela de perfis
CREATE TABLE public.profiles (
  id UUID NOT NULL PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Criar tabela de roles
CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  role app_role NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(user_id, role)
);

ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Função para verificar se usuário tem role específica
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;

-- Trigger para criar perfil automaticamente quando usuário se registra
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (id, email)
  VALUES (NEW.id, NEW.email);
  RETURN NEW;
END;
$$;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_new_user();

-- Políticas RLS para profiles
CREATE POLICY "Usuários podem ver próprio perfil"
  ON public.profiles
  FOR SELECT
  USING (auth.uid() = id);

-- Políticas RLS para user_roles
CREATE POLICY "Admins podem ver todas as roles"
  ON public.user_roles
  FOR SELECT
  USING (public.has_role(auth.uid(), 'admin'));

-- Políticas RLS para contact_messages
-- Qualquer pessoa pode inserir (mesmo não autenticado)
CREATE POLICY "Qualquer pessoa pode enviar mensagem"
  ON public.contact_messages
  FOR INSERT
  WITH CHECK (true);

-- Apenas admins podem visualizar mensagens
CREATE POLICY "Apenas admins podem ver mensagens"
  ON public.contact_messages
  FOR SELECT
  USING (public.has_role(auth.uid(), 'admin'));

-- Apenas admins podem atualizar mensagens (marcar como lida)
CREATE POLICY "Apenas admins podem atualizar mensagens"
  ON public.contact_messages
  FOR UPDATE
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- Apenas admins podem deletar mensagens
CREATE POLICY "Apenas admins podem deletar mensagens"
  ON public.contact_messages
  FOR DELETE
  USING (public.has_role(auth.uid(), 'admin'));