import {FiUser} from 'react-icons/fi'
import {Container} from './styles.js'

import { Button } from '../../components/button/index.jsx'
import { Input } from '../../components/input/index.jsx';
export function Home() {
   return (
    <Container>
    <div>PPPPP
    </div>
    <>
      <h1>Hello TUDO BEM</h1>
      <p> teste</p>
      <Input placeholder="Nome"
          type="text"
          icon={FiUser} />

      <Button title="Salvar" />
      <Button /> 
    </>
    </Container>
  );
}
