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
  CreateManagementClassData,
  CreateManagementClassDto,
  CreateManagementClassError,
  FindManagementClassByConditionData,
  FindManagementClassByConditionQuery,
  FindOneManagementClassData,
  RemoveManagementClassData,
  RemoveManagementClassError,
  UpdateManagementClassData,
  UpdateManagementClassDto,
  UpdateManagementClassError,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class ManagementClasses<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
 * No description
 *
 * @tags management-classes
 * @name CreateManagementClass
 * @summary Create Management Class
 * @request POST:/management-classes
 * @secure
 * @response `201` `CreateManagementClassData`
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
  createManagementClass = (
    data: CreateManagementClassDto,
    params: RequestParams = {},
  ) =>
    this.request<CreateManagementClassData, CreateManagementClassError>({
      path: `/management-classes`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags management-classes
   * @name FindManagementClassByCondition
   * @summary Find Management Class By Condition
   * @request GET:/management-classes
   * @secure
   * @response `200` `FindManagementClassByConditionData`
   */
  findManagementClassByCondition = (
    query: FindManagementClassByConditionQuery,
    params: RequestParams = {},
  ) =>
    this.request<FindManagementClassByConditionData, any>({
      path: `/management-classes`,
      method: 'GET',
      query: query,
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags management-classes
   * @name FindOneManagementClass
   * @summary Find One Management Class
   * @request GET:/management-classes/{id}
   * @secure
   * @response `200` `FindOneManagementClassData`
   */
  findOneManagementClass = (id: string, params: RequestParams = {}) =>
    this.request<FindOneManagementClassData, any>({
      path: `/management-classes/${id}`,
      method: 'GET',
      secure: true,
      ...params,
    });
  /**
 * No description
 *
 * @tags management-classes
 * @name UpdateManagementClass
 * @summary Update Management Class
 * @request PATCH:/management-classes/{id}
 * @secure
 * @response `200` `UpdateManagementClassData`
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
  updateManagementClass = (
    id: string,
    data: UpdateManagementClassDto,
    params: RequestParams = {},
  ) =>
    this.request<UpdateManagementClassData, UpdateManagementClassError>({
      path: `/management-classes/${id}`,
      method: 'PATCH',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
 * No description
 *
 * @tags management-classes
 * @name RemoveManagementClass
 * @summary Remove Management Class
 * @request DELETE:/management-classes/{id}
 * @secure
 * @response `200` `RemoveManagementClassData`
 * @response `404` `({
  \** @example null *\
    data?: object | null,
    message?: string,
  \** @example false *\
    success?: boolean,

})`
 */
  removeManagementClass = (id: string, params: RequestParams = {}) =>
    this.request<RemoveManagementClassData, RemoveManagementClassError>({
      path: `/management-classes/${id}`,
      method: 'DELETE',
      secure: true,
      ...params,
    });
}
