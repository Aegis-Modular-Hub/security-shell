import { format, parseISO, isValid } from 'date-fns';
import { es } from 'date-fns/locale';

/** 1. Solo Fecha: 16/03/2026 */
export function toDMY(date: string | Date | number | null | undefined): string {
  if (!date) return '';
  const d = typeof date === 'string' ? parseISO(date) : new Date(date);
  return isValid(d) ? format(d, 'dd/MM/yyyy', { locale: es }) : '';
}

/** 2. Fecha y Hora: 16/03/2026 14:30 */
export function toDMYDateTime(date: string | Date | number | null | undefined): string {
  if (!date) return '';
  const d = typeof date === 'string' ? parseISO(date) : new Date(date);
  return isValid(d) ? format(d, 'dd/MM/yyyy HH:mm', { locale: es }) : '';
}

/** 3. Solo Hora y Minutos: 14:30 */
export function toTime(date: string | Date | number | null | undefined): string {
  if (!date) return '';
  const d = typeof date === 'string' ? parseISO(date) : new Date(date);
  return isValid(d) ? format(d, 'HH:mm', { locale: es }) : '';
}

/** 4. Formato DB estándar: 2026-03-16 */
export function toYMD(date: string | Date | number | null | undefined): string {
  if (!date) return '';
  const d = typeof date === 'string' ? parseISO(date) : new Date(date);
  return isValid(d) ? format(d, 'yyyy-MM-dd') : '';
}

/** 5. Formato ISO completo (Timestamps): 2026-03-16T18:30:00.000Z */
export function toISO(date: string | Date | number | null | undefined): string {
  if (!date) return '';
  const d = typeof date === 'string' ? parseISO(date) : new Date(date);
  return isValid(d) ? d.toISOString() : '';
}

export function isDbFormat(date: string): boolean {
  return /^\d{4}-\d{2}-\d{2}$/.test(date);
}
