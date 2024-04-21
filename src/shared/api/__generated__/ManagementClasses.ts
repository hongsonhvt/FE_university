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
  CreateErrorData,
  CreateManagementClassDto,
  CreateOutput1,
  FindByConditionOutput,
  FindByConditionQuery4,
  FindOneResult1,
  RemoveFails,
  RemoveOutput,
  UpdateFail,
  UpdateManagementClassDto,
  UpdateResult,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class ManagementClasses<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
 * No description
 *
 * @tags management-classes
 * @name Create
 * @summary Create
 * @request POST:/management-classes
 * @secure
 * @response `201` `CreateOutput1`
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
  create = (data: CreateManagementClassDto, params: RequestParams = {}) =>
    this.request<CreateOutput1, CreateErrorData>({
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
   * @name FindByCondition
   * @summary Find By Condition
   * @request GET:/management-classes
   * @secure
   * @response `200` `FindByConditionOutput`
   */
  findByCondition = (
    query: FindByConditionQuery4,
    params: RequestParams = {},
  ) =>
    this.request<FindByConditionOutput, any>({
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
   * @name FindOne
   * @summary Find One
   * @request GET:/management-classes/{id}
   * @secure
   * @response `200` `FindOneResult1`
   */
  findOne = (id: string, params: RequestParams = {}) =>
    this.request<FindOneResult1, any>({
      path: `/management-classes/${id}`,
      method: 'GET',
      secure: true,
      ...params,
    });
  /**
 * No description
 *
 * @tags management-classes
 * @name Update
 * @summary Update
 * @request PATCH:/management-classes/{id}
 * @secure
 * @response `200` `UpdateResult`
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
  update = (
    id: string,
    data: UpdateManagementClassDto,
    params: RequestParams = {},
  ) =>
    this.request<UpdateResult, UpdateFail>({
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
 * @name Remove
 * @summary Remove
 * @request DELETE:/management-classes/{id}
 * @secure
 * @response `200` `RemoveOutput`
 * @response `404` `({
  \** @example null *\
    data?: object | null,
    message?: string,
  \** @example false *\
    success?: boolean,

})`
 */
  remove = (id: string, params: RequestParams = {}) =>
    this.request<RemoveOutput, RemoveFails>({
      path: `/management-classes/${id}`,
      method: 'DELETE',
      secure: true,
      ...params,
    });
}
