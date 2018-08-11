import React from 'react';
import styled from 'styled-components';
import { Wrapper } from '../Layout';
import ProductInputGroup from '../ProductInputGroup';
import { CLASSIC, STANDOUT, PREMIUM, standardPrices, companyNames, productTypes } from '../../constants';
import { toTitleCase } from '../../utils/misc';

const MainContentWrapper = styled.main`
    padding: 30px;
    background-color: white;
`

const SubTitle = styled.h2`
    font-size: 24px;
`

const Select = styled.select`
    width: 250px;
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

    // _updateQuantity = (productType, quantity) => {
    //     this.setState({company: event.target.value})
    // }

    render() {
        const { quantities } = this.state;

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
                                />
                            ))
                        }
                    </form>
                </MainContentWrapper>
            </Wrapper>
        );
    }

}
