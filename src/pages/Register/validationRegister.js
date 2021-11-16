function ValidateInputs(values) {
    let errors = {}

    if (!values.name) {
        errors.name = "Por favor preencha o seu nome"
        errors.empty = false
    }

    if (!values.email) {
        errors.email = "Por favor preencha seu e-mail"
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Formato de e-mail inválido"
        errors.empty = false
    }

    if (!values.password) {
        errors.password = "Por favor preencha a senha"
        errors.empty = false
    } else if (values.password.lenght <= 6) {
        errors.password = "Insira no mínimo 6 caracteres"
        errors.empty = false
    }

    if (!values.age) {
        errors.age = "Por favor preencha a sua idade"
        errors.empty = false
    }

    if (!values.cpf) {
        errors.cpf = "Por favor preencha seu CPF"
        errors.empty = false
    }
    return errors;
}

export default ValidateInputs;