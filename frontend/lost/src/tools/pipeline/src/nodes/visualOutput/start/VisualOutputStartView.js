import BaseNodeView from '../../BaseNodeView'


export default class VisualOutputStartView extends BaseNodeView {
    constructor(model) {
		super({
			header: {
				icon: 'fa fa-bar-chart',
				title: 'Visualization',
			},
			content: { icon: 'fa fa-bar-chart' },
		})
    }

}