export const formatSeconds = (seconds: number) => {
  const date = new Date(seconds * 1000);

  const hrs = date.getUTCHours();
  const mins = date.getUTCMinutes();
  const secs = date.getUTCSeconds();

  const formattedHrs = hrs.toString().padStart(2, '0');
  const formattedMins = mins.toString().padStart(2, '0');
  const formattedSecs = secs.toString().padStart(2, '0');

  if (formattedHrs === '00') {
    return `${formattedMins}:${formattedSecs}`;
  }

  return `${formattedHrs}:${formattedMins}:${formattedSecs}`;
};
