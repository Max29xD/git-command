---
title: 'Git Add'
category: 'basic'
command: 'git add'
description: 'Añade archivos al área de preparación (staging)'
usage: 'git add <archivo> | git add .'
examples:
  - cmd: 'git add archivo.txt'
    desc: 'Añade un archivo específico al área de preparación'
  - cmd: 'git add .'
    desc: 'Añade todos los archivos modificados y nuevos'
notes:
  - 'Los archivos deben estar en el área de preparación antes de hacer commit'
  - 'Puedes usar git add -p para añadir cambios específicos de un archivo'
---
