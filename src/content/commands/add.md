---
title: 'Git Add'
category: 'basics'
command: 'git add'
description: 'Añade archivos al área de preparación (staging) para ser incluidos en el próximo commit'
difficulty: 'beginner'
usage: 'git add <archivo> | git add . | git add -p'
examples:
  - cmd: 'git add archivo.txt'
    desc: 'Añade un archivo específico al área de preparación'
    level: 'basic'
  - cmd: 'git add .'
    desc: 'Añade todos los archivos modificados y nuevos'
    level: 'basic'
  - cmd: 'git add -p'
    desc: 'Modo interactivo para añadir cambios específicos por partes'
    level: 'advanced'
  - cmd: 'git add src/*.js'
    desc: 'Añade todos los archivos JavaScript del directorio src'
    level: 'advanced'
notes:
  - 'Los archivos deben estar en el área de preparación antes de hacer commit'
  - 'El área de staging es como una "zona de preparación" para tu próximo commit'
warnings:
  - 'Ten cuidado al usar git add . ya que podrías incluir archivos no deseados'
  - 'Revisa siempre git status después de git add para verificar lo que has preparado'
tips:
  - 'Usa .gitignore para excluir archivos que nunca debes añadir'
  - 'git add -u solo añade archivos modificados y eliminados, no los nuevos'
related:
  - 'status'
  - 'commit'
  - 'reset'
---
