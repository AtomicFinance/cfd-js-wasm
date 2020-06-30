export interface MultisigSignData {
    hex: string;
    type?: string;
    derEncode?: boolean;
    sighashType?: string;
    sighashAnyoneCanPay?: boolean;
    relatedPubkey?: string;
}

export interface AddMultisigSignTxInRequest {
    txid: string;
    vout: number;
    signParams?: MultisigSignData[];
    redeemScript?: string;
    witnessScript?: string;
    hashType: string;
    clearStack?: boolean;
}

export interface AddMultisigSignRequest {
    isElements?: boolean;
    tx: string;
    txin?: AddMultisigSignTxInRequest;
}

export interface AddMultisigSignResponse {
    hex: string;
}

export interface PubkeyHashSignData {
    hex: string;
    type?: string;
    derEncode?: boolean;
    sighashType?: string;
    sighashAnyoneCanPay?: boolean;
}

export interface AddPubkeyHashSignTxInRequest {
    txid: string;
    vout: number;
    signParam?: PubkeyHashSignData;
    pubkey: string;
    hashType: string;
}

export interface AddPubkeyHashSignRequest {
    isElements?: boolean;
    tx: string;
    txin?: AddPubkeyHashSignTxInRequest;
}

export interface AddPubkeyHashSignResponse {
    hex: string;
}

export interface AddTxIn {
    txid: string;
    vout: number;
    sequence?: number;
}

export interface AddTxOut {
    address: string;
    amount: bigint | number;
    directLockingScript?: string;
}

export interface AddRawTransactionRequest {
    tx: string;
    txins?: AddTxIn[];
    txouts?: AddTxOut[];
}

export interface AddRawTransactionResponse {
    hex: string;
}

export interface ScriptHashSignData {
    hex: string;
    type?: string;
    derEncode?: boolean;
    sighashType?: string;
    sighashAnyoneCanPay?: boolean;
}

export interface AddScriptHashSignTxInRequest {
    txid: string;
    vout: number;
    signParam: ScriptHashSignData[];
    redeemScript: string;
    hashType: string;
}

export interface AddScriptHashSignRequest {
    isElements?: boolean;
    tx: string;
    txin?: AddScriptHashSignTxInRequest;
}

export interface AddScriptHashSignResponse {
    hex: string;
}

export interface SignData {
    hex: string;
    type?: string;
    derEncode?: boolean;
    sighashType?: string;
    sighashAnyoneCanPay?: boolean;
}

export interface AddSignTxInRequest {
    txid: string;
    vout: number;
    isWitness?: boolean;
    signParam: SignData[];
    clearStack?: boolean;
}

export interface AddSignRequest {
    tx: string;
    isElements?: boolean;
    txin?: AddSignTxInRequest;
}

export interface AddSignResponse {
    hex: string;
}

export interface AppendDescriptorChecksumRequest {
    descriptor: string;
    isElements?: boolean;
}

export interface AppendDescriptorChecksumResponse {
    descriptor: string;
}

export interface BlindTxInRequest {
    txid: string;
    vout: number;
    asset: string;
    blindFactor?: string;
    assetBlindFactor?: string;
    amount: bigint | number;
}

export interface BlindTxOutRequest {
    index: number;
    confidentialKey: string;
    blindPubkey?: string;
}

export interface BlindIssuanceRequest {
    txid: string;
    vout: number;
    assetBlindingKey: string;
    tokenBlindingKey?: string;
}

export interface BlindRawTransactionRequest {
    tx: string;
    txins?: BlindTxInRequest[];
    txouts?: BlindTxOutRequest[];
    txoutConfidentialAddresses?: string[];
    issuances?: BlindIssuanceRequest[];
    minimumRangeValue?: bigint | number;
    exponent?: number;
    minimumBits?: number;
}

export interface BlindRawTransactionResponse {
    hex: string;
}

export interface PrivkeyData {
    privkey: string;
    wif: boolean;
    network?: string;
    isCompressed?: boolean;
}

export interface CalculateEcSignatureRequest {
    sighash: string;
    privkeyData?: PrivkeyData;
    isGrindR?: boolean;
}

export interface CalculateEcSignatureResponse {
    signature: string;
}

export interface ConvertAesRequest {
    isEncrypt: boolean;
    mode?: string;
    key: string;
    iv?: string;
    data: string;
}

export interface ConvertAesResponse {
    hex: string;
}

export interface ConvertEntropyToMnemonicRequest {
    entropy: string;
    language?: string;
}

export interface ConvertEntropyToMnemonicResponse {
    mnemonic: string[];
}

export interface ConvertMnemonicToSeedRequest {
    mnemonic: string[];
    passphrase: string;
    strictCheck?: boolean;
    language?: string;
    useIdeographicSpace?: boolean;
}

export interface ConvertMnemonicToSeedResponse {
    seed: string;
    entropy?: string;
}

export interface CreateAddressKeyData {
    hex: string;
    type: string;
}

export interface CreateAddressRequest {
    isElements?: boolean;
    keyData?: CreateAddressKeyData;
    network: string;
    hashType: string;
}

export interface CreateAddressResponse {
    address: string;
    lockingScript: string;
    redeemScript?: string;
}

