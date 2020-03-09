import styled, { css } from 'styled-components'

export const TransactionCellListTitlePanel = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 750px) {
    display: none;
  }

  .transaction__cell_list_titles {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 20px;
    font-weight: 500;
    color: #000000;

    > div {
      height: 24px;
    }

    >div: nth-child(1) {
      flex: 0.34;
    }

    >div: nth-child(2) {
      flex: 0.26;
      display: flex;
      justify-content: flex-end;
      padding-right: 100px;

      @media (max-width: 1440px) {
        padding-right: 40px;
      }

      @media (max-width: 1000px) {
        padding-right: 20px;
      }
    }

    >div: nth-child(3) {
      flex: 0.4;
    }
  }

  &:after {
    content: '';
    background: #e2e2e2;
    height: 1px;
    margin-top: 20px;
    transform: ${() => `scaleY(${Math.ceil((1.0 / window.devicePixelRatio) * 10.0) / 10.0})`};
  }
`

export const TransactionCellListPanel = styled.div`
  width: 100%;

  @media (min-width: 750px) {
    border-radius: 6px;
    box-shadow: 2px 2px 6px 0 #dfdfdf;
    background-color: #ffffff;
    padding: 20px 20px 20px 40px;
  }
`

export const TransactionCellsPanel = styled.div`
  ${(props: { isScroll: boolean }) =>
    props.isScroll &&
    css`
      padding-top: 10px;

      .transaction__cell_list_container {
        max-height: 600px;
        overflow-y: scroll;

        @media (min-width: 750px) {
          max-height: 400px;
        }
      }
    `};
`
