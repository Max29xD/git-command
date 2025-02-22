---
title: 'Git Submodule'
category: 'collaboration'
command: 'git submodule'
description: 'Gestiona repositorios externos dentro de tu proyecto principal'
difficulty: 'advanced'
usage: 'git submodule add <url> [path] | git submodule update --init'
examples:
  - cmd: 'git submodule add https://github.com/user/lib.git libs/mylib'
    desc: 'Añade un nuevo submódulo al proyecto'
    level: 'basic'
  - cmd: 'git submodule update --init --recursive'
    desc: 'Inicializa y actualiza todos los submódulos recursivamente'
    level: 'basic'
  - cmd: 'git submodule foreach git pull origin main'
    desc: 'Actualiza todos los submódulos a la última versión'
    level: 'advanced'
  - cmd: 'git submodule update --remote'
    desc: 'Actualiza submódulos a la última versión del remoto'
    level: 'advanced'
notes:
  - 'Útil para incluir bibliotecas externas como parte de tu proyecto'
  - 'Cada submódulo mantiene su propio historial de git'
warnings:
  - 'Los submódulos pueden complicar el manejo del proyecto'
  - 'Asegúrate de documentar bien la inicialización de submódulos'
tips:
  - 'Usa --recursive al clonar proyectos con submódulos'
  - 'Considera alternativas como package managers cuando sea posible'
related:
  - 'clone'
  - 'pull'
  - 'push'
---
