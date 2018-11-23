import { WizardTabPresenter } from 'pipRoot/l3pfrontend/index'
import TabUserView from './TabUserView'

import appModel from 'apps/start/appModel'


export default class TabUserPresenter extends WizardTabPresenter {
    constructor(node: AnnoTaskNodePresenter) {
        super()

		// add icon to groups, pass groups to view to create a data table
		const groups = appModel.state.selectedTemplate.value.availableGroups.map(group => {
			const { id, groupName, isUserDefault } = group
			const icon = isUserDefault ? 'user-icon' : 'group-icon'
			return [
				id,
				groupName,
				icon,
			]
		})
        this.view = new TabUserView(groups)

		// MODEL BINDINGS
		node.model.controls.show2.on('update', () => this.show())

        // VIEW BINDINGS
        $(this.view.html.refs["data-table"]).find('tbody').on('click', 'tr', ($event) => {
			// mark row as selected
			this.view.selectRow($event.currentTarget)
			
			// update model on selection
            node.model.post.annoTask.workerId = parseInt($($event.currentTarget.children[0]).text())
            node.model.meta.assignee = $($event.currentTarget.children[1]).text()  
			
			// show next tab pane
            node.model.controls.show3.update(true)
        })
    }
}