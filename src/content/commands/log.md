---
title: 'Git Log'
category: 'history'
command: 'git log'
description: 'Muestra el historial detallado de commits del repositorio'
difficulty: 'beginner'
usage: 'git log [opciones] | git log --oneline | git log --graph'
examples:
  - cmd: 'git log'
    desc: 'Muestra el historial completo de commits'
    level: 'basic'
  - cmd: 'git log --oneline'
    desc: 'Muestra un historial simplificado, un commit por línea'
    level: 'basic'
  - cmd: 'git log --graph --oneline --all'
    desc: 'Muestra historial gráfico de todas las ramas'
    level: 'advanced'
  - cmd: 'git log -p archivo.txt'
    desc: 'Muestra los cambios introducidos en cada commit para un archivo'
    level: 'advanced'
notes:
  - 'Presiona Q para salir del historial'
  - 'Muestra autor, fecha y mensaje de cada commit'
warnings:
  - 'El historial puede ser muy largo en proyectos grandes'
  - 'Usa opciones de filtrado para encontrar commits específicos'
tips:
  - 'git log --pretty=format:"%h - %an, %ar : %s" para formato personalizado'
  - 'git log --since="2 weeks ago" para filtrar por fecha'
related:
  - 'show'
  - 'diff'
  - 'blame'
---
