console.log("in shop js?");
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
      <button data-id=${this.id}>edit</button>
    </div>
    <br><br>`;
  }
}
Shop.all = []