export interface CreateDescriptorKeyRequest {
    key: string;
    parentExtkey?: string;
    keyPathFromParent?: string;
}

export interface CreateDescriptorRequest {
    scriptType: string;
    keyInfoList?: CreateDescriptorKeyRequest[];
    requireNum?: number;
}

export interface CreateDescriptorResponse {
    descriptor: string;
}

export interface CreateExtkeyRequest {
    network: string;
    extkeyType?: string;
    parentKey?: string;
    parentFingerprint?: string;
    key: string;
    depth: number;
    chainCode: string;
    childNumber: number;
    hardened?: boolean;
}

export interface CreateExtkeyResponse {
    extkey: string;
}

export interface CreateExtkeyFromParentRequest {
    extkey: string;
    network: string;
    extkeyType: string;
    childNumber: number;
    hardened?: boolean;
}

export interface CreateExtkeyFromParentResponse {
    extkey: string;
}

export interface CreateExtkeyFromParentKeyRequest {
    network: string;
    extkeyType?: string;
    parentKey: string;
    parentDepth: number;
    parentChainCode: string;
    childNumber: number;
    hardened?: boolean;
}

export interface CreateExtkeyFromParentKeyResponse {
    extkey: string;
}

export interface CreateExtkeyFromParentPathRequest {
    extkey: string;
    network: string;
    extkeyType: string;
    childNumberArray?: number[];
    path?: string;
}

export interface CreateExtkeyFromParentPathResponse {
    extkey: string;
}

export interface CreateExtkeyFromSeedRequest {
    seed: string;
    network: string;
    extkeyType?: string;
}

export interface CreateExtkeyFromSeedResponse {
    extkey: string;
}

export interface CreateExtPubkeyRequest {
    extkey: string;
    network: string;
}

export interface CreateExtPubkeyResponse {
    extkey: string;
}

export interface CreateKeyPairRequest {
    wif: boolean;
    network?: string;
    isCompressed?: boolean;
}

export interface CreateKeyPairResponse {
    privkey: string;
    pubkey: string;
}

export interface MultisigScriptSigData {
    hex: string;
    type?: string;
    derEncode?: boolean;
    sighashType?: string;
    sighashAnyoneCanPay?: boolean;
    relatedPubkey?: string;
}

export interface CreateMultisigScriptSigRequest {
    signParams?: MultisigScriptSigData[];
    redeemScript: string;
}

export interface CreateMultisigScriptSigResponse {
    hex: string;
}

export interface CreateScriptRequest {
    items: string[];
}

export interface CreateScriptResponse {
    hex: string;
}

export interface DecodeBase58Request {
    data: string;
    hasChecksum?: boolean;
}

export interface DecodeBase58Response {
    hex: string;
}

export interface DecodeDerSignatureToRawRequest {
    signature: string;
}

export interface DecodeDerSignatureToRawResponse {
    signature: string;
}

export interface DecodeRawTransactionRequest {
    hex: string;
    network?: string;
    iswitness?: boolean;
}

export interface DecodeUnlockingScript {
    asm?: string;
    hex?: string;
}

export interface DecodeRawTransactionTxIn {
    coinbase?: string;
    txid?: string;
    vout?: number;
    scriptSig?: DecodeUnlockingScript;
    txinwitness?: string[];
    sequence?: number;
}

export interface DecodeLockingScript {
    asm?: string;
    hex?: string;
    reqSigs?: number;
    type?: string;
    addresses?: string[];
}

export interface DecodeRawTransactionTxOut {
    value: bigint;
    n: number;
    scriptPubKey?: DecodeLockingScript;
}

export interface DecodeRawTransactionResponse {
    txid: string;
    hash: string;
    version: number;
    size: number;
    vsize: number;
    weight: number;
    locktime: number;
    vin?: DecodeRawTransactionTxIn[];
    vout?: DecodeRawTransactionTxOut[];
}

export interface ElementsAddTxInRequest {
    txid: string;
    vout: number;
    sequence?: number;
}

export interface ElementsAddPeginWitness {
    amount: bigint | number;
    asset: string;
    mainchainGenesisBlockHash: string;
    claimScript: string;
    mainchainRawTransaction: string;
    mainchainTxoutproof: string;
}

export interface ElementsAddPeginTxIn {
    txid: string;
    vout: number;
    sequence?: number;
    peginwitness: ElementsAddPeginWitness;
    isRemoveMainchainTxWitness?: boolean;
}

export interface ElementsAddTxOut {
    address: string;
    amount: bigint | number;
    asset: string;
    directLockingScript?: string;
    directNonce?: string;
    isRemoveNonce?: boolean;
}

export interface ElementsAddDestroyAmount {
    amount: bigint | number;
    asset: string;
    directNonce?: string;
}

export interface ElementsAddPegout {
    amount: bigint | number;
    asset: string;
    network: string;
    elementsNetwork: string;
    mainchainGenesisBlockHash: string;
    btcAddress?: string;
    onlinePubkey: string;
    masterOnlineKey: string;
    bitcoinDescriptor: string;
    bip32Counter: number;
    whitelist: string;
}

export interface ElementsAddTxOutFee {
    amount: bigint | number;
    asset: string;
}

