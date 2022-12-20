/** Get today date as MM/dd/yy */
export function getTodayDate(text?: string) {
  console.log(text);
  return new Date().toLocaleDateString("en-US");
}
