export interface ANetApiRequest {
  merchantAuthentication?: MerchantAuthenticationType;
  clientId?: any;
  refId?: any;
}
export interface ANetApiResponse {
  refId?: any;
  messages?: MessagesType;
  sessionToken?: any;
}
export interface ARBGetSubscriptionListSorting {
  orderBy?: any;
  orderDescending?: any;
}
export interface ARBSubscriptionMaskedType {
  name?: any;
  paymentSchedule?: PaymentScheduleType;
  amount?: any;
  trialAmount?: any;
  status?: any;
  profile?: SubscriptionCustomerProfileType;
  order?: OrderType;
  arbTransactions?: ARBTransactionList;
}
export interface ARBSubscriptionType {
  name?: any;
  paymentSchedule?: PaymentScheduleType;
  amount?: any;
  trialAmount?: any;
  payment?: PaymentType;
  order?: OrderType;
  customer?: CustomerType;
  billTo?: NameAndAddressType;
  shipTo?: NameAndAddressType;
  profile?: CustomerProfileIdType;
}
export interface ARBTransactionList {}
export interface ArbTransaction {
  transId?: any;
  response?: any;
  submitTimeUTC?: any;
  payNum?: any;
  attemptNum?: any;
}

export type ArrayOfAUResponseType = AuResponseType[];
export type ArrayOfBatchDetailsType = BatchDetailsType[];
export type ArrayOfBatchStatisticType = BatchStatisticType[];
export type ArrayOfCardType = string[];
export type ArrayOfContactDetail = ContactDetailType[];
export type ArrayOfCurrencyCode = string[];
export type ArrayOfCustomerPaymentProfileListItemType = CustomerPaymentProfileListItemType[];
export type ArrayOfFDSFilter = FDSFilterType[];
export type ArrayOfFraudFilterType = string[];
export type ArrayOfLineItem = LineItemType[];
export type ArrayOfLong = any[];
export type ArrayOfMarketType = string[];
export type ArrayOfNumericString = string[];
export type ArrayOfPaymentMethod = string[];
export type ArrayOfPermissionType = PermissionType[];
export type ArrayOfProcessorType = ProcessorType[];
export type ArrayOfProductCode = string[];
export type ArrayOfReturnedItem = ReturnedItemType[];
export type ArrayOfSetting = SettingType[];
export type ArrayOfString = string[];
export type ArrayOfSubscription = SubscriptionDetail[];
export type ArrayOfTransactionSummaryType = TransactionSummaryType[];

