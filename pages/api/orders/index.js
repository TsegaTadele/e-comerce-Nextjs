import Order from '../../../models/Order';
import db from '../../../utils/db';

const handler = async (req, res) => {
  if (!req.body.session) {
    return res.status(401).send('signin required');
  }

  const { user } = req.body.session;
  await db.connect();
  const newOrder = new Order({
    ...req.body.order,
    user: user._id,
  });

  const order = await newOrder.save();
  res.status(201).send(order);
};
export default handler;
