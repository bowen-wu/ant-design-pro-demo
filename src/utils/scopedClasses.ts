const scopedClasses = (prefixClassName) => {
  if(typeof prefixClassName !== 'string') {
    throw new Error('prefixClassName 类型必须为 String');
  }
  return (name = '') => {
    if(name instanceof Array || name instanceof Function || typeof name === 'boolean' || typeof name === 'number') {
      throw new Error('参数类型不支持 Boolean、Number、Array 和 Function！');
    } else if(name instanceof Object) {
      if(!Object.values(name).every(value => typeof value === 'boolean')) {
        throw new Error('当 name 类型为 Object 时，对象属性值类型必须是 Boolean!');
      }
      // return Object.entries(name).map(item => item[1] && item[0]).filter(Boolean).map(item => [prefixClassName, item].join('-')).join(' ');
      return Object.entries(name).filter(item => item[1]).map(item => item[0]).map(item => [prefixClassName, item].join('-')).join(' ');
    } else {
      return [prefixClassName, name].filter(Boolean).join('-');
    }
  }
};

export default scopedClasses;
