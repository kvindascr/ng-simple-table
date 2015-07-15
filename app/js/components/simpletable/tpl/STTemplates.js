var STTemplates;
(function (STTemplates) {
    /**
     * SimpleTable default templates
     */
    var STTpls = (function () {
        function STTpls() {
        }
        STTpls.prototype.getTemplates = function () {
            return [STTpls.TABLE_TPL_PAIR, STTpls.HEADER_TPL_PAIR, STTpls.COLUMN_TPL_PAIR, STTpls.BODY_TPL_PAIR, STTpls.ROW_TPL_PAIR, STTpls.CELL_TPL_PAIR];
        };
        STTpls.CELL_TPL = "{{row[col.field]}}";
        STTpls.ROW_TPL = "<td ng-repeat='col in tableConfig.columns' st-table-cell ng-class='col.cellClass' ng-if='col.active' ></td>";
        STTpls.BODY_TPL = "<tr ng-class='{selected: simpleTable.selection.isRowSelected(row)}' " +
            "  ng-repeat='row in tableData | filter:tableConfig.filter | orderBy:simpleTable.sortManager.currentSort:simpleTable.sortManager.currentSortReverse ' " +
            "  st-table-row >" +
            "</tr>";
        STTpls.COLUMN_TPL = "{{hcol.title}}<div st-table-resizable-handler11 class='table-header-cursor-container'></div>";
        STTpls.HEADER_TPL = "<tr>" +
            "  <th id='{{hcol.id}}' class='table-header' " +
            "   ng-repeat='hcol in tableConfig.columns' " +
            "   ng-class='hcol.headerClass' ng-if='hcol.active' " +
            "   ng-style='{\"height\":tableConfig.headerHeight, \"min-width\":hcol.style.minWidth, \"width\":hcol.style.width}' " +
            "   st-table-drop-target='true' st-table-draggable='true' st-table-column>" +
            "  </th>" +
            "</tr>";
        STTpls.TABLE_TPL = "<div ng-style='{width:tableConfig.tableWidth}'>" +
            "  <table ng-class='tableConfig.classes' ng-style='{width:tableConfig.tableWidth}'>" +
            "    <thead st-table-header>" +
            "    </thead>" +
            "    <tbody st-table-body>" +
            "    </tbody>" +
            "  </table>" +
            "</div>";
        STTpls.CELL_TPL_ID = 'stTableCellTpl.html';
        STTpls.ROW_TPL_ID = 'stTableRowTpl.html';
        STTpls.BODY_TPL_ID = 'stTableBodyTpl.html';
        STTpls.COLUMN_TPL_ID = 'stTableColumnTpl.html';
        STTpls.HEADER_TPL_ID = 'stTableHeaderTpl.html';
        STTpls.TABLE_TPL_ID = 'stTableTpl.html';
        STTpls.CELL_TPL_PAIR = { id: STTpls.CELL_TPL_ID, tpl: STTpls.CELL_TPL };
        STTpls.ROW_TPL_PAIR = { id: STTpls.ROW_TPL_ID, tpl: STTpls.ROW_TPL };
        STTpls.BODY_TPL_PAIR = { id: STTpls.BODY_TPL_ID, tpl: STTpls.BODY_TPL };
        STTpls.COLUMN_TPL_PAIR = { id: STTpls.COLUMN_TPL_ID, tpl: STTpls.COLUMN_TPL };
        STTpls.HEADER_TPL_PAIR = { id: STTpls.HEADER_TPL_ID, tpl: STTpls.HEADER_TPL };
        STTpls.TABLE_TPL_PAIR = { id: STTpls.TABLE_TPL_ID, tpl: STTpls.TABLE_TPL };
        return STTpls;
    })();
    STTemplates.STTpls = STTpls;
})(STTemplates || (STTemplates = {}));
//# sourceMappingURL=STTemplates.js.map