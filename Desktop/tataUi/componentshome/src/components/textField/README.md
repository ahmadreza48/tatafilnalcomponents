
# Text Field Component

## `Props`

| Name        | Type |Default           | Description  |
| ------------- |---|:-------------:| -----|
| defaultValue | any | 'defaultValue' |  The default value of the input element. |
| disabled | boolean | false | If true, apply disabled class. |
| color | 'primary', 'secondary' |'primary' | The color of the component. It supports those theme colors that make sense for this component.|
| onChange | event | | Fired when a text field is changed. |

### `Example`

```javascript
<Ttextbox
        onChange={handleTextChange}
        option={{
        color: "secondary",
        disabled: false
      }}/>

```
