/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator 1.0.0.0
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as moment from "moment";

/**
 * browse view model
 */
export interface BrowseViewApiModel {
  /**
   * Node of the view to browse
   */
  viewId: string;
  /**
   * Browses specific version of the view.
   */
  version?: number;
  /**
   * Browses at or before this timestamp.
   */
  timestamp?: Date;
}

/**
 * Credential model
 */
export interface CredentialApiModel {
  /**
   * Type of credential. Possible values include: 'None', 'UserName', 'X509Certificate', 'JwtToken'
   */
  type?: string;
  /**
   * Value to pass to server
   */
  value?: any;
}

/**
 * Diagnostics configuration
 */
export interface DiagnosticsApiModel {
  /**
   * Requested level of response diagnostics.
   * (default: Status). Possible values include: 'None', 'Status', 'Operations', 'Diagnostics',
   * 'Verbose'
   */
  level?: string;
  /**
   * Client audit log entry.
   * (default: client generated)
   */
  auditId?: string;
  /**
   * Timestamp of request.
   * (default: client generated)
   */
  timeStamp?: Date;
}

/**
 * Browse request model
 */
export interface BrowseRequestApiModel {
  /**
   * Node to browse.
   * (default: RootFolder).
   */
  nodeId?: string;
  /**
   * Direction to browse in
   * (default: forward). Possible values include: 'Forward', 'Backward', 'Both'
   */
  direction?: string;
  /**
   * View to browse
   * (default: null = new view = All nodes).
   */
  view?: BrowseViewApiModel;
  /**
   * Reference types to browse.
   * (default: hierarchical).
   */
  referenceTypeId?: string;
  /**
   * Whether to include subtypes of the reference type.
   * (default is false)
   */
  noSubtypes?: boolean;
  /**
   * Max number of references to return. There might
   * be less returned as this is up to the client
   * restrictions.  Set to 0 to return no references
   * or target nodes.
   * (default is decided by client e.g. 60)
   */
  maxReferencesToReturn?: number;
  /**
   * Whether to collapse all references into a set of
   * unique target nodes and not show reference
   * information.
   * (default is false)
   */
  targetNodesOnly?: boolean;
  /**
   * Whether to read variable values on target nodes.
   * (default is false)
   */
  readVariableValues?: boolean;
  /**
   * Optional User elevation
   */
  elevation?: CredentialApiModel;
  /**
   * Optional diagnostics configuration
   */
  diagnostics?: DiagnosticsApiModel;
}

/**
 * Role permission model
 */
export interface RolePermissionApiModel {
  /**
   * Identifier of the role object.
   */
  roleId: string;
  /**
   * Permissions assigned for the role. Possible values include: 'Browse', 'ReadRolePermissions',
   * 'WriteAttribute', 'WriteRolePermissions', 'WriteHistorizing', 'Read', 'Write', 'ReadHistory',
   * 'InsertHistory', 'ModifyHistory', 'DeleteHistory', 'ReceiveEvents', 'Call', 'AddReference',
   * 'RemoveReference', 'DeleteNode', 'AddNode'
   */
  permissions?: string;
}

/**
 * node model
 */
