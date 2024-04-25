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
  CreateAcademicYearData,
  CreateAcademicYearDto,
  CreateAcademicYearError,
  FindAcademicYearInRangeData,
  FindAcademicYearInRangeQuery,
  FindOneAcademicYearData,
  GetCurrentAcademicYearData,
  RemoveAcademicYearData,
  RemoveAcademicYearError,
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
 * @name CreateAcademicYear
 * @summary Create Academic Year
 * @request POST:/academic-years
 * @secure
 * @response `201` `CreateAcademicYearData`
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
  createAcademicYear = (
    data: CreateAcademicYearDto,
    params: RequestParams = {},
  ) =>
    this.request<CreateAcademicYearData, CreateAcademicYearError>({
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
   * @name FindAcademicYearInRange
   * @summary Find Academic Year In Range
   * @request GET:/academic-years
   * @secure
   * @response `200` `FindAcademicYearInRangeData`
   */
  findAcademicYearInRange = (
    query: FindAcademicYearInRangeQuery,
    params: RequestParams = {},
  ) =>
    this.request<FindAcademicYearInRangeData, any>({
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
   * @name GetCurrentAcademicYear
   * @summary Get Current Academic Year
   * @request GET:/academic-years/current
   * @secure
   * @response `200` `GetCurrentAcademicYearData`
   */
  getCurrentAcademicYear = (params: RequestParams = {}) =>
    this.request<GetCurrentAcademicYearData, any>({
      path: `/academic-years/current`,
      method: 'GET',
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags academic-years
   * @name FindOneAcademicYear
   * @summary Find One Academic Year
   * @request GET:/academic-years/{id}
   * @secure
   * @response `200` `FindOneAcademicYearData`
   */
  findOneAcademicYear = (id: string, params: RequestParams = {}) =>
    this.request<FindOneAcademicYearData, any>({
      path: `/academic-years/${id}`,
      method: 'GET',
      secure: true,
      ...params,
    });
  /**
 * No description
 *
 * @tags academic-years
 * @name RemoveAcademicYear
 * @summary Remove Academic Year
 * @request DELETE:/academic-years/{id}
 * @secure
 * @response `200` `RemoveAcademicYearData`
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
  removeAcademicYear = (id: string, params: RequestParams = {}) =>
    this.request<RemoveAcademicYearData, RemoveAcademicYearError>({
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
