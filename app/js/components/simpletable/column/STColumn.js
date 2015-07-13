/// <reference path="../table/SimpleTable.ts" />
var STColumn;
(function (STColumn) {
    var Column = (function () {
        function Column() {
        }
        Column.prototype.link = function (scope, element, attrs, simpleTable) {
            this.scope = scope;
            this.element = element;
            this.attrs = attrs;
            this.simpleTable = simpleTable;
        };
        Column.prototype.init = function () {
            this.addEventListeners();
        };
        Column.prototype.addEventListeners = function () {
            this.element.on('click', angular.bind(this, this.onHeaderClicked));
        };
        Column.prototype.removeEventListeners = function () {
            if (!this.element) {
                return;
            }
            this.element.off();
        };
        Column.prototype.onHeaderClicked = function (event) {
            //console.log('onHeaderClicked: ', event, this);
            this.simpleTable.onHeaderClicked(event, this.scope.hcol);
        };
        return Column;
    })();
    STColumn.Column = Column;
})(STColumn || (STColumn = {}));
//# sourceMappingURL=STColumn.js.map