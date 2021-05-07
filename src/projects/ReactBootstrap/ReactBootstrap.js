import React from 'react'
import {
	Button,
	Alert,
	Container,
	Row,
	Col,
	Breadcrumb,
	Card,
	Form,
} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'

const ReactBootstrap = () => {
	return (
		<Container>
			<Breadcrumb>
				<Breadcrumb.Item> Test 1 </Breadcrumb.Item>
				<Breadcrumb.Item> Test 2</Breadcrumb.Item>
				<Breadcrumb.Item active> Test 3</Breadcrumb.Item>
			</Breadcrumb>
			<Button>Button</Button>
			<Alert variant='primary'>This is our alert</Alert>

			<Card className='mb-3'>
				<Card.Img />
				<Card.Body>
					<Card.Title>Card Example</Card.Title>
					<Card.Text>This is an example of React bootstrap.</Card.Text>
					<Button variant='primary'>Button</Button>
				</Card.Body>
			</Card>

			<Form>
				<Row>
					<Col md>
						<Form.Group contolId='formEmal'>
							<Form.Label>Email Address</Form.Label>
							<Form.Control type='email' placeholder='Email address' />
							<Form.Text className='text-muted'>
								We'll never share your email address, trust us!
							</Form.Text>
						</Form.Group>
					</Col>

					<Col md>
						<Form.Group contolId='formPassword'>
							<Form.Label>Password</Form.Label>
							<Form.Control type='password' placeholder='Password' />
						</Form.Group>
					</Col>
				</Row>

				<Button variant='primary'>Login</Button>
			</Form>
		</Container>
	)
}

export default ReactBootstrap
