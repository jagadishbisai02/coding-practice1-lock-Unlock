// Write your code here
import {useState} from 'react'
import {Containers, LockImage, Text, Button, Content} from './styledComponents'

const Unlock = () => {
  const [lock, setLock] = useState(true)

  const clickBtn = () => {
    setLock(prev => !prev)
  }

  return (
    <>
      <Containers>
        <Content>
          <LockImage
            src={
              lock
                ? 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
                : 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
            }
            alt={lock ? 'lock' : 'unlock'}
          />
          <Text>
            {lock ? 'Your Device is Locked' : 'Your Device is Unlocked'}
          </Text>
        </Content>

        <Button onClick={clickBtn}>{lock ? 'Unlock' : 'lock'}</Button>
      </Containers>
    </>
  )
}

export default Unlock
