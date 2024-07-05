export const getSortedObject = (givenObject: any) => {
  if (!givenObject) return {};
  const months: any = {
    January: 1,
    February: 2,
    March: 3,
    April: 4,
    May: 5,
    June: 6,
    July: 7,
    August: 8,
    September: 9,
    October: 10,
    November: 11,
    December: 12,
  };
  const sortedObject = givenObject.sort((a: any, b: any) => {
    if (a.year !== b.year) {
      return a.year - b.year; // Sort by year
    } else {
      return months[a.month] - months[b.month]; // Sort by month within the same year
    }
  });
  return sortedObject ?? {};
};
