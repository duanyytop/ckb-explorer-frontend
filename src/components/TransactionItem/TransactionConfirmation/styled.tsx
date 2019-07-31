import styled from 'styled-components'

export const TransactiomConfirmationPanel = styled.div`
  width: 100%;

  .transaction__confirmation_content {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;
    font-weight: 500;

    @media (max-width: 700px) {
      flex-direction: column;
    }

    .transaction__confirmation {
      flex: 1;
      padding-right: 20px;
      @media (max-width: 700px) {
        padding: 0px;
      }
    }
    .transaction__capacity {
      flex: 1;
      padding-left: 20px;

      @media (max-width: 700px) {
        padding: 0px;
        margin-top: 10px;
      }
    }
  }

  &:before {
    content: '';
    background: #e2e2e2;
    height: 1px;
    width: 100%;
    display: block;
    margin: 20px 0px 25px 0px;

    @media (max-width: 700px) {
      font-weight: normal;
      margin: 15px 0px 15px 0px;
    }
    transform: ${() => `scaleY(${Math.ceil((1.0 / window.devicePixelRatio) * 10.0) / 10.0})`};
  }
`

export const TransactionConfirmationValuePanel = styled.div`
  min-width: 280px;
  height: 40px;
  background: white;
  display: flex;
  color: #000000;
  border: 20px solid #f7f7f7;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  float: right;
  position: relative;

  > span {
    position: absolute;
    width: 100%;
    height: 20px;
    bottom: -10px;
    padding: 0px 10px 0px 10px;
  }

  @media (max-width: 700px) {
    min-width: 190px;
    height: 32px;
    border: 16px solid #f7f7f7;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;

    > span {
      height: 16px;
      bottom: -7px;
    }
  }
`

export const TransactionCapacityValuePanel = styled(TransactionConfirmationValuePanel)`
  float: left;
  color: #ffffff;
  border: 20px solid ${(props: { increased: boolean }) => (props.increased ? '#3cc68a' : '#ff5757')};
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;

  @media (max-width: 700px) {
    border: 16px solid ${(props: { increased: boolean }) => (props.increased ? '#3cc68a' : '#ff5757')};
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
  }
`
