// <auto-generated>
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for
// license information.
//
// Code generated by Microsoft (R) AutoRest Code Generator 1.0.0.0
// Changes may cause incorrect behavior and will be lost if the code is
// regenerated.
// </auto-generated>

namespace Microsoft.Azure.IIoT.Opc.Twin
{
    using Microsoft.Rest;
    using Models;
    using Newtonsoft.Json;
    using System.Collections;
    using System.Collections.Generic;
    using System.Threading;
    using System.Threading.Tasks;

    /// <summary>
    /// Azure Industrial IoT OPC UA Twin Service
    /// </summary>
    public partial interface IAzureOpcTwinClient : System.IDisposable
    {
        /// <summary>
        /// The base URI of the service.
        /// </summary>
        System.Uri BaseUri { get; set; }

        /// <summary>
        /// Gets or sets json serialization settings.
        /// </summary>
        JsonSerializerSettings SerializationSettings { get; }

        /// <summary>
        /// Gets or sets json deserialization settings.
        /// </summary>
        JsonSerializerSettings DeserializationSettings { get; }

        /// <summary>
        /// Subscription credentials which uniquely identify client
        /// subscription.
        /// </summary>
        ServiceClientCredentials Credentials { get; }


        /// <summary>
        /// Browse set of unique target nodes
        /// </summary>
        /// <remarks>
        /// Browse the set of unique hierarchically referenced target nodes on
        /// the endpoint.
        /// The endpoint must be activated and connected and the module client
        /// and server must trust each other.
        /// The root node id to browse from can be provided as part of the
        /// query
        /// parameters.
        /// If it is not provided, the RootFolder node is browsed. Note that
        /// this
        /// is the same as the POST method with the model containing the node
        /// id
        /// and the targetNodesOnly flag set to true.
        /// </remarks>
        /// <param name='endpointId'>
        /// The identifier of the activated endpoint.
        /// </param>
        /// <param name='nodeId'>
        /// The node to browse or omit to browse object root
        /// </param>
        /// <param name='customHeaders'>
        /// The headers that will be added to request.
        /// </param>
        /// <param name='cancellationToken'>
        /// The cancellation token.
        /// </param>
        Task<HttpOperationResponse<BrowseResponseApiModel>> GetSetOfUniqueNodesWithHttpMessagesAsync(string endpointId, string nodeId = default(string), Dictionary<string, List<string>> customHeaders = null, CancellationToken cancellationToken = default(CancellationToken));

        /// <summary>
        /// Browse node references
        /// </summary>
        /// <remarks>
        /// Browse a node on the specified endpoint.
        /// The endpoint must be activated and connected and the module client
        /// and server must trust each other.
        /// </remarks>
        /// <param name='endpointId'>
        /// The identifier of the activated endpoint.
        /// </param>
        /// <param name='request'>
        /// The browse request
        /// </param>
        /// <param name='customHeaders'>
        /// The headers that will be added to request.
        /// </param>
        /// <param name='cancellationToken'>
        /// The cancellation token.
        /// </param>
        Task<HttpOperationResponse<BrowseResponseApiModel>> BrowseWithHttpMessagesAsync(string endpointId, BrowseRequestApiModel request, Dictionary<string, List<string>> customHeaders = null, CancellationToken cancellationToken = default(CancellationToken));

        /// <summary>
        /// Browse next set of unique target nodes
        /// </summary>
        /// <remarks>
        /// Browse the next set of unique hierarchically referenced target
        /// nodes on the
        /// endpoint.
        /// The endpoint must be activated and connected and the module client
        /// and server must trust each other.
        /// Note that this is the same as the POST method with the model
        /// containing
        /// the continuation token and the targetNodesOnly flag set to true.
        /// </remarks>
        /// <param name='endpointId'>
        /// The identifier of the activated endpoint.
        /// </param>
        /// <param name='continuationToken'>
        /// Continuation token from GetSetOfUniqueNodes operation
        /// </param>
        /// <param name='customHeaders'>
        /// The headers that will be added to request.
        /// </param>
        /// <param name='cancellationToken'>
        /// The cancellation token.
        /// </param>
        Task<HttpOperationResponse<BrowseNextResponseApiModel>> GetNextSetOfUniqueNodesWithHttpMessagesAsync(string endpointId, string continuationToken, Dictionary<string, List<string>> customHeaders = null, CancellationToken cancellationToken = default(CancellationToken));

