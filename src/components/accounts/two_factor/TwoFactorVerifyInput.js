import React from 'react';
import styled from 'styled-components';
import { Translate } from 'react-localize-redux';

const Container = styled.div`
    max-width: 350px;
    width: 100%;
    margin: 40px 0;

    .color-black {
        font-weight: 500;
    }

    div {
        :last-of-type {
            font-weight: 300;
            margin-top: 10px;

            span {
                font-weigth: 400;
                cursor: pointer;

                &:hover {
                    text-decoration: underline;
                }
            }
        }
    }
`

const TwoFactorVerifyInput = ({
    onChange,
    onResend,
    code,
    account,
}) => {

    return (
        <Container>
            <div className='color-black font-bw'><Translate id='twoFactor.verify.inputLabel'/></div>
            <Translate>
                {({ translate }) => (
                    <>
                        <input
                            type='number'
                            pattern='[0-9]*'
                            inputMode='numeric'
                            placeholder={translate('setRecoveryConfirm.inputPlaceholder')}
                            aria-label={translate('setRecoveryConfirm.inputPlaceholder')}
                            value={code}
                            onChange={e => onChange(e.target.value)}
                            autoFocus={true}
                        />
                        {account.requestStatus && account.requestStatus.messageCode === 'account.verifyTwoFactor.error' && code.length > 0 &&
                            <div style={{color: '#ff585d', marginTop: '5px'}}>
                                {translate('setRecoveryConfirm.invalidCode')}
                            </div>
                        }
                    </>
                )}
            </Translate>
            <div onClick={onResend}><Translate id='twoFactor.verify.didntReceive'/> <span className='color-blue'><Translate id='twoFactor.verify.resend'/></span></div>
        </Container>
    )
}

export default TwoFactorVerifyInput;