export default class QuestionModel {
	content: string

	constructor(content: string) {
		this.content = content
	}

	toObject() {
		return {
			content: this.content,
		}
	}
}
