export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    // next-line-disabled
    const task = true;
    // next-line-disabled
    const task2 = false;
  }

  return [task, task2];
}