export interface ElementsAddRawTransactionRequest {
    tx: string;
    txins?: ElementsAddTxInRequest[];
    peginTxins?: ElementsAddPeginTxIn[];
    txouts?: ElementsAddTxOut[];
    destroyAmountTxouts?: ElementsAddDestroyAmount[];
    pegoutTxouts?: ElementsAddPegout[];
    fee?: ElementsAddTxOutFee;
    isRandomSortTxOut?: boolean;
}

export interface ElementsAddRawTransactionResponse {
    hex: string;
    btcAddresses?: string[];
}

export interface ElementsDestroyAmountTxIn {
    txid: string;
    vout: number;
    sequence?: number;
}

export interface ElementsDestroyAmountTxOut {
    address: string;
    amount: bigint | number;
    asset: string;
    directLockingScript?: string;
    directNonce?: string;
    isRemoveNonce?: boolean;
}

export interface ElementsDestroyAmount {
    amount: bigint | number;
    asset: string;
    directNonce?: string;
}

export interface ElementsDestroyAmountFee {
    amount: bigint | number;
    asset: string;
}

export interface CreateDestroyAmountRequest {
    version?: number;
    locktime?: number;
    txins?: ElementsDestroyAmountTxIn[];
    txouts?: ElementsDestroyAmountTxOut[];
    destroy: ElementsDestroyAmount;
    fee?: ElementsDestroyAmountFee;
}

export interface CreateDestroyAmountResponse {
    hex: string;
}

export interface CreatePegInAddressRequest {
    fedpegscript: string;
    pubkey: string;
    redeemScript?: string;
    network?: string;
    hashType?: string;
}

export interface CreatePegInAddressResponse {
    mainchainAddress: string;
    claimScript: string;
    tweakFedpegscript: string;
}

export interface ElementsPeginWitness {
    amount: bigint | number;
    asset: string;
    mainchainGenesisBlockHash: string;
    claimScript: string;
    mainchainRawTransaction: string;
    mainchainTxoutproof: string;
}

export interface ElementsPeginTxIn {
    isPegin?: boolean;
    txid: string;
    vout: number;
    sequence?: number;
    peginwitness?: ElementsPeginWitness;
    isRemoveMainchainTxWitness?: boolean;
}

export interface ElementsPeginTxOut {
    address: string;
    amount: bigint | number;
    asset: string;
    directLockingScript?: string;
    directNonce?: string;
    isRemoveNonce?: boolean;
}

export interface ElementsPeginTxOutFee {
    amount: bigint | number;
    asset: string;
}

export interface CreateRawPeginRequest {
    version?: number;
    locktime?: number;
    txins: ElementsPeginTxIn[];
    txouts?: ElementsPeginTxOut[];
    fee?: ElementsPeginTxOutFee;
    isRandomSortTxOut?: boolean;
}

export interface CreateRawPeginResponse {
    hex: string;
}

export interface ElementsPegoutTxIn {
    txid: string;
    vout: number;
    sequence?: number;
}

export interface ElementsPegoutTxOut {
    address: string;
    amount: bigint | number;
    asset: string;
    directLockingScript?: string;
    directNonce?: string;
    isRemoveNonce?: boolean;
}

export interface ElementsPegout {
    amount: bigint | number;
    asset: string;
    network: string;
    elementsNetwork: string;
    mainchainGenesisBlockHash: string;
    btcAddress?: string;
    onlinePubkey: string;
    masterOnlineKey: string;
    bitcoinDescriptor: string;
    bip32Counter: number;
    whitelist: string;
}

export interface ElementsPegoutTxOutFee {
    amount: bigint | number;
    asset: string;
}

export interface CreateRawPegoutRequest {
    version?: number;
    locktime?: number;
    txins?: ElementsPegoutTxIn[];
    txouts?: ElementsPegoutTxOut[];
    pegout: ElementsPegout;
    fee?: ElementsPegoutTxOutFee;
}

export interface CreateRawPegoutResponse {
    hex: string;
    btcAddress?: string;
}

export interface ElementsTxInRequest {
    txid: string;
    vout: number;
    sequence?: number;
}

export interface ElementsTxOutRequest {
    address: string;
    amount: bigint | number;
    asset: string;
    directLockingScript?: string;
    directNonce?: string;
    isRemoveNonce?: boolean;
}

export interface ElementsTxOutFeeRequest {
    amount: bigint | number;
    asset: string;
}

export interface ElementsCreateRawTransactionRequest {
    version?: number;
    locktime?: number;
    txins: ElementsTxInRequest[];
    txouts?: ElementsTxOutRequest[];
    fee?: ElementsTxOutFeeRequest;
}

export interface ElementsCreateRawTransactionResponse {
    hex: string;
}

export interface ElementsDecodeRawTransactionRequest {
    hex: string;
    network?: string;
    mainchainNetwork?: string;
    iswitness?: boolean;
    fullDump?: boolean;
}

export interface ElementsDecodeUnlockingScript {
    asm: string;
    hex: string;
}

export interface ElementsDecodeIssuance {
    assetBlindingNonce: string;
    assetEntropy: string;
    contractHash?: string;
    isreissuance: boolean;
    token?: string;
    asset?: string;
    assetamount?: bigint;
    assetamountcommitment?: string;
    tokenamount?: bigint;
    tokenamountcommitment?: string;
    assetRangeproof?: string;
    tokenRangeproof?: string;
}

