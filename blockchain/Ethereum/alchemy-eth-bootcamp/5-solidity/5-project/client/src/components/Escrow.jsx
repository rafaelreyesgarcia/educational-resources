import React from 'react'

const Escrow = ({
  address,
  arbiter,
  beneficiary,
  value,
  handleApprove,
  isComplete,
}) => {

  return (
    <div className='existing-contract'>
      <ul className='fields'>
        <li>
          <div>Contract Address</div>
          <div>{address}</div>
        </li>
        <li>
          <div>Arbiter</div>
          <div>{arbiter}</div>
        </li>
        <li>
          <div>Beneficiary</div>
          <div>{beneficiary}</div>
        </li>
        <li>
          <div>Value</div>
          <div>{value}</div>
        </li>
        <button
          className='button'
          onClick={handleApprove}
        >
          Approve
        </button>
        {isComplete && (
          <>
            <div className='complete'>
              it's been approved! ✅
            </div>
          </>
        )}

      </ul>

    </div>
  )
}

export default Escrow