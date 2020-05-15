function loop(loopTimes: number, callback: (index: number) => any): void {
  for (let i = 0; i < loopTimes; i++) {
    callback(i);
  }
}

export default loop;
