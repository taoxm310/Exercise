var  taoxiumin = {
	/**
	 * 将数组内的元素按大小拆分成相应数量的数组
	 * @param  {[数组]}
	 * @param  {[数字]}
	 * @return {[数组]}
	 */
  	chunk: function chunk (array, size){
  		size = size || 1
	    var result = []
	    var component = []
    	var count = 0
	    for (var i = 0; ; i++){
	    	if(array[i] == undefined) {
	    		if (component[i] !== undefined){
	    			result.push(component)
	    		}
	    		return result 
	    	}
	    	component.push(array[i])
	    	array.shift(array[i])
	    	count++
	    	if(count == size) {
	    		result.push(component)
	    		component = []
	    		i = 0
	    		count = 0
	    	}
	   		i = -1
  		}
	},

	/**
	 * 删除数组内所有falsy的值
	 * @param  {[数组]}
	 * @return {[数组]}
	 */
  	compact: function compact(array){
	    for(var i = 0; i < array.length;i++){
	    	if (!array[i] == true) {
	    		array.splice(i,1)
	    		i--
	    	}
		}
		return array
	},

	/**
	 * 返回一个不包含数组2的值的数组1
	 * @param  {[数组1]}
	 * @param  {[数组2]}
	 * @return {[type]}
	 */
	difference: function difference(array1,array2){
		for (var i = 0; i < array1.length; i++) {
			for (var j = 0; j < array2.length; j ++) {
				if(array1[i] == array2[j]){
					array1.splice(i,1)
					i = i - 1
					break
				}
			}
		}
		return array1
	},

	/**从左往右删除一段指定数量的代码
	 * @param  {[数组]}
	 * @param  {[数字]}
	 * @return {[数组]}
	 */
	drop: function drop(array, num) {
		num == undefined ? num = 1 : num = num
		for(var i = 1; i <= num; i ++) {
			array.shift()
		}
			return array
	},

	/**
	 * 从右往左删除一段指定数量的代码
	 * @param  {[数组]}
	 * @param  {[数字]}
	 * @return {[数组]}
	 */
	dropRight: function dropRight(array,num) {
		num == undefined ? num = 1 : num = num
		var length = array.length
		if (num > length) {
			return array = []
		} else if (num == 0) {
			return array
		} else {
			var count = 0
			for(var i = 0; i < num ; i --) {
				array.pop()
				count++
				if(count == num) {
					return array
				}
			}
			
		}
	},
	/**
	 * 将不满足fn条件的元素从数组中删除
	 * @param  {[array]}   array [description]
	 * @param  {Function} fn    [description]
	 * @return {[array]}         [description]
	 */
	dropRightWhile: function dropRightWhile(array, predicate){
	var self = this
		if(self.isString(predicate)){
			predicate = self.property(predicate)
		}
		if(self.isArray(predicate)){
			predicate = self.matchesProperty(predicate[0],predicate[1])
		}
		if(self.isPlainObject(predicate)){
			predicate = self.matches(predicate)
		}
		var len = array.length 
		for(var i = len - 1; i >= 0;i--){
			if(predicate(array[i]) === true){
				array = array.slice(0,i)
			} else {
				return array
			}
		}
		return array
	},
	/**
	 * 将不满足fn条件的元素从数组中删除
	 * @param  {[array]}   array [description]
	 * @param  {Function} fn    [description]
	 * @return {[array]}         [description]
	 */
	dropWhile: function dropWhile(array,predicate){
		var self = this
		if(self.isString(predicate)){
			predicate = self.property(predicate)
		}
		if(self.isArray(predicate)){
			predicate = self.matchesProperty(predicate[0],predicate[1])
		}
		if(self.isPlainObject(predicate)){
			predicate = self.matches(predicate)
		}
		for(var i = 0; i < array.length;i++){
			if(predicate(array[i]) === false){
				return array.slice(i)
			}
		}
	},
	/**
	 * 将属性名和属性值成对匹配构成的数组变成对象
	 * @param  {[array]} pairs [description]
	 * @return {[object]}       [description]
	 */
	fromPairs: function fromPairs(pairs){
		var result = {}
		for(var i = 0; i < pairs.length; i++){
			result[pairs[i][0]] = pairs[i][1]
		}

		return result

	},


	/**
	 * 在设置的开始和结束索引（不包括结束索引）之间，用新的值填充
	 * @param  {[array]} array [description]
	 * @param  {[type]} value [description]
	 * @param  {Number} start [description]
	 * @param  {[type]} end   [description]
	 * @return {[type]}       [description]
	 */
	fill: function fill(array, value, start = 0, end = array.length) {
		for(var i = start; i < end; i ++) {
			array[i] = value
		}
		return array
	},
	/**
	 * 获得数组的第一个值
	 * @param  {[type]} array [description]
	 * @return {[type]}       [description]
	 */
	head: function head(array) {
		return array[0]
	},
	/**
	 * 减少嵌套数组的一个层级
	 * @param  {[type]} array [description]
	 * @return {[type]}       [description]
	 */
	flatten: function flatten(array) {
	    var change
	    for(var i = 0; i < array.length; i++) {
	      if(Array.isArray(array[i])){
	        change = array.splice(i,1)
	        change = change[0]
	        if (i <=array.length - 1) {
	            change = change.concat(array)
	            return change
	          }
	        for(var j = 0; j < change.length; j++) {
	          array[i] = change[j]
	          i ++
	        }
	        return array
	      }
	    }
	  },

	flattenDeep: function flattenDeep(array){
	  	return array.reduce((a,b,i) => Array.isArray(b) ? a.concat(flattenDeep(b)) : a.concat(b),[])
	  },

	flattenDepth: function flattenDepth(array,depth = 1){
	  	if(depth == 0){
	  		return array
	  	}
	  	return array.reduce(function(a,b,i){
	  		if(Array.isArray(b)){
	  			return a.concat(flattenDepth(b,depth-1))
	  		} else {
	  			return a.concat(b)
	  		}
	  	},[])
	  },
	  
	 /**
	  * 获得数组最后一位之前的值并返回一个新的数组
	  * @param  {[type]} array [description]
	  * @return {[type]} array [description]
	  */
	initial: function initial(array) {
		var result = []
		for (var i = 0; i < array.length - 1; i++) {
			result.push(array[i])
		}
		return result
	},
	/**
	 * 用分隔符链接数组的值生成一个字符串
	 * @param  {[type]} array     [description]
	 * @param  {[type]} seperator [description]
	 * @return {[type]}           [description]
	 */
	join: function join(array, seperator) {
		var result = ""
		var length = array.length
		for ( var i = 0; i < length; i++) {
			if( i == length - 1){
				result = result + array[i]
			} else {
				result = result + array[i] + seperator
			}
		}
		return result
	},
	/**
	 * 返回指定位置的数组的值
	 * @param  {[type]} array [description]
	 * @param  {[type]} n     [description]
	 * @return {[type]}       [description]
	 */
	nth: function nth(array, n) {
		while(n < 0) {
			n = n + array.length
		}
		while(n > array.length) {
			n = n - array.length
		}
		return array[n]
	},
	/**
	 * 返回数组的最后一个值
	 * @param  {[type]} array [description]
	 * @return {[type]}       [description]
	 */
	last: function last(array) {
		return array[array.length-1]
	},
	/**
	 * 获得指定值在数组的位置，从右往左开始搜索
	 * @param  {[type]} array     [description]
	 * @param  {[type]} value     [description]
	 * @param  {[type]} fromIndex [description]
	 * @return {[type]}           [description]
	 */
	lastIndexOf: function lastIndexOf(array, value, fromIndex = array.length - 1) {
		var l = array.length
		for (var i = fromIndex; i >= 0; i--) {
			if (array[i] == value) {
				return i
			}
			if(i == 0) {
				i = l - 1
			}
		}
	},
	/**
	 * 从数组中移除所给的值，返回一个新的数组
	 * @param  {array} array [description]
	 * @param  {[type]} value [description]
	 * @return {[type]}       [description]
	 */
	pull: function pull(array,...value) {
		var length1 = arguments.length
		var length2 = array.length
		for (var i = 0; i < length2; i++) {
			for (var j = 1; j < length1; j++) {
				if(array[i] == arguments[j]) {
					array.splice(i,1)
					i--
				}
			}
		}
		return array
	},
	/**
	 * 从数组中移除另一个所给数组中相同的值，返回一个新的数组
	 * @param  {array} array1 [description]
	 * @param  {array} array2 [description]
	 * @return {[type]}        [description]
	 */
	pullAll: function pullAll(array1,array2) {
		var length1 = array2.length
		var length2 = array1.length
		for (var i = 0; i < length1; i++) {
			for (var j = 0; j < length2; j++) {
				if(array1[j] == array2[i]) {
					array1.splice(j,1)
				}
			}
		}
		return array1
	},

	pullAllBy: function pullAllBy(array,values,iteratee){
		if(this.isString(iteratee)){
			iteratee = this.property(iteratee)
		}
		for(var i = 0; i < array.length; i++){
			var v = iteratee(array[i])
			for(var j = 0; j < values.length; j++){
				if( v === iteratee(values[j])){
					array.splice(i,1)
					i--
				}
			}
		}
		return array
	},

	pullAllWith: function pullAllWith(array,values,comparator){
		for(var i = 0; i < array.length; i++){
			for(var j = 0; j < values.length; j++){
				if(comparator(array[i],values[j])){
					array.splice(i,1)
					i--
				}
			}
		}
		return array
	},

	without: function without(array,...values){
		let result 
		result = array.map(it => it)
		return this.pull(result,...values)
	},

	zip: function(...arrays){
		if(!arrays.length){
			return []
		}
		var maxLength = Math.max(...arrays.map(it => it.length))
		var result = []
		for(let i = 0; i <maxLength;i++){
			let temp = new Array()
			temp.push(...arrays.map(it => it[i]))
			result.push(temp)
		}
		return result
	},

	unzip: function(array){
		return this.zip(...array)
	},
	/**
	 * 创建一个组成对象，key（键）是经过 iteratee（迭代函数） 执行处理collection中每个元素后返回的结果，每个key（键）对应的值是 iteratee（迭代函数）返回该key（键）的次数（愚人码头注：迭代次数）。 iteratee 调用一个参数：(value)。
	 * @param  {Array|Object} collection [description]
	 * @param  {[Function|String]} iteratee   [description]
	 * @return {[type]}            [description]
	 */
	countBy: function(collection, iteratee){
		if(this.isString(iteratee)){
			iteratee = this.property(iteratee)
		}
		var result = {}
		for(let key in collection){
			let prop = iteratee(collection[key])
			if(result.hasOwnProperty(prop)){
				result[prop] = result[prop] + 1
			} else {
				result[prop] = 1
			}
		}

		return result
	},

	every: function every(collection, predicate){
		var self = this
		if(self.isString(predicate)){
			predicate = self.property(predicate)
		}
		if(self.isArray(predicate)){
			predicate = self.matchesProperty(predicate[0],predicate[1])
		}

		if(self.isPlainObject(predicate)){
			predicate = self.matches(predicate)
		}
		for(let key in collection){
			if(predicate(collection[key],key,collection) == false){
				return false
			}
		}
		return true
	},
	/**
	 * 遍历 collection（集合）元素，返回 predicate（断言函数）返回真值 的所有元素的数组。 predicate（断言函数）调用三个参数：(value, index|key, collection)。 
	 * @param  {array|object} collection [description]
	 * @param  {Array|Function|Object|String} predicate  [description]
	 * @return {Array}            [description]
	 */
	filter: function filter(collection,predicate){
		var self = this
		if(self.isString(predicate)){
			predicate = self.property(predicate)
		}
		if(self.isArray(predicate)){
			predicate = self.matchesProperty(predicate[0],predicate[1])
		}

		if(self.isPlainObject(predicate)){
			predicate = self.matches(predicate)
		}
		let result = this.isArray(collection)? []:{}
		for(let key in collection){
			if(predicate(collection[key],key,collection) == true){
				this.isArray(result)? result.push(collection[key]):result[key] = collection[key]
			}
		}
		return result
	},

	find: function find(collection,predicate,fromIndex = 0){
		var self = this
		if(self.isString(predicate)){
			predicate = self.property(predicate)
		}
		if(self.isArray(predicate)){
			predicate = self.matchesProperty(predicate[0],predicate[1])
		}

		if(self.isPlainObject(predicate)){
			predicate = self.matches(predicate)
		}
		for(let key in collection){
			if(predicate(collection[key]) === true) {
				return collection[key]
			}
		}
	},

	tail: function(array){
		return array.slice(1)
	},

	take: function take (array, n = 1){
		if(array.length < n){
			n = array.length
		}
		return array.slice(0,n)
	},

	/**
	 * 计算第n位的斐波那契数
	 * @param  {number} n [description]
	 * @return {[type]}   [description]
	 */
	fibb: function() {
		var cache = [0,1,1]
		
		return function fibb(n) {
			var result = 0
			if (cache[n] !== undefined) {
				return cache[n]
			} else {
				result = fibb(n-1) + fibb(n-2)
				cache[n] = result
				return result
			}
		}
	}(),
	/**
	 * 展开字符串，如“a-e”，返回“abcde”
	 * @param  {string} str [description]
	 * @return {[type]}     [description]
	 */
	'字符串展开': function expandStr(str) {
		var array = []
		for(var i = 0; i < str.length ; i ++) {
			if(str[i] !== "-") {
				array.push(str[i])
			} else {
				var start = str[i-1].charCodeAt()
				var end = str[i+1].charCodeAt()
				for (var j = start + 1; j < end; j ++) {
					array.push(String.fromCharCode(j))
				}
			}
		}
		return array.join("")
	},
	/**
	 * 判断是否为null或者undefined，是, 返回true,否,返回false
	 * @param  {[type]}  value [description]
	 * @return {Boolean}       [description]
	 */
	isNil: function isNil(value) {
		if(value === null || value === undefined) {
			return true
		} else {
			return false
		}
	},
	/**
	 * 检查 valuealue 是否是 null。
	 * @param  {*}  value [description]
	 * @return {Boolean}       [description]
	 */
	isNull: function isNull(value){
		return value === null
	},
	/**
	 * 根据指定路径，获得对象相对应位置的值，如该路径错误，返回默认设置
	 * @param  {[object]} object [description]
	 * @param  {[type]} path   [description]
	 * @param  {[type]} x      [description]
	 * @return {[type]}        [description]
	 */
	get:function get(object, path, x) {
		var result = []	
		var string = ""
		if(object === null || object === undefined) {
			return x
		} else {
			if (typeof path !== "object") {
				var result = []	
				for (let i = 0; i < path.length; i++) {
					if (path[i] == "[" || path[i] == "]" || path[i] == ".") {
						continue
					} else {
						string = string + path[i]
						if(path[i+1] == "[" || path[i+1] == "]" || path[i+1] == "."||i == path.length - 1){
							result.push(string)
							string = ""
						}
						
					}
					
				}
				return get(object, result, x)
			}
			if (path.length == 1) {
				return object[path[0]]
			} else {
				return get(object[path[0]], path.slice(1), x)
			}
		}
	},
	/**
	 * 比对所有数组，返回一个数组含有每个数组中都存在的值
	 * @param  {[type]}    a    [description]
	 * @param  {...[type]} args [description]
	 * @return {[type]}         [description]
	 */
	intersection: function intersection(a, ...args) {
		var length = args.length
		var result = a
		for (var i = 0; i < a.length; i ++) {
			for (var j = 0; j < length; j ++) {
				var index = args[j].indexOf(result[i])
			if (index != -1) {
						continue
			} else {
					result.splice(i,1)
					i = 0
					}
			}
		}
		return result
	},

	intersectionBy: function intersectionBy(...args){
		var result = args[0]
		var length = args.length - 1
		var iteratee = args[length]
		if(this.isString(iteratee)){
			iteratee = this.property(iteratee)
		}
		for (var i = 0; i < result.length; i ++) {
			var v = iteratee(result[i])
			for (var j = 1; j < length; j ++) {
				var index = args[j].map(iteratee).indexOf(v)
				if (index != -1) {
						continue
				} else {
					result.splice(i,1)
					i = 0
				}
			}
		}
		return result
	
	},

	intersectionWith: function intersectionWith(...args){
		var length = args.length - 1
		var result = args[0]
		var comparator = args[length]
		for(var j = 1; j < length; j++){ 
				result = result.filter(function(value){
					return args[j].some(comparator.bind(null,value))
			})
		}
		return result
	},
/**
 * 返回一个数组，其中每个值都是独一无二的
 * @param  {[array]} array [description]
 * @return {[array]}       [description]
 */
	uniq: function uniq(array){
		var result = []
		var len = array.length
		for(var i = 0; i < len;i++){
			var temp = array[i]
			if(result.indexOf(temp) < 0){
				result.push(temp)
			}
		}
		return result
	},
	/**
	 * 这个方法类似 _.uniq ，除了它接受一个 iteratee （迭代函数），调用每一个数组（array）的每个元素以产生唯一性计算的标准。iteratee 调用时会传入一个参数：(value)。
	 * @param  {[array]} array    [description]
	 * @param  {[function|string]} iteratee [description]
	 * @return {[array]}          [description]
	 */
	uniqBy: function uniqBy(array,iteratee){
		var result = []
		if(this.isString(iteratee)){
			iteratee = this.property(iteratee)
		}
		for(var i = 0; i < array.length;i++){
			var temp = array[i]
			var item = iteratee(temp)
			if(result.indexOf(item) < 0){
				result.push(item)
			}else {
				array.splice(i,1)
				i--
			}
		}
		return array
	},
	
	forEach: function forEach(collection,iteratee){
		for(key in collection){
			iteratee(collection[key], key)
		}
		return collection
	},

	parseJson: function parseJson(text){
		// at for position, ch for current charactor
	  // to map the right function
		let at = 0 
		let ch = text.charAt(at)
		return  value()
		//switch
		function value(){
			switch(ch){
				case "{": return obj()
				case "[": return arr()
				case "\"": return str() 
				default:
				return (ch>="0" && ch <= "9") ? number() : word()
			}
		}

		function number(){
			let string = ""
			var chars = {
				'-': true,
			    '+': true,
			    'e': true,
			    'E': true,
			    '.': true
			}
			while(chars[ch] || ch >="0" && ch <= "9" ){
				string = string + ch
				at++
				ch = text.charAt(at)			
			}
			return parseFloat(string)
		}

		function arr(){
			let result = []
			at++
			ch = text.charAt(at)
			while(ch !== ']'){
				result.push(value())
				if(ch == ","){
					at++
					ch = text.charAt(at)
				} 
			}
			at++
			ch = text.charAt(at)
			return result
		}

		function obj(){
			let result = {}
			at++
			ch = text.charAt(at)
			var key
			var v
			while(ch !== '}'){
				key = value()
				at++
				ch = text.charAt(at)
				v = value()
				result[key] = v
				if (ch === ',') {
	       			at++
	       			ch = text.charAt(at)
	      		}

			}
			at++
			ch = text.charAt(at)
			return result
		}

		function word(){
			function verify(x){
				if(x === ch){
					at++
					ch = text.charAt(at)
					return true
				} else {
					throw new Error("unexpected")
				}
			}
			switch(ch){
				case "t":
				verify("t")
				verify("r")
				verify("u")
				verify("e")
				return true
				case "f":
				verify("f")
				verify("a")
				verify("l")
				verify("s")
				verify("e")
				return false
				case "n":
				verify("n")
				verify("u")
				verify("l")
				verify("l")
				return null
			}
			at++
			ch = text.charAt(at)
		}

		function str(){
			let string = ""
			at++
			ch = text.charAt(at)
			while(ch !== '"'){
				string = string + ch
				at++
				ch = text.charAt(at)
			}
				at++
				ch = text.charAt(at)
				return string
		}
	
	},
/**
 * 数组反序
 * @param  {[array]} array [description]
 * @return {[array]}       [description]
 */
	reverse: function reverse(array){
		if(!array){
			return []
		}
		var result = []
		var len = array.length - 1
		for(let i = len;i >= 0;i--){
			result.push(array[i])
		}
		return result
	},
/**
 * 延迟一段时间后执行，并把参数都传给执行的函数
 * @param  {[function]}    f    [description]
 * @param  {[number]}    wait [description]
 * @param  {...[type]} args [description]
 * @return {[type]}         [description]
 */
	delay: function delay(f,wait,...args){
		setTimeout(function(){
			f(...args)
		}, wait)
	},

/**
 * 对array,和values调用iteratee,根据结果，将values得出的值与array得出的值比对，并排除
 * @param  {array} array    [description]
 * @param  {[array]} values   [description]
 * @param  {[function]} iteratee [description]
 * @return {[array]}          [description]
 */
	differenceBy: function differenceBy(array,values,iteratee = this.identity){
		var result = []
		for(var j in values){
			if(typeof values[j] == 'object'){
				result[j] = taoxiumin.get(values[j], iteratee)
			} else {
				result[j] = iteratee(values[j])
			}
		}
		
		for(var i = 0; i< array.length; i++){
			if(typeof array[i] == 'object'){
				c = taoxiumin.get(array[i], iteratee)
			} else {
				c = iteratee(array[i])
			}

			if(result.indexOf(c) !== -1){
				array.splice(i,1)
				i--
			}
		}
		return array
	},
/**
 * always return the first argument
 * @param  {...[type]} args [description]
 * @return {[type]}         [description]
 */
	identity: function identity(value){
		return value
	},
	/**
	 * 这个方法类似_.difference ，除了它接受一个 comparator （愚人码头注：比较器），它调用比较array，values中的元素。 结果值是从第一数组中选择。comparator 调用参数有两个：(arrVal, othVal)。 
	 * @param  {array} array      [description]
	 * @param  {array} values     [description]
	 * @param  {function} comparator [description]
	 * @return {[array}            [description]
	 */
	differenceWith: function differenceWidth(array,values,comparator){
		var result = []
		for(var i = 0;i <array.length;i++){
			var v1 = array[i]
			for(var j = 0; j< values.length; j++){
				var v2 = values[j]
				if(comparator(v1,v2) == false){
					result.push(array[i])
				}
			}
		}
		return result
	},

	/**
	 * 判断两个对象是否深度相等
	 * @param  {[type]}  value [description]
	 * @param  {[type]}  other [description]
	 * @return {Boolean}       [description]
	 */
	isEqual: function isEqual(value,other){
		var self = this
		if(value === other) { 
			return true
		}
		
		if(value == null || other == null ||( !self.isObjectLike(value) && !self.isObjectLike(other))){
			return value !== value && other !== other  
		}

		if(this.isRegExp(value) && this.isRegExp(other)){
			return value.toString() === other.toString()
		}

		if(typeof value == "object" && typeof other == "object"){
			let propNumber = Object.getOwnPropertyNames(value).length

			if( propNumber === 0 ) {
				return Object.getOwnPropertyNames(other).length === 0 ? true : false
			}

			if(propNumber === 1 && this.isArray(value) && this.isArray(other)){
				return Object.getOwnPropertyNames(other).length === 1 ? true : false
			}

			for( let key in value){
				if( typeof value[key] == 'object'){
					this.isEqual(value[key],other[key])
				}
				if(value[key] === other[key]){
					return true
				}
			}
			return false
		}
		return false
	},

	/**
	 * 输入n，判断n是否为素数
	 * @param  {[type]}  n [description]
	 * @return {Boolean}   [description]
	 */
	isPrime: function isPrime(n){
		if(n < 2){
			return false
		}
		if(n == 2){
			return true
		}
		for(var i = 2; i <= Math.sqrt(n); i++){
			if(n % i == 0){
				return false
			}
		}
		return true
	},
	/**
	 * 检查 value 是否是 Array 类对象
	 * @param  {*}  ary [description]
	 * @return {Boolean}     [description]
	 */
	isArray: function isArray(ary){
		return Object.prototype.toString.call(ary) === '[object Array]'
	},

	isBoolean: function isBoolean(value){
		return Object.prototype.toString.call(value) === '[object Boolean]'
	},
	/**
	 *  检查 value 是否是 字符串
	 * @param  {*}  str [description]
	 * @return {Boolean}     [description]
	 */
	isString: function isString(str){
		return Object.prototype.toString.call(str) === '[object String]'
	},
	/**
	 * 检查 value 是否是一个Set对象。
	 * @param  {*}  s [description]
	 * @return {Boolean}   [description]
	 */
	isSet: function isSet(s){
		return Object.prototype.toString.call(s) === '[object Set]'
	},
	/**
	 * 检查 value 是否是一个Symbol。
	 * @param  {*}  sym [description]
	 * @return {Boolean}     [description]
	 */
	isSymbol: function isSymbol(sym){
		return Object.prototype.toString.call(sym) === '[object Symbol]'
	},
	/**
	 * 检查 value 是否为RegExp对象。
	 * @param  {*}  reg [description]
	 * @return {Boolean}     [description]
	 */
	isRegExp: function isRegExp(reg){
		return Object.prototype.toString.call(reg) === '[object RegExp]'
	},
	/**
	 * 检查 value 是否为 Object 的 language type。 (例如： arrays, functions, objects, regexes,new Number(0), 以及 new String(''))
	 * @param  {*}  value [description]
	 * @return {Boolean}       [description]
	 */
	isObject: function isObject(value){
		var type = typeof value
		return value != null &&( type == 'object'|| type == 'function')
	},
	/**
	 * 检查 value 是否是 类对象。 如果一个值是类对象，那么它不应该是 null，而且 typeof 后的结果是 "object"。
	 * @param  {*}  value [description]
	 * @return {Boolean}       [description]
	 */
	isObjectLike: function isObjectLike(value){
		return value != null && typeof value == 'object'
	},
	/**
	 * 检查 value 是否是普通对象。 也就是说该对象由 Object 构造函数创建，或者 [[Prototype]] 为 null 。
	 * @param  {*}  value [description]
	 * @return {Boolean}       [description]
	 */
	isPlainObject: function isPlainObject(value){
		return value.constructor == Object || value.__proto__.__proto__ == null
	},
	/**
	 * 检查 value 是否是原始Number数值型 或者 对象。 
	 * @param  {*}  value [description]
	 * @return {Boolean}       [description]
	 */
	isNumber: function isNumber(value){
		return Object.prototype.toString.call(value) === '[object Number]'
	},

	isNaN: function isNaN(value){
		return this.isNumber(value) && value != +value 
	},

	isError: function isError(value){
		return Object.prototype.toString.call(value) === '[object Error]'
	},

	isFunction : function isFunction(value){
		return Object.prototype.toString.call(value) === '[object Function]'
	},
	isMap: function isMap(value){
		return Object.prototype.toString.call(value) === '[object Map]'
	},

	isUndefined: function(value){
		return value === undefined
	},

	/**
	 * 使用 iteratee 遍历自身的可枚举属性。 iteratee 会传入3个参数：(value, key, object)。 如果返回 false，iteratee 会提前退出遍历。
	 * @param  {object} object   [description]
	 * @param  {[founction]} iteratee [description]
	 * @return {[type]}          [description]
	 */
	forOwn: function forOwn(object, iteratee){
		var hasOwn = Object.prototype.hasOwnProperty
		for(let key in object){
			if(hasOwn.call(object,key)){
				iteratee(object[key],key,object)
			}
		}
		return object
	},
	/**
	 * 该方法返回第一个通过 predicate 判断为真值的元素的索引值（index），而不是元素本身
	 * @param  {array} array     [description]
	 * @param  {*} predicate [description]
	 * @param  {Number} fromIndex [description]
	 * @return {Number}           [description]
	 */
	findIndex: function findIndex(array, predicate,fromIndex = 0){
		var self = this
		if(self.isString(predicate)){
			predicate = self.property(predicate)
		}
		if(self.isArray(predicate)){
			predicate = self.matchesProperty(predicate[0],predicate[1])
		}

		if(self.isPlainObject(predicate)){
			predicate = self.matches(predicate)
		}
		for (let i = fromIndex; i < array.length;i++){
			if(predicate(array[i]) === true){
				return i
			}
		}
			
	},

	indexOf: function indexOf(array,value,fromIndex = 0){
		var len = array? array.length : 0
		if(!len){
			return -1
		}
		if( fromIndex < 0){
			fromIndex = Math.max(length + fromIndex, 0)
		} 

		for(let i = fromIndex; i< array.length; i++){
			if(this.isEqual(array[i],value)){
				return i
			}
		}
		return -1
	},


	/**
	 * 该方法从右往左开始搜索返回第一个通过 predicate 判断为真值的元素的索引值（index），而不是元素本身
	 * @param  {array} array     [description]
	 * @param  {*} predicate	 [description]
	 * @param  {Number} fromIndex [description]
	 * @return {Number}           [description]
	 */
	findLastIndex:function findLastIndex(array, predicate,fromIndex = array.length - 1){
		var self = this
		if(self.isString(predicate)){
			predicate = self.property(predicate)
		}
		if(self.isArray(predicate)){
			predicate = self.matchesProperty(predicate[0],predicate[1])
		}

		if(self.isPlainObject(predicate)){
			predicate = self.matches(predicate)
		}
		for (let i = fromIndex; i>= 0;i--){
			if(predicate(array[i]) === true){
				return i
			}
		}
			
	},
	/**
	 * 创建一个返回给定对象的 path 的值的函数。
	 * @param  {string} path [description]
	 * @return {function}      [description]
	 */
	property: function property(path){
		return function(o){
			return o == undefined? undefined:o[path]
		}
	},
	/**
	 * 创建一个深比较的方法来比较给定对象的 path 的值是否是 srcValue 。 如果是返回 true ，否则返回 false 。 
	 * @param  {string} path     [description]
	 * @param  {*} srcValue [description]
	 * @return {function}          [description]
	 */
	matchesProperty: function matchesProperty(path,srcValue){
		let self = this
		return function(o){
			if(self.isString(path)){
				return o == undefined ? false : (self.isEqual(o[path],srcValue))
			}
		}
	},
	/**
	 * 创建一个深比较的方法来比较给定的对象和 source 对象。 如果给定的对象拥有相同的属性值返回 true，否则返回 false。 
	 * @param  {*} source [description]
	 * @return {function}        [description]
	 */
	matches : function matches(source){
		let self = this
		return function(object){
			 return self.isMatch(object,source)
		}
	},

	isMatch: function isMatch(object,source){
		if(source === undefined || source === null ||Object.keys(source).length === 0  ){
			return true
		}
		for(let key in source){
			if(object[key] === undefined){
				return false
			}
			if(this.isEqual(object[key],source[key]) === false){
				return false
			}
		}
		return true
	},

	isEmpty: function isEmpty(value){
		if(value == null){
			return true
		}
		
	},

	concat: function concat(array,...values){
		if(!array){
			return []
		}
		let result = array.map(it =>it)
		var self = this
		return values.reduce(function(a,b){
			if(self.isArray(b)){
				result.push(...b)
			} else {
				result.push(b)
			}
			return result
		}, array)

	},
	/**
	 * 创建一个按顺序排列的唯一值的数组。所有给定数组的元素值使用SameValueZero做等值比较。（愚人码头注： arrays（数组）的并集，按顺序返回，返回数组的元素是唯一的）
	 * @param  {...[array]} args [description]
	 * @return {[array]}         [description]
	 */
	union : function union(...args){
		return this.uniq(this.concat([],...args))
	},
	/**
	 * 这个方法类似 _.union ，除了它接受一个 iteratee （迭代函数），调用每一个数组（array）的每个元素以产生唯一性计算的标准。iteratee 会传入一个参数：(value)。
	 * @param  {...[array]} args [description]
	 * @return {[array]}         [description]
	 */
	unionBy: function unionBy(...args){
		let iteratee = args[args.length - 1]
		if(this.isString(iteratee)){
			iteratee = this.property(iteratee)
		}
		let item = this.union(...args.slice(0,args.length - 1))
		let result = []
		for(var i = 0; i < item.length;i++){
			let comp = iteratee(item[i])
			if(result.indexOf(comp) == -1){
				result.push(comp)
			} else {
				item.splice(i,1)
			}
		}
		return item

	},

	unionWith: function unionWith(...args){

	},

	最大公约数: function(a,b){
		var start = a >b ? b:a
		var x = start
		while(true){
			if(a % x ===0 && b % x === 0){
				return x
			}
			x--
		}
	},

	最小公倍数: function (a,b){
		var start = a >b? a:b
		var x = start
		while(true){
			if(x % a === 0 && x % b === 0){
				return x
			}
			x++
		}
	},

	size: function size(collection){
		if(this.isPlainObject(collection)){
			return Object.keys(collection).length
		} else {
			return collection.length
		}
	},

	some: function some(collection, predicate){
		var self = this
		if(self.isString(predicate)){
			predicate = self.property(predicate)
		}
		if(self.isArray(predicate)){
			predicate = self.matchesProperty(predicate[0],predicate[1])
		}

		if(self.isPlainObject(predicate)){
			predicate = self.matches(predicate)
		}
		for(let key in collection){
			if(predicate(collection[key],key,collection) == true){
				return true
			}
		}
		return false
	},
	
	keyBy: function keyBy(collection,iteratee){
		if(this.isString(iteratee)){
			iteratee = this.property(iteratee)
		}
		let keys = {}
		let key
		for(let value in collection){
			key = iteratee(collection[value])
				keys[key] = collection[value]
		}

		return keys
	},

	map: function map(collection,iteratee){
		if(this.isString(iteratee)){
			iteratee = this.property(iteratee)
		}
		let result = []
		for(let key in collection){
			key = key.search(/[0-9]/g) === -1 ? key : +key
			result.push(iteratee(collection[key],key,collection))
		}
		return result
	},

	partition: function partition(collection, predicate){
		var self = this
		if(self.isString(predicate)){
			predicate = self.property(predicate)
		}
		if(self.isArray(predicate)){
			predicate = self.matchesProperty(predicate[0],predicate[1])
		}

		if(self.isPlainObject(predicate)){
			predicate = self.matches(predicate)
		}
		var truthy = []
		var falsey = []
		for( let key in collection){
			let value = collection[key]
			if(predicate(value) === true){
				truthy.push(value)
			} else {
				falsey.push(value)
			}
		}
		return [truthy,falsey]
	},
	toArray: function toArray(value){
		if(!value || typeof value === 'number'){
			return []
		} else {
			return Object.values.call(null,value)
		}
	},	
	keys: function keys(obj){
		if(!obj){
			return []
		}
		let result = []
		for(let key in obj){
			if(obj.hasOwnProperty(key)){
				result.push(key)
			}
		}
		return result
	},
	omit: function omit(obj, props){
		let result = {}
		for(let value in obj){
			if(props.indexOf(value) === -1 ){
				result[value] = obj[value]
			}
		}
		return result
	},

	pick: function pick(obj,props){
		let result = {}
		for(let value in obj){
			if(props.indexOf(value) !== -1 ){
				result[value] = obj[value]
			}
		}
		return result
	},
	
	pickBy: function pickBy(obj,predicate){
		let result = {}
		for(let key in obj){
			if(predicate(obj[key],key) === true){
				result[key] = obj[key]
			}
		}
		return result
	},

}
