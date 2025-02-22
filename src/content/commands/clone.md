---
title: 'Git Clone'
category: 'remote'
command: 'git clone'
description: 'Crea una copia local completa de un repositorio remoto incluyendo todo su historial'
difficulty: 'beginner'
usage: 'git clone <url_repo> [directorio] | git clone --depth <n> <url_repo>'
examples:
  - cmd: 'git clone https://github.com/usuario/repo.git'
    desc: 'Clona un repositorio remoto en un directorio con el mismo nombre'
    level: 'basic'
  - cmd: 'git clone https://github.com/usuario/repo.git mi-proyecto'
    desc: 'Clona un repositorio en un directorio específico'
    level: 'basic'
  - cmd: 'git clone --depth 1 https://github.com/usuario/repo.git'
    desc: 'Clona solo el último commit (clon superficial)'
    level: 'advanced'
  - cmd: 'git clone --branch develop https://github.com/usuario/repo.git'
    desc: 'Clona una rama específica del repositorio'
    level: 'advanced'
notes:
  - 'Crea una copia local completa del repositorio'
  - 'Configura automáticamente el remoto "origin"'
warnings:
  - 'Los clones superficiales (--depth) tienen limitaciones para algunas operaciones'
  - 'Asegúrate de tener suficiente espacio en disco para el repositorio completo'
tips:
  - 'Usa --depth 1 para repositorios grandes si solo necesitas la versión actual'
  - 'Con --mirror obtienes una copia exacta incluyendo todas las referencias'
related:
  - 'init'
  - 'remote'
  - 'pull'
---
