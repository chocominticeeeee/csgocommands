// animejs使い方
// https://tr.you84815.space/animejs/
// https://easings.net/ja

// zText
// https://bennettfeely.com/ztext/

// Rellax使い方
// https://moshashugyo.com/media/rellax

//Git
function linkGit() {
  const url = "https://github.com/chocominticeeeee?tab=repositories";
  window.open(url, "_blank");
}

function linkTwitter() {
    const url = "https://twitter.com/CS_EyKum";
    window.open(url, "_blank");
  }

//ライフル
function clipBoardM4A4() {
  navigator.clipboard.writeText("give weapon_m4a1");
}

function clipBoardM4A1S() {
  navigator.clipboard.writeText("give weapon_m4a1_silencer");
}

function clipBoardAK47() {
  navigator.clipboard.writeText("give weapon_ak47");
}

function clipBoardAWP() {
  navigator.clipboard.writeText("give weapon_awp");
}

//なげもの
function clipBoardHEgrenade() {
  navigator.clipboard.writeText("give weapon_hegrenade");
}

function clipBoardFlashbang() {
  navigator.clipboard.writeText("give weapon_flashbang");
}

function clipBoardmolotov() {
  navigator.clipboard.writeText("give weapon_molotov");
}

function clipBoarddecoy() {
  navigator.clipboard.writeText("give weapon_decoy");
}

function clipBoardsmokegrenade() {
  navigator.clipboard.writeText("give weapon_smokegrenade");
}

function clipBoardAllNades() {
  navigator.clipboard.writeText(
    "give weapon_hegrenade;give weapon_flashbang;give weapon_molotov;give weapon_decoy;give weapon_smokegrenade"
  );
}

// 便利コマンド

// noclip
function clipBoardnoclip() {
  navigator.clipboard.writeText("noclip");
}

function clipBoardBindNoclip() {
  const bindKey = document.querySelector("#bindNoclip");
  const text = bindKey.value;
  if (text == "") {
    alert("バインドしたいキーを入力してください。");
  }
  navigator.clipboard.writeText("bind " + text + ' "noclip"');
}

// god
function clipBoardgod() {
  navigator.clipboard.writeText("god");
}

function clipBoardBindgod() {
  const bindKey = document.querySelector("#bindGod");
  const text = bindKey.value;
  if (text == "") {
    alert("バインドしたいキーを入力してください。");
  }
  navigator.clipboard.writeText("bind " + text + ' "god"');
}

//rethrow
function clipBoardRethrow() {
  navigator.clipboard.writeText("sv_rethrow_last_grenade");
}

function clipBoardBindrethrow() {
  const bindKey = document.querySelector("#bindrethrow");
  const text = bindKey.value;
  if (text == "") {
    alert("バインドしたいキーを入力してください。");
  }
  navigator.clipboard.writeText("bind " + text + ' "sv_rethrow_last_grenade"');
}

//cleardecals
function clipBoardcleardecals() {
  navigator.clipboard.writeText("r_cleardecals");
}

function clipBoardBindr_cleardecals() {
  const bindKey = document.querySelector("#bindr_cleardecals");
  const text = bindKey.value;
  if (text == "") {
    alert("バインドしたいキーを入力してください。");
  }
  navigator.clipboard.writeText("bind " + text + ' "r_cleardecals"');
}

//jumpthrow
function clipBoardBindjumpthrow() {
  const bindKey = document.querySelector("#bindjumpthrow");
  const text = bindKey.value;
  if (text == "") {
    alert("バインドしたいキーを入力してください。");
  }
  navigator.clipboard.writeText("bind " + text + ' "+jump; -attack; -jump"');
}

//unbind
function clipBoardUnbind() {
  const bindKey = document.querySelector("#bindUnbind");
  const text = bindKey.value;
  if (text == "") {
    alert("バインドを解除するキーを入力してください。");
  }
  navigator.clipboard.writeText("unbind " + text);
}
