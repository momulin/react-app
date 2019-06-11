// import React from 'react';

// import {configure,shallow,mount} from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';

// import {ListTodo} from './ListTodo';
// import Todoitem from './Todoitem/Todoitem';
// import * as actions from '../../store/actions/index'


// configure({adapter:new Adapter()});

// describe('<ListTodo />',()=>{
//     let wrapper;
//     beforeEach((()=>{
//         wrapper = shallow(<ListTodo />)
//     }))
//     it('should render four <Navgationitem /> elements if not auth', ()=>{
//         wrapper.setProps({onloadnotelist:actions.listnote()});
//         expect(wrapper.find(Todoitem)).toHaveLength(4);
//     });

// });