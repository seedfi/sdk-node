  // interface ANetApiRequest {
  //   merchantAuthentication?: MerchantAuthenticationType;
  //   clientId?: any;
  //   refId?: any;
  // }
  // interface ANetApiResponse {
  //   refId?: any;
  //   messages?: MessagesType;
  //   sessionToken?: any;
  // }
  // interface ARBGetSubscriptionListSorting {
  //   orderBy?: any;
  //   orderDescending?: any;
  // }
  // interface ARBSubscriptionMaskedType {
  //   name?: any;
  //   paymentSchedule?: PaymentScheduleType;
  //   amount?: any;
  //   trialAmount?: any;
  //   status?: any;
  //   profile?: SubscriptionCustomerProfileType;
  //   order?: OrderType;
  //   arbTransactions?: ARBTransactionList;
  // }
  // interface ARBSubscriptionType {
  //   name?: any;
  //   paymentSchedule?: PaymentScheduleType;
  //   amount?: any;
  //   trialAmount?: any;
  //   payment?: PaymentType;
  //   order?: OrderType;
  //   customer?: CustomerType;
  //   billTo?: NameAndAddressType;
  //   shipTo?: NameAndAddressType;
  //   profile?: CustomerProfileIdType;
  // }
  // interface ARBTransactionList {}
  // interface ArbTransaction {
  //   transId?: any;
  //   response?: any;
  //   submitTimeUTC?: any;
  //   payNum?: any;
  //   attemptNum?: any;
  // }

  // export type ArrayOfAUResponseType = AuResponseType[];
  // export type ArrayOfBatchDetailsType = BatchDetailsType[];
  // export type ArrayOfBatchStatisticType = BatchStatisticType[];
  // export type ArrayOfCardType = string[];
  // export type ArrayOfContactDetail = ContactDetailType[];
  // export type ArrayOfCurrencyCode = string[];
  // export type ArrayOfCustomerPaymentProfileListItemType = CustomerPaymentProfileListItemType[];
  // export type ArrayOfFDSFilter = FDSFilterType[];
  // export type ArrayOfFraudFilterType = string[];
  // export type ArrayOfLineItem = LineItemType[];
  // export type ArrayOfLong = any[];
  // export type ArrayOfMarketType = string[];
  // export type ArrayOfNumericString = string[];
  // export type ArrayOfPaymentMethod = string[];
  // export type ArrayOfPermissionType = PermissionType[];
  // export type ArrayOfProcessorType = ProcessorType[];
  // export type ArrayOfProductCode = string[];
  // export type ArrayOfReturnedItem = ReturnedItemType[];
  // export type ArrayOfSetting = SettingType[];
  // export type ArrayOfString = string[];
  // export type ArrayOfSubscription = SubscriptionDetail[];
  // export type ArrayOfTransactionSummaryType = TransactionSummaryType[];

  // interface AuDetailsType {
  //   customerProfileID?: any;
  //   customerPaymentProfileID?: any;
  //   firstName?: any;
  //   lastName?: any;
  //   updateTimeUTC?: any;
  //   auReasonCode?: any;
  //   reasonDescription?: any;
  // }
  // interface AuResponseType {
  //   auReasonCode?: any;
  //   profileCount?: any;
  //   reasonDescription?: any;
  // }
  // interface BankAccountMaskedType {
  //   accountType?: any;
  //   routingNumber?: any;
  //   accountNumber?: any;
  //   nameOnAccount?: any;
  //   echeckType?: any;
  //   bankName?: any;
  // }
  // interface BankAccountType {
  //   accountType?: any;
  //   routingNumber?: any;
  //   accountNumber?: any;
  //   nameOnAccount?: any;
  //   echeckType?: any;
  //   bankName?: any;
  //   checkNumber?: any;
  // }
  // interface BatchDetailsType {
  //   batchId?: any;
  //   settlementTimeUTC?: any;
  //   settlementTimeLocal?: any;
  //   settlementState?: any;
  //   paymentMethod?: any;
  //   marketType?: any;
  //   product?: any;
  //   statistics?: ArrayOfBatchStatisticType;
  // }
  // interface BatchStatisticType {
  //   accountType?: any;
  //   chargeAmount?: any;
  //   chargeCount?: any;
  //   refundAmount?: any;
  //   refundCount?: any;
  //   voidCount?: any;
  //   declineCount?: any;
  //   errorCount?: any;
  //   returnedItemAmount?: any;
  //   returnedItemCount?: any;
  //   chargebackAmount?: any;
  //   chargebackCount?: any;
  //   correctionNoticeCount?: any;
  //   chargeChargeBackAmount?: any;
  //   chargeChargeBackCount?: any;
  //   refundChargeBackAmount?: any;
  //   refundChargeBackCount?: any;
  //   chargeReturnedItemsAmount?: any;
  //   chargeReturnedItemsCount?: any;
  //   refundReturnedItemsAmount?: any;
  //   refundReturnedItemsCount?: any;
  // }
  // interface CardArt {
  //   cardBrand?: any;
  //   cardImageHeight?: any;
  //   cardImageUrl?: any;
  //   cardImageWidth?: any;
  //   cardType?: any;
  // }
  // interface CcAuthenticationType {
  //   authenticationIndicator?: any;
  //   cardholderAuthenticationValue?: any;
  // }
  // interface ContactDetailType {
  //   email?: any;
  //   firstName?: any;
  //   lastName?: any;
  // }
  // interface CreateProfileResponse {
  //   messages?: MessagesType;
  //   customerProfileId?: any;
  //   customerPaymentProfileIdList?: ArrayOfNumericString;
  //   customerShippingAddressIdList?: ArrayOfNumericString;
  // }
  // interface CreditCardMaskedType {
  //   cardNumber?: any;
  //   expirationDate?: any;
  //   cardType?: any;
  //   cardArt?: CardArt;
  //   issuerNumber?: any;
  //   isPaymentToken?: any;
  // }
  // interface CreditCardSimpleType {
  //   cardNumber?: any;
  //   expirationDate?: any;
  // }
  // interface CreditCardTrackType {
  //   track1?: any;
  //   track2?: any;
  // }
  // interface CustomerDataType {
  //   type?: any;
  //   id?: any;
  //   email?: any;
  //   driversLicense?: DriversLicenseType;
  //   taxId?: any;
  // }
  // interface CustomerPaymentProfileBaseType {
  //   customerType?: any;
  //   billTo?: CustomerAddressType;
  // }
  // interface CustomerPaymentProfileListItemType {
  //   defaultPaymentProfile?: any;
  //   customerPaymentProfileId?: any;
  //   customerProfileId?: any;
  //   billTo?: CustomerAddressType;
  //   payment?: PaymentMaskedType;
  // }
  // interface CustomerPaymentProfileSorting {
  //   orderBy?: any;
  //   orderDescending?: any;
  // }
  // interface CustomerProfileBaseType {
  //   merchantCustomerId?: any;
  //   description?: any;
  //   email?: any;
  // }
  // interface CustomerProfileIdType {
  //   customerProfileId?: any;
  //   customerPaymentProfileId?: any;
  //   customerAddressId?: any;
  // }
  // interface CustomerProfilePaymentType {
  //   createProfile?: any;
  //   customerProfileId?: any;
  //   paymentProfile?: PaymentProfile;
  //   shippingProfileId?: any;
  // }
  // interface CustomerProfileSummaryType {
  //   customerProfileId?: any;
  //   description?: any;
  //   merchantCustomerId?: any;
  //   email?: any;
  //   createdDate?: any;
  // }
  // interface CustomerType {
  //   type?: any;
  //   id?: any;
  //   email?: any;
  //   phoneNumber?: any;
  //   faxNumber?: any;
  //   driversLicense?: DriversLicenseType;
  //   taxId?: any;
  // }
  // interface DriversLicenseMaskedType {
  //   number?: any;
  //   state?: any;
  //   dateOfBirth?: any;
  // }
  // interface DriversLicenseType {
  //   number?: any;
  //   state?: any;
  //   dateOfBirth?: any;
  // }
  // interface EmvTag {
  //   name?: any;
  //   value?: any;
  //   formatted?: any;
  // }
  // interface EncryptedTrackDataType {
  //   FormOfPayment?: KeyBlock;
  // }
  // interface EnumCollection {
  //   customerProfileSummaryType?: CustomerProfileSummaryType;
  //   paymentSimpleType?: PaymentSimpleType;
  //   accountTypeEnum?: any;
  //   cardTypeEnum?: any;
  //   FDSFilterActionEnum?: any;
  //   permissionsEnum?: any;
  //   settingNameEnum?: any;
  //   settlementStateEnum?: any;
  //   transactionStatusEnum?: any;
  //   transactionTypeEnum?: any;
  // }
  // interface ExtendedAmountType {
  //   amount?: any;
  //   name?: any;
  //   description?: any;
  // }
  // interface FDSFilterType {
  //   name?: any;
  //   action?: any;
  // }
  // interface FingerPrintType {
  //   hashValue?: any;
  //   sequence?: any;
  //   timestamp?: any;
  //   currencyCode?: any;
  //   amount?: any;
  // }
  // interface FraudInformationType {
  //   fraudFilterList?: ArrayOfFraudFilterType;
  //   fraudAction?: any;
  // }
  // interface HeldTransactionRequestType {
  //   action?: any;
  //   refTransId?: any;
  // }
  // interface ImpersonationAuthenticationType {
  //   partnerLoginId?: any;
  //   partnerTransactionKey?: any;
  // }
  // interface IsAliveRequest {
  //   refId?: any;
  // }
  // interface KeyBlock {
  //   Value?: KeyValue;
  // }
  // interface KeyManagementScheme {
  //   DUKPT?: {
  //     Operation?: any;
  //     Mode?: {
  //       PIN?: any;
  //       Data?: any;
  //     };
  //     DeviceInfo?: {
  //       Description?: any;
  //     };
  //     EncryptedData?: {
  //       Value?: any;
  //     };
  //   };
  // }
  // interface KeyValue {
  //   Encoding?: any;
  //   EncryptionAlgorithm?: any;
  //   Scheme?: KeyManagementScheme;
  // }
  // interface LineItemType {
  //   itemId?: any;
  //   name?: any;
  //   description?: any;
  //   quantity?: any;
  //   unitPrice?: any;
  //   taxable?: any;
  //   unitOfMeasure?: any;
  //   typeOfSupply?: any;
  //   taxRate?: any;
  //   taxAmount?: any;
  //   nationalTax?: any;
  //   localTax?: any;
  //   vatRate?: any;
  //   alternateTaxId?: any;
  //   alternateTaxType?: any;
  //   alternateTaxTypeApplied?: any;
  //   alternateTaxRate?: any;
  //   alternateTaxAmount?: any;
  //   totalAmount?: any;
  //   commodityCode?: any;
  //   productCode?: any;
  //   productSKU?: any;
  //   discountRate?: any;
  //   discountAmount?: any;
  //   taxIncludedInTotal?: any;
  //   taxIsAfterDiscount?: any;
  // }
  // interface ListOfAUDetailsType {}
  // interface MerchantAuthenticationType {
  //   name?: any;
  //   transactionKey?: any;
  //   sessionToken?: any;
  //   password?: any;
  //   impersonationAuthentication?: ImpersonationAuthenticationType;
  //   fingerPrint?: FingerPrintType;
  //   clientKey?: any;
  //   accessToken?: any;
  //   mobileDeviceId?: any;
  // }
  // interface MerchantContactType {
  //   merchantName?: any;
  //   merchantAddress?: any;
  //   merchantCity?: any;
  //   merchantState?: any;
  //   merchantZip?: any;
  //   merchantPhone?: any;
  // }

  // interface Message {
  //   code?: any;
  //   text?: any;
  // }
  // interface MessagesType {
  //   resultCode?: any;
  //   message: Message[];
  // }
  // interface MobileDeviceType {
  //   mobileDeviceId?: any;
  //   description?: any;
  //   phoneNumber?: any;
  //   devicePlatform?: any;
  //   deviceActivation?: any;
  // }
  // interface NameAndAddressType {
  //   firstName?: any;
  //   lastName?: any;
  //   company?: any;
  //   address?: any;
  //   city?: any;
  //   state?: any;
  //   zip?: any;
  //   country?: any;
  // }
  // interface OpaqueDataType {
  //   dataDescriptor?: any;
  //   dataValue?: any;
  //   dataKey?: any;
  //   expirationTimeStamp?: any;
  // }
  // interface OrderType {
  //   invoiceNumber?: any;
  //   description?: any;
  //   discountAmount?: any;
  //   taxIsAfterDiscount?: any;
  //   totalTaxTypeCode?: any;
  //   purchaserVATRegistrationNumber?: any;
  //   merchantVATRegistrationNumber?: any;
  //   vatInvoiceReferenceNumber?: any;
  //   purchaserCode?: any;
  //   summaryCommodityCode?: any;
  //   purchaseOrderDateUTC?: any;
  //   supplierOrderReference?: any;
  //   authorizedContactName?: any;
  //   cardAcceptorRefNumber?: any;
  //   amexDataTAA1?: any;
  //   amexDataTAA2?: any;
  //   amexDataTAA3?: any;
  //   amexDataTAA4?: any;
  // }
  // interface OtherTaxType {
  //   nationalTaxAmount?: any;
  //   localTaxAmount?: any;
  //   alternateTaxAmount?: any;
  //   alternateTaxId?: any;
  //   vatTaxRate?: any;
  //   vatTaxAmount?: any;
  // }
  // interface Paging {
  //   limit?: any;
  //   offset?: any;
  // }
  // interface PayPalType {
  //   successUrl?: any;
  //   cancelUrl?: any;
  //   paypalLc?: any;
  //   paypalHdrImg?: any;
  //   paypalPayflowcolor?: any;
  //   payerID?: any;
  // }
  // interface PaymentDetails {
  //   currency?: any;
  //   promoCode?: any;
  //   misc?: any;
  //   giftWrap?: any;
  //   discount?: any;
  //   tax?: any;
  //   shippingHandling?: any;
  //   subTotal?: any;
  //   orderID?: any;
  //   amount?: any;
  // }
  // interface PaymentEmvType {
  //   emvData?: any;
  //   emvDescriptor?: any;
  //   emvVersion?: any;
  // }
  // interface PaymentMaskedType {
  //   creditCard?: CreditCardMaskedType;
  //   bankAccount?: BankAccountMaskedType;
  //   tokenInformation?: TokenMaskedType;
  // }
  // interface PaymentProfile {
  //   paymentProfileId?: any;
  //   cardCode?: any;
  // }
  // interface PaymentScheduleType {
  //   interval?: {
  //     length?: any;
  //     unit?: any;
  //   };
  //   startDate?: any;
  //   totalOccurrences?: any;
  //   trialOccurrences?: any;
  // }
  // interface PaymentSimpleType {
  //   creditCard?: CreditCardSimpleType;
  //   bankAccount?: BankAccountType;
  // }
  // interface PaymentType {
  //   creditCard?: CreditCardType;
  //   bankAccount?: BankAccountType;
  //   trackData?: CreditCardTrackType;
  //   encryptedTrackData?: EncryptedTrackDataType;
  //   payPal?: PayPalType;
  //   opaqueData?: OpaqueDataType;
  //   emv?: PaymentEmvType;
  //   dataSource?: any;
  // }
  // interface PermissionType {
  //   permissionName?: any;
  // }
  // interface ProcessingOptions {
  //   isFirstRecurringPayment?: any;
  //   isFirstSubsequentAuth?: any;
  //   isSubsequentAuth?: any;
  //   isStoredCredentials?: any;
  // }
  // interface ProcessorType {
  //   name?: any;
  //   id?: any;
  //   cardTypes?: ArrayOfCardType;
  // }
  // interface ProfileTransAmountType {
  //   amount?: any;
  //   tax?: ExtendedAmountType;
  //   shipping?: ExtendedAmountType;
  //   duty?: ExtendedAmountType;
  // }
  // interface ProfileTransVoidType {
  //   customerProfileId?: any;
  //   customerPaymentProfileId?: any;
  //   customerShippingAddressId?: any;
  //   transId?: any;
  // }
  // interface ProfileTransactionType {
  //   profileTransAuthCapture?: ProfileTransAuthCaptureType;
  //   profileTransAuthOnly?: ProfileTransAuthOnlyType;
  //   profileTransPriorAuthCapture?: ProfileTransPriorAuthCaptureType;
  //   profileTransCaptureOnly?: ProfileTransCaptureOnlyType;
  //   profileTransRefund?: ProfileTransRefundType;
  //   profileTransVoid?: ProfileTransVoidType;
  // }
  // interface ReturnedItemType {
  //   id?: any;
  //   dateUTC?: any;
  //   dateLocal?: any;
  //   code?: any;
  //   description?: any;
  // }
  // interface SecurePaymentContainerErrorType {
  //   code?: any;
  //   description?: any;
  // }
  // interface SettingType {
  //   settingName?: any;
  //   settingValue?: any;
  // }
  // interface SolutionType {
  //   id?: any;
  //   name?: any;
  //   vendorName?: any;
  // }
  // interface SubMerchantType {
  //   identifier?: any;
  //   doingBusinessAs?: any;
  //   paymentServiceProviderName?: any;
  //   paymentServiceFacilitator?: any;
  //   streetAddress?: any;
  //   phone?: any;
  //   email?: any;
  //   postalCode?: any;
  //   city?: any;
  //   regionCode?: any;
  //   countryCode?: any;
  // }
  // interface SubscriptionDetail {
  //   id?: any;
  //   name?: any;
  //   status?: any;
  //   createTimeStampUTC?: any;
  //   firstName?: any;
  //   lastName?: any;
  //   totalOccurrences?: any;
  //   pastOccurrences?: any;
  //   paymentMethod?: any;
  //   accountNumber?: any;
  //   invoice?: any;
  //   amount?: any;
  //   currencyCode?: any;
  //   customerProfileId?: any;
  //   customerPaymentProfileId?: any;
  //   customerShippingProfileId?: any;
  // }
  // interface SubscriptionIdList {}
  // interface SubscriptionPaymentType {
  //   id?: any;
  //   payNum?: any;
  // }
  // interface SubsequentAuthInformation {
  //   originalNetworkTransId?: any;
  //   reason?: any;
  // }
  // interface TokenMaskedType {
  //   tokenSource?: any;
  //   tokenNumber?: any;
  //   expirationDate?: any;
  //   tokenRequestorId?: any;
  // }
  // interface TransRetailInfoType {
  //   marketType?: any;
  //   deviceType?: any;
  //   customerSignature?: any;
  //   terminalNumber?: any;
  // }
  // interface Tag {
  //   tagId?: any;
  //   data?: any;
  // }
  // interface TransactionDetailsType {
  //   transId?: any;
  //   refTransId?: any;
  //   splitTenderId?: any;
  //   submitTimeUTC?: any;
  //   submitTimeLocal?: any;
  //   transactionType?: any;
  //   transactionStatus?: any;
  //   responseCode?: any;
  //   responseReasonCode?: any;
  //   subscription?: SubscriptionPaymentType;
  //   responseReasonDescription?: any;
  //   authCode?: any;
  //   AVSResponse?: any;
  //   cardCodeResponse?: any;
  //   CAVVResponse?: any;
  //   FDSFilterAction?: any;
  //   FDSFilters?: ArrayOfFDSFilter;
  //   batch?: BatchDetailsType;
  //   order?: OrderExType;
  //   requestedAmount?: any;
  //   authAmount?: any;
  //   settleAmount?: any;
  //   tax?: ExtendedAmountType;
  //   shipping?: ExtendedAmountType;
  //   duty?: ExtendedAmountType;
  //   lineItems?: ArrayOfLineItem;
  //   prepaidBalanceRemaining?: any;
  //   taxExempt?: any;
  //   payment?: PaymentMaskedType;
  //   customer?: CustomerDataType;
  //   billTo?: CustomerAddressType;
  //   shipTo?: NameAndAddressType;
  //   recurringBilling?: any;
  //   customerIP?: any;
  //   product?: any;
  //   entryMode?: any;
  //   marketType?: any;
  //   mobileDeviceId?: any;
  //   customerSignature?: any;
  //   returnedItems?: ArrayOfReturnedItem;
  //   solution?: SolutionType;
  //   emvDetails?: {
  //     tag?: Tag[];
  //   };
  //   profile?: CustomerProfileIdType;
  //   surcharge?: ExtendedAmountType;
  //   employeeId?: any;
  //   tip?: ExtendedAmountType;
  //   otherTax?: OtherTaxType;
  //   shipFrom?: NameAndAddressType;
  // }
  // interface TransactionListSorting {
  //   orderBy?: any;
  //   orderDescending?: any;
  // }
  // interface TransactionRequestType {
  //   transactionType?: any;
  //   amount?: any;
  //   currencyCode?: any;
  //   payment?: PaymentType;
  //   profile?: CustomerProfilePaymentType;
  //   solution?: SolutionType;
  //   callId?: any;
  //   terminalNumber?: any;
  //   authCode?: any;
  //   refTransId?: any;
  //   splitTenderId?: any;
  //   order?: OrderType;
  //   lineItems?: ArrayOfLineItem;
  //   tax?: ExtendedAmountType;
  //   duty?: ExtendedAmountType;
  //   shipping?: ExtendedAmountType;
  //   taxExempt?: any;
  //   poNumber?: any;
  //   customer?: CustomerDataType;
  //   billTo?: CustomerAddressType;
  //   shipTo?: NameAndAddressType;
  //   customerIP?: any;
  //   cardholderAuthentication?: CcAuthenticationType;
  //   retail?: TransRetailInfoType;
  //   employeeId?: any;
  //   transactionSettings?: ArrayOfSetting;
  //   userFields?: UserField[];
  //   surcharge?: ExtendedAmountType;
  //   merchantDescriptor?: any;
  //   subMerchant?: SubMerchantType;
  //   tip?: ExtendedAmountType;
  //   processingOptions?: ProcessingOptions;
  //   subsequentAuthInformation?: SubsequentAuthInformation;
  //   otherTax?: OtherTaxType;
  //   shipFrom?: NameAndAddressType;
  // }
  // interface TransactionResponseError {
  //   errorCode: any;
  //   errorText: any;
  // }
  // interface TransactionResponseMessage {
  //   errorCode: any;
  //   errorText: any;
  // }
  // interface TransactionResponseSplitTenderPayment {
  //   transId?: any;
  //   responseCode?: any;
  //   responseToCustomer?: any;
  //   authCode?: any;
  //   accountNumber?: any;
  //   accountType?: any;
  //   requestedAmount?: any;
  //   approvedAmount?: any;
  //   balanceOnCard?: any;
  // }
  // interface TransactionResponse {
  //   responseCode?: any;
  //   rawResponseCode?: any;
  //   authCode?: any;
  //   avsResultCode?: any;
  //   cvvResultCode?: any;
  //   cavvResultCode?: any;
  //   transId?: any;
  //   refTransID?: any;
  //   transHash?: any;
  //   testRequest?: any;
  //   accountNumber?: any;
  //   entryMode?: any;
  //   accountType?: any;
  //   splitTenderId?: any;
  //   prePaidCard?: {
  //     requestedAmount?: any;
  //     approvedAmount?: any;
  //     balanceOnCard?: any;
  //   };
  //   messages?: TransactionResponseMessage[];
  //   errors?: TransactionResponseError[];
  //   splitTenderPayments?: TransactionResponseSplitTenderPayment[];
  //   userFields?: UserField[];
  //   shipTo?: NameAndAddressType;
  //   secureAcceptance?: {
  //     SecureAcceptanceUrl?: any;
  //     PayerID?: any;
  //     PayerEmail?: any;
  //   };
  //   emvResponse?: {
  //     tags?: EmvTag[];
  //   };
  //   transHashSha2?: any;
  //   profile?: CustomerProfileIdType;
  //   networkTransId?: any;
  // }
  // interface TransactionSummaryType {
  //   transId?: any;
  //   submitTimeUTC?: any;
  //   submitTimeLocal?: any;
  //   transactionStatus?: any;
  //   invoiceNumber?: any;
  //   firstName?: any;
  //   lastName?: any;
  //   accountType?: any;
  //   accountNumber?: any;
  //   settleAmount?: any;
  //   marketType?: any;
  //   product?: any;
  //   mobileDeviceId?: any;
  //   subscription?: SubscriptionPaymentType;
  //   hasReturnedItems?: any;
  //   fraudInformation?: FraudInformationType;
  //   profile?: CustomerProfileIdType;
  // }
  // interface UserField {
  //   name?: any;
  //   value?: any;
  // }
  // interface WebCheckOutDataType {
  //   type?: any;
  //   id?: any;
  //   token?: WebCheckOutDataTypeToken;
  //   bankToken?: BankAccountType;
  // }
  // interface WebCheckOutDataTypeToken {
  //   cardNumber?: any;
  //   expirationDate?: any;
  //   cardCode?: any;
  //   zip?: any;
  //   fullName?: any;
  // }

  // interface ARBCancelSubscriptionRequest extends ANetApiRequest {
  //   subscriptionId?: any;
  // }
  // interface ARBCancelSubscriptionResponse extends ANetApiResponse {}
  // interface ARBCreateSubscriptionRequest extends ANetApiRequest {
  //   subscription?: ARBSubscriptionType;
  // }
  // interface ARBCreateSubscriptionResponse extends ANetApiResponse {
  //   subscriptionId?: any;
  //   profile?: CustomerProfileIdType;
  // }
  // interface ARBGetSubscriptionListRequest extends ANetApiRequest {
  //   searchType?: any;
  //   sorting?: ARBGetSubscriptionListSorting;
  //   paging?: Paging;
  // }
  // interface ARBGetSubscriptionListResponse extends ANetApiResponse {
  //   totalNumInResultSet?: any;
  //   subscriptionDetails?: ArrayOfSubscription;
  // }
  // interface ARBGetSubscriptionRequest extends ANetApiRequest {
  //   subscriptionId?: any;
  //   includeTransactions?: any;
  // }
  // interface ARBGetSubscriptionResponse extends ANetApiResponse {
  //   subscription?: ARBSubscriptionMaskedType;
  // }
  // interface ARBGetSubscriptionStatusRequest extends ANetApiRequest {
  //   subscriptionId?: any;
  // }
  // interface ARBGetSubscriptionStatusResponse extends ANetApiResponse {
  //   status?: any;
  // }
  // interface ARBUpdateSubscriptionRequest extends ANetApiRequest {
  //   subscriptionId?: any;
  //   subscription?: ARBSubscriptionType;
  // }
  // interface ARBUpdateSubscriptionResponse extends ANetApiResponse {
  //   profile?: CustomerProfileIdType;
  // }
  // interface AuDeleteType extends AuDetailsType {
  //   creditCard?: CreditCardMaskedType;
  // }
  // interface AuUpdateType extends AuDetailsType {
  //   newCreditCard?: CreditCardMaskedType;
  //   oldCreditCard?: CreditCardMaskedType;
  // }
  // interface AuthenticateTestRequest extends ANetApiRequest {}
  // interface AuthenticateTestResponse extends ANetApiResponse {}
  // interface CreateCustomerPaymentProfileRequest extends ANetApiRequest {
  //   customerProfileId?: any;
  //   paymentProfile?: CustomerPaymentProfileType;
  //   validationMode?: any;
  // }
  // interface CreateCustomerPaymentProfileResponse extends ANetApiResponse {
  //   customerProfileId?: any;
  //   customerPaymentProfileId?: any;
  //   validationDirectResponse?: any;
  // }
  // interface CreateCustomerProfileFromTransactionRequest extends ANetApiRequest {
  //   transId?: any;
  //   customer?: CustomerProfileBaseType;
  //   customerProfileId?: any;
  //   defaultPaymentProfile?: any;
  //   defaultShippingAddress?: any;
  //   profileType?: any;
  // }
  // interface CreateCustomerProfileRequest extends ANetApiRequest {
  //   profile?: CustomerProfileType;
  //   validationMode?: any;
  // }
  // interface CreateCustomerProfileResponse extends ANetApiResponse {
  //   customerProfileId?: any;
  //   customerPaymentProfileIdList?: ArrayOfNumericString;
  //   customerShippingAddressIdList?: ArrayOfNumericString;
  //   validationDirectResponseList?: ArrayOfString;
  // }
  // interface CreateCustomerProfileTransactionRequest extends ANetApiRequest {
  //   transaction?: ProfileTransactionType;
  //   extraOptions?: any;
  // }
  // interface CreateCustomerProfileTransactionResponse extends ANetApiResponse {
  //   transactionResponse?: TransactionResponse;
  //   directResponse?: any;
  // }
  // interface CreateCustomerShippingAddressRequest extends ANetApiRequest {
  //   customerProfileId?: any;
  //   address?: CustomerAddressType;
  //   defaultShippingAddress?: any;
  // }
  // interface CreateCustomerShippingAddressResponse extends ANetApiResponse {
  //   customerProfileId?: any;
  //   customerAddressId?: any;
  // }
  // interface CreateTransactionRequest extends ANetApiRequest {
  //   transactionRequest?: TransactionRequestType;
  // }
  // interface CreateTransactionResponse extends ANetApiResponse {
  //   transactionResponse?: TransactionResponse;
  //   profileResponse?: CreateProfileResponse;
  // }
  // interface CreditCardType extends CreditCardSimpleType {
  //   cardCode?: any;
  //   isPaymentToken?: any;
  //   cryptogram?: any;
  //   tokenRequestorName?: any;
  //   tokenRequestorId?: any;
  //   tokenRequestorEci?: any;
  // }
  // interface CustomerAddressType extends NameAndAddressType {
  //   phoneNumber?: any;
  //   faxNumber?: any;
  //   email?: any;
  // }
  // interface CustomerPaymentProfileMaskedType
  //   extends CustomerPaymentProfileBaseType {
  //   customerProfileId?: any;
  //   customerPaymentProfileId?: any;
  //   defaultPaymentProfile?: any;
  //   payment?: PaymentMaskedType;
  //   driversLicense?: DriversLicenseMaskedType;
  //   taxId?: any;
  //   subscriptionIds?: SubscriptionIdList;
  // }
  // interface CustomerPaymentProfileType extends CustomerPaymentProfileBaseType {
  //   payment?: PaymentType;
  //   driversLicense?: DriversLicenseType;
  //   taxId?: any;
  //   defaultPaymentProfile?: any;
  // }
  // interface CustomerProfileExType extends CustomerProfileBaseType {
  //   customerProfileId?: any;
  // }
  // interface CustomerProfileType extends CustomerProfileBaseType {
  //   profileType?: any;
  // }
  // interface DecryptPaymentDataRequest extends ANetApiRequest {
  //   opaqueData?: OpaqueDataType;
  //   callId?: any;
  // }
  // interface DecryptPaymentDataResponse extends ANetApiResponse {
  //   shippingInfo?: CustomerAddressType;
  //   billingInfo?: CustomerAddressType;
  //   cardInfo?: CreditCardMaskedType;
  //   paymentDetails?: PaymentDetails;
  // }
  // interface DeleteCustomerPaymentProfileRequest extends ANetApiRequest {
  //   customerProfileId?: any;
  //   customerPaymentProfileId?: any;
  // }
  // interface DeleteCustomerPaymentProfileResponse extends ANetApiResponse {}
  // interface DeleteCustomerProfileRequest extends ANetApiRequest {
  //   customerProfileId?: any;
  // }
  // interface DeleteCustomerProfileResponse extends ANetApiResponse {}
  // interface DeleteCustomerShippingAddressRequest extends ANetApiRequest {
  //   customerProfileId?: any;
  //   customerAddressId?: any;
  // }
  // interface DeleteCustomerShippingAddressResponse extends ANetApiResponse {}
  // interface EmailSettingsType extends ArrayOfSetting {
  //   version?: any;
  // }
  // interface GetAUJobDetailsRequest extends ANetApiRequest {
  //   month?: any;
  //   modifiedTypeFilter?: any;
  //   paging?: Paging;
  // }
  // interface GetAUJobDetailsResponse extends ANetApiResponse {
  //   totalNumInResultSet?: any;
  //   auDetails?: ListOfAUDetailsType;
  // }
  // interface GetAUJobSummaryRequest extends ANetApiRequest {
  //   month?: any;
  // }
  // interface GetAUJobSummaryResponse extends ANetApiResponse {
  //   auSummary?: ArrayOfAUResponseType;
  // }
  // interface GetBatchStatisticsRequest extends ANetApiRequest {
  //   batchId?: any;
  // }
  // interface GetBatchStatisticsResponse extends ANetApiResponse {
  //   batch?: BatchDetailsType;
  // }
  // interface GetCustomerPaymentProfileListRequest extends ANetApiRequest {
  //   searchType?: any;
  //   month?: any;
  //   sorting?: CustomerPaymentProfileSorting;
  //   paging?: Paging;
  // }
  // interface GetCustomerPaymentProfileListResponse extends ANetApiResponse {
  //   totalNumInResultSet?: any;
  //   paymentProfiles?: ArrayOfCustomerPaymentProfileListItemType;
  // }
  // interface GetCustomerPaymentProfileNonceRequest extends ANetApiRequest {
  //   connectedAccessToken?: any;
  //   customerProfileId?: any;
  //   customerPaymentProfileId?: any;
  // }
  // interface GetCustomerPaymentProfileNonceResponse extends ANetApiResponse {
  //   opaqueData?: OpaqueDataType;
  // }
  // interface GetCustomerPaymentProfileRequest extends ANetApiRequest {
  //   customerProfileId?: any;
  //   customerPaymentProfileId?: any;
  //   unmaskExpirationDate?: any;
  //   includeIssuerInfo?: any;
  // }
  // interface GetCustomerPaymentProfileResponse extends ANetApiResponse {
  //   paymentProfile?: CustomerPaymentProfileMaskedType;
  // }
  // interface GetCustomerProfileIdsRequest extends ANetApiRequest {}
  // interface GetCustomerProfileIdsResponse extends ANetApiResponse {
  //   ids?: ArrayOfNumericString;
  // }
  // interface GetCustomerProfileRequest extends ANetApiRequest {
  //   customerProfileId?: any;
  //   merchantCustomerId?: any;
  //   email?: any;
  //   unmaskExpirationDate?: any;
  //   includeIssuerInfo?: any;
  // }
  // interface GetCustomerProfileResponse extends ANetApiResponse {
  //   profile?: CustomerProfileMaskedType;
  //   subscriptionIds?: SubscriptionIdList;
  // }
  // interface GetCustomerShippingAddressRequest extends ANetApiRequest {
  //   customerProfileId?: any;
  //   customerAddressId?: any;
  // }
  // interface GetCustomerShippingAddressResponse extends ANetApiResponse {
  //   defaultShippingAddress?: any;
  //   address?: CustomerAddressExType;
  //   subscriptionIds?: SubscriptionIdList;
  // }
  // interface GetHostedPaymentPageRequest extends ANetApiRequest {
  //   transactionRequest?: TransactionRequestType;
  //   hostedPaymentSettings?: ArrayOfSetting;
  // }
  // interface GetHostedPaymentPageResponse extends ANetApiResponse {
  //   token?: any;
  // }
  // interface GetHostedProfilePageRequest extends ANetApiRequest {
  //   customerProfileId?: any;
  //   hostedProfileSettings?: ArrayOfSetting;
  // }
  // interface GetHostedProfilePageResponse extends ANetApiResponse {
  //   token?: any;
  // }
  // interface GetMerchantDetailsRequest extends ANetApiRequest {}
  // interface GetMerchantDetailsResponse extends ANetApiResponse {
  //   isTestMode?: any;
  //   processors?: ArrayOfProcessorType;
  //   merchantName?: any;
  //   gatewayId?: any;
  //   marketTypes?: ArrayOfMarketType;
  //   productCodes?: ArrayOfProductCode;
  //   paymentMethods?: ArrayOfPaymentMethod;
  //   currencies?: ArrayOfCurrencyCode;
  //   publicClientKey?: any;
  //   businessInformation?: CustomerAddressType;
  //   merchantTimeZone?: any;
  //   contactDetails?: ArrayOfContactDetail;
  // }
  // interface GetSettledBatchListRequest extends ANetApiRequest {
  //   includeStatistics?: any;
  //   firstSettlementDate?: any;
  //   lastSettlementDate?: any;
  // }
  // interface GetSettledBatchListResponse extends ANetApiResponse {
  //   batchList?: ArrayOfBatchDetailsType;
  // }
  // interface GetTransactionDetailsRequest extends ANetApiRequest {
  //   transId?: any;
  // }
  // interface GetTransactionDetailsResponse extends ANetApiResponse {
  //   transaction?: TransactionDetailsType;
  //   clientId?: any;
  //   transrefId?: any;
  // }
  // interface GetTransactionListForCustomerRequest extends ANetApiRequest {
  //   customerProfileId?: any;
  //   customerPaymentProfileId?: any;
  //   sorting?: TransactionListSorting;
  //   paging?: Paging;
  // }
  // interface GetTransactionListRequest extends ANetApiRequest {
  //   batchId?: any;
  //   sorting?: TransactionListSorting;
  //   paging?: Paging;
  // }
  // interface GetTransactionListResponse extends ANetApiResponse {
  //   transactions?: ArrayOfTransactionSummaryType;
  //   totalNumInResultSet?: any;
  // }
  // interface GetUnsettledTransactionListRequest extends ANetApiRequest {
  //   status?: any;
  //   sorting?: TransactionListSorting;
  //   paging?: Paging;
  // }
  // interface GetUnsettledTransactionListResponse extends ANetApiResponse {
  //   transactions?: ArrayOfTransactionSummaryType;
  //   totalNumInResultSet?: any;
  // }
  // interface IsAliveResponse extends ANetApiResponse {}
  // interface LogoutRequest extends ANetApiRequest {}
  // interface LogoutResponse extends ANetApiResponse {}
  // interface MobileDeviceLoginRequest extends ANetApiRequest {}
  // interface MobileDeviceLoginResponse extends ANetApiResponse {
  //   merchantContact?: MerchantContactType;
  //   userPermissions?: ArrayOfPermissionType;
  //   merchantAccount?: TransRetailInfoType;
  // }
  // interface MobileDeviceRegistrationRequest extends ANetApiRequest {
  //   mobileDevice?: MobileDeviceType;
  // }
  // interface MobileDeviceRegistrationResponse extends ANetApiResponse {}
  // interface OrderExType extends OrderType {
  //   purchaseOrderNumber?: any;
  // }
  // interface ProfileTransOrderType extends ProfileTransAmountType {
  //   customerProfileId?: any;
  //   customerPaymentProfileId?: any;
  //   customerShippingAddressId?: any;
  //   order?: OrderExType;
  //   taxExempt?: any;
  //   recurringBilling?: any;
  //   cardCode?: any;
  //   splitTenderId?: any;
  //   processingOptions?: ProcessingOptions;
  //   subsequentAuthInformation?: SubsequentAuthInformation;
  // }
  // interface ProfileTransPriorAuthCaptureType extends ProfileTransAmountType {
  //   customerProfileId?: any;
  //   customerPaymentProfileId?: any;
  //   customerShippingAddressId?: any;
  //   transId?: any;
  // }
  // interface ProfileTransRefundType extends ProfileTransAmountType {
  //   customerProfileId?: any;
  //   customerPaymentProfileId?: any;
  //   customerShippingAddressId?: any;
  //   creditCardNumberMasked?: any;
  //   bankRoutingNumberMasked?: any;
  //   bankAccountNumberMasked?: any;
  //   order?: OrderExType;
  //   transId?: any;
  // }
  // interface SecurePaymentContainerRequest extends ANetApiRequest {
  //   data?: WebCheckOutDataType;
  // }
  // interface SecurePaymentContainerResponse extends ANetApiResponse {
  //   opaqueData?: OpaqueDataType;
  // }
  // interface SendCustomerTransactionReceiptRequest extends ANetApiRequest {
  //   transId?: any;
  //   customerEmail?: any;
  //   emailSettings?: EmailSettingsType;
  // }
  // interface SendCustomerTransactionReceiptResponse extends ANetApiResponse {}
  // interface UpdateCustomerPaymentProfileRequest extends ANetApiRequest {
  //   customerProfileId?: any;
  //   paymentProfile?: CustomerPaymentProfileExType;
  //   validationMode?: any;
  // }
  // interface UpdateCustomerPaymentProfileResponse extends ANetApiResponse {
  //   validationDirectResponse?: any;
  // }
  // interface UpdateCustomerProfileRequest extends ANetApiRequest {
  //   profile?: CustomerProfileInfoExType;
  // }
  // interface UpdateCustomerProfileResponse extends ANetApiResponse {}
  // interface UpdateCustomerShippingAddressRequest extends ANetApiRequest {
  //   customerProfileId?: any;
  //   address?: CustomerAddressExType;
  //   defaultShippingAddress?: any;
  // }
  // interface UpdateCustomerShippingAddressResponse extends ANetApiResponse {}
  // interface UpdateHeldTransactionRequest extends ANetApiRequest {
  //   heldTransactionRequest?: HeldTransactionRequestType;
  // }
  // interface UpdateHeldTransactionResponse extends ANetApiResponse {
  //   transactionResponse?: TransactionResponse;
  // }
  // interface UpdateMerchantDetailsRequest extends ANetApiRequest {
  //   isTestMode?: any;
  // }
  // interface UpdateMerchantDetailsResponse extends ANetApiResponse {}
  // interface UpdateSplitTenderGroupRequest extends ANetApiRequest {
  //   splitTenderId?: any;
  //   splitTenderStatus?: any;
  // }
  // interface UpdateSplitTenderGroupResponse extends ANetApiResponse {}
  // interface ValidateCustomerPaymentProfileRequest extends ANetApiRequest {
  //   customerProfileId?: any;
  //   customerPaymentProfileId?: any;
  //   customerShippingAddressId?: any;
  //   cardCode?: any;
  //   validationMode?: any;
  // }
  // interface ValidateCustomerPaymentProfileResponse extends ANetApiResponse {
  //   directResponse?: any;
  // }
  // interface CustomerAddressExType extends CustomerAddressType {
  //   customerAddressId?: any;
  // }
  // interface CustomerPaymentProfileExType extends CustomerPaymentProfileType {
  //   customerPaymentProfileId?: any;
  // }
  // interface CustomerProfileInfoExType extends CustomerProfileExType {
  //   profileType?: any;
  // }
  // interface CustomerProfileMaskedType extends CustomerProfileExType {
  //   profileType?: any;
  // }
  // interface ProfileTransAuthCaptureType extends ProfileTransOrderType {}
  // interface ProfileTransAuthOnlyType extends ProfileTransOrderType {}
  // interface ProfileTransCaptureOnlyType extends ProfileTransOrderType {
  //   approvalCode?: any;
  // }
  // interface SubscriptionCustomerProfileType extends CustomerProfileExType {
  //   paymentProfile?: CustomerPaymentProfileMaskedType;
  //   shippingProfile?: CustomerAddressExType;
  // }