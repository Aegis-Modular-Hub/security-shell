export const common = Object.freeze({
  rows: 15,
  rowsPerPageOptions: [5, 10, 15],
  inputDebounceDelay: 1000,
  inputAutocompleteDelay: 700,
  tooltipDelay: 500,
  showTableData: 'Mostrando {first} a {last} de {totalRecords} registros',
  twoDecimalPlaces: '.2-2',
  numberLocaleFormat: 'en-US',
  dateDisplayFormat: 'dd/MM/yyyy',
} as const);

export type ModalFormMode = 'create' | 'update';

export const MessageSeverity = Object.freeze({
  SUCCESS: 'success',
  INFO: 'info',
  WARN: 'warn',
  ERROR: 'error',
} as const);
