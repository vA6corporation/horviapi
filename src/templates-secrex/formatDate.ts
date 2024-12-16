const months = [
  'enero',
  'febrero',
  'marzo',
  'abril',
  'mayo',
  'junio',
  'julio',
  'agosto',
  'septiembre',
  'octubre',
  'noviembre',
  'diciembre'
];

export function formatDate(date: Date): string {
  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();
  return `Lima, ${day} de ${months[monthIndex]} del ${year}`;
}

export function formatDateShort(date: string): string {
  if(date == '') return '';
  const dateDate = new Date(date);
  const day = dateDate.getDate();
  const monthIndex = dateDate.getMonth();
  const year = dateDate.getFullYear();
  return `${day}/${monthIndex + 1}/${year}`;
}