export interface AuDetailsType {
  customerProfileID?: any;
  customerPaymentProfileID?: any;
  firstName?: any;
  lastName?: any;
  updateTimeUTC?: any;
  auReasonCode?: any;
  reasonDescription?: any;
}
export interface AuResponseType {
  auReasonCode?: any;
  profileCount?: any;
  reasonDescription?: any;
}
export interface BankAccountMaskedType {
  accountType?: any;
  routingNumber?: any;
  accountNumber?: any;
  nameOnAccount?: any;
  echeckType?: any;
  bankName?: any;
}
export interface BankAccountType {
  accountType?: any;
  routingNumber?: any;
  accountNumber?: any;
  nameOnAccount?: any;
  echeckType?: any;
  bankName?: any;
  checkNumber?: any;
}
export interface BatchDetailsType {
  batchId?: any;
  settlementTimeUTC?: any;
  settlementTimeLocal?: any;
  settlementState?: any;
  paymentMethod?: any;
  marketType?: any;
  product?: any;
  statistics?: ArrayOfBatchStatisticType;
}
export interface BatchStatisticType {
  accountType?: any;
  chargeAmount?: any;
  chargeCount?: any;
  refundAmount?: any;
  refundCount?: any;
  voidCount?: any;
  declineCount?: any;
  errorCount?: any;
  returnedItemAmount?: any;
  returnedItemCount?: any;
  chargebackAmount?: any;
  chargebackCount?: any;
  correctionNoticeCount?: any;
  chargeChargeBackAmount?: any;
  chargeChargeBackCount?: any;
  refundChargeBackAmount?: any;
  refundChargeBackCount?: any;
  chargeReturnedItemsAmount?: any;
  chargeReturnedItemsCount?: any;
  refundReturnedItemsAmount?: any;
  refundReturnedItemsCount?: any;
}
export interface CardArt {
  cardBrand?: any;
  cardImageHeight?: any;
  cardImageUrl?: any;
  cardImageWidth?: any;
  cardType?: any;
}
export interface CcAuthenticationType {
  authenticationIndicator?: any;
  cardholderAuthenticationValue?: any;
}
export interface ContactDetailType {
  email?: any;
  firstName?: any;
  lastName?: any;
}
export interface CreateProfileResponse {
  messages?: MessagesType;
  customerProfileId?: any;
  customerPaymentProfileIdList?: ArrayOfNumericString;
  customerShippingAddressIdList?: ArrayOfNumericString;
}
export interface CreditCardMaskedType {
  cardNumber?: any;
  expirationDate?: any;
  cardType?: any;
  cardArt?: CardArt;
  issuerNumber?: any;
  isPaymentToken?: any;
}
export interface CreditCardSimpleType {
  cardNumber?: any;
  expirationDate?: any;
}
export interface CreditCardTrackType {
  track1?: any;
  track2?: any;
}
export interface CustomerDataType {
  type?: any;
  id?: any;
  email?: any;
  driversLicense?: DriversLicenseType;
  taxId?: any;
}
export interface CustomerPaymentProfileBaseType {
  customerType?: any;
  billTo?: CustomerAddressType;
}
export interface CustomerPaymentProfileListItemType {
  defaultPaymentProfile?: any;
  customerPaymentProfileId?: any;
  customerProfileId?: any;
  billTo?: CustomerAddressType;
  payment?: PaymentMaskedType;
}
export interface CustomerPaymentProfileSorting {
  orderBy?: any;
  orderDescending?: any;
}
export interface CustomerProfileBaseType {
  merchantCustomerId?: any;
  description?: any;
  email?: any;
}
export interface CustomerProfileIdType {
  customerProfileId?: any;
  customerPaymentProfileId?: any;
  customerAddressId?: any;
}
export interface CustomerProfilePaymentType {
  createProfile?: any;
  customerProfileId?: any;
  paymentProfile?: PaymentProfile;
  shippingProfileId?: any;
}
export interface CustomerProfileSummaryType {
  customerProfileId?: any;
  description?: any;
  merchantCustomerId?: any;
  email?: any;
  createdDate?: any;
}
export interface CustomerType {
  type?: any;
  id?: any;
  email?: any;
  phoneNumber?: any;
  faxNumber?: any;
  driversLicense?: DriversLicenseType;
  taxId?: any;
}
export interface DriversLicenseMaskedType {
  number?: any;
  state?: any;
  dateOfBirth?: any;
}
export interface DriversLicenseType {
  number?: any;
  state?: any;
  dateOfBirth?: any;
}
export interface EmvTag {
  name?: any;
  value?: any;
  formatted?: any;
}
export interface EncryptedTrackDataType {
  FormOfPayment?: KeyBlock;
}
export interface EnumCollection {
  customerProfileSummaryType?: CustomerProfileSummaryType;
  paymentSimpleType?: PaymentSimpleType;
  accountTypeEnum?: any;
  cardTypeEnum?: any;
  FDSFilterActionEnum?: any;
  permissionsEnum?: any;
  settingNameEnum?: any;
  settlementStateEnum?: any;
  transactionStatusEnum?: any;
  transactionTypeEnum?: any;
}
export interface ExtendedAmountType {
  amount?: any;
  name?: any;
  description?: any;
}
export interface FDSFilterType {
  name?: any;
  action?: any;
}
export interface FingerPrintType {
  hashValue?: any;
  sequence?: any;
  timestamp?: any;
  currencyCode?: any;
  amount?: any;
}
export interface FraudInformationType {
  fraudFilterList?: ArrayOfFraudFilterType;
  fraudAction?: any;
}
export interface HeldTransactionRequestType {
  action?: any;
  refTransId?: any;
}
export interface ImpersonationAuthenticationType {
  partnerLoginId?: any;
  partnerTransactionKey?: any;
}
export interface IsAliveRequest {
  refId?: any;
}
export interface KeyBlock {
  Value?: KeyValue;
}
export interface KeyManagementScheme {
  DUKPT?: {
    Operation?: any;
    Mode?: {
      PIN?: any;
      Data?: any;
    };
    DeviceInfo?: {
      Description?: any;
    };
    EncryptedData?: {
      Value?: any;
    };
  };
}
export interface KeyValue {
  Encoding?: any;
  EncryptionAlgorithm?: any;
  Scheme?: KeyManagementScheme;
}
export interface LineItemType {
  itemId?: any;
  name?: any;
  description?: any;
  quantity?: any;
  unitPrice?: any;
  taxable?: any;
  unitOfMeasure?: any;
  typeOfSupply?: any;
  taxRate?: any;
  taxAmount?: any;
  nationalTax?: any;
  localTax?: any;
  vatRate?: any;
  alternateTaxId?: any;
  alternateTaxType?: any;
  alternateTaxTypeApplied?: any;
  alternateTaxRate?: any;
  alternateTaxAmount?: any;
  totalAmount?: any;
  commodityCode?: any;
  productCode?: any;
  productSKU?: any;
  discountRate?: any;
  discountAmount?: any;
  taxIncludedInTotal?: any;
  taxIsAfterDiscount?: any;
}
export interface ListOfAUDetailsType {}
export interface MerchantAuthenticationType {
  name?: any;
  transactionKey?: any;
  sessionToken?: any;
  password?: any;
  impersonationAuthentication?: ImpersonationAuthenticationType;
  fingerPrint?: FingerPrintType;
  clientKey?: any;
  accessToken?: any;
  mobileDeviceId?: any;
}
export interface MerchantContactType {
  merchantName?: any;
  merchantAddress?: any;
  merchantCity?: any;
  merchantState?: any;
  merchantZip?: any;
  merchantPhone?: any;
}

