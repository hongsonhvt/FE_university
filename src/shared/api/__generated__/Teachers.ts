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
  FindOneTeacherData,
  FindTeachersByConditionData,
  FindTeachersByConditionQuery,
  RemoveTeacherData,
  RemoveTeacherError,
} from './data-contracts';
import { HttpClient, RequestParams } from './http-client';

export class Teachers<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags teachers
   * @name FindTeachersByCondition
   * @summary Find Teachers By Condition
   * @request GET:/teachers
   * @secure
   * @response `200` `FindTeachersByConditionData`
   */
  findTeachersByCondition = (
    query: FindTeachersByConditionQuery,
    params: RequestParams = {},
  ) =>
    this.request<FindTeachersByConditionData, any>({
      path: `/teachers`,
      method: 'GET',
      query: query,
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags teachers
   * @name FindOneTeacher
   * @summary Find One Teacher
   * @request GET:/teachers/{id}
   * @secure
   * @response `200` `FindOneTeacherData`
   */
  findOneTeacher = (id: string, params: RequestParams = {}) =>
    this.request<FindOneTeacherData, any>({
      path: `/teachers/${id}`,
      method: 'GET',
      secure: true,
      ...params,
    });
  /**
 * No description
 *
 * @tags teachers
 * @name RemoveTeacher
 * @summary Remove Teacher
 * @request DELETE:/teachers/{id}
 * @secure
 * @response `200` `RemoveTeacherData`
 * @response `404` `({
  \** @example null *\
    data?: object | null,
    message?: string,
  \** @example false *\
    success?: boolean,

})`
 */
  removeTeacher = (id: string, params: RequestParams = {}) =>
    this.request<RemoveTeacherData, RemoveTeacherError>({
      path: `/teachers/${id}`,
      method: 'DELETE',
      secure: true,
      ...params,
    });
}