export interface NodeApiModel {
  /**
   * Type of node. Possible values include: 'Object', 'Variable', 'Method', 'ObjectType',
   * 'VariableType', 'ReferenceType', 'DataType', 'View'
   */
  nodeClass?: string;
  /**
   * Display name
   */
  displayName?: string;
  /**
   * Id of node.
   * (Mandatory).
   */
  id: string;
  /**
   * Description if any
   */
  description?: string;
  /**
   * Whether node has children which are defined as
   * any forward hierarchical references.
   * (default: unknown)
   */
  children?: boolean;
  /**
   * Browse name
   */
  name?: string;
  /**
   * Node access restrictions if any.
   * (default: none). Possible values include: 'SigningRequired', 'EncryptionRequired',
   * 'SessionRequired'
   */
  accessRestrictions?: string;
  /**
   * Default write mask for the node
   * (default: 0)
   */
  writeMask?: number;
  /**
   * User write mask for the node
   * (default: 0)
   */
  userWriteMask?: number;
  /**
   * Whether type is abstract, if type can
   * be abstract.  Null if not type node.
   * (default: false)
   */
  isAbstract?: boolean;
  /**
   * Whether a view contains loops. Null if
   * not a view.
   */
  containsNoLoops?: boolean;
  /**
   * If object or view and eventing, event notifier
   * to subscribe to.
   * (default: no events supported). Possible values include: 'SubscribeToEvents', 'HistoryRead',
   * 'HistoryWrite'
   */
  eventNotifier?: string;
  /**
   * If method node class, whether method can
   * be called.
   */
  executable?: boolean;
  /**
   * If method node class, whether method can
   * be called by current user.
   * (default: false if not executable)
   */
  userExecutable?: boolean;
  /**
   * Data type definition in case node is a
   * data type node and definition is available,
   * otherwise null.
   */
  dataTypeDefinition?: any;
  /**
   * Default access level for variable node.
   * (default: 0). Possible values include: 'CurrentRead', 'CurrentWrite', 'HistoryRead',
   * 'HistoryWrite', 'SemanticChange', 'StatusWrite', 'TimestampWrite', 'NonatomicRead',
   * 'NonatomicWrite', 'WriteFullArrayOnly'
   */
  accessLevel?: string;
  /**
   * User access level for variable node or null.
   * (default: 0). Possible values include: 'CurrentRead', 'CurrentWrite', 'HistoryRead',
   * 'HistoryWrite', 'SemanticChange', 'StatusWrite', 'TimestampWrite', 'NonatomicRead',
   * 'NonatomicWrite', 'WriteFullArrayOnly'
   */
  userAccessLevel?: string;
  /**
   * If variable the datatype of the variable.
   * (default: null)
   */
  dataType?: string;
  /**
   * Value rank of the variable data of a variable
   * or variable type, otherwise null.
   * (default: scalar = -1). Possible values include: 'ScalarOrOneDimension', 'Any', 'Scalar',
   * 'OneOrMoreDimensions', 'OneDimension', 'TwoDimensions'
   */
  valueRank?: string;
  /**
   * Array dimensions of variable or variable type.
   * (default: empty array)
   */
  arrayDimensions?: number[];
  /**
   * Whether the value of a variable is historizing.
   * (default: false)
   */
  historizing?: boolean;
  /**
   * Minimum sampling interval for the variable
   * value, otherwise null if not a variable node.
   * (default: null)
   */
  minimumSamplingInterval?: number;
  /**
   * Value of variable or default value of the
   * subtyped variable in case node is a variable
   * type, otherwise null.
   */
  value?: any;
  /**
   * Inverse name of the reference if the node is
   * a reference type, otherwise null.
   */
  inverseName?: string;
  /**
   * Whether the reference is symmetric in case
   * the node is a reference type, otherwise
   * null.
   */
  symmetric?: boolean;
  /**
   * Role permissions
   */
  rolePermissions?: RolePermissionApiModel[];
  /**
   * User Role permissions
   */
  userRolePermissions?: RolePermissionApiModel[];
}

/**
 * reference model
 */
export interface NodeReferenceApiModel {
  /**
   * Reference Type identifier
   */
  typeId?: string;
  /**
   * Browse name of reference
   */
  browseName?: string;
  /**
   * Browse direction of reference. Possible values include: 'Forward', 'Backward', 'Both'
   */
  direction?: string;
  /**
   * Display name of reference
   */
  displayName?: string;
  /**
   * Target node
   */
  target: NodeApiModel;
  /**
   * Optional type definition of the reference
   */
  typeDefinition?: string;
}

/**
 * Service result
 */
export interface ServiceResultApiModel {
  /**
   * Error code - if null operation succeeded.
   */
  statusCode?: number;
  /**
   * Error message in case of error or null.
   */
  errorMessage?: string;
  /**
   * Additional diagnostics information
   */
  diagnostics?: any;
}

/**
 * browse response model
 */
export interface BrowseResponseApiModel {
  /**
   * Node info for the currently browsed node
   */
  node?: NodeApiModel;
  /**
   * References, if included, otherwise null.
   */
  references?: NodeReferenceApiModel[];
  /**
   * Continuation token if more results pending.
   */
  continuationToken?: string;
  /**
   * Service result in case of error
   */
  errorInfo?: ServiceResultApiModel;
}

