
# Radio Group Component

## `Props`

| Name        | Type |Default           | Description  |
| ------------- |---|:-------------:| -----|
| name |  string | | 'name' | The name used to reference the value of the control. |
| row | boolean | false | If true, display group of elements in a compact row. |
| defaultValue | any | 'defaultValue' | Default value of the selected radio button. The DOM API casts this to a string. |
| disabled | boolean | false | If true, apply disabled class. |
| disabledValues | array | [] | Apply disabled class on items according to values taken. |
| disabledIndexes | array | [] | Apply disabled class on items according to indexes taken. |
| items | array | [] | The content of the component. |
| valueKey | any | | This feature is considered as the value of each radio item. The DOM API casts this to a string. |
| labelKey | any | | This feature is considered as the label of each radio item. The DOM API casts this to a string. |
| onChange | event | | Fired when a radio button is selected. |

### `Children`

use TRadio component for static option like in example

### `Example`

```javascript
//static radio
<Tradiogrp
        option={{
        name: "reza",
        row: false,
        defaultValue: "200",
        disabled: false,
        disabledValues: [
          10, 200
        ],
        disabledIndexes: [],
        onChange: handleRdGrpChange,
        valueKey: "code",
        labelKey: "label",
      }}>
        <Tradio
          option={{
          item: {
            value: "staticValue1",
            label: "staticLabel1",
            code: 10
          },
          disabled: false
        }}/>
        <Tradio
          option={{
          item: {
            value: "staticValue2",
            label: "staticLabel2",
            code: 20
          },
          disabled: false
        }}/>
        <Tradio
          option={{
          item: {
            value: "staticValue3",
            label: "staticLabel3",
            code: 30
          },
          disabled: false
        }}/>
      </Tradiogrp>

//dynamic radio
<Tradiogrp
        option={{
        name: "reza",
        row: false,
        defaultValue: "200",
        disabled: false,
        disabledValues: [
          10, 200
        ],
        disabledIndexes: [],
        onChange: handleRdGrpChange,
        valueKey: "code",
        labelKey: "label",
        items: [
          {
            value: "1",
            label: "saeidi",
            title: "saeidi2",
            code: 100
          }, {
            value: "2",
            label: "talebi",
            title: "talebi2",
            code: 200
          }, {
            value: "3",
            label: "kashani",
            title: "kashani2",
            code: 300
          }
        ]
      }}/>

//Dynamic and static radios
<Tradiogrp
        option={{
        name: "reza",
        row: false,
        defaultValue: "200",
        disabled: false,
        disabledValues: [
          10, 200
        ],
        disabledIndexes: [],
        onChange: handleRdGrpChange,
        valueKey: "code",
        labelKey: "label",
        items: [
          {
            value: "1",
            label: "saeidi",
            title: "saeidi2",
            code: 100
          }, {
            value: "2",
            label: "talebi",
            title: "talebi2",
            code: 200
          }, {
            value: "3",
            label: "kashani",
            title: "kashani2",
            code: 300
          }
        ]
      }}>
        <Tradio
          option={{
          item: {
            value: "staticValue1",
            label: "staticLabel1",
            code: 10
          },
          disabled: false
        }}/>
        <Tradio
          option={{
          item: {
            value: "staticValue2",
            label: "staticLabel2",
            code: 20
          },
          disabled: false
        }}/>
        <Tradio
          option={{
          item: {
            value: "staticValue3",
            label: "staticLabel3",
            code: 30
          },
          disabled: false
        }}/>
      </Tradiogrp>
```
