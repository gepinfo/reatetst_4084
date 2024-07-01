import { Request, Response } from 'express';
import { reatickService } from '../service/reatickService';
import { CustomLogger } from '../config/Logger'
let reatick = new reatickService();

export class reatickController {
    
    constructor() { }
    
    public Delete(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    reatick.Delete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into reatickController.ts: Delete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from reatickController.ts: Delete');
    })}
public Search(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    reatick.Search(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into reatickController.ts: Search');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from reatickController.ts: Search');
    })}
public SearchForUpdate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    reatick.SearchForUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into reatickController.ts: SearchForUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from reatickController.ts: SearchForUpdate');
    })}
public GetAllValues(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    reatick.GetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into reatickController.ts: GetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from reatickController.ts: GetAllValues');
    })}
public GetNounCreatedBy(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    reatick.GetNounCreatedBy(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into reatickController.ts: GetNounCreatedBy');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from reatickController.ts: GetNounCreatedBy');
    })}


}