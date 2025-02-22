import { categoriesEnum, difficultiesEnum, levelsEnum } from '$/content/config'

export const translateCategory = (category: string): string => {
  const categories: Record<keyof typeof categoriesEnum | 'all', string> = {
    all: 'Todos',
    basics: 'Básicos',
    branching: 'Ramas',
    remote: 'Remoto',
    history: 'Historial',
    changes: 'Cambios',
    collaboration: 'Colaboración',
    maintenance: 'Mantenimiento',
    debugging: 'Depuración',
    configuration: 'Configuración',
    advanced: 'Avanzado'
  }

  return categories[category as keyof typeof categories] || category
}

export const translateDifficulty = (difficulty: string): string => {
  const difficulties: Record<keyof typeof difficultiesEnum, string> = {
    beginner: 'Principiante',
    intermediate: 'Intermedio',
    advanced: 'Avanzado'
  }

  return difficulties[difficulty as keyof typeof difficultiesEnum] || difficulty
}

export const translateLevel = (level: string): string => {
  const levels: Record<keyof typeof levelsEnum, string> = {
    basic: 'Básico',
    advanced: 'Avanzado'
  }

  return levels[level as keyof typeof levelsEnum] || level
}
