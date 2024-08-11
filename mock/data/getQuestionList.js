//生产问卷列表

const Mock = require("mockjs");
const Random = Mock.Random;

function getQuestionList(opt = {}) {
  const { LEN = 10, isDeleted = false, isStar = false } = opt;
  let list = [];
  for (let i = 0; i < LEN; i++) {
    list.push({
      id: Random.id(),
      title: Random.ctitle(5, 10),
      isPubished: Random.boolean(),
      isStar,
      answerCount: Random.integer(0, 100),
      createdAt: Random.date("yyyy-MM-dd"),
      isDeleted,
    });
  }
  return list;
}

module.exports = { getQuestionList };
