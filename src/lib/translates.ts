import type { Categories, Difficulties, Levels } from "$/content/config";

export const translateCategory = (category: string): string => {
	const categories: Record<(typeof Categories)[number] | "all", string> = {
		all: "Todos",
		basics: "Básicos",
		branching: "Ramas",
		remote: "Remoto",
		history: "Historial",
		changes: "Cambios",
		collaboration: "Colaboración",
		maintenance: "Mantenimiento",
		debugging: "Depuración",
		configuration: "Configuración",
		advanced: "Avanzado",
	};

	return categories[category as keyof typeof categories] || category;
};

export const translateDifficulty = (difficulty: string): string => {
	const difficulties: Record<(typeof Difficulties)[number], string> = {
		beginner: "Principiante",
		intermediate: "Intermedio",
		advanced: "Avanzado",
	};

	return difficulties[difficulty as keyof typeof difficulties] || difficulty;
};

export const translateLevel = (level: string): string => {
	const levels: Record<(typeof Levels)[number], string> = {
		basic: "Básico",
		advanced: "Avanzado",
	};

	return levels[level as keyof typeof levels] || level;
};
