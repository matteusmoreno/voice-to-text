# My Audio to Text

**My Audio to Text** é uma ferramenta web gratuita que converte voz em texto em tempo real diretamente no navegador, utilizando a API Web Speech (SpeechRecognition). O projeto é uma Progressive Web App (PWA), com suporte offline e instalação em dispositivos.

---

## Demonstração

Acesse: [https://myaudiototext.com](https://myaudiototext.com)

---

## Funcionalidades

* Conversão instantânea de voz para texto.
* Suporte a múltiplos idiomas: Inglês, Português, Espanhol e Bahasa Indonesia.
* Interface simples, responsiva e acessível.
* Progressive Web App (PWA) com manifest e service worker para funcionamento offline.
* Compatível com navegadores que suportam Web Speech API (recomenda-se Google Chrome).
* SEO otimizado com sitemap.xml e robots.txt configurados.

---

## Estrutura do Projeto

```
/
├── index.html           # Página principal HTML
├── style.css            # Estilos CSS
├── mic.js               # Script de reconhecimento de voz
├── manifest.json        # Manifesto PWA
├── service-worker.js    # Cache e offline
├── sitemap.xml          # Sitemap para SEO
├── robots.txt           # Regras para motores de busca
├── icons/               # Ícones PWA e favicon
│   ├── icon-192.png
│   ├── icon-512.png
│   └── favicon.ico
└── assets/              # (Opcional) arquivos extras
```

---

## Tecnologias Utilizadas

* HTML5, CSS3, JavaScript (Vanilla)
* Web Speech API (`SpeechRecognition`)
* Progressive Web App (PWA) — manifest.json e Service Worker
* SEO: sitemap.xml, robots.txt, meta tags Open Graph e Twitter Cards

---

## Como Usar

1. Abra o site no Google Chrome ou navegador compatível.
2. Selecione o idioma desejado no menu dropdown.
3. Clique no botão 🎤 para começar a falar.
4. O texto reconhecido aparecerá em tempo real na área de texto.
5. Clique no botão 🛑 para parar o reconhecimento.

---

## Configuração PWA

* O site pode ser instalado em dispositivos suportados (botão "Adicionar à tela inicial").
* O `service-worker.js` implementa cache básico para funcionamento offline.
* Ícones em 192x192 e 512x512 para diferentes dispositivos.

---

## SEO

* Sitemap e robots.txt configurados para melhorar indexação.
* Meta tags otimizadas para redes sociais e mecanismos de busca.

---

## Licença

Este projeto está licenciado sob a licença **MIT** — veja o arquivo [LICENSE](LICENSE) para mais detalhes.

