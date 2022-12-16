import { Card, Col, Grid, Row, Text } from '@nextui-org/react'
import { useRouter } from 'next/router'
import { SmallFuturama } from '../../interfaces'


const FuturamaCard = ({id, name, image, age}: SmallFuturama) => {

  const router = useRouter();

  const goToCharacter = () => {
    router.push(`/character/${id}`);
  }


  return (
    <Grid xs={6} sm={3} md={3} xl={3}>
      <Card
        isHoverable isPressable
        onClick={goToCharacter}
      >
        <Card.Body>
          <Card.Image
            src={image}
            width={120}
            height={150}
            alt={name}
          />
        </Card.Body>
        <Card.Footer>
          <Col >
            <Text transform='capitalize'>{name}</Text>
            <Row justify='space-between'>
              <Text transform='capitalize'>{`Age: ${age}`}</Text>
              <Text transform='capitalize'>#{id}</Text>
            </Row>
          </Col>
        </Card.Footer>
      </Card>
    </Grid>
  )
}

export default FuturamaCard;
