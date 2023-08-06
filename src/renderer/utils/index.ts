// Simplest-form debounce
export const debounce = <T extends (...args: any[]) => void>(
  func: T,
  ms: number
): T => {
  let timer: ReturnType<typeof setTimeout>;

  return <T>((...args: any[]) => {
    clearTimeout(timer);

    timer = setTimeout(() => func(args), ms);
  });
};
