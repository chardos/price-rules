import React from 'react';
import styled from 'styled-components';
import { Wrapper } from '../Layout';
import ProductInputGroup from '../ProductInputGroup';
import { CLASSIC, STANDOUT, PREMIUM, companyNames } from '../../constants';
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

const MainContent = () => (
    <Wrapper maxWidth={600}>
        <MainContentWrapper>
            <form>
                <SubTitle>Company</SubTitle>
                <Select name="company">
                    {
                        companyNames.map(companyName =>
                            <option key={companyName} value={companyName}>
                                {toTitleCase(companyName)}
                            </option>
                        )
                    }
                </Select>

                <SubTitle>Ads</SubTitle>
                <ProductInputGroup productType={CLASSIC} price={269.99} />
                <ProductInputGroup productType={STANDOUT} price={269.99} />
                <ProductInputGroup productType={PREMIUM} price={269.99} />

            </form>
        </MainContentWrapper>
    </Wrapper>
)


export default MainContent;
