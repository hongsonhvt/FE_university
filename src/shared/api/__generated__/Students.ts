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
  FindAllData,
  FindOneData,
  RemoveData,
  UpdateData,
  UpdateStudentDto,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Students<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @name FindAll
   * @request GET:/students
   * @response `200` `FindAllData`
   */
  findAll = (params: RequestParams = {}) =>
    this.request<FindAllData, any>({
      path: `/students`,
      method: 'GET',
      ...params,
    });
  /**
   * No description
   *
   * @name FindOne
   * @request GET:/students/{id}
   * @response `200` `FindOneData`
   */
  findOne = (id: string, params: RequestParams = {}) =>
    this.request<FindOneData, any>({
      path: `/students/${id}`,
      method: 'GET',
      ...params,
    });
  /**
   * No description
   *
   * @name Update
   * @request PATCH:/students/{id}
   * @response `200` `UpdateData`
   */
  update = (id: string, data: UpdateStudentDto, params: RequestParams = {}) =>
    this.request<UpdateData, any>({
      path: `/students/${id}`,
      method: 'PATCH',
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @name Remove
   * @request DELETE:/students/{id}
   * @response `200` `RemoveData`
   */
  remove = (id: string, params: RequestParams = {}) =>
    this.request<RemoveData, any>({
      path: `/students/${id}`,
      method: 'DELETE',
      ...params,
    });
}
