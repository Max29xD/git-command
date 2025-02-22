---
title: 'Git Stash'
category: 'changes'
command: 'git stash'
description: 'Guarda temporalmente cambios no commitados para trabajar en otra cosa'
difficulty: 'intermediate'
usage: 'git stash | git stash pop | git stash list'
examples:
  - cmd: 'git stash'
    desc: 'Guarda los cambios actuales en el stash'
    level: 'basic'
  - cmd: 'git stash save "mensaje"'
    desc: 'Guarda cambios con una descripción'
    level: 'basic'
  - cmd: 'git stash pop'
    desc: 'Aplica y elimina el último stash'
    level: 'basic'
  - cmd: 'git stash apply stash@{2}'
    desc: 'Aplica un stash específico sin eliminarlo'
    level: 'advanced'
notes:
  - 'Útil cuando necesitas cambiar de rama pero tienes cambios sin commitear'
  - 'Los stashes se almacenan en una pila (último en entrar, primero en salir)'
warnings:
  - 'git stash pop puede causar conflictos si hay cambios en los mismos archivos'
tips:
  - 'Usa git stash list para ver todos los stashes guardados'
  - 'git stash show -p para ver los cambios en el último stash'
related:
  - 'checkout'
  - 'branch'
---
