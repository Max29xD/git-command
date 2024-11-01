import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function translateCategory(category: string) {
  switch (category) {
    case 'all':
      return 'Todos'
    case 'basic':
      return 'Básicos'
    case 'branch':
      return 'Ramas'
    case 'remote':
      return 'Remotos'
    case 'history':
      return 'Historiales'
    case 'config':
      return 'Configuraciones'
    default:
      return category
  }
}

export function capitalize(word: string) {
  return word.charAt(0).toUpperCase() + word.slice(1)
}
