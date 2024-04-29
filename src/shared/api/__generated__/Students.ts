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
  FindOneStudentData,
  FindStudentsByConditionData,
  FindStudentsByConditionQuery,
  RemoveStudentData,
  RemoveStudentError,
} from './data-contracts';
import { HttpClient, RequestParams } from './http-client';

export class Students<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags students
   * @name FindStudentsByCondition
   * @summary Find Students By Condition
   * @request GET:/students
   * @secure
   * @response `200` `FindStudentsByConditionData`
   */
  findStudentsByCondition = (
    query: FindStudentsByConditionQuery,
    params: RequestParams = {},
  ) =>
    this.request<FindStudentsByConditionData, any>({
      path: `/students`,
      method: 'GET',
      query: query,
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags students
   * @name FindOneStudent
   * @summary Find One Student
   * @request GET:/students/{id}
   * @secure
   * @response `200` `FindOneStudentData`
   */
  findOneStudent = (id: string, params: RequestParams = {}) =>
    this.request<FindOneStudentData, any>({
      path: `/students/${id}`,
      method: 'GET',
      secure: true,
      ...params,
    });
  /**
 * No description
 *
 * @tags students
 * @name RemoveStudent
 * @summary Remove Student
 * @request DELETE:/students/{id}
 * @secure
 * @response `200` `RemoveStudentData`
 * @response `404` `({
  \** @example null *\
    data?: object | null,
    message?: string,
  \** @example false *\
    success?: boolean,

})`
 */
  removeStudent = (id: string, params: RequestParams = {}) =>
    this.request<RemoveStudentData, RemoveStudentError>({
      path: `/students/${id}`,
      method: 'DELETE',
      secure: true,
      ...params,
    });
}
