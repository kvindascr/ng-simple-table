var STCore;
(function (STCore) {
    var BaseComponentUI = (function () {
        function BaseComponentUI() {
        }
        BaseComponentUI.prototype.setServices = function ($compile, $templateCache, $templateRequest) {
            this.$compile = $compile;
            this.$templateCache = $templateCache;
            this.$templateRequest = $templateRequest;
        };
        BaseComponentUI.prototype.link = function (scope, element, attrs, simpleTable) {
            this.scope = scope;
            this.element = element;
            this.attrs = attrs;
            this.simpleTable = simpleTable;
            this.scope.$on('$destroy', this.dispose);
        };
        BaseComponentUI.prototype.validateCustomTemplate = function () {
            if (!this.shouldUseCustomTemplate()) {
                return;
            }
            var tpl = this.getCustomTemplate(this.scope);
            this.optimizeAndApplyTemplate(tpl, this.scope);
        };
        BaseComponentUI.prototype.shouldUseCustomTemplate = function () {
            return false;
        };
        BaseComponentUI.prototype.getCustomTemplate = function (scope) {
            return null;
        };
        BaseComponentUI.prototype.getTemplateByCacheId = function (tplId) {
            return this.$templateCache.get(tplId);
        };
        BaseComponentUI.prototype.getTemplateByUrl = function (tplUrl) {
            var tpl = this.$templateCache.get(tplUrl);
            if (tpl) {
                return tpl;
            }
            return this.$templateRequest(tplUrl);
        };
        BaseComponentUI.prototype.optimizeAndApplyTemplate = function (tpl, scope) {
            var otpl = this.shouldOptimizeTemplate(tpl, scope) ? this.optimizeTemplate(tpl, scope) : tpl;
            this.applyTemplate(otpl, scope);
        };
        BaseComponentUI.prototype.applyTemplate = function (tpl, scope) {
            if (!tpl) {
                return;
            }
            this.element.html(tpl);
            this.$compile(this.element.contents())(this.scope);
        };
        BaseComponentUI.prototype.optimizeTemplate = function (tpl, scope) {
            return tpl;
        };
        BaseComponentUI.prototype.optimizeTemplateParts = function (tpl, parts) {
            for (var i = 0; i < parts.length; i++) {
                var part = parts[i];
                tpl = this.optimizeTemplatePart(tpl, part);
            }
            return tpl;
        };
        BaseComponentUI.prototype.optimizeTemplatePart = function (tpl, part) {
            return tpl.replace(part.src, part.repl);
        };
        BaseComponentUI.prototype.shouldOptimizeTemplate = function (tpl, scope) {
            return true;
        };
        BaseComponentUI.prototype.dispose = function () {
            delete this.scope;
            delete this.element;
            delete this.attrs;
            delete this.simpleTable;
            delete this.$compile;
            delete this.$templateCache;
            delete this.$templateRequest;
        };
        return BaseComponentUI;
    })();
    STCore.BaseComponentUI = BaseComponentUI;
})(STCore || (STCore = {}));
//# sourceMappingURL=BaseComponentUI.js.map