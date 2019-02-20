// <auto-generated>
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for
// license information.
//
// Code generated by Microsoft (R) AutoRest Code Generator 1.0.0.0
// Changes may cause incorrect behavior and will be lost if the code is
// regenerated.
// </auto-generated>

namespace Microsoft.Azure.IIoT.Opc.Registry.Models
{
    using Newtonsoft.Json;
    using Newtonsoft.Json.Converters;
    using System.Runtime;
    using System.Runtime.Serialization;

    /// <summary>
    /// Defines values for ApplicationType.
    /// </summary>
    [JsonConverter(typeof(StringEnumConverter))]
    public enum ApplicationType
    {
        [EnumMember(Value = "Server")]
        Server,
        [EnumMember(Value = "Client")]
        Client,
        [EnumMember(Value = "ClientAndServer")]
        ClientAndServer
    }
    internal static class ApplicationTypeEnumExtension
    {
        internal static string ToSerializedValue(this ApplicationType? value)
        {
            return value == null ? null : ((ApplicationType)value).ToSerializedValue();
        }

        internal static string ToSerializedValue(this ApplicationType value)
        {
            switch( value )
            {
                case ApplicationType.Server:
                    return "Server";
                case ApplicationType.Client:
                    return "Client";
                case ApplicationType.ClientAndServer:
                    return "ClientAndServer";
            }
            return null;
        }

        internal static ApplicationType? ParseApplicationType(this string value)
        {
            switch( value )
            {
                case "Server":
                    return ApplicationType.Server;
                case "Client":
                    return ApplicationType.Client;
                case "ClientAndServer":
                    return ApplicationType.ClientAndServer;
            }
            return null;
        }
    }
}
