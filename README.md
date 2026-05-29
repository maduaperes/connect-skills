# ConnectSkills

O ConnectSkills é um aplicativo mobile desenvolvido para conectar pessoas através de habilidades, competências e networking profissional.  
A plataforma permite que usuários criem contas, realizem login e compartilhem suas skills de forma prática e intuitiva.

---

# Objetivo

O projeto tem como objetivo incentivar conexões profissionais e colaboração entre usuários, permitindo:

- Compartilhar habilidades;
- Criar networking;
- Divulgar competências profissionais;
- Facilitar conexões entre pessoas com interesses em comum.

---

# Tecnologias Utilizadas

- React Native
- Expo Router
- TypeScript
- Supabase
- Context API
- Expo
- ESLint

---

# Funcionalidades

## Autenticação
- Cadastro de usuários;
- Login;
- Gerenciamento de autenticação com Context API;
- Integração com Supabase.

## Skills
- Cadastro de habilidades;
- Exibição de competências;
- Organização de informações dos usuários.

## Navegação
- Navegação por abas;
- Rotas protegidas;
- Estrutura modular utilizando Expo Router.

## Interface
- Layout responsivo;
- Componentização;
- Organização por telas e estilos separados.

---

# Estrutura do Projeto

```bash
connect-skills/
│
├── src/
│   ├── app/
│   │   ├── (auth)/
│   │   │   ├── login.tsx
│   │   │   ├── register.tsx
│   │   │   └── skills.tsx
│   │   │
│   │   ├── (tabs)/
│   │   │   ├── index.tsx
│   │   │   └── _layout.tsx
│   │   │
│   │   ├── components/
│   │   ├── home/
│   │   ├── login/
│   │   ├── register/
│   │   └── skills/
│   │
│   ├── constants/
│   ├── contexts/
│   │   └── authContext.tsx
│   │
│   ├── lib/
│   │   └── supabase.ts
│   │
│   └── assets/
│       └── images/
│
├── app.json
├── global.d.ts
├── eslint.config.js
└── README.md
````

---

# Como Executar o Projeto

## Pré-requisitos

* Node.js instalado;
* Expo CLI;
* Conta no Supabase.

---

## Instalação

Clone o repositório:

```bash
git clone https://github.com/seu-usuario/connect-skills.git
```

Acesse a pasta do projeto:

```bash
cd connect-skills
```

Instale as dependências:

```bash
npm install
```

Execute o projeto:

```bash
npx expo start
```

---

# Configuração do Supabase

Crie um arquivo `.env` para armazenar as credenciais do Supabase:

```env
EXPO_PUBLIC_SUPABASE_URL=sua_url
EXPO_PUBLIC_SUPABASE_ANON_KEY=sua_chave
```

---

# Melhorias Futuras

* Perfil completo de usuário;
* Upload de foto;
* Sistema de mensagens;
* Feed de publicações;
* Pesquisa de usuários;
* Sistema de conexões;
* Dark mode;
* Notificações em tempo real.

---

# Autor

Projeto desenvolvido para fins acadêmicos e aprendizado em desenvolvimento mobile.

---

# Licença

Este projeto está disponível para estudos e fins educacionais.
