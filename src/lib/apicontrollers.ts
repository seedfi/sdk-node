import { ANetApiRequest } from "./types";
import APIOperationBase from "./apicontrollersbase";
import { logger } from "./logger";

namespace ApiControllers {

  export class ANetApiController extends APIOperationBase {
    constructor(apiRequest: ANetApiRequest) {
      logger.debug("Enter ANetApiController constructor");
      super(apiRequest);
      logger.debug("Exit ANetApiController constructor");
    }

    validateRequest() {
      logger.debug("Enter validateRequest");

      logger.debug("Exit validateRequest");
      return;
    }

    getRequestType(): string {
      return "ANetApiRequest";
    }
  }

  export class ARBCancelSubscriptionController extends APIOperationBase {
    constructor(apiRequest: ANetApiRequest) {
      logger.debug("Enter ARBCancelSubscriptionController constructor");
      super(apiRequest);
      logger.debug("Exit ARBCancelSubscriptionController constructor");
    }

    validateRequest() {
      logger.debug("Enter validateRequest");

      logger.debug("Exit validateRequest");
      return;
    }

    getRequestType() {
      return "ARBCancelSubscriptionRequest";
    }
  }

  export class ARBCreateSubscriptionController extends APIOperationBase {
    constructor(apiRequest: ANetApiRequest) {
      logger.debug("Enter ARBCreateSubscriptionController constructor");
      super(apiRequest);
      logger.debug("Exit ARBCreateSubscriptionController constructor");
    }

    validateRequest() {
      logger.debug("Enter validateRequest");

      logger.debug("Exit validateRequest");
      return;
    }

    getRequestType() {
      return "ARBCreateSubscriptionRequest";
    }
  }

  export class ARBGetSubscriptionController extends APIOperationBase {
    constructor(apiRequest: ANetApiRequest) {
      logger.debug("Enter ARBGetSubscriptionController constructor");
      super(apiRequest);
      logger.debug("Exit ARBGetSubscriptionController constructor");
    }

    validateRequest() {
      logger.debug("Enter validateRequest");

      logger.debug("Exit validateRequest");
      return;
    }

    getRequestType() {
      return "ARBGetSubscriptionRequest";
    }
  }

  export class ARBGetSubscriptionListController extends APIOperationBase {
    constructor(apiRequest: ANetApiRequest) {
      logger.debug("Enter ARBGetSubscriptionListController constructor");
      super(apiRequest);
      logger.debug("Exit ARBGetSubscriptionListController constructor");
    }

    validateRequest() {
      logger.debug("Enter validateRequest");

      logger.debug("Exit validateRequest");
      return;
    }

    getRequestType() {
      return "ARBGetSubscriptionListRequest";
    }
  }

  export class ARBGetSubscriptionStatusController extends APIOperationBase {
    constructor(apiRequest: ANetApiRequest) {
      logger.debug("Enter ARBGetSubscriptionStatusController constructor");
      super(apiRequest);
      logger.debug("Exit ARBGetSubscriptionStatusController constructor");
    }

    validateRequest() {
      logger.debug("Enter validateRequest");

      logger.debug("Exit validateRequest");
      return;
    }

    getRequestType() {
      return "ARBGetSubscriptionStatusRequest";
    }
  }

  export class ARBUpdateSubscriptionController extends APIOperationBase {
    constructor(apiRequest: ANetApiRequest) {
      logger.debug("Enter ARBUpdateSubscriptionController constructor");
      super(apiRequest);
      logger.debug("Exit ARBUpdateSubscriptionController constructor");
    }

    validateRequest() {
      logger.debug("Enter validateRequest");

      logger.debug("Exit validateRequest");
      return;
    }

    getRequestType() {
      return "ARBUpdateSubscriptionRequest";
    }
  }

  export class AuthenticateTestController extends APIOperationBase {
    constructor(apiRequest: ANetApiRequest) {
      logger.debug("Enter AuthenticateTestController constructor");
      super(apiRequest);
      logger.debug("Exit AuthenticateTestController constructor");
    }

    validateRequest() {
      logger.debug("Enter validateRequest");

      logger.debug("Exit validateRequest");
      return;
    }

