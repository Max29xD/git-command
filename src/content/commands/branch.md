---
title: 'Git Branch'
category: 'branching'
command: 'git branch'
description: 'Gestiona las ramas del repositorio para desarrollo paralelo'
difficulty: 'beginner'
usage: 'git branch | git branch <nombre> | git branch -d <nombre>'
examples:
  - cmd: 'git branch'
    desc: 'Lista todas las ramas locales'
    level: 'basic'
  - cmd: 'git branch feature'
    desc: "Crea una nueva rama llamada 'feature'"
    level: 'basic'
  - cmd: 'git branch -d feature'
    desc: 'Elimina una rama ya fusionada'
    level: 'basic'
  - cmd: 'git branch -a'
    desc: 'Lista todas las ramas (locales y remotas)'
    level: 'advanced'
notes:
  - 'La rama actual se marca con un asterisco (*)'
  - 'Las ramas permiten desarrollo paralelo sin afectar la rama principal'
warnings:
  - 'No elimines una rama si no está fusionada, perderás los cambios'
  - 'Usa -D en lugar de -d para forzar la eliminación de una rama no fusionada'
tips:
  - 'Mantén nombres descriptivos para las ramas (feature/, bugfix/, etc.)'
  - 'Usa git branch -v para ver el último commit de cada rama'
related:
  - 'checkout'
  - 'merge'
  - 'push'
---
