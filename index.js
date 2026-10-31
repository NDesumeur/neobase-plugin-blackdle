// BlackDle : ton appli d'origine (HTML et code inchangés), livrée en plugin.
// Ses données sont dans le dossier du plugin, que NeoBase sauvegarde (synchro cloud et sauvegardes) ; à la première ouverture elle reprend ce que tu avais dans NeoBase.
// Elle demande l'accès complet pour utiliser les outils d'interface de NeoBase. NeoBase ne l'ouvre que si elle est signée.
const HTML = "";
/*CSS-MOVED*/ const CSS = `.mdRow{display:grid;grid-template-columns:repeat(var(--n),46px);gap:6px}
.mdCell{height:46px;display:grid;place-items:center;font:18px var(--title);color:#fff;background:#160d30;box-shadow:inset 0 0 0 2px #3a2a6e}
.mdCell.typed{box-shadow:inset 0 0 0 2px var(--lilac)}
.mdCell.ghost{color:#5e4d85}
.mdCell.flip{animation:mdFlip .45s both}
.gSel{width:auto;font-size:14px;padding:6px 10px;margin-right:8px}
.shGrid td.num{text-align:right}
.mdClue{display:flex;flex-direction:column;gap:8px}
.mdHint{--fill:var(--field);padding:10px 14px;color:var(--lilac);font-size:15px}
.mdEmoji{--fill:var(--field);padding:14px;font-size:34px;letter-spacing:6px;text-align:center}
.mdForm{position:relative}
.mdInput{width:100%;font-size:16px;padding:12px 14px}
.mdSug{position:absolute;left:0;right:0;top:calc(100% + 6px);z-index:5;--fill:#120922;display:flex;flex-direction:column;padding:4px;max-height:340px;overflow-y:auto}
.mdSugItem{all:unset;cursor:var(--cp,pointer);display:flex;justify-content:space-between;gap:12px;padding:8px 10px;color:#fff;font-size:15px}
.mdSugItem:hover,.mdSugItem.on{background:rgba(var(--mgr),.22)}
.mdSugItem .hint{font-size:12px}
.mdSugItem .n{display:flex;align-items:center;gap:10px}
.mdSugItem img{width:30px;height:30px;object-fit:cover;object-position:top;box-shadow:0 0 0 2px rgba(0,0,0,.45)}
.sysCard.mdWin{flex-direction:row;align-items:center;gap:18px}
.mdWin b{color:#ffd07a;font-size:17px}
.mdWinTxt{display:flex;flex-direction:column;gap:6px;min-width:0}
.mdWinImg{width:104px;height:104px;flex:none;object-fit:cover;object-position:top;box-shadow:0 0 0 3px #ffd07a,4px 4px 0 3px rgba(0,0,0,.45)}
.mdPix{width:240px;height:240px;align-self:center;image-rendering:pixelated;box-shadow:0 0 0 3px var(--field),6px 6px 0 3px rgba(0,0,0,.45)}
.mdGuesses{display:flex;flex-direction:column;gap:6px;overflow-x:auto}
.mdRow{display:grid;gap:6px}
.mdRow.head{position:sticky;top:0}
.mdH{font:7px var(--title);letter-spacing:1px;color:var(--muted);text-align:center;padding:4px 0}
.mdCell{display:flex;align-items:center;justify-content:center;gap:4px;min-height:54px;padding:6px;text-align:center;font-size:12px;overflow-wrap:break-word;hyphens:auto;min-width:0;color:#fff;background:#2a1d52;box-shadow:inset 0 -3px 0 rgba(0,0,0,.35);animation:mdFlip .35s steps(4) backwards}
.mdCell.who{background:#1c1238;font-weight:bold;justify-content:flex-start;gap:8px;text-align:left}
.mdCell.who img{width:40px;height:40px;flex:none;object-fit:cover;object-position:top;box-shadow:0 0 0 2px rgba(0,0,0,.45)}
.mdCell.wide img{width:32px;height:32px}
.mdCell.ok{background:#2f8f5a}
.mdCell.part{background:#c0862a}
.mdCell.no{background:#9a2a44}
.mdCell i{font-style:normal;font-size:18px;color:#ffd07a}
.mdCell.wide{justify-content:flex-start;padding:10px 14px;min-height:0;font-size:15px}
.mdRow .mdCell:nth-child(2){animation-delay:.05s}
.mdRow .mdCell:nth-child(3){animation-delay:.1s}
.mdRow .mdCell:nth-child(4){animation-delay:.15s}
.mdRow .mdCell:nth-child(5){animation-delay:.2s}
.mdRow .mdCell:nth-child(6){animation-delay:.25s}
.mdRow .mdCell:nth-child(7){animation-delay:.3s}
.mdRow .mdCell:nth-child(8){animation-delay:.35s}
.mdRow .mdCell:nth-child(9){animation-delay:.4s}

/* habillage v1.2 */
.dleWrap{--dle:#ff5ad9;gap:14px}
.dleWrap .agHead{padding:14px 18px;background:linear-gradient(90deg,color-mix(in srgb,var(--dle) 32%,#0d0820),transparent 85%);box-shadow:inset 5px 0 0 var(--dle)}
.dleWrap .agHead .label{font-size:16px;letter-spacing:2px;color:#fff;text-shadow:3px 3px 0 rgba(0,0,0,.55)}
.dleWrap .agHead .hint{color:color-mix(in srgb,var(--dle) 55%,#fff)}
.dleWrap .agNav button,.dleWrap .row button{letter-spacing:1px}
.dleWrap .mdInput{background:#0d0820;border:3px solid var(--dle);box-shadow:0 0 0 3px rgba(0,0,0,.45),0 0 16px color-mix(in srgb,var(--dle) 30%,transparent);transition:box-shadow .15s}
.dleWrap .mdInput:focus{outline:none;box-shadow:0 0 0 3px rgba(0,0,0,.45),0 0 26px color-mix(in srgb,var(--dle) 60%,transparent)}
.dleWrap .mdSug{border:3px solid var(--dle);box-shadow:6px 6px 0 rgba(0,0,0,.55)}
.dleWrap .mdSugItem{padding:6px 10px;border-bottom:1px solid rgba(255,255,255,.07)}
.dleWrap .mdSugItem img{width:38px;height:38px}
.dleWrap .mdSugItem:hover,.dleWrap .mdSugItem.on{background:color-mix(in srgb,var(--dle) 28%,transparent)}
.dleWrap .mdHint,.dleWrap .mdEmoji{box-shadow:inset 4px 0 0 var(--dle),0 0 0 3px rgba(0,0,0,.35)}
.dleWrap .mdGuesses{gap:8px;padding:6px 0}
.dleWrap .mdH{background:#160d30;color:#fff;border-bottom:3px solid var(--dle);padding:7px 2px;font-size:7px}
.dleWrap .mdRow{gap:6px}
.dleWrap .mdRow:not(.head) .mdCell{font-weight:bold;text-shadow:1px 1px 0 rgba(0,0,0,.5);box-shadow:inset 0 3px 0 rgba(255,255,255,.2),inset 0 -4px 0 rgba(0,0,0,.4),0 0 0 2px rgba(0,0,0,.55)}
.dleWrap .mdCell.who{background:linear-gradient(#2a1d52,#1c1238);border-left:4px solid var(--dle)}
.dleWrap .mdCell.who img{width:46px;height:46px;box-shadow:0 0 0 2px var(--dle),3px 3px 0 2px rgba(0,0,0,.5)}
.dleWrap .mdCell.ok{background:linear-gradient(#45c27b,#2f8f5a)}
.dleWrap .mdCell.part{background:linear-gradient(#e8aa42,#c0862a)}
.dleWrap .mdCell.no{background:linear-gradient(#cc3f5e,#9a2a44)}
.dleWrap .mdCell.wide{font-size:16px}
.dleWrap .sysCard.mdWin{background:linear-gradient(135deg,#34265f,#160d30);border:3px solid #ffd07a;box-shadow:0 0 0 3px #000,0 0 30px rgba(255,208,122,.35);padding:16px}
.dleWrap .mdWinImg{width:124px;height:124px}
.dleWrap .mdWin b{font-size:19px;text-shadow:3px 3px 0 rgba(0,0,0,.5)}
.dleWrap .mdPix{box-shadow:0 0 0 3px var(--dle),6px 6px 0 3px rgba(0,0,0,.5)}
`;  // le style de ce plugin (il utilise les variables du thème de NeoBase)
export default async function (ctx) {
  const view = ctx.view;
  if (!ctx.host) { view.textContent = "Ce plugin doit être approuvé par NeoBase pour s'ouvrir."; return; }
  const host = ctx.host, { el, toast, sfx, ask, newTab, pixIcon, PIX, WX } = host;
  const folder = ctx.folder, legacy = ctx.legacy || {};
  ctx.host.addStyle(CSS);
  view.innerHTML = HTML;
  const $ = id => id === "dle_blackdle" ? view : (view.querySelector('#' + id) || document.getElementById(id));  // les identifiants de ta vue d'abord, puis ceux de la page (fenêtres, menus)
  const doc = async n => { try { return await folder.read(n); } catch { return null; } };
  const __icon = () => ctx.icon;  // l'icône de ce plugin
  const __asset = async (rel, type) => URL.createObjectURL(new Blob([Uint8Array.from(atob(await neo.pluginFileRead(ctx.id, rel)), c => c.charCodeAt(0))], { type }));  // un fichier livré avec le plugin
  const __imgs = {};  // les portraits livrés avec le plugin
  await Promise.all(["abari.webp","acier-silva.webp","ado.webp","adramelech.webp","adrian.webp","albert.webp","alecdora-sandler.webp","allen-fiarain.webp","asta.webp","astaroth.webp","augustus-kira-clover-xiii.webp","baal.webp","baro.webp","baval.webp","beelzebub.webp","ben-benfunk.webp","broccos.webp","catherine.webp","cesc.webp","charla.webp","charlotte-roselei.webp","charmy-pappitson.webp","ciel-grinberryall.webp","cob-portaport.webp","curtis-warren.webp","daizaemon-ooka.webp","damnatio-kira.webp","dante-zogratis.webp","david-swallow.webp","digit-taliss.webp","dmitri-brint.webp","dominante-code.webp","dorothy-unsworth.webp","drouot.webp","drowa.webp","eclat.webp","eda-voltia.webp","en-ringard.webp","fana.webp","fanzell-kruger.webp","feremena.webp","finral-roulacase.webp","floga.webp","fluss.webp","forte-gris.webp","foyal-migusteau.webp","fragil-tormenta.webp","francis.webp","fuegoleon-vermillion.webp","fujio-tenmanyashiki.webp","gaderois-godroc.webp","gadjah.webp","galgaria.webp","gareth.webp","gauche-adlai.webp","genzou-yami.webp","george.webp","gifso.webp","gimodelo.webp","ginnojomorifuyu-kezoukaku.webp","gio.webp","gordon-agrippa.webp","grey.webp","gueldre-poizot.webp","halbet-chevour.webp","hamon-caseus.webp","heath-graice.webp","helene-faust.webp","henry-legolant.webp","himmel-faust.webp","hischer-ongg.webp","humito-mikuriya.webp","ichika-yami.webp","jack-the-ripper.webp","jamo.webp","jonna-agrippa.webp","jozou-hanegatsuji.webp","julius-novachrono.webp","kahono.webp","kaiser-granvorka.webp","kiato.webp","kirsch-vermillion.webp","kivn.webp","klaus-lunettes.webp","komari-imari.webp","kugas.webp","ladros.webp","langris-vaude.webp","ledior-vaude.webp","leopold-vermillion.webp","letoile-becquerel.webp","leviathan.webp","licht.webp","liebe.webp","liliane-vaude.webp","lilith.webp","lily-aquaria.webp","lira.webp","lolopechka.webp","lotus-whomalt.webp","loyce-grinberryall.webp","lucifero.webp","lucius-zogratis.webp","luck-voltia.webp","lufulu.webp","lumiere-silvamillion-clover.webp","magna-swing.webp","makusa-north.webp","marco-scarlet.webp","marie-adlai.webp","mariella.webp","mars.webp","marx-francois.webp","medio.webp","megicula.webp","mereoleona-vermillion.webp","millie-maxwell.webp","mimosa-vermillion.webp","mohawq.webp","morgen-faust.webp","moris-libardirt.webp","motas.webp","nacht-faust.webp","nahamah.webp","nash.webp","nathan-agrippa.webp","nebra-silva.webp","neige.webp","nick.webp","nilenia-agrippa.webp","nils-ragus.webp","nix.webp","noelle-silva.webp","nozel-silva.webp","orsi-orfai.webp","owen.webp","paplo-espuma.webp","patolli.webp","potrof.webp","protobe-collina.webp","puli-angel.webp","rades-spirito.webp","ragus.webp","ralph-niaflem.webp","randall-luftair.webp","ratri.webp","rebecca-scarlet.webp","recca.webp","revchi-salik.webp","reve.webp","rhya.webp","richita.webp","rick-cornell.webp","rill-boismortier.webp","risacca-ondell.webp","rob-vitesse.webp","robero-ringert.webp","rokken.webp","roland.webp","ronne.webp","rossa.webp","roxanne-agrippa.webp","ruben-chagar.webp","rudolph-niaflem.webp","ryuya-ryudo.webp","salim-hapshass.webp","sally.webp","sarado.webp","secre-swallowtail.webp","seihi.webp","sekke-bronzazza.webp","selena.webp","shidan.webp","siren-tium.webp","sivoir-snyle.webp","smurik.webp","sol-marron.webp","solid-silva.webp","svenkin-gatard.webp","sylph.webp","tetia-silvamillion-clover.webp","theresa-rapual.webp","undine.webp","ursula-bloodlord.webp","valtos.webp","vanessa-enoteca.webp","vanica-zogratis.webp","vetto.webp","wainsley.webp","walgner.webp","walter.webp","william-vangeance.webp","willie.webp","xerx-lugner.webp","yagos.webp","yami-sukehiro.webp","yosuga-musyogatake.webp","yrul.webp","yuno-grinberryall.webp","zagred.webp","zara-ideale.webp","zarick.webp","zenon-zogratis.webp","zora-ideale.webp","zuta.webp"].map(async n => { __imgs[n] = await __asset('img/' + n, /.png$/.test(n) ? 'image/png' : /.webp$/.test(n) ? 'image/webp' : 'image/jpeg'); }));
  const LEGACY_GAMES = {"top":["blackdle"],"best":"^$"};
  let games = await doc('games');
  if (games == null) {  // première ouverture : tu retrouves tes records et tes parties d'avant
    const old = legacy.api ? await legacy.api('games').catch(() => null) : null; games = { best: {} };
    if (old) { const re = new RegExp(LEGACY_GAMES.best); for (const [k, v] of Object.entries(old.best || {})) if (re.test(k)) games.best[k] = v; for (const k of LEGACY_GAMES.top) if (old[k] !== undefined) games[k] = old[k]; await folder.write('games', games); }
  }
  games = { best: {}, ...games };
  let gamesTimer = null;
  const saveGames = () => { clearTimeout(gamesTimer); gamesTimer = setTimeout(() => { gamesTimer = null; folder.write('games', games).catch(() => {}); }, 500); };
  const best = (k, v, higher = true) => { const b = games.best[k]; if (b == null || (higher ? v > b : v < b)) { games.best[k] = v; saveGames(); return true; } return false; };
  const gstore = (k, init) => (games[k] ??= init);  // la section d'un jeu
function gameLoop(st, appKey, update, draw) {
  cancelAnimationFrame(st.raf);
  const STEP = 1000 / 60; let acc = 0, last = performance.now();
  const frame = t => {
    if (!view.classList.contains('on')) { st.raf = 0; if (st.mode === 'play') st.mode = 'pause'; return; }  // leaving the tab pauses the game
    st.raf = requestAnimationFrame(frame);
    acc += Math.min(200, t - last); last = t;
    while (acc >= STEP) { if (st.mode === 'play') update(); st.tick++; acc -= STEP; }
    draw();
  };
  st.raf = requestAnimationFrame(frame);
}
function gameText(g, w, lines, y0) {  // centred pixel-font lines over a dark band
  g.fillStyle = 'rgba(11,3,28,.72)'; g.fillRect(0, y0 - 14, w, lines.length * 14 + 14);
  g.textAlign = 'center';
  lines.forEach(([text, color, size], i) => { g.fillStyle = color; g.font = (size || 8) + 'px "Press Start 2P", monospace'; g.fillText(text, w / 2, y0 + i * 14); });
  g.textAlign = 'left';
}
const px = (g, color, x, y, w = 1, h = 1) => { g.fillStyle = color; g.fillRect(Math.round(x), Math.round(y), w, h); };
function sprite(g, rows, x, y, pal) { rows.forEach((r, j) => { for (let i = 0; i < r.length; i++) { const c = pal[r[i]]; if (c) px(g, c, x + i, y + j); } }); }
  // ---- ton code d'origine ----
/* NeoDle: the "-dle" games (guess a character of a series). One engine, each series registers itself from web/dle/<series>.js with dleRegister():
   its columns (eq: same value, set: lists that can overlap, num / ord: numbers or ordered labels with ↑ ↓ arrows), its characters and its pools.
   Modes: Classique (columns compared), Indices (hints one after the other), Emoji (when the characters have emojis), Image (the portrait, less pixelated after each wrong guess).
   A daily challenge per mode (the same for everyone) and free games, saved in games.<key> (synced). Portraits: web/dle/img/<series>/ (from the series' Fandom wiki). */

const DLES = {};
const DLE_MODES = {classic: 'Classique', hints: 'Indices', emoji: 'Emoji', image: 'Image'};
const DLE_GENDER = {F: 'Femme', M: 'Homme', V: 'Variable', N: 'Aucun', '?': 'Inconnu'};
const dleDay = (d = new Date()) => d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
const dleHash = s => { let h = 2166136261; for (const c of s) h = Math.imul(h ^ c.charCodeAt(0), 16777619); return h >>> 0; };
const dleNorm = s => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9぀-鿿]+/g, ' ').trim();
const dleImg = (g, c) => c.img ? (__imgs[c.img] || '') : '';

