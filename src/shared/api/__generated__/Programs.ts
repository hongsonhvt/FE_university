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
  AddCoursesData,
  AddCoursesDto,
  AddCoursesError,
  CreateData1,
  CreateHttpError,
  CreateProgramDto,
  FindByConditionQuery6,
  FindByConditionResult1,
  FindOneResult2,
  RemoveData1,
  RemoveErrorData,
  UpdateFails,
  UpdateOutput,
  UpdateProgramDto,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Programs<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
 * No description
 *
 * @tags programs
 * @name Create
 * @summary Create
 * @request POST:/programs
 * @secure
 * @response `201` `CreateData1`
 * @response `409` `({
  \** @example null *\
    data?: object | null,
    message?: string,
  \** @example false *\
    success?: boolean,

})`
 */
  create = (data: CreateProgramDto, params: RequestParams = {}) =>
    this.request<CreateData1, CreateHttpError>({
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
   * @name FindByCondition
   * @summary Find By Condition
   * @request GET:/programs
   * @secure
   * @response `200` `FindByConditionResult1`
   */
  findByCondition = (
    query: FindByConditionQuery6,
    params: RequestParams = {},
  ) =>
    this.request<FindByConditionResult1, any>({
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
   * @name FindOne
   * @summary Find One
   * @request GET:/programs/{id}
   * @secure
   * @response `200` `FindOneResult2`
   */
  findOne = (id: string, params: RequestParams = {}) =>
    this.request<FindOneResult2, any>({
      path: `/programs/${id}`,
      method: 'GET',
      secure: true,
      ...params,
    });
  /**
 * No description
 *
 * @tags programs
 * @name Update
 * @summary Update
 * @request PATCH:/programs/{id}
 * @secure
 * @response `200` `UpdateOutput`
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
  update = (id: string, data: UpdateProgramDto, params: RequestParams = {}) =>
    this.request<UpdateOutput, UpdateFails>({
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
 * @name Remove
 * @summary Remove
 * @request DELETE:/programs/{id}
 * @secure
 * @response `200` `RemoveData1`
 * @response `404` `({
  \** @example null *\
    data?: object | null,
    message?: string,
  \** @example false *\
    success?: boolean,

})`
 */
  remove = (id: string, params: RequestParams = {}) =>
    this.request<RemoveData1, RemoveErrorData>({
      path: `/programs/${id}`,
      method: 'DELETE',
      secure: true,
      ...params,
    });
  /**
 * No description
 *
 * @tags programs
 * @name AddCourses
 * @summary Add Courses
 * @request PATCH:/programs/{id}/courses
 * @secure
 * @response `200` `AddCoursesData`
 * @response `404` `({
  \** @example null *\
    data?: object | null,
    message?: string,
  \** @example false *\
    success?: boolean,

})`
 */
  addCourses = (id: string, data: AddCoursesDto, params: RequestParams = {}) =>
    this.request<AddCoursesData, AddCoursesError>({
      path: `/programs/${id}/courses`,
      method: 'PATCH',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}
