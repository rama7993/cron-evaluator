export function to12Hour(time: string): string {
  const [hStr, mStr] = (time || '00:00').split(':');
  let h = Number(hStr);
  const ampm = h >= 12 ? 'PM' : 'AM';
  h = h % 12 || 12;
  const mm = (mStr ?? '00').padStart(2, '0');
  return `${h.toString().padStart(2, '0')}:${mm} ${ampm}`;
}

export function ordinal(n: number): string {
  const s = ['th', 'st', 'nd', 'rd'];
  const v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}
