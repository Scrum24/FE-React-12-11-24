export const minutesLeft = (date) => {
  const startDate = new Date(date);
  const currentDate = new Date();
  const timeDifference = startDate - currentDate;
  const minutes = Math.ceil(timeDifference / 1000 / 60);
  return minutes;
}

export const formatDate = (dateString) => {
  const date = new Date(dateString);

  const options = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  };

  return new Intl.DateTimeFormat('en-US', options).format(date);
}