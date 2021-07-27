import Dexie from "dexie";
import { StringLiteralType } from "typescript";

export interface MemoRecord{
    datetime:string
    title:string
    text:string
}

const database = new Dexie('markdown-editor')
database.version(1).stores({momos:'&datetime'})
const memos:Dexie.Table<MemoRecord,string>=database.table('memos')

export const putMemo = async(title:string, text:string):Promise<void>=> {
    const datetime=new Date().toISOString()
    await memos.put({datetime, title,text})
}