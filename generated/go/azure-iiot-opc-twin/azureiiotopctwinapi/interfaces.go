package azureiiotopctwinapi

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for
// license information.
//
// Code generated by Microsoft (R) AutoRest Code Generator 1.0.0.0
// Changes may cause incorrect behavior and will be lost if the code is
// regenerated.

import (
    "context"
    "go/azure-iiot-opc-twin"
)

        // BaseClientAPI contains the set of methods on the BaseClient type.
        type BaseClientAPI interface {
            Browse(ctx context.Context, endpointID string, request azureiiotopctwin.BrowseRequestAPIModel) (result azureiiotopctwin.BrowseResponseAPIModel, err error)
            BrowseNext(ctx context.Context, endpointID string, request azureiiotopctwin.BrowseNextRequestAPIModel) (result azureiiotopctwin.BrowseNextResponseAPIModel, err error)
            BrowseUsingPath(ctx context.Context, endpointID string, request azureiiotopctwin.BrowsePathRequestAPIModel) (result azureiiotopctwin.BrowsePathResponseAPIModel, err error)
            CallMethod(ctx context.Context, endpointID string, request azureiiotopctwin.MethodCallRequestAPIModel) (result azureiiotopctwin.MethodCallResponseAPIModel, err error)
            GetCallMetadata(ctx context.Context, endpointID string, request azureiiotopctwin.MethodMetadataRequestAPIModel) (result azureiiotopctwin.MethodMetadataResponseAPIModel, err error)
            GetFirstListOfPublishedNodes(ctx context.Context, endpointID string, request azureiiotopctwin.PublishedItemListRequestAPIModel) (result azureiiotopctwin.PublishedItemListResponseAPIModel, err error)
            GetNextListOfPublishedNodes(ctx context.Context, endpointID string, continuationToken string) (result azureiiotopctwin.PublishedItemListResponseAPIModelPage, err error)
            GetNextSetOfUniqueNodes(ctx context.Context, endpointID string, continuationToken string) (result azureiiotopctwin.BrowseNextResponseAPIModelPage, err error)
            GetSetOfUniqueNodes(ctx context.Context, endpointID string, nodeID string) (result azureiiotopctwin.BrowseResponseAPIModel, err error)
            GetStatus(ctx context.Context) (result azureiiotopctwin.StatusResponseAPIModel, err error)
            GetValue(ctx context.Context, endpointID string, nodeID string) (result azureiiotopctwin.ValueReadResponseAPIModel, err error)
            ReadAttributes(ctx context.Context, endpointID string, request azureiiotopctwin.ReadRequestAPIModel) (result azureiiotopctwin.ReadResponseAPIModel, err error)
            ReadHistory(ctx context.Context, endpointID string, request azureiiotopctwin.HistoryReadRequestAPIModel) (result azureiiotopctwin.HistoryReadResponseAPIModel, err error)
            ReadHistoryNext(ctx context.Context, endpointID string, request azureiiotopctwin.HistoryReadNextRequestAPIModel) (result azureiiotopctwin.HistoryReadNextResponseAPIModel, err error)
            ReadValue(ctx context.Context, endpointID string, request azureiiotopctwin.ValueReadRequestAPIModel) (result azureiiotopctwin.ValueReadResponseAPIModel, err error)
            StartPublishingValues(ctx context.Context, endpointID string, request azureiiotopctwin.PublishStartRequestAPIModel) (result azureiiotopctwin.PublishStartResponseAPIModel, err error)
            StopPublishingValues(ctx context.Context, endpointID string, request azureiiotopctwin.PublishStopRequestAPIModel) (result azureiiotopctwin.PublishStopResponseAPIModel, err error)
            WriteAttributes(ctx context.Context, endpointID string, request azureiiotopctwin.WriteRequestAPIModel) (result azureiiotopctwin.WriteResponseAPIModel, err error)
            WriteHistory(ctx context.Context, endpointID string, request azureiiotopctwin.HistoryUpdateRequestAPIModel) (result azureiiotopctwin.HistoryUpdateResponseAPIModel, err error)
            WriteValue(ctx context.Context, endpointID string, request azureiiotopctwin.ValueWriteRequestAPIModel) (result azureiiotopctwin.ValueWriteResponseAPIModel, err error)
        }

        var _ BaseClientAPI = (*azureiiotopctwin.BaseClient)(nil)
