---
title: 'Git Commit'
category: 'basics'
command: 'git commit'
description: 'Guarda los cambios preparados en el historial del repositorio'
difficulty: 'beginner'
usage: 'git commit -m "mensaje" | git commit -am "mensaje"'
examples:
  - cmd: 'git commit -m "Añade función de login"'
    desc: 'Crea un commit con un mensaje descriptivo'
    level: 'basic'
  - cmd: 'git commit -am "Fix: corrige error en validación"'
    desc: 'Añade todos los archivos modificados y crea commit'
    level: 'basic'
  - cmd: 'git commit --amend'
    desc: 'Modifica el último commit (mensaje o contenido)'
    level: 'advanced'
  - cmd: 'git commit --no-verify'
    desc: 'Realiza commit saltando los hooks de pre-commit'
    level: 'advanced'
notes:
  - 'Usa mensajes claros y descriptivos siguiendo convenciones (feat:, fix:, etc.)'
  - 'Los commits son la unidad básica del historial de Git'
warnings:
  - 'No uses --amend en commits que ya han sido pusheados'
  - 'Evita commits con mensajes poco descriptivos como "fix" o "update"'
tips:
  - 'Estructura tus mensajes: <tipo>: <descripción corta>'
  - 'Mantén los commits atómicos (un solo cambio lógico por commit)'
related:
  - 'add'
  - 'status'
  - 'push'
---
