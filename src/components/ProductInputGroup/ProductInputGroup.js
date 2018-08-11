import React from 'react';
import styled from 'styled-components';
import Input from '../Input';
import { Wrapper } from '../Layout';
import { toTitleCase } from '../../utils/misc';

const ProductInputGroupWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 0;
    border-top: 1px solid #eee;
`

const ProductType = styled.div`
    font-size: 20px;
    flex: 1;
`

const Price = styled.div`
    font-size: 20px;
    flex: 1;
`

const QuantityLabel = styled.label`
    margin-right: 5px;
`

const QuantityInput = Input.extend`
    text-align: center;
    width: 50px;
`

const ProductInputGroup = (props) => (
    <ProductInputGroupWrapper>
        <ProductType>{toTitleCase(props.productType)}</ProductType>
        <Price>{props.price}</Price>
        <QuantityLabel>Qty</QuantityLabel>
        <QuantityInput
            type="number"
            name={props.productType}
            onChange={props.onChange}
            value={props.value}
            min="0"
        />
    </ProductInputGroupWrapper>
)


export default ProductInputGroup;
