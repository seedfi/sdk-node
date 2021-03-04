'use strict';

import assert from 'assert';
import ApiControllers from '../lib/apicontrollers';
import { AuthenticateTestRequest, AuthenticateTestResponse } from '../lib/types';
import utils from './utils';

describe('AuthenticateTest', function() {
	this.timeout(120000);
	describe('request', function () {
		let response: AuthenticateTestResponse;

		before(function(done){
			const request: AuthenticateTestRequest = {
				merchantAuthentication: utils.merchantAuthentication,
			}
			const ctrl = new ApiControllers.AuthenticateTestController(request);
			ctrl.execute(function(){
				const apiResponse = ctrl.getResponse();
				response = (apiResponse as unknown) as AuthenticateTestResponse;
				done();
			});
		});
		it('should return resultcode Ok when successful', function () {
			assert.equal(response.messages.resultCode,'Ok');
		});
	});
});
