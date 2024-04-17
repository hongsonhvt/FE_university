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
  CreateProgramDto,
  CreateResult2,
  FindByConditionOutput,
  FindByConditionQuery4,
  FindOneOutput2,
  RemoveResult2,
  UpdateData1,
  UpdateProgramDto,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Programs<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @name Create
   * @request POST:/programs
   * @response `201` `CreateResult2`
   */
  create = (data: CreateProgramDto, params: RequestParams = {}) =>
    this.request<CreateResult2, any>({
      path: `/programs`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @name FindByCondition
   * @request GET:/programs
   * @response `200` `FindByConditionOutput`
   */
  findByCondition = (
    query: FindByConditionQuery4,
    params: RequestParams = {},
  ) =>
    this.request<FindByConditionOutput, any>({
      path: `/programs`,
      method: 'GET',
      query: query,
      ...params,
    });
  /**
   * No description
   *
   * @name FindOne
   * @request GET:/programs/{id}
   * @response `200` `FindOneOutput2`
   */
  findOne = (id: string, params: RequestParams = {}) =>
    this.request<FindOneOutput2, any>({
      path: `/programs/${id}`,
      method: 'GET',
      ...params,
    });
  /**
   * No description
   *
   * @name Update
   * @request PATCH:/programs/{id}
   * @response `200` `UpdateData1`
   */
  update = (id: string, data: UpdateProgramDto, params: RequestParams = {}) =>
    this.request<UpdateData1, any>({
      path: `/programs/${id}`,
      method: 'PATCH',
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @name Remove
   * @request DELETE:/programs/{id}
   * @response `200` `RemoveResult2`
   */
  remove = (id: string, params: RequestParams = {}) =>
    this.request<RemoveResult2, any>({
      path: `/programs/${id}`,
      method: 'DELETE',
      ...params,
    });
  /**
   * No description
   *
   * @name AddCourses
   * @request PATCH:/programs/{id}/courses
   * @response `200` `AddCoursesData`
   */
  addCourses = (id: string, data: AddCoursesDto, params: RequestParams = {}) =>
    this.request<AddCoursesData, any>({
      path: `/programs/${id}/courses`,
      method: 'PATCH',
      body: data,
      type: ContentType.Json,
      ...params,
    });
}
