define(['jquery', 'models/dataset', 'views/visualisation'],
    function($, Dataset, VisualisationEmbedView) {
    /* global describe, beforeEach, expect, xit */

    describe('A visualisation view', function() {

        beforeEach(function() {
            this.el = $('<div/>').get(0);

            this.dataset = new Dataset({
                    id: 'test01',
                    visualisation_id: 'test02'
                });
        });

        xit('should render correctly', function() {
            var vis = new VisualisationEmbedView({
                    el: this.el,
                    model: this.dataset.visualisation
                });
            vis.render();

            expect(vis.el).toContainElement('div.visualisation');
        });

    });

});
