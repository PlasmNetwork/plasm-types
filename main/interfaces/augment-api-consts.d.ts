import type { u32, u64 } from '@polkadot/types';
import type { Gas } from '@polkadot/types/interfaces/contracts';
import type { Balance, BalanceOf, BlockNumber, Moment } from '@polkadot/types/interfaces/runtime';
import type { SessionIndex } from '@polkadot/types/interfaces/session';
import type { ApiTypes } from '@polkadot/api/types';
declare module '@polkadot/api/types/consts' {
    interface AugmentedConsts<ApiType> {
        babe: {
            /**
             * The number of **slots** that an epoch takes. We couple sessions to
             * epochs, i.e. we start a new session once the new epoch begins.
             **/
            epochDuration: u64 & AugmentedConst<ApiType>;
            /**
             * The expected average block time at which BABE should be creating
             * blocks. Since BABE is probabilistic it is not trivial to figure out
             * what the expected average block time should be based on the slot
             * duration and the security parameter `c` (where `1 - c` represents
             * the probability of a slot being empty).
             **/
            expectedBlockTime: Moment & AugmentedConst<ApiType>;
        };
        balances: {
            /**
             * The minimum amount required to keep an account open.
             **/
            existentialDeposit: Balance & AugmentedConst<ApiType>;
        };
        contracts: {
            /**
             * The maximum amount of gas that could be expended per block. A reasonable
             * default value is 10_000_000.
             **/
            blockGasLimit: Gas & AugmentedConst<ApiType>;
            /**
             * The base fee charged for calling into a contract. A reasonable default
             * value is 135.
             **/
            callBaseFee: Gas & AugmentedConst<ApiType>;
            /**
             * The fee required to instantiate a contract instance. A reasonable default value
             * is 21.
             **/
            contractFee: BalanceOf & AugmentedConst<ApiType>;
            /**
             * The base fee charged for instantiating a contract. A reasonable default value
             * is 175.
             **/
            instantiateBaseFee: Gas & AugmentedConst<ApiType>;
            /**
             * The maximum nesting level of a call/instantiate stack. A reasonable default
             * value is 100.
             **/
            maxDepth: u32 & AugmentedConst<ApiType>;
            /**
             * The maximum size of a storage value in bytes. A reasonable default is 16 KiB.
             **/
            maxValueSize: u32 & AugmentedConst<ApiType>;
            /**
             * Price of a byte of storage per one block interval. Should be greater than 0.
             **/
            rentByteFee: BalanceOf & AugmentedConst<ApiType>;
            /**
             * The amount of funds a contract should deposit in order to offset
             * the cost of one byte.
             *
             * Let's suppose the deposit is 1,000 BU (balance units)/byte and the rent is 1 BU/byte/day,
             * then a contract with 1,000,000 BU that uses 1,000 bytes of storage would pay no rent.
             * But if the balance reduced to 500,000 BU and the storage stayed the same at 1,000,
             * then it would pay 500 BU/day.
             **/
            rentDepositOffset: BalanceOf & AugmentedConst<ApiType>;
            /**
             * Number of block delay an extrinsic claim surcharge has.
             *
             * When claim surcharge is called by an extrinsic the rent is checked
             * for current_block - delay
             **/
            signedClaimHandicap: BlockNumber & AugmentedConst<ApiType>;
            /**
             * Size of a contract at the time of instantiation. This is a simple way to ensure that
             * empty contracts eventually gets deleted.
             **/
            storageSizeOffset: u32 & AugmentedConst<ApiType>;
            /**
             * Reward that is received by the party whose touch has led
             * to removal of a contract.
             **/
            surchargeReward: BalanceOf & AugmentedConst<ApiType>;
            /**
             * The minimum amount required to generate a tombstone.
             **/
            tombstoneDeposit: BalanceOf & AugmentedConst<ApiType>;
            /**
             * The fee to be paid for making a transaction; the base.
             **/
            transactionBaseFee: BalanceOf & AugmentedConst<ApiType>;
            /**
             * The fee to be paid for making a transaction; the per-byte portion.
             **/
            transactionByteFee: BalanceOf & AugmentedConst<ApiType>;
        };
        finalityTracker: {
            /**
             * The delay after which point things become suspicious. Default is 1000.
             **/
            reportLatency: BlockNumber & AugmentedConst<ApiType>;
            /**
             * The number of recent samples to keep from this chain. Default is 101.
             **/
            windowSize: BlockNumber & AugmentedConst<ApiType>;
        };
        plasmRewards: {
            /**
             * Number of sessions per era.
             **/
            sessionsPerEra: SessionIndex & AugmentedConst<ApiType>;
        };
        timestamp: {
            /**
             * The minimum period between blocks. Beware that this is different to the *expected* period
             * that the block production apparatus provides. Your chosen consensus system will generally
             * work with this to determine a sensible block time. e.g. For Aura, it will be double this
             * period on default settings.
             **/
            minimumPeriod: Moment & AugmentedConst<ApiType>;
        };
        transactionPayment: {
            /**
             * The fee to be paid for making a transaction; the base.
             **/
            transactionBaseFee: BalanceOf & AugmentedConst<ApiType>;
            /**
             * The fee to be paid for making a transaction; the per-byte portion.
             **/
            transactionByteFee: BalanceOf & AugmentedConst<ApiType>;
        };
    }
    interface QueryableConsts<ApiType extends ApiTypes> extends AugmentedConsts<ApiType> {
    }
}