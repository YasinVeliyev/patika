import * as yup from "yup";

const validations = yup.object().shape({
	email: yup.string().email("Geçerli bir email girin").required("Zorunlu alan"),
	password: yup.string().min(5, "Parolaniz en az 5 karakter olmalidir").required("Zorunlu alan"),
});

export default validations;