/**
 * Request node browsing continuation
 */
export interface BrowseNextRequestApiModel {
  /**
   * Continuation token from previews browse request.
   * (mandatory)
   */
  continuationToken: string;
  /**
   * Whether to abort browse and release.
   * (default: false)
   */
  abort?: boolean;
  /**
   * Whether to collapse all references into a set of
   * unique target nodes and not show reference
   * information.
   * (default is false)
   */
  targetNodesOnly?: boolean;
  /**
   * Whether to read variable values on target nodes.
   * (default is false)
   */
  readVariableValues?: boolean;
  /**
   * Optional User elevation
   */
  elevation?: CredentialApiModel;
  /**
   * Optional diagnostics configuration
   */
  diagnostics?: DiagnosticsApiModel;
}

/**
 * Result of node browse continuation
 */
export interface BrowseNextResponseApiModel {
  /**
   * References, if included, otherwise null.
   */
  references?: NodeReferenceApiModel[];
  /**
   * Continuation token if more results pending.
   */
  continuationToken?: string;
  /**
   * Service result in case of error
   */
  errorInfo?: ServiceResultApiModel;
}

/**
 * Browse nodes by path
 */
export interface BrowsePathRequestApiModel {
  /**
   * Node to browse.
   * (default: RootFolder).
   */
  nodeId?: string;
  /**
   * The path elements of the path to browse from node.
   * (mandatory)
   */
  pathElements: string[];
  /**
   * Whether to read variable values on target nodes.
   * (default is false)
   */
  readVariableValues?: boolean;
  /**
   * Optional User elevation
   */
  elevation?: CredentialApiModel;
  /**
   * Optional diagnostics configuration
   */
  diagnostics?: DiagnosticsApiModel;
}

/**
 * Node path target
 */
export interface NodePathTargetApiModel {
  /**
   * Target node
   */
  target: NodeApiModel;
  /**
   * Remaining index in path
   */
  remainingPathIndex?: number;
}

/**
 * Result of node browse continuation
 */
export interface BrowsePathResponseApiModel {
  /**
   * Targets
   */
  targets?: NodePathTargetApiModel[];
  /**
   * Service result in case of error
   */
  errorInfo?: ServiceResultApiModel;
}

/**
 * Method metadata request model
 */
export interface MethodMetadataRequestApiModel {
  /**
   * Count of input arguments
   */
  methodId: string;
  /**
   * Optional User elevation
   */
  elevation?: CredentialApiModel;
  /**
   * Optional diagnostics configuration
   */
  diagnostics?: DiagnosticsApiModel;
}

/**
 * Method argument metadata model
 */
export interface MethodMetadataArgumentApiModel {
  /**
   * Argument name
   */
  name?: string;
  /**
   * Optional description
   */
  description?: string;
  /**
   * Data type node of the argument
   */
  type?: NodeApiModel;
  /**
   * Default value
   */
  defaultValue?: any;
  /**
   * Optional, scalar if not set. Possible values include: 'ScalarOrOneDimension', 'Any', 'Scalar',
   * 'OneOrMoreDimensions', 'OneDimension', 'TwoDimensions'
   */
  valueRank?: string;
  /**
   * Optional, array dimension
   */
  arrayDimensions?: number[];
}

/**
 * method metadata query model
 */
export interface MethodMetadataResponseApiModel {
  /**
   * Id of object that the method is a component of
   */
  objectId?: string;
  /**
   * Input argument meta data
   */
  inputArguments?: MethodMetadataArgumentApiModel[];
  /**
   * output argument meta data
   */
  outputArguments?: MethodMetadataArgumentApiModel[];
  /**
   * Service result in case of error
   */
  errorInfo?: ServiceResultApiModel;
}

/**
 * method arg model
 */
export interface MethodCallArgumentApiModel {
  /**
   * Initial value or value to use
   */
  value?: any;
  /**
   * Data type Id of the value (from meta data)
   */
  dataType?: string;
}

/**
 * Call request model
 */
