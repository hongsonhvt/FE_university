import { Course } from "../../shared/api/__generated__/data-contracts";

export type CourseType = Course & {
  course: {
    code: string;
    id: string;
    name: string;
  };
};
