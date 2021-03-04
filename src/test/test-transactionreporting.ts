"use strict";

import { assert } from "chai";
import ApiControllers from "../lib/apicontrollers";
import {
  GetBatchStatisticsRequest,
  GetBatchStatisticsResponse,
  GetSettledBatchListRequest,
  GetSettledBatchListResponse,
  GetTransactionDetailsRequest,
  GetTransactionDetailsResponse,
  GetTransactionListForCustomerRequest,
  GetTransactionListRequest,
  GetTransactionListResponse,
  GetUnsettledTransactionListRequest,
  GetUnsettledTransactionListResponse,
  MessageTypeEnum,
} from "../lib/types";
import utils from "./utils"

class TransactionReportingTestData {
	merchantAuthentication = utils.merchantAuthentication;
}

describe("Transaction Reporting", function () {
  this.timeout(120000);
  var batchId: string;
  var transactionId: string;
  var testData = new TransactionReportingTestData();

  describe("get Settled Batch List", function () {
    var response: GetSettledBatchListResponse;

    before(function (done) {
      var createRequest: GetSettledBatchListRequest = {
        merchantAuthentication: testData.merchantAuthentication,
        includeStatistics: true,
        firstSettlementDate: "2021-02-02T22:35:30.616Z",
        lastSettlementDate: "2021-03-04T22:35:30.616Z",
      };

      var ctrl = new ApiControllers.GetSettledBatchListController(
        createRequest
      );

      ctrl.execute(function () {
        var apiResponse = ctrl.getResponse();

        response = (apiResponse as unknown) as GetSettledBatchListResponse;

        // response = new GetSettledBatchListResponse(apiResponse);

        done();
      });
    });

    it("should return resultcode Ok when successful", function () {
      assert.equal(response.messages.resultCode, MessageTypeEnum.OK);
    });

    it("should return not null batch list when successful", function () {
      assert.isNotNull(response.batchList);
      assert.isDefined(response.batchList);
    });

    it("should return not null batch ids when successful", function () {
      var batchArray = response.batchList;
      batchArray.forEach(function (batch) {
        batchId = batch.batchId;
        assert.isNotNull(batch.batchId);
        assert.isDefined(batch.batchId);
      });
    });

    it("should return not null batch statistics when successful", function () {
      var batchArray = response.batchList;
      batchArray.forEach(function (batch) {
        assert.isNotNull(batch.statistics);
        assert.isDefined(batch.statistics);
      });
    });
  });

  describe("get Transaction List", function () {
    var response: GetTransactionListResponse;

    before(function (done) {
      var getRequest: GetTransactionListRequest = {
        merchantAuthentication: testData.merchantAuthentication,
        batchId,
      };

      var ctrl = new ApiControllers.GetTransactionListController(getRequest);

      ctrl.execute(function () {
        var apiResponse = ctrl.getResponse();

        response = (apiResponse as unknown) as GetTransactionListResponse;

        done();
      });
    });

    it("should return resultcode Ok when successful", function () {
      assert.equal(response.messages.resultCode, MessageTypeEnum.OK);
    });

    it("should return not null transaction list when successful", function () {
      assert.isNotNull(response.transactions);
      assert.isDefined(response.transactions);
    });

    it("should return not null transaction ids when successful", function () {
      var transactionArray = response.transactions;
      transactionArray.forEach(function (transaction) {
        transactionId = transaction.transId;
        assert.isNotNull(transaction.transId);
        assert.isDefined(transaction.transId);
      });
    });
  });

  describe("get Transaction List For Customer", function () {
    var response: GetTransactionListResponse;

    before(function (done) {
      var getRequest: GetTransactionListForCustomerRequest = {
        merchantAuthentication: testData.merchantAuthentication,
        customerProfileId: "36596285",
      };

      var ctrl = new ApiControllers.GetTransactionListForCustomerController(
        getRequest
      );

      ctrl.execute(function () {
        var apiResponse = ctrl.getResponse();
        response = (apiResponse as unknown) as GetTransactionListResponse;
        done();
      });
    });

    it("should return resultcode Ok when successful", function () {
      assert.equal(response.messages.resultCode, MessageTypeEnum.OK);
    });

    it("should return not null transaction list when successful", function () {
      assert.isNotNull(response.transactions);
      assert.isDefined(response.transactions);
    });

    it("should return not null transaction ids when successful", function () {
      var transactionArray = response.transactions;
      transactionArray.forEach(function (transaction) {
        transactionId = transaction.transId;
        assert.isNotNull(transaction.transId);
        assert.isDefined(transaction.transId);
      });
    });
  });

  describe("get Transaction Details", function () {
    var response: GetTransactionDetailsResponse;

    before(function (done) {
      var getRequest: GetTransactionDetailsRequest = {
        merchantAuthentication: testData.merchantAuthentication,
        transId: transactionId,
      };

      var ctrl = new ApiControllers.GetTransactionDetailsController(getRequest);

      ctrl.execute(function () {
        var apiResponse = ctrl.getResponse();
        response = (apiResponse as unknown) as GetTransactionDetailsResponse;
        done();
      });
    });

    it("should return resultcode Ok when successful", function () {
      assert.equal(response.messages.resultCode, MessageTypeEnum.OK);
    });

    it("should return not null transaction list when successful", function () {
      assert.isNotNull(response.transaction);
      assert.isDefined(response.transaction);
    });

    it("should return transaction id same as input when successful", function () {
      assert.equal(response.transaction.transId, transactionId);
    });
  });

  describe("get unsettled Transaction list", function () {
    var response: GetUnsettledTransactionListResponse;

    before(function (done) {
      var getRequest: GetUnsettledTransactionListRequest = {
        merchantAuthentication: testData.merchantAuthentication,
      };

      var ctrl = new ApiControllers.GetUnsettledTransactionListController(
        getRequest
      );

      ctrl.execute(function () {
        var apiResponse = ctrl.getResponse();
        response = (apiResponse as unknown) as GetUnsettledTransactionListResponse;
        done();
      });
    });

    it("should return resultcode Ok when successful", function () {
      assert.equal(response.messages.resultCode, MessageTypeEnum.OK);
    });

    it("should return not null transaction list when successful", function () {
      assert.isNotNull(response.transactions);
      assert.isDefined(response.transactions);
    });

    it("should return not null transaction ids when successful", function () {
      var transactionArray = response.transactions;
      transactionArray.forEach(function (transaction) {
        transactionId = transaction.transId;
        assert.isNotNull(transaction.transId);
        assert.isDefined(transaction.transId);
      });
    });
  });

  describe("get batch statistics", function () {
    var response: GetBatchStatisticsResponse;

    before(function (done) {
      var getRequest: GetBatchStatisticsRequest = {
        merchantAuthentication: testData.merchantAuthentication,
        batchId,
      };
      var ctrl = new ApiControllers.GetBatchStatisticsController(getRequest);

      ctrl.execute(function () {
        var apiResponse = ctrl.getResponse();
        response = (apiResponse as unknown) as GetBatchStatisticsResponse;
        done();
      });
    });

    it("should return resultcode Ok when successful", function () {
      assert.equal(response.messages.resultCode, MessageTypeEnum.OK);
    });

    it("should return not null batch details when successful", function () {
      assert.isNotNull(response.batch);
      assert.isDefined(response.batch);
    });

    it("should return batch id same as input when successful", function () {
      assert.equal(response.batch.batchId, batchId);
    });
  });
});
