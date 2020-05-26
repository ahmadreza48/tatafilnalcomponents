
# Label Component

## `Props`

| Name        | Type |Default           | Description  |
| ------------- |---|:-------------:| -----|
| value | any | 'value' |  The value of label element. |
| variant | 'h1'<br>&#124;'h2'<br>&#124;'h3'<br>&#124;'h4'<br>&#124;'h5'<br>&#124;'h6'<br>&#124;'subtitle1'<br>&#124;'subtitle2'<br>&#124;'body1'<br>&#124;'body2'<br>&#124;'caption'<br>&#124;'button'<br>&#124;'overline'<br>&#124;'srOnly'<br>&#124;'inherit' | 'body1' | Applies the theme label styles. |
| color | 'initial'<br>&#124;'inherit'<br>&#124;'primary'<br>&#124;'secondary'<br>&#124;'textPrimary'<br>&#124;'textSecondary'<br>&#124;'error' |'primary' | The color of the component. It supports those theme colors that make sense for this component.|
| display | 'initial'<br>&#124;'block'<br>&#124;'inline' | 'initial' | Controls the display type. |

### `Example`

```javascript
<Tlabel option={{
            value: "label value"
        }}/>

```
