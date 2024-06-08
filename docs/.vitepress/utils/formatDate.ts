import { Post } from "./types.js";

/**
 * 格式化文章更新时间
 * @param raw - 日期字符串
 */
export function formatDate(raw: string | undefined): Post["date"] {
  let date = new Date();
  if (raw) {
    date = new Date(raw);
  }
  // date.setHours(12);
  return {
    time: +date,
    string: date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
  };
}