    getRequestType() {
      return "AuthenticateTestRequest";
    }
  }

  export class CreateCustomerPaymentProfileController extends APIOperationBase {
    constructor(apiRequest: ANetApiRequest) {
      logger.debug("Enter CreateCustomerPaymentProfileController constructor");
      super(apiRequest);
      logger.debug("Exit CreateCustomerPaymentProfileController constructor");
    }

    validateRequest() {
      logger.debug("Enter validateRequest");

      logger.debug("Exit validateRequest");
      return;
    }

    getRequestType() {
      return "CreateCustomerPaymentProfileRequest";
    }
  }

  export class CreateCustomerProfileController extends APIOperationBase {
    constructor(apiRequest: ANetApiRequest) {
      logger.debug("Enter CreateCustomerProfileController constructor");
      super(apiRequest);
      logger.debug("Exit CreateCustomerProfileController constructor");
    }

    validateRequest() {
      logger.debug("Enter validateRequest");

      logger.debug("Exit validateRequest");
      return;
    }

    getRequestType() {
      return "CreateCustomerProfileRequest";
    }
  }

  export class CreateCustomerProfileFromTransactionController extends APIOperationBase {
    constructor(apiRequest: ANetApiRequest) {
      logger.debug(
        "Enter CreateCustomerProfileFromTransactionController constructor"
      );
      super(apiRequest);
      logger.debug(
        "Exit CreateCustomerProfileFromTransactionController constructor"
      );
    }

    validateRequest() {
      logger.debug("Enter validateRequest");

      logger.debug("Exit validateRequest");
      return;
    }

    getRequestType() {
      return "CreateCustomerProfileFromTransactionRequest";
    }
  }

  export class CreateCustomerProfileTransactionController extends APIOperationBase {
    constructor(apiRequest: ANetApiRequest) {
      logger.debug(
        "Enter CreateCustomerProfileTransactionController constructor"
      );
      super(apiRequest);
      logger.debug(
        "Exit CreateCustomerProfileTransactionController constructor"
      );
    }

    validateRequest() {
      logger.debug("Enter validateRequest");

      logger.debug("Exit validateRequest");
      return;
    }

    getRequestType() {
      return "CreateCustomerProfileTransactionRequest";
    }
  }

  export class CreateCustomerShippingAddressController extends APIOperationBase {
    constructor(apiRequest: ANetApiRequest) {
      logger.debug("Enter CreateCustomerShippingAddressController constructor");
      super(apiRequest);
      logger.debug("Exit CreateCustomerShippingAddressController constructor");
    }

    validateRequest() {
      logger.debug("Enter validateRequest");

      logger.debug("Exit validateRequest");
      return;
    }

    getRequestType() {
      return "CreateCustomerShippingAddressRequest";
    }
  }

  export class CreateTransactionController extends APIOperationBase {
    constructor(apiRequest: ANetApiRequest) {
      logger.debug("Enter CreateTransactionController constructor");
      super(apiRequest);
      logger.debug("Exit CreateTransactionController constructor");
    }

    validateRequest() {
      logger.debug("Enter validateRequest");

      logger.debug("Exit validateRequest");
      return;
    }

    getRequestType() {
      return "CreateTransactionRequest";
    }
  }

  export class DecryptPaymentDataController extends APIOperationBase {
    constructor(apiRequest: ANetApiRequest) {
      logger.debug("Enter DecryptPaymentDataController constructor");
      super(apiRequest);
      logger.debug("Exit DecryptPaymentDataController constructor");
    }

    validateRequest() {
      logger.debug("Enter validateRequest");

      logger.debug("Exit validateRequest");
      return;
    }

    getRequestType() {
      return "DecryptPaymentDataRequest";
    }
  }

  export class DeleteCustomerPaymentProfileController extends APIOperationBase {
    constructor(apiRequest: ANetApiRequest) {
      logger.debug("Enter DeleteCustomerPaymentProfileController constructor");
      super(apiRequest);
      logger.debug("Exit DeleteCustomerPaymentProfileController constructor");
    }

