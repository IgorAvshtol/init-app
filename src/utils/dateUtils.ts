export function dateUtils(date: string, options?: string) {
  const parseDate = new Date(Date.parse(date)).toDateString().split(' ');
  if (options === 'comment') {
    return (
      new Date(Date.parse(date)).toLocaleDateString() +
      ' ' +
      new Date(Date.parse(date)).toLocaleTimeString()
    );
  }
  return parseDate[1] + parseDate[2];
}
