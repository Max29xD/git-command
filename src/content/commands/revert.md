---
title: 'Git Revert'
category: 'changes'
command: 'git revert'
description: 'Revierte cambios creando un nuevo commit'
usage: 'git revert <commit>'
difficulty: 'beginner'
examples:
  - cmd: 'git revert abc123'
    desc: 'Crea un nuevo commit que deshace los cambios del commit especificado'
    level: 'basic'
  - cmd: 'git revert HEAD'
    desc: 'Revierte el último commit realizado'
    level: 'basic'
notes:
  - 'Es una forma segura de deshacer cambios'
  - 'Mantiene el historial de cambios intacto'
warnings:
  - 'Asegúrate de entender los cambios que estás revirtiendo'
  - 'Puede generar conflictos si hay cambios posteriores en los mismos archivos'
related:
  - 'reset'
  - 'checkout'
tips:
  - 'Usa git revert --no-commit para revertir sin crear un commit automáticamente'
  - 'Revisa el historial antes de revertir para entender el impacto'
---
