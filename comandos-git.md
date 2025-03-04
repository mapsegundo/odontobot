# Comandos Git para o OdontoBot

Siga estes comandos para inicializar e enviar seu código para o GitHub.

## Inicializar um repositório novo (caso ainda não tenha feito)

```bash
# Inicialize o repositório Git
git init

# Adicione o remote (substitua o URL pelo seu repositório)
git remote add origin https://github.com/mapsegundo/odontobot.git
```

## Preparar e enviar o código

```bash
# Verifique o status dos arquivos
git status

# Adicione todos os arquivos ao commit
git add .

# Faça o commit com uma mensagem descritiva
git commit -m "Refatoração do projeto com nova estrutura de componentes e Context API"

# Envie para o branch main
git push -u origin main
```

## Se você estiver trabalhando com uma branch de feature

```bash
# Crie e mude para uma nova branch
git checkout -b feature/nova-estrutura

# Adicione as mudanças
git add .

# Faça o commit
git commit -m "Implementação da nova estrutura de componentes"

# Envie a branch para o repositório remoto
git push -u origin feature/nova-estrutura
```

## Dicas importantes

1. **Não envie o arquivo .env**: Verifique se o arquivo `.env` está listado no `.gitignore`
2. **Verifique grandes arquivos**: Evite fazer commit de arquivos grandes ou da pasta `node_modules`
3. **Faça commits frequentes**: Divida seu trabalho em commits menores com mensagens claras

## Fluxo de trabalho sugerido

1. Desenvolva novas funcionalidades em branches separadas
2. Faça merge para a branch main apenas quando a funcionalidade estiver estável
3. Use Pull Requests para revisar o código antes de fazer merge
4. Mantenha o README.md atualizado com instruções claras

## Depois de completar o merge

```bash
# Atualize sua branch local
git checkout main
git pull origin main

# Crie uma nova branch para a próxima feature
git checkout -b feature/proxima-melhoria
```
