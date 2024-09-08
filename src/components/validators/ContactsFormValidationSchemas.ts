/** Descrição para o validador de E-mail. */
export const EmailSchema = {
    required: "Email is required",
    pattern: {
        value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        message: "Invalid email address"
    }
};

/** Descrição para o validador de Telefone. */
export const PhoneSchema = {
    required: "Telephone is required",
    pattern: {
        value: /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/,
        message: "Invalid Telephone"
    }
};

/** Descrição para o validador de Nome. */
export const NameSchema = { required: "Name is required" };