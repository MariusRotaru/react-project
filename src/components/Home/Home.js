import * as React from 'react';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import logo from '../../images/logo.png'
class Home extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			form : {
				email: '',
				receive: false,
				remember: false,
				term: false,
			}
		}
		this.onChange = this.onChange.bind(this)
	}

	onChange(e) {
		const name = e.target.name
		let value = name === 'email' ? e.target.value:e.target.checked
		let fm = {...this.state.form}
		fm[name] = value
		this.setState({
			form: fm
		})
	}

	render() {
		return (
			<div className="container container-fluid text-center">    
				<div className="row content">
					<div className="col-sm-2 sidenav">
					</div>
					<div className="col-sm-8 text-center">
						<img src={logo} className="img-rounded logo" alt="Cinque Terre"/>
						<div className="form-container text-center">
						<Form>
							<FormGroup row>
								<Label for="exampleEmail" sm={5}>Username or Email</Label>
								<Col sm={7}>
									<Input onChange={(e) => this.onChange(e)} value={this.state.form.email} type="email" name="email" id="exampleEmail"/>
								</Col>
							</FormGroup>
							<FormGroup row>
								<Col sm={5}></Col>
								<Col sm={7} className="text-left c_item">
									<Input onChange={(e) => this.onChange(e)} name="receive" checked={this.state.form.receive} type="checkbox" id="checkbox2" />{' '}
									Receive Offers
								</Col>
								<Col sm={5}></Col>
								<Col sm={7} className="text-left c_item">
									<Input onChange={(e) => this.onChange(e)} name="remember" checked={this.state.form.remember} type="checkbox" id="checkbox2" />{' '}
									Remember  Me
								</Col>
							</FormGroup>
							<FormGroup row>
								<Col sm={5}></Col>
								<Col sm={7} className="text-left c_item">
									<Input onChange={(e) => this.onChange(e)} name ="term" checked={this.state.form.term} type="checkbox" id="checkbox2" />{' '}
									Accept T&C
								</Col>
							</FormGroup>
							<Button disabled={!this.state.form.term} className='connect' color="secondary">Connect</Button>
						</Form>
						</div>
					</div>
					<div className="col-sm-2 sidenav">
					</div>
				</div>
			</div>
		)
	}
}

export default Home
