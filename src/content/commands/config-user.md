---
title: 'Git Config User'
category: 'config'
command: 'git config'
description: 'Configura las opciones de Git'
usage: "git config --global user.name 'nombre' | git config --global user.email 'email'"
examples:
  - cmd: 'git config --global user.name "Juan Pérez"'
    desc: 'Establece el nombre para todos los repositorios'
  - cmd: 'git config --global user.email "juan@ejemplo.com"'
    desc: 'Establece el email para todos los repositorios'
notes:
  - 'La opción --global aplica la configuración a todos los repositorios'
  - 'Puedes usar --local para configurar solo el repositorio actual'
---
