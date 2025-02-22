---
title: 'Git Bisect'
category: 'debugging'
command: 'git bisect'
description: 'Realiza una búsqueda binaria para encontrar el commit que introdujo un bug'
difficulty: 'advanced'
usage: 'git bisect start | git bisect [good|bad] [commit]'
examples:
  - cmd: 'git bisect start'
    desc: 'Inicia una sesión de bisect'
    level: 'basic'
  - cmd: 'git bisect bad'
    desc: 'Marca el commit actual como defectuoso'
    level: 'basic'
  - cmd: 'git bisect good v2.0'
    desc: 'Marca un commit conocido como bueno'
    level: 'advanced'
  - cmd: 'git bisect run test.sh'
    desc: 'Automatiza la búsqueda usando un script de prueba'
    level: 'advanced'
notes:
  - 'Usa búsqueda binaria para encontrar bugs rápidamente'
  - 'Reduce el tiempo de debugging en historiales largos'
warnings:
  - 'Asegúrate de tener un método confiable para verificar el bug'
  - 'Los commits intermedios deben ser compilables/ejecutables'
tips:
  - 'Crea un script de prueba para automatizar la búsqueda'
  - 'git bisect reset para terminar la sesión'
related:
  - 'log'
  - 'checkout'
  - 'reset'
---
