export const dateFormat = (date: string | number | any) => {
  return new Intl.DateTimeFormat('en-US').format(new Date(date))
}