    validateRequest() {
      logger.debug("Enter validateRequest");

      logger.debug("Exit validateRequest");
      return;
    }

    getRequestType() {
      return "DeleteCustomerPaymentProfileRequest";
    }
  }

  export class DeleteCustomerProfileController extends APIOperationBase {
    constructor(apiRequest: ANetApiRequest) {
      logger.debug("Enter DeleteCustomerProfileController constructor");
      super(apiRequest);
      logger.debug("Exit DeleteCustomerProfileController constructor");
    }

    validateRequest() {
      logger.debug("Enter validateRequest");

      logger.debug("Exit validateRequest");
      return;
    }

    getRequestType() {
      return "DeleteCustomerProfileRequest";
    }
  }

  export class DeleteCustomerShippingAddressController extends APIOperationBase {
    constructor(apiRequest: ANetApiRequest) {
      logger.debug("Enter DeleteCustomerShippingAddressController constructor");
      super(apiRequest);
      logger.debug("Exit DeleteCustomerShippingAddressController constructor");
    }

    validateRequest() {
      logger.debug("Enter validateRequest");

      logger.debug("Exit validateRequest");
      return;
    }

    getRequestType() {
      return "DeleteCustomerShippingAddressRequest";
    }
  }

  export class GetAUJobDetailsController extends APIOperationBase {
    constructor(apiRequest: ANetApiRequest) {
      logger.debug("Enter GetAUJobDetailsController constructor");
      super(apiRequest);
      logger.debug("Exit GetAUJobDetailsController constructor");
    }

    validateRequest() {
      logger.debug("Enter validateRequest");

      logger.debug("Exit validateRequest");
      return;
    }

    getRequestType() {
      return "GetAUJobDetailsRequest";
    }
  }

  export class GetAUJobSummaryController extends APIOperationBase {
    constructor(apiRequest: ANetApiRequest) {
      logger.debug("Enter GetAUJobSummaryController constructor");
      super(apiRequest);
      logger.debug("Exit GetAUJobSummaryController constructor");
    }

    validateRequest() {
      logger.debug("Enter validateRequest");

      logger.debug("Exit validateRequest");
      return;
    }

    getRequestType() {
      return "GetAUJobSummaryRequest";
    }
  }

  export class GetBatchStatisticsController extends APIOperationBase {
    constructor(apiRequest: ANetApiRequest) {
      logger.debug("Enter GetBatchStatisticsController constructor");
      super(apiRequest);
      logger.debug("Exit GetBatchStatisticsController constructor");
    }

    validateRequest() {
      logger.debug("Enter validateRequest");

      logger.debug("Exit validateRequest");
      return;
    }

    getRequestType() {
      return "GetBatchStatisticsRequest";
    }
  }

  export class GetCustomerPaymentProfileController extends APIOperationBase {
    constructor(apiRequest: ANetApiRequest) {
      logger.debug("Enter GetCustomerPaymentProfileController constructor");
      super(apiRequest);
      logger.debug("Exit GetCustomerPaymentProfileController constructor");
    }

    validateRequest() {
      logger.debug("Enter validateRequest");

      logger.debug("Exit validateRequest");
      return;
    }

    getRequestType() {
      return "GetCustomerPaymentProfileRequest";
    }
  }

  export class GetCustomerPaymentProfileListController extends APIOperationBase {
    constructor(apiRequest: ANetApiRequest) {
      logger.debug("Enter GetCustomerPaymentProfileListController constructor");
      super(apiRequest);
      logger.debug("Exit GetCustomerPaymentProfileListController constructor");
    }

    validateRequest() {
      logger.debug("Enter validateRequest");

      logger.debug("Exit validateRequest");
      return;
    }

    getRequestType() {
      return "GetCustomerPaymentProfileListRequest";
    }
  }

  export class GetCustomerPaymentProfileNonceController extends APIOperationBase {
    constructor(apiRequest: ANetApiRequest) {
      logger.debug(
        "Enter GetCustomerPaymentProfileNonceController constructor"
      );
      super(apiRequest);
      logger.debug("Exit GetCustomerPaymentProfileNonceController constructor");
    }

