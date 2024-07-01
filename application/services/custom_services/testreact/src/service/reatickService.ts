import { Request, Response } from 'express';
import {reatickDao} from '../dao/reatickDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';











let reatick = new reatickDao();

export class reatickService {
    
    constructor() { }
    
    public  Delete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into reatickService.ts: Delete')
     let  reatickId = req.params.id;
     reatick.Delete(reatickId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from reatickService.ts: Delete')
             
             
            callback(response);

         });
    }
    
public  Search(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into reatickService.ts: Search')
     let  reatickData = req.query;
     reatick.Search(reatickData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from reatickService.ts: Search')
             
             
            callback(response);

         });
    }
    
public  SearchForUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into reatickService.ts: SearchForUpdate')
     let  reatickData = req.body;
     reatick.SearchForUpdate(reatickData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from reatickService.ts: SearchForUpdate')
             
             
            callback(response);

         });
    }
    
public  GetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into reatickService.ts: GetAllValues')
     
     reatick.GetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from reatickService.ts: GetAllValues')
             
             
            callback(response);

         });
    }
    
public  GetNounCreatedBy(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into reatickService.ts: GetNounCreatedBy')
     let  reatickData = { created_by: req.query.createdby };
     reatick.GetNounCreatedBy(reatickData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from reatickService.ts: GetNounCreatedBy')
             
             
            callback(response);

         });
    }
    
    
    
    
}