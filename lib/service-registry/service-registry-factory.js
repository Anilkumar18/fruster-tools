const fileSvcRegClient = require("./file-service-registry-client");
const ServiceRegistry = require("./service-registry");

module.exports = {
  create: create
};

function create(path, name, branch) {
	let svcRegModel;

	if(fileSvcRegClient.isValid(path)) {
		svcRegModel = fileSvcRegClient.get(path);
	} 
	// TODO
	// else if(gitSvcRegClient.isValid(path)) {
	// }

	return new ServiceRegistry(svcRegModel, name, branch);
}