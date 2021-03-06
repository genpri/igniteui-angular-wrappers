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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var igcontrolbase_1 = require("../igcontrolbase/igcontrolbase");
var IgPopoverComponent = /** @class */ (function (_super) {
    __extends(IgPopoverComponent, _super);
    function IgPopoverComponent(el, renderer, differs, kvalDiffers, cdr) {
        return _super.call(this, el, renderer, differs, kvalDiffers, cdr) || this;
    }
    IgPopoverComponent.prototype.option = function () { return; };
    ;
    IgPopoverComponent.prototype.ngOnInit = function () {
        var elem = jQuery(document).find("#" + this.widgetId);
        if (elem.length === 1) {
            this._el = elem;
            this._events = new Map();
            //events binding
            var that_1 = this;
            var evtName;
            for (var propt in jQuery.ui[this._widgetName].prototype.events) {
                evtName = this._widgetName.toLowerCase() + propt.toLowerCase();
                this._events[evtName] = propt;
                jQuery(this._el).on(evtName, function (evt, ui) {
                    that_1[that_1._events[evt.type]].emit({ event: evt, ui: ui });
                });
            }
            jQuery(this._el)[this._widgetName](this.options);
        }
        else {
            _super.prototype.ngOnInit.call(this);
        }
    };
    /**
     * Destroys the popover widget.
     */
    IgPopoverComponent.prototype.destroy = function () { return; };
    ;
    /**
     * Returns the ID of the element the popover is attached to
     */
    IgPopoverComponent.prototype.id = function () { return; };
    ;
    /**
     * Returns the container for the popover contents
     */
    IgPopoverComponent.prototype.container = function () { return; };
    ;
    /**
     * Shows the popover for the specified target
     *
     * @param trg     The element to show popover for.
     * @param content     The string to set for the popover to show.
     */
    IgPopoverComponent.prototype.show = function (trg, content) { return; };
    ;
    /**
     * Hides the popover for the specified target
     */
    IgPopoverComponent.prototype.hide = function () { return; };
    ;
    /**
     * Gets the currently set content for the popover container
     */
    IgPopoverComponent.prototype.getContent = function () { return; };
    ;
    /**
     * Sets the content for the popover container
     *
     * @param newCnt     The popover content to set.
     */
    IgPopoverComponent.prototype.setContent = function (newCnt) { return; };
    ;
    /**
     * Gets the popover current target
     */
    IgPopoverComponent.prototype.target = function () { return; };
    ;
    /**
     * Gets the current coordinates of the popover
     */
    IgPopoverComponent.prototype.getCoordinates = function () { return; };
    ;
    /**
     * Sets the popover to specific coordinates.
     *
     * @param pos     The popover coordinates in pixels.
     */
    IgPopoverComponent.prototype.setCoordinates = function (pos) { return; };
    ;
    IgPopoverComponent = __decorate([
        core_1.Component({
            selector: "ig-popover",
            template: "<ng-content></ng-content>",
            inputs: ["widgetId", "options", "changeDetectionInterval", "disabled", "create", "closeOnBlur", "direction", "position", "width", "height", "minWidth", "maxWidth", "maxHeight", "animationDuration", "contentTemplate", "selectors", "headerTemplate", "showOn", "containment", "appendTo"],
            outputs: ["showing", "shown", "hiding", "hidden"]
        }),
        __metadata("design:paramtypes", [core_1.ElementRef, core_1.Renderer, core_1.IterableDiffers, core_1.KeyValueDiffers, core_1.ChangeDetectorRef])
    ], IgPopoverComponent);
    return IgPopoverComponent;
}(igcontrolbase_1.IgControlBase));
exports.IgPopoverComponent = IgPopoverComponent;
//# sourceMappingURL=igpopover.component.js.map