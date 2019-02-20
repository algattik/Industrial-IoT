/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator 1.0.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";


export const CallbackApiModel: msRest.CompositeMapper = {
  serializedName: "CallbackApiModel",
  type: {
    name: "Composite",
    className: "CallbackApiModel",
    modelProperties: {
      uri: {
        serializedName: "uri",
        type: {
          name: "String"
        }
      },
      method: {
        serializedName: "method",
        type: {
          name: "Enum",
          allowedValues: [
            "Get",
            "Post",
            "Put",
            "Delete"
          ]
        }
      },
      authenticationHeader: {
        serializedName: "authenticationHeader",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const EndpointActivationFilterApiModel: msRest.CompositeMapper = {
  serializedName: "EndpointActivationFilterApiModel",
  type: {
    name: "Composite",
    className: "EndpointActivationFilterApiModel",
    modelProperties: {
      trustLists: {
        serializedName: "trustLists",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      securityPolicies: {
        serializedName: "securityPolicies",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      securityMode: {
        serializedName: "securityMode",
        type: {
          name: "Enum",
          allowedValues: [
            "Best",
            "Sign",
            "SignAndEncrypt",
            "None"
          ]
        }
      }
    }
  }
};

export const ServerRegistrationRequestApiModel: msRest.CompositeMapper = {
  serializedName: "ServerRegistrationRequestApiModel",
  type: {
    name: "Composite",
    className: "ServerRegistrationRequestApiModel",
    modelProperties: {
      discoveryUrl: {
        required: true,
        serializedName: "discoveryUrl",
        type: {
          name: "String"
        }
      },
      id: {
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      callback: {
        serializedName: "callback",
        type: {
          name: "Composite",
          className: "CallbackApiModel"
        }
      },
      activationFilter: {
        serializedName: "activationFilter",
        type: {
          name: "Composite",
          className: "EndpointActivationFilterApiModel"
        }
      }
    }
  }
};

export const ApplicationRegistrationRequestApiModel: msRest.CompositeMapper = {
  serializedName: "ApplicationRegistrationRequestApiModel",
  type: {
    name: "Composite",
    className: "ApplicationRegistrationRequestApiModel",
    modelProperties: {
      applicationUri: {
        required: true,
        serializedName: "applicationUri",
        type: {
          name: "String"
        }
      },
      applicationType: {
        serializedName: "applicationType",
        type: {
          name: "Enum",
          allowedValues: [
            "Server",
            "Client",
            "ClientAndServer"
          ]
        }
      },
      productUri: {
        serializedName: "productUri",
        type: {
          name: "String"
        }
      },
      applicationName: {
        serializedName: "applicationName",
        type: {
          name: "String"
        }
      },
      locale: {
        serializedName: "locale",
        type: {
          name: "String"
        }
      },
      capabilities: {
        serializedName: "capabilities",
        constraints: {
          UniqueItems: true
        },
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      discoveryUrls: {
        serializedName: "discoveryUrls",
        constraints: {
          UniqueItems: true
        },
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      discoveryProfileUri: {
        serializedName: "discoveryProfileUri",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ApplicationRegistrationResponseApiModel: msRest.CompositeMapper = {
  serializedName: "ApplicationRegistrationResponseApiModel",
  type: {
    name: "Composite",
    className: "ApplicationRegistrationResponseApiModel",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ApplicationInfoApiModel: msRest.CompositeMapper = {
  serializedName: "ApplicationInfoApiModel",
  type: {
    name: "Composite",
    className: "ApplicationInfoApiModel",
    modelProperties: {
      applicationId: {
        serializedName: "applicationId",
        type: {
          name: "String"
        }
      },
      applicationType: {
        serializedName: "applicationType",
        type: {
          name: "Enum",
          allowedValues: [
            "Server",
            "Client",
            "ClientAndServer"
          ]
        }
      },
      applicationUri: {
        serializedName: "applicationUri",
        type: {
          name: "String"
        }
      },
      productUri: {
        serializedName: "productUri",
        type: {
          name: "String"
        }
      },
      applicationName: {
        serializedName: "applicationName",
        type: {
          name: "String"
        }
      },
      locale: {
        serializedName: "locale",
        type: {
          name: "String"
        }
      },
      certificate: {
        serializedName: "certificate",
        type: {
          name: "ByteArray"
        }
      },
      capabilities: {
        serializedName: "capabilities",
        constraints: {
          UniqueItems: true
        },
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      discoveryUrls: {
        serializedName: "discoveryUrls",
        constraints: {
          UniqueItems: true
        },
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      discoveryProfileUri: {
        serializedName: "discoveryProfileUri",
        type: {
          name: "String"
        }
      },
      hostAddresses: {
        serializedName: "hostAddresses",
        constraints: {
          UniqueItems: true
        },
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      siteId: {
        serializedName: "siteId",
        type: {
          name: "String"
        }
      },
      supervisorId: {
        serializedName: "supervisorId",
        type: {
          name: "String"
        }
      },
      notSeenSince: {
        serializedName: "notSeenSince",
        type: {
          name: "DateTime"
        }
      }
    }
  }
};

export const ApplicationInfoListApiModel: msRest.CompositeMapper = {
  serializedName: "ApplicationInfoListApiModel",
  type: {
    name: "Composite",
    className: "ApplicationInfoListApiModel",
    modelProperties: {
      items: {
        serializedName: "items",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ApplicationInfoApiModel"
            }
          }
        }
      },
      continuationToken: {
        serializedName: "continuationToken",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DiscoveryConfigApiModel: msRest.CompositeMapper = {
  serializedName: "DiscoveryConfigApiModel",
  type: {
    name: "Composite",
    className: "DiscoveryConfigApiModel",
    modelProperties: {
      addressRangesToScan: {
        serializedName: "addressRangesToScan",
        type: {
          name: "String"
        }
      },
      networkProbeTimeoutMs: {
        serializedName: "networkProbeTimeoutMs",
        type: {
          name: "Number"
        }
      },
      maxNetworkProbes: {
        serializedName: "maxNetworkProbes",
        type: {
          name: "Number"
        }
      },
      portRangesToScan: {
        serializedName: "portRangesToScan",
        type: {
          name: "String"
        }
      },
      portProbeTimeoutMs: {
        serializedName: "portProbeTimeoutMs",
        type: {
          name: "Number"
        }
      },
      maxPortProbes: {
        serializedName: "maxPortProbes",
        type: {
          name: "Number"
        }
      },
      minPortProbesPercent: {
        serializedName: "minPortProbesPercent",
        type: {
          name: "Number"
        }
      },
      idleTimeBetweenScansSec: {
        serializedName: "idleTimeBetweenScansSec",
        type: {
          name: "Number"
        }
      },
      discoveryUrls: {
        serializedName: "discoveryUrls",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      locales: {
        serializedName: "locales",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      callbacks: {
        serializedName: "callbacks",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "CallbackApiModel"
            }
          }
        }
      },
      activationFilter: {
        serializedName: "activationFilter",
        type: {
          name: "Composite",
          className: "EndpointActivationFilterApiModel"
        }
      }
    }
  }
};

export const DiscoveryRequestApiModel: msRest.CompositeMapper = {
  serializedName: "DiscoveryRequestApiModel",
  type: {
    name: "Composite",
    className: "DiscoveryRequestApiModel",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      discovery: {
        serializedName: "discovery",
        type: {
          name: "Enum",
          allowedValues: [
            "Off",
            "Local",
            "Network",
            "Fast",
            "Scan"
          ]
        }
      },
      configuration: {
        serializedName: "configuration",
        type: {
          name: "Composite",
          className: "DiscoveryConfigApiModel"
        }
      }
    }
  }
};

export const CredentialApiModel: msRest.CompositeMapper = {
  serializedName: "CredentialApiModel",
  type: {
    name: "Composite",
    className: "CredentialApiModel",
    modelProperties: {
      type: {
        serializedName: "type",
        defaultValue: 'None',
        type: {
          name: "Enum",
          allowedValues: [
            "None",
            "UserName",
            "X509Certificate",
            "JwtToken"
          ]
        }
      },
      value: {
        serializedName: "value",
        type: {
          name: "Object"
        }
      }
    }
  }
};

export const EndpointApiModel: msRest.CompositeMapper = {
  serializedName: "EndpointApiModel",
  type: {
    name: "Composite",
    className: "EndpointApiModel",
    modelProperties: {
      url: {
        required: true,
        serializedName: "url",
        type: {
          name: "String"
        }
      },
      user: {
        serializedName: "user",
        type: {
          name: "Composite",
          className: "CredentialApiModel"
        }
      },
      securityMode: {
        serializedName: "securityMode",
        defaultValue: 'Best',
        type: {
          name: "Enum",
          allowedValues: [
            "Best",
            "Sign",
            "SignAndEncrypt",
            "None"
          ]
        }
      },
      securityPolicy: {
        serializedName: "securityPolicy",
        type: {
          name: "String"
        }
      },
      serverThumbprint: {
        serializedName: "serverThumbprint",
        type: {
          name: "ByteArray"
        }
      }
    }
  }
};

export const AuthenticationMethodApiModel: msRest.CompositeMapper = {
  serializedName: "AuthenticationMethodApiModel",
  type: {
    name: "Composite",
    className: "AuthenticationMethodApiModel",
    modelProperties: {
      id: {
        required: true,
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      credentialType: {
        serializedName: "credentialType",
        defaultValue: 'None',
        type: {
          name: "Enum",
          allowedValues: [
            "None",
            "UserName",
            "X509Certificate",
            "JwtToken"
          ]
        }
      },
      securityPolicy: {
        serializedName: "securityPolicy",
        type: {
          name: "String"
        }
      },
      configuration: {
        serializedName: "configuration",
        type: {
          name: "Object"
        }
      }
    }
  }
};

export const EndpointRegistrationApiModel: msRest.CompositeMapper = {
  serializedName: "EndpointRegistrationApiModel",
  type: {
    name: "Composite",
    className: "EndpointRegistrationApiModel",
    modelProperties: {
      id: {
        required: true,
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      siteId: {
        serializedName: "siteId",
        type: {
          name: "String"
        }
      },
      endpoint: {
        required: true,
        serializedName: "endpoint",
        type: {
          name: "Composite",
          className: "EndpointApiModel"
        }
      },
      securityLevel: {
        serializedName: "securityLevel",
        type: {
          name: "Number"
        }
      },
      certificate: {
        serializedName: "certificate",
        type: {
          name: "ByteArray"
        }
      },
      authenticationMethods: {
        serializedName: "authenticationMethods",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "AuthenticationMethodApiModel"
            }
          }
        }
      }
    }
  }
};

export const ApplicationRegistrationApiModel: msRest.CompositeMapper = {
  serializedName: "ApplicationRegistrationApiModel",
  type: {
    name: "Composite",
    className: "ApplicationRegistrationApiModel",
    modelProperties: {
      application: {
        required: true,
        serializedName: "application",
        type: {
          name: "Composite",
          className: "ApplicationInfoApiModel"
        }
      },
      endpoints: {
        serializedName: "endpoints",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "EndpointRegistrationApiModel"
            }
          }
        }
      },
      securityAssessment: {
        serializedName: "securityAssessment",
        type: {
          name: "Enum",
          allowedValues: [
            "Unknown",
            "Low",
            "Medium",
            "High"
          ]
        }
      }
    }
  }
};

export const ApplicationRegistrationUpdateApiModel: msRest.CompositeMapper = {
  serializedName: "ApplicationRegistrationUpdateApiModel",
  type: {
    name: "Composite",
    className: "ApplicationRegistrationUpdateApiModel",
    modelProperties: {
      productUri: {
        serializedName: "productUri",
        type: {
          name: "String"
        }
      },
      applicationName: {
        serializedName: "applicationName",
        type: {
          name: "String"
        }
      },
      locale: {
        serializedName: "locale",
        type: {
          name: "String"
        }
      },
      certificate: {
        serializedName: "certificate",
        type: {
          name: "ByteArray"
        }
      },
      capabilities: {
        serializedName: "capabilities",
        constraints: {
          UniqueItems: true
        },
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      discoveryUrls: {
        serializedName: "discoveryUrls",
        constraints: {
          UniqueItems: true
        },
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      discoveryProfileUri: {
        serializedName: "discoveryProfileUri",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ApplicationSiteListApiModel: msRest.CompositeMapper = {
  serializedName: "ApplicationSiteListApiModel",
  type: {
    name: "Composite",
    className: "ApplicationSiteListApiModel",
    modelProperties: {
      sites: {
        serializedName: "sites",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      continuationToken: {
        serializedName: "continuationToken",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ApplicationRegistrationQueryApiModel: msRest.CompositeMapper = {
  serializedName: "ApplicationRegistrationQueryApiModel",
  type: {
    name: "Composite",
    className: "ApplicationRegistrationQueryApiModel",
    modelProperties: {
      applicationType: {
        serializedName: "applicationType",
        type: {
          name: "Enum",
          allowedValues: [
            "Server",
            "Client",
            "ClientAndServer"
          ]
        }
      },
      applicationUri: {
        serializedName: "applicationUri",
        type: {
          name: "String"
        }
      },
      productUri: {
        serializedName: "productUri",
        type: {
          name: "String"
        }
      },
      applicationName: {
        serializedName: "applicationName",
        type: {
          name: "String"
        }
      },
      locale: {
        serializedName: "locale",
        type: {
          name: "String"
        }
      },
      capability: {
        serializedName: "capability",
        type: {
          name: "String"
        }
      },
      siteOrSupervisorId: {
        serializedName: "siteOrSupervisorId",
        type: {
          name: "String"
        }
      },
      includeNotSeenSince: {
        serializedName: "includeNotSeenSince",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const EndpointRegistrationUpdateApiModel: msRest.CompositeMapper = {
  serializedName: "EndpointRegistrationUpdateApiModel",
  type: {
    name: "Composite",
    className: "EndpointRegistrationUpdateApiModel",
    modelProperties: {
      user: {
        serializedName: "user",
        type: {
          name: "Composite",
          className: "CredentialApiModel"
        }
      }
    }
  }
};

export const EndpointInfoApiModel: msRest.CompositeMapper = {
  serializedName: "EndpointInfoApiModel",
  type: {
    name: "Composite",
    className: "EndpointInfoApiModel",
    modelProperties: {
      registration: {
        required: true,
        serializedName: "registration",
        type: {
          name: "Composite",
          className: "EndpointRegistrationApiModel"
        }
      },
      applicationId: {
        required: true,
        serializedName: "applicationId",
        type: {
          name: "String"
        }
      },
      activated: {
        serializedName: "activated",
        type: {
          name: "Boolean"
        }
      },
      connected: {
        serializedName: "connected",
        type: {
          name: "Boolean"
        }
      },
      outOfSync: {
        serializedName: "outOfSync",
        type: {
          name: "Boolean"
        }
      },
      notSeenSince: {
        serializedName: "notSeenSince",
        type: {
          name: "DateTime"
        }
      }
    }
  }
};

export const EndpointInfoListApiModel: msRest.CompositeMapper = {
  serializedName: "EndpointInfoListApiModel",
  type: {
    name: "Composite",
    className: "EndpointInfoListApiModel",
    modelProperties: {
      items: {
        serializedName: "items",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "EndpointInfoApiModel"
            }
          }
        }
      },
      continuationToken: {
        serializedName: "continuationToken",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const EndpointRegistrationQueryApiModel: msRest.CompositeMapper = {
  serializedName: "EndpointRegistrationQueryApiModel",
  type: {
    name: "Composite",
    className: "EndpointRegistrationQueryApiModel",
    modelProperties: {
      url: {
        serializedName: "url",
        type: {
          name: "String"
        }
      },
      userAuthentication: {
        serializedName: "userAuthentication",
        type: {
          name: "Enum",
          allowedValues: [
            "None",
            "UserName",
            "X509Certificate",
            "JwtToken"
          ]
        }
      },
      certificate: {
        serializedName: "certificate",
        type: {
          name: "ByteArray"
        }
      },
      securityMode: {
        serializedName: "securityMode",
        type: {
          name: "Enum",
          allowedValues: [
            "Best",
            "Sign",
            "SignAndEncrypt",
            "None"
          ]
        }
      },
      securityPolicy: {
        serializedName: "securityPolicy",
        type: {
          name: "String"
        }
      },
      activated: {
        serializedName: "activated",
        type: {
          name: "Boolean"
        }
      },
      connected: {
        serializedName: "connected",
        type: {
          name: "Boolean"
        }
      },
      includeNotSeenSince: {
        serializedName: "includeNotSeenSince",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const StatusResponseApiModel: msRest.CompositeMapper = {
  serializedName: "StatusResponseApiModel",
  type: {
    name: "Composite",
    className: "StatusResponseApiModel",
    modelProperties: {
      name: {
        readOnly: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      status: {
        serializedName: "status",
        type: {
          name: "String"
        }
      },
      currentTime: {
        readOnly: true,
        serializedName: "currentTime",
        type: {
          name: "String"
        }
      },
      startTime: {
        readOnly: true,
        serializedName: "startTime",
        type: {
          name: "String"
        }
      },
      upTime: {
        readOnly: true,
        serializedName: "upTime",
        type: {
          name: "Number"
        }
      },
      uid: {
        readOnly: true,
        serializedName: "uid",
        type: {
          name: "String"
        }
      },
      properties: {
        readOnly: true,
        serializedName: "properties",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "String"
            }
          }
        }
      },
      dependencies: {
        readOnly: true,
        serializedName: "dependencies",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "String"
            }
          }
        }
      },
      metadata: {
        readOnly: true,
        serializedName: "$metadata",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const SupervisorApiModel: msRest.CompositeMapper = {
  serializedName: "SupervisorApiModel",
  type: {
    name: "Composite",
    className: "SupervisorApiModel",
    modelProperties: {
      id: {
        required: true,
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      siteId: {
        serializedName: "siteId",
        type: {
          name: "String"
        }
      },
      discovery: {
        serializedName: "discovery",
        defaultValue: 'Off',
        type: {
          name: "Enum",
          allowedValues: [
            "Off",
            "Local",
            "Network",
            "Fast",
            "Scan"
          ]
        }
      },
      discoveryConfig: {
        serializedName: "discoveryConfig",
        type: {
          name: "Composite",
          className: "DiscoveryConfigApiModel"
        }
      },
      certificate: {
        serializedName: "certificate",
        type: {
          name: "ByteArray"
        }
      },
      outOfSync: {
        serializedName: "outOfSync",
        type: {
          name: "Boolean"
        }
      },
      connected: {
        serializedName: "connected",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const SupervisorUpdateApiModel: msRest.CompositeMapper = {
  serializedName: "SupervisorUpdateApiModel",
  type: {
    name: "Composite",
    className: "SupervisorUpdateApiModel",
    modelProperties: {
      siteId: {
        serializedName: "siteId",
        type: {
          name: "String"
        }
      },
      discovery: {
        serializedName: "discovery",
        defaultValue: 'Off',
        type: {
          name: "Enum",
          allowedValues: [
            "Off",
            "Local",
            "Network",
            "Fast",
            "Scan"
          ]
        }
      },
      discoveryConfig: {
        serializedName: "discoveryConfig",
        type: {
          name: "Composite",
          className: "DiscoveryConfigApiModel"
        }
      },
      discoveryCallbacks: {
        serializedName: "discoveryCallbacks",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "CallbackApiModel"
            }
          }
        }
      },
      removeDiscoveryCallbacks: {
        serializedName: "removeDiscoveryCallbacks",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const SupervisorListApiModel: msRest.CompositeMapper = {
  serializedName: "SupervisorListApiModel",
  type: {
    name: "Composite",
    className: "SupervisorListApiModel",
    modelProperties: {
      items: {
        serializedName: "items",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SupervisorApiModel"
            }
          }
        }
      },
      continuationToken: {
        serializedName: "continuationToken",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SupervisorQueryApiModel: msRest.CompositeMapper = {
  serializedName: "SupervisorQueryApiModel",
  type: {
    name: "Composite",
    className: "SupervisorQueryApiModel",
    modelProperties: {
      siteId: {
        serializedName: "siteId",
        type: {
          name: "String"
        }
      },
      discovery: {
        serializedName: "discovery",
        type: {
          name: "Enum",
          allowedValues: [
            "Off",
            "Local",
            "Network",
            "Fast",
            "Scan"
          ]
        }
      },
      connected: {
        serializedName: "connected",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};
