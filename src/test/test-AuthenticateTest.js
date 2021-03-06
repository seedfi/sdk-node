'use strict';

import assert from 'assert';
import ApiContracts from '../lib/apicontracts';
import ApiControllers from '../lib/apicontrollers';
import constants from './constants';

var apiLoginKey = constants.apiLoginKey;
var transactionKey = constants.transactionKey;

describe('AuthenticateTest', function() {
	this.timeout(120000);
	describe('request', function () {
		var response;

		before(function(done){
			var merchant = new ApiContracts.MerchantAuthenticationType();
			merchant.setName(apiLoginKey);
			merchant.setTransactionKey(transactionKey);

			var request = new ApiContracts.AuthenticateTestRequest();
			request.setMerchantAuthentication(merchant);

			var ctrl = new ApiControllers.AuthenticateTestController(request.getJSON());
			ctrl.execute(function(){
				var apiResponse = ctrl.getResponse();

				response = new ApiContracts.AuthenticateTestResponse(apiResponse);

				//console.log(JSON.stringify(response.getMessages().getResultCode()));
				done();
			});
		});
		it('should return resultcode Ok when successful', function () {
			assert.equal(response.getMessages().getResultCode(),'Ok');
		});
	});
});