        /// <summary>
        /// Browse next set of references
        /// </summary>
        /// <remarks>
        /// Browse next set of references on the endpoint.
        /// The endpoint must be activated and connected and the module client
        /// and server must trust each other.
        /// </remarks>
        /// <param name='endpointId'>
        /// The identifier of the activated endpoint.
        /// </param>
        /// <param name='request'>
        /// The request body with continuation token.
        /// </param>
        /// <param name='customHeaders'>
        /// The headers that will be added to request.
        /// </param>
        /// <param name='cancellationToken'>
        /// The cancellation token.
        /// </param>
        Task<HttpOperationResponse<BrowseNextResponseApiModel>> BrowseNextWithHttpMessagesAsync(string endpointId, BrowseNextRequestApiModel request, Dictionary<string, List<string>> customHeaders = null, CancellationToken cancellationToken = default(CancellationToken));

        /// <summary>
        /// Browse using a browse path
        /// </summary>
        /// <remarks>
        /// Browse using a path from the specified node id.
        /// This call uses TranslateBrowsePathsToNodeIds service under the
        /// hood.
        /// The endpoint must be activated and connected and the module client
        /// and server must trust each other.
        /// </remarks>
        /// <param name='endpointId'>
        /// The identifier of the activated endpoint.
        /// </param>
        /// <param name='request'>
        /// The browse path request
        /// </param>
        /// <param name='customHeaders'>
        /// The headers that will be added to request.
        /// </param>
        /// <param name='cancellationToken'>
        /// The cancellation token.
        /// </param>
        Task<HttpOperationResponse<BrowsePathResponseApiModel>> BrowseUsingPathWithHttpMessagesAsync(string endpointId, BrowsePathRequestApiModel request, Dictionary<string, List<string>> customHeaders = null, CancellationToken cancellationToken = default(CancellationToken));

        /// <summary>
        /// Get method meta data
        /// </summary>
        /// <remarks>
        /// Return method meta data to support a user interface displaying
        /// forms to
        /// input and output arguments.
        /// The endpoint must be activated and connected and the module client
        /// and server must trust each other.
        /// </remarks>
        /// <param name='endpointId'>
        /// The identifier of the activated endpoint.
        /// </param>
        /// <param name='request'>
        /// The method metadata request
        /// </param>
        /// <param name='customHeaders'>
        /// The headers that will be added to request.
        /// </param>
        /// <param name='cancellationToken'>
        /// The cancellation token.
        /// </param>
        Task<HttpOperationResponse<MethodMetadataResponseApiModel>> GetCallMetadataWithHttpMessagesAsync(string endpointId, MethodMetadataRequestApiModel request, Dictionary<string, List<string>> customHeaders = null, CancellationToken cancellationToken = default(CancellationToken));

        /// <summary>
        /// Call a method
        /// </summary>
        /// <remarks>
        /// Invoke method node with specified input arguments.
        /// The endpoint must be activated and connected and the module client
        /// and server must trust each other.
        /// </remarks>
        /// <param name='endpointId'>
        /// The identifier of the activated endpoint.
        /// </param>
        /// <param name='request'>
        /// The method call request
        /// </param>
        /// <param name='customHeaders'>
        /// The headers that will be added to request.
        /// </param>
        /// <param name='cancellationToken'>
        /// The cancellation token.
        /// </param>
        Task<HttpOperationResponse<MethodCallResponseApiModel>> CallMethodWithHttpMessagesAsync(string endpointId, MethodCallRequestApiModel request, Dictionary<string, List<string>> customHeaders = null, CancellationToken cancellationToken = default(CancellationToken));

        /// <summary>
        /// Start publishing node values
        /// </summary>
        /// <remarks>
        /// Start publishing variable node values to IoT Hub.
        /// The endpoint must be activated and connected and the module client
        /// and server must trust each other.
        /// </remarks>
        /// <param name='endpointId'>
        /// The identifier of the activated endpoint.
        /// </param>
        /// <param name='request'>
        /// The publish request
        /// </param>
        /// <param name='customHeaders'>
        /// The headers that will be added to request.
        /// </param>
        /// <param name='cancellationToken'>
        /// The cancellation token.
        /// </param>
        Task<HttpOperationResponse<PublishStartResponseApiModel>> StartPublishingValuesWithHttpMessagesAsync(string endpointId, PublishStartRequestApiModel request, Dictionary<string, List<string>> customHeaders = null, CancellationToken cancellationToken = default(CancellationToken));

        /// <summary>
        /// Stop publishing node values
        /// </summary>
        /// <remarks>
        /// Stop publishing variable node values to IoT Hub.
        /// The endpoint must be activated and connected and the module client
        /// and server must trust each other.
        /// </remarks>
        /// <param name='endpointId'>
        /// The identifier of the activated endpoint.
        /// </param>
        /// <param name='request'>
        /// The unpublish request
        /// </param>
        /// <param name='customHeaders'>
        /// The headers that will be added to request.
        /// </param>
        /// <param name='cancellationToken'>
        /// The cancellation token.
        /// </param>
        Task<HttpOperationResponse<PublishStopResponseApiModel>> StopPublishingValuesWithHttpMessagesAsync(string endpointId, PublishStopRequestApiModel request, Dictionary<string, List<string>> customHeaders = null, CancellationToken cancellationToken = default(CancellationToken));

