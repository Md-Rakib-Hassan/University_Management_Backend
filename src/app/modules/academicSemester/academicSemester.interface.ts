export type TMonths = 
| "January"
| "February"
| "March"
| "April"
| "May"
| "June"
| "July"
| "August"
| "September"
| "October"
| "November"
| "December";

export type TAcademicSemesterNames = 'Fall' | 'Spring' | 'Summer';
export type TAcademicSemesterCodes = '01' | '02' | '03';

export interface IAcademicSemester{
    name:TAcademicSemesterNames;
    code:TAcademicSemesterCodes ;
    year: string;
    startMonth: TMonths;
    endMonth: TMonths;
} 