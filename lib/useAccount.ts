import { useState } from 'react'

import Account from 'src/models/Account'
import createAccount from 'lib/createAccount'

import getUpdatedAccount from './getUpdatedAccount'

const initialAccountValue = createAccount()

const useAccount = (): [Account, () => Promise<void>] => {
  const [account, setAccount] = useState<Account>(initialAccountValue)
  const refreshAccount = async () => {
    try {
      return setAccount(await getUpdatedAccount(account))
    } catch (e) {
      if (e.message === 'Unexpected error') {
        console.error(e)
        alert(`Failed to refresh agenda: ${e.message}`)
      } else {
        throw e
      }
    }
  }

  return [account, refreshAccount]
}

export default useAccount
