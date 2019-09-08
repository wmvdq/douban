var Mock = require("mockjs");
Mock.mock("/shouye","get",require("./json/shouye.json"))
Mock.mock("/movie","get",require("./json/movie.json"))
Mock.mock("/faxian","get",require("./json/faxianhaodianying.json"))
Mock.mock("/goodbook","get",require("./json/goodbook"))
Mock.mock("/books","get",require("./json/books"))
Mock.mock("/xiaozua","get",require("./json/xiaozua"))
Mock.mock("/xiaozub","get",require("./json/xiaozub"))
Mock.mock("/xiaozuc","get",require("./json/xiaozuc"))