    validateRequest() {
      logger.debug("Enter validateRequest");

      logger.debug("Exit validateRequest");
      return;
    }

    getRequestType() {
      return "GetCustomerPaymentProfileNonceRequest";
    }
  }

  export class GetCustomerProfileController extends APIOperationBase {
    constructor(apiRequest: ANetApiRequest) {
      logger.debug("Enter GetCustomerProfileController constructor");
      super(apiRequest);
      logger.debug("Exit GetCustomerProfileController constructor");
    }

    validateRequest() {
      logger.debug("Enter validateRequest");

      logger.debug("Exit validateRequest");
      return;
    }

    getRequestType() {
      return "GetCustomerProfileRequest";
    }
  }

  export class GetCustomerProfileIdsController extends APIOperationBase {
    constructor(apiRequest: ANetApiRequest) {
      logger.debug("Enter GetCustomerProfileIdsController constructor");
      super(apiRequest);
      logger.debug("Exit GetCustomerProfileIdsController constructor");
    }

    validateRequest() {
      logger.debug("Enter validateRequest");

      logger.debug("Exit validateRequest");
      return;
    }

    getRequestType() {
      return "GetCustomerProfileIdsRequest";
    }
  }

  export class GetCustomerShippingAddressController extends APIOperationBase {
    constructor(apiRequest: ANetApiRequest) {
      logger.debug("Enter GetCustomerShippingAddressController constructor");
      super(apiRequest);
      logger.debug("Exit GetCustomerShippingAddressController constructor");
    }

    validateRequest() {
      logger.debug("Enter validateRequest");

      logger.debug("Exit validateRequest");
      return;
    }

    getRequestType() {
      return "GetCustomerShippingAddressRequest";
    }
  }

  export class GetHostedPaymentPageController extends APIOperationBase {
    constructor(apiRequest: ANetApiRequest) {
      logger.debug("Enter GetHostedPaymentPageController constructor");
      super(apiRequest);
      logger.debug("Exit GetHostedPaymentPageController constructor");
    }

    validateRequest() {
      logger.debug("Enter validateRequest");

      logger.debug("Exit validateRequest");
      return;
    }

    getRequestType() {
      return "GetHostedPaymentPageRequest";
    }
  }

  export class GetHostedProfilePageController extends APIOperationBase {
    constructor(apiRequest: ANetApiRequest) {
      logger.debug("Enter GetHostedProfilePageController constructor");
      super(apiRequest);
      logger.debug("Exit GetHostedProfilePageController constructor");
    }

    validateRequest() {
      logger.debug("Enter validateRequest");

      logger.debug("Exit validateRequest");
      return;
    }

    getRequestType() {
      return "GetHostedProfilePageRequest";
    }
  }

  export class GetMerchantDetailsController extends APIOperationBase {
    constructor(apiRequest: ANetApiRequest) {
      logger.debug("Enter GetMerchantDetailsController constructor");
      super(apiRequest);
      logger.debug("Exit GetMerchantDetailsController constructor");
    }

    validateRequest() {
      logger.debug("Enter validateRequest");

      logger.debug("Exit validateRequest");
      return;
    }

    getRequestType() {
      return "GetMerchantDetailsRequest";
    }
  }

  export class GetSettledBatchListController extends APIOperationBase {
    constructor(apiRequest: ANetApiRequest) {
      logger.debug("Enter GetSettledBatchListController constructor");
      super(apiRequest);
      logger.debug("Exit GetSettledBatchListController constructor");
    }

    validateRequest() {
      logger.debug("Enter validateRequest");

      logger.debug("Exit validateRequest");
      return;
    }

    getRequestType() {
      return "GetSettledBatchListRequest";
    }
  }

  export class GetTransactionDetailsController extends APIOperationBase {
    constructor(apiRequest: ANetApiRequest) {
      logger.debug("Enter GetTransactionDetailsController constructor");
      super(apiRequest);
      logger.debug("Exit GetTransactionDetailsController constructor");
    }

    validateRequest() {
      logger.debug("Enter validateRequest");

      logger.debug("Exit validateRequest");
      return;
    }

