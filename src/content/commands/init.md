---
title: 'Git Init'
category: 'basics'
command: 'git init'
description: 'Inicializa un nuevo repositorio Git en el directorio actual'
difficulty: 'beginner'
usage: 'git init [directorio] | git init --bare'
examples:
  - cmd: 'git init'
    desc: 'Inicializa un nuevo repositorio Git en el directorio actual'
    level: 'basic'
  - cmd: 'git init mi-proyecto'
    desc: 'Crea un nuevo directorio con un repositorio Git'
    level: 'basic'
  - cmd: 'git init --bare servidor.git'
    desc: 'Crea un repositorio sin directorio de trabajo (para servidor)'
    level: 'advanced'
  - cmd: 'git init --initial-branch=main'
    desc: 'Inicializa con una rama principal llamada main'
    level: 'advanced'
notes:
  - 'Crea una carpeta oculta .git que contiene toda la información del repositorio'
  - 'Solo necesitas ejecutarlo una vez por proyecto'
warnings:
  - 'No ejecutes git init en un repositorio existente'
  - 'Los repositorios bare son para compartir, no para trabajar directamente'
tips:
  - 'Crea un .gitignore antes de tu primer commit'
  - 'Configura user.name y user.email después de init'
related:
  - 'config-user'
  - 'add'
  - 'commit'
---
