class Shop {
  constructor(shop, shopAttributes) {
    this.id = shop.id
    this.name = shopAttributes.name
    this.industry = shopAttributes.industry
    Shop.all.push(this)
  }

  renderShopCard(){
    return `
      <div data-id=${this.id}>
        <h3>${this.name}</h3>
        <h5>${this.industry}</h5>
        <button data-id=${this.id} class="edit-button">edit</button>
      </div>
      <br><br>`;
  }

  static findById(id) {
    return this.all[id-1]
  }

  renderShopUpdateForm(){
    return `
    <form data-id="${this.id}">
      <h3>Edit a Shop!</h3>

      <label>Name</label>
      <input id="input-name" type="text" name="name" value="${this.name}" class="input-text">
      <br><br>

      <label>Industry</label>
      <input id="input-industry" type="text" name="industry" value="${this.industry}" class="input-text">
      <br><br>
      <button type="submit" class="submit-button" value="submit">save</button>
    </form>
    `;
  }
}
Shop.all = []