export interface MethodCallRequestApiModel {
  /**
   * Method id of method to call
   */
  methodId: string;
  /**
   * If not global (= null), object or type scope
   */
  objectId?: string;
  /**
   * Arguments for the method - null means no args
   */
  argumentsProperty?: MethodCallArgumentApiModel[];
  /**
   * Optional User elevation
   */
  elevation?: CredentialApiModel;
  /**
   * Optional diagnostics configuration
   */
  diagnostics?: DiagnosticsApiModel;
}

/**
 * Method call response model
 */
export interface MethodCallResponseApiModel {
  /**
   * Output results
   */
  results?: MethodCallArgumentApiModel[];
  /**
   * Service result in case of error
   */
  errorInfo?: ServiceResultApiModel;
}

/**
 * A monitored and published item
 */
export interface PublishedItemApiModel {
  /**
   * Node to monitor
   */
  nodeId: string;
  /**
   * Attribute to monitor. Possible values include: 'NodeClass', 'BrowseName', 'DisplayName',
   * 'Description', 'WriteMask', 'UserWriteMask', 'IsAbstract', 'Symmetric', 'InverseName',
   * 'ContainsNoLoops', 'EventNotifier', 'Value', 'DataType', 'ValueRank', 'ArrayDimensions',
   * 'AccessLevel', 'UserAccessLevel', 'MinimumSamplingInterval', 'Historizing', 'Executable',
   * 'UserExecutable', 'DataTypeDefinition', 'RolePermissions', 'UserRolePermissions',
   * 'AccessRestrictions'
   */
  nodeAttribute?: string;
  /**
   * Publishing interval to use
   */
  publishingInterval?: number;
  /**
   * Sampling interval to use
   */
  samplingInterval?: number;
}

/**
 * Publish request
 */
export interface PublishStartRequestApiModel {
  /**
   * Item to publish
   */
  item: PublishedItemApiModel;
  /**
   * Optional diagnostics configuration
   */
  diagnostics?: DiagnosticsApiModel;
}

/**
 * Result of publish request
 */
export interface PublishStartResponseApiModel {
  /**
   * Service result in case of error
   */
  errorInfo?: ServiceResultApiModel;
}

/**
 * Unpublish request
 */
export interface PublishStopRequestApiModel {
  /**
   * Node of item to unpublish
   */
  nodeId: string;
  /**
   * Attribute of item to unpublish. Possible values include: 'NodeClass', 'BrowseName',
   * 'DisplayName', 'Description', 'WriteMask', 'UserWriteMask', 'IsAbstract', 'Symmetric',
   * 'InverseName', 'ContainsNoLoops', 'EventNotifier', 'Value', 'DataType', 'ValueRank',
   * 'ArrayDimensions', 'AccessLevel', 'UserAccessLevel', 'MinimumSamplingInterval', 'Historizing',
   * 'Executable', 'UserExecutable', 'DataTypeDefinition', 'RolePermissions',
   * 'UserRolePermissions', 'AccessRestrictions'
   */
  nodeAttribute?: string;
  /**
   * Optional diagnostics configuration
   */
  diagnostics?: DiagnosticsApiModel;
}

/**
 * Result of publish stop request
 */
export interface PublishStopResponseApiModel {
  /**
   * Service result in case of error
   */
  errorInfo?: ServiceResultApiModel;
}

/**
 * Request list of published items
 */
export interface PublishedItemListRequestApiModel {
  /**
   * Continuation token or null to start
   */
  continuationToken?: string;
}

/**
 * List of published nodes
 */
export interface PublishedItemListResponseApiModel {
  /**
   * Monitored items
   */
  items?: PublishedItemApiModel[];
  /**
   * Continuation or null if final
   */
  continuationToken?: string;
}

/**
 * Node value read request webservice api model
 */
export interface ValueReadRequestApiModel {
  /**
   * Node to read from (mandatory)
   */
  nodeId: string;
  /**
   * Index range to read, e.g. 1:2,0:1 for 2 slices
   * out of a matrix or 0:1 for the first item in
   * an array, string or bytestring.
   * See 7.22 of part 4: NumericRange.
   */
  indexRange?: string;
  /**
   * Optional User elevation
   */
  elevation?: CredentialApiModel;
  /**
   * Optional diagnostics configuration
   */
  diagnostics?: DiagnosticsApiModel;
}

