---
title: 'Git Config User'
category: 'configuration'
command: 'git config'
description: 'Configura las opciones de Git a nivel global o por repositorio'
difficulty: 'beginner'
usage: 'git config [--global | --local] <key> <value>'
examples:
  - cmd: 'git config --global user.name "Juan Pérez"'
    desc: 'Establece el nombre para todos los repositorios'
    level: 'basic'
  - cmd: 'git config --global user.email "juan@ejemplo.com"'
    desc: 'Establece el email para todos los repositorios'
    level: 'basic'
  - cmd: 'git config --local core.editor "code --wait"'
    desc: 'Configura VS Code como editor para el repositorio actual'
    level: 'advanced'
  - cmd: 'git config --global alias.st "status -sb"'
    desc: 'Crea un alias global para un comando git'
    level: 'advanced'
notes:
  - '--global afecta a todos los repositorios del usuario'
  - '--local afecta solo al repositorio actual'
warnings:
  - 'Las configuraciones locales tienen prioridad sobre las globales'
  - 'Verifica tu configuración con git config --list'
tips:
  - 'Usa alias para comandos frecuentes más cortos'
  - 'Configura core.autocrlf según tu sistema operativo'
related:
  - 'init'
  - 'clone'
---
