// <auto-generated>
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for
// license information.
//
// Code generated by Microsoft (R) AutoRest Code Generator 1.0.0.0
// Changes may cause incorrect behavior and will be lost if the code is
// regenerated.
// </auto-generated>

namespace Microsoft.Azure.IIoT.Opc.Twin.Models
{
    using Microsoft.Rest;
    using Newtonsoft.Json;
    using System.Linq;

    /// <summary>
    /// Unpublish request
    /// </summary>
    public partial class PublishStopRequestApiModel
    {
        /// <summary>
        /// Initializes a new instance of the PublishStopRequestApiModel class.
        /// </summary>
        public PublishStopRequestApiModel()
        {
            CustomInit();
        }

        /// <summary>
        /// Initializes a new instance of the PublishStopRequestApiModel class.
        /// </summary>
        /// <param name="nodeId">Node of item to unpublish</param>
        /// <param name="nodeAttribute">Attribute of item to unpublish.
        /// Possible values include: 'NodeClass', 'BrowseName', 'DisplayName',
        /// 'Description', 'WriteMask', 'UserWriteMask', 'IsAbstract',
        /// 'Symmetric', 'InverseName', 'ContainsNoLoops', 'EventNotifier',
        /// 'Value', 'DataType', 'ValueRank', 'ArrayDimensions', 'AccessLevel',
        /// 'UserAccessLevel', 'MinimumSamplingInterval', 'Historizing',
        /// 'Executable', 'UserExecutable', 'DataTypeDefinition',
        /// 'RolePermissions', 'UserRolePermissions',
        /// 'AccessRestrictions'</param>
        /// <param name="diagnostics">Optional diagnostics
        /// configuration</param>
        public PublishStopRequestApiModel(string nodeId, NodeAttribute? nodeAttribute = default(NodeAttribute?), DiagnosticsApiModel diagnostics = default(DiagnosticsApiModel))
        {
            NodeId = nodeId;
            NodeAttribute = nodeAttribute;
            Diagnostics = diagnostics;
            CustomInit();
        }

        /// <summary>
        /// An initialization method that performs custom operations like setting defaults
        /// </summary>
        partial void CustomInit();

        /// <summary>
        /// Gets or sets node of item to unpublish
        /// </summary>
        [JsonProperty(PropertyName = "nodeId")]
        public string NodeId { get; set; }

        /// <summary>
        /// Gets or sets attribute of item to unpublish. Possible values
        /// include: 'NodeClass', 'BrowseName', 'DisplayName', 'Description',
        /// 'WriteMask', 'UserWriteMask', 'IsAbstract', 'Symmetric',
        /// 'InverseName', 'ContainsNoLoops', 'EventNotifier', 'Value',
        /// 'DataType', 'ValueRank', 'ArrayDimensions', 'AccessLevel',
        /// 'UserAccessLevel', 'MinimumSamplingInterval', 'Historizing',
        /// 'Executable', 'UserExecutable', 'DataTypeDefinition',
        /// 'RolePermissions', 'UserRolePermissions', 'AccessRestrictions'
        /// </summary>
        [JsonProperty(PropertyName = "nodeAttribute")]
        public NodeAttribute? NodeAttribute { get; set; }

        /// <summary>
        /// Gets or sets optional diagnostics configuration
        /// </summary>
        [JsonProperty(PropertyName = "diagnostics")]
        public DiagnosticsApiModel Diagnostics { get; set; }

        /// <summary>
        /// Validate the object.
        /// </summary>
        /// <exception cref="ValidationException">
        /// Thrown if validation fails
        /// </exception>
        public virtual void Validate()
        {
            if (NodeId == null)
            {
                throw new ValidationException(ValidationRules.CannotBeNull, "NodeId");
            }
        }
    }
}
