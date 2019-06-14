import http from './http.js'
const URL = {
	TEST: 'http://localhost:8081/api/get',
	EMAIL: 'http://localhost:8081/api/email'
}

export default {
	async test({ name,email }) {
		console.log(name,email)
		let resp = await http(URL.TEST,'GET','url',{ name,email })
		return resp
	},
	async email({ name,email }) {
		let resp = await http(URL.EMAIL,'POST','post',{ name,email })
		return resp
	}
}