    getRequestType() {
      return "GetTransactionDetailsRequest";
    }
  }

  export class GetTransactionListController extends APIOperationBase {
    constructor(apiRequest: ANetApiRequest) {
      logger.debug("Enter GetTransactionListController constructor");
      super(apiRequest);
      logger.debug("Exit GetTransactionListController constructor");
    }

    validateRequest() {
      logger.debug("Enter validateRequest");

      logger.debug("Exit validateRequest");
      return;
    }

    getRequestType() {
      return "GetTransactionListRequest";
    }
  }

  export class GetTransactionListForCustomerController extends APIOperationBase {
    constructor(apiRequest: ANetApiRequest) {
      logger.debug("Enter GetTransactionListForCustomerController constructor");
      super(apiRequest);
      logger.debug("Exit GetTransactionListForCustomerController constructor");
    }

    validateRequest() {
      logger.debug("Enter validateRequest");

      logger.debug("Exit validateRequest");
      return;
    }

    getRequestType() {
      return "GetTransactionListForCustomerRequest";
    }
  }

  export class GetUnsettledTransactionListController extends APIOperationBase {
    constructor(apiRequest: ANetApiRequest) {
      logger.debug("Enter GetUnsettledTransactionListController constructor");
      super(apiRequest);
      logger.debug("Exit GetUnsettledTransactionListController constructor");
    }

    validateRequest() {
      logger.debug("Enter validateRequest");

      logger.debug("Exit validateRequest");
      return;
    }

    getRequestType() {
      return "GetUnsettledTransactionListRequest";
    }
  }

  export class IsAliveController extends APIOperationBase {
    constructor(apiRequest: ANetApiRequest) {
      logger.debug("Enter IsAliveController constructor");
      super(apiRequest);
      logger.debug("Exit IsAliveController constructor");
    }

    validateRequest() {
      logger.debug("Enter validateRequest");

      logger.debug("Exit validateRequest");
      return;
    }

    getRequestType() {
      return "IsAliveRequest";
    }
  }

  export class LogoutController extends APIOperationBase {
    constructor(apiRequest: ANetApiRequest) {
      logger.debug("Enter LogoutController constructor");
      super(apiRequest);
      logger.debug("Exit LogoutController constructor");
    }

    validateRequest() {
      logger.debug("Enter validateRequest");

      logger.debug("Exit validateRequest");
      return;
    }

    getRequestType() {
      return "LogoutRequest";
    }
  }

  export class MobileDeviceLoginController extends APIOperationBase {
    constructor(apiRequest: ANetApiRequest) {
      logger.debug("Enter MobileDeviceLoginController constructor");
      super(apiRequest);
      logger.debug("Exit MobileDeviceLoginController constructor");
    }

    validateRequest() {
      logger.debug("Enter validateRequest");

      logger.debug("Exit validateRequest");
      return;
    }

    getRequestType() {
      return "MobileDeviceLoginRequest";
    }
  }

  export class MobileDeviceRegistrationController extends APIOperationBase {
    constructor(apiRequest: ANetApiRequest) {
      logger.debug("Enter MobileDeviceRegistrationController constructor");
      super(apiRequest);
      logger.debug("Exit MobileDeviceRegistrationController constructor");
    }

    validateRequest() {
      logger.debug("Enter validateRequest");

      logger.debug("Exit validateRequest");
      return;
    }

    getRequestType() {
      return "MobileDeviceRegistrationRequest";
    }
  }

  export class SecurePaymentContainerController extends APIOperationBase {
    constructor(apiRequest: ANetApiRequest) {
      logger.debug("Enter SecurePaymentContainerController constructor");
      super(apiRequest);
      logger.debug("Exit SecurePaymentContainerController constructor");
    }

    validateRequest() {
      logger.debug("Enter validateRequest");

      logger.debug("Exit validateRequest");
      return;
    }

    getRequestType() {
      return "SecurePaymentContainerRequest";
    }
  }

