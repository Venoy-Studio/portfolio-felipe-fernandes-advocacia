# Felipe Fernandes Advocacia - Clone 1:1

Clone fiel e completo do site [felipefernadesadvocacia.com.br](https://felipefernadesadvocacia.com.br/#inicio), preservando 100% da direção visual, tipografia, animações, layout responsivo e imagens em alta definição, com **todos os dados de contato substituídos por dados fictícios**.

---

## 📋 Dados Fictícios Aplicados

| Campo | Dado Original | Dado Fictício Atual |
| :--- | :--- | :--- |
| **Telefone / WhatsApp** | `(89) 99416-9556` | `(89) 99999-0000` |
| **WhatsApp Link (E.164)** | `5589994169556` | `5589999990000` |
| **Registro OAB** | `OAB-PI 16.119` | `OAB-PI 00.000` |
| **CNPJ** | `57.092.854/0001-62` | `00.000.000/0001-91` |
| **Instagram Handle** | `@escritoriofelipefernandesadv` | `@advocaciaexemplo` |
| **Instagram URL** | Perfil real no Instagram | `https://www.instagram.com/advocaciaexemplo/` |
| **Endereço** | `R. Manoel C. Gomes - Raimundo de Sá` | `Av. Exemplo Fictício, 100 - Centro` |
| **CEP** | `64578-000` | `00000-000` |
| **Google Maps** | Localização exata | Busca com endereço fictício |

---

## 🚀 Como Executar Localmente

### Opção 1: Servidor Integrado (Sem dependências externas)
Não precisa de nenhuma instalação extra além do Node.js:

```bash
npm start
# ou
npm run dev
```

O servidor iniciará automaticamente em `http://localhost:3000/` (ou na próxima porta livre caso a 3000 já esteja ocupada).

### Opção 2: Abrir diretamente ou com qualquer servidor estático
Você pode servir a pasta raiz com qualquer servidor de sua preferência:
- `npx serve .`
- Extensão Live Server do VS Code
- Nginx, Apache ou Caddy

---

## ⚙️ Como Alterar ou Personalizar os Dados de Contato

Os dados de contato estão centralizados no arquivo [contacts.config.json](file:///contacts.config.json):

1. Abra e edite o arquivo `contacts.config.json` com os seus dados ou do seu cliente.
2. Execute no terminal:
   ```bash
   npm run update-contacts
   ```
3. Pronto! Os arquivos de produção em `assets/` e `public/assets/` serão atualizados automaticamente.

---

## 📦 Estrutura de Arquivos

```text
├── assets/                  # CSS, JS e imagens originais em alta resolução
│   ├── Felipe.jpg
│   ├── detail.jpg
│   ├── texture.jpg
│   ├── logo-felipe-fernandes.png
│   ├── Fernandes.jpeg
│   ├── sala.jpeg
│   ├── escritorio.jpeg
│   ├── favicon.png
│   ├── index-CooTkZ1r.css
│   └── index-s8_L8jog.js    # Código React com os dados fictícios
├── contacts.config.json     # Configuração central de dados de contato
├── scripts/
│   └── update-contacts.js   # Script para sincronizar dados com o bundle
├── index.html               # Ponto de entrada HTML limpo
├── package.json             # Scripts de execução
├── server.js                # Servidor HTTP local leve e resiliente
└── README.md
```

---

## 🌐 Deploy em Produção

O projeto é 100% estático e pronto para publicação imediata:
- **Vercel / Netlify**: Basta conectar o repositório ou arrastar a pasta do projeto.
- **Cloudflare Pages / GitHub Pages**: Configurar a raiz como diretório de publicação.
