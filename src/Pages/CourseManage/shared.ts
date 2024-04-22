import {
  CourseDto,
  Program,
} from "../../shared/api/__generated__/data-contracts";

export type CourseType = CourseDto &
  Program & {
    program: {
      code: string;
      id: string;
      name: string;
    };
    course: {
      code: string;
      createdAt: string;
      id: string;
      name: string;
      programs: Program[];
    };
  };
