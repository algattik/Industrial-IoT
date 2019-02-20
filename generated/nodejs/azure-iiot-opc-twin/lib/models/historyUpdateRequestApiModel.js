/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator 1.0.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Request node history update
 *
 */
class HistoryUpdateRequestApiModel {
  /**
   * Create a HistoryUpdateRequestApiModel.
   * @property {object} request The HistoryUpdateDetailsType extension object
   * encoded in json and containing the tunneled
   * update request for the Historian server.
   * @property {object} [elevation] Optional User elevation
   * @property {string} [elevation.type] Type of credential. Possible values
   * include: 'None', 'UserName', 'X509Certificate', 'JwtToken'
   * @property {object} [elevation.value] Value to pass to server
   * @property {object} [diagnostics] Optional diagnostics configuration
   * @property {string} [diagnostics.level] Requested level of response
   * diagnostics.
   * (default: Status). Possible values include: 'None', 'Status',
   * 'Operations', 'Diagnostics', 'Verbose'
   * @property {string} [diagnostics.auditId] Client audit log entry.
   * (default: client generated)
   * @property {date} [diagnostics.timeStamp] Timestamp of request.
   * (default: client generated)
   */
  constructor() {
  }

  /**
   * Defines the metadata of HistoryUpdateRequestApiModel
   *
   * @returns {object} metadata of HistoryUpdateRequestApiModel
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'HistoryUpdateRequestApiModel',
      type: {
        name: 'Composite',
        className: 'HistoryUpdateRequestApiModel',
        modelProperties: {
          request: {
            required: true,
            serializedName: 'request',
            type: {
              name: 'Object'
            }
          },
          elevation: {
            required: false,
            serializedName: 'elevation',
            type: {
              name: 'Composite',
              className: 'CredentialApiModel'
            }
          },
          diagnostics: {
            required: false,
            serializedName: 'diagnostics',
            type: {
              name: 'Composite',
              className: 'DiagnosticsApiModel'
            }
          }
        }
      }
    };
  }
}

module.exports = HistoryUpdateRequestApiModel;
