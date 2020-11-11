//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

//import server to bring in everything together
import server from "../../../../app";

//bring in dev-dependencies
import {expect} from 'chai';
import {describe, it} from 'mocha';

import env from '../../../config/environment'
import {shoppingListService} from "../../../services"
import {shoppingListRepository} from '../../../repository'

describe ('SHOPPINGLIST SERVICE', () => {
    
    describe('#remove-product-from-shopping-list', () => {
        
        it('can remove an existing product', () => {
            
        });
    });
});