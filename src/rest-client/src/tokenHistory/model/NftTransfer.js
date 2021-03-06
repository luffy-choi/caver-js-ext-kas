/*
 * Token History API
 * # Introduction  Token History API allows users to search for information and transfer records on KLAY, FT (KIP-7, Labeled ERC-20), and NFT (KIP-17, Labeled ERC-721) tokens. You can use Token History API to check the records of a specific EOA transferring KLAY, retrieve NFT information, or other purposes.  For more details on Token History API, refer to our [tutorial](https://klaytn.com).  For any questions regarding this document or KAS, visit [the developer forum](https://forum.klaytn.com/).  # Authentication  <!-- ReDoc-Inject: <security-definitions> -->
 *
 * OpenAPI spec version: 1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.17
 *
 * Do not edit the class manually.
 *
 */

;(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['../../ApiClient', '../model/NftContract', '../model/Transaction'], factory)
    } else if (typeof module === 'object' && module.exports) {
        // CommonJS-like environments that support module.exports, like Node.
        module.exports = factory(require('../../ApiClient'), require('./NftContract'), require('./Transaction'))
    } else {
        // Browser globals (root is window)
        if (!root.TokenHistoryApi) {
            root.TokenHistoryApi = {}
        }
        root.TokenHistoryApi.NftTransfer = factory(
            root.TokenHistoryApi.ApiClient,
            root.TokenHistoryApi.NftContract,
            root.TokenHistoryApi.Transaction
        )
    }
})(this, function(ApiClient, NftContract, Transaction) {
    /**
     * The NftTransfer model module.
     * @class NftTransfer
     * @version 1.0
     */

    /**
     * Constructs a new <code>NftTransfer</code>.
     * @alias NftTransfer
     * @class
     * @param contract {NftContract}
     * @param from {String} Sender EOA (20-byte)
     * @param to {String} Receiver EOA (20-byte)
     * @param transaction {Transaction}
     * @param transferType {String} Type of transaction detail
     * @param tokenId {String} Token identifier (in hexadecimal)
     */
    const NftTransfer = function(contract, from, to, transaction, transferType, tokenId) {
        this.contract = contract
        this.from = from
        this.to = to
        this.transaction = transaction
        this.transferType = transferType
        this.tokenId = tokenId
    }

    /**
     * Constructs a <code>NftTransfer</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {NftTransfer} obj Optional instance to populate.
     * @return {NftTransfer} The populated <code>NftTransfer</code> instance.
     * @memberof NftTransfer
     */
    NftTransfer.constructFromObject = function(data, obj) {
        if (data) {
            obj = obj || new NftTransfer()
            if (data.hasOwnProperty('contract')) obj.contract = NftContract.constructFromObject(data.contract)
            if (data.hasOwnProperty('from')) obj.from = ApiClient.convertToType(data.from, 'String')
            if (data.hasOwnProperty('to')) obj.to = ApiClient.convertToType(data.to, 'String')
            if (data.hasOwnProperty('transaction')) obj.transaction = Transaction.constructFromObject(data.transaction)
            if (data.hasOwnProperty('transferType')) obj.transferType = ApiClient.convertToType(data.transferType, 'String')
            if (data.hasOwnProperty('tokenId')) obj.tokenId = ApiClient.convertToType(data.tokenId, 'String')
        }
        return obj
    }

    /**
     * @type {NftContract}
     * @memberof NftTransfer
     */
    NftTransfer.prototype.contract = undefined

    /**
     * Sender EOA (20-byte)
     * @type {String}
     * @memberof NftTransfer
     */
    NftTransfer.prototype.from = undefined

    /**
     * Receiver EOA (20-byte)
     * @type {String}
     * @memberof NftTransfer
     */
    NftTransfer.prototype.to = undefined

    /**
     * @type {Transaction}
     * @memberof NftTransfer
     */
    NftTransfer.prototype.transaction = undefined

    /**
     * Type of transaction detail
     * @type {String}
     * @memberof NftTransfer
     */
    NftTransfer.prototype.transferType = undefined

    /**
     * Token identifier (in hexadecimal)
     * @type {String}
     * @memberof NftTransfer
     */
    NftTransfer.prototype.tokenId = undefined

    return NftTransfer
})
