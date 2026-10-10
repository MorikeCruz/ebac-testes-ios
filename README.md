

Projeto de automação de testes mobile utilizando WebdriverIO, Appium e Mocha, como parte das atividades de QA da EBAC.


- Node.js
- WebdriverIO
- Appium
- Mocha
- JavaScript
- Sauce Labs para execução remota opcional



ebac-testes-ios/
├── config/
│   ├── general.conf.js
│   ├── hooks.conf.js
│   ├── local.conf.js
│   ├── reports.conf.js
│   ├── sauce.conf.js
│   ├── specs.conf.js
│   ├── suites.conf.js
│   └── wdio.conf.js
├── test/
│   ├── pageobjects/
│   └── specs/
│       ├── checkout.test.js
│       ├── login.test.js
│       ├── product.test.js
│       └── search.test.js
├── .env.example
├── .gitignore
├── package.json
└── package-lock.json


## Instalação

Instale o Node.js e, na pasta do projeto, execute:


npm ci


## Configuração do ambiente

Copie o arquivo `.env.example` para `.env` e preencha as variáveis necessárias para o ambiente escolhido.

Não compartilhe credenciais nem envie o arquivo `.env` para o GitHub.

Para execução remota no Sauce Labs, é necessário ter uma conta, configurar as credenciais e disponibilizar o aplicativo iOS no armazenamento do serviço.

A execução local do simulador iOS exige macOS e Xcode. O projeto foi preparado em Windows, portanto a execução iOS ainda precisa ser validada em um ambiente compatível.

## Comandos disponíveis


npm test
npm run test:login
npm run test:product
npm run test:search
npm run test:checkout

Os comandos utilizam a configuração do WebdriverIO e exigem que o ambiente e o dispositivo estejam configurados corretamente.

## Estado atual dos testes

O projeto contém testes de login, produto, busca e um cenário inicial de checkout.

O cenário `checkout.test.js` verifica a abertura da busca, a localização de um produto e a seleção desse produto. Ele ainda não cobre o fluxo completo de compra, incluindo carrinho, endereço e pagamento.

Os testes precisam ser executados e validados em um ambiente iOS compatível antes de serem considerados aprovados.

## Segurança

- Credenciais devem ser mantidas em variáveis de ambiente.
- O arquivo `.env` está incluído no `.gitignore`.
- O arquivo `.env.example` serve apenas como modelo, sem credenciais reais.