export interface ElementsDecodeRawTransactionTxIn {
    coinbase?: string;
    txid?: string;
    vout?: number;
    scriptSig?: ElementsDecodeUnlockingScript;
    is_pegin?: boolean;
    sequence?: bigint;
    txinwitness?: string[];
    pegin_witness?: string[];
    issuance?: ElementsDecodeIssuance;
}

export interface ElementsDecodeLockingScript {
    asm?: string;
    hex?: string;
    reqSigs?: number;
    type: string;
    addresses?: string[];
    pegout_chain?: string;
    pegout_asm?: string;
    pegout_hex?: string;
    pegout_reqSigs?: number;
    pegout_type?: string;
    pegout_addresses?: string[];
}

export interface ElementsDecodeRawTransactionTxOut {
    value?: bigint;
    'value-minimum?': bigint;
    'value-maximum?': bigint;
    'ct-exponent?': number;
    'ct-bits?': number;
    surjectionproof?: string;
    valuecommitment?: string;
    asset?: string;
    assetcommitment?: string;
    commitmentnonce?: string;
    commitmentnonce_fully_valid?: boolean;
    n: number;
    scriptPubKey?: ElementsDecodeLockingScript;
    rangeproof?: string;
}

export interface ElementsDecodeRawTransactionResponse {
    txid: string;
    hash: string;
    wtxid: string;
    withash: string;
    version: number;
    size: number;
    vsize: number;
    weight: number;
    locktime: number;
    vin?: ElementsDecodeRawTransactionTxIn[];
    vout?: ElementsDecodeRawTransactionTxOut[];
}

export interface GetConfidentialAddressRequest {
    unblindedAddress: string;
    key: string;
}

export interface GetConfidentialAddressResponse {
    confidentialAddress: string;
}

export interface GetUnblindedAddressRequest {
    confidentialAddress: string;
}

export interface GetUnblindedAddressResponse {
    unblindedAddress: string;
    confidentialKey: string;
}

export interface IssuanceDataRequest {
    txid: string;
    vout: number;
    assetAmount: bigint | number;
    assetAddress: string;
    tokenAmount: bigint | number;
    tokenAddress: string;
    isBlind?: boolean;
    contractHash?: string;
    isRemoveNonce?: boolean;
}

export interface SetRawIssueAssetRequest {
    tx: string;
    isRandomSortTxOut?: boolean;
    issuances: IssuanceDataRequest[];
}

export interface IssuanceDataResponse {
    txid: string;
    vout: number;
    asset: string;
    entropy: string;
    token?: string;
}

export interface SetRawIssueAssetResponse {
    hex: string;
    issuances: IssuanceDataResponse[];
}

export interface ReissuanceDataRequest {
    txid: string;
    vout: number;
    amount: bigint | number;
    address: string;
    assetBlindingNonce: string;
    assetEntropy: string;
    isRemoveNonce?: boolean;
}

export interface SetRawReissueAssetRequest {
    tx: string;
    isRandomSortTxOut?: boolean;
    issuances: ReissuanceDataRequest[];
}

export interface ReissuanceDataResponse {
    txid: string;
    vout: number;
    asset: string;
    entropy: string;
}

export interface SetRawReissueAssetResponse {
    hex: string;
    issuances: ReissuanceDataResponse[];
}

export interface UnblindTxOut {
    index: number;
    blindingKey: string;
}

export interface UnblindIssuance {
    txid: string;
    vout: number;
    assetBlindingKey?: string;
    tokenBlindingKey?: string;
}

export interface UnblindRawTransactionRequest {
    tx: string;
    txouts?: UnblindTxOut[];
    issuances?: UnblindIssuance[];
}

export interface UnblindOutput {
    index: number;
    asset: string;
    blindFactor: string;
    assetBlindFactor: string;
    amount: bigint;
}

export interface UnblindIssuanceOutput {
    txid: string;
    vout: number;
    asset?: string;
    assetamount?: bigint;
    token?: string;
    tokenamount?: bigint;
}

export interface UnblindRawTransactionResponse {
    hex: string;
    outputs?: UnblindOutput[];
    issuanceOutputs?: UnblindIssuanceOutput[];
}

export interface EncodeBase58Request {
    hex: string;
    hasChecksum?: boolean;
}

export interface EncodeBase58Response {
    data: string;
}

export interface EncodeSignatureByDerRequest {
    signature: string;
    sighashType: string;
    sighashAnyoneCanPay?: boolean;
}

export interface EncodeSignatureByDerResponse {
    signature: string;
}

export interface InnerErrorResponse {
    code: number;
    type: string;
    message: string;
}

export interface ErrorResponse {
    error: InnerErrorResponse;
}

export interface SelectUtxoData {
    txid: string;
    vout: number;
    asset?: string;
    redeemScript?: string;
    descriptor?: string;
    isIssuance?: boolean;
    isBlindIssuance?: boolean;
    isPegin?: boolean;
    peginBtcTxSize?: bigint | number;
    fedpegScript?: string;
    scriptSigTemplate?: string;
}

