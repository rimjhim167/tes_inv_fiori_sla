sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'inv.sr.managecust',
            componentId: 'PurchaseOrderList',
            contextPath: '/PurchaseOrder'
        },
        CustomPageDefinitions
    );
});