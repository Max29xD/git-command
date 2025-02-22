---
title: 'Git Status'
category: 'basics'
command: 'git status'
description: 'Muestra archivos modificados, preparados y sin seguimiento'
usage: 'git status'
difficulty: 'beginner'
examples:
  - cmd: 'git status'
    desc: 'Muestra el estado actual del repositorio'
    level: 'basic'
notes:
  - 'Muestra archivos en rojo (sin seguimiento) y verde (preparados)'
  - 'Es uno de los comandos más utilizados para verificar el estado actual'
warnings:
  - 'No muestra archivos ignorados en .gitignore'
related:
  - 'add'
  - 'commit'
tips:
  - 'Usa git status -s para una salida más concisa'
  - 'Revisa el estado antes de cada commit'
---
