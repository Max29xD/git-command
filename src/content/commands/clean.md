---
title: 'Git Clean'
category: 'maintenance'
command: 'git clean'
description: 'Elimina archivos no rastreados del directorio de trabajo'
difficulty: 'advanced'
usage: 'git clean [-d] [-f] [-n] [-x]'
examples:
  - cmd: 'git clean -n'
    desc: 'Muestra qué archivos serían eliminados (dry run)'
    level: 'basic'
  - cmd: 'git clean -f'
    desc: 'Elimina archivos no rastreados forzosamente'
    level: 'basic'
  - cmd: 'git clean -fd'
    desc: 'Elimina archivos y directorios no rastreados'
    level: 'advanced'
  - cmd: 'git clean -fx'
    desc: 'Elimina archivos ignorados y no rastreados'
    level: 'advanced'
notes:
  - 'Útil para limpiar archivos generados o temporales'
  - 'No afecta a archivos en .gitignore por defecto'
warnings:
  - '¡CUIDADO! Los archivos eliminados no se pueden recuperar'
  - 'Usa siempre -n primero para ver qué se eliminará'
tips:
  - '-i para modo interactivo (más seguro)'
  - '-x incluye archivos ignorados en la limpieza'
related:
  - 'reset'
  - 'checkout'
  - 'status'
---
