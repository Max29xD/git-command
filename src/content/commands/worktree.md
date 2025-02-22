---
title: 'Git Worktree'
category: 'collaboration'
command: 'git worktree'
description: 'Gestiona múltiples árboles de trabajo conectados al mismo repositorio'
difficulty: 'advanced'
usage: 'git worktree add [-b <nueva-rama>] <path> [<commit-ish>]'
examples:
  - cmd: 'git worktree add ../hotfix'
    desc: 'Crea un nuevo árbol de trabajo en ../hotfix'
    level: 'basic'
  - cmd: 'git worktree add -b feature ../feature main'
    desc: 'Crea un nuevo árbol con una nueva rama desde main'
    level: 'advanced'
  - cmd: 'git worktree list'
    desc: 'Lista todos los árboles de trabajo vinculados'
    level: 'basic'
  - cmd: 'git worktree remove ../hotfix'
    desc: 'Elimina un árbol de trabajo'
    level: 'advanced'
notes:
  - 'Permite trabajar en múltiples ramas simultáneamente'
  - 'Cada worktree tiene su propio directorio de trabajo'
warnings:
  - 'No crees worktrees dentro de otros worktrees'
  - 'Mantén un control de los worktrees activos'
tips:
  - 'Útil para trabajar en hotfixes mientras desarrollas features'
  - 'Usa rutas absolutas para evitar confusiones'
related:
  - 'branch'
  - 'checkout'
  - 'stash'
---