export interface EstimateFeeRequest {
    selectUtxos?: SelectUtxoData[];
    feeRate: number;
    tx: string;
    isElements?: boolean;
    isBlind?: boolean;
    feeAsset?: string;
    exponent?: number;
    minimumBits?: number;
}

export interface EstimateFeeResponse {
    feeAmount: bigint;
    txFeeAmount?: bigint;
    utxoFeeAmount?: bigint;
}

export interface FundUtxoJsonData {
    txid: string;
    vout: number;
    address: string;
    amount: bigint | number;
    asset?: string;
    descriptor?: string;
    scriptSigTemplate?: string;
}

export interface FundSelectUtxoData {
    txid: string;
    vout: number;
    address: string;
    amount: bigint | number;
    asset?: string;
    redeemScript?: string;
    descriptor?: string;
    isIssuance?: boolean;
    isBlindIssuance?: boolean;
    isPegin?: boolean;
    peginBtcTxSize?: number;
    fedpegScript?: string;
    scriptSigTemplate?: string;
}

export interface FundAmountMapData {
    asset: string;
    amount: bigint | number;
    reserveAddress: string;
}

export interface FundFeeInfomation {
    feeRate: number;
    longTermFeeRate?: number;
    knapsackMinChange?: bigint | number;
    dustFeeRate?: number;
    feeAsset?: string;
    isBlindEstimateFee?: boolean;
    exponent?: number;
    minimumBits?: number;
}

export interface FundRawTransactionRequest {
    utxos: FundUtxoJsonData[];
    selectUtxos?: FundSelectUtxoData[];
    tx: string;
    isElements?: boolean;
    network?: string;
    targetAmount?: bigint | number;
    reserveAddress?: string;
    targets?: FundAmountMapData[];
    feeInfo?: FundFeeInfomation;
}

export interface FundRawTransactionResponse {
    hex: string;
    usedAddresses?: string[];
    feeAmount?: bigint;
}

export interface GetAddressInfoRequest {
    address: string;
    isElements?: boolean;
}

export interface GetAddressInfoResponse {
    lockingScript: string;
    network: string;
    hashType: string;
    witnessVersion?: number;
    hash?: string;
}

export interface GetAddressesFromMultisigRequest {
    isElements?: boolean;
    redeemScript: string;
    network?: string;
    hashType?: string;
}

export interface GetAddressesFromMultisigResponse {
    addresses: string[];
    pubkeys: string[];
    requireNum: number;
}

export interface GetCommitmentRequest {
    amount: bigint | number;
    asset: string;
    assetBlindFactor: string;
    blindFactor: string;
}

export interface GetCommitmentResponse {
    assetCommitment: string;
    amountCommitment: string;
}

export interface GetCompressedPubkeyRequest {
    pubkey: string;
}

export interface GetCompressedPubkeyResponse {
    pubkey: string;
}

export interface GetDefaultBlindingKeyRequest {
    masterBlindingKey: string;
    lockingScript?: string;
    address?: string;
}

export interface GetDefaultBlindingKeyResponse {
    blindingKey: string;
}

export interface GetExtkeyInfoRequest {
    extkey: string;
}

export interface GetExtkeyInfoResponse {
    network: string;
    version: string;
    depth: number;
    fingerprint: string;
    childNumber: number;
    chainCode: string;
}

export interface GetIssuanceBlindingKeyRequest {
    masterBlindingKey: string;
    txid: string;
    vout: number;
}

export interface GetIssuanceBlindingKeyResponse {
    blindingKey: string;
}

export interface GetMnemonicWordlistRequest {
    language: string;
}

export interface GetMnemonicWordlistResponse {
    wordlist: string[];
}

export interface GetPrivkeyFromExtkeyRequest {
    extkey: string;
    network: string;
    wif: boolean;
    isCompressed?: boolean;
}

export interface GetPrivkeyFromExtkeyResponse {
    privkey: string;
}

export interface GetPrivkeyFromWifRequest {
    wif: string;
}

export interface GetPrivkeyFromWifResponse {
    hex: string;
    network: string;
    isCompressed: boolean;
}

export interface GetPrivkeyWifRequest {
    hex: string;
    network: string;
    isCompressed: boolean;
}

export interface GetPrivkeyWifResponse {
    wif: string;
}

export interface GetPubkeyFromExtkeyRequest {
    extkey: string;
    network: string;
}

export interface GetPubkeyFromExtkeyResponse {
    pubkey: string;
}

export interface GetPubkeyFromPrivkeyRequest {
    privkey: string;
    isCompressed?: boolean;
}

export interface GetPubkeyFromPrivkeyResponse {
    pubkey: string;
}

export interface GetWitnessStackNumTxInRequest {
    txid: string;
    vout: number;
}

export interface GetWitnessStackNumRequest {
    tx: string;
    isElements?: boolean;
    txin: GetWitnessStackNumTxInRequest;
}

export interface GetWitnessStackNumResponse {
    count: number;
}

export interface CreateMultisigRequest {
    nrequired: number;
    keys: string[];
    isElements?: boolean;
    network: string;
    hashType: string;
}

export interface CreateMultisigResponse {
    address: string;
    redeemScript?: string;
    witnessScript?: string;
}

