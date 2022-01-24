# Ioasys Books

Este projeto foi desenvolvido para a empresa Ioasys como um teste, o sistema foi criado utilizando React, Styled-components e Axios.

O sistema, inicia com a tela de login e após o login te direciona a página '/books' a qual permite que você visualize todos os
livros disponiveis naquela categoria assim como ao clicar em um livro, será aberto um modal com mais informações sobre o mesmo.

## Demonstração

![Alt Text](https://drive.google.com/uc?export=view&id=15CR--Ypx9u00y2amuzbZnL3Eh0xb55aO)

## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/diegogasparcruz/desafio-books-frontend/blob/main/src/components/ListBooks/index.jsx
```

Entre no diretório do projeto

```bash
  cd my-project
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm run start
```

## Cenário de teste

| Parâmetro          | Valor                 |
| :----------------- | :-------------------- |
| `Usuário de Teste` | desafio@ioasys.com.br |
| `Senha de Teste`   | 12341234              |

## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

`REACT_APP_BACKEND_URL = https://books.ioasys.com.br/api/v1/`
