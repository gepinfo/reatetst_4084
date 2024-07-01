import { Request, Response, NextFunction } from "express";
import { reatickController } from '../controller/reatickController';


export class Routes {
    private reatick: reatickController = new reatickController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/reatick/:id').delete(this.reatick.Delete);
app.route('/reatick/get/search').get(this.reatick.Search);
app.route('/reatick/get/update').put(this.reatick.SearchForUpdate);
app.route('/reatick').get(this.reatick.GetAllValues);
app.route('/reatick/userid/created_by').get(this.reatick.GetNounCreatedBy);
     }

}