        /// <summary>
        /// Get next set of published nodes
        /// </summary>
        /// <remarks>
        /// Returns next set of currently published node ids for an endpoint.
        /// The endpoint must be activated and connected and the module client
        /// and server must trust each other.
        /// </remarks>
        /// <param name='endpointId'>
        /// The identifier of the activated endpoint.
        /// </param>
        /// <param name='continuationToken'>
        /// The continuation token to continue with
        /// </param>
        /// <param name='customHeaders'>
        /// The headers that will be added to request.
        /// </param>
        /// <param name='cancellationToken'>
        /// The cancellation token.
        /// </param>
        Task<HttpOperationResponse<PublishedItemListResponseApiModel>> GetNextListOfPublishedNodesWithHttpMessagesAsync(string endpointId, string continuationToken, Dictionary<string, List<string>> customHeaders = null, CancellationToken cancellationToken = default(CancellationToken));

        /// <summary>
        /// Get currently published nodes
        /// </summary>
        /// <remarks>
        /// Returns currently published node ids for an endpoint.
        /// The endpoint must be activated and connected and the module client
        /// and server must trust each other.
        /// </remarks>
        /// <param name='endpointId'>
        /// The identifier of the activated endpoint.
        /// </param>
        /// <param name='request'>
        /// The list request
        /// </param>
        /// <param name='customHeaders'>
        /// The headers that will be added to request.
        /// </param>
        /// <param name='cancellationToken'>
        /// The cancellation token.
        /// </param>
        Task<HttpOperationResponse<PublishedItemListResponseApiModel>> GetFirstListOfPublishedNodesWithHttpMessagesAsync(string endpointId, PublishedItemListRequestApiModel request, Dictionary<string, List<string>> customHeaders = null, CancellationToken cancellationToken = default(CancellationToken));

        /// <summary>
        /// Get variable value
        /// </summary>
        /// <remarks>
        /// Get a variable node's value using its node id.
        /// The endpoint must be activated and connected and the module client
        /// and server must trust each other.
        /// </remarks>
        /// <param name='endpointId'>
        /// The identifier of the activated endpoint.
        /// </param>
        /// <param name='nodeId'>
        /// The node to read
        /// </param>
        /// <param name='customHeaders'>
        /// The headers that will be added to request.
        /// </param>
        /// <param name='cancellationToken'>
        /// The cancellation token.
        /// </param>
        Task<HttpOperationResponse<ValueReadResponseApiModel>> GetValueWithHttpMessagesAsync(string endpointId, string nodeId, Dictionary<string, List<string>> customHeaders = null, CancellationToken cancellationToken = default(CancellationToken));

        /// <summary>
        /// Read variable value
        /// </summary>
        /// <remarks>
        /// Read a variable node's value.
        /// The endpoint must be activated and connected and the module client
        /// and server must trust each other.
        /// </remarks>
        /// <param name='endpointId'>
        /// The identifier of the activated endpoint.
        /// </param>
        /// <param name='request'>
        /// The read value request
        /// </param>
        /// <param name='customHeaders'>
        /// The headers that will be added to request.
        /// </param>
        /// <param name='cancellationToken'>
        /// The cancellation token.
        /// </param>
        Task<HttpOperationResponse<ValueReadResponseApiModel>> ReadValueWithHttpMessagesAsync(string endpointId, ValueReadRequestApiModel request, Dictionary<string, List<string>> customHeaders = null, CancellationToken cancellationToken = default(CancellationToken));

        /// <summary>
        /// Read node attributes
        /// </summary>
        /// <remarks>
        /// Read attributes of a node.
        /// The endpoint must be activated and connected and the module client
        /// and server must trust each other.
        /// </remarks>
        /// <param name='endpointId'>
        /// The identifier of the activated endpoint.
        /// </param>
        /// <param name='request'>
        /// The read request
        /// </param>
        /// <param name='customHeaders'>
        /// The headers that will be added to request.
        /// </param>
        /// <param name='cancellationToken'>
        /// The cancellation token.
        /// </param>
        Task<HttpOperationResponse<ReadResponseApiModel>> ReadAttributesWithHttpMessagesAsync(string endpointId, ReadRequestApiModel request, Dictionary<string, List<string>> customHeaders = null, CancellationToken cancellationToken = default(CancellationToken));

