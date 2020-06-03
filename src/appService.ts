class AppService {
  private name = "Application Name";
  private title = "Title";

  setName(newName: string) {
    this.name = newName;
  }

  getName() {
    return this.name;
  }
}

export const appService = new AppService();
