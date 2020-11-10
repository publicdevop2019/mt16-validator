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
    res.send(clientValidator.validate(req.body, 'rootCreateClientCommandValidator'));
});
router.post('/rootUpdateBizClientCommand', (req: Request, res: Response) => {
    res.send(clientValidator.validate(req.body, 'rootUpdateClientCommandValidator'));
});
router.post('/adminCreateProductCommand', (req: Request, res: Response) => {
    res.send(productValidator.validate(req.body, 'adminCreateProductCommandValidator'));
});
router.post('/adminUpdateProductCommand', (req: Request, res: Response) => {
    res.send(productValidator.validate(req.body, 'adminUpdateProductCommandValidator'));
});
router.post('/adminCreateTagCommand', (req: Request, res: Response) => {
    res.send(tagValidator.validate(req.body, 'adminCreateAttributeCommandValidator'));
});
router.post('/adminUpdateTagCommand', (req: Request, res: Response) => {
    res.send(tagValidator.validate(req.body, 'adminUpdateAttributeCommandValidator'));
});
router.post('/adminCreateCatalogCommand', (req: Request, res: Response) => {
    res.send(catalogValidator.validate(req.body, 'adminCreateCatalogCommandValidator'));
});
router.post('/adminUpdateCatalogCommand', (req: Request, res: Response) => {
    res.send(catalogValidator.validate(req.body, 'adminUpdateCatalogCommandValidator'));
});
router.post('/rootCreateBizEndpointCommand', (req: Request, res: Response) => {
    res.send(endpointValidator.validate(req.body, 'rootCreateEndpointCommandValidator'));
});
router.post('/rootUpdateBizEndpointCommand', (req: Request, res: Response) => {
    res.send(endpointValidator.validate(req.body, 'rootUpdateEndpointCommandValidator'));
});
router.post('/adminCreateFilterCommand', (req: Request, res: Response) => {
    res.send(filterValidator.validate(req.body, 'adminCreateFilterCommandValidator'));
});
router.post('/adminUpdateFilterCommand', (req: Request, res: Response) => {
    res.send(filterValidator.validate(req.body, 'adminUpdateFilterCommandValidator'));
});
router.post('/userUpdatePwdCommand', (req: Request, res: Response) => {
    res.send(userValidator.validate(req.body, 'userUpdatePwdCommandValidator'));
});
router.post('/appCreatePendingUserCommand', (req: Request, res: Response) => {
    res.send(userValidator.validate(req.body, 'appCreatePendingUserCommandValidator'));
});
router.post('/adminUpdateUserCommand', (req: Request, res: Response) => {
    res.send(userValidator.validate(req.body, 'adminUpdateUserCommandValidator'));
});
router.post('/appCreateUserCommand', (req: Request, res: Response) => {
    res.send(userValidator.validate(req.body, 'appCreateUserCommandValidator'));
});
router.post('/appForgetUserPasswordCommand', (req: Request, res: Response) => {
    res.send(userValidator.validate(req.body, 'appForgetUserPasswordCommandValidator'));
});
router.post('/appResetUserPasswordCommand', (req: Request, res: Response) => {
    res.send(userValidator.validate(req.body, 'appResetUserPasswordCommandValidator'));
});
export const Validator: Router = router;