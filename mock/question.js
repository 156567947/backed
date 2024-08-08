const Mock = require("mockjs");
const { getQuestionList } = require("./data/getQuestionList");

const Random = Mock.Random;

module.exports = [
  {
    //获取单个问卷
    url: "/api/question/:id",
    method: "get",
    response() {
      return {
        errno: 0,
        data: {
          id: Random.id(),
          title: Random.ctitle(5, 10),
        },
      };
    },
  },
  {
    //创建问卷
    url: "/api/question",
    method: "post",
    response() {
      return {
        errno: 0,
        data: {
          id: Random.id(),
        },
      };
    },
  },
  {
    //获取问卷列表
    url: "/api/question",
    method: "get",
    response(ctx) {
      const { url = "", query = {} } = ctx;
      const isDeleted = url.includes("isDeleted=true");
      const isStar = url.includes("isStar=true");
      const pageSize = parseInt(query.pageSize) || 10;
      return {
        errno: 0,
        data: {
          list: getQuestionList({ isDeleted, isStar, LEN: pageSize }),
          total: 100,
        },
      };
    },
  },
];
