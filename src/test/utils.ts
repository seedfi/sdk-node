'use strict';
import { MerchantAuthenticationType }from "../lib/types"
import constants from "./constants"

function getRandomString(text: string){
	return text + Math.floor((Math.random() * 100000) + 1);
}

function getRandomInt(){
	return Math.floor((Math.random() * 100000) + 1);
}

function getRandomAmount(){
	return ((Math.random() * 1000) + 1).toFixed(2);
}

function getDate(){
	return (new Date()).toISOString().substring(0, 10) ;
}

const merchantAuthentication: MerchantAuthenticationType = {
    name: constants.apiLoginKey,
    transactionKey: constants.transactionKey,
  };

export default {
	getRandomString,
	getRandomInt,
	getRandomAmount,
	getDate,
	merchantAuthentication,
}
