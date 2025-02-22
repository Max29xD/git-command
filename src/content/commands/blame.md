---
title: 'Git Blame'
category: 'history'
command: 'git blame'
description: 'Muestra quién modificó cada línea de un archivo y en qué commit'
difficulty: 'intermediate'
usage: 'git blame [opciones] <archivo>'
examples:
  - cmd: 'git blame archivo.js'
    desc: 'Muestra el autor de cada línea en archivo.js'
    level: 'basic'
  - cmd: 'git blame -L 10,20 archivo.js'
    desc: 'Analiza solo las líneas 10-20 del archivo'
    level: 'basic'
  - cmd: 'git blame -w -C archivo.js'
    desc: 'Ignora espacios en blanco y detecta líneas movidas'
    level: 'advanced'
  - cmd: 'git blame --since="3 weeks ago" archivo.js'
    desc: 'Muestra cambios solo de las últimas 3 semanas'
    level: 'advanced'
notes:
  - 'Útil para entender la historia y contexto de cada línea'
  - 'Ayuda a identificar quién introdujo cambios específicos'
warnings:
  - 'No siempre muestra el contexto completo de un cambio'
  - 'Puede ser lento en archivos muy grandes o con mucha historia'
tips:
  - 'Usa -w para ignorar cambios de espacios en blanco'
  - 'Combina con git log -p para ver el contexto completo'
related:
  - 'log'
  - 'show'
  - 'diff'
---
