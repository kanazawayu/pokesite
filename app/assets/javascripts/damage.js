function hcalc(){
  var hrv = Number($('#hrv').val());
  var hiv = Number($('#hiv').val());
  var hev = Number($('#hev').val());
  // 小数点以下切り捨て
  var hiv = Math.floor(hiv/2)
  var hev = Math.floor(hev/8)
  // 計算
  hresult = Math.floor((hrv+hiv+hev+60));
  $('#hresult').html(hresult);
}

function typecalc(){
  var atype1 = String($('#atype1').val());
  var atype2 = String($('#atype2').val());
  $('#mytype1').html(atype1);
  $('#mytype2').html(atype2);
}

function acalc(){
  var arv = Number($('#arv').val());
  var aiv = Number($('#aiv').val());
  var aev = Number($('#aev').val());
  var anc = Number($('#anc').val());
  // 小数点以下切り捨て
  var aiv = Math.floor(aiv/2)
  var aev = Math.floor(aev/8)
  // 計算
  aresult = Math.floor((arv+aiv+aev+5)*anc);
  $('#aresult').html(aresult);
  $('#myares').html(aresult);
}

function bcalc(){
  var brv = Number($('#brv').val());
  var biv = Number($('#biv').val());
  var bev = Number($('#bev').val());
  var bnc = Number($('#bnc').val());
  // 小数点以下切り捨て
  var biv = Math.floor(biv/2)
  var bev = Math.floor(bev/8)
  // 計算
  bresult = Math.floor((brv+biv+bev+5)*bnc);
  $('#bresult').html(bresult);
}

function ccalc(){
  var crv = Number($('#crv').val());
  var civ = Number($('#civ').val());
  var cev = Number($('#cev').val());
  var cnc = Number($('#cnc').val());
  // 小数点以下切り捨て
  var civ = Math.floor(civ/2)
  var cev = Math.floor(cev/8)
  // 計算
  cresult = Math.floor((crv+civ+cev+5)*cnc);
  $('#cresult').html(cresult);
  $('#mycres').html(cresult);
}

function dcalc(){
  var drv = Number($('#drv').val());
  var div = Number($('#div').val());
  var dev = Number($('#dev').val());
  var dnc = Number($('#dnc').val());
  // 小数点以下切り捨て
  var div = Math.floor(div/2)
  var dev = Math.floor(dev/8)
  // 計算
  dresult = Math.floor((drv+div+dev+5)*dnc);
  $('#dresult').html(dresult);
}

function scalc(){
  var srv = Number($('#srv').val());
  var siv = Number($('#siv').val());
  var sev = Number($('#sev').val());
  var snc = Number($('#snc').val());
  // 小数点以下切り捨て
  var siv = Math.floor(siv/2)
  var sev = Math.floor(sev/8)
  // 計算
  sresult = Math.floor((srv+siv+sev+5)*snc);
  $('#sresult').html(sresult);
}

// ~~~敵側ステータス~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function ehcalc(){
  var ehrv = Number($('#ehrv').val());
  var ehiv = Number($('#ehiv').val());
  var ehev = Number($('#ehev').val());
  // 小数点以下切り捨て
  var ehiv = Math.floor(ehiv/2)
  var ehev = Math.floor(ehev/8)
  // 計算
  ehresult = Math.floor((ehrv+ehiv+ehev+60));
  $('#ehresult').html(ehresult);
  $('#youhres').html(ehresult);
}

function etypecalc(){
  var etype1 = $('#etype1').val();
  var etype2 = $('#etype2').val();
  $('#youtype1').html(etype1);
  $('#youtype2').html(etype2);
}

function eacalc(){
  var earv = Number($('#earv').val());
  var eaiv = Number($('#eaiv').val());
  var eaev = Number($('#eaev').val());
  var eanc = Number($('#eanc').val());
  // 小数点以下切り捨て
  var eaiv = Math.floor(eaiv/2)
  var eaev = Math.floor(eaev/8)
  // 計算
  earesult = Math.floor((earv+eaiv+eaev+5)*eanc);
  $('#earesult').html(earesult);
}

