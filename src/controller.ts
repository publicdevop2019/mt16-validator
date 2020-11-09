import { Request, Response, Router } from 'express';
import { IBizAttribute } from './validation/aggregate/attribute/interfaze-attribute';
import { AttributeValidator } from './validation/aggregate/attribute/validator-attribute';
import { ICatalog } from './validation/aggregate/catalog/interfaze-catalog';
import { CatalogValidator } from './validation/aggregate/catalog/validator-catalog';
import { IClient } from './validation/aggregate/client/interfaze-client';
import { ClientValidator } from './validation/aggregate/client/validator-client';
import { IEndpoint } from './validation/aggregate/endpoint/interfaze-endpoint';
import { EndpointValidator } from './validation/aggregate/endpoint/validator-endpoint';
import { IBizFilter } from './validation/aggregate/filter/interfaze-filter';
import { FilterValidator } from './validation/aggregate/filter/validator-filter';
import { IProductDetail } from './validation/aggregate/product/interfaze-product';
import { ProductValidator } from './validation/aggregate/product/validator-product';
import { UserValidator } from './validation/aggregate/user/validator-user';
const router: Router = Router();
const clientValidator = new ClientValidator('SERVER')
const productValidator = new ProductValidator(undefined, 'SERVER')
const tagValidator = new AttributeValidator('SERVER')
const catalogValidator = new CatalogValidator('SERVER')
const endpointValidator = new EndpointValidator('SERVER')
const filterValidator = new FilterValidator('SERVER')
const userValidator = new UserValidator('SERVER')
router.post('/rootCreateBizClientCommand', (req: Request, res: Response) => {
    res.send(clientValidator.validate(req.body, 'CREATE'));
});
router.post('/rootUpdateBizClientCommand', (req: Request, res: Response) => {
    res.send(clientValidator.validate(req.body, 'UPDATE'));
});
router.post('/adminCreateProductCommand', (req: Request, res: Response) => {
    res.send(productValidator.validate(req.body, 'CREATE'));
});
router.post('/adminUpdateProductCommand', (req: Request, res: Response) => {
    res.send(productValidator.validate(req.body, 'UPDATE'));
});
router.post('/adminCreateTagCommand', (req: Request, res: Response) => {
    res.send(tagValidator.validate(req.body, 'CREATE'));
});
router.post('/adminUpdateTagCommand', (req: Request, res: Response) => {
    res.send(tagValidator.validate(req.body, 'UPDATE'));
});
router.post('/adminCreateCatalogCommand', (req: Request, res: Response) => {
    res.send(catalogValidator.validate(req.body, 'CREATE'));
});
router.post('/adminUpdateCatalogCommand', (req: Request, res: Response) => {
    res.send(catalogValidator.validate(req.body, 'UPDATE'));
});
router.post('/rootCreateBizEndpointCommand', (req: Request, res: Response) => {
    res.send(endpointValidator.validate(req.body, 'CREATE'));
});
router.post('/rootUpdateBizEndpointCommand', (req: Request, res: Response) => {
    res.send(endpointValidator.validate(req.body, 'UPDATE'));
});
router.post('/adminCreateFilterCommand', (req: Request, res: Response) => {
    res.send(filterValidator.validate(req.body, 'CREATE'));
});
router.post('/adminUpdateFilterCommand', (req: Request, res: Response) => {
    res.send(filterValidator.validate(req.body, 'UPDATE'));
});
router.post('/userUpdatePwdCommand', (req: Request, res: Response) => {
    res.send(userValidator.validate(req.body, 'UPDATE'));
});
router.post('/appCreatePendingUserCommand', (req: Request, res: Response) => {
    res.send(userValidator.validateCreatePending(req.body));
});
router.post('/adminUpdateUserCommand', (req: Request, res: Response) => {
    res.send(userValidator.validateAdminUpdate(req.body));
});
router.post('/appCreateUserCommand', (req: Request, res: Response) => {
    res.send(userValidator.validateCreateUser(req.body));
});
router.post('/appForgetUserPasswordCommand', (req: Request, res: Response) => {
    res.send(userValidator.validateForgetPwd(req.body));
});
router.post('/appResetUserPasswordCommand', (req: Request, res: Response) => {
    res.send(userValidator.validateResetPwd(req.body));
});
export const Validator: Router = router;