export interface Message {
  code?: any;
  text?: any;
}
export interface MessagesType {
  resultCode?: any;
  message: Message[];
}
export interface MobileDeviceType {
  mobileDeviceId?: any;
  description?: any;
  phoneNumber?: any;
  devicePlatform?: any;
  deviceActivation?: any;
}
export interface NameAndAddressType {
  firstName?: any;
  lastName?: any;
  company?: any;
  address?: any;
  city?: any;
  state?: any;
  zip?: any;
  country?: any;
}
export interface OpaqueDataType {
  dataDescriptor?: any;
  dataValue?: any;
  dataKey?: any;
  expirationTimeStamp?: any;
}
export interface OrderType {
  invoiceNumber?: any;
  description?: any;
  discountAmount?: any;
  taxIsAfterDiscount?: any;
  totalTaxTypeCode?: any;
  purchaserVATRegistrationNumber?: any;
  merchantVATRegistrationNumber?: any;
  vatInvoiceReferenceNumber?: any;
  purchaserCode?: any;
  summaryCommodityCode?: any;
  purchaseOrderDateUTC?: any;
  supplierOrderReference?: any;
  authorizedContactName?: any;
  cardAcceptorRefNumber?: any;
  amexDataTAA1?: any;
  amexDataTAA2?: any;
  amexDataTAA3?: any;
  amexDataTAA4?: any;
}
export interface OtherTaxType {
  nationalTaxAmount?: any;
  localTaxAmount?: any;
  alternateTaxAmount?: any;
  alternateTaxId?: any;
  vatTaxRate?: any;
  vatTaxAmount?: any;
}
export interface Paging {
  limit?: any;
  offset?: any;
}
export interface PayPalType {
  successUrl?: any;
  cancelUrl?: any;
  paypalLc?: any;
  paypalHdrImg?: any;
  paypalPayflowcolor?: any;
  payerID?: any;
}
export interface PaymentDetails {
  currency?: any;
  promoCode?: any;
  misc?: any;
  giftWrap?: any;
  discount?: any;
  tax?: any;
  shippingHandling?: any;
  subTotal?: any;
  orderID?: any;
  amount?: any;
}
export interface PaymentEmvType {
  emvData?: any;
  emvDescriptor?: any;
  emvVersion?: any;
}
export interface PaymentMaskedType {
  creditCard?: CreditCardMaskedType;
  bankAccount?: BankAccountMaskedType;
  tokenInformation?: TokenMaskedType;
}
export interface PaymentProfile {
  paymentProfileId?: any;
  cardCode?: any;
}
export interface PaymentScheduleType {
  interval?: {
    length?: any;
    unit?: any;
  };
  startDate?: any;
  totalOccurrences?: any;
  trialOccurrences?: any;
}
export interface PaymentSimpleType {
  creditCard?: CreditCardSimpleType;
  bankAccount?: BankAccountType;
}
export interface PaymentType {
  creditCard?: CreditCardType;
  bankAccount?: BankAccountType;
  trackData?: CreditCardTrackType;
  encryptedTrackData?: EncryptedTrackDataType;
  payPal?: PayPalType;
  opaqueData?: OpaqueDataType;
  emv?: PaymentEmvType;
  dataSource?: any;
}
export interface PermissionType {
  permissionName?: any;
}
export interface ProcessingOptions {
  isFirstRecurringPayment?: any;
  isFirstSubsequentAuth?: any;
  isSubsequentAuth?: any;
  isStoredCredentials?: any;
}
export interface ProcessorType {
  name?: any;
  id?: any;
  cardTypes?: ArrayOfCardType;
}
export interface ProfileTransAmountType {
  amount?: any;
  tax?: ExtendedAmountType;
  shipping?: ExtendedAmountType;
  duty?: ExtendedAmountType;
}
export interface ProfileTransVoidType {
  customerProfileId?: any;
  customerPaymentProfileId?: any;
  customerShippingAddressId?: any;
  transId?: any;
}
export interface ProfileTransactionType {
  profileTransAuthCapture?: ProfileTransAuthCaptureType;
  profileTransAuthOnly?: ProfileTransAuthOnlyType;
  profileTransPriorAuthCapture?: ProfileTransPriorAuthCaptureType;
  profileTransCaptureOnly?: ProfileTransCaptureOnlyType;
  profileTransRefund?: ProfileTransRefundType;
  profileTransVoid?: ProfileTransVoidType;
}
export interface ReturnedItemType {
  id?: any;
  dateUTC?: any;
  dateLocal?: any;
  code?: any;
  description?: any;
}
export interface SecurePaymentContainerErrorType {
  code?: any;
  description?: any;
}
export interface SettingType {
  settingName?: any;
  settingValue?: any;
}
export interface SolutionType {
  id?: any;
  name?: any;
  vendorName?: any;
}
export interface SubMerchantType {
  identifier?: any;
  doingBusinessAs?: any;
  paymentServiceProviderName?: any;
  paymentServiceFacilitator?: any;
  streetAddress?: any;
  phone?: any;
  email?: any;
  postalCode?: any;
  city?: any;
  regionCode?: any;
  countryCode?: any;
}
export interface SubscriptionDetail {
  id?: any;
  name?: any;
  status?: any;
  createTimeStampUTC?: any;
  firstName?: any;
  lastName?: any;
  totalOccurrences?: any;
  pastOccurrences?: any;
  paymentMethod?: any;
  accountNumber?: any;
  invoice?: any;
  amount?: any;
  currencyCode?: any;
  customerProfileId?: any;
  customerPaymentProfileId?: any;
  customerShippingProfileId?: any;
}
export interface SubscriptionIdList {}
export interface SubscriptionPaymentType {
  id?: any;
  payNum?: any;
}
export interface SubsequentAuthInformation {
  originalNetworkTransId?: any;
  reason?: any;
}
export interface TokenMaskedType {
  tokenSource?: any;
  tokenNumber?: any;
  expirationDate?: any;
  tokenRequestorId?: any;
}
export interface TransRetailInfoType {
  marketType?: any;
  deviceType?: any;
  customerSignature?: any;
  terminalNumber?: any;
}
export interface Tag {
  tagId?: any;
  data?: any;
}
export interface TransactionDetailsType {
  transId?: any;
  refTransId?: any;
  splitTenderId?: any;
  submitTimeUTC?: any;
  submitTimeLocal?: any;
  transactionType?: any;
  transactionStatus?: any;
  responseCode?: any;
  responseReasonCode?: any;
  subscription?: SubscriptionPaymentType;
  responseReasonDescription?: any;
  authCode?: any;
  AVSResponse?: any;
  cardCodeResponse?: any;
  CAVVResponse?: any;
  FDSFilterAction?: any;
  FDSFilters?: ArrayOfFDSFilter;
  batch?: BatchDetailsType;
  order?: OrderExType;
  requestedAmount?: any;
  authAmount?: any;
  settleAmount?: any;
  tax?: ExtendedAmountType;
  shipping?: ExtendedAmountType;
  duty?: ExtendedAmountType;
  lineItems?: ArrayOfLineItem;
  prepaidBalanceRemaining?: any;
  taxExempt?: any;
  payment?: PaymentMaskedType;
  customer?: CustomerDataType;
  billTo?: CustomerAddressType;
  shipTo?: NameAndAddressType;
  recurringBilling?: any;
  customerIP?: any;
  product?: any;
  entryMode?: any;
  marketType?: any;
  mobileDeviceId?: any;
  customerSignature?: any;
  returnedItems?: ArrayOfReturnedItem;
  solution?: SolutionType;
  emvDetails?: {
    tag?: Tag[];
  };
  profile?: CustomerProfileIdType;
  surcharge?: ExtendedAmountType;
  employeeId?: any;
  tip?: ExtendedAmountType;
  otherTax?: OtherTaxType;
  shipFrom?: NameAndAddressType;
}
export interface TransactionListSorting {
  orderBy?: any;
  orderDescending?: any;
}
export interface TransactionRequestType {
  transactionType?: any;
  amount?: any;
  currencyCode?: any;
  payment?: PaymentType;
  profile?: CustomerProfilePaymentType;
  solution?: SolutionType;
  callId?: any;
  terminalNumber?: any;
  authCode?: any;
  refTransId?: any;
  splitTenderId?: any;
  order?: OrderType;
  lineItems?: ArrayOfLineItem;
  tax?: ExtendedAmountType;
  duty?: ExtendedAmountType;
  shipping?: ExtendedAmountType;
  taxExempt?: any;
  poNumber?: any;
  customer?: CustomerDataType;
  billTo?: CustomerAddressType;
  shipTo?: NameAndAddressType;
  customerIP?: any;
  cardholderAuthentication?: CcAuthenticationType;
  retail?: TransRetailInfoType;
  employeeId?: any;
  transactionSettings?: ArrayOfSetting;
  userFields?: UserField[];
  surcharge?: ExtendedAmountType;
  merchantDescriptor?: any;
  subMerchant?: SubMerchantType;
  tip?: ExtendedAmountType;
  processingOptions?: ProcessingOptions;
  subsequentAuthInformation?: SubsequentAuthInformation;
  otherTax?: OtherTaxType;
  shipFrom?: NameAndAddressType;
}
export interface TransactionResponseError {
  errorCode: any;
  errorText: any;
}
export interface TransactionResponseMessage {
  errorCode: any;
  errorText: any;
}
export interface TransactionResponseSplitTenderPayment {
  transId?: any;
  responseCode?: any;
  responseToCustomer?: any;
  authCode?: any;
  accountNumber?: any;
  accountType?: any;
  requestedAmount?: any;
  approvedAmount?: any;
  balanceOnCard?: any;
}
export interface TransactionResponse {
  responseCode?: any;
  rawResponseCode?: any;
  authCode?: any;
  avsResultCode?: any;
  cvvResultCode?: any;
  cavvResultCode?: any;
  transId?: any;
  refTransID?: any;
  transHash?: any;
  testRequest?: any;
  accountNumber?: any;
  entryMode?: any;
  accountType?: any;
  splitTenderId?: any;
  prePaidCard?: {
    requestedAmount?: any;
    approvedAmount?: any;
    balanceOnCard?: any;
  };
  messages?: TransactionResponseMessage[];
  errors?: TransactionResponseError[];
  splitTenderPayments?: TransactionResponseSplitTenderPayment[];
  userFields?: UserField[];
  shipTo?: NameAndAddressType;
  secureAcceptance?: {
    SecureAcceptanceUrl?: any;
    PayerID?: any;
    PayerEmail?: any;
  };
  emvResponse?: {
    tags?: EmvTag[];
  };
  transHashSha2?: any;
  profile?: CustomerProfileIdType;
  networkTransId?: any;
}
export interface TransactionSummaryType {
  transId?: any;
  submitTimeUTC?: any;
  submitTimeLocal?: any;
  transactionStatus?: any;
  invoiceNumber?: any;
  firstName?: any;
  lastName?: any;
  accountType?: any;
  accountNumber?: any;
  settleAmount?: any;
  marketType?: any;
  product?: any;
  mobileDeviceId?: any;
  subscription?: SubscriptionPaymentType;
  hasReturnedItems?: any;
  fraudInformation?: FraudInformationType;
  profile?: CustomerProfileIdType;
}
export interface UserField {
  name?: any;
  value?: any;
}
export interface WebCheckOutDataType {
  type?: any;
  id?: any;
  token?: WebCheckOutDataTypeToken;
  bankToken?: BankAccountType;
}
export interface WebCheckOutDataTypeToken {
  cardNumber?: any;
  expirationDate?: any;
  cardCode?: any;
  zip?: any;
  fullName?: any;
}

