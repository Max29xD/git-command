---
title: 'Git Push'
category: 'branch'
command: 'git push'
description: 'Sube commits locales al repositorio remoto'
usage: 'git push origin <rama>'
examples:
  - cmd: 'git push origin main'
    desc: 'Sube los commits locales a la rama main del remoto'
  - cmd: 'git push -u origin feature'
    desc: 'Sube y establece la rama remota como upstream'
notes:
  - 'Requiere permisos en el repositorio remoto'
  - 'Usa -u para establecer el upstream por defecto'
---
