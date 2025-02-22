---
title: 'Git Pull'
category: 'remote'
command: 'git pull'
description: 'Obtiene y fusiona los cambios del repositorio remoto con tu rama local'
difficulty: 'beginner'
usage: 'git pull [remote] [rama] | git pull --rebase'
examples:
  - cmd: 'git pull origin main'
    desc: 'Obtiene y fusiona los cambios de la rama main remota'
    level: 'basic'
  - cmd: 'git pull'
    desc: 'Obtiene cambios de la rama remota configurada'
    level: 'basic'
  - cmd: 'git pull --rebase'
    desc: 'Obtiene cambios y reaplica commits locales encima'
    level: 'advanced'
  - cmd: 'git pull --no-commit'
    desc: 'Obtiene cambios sin crear commit de merge automático'
    level: 'advanced'
notes:
  - 'Combina git fetch y git merge en un solo comando'
  - 'Mantén tu repositorio actualizado antes de pushear'
warnings:
  - 'Puede causar conflictos si hay cambios en las mismas líneas'
  - 'Asegúrate de tener tus cambios locales commitados antes de pull'
tips:
  - 'Usa git pull --rebase para mantener el historial más limpio'
  - 'git fetch + git merge da más control que git pull directo'
related:
  - 'fetch'
  - 'merge'
  - 'push'
---
