sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'inv/sr/managecust/test/integration/FirstJourney',
		'inv/sr/managecust/test/integration/pages/PurchaseOrderList',
		'inv/sr/managecust/test/integration/pages/PurchaseOrderObjectPage',
		'inv/sr/managecust/test/integration/pages/PurchaseOrderItemsObjectPage'
    ],
    function(JourneyRunner, opaJourney, PurchaseOrderList, PurchaseOrderObjectPage, PurchaseOrderItemsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('inv/sr/managecust') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThePurchaseOrderList: PurchaseOrderList,
					onThePurchaseOrderObjectPage: PurchaseOrderObjectPage,
					onThePurchaseOrderItemsObjectPage: PurchaseOrderItemsObjectPage
                }
            },
            opaJourney.run
        );
    }
);