export interface ARBCancelSubscriptionRequest extends ANetApiRequest {
  subscriptionId?: any;
}
export interface ARBCancelSubscriptionResponse extends ANetApiResponse {}
export interface ARBCreateSubscriptionRequest extends ANetApiRequest {
  subscription?: ARBSubscriptionType;
}
export interface ARBCreateSubscriptionResponse extends ANetApiResponse {
  subscriptionId?: any;
  profile?: CustomerProfileIdType;
}
export interface ARBGetSubscriptionListRequest extends ANetApiRequest {
  searchType?: any;
  sorting?: ARBGetSubscriptionListSorting;
  paging?: Paging;
}
export interface ARBGetSubscriptionListResponse extends ANetApiResponse {
  totalNumInResultSet?: any;
  subscriptionDetails?: ArrayOfSubscription;
}
export interface ARBGetSubscriptionRequest extends ANetApiRequest {
  subscriptionId?: any;
  includeTransactions?: any;
}
export interface ARBGetSubscriptionResponse extends ANetApiResponse {
  subscription?: ARBSubscriptionMaskedType;
}
export interface ARBGetSubscriptionStatusRequest extends ANetApiRequest {
  subscriptionId?: any;
}
export interface ARBGetSubscriptionStatusResponse extends ANetApiResponse {
  status?: any;
}
export interface ARBUpdateSubscriptionRequest extends ANetApiRequest {
  subscriptionId?: any;
  subscription?: ARBSubscriptionType;
}
export interface ARBUpdateSubscriptionResponse extends ANetApiResponse {
  profile?: CustomerProfileIdType;
}
export interface AuDeleteType extends AuDetailsType {
  creditCard?: CreditCardMaskedType;
}
export interface AuUpdateType extends AuDetailsType {
  newCreditCard?: CreditCardMaskedType;
  oldCreditCard?: CreditCardMaskedType;
}
export interface AuthenticateTestRequest extends ANetApiRequest {}
export interface AuthenticateTestResponse extends ANetApiResponse {}
export interface CreateCustomerPaymentProfileRequest extends ANetApiRequest {
  customerProfileId?: any;
  paymentProfile?: CustomerPaymentProfileType;
  validationMode?: any;
}
export interface CreateCustomerPaymentProfileResponse extends ANetApiResponse {
  customerProfileId?: any;
  customerPaymentProfileId?: any;
  validationDirectResponse?: any;
}
export interface CreateCustomerProfileFromTransactionRequest extends ANetApiRequest {
  transId?: any;
  customer?: CustomerProfileBaseType;
  customerProfileId?: any;
  defaultPaymentProfile?: any;
  defaultShippingAddress?: any;
  profileType?: any;
}
export interface CreateCustomerProfileRequest extends ANetApiRequest {
  profile?: CustomerProfileType;
  validationMode?: any;
}
export interface CreateCustomerProfileResponse extends ANetApiResponse {
  customerProfileId?: any;
  customerPaymentProfileIdList?: ArrayOfNumericString;
  customerShippingAddressIdList?: ArrayOfNumericString;
  validationDirectResponseList?: ArrayOfString;
}
export interface CreateCustomerProfileTransactionRequest extends ANetApiRequest {
  transaction?: ProfileTransactionType;
  extraOptions?: any;
}
export interface CreateCustomerProfileTransactionResponse extends ANetApiResponse {
  transactionResponse?: TransactionResponse;
  directResponse?: any;
}
export interface CreateCustomerShippingAddressRequest extends ANetApiRequest {
  customerProfileId?: any;
  address?: CustomerAddressType;
  defaultShippingAddress?: any;
}
export interface CreateCustomerShippingAddressResponse extends ANetApiResponse {
  customerProfileId?: any;
  customerAddressId?: any;
}
export interface CreateTransactionRequest extends ANetApiRequest {
  transactionRequest?: TransactionRequestType;
}
export interface CreateTransactionResponse extends ANetApiResponse {
  transactionResponse?: TransactionResponse;
  profileResponse?: CreateProfileResponse;
}
export interface CreditCardType extends CreditCardSimpleType {
  cardCode?: any;
  isPaymentToken?: any;
  cryptogram?: any;
  tokenRequestorName?: any;
  tokenRequestorId?: any;
  tokenRequestorEci?: any;
}
export interface CustomerAddressType extends NameAndAddressType {
  phoneNumber?: any;
  faxNumber?: any;
  email?: any;
}
export interface CustomerPaymentProfileMaskedType
  extends CustomerPaymentProfileBaseType {
  customerProfileId?: any;
  customerPaymentProfileId?: any;
  defaultPaymentProfile?: any;
  payment?: PaymentMaskedType;
  driversLicense?: DriversLicenseMaskedType;
  taxId?: any;
  subscriptionIds?: SubscriptionIdList;
}
export interface CustomerPaymentProfileType extends CustomerPaymentProfileBaseType {
  payment?: PaymentType;
  driversLicense?: DriversLicenseType;
  taxId?: any;
  defaultPaymentProfile?: any;
}
export interface CustomerProfileExType extends CustomerProfileBaseType {
  customerProfileId?: any;
}
export interface CustomerProfileType extends CustomerProfileBaseType {
  profileType?: any;
}
export interface DecryptPaymentDataRequest extends ANetApiRequest {
  opaqueData?: OpaqueDataType;
  callId?: any;
}
export interface DecryptPaymentDataResponse extends ANetApiResponse {
  shippingInfo?: CustomerAddressType;
  billingInfo?: CustomerAddressType;
  cardInfo?: CreditCardMaskedType;
  paymentDetails?: PaymentDetails;
}
export interface DeleteCustomerPaymentProfileRequest extends ANetApiRequest {
  customerProfileId?: any;
  customerPaymentProfileId?: any;
}
export interface DeleteCustomerPaymentProfileResponse extends ANetApiResponse {}
export interface DeleteCustomerProfileRequest extends ANetApiRequest {
  customerProfileId?: any;
}
export interface DeleteCustomerProfileResponse extends ANetApiResponse {}
export interface DeleteCustomerShippingAddressRequest extends ANetApiRequest {
  customerProfileId?: any;
  customerAddressId?: any;
}
export interface DeleteCustomerShippingAddressResponse extends ANetApiResponse {}
export interface EmailSettingsType extends ArrayOfSetting {
  version?: any;
}
export interface GetAUJobDetailsRequest extends ANetApiRequest {
  month?: any;
  modifiedTypeFilter?: any;
  paging?: Paging;
}
export interface GetAUJobDetailsResponse extends ANetApiResponse {
  totalNumInResultSet?: any;
  auDetails?: ListOfAUDetailsType;
}
export interface GetAUJobSummaryRequest extends ANetApiRequest {
  month?: any;
}
export interface GetAUJobSummaryResponse extends ANetApiResponse {
  auSummary?: ArrayOfAUResponseType;
}
export interface GetBatchStatisticsRequest extends ANetApiRequest {
  batchId?: any;
}
export interface GetBatchStatisticsResponse extends ANetApiResponse {
  batch?: BatchDetailsType;
}
export interface GetCustomerPaymentProfileListRequest extends ANetApiRequest {
  searchType?: any;
  month?: any;
  sorting?: CustomerPaymentProfileSorting;
  paging?: Paging;
}
export interface GetCustomerPaymentProfileListResponse extends ANetApiResponse {
  totalNumInResultSet?: any;
  paymentProfiles?: ArrayOfCustomerPaymentProfileListItemType;
}
export interface GetCustomerPaymentProfileNonceRequest extends ANetApiRequest {
  connectedAccessToken?: any;
  customerProfileId?: any;
  customerPaymentProfileId?: any;
}
export interface GetCustomerPaymentProfileNonceResponse extends ANetApiResponse {
  opaqueData?: OpaqueDataType;
}
export interface GetCustomerPaymentProfileRequest extends ANetApiRequest {
  customerProfileId?: any;
  customerPaymentProfileId?: any;
  unmaskExpirationDate?: any;
  includeIssuerInfo?: any;
}
export interface GetCustomerPaymentProfileResponse extends ANetApiResponse {
  paymentProfile?: CustomerPaymentProfileMaskedType;
}
export interface GetCustomerProfileIdsRequest extends ANetApiRequest {}
export interface GetCustomerProfileIdsResponse extends ANetApiResponse {
  ids?: ArrayOfNumericString;
}
export interface GetCustomerProfileRequest extends ANetApiRequest {
  customerProfileId?: any;
  merchantCustomerId?: any;
  email?: any;
  unmaskExpirationDate?: any;
  includeIssuerInfo?: any;
}
export interface GetCustomerProfileResponse extends ANetApiResponse {
  profile?: CustomerProfileMaskedType;
  subscriptionIds?: SubscriptionIdList;
}
export interface GetCustomerShippingAddressRequest extends ANetApiRequest {
  customerProfileId?: any;
  customerAddressId?: any;
}
export interface GetCustomerShippingAddressResponse extends ANetApiResponse {
  defaultShippingAddress?: any;
  address?: CustomerAddressExType;
  subscriptionIds?: SubscriptionIdList;
}
export interface GetHostedPaymentPageRequest extends ANetApiRequest {
  transactionRequest?: TransactionRequestType;
  hostedPaymentSettings?: ArrayOfSetting;
}
export interface GetHostedPaymentPageResponse extends ANetApiResponse {
  token?: any;
}
export interface GetHostedProfilePageRequest extends ANetApiRequest {
  customerProfileId?: any;
  hostedProfileSettings?: ArrayOfSetting;
}
export interface GetHostedProfilePageResponse extends ANetApiResponse {
  token?: any;
}
export interface GetMerchantDetailsRequest extends ANetApiRequest {}
export interface GetMerchantDetailsResponse extends ANetApiResponse {
  isTestMode?: any;
  processors?: ArrayOfProcessorType;
  merchantName?: any;
  gatewayId?: any;
  marketTypes?: ArrayOfMarketType;
  productCodes?: ArrayOfProductCode;
  paymentMethods?: ArrayOfPaymentMethod;
  currencies?: ArrayOfCurrencyCode;
  publicClientKey?: any;
  businessInformation?: CustomerAddressType;
  merchantTimeZone?: any;
  contactDetails?: ArrayOfContactDetail;
}
export interface GetSettledBatchListRequest extends ANetApiRequest {
  includeStatistics?: any;
  firstSettlementDate?: any;
  lastSettlementDate?: any;
}
export interface GetSettledBatchListResponse extends ANetApiResponse {
  batchList?: ArrayOfBatchDetailsType;
}
export interface GetTransactionDetailsRequest extends ANetApiRequest {
  transId?: any;
}
export interface GetTransactionDetailsResponse extends ANetApiResponse {
  transaction?: TransactionDetailsType;
  clientId?: any;
  transrefId?: any;
}
export interface GetTransactionListForCustomerRequest extends ANetApiRequest {
  customerProfileId?: any;
  customerPaymentProfileId?: any;
  sorting?: TransactionListSorting;
  paging?: Paging;
}
export interface GetTransactionListRequest extends ANetApiRequest {
  batchId?: any;
  sorting?: TransactionListSorting;
  paging?: Paging;
}
export interface GetTransactionListResponse extends ANetApiResponse {
  transactions?: ArrayOfTransactionSummaryType;
  totalNumInResultSet?: any;
}
export interface GetUnsettledTransactionListRequest extends ANetApiRequest {
  status?: any;
  sorting?: TransactionListSorting;
  paging?: Paging;
}
export interface GetUnsettledTransactionListResponse extends ANetApiResponse {
  transactions?: ArrayOfTransactionSummaryType;
  totalNumInResultSet?: any;
}
export interface IsAliveResponse extends ANetApiResponse {}
export interface LogoutRequest extends ANetApiRequest {}
export interface LogoutResponse extends ANetApiResponse {}
export interface MobileDeviceLoginRequest extends ANetApiRequest {}
export interface MobileDeviceLoginResponse extends ANetApiResponse {
  merchantContact?: MerchantContactType;
  userPermissions?: ArrayOfPermissionType;
  merchantAccount?: TransRetailInfoType;
}
export interface MobileDeviceRegistrationRequest extends ANetApiRequest {
  mobileDevice?: MobileDeviceType;
}
export interface MobileDeviceRegistrationResponse extends ANetApiResponse {}
export interface OrderExType extends OrderType {
  purchaseOrderNumber?: any;
}
export interface ProfileTransOrderType extends ProfileTransAmountType {
  customerProfileId?: any;
  customerPaymentProfileId?: any;
  customerShippingAddressId?: any;
  order?: OrderExType;
  taxExempt?: any;
  recurringBilling?: any;
  cardCode?: any;
  splitTenderId?: any;
  processingOptions?: ProcessingOptions;
  subsequentAuthInformation?: SubsequentAuthInformation;
}
export interface ProfileTransPriorAuthCaptureType extends ProfileTransAmountType {
  customerProfileId?: any;
  customerPaymentProfileId?: any;
  customerShippingAddressId?: any;
  transId?: any;
}
export interface ProfileTransRefundType extends ProfileTransAmountType {
  customerProfileId?: any;
  customerPaymentProfileId?: any;
  customerShippingAddressId?: any;
  creditCardNumberMasked?: any;
  bankRoutingNumberMasked?: any;
  bankAccountNumberMasked?: any;
  order?: OrderExType;
  transId?: any;
}
export interface SecurePaymentContainerRequest extends ANetApiRequest {
  data?: WebCheckOutDataType;
}
export interface SecurePaymentContainerResponse extends ANetApiResponse {
  opaqueData?: OpaqueDataType;
}
export interface SendCustomerTransactionReceiptRequest extends ANetApiRequest {
  transId?: any;
  customerEmail?: any;
  emailSettings?: EmailSettingsType;
}
export interface SendCustomerTransactionReceiptResponse extends ANetApiResponse {}
export interface UpdateCustomerPaymentProfileRequest extends ANetApiRequest {
  customerProfileId?: any;
  paymentProfile?: CustomerPaymentProfileExType;
  validationMode?: any;
}
export interface UpdateCustomerPaymentProfileResponse extends ANetApiResponse {
  validationDirectResponse?: any;
}
export interface UpdateCustomerProfileRequest extends ANetApiRequest {
  profile?: CustomerProfileInfoExType;
}
export interface UpdateCustomerProfileResponse extends ANetApiResponse {}
export interface UpdateCustomerShippingAddressRequest extends ANetApiRequest {
  customerProfileId?: any;
  address?: CustomerAddressExType;
  defaultShippingAddress?: any;
}
export interface UpdateCustomerShippingAddressResponse extends ANetApiResponse {}
export interface UpdateHeldTransactionRequest extends ANetApiRequest {
  heldTransactionRequest?: HeldTransactionRequestType;
}
export interface UpdateHeldTransactionResponse extends ANetApiResponse {
  transactionResponse?: TransactionResponse;
}
export interface UpdateMerchantDetailsRequest extends ANetApiRequest {
  isTestMode?: any;
}
export interface UpdateMerchantDetailsResponse extends ANetApiResponse {}
export interface UpdateSplitTenderGroupRequest extends ANetApiRequest {
  splitTenderId?: any;
  splitTenderStatus?: any;
}
export interface UpdateSplitTenderGroupResponse extends ANetApiResponse {}
export interface ValidateCustomerPaymentProfileRequest extends ANetApiRequest {
  customerProfileId?: any;
  customerPaymentProfileId?: any;
  customerShippingAddressId?: any;
  cardCode?: any;
  validationMode?: any;
}
export interface ValidateCustomerPaymentProfileResponse extends ANetApiResponse {
  directResponse?: any;
}
export interface CustomerAddressExType extends CustomerAddressType {
  customerAddressId?: any;
}
export interface CustomerPaymentProfileExType extends CustomerPaymentProfileType {
  customerPaymentProfileId?: any;
}
export interface CustomerProfileInfoExType extends CustomerProfileExType {
  profileType?: any;
}
export interface CustomerProfileMaskedType extends CustomerProfileExType {
  profileType?: any;
}
export interface ProfileTransAuthCaptureType extends ProfileTransOrderType {}
export interface ProfileTransAuthOnlyType extends ProfileTransOrderType {}
export interface ProfileTransCaptureOnlyType extends ProfileTransOrderType {
  approvalCode?: any;
}
export interface SubscriptionCustomerProfileType extends CustomerProfileExType {
  paymentProfile?: CustomerPaymentProfileMaskedType;
  shippingProfile?: CustomerAddressExType;
}