  export class SendCustomerTransactionReceiptController extends APIOperationBase {
    constructor(apiRequest: ANetApiRequest) {
      logger.debug(
        "Enter SendCustomerTransactionReceiptController constructor"
      );
      super(apiRequest);
      logger.debug("Exit SendCustomerTransactionReceiptController constructor");
    }

    validateRequest() {
      logger.debug("Enter validateRequest");

      logger.debug("Exit validateRequest");
      return;
    }

    getRequestType() {
      return "SendCustomerTransactionReceiptRequest";
    }
  }

  export class UpdateCustomerPaymentProfileController extends APIOperationBase {
    constructor(apiRequest: ANetApiRequest) {
      logger.debug("Enter UpdateCustomerPaymentProfileController constructor");
      super(apiRequest);
      logger.debug("Exit UpdateCustomerPaymentProfileController constructor");
    }

    validateRequest() {
      logger.debug("Enter validateRequest");

      logger.debug("Exit validateRequest");
      return;
    }

    getRequestType() {
      return "UpdateCustomerPaymentProfileRequest";
    }
  }

  export class UpdateCustomerProfileController extends APIOperationBase {
    constructor(apiRequest: ANetApiRequest) {
      logger.debug("Enter UpdateCustomerProfileController constructor");
      super(apiRequest);
      logger.debug("Exit UpdateCustomerProfileController constructor");
    }

    validateRequest() {
      logger.debug("Enter validateRequest");

      logger.debug("Exit validateRequest");
      return;
    }

    getRequestType() {
      return "UpdateCustomerProfileRequest";
    }
  }

  export class UpdateCustomerShippingAddressController extends APIOperationBase {
    constructor(apiRequest: ANetApiRequest) {
      logger.debug("Enter UpdateCustomerShippingAddressController constructor");
      super(apiRequest);
      logger.debug("Exit UpdateCustomerShippingAddressController constructor");
    }

    validateRequest() {
      logger.debug("Enter validateRequest");

      logger.debug("Exit validateRequest");
      return;
    }

    getRequestType() {
      return "UpdateCustomerShippingAddressRequest";
    }
  }

  export class UpdateHeldTransactionController extends APIOperationBase {
    constructor(apiRequest: ANetApiRequest) {
      logger.debug("Enter UpdateHeldTransactionController constructor");
      super(apiRequest);
      logger.debug("Exit UpdateHeldTransactionController constructor");
    }

    validateRequest() {
      logger.debug("Enter validateRequest");

      logger.debug("Exit validateRequest");
      return;
    }

    getRequestType() {
      return "UpdateHeldTransactionRequest";
    }
  }

  export class UpdateMerchantDetailsController extends APIOperationBase {
    constructor(apiRequest: ANetApiRequest) {
      logger.debug("Enter UpdateMerchantDetailsController constructor");
      super(apiRequest);
      logger.debug("Exit UpdateMerchantDetailsController constructor");
    }

    validateRequest() {
      logger.debug("Enter validateRequest");

      logger.debug("Exit validateRequest");
      return;
    }

    getRequestType() {
      return "UpdateMerchantDetailsRequest";
    }
  }

  export class UpdateSplitTenderGroupController extends APIOperationBase {
    constructor(apiRequest: ANetApiRequest) {
      logger.debug("Enter UpdateSplitTenderGroupController constructor");
      super(apiRequest);
      logger.debug("Exit UpdateSplitTenderGroupController constructor");
    }

    validateRequest() {
      logger.debug("Enter validateRequest");

      logger.debug("Exit validateRequest");
      return;
    }

    getRequestType() {
      return "UpdateSplitTenderGroupRequest";
    }
  }

  export class ValidateCustomerPaymentProfileController extends APIOperationBase {
    constructor(apiRequest: ANetApiRequest) {
      logger.debug(
        "Enter ValidateCustomerPaymentProfileController constructor"
      );
      super(apiRequest);
      logger.debug("Exit ValidateCustomerPaymentProfileController constructor");
    }

    validateRequest() {
      logger.debug("Enter validateRequest");

      logger.debug("Exit validateRequest");
      return;
    }

    getRequestType() {
      return "ValidateCustomerPaymentProfileRequest";
    }
  }
}

export = ApiControllers;
