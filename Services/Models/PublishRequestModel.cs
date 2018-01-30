﻿// ------------------------------------------------------------
//  Copyright (c) Microsoft Corporation.  All rights reserved.
//  Licensed under the MIT License (MIT). See License.txt in the repo root for license information.
// ------------------------------------------------------------

namespace Microsoft.Azure.IoTSolutions.OpcUaExplorer.Services.Models {

    /// <summary>
    /// Publish request
    /// </summary>
    public class PublishRequestModel {

        /// <summary>
        /// Node to publish or disable publishing from.
        /// </summary>
        public string NodeId { get; set; }

        /// <summary>
        /// Enabled or disable publishing
        /// </summary>
        public bool Enabled { get; set; }
    }
}
