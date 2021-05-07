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
import styled from 'styled-components'

const ReactBootstrap = () => {
	return (
		// <Container>
		// 	<Breadcrumb>
		// 		<Breadcrumb.Item> Test 1 </Breadcrumb.Item>
		// 		<Breadcrumb.Item> Test 2</Breadcrumb.Item>
		// 		<Breadcrumb.Item active> Test 3</Breadcrumb.Item>
		// 	</Breadcrumb>
		// 	<Button>Button</Button>
		// 	<Alert variant='primary'>This is our alert</Alert>

		// 	<Card className='mb-3'>
		// 		<Card.Img />
		// 		<Card.Body>
		// 			<Card.Title>Card Example</Card.Title>
		// 			<Card.Text>This is an example of React bootstrap.</Card.Text>
		// 			<Button variant='primary'>Button</Button>
		// 		</Card.Body>
		// 	</Card>

		// 	<Form>
		// 		<Row>
		// 			<Col md>
		// 				<Form.Group contolId='formEmal'>
		// 					<Form.Label>Email Address</Form.Label>
		// 					<Form.Control type='email' placeholder='Email address' />
		// 					<Form.Text className='text-muted'>
		// 						We'll never share your email address, trust us!
		// 					</Form.Text>
		// 				</Form.Group>
		// 			</Col>

		// 			<Col md>
		// 				<Form.Group contolId='formPassword'>
		// 					<Form.Label>Password</Form.Label>
		// 					<Form.Control type='password' placeholder='Password' />
		// 				</Form.Group>
		// 			</Col>
		// 		</Row>

		// 		<Button variant='primary'>Login</Button>
		// 	</Form>
		// </Container>

		<Styled>
			<Container className='mt-5'>
				<Row className='row mt-5'>
					<Col>
						<center className='bg-dark text-white'>Row 1 column 1</center>
					</Col>
					<Col>
						<center className='bg-dark text-white'>Row 1 column 2</center>
					</Col>
				</Row>

				<Row className='row mt-1'>
					<Col>
						<center className='bg-dark text-white'>Row 2 column 1</center>
					</Col>
					<Col>
						<center className='bg-dark text-white'>Row 2 column 2</center>
					</Col>
					<Col>
						<center className='bg-dark text-white'>Row 2 column 3</center>
					</Col>
				</Row>

				<Row className='row mt-5'>
					<Col></Col>
					<Col lg={6} md={8} sm={11}>
						<Form className='form-container m-3 p-3'>
							<Form.Group controlId='formBasicEmail'>
								<Form.Label>Email address</Form.Label>
								<Form.Control type='email' placeholder='Enter email' />
								<Form.Text className='text-muted'>
									We'll never share your email with anyone else.
								</Form.Text>
							</Form.Group>

							<Form.Group controlId='formBasicPassword'>
								<Form.Label>Password</Form.Label>
								<Form.Control type='password' placeholder='Password' />
							</Form.Group>
							<Form.Group controlId='formBasicCheckbox'>
								<Form.Check type='checkbox' label='Check me out' />
							</Form.Group>
							<Button variant='primary' type='submit'>
								Submit
							</Button>
						</Form>
					</Col>
					<Col></Col>
				</Row>
			</Container>
		</Styled>
	)
}

const Styled = styled.div`
	/* .row {
		border: 1px solid red;
	}

	.col {
		border: 1px solid black;
	} */

	.form-container {
		background-color: rgba(0, 0, 0, 0.4);
		color: white;

	}
`

export default ReactBootstrap
