export function dateUtils(date: string) {
  const parseDate = new Date(Date.parse(date)).toDateString().split(' ');
  return parseDate[1] + parseDate[2];
}