export enum ARBGetSubscriptionListOrderFieldEnum { 
	ID = 'id',
	NAME = 'name',
	STATUS = 'status',
	CREATETIMESTAMPUTC = 'createTimeStampUTC',
	LASTNAME = 'lastName',
	FIRSTNAME = 'firstName',
	ACCOUNTNUMBER = 'accountNumber',
	AMOUNT = 'amount',
	PASTOCCURRENCES = 'pastOccurrences'
}

export enum ARBGetSubscriptionListSearchTypeEnum { 
	CARDEXPIRINGTHISMONTH = 'cardExpiringThisMonth',
	SUBSCRIPTIONACTIVE = 'subscriptionActive',
	SUBSCRIPTIONEXPIRINGTHISMONTH = 'subscriptionExpiringThisMonth',
	SUBSCRIPTIONINACTIVE = 'subscriptionInactive'
}

export enum ARBSubscriptionStatusEnum { 
	ACTIVE = 'active',
	EXPIRED = 'expired',
	SUSPENDED = 'suspended',
	CANCELED = 'canceled',
	TERMINATED = 'terminated'
}

export enum ARBSubscriptionUnitEnum { 
	DAYS = 'days',
	MONTHS = 'months'
}

export enum AUJobTypeEnum { 
	ALL = 'all',
	UPDATES = 'updates',
	DELETES = 'deletes'
}

