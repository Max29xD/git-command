---
title: 'Git Reset'
category: 'config'
command: 'git reset'
description: 'Mueve la rama actual a un commit específico'
usage: 'git reset <commit>'
examples:
  - cmd: 'git reset HEAD~1'
    desc: 'Retrocede al commit anterior'
  - cmd: 'git reset --hard origin/main'
    desc: 'Restablece la rama local al estado del remoto'
notes:
  - '¡Usar con precaución! Puede modificar el historial'
  - 'Útil para deshacer commits locales no publicados'
---
