import storeManager from "state-tree";

export default class StateTreePeer {
	constructor(){
		this.peer = storeManager.requestRoot('peer',null,'Peer');
		this.probe = storeManager.requestStoreFromParent("probe",null,'Store', 'Probe');
		this.selection = storeManager.requestStoreFromParent("selection",null,'Store', 'Selection');
		this.filter = storeManager.requestStoreFromParent("filter",null,'Store', 'Filter');
		this.data = storeManager.requestStoreFromParent("filter",null,'Store', 'Data');
		this.hooks = storeManager.requestStoreFromParent("filter",null,'StoreCollection', 'Hooks');

		renderSelection = renderSelection.bind(this);
		renderProbe = renderProbe.bind(this);
		renderFilter = renderFilter.bind(this);

		this.probe.addListener(this, renderProbe)
		this.selection.addListener(this, renderSelection)
		this.filter.addListener(this, renderFilter)
	}
}

function renderSelection(){

}

function renderFilter(){

}

function renderProbe(){

}

const p = StateTreePeer.prototype;

p.doProbe = function(key){
	key = key !== undefined ? key : null;
	this.probe.setState(key);
}

p.doSelection = function(keys){
	keys = keys.length > 0 ? keys : [];
	this.selection.setState(keys);
}

p.doFilter = function(keys){
	keys = keys.length > 0 ? keys : [];
	this.filter.setState(keys);
}

p.requestHook = function (name, classDefn) {
}


p.removeHook = function (name) {
}