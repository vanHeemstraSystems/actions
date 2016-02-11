var alt = require('../libraries/alt');

class LocationActions {
  updateLocations(locations) {
    this.dispatch(locations);
  }
  fetchLocations() {
    return (dispatch) => {
      // we dispatch an event here so we can have "loading" state.
      dispatch();
      LocationSource.fetch()
        .then((locations) => {
          // we can access other actions within our action through `this.actions`
          this.updateLocations(locations);
        })
        .catch((errorMessage) => {
          this.locationsFailed(errorMessage);
        });
      }
  }
  locationsFailed(errorMessage) {
    this.dispatch(errorMessage);
  }
  favoriteLocation(location) {
    this.dispatch(location);
  }
}

module.exports = alt.createActions(LocationActions);
