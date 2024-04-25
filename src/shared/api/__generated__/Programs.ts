/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import {
  AddCoursesDto,
  AddProgramCoursesData,
  AddProgramCoursesError,
  CreateProgramData,
  CreateProgramDto,
  CreateProgramError,
  FindOneProgramData,
  FindProgramByConditionData,
  FindProgramByConditionQuery,
  RemoveProgramData,
  RemoveProgramError,
  UpdateProgramData,
  UpdateProgramDto,
  UpdateProgramError,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Programs<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
 * No description
 *
 * @tags programs
 * @name CreateProgram
 * @summary Create Program
 * @request POST:/programs
 * @secure
 * @response `201` `CreateProgramData`
 * @response `409` `({
  \** @example null *\
    data?: object | null,
    message?: string,
  \** @example false *\
    success?: boolean,

})`
 */
  createProgram = (data: CreateProgramDto, params: RequestParams = {}) =>
    this.request<CreateProgramData, CreateProgramError>({
      path: `/programs`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags programs
   * @name FindProgramByCondition
   * @summary Find Program By Condition
   * @request GET:/programs
   * @secure
   * @response `200` `FindProgramByConditionData`
   */
  findProgramByCondition = (
    query: FindProgramByConditionQuery,
    params: RequestParams = {},
  ) =>
    this.request<FindProgramByConditionData, any>({
      path: `/programs`,
      method: 'GET',
      query: query,
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags programs
   * @name FindOneProgram
   * @summary Find One Program
   * @request GET:/programs/{id}
   * @secure
   * @response `200` `FindOneProgramData`
   */
  findOneProgram = (id: string, params: RequestParams = {}) =>
    this.request<FindOneProgramData, any>({
      path: `/programs/${id}`,
      method: 'GET',
      secure: true,
      ...params,
    });
  /**
 * No description
 *
 * @tags programs
 * @name UpdateProgram
 * @summary Update Program
 * @request PATCH:/programs/{id}
 * @secure
 * @response `200` `UpdateProgramData`
 * @response `404` `({
  \** @example null *\
    data?: object | null,
    message?: string,
  \** @example false *\
    success?: boolean,

})`
 * @response `409` `({
  \** @example null *\
    data?: object | null,
    message?: string,
  \** @example false *\
    success?: boolean,

})`
 */
  updateProgram = (
    id: string,
    data: UpdateProgramDto,
    params: RequestParams = {},
  ) =>
    this.request<UpdateProgramData, UpdateProgramError>({
      path: `/programs/${id}`,
      method: 'PATCH',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
 * No description
 *
 * @tags programs
 * @name RemoveProgram
 * @summary Remove Program
 * @request DELETE:/programs/{id}
 * @secure
 * @response `200` `RemoveProgramData`
 * @response `404` `({
  \** @example null *\
    data?: object | null,
    message?: string,
  \** @example false *\
    success?: boolean,

})`
 */
  removeProgram = (id: string, params: RequestParams = {}) =>
    this.request<RemoveProgramData, RemoveProgramError>({
      path: `/programs/${id}`,
      method: 'DELETE',
      secure: true,
      ...params,
    });
  /**
 * No description
 *
 * @tags programs
 * @name AddProgramCourses
 * @summary Add Program Courses
 * @request PATCH:/programs/{id}/courses
 * @secure
 * @response `200` `AddProgramCoursesData`
 * @response `404` `({
  \** @example null *\
    data?: object | null,
    message?: string,
  \** @example false *\
    success?: boolean,

})`
 */
  addProgramCourses = (
    id: string,
    data: AddCoursesDto,
    params: RequestParams = {},
  ) =>
    this.request<AddProgramCoursesData, AddProgramCoursesError>({
      path: `/programs/${id}/courses`,
      method: 'PATCH',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}