export interface ParseDescriptorRequest {
    isElements?: boolean;
    descriptor: string;
    network?: string;
    bip32DerivationPath?: string;
}

export interface DescriptorKeyJson {
    keyType: string;
    key: string;
}

export interface DescriptorScriptJson {
    depth: number;
    lockingScript: string;
    address: string;
    hashType: string;
    redeemScript?: string;
    keyType?: string;
    key?: string;
    keys?: DescriptorKeyJson[];
    reqNum?: number;
}

export interface ParseDescriptorResponse {
    type: string;
    address?: string;
    lockingScript: string;
    hashType?: string;
    redeemScript?: string;
    includeMultisig: boolean;
    scripts?: DescriptorScriptJson[];
}

export interface ParseScriptRequest {
    script: string;
}

export interface ParseScriptResponse {
    scriptItems: string[];
}

export interface UtxoJsonData {
    txid: string;
    vout: number;
    amount: bigint;
    asset?: string;
    descriptor?: string;
}

export interface TargetAmountMapData {
    asset: string;
    amount: bigint;
}

export interface CoinSelectionFeeInfomationField {
    txFeeAmount?: bigint | number;
    feeRate?: number;
    longTermFeeRate?: number;
    knapsackMinChange?: number;
    feeAsset?: string;
    exponent?: number;
    minimumBits?: number;
}

export interface SelectUtxosRequest {
    utxos: UtxoJsonData[];
    targetAmount?: bigint | number;
    isElements?: boolean;
    targets?: TargetAmountMapData[];
    feeInfo?: CoinSelectionFeeInfomationField;
}

export interface UtxoJsonData {
    txid: string;
    vout: number;
    amount: bigint;
    asset?: string;
    descriptor?: string;
}

export interface TargetAmountMapData {
    asset: string;
    amount: bigint;
}

export interface SelectUtxosResponse {
    utxos: UtxoJsonData[];
    selectedAmount?: bigint;
    selectedAmounts?: TargetAmountMapData[];
    feeAmount?: bigint;
    utxoFeeAmount: bigint;
}

export interface SerializeLedgerFormatTxOut {
    index: number;
    asset: string;
    amount: bigint | number;
}

export interface SerializeLedgerFormatRequest {
    tx: string;
    txouts?: SerializeLedgerFormatTxOut[];
    skipWitness?: boolean;
    isAuthorization: boolean;
}

export interface SerializeLedgerFormatResponse {
    serialize: string;
    sha256: string;
}

export interface SignatureHashKeyData {
    hex: string;
    type: string;
}

export interface CreateSignatureHashTxInRequest {
    txid: string;
    vout: number;
    keyData: SignatureHashKeyData;
    amount: bigint | number;
    hashType: string;
    sighashType?: string;
    sighashAnyoneCanPay?: boolean;
}

export interface CreateSignatureHashRequest {
    tx: string;
    txin: CreateSignatureHashTxInRequest;
}

export interface CreateSignatureHashResponse {
    sighash: string;
}

export interface ElementsSignatureHashKeyData {
    hex: string;
    type: string;
}

export interface CreateElementsSignatureHashTxIn {
    txid: string;
    vout: number;
    keyData: ElementsSignatureHashKeyData;
    amount?: bigint | number;
    confidentialValueCommitment?: string;
    hashType: string;
    sighashType?: string;
    sighashAnyoneCanPay?: boolean;
}

export interface CreateElementsSignatureHashRequest {
    tx: string;
    txin: CreateElementsSignatureHashTxIn;
}

export interface CreateElementsSignatureHashResponse {
    sighash: string;
}

export interface SignWithPrivkeyTxInRequest {
    txid: string;
    vout: number;
    privkey: string;
    pubkey?: string;
    hashType: string;
    sighashType?: string;
    sighashAnyoneCanPay?: boolean;
    amount?: bigint | number;
    confidentialValueCommitment?: string;
    isGrindR?: boolean;
}

export interface SignWithPrivkeyRequest {
    isElements?: boolean;
    tx: string;
    txin?: SignWithPrivkeyTxInRequest;
}

export interface SignWithPrivkeyResponse {
    hex: string;
}

export interface GetSupportedFunctionResponse {
    bitcoin: boolean;
    elements: boolean;
}

export interface TxInRequest {
    txid: string;
    vout: number;
    sequence?: number;
}

export interface TxOutRequest {
    address: string;
    amount: bigint | number;
    directLockingScript?: string;
}

export interface CreateRawTransactionRequest {
    version?: number;
    locktime?: number;
    txins?: TxInRequest[];
    txouts?: TxOutRequest[];
}

export interface CreateRawTransactionResponse {
    hex: string;
}

export interface UpdateTxOutAmountData {
    amount: bigint | number;
    index?: number;
    address?: string;
    directLockingScript?: string;
}

export interface UpdateTxOutAmountRequest {
    tx: string;
    isElements?: boolean;
    txouts?: UpdateTxOutAmountData[];
}

export interface UpdateTxOutAmountResponse {
    hex: string;
}

export interface WitnessStackData {
    index: number;
    hex: string;
    type?: string;
    derEncode?: boolean;
    sighashType?: string;
    sighashAnyoneCanPay?: boolean;
}

