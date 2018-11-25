export default class Client {
  private database: number[] = [1, 2, 3, 4, 5];

  private sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  public async get(id: number): Promise<number> {
    await this.sleep(2000)
    return this.database[id];
  }
}
