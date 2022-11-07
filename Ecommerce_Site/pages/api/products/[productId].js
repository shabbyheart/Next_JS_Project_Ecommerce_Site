// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
//import {productsData} from "../../../productData"
import { productsData } from "../../../productData/productData";
export default function handler(req, res) {
  const {productId} = req.query;
  const product = productsData.find((p) => p.id === parseInt(productId));
  res.status(200).json(product);
}

