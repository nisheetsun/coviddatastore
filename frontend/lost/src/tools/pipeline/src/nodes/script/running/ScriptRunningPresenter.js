import BaseNodePresenter from '../../BaseNodePresenter'

import ScriptRunningModel from './ScriptRunningModel'
import ScriptRunningView from './ScriptRunningView'
import ScriptRunningModal from './ScriptRunningModal'


export default class ScriptRunningPresenter extends BaseNodePresenter {
    constructor(graph, data) {
		const model = new ScriptRunningModel(data)
		const view = new ScriptRunningView(model)
		const modal = new ScriptRunningModal(model)
        super({ graph, model, view, modal })
    }
    /**
     * @override
     */
    initViewBinding(){
		// add collapse functionallity.
		$(this.modal.html.refs['more-information-link']).on('click', () => {
			$(this.modal.html.refs['collapse-this']).collapse('toggle')
			$(this.modal.html.refs['more-information-icon']).toggleClass('fa-chevron-down fa-chevron-up')
		})
	}
	/**
     * @override
     */
    initModelBinding(){
		this.model.progress.on('update', number => {
			this.modal.html.refs['progress-bar'].style.width = `${number}%`
			this.modal.html.refs['progress-bar-text'].textContent = `${number ? number : 0}%`
		})
		this.model.errorMsg.on('update', text => {
			if (text !== null) {
				this.modal.html.refs['error-msg'].style.display = 'block'
				this.modal.html.refs['error-msg-text'].textContent = text
			}
			else {
				this.modal.html.refs['error-msg'].style.display = 'none'
				this.modal.html.refs['error-msg-text'].textContent = ''
			}
		})
		this.model.status.on('update', text => {
			this.modal.html.refs['status'].textContent = text
		})
    }
}





