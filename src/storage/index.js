/**
 * Storage封装
 * 用ES6规范，文件是给项目用的
 * vue.confiog.js用commonjs规范，因为此文件是给webpack打包的时候用的
 */
const STORAGE_KEY='mall';//在浏览器Application定义一个模块，Key为"mall",Value为{"user":{"name":"jack","age":30,"sex":1}}
//export default导出默认对象
export default{
    //存储值
    setItem(key,value,module_name){
        if (module_name){
          let val = this.getItem(module_name);
          val[key] = value;
          this.setItem(module_name, val);
        }else{
          let val = this.getStorage();
          val[key] = value;
          window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val));
        }
      },
    //获取user下面的name,name是key,user是module_name,
    getItem(key,module_name){
        if (module_name){
          let val = this.getItem(module_name);
          if(val) return val[key];
        }
        return this.getStorage()[key];
      },
    //获取整个数据
    getStorage(){
        return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}');
      },
      clear(key, module_name){
        let val = this.getStorage();
        console.log("val",val);
        console.log("val[module_name]",val[module_name]);
        if (module_name){
          if(!val[module_name])return;
          delete val[module_name][key];
        }else{
          delete val[key];
        }
        window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val));
      }
}