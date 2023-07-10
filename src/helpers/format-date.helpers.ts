const ordinal = (d: number) => {
  const nth: Record<number, string> = { 1: 'st', 2: 'nd', 3: 'rd' };
  return `${d}${nth[d] || 'th'}`;
};

export const formatDate = (date?: string | Date) => {
  if (!date) return '';

  const newDate = new Date(date);

  const year = newDate.getFullYear();
  const day = ordinal(newDate.getDate());
  const month = newDate.toLocaleString('default', { month: 'long' });

  return `${month} ${day}, ${year}`;
};
