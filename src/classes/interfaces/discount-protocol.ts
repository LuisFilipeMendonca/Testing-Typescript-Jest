export abstract class DiscountProtocol {
  protected discount = 0;

  applyDiscount(total: number): number {
    return Math.round((total - total * this.discount) * 100) / 100;
  }
}