export enum AccountTypeEnum { 
	VISA = 'Visa',
	MASTERCARD = 'MasterCard',
	AMERICANEXPRESS = 'AmericanExpress',
	DISCOVER = 'Discover',
	JCB = 'JCB',
	DINERSCLUB = 'DinersClub',
	ECHECK = 'eCheck'
}

export enum AfdsTransactionEnum { 
	APPROVE = 'approve',
	DECLINE = 'decline'
}

export enum BankAccountTypeEnum { 
	CHECKING = 'checking',
	SAVINGS = 'savings',
	BUSINESSCHECKING = 'businessChecking'
}

export enum CardTypeEnum { 
	VISA = 'Visa',
	MASTERCARD = 'MasterCard',
	AMERICANEXPRESS = 'AmericanExpress',
	DISCOVER = 'Discover',
	JCB = 'JCB',
	DINERSCLUB = 'DinersClub'
}

export enum CustomerPaymentProfileOrderFieldEnum { 
	ID = 'id'
}

export enum CustomerPaymentProfileSearchTypeEnum { 
	CARDSEXPIRINGINMONTH = 'cardsExpiringInMonth'
}

export enum CustomerProfileTypeEnum { 
	REGULAR = 'regular',
	GUEST = 'guest'
}

export enum CustomerTypeEnum { 
	INDIVIDUAL = 'individual',
	BUSINESS = 'business'
}

