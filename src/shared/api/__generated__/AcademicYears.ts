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
  CreateAcademicYearDto,
  CreateData,
  CreateError,
  FindInRangeData,
  FindInRangeQuery,
  FindOneData,
  GetCurrentData,
  RemoveData,
  RemoveError,
  UpdateCurrentData,
  UpdateCurrentError,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class AcademicYears<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
 * No description
 *
 * @tags academic-years
 * @name Create
 * @summary Create
 * @request POST:/academic-years
 * @secure
 * @response `201` `CreateData`
 * @response `400` `({
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
  create = (data: CreateAcademicYearDto, params: RequestParams = {}) =>
    this.request<CreateData, CreateError>({
      path: `/academic-years`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags academic-years
   * @name FindInRange
   * @summary Find In Range
   * @request GET:/academic-years
   * @secure
   * @response `200` `FindInRangeData`
   */
  findInRange = (query: FindInRangeQuery, params: RequestParams = {}) =>
    this.request<FindInRangeData, any>({
      path: `/academic-years`,
      method: 'GET',
      query: query,
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags academic-years
   * @name GetCurrent
   * @summary Get Current
   * @request GET:/academic-years/current
   * @secure
   * @response `200` `GetCurrentData`
   */
  getCurrent = (params: RequestParams = {}) =>
    this.request<GetCurrentData, any>({
      path: `/academic-years/current`,
      method: 'GET',
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags academic-years
   * @name FindOne
   * @summary Find One
   * @request GET:/academic-years/{id}
   * @secure
   * @response `200` `FindOneData`
   */
  findOne = (id: string, params: RequestParams = {}) =>
    this.request<FindOneData, any>({
      path: `/academic-years/${id}`,
      method: 'GET',
      secure: true,
      ...params,
    });
  /**
 * No description
 *
 * @tags academic-years
 * @name Remove
 * @summary Remove
 * @request DELETE:/academic-years/{id}
 * @secure
 * @response `200` `RemoveData`
 * @response `400` `({
  \** @example null *\
    data?: object | null,
    message?: string,
  \** @example false *\
    success?: boolean,

})`
 * @response `404` `({
  \** @example null *\
    data?: object | null,
    message?: string,
  \** @example false *\
    success?: boolean,

})`
 */
  remove = (id: string, params: RequestParams = {}) =>
    this.request<RemoveData, RemoveError>({
      path: `/academic-years/${id}`,
      method: 'DELETE',
      secure: true,
      ...params,
    });
  /**
 * No description
 *
 * @tags academic-years
 * @name UpdateCurrent
 * @summary Update Current
 * @request PUT:/academic-years/current/{id}
 * @secure
 * @response `200` `UpdateCurrentData`
 * @response `404` `({
  \** @example null *\
    data?: object | null,
    message?: string,
  \** @example false *\
    success?: boolean,

})`
 */
  updateCurrent = (id: string, params: RequestParams = {}) =>
    this.request<UpdateCurrentData, UpdateCurrentError>({
      path: `/academic-years/current/${id}`,
      method: 'PUT',
      secure: true,
      ...params,
    });
}
