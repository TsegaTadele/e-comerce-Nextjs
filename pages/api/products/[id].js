import Product from '../../../models/Product';
import db from '../../../utils/db';
import mongoose from 'mongoose';

const handler = async (req, res) => {
  //add this line as a check to validate if object id exists in the database or not
  if (!mongoose.Types.ObjectId.isValid(req.query.id))
    return res.status(404).json({ msg: `Invalid product id :${req.query.id}` });
  await db.connect();
  const product = await Product.findById(req.query.id);
  await db.disconnect();
  res.send(product);
};

export default handler;
