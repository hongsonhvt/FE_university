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
  FindInRangeData,
  FindOneData,
  GetCurrentData,
  RemoveData,
  UpdateCurrentData,
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
   * @request POST:/academic-years
   * @response `201` `CreateData`
   */
  create = (data: CreateAcademicYearDto, params: RequestParams = {}) =>
    this.request<CreateData, any>({
      path: `/academic-years`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags academic-years
   * @name FindInRange
   * @request GET:/academic-years
   * @response `200` `FindInRangeData`
   */
  findInRange = (params: RequestParams = {}) =>
    this.request<FindInRangeData, any>({
      path: `/academic-years`,
      method: 'GET',
      ...params,
    });
  /**
   * No description
   *
   * @tags academic-years
   * @name GetCurrent
   * @request GET:/academic-years/current
   * @response `200` `GetCurrentData`
   */
  getCurrent = (params: RequestParams = {}) =>
    this.request<GetCurrentData, any>({
      path: `/academic-years/current`,
      method: 'GET',
      ...params,
    });
  /**
   * No description
   *
   * @tags academic-years
   * @name FindOne
   * @request GET:/academic-years/{id}
   * @response `200` `FindOneData`
   */
  findOne = (id: string, params: RequestParams = {}) =>
    this.request<FindOneData, any>({
      path: `/academic-years/${id}`,
      method: 'GET',
      ...params,
    });
  /**
   * No description
   *
   * @tags academic-years
   * @name Remove
   * @request DELETE:/academic-years/{id}
   * @response `200` `RemoveData`
   */
  remove = (id: string, params: RequestParams = {}) =>
    this.request<RemoveData, any>({
      path: `/academic-years/${id}`,
      method: 'DELETE',
      ...params,
    });
  /**
   * No description
   *
   * @tags academic-years
   * @name UpdateCurrent
   * @request PUT:/academic-years/current/{id}
   * @response `200` `UpdateCurrentData`
   */
  updateCurrent = (id: string, params: RequestParams = {}) =>
    this.request<UpdateCurrentData, any>({
      path: `/academic-years/current/${id}`,
      method: 'PUT',
      ...params,
    });
}
