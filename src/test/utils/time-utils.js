class TimeUtils {
  static sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
module.exports = TimeUtils;