function ebcalc(){
  var ebrv = Number($('#ebrv').val());
  var ebiv = Number($('#ebiv').val());
  var ebev = Number($('#ebev').val());
  var ebnc = Number($('#ebnc').val());
  // 小数点以下切り捨て
  var ebiv = Math.floor(ebiv/2)
  var ebev = Math.floor(ebev/8)
  // 計算
  ebresult = Math.floor((ebrv+ebiv+ebev+5)*ebnc);
  $('#ebresult').html(ebresult);
  $('#youbres').html(ebresult);
}

function eccalc(){
  var ecrv = Number($('#ecrv').val());
  var eciv = Number($('#eciv').val());
  var ecev = Number($('#ecev').val());
  var ecnc = Number($('#ecnc').val());
  // 小数点以下切り捨て
  var eciv = Math.floor(eciv/2)
  var ecev = Math.floor(ecev/8)
  // 計算
  ecresult = Math.floor((ecrv+eciv+ecev+5)*ecnc);
  $('#ecresult').html(ecresult);
}

function edcalc(){
  var edrv = Number($('#edrv').val());
  var ediv = Number($('#ediv').val());
  var edev = Number($('#edev').val());
  var ednc = Number($('#ednc').val());
  // 小数点以下切り捨て
  var ediv = Math.floor(ediv/2)
  var edev = Math.floor(edev/8)
  // 計算
  edresult = Math.floor((edrv+ediv+edev+5)*ednc);
  $('#edresult').html(edresult);
  $('#youdres').html(edresult);
}

function escalc(){
  var esrv = Number($('#esrv').val());
  var esiv = Number($('#esiv').val());
  var esev = Number($('#esev').val());
  var esnc = Number($('#esnc').val());
  // 小数点以下切り捨て
  var esiv = Math.floor(esiv/2)
  var esev = Math.floor(esev/8)
  // 計算
  esresult = Math.floor((esrv+esiv+esev+5)*esnc);
  $('#esresult').html(esresult);
}