export interface UpdateWitnessStackTxInRequest {
    txid: string;
    vout: number;
    witnessStack: WitnessStackData;
}

export interface UpdateWitnessStackRequest {
    tx: string;
    isElements?: boolean;
    txin?: UpdateWitnessStackTxInRequest;
}

export interface UpdateWitnessStackResponse {
    hex?: string;
}

export interface VerifyignTxInUtxoData {
    txid: string;
    vout: number;
    address: string;
    amount: bigint | number;
    descriptor?: string;
    confidentialValueCommitment?: string;
}

export interface VerifySignRequest {
    tx: string;
    isElements?: boolean;
    txins: VerifyignTxInUtxoData[];
}

export interface FailSignTxIn {
    txid: string;
    vout: number;
}

export interface VerifySignResponse {
    success: boolean;
    failTxins?: FailSignTxIn[];
}

export interface VerifySignatureTxInRequest {
    txid: string;
    vout: number;
    signature: string;
    pubkey: string;
    redeemScript?: string;
    hashType: string;
    sighashType?: string;
    sighashAnyoneCanPay?: boolean;
    amount?: bigint | number;
    confidentialValueCommitment?: string;
}

export interface VerifySignatureRequest {
    tx: string;
    isElements?: boolean;
    txin: VerifySignatureTxInRequest;
}

export interface VerifySignatureResponse {
    success: boolean;
}

