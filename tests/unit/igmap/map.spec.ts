// modeled after https://github.com/angular/angular/blob/cee2318110eeea115e5f6fc5bfc814cbaa7d90d8/modules/angular2/test/common/directives/ng_for_spec.ts
import { TestBed } from '@angular/core/testing';
import { Component, ViewChild } from '@angular/core';
import * as Infragistics from '../../../src/main';

export function main() {
    describe('Infragistics Angular2 Map', () => {

        beforeEach(() => {
            TestBed.configureTestingModule({
                declarations: [Infragistics.IgMapComponent, TestComponent]
            });
        });

        it('should initialize correctly', (done) => {
            var template = '<div><ig-map widgetId="map1"></ig-map></div>';
            TestBed.overrideComponent(TestComponent, {
                set: {
                    template: template
                }
            });
            TestBed.compileComponents().then(() => {
                let fixture = TestBed.createComponent(TestComponent);
                fixture.detectChanges();
                expect(fixture.debugElement.componentInstance.viewChild instanceof Infragistics.IgMapComponent)
                    .toBe(true);
                done();
            });
        });

        it('should allow initializing data source as a top level option', (done) => {
            var template = '<div><ig-map  [widgetId]="\'map1\'" [(dataSource)]="data"></ig-map></div>';
            TestBed.overrideComponent(TestComponent, {
                set: {
                    template: template
                }
            });
            TestBed.compileComponents().then(() => {
                let fixture = TestBed.createComponent(TestComponent);
                fixture.detectChanges();
                expect($(fixture.debugElement.nativeElement).find("#map1").igMap("option", "dataSource")[0].Latitude)
                    .toBe(52.21);
                done();
            });
        });
    });
}

@Component({
    selector: 'test-cmp',
    template: '<div></div>' //"Component 'TestComponent' must have either 'template' or 'templateUrl' set."
})
class TestComponent {
    @ViewChild(Infragistics.IgMapComponent) public viewChild: Infragistics.IgMapComponent;

    data: any[];

    constructor() {
        this.data = [{ Name: "Warsaw", Country: "Poland", Latitude: 52.21, Longitude: 21 }];
    }
}