
import * as mongoose from 'mongoose';


const Schema = mongoose.Schema;

export const reatickSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   name: { type: String },
   email: { type: String }
})

const reatickModel = mongoose.model('reatick', reatickSchema, 'reatick');
export default reatickModel;
