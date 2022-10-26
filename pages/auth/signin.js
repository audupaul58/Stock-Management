import { getProviders, signIn } from "next-auth/react"
import {Container, Button} from 'react-bootstrap';
import styles from '../../styles/signin.module.scss'
import {FaGoogle} from 'react-icons/fa'


export default function SignIn({ providers }) {
  return (
    <Container className={styles.mainCon}>
      
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
            <h4>Happy You are Heere</h4>
          <Button onClick={() => signIn(provider.id)}>
            Sign in with {provider.name}<FaGoogle/>
          </Button>
        </div>
      ))}
    </Container>
  )
}

export async function getServerSideProps(context) {
  const providers = await getProviders()
  return {
    props: { providers },
  }
}