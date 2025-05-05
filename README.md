# Auri Chatbot 🤖💬 (Versão Simplificada)

Auri é uma interface de chatbot experimental, focada em privacidade, que roda inteiramente no navegador do usuário. Ele utiliza `LocalStorage` para salvar conversas e configurações localmente e agora se conecta à API externa do OpenRouter de forma mais segura através de um **backend proxy implementado com Netlify Functions** para acessar modelos de linguagem grandes (LLMs).

**Nota:** Esta versão teve as funcionalidades de anexo de imagem e pesquisa web removidas temporariamente devido a limitações técnicas (prováveis timeouts) com a plataforma de funções serverless gratuita.

## ✨ Recursos (Atuais)

*   **Foco em Privacidade:** Sem necessidade de cadastro, todos os dados (chats, configurações) são armazenados localmente no navegador.
*   **Comunicação Segura com API:** Utiliza um proxy backend (Netlify Function) para proteger a chave da API externa (OpenRouter).
*   **Interface Limpa:** Design simples e responsivo para desktop e mobile.
*   **Conexão com LLMs:** Interage com modelos de IA via OpenRouter (através do proxy Netlify).
*   **Customização:**
    *   Temas Claro e Escuro.
    *   Cores de Destaque personalizáveis.
    *   Instruções Personalizadas (Prompt de Sistema) para guiar o comportamento da IA.
    *   Nome de Usuário opcional para personalização das respostas.
    *   Seleção de Idioma de Resposta da IA.
*   **Gerenciamento de Chats:** Crie, renomeie e exclua conversas.
*   **Gerenciamento de Mensagens:** Copie o texto das mensagens ou regenere a última resposta da IA.
*   **Renderização Markdown:** Exibe respostas formatadas (listas, código, negrito, etc.).
*   **Limite de Uso Diário:** Implementa um limite simples de mensagens diárias (configurado para 10).
*   **Controle de Geração:** Botão para interromper a geração de respostas longas.
*   **Termos de Uso e Política de Privacidade:** Modais informativos acessíveis na interface.

## 💻 Tecnologias Utilizadas

*   **Frontend:** HTML5, CSS3 (com Variáveis CSS para theming), JavaScript (Vanilla JS)
*   **Backend Proxy:** Netlify Functions (Node.js com `node-fetch`)
*   **Armazenamento:** Browser `LocalStorage`
*   **API de IA:** OpenRouter (via proxy Netlify)
*   **Modelo Padrão:** `google/gemma-3-27b-it:free` via OpenRouter

## 🚀 Como Usar (Implantação no Netlify)

Para que o proxy funcione corretamente e sua chave de API fique segura, a maneira recomendada de usar o Auri é implantá-lo no Netlify:

1.  **Fork ou Clone:** Faça um fork ou clone deste repositório no seu GitHub.
2.  **Conecte ao Netlify:**
    *   Acesse sua conta Netlify (crie uma, se necessário).
    *   Clique em "Add new site" -> "Import an existing project".
    *   Conecte ao seu provedor Git (GitHub) e selecione o repositório do Auri.
3.  **Configure o Build (Geralmente Automático):**
    *   O Netlify deve detectar o arquivo `netlify.toml`. As configurações de build e functions devem ser preenchidas automaticamente (`publish = "."`, `functions = "netlify/functions"`). Se não, ajuste-as manualmente.
    *   O comando de build pode ficar vazio ou ser `#`.
4.  **Defina a Chave de API (Variável de Ambiente):**
    *   Vá para as configurações do seu site no Netlify: **Site configuration** -> **Build & deploy** -> **Environment** -> **Environment variables**.
    *   Clique em "Add a variable" (ou "Edit variables").
    *   Crie uma variável com:
        *   **Key:** `OPENROUTER_API_KEY`
        *   **Value:** Cole aqui a **sua chave de API secreta** do OpenRouter.
        *   **Scopes:** Selecione "Builds and Functions/Runtime" ou "All scopes".
        *   *(Recomendado)* Marque a opção para indicar que contém um valor secreto.
    *   Salve a variável.
5.  **Deploy:** Clique em "Deploy site" (ou acione um deploy manualmente). O Netlify construirá o site e implantará a função proxy.
6.  **Acesse:** Use a URL fornecida pelo Netlify (ex: `https://astonishing-alpaca-9b0654.netlify.app`) para acessar o Auri.

## ⚙️ Configuração

A maioria das configurações pode ser ajustada diretamente na interface através do botão "⚙️ Configurações".

**Configurações no Código (`index.html`):**

*   **Modelo de IA:** Altere a constante `MODEL_ID` para usar outro modelo disponível no OpenRouter (o proxy encaminhará).
*   **Limite Diário:** Altere a constante `MAX_DAILY_MESSAGES`.

**Configurações do Backend/Deploy:**

*   `netlify.toml`: Define o diretório de publicação, o diretório das funções e regras de redirecionamento (importante para o POST na função) para o Netlify.
*   `package.json`: Lista as dependências necessárias para a Netlify Function (`node-fetch`).
*   `netlify/functions/openrouter-proxy.js`: Contém a lógica do proxy que adiciona a chave de API (lida da variável de ambiente) e encaminha a requisição para o OpenRouter. A URL permitida no CORS (`Access-Control-Allow-Origin`) deve ser ajustada para a sua URL Netlify.

**Chave de API (OpenRouter):**

*   **NÃO É CONFIGURADA NO `index.html`!**
*   Deve ser configurada **exclusivamente** como uma **variável de ambiente** `OPENROUTER_API_KEY` nas configurações do seu site no Netlify (veja "Como Usar").

## ⚠️ Importante / Avisos

*   **PROJETO EXPERIMENTAL:** Auri é um projeto pessoal, não comercial, fornecido "COMO ESTÁ". Pode conter bugs, instabilidades ou ser descontinuado.
*   **DADOS LOCAIS:** Todo o histórico e configurações são salvos **APENAS** no `LocalStorage` do seu navegador. Se você limpar os dados do navegador ou usar a opção "Limpar Todos os Dados Locais", **TUDO SERÁ PERDIDO IRREVERSIVELMENTE**.
*   **SEGURANÇA DA CHAVE VIA PROXY:** A chave da API do OpenRouter **NÃO ESTÁ EXPOSTA** no código frontend. Ela é gerenciada pelo backend proxy (Netlify Function) e lida a partir das variáveis de ambiente seguras do Netlify. A segurança depende de manter sua variável de ambiente `OPENROUTER_API_KEY` segura no Netlify e da plataforma Netlify.
*   **DEPENDÊNCIA DE SERVIÇOS EXTERNOS:** O funcionamento depende da disponibilidade e políticas da API do OpenRouter **E** da plataforma Netlify (hospedagem e funções).
*   **FUNCIONALIDADES REMOVIDAS (Temporariamente):** Anexo de imagens e busca web foram removidos devido a erros (provavelmente timeouts no plano gratuito do Netlify). Podem ser revisitados no futuro.
*   **SEM GARANTIAS:** O serviço é fornecido sem nenhuma garantia de funcionamento, segurança, precisão ou privacidade das interações com as APIs externas ou a plataforma de hospedagem/funções.
*   **LIMITAÇÃO DE RESPONSABILIDADE:** O desenvolvedor não se responsabiliza por quaisquer danos resultantes do uso ou incapacidade de usar o Auri.

## 📄 Licença

Este projeto é distribuído sob a licença MIT.

## 📞 Contato

Este é um projeto pessoal sem suporte formal. Para dúvidas ou sugestões, utilize os canais onde o projeto foi divulgado (se aplicável) ou abra uma *Issue* no repositório GitHub.
