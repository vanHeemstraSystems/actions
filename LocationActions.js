var alt = require('../libraries/alt');

class LocationActions {
  updateLocations(locations) {
    return locations;
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
    return errorMessage;
  }
}

module.exports = alt.createActions(LocationActions);
