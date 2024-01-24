/* eslint-disable react/prop-types */
export default function Setter({time, onChange}) {
  return (
    <div className="setter-container">
        <div className="hour-setter">
          <h3>Hrs</h3>
          <input name="hour" type="number" placeholder="0" value={time.hour} onChange={onChange}/>
        </div>
        <div className="min-setter">
          <h3>Min</h3>
          <input name="min" type="number" placeholder="0" value={time.min} onChange={onChange}/>
        </div>
        <div className="sec-setter">
          <h3>Sec</h3>
          <input name="sec" type="number" placeholder="0" value={time.sec} onChange={onChange}/>
        </div>
    </div>
  )
}
