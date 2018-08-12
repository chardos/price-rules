import React from 'react';
import styled from 'styled-components';
import Input from '../Input';
import { toTitleCase } from '../../utils/misc';

const ProductInputGroupWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 0;
    border-top: 1px solid #eee;

    @media screen and (max-width: 480px) {
        display: block;
    }
`;

const ProductType = styled.div`
    font-size: 20px;
    flex: 2;

    @media screen and (max-width: 480px) {
        margin-bottom: 5px;
    }
`;

const PriceWrap = styled.div`
    display: flex;
    flex: 3;
    align-items: center;
    justify-content: space-between;
`;

const Price = styled.div`
    font-size: 20px;
    flex: 1;
`;

const QuantityLabel = styled.label`
    margin-right: 5px;
`;

const QuantityInput = Input.extend`
    text-align: center;
    width: 80px;
`;

const ProductInputGroup = ({productType, price, value, onChange}) => (
    <ProductInputGroupWrapper>
        <ProductType>{toTitleCase(productType)}</ProductType>
        <PriceWrap>
            <Price>{price}</Price>
            <QuantityLabel>Qty</QuantityLabel>
            <QuantityInput
                type="number"
                name={productType}
                onChange={onChange}
                value={value}
                min="0"
            />
        </PriceWrap>
    </ProductInputGroupWrapper>
);


export default ProductInputGroup;
