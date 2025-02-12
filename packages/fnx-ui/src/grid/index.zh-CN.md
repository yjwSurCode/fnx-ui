# Grid 宫格

宫格可以在水平方向上把页面分隔成等宽度的区块，用于展示内容或进行页面导航。

## 基础用法

通过 `Grid.Item`子元素设置宫格内容

```tsx | pure
import { Grid, Image } from 'fnx-ui';

ReactDOM.render(
  <>
    <Grid>
      <Grid.Item>
        <Image src="https://img17.fn-mart.com/pic/2a021346939822ebb66f/B26n221z_2fdhMZdKz/7imyeafa3yKGj9/CsmRtmA3RAuAVmgsAAKtgt1PF3s715.jpg" />
      </Grid.Item>
      <Grid.Item>
        <Image src="https://img17.fn-mart.com/pic/2a021346939822ebb66f/B26n221z_2fdhMZdKz/7imyeafa3yKGj9/CsmRtmA3RAuAVmgsAAKtgt1PF3s715.jpg" />
      </Grid.Item>
      <Grid.Item>
        <Image src="https://img17.fn-mart.com/pic/2a021346939822ebb66f/B26n221z_2fdhMZdKz/7imyeafa3yKGj9/CsmRtmA3RAuAVmgsAAKtgt1PF3s715.jpg" />
      </Grid.Item>
    </Grid>
  </>,
  mountNode,
);
```

## 自定义列数

默认一行展示四个格子，可以通过 `columnSize` 自定义列数。

```tsx | pure
import { Grid, Image } from 'fnx-ui';

ReactDOM.render(
  <>
    <Grid columnSize={3}>
      <Grid.Item>
        <Image src="https://img17.fn-mart.com/pic/2a021346939822ebb66f/B26n221z_2fdhMZdKz/7imyeafa3yKGj9/CsmRtmA3RAuAVmgsAAKtgt1PF3s715.jpg" />
      </Grid.Item>
      <Grid.Item>
        <Image src="https://img17.fn-mart.com/pic/2a021346939822ebb66f/B26n221z_2fdhMZdKz/7imyeafa3yKGj9/CsmRtmA3RAuAVmgsAAKtgt1PF3s715.jpg" />
      </Grid.Item>
      <Grid.Item>
        <Image src="https://img17.fn-mart.com/pic/2a021346939822ebb66f/B26n221z_2fdhMZdKz/7imyeafa3yKGj9/CsmRtmA3RAuAVmgsAAKtgt1PF3s715.jpg" />
      </Grid.Item>
      <Grid.Item>
        <Image src="https://img17.fn-mart.com/pic/2a021346939822ebb66f/B26n221z_2fdhMZdKz/7imyeafa3yKGj9/CsmRtmA3RAuAVmgsAAKtgt1PF3s715.jpg" />
      </Grid.Item>
    </Grid>
  </>,
  mountNode,
);
```

## 正方形格子

设置 `square` 属性后，格子的高度会和宽度保持一致。

```tsx | pure
import { Grid, Image } from 'fnx-ui';

ReactDOM.render(
  <>
    <Grid square>
      <Grid.Item>
        <Image src="https://img17.fn-mart.com/pic/2a021346939822ebb66f/B26n221z_2fdhMZdKz/7imyeafa3yKGj9/CsmRtmA3RAuAVmgsAAKtgt1PF3s715.jpg" />
      </Grid.Item>
    </Grid>
  </>,
  mountNode,
);
```

## 格子间距

通过 `gutter` 属性设置格子之间的距离。

```tsx | pure
import { Grid, Image } from 'fnx-ui';

ReactDOM.render(
  <>
    <Grid gutter="5">
      <Grid.Item>
        <Image src="https://img17.fn-mart.com/pic/2a021346939822ebb66f/B26n221z_2fdhMZdKz/7imyeafa3yKGj9/CsmRtmA3RAuAVmgsAAKtgt1PF3s715.jpg" />
      </Grid.Item>
      <Grid.Item>
        <Image src="https://img17.fn-mart.com/pic/2a021346939822ebb66f/B26n221z_2fdhMZdKz/7imyeafa3yKGj9/CsmRtmA3RAuAVmgsAAKtgt1PF3s715.jpg" />
      </Grid.Item>
      <Grid.Item>
        <Image src="https://img17.fn-mart.com/pic/2a021346939822ebb66f/B26n221z_2fdhMZdKz/7imyeafa3yKGj9/CsmRtmA3RAuAVmgsAAKtgt1PF3s715.jpg" />
      </Grid.Item>
    </Grid>
  </>,
  mountNode,
);
```

## API

| 参数       | 说明                            | 类型               | 默认值  |
| ---------- | ------------------------------- | ------------------ | ------- |
| columnSize | 列数                            | `number \| string` | `4`     |
| clickable  | 是否开启格子点击反馈            | `boolean`          | `false` |
| gutter     | 格子之间的间距，默认单位为 `px` | `number \| string` | -       |
| border     | 是否显示边框                    | `boolean`          | `true`  |
| square     | 是否将格子固定为正方形          | `boolean`          | `false` |

## GridItem API

| 参数      | 说明                       | 类型      | 默认值  |
| --------- | -------------------------- | --------- | ------- |
| clickable | 是否开启所有格子点击反馈   | `boolean` | `false` |
| square    | 是否将所有格子固定为正方形 | `boolean` | `false` |

```

```