/**
 * Value read response model
 */
export interface ValueReadResponseApiModel {
  /**
   * Value read
   */
  value?: any;
  /**
   * Built in data type of the value read.
   */
  dataType?: string;
  /**
   * Pico seconds part of when value was read at source.
   */
  sourcePicoseconds?: number;
  /**
   * Timestamp of when value was read at source.
   */
  sourceTimestamp?: Date;
  /**
   * Pico seconds part of when value was read at server.
   */
  serverPicoseconds?: number;
  /**
   * Timestamp of when value was read at server.
   */
  serverTimestamp?: Date;
  /**
   * Service result in case of error
   */
  errorInfo?: ServiceResultApiModel;
}

/**
 * Attribute to read
 */
export interface AttributeReadRequestApiModel {
  /**
   * Node to read from or write to (mandatory)
   */
  nodeId: string;
  /**
   * Attribute to read or write. Possible values include: 'NodeClass', 'BrowseName', 'DisplayName',
   * 'Description', 'WriteMask', 'UserWriteMask', 'IsAbstract', 'Symmetric', 'InverseName',
   * 'ContainsNoLoops', 'EventNotifier', 'Value', 'DataType', 'ValueRank', 'ArrayDimensions',
   * 'AccessLevel', 'UserAccessLevel', 'MinimumSamplingInterval', 'Historizing', 'Executable',
   * 'UserExecutable', 'DataTypeDefinition', 'RolePermissions', 'UserRolePermissions',
   * 'AccessRestrictions'
   */
  attribute: string;
}

/**
 * Request node attribute read
 */
export interface ReadRequestApiModel {
  /**
   * Attributes to read
   */
  attributes: AttributeReadRequestApiModel[];
  /**
   * Optional User Elevation
   */
  elevation?: CredentialApiModel;
  /**
   * Optional diagnostics configuration
   */
  diagnostics?: DiagnosticsApiModel;
}

/**
 * Attribute value read
 */
export interface AttributeReadResponseApiModel {
  /**
   * Attribute value
   */
  value?: any;
  /**
   * Service result in case of error
   */
  errorInfo?: ServiceResultApiModel;
}

/**
 * Result of attribute reads
 */
export interface ReadResponseApiModel {
  /**
   * All results of attribute reads
   */
  results?: AttributeReadResponseApiModel[];
}

/**
 * Request node history read
 */
export interface HistoryReadRequestApiModel {
  /**
   * Node to read from (mandatory)
   */
  nodeId: string;
  /**
   * The HistoryReadDetailsType extension object
   * encoded in json and containing the tunneled
   * Historian reader request.
   */
  request: any;
  /**
   * Index range to read, e.g. 1:2,0:1 for 2 slices
   * out of a matrix or 0:1 for the first item in
   * an array, string or bytestring.
   * See 7.22 of part 4: NumericRange.
   */
  indexRange?: string;
  /**
   * Optional User elevation
   */
  elevation?: CredentialApiModel;
  /**
   * Optional diagnostics configuration
   */
  diagnostics?: DiagnosticsApiModel;
}

/**
 * History read results
 */
export interface HistoryReadResponseApiModel {
  /**
   * History as json encoded extension object
   */
  history?: any;
  /**
   * Continuation token if more results pending.
   */
  continuationToken?: string;
  /**
   * Service result in case of error
   */
  errorInfo?: ServiceResultApiModel;
}

/**
 * Request node history read continuation
 */
export interface HistoryReadNextRequestApiModel {
  /**
   * Continuation token to continue reading more
   * results.
   */
  continuationToken: string;
  /**
   * Abort reading after this read
   */
  abort?: boolean;
  /**
   * Optional User elevation
   */
  elevation?: CredentialApiModel;
  /**
   * Optional diagnostics configuration
   */
  diagnostics?: DiagnosticsApiModel;
}

/**
 * History read continuation result
 */
export interface HistoryReadNextResponseApiModel {
  /**
   * History as json encoded extension object
   */
  history?: any;
  /**
   * Continuation token if more results pending.
   */
  continuationToken?: string;
  /**
   * Service result in case of error
   */
  errorInfo?: ServiceResultApiModel;
}

