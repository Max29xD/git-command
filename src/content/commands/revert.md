---
title: 'Git Revert'
category: 'config'
command: 'git revert'
description: 'Revierte cambios creando un nuevo commit'
usage: 'git revert <commit>'
examples:
  - cmd: 'git revert abc123'
    desc: 'Crea un nuevo commit que deshace los cambios del commit especificado'
  - cmd: 'git revert HEAD'
    desc: 'Revierte el último commit realizado'
notes:
  - 'Es una forma segura de deshacer cambios'
  - 'Mantiene el historial de cambios intacto'
---
