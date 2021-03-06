define(['backbone', 'underscore', './connection'],
    function (Backbone, _, Connection) {
    'use strict';

    var DimensionalConnection = Connection.extend({

        apiEndpoint: function () {
            return '/api/datasets/' + this.dataset.get('id') + '/' + this.get('type') + '/' + this.get('dimension');
        },

        /**
         * Get data
         */
        getData: function() {
            return this.get(this.get('dimension'));
        },

        /**
         * Get the specified value
         */
        getValue: function(i) {
            return this.getData()[i];
        },

        /**
         * Get the specified value by ID
         */
        getValueById: function(id) {
            return _.findWhere(this.getData(), {id: id});
        },

        /**
         * Get data ids
         */
        getDataIds: function () {
            return _.pluck(this.getData(), 'id');
        }
    });

    return DimensionalConnection;

});
