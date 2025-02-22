---
title: 'Git Rebase'
category: 'advanced'
command: 'git rebase'
description: 'Reorganiza commits moviendo o combinando una secuencia de commits a una nueva base'
difficulty: 'advanced'
usage: 'git rebase <rama-base> | git rebase -i HEAD~n'
examples:
  - cmd: 'git rebase main'
    desc: 'Reaplica los commits de la rama actual sobre main'
    level: 'basic'
  - cmd: 'git rebase -i HEAD~3'
    desc: 'Modo interactivo para modificar los últimos 3 commits'
    level: 'advanced'
  - cmd: 'git rebase --onto main feature bugfix'
    desc: 'Mueve los commits desde feature hasta bugfix sobre main'
    level: 'advanced'
  - cmd: 'git rebase --continue'
    desc: 'Continúa el rebase después de resolver conflictos'
    level: 'advanced'
notes:
  - 'Reescribe el historial de commits creando nuevos hashes'
  - 'Útil para mantener un historial limpio y lineal'
warnings:
  - 'NUNCA rebasear commits que ya han sido pusheados a un repositorio público'
  - 'Puede causar conflictos que necesitan resolución manual'
tips:
  - 'Usa -i (interactivo) para squash, editar o reordenar commits'
  - 'git rebase --abort para cancelar un rebase problemático'
related:
  - 'merge'
  - 'cherry-pick'
  - 'reset'
---
