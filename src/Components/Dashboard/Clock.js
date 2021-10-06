import './../../index.css';

const Clock = ({remainingTime}) => {

    // for formatting remaining time
    const formattedRemainingTime = (remainingTime) => {
        const hours = Math.floor(remainingTime / 3600)
        const minutes = Math.floor((remainingTime % 3600) / 60)
        const seconds = remainingTime % 60   
        
        if(+hours === 0)
        return `${minutes}:${seconds}`

        else
        return `${hours}:${minutes}:${seconds}`
      }

      const currentTime = formattedRemainingTime(remainingTime);

    return <h1>{currentTime}</h1>
};

export default Clock