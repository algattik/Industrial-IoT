# encoding: utf-8
# Copyright (c) Microsoft Corporation. All rights reserved.
# Licensed under the MIT License. See License.txt in the project root for
# license information.
#
# Code generated by Microsoft (R) AutoRest Code Generator 1.0.0.0
# Changes may cause incorrect behavior and will be lost if the code is
# regenerated.

module azure.iiot.opc.twin
  module Models
    #
    # method metadata query model
    #
    class MethodMetadataResponseApiModel
      # @return [String] Id of object that the method is a component of
      attr_accessor :object_id

      # @return [Array<MethodMetadataArgumentApiModel>] Input argument meta
      # data
      attr_accessor :input_arguments

      # @return [Array<MethodMetadataArgumentApiModel>] output argument meta
      # data
      attr_accessor :output_arguments

      # @return [ServiceResultApiModel] Service result in case of error
      attr_accessor :error_info


      #
      # Mapper for MethodMetadataResponseApiModel class as Ruby Hash.
      # This will be used for serialization/deserialization.
      #
      def self.mapper()
        {
          client_side_validation: true,
          required: false,
          serialized_name: 'MethodMetadataResponseApiModel',
          type: {
            name: 'Composite',
            class_name: 'MethodMetadataResponseApiModel',
            model_properties: {
              object_id: {
                client_side_validation: true,
                required: false,
                serialized_name: 'objectId',
                type: {
                  name: 'String'
                }
              },
              input_arguments: {
                client_side_validation: true,
                required: false,
                serialized_name: 'inputArguments',
                type: {
                  name: 'Sequence',
                  element: {
                      client_side_validation: true,
                      required: false,
                      serialized_name: 'MethodMetadataArgumentApiModelElementType',
                      type: {
                        name: 'Composite',
                        class_name: 'MethodMetadataArgumentApiModel'
                      }
                  }
                }
              },
              output_arguments: {
                client_side_validation: true,
                required: false,
                serialized_name: 'outputArguments',
                type: {
                  name: 'Sequence',
                  element: {
                      client_side_validation: true,
                      required: false,
                      serialized_name: 'MethodMetadataArgumentApiModelElementType',
                      type: {
                        name: 'Composite',
                        class_name: 'MethodMetadataArgumentApiModel'
                      }
                  }
                }
              },
              error_info: {
                client_side_validation: true,
                required: false,
                serialized_name: 'errorInfo',
                type: {
                  name: 'Composite',
                  class_name: 'ServiceResultApiModel'
                }
              }
            }
          }
        }
      end
    end
  end
end
