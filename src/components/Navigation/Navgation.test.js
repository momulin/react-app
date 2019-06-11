import React from 'react';
import {configure,shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Navgation from './Navgation';
import Navgationitem from './Navigationitem/Navgationitem';
configure({adapter:new Adapter()});

describe('<Navgation />',()=>{
    let wrapper;
    beforeEach((()=>{
        wrapper = shallow(<Navgation />)
    }))
    it('should render four <Navgationitem /> elements if not auth', ()=>{
        expect(wrapper.find(Navgationitem)).toHaveLength(4);
    });

    it('should render three <Navgationitem /> elements if auth', ()=>{
        wrapper.setProps({isAuth:true});
        expect(wrapper.find(Navgationitem)).toHaveLength(3);
    });
});