export default class Api {
  static baseUrl = "http://numbersapi.com";

  static async getNumber(formData) {
    const myHead = new Headers();

    if (formData.number == "") return "Please enter a number";

    console.log(formData);
    const url = `${this.baseUrl}/${formData.number}/${formData.type}/?json`;

    return await fetch(url, {
      method: "GET",
      headers: myHead,
    })
      .then((res) => res.json())
      .then((res) => res.text)
      .catch(() => "Something went wrong, please try again.");
  }
}
