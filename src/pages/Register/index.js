import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import logoPreto from "../../assets/img/LogoPreto.png";
import nomePreto from "../../assets/img/NomePreto.png";
import logoMobile from "../../assets/img/LogoMobile.png";
import { registerPage, getName } from '../../services/index';
import ValidateInputs from "./validationRegister";
import ValidationMessage from "../../components/Validation/ValidationMessage";
import InputMasked from "../../utils/inputMask";
import './index.css';
import './responsive.css';

const Register = () => {
	const navigate = useNavigate()

	const [errors, setError] = useState({})
	const [values, setValues] = useState({
		name: '',
		email: '',
		password: '',
		cpf: '',
		age: '',
	});

	const onChangeValues = (event) => {
		setValues({
			...values,
			[event.target.name]: event.target.value
		})
	};

	const handleClick = (event) => {
		event.preventDefault()
		setError(ValidateInputs(values))
		registerPage(values.email, values.password).then((resp) => {
			getName(values.name).then(() => {
				const user = resp.user.uid
				localStorage.setItem('uid', user)
				localStorage.setItem('name', values.name)
				navigate('/home')
			}).catch(() => {
			})
		}).catch(() => {

		})
	};

	return (
		<section className='register-container'>
			<div className='register-logo'>
				<img className='register-logo-black' src={logoPreto} alt='logo' />
				<img className='register-name-black' src={nomePreto} alt='logo' />
			</div>
			<div className='register-form-group'>
				<Link to='/login' className='register-back-login'>← Voltar para o Login</Link>
				<h1 className='register-H1'>
					Cadastro
				</h1>
				<div className='login-logo-mobile'>
					<img className='login-logo-black-mobile' src={logoMobile} alt='logo' />
				</div>
				<fieldset className='register-fieldset'>
					<form className='register-form'>
						<h1 className='register-H1-mobile'>
							Cadastro
						</h1>
						<Link to='/login' className='register-back-login-mobile'>← Voltar para o Login</Link>
						<Input
							type='text'
							placeholder='Digite seu nome'
							className='register-input'
							name='name'
							onChange={onChangeValues}
							value={values.name}
						>
						</Input>
						{errors.name && <ValidationMessage>{errors.name}</ValidationMessage>}
						<Input
							type='email'
							placeholder='Digite seu e-mail'
							className='register-input'
							name='email'
							onChange={onChangeValues}
							value={values.email}
						>
						</Input>
						{errors.email && <ValidationMessage>{errors.email}</ValidationMessage>}
						<InputMasked
							mask='999.999.999-99'
							type='text'
							placeholder='Digite o seu CPF'
							className='register-input'
							name='cpf'
							onChange={onChangeValues}
							value={values.cpf}>
						</InputMasked>
						{errors.cpf && <ValidationMessage>{errors.cpf}</ValidationMessage>}
						<Input
							type='number'
							min='18'
							max='100'
							placeholder='Digite sua idade'
							className='register-input'
							name='age'
							onChange={onChangeValues}
							value={values.age}
						>
						</Input>
						{errors.age && <ValidationMessage>{errors.age}</ValidationMessage>}
						<Input
							type='password'
							placeholder='Digite sua senha'
							className='register-input'
							name='password'
							onChange={onChangeValues}
							value={values.password}>
						</Input>
						{errors.password && <ValidationMessage>{errors.password}</ValidationMessage>}
						<Button
							type='button'
							className='register-button'
							buttonOnClick={handleClick}
						>CADASTRAR</Button>
					</form>
				</fieldset>
			</div>
		</section>
	)
}


export default Register;