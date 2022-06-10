import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Lottie from 'lottie-react';
import animationData from '../Animations/108078-worm-loader.json'
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import withReactContent from "sweetalert2-react-content";

function FormBuy() {
  const [loading, setLoading] = useState(false);
  const MySwal = withReactContent(Swal)

  const handleBuy = () => {
    MySwal.fire({
      html: <i>Gracias por tu compra!</i>,
      icon: 'success',
      background: '#F8F9FA',
      color: '#000',
      width: '300px',
      padding: '25px',
      confirmButtonColor: '0b5ed7',
      heightAuto: 'false',
    })
    console.log(loading);
    setTimeout(() => {
      setLoading(true);
    }
    , 2000);
  }
  useEffect(() => {

    
  }
  , [loading]);
  if(loading){
    return (
     
        <Lottie
          animationData={animationData}
          />
     
    )

  }
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" required={true} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Type card number</Form.Label>
        <Form.Control type="password" placeholder="Password" required={true}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Recordar mis datos" />
      </Form.Group>
      <Button variant="primary" onClick={handleBuy}>
        Son mias!
      </Button>
    </Form>
  );
}

export default FormBuy;