/* ---------- comparing a guess with the answer, column by column ---------- */
function dleCompare(g, guess, ans) {
  return g.cols.map(col => {
    const a = guess[col.id], b = ans[col.id], show = v => v == null || v === '' ? '?' : col.type === 'ord' ? col.labels[v] : col.map ? col.map[v] ?? v : (col.pre || '') + v + (col.unit || '');
    if (col.type === 'set') {
      const A = a || [], B = b || [], S = new Set(A), same = A.length === B.length && B.every(x => S.has(x));
      return {k: col.k, v: A.join(', ') || col.none || 'Aucun', r: same ? 'ok' : B.some(x => S.has(x)) ? 'part' : 'no'};
    }
    if (col.type === 'num' || col.type === 'ord') {
      if (a === b) return {k: col.k, v: show(a), r: 'ok'};
      if (a == null || b == null) return {k: col.k, v: show(a), r: 'no'};
      return {k: col.k, v: show(a), r: col.near && Math.abs(a - b) <= col.near ? 'part' : 'no', arrow: b > a ? '↑' : '↓'};
    }
    return {k: col.k, v: show(a), r: a === b ? 'ok' : 'no'};
  });
}

/* ---------- the save: games.<key> ---------- */
const dleSave = g => gstore(g.key, {days: {}, stats: {}, free: null, pool: 'main', mode: 'classic'});
const dlePool = (g, p) => g.chars.filter(c => c.t <= (g.pools[p] || g.pools.main).t);
const dleFits = (c, mode) => mode === 'emoji' ? !!c.em : mode === 'image' ? !!c.img : mode === 'hints' ? c.h.length > 0 : true;
function dleDaily(g, mode, day = dleDay()) {  // the same character for everyone on a given day, among the main pool
  const pool = dlePool(g, 'all').filter(c => dleFits(c, mode));
  return pool[dleHash(g.key + ':' + mode + ':' + day) % pool.length];
}
function dleState(g, mode, daily) {  // the game being played: today's challenge of this mode, or the free game
  const s = dleSave(g);
  if (!g.pools[s.pool]) s.pool = 'all';  // a pool that no longer exists (MonogatariDle's « extrême »)
  if (daily) { const day = dleDay(), d = (s.days[day] ||= {}); return d[mode] ||= {ans: dleDaily(g, mode, day).n, guesses: [], won: false}; }
  const pool = dlePool(g, s.pool).filter(c => dleFits(c, mode));
  if (!s.free || s.free.mode !== mode || s.free.pool !== s.pool || !pool.some(c => c.n === s.free.ans))
    s.free = {mode, pool: s.pool, ans: pool[Math.floor(Math.random() * pool.length)].n, guesses: [], won: false};
  return s.free;
}
function dleRecord(g, mode, daily, won, tries) {
  const st = (dleSave(g).stats[mode] ||= {played: 0, wins: 0, streak: 0, bestStreak: 0, tries: 0, lastDay: ''});
  st.played++; if (won) { st.wins++; st.tries += tries; }
  if (daily) {
    const y = new Date(); y.setDate(y.getDate() - 1);
    st.streak = won ? (st.lastDay === dleDay(y) ? st.streak + 1 : 1) : 0; st.bestStreak = Math.max(st.bestStreak, st.streak); st.lastDay = dleDay();
  }
}

/* ---------- the portrait of the Image mode: drawn on a few big pixels, more of them after each wrong guess ---------- */
const DLE_PIX = [6, 9, 13, 18, 26, 38, 56, 90];
function dlePixel(cv, src, cells) {
  const im = new Image();
  im.onload = () => {
    const S = cv.width, side = Math.min(im.width, im.height), sx = (im.width - side) / 2, sy = im.height > im.width ? 0 : (im.height - side) / 2;  // square crop, the top of tall portraits (the face)
    const ctx = cv.getContext('2d'); ctx.imageSmoothingEnabled = cells >= S;
    if (cells >= S) { ctx.drawImage(im, sx, sy, side, side, 0, 0, S, S); return; }
    const t = document.createElement('canvas'); t.width = t.height = cells;
    const tc = t.getContext('2d'); tc.drawImage(im, sx, sy, side, side, 0, 0, cells, cells);
    ctx.drawImage(t, 0, 0, cells, cells, 0, 0, S, S);
  };
  im.src = src;
}

/* ---------- the page of one game ---------- */
const dleChar = (g, n) => g.chars.find(c => c.n === n);
function dleRender(g) {
  if (!games) return;
  const u = g.ui, s = dleSave(g), st = dleState(g, u.mode, u.daily), ans = dleChar(g, st.ans) || g.chars[0], tries = st.guesses.length;
  for (const b of u.modes.children) b.classList.toggle('on', b.dataset.m === u.mode);
  u.dailyBtn.classList.toggle('main', u.daily); u.freeBtn.classList.toggle('main', !u.daily);
  u.pool.value = s.pool; u.pool.disabled = u.daily;
  const stats = s.stats[u.mode];
  u.info.textContent = (u.daily ? 'Défi du jour · ' : 'Partie libre · ' + g.pools[s.pool].l + ' · ') + dlePool(g, u.daily ? 'all' : s.pool).filter(c => dleFits(c, u.mode)).length + ' personnages'
    + (stats ? ' · série ' + stats.streak + ' (record ' + stats.bestStreak + ') · ' + stats.wins + ' / ' + stats.played + ' gagnées' : '');
  // what the mode shows before the guesses
  const top = u.clue; top.replaceChildren();
  if (u.mode === 'hints') {
    const shown = st.won ? ans.h.length : Math.min(ans.h.length, 1 + tries);
    top.append(el('span', 'label', 'Indices · ' + shown + ' / ' + ans.h.length), ...ans.h.slice(0, shown).map((h, i) => el('div', 'mdHint px', (i + 1) + '. ' + h)));
  } else if (u.mode === 'emoji') {
    const e = [...ans.em.matchAll(/\p{Extended_Pictographic}(‍\p{Extended_Pictographic}|️)*/gu)].map(m => m[0]), shown = st.won ? e.length : Math.min(e.length, 1 + tries);
    top.append(el('span', 'label', 'Emojis · ' + shown + ' / ' + e.length), el('div', 'mdEmoji px', e.slice(0, shown).join(' ') + ' ' + '❔'.repeat(e.length - shown)));
  } else if (u.mode === 'image') {
    const lv = st.won ? DLE_PIX.length : Math.min(tries, DLE_PIX.length), cv = el('canvas', 'mdPix');
    cv.width = cv.height = 240;
    top.append(el('span', 'label', st.won ? 'Portrait' : 'Portrait · netteté ' + (lv + 1) + ' / ' + (DLE_PIX.length + 1)), cv);
    dlePixel(cv, dleImg(g, ans), lv >= DLE_PIX.length ? 240 : DLE_PIX[lv]);
  } else {
    top.append(el('span', 'hint', 'Vert : pareil · orange : en partie' + (g.cols.some(c => c.near) ? ' ou proche' : '') + ' · rouge : différent · ' + g.arrows));
    if (!st.won && tries >= 6 && ans.va) top.append(el('div', 'mdHint px', 'Indice (6 essais) : voix japonaise ' + ans.va));
    if (!st.won && tries >= 10 && ans.h.length) top.append(el('div', 'mdHint px', 'Indice (10 essais) : ' + ans.h.at(-1)));
  }
  // the input, or the win banner
  u.form.style.display = st.won ? 'none' : '';
  u.win.style.display = st.won ? '' : 'none';
  if (st.won) {
    const next = new Date(), txt = el('div', 'mdWinTxt'); next.setHours(24, 0, 0, 0);
    txt.append(el('b', '', 'Bravo ! C\'était ' + ans.n), el('span', 'hint', [ans.jp, 'trouvé en ' + tries + ' essai' + (tries > 1 ? 's' : ''), g.tiers[ans.t], ans.va && 'voix : ' + ans.va].filter(Boolean).join(' · ')),
      el('span', 'hint', u.daily ? 'Prochain défi dans ' + Math.ceil((next - Date.now()) / 3600e3) + ' h. Une partie libre en attendant ?' : 'Clique sur « Nouvelle partie » pour recommencer.'));
    u.win.replaceChildren(...(ans.img ? [Object.assign(el('img', 'mdWinImg'), {src: dleImg(g, ans), alt: ''})] : []), txt);
  }
  u.newBtn.style.display = u.daily ? 'none' : '';
  // the guesses, the last one first
  const list = u.guesses, cols = g.cols.length, grid = {gridTemplateColumns: '1.5fr repeat(' + cols + ',1fr)', minWidth: 150 + cols * 104 + 'px'};
  list.replaceChildren();
  if (u.mode === 'classic' && tries) { const hr = el('div', 'mdRow head'); Object.assign(hr.style, grid); hr.append(el('span', 'mdH', 'Personnage'), ...g.cols.map(c => el('span', 'mdH', c.k))); list.append(hr); }
  for (const name of [...st.guesses].reverse()) {
    const c = dleChar(g, name); if (!c) continue;
    const who = el('span', 'mdCell who' + (c.n === ans.n ? ' ok' : '') + (u.mode === 'classic' ? '' : ' wide ' + (c.n === ans.n ? 'ok' : 'no')));
    if (c.img) who.append(Object.assign(el('img'), {src: dleImg(g, c), alt: '', loading: 'lazy'}));
    who.append(el('span', '', c.n + (u.mode === 'classic' ? '' : c.n === ans.n ? ' ✓' : ' ✗')));
    if (u.mode === 'classic') {
      const row = el('div', 'mdRow'); Object.assign(row.style, grid); row.append(who);
      for (const r of dleCompare(g, c, ans)) { const cell = el('span', 'mdCell ' + r.r, r.v); if (r.arrow) cell.append(el('i', '', r.arrow)); cell.title = r.k; row.append(cell); }
      list.append(row);
    } else list.append(who);
  }
}
function dleGuess(g, name) {
  const u = g.ui, st = dleState(g, u.mode, u.daily), c = dleChar(g, name);
  if (!c || st.won || st.guesses.includes(c.n)) return;
  st.guesses.push(c.n);
  if (c.n === st.ans) { st.won = true; dleRecord(g, u.mode, u.daily, true, st.guesses.length); sfx('launch'); } else sfx('click');
  saveGames(); u.input.value = ''; dleSuggest(g); dleRender(g);
}
function dleSuggest(g) {
  const u = g.ui, q = dleNorm(u.input.value), st = dleState(g, u.mode, u.daily);
  const pool = dlePool(g, u.daily ? 'all' : dleSave(g).pool).filter(c => !st.guesses.includes(c.n) && dleFits(c, u.mode));
  const hits = q ? pool.filter(c => (c.key ||= dleNorm([c.n, c.n.split(' ').reverse().join(' '), c.jp, ...(c.al || [])].join(' '))).includes(q)).slice(0, 8) : [];
  u.sug.replaceChildren(...hits.map((c, i) => {
    const b = el('button', 'mdSugItem' + (i === u.sel ? ' on' : '')), name = el('span', 'n');
    if (c.img) name.append(Object.assign(el('img'), {src: dleImg(g, c), alt: '', loading: 'lazy'}));
    name.append(c.n); b.append(name, el('span', 'hint', c.jp || ''));
    b.onmousedown = e => { e.preventDefault(); dleGuess(g, c.n); }; return b;
  }));
  u.sug.style.display = hits.length ? '' : 'none'; u.hits = hits;
}
function dleRegister(g) {
  console.assert(g.chars.every(c => c.n && Array.isArray(c.h) && g.tiers[c.t] && g.cols.every(col => col.type !== 'set' || Array.isArray(c[col.id] || []))) && new Set(g.chars.map(c => c.n)).size === g.chars.length, g.key + ': well-formed, unique names');
  DLES[g.key] = g;
  const modes = Object.keys(DLE_MODES).filter(m => g.chars.some(c => dleFits(c, m)));
  // the view is already in index.html (tabs reopened at launch can be created before this script runs), else it is added here
  const v = $('dle_' + g.key) || el('div', 'appView'), w = el('div', 'appWrap'), head = el('div', 'agHead'), nav = el('div', 'agNav');
  if (!v.id) { v.id = 'dle_' + g.key; $('musicApp').before(v); }
  v.append(w);
  w.classList.add('dleWrap'); w.style.setProperty('--dle', '#ff6a7a');  // la couleur de la série
  const u = g.ui = {mode: 'classic', daily: true, info: el('span', 'hint'), dailyBtn: el('button', 'btn px', 'DÉFI DU JOUR'), freeBtn: el('button', 'btn px', 'PARTIE LIBRE'), pool: el('select', 'f gSel'), newBtn: el('button', 'btn px', 'NOUVELLE PARTIE'),
    modes: el('div', 'row'), clue: el('div', 'mdClue'), form: el('div', 'mdForm'), input: el('input', 'f mdInput'), sug: el('div', 'mdSug px'), win: el('div', 'sysCard px mdWin'), guesses: el('div', 'mdGuesses')};
  u.pool.title = 'Personnages possibles en partie libre';
  Object.assign(u.input, {placeholder: 'Nom d\'un personnage de ' + g.series + '…', spellcheck: false, autocomplete: 'off'});
  u.sug.style.display = 'none'; u.win.style.display = 'none';
  nav.append(u.dailyBtn, u.freeBtn, u.pool, u.newBtn); head.append(el('span', 'label', g.name), u.info, nav); u.form.append(u.input, u.sug);
  w.append(head, u.modes, u.clue, u.form, u.win, u.guesses, el('div', 'hint', g.about));
  u.input.oninput = () => { u.sel = 0; dleSuggest(g); };
  u.input.onkeydown = e => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') { e.preventDefault(); u.sel = Math.max(0, Math.min((u.hits?.length || 1) - 1, (u.sel || 0) + (e.key === 'ArrowDown' ? 1 : -1))); dleSuggest(g); }
    if (e.key === 'Enter' && u.hits?.length) { e.preventDefault(); dleGuess(g, u.hits[u.sel || 0].n); }
    if (e.key === 'Escape') u.sug.style.display = 'none';
  };
  u.input.onblur = () => setTimeout(() => u.sug.style.display = 'none', 100);
  u.modes.append(...modes.map(k => { const b = el('button', 'tab px', DLE_MODES[k]); b.dataset.m = k; b.onclick = () => { u.mode = k; dleSave(g).mode = k; dleRender(g); }; return b; }));
  u.pool.append(...Object.entries(g.pools).map(([k, p]) => { const o = el('option', '', p.l + ' (' + dlePool(g, k).length + ')'); o.value = k; return o; }));
  u.pool.onchange = () => { dleSave(g).pool = u.pool.value; saveGames(); dleRender(g); };
  u.dailyBtn.onclick = () => { u.daily = true; dleRender(g); };
  u.freeBtn.onclick = () => { u.daily = false; dleRender(g); };
  u.newBtn.onclick = () => { const s = dleSave(g); if (s.free && !s.free.won && s.free.guesses.length) dleRecord(g, s.free.mode, false, false, 0); s.free = null; saveGames(); dleRender(g); u.input.focus(); };
}
function dleOpen(key) { const g = DLES[key], m = games?.[key]?.mode; if (m && g.ui.modes.querySelector('[data-m="' + m + '"]')) g.ui.mode = m; dleRender(g); setTimeout(() => g.ui.input.focus(), 50); }

/* BlackDle: the characters of Black Clover (Yūki Tabata), from the manga (anime-, film- and game-only characters left out).
   Data from the series' wiki (blackclover.fandom.com): species, magic attribute, squad or group, kingdoms, hair, height and first chapter; portraits from the wiki. */
