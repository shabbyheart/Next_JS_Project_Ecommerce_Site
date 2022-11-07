// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
//import { productsData } from "../../../productData"
import { productsData } from "../../../productData/productData"
export default function handler(req, res) {
  res.status(200).json(productsData)
}
