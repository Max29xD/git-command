---
title: 'Git Checkout'
category: 'branching'
command: 'git checkout'
description: 'Cambia entre ramas o commits'
difficulty: 'intermediate'
usage: 'git checkout <rama> | git checkout -b <nueva-rama>'
examples:
  - cmd: 'git checkout develop'
    desc: "Cambia a la rama 'develop'"
    level: 'basic'
  - cmd: 'git checkout -b feature'
    desc: "Crea y cambia a una nueva rama 'feature'"
    level: 'basic'
  - cmd: 'git checkout -'
    desc: 'Vuelve a la rama anterior'
    level: 'basic'
  - cmd: 'git checkout HEAD~2'
    desc: 'Cambia a un commit específico'
    level: 'advanced'
notes:
  - 'Actualiza los archivos en el directorio de trabajo'
  - 'Usa -b para crear y cambiar a una nueva rama'
warnings:
  - 'Los cambios sin commit pueden perderse al cambiar de rama'
  - 'Asegúrate de estar en la rama correcta antes de hacer cambios'
tips:
  - 'Usa git stash antes de checkout si tienes cambios sin commitear'
  - 'El flag -f fuerza el checkout descartando cambios locales'
related:
  - 'branch'
  - 'merge'
  - 'stash'
---
