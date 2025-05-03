/**
 * Zentrale Schnittstellen-Definitionen für die Anwendung
 */
export interface Task {
  id?: string;
  title: string;
  description?: string;
  status?: string;
}
