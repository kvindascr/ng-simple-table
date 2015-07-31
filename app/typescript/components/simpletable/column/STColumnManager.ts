/// <reference path="../table/SimpleTable.ts" />
/// <reference path="./STColumn.ts" />
module STColumn {
    export class ColumnManager {

        columns:STColumn.Column[];

        processConfig(tableConfig:any):void {
            if(!tableConfig && !tableConfig.columns){ return; }
            this.createColumns(tableConfig);
            // Replace json columns with object columns
            tableConfig.columns = this.columns;
        }

        createColumns(tableConfig:any):void {
            var len = tableConfig && tableConfig.columns ? tableConfig.columns.length : 0;
            var columns = [];
            for(var i:number = 0; i < len; i++){
                var col = new STColumn.Column( tableConfig.columns[i] );
                col.syncFromData();
                columns.push(col);
            }
            this.columns = columns;
        }

    }
}