import styled from 'styled-components';
import React from 'react';

import { CLASSIC, STANDOUT, PREMIUM, standardPrices, companyNames, productTypes, colors } from '../../constants';
import calculatePrices from '../../utils/calculate-prices';
import ProductInputGroup from '../ProductInputGroup';
import { toTitleCase, displayPrice } from '../../utils/misc';
import { Wrapper } from '../Layout';

const MainContentWrapper = styled.main`
    padding: 30px;
    background-color: white;
`

const SubTitle = styled.h2`
    font-size: 24px;
    margin-top: 30px;

    &:first-child {
        margin-top: 0;
    }
`

const Select = styled.select`
    width: 250px;
`

const Total = styled.div`
    font-size: 36px;
    margin-bottom: 10px;
`
const TotalDiscount = styled.div`
    font-size: 18px;
    color: ${colors.PINK};
`

export default class MainContent extends React.Component {
    state = {
        company: 'unilever',
        quantities: {
            [CLASSIC]: 0,
            [STANDOUT]: 0,
            [PREMIUM]: 0
        }
    }

    _updateCompany = (event) => {
        this.setState({company: event.target.value})
    }

    _updateQuantity = (event) => {
        const {name, value} = event.target;
        const quantities = {
            ...this.state.quantities,
            [name]: parseInt(value)
        };
        this.setState({quantities});
    }

    render() {
        const { company, quantities } = this.state;
        const {total, totalDiscount} = calculatePrices(company, quantities);

        return (
            <Wrapper maxWidth={600}>
                <MainContentWrapper>
                    <form>
                        <SubTitle>Company</SubTitle>
                        <Select name="company" onChange={this._updateCompany}>
                            {companyNames.map(companyName =>
                                <option key={companyName} value={companyName}>
                                    {toTitleCase(companyName)}
                                </option>
                            )}
                        </Select>

                        <SubTitle>Ads</SubTitle>
                        {
                            productTypes.map(productType => (
                                <ProductInputGroup
                                    productType={productType}
                                    price={standardPrices[productType]}
                                    value={quantities[productType]}
                                    onChange={this._updateQuantity}
                                />
                            ))
                        }

                        <SubTitle>Total</SubTitle>
                        <Total>
                            {displayPrice(total)}
                        </Total>
                        {(totalDiscount !== 0) && <TotalDiscount>
                                Discount: {displayPrice(totalDiscount)}
                        </TotalDiscount>}
                    </form>
                </MainContentWrapper>
            </Wrapper>
        );
    }

}