export class Cfdjs {
    AddMultisigSign(jsonObject: AddMultisigSignRequest): Promise<AddMultisigSignResponse>;
    AddPubkeyHashSign(jsonObject: AddPubkeyHashSignRequest): Promise<AddPubkeyHashSignResponse>;
    AddRawTransaction(jsonObject: AddRawTransactionRequest): Promise<AddRawTransactionResponse>;
    AddScriptHashSign(jsonObject: AddScriptHashSignRequest): Promise<AddScriptHashSignResponse>;
    AddSign(jsonObject: AddSignRequest): Promise<AddSignResponse>;
    AppendDescriptorChecksum(jsonObject: AppendDescriptorChecksumRequest): Promise<AppendDescriptorChecksumResponse>;
    BlindRawTransaction(jsonObject: BlindRawTransactionRequest): Promise<BlindRawTransactionResponse>;
    CalculateEcSignature(jsonObject: CalculateEcSignatureRequest): Promise<CalculateEcSignatureResponse>;
    ConvertAes(jsonObject: ConvertAesRequest): Promise<ConvertAesResponse>;
    ConvertEntropyToMnemonic(jsonObject: ConvertEntropyToMnemonicRequest): Promise<ConvertEntropyToMnemonicResponse>;
    ConvertMnemonicToSeed(jsonObject: ConvertMnemonicToSeedRequest): Promise<ConvertMnemonicToSeedResponse>;
    CreateAddress(jsonObject: CreateAddressRequest): Promise<CreateAddressResponse>;
    CreateDescriptor(jsonObject: CreateDescriptorRequest): Promise<CreateDescriptorResponse>;
    CreateExtkey(jsonObject: CreateExtkeyRequest): Promise<CreateExtkeyResponse>;
    CreateExtkeyFromParent(jsonObject: CreateExtkeyFromParentRequest): Promise<CreateExtkeyFromParentResponse>;
    CreateExtkeyFromParentKey(jsonObject: CreateExtkeyFromParentKeyRequest): Promise<CreateExtkeyFromParentKeyResponse>;
    CreateExtkeyFromParentPath(jsonObject: CreateExtkeyFromParentPathRequest): Promise<CreateExtkeyFromParentPathResponse>;
    CreateExtkeyFromSeed(jsonObject: CreateExtkeyFromSeedRequest): Promise<CreateExtkeyFromSeedResponse>;
    CreateExtPubkey(jsonObject: CreateExtPubkeyRequest): Promise<CreateExtPubkeyResponse>;
    CreateKeyPair(jsonObject: CreateKeyPairRequest): Promise<CreateKeyPairResponse>;
    CreateMultisigScriptSig(jsonObject: CreateMultisigScriptSigRequest): Promise<CreateMultisigScriptSigResponse>;
    CreateScript(jsonObject: CreateScriptRequest): Promise<CreateScriptResponse>;
    DecodeBase58(jsonObject: DecodeBase58Request): Promise<DecodeBase58Response>;
    DecodeDerSignatureToRaw(jsonObject: DecodeDerSignatureToRawRequest): Promise<DecodeDerSignatureToRawResponse>;
    DecodeRawTransaction(jsonObject: DecodeRawTransactionRequest): Promise<DecodeRawTransactionResponse>;
    ElementsAddRawTransaction(jsonObject: ElementsAddRawTransactionRequest): Promise<ElementsAddRawTransactionResponse>;
    CreateDestroyAmount(jsonObject: CreateDestroyAmountRequest): Promise<CreateDestroyAmountResponse>;
    CreatePegInAddress(jsonObject: CreatePegInAddressRequest): Promise<CreatePegInAddressResponse>;
    CreateRawPegin(jsonObject: CreateRawPeginRequest): Promise<CreateRawPeginResponse>;
    CreateRawPegout(jsonObject: CreateRawPegoutRequest): Promise<CreateRawPegoutResponse>;
    ElementsCreateRawTransaction(jsonObject: ElementsCreateRawTransactionRequest): Promise<ElementsCreateRawTransactionResponse>;
    ElementsDecodeRawTransaction(jsonObject: ElementsDecodeRawTransactionRequest): Promise<ElementsDecodeRawTransactionResponse>;
    GetConfidentialAddress(jsonObject: GetConfidentialAddressRequest): Promise<GetConfidentialAddressResponse>;
    GetUnblindedAddress(jsonObject: GetUnblindedAddressRequest): Promise<GetUnblindedAddressResponse>;
    SetRawIssueAsset(jsonObject: SetRawIssueAssetRequest): Promise<SetRawIssueAssetResponse>;
    SetRawReissueAsset(jsonObject: SetRawReissueAssetRequest): Promise<SetRawReissueAssetResponse>;
    UnblindRawTransaction(jsonObject: UnblindRawTransactionRequest): Promise<UnblindRawTransactionResponse>;
    EncodeBase58(jsonObject: EncodeBase58Request): Promise<EncodeBase58Response>;
    EncodeSignatureByDer(jsonObject: EncodeSignatureByDerRequest): Promise<EncodeSignatureByDerResponse>;
    EstimateFee(jsonObject: EstimateFeeRequest): Promise<EstimateFeeResponse>;
    FundRawTransaction(jsonObject: FundRawTransactionRequest): Promise<FundRawTransactionResponse>;
    GetAddressInfo(jsonObject: GetAddressInfoRequest): Promise<GetAddressInfoResponse>;
    GetAddressesFromMultisig(jsonObject: GetAddressesFromMultisigRequest): Promise<GetAddressesFromMultisigResponse>;
    GetCommitment(jsonObject: GetCommitmentRequest): Promise<GetCommitmentResponse>;
    GetCompressedPubkey(jsonObject: GetCompressedPubkeyRequest): Promise<GetCompressedPubkeyResponse>;
    GetDefaultBlindingKey(jsonObject: GetDefaultBlindingKeyRequest): Promise<GetDefaultBlindingKeyResponse>;
    GetExtkeyInfo(jsonObject: GetExtkeyInfoRequest): Promise<GetExtkeyInfoResponse>;
    GetIssuanceBlindingKey(jsonObject: GetIssuanceBlindingKeyRequest): Promise<GetIssuanceBlindingKeyResponse>;
    GetMnemonicWordlist(jsonObject: GetMnemonicWordlistRequest): Promise<GetMnemonicWordlistResponse>;
    GetPrivkeyFromExtkey(jsonObject: GetPrivkeyFromExtkeyRequest): Promise<GetPrivkeyFromExtkeyResponse>;
    GetPrivkeyFromWif(jsonObject: GetPrivkeyFromWifRequest): Promise<GetPrivkeyFromWifResponse>;
    GetPrivkeyWif(jsonObject: GetPrivkeyWifRequest): Promise<GetPrivkeyWifResponse>;
    GetPubkeyFromExtkey(jsonObject: GetPubkeyFromExtkeyRequest): Promise<GetPubkeyFromExtkeyResponse>;
    GetPubkeyFromPrivkey(jsonObject: GetPubkeyFromPrivkeyRequest): Promise<GetPubkeyFromPrivkeyResponse>;
    GetWitnessStackNum(jsonObject: GetWitnessStackNumRequest): Promise<GetWitnessStackNumResponse>;
    CreateMultisig(jsonObject: CreateMultisigRequest): Promise<CreateMultisigResponse>;
    ParseDescriptor(jsonObject: ParseDescriptorRequest): Promise<ParseDescriptorResponse>;
    ParseScript(jsonObject: ParseScriptRequest): Promise<ParseScriptResponse>;
    SelectUtxos(jsonObject: SelectUtxosRequest): Promise<SelectUtxosResponse>;
    SerializeLedgerFormat(jsonObject: SerializeLedgerFormatRequest): Promise<SerializeLedgerFormatResponse>;
    CreateSignatureHash(jsonObject: CreateSignatureHashRequest): Promise<CreateSignatureHashResponse>;
    CreateElementsSignatureHash(jsonObject: CreateElementsSignatureHashRequest): Promise<CreateElementsSignatureHashResponse>;
    SignWithPrivkey(jsonObject: SignWithPrivkeyRequest): Promise<SignWithPrivkeyResponse>;
    GetSupportedFunction(): Promise<GetSupportedFunctionResponse>;
    CreateRawTransaction(jsonObject: CreateRawTransactionRequest): Promise<CreateRawTransactionResponse>;
    UpdateTxOutAmount(jsonObject: UpdateTxOutAmountRequest): Promise<UpdateTxOutAmountResponse>;
    UpdateWitnessStack(jsonObject: UpdateWitnessStackRequest): Promise<UpdateWitnessStackResponse>;
    VerifySign(jsonObject: VerifySignRequest): Promise<VerifySignResponse>;
    VerifySignature(jsonObject: VerifySignatureRequest): Promise<VerifySignatureResponse>;
}

export function addInitializedListener(func: () => Promise<void>): void;

export function getCfd(): Cfdjs;