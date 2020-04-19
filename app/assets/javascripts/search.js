$(function() {

  var search_list = $(".content__post");

  function appendArticle(article) {
    if(article.user_sign_in && article.user_sign_in.id == article.user_id){
      var current_user = `<li>
                            <a href="/articles/${article.id}/edit" data-method="get" >編集</a>
                          </li>
                          <li>
                            <a href="/articles/${article.id}" data-method="delete" >削除</a>
                          </li>`
    } else {
      var current_user = ""
    }

    var html = `<p>タイトル： ${article.title} 製作者：
                  <span class = "index__post__name">
                    <a href="/users/${article.user_id}">${article.name}</a>
                  </span>
                </p>
                <div class = "content__post__text">
                  <p id = "JS">${article.body}</p><br/>
                  <div class = "more">
                    <div class = "more__info">
                      <ul class = "more__info__list">
                        <li>
                          <a href="/articles/${article.id}" data-method="get" >詳細</a>
                        </li>
                        ${current_user}
                      </ul>
                    </div>
                  </div>
                </div>`
    search_list.append(html);
  }

  function appendErrMsgToHTML(msg) {
    var html = `<div class='name'>${ msg }</div>`
    search_list.append(html);
  }

  $(".search__form__input").on("keyup", function() {
    var input = $(".search__form__input").val();
    $.ajax({
      type: 'GET',
      url: '/articles/searches',
      data: { keyword: input },
      dataType: 'json'
    })
    .done(function(articles) {
      search_list.empty();
      if (articles.length !== 0) {
        articles.forEach(function(article){
          appendArticle(article);
        });
      } else {
        appendErrMsgToHTML("一致するツイートがありません");
      }
    })
    .fail(function() {
      alert('error');
    });
  });
});