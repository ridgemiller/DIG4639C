import React from 'react'
import Autocomplete from 'react-autocomplete'
import DatePicker from 'react-datepicker'
import Close from './close'

let location = (props) => {
  let { containerKey, inputProps, dpKey } = props
  let { pickerStart, pickerEnd } = props
  let { place, when, suggestions, missing } = props.stop
  inputProps.key = `location-${props.stopKey}`
  return (
    <View key={containerKey} className="location-container shadow">
      {/*put a red outline around empty inputs */}
      <Close onClick={props.removeStop} />
      <Autocomplete
        inputProps={
          missing ? 
            { className: 'missing', ...inputProps } :
            inputProps
        }
        wrapperProps={{ className: "location-search" }}
        value={place}
        items={suggestions}
        getItemValue={(item) => item.name}
        menuStyle={styles.menu}
        onSelect={(value, item) => {
          //console.log('onSelect', this, item, place)
          let selected = {
            target: {
              value: value,
              coordinates: item.coordinates
            }
          }
          props.placeChange(selected, props.stopKey, false)
        }}
        onChange={(event, value) => {
          props.placeChange(event, props.stopKey, true)
        }}
        renderItem={(item, isHighlighted) => (
          <View
            style={isHighlighted ? {...styles.item, background: 'lightgray'} : {...styles.item, background: 'white'}}
            key={item.abbr}
          >{item.name}</View>
        )}
        ref={el => this[`Autocomplete${props.stopKey}`] = el}
      />
      <DatePicker
        className="date-picker"
        readOnly={true}
        selected={when}
        onChange={e => props.dateChange(e, props.stopKey)}
        key={dpKey}
        minDate={pickerStart}
        maxDate={pickerEnd}
      />
      {(props.stop && props.stop.summary) ? (
        <View className="location-forecast">
          {/* <img src={props.stop.icon} />{props.stop.summary} */}
          {props.stop.summary.map((s, index) => {
            return (
              <View key={`${props.containerKey}-period-${index}`} className="forecast-period">
                <img alt={s.info} src={s.icon} /> {s.info}
              </View>
            )
          })}
        </View>
      ) : (
        <View className="location-forecast">
          ...forecast will load here.
        </View>
      )}
    </View>
  )
}

export default location
