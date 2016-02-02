var STColumn;
(function (STColumn) {
    var ColumnManager = (function () {
        function ColumnManager() {
        }
        ColumnManager.prototype.processConfig = function (tableConfig) {
            if (!tableConfig && !tableConfig.columns) {
                return;
            }
            this.createColumns(tableConfig);
            tableConfig.columns = this.columns;
        };
        ColumnManager.prototype.createColumns = function (tableConfig) {
            var len = tableConfig && tableConfig.columns ? tableConfig.columns.length : 0;
            var columns = [];
            for (var i = 0; i < len; i++) {
                var col = new STColumn.Column(tableConfig.columns[i]);
                col.syncFromData();
                columns.push(col);
            }
            this.columns = columns;
        };
        ColumnManager.prototype.getColumnById = function (id) {
            for (var i = 0; i < this.columns.length; i++) {
                var column = this.columns[i];
                if (column.id === id) {
                    return column;
                }
            }
            return null;
        };
        ColumnManager.prototype.getColumnByField = function (field) {
            for (var i = 0; i < this.columns.length; i++) {
                var column = this.columns[i];
                if (column.field === field) {
                    return column;
                }
            }
            return null;
        };
        return ColumnManager;
    })();
    STColumn.ColumnManager = ColumnManager;
})(STColumn || (STColumn = {}));
//# sourceMappingURL=STColumnManager.js.map