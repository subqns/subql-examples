// Copyright 2020-2021 OnFinality Limited authors & contributors
// SPDX-License-Identifier: Apache-2.0

// Auto-generated , DO NOT EDIT
import {Entity} from "@subql/types";
import assert from 'assert';

export class BlockTimestamp implements Entity {

    constructor(id: string) {
        this.id = id;
    }


    public id: string;

    public blockHeight: bigint;

    public timestamp: Date;


    async save(): Promise<void>{
        let id = this.id;
        assert(id !== null, "Cannot save BlockTimestamp entity without an ID");
        await store.set('BlockTimestamp', id.toString(), this);
    }
    static async remove(id:string): Promise<void>{
        assert(id !== null, "Cannot remove BlockTimestamp entity without an ID");
        await store.remove('BlockTimestamp', id.toString());
    }

    static async get(id:string): Promise<BlockTimestamp>{
        assert(id !== null, "Cannot get BlockTimestamp entity without an ID");
        const record = await store.get('BlockTimestamp', id.toString());
        if (record){
            return BlockTimestamp.create(record);
        }else{
            return;
        }
    }

    static create(record){
        let entity = new BlockTimestamp(record.id);
        Object.assign(entity,record);
        return entity;
    }
}
