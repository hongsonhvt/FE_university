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
  ApproveRequestData,
  ApproveRequestError,
  CancelRequestData,
  CancelRequestError,
  FindRequestsByConditionData,
  FindRequestsByConditionQuery,
  RejectRequestData,
  RejectRequestError,
  UpdateChangeSessionRequestDto,
  UpdateRequestData,
  UpdateRequestError,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class ChangeSessionRequests<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags change-session-requests
   * @name FindRequestsByCondition
   * @summary Find Requests By Condition
   * @request GET:/change-session-requests
   * @secure
   * @response `200` `FindRequestsByConditionData`
   */
  findRequestsByCondition = (
    query: FindRequestsByConditionQuery,
    params: RequestParams = {},
  ) =>
    this.request<FindRequestsByConditionData, any>({
      path: `/change-session-requests`,
      method: 'GET',
      query: query,
      secure: true,
      ...params,
    });
  /**
 * No description
 *
 * @tags change-session-requests
 * @name UpdateRequest
 * @summary Update Request
 * @request PATCH:/change-session-requests/{id}
 * @secure
 * @response `200` `UpdateRequestData`
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
  updateRequest = (
    id: string,
    data: UpdateChangeSessionRequestDto,
    params: RequestParams = {},
  ) =>
    this.request<UpdateRequestData, UpdateRequestError>({
      path: `/change-session-requests/${id}`,
      method: 'PATCH',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
 * No description
 *
 * @tags change-session-requests
 * @name ApproveRequest
 * @summary Approve Request
 * @request PATCH:/change-session-requests/{id}/approve
 * @secure
 * @response `200` `ApproveRequestData`
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
  approveRequest = (id: string, params: RequestParams = {}) =>
    this.request<ApproveRequestData, ApproveRequestError>({
      path: `/change-session-requests/${id}/approve`,
      method: 'PATCH',
      secure: true,
      ...params,
    });
  /**
 * No description
 *
 * @tags change-session-requests
 * @name CancelRequest
 * @summary Cancel Request
 * @request PATCH:/change-session-requests/{id}/cancel
 * @secure
 * @response `200` `CancelRequestData`
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
  cancelRequest = (id: string, params: RequestParams = {}) =>
    this.request<CancelRequestData, CancelRequestError>({
      path: `/change-session-requests/${id}/cancel`,
      method: 'PATCH',
      secure: true,
      ...params,
    });
  /**
 * No description
 *
 * @tags change-session-requests
 * @name RejectRequest
 * @summary Reject Request
 * @request PATCH:/change-session-requests/{id}/reject
 * @secure
 * @response `200` `RejectRequestData`
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
  rejectRequest = (id: string, params: RequestParams = {}) =>
    this.request<RejectRequestData, RejectRequestError>({
      path: `/change-session-requests/${id}/reject`,
      method: 'PATCH',
      secure: true,
      ...params,
    });
}
