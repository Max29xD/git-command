---
title: 'Git Cherry Pick'
category: 'collaboration'
command: 'git cherry-pick'
description: 'Aplica cambios específicos de otros commits a la rama actual'
difficulty: 'advanced'
usage: 'git cherry-pick <commit-hash>'
examples:
  - cmd: 'git cherry-pick abc123'
    desc: 'Aplica los cambios del commit específico a la rama actual'
    level: 'basic'
  - cmd: 'git cherry-pick abc123..def456'
    desc: 'Aplica un rango de commits'
    level: 'advanced'
  - cmd: 'git cherry-pick --no-commit abc123'
    desc: 'Aplica cambios sin crear un commit automáticamente'
    level: 'advanced'
notes:
  - 'Útil para traer cambios específicos sin fusionar ramas completas'
  - 'Mantiene el historial limpio cuando solo necesitas cambios puntuales'
warnings:
  - 'Puede causar conflictos si los cambios afectan a las mismas líneas'
  - 'Crea nuevos commits con diferentes hashes'
tips:
  - 'Usa --edit para modificar el mensaje del commit'
  - 'git cherry-pick --continue después de resolver conflictos'
related:
  - 'merge'
  - 'rebase'
---
