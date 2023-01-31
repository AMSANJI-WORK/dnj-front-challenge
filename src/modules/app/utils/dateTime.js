export function timeSince(date) {
  var seconds = Math.floor((new Date() - date) / 1000);
  const ONE_YEAR_PER_SECOND = 31536000;
  const ONE_MONTH_PER_SECOND = 2592000;
  const ONE_DAY_PER_SECOND = 86400;
  const ONE_HOUR_PER_SECOND = 3600;
  const ONE_MINUTE_PER_SECOND = 60;
  var interval = seconds / ONE_YEAR_PER_SECOND;

  if (interval > 1) {
    return Math.floor(interval) + " years ago";
  }
  interval = seconds / ONE_MONTH_PER_SECOND;
  if (interval > 1) {
    return Math.floor(interval) + " months ago";
  }
  interval = seconds / ONE_DAY_PER_SECOND;
  if (interval > 1) {
    return Math.floor(interval) + " days ago";
  }
  interval = seconds / ONE_HOUR_PER_SECOND;
  if (interval > 1) {
    return Math.floor(interval) + " hours ago";
  }
  interval = seconds / ONE_MINUTE_PER_SECOND;
  if (interval > 1) {
    return Math.floor(interval) + " minutes ago";
  }
  return Math.floor(seconds) + " seconds ago";
}
