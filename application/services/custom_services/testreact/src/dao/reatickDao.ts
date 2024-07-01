import * as mongoose from 'mongoose';
import reatickModel from '../models/daomodels/reatick';
import * as generate from 'nanoid/generate';
import * as dictionary from 'nanoid-dictionary';
import { CustomLogger } from '../config/Logger'




export class reatickDao {
    private reatick = reatickModel;

    

    constructor() { }
    
    public async Delete(reatickId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into reatickDao.ts: Delete');

    

    
    
    
    this.reatick.findByIdAndRemove(reatickId).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from reatickDao.ts: Delete');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async Search(reatickData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into reatickDao.ts: Search');

    let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;

    
    
    Object.entries(reatickData).forEach(
                            ([key,value]) => {
                                if(value !== ''){
                                    andkey = key;
                                    and_obj[andkey] = value;
                                }
                                else{
                                    orkey = key;
                                    or_obj[orkey] = { $ne: '' }
                                }
                            }
                        );;
    this.reatick.find({$and: [
                            {
                                $or: [
                                   or_obj
                                ]
                            },
                            and_obj
                        ]}).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from reatickDao.ts: Search');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async SearchForUpdate(reatickData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into reatickDao.ts: SearchForUpdate');

    

    
    
    
    this.reatick.findOneAndUpdate({ _id: reatickData._id }, reatickData, { new: true }).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from reatickDao.ts: SearchForUpdate');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GetAllValues(callback){
    
    new CustomLogger().showLogger('info', 'Enter into reatickDao.ts: GetAllValues');

    

    
    
    
    this.reatick.find().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from reatickDao.ts: GetAllValues');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GetNounCreatedBy(reatickData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into reatickDao.ts: GetNounCreatedBy');

    

    
    
    
    this.reatick.aggregate(([
                        { $match: { $and: [{ created_by: reatickData.created_by }] } }
                    ])).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from reatickDao.ts: GetNounCreatedBy');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}


}