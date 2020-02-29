
export const helpers = {

  monthToString(date) {
    const date2 = new Date(date);
    const mlist = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return mlist[date2.getMonth()];
  },

  sortDate(array) {
    return array.sort((a, b) =>
    // Turn your strings into dates, and then subtract them
    // to get a value that is either negative, positive, or zero.
      new Date(a.date) - new Date(b.date));
  },


  isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
  },

};

export default helpers;
