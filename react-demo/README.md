## react-demo (0.13.0)

> use React v0.13.0

**需注意：**

- ``render`` 函数里只能有一个父标签；
- 因为 ``class`` 和 ``for`` 是 js 的保留字，所以 html 标签中的属性需对应替换成 ``className`` 和 ``htmlFor``;
- input 的 ``value`` 属性不能使用户改变它的值，需使用 ``defaultValue`` 属性；
- 更新 ``state`` 需使用 ``setState`` 方法。

``` bash
└─ react-demo/
    ├─ 0-index.html                  # 初探 React
    ├─ 1-nested-components.html      # 组件的嵌套
    ├─ 2-components-states.html      # 组件的状态
    ├─ 3-props.html                  # 组件的参数
    ├─ 4-events.html                 # 事件
    └─ 5-refs.html                   # Refs
```