dleRegister({key: 'blackdle', name: 'BlackDle', series: 'Black Clover', dir: 'blackclover',
  tiers: {1: 'Principal', 2: 'Secondaire', 3: 'Mineur'},
  pools: {main: {l: 'Personnages principaux', t: 1}, more: {l: 'Principaux et secondaires', t: 2}, all: {l: 'Tous', t: 3}},
  cols: [
    {id: 'g', k: 'Genre', type: 'eq', map: DLE_GENDER}, {id: 'e', k: 'Espèce', type: 'eq'}, {id: 'm', k: 'Magie', type: 'set', none: 'Aucune'}, {id: 'gr', k: 'Groupe', type: 'set'},
    {id: 'r', k: 'Royaume', type: 'set', none: '—'}, {id: 'ha', k: 'Cheveux', type: 'eq'}, {id: 'ta', k: 'Taille', type: 'num', unit: ' cm', near: 5}, {id: 'c', k: '1er chapitre', type: 'num', pre: 'Ch. ', near: 20},
  ],
  arrows: '↑ : le personnage à trouver est plus grand ou apparaît plus tard, ↓ : l\'inverse.',
  about: 'Devine le personnage de Black Clover. Classique : chaque essai compare genre, espèce, magie, escouade ou groupe, royaume, couleur des cheveux, taille (orange : à 5 cm près) et premier chapitre du manga (orange : à 20 chapitres près). Indices, Emoji et Image : un indice de plus à chaque essai raté.',
  chars: [
    {n: "Asta",t: 1,em: "🗡️💪🍀😤📢",h: ["Il est né sans aucun pouvoir magique.","Il hurle qu'il deviendra Empereur-Mage.","Il a été abandonné devant une église, le même jour qu'un autre bébé.","Son grimoire à cinq feuilles abrite un démon.","Anniversaire : 4 octobre.","Famille : Richita, Liebe, Yuno, Recca.","Voix japonaise : Gakuto Kajiwara."],jp: "アスタ",va: "Gakuto Kajiwara",g: "M",e: "Humain",m: ["Anti-magie"],gr: ["Taureau Noir","Chevaliers royaux"],r: ["Clover"],ha: "Gris",ta: 155,c: 1,img: "asta.webp"},
    {n: "Yuno Grinberryall",t: 1,em: "🌪️⭐🍀😐👑",h: ["C'est l'ami d'enfance et le rival du héros.","Il a reçu un grimoire à quatre feuilles.","Un esprit du vent le suit partout.","Il est en réalité un prince de Pique.","Anniversaire : 4 octobre.","Famille : House Grinberryall, Asta, Recca, Nash.","Voix japonaise : Nobunaga Shimazaki."],jp: "ユノ・グリンベリオール",va: "Nobunaga Shimazaki",g: "M",e: "Humain",m: ["Étoile","Vent"],gr: ["Aube Dorée","Chevaliers royaux"],r: ["Clover"],ha: "Noir",ta: 172,c: 1,img: "yuno-grinberryall.webp"},
    {n: "Noelle Silva",t: 1,em: "💧👸🌊🛡️😤",h: ["Elle est d'une famille royale mais était méprisée par ses frères.","Elle a eu du mal à contrôler sa magie très puissante.","Elle est très « tsundere ».","Sa mère était capitaine de l'Aigle d'Argent.","Anniversaire : 15 novembre.","Voix japonaise : Kana Yūki."],jp: "ノエル・シルヴァ",va: "Kana Yūki",g: "F",e: "Humain",m: ["Eau"],gr: ["Taureau Noir","Chevaliers royaux"],r: ["Clover"],ha: "Argent",ta: 161,c: 4,img: "noelle-silva.webp"},
    {n: "Yami Sukehiro",t: 1,em: "🌑⚔️🚬😠🚽",h: ["Il vient d'un pays lointain à l'est.","Il dit souvent qu'il faut dépasser ses limites, ici et maintenant.","Il passe beaucoup de temps aux toilettes.","C'est le capitaine des Taureaux Noirs.","Anniversaire : 17 septembre.","Famille : Yami Clan, Charlotte Roselei, Luck Voltia.","Voix japonaise : Junichi Suwabe."],jp: "ヤミ・スケヒロ",va: "Junichi Suwabe",g: "M",e: "Humain",m: ["Ténèbres","Lumière"],gr: ["Taureau Noir"],r: ["Clover","Pays de Hino"],ha: "Noir",ta: 183,c: 2,img: "yami-sukehiro.webp"},
    {n: "Julius Novachrono",t: 1,em: "⏰👑🔮😃",h: ["Il adore découvrir de nouvelles magies.","Il se déguise souvent pour se promener.","Il est le 28e Empereur-Mage.","Il est lié au corps d'un ennemi de Pique.","Anniversaire : 15 octobre.","Famille : Lucius Zogratis, Dante Zogratis, Vanica Zogratis, Zenon Zogratis.","Voix japonaise : Toshiyuki Morikawa."],jp: "ユリウス・ノヴァクロノ",va: "Toshiyuki Morikawa",g: "M",e: "Humain",m: ["Âme","Temps"],gr: ["Cerf Gris"],r: ["Clover"],ha: "Blond",ta: 180,c: 1,img: "julius-novachrono.webp"},
    {n: "Mimosa Vermillion",t: 1,em: "🌿🌸😊🩹",h: ["Elle est la cousine d'une princesse aux cheveux d'argent.","Sa magie peut soigner.","Elle est amoureuse du héros.","Elle est membre de l'Aube Dorée.","Anniversaire : 26 août.","Voix japonaise : Asuka Nishi."],jp: "ミモザ・ヴァーミリオン",va: "Asuka Nishi",g: "F",e: "Humain",m: ["Plante"],gr: ["Aube Dorée","Chevaliers royaux"],r: ["Clover"],ha: "Vermillon",ta: 158,c: 11,img: "mimosa-vermillion.webp"},
    {n: "Vanessa Enoteca",t: 1,em: "🧵🍷🐈‍⬛💋",h: ["Elle boit beaucoup.","Sa magie peut contrôler le destin.","Elle a fui la Forêt des sorcières.","Elle est membre des Taureaux Noirs.","Anniversaire : 16 mai.","Voix japonaise : Nana Mizuki."],jp: "バネッサ・エノテーカ",va: "Nana Mizuki",g: "F",e: "Humain",m: ["Fil"],gr: ["Taureau Noir"],r: ["Clover","Forêt des sorcières"],ha: "Rose",ta: 170,c: 3,img: "vanessa-enoteca.webp"},
    {n: "Luck Voltia",t: 1,em: "⚡😃🥊🍽️",h: ["Il sourit tout le temps.","Il adore se battre.","On l'appelle le « maniaque du combat ».","Il est membre des Taureaux Noirs.","Anniversaire : 11 octobre.","Famille : Eda Voltia, Charlotte Roselei, Yami Sukehiro.","Voix japonaise : Ayumu Murase."],jp: "ラック・ボルティア",va: "Ayumu Murase",g: "M",e: "Humain",m: ["Foudre"],gr: ["Taureau Noir","Chevaliers royaux"],r: ["Clover"],ha: "Blond",ta: 167,c: 3,img: "luck-voltia.webp"},
    {n: "Finral Roulacase",t: 1,em: "🌀💘🚪🎩",h: ["Il drague toutes les filles.","Il est très lâche au combat.","Sa magie lui permet d'ouvrir des portails.","Il est l'héritier d'une grande famille noble.","Anniversaire : 6 février.","Famille : House Vaude.","Voix japonaise : Jun Fukuyama."],jp: "フィンラル・ルーラケイス",va: "Jun Fukuyama",g: "M",e: "Humain",m: ["Espace"],gr: ["Taureau Noir"],r: ["Clover"],ha: "Châtain",ta: 173,c: 2,img: "finral-roulacase.webp"},
    {n: "Secre Swallowtail",t: 1,em: "🐦🔒📕🖤",h: ["Elle a longtemps vécu sous la forme d'un petit oiseau.","Elle suivait le héros partout.","Elle a 500 ans.","Elle servait le prince Lumière.","Anniversaire : 18 juin.","Voix japonaise : Ayane Sakura."],jp: "セクレ・スワロテイル",va: "Ayane Sakura",g: "F",e: "Humain",m: ["Sceau"],gr: ["Taureau Noir"],r: ["Clover"],ha: "Noir",ta: 152,c: 2,al: ["Nero"],img: "secre-swallowtail.webp"},
    {n: "Charmy Pappitson",t: 1,em: "🍰🐑😋🍖",h: ["Elle est obsédée par la nourriture.","Elle a des moutons cuisiniers.","Elle est à moitié naine.","Elle est membre des Taureaux Noirs.","Anniversaire : 3 juin.","Famille : Rill Boismortier, Seven children.","Voix japonaise : Kiyono Yasuno."],jp: "チャーミー・パピットソン",va: "Kiyono Yasuno",g: "F",e: "Demi-nain",m: ["Coton","Nourriture"],gr: ["Taureau Noir"],r: ["Clover"],ha: "Noir",ta: 142,c: 3,img: "charmy-pappitson.webp"},
    {n: "Magna Swing",t: 1,em: "🔥🧹😤🏏",h: ["C'est un roturier qui fait le dur.","Il frappe ses boules de feu avec une batte.","Il a un sortilège qui rend la magie égale.","Il est membre des Taureaux Noirs.","Anniversaire : 7 avril.","Voix japonaise : Genki Muro."],jp: "マグナ・スウィング",va: "Genki Muro",g: "M",e: "Humain",m: ["Feu"],gr: ["Taureau Noir"],r: ["Clover"],ha: "Blond",ta: 169,c: 3,img: "magna-swing.webp"},
    {n: "Gauche Adlai",t: 1,em: "🪞🩸👧😍",h: ["Il est obsédé par sa petite sœur.","Sa magie utilise des miroirs.","Il saigne du nez très souvent.","Il est membre des Taureaux Noirs.","Anniversaire : 27 juin.","Famille : Marie Adlai.","Voix japonaise : Satoshi Hino."],jp: "ゴーシュ・アドレイ",va: "Satoshi Hino",g: "M",e: "Humain",m: ["Miroir"],gr: ["Taureau Noir"],r: ["Clover"],ha: "Châtain",ta: 181,c: 3,img: "gauche-adlai.webp"},
    {n: "Gordon Agrippa",t: 1,em: "☠️😶📝👻",h: ["Il a l'air terrifiant mais il est très gentil.","Il parle tellement bas qu'on ne l'entend pas.","Sa magie empoisonne.","Il est membre des Taureaux Noirs.","Anniversaire : 13 janvier.","Famille : Agrippa Family.","Voix japonaise : Kenichirō Matsuda."],jp: "ゴードン・アグリッパ",va: "Kenichirō Matsuda",g: "M",e: "Humain",m: ["Poison"],gr: ["Taureau Noir"],r: ["Clover"],ha: "Noir",ta: 187,c: 2,img: "gordon-agrippa.webp"},
    {n: "Grey",t: 1,em: "🎭😳🔄👧",h: ["Elle est très timide.","Elle se cache sous une autre apparence.","Sa magie transforme les choses.","Elle est membre des Taureaux Noirs.","Anniversaire : 20 février.","Famille : Father, Stepmother, Two elder stepsisters.","Voix japonaise : Minami Takahashi."],jp: "クレア・ホワイトリー",va: "Minami Takahashi",g: "F",e: "Humain",m: ["Transformation"],gr: ["Taureau Noir"],r: ["Clover"],ha: "Bleu",ta: 159,c: 3,img: "grey.webp"},
    {n: "Zora Ideale",t: 1,em: "🪤😏🃏🔥",h: ["Il passe son temps à piéger les autres.","Il déteste les nobles et les chevaliers.","Son père était un chevalier mage honnête.","Il rejoint les Taureaux Noirs.","Anniversaire : 19 décembre.","Famille : Zara Ideale.","Voix japonaise : Hikaru Midorikawa."],jp: "ゾラ・イデアーレ",va: "Hikaru Midorikawa",g: "M",e: "Humain",m: ["Cendre"],gr: ["Taureau Noir","Chevaliers royaux"],r: ["Clover"],ha: "Rouge",ta: 176,c: 112,img: "zora-ideale.webp"},
    {n: "Henry Legolant",t: 1,em: "🏠🧬😷👁️",h: ["Il est très malade.","Il absorbe la magie des gens sans le vouloir.","Il est la base secrète d'une escouade.","Sa magie fait bouger le repaire des Taureaux Noirs.","Anniversaire : 12 février.","Voix japonaise : Mitsuki Saiga."],jp: "ヘンリー・レゴラント",va: "Mitsuki Saiga",g: "M",e: "Humain",m: ["Recombinaison"],gr: ["Taureau Noir"],r: ["Clover"],ha: "Blanc",ta: 190,c: 99,img: "henry-legolant.webp"},
    {n: "Nacht Faust",t: 1,em: "🌑🐐👤🖤",h: ["Il est sombre et sérieux.","Il a passé un contrat avec plusieurs démons.","Il a perdu son frère jumeau.","Il est vice-capitaine des Taureaux Noirs.","Anniversaire : 30 avril.","Famille : House Faust.","Voix japonaise : Hiro Shimono."],jp: "ナハト・ファウスト",va: "Hiro Shimono",g: "M",e: "Humain",m: ["Ombre"],gr: ["Taureau Noir"],r: ["Clover"],ha: "Noir",ta: 180,c: 246,img: "nacht-faust.webp"},
    {n: "Liebe",t: 1,em: "😈🖤🍀",h: ["C'est un démon de bas rang.","Il vit dans un grimoire.","Il a perdu sa mère adoptive humaine.","Il est la source de l'anti-magie du héros.","Anniversaire : 5 octobre.","Famille : Richita, Asta.","Voix japonaise : Kenichirō Matsuda."],jp: "リーベ",va: "Kenichirō Matsuda",g: "M",e: "Démon",m: ["Anti-magie"],gr: ["Taureau Noir"],r: ["Clover"],ha: "Blanc",ta: 156,c: 1,img: "liebe.webp"},
    {n: "Charlotte Roselei",t: 1,em: "🌹😳💖🛡️",h: ["Elle a été maudite et ne peut pas dire ce qu'elle ressent.","Elle est amoureuse d'un capitaine.","Elle déteste les hommes en apparence.","C'est la capitaine de la Rose Bleue.","Anniversaire : 18 septembre.","Famille : Yami Sukehiro, Luck Voltia.","Voix japonaise : Yū Kobayashi."],jp: "シャーロット・ローズレイ",va: "Yū Kobayashi",g: "F",e: "Humain",m: ["Ronces"],gr: ["Rose Bleue"],r: ["Clover"],ha: "Blond",ta: 171,c: 1,img: "charlotte-roselei.webp"},
    {n: "Fuegoleon Vermillion",t: 1,em: "🦁🔥👑💪",h: ["C'est un noble au grand cœur.","Il a perdu un bras.","Il a un esprit du feu.","C'est le capitaine du Lion Écarlate.","Anniversaire : 5 août.","Voix japonaise : Katsuyuki Konishi."],jp: "フエゴレオン・ヴァーミリオン",va: "Katsuyuki Konishi",g: "M",e: "Humain",m: ["Feu"],gr: ["Lion Écarlate"],r: ["Clover"],ha: "Vermillon",ta: 188,c: 1,img: "fuegoleon-vermillion.webp"},
    {n: "Mereoleona Vermillion",t: 1,em: "🦁🔥😤🌋",h: ["Elle est très brutale.","Elle entraîne les gens dans un volcan.","Elle est la grande sœur du capitaine du Lion Écarlate.","Elle prend la tête du Lion Écarlate.","Anniversaire : 26 juillet.","Famille : House Vermillion.","Voix japonaise : Junko Minagawa."],jp: "メレオレオナ・ヴァーミリオン",va: "Junko Minagawa",g: "F",e: "Humain",m: ["Feu"],gr: ["Lion Écarlate","Chevaliers royaux"],r: ["Clover"],ha: "Vermillon",ta: 178,c: 105,img: "mereoleona-vermillion.webp"},
    {n: "Nozel Silva",t: 1,em: "🦅🌀👑😒",h: ["Il est froid avec sa petite sœur.","Sa magie est faite de mercure.","Sa mère est morte en lui donnant naissance… à elle.","C'est le capitaine de l'Aigle d'Argent.","Anniversaire : 30 décembre.","Voix japonaise : Kōsuke Toriumi."],jp: "ノゼル・シルヴァ",va: "Kōsuke Toriumi",g: "M",e: "Humain",m: ["Mercure"],gr: ["Aigle d'Argent","Chevaliers royaux"],r: ["Clover"],ha: "Argent",ta: 177,c: 2,img: "nozel-silva.webp"},
    {n: "William Vangeance",t: 1,em: "🌳🎭☀️👁️",h: ["Il porte un masque.","Il a une cicatrice sur le visage.","Il partage son corps avec un elfe.","C'est le capitaine de l'Aube Dorée.","Anniversaire : 24 décembre.","Voix japonaise : Daisuke Ono."],jp: "ウィリアム・ヴァンジャンス",va: "Daisuke Ono",g: "M",e: "Humain",m: ["Arbre-monde"],gr: ["Aube Dorée","Cerf Gris"],r: ["Clover"],ha: "Blanc",ta: 172,c: 2,img: "william-vangeance.webp"},
    {n: "Patolli",t: 1,em: "☀️👁️😈🧝",h: ["Il est le chef d'un groupe de terroristes.","Il est un elfe réincarné.","Il possède un grimoire à quatre feuilles.","Il partage le corps du capitaine de l'Aube Dorée.","Anniversaire : 24 décembre.","Famille : Ratri.","Voix japonaise : Takahiro Sakurai."],jp: "パトリ",va: "Takahiro Sakurai",g: "M",e: "Elfe",m: ["Lumière"],gr: ["Œil du Soleil de Minuit"],r: [],ha: "Blanc",ta: 172,c: 9,img: "patolli.webp"},
    {n: "Licht",t: 1,em: "⚔️🧝🍀💔",h: ["C'est le chef des elfes.","Il était le premier possesseur d'un grimoire à cinq feuilles.","Il a perdu sa femme et son enfant.","Il voulait se venger des humains.","Anniversaire : 1 octobre.","Famille : Tetia, Twin children, Lemiel Silvamillion Clover.","Voix japonaise : Takahiro Sakurai."],jp: "リヒト",va: "Takahiro Sakurai",g: "M",e: "Elfe",m: ["Épée"],gr: [],r: [],ha: "Blanc",ta: 173,c: 68,img: "licht.webp"},
    {n: "Lumiere Silvamillion Clover",t: 1,em: "👑☀️🧝‍♂️🤝",h: ["C'est un prince d'il y a 500 ans.","Il a été le premier Empereur-Mage.","Il voulait l'amitié entre humains et elfes.","Il était le meilleur ami de Licht.","Anniversaire : 12 février.","Famille : Tetia, Licht, Twin niblings.","Voix japonaise : Syu Hikari."],jp: "ルミエル・シルヴァミリオン・クローバー",va: "Syu Hikari",g: "M",e: "Humain",m: ["Lumière"],gr: [],r: ["Clover"],ha: "Blond",ta: 168,c: 1,al: ["Lemiel","Lumière"],img: "lumiere-silvamillion-clover.webp"},
    {n: "Lucius Zogratis",t: 1,em: "👼🕰️😇☠️",h: ["Il veut créer un monde parfait de paladins.","Il est le dernier des quatre frères et sœurs Zogratis.","Il manipule les âmes.","Il partage un corps avec l'Empereur-Mage.","Anniversaire : 15 octobre.","Famille : Julius Novachrono, Dante Zogratis, Vanica Zogratis, Zenon Zogratis."],jp: "ルシウス・ゾグラティス",g: "M",e: "Humain",m: ["Âme","Temps"],gr: ["Triade Noire"],r: ["Pique"],ha: "Noir",ta: 180,c: 306,img: "lucius-zogratis.webp"},
    {n: "Dante Zogratis",t: 1,em: "🪐😈🫀",h: ["Il est l'aîné d'une fratrie de Pique.","Il a passé un contrat avec Lucifero.","Il reforme son corps à volonté.","Il fait partie de la Triade Noire.","Anniversaire : 28 avril.","Famille : Lucius Zogratis, Julius Novachrono, Vanica Zogratis, Zenon Zogratis.","Voix japonaise : Rikiya Koyama."],jp: "ダンテ・ゾグラティス",va: "Rikiya Koyama",g: "M",e: "Humain",m: ["Corps","Gravité"],gr: ["Triade Noire"],r: ["Pique"],ha: "Noir",ta: 182,c: 231,img: "dante-zogratis.webp"},
    {n: "Zenon Zogratis",t: 1,em: "🦴🌀😐",h: ["Il a perdu son ami d'enfance.","Il a un œil de démon.","Il a passé un contrat avec Belzébuth.","Il fait partie de la Triade Noire.","Anniversaire : 28 décembre.","Famille : Lucius Zogratis, Julius Novachrono, Dante Zogratis, Vanica Zogratis.","Voix japonaise : Tatsuhisa Suzuki."],jp: "ゼノン・ゾグラティス",va: "Tatsuhisa Suzuki",g: "M",e: "Humain",m: ["Os","Espace"],gr: ["Triade Noire"],r: ["Pique"],ha: "Noir",ta: 178,c: 227,img: "zenon-zogratis.webp"},
    {n: "Vanica Zogratis",t: 1,em: "🩸😈🌙😆",h: ["Elle adore se battre contre des gens forts.","Elle a passé un contrat avec un démon de la malédiction.","Elle est la seule fille de la Triade Noire.","Elle a enlevé la sœur de Noelle.","Anniversaire : 27 juin.","Famille : Lucius Zogratis, Julius Novachrono, Dante Zogratis, Zenon Zogratis.","Voix japonaise : Yui Ogura."],jp: "ヴァニカ・ゾグラティス",va: "Yui Ogura",g: "F",e: "Humain",m: ["Sang","Malédiction"],gr: ["Triade Noire"],r: ["Pique"],ha: "Noir",ta: 166,c: 231,img: "vanica-zogratis.webp"},
    {n: "Mars",t: 2,em: "💎🛡️😶",h: ["Il vient du royaume de Diamant.","Il a été transformé par des expériences.","Il peut utiliser deux magies.","Il était le grand ami de Fana.","Anniversaire : 8 janvier.","Famille : Fana.","Voix japonaise : Yūichirō Umehara."],jp: "マルス",va: "Yūichirō Umehara",g: "M",e: "Humain",m: ["Minéral","Feu"],gr: [],r: ["Diamant"],ha: "Violet",ta: 170,c: 13,img: "mars.webp"},
    {n: "Fana",t: 2,em: "🔥🦎👧",h: ["Elle a été possédée par l'âme d'une elfe.","Elle invoque une salamandre.","Elle vient du royaume de Diamant.","Elle a fait partie de l'Œil du Soleil de Minuit.","Anniversaire : 24 mars.","Famille : Mars.","Voix japonaise : M・A・O."],jp: "ファナ",va: "M・A・O",g: "F",e: "Humain",m: ["Feu","Minéral"],gr: ["Œil du Soleil de Minuit"],r: ["Diamant"],ha: "Rose",ta: 162,c: 17,img: "fana.webp"},
    {n: "Vetto",t: 2,em: "🦁👊🧝",h: ["Il est d'une force monstrueuse.","Il prétend que le désespoir est le vrai pouvoir.","Il était l'un des « Trois Yeux ».","C'est un elfe réincarné.","Anniversaire : 12 septembre.","Voix japonaise : Masaya Takatsuka."],jp: "ヴェット",va: "Masaya Takatsuka",g: "M",e: "Elfe",m: ["Bête"],gr: ["Œil du Soleil de Minuit"],r: [],ha: "Blond",ta: 166,c: 51,img: "vetto.webp"},
    {n: "Rhya",t: 2,em: "🪞🎭🧝",h: ["Il copie les sorts des autres.","Il était l'un des « Trois Yeux ».","Il a un caractère rieur.","C'est un elfe réincarné.","Anniversaire : 18 janvier."],jp: "ライア",g: "M",e: "Elfe",m: ["Imitation"],gr: ["Œil du Soleil de Minuit"],r: [],ha: "Noir",ta: 181,c: 51,img: "rhya.webp"},
    {n: "Leopold Vermillion",t: 2,em: "🔥🦁😤",h: ["Il veut devenir Empereur-Mage.","Il est le petit frère de deux capitaines.","Il se déclare le rival du héros.","Il est au Lion Écarlate.","Anniversaire : 13 août.","Voix japonaise : KENN."],jp: "レオポルド・ヴァーミリオン",va: "KENN",g: "M",e: "Humain",m: ["Feu"],gr: ["Lion Écarlate"],r: ["Clover"],ha: "Vermillon",ta: 164,c: 2,img: "leopold-vermillion.webp"},
    {n: "Rill Boismortier",t: 2,em: "🎨🖌️😄",h: ["Il est jeune et très enthousiaste.","Il peint des créatures vivantes.","Il est l'un des plus jeunes capitaines.","Il est capitaine du Cerf Azur.","Anniversaire : 16 mars.","Famille : Charmy Pappitson, Seven children.","Voix japonaise : Natsuki Hanae."],jp: "リル・ボワモルティエ",va: "Natsuki Hanae",g: "M",e: "Humain",m: ["Peinture"],gr: ["Cerf Azur","Chevaliers royaux"],r: ["Clover"],ha: "Bleu",ta: 165,c: 2,img: "rill-boismortier.webp"},
    {n: "Jack the Ripper",t: 2,em: "🪓🦗😈",h: ["Il adore découper des adversaires forts.","Il est très grand.","Sa magie tranche tout.","C'est le capitaine de la Mante Verte.","Anniversaire : 1 juin.","Voix japonaise : Daisuke Namikawa."],jp: "ジャック・ザ・リッパー",va: "Daisuke Namikawa",g: "M",e: "Humain",m: ["Tranchant"],gr: ["Mante Verte"],r: ["Clover"],ha: "Noir",ta: 197,c: 1,img: "jack-the-ripper.webp"},
    {n: "Kaiser Granvorka",t: 2,em: "🐋🌀👴",h: ["C'est un vieux capitaine.","Sa magie crée des tourbillons.","Il a été possédé par un elfe.","Il commande l'Orque Pourpre.","Anniversaire : 14 octobre.","Famille : Flora Granvorka.","Voix japonaise : Kenichirō Matsuda."],jp: "カイゼル・グランボルカ",va: "Kenichirō Matsuda",g: "M",e: "Humain",m: ["Vortex"],gr: ["Orque Pourpre"],r: ["Clover"],ha: "Vert",ta: 193,c: 105,img: "kaiser-granvorka.webp"},
    {n: "Gueldre Poizot",t: 2,em: "🫥🎭👿",h: ["Il est capable de devenir invisible.","Il a trahi son escouade.","Il a fait passer des espions de Diamant.","Il était capitaine de l'Orque Pourpre.","Anniversaire : 5 décembre.","Voix japonaise : Tomokazu Sugita."],jp: "ゲルドル・ポイゾット",va: "Tomokazu Sugita",g: "M",e: "Humain",m: ["Perméation"],gr: ["Orque Pourpre"],r: ["Clover"],ha: "Blond",ta: 194,c: 1,img: "gueldre-poizot.webp"},
    {n: "Dorothy Unsworth",t: 2,em: "💤🌙🛏️",h: ["Elle dort tout le temps.","Sa magie l'emmène dans un monde de rêves.","Elle vient de la Forêt des sorcières.","C'est la capitaine du Paon Corail.","Anniversaire : 21 mars.","Voix japonaise : Mariya Ise."],jp: "ドロシー・アンズワース",va: "Mariya Ise",g: "F",e: "Humain",m: ["Rêve"],gr: ["Paon Corail"],r: ["Forêt des sorcières","Clover"],ha: "Violet",ta: 145,c: 2,img: "dorothy-unsworth.webp"},
    {n: "Klaus Lunettes",t: 2,em: "👓🛡️⚙️",h: ["Il remonte toujours ses lunettes.","Il est très sérieux.","Sa magie est faite de métal.","Il est à l'Aube Dorée.","Anniversaire : 19 avril.","Voix japonaise : Takuma Terashima."],jp: "クラウス・リュネット",va: "Takuma Terashima",g: "M",e: "Humain",m: ["Acier"],gr: ["Aube Dorée","Chevaliers royaux"],r: ["Clover"],ha: "Bleu",ta: 176,c: 11,img: "klaus-lunettes.webp"},
    {n: "Langris Vaude",t: 2,em: "🌀😠🩸",h: ["Il est jaloux du héros rival.","Sa magie efface ce qu'elle touche.","Il est le petit frère d'un membre des Taureaux Noirs.","Il est vice-capitaine de l'Aube Dorée.","Anniversaire : 27 septembre.","Famille : House Vaude.","Voix japonaise : Kaito Ishikawa."],jp: "ランギルス・ヴォード",va: "Kaito Ishikawa",g: "M",e: "Humain",m: ["Espace"],gr: ["Aube Dorée"],r: ["Clover"],ha: "Châtain",ta: 166,c: 70,img: "langris-vaude.webp"},
    {n: "Alecdora Sandler",t: 2,em: "🏜️👑🙇",h: ["Il est obsédé par son capitaine.","Sa magie utilise le sable.","Il n'aime pas le héros au vent.","Il est à l'Aube Dorée.","Anniversaire : 3 janvier.","Voix japonaise : Genki Okawa."],jp: "アレクドラ・サンドラー",va: "Genki Okawa",g: "M",e: "Humain",m: ["Sable"],gr: ["Aube Dorée"],r: ["Clover"],ha: "Vert",ta: 178,c: 12,img: "alecdora-sandler.webp"},
    {n: "Kirsch Vermillion",t: 2,em: "🌸💅🪞",h: ["Il est très narcissique.","Sa magie fait tomber des pétales.","Il est le frère aîné de Mimosa.","Il est vice-capitaine du Paon Corail.","Anniversaire : 24 avril.","Famille : House Vermillion.","Voix japonaise : Daisuke Namikawa."],jp: "キルシュ・ヴァーミリオン",va: "Daisuke Namikawa",g: "M",e: "Humain",m: ["Cerisier"],gr: ["Paon Corail","Chevaliers royaux"],r: ["Clover"],ha: "Vermillon",ta: 182,c: 113,img: "kirsch-vermillion.webp"},
    {n: "Solid Silva",t: 2,em: "💧😏👊",h: ["Il méprise sa petite sœur.","Il appartient à une famille royale.","Il est l'un des frères Silva.","Il est à l'Aigle d'Argent.","Anniversaire : 26 février.","Voix japonaise : Shouma Yamamoto."],jp: "ソリド・シルヴァ",va: "Shouma Yamamoto",g: "M",e: "Humain",m: ["Eau"],gr: ["Aigle d'Argent"],r: ["Clover"],ha: "Argent",ta: 169,c: 22,img: "solid-silva.webp"},
    {n: "Nebra Silva",t: 2,em: "🌫️😒👗",h: ["Elle méprise sa petite sœur.","Sa magie crée des illusions de brume.","Elle est l'aînée des filles Silva.","Elle est à l'Aigle d'Argent.","Anniversaire : 23 octobre.","Voix japonaise : Yurika Aizawa."],jp: "ネブラ・シルヴァ",va: "Yurika Aizawa",g: "F",e: "Humain",m: ["Brume"],gr: ["Aigle d'Argent"],r: ["Clover"],ha: "Argent",ta: 170,c: 2,img: "nebra-silva.webp"},
    {n: "Acier Silva",t: 3,em: "⚔️💧🌹",h: ["Elle était une capitaine très respectée.","Elle est morte en donnant naissance.","Elle avait un démon dans sa malédiction.","C'est la mère de Noelle.","Anniversaire : 31 août.","Voix japonaise : Kana Yūki."],jp: "アシエ・シルヴァ",va: "Kana Yūki",g: "F",e: "Humain",m: ["Acier","Eau"],gr: ["Aigle d'Argent"],r: ["Clover"],ha: "Argent",ta: 167,c: 111,img: "acier-silva.webp"},
    {n: "Sekke Bronzazza",t: 2,em: "🔔😎🤡",h: ["Il prétend être le rival du héros.","Personne ne se souvient de lui.","Sa magie est en bronze.","Il est à la Mante Verte.","Anniversaire : 22 avril.","Voix japonaise : Ryōta Ōsaka."],jp: "セッケ・ブロンザッザ",va: "Ryōta Ōsaka",g: "M",e: "Humain",m: ["Bronze"],gr: ["Mante Verte"],r: ["Clover"],ha: "Blond",ta: 175,c: 2,img: "sekke-bronzazza.webp"},
    {n: "Sol Marron",t: 2,em: "🪨💪🌹",h: ["Elle adore sa capitaine comme une mère.","Elle est très grande.","Sa magie utilise la terre.","Elle est à la Rose Bleue.","Anniversaire : 13 mai.","Voix japonaise : Haruna Kakiage."],jp: "ソル・マロン",va: "Haruna Kakiage",g: "F",e: "Humain",m: ["Terre"],gr: ["Rose Bleue"],r: ["Clover"],ha: "Noir",ta: 180,c: 22,img: "sol-marron.webp"},
    {n: "Lily Aquaria",t: 2,em: "⛪💧💘",h: ["Elle est religieuse.","Le héros la demande en mariage tout le temps.","Elle a élevé deux orphelins.","Elle vit à Hage.","Anniversaire : 2 juillet.","Voix japonaise : Miyu Kubota."],jp: "リリー・アクアリア",va: "Miyu Kubota",g: "F",e: "Humain",m: ["Eau","Espace"],gr: [],r: ["Clover"],ha: "Bleu",ta: 160,c: 1,al: ["Sœur Lily","Sister Lily"],img: "lily-aquaria.webp"},
    {n: "Orsi Orfai",t: 3,em: "⛪👨‍🦳🔥",h: ["C'est un prêtre.","Il boit et il est un peu lâche.","Il a élevé des orphelins.","Il vit à l'église de Hage.","Anniversaire : 22 mars.","Famille : Asta, Yuno, Recca, Nash.","Voix japonaise : Kazuki Nakao."],jp: "オルジ・オーファイ",va: "Kazuki Nakao",g: "M",e: "Humain",m: ["Feu"],gr: [],r: ["Clover"],ha: "Gris",ta: 180,c: 1,img: "orsi-orfai.webp"},
    {n: "Recca",t: 3,em: "👧💧⛪",h: ["C'est une orpheline.","Elle a grandi à Hage.","Elle est très attachée aux deux héros.","Elle vit à l'église de Hage.","Famille : Yuno, Asta, Nash, Aruru.","Voix japonaise : Risa Kayama."],jp: "レッカ",va: "Risa Kayama",g: "F",e: "Humain",m: ["Eau"],gr: [],r: ["Clover"],ha: "Rouge",ta: null,c: 1,img: "recca.webp"},
    {n: "Nash",t: 3,em: "👦🔥⛪",h: ["C'est un orphelin.","Il ne croit pas aux rêves au début.","Il est fan du héros.","Il vit à l'église de Hage.","Famille : Yuno, Asta, Recca, Aruru.","Voix japonaise : Hana Sato."],jp: "ナッシュ",va: "Hana Sato",g: "M",e: "Humain",m: ["Feu"],gr: [],r: ["Clover"],ha: "Châtain",ta: null,c: 1,img: "nash.webp"},
    {n: "Sylph",t: 2,em: "🧚‍♀️🌪️🍃",h: ["C'est un esprit.","Elle est minuscule.","Elle est très possessive.","Elle accompagne le héros au vent.","Voix japonaise : Aya Uchida."],jp: "シルフ",va: "Aya Uchida",g: "F",e: "Esprit",m: ["Vent"],gr: ["Aube Dorée"],r: [],ha: "Vert",ta: 15,c: 20,al: ["Bell"],img: "sylph.webp"},
    {n: "Undine",t: 3,em: "🧜‍♀️💧💖",h: ["C'est un esprit.","Elle vit au royaume de Cœur.","Elle est liée à une reine.","C'est l'esprit de l'eau.","Voix japonaise : Kana Ueda."],jp: "ウンディーネ",va: "Kana Ueda",g: "F",e: "Esprit",m: ["Eau"],gr: [],r: ["Cœur"],ha: "Bleu",ta: null,c: 224,img: "undine.webp"},
    {n: "Lolopechka",t: 2,em: "👑💧🙃",h: ["Elle est très maladroite.","Elle est sous une malédiction de démon.","Elle est reine d'un royaume voisin.","Elle dirige le royaume de Cœur.","Anniversaire : 21 février.","Famille : Gadjah.","Voix japonaise : Yū Serizawa."],jp: "ロロペチカ",va: "Yū Serizawa",g: "F",e: "Humain",m: ["Eau"],gr: [],r: ["Cœur"],ha: "Noir",ta: 165,c: 224,img: "lolopechka.webp"},
    {n: "Gadjah",t: 3,em: "⚡🐘👳",h: ["Il est d'un royaume voisin.","Il est l'un des quatre gardiens d'esprits.","Il se bat avec la foudre.","Il protège la reine de Cœur.","Anniversaire : 29 janvier.","Famille : Lolopechka.","Voix japonaise : Ryōtarō Okiayu."],jp: "ガジャ",va: "Ryōtarō Okiayu",g: "M",e: "Humain",m: ["Foudre"],gr: [],r: ["Cœur"],ha: "Noir",ta: 176,c: 225,img: "gadjah.webp"},
    {n: "Kahono",t: 3,em: "🎤🎶🙂",h: ["Elle veut devenir idole.","Elle vit dans un village de pirates.","Elle chante pour se battre.","Elle est de la famille de Kiato.","Anniversaire : 15 novembre.","Famille : Gifso, Gio, Kiato.","Voix japonaise : Megumi Han."],jp: "カホノ",va: "Megumi Han",g: "F",e: "Humain",m: ["Chant"],gr: [],r: [],ha: "Rouge",ta: 157,c: 57,img: "kahono.webp"},
    {n: "Kiato",t: 3,em: "🩰💃⚡",h: ["Il vit dans un village de pirates.","Il danse pour se battre.","Il a été blessé à la jambe.","Il est le frère de Kahono.","Anniversaire : 4 février.","Famille : Gifso, Gio, Kahono.","Voix japonaise : Yoshimasa Hosoya."],jp: "キアト",va: "Yoshimasa Hosoya",g: "M",e: "Humain",m: ["Butô"],gr: [],r: [],ha: "Bleu",ta: 176,c: 60,img: "kiato.webp"},
    {n: "Rades Spirito",t: 2,em: "🧟😡🩹",h: ["Il hait les chevaliers mages.","Il contrôle les cadavres.","Il a été rejeté par une escouade.","Il a été membre de l'Œil du Soleil de Minuit.","Anniversaire : 17 octobre.","Voix japonaise : Masayuki Akasaka."],jp: "ラデス・スピーリト",va: "Masayuki Akasaka",g: "M",e: "Humain",m: ["Cadavre"],gr: ["Œil du Soleil de Minuit","Orque Pourpre"],r: ["Clover"],ha: "Violet",ta: 174,c: 24,img: "rades-spirito.webp"},
    {n: "Valtos",t: 2,em: "🌀🔪🙇",h: ["Il est muet de gratitude envers son maître.","Sa magie ouvre des portails.","Il est un ancien esclave.","Il a été membre de l'Œil du Soleil de Minuit.","Anniversaire : 27 décembre.","Voix japonaise : Daiki Hamano."],jp: "ヴァルトス",va: "Daiki Hamano",g: "M",e: "Humain",m: ["Espace"],gr: ["Œil du Soleil de Minuit"],r: ["Clover"],ha: "Gris",ta: 178,c: 24,img: "valtos.webp"},
    {n: "Sally",t: 2,em: "🧪😆🔬",h: ["C'est une savante folle.","Sa magie crée du gel.","Elle adore faire des expériences.","Elle a été membre de l'Œil du Soleil de Minuit.","Anniversaire : 17 mars.","Voix japonaise : Minami Tsuda."],jp: "サリー",va: "Minami Tsuda",g: "F",e: "Humain",m: ["Gel"],gr: ["Œil du Soleil de Minuit"],r: ["Clover"],ha: "Noir",ta: 160,c: 33,img: "sally.webp"},
    {n: "Catherine",t: 3,em: "🧙‍♀️⚱️",h: ["C'est une ancienne sorcière.","Sa magie crée des sphères de cendre.","Elle a été chassée de la Forêt des sorcières.","Elle a été membre de l'Œil du Soleil de Minuit.","Anniversaire : 20 avril.","Voix japonaise : Kimiko Jitsukawa."],jp: "キャサリン",va: "Kimiko Jitsukawa",g: "F",e: "Humain",m: ["Cendre"],gr: ["Œil du Soleil de Minuit"],r: ["Forêt des sorcières"],ha: "Gris",ta: 165,c: 28,img: "catherine.webp"},
    {n: "Heath Graice",t: 3,em: "❄️😑",h: ["Il a attaqué un village frontalier.","Il rend les gens de glace.","Il est l'un des premiers vrais ennemis.","Il était membre de l'Œil du Soleil de Minuit.","Anniversaire : 14 novembre.","Voix japonaise : Ryōtarō Okiayu."],jp: "ヒース・グライス",va: "Ryōtarō Okiayu",g: "M",e: "Humain",m: ["Glace"],gr: ["Œil du Soleil de Minuit"],r: ["Clover"],ha: "Gris",ta: 187,c: 6,img: "heath-graice.webp"},
    {n: "Lotus Whomalt",t: 3,em: "🚬😩🗿",h: ["Il se plaint tout le temps.","Sa magie est faite de fumée.","Il vient du royaume de Diamant.","Il a été l'un des huit généraux du Diamant.","Anniversaire : 1 décembre.","Famille : Wife, Three daughters.","Voix japonaise : Kenyu Horiuchi."],jp: "ロータス・フーモルト",va: "Kenyu Horiuchi",g: "M",e: "Humain",m: ["Fumée"],gr: [],r: ["Pique","Diamant"],ha: "Noir",ta: 184,c: 12,img: "lotus-whomalt.webp"},
    {n: "Moris Libardirt",t: 3,em: "🧪🧬😈",h: ["C'est un savant.","Il fait des expériences sur les humains.","Il a créé des armes humaines.","Il est un ancien général du Diamant.","Anniversaire : 21 mai.","Voix japonaise : Masayuki Akasaka."],jp: "モリス・リバルダート",va: "Masayuki Akasaka",g: "M",e: "Humain",m: ["Modification","Gravité","Terre"],gr: [],r: ["Pique","Diamant"],ha: "Blond",ta: 177,c: 79,img: "moris-libardirt.webp"},
    {n: "Fanzell Kruger",t: 3,em: "🌪️🧔",h: ["Il a fui le royaume de Diamant.","Il est amoureux d'une sorcière.","Il a entraîné Mars.","Il a aidé le héros.","Anniversaire : 7 octobre.","Famille : Dominante Code.","Voix japonaise : Satoshi Mikami."],jp: "ファンゼル・クルーガー",va: "Satoshi Mikami",g: "M",e: "Humain",m: ["Vent"],gr: [],r: ["Diamant"],ha: "Rouge",ta: 178,c: 82,img: "fanzell-kruger.webp"},
    {n: "Dominante Code",t: 3,em: "🧙‍♀️💘",h: ["Elle est sorcière.","Elle a fui la Forêt des sorcières.","Elle est amoureuse de Fanzell.","Elle vit sous une fausse identité.","Anniversaire : 15 septembre.","Famille : Fanzell Kruger.","Voix japonaise : Misako Tomioka."],jp: "ドミナント・コード",va: "Misako Tomioka",g: "F",e: "Humain",m: [],gr: [],r: ["Forêt des sorcières","Diamant"],ha: "Orange",ta: 167,c: 82,img: "dominante-code.webp"},
    {n: "Ursula Bloodlord",t: 3,em: "🧛‍♀️🩸",h: ["Elle est très âgée.","Sa magie est faite de sang.","Elle est la reine des sorcières.","Elle est la mère adoptive d'une membre des Taureaux Noirs.","Anniversaire : 3 novembre.","Voix japonaise : Ryoko Gi."],jp: "アーシュラ・ブラッドロード",va: "Ryoko Gi",g: "F",e: "Humain",m: ["Sang"],gr: [],r: ["Forêt des sorcières"],ha: "Rose",ta: 170,c: 82,al: ["Reine des sorcières"],img: "ursula-bloodlord.webp"},
    {n: "Augustus Kira Clover XIII",t: 3,em: "👑😠🐣",h: ["Il est très jaloux de l'Empereur-Mage.","Il est très petit.","Il est le roi du royaume.","C'est le roi de Clover.","Anniversaire : 22 octobre.","Famille : Finesse Calmreich.","Voix japonaise : Jun Miyamoto."],jp: "アウグストゥス・キーラ・クローバー13世",va: "Jun Miyamoto",g: "M",e: "Humain",m: ["Lumière"],gr: [],r: ["Clover"],ha: null,ta: 160,c: 29,img: "augustus-kira-clover-xiii.webp"},
    {n: "Damnatio Kira",t: 3,em: "⚖️🎭",h: ["Il est juge.","Il hait les gens de basse naissance.","Il condamne le héros à mort.","Il est possédé pendant le Jugement dernier.","Anniversaire : 16 octobre.","Voix japonaise : Hiroshi Tsuchida."],jp: "ダムナティオ・キーラ",va: "Hiroshi Tsuchida",g: "M",e: "Humain",m: ["Balance","Air"],gr: [],r: ["Clover"],ha: "Noir",ta: 180,c: 216,img: "damnatio-kira.webp"},
    {n: "Marx Francois",t: 3,em: "🧠📋😩",h: ["Il travaille pour l'Empereur-Mage.","Il lit les souvenirs.","Il est souvent débordé.","Il fait partie du Cerf Gris.","Anniversaire : 21 octobre.","Voix japonaise : Yoshitaka Yamaya."],jp: "マルクス・フランソワ",va: "Yoshitaka Yamaya",g: "M",e: "Humain",m: ["Mémoire"],gr: ["Cerf Gris"],r: ["Clover"],ha: "Bleu",ta: 167,c: 10,img: "marx-francois.webp"},
    {n: "Siren Tium",t: 3,em: "🪨👿",h: ["Sa magie utilise la pierre.","Il était à l'Aube Dorée.","Son corps a été utilisé par Rades.","Anniversaire : 4 mai.","Voix japonaise : Masayuki Akasaka."],jp: "シレン・ティウム",va: "Masayuki Akasaka",g: "M",e: "Humain",m: ["Pierre"],gr: ["Aube Dorée","Chevaliers royaux"],r: ["Clover"],ha: "Blond",ta: 183,c: 2,img: "siren-tium.webp"},
    {n: "Hamon Caseus",t: 3,em: "🔮😐",h: ["Sa magie est faite de verre.","Il est à l'Aube Dorée.","Il a été tué pendant une attaque.","Il était chevalier royal.","Anniversaire : 21 avril.","Voix japonaise : Kōsuke Toriumi."],jp: "ハモン・カーセウス",va: "Kōsuke Toriumi",g: "M",e: "Humain",m: ["Verre"],gr: ["Aube Dorée","Chevaliers royaux"],r: ["Clover"],ha: "Blond",ta: 170,c: 22,img: "hamon-caseus.webp"},
    {n: "Marie Adlai",t: 2,em: "👧👁️💕",h: ["C'est une petite fille.","Son grand frère l'adore un peu trop.","Elle est orpheline.","C'est la sœur de Gauche.","Anniversaire : 21 décembre.","Famille : Gauche Adlai.","Voix japonaise : Hitomi Sasaki."],jp: "マリー・アドレイ",va: "Hitomi Sasaki",g: "F",e: "Humain",m: ["Œil"],gr: [],r: ["Clover"],ha: "Blond",ta: 135,c: 6,img: "marie-adlai.webp"},
    {n: "En Ringard",t: 3,em: "🍄😐",h: ["Sa magie fait pousser des champignons.","Il est à la Mante Verte.","Il fait partie des chevaliers royaux.","Il ne parle pas beaucoup.","Anniversaire : 3 septembre.","Famille : Ten siblings.","Voix japonaise : Satoshi Hino."],jp: "エン・リンガード",va: "Satoshi Hino",g: "M",e: "Humain",m: ["Champignon"],gr: ["Mante Verte","Chevaliers royaux"],r: ["Clover"],ha: "Vert",ta: 176,c: 120,img: "en-ringard.webp"},
    {n: "Revchi Salik",t: 3,em: "⛓️😈",h: ["Il a été chevalier mage.","Sa magie crée des chaînes.","Il a trahi la couronne.","Il est l'un des premiers ennemis du héros.","Anniversaire : 16 janvier.","Voix japonaise : Yuto Suzuki."],jp: "レブチ・サリーク",va: "Yuto Suzuki",g: "M",e: "Humain",m: ["Chaîne"],gr: ["Orque Pourpre"],r: ["Clover"],ha: "Noir",ta: 176,c: 1,img: "revchi-salik.webp"},
    {n: "Neige",t: 3,em: "❄️😠",h: ["C'est un criminel.","Sa magie fait tomber la neige.","Il attaque une ville.","Il est vaincu par les Taureaux Noirs.","Anniversaire : 21 février.","Famille : Baro.","Voix japonaise : Kōhei Amasaki."],jp: "ネージュ",va: "Kōhei Amasaki",g: "M",e: "Humain",m: ["Neige"],gr: [],r: ["Clover"],ha: "Blanc",ta: 169,c: 40,img: "neige.webp"},
    {n: "Baro",t: 3,em: "🟤😈",h: ["C'est un criminel.","Sa magie utilise la boue.","Il a été tué.","Il est lié au cas de Neige.","Anniversaire : 10 janvier.","Famille : Neige.","Voix japonaise : Genki Muro."],jp: "バロ",va: "Genki Muro",g: "M",e: "Humain",m: ["Boue"],gr: [],r: ["Clover"],ha: "Noir",ta: 169,c: 40,img: "baro.webp"},
    {n: "Gifso",t: 3,em: "🎲👴",h: ["Magie : Jeu.","Première apparition : chapitre 59.","Anniversaire : 5 septembre.","Famille : Gio, Kiato, Kahono.","Voix japonaise : Chō."],jp: "ジフソ",va: "Chō",g: "M",e: "Humain",m: ["Jeu"],gr: [],r: [],ha: null,ta: 150,c: 59,img: "gifso.webp"},
    {n: "Theresa Rapual",t: 3,em: "👵🔥",h: ["C'est une ancienne capitaine.","Elle a 65 ans.","Elle est de l'escouade du Lion Écarlate.","Elle se bat malgré son âge.","Anniversaire : 28 mars.","Voix japonaise : Rei Igarashi."],jp: "テレジア・ラプアール",va: "Rei Igarashi",g: "F",e: "Humain",m: ["Feu"],gr: ["Lion Écarlate"],r: ["Clover"],ha: null,ta: 162,c: 39,img: "theresa-rapual.webp"},
    {n: "Morgen Faust",t: 3,em: "🌗🗡️",h: ["Il était l'espoir de sa famille.","Il est mort jeune.","Il était membre du Cerf Gris.","C'est le frère jumeau de Nacht.","Anniversaire : 1 mai.","Famille : House Faust.","Voix japonaise : Hiro Shimono."],jp: "モルゲン・ファウスト",va: "Hiro Shimono",g: "M",e: "Humain",m: ["Lumière","Ténèbres"],gr: ["Cerf Gris"],r: ["Clover"],ha: "Noir",ta: 180,c: 263,img: "morgen-faust.webp"},
    {n: "Rebecca Scarlet",t: 3,em: "👩‍👧‍👦❤️",h: ["Elle a des petits frères et sœurs.","Elle ressemble à la religieuse que le héros aime.","Elle est amoureuse du héros.","Elle vit dans un village.","Anniversaire : 18 avril.","Famille : Luca, Marco Scarlet, Pem, Other siblings.","Voix japonaise : Rikako Yamaguchi."],jp: "レベッカ・スカーレット",va: "Rikako Yamaguchi",g: "F",e: "Humain",m: [],gr: [],r: ["Clover"],ha: "Rouge",ta: 165,c: 38,img: "rebecca-scarlet.webp"},
    {n: "Marco Scarlet",t: 3,em: "👦💪",h: ["C'est un enfant.","Il admire le héros.","Il est le petit frère de Rebecca.","Il vit dans un village.","Famille : Rebecca Scarlet, Luca, Pem, Other siblings.","Voix japonaise : Misako Tomioka."],jp: "マルコ・スカーレット",va: "Misako Tomioka",g: "M",e: "Humain",m: [],gr: [],r: ["Clover"],ha: "Rouge",ta: null,c: 39,img: "marco-scarlet.webp"},
    {n: "Ruben Chagar",t: 3,em: "🪨🦁",h: ["Sa magie utilise le grès.","Il est au Lion Écarlate.","Il fait partie des chevaliers royaux.","Il est très grand.","Anniversaire : 29 août.","Voix japonaise : Wataru Tsuyuzaki."],jp: "ルベン・シャガー",va: "Wataru Tsuyuzaki",g: "M",e: "Humain",m: ["Grès"],gr: ["Lion Écarlate","Chevaliers royaux"],r: ["Clover"],ha: "Châtain",ta: 192,c: 108,img: "ruben-chagar.webp"},
    {n: "Fragil Tormenta",t: 3,em: "❄️🦌",h: ["Sa magie utilise la neige.","Elle est au Cerf Azur.","Elle fait partie des chevaliers royaux.","Elle est calme.","Anniversaire : 21 février.","Voix japonaise : Aya Uchida."],jp: "フラギル・トルメンタ",va: "Aya Uchida",g: "F",e: "Humain",m: ["Neige"],gr: ["Cerf Azur","Chevaliers royaux"],r: ["Clover"],ha: "Noir",ta: 162,c: 117,img: "fragil-tormenta.webp"},
    {n: "Puli Angel",t: 3,em: "🪽🌹",h: ["Sa magie crée des ailes.","Elle est à la Rose Bleue.","Elle fait partie des chevaliers royaux.","Elle porte un nom d'ange.","Anniversaire : 22 octobre.","Voix japonaise : Wakana Kowaka."],jp: "プーリ・エンジェル",va: "Wakana Kowaka",g: "F",e: "Humain",m: ["Aile"],gr: ["Rose Bleue","Chevaliers royaux"],r: ["Clover"],ha: "Blond",ta: 157,c: 119,img: "puli-angel.webp"},
    {n: "Nils Ragus",t: 3,em: "❄️🦅",h: ["Sa magie est faite de glace.","Il est à l'Aigle d'Argent.","Il fait partie des chevaliers royaux.","Il a un caractère froid.","Voix japonaise : Genki Muro."],jp: "ニルス・ラグス",va: "Genki Muro",g: "M",e: "Humain",m: ["Glace"],gr: ["Aigle d'Argent","Chevaliers royaux"],r: ["Clover"],ha: "Noir",ta: null,c: 118,img: "nils-ragus.webp"},
    {n: "Xerx Lugner",t: 3,em: "❄️🐋🎭",h: ["Il porte un masque.","Il est à l'Orque Pourpre.","Sa magie est faite de glace.","Il a été possédé par un elfe.","Anniversaire : 12 novembre.","Voix japonaise : Wataru Tsuyuzaki."],jp: "ザクス・リューグナー",va: "Wataru Tsuyuzaki",g: "M",e: "Humain",m: ["Glace"],gr: ["Orque Pourpre"],r: ["Clover"],ha: "Violet",ta: 176,c: 112,img: "xerx-lugner.webp"},
    {n: "Forte Gris",t: 3,em: "🔥🦁",h: ["Il est au Lion Écarlate.","Sa magie est faite de feu.","Il est vice-capitaine.","Il apparaît pendant l'invasion des elfes.","Anniversaire : 2 avril.","Voix japonaise : Wataru Tsuyuzaki."],jp: "フォルティ・グリス",va: "Wataru Tsuyuzaki",g: "M",e: "Humain",m: ["Feu"],gr: ["Lion Écarlate"],r: ["Clover"],ha: "Orange",ta: 171,c: 108,img: "forte-gris.webp"},
    {n: "Randall Luftair",t: 3,em: "💨🦁",h: ["Il est au Lion Écarlate.","Sa magie utilise l'air.","Il est vice-capitaine.","Il est très calme.","Anniversaire : 5 février.","Voix japonaise : Kentarō Itō."],jp: "ランドール・ルフトエール",va: "Kentarō Itō",g: "M",e: "Humain",m: ["Air"],gr: ["Lion Écarlate"],r: ["Clover"],ha: "Châtain",ta: 179,c: 170,img: "randall-luftair.webp"},
    {n: "Ben Benfunk",t: 3,em: "🟠🦁",h: ["Il est au Lion Écarlate.","Sa magie utilise le cuivre.","Il fait partie des chevaliers royaux.","Il est souriant.","Anniversaire : 21 avril.","Voix japonaise : Jun Miyamoto."],jp: "ベン・ベンファンク",va: "Jun Miyamoto",g: "M",e: "Humain",m: ["Cuivre"],gr: ["Lion Écarlate","Chevaliers royaux"],r: ["Clover"],ha: "Blond",ta: 180,c: 112,img: "ben-benfunk.webp"},
    {n: "Letoile Becquerel",t: 3,em: "🧭🌅",h: ["Elle est à l'Aube Dorée.","Sa magie crée une boussole.","Elle a été possédée par une elfe.","Elle est discrète.","Voix japonaise : Yū Ayase."],jp: "レトゥア・ベクレル",va: "Yū Ayase",g: "F",e: "Humain",m: ["Boussole"],gr: ["Aube Dorée"],r: ["Clover"],ha: "Vert",ta: null,c: 172,img: "letoile-becquerel.webp"},
    {n: "David Swallow",t: 3,em: "🎲🌅",h: ["Il est à l'Aube Dorée.","Sa magie lance des dés.","Il a été possédé par un elfe.","Il aime le hasard.","Voix japonaise : Makoto Sahara."],jp: "ダヴィド・スワロー",va: "Makoto Sahara",g: "M",e: "Humain",m: ["Dés"],gr: ["Aube Dorée"],r: ["Clover"],ha: "Blond",ta: null,c: 172,img: "david-swallow.webp"},
    {n: "Cob Portaport",t: 3,em: "🌀👑",h: ["Il travaille pour l'Empereur-Mage.","Il fait partie du Cerf Gris.","Sa magie ouvre des portails.","Il emmène les chevaliers royaux.","Anniversaire : 2 septembre.","Voix japonaise : Wataru Tsuyuzaki."],jp: "コブ・ポルタポルト",va: "Wataru Tsuyuzaki",g: "M",e: "Humain",m: ["Espace"],gr: ["Chevaliers royaux","Cerf Gris"],r: ["Clover"],ha: "Châtain",ta: 180,c: 113,img: "cob-portaport.webp"},
    {n: "Zara Ideale",t: 3,em: "🔥🪤",h: ["Il était chevalier mage.","Il posait des pièges.","Il est mort au combat.","C'est le père de Zora.","Anniversaire : 4 décembre.","Famille : Zora Ideale.","Voix japonaise : Hikaru Midorikawa."],jp: "ザラ・イデアーレ",va: "Hikaru Midorikawa",g: "M",e: "Humain",m: ["Feu"],gr: ["Orque Pourpre"],r: ["Clover"],ha: "Rouge",ta: 175,c: 123,img: "zara-ideale.webp"},
    {n: "Owen",t: 3,em: "🩺💧",h: ["Royaume : Clover.","Magie : Eau.","Première apparition : chapitre 80.","Anniversaire : 17 mai.","Voix japonaise : Eiichiro Tokumoto."],jp: "オーヴェン",va: "Eiichiro Tokumoto",g: "M",e: "Humain",m: ["Eau"],gr: [],r: ["Clover"],ha: "Gris",ta: 182,c: 80,img: "owen.webp"},
    {n: "Richita",t: 3,em: "👩❤️🔒",h: ["Elle est morte il y a longtemps.","Elle absorbait la magie autour d'elle.","Elle a recueilli un petit démon.","C'est la mère du héros.","Anniversaire : 16 février.","Famille : Asta, Liebe.","Voix japonaise : Kaori Ishihara."],jp: "リチタ",va: "Kaori Ishihara",g: "F",e: "Humain",m: ["Sceau"],gr: [],r: ["Clover"],ha: "Blond",ta: 158,c: 242,img: "richita.webp"},
    {n: "Tetia Silvamillion Clover",t: 3,em: "👑🤰",h: ["Elle vivait il y a 500 ans.","Elle a épousé un elfe.","Elle est morte enceinte.","C'est la sœur de Lumière.","Anniversaire : 22 novembre.","Famille : Lemiel Silvamillion Clover, Licht, Twin children.","Voix japonaise : Kumi Takaragi."],jp: "テティア・シルヴァミリオン・クローバー",va: "Kumi Takaragi",g: "F",e: "Humain",m: ["Vent"],gr: [],r: [],ha: "Blond",ta: 160,c: 68,img: "tetia-silvamillion-clover.webp"},
    {n: "Zagred",t: 2,em: "😈👅🖤",h: ["C'est un démon de haut rang.","Sa magie utilise la parole.","Il a manipulé un massacre il y a 500 ans.","Il voulait ouvrir la porte des enfers.","Voix japonaise : Showtaro Morikubo."],jp: "ザグレド",va: "Showtaro Morikubo",g: "M",e: "Démon",m: ["Kotodama"],gr: [],r: [],ha: "Noir",ta: 211,c: 196,img: "zagred.webp"},
    {n: "Megicula",t: 2,em: "😈🩸🌙",h: ["C'est un démon très puissant.","Il utilise une magie de malédiction.","Il a maudit la mère de Noelle.","Il a passé un contrat avec Vanica."],jp: "メギキュラ",g: "?",e: "Démon",m: ["Malédiction","Sang","Acier"],gr: [],r: ["Pique"],ha: null,ta: 149,c: 222,img: "megicula.webp"},
    {n: "Lucifero",t: 2,em: "😈🪐👑",h: ["C'est le démon le plus puissant.","Sa magie est la gravité.","Il règne sur les enfers.","Il a passé un contrat avec Dante."],jp: "ルチフェロ",g: "M",e: "Démon",m: ["Gravité"],gr: [],r: ["Pique"],ha: null,ta: 210,c: 243,img: "lucifero.webp"},
    {n: "Beelzebub",t: 3,em: "😈🌀",h: ["C'est un démon suprême.","Sa magie est l'espace.","Il règne sur les enfers.","Il a passé un contrat avec Zenon."],jp: "ベルゼブブ",g: "?",e: "Démon",m: ["Espace"],gr: [],r: ["Pique"],ha: null,ta: null,c: 238,al: ["Belzébuth"],img: "beelzebub.webp"},
    {n: "Astaroth",t: 3,em: "😈⏳",h: ["C'est un démon suprême.","Sa magie est le temps.","Il a disparu mystérieusement.","Il a passé un contrat avec un frère Zogratis."],jp: "アスタロト",g: "?",e: "Démon",m: ["Temps"],gr: [],r: [],ha: null,ta: null,c: 331,img: "astaroth.webp"},
    {n: "Adramelech",t: 3,em: "😈☀️",h: ["C'est un démon suprême.","Sa magie est la lumière.","Il vit au deuxième niveau des enfers.","Il passe un contrat avec Yami."],jp: "アドラメレク",g: "?",e: "Démon",m: ["Lumière"],gr: [],r: ["Clover"],ha: "Violet",ta: 169,c: 317,img: "adramelech.webp"},
    {n: "Baal",t: 3,em: "😈💨",h: ["C'est un démon suprême.","Sa magie est l'air.","Il vit au troisième niveau des enfers.","Il est incarné dans le juge pendant le Jugement dernier."],jp: "バアル",g: "?",e: "Démon",m: ["Air"],gr: [],r: [],ha: null,ta: null,c: 365,img: "baal.webp"},
    {n: "Lilith",t: 3,em: "😈❄️",h: ["C'est une démone.","Elle a une sœur jumelle.","Sa magie est la glace.","Elle vit au premier niveau des enfers.","Voix japonaise : Satsuki Kokubu."],jp: "リリス",va: "Satsuki Kokubu",g: "?",e: "Démon",m: ["Glace démoniaque"],gr: [],r: [],ha: "Blanc",ta: 188,c: 279,img: "lilith.webp"},
    {n: "Nahamah",t: 3,em: "😈🔥",h: ["C'est une démone.","Elle a une sœur jumelle.","Sa magie est le feu.","Elle vit au premier niveau des enfers.","Voix japonaise : Satsuki Kokubu."],jp: "ナハマー",va: "Satsuki Kokubu",g: "?",e: "Démon",m: ["Feu démoniaque"],gr: [],r: [],ha: "Blanc",ta: 188,c: 279,img: "nahamah.webp"},
    {n: "Gimodelo",t: 3,em: "🐐😈",h: ["C'est un démon.","Il sert un vice-capitaine.","Il est de rang moyen.","Il est lié à Nacht."],jp: "ギモデロ",g: "?",e: "Démon",m: [],gr: ["Taureau Noir"],r: ["Clover"],ha: null,ta: null,c: 261,img: "gimodelo.webp"},
    {n: "Walgner",t: 3,em: "🦇😈",h: ["C'est un démon.","Il sert un vice-capitaine.","Il est de rang moyen.","Il est lié à Nacht."],jp: "ワルグナ",g: "?",e: "Démon",m: [],gr: ["Taureau Noir"],r: ["Clover"],ha: null,ta: null,c: 263,img: "walgner.webp"},
    {n: "Ichika Yami",t: 2,em: "🌑⚔️🤬",h: ["Elle vient du pays de Hino.","Elle voulait venger sa famille.","Elle fait partie des Sept de Ryuzen.","C'est la petite sœur de Yami.","Anniversaire : 9 mai.","Famille : Yami Clan."],jp: "夜見一花",g: "F",e: "Humain",m: ["Ténèbres"],gr: ["Les Sept de Ryuzen"],r: ["Pays de Hino"],ha: "Noir",ta: 156,c: 337,img: "ichika-yami.webp"},
    {n: "Ryuya Ryudo",t: 2,em: "👁️🐉🦊",h: ["Il dirige le pays de Hino.","Il voit l'avenir.","Il est le chef des Sept de Ryuzen.","Il a un œil qui voit le temps.","Anniversaire : 23 juillet."],jp: "龍頭龍彌",g: "M",e: "Humain",m: ["Feu"],gr: [],r: ["Pays de Hino"],ha: "Noir",ta: 182,c: 336,img: "ryuya-ryudo.webp"},
    {n: "Yosuga Musyogatake",t: 3,em: "⚙️🐉",h: ["Il vient du pays de Hino.","Il fait partie des Sept de Ryuzen.","Sa magie est le fer.","Il est très fort.","Anniversaire : 20 janvier."],jp: "無生ヶ嶽縁",g: "M",e: "Humain",m: ["Fer"],gr: ["Les Sept de Ryuzen"],r: ["Pays de Hino"],ha: "Noir",ta: 181,c: 344,img: "yosuga-musyogatake.webp"},
    {n: "Komari Imari",t: 3,em: "⚡🐉",h: ["Elle vient du pays de Hino.","Elle fait partie des Sept de Ryuzen.","Sa magie est la foudre.","Elle est très énergique.","Anniversaire : 23 mai."],jp: "伊万里小鞠",g: "F",e: "Humain",m: ["Foudre"],gr: ["Les Sept de Ryuzen"],r: ["Pays de Hino"],ha: "Blond",ta: 160,c: 341,img: "komari-imari.webp"},
    {n: "Ginnojomorifuyu Kezoukaku",t: 3,em: "❄️🐉",h: ["Elle vient du pays de Hino.","Elle fait partie des Sept de Ryuzen.","Sa magie est la neige.","Son nom est très long.","Anniversaire : 27 octobre."],jp: "華蔵閣銀之丞守冬",g: "F",e: "Humain",m: ["Neige"],gr: ["Les Sept de Ryuzen"],r: ["Pays de Hino"],ha: "Noir",ta: 169,c: 344,img: "ginnojomorifuyu-kezoukaku.webp"},
    {n: "Jozou Hanegatsuji",t: 3,em: "🌪️🐉",h: ["Il vient du pays de Hino.","Il fait partie des Sept de Ryuzen.","Sa magie est le vent.","Il se bat avec un éventail.","Anniversaire : 5 février."],jp: "刎ヶ辻浄蔵",g: "M",e: "Humain",m: ["Vent"],gr: ["Les Sept de Ryuzen"],r: ["Pays de Hino"],ha: null,ta: 178,c: 341,img: "jozou-hanegatsuji.webp"},
    {n: "Daizaemon Ōoka",t: 3,em: "🪨🐉",h: ["Il vient du pays de Hino.","Il fait partie des Sept de Ryuzen.","Sa magie est la terre.","Il est très costaud.","Anniversaire : 29 août."],jp: "大岡大左衛門",g: "M",e: "Humain",m: ["Terre"],gr: ["Les Sept de Ryuzen"],r: ["Pays de Hino"],ha: "Noir",ta: 193,c: 341,img: "daizaemon-ooka.webp"},
    {n: "Fujio Tenmanyashiki",t: 3,em: "🎶🐉",h: ["Il vient du pays de Hino.","Il fait partie des Sept de Ryuzen.","Sa magie est le son.","Il est musicien.","Anniversaire : 2 octobre."],jp: "天満屋敷富士央",g: "M",e: "Humain",m: ["Son"],gr: ["Les Sept de Ryuzen"],r: ["Pays de Hino"],ha: null,ta: 176,c: 344,img: "fujio-tenmanyashiki.webp"},
    {n: "Lira",t: 3,em: "✏️🧝",h: ["C'est un elfe.","Sa magie dessine.","Il était un ami de Licht.","Il a pris le corps d'un capitaine.","Voix japonaise : Natsuki Hanae."],jp: "リラ",va: "Natsuki Hanae",g: "M",e: "Elfe",m: ["Gribouillage"],gr: [],r: [],ha: "Blanc",ta: null,c: 150,img: "lira.webp"},
    {n: "Drowa",t: 3,em: "🪞🧝",h: ["C'est un elfe.","Sa magie utilise des miroirs.","Il est réincarné dans le corps de Gauche.","Il était au village des elfes.","Anniversaire : 27 juin.","Famille : Eclat.","Voix japonaise : Satoshi Hino."],jp: "ドロワ",va: "Satoshi Hino",g: "M",e: "Elfe",m: ["Miroir"],gr: [],r: [],ha: "Blanc",ta: 182,c: 134,img: "drowa.webp"},
    {n: "Lufulu",t: 3,em: "⚡🧝",h: ["C'est un elfe.","Sa magie est la foudre.","Il est réincarné dans le corps de Luck.","Il était au village des elfes.","Anniversaire : 11 octobre.","Famille : Charla.","Voix japonaise : Ayumu Murase."],jp: "ルフル",va: "Ayumu Murase",g: "M",e: "Elfe",m: ["Foudre"],gr: [],r: [],ha: "Blanc",ta: 166,c: 134,img: "lufulu.webp"},
    {n: "Charla",t: 3,em: "🌹🧝",h: ["C'est une elfe.","Sa magie crée des ronces.","Elle est réincarnée dans le corps de Charlotte.","Elle était au village des elfes.","Anniversaire : 18 septembre.","Famille : Lufulu.","Voix japonaise : Yuu Kobayashi."],jp: "チャルラ",va: "Yuu Kobayashi",g: "F",e: "Elfe",m: ["Ronces"],gr: [],r: [],ha: "Blanc",ta: 172,c: 134,img: "charla.webp"},
    {n: "Eclat",t: 3,em: "👁️🧝",h: ["C'est une jeune elfe.","Sa magie est l'œil.","Elle est réincarnée dans le corps de Marie.","Elle était au village des elfes.","Anniversaire : 21 décembre.","Famille : Drowa.","Voix japonaise : Hitomi Sasaki."],jp: "エクラ",va: "Hitomi Sasaki",g: "F",e: "Elfe",m: ["Œil"],gr: [],r: [],ha: "Blanc",ta: 138,c: 134,img: "eclat.webp"},
    {n: "Ratri",t: 3,em: "🌀🧝",h: ["C'est un elfe.","Sa magie ouvre des portails.","Il est réincarné dans le corps de Langris.","Il était au village des elfes.","Famille : Patolli.","Voix japonaise : Kaito Ishikawa."],jp: "ラトリ",va: "Kaito Ishikawa",g: "M",e: "Elfe",m: ["Espace"],gr: [],r: [],ha: null,ta: null,c: 172,img: "ratri.webp"},
    {n: "Kivn",t: 3,em: "🧭🧝",h: ["C'est une elfe.","Sa magie crée une boussole.","Elle est réincarnée dans le corps de Letoile.","Elle était au village des elfes.","Voix japonaise : Yū Ayase."],jp: "キヴン",va: "Yū Ayase",g: "F",e: "Elfe",m: ["Boussole"],gr: [],r: [],ha: null,ta: null,c: 172,img: "kivn.webp"},
    {n: "Reve",t: 3,em: "💤🧝",h: ["C'est une elfe.","Sa magie est le rêve.","Elle est réincarnée dans le corps de Dorothy.","Elle était au village des elfes.","Voix japonaise : Mariya Ise."],jp: "レーヴ",va: "Mariya Ise",g: "F",e: "Elfe",m: ["Rêve"],gr: [],r: [],ha: null,ta: null,c: 182,img: "reve.webp"},
    {n: "Rossa",t: 3,em: "🪨🧝",h: ["C'est un elfe.","Sa magie est le grès.","Il est réincarné dans le corps de Ruben.","Il était au village des elfes.","Voix japonaise : Wataru Tsuyuzaki."],jp: "ロッサ",va: "Wataru Tsuyuzaki",g: "M",e: "Elfe",m: ["Grès"],gr: [],r: [],ha: null,ta: null,c: 151,img: "rossa.webp"},
    {n: "Ronne",t: 3,em: "🔄🧝",h: ["Magie : Échange.","Première apparition : chapitre 134.","Voix japonaise : Wataru Tsuyuzaki."],jp: "ロンネ",va: "Wataru Tsuyuzaki",g: "M",e: "Elfe",m: ["Échange"],gr: [],r: [],ha: null,ta: null,c: 134,img: "ronne.webp"},
    {n: "Baval",t: 3,em: "🎲🧝",h: ["C'est un elfe.","Sa magie lance des dés.","Il est réincarné dans le corps de David.","Il était au village des elfes.","Voix japonaise : Makoto Sahara."],jp: "バヴァル",va: "Makoto Sahara",g: "M",e: "Elfe",m: ["Dés"],gr: [],r: [],ha: null,ta: null,c: 172,img: "baval.webp"},
    {n: "Ado",t: 3,em: "🌀🧝",h: ["Magie : Espace.","Première apparition : chapitre 157.","Voix japonaise : Wataru Tsuyuzaki."],jp: "アド",va: "Wataru Tsuyuzaki",g: "M",e: "Elfe",m: ["Espace"],gr: [],r: [],ha: null,ta: null,c: 157,img: "ado.webp"},
    {n: "Svenkin Gatard",t: 3,em: "🧱🗡️",h: ["Il vient du royaume de Pique.","Sa magie utilise la peau.","Il est l'un des généraux de Pique.","Il est très grand.","Anniversaire : 21 avril."],jp: "スヴェンキン・ガタード",g: "M",e: "Humain",m: ["Peau"],gr: [],r: ["Pique"],ha: "Châtain",ta: 201,c: 239,img: "svenkin-gatard.webp"},
    {n: "Sivoir Snyle",t: 3,em: "👁️🗡️",h: ["Il vient du royaume de Pique.","Sa magie crée des yeux.","Il est un officier de Pique.","Il est vaincu pendant l'invasion.","Anniversaire : 14 septembre.","Voix japonaise : Makoto Sahara."],jp: "シーヴワル・スナイル",va: "Makoto Sahara",g: "M",e: "Humain",m: ["Globe oculaire"],gr: [],r: ["Pique"],ha: null,ta: 179,c: 239,img: "sivoir-snyle.webp"},
    {n: "Halbet Chevour",t: 3,em: "💇‍♀️🗡️",h: ["Elle vient du royaume de Pique.","Sa magie utilise les cheveux.","Elle est officière de Pique.","Elle est vaincue au royaume de Cœur.","Anniversaire : 19 septembre.","Voix japonaise : Miyuki Satou."],jp: "ハールベート・シュヴール",va: "Miyuki Satou",g: "F",e: "Humain",m: ["Cheveux"],gr: [],r: ["Pique"],ha: "Blond",ta: 168,c: 247,img: "halbet-chevour.webp"},
    {n: "Robero Ringert",t: 3,em: "👅🗡️",h: ["Il vient du royaume de Pique.","Sa magie utilise la langue.","Il est officier de Pique.","Il est immense.","Anniversaire : 18 janvier.","Voix japonaise : Wataru Tsuyuzaki."],jp: "ロベロ・リンゲルト",va: "Wataru Tsuyuzaki",g: "M",e: "Humain",m: ["Langue"],gr: [],r: ["Pique"],ha: "Blond",ta: 210,c: 251,img: "robero-ringert.webp"},
    {n: "Hischer Ongg",t: 3,em: "📌🗡️",h: ["Il vient du royaume de Pique.","Sa magie crée des clous.","Il est officier de Pique.","Il est très grand.","Anniversaire : 26 avril."],jp: "ヒッシャー・オング",g: "M",e: "Humain",m: ["Clou"],gr: [],r: ["Pique"],ha: "Blond",ta: 191,c: 247,img: "hischer-ongg.webp"},
    {n: "Gaderois Godroc",t: 3,em: "🪨🗡️",h: ["Il vient du royaume de Pique.","Sa magie est la pierre.","Il est l'un des généraux de Pique.","Il a passé un contrat avec un démon.","Anniversaire : 20 mai.","Voix japonaise : Michitake Kikuchi."],jp: "ガデロア・ゴドロック",va: "Michitake Kikuchi",g: "M",e: "Humain",m: ["Pierre"],gr: [],r: ["Pique"],ha: "Châtain",ta: 180,c: 234,img: "gaderois-godroc.webp"},
    {n: "Foyal Migusteau",t: 3,em: "🌫️🗡️",h: ["Il vient du royaume de Pique.","Sa magie est la brume.","Il est l'un des généraux de Pique.","Il a passé un contrat avec un démon.","Anniversaire : 28 octobre.","Voix japonaise : Wataru Tsuyuzaki."],jp: "フォヤル・ミグストー",va: "Wataru Tsuyuzaki",g: "M",e: "Humain",m: ["Brume"],gr: [],r: ["Pique"],ha: "Bleu",ta: 182,c: 234,img: "foyal-migusteau.webp"},
    {n: "Ralph Niaflem",t: 3,em: "🔥👑",h: ["Il vient du royaume de Pique.","Il fait partie de la résistance.","Il est un ancien prince.","Il a aidé le héros.","Anniversaire : 4 décembre.","Famille : Rudolph Niaflem.","Voix japonaise : Daisuke Takahashi."],jp: "ラルフ・ニアフレム",va: "Daisuke Takahashi",g: "M",e: "Humain",m: ["Feu"],gr: [],r: ["Pique"],ha: "Rouge",ta: 181,c: 229,img: "ralph-niaflem.webp"},
    {n: "Ciel Grinberryall",t: 3,em: "🌙👑",h: ["Elle vient du royaume de Pique.","Elle est la reine de la famille Grinberryall.","Elle a été tuée lors du coup d'État.","C'est la mère de Yuno.","Anniversaire : 27 août.","Famille : House Grinberryall.","Voix japonaise : Akiha Matsui."],jp: "シエル・グリンベリオール",va: "Akiha Matsui",g: "F",e: "Humain",m: ["Lune"],gr: [],r: ["Pique"],ha: "Noir",ta: 164,c: 234,img: "ciel-grinberryall.webp"},
    {n: "Loyce Grinberryall",t: 3,em: "☀️👑",h: ["Il vient du royaume de Pique.","Il était le roi.","Il a été tué lors du coup d'État.","C'est le père de Yuno.","Anniversaire : 19 décembre.","Famille : House Grinberryall.","Voix japonaise : Takashi Yoshida."],jp: "ロイス・グリンベリオール",va: "Takashi Yoshida",g: "M",e: "Humain",m: ["Soleil"],gr: [],r: ["Pique"],ha: "Noir",ta: 176,c: 234,img: "loyce-grinberryall.webp"},
    {n: "Allen Fiarain",t: 3,em: "🔥🗡️",h: ["Il vient du royaume de Pique.","Il était l'ami d'enfance de Zenon.","Il est mort jeune.","Il était dans la quatrième division.","Anniversaire : 10 avril."],jp: "アレン・フィアレイン",g: "M",e: "Humain",m: ["Feu"],gr: [],r: ["Pique"],ha: null,ta: 168,c: 306,img: "allen-fiarain.webp"},
    {n: "Potrof",t: 3,em: "🌿❤️",h: ["Royaume : Cœur.","Magie : Plante.","Première apparition : chapitre 233.","Voix japonaise : Hayato Fujii."],jp: "ポトロフ",va: "Hayato Fujii",g: "M",e: "Humain",m: ["Plante"],gr: [],r: ["Cœur"],ha: "Blond",ta: null,c: 233,img: "potrof.webp"},
    {n: "Sarado",t: 3,em: "🪨❤️",h: ["Elle vient du royaume de Cœur.","Sa magie est la terre.","Elle est l'une des gardiennes d'esprits.","Elle protège la reine de Cœur.","Voix japonaise : Touko Momoe."],jp: "サラード",va: "Touko Momoe",g: "F",e: "Humain",m: ["Terre"],gr: [],r: ["Cœur"],ha: "Châtain",ta: null,c: 247,img: "sarado.webp"},
    {n: "Smurik",t: 3,em: "💨❤️",h: ["Il vient du royaume de Cœur.","Sa magie est le vent.","Il est l'un des gardiens d'esprits.","Il protège la reine de Cœur.","Voix japonaise : Tadashi Makino."],jp: "スムリク",va: "Tadashi Makino",g: "M",e: "Humain",m: ["Vent"],gr: [],r: ["Cœur"],ha: "Gris",ta: null,c: 247,img: "smurik.webp"},
    {n: "Floga",t: 3,em: "🔥❤️",h: ["Il vient du royaume de Cœur.","Sa magie est le feu.","Il est l'un des gardiens d'esprits.","Il protège la reine de Cœur.","Voix japonaise : Shōmaru Zōza."],jp: "フローガ",va: "Shōmaru Zōza",g: "M",e: "Humain",m: ["Feu"],gr: [],r: ["Cœur"],ha: "Noir",ta: null,c: 247,img: "floga.webp"},
    {n: "Mariella",t: 3,em: "❄️💎",h: ["Elle vient du royaume de Diamant.","Sa magie est la glace.","Elle a été sauvée par Mars.","Elle est amoureuse de lui.","Anniversaire : 26 octobre.","Voix japonaise : Sayaka Senbongi."],jp: "マリエラ",va: "Sayaka Senbongi",g: "F",e: "Humain",m: ["Glace"],gr: [],r: ["Diamant"],ha: "Noir",ta: 157,c: 82,img: "mariella.webp"},
    {n: "Ladros",t: 3,em: "💎🦾",h: ["Il vient du royaume de Diamant.","Il est l'un des huit généraux.","Il est obsédé par Mars.","Il n'a pas de magie.","Anniversaire : 4 juillet.","Voix japonaise : Takeshi Kusao."],jp: "ラドロス",va: "Takeshi Kusao",g: "M",e: "Humain",m: [],gr: [],r: ["Diamant"],ha: "Blond",ta: 180,c: 79,img: "ladros.webp"},
    {n: "Ragus",t: 3,em: "⚡💎",h: ["Il vient du royaume de Diamant.","Sa magie est la foudre.","Il est l'un des généraux du Diamant.","Il est vaincu.","Voix japonaise : Wataru Tsuyuzaki."],jp: "ラガス",va: "Wataru Tsuyuzaki",g: "M",e: "Humain",m: ["Foudre"],gr: [],r: ["Diamant"],ha: "Bleu",ta: null,c: 74,img: "ragus.webp"},
    {n: "Yagos",t: 3,em: "🟢💎",h: ["Il vient du royaume de Diamant.","Sa magie est le mucus.","Il est vaincu par Asta.","Il est l'un des généraux du Diamant.","Voix japonaise : Genki Muro."],jp: "ヤーゴス",va: "Genki Muro",g: "M",e: "Humain",m: ["Mucus"],gr: [],r: ["Diamant"],ha: "Gris",ta: null,c: 74,img: "yagos.webp"},
    {n: "Broccos",t: 3,em: "🟤💎",h: ["Il vient du royaume de Diamant.","Sa magie est l'ocre.","Il est vaincu par Asta.","Il est l'un des généraux du Diamant."],jp: "ブロッコス",g: "M",e: "Humain",m: ["Ocre"],gr: [],r: ["Diamant"],ha: "Orange",ta: null,c: 74,img: "broccos.webp"},
    {n: "Kugas",t: 3,em: "🔥💎",h: ["Royaume : Diamant.","Magie : Feu.","Première apparition : chapitre 79."],jp: "クーガス",g: "M",e: "Humain",m: ["Feu"],gr: [],r: ["Diamant"],ha: "Noir",ta: null,c: 79,img: "kugas.webp"},
    {n: "Motas",t: 3,em: "🌪️💎",h: ["Royaume : Diamant.","Magie : Vent.","Première apparition : chapitre 79."],jp: "モタス",g: "M",e: "Humain",m: ["Vent"],gr: [],r: ["Diamant"],ha: "Blond",ta: null,c: 79,img: "motas.webp"},
    {n: "Mohawq",t: 3,em: "🪨💎",h: ["Royaume : Diamant.","Magie : Terre.","Première apparition : chapitre 89.","Voix japonaise : Wataru Tsuyuzaki."],jp: "モヒーカ",va: "Wataru Tsuyuzaki",g: "M",e: "Humain",m: ["Terre"],gr: [],r: ["Diamant"],ha: "Rouge",ta: null,c: 89,img: "mohawq.webp"},
    {n: "Feremena",t: 3,em: "🪨💎",h: ["Royaume : Diamant.","Magie : Terre.","Première apparition : chapitre 79."],jp: "フェレメナ",g: "F",e: "Humain",m: ["Terre"],gr: [],r: ["Diamant"],ha: null,ta: null,c: 79,img: "feremena.webp"},
    {n: "Nathan Agrippa",t: 3,em: "🛢️☠️",h: ["Il est très grand.","Il ressemble beaucoup à son fils.","Sa magie est le pétrole.","C'est le père de Gordon.","Anniversaire : 19 mars.","Voix japonaise : Kenichirō Matsuda."],jp: "ネイサン・アグリッパ",va: "Kenichirō Matsuda",g: "M",e: "Humain",m: ["Pétrole"],gr: [],r: ["Clover"],ha: "Noir",ta: 190,c: 223,img: "nathan-agrippa.webp"},
    {n: "Nilenia Agrippa",t: 3,em: "👵☠️",h: ["Elle est très âgée.","Elle est de la famille Agrippa.","Sa magie est le feu.","C'est la grand-mère de Gordon.","Anniversaire : 7 décembre.","Voix japonaise : Kenichirō Matsuda."],jp: "ニレニア・アグリッパ",va: "Kenichirō Matsuda",g: "F",e: "Humain",m: ["Feu"],gr: [],r: ["Clover"],ha: "Gris",ta: 135,c: 223,img: "nilenia-agrippa.webp"},
    {n: "Roxanne Agrippa",t: 3,em: "👧☠️",h: ["C'est une adolescente.","Elle est de la famille Agrippa.","Sa magie est l'acide.","C'est la sœur de Gordon.","Anniversaire : 29 octobre.","Voix japonaise : Kenichirō Matsuda."],jp: "ロクサーヌ・アグリッパ",va: "Kenichirō Matsuda",g: "F",e: "Humain",m: ["Acide"],gr: [],r: ["Clover"],ha: "Noir",ta: 151,c: 223,img: "roxanne-agrippa.webp"},
    {n: "Jonna Agrippa",t: 3,em: "👩☠️",h: ["Elle est de la famille Agrippa.","Sa magie est la plante toxique.","Elle est très gentille.","C'est la mère de Gordon.","Anniversaire : 20 septembre.","Voix japonaise : Kenichirō Matsuda."],jp: "ヨンナ・アグリッパ",va: "Kenichirō Matsuda",g: "F",e: "Humain",m: ["Plante toxique"],gr: [],r: ["Clover"],ha: "Noir",ta: 175,c: 223,img: "jonna-agrippa.webp"},
    {n: "Ledior Vaude",t: 3,em: "🌀👔",h: ["Il est noble.","Sa magie est l'espace.","Il est le père de deux mages.","C'est le père de Finral et Langris.","Famille : House Vaude."],jp: "レデオール・ヴォード",g: "M",e: "Humain",m: ["Espace"],gr: [],r: ["Clover"],ha: "Blond",ta: null,c: 70,img: "ledior-vaude.webp"},
    {n: "Liliane Vaude",t: 3,em: "👩👔",h: ["Elle est noble.","Elle est de la famille Vaude.","Elle préférait son fils cadet.","C'est la mère de Finral et Langris.","Famille : House Vaude.","Voix japonaise : Minami Takahashi."],jp: "リリアンヌ・ヴォード",va: "Minami Takahashi",g: "F",e: "Humain",m: [],gr: [],r: ["Clover"],ha: "Blond",ta: null,c: 70,img: "liliane-vaude.webp"},
    {n: "Eda Voltia",t: 3,em: "⚡💔",h: ["Elle est morte.","Elle n'aimait pas son fils.","Elle est de la famille Voltia.","C'est la mère de Luck.","Famille : Luck Voltia."],jp: "エダ・ボルティア",g: "F",e: "Humain",m: [],gr: [],r: ["Clover"],ha: "Blond",ta: null,c: 14,img: "eda-voltia.webp"},
    {n: "Himmel Faust",t: 3,em: "🌑👴",h: ["Il était chef de famille.","Il est mort.","Il est de la famille Faust.","C'est le père de Nacht et Morgen.","Famille : House Faust.","Voix japonaise : Takanori Miyazaki."],jp: "ヒンメル・ファウスト",va: "Takanori Miyazaki",g: "M",e: "Humain",m: ["Ombre"],gr: [],r: ["Clover"],ha: null,ta: null,c: 286,img: "himmel-faust.webp"},
    {n: "Helene Faust",t: 3,em: "👩🌑",h: ["Elle est morte.","Elle est de la famille Faust.","Elle avait des jumeaux.","C'est la mère de Nacht et Morgen.","Famille : House Faust.","Voix japonaise : Yūki Kyōka."],jp: "ヘレネ・ファウスト",va: "Yūki Kyōka",g: "F",e: "Humain",m: [],gr: [],r: ["Clover"],ha: null,ta: null,c: 286,img: "helene-faust.webp"},
    {n: "Genzou Yami",t: 3,em: "⚔️👴",h: ["Il vient du pays de Hino.","Il était un grand guerrier.","Il est mort.","C'est le père de Yami et Ichika.","Famille : Yami Clan."],jp: "夜見源蔵",g: "M",e: "Humain",m: [],gr: [],r: ["Pays de Hino"],ha: "Noir",ta: null,c: 342,img: "genzou-yami.webp"},
    {n: "Leviathan",t: 3,em: "🐉🌊",h: ["Royaume : Temple sous-marin.","Magie : Eau.","Première apparition : chapitre 359."],jp: "リヴァイアサン",g: "M",e: "Dragon",m: ["Eau"],gr: [],r: ["Temple sous-marin"],ha: null,ta: null,c: 359,img: "leviathan.webp"},
    {n: "Gio",t: 3,em: "🌊🧔",h: ["Magie : Eau.","Première apparition : chapitre 60.","Anniversaire : 20 juillet.","Famille : Gifso, Kiato, Kahono.","Voix japonaise : Masayuki Akasaka."],jp: "ジオ",va: "Masayuki Akasaka",g: "M",e: "Humain",m: ["Eau"],gr: [],r: [],ha: "Noir",ta: 188,c: 60,img: "gio.webp"},
    {n: "Curtis Warren",t: 3,em: "🪨🦅",h: ["Il est à l'Aigle d'Argent.","Sa magie est la roche.","Il est vice-capitaine.","Il apparaît à la sélection des chevaliers royaux."],jp: "カータス・ウォルン",g: "M",e: "Humain",m: ["Roche"],gr: ["Aigle d'Argent"],r: ["Clover"],ha: "Noir",ta: null,c: 113,img: "curtis-warren.webp"},
    {n: "Rob Vitesse",t: 3,em: "💨🦅",h: ["Il est à l'Aigle d'Argent.","Sa magie est le vent.","Il est rapide.","Il apparaît pendant la sélection des chevaliers royaux.","Voix japonaise : Wataru Tsuyuzaki."],jp: "ロブ・ヴィテス",va: "Wataru Tsuyuzaki",g: "M",e: "Humain",m: ["Vent"],gr: ["Aigle d'Argent"],r: ["Clover"],ha: "Gris",ta: null,c: 118,img: "rob-vitesse.webp"},
    {n: "Risacca Ondell",t: 3,em: "💧🌹",h: ["Elle est à la Rose Bleue.","Sa magie est l'eau.","Elle est vice-capitaine.","Elle est calme.","Anniversaire : 13 novembre.","Voix japonaise : Wakana Kowaka."],jp: "リサッカ・オンダル",va: "Wakana Kowaka",g: "F",e: "Humain",m: ["Eau"],gr: ["Rose Bleue"],r: ["Clover"],ha: "Bleu",ta: 167,c: 165,img: "risacca-ondell.webp"},
    {n: "Wainsley",t: 3,em: "❄️🌹",h: ["Elle est à la Rose Bleue.","Sa magie est la glace.","Elle est fan de sa capitaine.","Elle apparaît à la sélection des chevaliers royaux.","Voix japonaise : Kumi Takaragi."],jp: "ウェインズリー",va: "Kumi Takaragi",g: "F",e: "Humain",m: ["Glace"],gr: ["Rose Bleue"],r: ["Clover"],ha: "Rose",ta: null,c: 118,img: "wainsley.webp"},
    {n: "Galgaria",t: 3,em: "🪨🌹",h: ["Royaume : Clover.","Groupe : Rose Bleue.","Magie : Pierre.","Première apparition : chapitre 221.","Voix japonaise : Sara Matsumoto."],jp: "ガルガリア",va: "Sara Matsumoto",g: "F",e: "Humain",m: ["Pierre"],gr: ["Rose Bleue"],r: ["Clover"],ha: "Blond",ta: null,c: 221,img: "galgaria.webp"},
    {n: "Selena",t: 3,em: "💧🌹",h: ["Royaume : Clover.","Groupe : Rose Bleue.","Magie : Eau.","Première apparition : chapitre 221.","Voix japonaise : Yuna Kamakura."],jp: "セレーナ",va: "Yuna Kamakura",g: "F",e: "Humain",m: ["Eau"],gr: ["Rose Bleue"],r: ["Clover"],ha: "Châtain",ta: null,c: 221,img: "selena.webp"},
    {n: "Digit Taliss",t: 3,em: "🍇🐋",h: ["Il est à l'Orque Pourpre.","Sa magie est la plante toxique.","Il est vice-capitaine.","Il est cynique.","Anniversaire : 26 août.","Voix japonaise : Wataru Tsuyuzaki."],jp: "ジギト・タリス",va: "Wataru Tsuyuzaki",g: "M",e: "Humain",m: ["Plante toxique"],gr: ["Orque Pourpre"],r: ["Clover"],ha: "Violet",ta: 170,c: 158,img: "digit-taliss.webp"},
    {n: "Adrian",t: 3,em: "💧🐋",h: ["Il est à l'Orque Pourpre.","Sa magie est l'eau.","Il est chevalier mage.","Il apparaît à la sélection.","Voix japonaise : Masayuki Akasaka."],jp: "アドリアン",va: "Masayuki Akasaka",g: "M",e: "Humain",m: ["Eau"],gr: ["Orque Pourpre"],r: ["Clover"],ha: "Noir",ta: null,c: 113,img: "adrian.webp"},
    {n: "Roland",t: 3,em: "🌿🦚",h: ["Il est au Paon Corail.","Sa magie est la plante.","Il est chevalier mage.","Il apparaît à la sélection."],jp: "ローラン",g: "M",e: "Humain",m: ["Plante"],gr: ["Paon Corail"],r: ["Clover"],ha: "Gris",ta: null,c: 112,img: "roland.webp"},
    {n: "Rick Cornell",t: 3,em: "💎🦚",h: ["Il est au Paon Corail.","Sa magie est le cristal.","Il est chevalier mage.","Il apparaît à la sélection.","Voix japonaise : Masayuki Akasaka."],jp: "リック・コーネル",va: "Masayuki Akasaka",g: "M",e: "Humain",m: ["Cristal"],gr: ["Paon Corail"],r: ["Clover"],ha: "Noir",ta: null,c: 113,img: "rick-cornell.webp"},
    {n: "Dmitri Brint",t: 3,em: "🔥🦚",h: ["Il est au Paon Corail.","Sa magie est le feu.","Il est chevalier mage.","Il apparaît à la sélection."],jp: "デミトリ・ブリント",g: "M",e: "Humain",m: ["Feu"],gr: ["Paon Corail"],r: ["Clover"],ha: "Orange",ta: null,c: 112,img: "dmitri-brint.webp"},
    {n: "Protobe Collina",t: 3,em: "🪨🦚",h: ["Royaume : Clover.","Groupe : Paon Corail.","Magie : Terre.","Première apparition : chapitre 165."],jp: "プロトベ・コリナ",g: "M",e: "Humain",m: ["Terre"],gr: ["Paon Corail"],r: ["Clover"],ha: "Blond",ta: null,c: 165,img: "protobe-collina.webp"},
    {n: "Medio",t: 3,em: "😐🦚",h: ["Royaume : Clover.","Groupe : Paon Corail.","Première apparition : chapitre 112.","Voix japonaise : Wataru Tsuyuzaki."],jp: "メディオ",va: "Wataru Tsuyuzaki",g: "M",e: "Humain",m: [],gr: ["Paon Corail"],r: ["Clover"],ha: "Noir",ta: null,c: 112,img: "medio.webp"},
    {n: "Francis",t: 3,em: "💧🦌",h: ["Il est au Cerf Azur.","Sa magie est l'eau.","Il est chevalier mage.","Il apparaît à la sélection.","Voix japonaise : Jun Miyamoto."],jp: "フランシス",va: "Jun Miyamoto",g: "M",e: "Humain",m: ["Eau"],gr: ["Cerf Azur"],r: ["Clover"],ha: "Noir",ta: null,c: 112,img: "francis.webp"},
    {n: "Cesc",t: 3,em: "🟠🦌",h: ["Il est au Cerf Azur.","Sa magie est le shakudô.","Il est chevalier mage.","Il apparaît à la sélection.","Voix japonaise : Wataru Tsuyuzaki."],jp: "セスク",va: "Wataru Tsuyuzaki",g: "M",e: "Humain",m: ["Shakudô"],gr: ["Cerf Azur"],r: ["Clover"],ha: "Rouge",ta: null,c: 112,img: "cesc.webp"},
    {n: "Walter",t: 3,em: "👴🦌",h: ["Il est au Cerf Azur.","Il est âgé.","Il conseille son jeune capitaine.","Il est vice-capitaine du Cerf Azur.","Anniversaire : 12 avril."],jp: "ヴァルター",g: "M",e: "Humain",m: [],gr: ["Cerf Azur"],r: ["Clover"],ha: "Gris",ta: 183,c: 2,img: "walter.webp"},
    {n: "Nix",t: 3,em: "🔥🦗",h: ["Il est à la Mante Verte.","Sa magie est le feu.","Il est chevalier mage.","Il apparaît à la sélection.","Voix japonaise : Masayuki Akasaka."],jp: "ニックス",va: "Masayuki Akasaka",g: "M",e: "Humain",m: ["Feu"],gr: ["Mante Verte"],r: ["Clover"],ha: "Châtain",ta: null,c: 118,img: "nix.webp"},
    {n: "Willie",t: 3,em: "🟤🦗",h: ["Il est à la Mante Verte.","Sa magie est la boue.","Il est chevalier mage.","Il apparaît à la sélection."],jp: "ウィリー",g: "M",e: "Humain",m: ["Boue"],gr: ["Mante Verte"],r: ["Clover"],ha: "Noir",ta: null,c: 116,img: "willie.webp"},
    {n: "Rokken",t: 3,em: "🪨🦁",h: ["Il est au Lion Écarlate.","Sa magie est la pierre.","Il est chevalier mage.","Il apparaît à la sélection.","Voix japonaise : Genki Muro."],jp: "ロッケン",va: "Genki Muro",g: "M",e: "Humain",m: ["Pierre"],gr: ["Lion Écarlate"],r: ["Clover"],ha: "Châtain",ta: null,c: 171,img: "rokken.webp"},
    {n: "Gareth",t: 3,em: "⚙️🦁",h: ["Il est au Lion Écarlate.","Il a une magie de fer dans l'anime.","Il est chevalier mage.","Il apparaît à la sélection."],jp: "ガレス",g: "M",e: "Humain",m: ["Fer"],gr: ["Lion Écarlate"],r: ["Clover"],ha: "Blond",ta: null,c: 108,img: "gareth.webp"},
    {n: "George",t: 3,em: "🌪️👁️",h: ["Il fait partie de l'Œil du Soleil de Minuit.","Sa magie est le vent.","Il est mort.","Il apparaît dans un donjon.","Anniversaire : 19 octobre.","Voix japonaise : Wataru Tsuyuzaki."],jp: "ゲオルグ",va: "Wataru Tsuyuzaki",g: "M",e: "Humain",m: ["Vent"],gr: ["Œil du Soleil de Minuit"],r: ["Clover"],ha: "Blond",ta: 175,c: 33,img: "george.webp"},
    {n: "Zuta",t: 3,em: "🌿👁️",h: ["Il fait partie de l'Œil du Soleil de Minuit.","Sa magie est la liane.","Il est mort.","Il apparaît pendant l'attaque de la capitale.","Voix japonaise : Masayuki Akasaka."],jp: "ズータ",va: "Masayuki Akasaka",g: "M",e: "Humain",m: ["Liane"],gr: ["Œil du Soleil de Minuit"],r: ["Clover"],ha: null,ta: null,c: 62,img: "zuta.webp"},
    {n: "Zarick",t: 3,em: "⛓️👁️",h: ["Il fait partie de l'Œil du Soleil de Minuit.","Sa magie est la chaîne.","Il est mort.","Il apparaît pendant l'attaque de la capitale.","Voix japonaise : Wataru Tsuyuzaki."],jp: "ザリック",va: "Wataru Tsuyuzaki",g: "M",e: "Humain",m: ["Chaîne"],gr: ["Œil du Soleil de Minuit"],r: ["Clover"],ha: null,ta: null,c: 62,img: "zarick.webp"},
    {n: "Abari",t: 3,em: "🌀👁️",h: ["Il fait partie de l'Œil du Soleil de Minuit.","Sa magie est l'espace.","Il est mort.","Il apparaît pendant l'attaque de la capitale.","Voix japonaise : Syu Hikari."],jp: "アバリ",va: "Syu Hikari",g: "M",e: "Humain",m: ["Espace"],gr: ["Œil du Soleil de Minuit"],r: ["Clover"],ha: null,ta: null,c: 62,img: "abari.webp"},
    {n: "Fluss",t: 3,em: "💧👁️",h: ["Il fait partie de l'Œil du Soleil de Minuit.","Sa magie est l'eau.","Il est mort.","Il apparaît au début."],jp: "フルス",g: "M",e: "Humain",m: ["Eau"],gr: ["Œil du Soleil de Minuit"],r: ["Clover"],ha: null,ta: null,c: 6,img: "fluss.webp"},
    {n: "Shidan",t: 3,em: "🌿👁️",h: ["Il fait partie de l'Œil du Soleil de Minuit.","Sa magie est la plante.","Il est mort.","Il apparaît au temple sous-marin.","Voix japonaise : Kenichirō Matsuda."],jp: "シダーン",va: "Kenichirō Matsuda",g: "M",e: "Humain",m: ["Plante"],gr: ["Œil du Soleil de Minuit"],r: ["Clover"],ha: "Vert",ta: null,c: 85,img: "shidan.webp"},
    {n: "Salim Hapshass",t: 3,em: "⚡🧑",h: ["Il a passé l'examen des chevaliers mages.","Sa magie est la foudre.","Il s'est moqué du héros.","Il apparaît au début.","Anniversaire : 20 octobre.","Voix japonaise : Yoshiyuki Shimozuma."],jp: "サリム・ハプシャス",va: "Yoshiyuki Shimozuma",g: "M",e: "Humain",m: ["Foudre"],gr: [],r: ["Clover"],ha: "Blond",ta: 173,c: 3,img: "salim-hapshass.webp"},
    {n: "Seihi",t: 3,em: "🧑‍🦳🏘️",h: ["Royaume : Clover.","Première apparition : chapitre 6.","Famille : Nick, Anna.","Voix japonaise : Yasuyuki Sano."],jp: "セイヒ",va: "Yasuyuki Sano",g: "M",e: "Humain",m: [],gr: [],r: ["Clover"],ha: "Gris",ta: null,c: 6,img: "seihi.webp"},
    {n: "Drouot",t: 3,em: "👴📜",h: ["Royaume : Clover.","Première apparition : chapitre 1.","Voix japonaise : Takayuki Miyamoto."],jp: "ドルオ",va: "Takayuki Miyamoto",g: "M",e: "Humain",m: [],gr: [],r: ["Clover"],ha: "Blanc",ta: null,c: 1,img: "drouot.webp"},
    {n: "Jamo",t: 3,em: "🔥👨",h: ["Royaume : Clover.","Magie : Feu.","Première apparition : chapitre 28.","Voix japonaise : Jun Miyamoto."],jp: "ジャーモ",va: "Jun Miyamoto",g: "M",e: "Humain",m: ["Feu"],gr: [],r: ["Clover"],ha: "Châtain",ta: null,c: 28,img: "jamo.webp"},
    {n: "Paplo Espuma",t: 3,em: "🫧👨",h: ["Royaume : Clover.","Magie : Bulle.","Première apparition : chapitre 178.","Voix japonaise : Rae Baldwin."],jp: "パプロ・エスプーマ",va: "Rae Baldwin",g: "M",e: "Humain",m: ["Bulle"],gr: [],r: ["Clover"],ha: "Noir",ta: null,c: 178,img: "paplo-espuma.webp"},
    {n: "Millie Maxwell",t: 3,em: "👩💚",h: ["Royaume : Clover.","Première apparition : chapitre 382.","Anniversaire : 31 mars.","Voix japonaise : Marie Iitoyo."],jp: "ミリー・マクスウェル",va: "Marie Iitoyo",g: "F",e: "Humain",m: [],gr: [],r: ["Clover"],ha: "Vert",ta: 167,c: 382,img: "millie-maxwell.webp"},
    {n: "Nick",t: 3,em: "👦⛪",h: ["C'est un orphelin.","Il vit à Hage.","Il apparaît au début.","Il admire le héros.","Famille : Seihi, Anna."],jp: "ニック",g: "M",e: "Humain",m: [],gr: [],r: ["Clover"],ha: "Blond",ta: null,c: 6,img: "nick.webp"},
    {n: "Humito Mikuriya",t: 3,em: "💧🐉",h: ["Royaume : Pays de Hino.","Magie : Eau.","Première apparition : chapitre 339.","Anniversaire : 12 mars."],jp: "御厨文人",g: "M",e: "Humain",m: ["Eau"],gr: [],r: ["Pays de Hino"],ha: null,ta: 176,c: 339,img: "humito-mikuriya.webp"},
    {n: "Yrul",t: 3,em: "🐺🐉",h: ["Magie : Bête.","Première apparition : chapitre 343.","Anniversaire : 10 août."],jp: "ユルル",g: "M",e: "Humain",m: ["Bête"],gr: [],r: [],ha: null,ta: 172,c: 343,img: "yrul.webp"},
    {n: "Makusa North",t: 3,em: "❄️🧑",h: ["Royaume : Clover.","Magie : Neige.","Première apparition : chapitre 274.","Anniversaire : 5 juillet.","Voix japonaise : Daisuke Sakuma."],jp: "マクサ・ノース",va: "Daisuke Sakuma",g: "M",e: "Humain",m: ["Neige"],gr: [],r: ["Clover"],ha: "Rose",ta: 168,c: 274,img: "makusa-north.webp"},
    {n: "Albert",t: 3,em: "🗡️⚪",h: ["Royaume : Pique.","Première apparition : chapitre 274.","Voix japonaise : Wataru Tsuyuzaki."],jp: "アルベルト・ガードナー",va: "Wataru Tsuyuzaki",g: "M",e: "Humain",m: [],gr: [],r: ["Pique"],ha: "Blanc",ta: null,c: 274,img: "albert.webp"},
    {n: "Rudolph Niaflem",t: 3,em: "🌪️👑",h: ["Royaume : Pique.","Magie : Vent.","Première apparition : chapitre 234.","Famille : Ralph Niaflem.","Voix japonaise : Dai Matsumoto."],jp: "ルドルフ・ニアフレム",va: "Dai Matsumoto",g: "M",e: "Humain",m: ["Vent"],gr: [],r: ["Pique"],ha: "Rouge",ta: null,c: 234,img: "rudolph-niaflem.webp"},
  ]});  // (non indenté : les textes sur plusieurs lignes restent exactement les tiens)
  // ---- fin ----
  ctx.onOpen(() => { dleOpen('blackdle'); });
}
