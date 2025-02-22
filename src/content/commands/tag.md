---
title: 'Git Tag'
category: 'configuration'
command: 'git tag'
description: 'Gestiona las etiquetas del repositorio'
usage: "git tag | git tag -a v1.0 -m 'mensaje'"
difficulty: 'beginner'
examples:
  - cmd: 'git tag'
    desc: 'Lista todas las etiquetas existentes'
  - cmd: 'git tag -a v1.0 -m "Primera versión estable"'
    desc: 'Crea una etiqueta anotada con versión y mensaje'
  - cmd: 'git tag -d v1.0'
    desc: 'Elimina una etiqueta local'
  - cmd: 'git push origin v1.0'
    desc: 'Publica una etiqueta específica al remoto'
notes:
  - 'Las etiquetas son útiles para marcar versiones importantes'
  - 'Usa -a para crear etiquetas anotadas con más información'
  - 'Las etiquetas anotadas almacenan metadata adicional como autor y fecha'
warnings:
  - 'Las etiquetas no se envían automáticamente al hacer push, debes empujarlas explícitamente'
related:
  - 'push'
  - 'fetch'
tips:
  - 'Usa convenciones de versionado semántico (v1.0.0) para las etiquetas de versiones'
  - 'Puedes usar git show <tag> para ver los detalles de una etiqueta anotada'
---
