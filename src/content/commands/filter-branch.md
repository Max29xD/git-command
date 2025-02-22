---
title: 'Git Filter Branch'
category: 'advanced'
command: 'git filter-branch'
description: 'Reescribe el historial de git aplicando filtros personalizados'
difficulty: 'advanced'
usage: 'git filter-branch --env-filter|--tree-filter|--index-filter <comando>'
examples:
  - cmd: 'git filter-branch --env-filter "export GIT_AUTHOR_EMAIL=nuevo@email.com"'
    desc: 'Cambia el email del autor en todo el historial'
    level: 'advanced'
  - cmd: 'git filter-branch --tree-filter "rm -f passwords.txt"'
    desc: 'Elimina un archivo de todo el historial'
    level: 'advanced'
  - cmd: 'git filter-branch --index-filter "git rm --cached --ignore-unmatch archivo-grande.zip"'
    desc: 'Elimina un archivo grande del historial eficientemente'
    level: 'advanced'
  - cmd: 'git filter-branch -f --prune-empty'
    desc: 'Elimina commits vacíos después del filtrado'
    level: 'advanced'
notes:
  - 'Herramienta poderosa para limpiar o modificar el historial'
  - 'Más eficiente que realizar cambios commit por commit'
warnings:
  - '¡PELIGROSO! Reescribe completamente el historial del repositorio'
  - 'Nunca uses en ramas públicas sin coordinar con el equipo'
tips:
  - 'Haz una copia de seguridad antes de usar filter-branch'
  - 'Considera git-filter-repo como alternativa moderna'
related:
  - 'rebase'
  - 'reset'
  - 'reflog'
---
