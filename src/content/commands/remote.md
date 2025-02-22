---
title: 'Git Remote'
category: 'remote'
command: 'git remote'
description: 'Gestiona conexiones con repositorios remotos'
usage: 'git remote -v'
difficulty: 'beginner'
examples:
  - cmd: 'git remote -v'
    desc: 'Lista todas las conexiones remotas y sus URLs'
    level: 'basic'
  - cmd: 'git remote add origin https://github.com/usuario/repo.git'
    desc: 'Añade un nuevo repositorio remoto'
    level: 'basic'
notes:
  - 'origin es el nombre predeterminado del remoto principal'
  - 'Puedes tener múltiples remotos'
warnings:
  - 'Asegúrate de tener los permisos necesarios antes de añadir un remoto'
related:
  - 'push'
  - 'pull'
  - 'fetch'
tips:
  - 'Usa nombres descriptivos para los remotos cuando trabajas con múltiples fuentes'
  - 'Verifica las URLs de los remotos periódicamente'
---
