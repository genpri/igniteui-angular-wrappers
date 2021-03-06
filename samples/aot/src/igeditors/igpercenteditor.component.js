"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var igeditorbase_1 = require("./igeditorbase");
var forms_1 = require("@angular/forms");
var IgPercentEditorComponent = /** @class */ (function (_super) {
    __extends(IgPercentEditorComponent, _super);
    function IgPercentEditorComponent(el, renderer, differs, kvalDiffers, cdr, model) {
        var _this = _super.call(this, el, renderer, differs, kvalDiffers, cdr, model) || this;
        _this.model = model;
        return _this;
    }
    /**
     * Paste text at location of the caret or over the current selection. Best used during editing, as the method will instead set the text as value (modified by the [displayFactor](ui.igpercenteditor#options:displayFactor)) if the editor is not focused.
     * Note: the method raises the [textChanged](ui.igpercenteditor#events:textChanged) event.
     *
     * @param string The string to be inserted.
     */
    IgPercentEditorComponent.prototype.insert = function (string) { return; };
    ;
    /**
     * Gets/Sets a string that is used as the percent symbol shown with the number in the input. The value provided as a param is propagated to the [percentSymbol](ui.igpercenteditor#options:percentSymbol) option and thus has the same priority as the option.
     *
     * @param symbol New percent symbol.
     */
    IgPercentEditorComponent.prototype.percentSymbol = function (symbol) { return; };
    ;
    /**
     * Gets/Sets editor value.
     *
     * @param newValue New editor value.
     */
    IgPercentEditorComponent.prototype.value = function (newValue) { return; };
    ;
    /**
     * Finds index of list item by text that matches with the search parameters.
     *
     * @param number The text to search for.
     */
    IgPercentEditorComponent.prototype.findListItemIndex = function (number) { return; };
    ;
    IgPercentEditorComponent.prototype.getSelectedText = function () { return; };
    ;
    IgPercentEditorComponent.prototype.getSelectionStart = function () { return; };
    ;
    IgPercentEditorComponent.prototype.getSelectionEnd = function () { return; };
    ;
    /**
     * Increments value in editor according to the parameter or selects the previous item from the drop-down list if [isLimitedToListValues](ui.%%WidgetNameLowered%%#options:isLimitedToListValues) is enabled.
     *
     * @param delta Increments value.
     */
    IgPercentEditorComponent.prototype.spinUp = function (delta) { return; };
    ;
    /**
     * Decrements value in editor according to the parameter selects the next item from the drop-down list if [isLimitedToListValues](ui.%%WidgetNameLowered%%#options:isLimitedToListValues) is enabled.
     *
     * @param delta Decrement value.
     */
    IgPercentEditorComponent.prototype.spinDown = function (delta) { return; };
    ;
    /**
     * This method is deprecated in favor of [spinUp](ui.%%WidgetNameLowered%%#options:spinUp).
     */
    IgPercentEditorComponent.prototype.selectListIndexUp = function () { return; };
    ;
    /**
     * This method is deprecated in favor of [spinDown](ui.%%WidgetNameLowered%%#options:spinDown).
     */
    IgPercentEditorComponent.prototype.selectListIndexDown = function () { return; };
    ;
    /**
     * Gets current regional.
     */
    IgPercentEditorComponent.prototype.getRegionalOption = function () { return; };
    ;
    /**
     * Changes the the regional settings of widget element to the language specified in [options.regional](ui.ignumericeditor#options:regional)
     * Note that this method is for rare scenarios, use [regional](ui.ignumericeditor#options:regional) option setter
     */
    IgPercentEditorComponent.prototype.changeRegional = function () { return; };
    ;
    IgPercentEditorComponent = __decorate([
        core_1.Component({
            selector: "ig-percent-editor",
            template: "<ng-content></ng-content>",
            inputs: ["widgetId", "options", "changeDetectionInterval", "disabled", "create", "width", "height", "value", "tabIndex", "allowNullValue", "nullValue", "inputName", "readOnly", "validatorOptions", "buttonType", "listItems", "listWidth", "listItemHoverDuration", "dropDownAttachedToBody", "dropDownAnimationDuration", "visibleItemsCount", "includeKeys", "excludeKeys", "textAlign", "placeHolder", "selectionOnFocus", "textMode", "spinWrapAround", "isLimitedToListValues", "revertIfNotValid", "preventSubmitOnEnter", "dropDownOrientation", "maxLength", "dropDownOnReadOnly", "toUpper", "toLower", "locale", "suppressNotifications", "regional", "negativeSign", "negativePattern", "decimalSeparator", "groupSeparator", "groups", "maxDecimals", "minDecimals", "dataMode", "minValue", "maxValue", "spinDelta", "scientificFormat", "positivePattern", "percentSymbol", "displayFactor"],
            outputs: ["rendering", "rendered", "mousedown", "mouseup", "mousemove", "mouseover", "mouseout", "blur", "focus", "keydown", "keypress", "keyup", "valueChanging", "valueChanged", "dropDownListOpening", "dropDownListOpened", "dropDownListClosing", "dropDownListClosed", "dropDownItemSelecting", "dropDownItemSelected", "textChanged"]
        }),
        __param(5, core_1.Optional()),
        __metadata("design:paramtypes", [core_1.ElementRef, core_1.Renderer, core_1.IterableDiffers, core_1.KeyValueDiffers, core_1.ChangeDetectorRef, forms_1.NgModel])
    ], IgPercentEditorComponent);
    return IgPercentEditorComponent;
}(igeditorbase_1.IgEditorBase));
exports.IgPercentEditorComponent = IgPercentEditorComponent;
//# sourceMappingURL=igpercenteditor.component.js.map