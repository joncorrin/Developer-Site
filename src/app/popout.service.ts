export class PopoutService {
  sideWallVisible = false;
  profileVisible = false;

  toggleSideWall() {
    this.sideWallVisible = !this.sideWallVisible;
    console.log("sideWallVisible = " + this.sideWallVisible);
  }

  toggleProfile() {
    this.profileVisible = !this.profileVisible;
    console.log("profileVisible = " + this.profileVisible);
  }

}