        /// <summary>
        /// Read node history
        /// </summary>
        /// <remarks>
        /// Read node history if available using historic access.
        /// The endpoint must be activated and connected and the module client
        /// and server must trust each other.
        /// </remarks>
        /// <param name='endpointId'>
        /// The identifier of the activated endpoint.
        /// </param>
        /// <param name='request'>
        /// The history read request
        /// </param>
        /// <param name='customHeaders'>
        /// The headers that will be added to request.
        /// </param>
        /// <param name='cancellationToken'>
        /// The cancellation token.
        /// </param>
        Task<HttpOperationResponse<HistoryReadResponseApiModel>> ReadHistoryWithHttpMessagesAsync(string endpointId, HistoryReadRequestApiModel request, Dictionary<string, List<string>> customHeaders = null, CancellationToken cancellationToken = default(CancellationToken));

        /// <summary>
        /// Read next batch of node history
        /// </summary>
        /// <remarks>
        /// Read next batch of node history values using historic access.
        /// The endpoint must be activated and connected and the module client
        /// and server must trust each other.
        /// </remarks>
        /// <param name='endpointId'>
        /// The identifier of the activated endpoint.
        /// </param>
        /// <param name='request'>
        /// The history read next request
        /// </param>
        /// <param name='customHeaders'>
        /// The headers that will be added to request.
        /// </param>
        /// <param name='cancellationToken'>
        /// The cancellation token.
        /// </param>
        Task<HttpOperationResponse<HistoryReadNextResponseApiModel>> ReadHistoryNextWithHttpMessagesAsync(string endpointId, HistoryReadNextRequestApiModel request, Dictionary<string, List<string>> customHeaders = null, CancellationToken cancellationToken = default(CancellationToken));

        /// <summary>
        /// Return the service status in the form of the service status
        /// api model.
        /// </summary>
        /// <param name='customHeaders'>
        /// The headers that will be added to request.
        /// </param>
        /// <param name='cancellationToken'>
        /// The cancellation token.
        /// </param>
        Task<HttpOperationResponse<StatusResponseApiModel>> GetStatusWithHttpMessagesAsync(Dictionary<string, List<string>> customHeaders = null, CancellationToken cancellationToken = default(CancellationToken));

        /// <summary>
        /// Write variable value
        /// </summary>
        /// <remarks>
        /// Write variable node's value.
        /// The endpoint must be activated and connected and the module client
        /// and server must trust each other.
        /// </remarks>
        /// <param name='endpointId'>
        /// The identifier of the activated endpoint.
        /// </param>
        /// <param name='request'>
        /// The write value request
        /// </param>
        /// <param name='customHeaders'>
        /// The headers that will be added to request.
        /// </param>
        /// <param name='cancellationToken'>
        /// The cancellation token.
        /// </param>
        Task<HttpOperationResponse<ValueWriteResponseApiModel>> WriteValueWithHttpMessagesAsync(string endpointId, ValueWriteRequestApiModel request, Dictionary<string, List<string>> customHeaders = null, CancellationToken cancellationToken = default(CancellationToken));

        /// <summary>
        /// Write node attributes
        /// </summary>
        /// <remarks>
        /// Write any attribute of a node.
        /// The endpoint must be activated and connected and the module client
        /// and server must trust each other.
        /// </remarks>
        /// <param name='endpointId'>
        /// The identifier of the activated endpoint.
        /// </param>
        /// <param name='request'>
        /// The batch write request
        /// </param>
        /// <param name='customHeaders'>
        /// The headers that will be added to request.
        /// </param>
        /// <param name='cancellationToken'>
        /// The cancellation token.
        /// </param>
        Task<HttpOperationResponse<WriteResponseApiModel>> WriteAttributesWithHttpMessagesAsync(string endpointId, WriteRequestApiModel request, Dictionary<string, List<string>> customHeaders = null, CancellationToken cancellationToken = default(CancellationToken));

        /// <summary>
        /// Update node history
        /// </summary>
        /// <remarks>
        /// Update node history using historic access.
        /// The endpoint must be activated and connected and the module client
        /// and server must trust each other.
        /// </remarks>
        /// <param name='endpointId'>
        /// The identifier of the activated endpoint.
        /// </param>
        /// <param name='request'>
        /// The history read request
        /// </param>
        /// <param name='customHeaders'>
        /// The headers that will be added to request.
        /// </param>
        /// <param name='cancellationToken'>
        /// The cancellation token.
        /// </param>
        Task<HttpOperationResponse<HistoryUpdateResponseApiModel>> WriteHistoryWithHttpMessagesAsync(string endpointId, HistoryUpdateRequestApiModel request, Dictionary<string, List<string>> customHeaders = null, CancellationToken cancellationToken = default(CancellationToken));

    }
}
