---
title: 'Git Merge'
category: 'branching'
command: 'git merge'
description: 'Incorpora los cambios de una rama en la rama actual'
difficulty: 'intermediate'
usage: 'git merge <rama> | git merge --no-ff <rama>'
examples:
  - cmd: 'git merge feature'
    desc: "Fusiona la rama 'feature' en la rama actual"
    level: 'basic'
  - cmd: 'git merge --no-ff feature'
    desc: 'Fusiona creando siempre un nuevo commit'
    level: 'basic'
  - cmd: 'git merge --abort'
    desc: 'Cancela una fusión con conflictos'
    level: 'advanced'
  - cmd: 'git merge origin/main --allow-unrelated-histories'
    desc: 'Fusiona historiales sin ancestro común'
    level: 'advanced'
notes:
  - 'Asegúrate de estar en la rama correcta antes de fusionar'
  - 'Fast-forward merge no crea un nuevo commit si es posible'
warnings:
  - 'Pueden surgir conflictos que requieran resolución manual'
  - 'Commit o stash tus cambios locales antes de merge'
tips:
  - '--no-ff mantiene mejor registro de la historia de features'
  - 'Usa git mergetool para resolver conflictos visualmente'
related:
  - 'branch'
  - 'checkout'
  - 'rebase'
---
