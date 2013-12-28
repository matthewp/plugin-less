jspm.config({
  "baseURL": ".",
  "map": {
    "less": "~/../less",
    "github:less/less.js": "github:less/less.js@1.5.1"
  },
  "packages": {
    "github:less/less.js@1.5.1": {
      "main": "dist/less-1.5.1",
      "format": "global",
      "shim": {
        "dist/less-1.5.1": {
          "exports": "less"
        }
      }
    }
  }
});
