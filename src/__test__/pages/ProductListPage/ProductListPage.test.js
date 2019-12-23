import React from 'react'
import ProductListPage from '../../../pages/ProductListPage/ProductListPage'
import { shallow } from 'enzyme';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('component should initial', () => {
  let store;
  let wrapper;
  let props = {
    products: [{
      id:1,
      name: 'Iphone A',
      price: 1000,
      status: true
    }]
  }
  let products=[{
    id:1,
    name: 'Iphone A',
    price: 1000,
    status: true
  }]
  beforeEach( () => {
    store = mockStore({products: []});
    wrapper = shallow(<ProductListPage products={products} store={store}/>);
  })
  it('should ', () => {
    
    expect(wrapper.length).toBe(1);
    console.log(wrapper.html())
  });
  
});