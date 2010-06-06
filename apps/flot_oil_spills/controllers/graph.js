// ==========================================================================
// Project:   FlotOilSpills.graphController
// ==========================================================================
/*globals FlotOilSpills */

/** @class

  @extends SC.Object
*/
FlotOilSpills.graphController = SC.ArrayController.create(
/** @scope FlotOilSpills.graphController.prototype */ {

    content: [
        SC.Object.create({estimate: 'max', label: 'set1', data:[], bars: { show: true }, points: { show: true } })
    ],

    previousPoint: null,
    tooltip: 'Hover over points to see name of spill here.',
    tooltipLayout: { left: 300, right: 0, height: 50, top: 200 },

    options: SC.Object.create({}),

    addData: function(oil_spill_data) {
        var data = this.get('content').copy();

        for (i = 0; i < oil_spill_data.get('length'); i++) {
            var tonnes = oil_spill_data.objectAt(i).get('max_tonnage');
            var barrels = Math.round(tonnes / 0.136)
            var gallons = barrels * 42
            data.objectAt(0).get('data').pushObject([oil_spill_data.objectAt(i).get('timestamp'), gallons]);
        }
        data.objectAt(0).set('label', 'Maximum estimate, or known size (gallons)');

        data.objectAt(0).set('color', 1 );

        this.set('content', data);

        this.selectObjects(data);

        var options = SC.Object.create({
            legend: { position: 'nw' },
            xaxis: { mode: 'time' },
            grid: { hoverable: true, clickable: true },
        });
        this.set('options', options);
    },

    getDataset: function(estimate) { return this.get('content').findProperty('estimate', estimate) },

    setPreviousPoint: function(pp) {
        this.set('previousPoint', pp);
    },

    setTooltip: function(item) {
        var timestamp = item.datapoint[0], 
            gallons = item.datapoint[1],
            name = FlotOilSpills.spillController.getName(item.dataIndex);

        this.set('tooltip', name);

        //var tooltipLayout = this.get('tooltipLayout');
        //tooltipLayout.left = item.pageX / 2;
        //tooltipLayout.top = item.pageY / 2;
        //this.set('tooltipLayout', tooltipLayout);
        //FlotOilSpills.mainPage.mainPane.tooltip.updateLayerLocationIfNeeded();
    },

    showTooltips: YES,
    showTooltipsObserver: function() {
        if (this.get('showTooltips') === NO ) {

        } else {

        }
        FlotOilSpills.mainPage.mainPane.graph.plotDataDidChange()
    }.observes('showTooltips'),

});

