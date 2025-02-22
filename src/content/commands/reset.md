---
title: 'Git Reset'
category: 'changes'
command: 'git reset'
description: 'Deshace cambios moviendo la rama actual a un commit específico'
difficulty: 'intermediate'
usage: 'git reset [--soft | --mixed | --hard] <commit>'
examples:
  - cmd: 'git reset --soft HEAD~1'
    desc: 'Deshace el último commit manteniendo los cambios en staging'
    level: 'basic'
  - cmd: 'git reset --mixed HEAD~1'
    desc: 'Deshace el último commit manteniendo los cambios sin staging'
    level: 'basic'
  - cmd: 'git reset --hard HEAD~1'
    desc: 'Elimina completamente el último commit y sus cambios'
    level: 'advanced'
  - cmd: 'git reset --hard origin/main'
    desc: 'Restablece la rama local al estado exacto del remoto'
    level: 'advanced'
notes:
  - '--soft: mantiene los cambios en staging'
  - '--mixed: mantiene los cambios pero fuera de staging (default)'
  - '--hard: elimina todos los cambios permanentemente'
warnings:
  - '¡--hard elimina permanentemente los cambios! Úsalo con extrema precaución'
  - 'No uses reset en commits que ya han sido pusheados al remoto'
tips:
  - 'Guarda el hash del commit antes de reset por si necesitas recuperarlo'
  - 'Usa git reflog para recuperar commits perdidos'
related:
  - 'revert'
  - 'checkout'
---
