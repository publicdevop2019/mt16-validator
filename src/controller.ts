import { Request, Response, Router } from 'express';
import { IClient } from './validation/interfaze-client';
import { IProductDetail } from './validation/interfaze-product';
import { ClientValidator } from './validation/validator-client';
import { ProductValidator } from './validation/validator-product';
const router: Router = Router();
const clientValidator=new ClientValidator('SERVER')
const productValidator=new ProductValidator(undefined,'SERVER')
router.post('/rootCreateBizClient', (req: Request, res: Response) => {
    res.send(clientValidator.validate(req.body as IClient,'CREATE'));
});
router.post('/rootUpdateBizClient', (req: Request, res: Response) => {
    res.send(clientValidator.validate(req.body as IClient,'UPDATE'));
});
router.post('/adminCreateProduct', (req: Request, res: Response) => {
    res.send(productValidator.validate(req.body as IProductDetail,'CREATE'));
});
router.post('/adminUpdateProduct', (req: Request, res: Response) => {
    res.send(productValidator.validate(req.body as IProductDetail,'UPDATE'));
});
export const Validator: Router = router;