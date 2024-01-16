interface YearMonth {
  year: number;
  month: number;
}

export const formatToDatePeriodText = (start: YearMonth, end: YearMonth): string => {
  if (!isValldYear(start.year) || !isValldYear(end.year)) {
    throw new Error('year은 4자리 숫자여야 합니다.');
  }

  if (!isValidMonth(start.month) || !isValidMonth(end.month)) {
    throw new Error('month는 1자리 또는 2자리 숫자여야 합니다.');
  }

  const monthOfStartDate = start.month.toString().padStart(2, '0');
  const monthOfEndDate = end.month.toString().padStart(2, '0');
  const periodText = `${start.year}.${monthOfStartDate} ~ ${end.year}.${monthOfEndDate}`;

  return periodText;
};

const isValldYear = (year: number): boolean => {
  return year.toString().length === 4;
};

const isValidMonth = (month: number): boolean => {
  return [1, 2].includes(month.toString().length);
};
