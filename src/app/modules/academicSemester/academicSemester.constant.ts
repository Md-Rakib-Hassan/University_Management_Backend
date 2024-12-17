import {
  TAcademicSemesterCodes,
  TAcademicSemesterNameCodeValidator,
  TAcademicSemesterNames,
  TMonths,
} from './academicSemester.interface';

export const months: TMonths[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const AcademicSemesterNames: TAcademicSemesterNames[] = [
  'Fall',
  'Spring',
  'Summer',
];
export const AcademicSemesterCodes: TAcademicSemesterCodes[] = [
  '01',
  '02',
  '03',
];

export const academicSemesterNameCodeValidator: TAcademicSemesterNameCodeValidator =
  {
    Fall: '01',
    Spring: '02',
    Summer: '03',
  };
