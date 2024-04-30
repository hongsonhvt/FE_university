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
  GetMyScoresData,
  GetMyScoresError,
  GetMyScoresQuery,
} from './data-contracts';
import { HttpClient, RequestParams } from './http-client';

export class Scores<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
 * No description
 *
 * @tags scores
 * @name GetMyScores
 * @summary Get My Scores
 * @request GET:/scores
 * @secure
 * @response `200` `GetMyScoresData`
 * @response `404` `({
  \** @example null *\
    data?: object | null,
    message?: string,
  \** @example false *\
    success?: boolean,

})`
 */
  getMyScores = (query: GetMyScoresQuery, params: RequestParams = {}) =>
    this.request<GetMyScoresData, GetMyScoresError>({
      path: `/scores`,
      method: 'GET',
      query: query,
      secure: true,
      ...params,
    });
}
