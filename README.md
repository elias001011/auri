# Auri Chatbot 🤖💬

Auri é uma interface de chatbot experimental, focada em privacidade, que roda inteiramente no navegador do usuário, utilizando `LocalStorage` para salvar conversas e configurações, e se conectando a APIs externas (como OpenRouter) para acessar modelos de linguagem grandes (LLMs)

## ✨ Recursos

*   **Foco em Privacidade:** Sem necessidade de cadastro, todos os dados (chats, configurações) são armazenados localmente no navegador.
*   **Interface Limpa:** Design simples e responsivo para desktop e mobile.
*   **Conexão com LLMs:** Interage com modelos de IA via APIs externas (atualmente configurado para OpenRouter com Google Gemma 3).
*   **Suporte a Imagens:** Permite anexar imagens nas conversas (se o modelo suportar).
*   **Busca na Web:** Capacidade de ativar busca na web durante a conversa (via sufixo `:online` no OpenRouter).
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
*   **Visualização de Imagens:** Clique para ver imagens anexadas em tela cheia.
*   **Termos de Uso e Política de Privacidade:** Modais informativos acessíveis na interface.

## 💻 Tecnologias Utilizadas

*   **Frontend:** HTML5, CSS3 (com Variáveis CSS para theming), JavaScript (Vanilla JS)
*   **Armazenamento:** Browser `LocalStorage`
*   **API de IA:** OpenRouter (configurado por padrão, mas adaptável)
*   **Modelo Padrão:** `google/gemma-3-27b-it:free` via OpenRouter

## 🚀 Como Usar

1.  **Download:** Baixe o arquivo `index.html`.
2.  **Abrir:** Abra o arquivo `index.html` diretamente em um navegador web moderno (Chrome, Firefox, Edge, Safari).

Não é necessária nenhuma instalação ou build. O chatbot funcionará offline em termos de interface, mas precisará de conexão com a internet para enviar solicitações à API do OpenRouter e obter respostas da IA.

## ⚙️ Configuração

A maioria das configurações pode ser ajustada diretamente na interface através do botão "⚙️ Configurações":

*   Idioma de Resposta da IA
*   Nome de Usuário
*   Instruções Personalizadas
*   Tema (Claro/Escuro)
*   Cor de Destaque

**Configurações no Código:**

Algumas configurações estão diretamente no código JavaScript (dentro do arquivo `index.html`):

*   **Chave de API (OpenRouter):** Encontre o objeto `API_KEYS` e altere o valor de `openrouter`. **ATENÇÃO:** Veja a seção de avisos abaixo sobre a chave exposta!
*   **Modelo de IA:** Altere a constante `MODEL_ID` para usar outro modelo disponível no OpenRouter (ou adapte a função `callApi` para outro provedor). Verifique a compatibilidade do novo modelo com imagens/busca web e ajuste `MODEL_CONFIG` se necessário.
*   **Limite Diário:** Altere a constante `MAX_DAILY_MESSAGES`.

## ⚠️ Importante / Avisos

*   **PROJETO EXPERIMENTAL:** Auri é um projeto pessoal, não comercial, e é fornecido "COMO ESTÁ". Pode conter bugs, instabilidades ou ser descontinuado a qualquer momento.
*   **DADOS LOCAIS:** Todo o histórico e configurações são salvos **APENAS** no `LocalStorage` do seu navegador. Se você limpar os dados do navegador ou usar a opção "Limpar Todos os Dados Locais", **TUDO SERÁ PERDIDO IRREVERSIVELMENTE**.
*   **DEPENDÊNCIA DE API EXTERNA:** O funcionamento depende totalmente da disponibilidade e das políticas da API do OpenRouter (ou qualquer outra configurada). O Auri é apenas uma interface.
*   **CHAVE DE API EXPOSTA:** A chave de API do OpenRouter (`sk-or-v1-...`) incluída no código está **EXPOSTA PUBLICAMENTE**. Ela é fornecida **APENAS** para fins educacionais e de teste rápido, com um limite de uso muito baixo.
    *   **NÃO USE ESTE CÓDIGO EM PRODUÇÃO COM ESTA CHAVE.**
    *   **Recomendação:** Substitua pela sua própria chave de API do OpenRouter se for usar o Auri de forma mais consistente.
    *   O desenvolvedor não se responsabiliza por qualquer uso indevido ou custos gerados por esta chave ou por chaves adicionadas pelo usuário.
*   **SEM GARANTIAS:** O serviço é fornecido sem nenhuma garantia de funcionamento, segurança, precisão ou privacidade das interações com a API externa.
*   **LIMITAÇÃO DE RESPONSABILIDADE:** O desenvolvedor não se responsabiliza por quaisquer danos resultantes do uso ou incapacidade de usar o Auri.

## 📄 Licença

Este projeto é distribuído sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 📞 Contato

Este é um projeto pessoal sem suporte formal. Para dúvidas ou sugestões, utilize os canais onde o projeto foi divulgado (se aplicável) ou abra uma *Issue* no repositório GitHub.
