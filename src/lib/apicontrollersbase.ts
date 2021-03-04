
import request from 'request';
import { logger }from './logger';
import { config } from './config';
import constants from './constants';
import { ANetApiRequest } from './types';
 
function lowercaseFirstLetter(s: string) {
	return s.charAt(0).toLowerCase() + s.slice(1);
  }


export default class APIOperationBase {
	_request: any;
	_response: any;
	_endpoint: string;

	constructor(apiRequest: ANetApiRequest) {
		logger.debug('Enter APIOperationBase constructor');

		this._request = null;
		this._response = null;
		this._endpoint = constants.endpoint.sandbox;

		if(null == apiRequest)
			logger.error('Input request cannot be null');

		this._request = {
			[lowercaseFirstLetter(this.getRequestType())]: apiRequest
		};

		logger.debug('Exit APIOperationBase constructor');
	}

	//abstract
	validateRequest(){
		return;
	}

	//abstract
	getRequestType(): string {
		return "NOT_IMPLEMENTED"
	};

	validate(){
		return;
	}

	getResponse(){
		return this._response;
	}

	getResultcode(){
		var resultcode = null;

		if(this._response)
			resultcode = this._response.resultCode;

		return resultcode;
	}

	getMessagetype(){
		var message = null;

		if(this._response){
			message = this._response.message;
		}
		
		return message;
	}

	beforeExecute() {
	}

	setClientId() {
		for(var obj in this._request){
			// this._request[obj]['clientId'] = config.clientId; 
			this._request[obj]['clientId'] = null; 
			break;
		}
	}

	setEnvironment(env: string){
		this._endpoint = env;
	}

	execute(callback: Function) {
		logger.debug('Enter APIOperationBase execute');

		logger.debug('Endpoint : ' + this._endpoint);

		this.beforeExecute();

		// this.setClientId();

		var obj = this;

		logger.debug(JSON.stringify(this._request));

		var reqOpts = {
			url: this._endpoint,
			method: 'POST',
			json: true,
			timeout: config.timeout,
			body: this._request,
			...(config.proxy.setProxy && {proxy: config.proxy.proxyUrl})
		};

		request(reqOpts, function(error, response, body){
			if(error) {
				logger.error(error);
			} else 
			{
				//TODO: slice added due to BOM character. remove once BOM character is removed.
				if(typeof body!=='undefined'){
					var responseObj = JSON.parse(body.slice(1));
					logger.debug(JSON.stringify(responseObj));
					obj._response = responseObj;
				/*
				var jsonResponse = JSON.stringify(body);
				console.log("escaped body : '" + escape(jsonResponse) + "'");
				console.log("body : '" + jsonResponse + "'");
				logger.debug("Response: " + JSON.stringify(body, 2, null));
				obj._response = body;
				*/
				callback();
			}
				else
				{
					logger.error("Undefined Response");
				}
			}
		});

		logger.debug('Exit APIOperationBase execute');
	}
}
