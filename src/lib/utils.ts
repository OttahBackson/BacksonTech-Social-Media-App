import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatRelativeTime(dateString: string): string {
  const date = new Date(dateString);
  const timeDifference = Date.now() - date.getTime();

  const minute = 60 * 1000;
  const hour = 60 * minute;
  const day = 24 * hour;
  const month = 30 * day;
  const year = 365 * day;

  if (timeDifference < minute) {
    const seconds = Math.floor(timeDifference / 1000);
    return `${seconds} ${seconds === 1 ? 'second ago' : 'seconds ago'}`;
  } else if (timeDifference < hour) {
    const minutes = Math.floor(timeDifference / minute);
    return `${minutes} ${minutes === 1 ? 'minute ago' : 'minutes ago'}`;
  } else if (timeDifference < day) {
    const hours = Math.floor(timeDifference / hour);
    return `${hours} ${hours === 1 ? 'hour ago' : 'hours ago'}`;
  } else if (timeDifference < month) {
    const days = Math.floor(timeDifference / day);
    return `${days} ${days === 1 ? 'day ago' : 'days ago'}`;
  } else if (timeDifference < year) {
    const months = Math.floor(timeDifference / month);
    return `${months} ${months === 1 ? 'month ago' : 'months ago'}`;
  } else {
    const years = Math.floor(timeDifference / year);
    return `${years} ${years === 1 ? 'year ago' : 'years ago'}`;
  }
}
export const checkIsLiked = (likeList: string[], userId: string) => {
  return likeList.includes(userId);
};