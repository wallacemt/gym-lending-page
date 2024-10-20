# 🏋️‍♀️ Landing Page - Academia

![Capa do Projeto](./assets/img/screenshots/home.jpg)

Este projeto foi criado para fornecer uma experiência interativa e visualmente atraente para os usuários, utilizando animações e sliders dinâmicos. 💪

## 🚀 Sumário

- [⚙️ Pré-requisitos](#⚙️-pré-requisitos)
- [📥 Instalação](#📥-instalação)
- [💻 Execução do Projeto](#💻-execução-do-projeto)
- [🔌 APIs Utilizadas](#🔌-apis-utilizadas)
- [📚 Bibliotecas Externas](#📚-bibliotecas-externas)
- [🖼️ Screenshots](#🖼️-screenshots)
- [🗂️ Estrutura de Pastas](#🗂️-estrutura-de-pastas)

---

## ⚙️ Pré-requisitos

Não há a necessidade de instalar pacotes ou dependências! O projeto usa links CDN para as bibliotecas externas, o que facilita a execução local. Basta ter um navegador e acesso à internet. 🌐

## 📥 Instalação

1. Clone o repositório para sua máquina local:

   ```bash
   git clone https://github.com/walacemt/gym-lending-page.git
2. Acesse o diretório do projeto:

   ```bash
   cd gym-lending-page
## 💻 Execução do Projeto
### Para visualizar o projeto localmente:

1. Basta abrir o arquivo index.html diretamente no seu navegador. Não é necessário instalar ou rodar nenhum servidor. Simples e fácil!

## 🔌 APIs Utilizadas

### Google Maps API 🌍 - Avaliações
- #### Descrição: A API do Google Maps foi usada para buscar avaliações de clientes e exibi-las de forma dinâmica na landing page.
- #### Uso: Integração com a seção de avaliações, exibindo reviews reais dos usuários da academia.

### EmailJS 📨
- #### Descrição: O EmailJS permite o envio de e-mails diretamente do navegador, sem necessidade de backend.
- #### Uso: O formulário de contato é integrado com o EmailJS para que os usuários possam enviar mensagens diretamente para o e-mail da academia. 📧

## 📚 Bibliotecas Externas
### AOS (Animate on Scroll)
- #### Versão: Próxima versão
- #### Descrição: O AOS é uma biblioteca que permite adicionar animações à medida que o usuário rola a página.
- #### Uso: Adiciona efeitos de animação nas seções enquanto o usuário interage com a página.
### Swiper.js
- #### Versão: 11.x
- #### Descrição: O Swiper.js é um slider moderno e responsivo, utilizado em várias seções da página.
- #### Uso: Implementado na seção de depoimentos e imagens da academia, criando um carrossel elegante para mostrar avaliações e fotos. 📸

# 🖼️ Screenshots
### Aqui estão algumas capturas de tela do projeto:
## Seção de Avaliaçõe ⭐
![Seção de avaliações](./assets/img/screenshots/review.jpg)
## Formulário de Contato ✉️
![Seção de contato](./assets/img/screenshots/form.jpg)

## 🗂️ Estrutura de Pastas
```bash
/assets
   /styles
      styles.css       # Estilos principais da página
      responsive.css    #estilo para responsividade
   /img                 #images utilizadas no projeto
   /fonts            #Fontes utilizadas no projeto
  /scripts
      /api
         app.js      # Lógica para carregar as avaliações na pagina
         reviews.json   #arquivo json com as avaliações
      /responsive
         index.js       # Gerenciamento do comportamento responsivo
      /frameworks
         index.js       # Scripts para AOS e Swiper.js é EmailJS
index.html            # Arquivo principal do projeto
README.md             # Este arquivo
```

## 📝 Considerações Finais
*Esse projeto foi criado com foco em proporcionar uma navegação fluida e agradável para os usuários da academia. Caso tenha interesse em contribuir ou sugestões de melhorias, siga estas etapas:*

1. Faça um fork do repositório.🍴

2. Crie uma nova branch **(git checkout -b feature/MinhaNovaFuncionalidade)**.

3. Faça suas alterações e adicione-as (git add .).

4. Faça um commit (git commit -m 'Adiciona nova funcionalidade').

5. Envie para o repositório remoto (git push origin feature/MinhaNovaFuncionalidade).

6. Abra um Pull Request.

## Licença
Este projeto está licenciado sob a **MIT License**.📔