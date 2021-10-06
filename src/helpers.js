

export const CalculateCurrentTime = () => {
    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
    console.log(hours, minutes);
    let isAM = true;

    if (hours > 12) {
      hours = hours - 12;
      isAM = false;
    }

    if (hours === 11 || hours === 10 || hours === 12) {
      if (minutes < 10) {
        return `${hours}:0${minutes} ${isAM ? 'AM' : 'PM'}`;
      } else {
        return `${hours}:${minutes} ${isAM ? 'AM' : 'PM'}`;
      }
    } else {
      if (minutes < 10) {
        return `0${hours}:0${minutes} ${isAM ? 'AM' : 'PM'}`;
      } else {
        return `0${hours}:${minutes} ${isAM ? 'AM' : 'PM'}`;
      }
    }
  };


  //? ////////////////////////////////////////////////////////////////////////////