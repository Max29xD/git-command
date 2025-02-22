---
title: 'Git Reflog'
category: 'debugging'
command: 'git reflog'
description: 'Muestra un registro de todos los cambios en las referencias de Git (HEAD, ramas)'
difficulty: 'advanced'
usage: 'git reflog | git reflog <referencia>'
examples:
  - cmd: 'git reflog'
    desc: 'Muestra el historial de movimientos de HEAD'
    level: 'basic'
  - cmd: 'git reflog show feature'
    desc: 'Muestra el historial de movimientos de una rama específica'
    level: 'advanced'
  - cmd: 'git reset --hard HEAD@{2}'
    desc: 'Restaura el estado del repositorio a 2 movimientos atrás'
    level: 'advanced'
  - cmd: 'git checkout HEAD@{yesterday}'
    desc: 'Revisa el estado del repositorio de ayer'
    level: 'advanced'
notes:
  - 'Mantiene un registro de todos los cambios en las referencias por 30 días'
  - 'Herramienta de recuperación crucial para operaciones destructivas'
warnings:
  - 'Las entradas del reflog son locales y se eliminan eventualmente'
  - 'No confíes en el reflog para recuperación a largo plazo'
tips:
  - 'Útil para recuperar commits perdidos por reset --hard'
  - 'Combina con cherry-pick para recuperar cambios específicos'
related:
  - 'reset'
  - 'checkout'
  - 'cherry-pick'
---