function clickBtn1(){
  // 技の分類
  var aorc = Number($('#aorc').val());
  // 技のタイプ
  var tectype = $('#tectype').val();
  // 技の威力
  var power = Number($('#power').val());
  // // 天候攻撃側
  // var myweat = Number($('#myweat').val());
  // フィールド攻撃側
  var myfield = Number($('#myfield').val());
  // // 天候防御
  // var youweat = Number($('#youweat').val());
  // 不xーるど防御
  var youfield = Number($('#youfield').val());
  // こうげき状態
  var mystats = Number($('#mystats').val());
  //防御状態
  var youstats = Number($('#youstats').val());
  // 防御ダイマックス
  var youdaimax = Number($('#youdaimax').val());
  // こうげき道具
  var mytool = Number($('#mytool').val());
  // 防御道具
  var youtool = Number($('#youtool').val());

// タイプ一致の計算~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  var atype1 = $('#atype1').val();
  var atype2 = $('#atype2').val();
  var match = 1
  if (tectype == atype1 || tectype == atype2) {
    match = 1.5
  }
// 弱点の計算~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  var etype1 = $('#etype1').val();
  var etype2 = $('#etype2').val();
  var comp = 1
  if (tectype == "ノーマル") {
    if (etype1 == "ゴースト" || etype2 == "ゴースト"){
      comp = comp*0
    }

    if (etype1 == "いわ" || etype2 == "いわ"){
      comp = comp*0.5
    }

    if (etype1 == "はがね" || etype2 == "はがね"){
      comp = comp*0.5
    }

  }else if (tectype == "かくとう") {
    if (etype1 == "ノーマル" || etype2 == "ノーマル"){
      comp = comp*2
    }

    if (etype1 == "こおり" || etype2 == "こおり"){
      comp = comp*2
    }

    if (etype1 == "いわ" || etype2 == "いわ"){
      comp = comp*2
    }

    if (etype1 == "はがね" || etype2 == "はがね"){
      comp = comp*2
    }

    if (etype1 == "あく" || etype2 == "あく"){
      comp = comp*2
    }

    if (etype1 == "どく" || etype2 == "どく"){
      comp = comp*0.5
    }

    if (etype1 == "ひこう" || etype2 == "ひこう"){
      comp = comp*0.5
    }

    if (etype1 == "エスパー" || etype2 == "エスパー"){
      comp = comp*0.5
    }

    if (etype1 == "むし" || etype2 == "むし"){
      comp = comp*0.5
    }

    if (etype1 == "フェアリー" || etype2 == "フェアリー"){
      comp = comp*0.5
    }

    if (etype1 == "ゴースト" || etype2 == "ゴースト"){
      comp = comp*0
    }
  }else if (tectype == "ひこう") {
    if (etype1 == "くさ" || etype2 == "くさ"){
      comp = comp*2
    }

    if (etype1 == "かくとう" || etype2 == "かくとう"){
      comp = comp*2
    }

    if (etype1 == "むし" || etype2 == "むし"){
      comp = comp*2
    }

    if (etype1 == "でんき" || etype2 == "でんき"){
      comp = comp*0.5
    }

    if (etype1 == "いわ" || etype2 == "いわ"){
      comp = comp*0.5
    }

    if (etype1 == "はがね" || etype2 == "はがね"){
      comp = comp*0.5
    }
  }else if (tectype == "どく") {
    if (etype1 == "フェアリー" || etype2 == "フェアリー"){
      comp = comp*2
    }

    if (etype1 == "くさ" || etype2 == "くさ"){
      comp = comp*2
    }

    if (etype1 == "どく" || etype2 == "どく"){
      comp = comp*0.5
    }

    if (etype1 == "いわ" || etype2 == "いわ"){
      comp = comp*0.5
    }

    if (etype1 == "ゴースト" || etype2 == "ゴースト"){
      comp = comp*0.5
    }

    if (etype1 == "じめん" || etype2 == "じめん"){
      comp = comp*0.5
    }

    if (etype1 == "はがね" || etype2 == "はがね"){
      comp = comp*0
    }
  }else if (tectype == "じめん") {
    if (etype1 == "ほのお" || etype2 == "ほのお"){
      comp = comp*2
    }

    if (etype1 == "でんき" || etype2 == "でんき"){
      comp = comp*2
    }

    if (etype1 == "どく" || etype2 == "どく"){
      comp = comp*2
    }

    if (etype1 == "いわ" || etype2 == "いわ"){
      comp = comp*2
    }

    if (etype1 == "はがね" || etype2 == "はがね"){
      comp = comp*2
    }

    if (etype1 == "むし" || etype2 == "むし"){
      comp = comp*0.5
    }

    if (etype1 == "くさ" || etype2 == "くさ"){
      comp = comp*0.5
    }

    if (etype1 == "ひこう" || etype2 == "ひこう"){
      comp = comp*0
    }
  }else if (tectype == "いわ") {
    if (etype1 == "ほのお" || etype2 == "ほのお"){
      comp = comp*2
    }

    if (etype1 == "こおり" || etype2 == "こおり"){
      comp = comp*2
    }

    if (etype1 == "ひこう" || etype2 == "ひこう"){
      comp = comp*2
    }

    if (etype1 == "むし" || etype2 == "むし"){
      comp = comp*2
    }

    if (etype1 == "かくとう" || etype2 == "かくとう"){
      comp = comp*0.5
    }

    if (etype1 == "じめん" || etype2 == "じめん"){
      comp = comp*0.5
    }

    if (etype1 == "はがね" || etype2 == "はがね"){
      comp = comp*0.5
    }
  }else if (tectype == "むし") {
    if (etype1 == "くさ" || etype2 == "くさ"){
      comp = comp*2
    }

    if (etype1 == "エスパー" || etype2 == "エスパー"){
      comp = comp*2
    }

    if (etype1 == "あく" || etype2 == "あく"){
      comp = comp*2
    }

    if (etype1 == "ほのお" || etype2 == "ほのお"){
      comp = comp*0.5
    }

    if (etype1 == "かくとう" || etype2 == "かくとう"){
      comp = comp*0.5
    }

    if (etype1 == "どく" || etype2 == "どく"){
      comp = comp*0.5
    }

    if (etype1 == "ひこう" || etype2 == "ひこう"){
      comp = comp*0.5
    }

    if (etype1 == "ゴースト" || etype2 == "ゴースト"){
      comp = comp*0.5
    }

    if (etype1 == "はがね" || etype2 == "はがね"){
      comp = comp*0.5
    }

    if (etype1 == "フェアリー" || etype2 == "フェアリー"){
      comp = comp*0.5
    }
  }else if (tectype == "ゴースト") {
    if (etype1 == "ノーマル" || etype2 == "ノーマル"){
      comp = comp*0
    }

    if (etype1 == "エスパー" || etype2 == "エスパー"){
      comp = comp*2
    }

    if (etype1 == "ゴースト" || etype2 == "ゴースト"){
      comp = comp*2
    }

    if (etype1 == "あく" || etype2 == "あく"){
      comp = comp*0.5
    }
  }else if (tectype == "はがね") {
    if (etype1 == "こおり" || etype2 == "こおり"){
      comp = comp*2
    }

    if (etype1 == "いわ" || etype2 == "いわ"){
      comp = comp*2
    }

    if (etype1 == "フェアリー" || etype2 == "フェアリー"){
      comp = comp*2
    }

    if (etype1 == "はがね" || etype2 == "はがね"){
      comp = comp*0.5
    }

    if (etype1 == "ほのお" || etype2 == "ほのお"){
      comp = comp*0.5
    }

    if (etype1 == "みず" || etype2 == "みず"){
      comp = comp*0.5
    }

    if (etype1 == "でんき" || etype2 == "でんき"){
      comp = comp*0.5
    }
  }else if (tectype == "ほのお") {
    if (etype1 == "こおり" || etype2 == "こおり"){
      comp = comp*2
    }

    if (etype1 == "くさ" || etype2 == "くさ"){
      comp = comp*2
    }

    if (etype1 == "むし" || etype2 == "むし"){
      comp = comp*2
    }

    if (etype1 == "はがね" || etype2 == "はがね"){
      comp = comp*2
    }

    if (etype1 == "ほのお" || etype2 == "ほのお"){
      comp = comp*0.5
    }

    if (etype1 == "みず" || etype2 == "みず"){
      comp = comp*0.5
    }

    if (etype1 == "いわ" || etype2 == "いわ"){
      comp = comp*0.5
    }

    if (etype1 == "ドラゴン" || etype2 == "ドラゴン"){
      comp = comp*0.5
    }
  }else if (tectype == "みず") {
    if (etype1 == "ほのお" || etype2 == "ほのお"){
      comp = comp*2
    }

    if (etype1 == "いわ" || etype2 == "いわ"){
      comp = comp*2
    }

    if (etype1 == "じめん" || etype2 == "じめん"){
      comp = comp*2
    }

    if (etype1 == "みず" || etype2 == "みず"){
      comp = comp*0.5
    }

    if (etype1 == "くさ" || etype2 == "くさ"){
      comp = comp*0.5
    }

    if (etype1 == "ドラゴン" || etype2 == "ドラゴン"){
      comp = comp*0.5
    }
  }else if (tectype == "くさ") {
    if (etype1 == "みず" || etype2 == "みず"){
      comp = comp*2
    }

    if (etype1 == "いわ" || etype2 == "いわ"){
      comp = comp*2
    }

    if (etype1 == "じめん" || etype2 == "じめん"){
      comp = comp*2
    }

    if (etype1 == "ほのお" || etype2 == "ほのお"){
      comp = comp*0.5
    }

    if (etype1 == "くさ" || etype2 == "くさ"){
      comp = comp*0.5
    }

    if (etype1 == "どく" || etype2 == "どく"){
      comp = comp*0.5
    }

    if (etype1 == "ひこう" || etype2 == "ひこう"){
      comp = comp*0.5
    }

    if (etype1 == "むし" || etype2 == "むし"){
      comp = comp*0.5
    }

    if (etype1 == "ドラゴン" || etype2 == "ドラゴン"){
      comp = comp*0.5
    }

    if (etype1 == "はがね" || etype2 == "はがね"){
      comp = comp*0.5
    }
  }else if (tectype == "でんき") {
    if (etype1 == "みず" || etype2 == "みず"){
      comp = comp*2
    }

    if (etype1 == "ひこう" || etype2 == "ひこう"){
      comp = comp*2
    }

    if (etype1 == "くさ" || etype2 == "くさ"){
      comp = comp*0.5
    }

    if (etype1 == "でんき" || etype2 == "でんき"){
      comp = comp*0.5
    }

    if (etype1 == "ドラゴン" || etype2 == "ドラゴン"){
      comp = comp*0.5
    }

    if (etype1 == "じめん" || etype2 == "じめん"){
      comp = comp*0
    }
  }else if (tectype == "エスパー") {
    if (etype1 == "どく" || etype2 == "どく"){
      comp = comp*2
    }

    if (etype1 == "かくとう" || etype2 == "かくとう"){
      comp = comp*2
    }

    if (etype1 == "エスパー" || etype2 == "エスパー"){
      comp = comp*0.5
    }

    if (etype1 == "はがね" || etype2 == "はがね"){
      comp = comp*0.5
    }

    if (etype1 == "あく" || etype2 == "あく"){
      comp = comp*0
    }
  }else if (tectype == "こおり") {
    if (etype1 == "くさ" || etype2 == "くさ"){
      comp = comp*2
    }

    if (etype1 == "じめん" || etype2 == "じめん"){
      comp = comp*2
    }

    if (etype1 == "ひこう" || etype2 == "ひこう"){
      comp = comp*2
    }

    if (etype1 == "ドラゴン" || etype2 == "ドラゴン"){
      comp = comp*2
    }

    if (etype1 == "ほのお" || etype2 == "ほのお"){
      comp = comp*0.5
    }

    if (etype1 == "みず" || etype2 == "みず"){
      comp = comp*0.5
    }

    if (etype1 == "こおり" || etype2 == "こおり"){
      comp = comp*0.5
    }

    if (etype1 == "はがね" || etype2 == "はがね"){
      comp = comp*0.5
    }
  }else if (tectype == "ドラゴン") {
    if (etype1 == "ドラゴン" || etype2 == "ドラゴン"){
      comp = comp*2
    }

    if (etype1 == "はがね" || etype2 == "はがね"){
      comp = comp*0.5
    }

    if (etype1 == "フェアリー" || etype2 == "フェアリー"){
      comp = comp*0
    }
  }else if (tectype == "あく") {
    if (etype1 == "エスパー" || etype2 == "エスパー"){
      comp = comp*2
    }

    if (etype1 == "ゴースト" || etype2 == "ゴースト"){
      comp = comp*2
    }

    if (etype1 == "かくとう" || etype2 == "かくとう"){
      comp = comp*0.5
    }

    if (etype1 == "あく" || etype2 == "あく"){
      comp = comp*0.5
    }

    if (etype1 == "フェアリー" || etype2 == "フェアリー"){
      comp = comp*0.5
    }
  }else if (tectype == "フェアリー") {
    if (etype1 == "かくとう" || etype2 == "かくとう"){
      comp = comp*2
    }

    if (etype1 == "あく" || etype2 == "あく"){
      comp = comp*2
    }

    if (etype1 == "ドラゴン" || etype2 == "ドラゴン"){
      comp = comp*2
    }

    if (etype1 == "ほのお" || etype2 == "ほのお"){
      comp = comp*0.5
    }

    if (etype1 == "どく" || etype2 == "どく"){
      comp = comp*0.5
    }

    if (etype1 == "はがね" || etype2 == "はがね"){
      comp = comp*0.5
    }
  }

  var w = document.getElementById( "weat" ) ;
  var radioNodeList = w.weatname ;
  var weat = radioNodeList.value ;
  var weatmag = 1
  if (weat == "---") {

  }else if (weat == "あめ") {
    if (tectype == "ほのお") {
      weatmag = weatmag*0.5
    }else if (tectype == "みず") {
      weatmag = weatmag*1.5
    }

  }else if (weat == "はれ") {
    if (tectype == "ほのお") {
      weatmag = weatmag*1.5
    }else if (tectype == "みず") {
      weatmag = weatmag*0.5
    }

  }else if (weat == "すな") {
    if (etype1 == "いわ" || etype2 == "いわ") {
      edresult = edresult*1.5
    }
  }else if (weat == "あられ") {

  }

  if (aorc == 0){
    // var power = Math.round(power*myfield);
    // var power = Math.round(power*youfield);
    var maxdamage = Math.floor(22*power*aresult/ebresult);
    var maxdamage = Math.floor(maxdamage/50 + 2);
    var maxdamage = Math.ceil(maxdamage*weatmag-0.5);
    var lowdamage = Math.floor(maxdamage*0.85);
    var maxdamage = Math.ceil(maxdamage*match-0.5);
    var lowdamage = Math.ceil(lowdamage*match-0.5);
    var maxdamage = Math.floor(maxdamage*comp);
    var lowdamage = Math.floor(lowdamage*comp);
    var maxdamage = Math.ceil(maxdamage*mystats-0.5);
    var lowdamage = Math.ceil(lowdamage*mystats-0.5);
    var maxdamage = Math.ceil(maxdamage*youstats-0.5);
    var lowdamage = Math.ceil(lowdamage*youstats-0.5);
    var maxdamage = Math.ceil(maxdamage*mytool-0.5);
    var lowdamage = Math.ceil(lowdamage*mytool-0.5);
    var maxdamage = Math.ceil(maxdamage*youtool-0.5);
    var lowdamage = Math.ceil(lowdamage*youtool-0.5);
  }else{
    // var power = Math.round(power*myfield);
    // var power = Math.round(power*youfield);
    var maxdamage = Math.floor(22*power*cresult/edresult);
    var maxdamage = Math.floor(maxdamage/50 + 2);
    var maxdamage = Math.ceil(maxdamage*weatmag-0.5);
    var lowdamage = Math.floor(maxdamage*0.85);
    var maxdamage = Math.ceil(maxdamage*match-0.5);
    var lowdamage = Math.ceil(lowdamage*match-0.5);
    var maxdamage = Math.floor(maxdamage*comp);
    var lowdamage = Math.floor(lowdamage*comp);
    var maxdamage = Math.ceil(maxdamage*mystats-0.5);
    var lowdamage = Math.ceil(lowdamage*mystats-0.5);
    var maxdamage = Math.ceil(maxdamage*youstats-0.5);
    var lowdamage = Math.ceil(lowdamage*youstats-0.5);
    var maxdamage = Math.ceil(maxdamage*mytool-0.5);
    var lowdamage = Math.ceil(lowdamage*mytool-0.5);
    var maxdamage = Math.ceil(maxdamage*youtool-0.5);
    var lowdamage = Math.ceil(lowdamage*youtool-0.5);
  }
  var hres = Math.floor(ehresult*youdaimax);
  var maxdamageper = Math.round(maxdamage/hres*1000);
  var lowdamageper = Math.round(lowdamage/hres*1000);
  var maxdamageper = maxdamageper/10
  var lowdamageper = lowdamageper/10

  $('#lowdamage').html(lowdamage);
  $('#maxdamage').html(maxdamage);
  $('#lowdamageper').html(lowdamageper);
  $('#maxdamageper').html(maxdamageper);

  if (weat == "すな") {
    if (etype1 == "いわ" || etype2 == "いわ") {
      edresult = edresult/3*2
    }
  }
}