angular.module('simpletable.table', []).directive('stTable', ['$timeout', '$templateCache', 'SimpleTablePluginFactory', function ($timeout, $templateCache, SimpleTablePluginFactory) {
    return {
        restrict: 'AE',
        scope: {
            tableConfig: '=',
            tableData: '='
        },
        controller: function ($scope, $element, $attrs) {
            var stable = new SimpleTable.SimpleTable($scope, $element, $attrs, $timeout, SimpleTablePluginFactory);
            this.getSimpleTable = function () {
                return stable;
            };
        },
        template: function (tElem, tAttrs) {
            return $templateCache.get(STTemplates.STTpls.TABLE_TPL_ID);
        }
    };
}]);
//# sourceMappingURL=SimpleTableDirective.js.map