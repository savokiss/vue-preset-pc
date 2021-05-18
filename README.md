# Vue Project Preset PC

## Related Projects

- [Vue Preset Mobile](https://github.com/savokiss/vue-preset-mobile)

## Usage

```bash
vue create --preset savokiss/vue-preset-pc <project-name>
```
注意修改上面的 `<project-name>` 为要创建的文件夹名称

## Features

- 集成`commitizen`规范提交message（中文提示信息），强制验证提交信息
- 集成`standard-version`自动生成changelog
- 使用`compression-webpack-plugin`进行资源 gzip 打包
- 集成`normalize.css`
- sass 变量及函数全局引入
- 集成 VSCode 配置文件 `jsconfig.json`
- 预设三个 env 环境和三个 build scripts
- Service 层封装 axios
- 模块化 Vuex Store

## CHANGELOG

[CHANGELOG](./CHANGELOG)

## Add Plugin

### 安装 Element-UI

```bash
vue add element
```

### 安装 Ant-Design-Vue

```bash
vue add ant-design
```

## 安装 Electron-Builder

```bash
vue add electron-builder
```