/**
 * Status response model
 */
export interface StatusResponseApiModel {
  /**
   * Name of this service
   */
  readonly name?: string;
  /**
   * Operational status
   */
  status?: string;
  /**
   * Current time
   */
  readonly currentTime?: string;
  /**
   * Start time of service
   */
  readonly startTime?: string;
  /**
   * Up time of service
   */
  readonly upTime?: number;
  /**
   * Value generated at bootstrap by each instance of the service and
   * used to correlate logs coming from the same instance. The value
   * changes every time the service starts.
   */
  readonly uid?: string;
  /**
   * A property bag with details about the service
   */
  readonly properties?: { [propertyName: string]: string };
  /**
   * A property bag with details about the internal dependencies
   */
  readonly dependencies?: { [propertyName: string]: string };
  /**
   * Optional meta data.
   */
  readonly metadata?: { [propertyName: string]: string };
}

/**
 * Value write request model
 */
export interface ValueWriteRequestApiModel {
  /**
   * Node id to to write value to. (Mandatory)
   */
  nodeId: string;
  /**
   * Value to write. The system tries to convert
   * the value according to the data type value,
   * e.g. convert comma seperated value strings
   * into arrays.  (Mandatory)
   */
  value: any;
  /**
   * A built in datatype for the value. This can
   * be a data type from browse, or a built in
   * type.
   * (default: best effort)
   */
  dataType?: string;
  /**
   * Index range to write
   */
  indexRange?: string;
  /**
   * Optional User elevation
   */
  elevation?: CredentialApiModel;
  /**
   * Optional diagnostics configuration
   */
  diagnostics?: DiagnosticsApiModel;
}

/**
 * Value write response model
 */
export interface ValueWriteResponseApiModel {
  /**
   * Service result in case of error
   */
  errorInfo?: ServiceResultApiModel;
}

/**
 * Attribute and value to write to it
 */
export interface AttributeWriteRequestApiModel {
  /**
   * Node to write to (mandatory)
   */
  nodeId: string;
  /**
   * Attribute to write (mandatory). Possible values include: 'NodeClass', 'BrowseName',
   * 'DisplayName', 'Description', 'WriteMask', 'UserWriteMask', 'IsAbstract', 'Symmetric',
   * 'InverseName', 'ContainsNoLoops', 'EventNotifier', 'Value', 'DataType', 'ValueRank',
   * 'ArrayDimensions', 'AccessLevel', 'UserAccessLevel', 'MinimumSamplingInterval', 'Historizing',
   * 'Executable', 'UserExecutable', 'DataTypeDefinition', 'RolePermissions',
   * 'UserRolePermissions', 'AccessRestrictions'
   */
  attribute: string;
  /**
   * Value to write (mandatory)
   */
  value: any;
}

/**
 * Request node attribute write
 */
export interface WriteRequestApiModel {
  /**
   * Attributes to update
   */
  attributes: AttributeWriteRequestApiModel[];
  /**
   * Optional User Elevation
   */
  elevation?: CredentialApiModel;
  /**
   * Optional diagnostics configuration
   */
  diagnostics?: DiagnosticsApiModel;
}

/**
 * Attribute write result
 */
export interface AttributeWriteResponseApiModel {
  /**
   * Service result in case of error
   */
  errorInfo?: ServiceResultApiModel;
}

/**
 * Result of attribute write
 */
export interface WriteResponseApiModel {
  /**
   * All results of attribute writes
   */
  results?: AttributeWriteResponseApiModel[];
}

/**
 * Request node history update
 */
export interface HistoryUpdateRequestApiModel {
  /**
   * The HistoryUpdateDetailsType extension object
   * encoded in json and containing the tunneled
   * update request for the Historian server.
   */
  request: any;
  /**
   * Optional User elevation
   */
  elevation?: CredentialApiModel;
  /**
   * Optional diagnostics configuration
   */
  diagnostics?: DiagnosticsApiModel;
}

/**
 * History update results
 */
export interface HistoryUpdateResponseApiModel {
  /**
   * List of results from the update operation
   */
  results?: ServiceResultApiModel[];
  /**
   * Service result in case of service call error
   */
  errorInfo?: ServiceResultApiModel;
}
