---
title: 'Git Push'
category: 'remote'
command: 'git push'
description: 'Envía tus commits locales al repositorio remoto'
difficulty: 'beginner'
usage: 'git push [remote] [rama] | git push -u origin [rama]'
examples:
  - cmd: 'git push origin main'
    desc: 'Sube los commits locales a la rama main del remoto'
    level: 'basic'
  - cmd: 'git push -u origin feature'
    desc: 'Sube y establece la rama remota como upstream'
    level: 'basic'
  - cmd: 'git push --force-with-lease'
    desc: 'Fuerza el push pero verifica que no sobrescribe trabajo de otros'
    level: 'advanced'
  - cmd: 'git push --tags'
    desc: 'Sube todas las etiquetas locales al remoto'
    level: 'advanced'
notes:
  - 'Requiere permisos en el repositorio remoto'
  - '-u (--set-upstream) configura el tracking para futuros push/pull'
warnings:
  - 'Nunca uses --force a menos que estés completamente seguro'
  - 'Asegúrate de tener los últimos cambios (pull) antes de push'
tips:
  - 'Usa force-with-lease en lugar de --force para mayor seguridad'
  - 'git push -u al crear nuevas ramas para configurar tracking'
related:
  - 'pull'
  - 'remote'
  - 'branch'
---
