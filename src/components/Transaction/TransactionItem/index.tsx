import React from 'react'
import { Link } from 'react-router-dom'
import InputOutputIcon from '../../../assets/input_arrow_output.png'
import { Transaction } from '../../../http/response/Transaction'
import { parseDate } from '../../../utils/date'
import { handleCapacityChange } from '../../../utils/util'
import PaginationList from '../PaginationList'
import TransactionCell from '../TransactionCell'
import TransactionConfirmation from '../TransactionConfirmation'
import TransactionReward from '../TransactionReward'
import {
  FullPanel,
  SeparationLine,
  TransactionHashBlockPanel,
  TransactionInputOutputPanel,
  TransactionsItem,
} from './styled'

const MAX_CELL_SHOW_SIZE = 10

const TransactionItem = ({
  transaction,
  address,
  confirmation,
  isBlock = false,
}: {
  transaction: Transaction
  address?: string
  confirmation: number
  isBlock?: boolean
}) => {
  return (
    <TransactionsItem>
      <div>
        <TransactionHashBlockPanel>
          <Link to={`/transaction/${transaction.transaction_hash}`}>
            <code className="hash">{transaction.transaction_hash}</code>
          </Link>
          {!isBlock && (
            <div className="block">
              {`(Block ${transaction.block_number})  ${parseDate(transaction.block_timestamp)}`}
            </div>
          )}
        </TransactionHashBlockPanel>
        <SeparationLine marginTop="30px" />
        <TransactionInputOutputPanel>
          <div className="input">
            <PaginationList
              data={transaction.display_inputs}
              pageSize={MAX_CELL_SHOW_SIZE}
              render={item => {
                return <TransactionCell cell={item} blockNumber={transaction.block_number} address={address} />
              }}
            />
          </div>
          <img src={InputOutputIcon} alt="input and output" />
          <div className="output">
            <PaginationList
              data={transaction.display_outputs}
              pageSize={MAX_CELL_SHOW_SIZE}
              render={item => (
                <FullPanel>
                  <TransactionCell cell={item} blockNumber={transaction.block_number} address={address} />
                  <TransactionReward transaction={transaction} cell={item} />
                </FullPanel>
              )}
            />
            {address && <SeparationLine marginTop="10px" marginBottom="20px" />}
            {address && (
              <TransactionConfirmation
                confirmation={confirmation}
                capacity={handleCapacityChange(transaction, address)}
              />
            )}
          </div>
        </TransactionInputOutputPanel>
      </div>
    </TransactionsItem>
  )
}

export default TransactionItem
