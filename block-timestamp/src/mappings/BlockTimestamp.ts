import {BlockTimestamp} from '../types/models/BlockTimestamp';
import {SubstrateExtrinsic} from "@subql/types";
import {Compact} from '@polkadot/types';
import {Moment} from '@polkadot/types/interfaces';

export async function handleTimestampSet(extrinsic: SubstrateExtrinsic): Promise<void> {
    const blockHash = extrinsic.block.block.header.hash.toString();
    const blockHeight = extrinsic.block.block.header.number.toBigInt();
    const moment = extrinsic.extrinsic.args[0] as Compact<Moment>;
    console.log(`scanning new block, ID: ${blockHash}, Height: ${blockHeight}, Moment: ${moment}`);
    const record = new BlockTimestamp(blockHash);
    record.blockHeight = blockHeight;
    record.timestamp = new Date(moment.toNumber());
    await record.save();
}