export enum DeviceActivationEnum { 
	ACTIVATE = 'Activate',
	DISABLE = 'Disable'
}

export enum EcheckTypeEnum { 
	PPD = 'PPD',
	WEB = 'WEB',
	CCD = 'CCD',
	TEL = 'TEL',
	ARC = 'ARC',
	BOC = 'BOC'
}

export enum EncodingType { 
	BASE64 = 'Base64',
	HEX = 'Hex'
}

export enum EncryptionAlgorithmType { 
	TDES = 'TDES',
	AES = 'AES',
	RSA = 'RSA'
}

export enum FDSFilterActionEnum { 
	REJECT = 'reject',
	DECLINE = 'decline',
	HOLD = 'hold',
	AUTHANDHOLD = 'authAndHold',
	REPORT = 'report'
}

export enum MerchantInitTransReasonEnum { 
	RESUBMISSION = 'resubmission',
	DELAYEDCHARGE = 'delayedCharge',
	REAUTHORIZATION = 'reauthorization',
	NOSHOW = 'noShow'
}

export enum MessageTypeEnum { 
	OK = 'Ok',
	ERROR = 'Error'
}

export enum OperationType { 
	DECRYPT = 'DECRYPT'
}

export enum PaymentMethodEnum { 
	CREDITCARD = 'creditCard',
	ECHECK = 'eCheck',
	PAYPAL = 'payPal'
}

export enum PaymentMethodsTypeEnum { 
	VISA = 'Visa',
	MASTERCARD = 'MasterCard',
	DISCOVER = 'Discover',
	AMERICANEXPRESS = 'AmericanExpress',
	DINERSCLUB = 'DinersClub',
	JCB = 'JCB',
	ENROUTE = 'EnRoute',
	ECHECK = 'Echeck',
	PAYPAL = 'Paypal',
	VISACHECKOUT = 'VisaCheckout',
	APPLEPAY = 'ApplePay',
	ANDROIDPAY = 'AndroidPay'
}

export enum PermissionsEnum { 
	API_MERCHANT_BASICREPORTING = 'API_Merchant_BasicReporting',
	SUBMIT_CHARGE = 'Submit_Charge',
	SUBMIT_REFUND = 'Submit_Refund',
	SUBMIT_UPDATE = 'Submit_Update',
	MOBILE_ADMIN = 'Mobile_Admin'
}

