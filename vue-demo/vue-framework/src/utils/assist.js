// 判断参数是否是其中之一
export function oneOf(value, validList) {
  let len = validList.length;

  if (!len || len === 0) {
    return false;
  }

  for (let i = 0; i < len; i++) {
    if (value === validList[i]) {
      return true;
    }
  }

  return false;
}