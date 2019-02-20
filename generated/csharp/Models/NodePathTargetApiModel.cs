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
    /// Node path target
    /// </summary>
    public partial class NodePathTargetApiModel
    {
        /// <summary>
        /// Initializes a new instance of the NodePathTargetApiModel class.
        /// </summary>
        public NodePathTargetApiModel()
        {
            CustomInit();
        }

        /// <summary>
        /// Initializes a new instance of the NodePathTargetApiModel class.
        /// </summary>
        /// <param name="target">Target node</param>
        /// <param name="remainingPathIndex">Remaining index in path</param>
        public NodePathTargetApiModel(NodeApiModel target, int? remainingPathIndex = default(int?))
        {
            Target = target;
            RemainingPathIndex = remainingPathIndex;
            CustomInit();
        }

        /// <summary>
        /// An initialization method that performs custom operations like setting defaults
        /// </summary>
        partial void CustomInit();

        /// <summary>
        /// Gets or sets target node
        /// </summary>
        [JsonProperty(PropertyName = "target")]
        public NodeApiModel Target { get; set; }

        /// <summary>
        /// Gets or sets remaining index in path
        /// </summary>
        [JsonProperty(PropertyName = "remainingPathIndex")]
        public int? RemainingPathIndex { get; set; }

        /// <summary>
        /// Validate the object.
        /// </summary>
        /// <exception cref="ValidationException">
        /// Thrown if validation fails
        /// </exception>
        public virtual void Validate()
        {
            if (Target == null)
            {
                throw new ValidationException(ValidationRules.CannotBeNull, "Target");
            }
            if (Target != null)
            {
                Target.Validate();
            }
        }
    }
}
