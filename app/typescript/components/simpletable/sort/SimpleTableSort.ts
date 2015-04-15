/// <reference path="../core/BaseSimpleTablePlugin.ts" />
/// <reference path="../core/ISimpleTablePluginDataAware.ts" />
/// <reference path="../../../../typings/angularjs/angular.d.ts" />
module SimpleTableSort {
    export class SimpleTablePluginSort extends SimpleTablePlugin.BaseSimpleTablePlugin implements SimpleTablePlugin.ISimpleTablePluginDataAware {

        // Attributes
        scope:any;
        currentSortColumn:any = null;
        currentSort:any = null;
        currentSortReverse:boolean = false;

        // Overrides
        init():void {
            this.scope = this.simpleTable.scope;
            super.init();
            this.simpleTable.sortManager = this;
        }

        addEventListeners():void {
            super.addEventListeners();
            this.scope.$on("onHeaderClicked", angular.bind(this, this.onHeaderClicked));
            this.scope.$on("$destroy", this.removeEventListeners);
        }

        removeEventListeners():void {
            this.scope.$off("onHeaderClicked");
            this.scope.$off("$destroy");
        }

        // Methods
        removePreviousSortFromColumns(columns:any[]):void {
            for(var i:number = 0; i < columns.length; i++){
                var column:any = columns[i];
                column.sorted = false;
                this.applyColumnSortState(column);
            }
        }

        markColumnAsSorted(column:any):void {
            column.sorted = true;
            column.sortType = column.sortType ? column.sortType : "asc";
        }

        applyColumnSortState(column:any):void {
            if(!column.headerClass){
                column.headerClass = [];
            }
            if(!column.sorted){
                this.removeFromArray(column.headerClass, ["sort", "asc", "desc"]);
                return;
            }
            this.addToArray(column.headerClass, ["sort", column.sortType]);
        }

        applySort(column:any):void {
            this.currentSort = column.field;
            this.currentSortReverse = column.sortType === "asc" ? false : true;
            this.currentSortColumn = column;
            this.applyColumnSortState(column);
        }

        sortByColumn(column:any):void {
            this.notifyListener("onSortStart", column);
            this.removePreviousSortFromColumns(this.scope.tableConfig.columns);
            this.markColumnAsSorted(column);
            this.applySort(column);
            this.notifyListener("onSortEnd", column);
        }

        onHeaderClicked(scopeEvent:any, $event:any, column:any):any{
            this.notifyListener("onHeaderSortStart", column);
            this.switchColumnSortType(column);
            this.sortByColumn(column);
            this.notifyListener("onHeaderSortEnd", column);
        }

        revalidateSort():void {
            if(!this.currentSortColumn){
                return;
            }
            this.applySort(this.currentSortColumn);
        }

        onDataChanged(newValue, oldValue):void {
            this.revalidateSort();
        }

        switchColumnSortType(column:any):void {
            column.sortType = !column.sortType || column.sortType === "desc" ? "asc" : "desc";
        }

        setSortByColumn(column:any, sortType:string):void {
            column.sortType = sortType;
            this.sortByColumn(column);
        }

        // Utility methods
        // TODO: Move to utility class
        addToArray(array:any[], values:string[]){
            for(var i:number = 0; i < values.length; i++){
                var value = values[i];
                var indx = array.indexOf(value);
                if(indx > -1){continue;}
                array.push(value);
            }
            return array;
        }

        removeFromArray(array:any[], values:string[]){
            if(array.length === 0){ return; }
            for(var i:number = 0; i < values.length; i++){
                var value = values[i];
                var indx = array.indexOf(value);
                if(indx < 0){continue;}
                array.splice(indx, 1);
            }
            return array;
        }



    }
}