export enum SettingNameEnum { 
	EMAILCUSTOMER = 'emailCustomer',
	MERCHANTEMAIL = 'merchantEmail',
	ALLOWPARTIALAUTH = 'allowPartialAuth',
	HEADEREMAILRECEIPT = 'headerEmailReceipt',
	FOOTEREMAILRECEIPT = 'footerEmailReceipt',
	RECURRINGBILLING = 'recurringBilling',
	DUPLICATEWINDOW = 'duplicateWindow',
	TESTREQUEST = 'testRequest',
	HOSTEDPROFILERETURNURL = 'hostedProfileReturnUrl',
	HOSTEDPROFILERETURNURLTEXT = 'hostedProfileReturnUrlText',
	HOSTEDPROFILEPAGEBORDERVISIBLE = 'hostedProfilePageBorderVisible',
	HOSTEDPROFILEIFRAMECOMMUNICATORURL = 'hostedProfileIFrameCommunicatorUrl',
	HOSTEDPROFILEHEADINGBGCOLOR = 'hostedProfileHeadingBgColor',
	HOSTEDPROFILEVALIDATIONMODE = 'hostedProfileValidationMode',
	HOSTEDPROFILEBILLINGADDRESSREQUIRED = 'hostedProfileBillingAddressRequired',
	HOSTEDPROFILECARDCODEREQUIRED = 'hostedProfileCardCodeRequired',
	HOSTEDPROFILEBILLINGADDRESSOPTIONS = 'hostedProfileBillingAddressOptions',
	HOSTEDPROFILEMANAGEOPTIONS = 'hostedProfileManageOptions',
	HOSTEDPAYMENTIFRAMECOMMUNICATORURL = 'hostedPaymentIFrameCommunicatorUrl',
	HOSTEDPAYMENTBUTTONOPTIONS = 'hostedPaymentButtonOptions',
	HOSTEDPAYMENTRETURNOPTIONS = 'hostedPaymentReturnOptions',
	HOSTEDPAYMENTORDEROPTIONS = 'hostedPaymentOrderOptions',
	HOSTEDPAYMENTPAYMENTOPTIONS = 'hostedPaymentPaymentOptions',
	HOSTEDPAYMENTBILLINGADDRESSOPTIONS = 'hostedPaymentBillingAddressOptions',
	HOSTEDPAYMENTSHIPPINGADDRESSOPTIONS = 'hostedPaymentShippingAddressOptions',
	HOSTEDPAYMENTSECURITYOPTIONS = 'hostedPaymentSecurityOptions',
	HOSTEDPAYMENTCUSTOMEROPTIONS = 'hostedPaymentCustomerOptions',
	HOSTEDPAYMENTSTYLEOPTIONS = 'hostedPaymentStyleOptions',
	TYPEEMAILRECEIPT = 'typeEmailReceipt',
	HOSTEDPROFILEPAYMENTOPTIONS = 'hostedProfilePaymentOptions',
	HOSTEDPROFILESAVEBUTTONTEXT = 'hostedProfileSaveButtonText'
}

export enum SettlementStateEnum { 
	SETTLEDSUCCESSFULLY = 'settledSuccessfully',
	SETTLEMENTERROR = 'settlementError',
	PENDINGSETTLEMENT = 'pendingSettlement'
}

export enum SplitTenderStatusEnum { 
	COMPLETED = 'completed',
	HELD = 'held',
	VOIDED = 'voided'
}

export enum TransactionGroupStatusEnum { 
	ANY = 'any',
	PENDINGAPPROVAL = 'pendingApproval'
}

export enum TransactionListOrderFieldEnum { 
	ID = 'id',
	SUBMITTIMEUTC = 'submitTimeUTC'
}

export enum TransactionStatusEnum { 
	AUTHORIZEDPENDINGCAPTURE = 'authorizedPendingCapture',
	CAPTUREDPENDINGSETTLEMENT = 'capturedPendingSettlement',
	COMMUNICATIONERROR = 'communicationError',
	REFUNDSETTLEDSUCCESSFULLY = 'refundSettledSuccessfully',
	REFUNDPENDINGSETTLEMENT = 'refundPendingSettlement',
	APPROVEDREVIEW = 'approvedReview',
	DECLINED = 'declined',
	COULDNOTVOID = 'couldNotVoid',
	EXPIRED = 'expired',
	GENERALERROR = 'generalError',
	PENDINGFINALSETTLEMENT = 'pendingFinalSettlement',
	PENDINGSETTLEMENT = 'pendingSettlement',
	FAILEDREVIEW = 'failedReview',
	SETTLEDSUCCESSFULLY = 'settledSuccessfully',
	SETTLEMENTERROR = 'settlementError',
	UNDERREVIEW = 'underReview',
	UPDATINGSETTLEMENT = 'updatingSettlement',
	VOIDED = 'voided',
	FDSPENDINGREVIEW = 'FDSPendingReview',
	FDSAUTHORIZEDPENDINGREVIEW = 'FDSAuthorizedPendingReview',
	RETURNEDITEM = 'returnedItem',
	CHARGEBACK = 'chargeback',
	CHARGEBACKREVERSAL = 'chargebackReversal',
	AUTHORIZEDPENDINGRELEASE = 'authorizedPendingRelease'
}

export enum TransactionTypeEnum { 
	AUTHONLYTRANSACTION = 'authOnlyTransaction',
	AUTHCAPTURETRANSACTION = 'authCaptureTransaction',
	CAPTUREONLYTRANSACTION = 'captureOnlyTransaction',
	REFUNDTRANSACTION = 'refundTransaction',
	PRIORAUTHCAPTURETRANSACTION = 'priorAuthCaptureTransaction',
	VOIDTRANSACTION = 'voidTransaction',
	GETDETAILSTRANSACTION = 'getDetailsTransaction',
	AUTHONLYCONTINUETRANSACTION = 'authOnlyContinueTransaction',
	AUTHCAPTURECONTINUETRANSACTION = 'authCaptureContinueTransaction'
}

export enum ValidationModeEnum { 
	NONE = 'none',
	TESTMODE = 'testMode',
	LIVEMODE = 'liveMode',
	OLDLIVEMODE = 'oldLiveMode'
}

export enum WebCheckOutTypeEnum { 
	PAN = 'PAN',
	TOKEN = 'TOKEN'
}

