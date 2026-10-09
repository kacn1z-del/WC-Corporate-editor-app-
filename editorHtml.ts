// Editor WC Corporate — HTML autónomo con diccionario embebido (2515 palabras)
// Generado automáticamente. No editar a mano.
export const WC_EDITOR_HTML = `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>WC Corporate Editor v24</title>
<script>
/* Carga perezosa de librerías pesadas (jsPDF, html2canvas, JSZip, Mammoth,
   pdf.js, Chart.js). Antes cargaban con defer y bloqueaban el DOMContentLoaded,
   retrasando el arranque de los bundles principales del editor.
   El código que las usa ya verifica typeof===undefined, así que cargarlas
   en idle/después del load es seguro y no rompe nada. */
(function(){
  function loadScript(src){
    return new Promise(function(resolve){
      var el=document.createElement('script');
      el.src=src;
      el.onload=resolve;
      el.onerror=resolve;
      document.head.appendChild(el);
    });
  }
  function loadHeavyLibs(){
    loadScript('https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js');
    loadScript('https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js');
    loadScript('https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js');
    loadScript('https://cdnjs.cloudflare.com/ajax/libs/mammoth/1.6.0/mammoth.browser.min.js');
    loadScript('https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js').then(function(){
      if(window.pdfjsLib){ window.pdfjsLib.GlobalWorkerOptions.workerSrc='https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js'; }
    });
    loadScript('https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.min.js');
  }
  window.addEventListener('load', function(){
    if('requestIdleCallback' in window){ requestIdleCallback(loadHeavyLibs, {timeout:2000}); }
    else { setTimeout(loadHeavyLibs, 800); }
  });
})();
</script>
<style>
*{margin:0;padding:0;box-sizing:border-box;}
body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;background:#f5f5f5;}
.header{background:linear-gradient(135deg,#0084ff 0%,#ff6b35 100%);padding:28px 20px 130px;text-align:center;color:white;}
.header h1{font-size:28px;font-weight:700;margin-bottom:6px;letter-spacing:.5px;}
.header p{font-size:11px;opacity:.9;letter-spacing:1.5px;text-transform:uppercase;}
.menu-card{background:rgba(255,255,255,.18);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);border:1px solid rgba(255,255,255,.3);border-radius:22px;padding:20px 16px;margin:-90px 12px 0;position:relative;z-index:10;box-shadow:0 8px 32px rgba(0,0,0,.12);}
.menu-tabs{display:flex;flex-wrap:wrap;gap:6px;justify-content:center;}
.menu-item{position:relative;}
.menu-btn{background:none;border:none;color:#1a1a1a;font-size:15px;font-weight:500;padding:8px 14px;border-radius:10px;cursor:pointer;transition:all .2s;white-space:nowrap;}
.menu-btn:hover,.menu-btn.active{background:rgba(255,255,255,.85);box-shadow:0 2px 10px rgba(0,0,0,.1);}
.dropdown{position:fixed;left:0;right:0;bottom:0;top:auto;width:100%;max-width:420px;margin:0 auto;background:#fff;border-radius:20px 20px 0 0;box-shadow:0 -4px 24px rgba(0,0,0,.18);z-index:9999;display:none;max-height:55vh;overflow-y:auto;}
.dropdown::before{content:"";display:block;width:40px;height:5px;background:#d0d0d5;border-radius:3px;margin:8px auto 12px;}
.dropdown.show{display:block;transform:translateY(0);}
@keyframes fadeIn{from{opacity:0;transform:translateX(-50%) translateY(10px)}to{opacity:1;transform:translateX(-50%) translateY(0)}}to{opacity:1;transform:translateX(-50%) translateY(0);}}
.dsec{padding:6px 12px 2px;font-size:10px;color:#aaa;font-weight:700;text-transform:uppercase;letter-spacing:.8px;margin-top:4px;}
.di{padding:10px 14px;border-radius:10px;cursor:pointer;font-size:14px;transition:background .15s;display:flex;justify-content:space-between;align-items:center;gap:8px;color:#1a1a1a;}
.di:hover{background:#f0f7ff;}
.di .ico{font-size:15px;min-width:20px;}
.di .desc{font-size:10px;color:#aaa;}
.dib{padding:10px 14px;border-radius:10px;cursor:pointer;transition:background .15s;}
.dib:hover{background:#f0f7ff;}
.dib .tit{font-size:14px;font-weight:600;color:#1a1a1a;}
.dib .desc{font-size:11px;color:#999;margin-top:2px;line-height:1.3;}
.dd{height:1px;background:#eee;margin:4px 8px;}
.badge{background:#0084ff;color:white;font-size:10px;padding:2px 7px;border-radius:5px;}
.content{background:#e8e8ec;padding:24px 16px 160px;min-height:500px;}
.ctitle{font-size:16px;color:#0066cc;font-weight:600;margin-bottom:14px;}
#wordart-banner{display:none;text-align:center;font-size:36px;font-weight:900;letter-spacing:4px;margin-bottom:12px;padding:10px;border-radius:12px;}
#ruler{display:none;height:22px;background:linear-gradient(#e8e8e8,#f5f5f5);border:1px solid #ddd;border-radius:6px;margin-bottom:8px;font-size:9px;color:#aaa;line-height:22px;padding:0 8px;}
.tiptap{
  background:#fff;
  width:21.59cm;
  max-width:100%;
  min-height:27.94cm;
  margin:24px auto;
  padding:2.54cm;
  border:1px solid #d4d4d4;
  border-radius:0;
  box-shadow:0 1px 3px rgba(0,0,0,0.13),0 6px 24px rgba(0,0,0,0.10);
  outline:none;
  font-family:'Calibri','Carlito','Segoe UI',sans-serif;
  font-size:11pt;
  line-height:1.08;
  color:#000;
  text-align:left;
}
@media(max-width:800px){.tiptap{width:100%;padding:1.4cm 1.1cm;min-height:auto;margin:12px auto;box-shadow:0 2px 12px rgba(0,0,0,0.12);}}
.tiptap:focus{border-color:#0084ff;box-shadow:0 0 0 3px rgba(0,132,255,.1);}

.tiptap ul,.tiptap ol{padding-left:24px;margin:6px 0;}

.tiptap td,
#dictBox{margin-bottom:16px;border:1px solid #e8e8e8;border-radius:14px;overflow:hidden;background:#fff;}
#dictHeader{display:flex;align-items:center;gap:8px;padding:12px 16px;cursor:pointer;background:#f8f9fa;border-bottom:1px solid #eee;}
#dictHeader h3{font-size:14px;font-weight:600;color:#0066cc;margin:0;flex:1;}
#dictToggleIcon{font-size:14px;color:#aaa;transition:transform .2s;}
#dictBody{display:none;padding:12px 16px;}
#dictBody.open{display:block;}
#dictSearch{width:100%;padding:9px 14px;border:1.5px solid #e0e0e0;border-radius:10px;font-size:14px;outline:none;margin-bottom:10px;}
#dictSearch:focus{border-color:#0084ff;}
#dictResults{max-height:220px;overflow-y:auto;}
.dict-entry{padding:8px 0;border-bottom:1px solid #f0f0f0;}
.dict-entry:last-child{border-bottom:none;}
.dict-word{font-weight:600;color:#0066cc;font-size:14px;margin-bottom:4px;}
.dict-langs{display:flex;flex-wrap:wrap;gap:5px;}
.dict-lang-tag{background:#f0f7ff;border-radius:6px;padding:2px 8px;font-size:11px;color:#333;}
.dict-lang-tag b{color:#0084ff;}
.footer{background:#fff;padding:10px 16px;border-top:1px solid #eee;position:fixed;bottom:60px;left:0;right:0;z-index:100;}
.stats{display:flex;justify-content:space-around;font-size:12px;color:#888;margin-bottom:3px;}
.author{text-align:center;font-size:11px;color:#bbb;}
.bottom-nav{background:#fff;position:fixed;bottom:0;left:0;right:0;padding:10px 20px;display:flex;justify-content:space-around;box-shadow:0 -2px 10px rgba(0,0,0,.05);border-radius:20px 20px 0 0;z-index:100;}
.nav-btn{background:none;border:none;padding:8px;cursor:pointer;border-radius:8px;font-size:18px;}
.nav-btn:hover{background:#f0f0f0;}
.toast{position:fixed;bottom:140px;left:50%;transform:translateX(-50%);background:#1a1a1a;color:white;padding:10px 20px;border-radius:20px;font-size:13px;opacity:0;transition:opacity .3s;z-index:9999;white-space:nowrap;max-width:90vw;overflow:hidden;text-overflow:ellipsis;}
.toast.show{opacity:1;}
.mo{display:none;position:fixed;inset:0;background:rgba(0,0,0,.55);z-index:9990;align-items:center;justify-content:center;padding:12px;}
.mo.show{display:flex;}
.mb{background:#fff;border-radius:20px;padding:22px;width:100%;max-width:420px;max-height:88vh;overflow-y:auto;box-shadow:0 20px 60px rgba(0,0,0,.3);}
.mb h3{font-size:17px;font-weight:700;color:#222;margin-bottom:14px;text-align:center;}
.minput{width:100%;padding:10px 14px;border:1.5px solid #ddd;border-radius:10px;font-size:15px;margin-bottom:10px;outline:none;}
.minput:focus{border-color:#0084ff;}
.mbtns{display:flex;gap:8px;justify-content:center;margin-top:10px;}
.btn1{background:#0084ff;color:#fff;border:none;border-radius:10px;padding:10px 22px;cursor:pointer;font-weight:600;font-size:14px;}
.btn2{background:#f0f0f0;color:#333;border:none;border-radius:10px;padding:10px 22px;cursor:pointer;font-weight:600;font-size:14px;}
.g2{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:12px;}
.tcard{border:2px solid #eee;border-radius:10px;padding:10px 8px;cursor:pointer;text-align:center;font-size:12px;font-weight:500;background:none;transition:all .2s;}
.tcard:hover{border-color:#0084ff;background:#f0f7ff;}
.tcard .ico{font-size:22px;display:block;margin-bottom:4px;}
.sgrid{display:grid;grid-template-columns:repeat(4,1fr);gap:6px;margin-bottom:12px;}
.sbtn{border:2px solid #eee;border-radius:8px;padding:8px 2px;cursor:pointer;text-align:center;font-size:22px;background:none;}
.sbtn:hover{border-color:#0084ff;background:#f0f7ff;}
.cgrid{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:12px;}
.cbtn{border:2px solid #eee;border-radius:10px;padding:10px;cursor:pointer;text-align:center;font-size:12px;font-weight:600;background:none;}
.cbtn:hover{border-color:#0084ff;background:#f0f7ff;}
.cwrap{position:relative;max-width:500px;margin:12px auto;border:1px solid #eee;border-radius:12px;padding:12px;background:#fafafa;}
.cwrap canvas{width:100%!important;}
.cdel{position:absolute;top:6px;right:8px;background:#ff4444;color:#fff;border:none;border-radius:6px;padding:2px 8px;cursor:pointer;font-size:12px;}
.ablock{display:flex;align-items:center;gap:10px;background:#f0f7ff;border:1px solid rgba(0,132,255,.2);border-radius:10px;padding:10px 14px;margin:6px 0;}
#fabBtn{position:fixed;bottom:128px;right:12px;z-index:8000;background:linear-gradient(135deg,#0084ff,#ff6b35);color:#fff;border:none;border-radius:50px;padding:10px 14px;font-size:11px;font-weight:700;box-shadow:0 4px 20px rgba(0,132,255,.4);cursor:pointer;line-height:1.4;text-align:center;}
#fabPanel{display:none;position:fixed;bottom:183px;right:8px;left:8px;background:#fff;border-radius:20px;box-shadow:0 8px 40px rgba(0,0,0,.2);z-index:7999;padding:16px;max-height:72vh;overflow-y:auto;}
#fabPanel.show{display:block;animation:fadeUp .2s ease;}
@keyframes fadeUp{from{opacity:0;transform:translateY(14px);}to{opacity:1;transform:translateY(0);}}
#fabPanel h4{font-size:11px;color:#888;font-weight:700;margin:12px 0 6px;text-transform:uppercase;letter-spacing:.6px;}
#fabPanel h4:first-child{margin-top:0;}
.fabrow{display:flex;flex-wrap:wrap;gap:5px;margin-bottom:4px;}
.fabbtn{border:1.5px solid #e0e0e0;border-radius:8px;padding:6px 10px;cursor:pointer;font-size:13px;background:#fafafa;color:#333;font-weight:500;transition:all .15s;}
.fabbtn:hover{background:#0084ff;color:#fff;border-color:#0084ff;}
.cpal{display:grid;grid-template-columns:repeat(10,1fr);gap:3px;margin-bottom:8px;}
.csw{width:100%;aspect-ratio:1;border-radius:4px;cursor:pointer;border:2px solid transparent;}
.csw:hover{transform:scale(1.25);border-color:#333;}
.fbtn{border:1.5px solid #e0e0e0;border-radius:8px;padding:8px 12px;cursor:pointer;font-size:14px;background:#fafafa;color:#333;text-align:left;width:100%;transition:all .15s;}
.fbtn:hover{background:#f0f7ff;border-color:#0084ff;}
.cp-item{display:flex;align-items:center;gap:8px;padding:8px 10px;border:1px solid #eee;border-radius:8px;cursor:pointer;margin-bottom:6px;font-size:13px;}
.cp-item:hover{background:#f0f7ff;}
.cp-item .cpt{flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}
.cp-item .cpy{font-size:10px;background:#eee;border-radius:4px;padding:2px 6px;color:#666;}
.cp-empty{text-align:center;color:#bbb;padding:20px;font-size:13px;}
.eqbtn{border:2px solid #eee;border-radius:10px;padding:10px;cursor:pointer;text-align:center;font-size:13px;background:none;font-family:'Courier New',monospace;}
.eqbtn:hover{border-color:#0084ff;background:#f0f7ff;}
.wcprev{border:2px solid #eee;border-radius:12px;padding:10px;cursor:pointer;text-align:center;font-size:20px;font-weight:900;min-height:56px;display:flex;align-items:center;justify-content:center;transition:all .2s;}
.wcprev:hover{border-color:#0084ff;transform:scale(1.02);}
.bgsw{width:100%;aspect-ratio:1;border-radius:6px;cursor:pointer;border:2px solid transparent;}
.bgsw:hover{border-color:#333;transform:scale(1.1);}
/* Panel IA - Sibö con Llama */
#aiPanel{display:none;position:fixed;inset:0;background:rgba(0,0,0,.6);z-index:9995;align-items:flex-end;justify-content:center;}
#aiPanel.show{display:flex;}
#aiBox{background:#fff;border-radius:20px 20px 0 0;padding:16px 16px 12px;width:100%;max-width:600px;max-height:90vh;display:flex;flex-direction:column;}
#aiBox h3{font-size:15px;font-weight:700;margin-bottom:10px;display:flex;align-items:center;gap:8px;}
#aiMsgs{flex:1;overflow-y:auto;margin-bottom:10px;display:flex;flex-direction:column;gap:10px;min-height:100px;max-height:45vh;}
.aiu{background:#0084ff;color:#fff;border-radius:16px 16px 4px 16px;padding:10px 14px;align-self:flex-end;max-width:80%;font-size:14px;}
.aib{background:#f0f7ff;color:#333;border-radius:16px 16px 16px 4px;padding:10px 14px;align-self:flex-start;max-width:90%;font-size:14px;line-height:1.5;}
#aiRow{display:flex;gap:8px;}
#aiInp{flex:1;padding:10px 14px;border:1.5px solid #ddd;border-radius:20px;font-size:14px;outline:none;}
#aiInp:focus{border-color:#0084ff;}
#aiSend{background:#0084ff;color:#fff;border:none;border-radius:50%;width:40px;height:40px;cursor:pointer;font-size:18px;}
.ai-quick-btn{background:#f0f7ff;border:1.5px solid #c0d8f0;border-radius:20px;padding:6px 12px;font-size:12px;font-weight:600;color:#0066cc;cursor:pointer;transition:all .15s;white-space:nowrap;}
.ai-quick-btn:hover{background:#0084ff;color:#fff;border-color:#0084ff;}
/* Documento separado */
#docOverlay{display:none;position:fixed;inset:0;background:rgba(0,0,0,.7);z-index:9500;align-items:center;justify-content:center;padding:12px;}
#docOverlay.show{display:flex;}
#docWindow{background:#fff;border-radius:20px;width:100%;max-width:680px;max-height:92vh;display:flex;flex-direction:column;box-shadow:0 20px 60px rgba(0,0,0,.4);overflow:hidden;}
#docWindow .doc-toolbar{background:#f8f9fa;padding:10px 16px;border-bottom:1px solid #eee;display:flex;align-items:center;gap:8px;flex-wrap:wrap;}
#docWindow .doc-toolbar .doc-title{font-size:14px;font-weight:600;color:#333;flex:1;}
#docWindow .doc-content{flex:1;overflow-y:auto;padding:24px;min-height:300px;background:#f0f0f3;}
#docWindow .doc-editor{
  background:#fff;
  width:21.59cm;
  max-width:100%;
  min-height:25cm;
  margin:18px auto;
  padding:2.54cm;
  border:1px solid #d4d4d4;
  border-radius:0;
  box-shadow:0 1px 3px rgba(0,0,0,0.13),0 6px 24px rgba(0,0,0,0.10);
  outline:none;
  font-family:'Calibri','Carlito','Segoe UI',sans-serif;
  font-size:11pt;
  line-height:1.08;
  color:#000;
}
@media(max-width:800px){.doc-editor{width:100%;padding:1.3cm 1cm;min-height:auto;box-shadow:0 2px 12px rgba(0,0,0,0.12);}}
@media(max-width:800px){.doc-editor{width:100%;padding:1.3cm 1cm;min-height:auto;box-shadow:0 2px 12px rgba(0,0,0,0.12);}}
#docWindow .doc-footer{padding:10px 16px;border-top:1px solid #eee;display:flex;gap:8px;justify-content:flex-end;background:#f8f9fa;}
/* Firma */
#annotationOverlay{display:none;position:fixed;inset:0;background:rgba(0,0,0,.75);z-index:9800;align-items:center;justify-content:center;padding:12px;}
#annotationOverlay.show{display:flex;}
#annotationBox{background:#fff;border-radius:20px;width:100%;max-width:500px;padding:16px;box-shadow:0 20px 60px rgba(0,0,0,.4);}
#annotationBox h3{font-size:15px;font-weight:700;color:#333;margin-bottom:12px;text-align:center;}
#signCanvas{width:100%;height:220px;border:2px dashed #0084ff;border-radius:12px;cursor:crosshair;touch-action:none;background:#fafafa;}
.sign-toolbar{display:flex;gap:6px;flex-wrap:wrap;margin:10px 0;}
.sign-color{width:28px;height:28px;border-radius:50%;cursor:pointer;border:3px solid transparent;transition:all .2s;}
.sign-color.active{border-color:#333;transform:scale(1.2);}
.sign-size{background:#f0f0f0;border:1px solid #ddd;border-radius:8px;padding:4px 10px;font-size:12px;cursor:pointer;}
.sign-size.active{background:#0084ff;color:#fff;border-color:#0084ff;}
/* Exportar */
#exportOverlay{display:none;position:fixed;inset:0;background:rgba(0,0,0,.55);z-index:9600;align-items:flex-end;justify-content:center;}
#exportOverlay.show{display:flex;}
#exportBox{background:#fff;border-radius:20px 20px 0 0;width:100%;max-width:500px;padding:0 0 20px;overflow:hidden;}
#exportBox .exp-title{padding:16px 20px 10px;font-size:16px;font-weight:700;color:#333;border-bottom:1px solid #eee;text-align:center;}
.exp-item{display:flex;align-items:center;justify-content:space-between;padding:14px 20px;border-bottom:1px solid #f0f0f0;cursor:pointer;transition:background .15s;}
.exp-item:hover{background:#f0f7ff;}
.exp-item:last-child{border-bottom:none;}
.exp-item .exp-left{display:flex;align-items:center;gap:12px;}
.exp-item .exp-icon{font-size:22px;width:36px;text-align:center;}
.exp-item .exp-name{font-size:15px;font-weight:500;color:#1a1a1a;}
.exp-item .exp-desc{font-size:11px;color:#999;margin-top:1px;}
.exp-item .exp-arrow{color:#ccc;font-size:14px;}
.exp-cancel{margin:10px 16px 0;width:calc(100% - 32px);padding:12px;background:#f0f0f0;border:none;border-radius:12px;font-size:15px;font-weight:600;cursor:pointer;color:#333;}
.exp-cancel:hover{background:#e0e0e0;}
/* Comunidad */
#communityBtn{position:fixed;bottom:128px;left:12px;z-index:8000;background:linear-gradient(135deg,#27ae60,#2ecc71);color:#fff;border:none;border-radius:50px;padding:10px 14px;font-size:11px;font-weight:700;box-shadow:0 4px 20px rgba(39,174,96,.4);cursor:pointer;line-height:1.4;text-align:center;}
#communityPanel{display:none;position:fixed;bottom:183px;left:8px;right:8px;background:#fff;border-radius:20px;box-shadow:0 8px 40px rgba(0,0,0,.2);z-index:7999;padding:16px;max-height:60vh;overflow-y:auto;}
#communityPanel.show{display:block;animation:fadeUp .2s ease;}
#communityPanel h4{font-size:13px;color:#27ae60;font-weight:700;margin-bottom:10px;display:flex;justify-content:space-between;align-items:center;}
#communityList{list-style:none;padding:0;}
#communityList li{margin-bottom:8px;font-size:12px;padding:8px;border:1px solid #e8e8e8;border-radius:8px;background:#fafafa;}
.popup.hidden{display:none;}
.popup{position:fixed;top:20%;left:50%;transform:translateX(-50%);width:90%;max-width:380px;background:#fff;border:1px solid #ddd;border-radius:16px;box-shadow:0 8px 32px rgba(0,0,0,.15);z-index:9998;}
.popup-content{padding:20px;}
.popup-content h3{font-size:15px;color:#0066cc;margin-bottom:8px;}
.close-btn{float:right;cursor:pointer;font-size:20px;color:#aaa;background:none;border:none;}
#popupResults{list-style:none;padding:0;}
#popupResults li{padding:5px 0;border-bottom:1px solid #f0f0f0;font-size:13px;}
.statusbar{position:fixed;bottom:60px;left:0;width:100%;background:#f5f5f5;padding:4px 10px;font-size:11px;border-top:1px solid #e0e0e0;z-index:99;color:#888;}

.dw-fmt{background:#fff;border:1px solid #dcdce0;border-radius:6px;padding:5px 9px;font-size:13px;cursor:pointer;color:#333;min-width:30px;transition:all .15s}
.dw-fmt:hover{background:#0084ff;color:#fff;border-color:#0084ff}
.dw-fmt:active{transform:scale(0.95)}

#menuBackdrop{position:fixed;inset:0;background:rgba(0,0,0,.35);z-index:999;display:none;opacity:0;transition:opacity .3s;}
#menuBackdrop.show{display:block;opacity:1;}

.tiptap p{margin:0 0 8pt 0;line-height:1.08;}
.tiptap h1{font-family:'Calibri Light','Calibri','Carlito',sans-serif;font-size:16pt;font-weight:400;color:#2E74B5;margin:12pt 0 0 0;line-height:1.08;}
.tiptap h2{font-family:'Calibri Light','Calibri','Carlito',sans-serif;font-size:13pt;font-weight:400;color:#2E74B5;margin:10pt 0 0 0;line-height:1.08;}
.tiptap h3{font-family:'Calibri Light','Calibri','Carlito',sans-serif;font-size:12pt;font-weight:400;color:#1F4D78;margin:10pt 0 0 0;line-height:1.08;}
.tiptap h1:first-child,.tiptap h2:first-child,.tiptap h3:first-child{margin-top:0;}
.tiptap blockquote{margin:0 0 8pt 0;padding-left:0.6cm;border-left:none;font-style:italic;color:#404040;}
.tiptap ul,.tiptap ol{margin:0 0 8pt 0;padding-left:1cm;}
.tiptap li{margin:0;line-height:1.08;}
.tiptap table{border-collapse:collapse;width:100%;margin:0 0 8pt 0;}
.tiptap td,.tiptap th{border:0.5pt solid #000;padding:0.05cm 0.19cm;vertical-align:top;}
.tiptap a{color:#0563C1;text-decoration:underline;}

.doc-editor p{margin:0 0 8pt 0;line-height:1.08;}
.doc-editor h1{font-family:'Calibri Light','Calibri','Carlito',sans-serif;font-size:16pt;font-weight:400;color:#2E74B5;margin:12pt 0 0 0;}
.doc-editor h2{font-family:'Calibri Light','Calibri','Carlito',sans-serif;font-size:13pt;font-weight:400;color:#2E74B5;margin:10pt 0 0 0;}
.doc-editor h3{font-size:12pt;font-weight:400;color:#1F4D78;margin:10pt 0 0 0;}
.doc-editor blockquote{margin:0 0 8pt 0;padding-left:0.6cm;font-style:italic;color:#404040;}
.doc-editor table{border-collapse:collapse;width:100%;margin:0 0 8pt 0;}
.doc-editor td,.doc-editor th{border:0.5pt solid #000;padding:0.05cm 0.19cm;}

/* ── PAGINACIÓN VISUAL ESTILO WORD ── */
#editorPageWrap{position:relative;}
#editorPageWrap .page-break-line{
  position:absolute;left:0;right:0;height:24px;
  background:#e8e8ec;
  pointer-events:none;
  z-index:2;
  box-shadow:inset 0 1px 2px rgba(0,0,0,.08),inset 0 -1px 2px rgba(0,0,0,.08);
}
#editorPageWrap .page-break-line::before{
  content:attr(data-page);
  position:absolute;right:8px;top:50%;transform:translateY(-50%);
  font-size:9px;color:#999;background:#e8e8ec;padding:0 6px;
  font-family:-apple-system,'Segoe UI',sans-serif;
}
</style>
<link rel="preconnect" href="https://fonts.googleapis.com"><link href="https://fonts.googleapis.com/css2?family=Carlito:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">
<!-- Bundles principales: defer directo (sin loader con delays artificiales).
     Al declararlos aquí, el navegador los descubre y descarga desde el
     inicio del parseo del HTML, en paralelo, y los ejecuta en este mismo
     orden justo antes de DOMContentLoaded (misma garantía de orden que
     tenía el loader-smart, pero sin esperar a que termine de parsear
     todo el documento ni los setTimeout de 100/200/300ms). -->
<script src="wc-v25-bundle1.js" defer></script>
<script src="wc-v25-bundle2.js" defer></script>
<script src="wc-v25-bundle3.js" defer></script>
<script src="wc-v25-bundle4.js" defer></script>
<script src="wc-v25-features32.js" defer></script>
<script src="wc-v25-features33.js" defer></script>
<script src="wc-v25-features34.js" defer></script>
<script src="wc-v25-features35.js" defer></script>
<script src="wc-v25-features36.js" defer></script>
<script src="wc-v25-features37.js" defer></script>
<script src="wc-v25-features38.js" defer></script>
<script src="wc-v25-features39.js" defer></script>
<script src="wc-v25-features40.js" defer></script>
<script src="wc-v25-features41.js" defer></script>
<script src="wc-v25-features42.js" defer></script>
<script src="wc-v25-features43.js" defer></script>
<script src="wc-v25-features44.js" defer></script>
<script src="wc-v25-features45.js" defer></script>
<script src="wc-v25-patch.js" defer></script>
<script type="module">
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
  import { getDatabase, ref, set, onValue } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";


  const firebaseConfig = {
    apiKey: "AIzaSyBXGs0ioh5FPONAgw26xLB7Nca4lq8T_K8",
    authDomain: "wc-corporate-editor.firebaseapp.com",
    databaseURL: "https://wc-corporate-editor-default-rtdb.firebaseio.com",
    projectId: "wc-corporate-editor",
    storageBucket: "wc-corporate-editor.firebasestorage.app",
    messagingSenderId: "884314588173",
    appId: "1:884314588173:web:627e9a2ea50ce9b4238144"
  };

  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);window.__wcFirebaseDb = db;


  const roomId = localStorage.getItem('wc-fb-room') || 'sala1';
  const docRef = ref(db, 'docs/' + roomId);
  const editor = document.getElementById('editor');

  if (editor) {
    let isLocalChange = false;
    let timeout;

    onValue(docRef, (snap) => {
      if (isLocalChange) return;
      const remoteContent = snap.val();
      if (remoteContent !== null && remoteContent !== editor.innerHTML) {
        editor.innerHTML = remoteContent;
      }
    });

    editor.addEventListener('input', () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        isLocalChange = true;
        set(docRef, editor.innerHTML).then(() => {
          setTimeout(() => isLocalChange = false, 300);
        });
      }, 500);
    });
  }
</script>
<script type="module">
  // Reutiliza db y roomId del script de Firebase anterior si existen,
  // si no, crea su propia conexión a la misma sala "sala1"
  import { ref, set, onValue } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

  function initWcTools() {
    const fab = document.getElementById('wcToolsFab');
    const panel = document.getElementById('wcToolsPanel');
    const closeBtn = document.getElementById('wcToolsClose');
    const tabs = document.querySelectorAll('#wcToolsTabs button');

    fab.addEventListener('click', () => panel.classList.toggle('open'));
    closeBtn.addEventListener('click', () => panel.classList.remove('open'));

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        document.getElementById('wcTabKanban').style.display = tab.dataset.tab === 'kanban' ? 'block' : 'none';
        document.getElementById('wcTabTimer').style.display = tab.dataset.tab === 'timer' ? 'block' : 'none';
      });
    });

    // ---------- KANBAN (sincronizado vía Firebase) ----------
    const dbInstance = window.__wcFirebaseDb; // viene del script anterior
    const kanbanRef = dbInstance ? ref(dbInstance, 'kanban/sala1') : null;
    let kanbanData = { pendiente: [], progreso: [], hecho: [] };
    let isLocalKanbanChange = false;

    function renderKanban() {
      document.querySelectorAll('.wcKanbanCol').forEach(col => {
        const colName = col.dataset.col;
        const list = col.querySelector('.wcKanbanList');
        list.innerHTML = '';
        (kanbanData[colName] || []).forEach((task, idx) => {
          const card = document.createElement('div');
          card.className = 'wcKanbanCard';
          card.innerHTML = \`<div>\${task}</div><div class="actions">
            \${colName !== 'pendiente' ? '<button data-action="left">←</button>' : '<span></span>'}
            <button data-action="del">🗑️</button>
            \${colName !== 'hecho' ? '<button data-action="right">→</button>' : '<span></span>'}
          </div>\`;
          card.querySelector('[data-action="del"]')?.addEventListener('click', () => {
            kanbanData[colName].splice(idx, 1);
            saveKanban();
          });
          card.querySelector('[data-action="left"]')?.addEventListener('click', () => {
            const order = ['pendiente','progreso','hecho'];
            const prev = order[order.indexOf(colName) - 1];
            kanbanData[colName].splice(idx, 1);
            kanbanData[prev].push(task);
            saveKanban();
          });
          card.querySelector('[data-action="right"]')?.addEventListener('click', () => {
            const order = ['pendiente','progreso','hecho'];
            const next = order[order.indexOf(colName) + 1];
            kanbanData[colName].splice(idx, 1);
            kanbanData[next].push(task);
            saveKanban();
          });
          list.appendChild(card);
        });
      });
    }

    function saveKanban() {
      renderKanban();
      if (kanbanRef) {
        isLocalKanbanChange = true;
        set(kanbanRef, kanbanData).then(() => setTimeout(() => isLocalKanbanChange = false, 300));
      } else {
        localStorage.setItem('wcKanban', JSON.stringify(kanbanData));
      }
    }

    if (kanbanRef) {
      onValue(kanbanRef, (snap) => {
        if (isLocalKanbanChange) return;
        const val = snap.val();
        if (val) { kanbanData = val; renderKanban(); }
      });
    } else {
      const saved = localStorage.getItem('wcKanban');
      if (saved) kanbanData = JSON.parse(saved);
      renderKanban();
    }

    document.getElementById('wcKanbanAddBtn').addEventListener('click', () => {
      const input = document.getElementById('wcKanbanNewTask');
      const val = input.value.trim();
      if (!val) return;
      kanbanData.pendiente.push(val);
      input.value = '';
      saveKanban();
    });

    // ---------- TEMPORIZADOR ----------
    let totalSeconds = 25 * 60;
    let remaining = totalSeconds;
    let timerInterval = null;
    const display = document.getElementById('wcTimerDisplay');

    function updateDisplay() {
      const m = Math.floor(remaining / 60).toString().padStart(2, '0');
      const s = (remaining % 60).toString().padStart(2, '0');
      display.textContent = \`\${m}:\${s}\`;
    }
    updateDisplay();

    document.querySelectorAll('#wcTimerPresets button').forEach(btn => {
      btn.addEventListener('click', () => {
        clearInterval(timerInterval);
        timerInterval = null;
        totalSeconds = parseInt(btn.dataset.min) * 60;
        remaining = totalSeconds;
        updateDisplay();
      });
    });

    document.getElementById('wcTimerStart').addEventListener('click', () => {
      if (timerInterval) return;
      timerInterval = setInterval(() => {
        remaining--;
        updateDisplay();
        if (remaining <= 0) {
          clearInterval(timerInterval);
          timerInterval = null;
          // Beep simple
          try {
            const ctx = new (window.AudioContext || window.webkitAudioContext)();
            const osc = ctx.createOscillator();
            osc.frequency.value = 880;
            osc.connect(ctx.destination);
            osc.start();
            setTimeout(() => osc.stop(), 600);
          } catch(e) {}
          alert('⏱️ ¡Tiempo terminado!');
        }
      }, 1000);
    });

    document.getElementById('wcTimerPause').addEventListener('click', () => {
      clearInterval(timerInterval);
      timerInterval = null;
    });

    document.getElementById('wcTimerReset').addEventListener('click', () => {
      clearInterval(timerInterval);
      timerInterval = null;
      remaining = totalSeconds;
      updateDisplay();
    });
  }

  // Espera a que el DOM esté listo
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initWcTools);
  } else {
    initWcTools();
  }
</script>
</head>
<body>
<div id="menuBackdrop" onclick="closeAllSheets()"></div>

<div class="header">
  <h1 id="editorTitle">WC Corporate Editor v24</h1>
  <p id="editorSub">ULTIMATE PRO UI V26 - ESTÉTICA EJECUTIVA</p>
</div>

<div class="menu-card">
 <div class="menu-tabs">
  <div class="menu-item">
   <button class="menu-btn" data-menu="inicio">Inicio</button>
   <div class="dropdown" id="menu-inicio">
    <div class="dsec">Documento</div>
    <div class="di" data-action="new"><span class="ico">📄</span><div>Nuevo documento</div></div>
    <div class="di" data-action="open"><span class="ico">📂</span><div>Abrir reciente</div></div>
    <div class="di" data-action="plantillas"><span class="ico">📋</span><div>Plantillas (10)</div></div>
    <div class="dd"></div>
    <div class="dsec">Portapapeles</div>
    <div class="dib" data-action="portapapeles"><div class="tit">Portapapeles</div><div class="desc">Historial de copiar, cortar y pegar.</div></div>
    <div class="dd"></div>
    <div class="dsec">Estilos</div>
    <div class="di" data-action="estiloNormal"><span class="ico">📝</span><div>Normal</div></div>
    <div class="di" data-action="estiloTitulo"><span class="ico">🔤</span><div>Título principal</div></div>
    <div class="di" data-action="estiloSubtitulo"><span class="ico">🔡</span><div>Subtítulo</div></div>
    <div class="di" data-action="estiloCita"><span class="ico">💬</span><div>Cita destacada</div></div>
    <div class="di" data-action="estiloIntensivo"><span class="ico">⚡</span><div>Énfasis intenso</div></div>
   </div>
  </div>
  <div class="menu-item">
   <button class="menu-btn" data-menu="archivo">Archivo</button>
   <div class="dropdown" id="menu-archivo">
    <div class="dsec">Guardar</div>
    <div class="di" data-action="save"><span class="ico">💾</span><div>Guardar</div>
    <div class="di" onclick="wcAbrirArchivo('editor')"><span class="ico">📂</span><div>Abrir archivo (EPUB, DOC, PDF...)</div></div><span class="badge">Ctrl+S</span></div>
    <div class="di" data-action="saveAs"><span class="ico">📁</span><div>Guardar como...</div></div>
    <div class="dd"></div>
    <div class="dsec">Exportar</div>
    <div class="di" data-action="exportHtml"><span class="ico">🌐</span><div>Exportar HTML</div></div>
    <div class="di" data-action="exportTxt"><span class="ico">📃</span><div>Exportar TXT</div></div>
    <div class="di" data-action="export"><span class="ico">🖨️</span><div>Imprimir / PDF</div></div>
    <div class="dd"></div>
    <div class="di" data-action="share"><span class="ico">📤</span><div>Compartir</div></div>
   </div>
  </div>
  <div class="menu-item">
   <button class="menu-btn" data-menu="editar">Editar</button>
   <div class="dropdown" id="menu-editar">
    <div class="dsec">Acciones</div>
    <div class="di" data-action="undo"><span class="ico">↩</span><div>Deshacer</div><span class="badge">Ctrl+Z</span></div>
    <div class="di" data-action="redo"><span class="ico">↪</span><div>Rehacer</div><span class="badge">Ctrl+Y</span></div>
    <div class="dd"></div>
    <div class="dsec">Portapapeles</div>
    <div class="di" data-action="cut"><span class="ico">✂️</span><div>Cortar</div><span class="badge">Ctrl+X</span></div>
    <div class="di" data-action="copy"><span class="ico">📋</span><div>Copiar</div><span class="badge">Ctrl+C</span></div>
    <div class="di" data-action="paste"><span class="ico">📌</span><div>Pegar</div><span class="badge">Ctrl+V</span></div>
    <div class="di" data-action="selectAll"><span class="ico">⬛</span><div>Seleccionar todo</div></div>
    <div class="dd"></div>
    <div class="dsec">Edición avanzada</div>
    <div class="dib" data-action="find"><div class="tit">Buscar y reemplazar</div><div class="desc">Cambia una palabra en todo el documento.</div></div>
    <div class="di" data-action="trackChanges"><span class="ico">🔄</span><div>Control de cambios</div></div>
    <div class="di" data-action="addComment"><span class="ico">💬</span><div>Agregar comentario</div></div>
    <div class="di" data-action="comparar"><span class="ico">⚖️</span><div>Comparar versiones</div></div>
    <div class="di" data-action="proteger"><span class="ico">🔒</span><div>Proteger documento</div></div>
   </div>
  </div>
  <div class="menu-item">
   <button class="menu-btn" data-menu="insertar">Insertar</button>
   <div class="dropdown" id="menu-insertar">
    <div class="dsec">Ilustraciones</div>
    <div class="dib" data-action="insertImage"><div class="tit">Imagen / Foto</div><div class="desc">Desde tu galería o archivo del dispositivo.</div></div>
    <div class="di" data-action="insertShape"><span class="ico">🔷</span><div>Formas (20)</div></div>
    <div class="di" data-action="insertChart"><span class="ico">📊</span><div>Gráficos (10)</div></div>
    <div class="dib" data-action="tableToChart"><div class="tit">Convertir tabla → gráfico</div></div>
    <div class="dd"></div>
    <div class="dsec">Multimedia</div>
    <div class="dib" data-action="insertVideo"><div class="tit">Video</div></div>
    <div class="di" data-action="insertFile"><span class="ico">📎</span><div>Archivo adjunto</div></div>
    <div class="dd"></div>
    <div class="dsec">Vínculos</div>
    <div class="dib" data-action="insertLink"><div class="tit">Enlace</div></div>
    <div class="dd"></div>
    <div class="dsec">Encabezado y pie</div>
    <div class="di" data-action="insertHeader"><span class="ico">⬆️</span><div>Encabezado</div></div>
    <div class="di" data-action="insertFooter"><span class="ico">⬇️</span><div>Pie de página</div></div>
    <div class="di" data-action="pageNumber"><span class="ico">🔢</span><div>Numeración de páginas</div></div>
    <div class="dd"></div>
    <div class="dsec">Texto y arte</div>
    <div class="di" data-action="insertTable"><span class="ico">🗃️</span><div>Tabla</div></div>
    <div class="di" data-action="insertEmoji"><span class="ico">😀</span><div>Emoji</div></div>
    <div class="di" data-action="insertColumns"><span class="ico">▦</span><div>Columnas</div></div>
    <div class="di" data-action="pageBreak"><span class="ico">📄</span><div>Salto de página</div></div>
    <div class="dd"></div>
    <div class="dsec">Símbolos y ecuaciones</div>
    <div class="dib" data-action="insertEquation"><div class="tit">Ecuación</div><div class="desc">Editor de ecuaciones matemáticas.</div></div>
    <div class="di" data-action="insertSymbol"><span class="ico">Ω</span><div>Símbolo especial</div></div>
    <div class="di" data-action="insertFootnote"><span class="ico">¹</span><div>Nota al pie</div></div>
    <div class="di" data-action="insertSignature"><span class="ico">✍️</span><div>Firma / Anotación inteligente</div></div>
   </div>
  </div>
  <div class="menu-item">
   <button class="menu-btn" data-menu="formato">Formato</button>
   <div class="dropdown" id="menu-formato">
    <div class="dsec">Fuente</div>
    <div class="di" data-action="bold"><span class="ico"><b>N</b></span><div>Negrita</div><span class="badge">Ctrl+B</span></div>
    <div class="di" data-action="italic"><span class="ico"><i>C</i></span><div>Cursiva</div><span class="badge">Ctrl+I</span></div>
    <div class="di" data-action="underline"><span class="ico"><u>S</u></span><div>Subrayado</div><span class="badge">Ctrl+U</span></div>
    <div class="di" data-action="strike"><span class="ico"><s>T</s></span><div>Tachado</div></div>
    <div class="di" data-action="fontColor"><span class="ico">🎨</span><div>Color de texto</div></div>
    <div class="di" data-action="fontSize"><span class="ico">🔡</span><div>Tamaño de fuente</div></div>
    <div class="di" data-action="fontFamily"><span class="ico">🔤</span><div>Tipo de letra</div></div>
    <div class="dd"></div>
    <div class="dsec">Párrafo</div>
    <div class="di" data-action="bulletList"><span class="ico">•</span><div>Lista con viñetas</div></div>
    <div class="di" data-action="orderedList"><span class="ico">1.</span><div>Lista numerada</div></div>
    <div class="di" data-action="alignLeft"><span class="ico">⬅</span><div>Alinear izquierda</div></div>
    <div class="di" data-action="alignCenter"><span class="ico">≡</span><div>Centrar</div></div>
    <div class="di" data-action="alignRight"><span class="ico">➡</span><div>Alinear derecha</div></div>
    <div class="di" data-action="alignJustify"><span class="ico">☰</span><div>Justificar</div></div>
    <div class="di" data-action="lineSpacing"><span class="ico">↕</span><div>Interlineado</div></div>
    <div class="di" data-action="indent"><span class="ico">→</span><div>Sangría →</div></div>
    <div class="di" data-action="outdent"><span class="ico">←</span><div>Sangría ←</div></div>
    <div class="dd"></div>
    <div class="dsec">Títulos</div>
    <div class="di" data-action="h1"><span class="ico">H1</span><div>Título 1</div></div>
    <div class="di" data-action="h2"><span class="ico">H2</span><div>Título 2</div></div>
    <div class="di" data-action="h3"><span class="ico">H3</span><div>Título 3</div></div>
    <div class="dd"></div>
    <div class="dsec">📕 Maquetación de Libros</div>
    <div class="di" data-action="maqPortadaLibro"><span class="ico">📘</span><div>Portada de libro</div></div>
    <div class="di" data-action="maqCapitulo"><span class="ico">📑</span><div>Capítulo</div></div>
    <div class="di" data-action="maqDosColumnas"><span class="ico">⬛⬛</span><div>Dos columnas</div></div>
    <div class="di" data-action="maqTresColumnas"><span class="ico">⬛⬛⬛</span><div>Tres columnas</div></div>
    <div class="di" data-action="maqUnaColumna"><span class="ico">⬛</span><div>Columna central</div></div>
    <div class="di" data-action="maqSangria"><span class="ico">📖</span><div>Párrafo editorial</div></div>
    <div class="di" data-action="maqCitaDestacada"><span class="ico">❝</span><div>Cita destacada</div></div>
    <div class="di" data-action="maqSeparador"><span class="ico">✦</span><div>Separador decorativo</div></div>
   </div>
  </div>
  <div class="menu-item">
   <button class="menu-btn" data-menu="wcarte">WC Arte</button>
   <div class="dropdown" id="menu-wcarte">
    <div class="dib" data-action="wcarte"><div class="tit">WC Arte libre</div><div class="desc">Letras con estilos especiales.</div></div>
    <div class="dib" data-action="wcarte-galeria"><div class="tit">Galería CR</div><div class="desc">Animales, bosques y bandera de Costa Rica.</div></div>
    <div class="dib" data-action="wcarte-letras"><div class="tit">Estilos de letras</div><div class="desc">12 estilos: Fuego, Océano, Bosque, Galaxia y más.</div></div>
   </div>
  </div>
  <div class="menu-item">
   <button class="menu-btn" data-menu="herramientas">Herramientas</button>
   <div class="dropdown" id="menu-herramientas">
    <div class="dsec">Revisión</div>
    <div class="dib" data-action="spellcheck"><div class="tit">Ortografía y gramática</div></div>
    <div class="di" data-action="wordcount"><span class="ico">🔢</span><div>Contar palabras</div></div>
    <div class="dib" data-action="translateDoc"><div class="tit">Traducir</div></div>
    <div class="dd"></div>
    <div class="dsec">Diseño de página</div>
    <div class="dib" data-action="pageBackground"><div class="tit">Color de fondo</div></div>
    <div class="di" data-action="pageBorder"><span class="ico">🔲</span><div>Borde de página</div></div>
    <div class="di" data-action="marginNormal"><span class="ico">📏</span><div>Márgenes normales</div></div>
    <div class="di" data-action="marginNarrow"><span class="ico">📏</span><div>Márgenes estrechos</div></div>
    <div class="di" data-action="marginWide"><span class="ico">📏</span><div>Márgenes amplios</div></div>
    <div class="di" data-action="orientPortrait"><span class="ico">📄</span><div>Orientación vertical</div></div>
    <div class="di" data-action="orientLandscape"><span class="ico">📋</span><div>Orientación horizontal</div></div>
    <div class="di" data-action="sizeA4"><span class="ico">📄</span><div>Tamaño A4</div></div>
    <div class="di" data-action="sizeLetter"><span class="ico">📄</span><div>Tamaño Carta</div></div>
    <div class="di" data-action="sizeLegal"><span class="ico">📄</span><div>Tamaño Oficio</div></div>
    <div class="dd"></div>
    <div class="dsec">Seguimiento</div>
    <div class="dib" data-action="trackChanges"><div class="tit">Control de cambios</div></div>
    <div class="di" data-action="acceptChange"><span class="ico">✅</span><div>Aceptar cambio</div></div>
    <div class="di" data-action="rejectChange"><span class="ico">❌</span><div>Rechazar cambio</div></div>
    <div class="dib" data-action="comparar"><div class="tit">Comparar versiones</div></div>
    <div class="dib" data-action="proteger"><div class="tit">Proteger documento</div></div>
    <div class="dd"></div>
    <div class="dsec">Vista</div>
    <div class="dib" data-action="vistaLectura"><div class="tit">Vista de lectura</div></div>
    <div class="dib" data-action="vistaImpresion"><div class="tit">Diseño de impresión</div></div>
    <div class="dib" data-action="toggleRuler"><div class="tit">Regla</div></div>
    <div class="di" data-action="toggleGrid"><span class="ico">⊞</span><div>Cuadrícula</div></div>
    <div class="di" data-action="zoom75"><span class="ico">🔎</span><div>Zoom 75%</div></div>
    <div class="di" data-action="zoom100"><span class="ico">🔍</span><div>Zoom 100%</div></div>
    <div class="di" data-action="zoom150"><span class="ico">🔍</span><div>Zoom 150%</div></div>
    <div class="dib" data-action="macros"><div class="tit">Macros</div></div>
    <div class="dd"></div>
    <div class="dsec">Formatos del documento</div>
    <div class="dib" data-action="docFormatProfesional"><div class="tit">Profesional</div><div class="desc">Arial 12pt, espaciado 1.15.</div></div>
    <div class="dib" data-action="docFormatAcademico"><div class="tit">Académico</div><div class="desc">Times New Roman 12pt, doble espacio.</div></div>
    <div class="dib" data-action="docFormatCreativo"><div class="tit">Creativo</div><div class="desc">Georgia 13pt, colores vibrantes.</div></div>
    <div class="dd"></div>
    <div class="dsec">Referencias</div>
    <div class="dib" data-action="insertTOC"><div class="tit">Tabla de contenido</div></div>
    <div class="dib" data-action="insertFootnote"><div class="tit">Nota al pie</div></div>
    <div class="dib" data-action="insertCitation"><div class="tit">Insertar cita</div></div>
    <div class="di" data-action="insertBibliography"><span class="ico">📚</span><div>Bibliografía</div></div>
    <div class="di" data-action="insertCaptionImg"><span class="ico">🖼️</span><div>Título de imagen</div></div>
    <div class="dib" data-action="insertIndex"><div class="tit">Índice analítico</div></div>
    <div class="dd"></div>
    <div class="dsec">Correos</div>
    <div class="dib" data-action="createEnvelope"><div class="tit">Crear sobre</div></div>
    <div class="dib" data-action="createLabel"><div class="tit">Crear etiqueta</div></div>
    <div class="dib" data-action="startMerge"><div class="tit">Iniciar combinación</div></div>
    <div class="dib" data-action="insertFields"><div class="tit">Insertar campos</div></div>
    <div class="dib" data-action="previewMerge"><div class="tit">Vista previa de resultados</div></div>
    <div class="dib" data-action="finishMerge"><div class="tit">Finalizar y combinar</div></div>
   </div>
  </div>
  <div class="menu-item">
   <button class="menu-btn" data-menu="lenguas">Lenguas CR</button>
   <div class="dropdown" id="menu-lenguas">
    <div class="dsec">Insertar palabra</div>
    <div class="di" data-action="insert-bribri"><span class="ico">🌿</span><div>Bribri</div></div>
    <div class="di" data-action="insert-cabecar"><span class="ico">🌿</span><div>Cabécar</div></div>
    <div class="di" data-action="insert-maleku"><span class="ico">🌿</span><div>Maleku</div></div>
    <div class="di" data-action="insert-boruca"><span class="ico">🌿</span><div>Boruca (Brunca)</div></div>
    <div class="di" data-action="insert-teribe"><span class="ico">🌿</span><div>Térraba/Teribe</div></div>
    <div class="di" data-action="insert-guaymi"><span class="ico">🌿</span><div>Ngäbe/Guaymí</div></div>
    
    <div class="dd"></div>
    <div class="dsec">Búsqueda comunitaria</div>
    <div class="di" data-action="buscar-seleccion"><span class="ico">🔍</span><div>Buscar palabra seleccionada</div></div>
    <div class="di" data-action="escuchar-idioma"><span class="ico">🎤</span><div>Registrar palabra por voz</div></div>
    <div class="dd"></div>
    <div class="dsec">Idioma del editor</div>
    <div class="di" data-action="lang-bribri"><span class="ico">🌿</span><div>Editor en Bribri</div></div>
    <div class="di" data-action="lang-cabecar"><span class="ico">🌿</span><div>Editor en Cabécar</div></div>
    <div class="di" data-action="lang-maleku"><span class="ico">🌿</span><div>Editor en Maleku</div></div>
    <div class="di" data-action="lang-ingles"><span class="ico">🌐</span><div>Editor en English</div></div>
    <div class="di" data-action="lang-espanol"><span class="ico">🇨🇷</span><div>Editor en Español</div></div>
    <div class="di" data-action="lang-brunca"><span class="ico">🌿</span><div>Editor en Boruca (Brunca)</div></div>
    <div class="dd"></div>
    <div class="di" data-action="dict-indigena"><span class="ico">📖</span><div>Diccionario indígena</div></div>
    <div class="di" data-action="translate-indigena"><span class="ico">🔄</span><div>Traducir a lengua</div></div>
   </div>
  </div>
  <div class="menu-item">
   <button class="menu-btn" data-menu="ia" style="background:linear-gradient(135deg,rgba(0,132,255,.12),rgba(39,174,96,.12));font-weight:600;">IA 🦙</button>
   <div class="dropdown" id="menu-ia">
    <div class="dib" data-action="openAI"><div class="tit">Abrir asistente Sibö</div><div class="desc">Meta Llama via Groq — redactar, mejorar, resumir.</div></div>
    <div class="di" data-action="aiMejorar"><span class="ico">✨</span><div>Mejorar texto seleccionado</div></div>
    <div class="di" data-action="aiResumen"><span class="ico">📝</span><div>Resumir documento</div></div>
    <div class="di" data-action="aiContinuar"><span class="ico">➡️</span><div>Continuar escribiendo</div></div>
    <div class="di" data-action="aiTraducir"><span class="ico">🌐</span><div>Traducir al inglés</div></div>
   </div>
  </div>
 <div class="menu-item"><button class="menu-btn" data-menu="revision">📝 Revisión</button><div class="dropdown" id="menu-revision"><div class="dsec">Organización</div><div class="di" data-action="tocPanel"><span class="ico">📑</span><div>Tabla de contenidos<div class="desc">TOC automático H1-H4</div></div></div><div class="di" data-action="bookmarks"><span class="ico">📌</span><div>Marcadores y referencias</div></div><div class="dd"></div><div class="dsec">Páginas</div><div class="di" data-action="pageNumbers"><span class="ico">#</span><div>Numeración de páginas</div></div><div class="di" data-action="headerFooter"><span class="ico">📋</span><div>Encabezado y pie de página</div></div><div class="dd"></div><div class="dsec">Cambios</div><div class="di" data-action="trackChanges"><span class="ico">🔴</span><div>Control de cambios</div></div><div class="di" data-action="comments"><span class="ico">💬</span><div>Comentarios</div></div><div class="di" data-action="footnotes"><span class="ico">¹</span><div>Notas al pie</div></div><div class="dd"></div><div class="dsec">Herramientas</div><div class="di" data-action="spellCheck"><span class="ico">🔤</span><div>Corrector ortográfico</div></div><div class="di" data-action="autocomplete"><span class="ico">💭</span><div>Autocompletar palabras</div></div><div class="di" data-action="versionHistory"><span class="ico">🕐</span><div>Historial de versiones</div></div><div class="di" data-action="compareVersions"><span class="ico">🔀</span><div>Comparar versiones</div></div><div class="di" data-action="textToSpeech"><span class="ico">🔊</span><div>Texto a voz</div></div></div></div>
<div class="menu-item"><button class="menu-btn" data-menu="diseno">🎨 Diseño</button><div class="dropdown" id="menu-diseno"><div class="dsec">Vista</div><div class="di" data-action="wordView"><span class="ico">📄</span><div>Vista estilo Word</div></div><div class="di" data-action="ruler"><span class="ico">📏</span><div>Regla horizontal</div></div><div class="di" data-action="columnsMode"><span class="ico">▥</span><div>Modo columnas</div></div><div class="di" data-action="printPreview"><span class="ico">🖨️</span><div>Vista de impresión</div></div><div class="dd"></div><div class="dsec">Estilos</div><div class="di" data-action="stylesPanel"><span class="ico">🎨</span><div>Estilos rápidos</div></div><div class="di" data-action="docTheme"><span class="ico">🌈</span><div>Temas del documento</div></div><div class="di" data-action="pageBG"><span class="ico">🖼️</span><div>Fondo de página</div></div><div class="dd"></div><div class="dsec">Elementos</div><div class="di" data-action="shapesPanel"><span class="ico">⬡</span><div>Formas SVG</div></div><div class="di" data-action="tableGen"><span class="ico">📊</span><div>Tablas avanzadas</div></div><div class="di" data-action="orgChart"><span class="ico">🏢</span><div>Organigrama SVG</div></div><div class="di" data-action="signatureCanvas"><span class="ico">✍️</span><div>Firma electrónica</div></div><div class="di" data-action="qrGenerator"><span class="ico">📱</span><div>Código QR</div></div></div></div>
<div class="menu-item"><button class="menu-btn" data-menu="productividad">⚡ Productividad</button><div class="dropdown" id="menu-productividad"><div class="dsec">Escritura</div><div class="di" data-action="zenMode"><span class="ico">🧘</span><div>Modo Zen</div></div><div class="di" data-action="immersive"><span class="ico">📖</span><div>Modo lectura inmersiva</div></div><div class="di" data-action="presMode"><span class="ico">🎬</span><div>Modo presentación</div></div><div class="di" data-action="advancedStats"><span class="ico">📊</span><div>Estadísticas avanzadas</div></div><div class="dd"></div><div class="dsec">Avanzado</div><div class="di" data-action="meetingTimer"><span class="ico">⏱️</span><div>Temporizador de reunión</div></div><div class="di" data-action="tasksPanel"><span class="ico">✅</span><div>Panel de tareas</div></div><div class="di" data-action="tabsMode"><span class="ico">📑</span><div>Multidocumento</div></div><div class="dd"></div><div class="dsec">Archivos</div><div class="di" data-action="searchHistory"><span class="ico">🔍</span><div>Búsqueda avanzada</div></div><div class="di" data-action="freeImages"><span class="ico">🖼️</span><div>Imágenes sin copyright</div></div><div class="di" data-action="pdfReader"><span class="ico">📄</span><div>Lector de PDF</div></div><div class="di" data-action="audioTranscript"><span class="ico">🎙️</span><div>Transcriptor de audio</div></div><div class="dd"></div><div class="dsec">Exportar</div><div class="di" data-action="htmlExport"><span class="ico">📦</span><div>Exportar HTML</div></div><div class="di" data-action="mdExport"><span class="ico">#</span><div>Exportar Markdown</div></div><div class="di" data-action="epubExport"><span class="ico">📚</span><div>Exportar EPUB</div></div><div class="di" data-action="cloudSave"><span class="ico">☁️</span><div>Guardar en la nube</div></div><div class="di" data-action="docTranslator"><span class="ico">🌐</span><div>Traductor</div></div><div class="di" data-action="whatsappBiz"><span class="ico">💬</span><div>WhatsApp Business CR</div></div></div></div><div class="menu-item"><button class="menu-btn" data-menu="analisis">📈 Análisis</button><div class="dropdown" id="menu-analisis"><div class="dsec">Estadísticas del documento</div><div class="di" data-action="advancedStats"><span class="ico">📊</span><div>Estadísticas avanzadas</div></div><div class="di" data-action="readingTime"><span class="ico">⏱️</span><div>Tiempo de lectura</div></div><div class="di" data-action="keywordDensity"><span class="ico">🔑</span><div>Densidad de palabras clave</div></div><div class="dd"></div><div class="dsec">Análisis con IA</div><div class="di" data-action="sentimentAnalysis"><span class="ico">🎭</span><div>Detector de sentimiento</div></div><div class="di" data-action="originalityCheck"><span class="ico">🔍</span><div>Detector de originalidad</div></div><div class="di" data-action="docSummary"><span class="ico">📝</span><div>Resumidor automático</div></div><div class="di" data-action="questionGenAI"><span class="ico">❓</span><div>Generador de preguntas</div></div><div class="di" data-action="factCheckAI"><span class="ico">🔎</span><div>Detector de info falsa</div></div><div class="dd"></div><div class="dsec">Gráficos y visualización</div><div class="di" data-action="insertChart"><span class="ico">📊</span><div>Insertar gráfico</div></div><div class="di" data-action="tableToChart"><span class="ico">📈</span><div>Convertir tabla → gráfico</div></div></div></div>
<div class="menu-item"><button class="menu-btn" data-menu="sibu-ia">🦙 Sibö IA</button><div class="dropdown" id="menu-sibu-ia"><div class="dsec">Asistentes</div><div class="dib" data-action="docChatbot"><span class="ico">🦙</span><div><div class="tit">Chatbot del documento</div><div class="desc">Sibö IA</div></div></div><div class="di" data-action="aiAssist"><span class="ico">💡</span><div>Asistente en tiempo real</div></div><div class="dd"></div><div class="dsec">Análisis</div><div class="di" data-action="docSummarizer"><span class="ico">📝</span><div>Resumidor automático</div></div><div class="di" data-action="plagDetector"><span class="ico">🔍</span><div>Detector de originalidad</div></div><div class="di" data-action="questionGen"><span class="ico">❓</span><div>Generador de preguntas</div></div><div class="di" data-action="sentimentDetector"><span class="ico">🎭</span><div>Detector de sentimiento</div></div><div class="di" data-action="factChecker"><span class="ico">🔎</span><div>Detector info falsa</div></div><div class="dd"></div><div class="dsec">Generativa</div><div class="di" data-action="imagenIA"><span class="ico">🎨</span><div>Imágenes con IA</div></div><div class="di" data-action="contractAI"><span class="ico">🤖</span><div>Contratos con IA</div></div><div class="di" data-action="emailAssistant"><span class="ico">📧</span><div>Respuestas de correo</div></div><div class="di" data-action="speechGen"><span class="ico">🎤</span><div>Generador de discursos</div></div><div class="di" data-action="correctorRedaccion"><span class="ico">✍️</span><div>Corrector redacción CR</div></div><div class="di" data-action="traductorIndigena"><span class="ico">🌿</span><div>Traductor lenguas indígenas</div></div><div class="di" data-action="flashcardsIndigenas"><span class="ico">🎴</span><div>Practicar vocabulario CR</div></div><div class="di" data-action="hashtagSEO"><span class="ico">#️⃣</span><div>Hashtags y SEO</div></div><div class="dd"></div><div class="dsec">Cálculos</div><div class="di" data-action="ivaCalc"><span class="ico">🧮</span><div>Calculadora IVA CR</div></div><div class="di" data-action="apaCorrector"><span class="ico">📚</span><div>Corrector APA 7</div></div></div></div>
<div class="menu-item"><button class="menu-btn" data-menu="cr-legal">🇨🇷 CR Legal</button><div class="dropdown" id="menu-cr-legal"><div class="dsec">Documentos legales</div><div class="di" data-action="actaReunion"><span class="ico">📋</span><div>Acta de reunión CR</div></div><div class="di" data-action="cartaPoder"><span class="ico">📜</span><div>Carta poder notarial</div></div><div class="di" data-action="declaracionJurada"><span class="ico">⚖️</span><div>Declaración jurada</div></div><div class="di" data-action="ndaContract"><span class="ico">🔒</span><div>Contrato NDA</div></div><div class="di" data-action="reciboTimbre"><span class="ico">🧾</span><div>Recibo timbre fiscal</div></div><div class="di" data-action="contratoHoras"><span class="ico">⏰</span><div>Contrato por horas</div></div><div class="di" data-action="denunciaLaboral"><span class="ico">🚨</span><div>Denuncia laboral MTSS</div></div><div class="dd"></div><div class="dsec">Legal avanzado</div><div class="di" data-action="facturaElectronica"><span class="ico">🧾</span><div>Factura electrónica CR</div></div><div class="di" data-action="liquidacionLaboral"><span class="ico">💼</span><div>Liquidación laboral CR</div></div>
<div></div><div class="di" data-action="contratoArrendamiento"><span class="ico">🏠</span><div>Contrato arrendamiento</div></div><div class="di" data-action="estatutosSA"><span class="ico">🏛️</span><div>Estatutos S.A. CR</div></div><div class="di" data-action="licitacionPublica"><span class="ico">📋</span><div>Licitación pública CR</div></div><div class="di" data-action="constanciaSalarial"><span class="ico">📃</span><div>Constancia salarial CR</div></div><div class="di" data-action="horasExtra"><span class="ico">⏱️</span><div>Calculadora horas extra</div></div><div class="di" data-action="oficiosDGT"><span class="ico">📨</span><div>Oficios DGT/Hacienda</div></div><div class="di" data-action="numerosALetras"><span class="ico">🔢</span><div>Números a letras (₡)</div></div><div class="dd"></div><div class="dsec">Tributación</div><div class="di" data-action="rentaCalc"><span class="ico">🏛️</span><div>Impuesto renta 2025</div></div><div class="di" data-action="ccssPlanilla"><span class="ico">🏥</span><div>Planilla CCSS</div></div><div class="dd"></div><div class="dsec">Plantillas CR</div><div class="di" data-action="premTemplates"><span class="ico">✨</span><div>Plantillas premium CR</div></div><div class="di" data-action="correosInst"><span class="ico">📧</span><div>Correos institucionales</div></div><div class="di" data-action="cvGenerator"><span class="ico">👤</span><div>Generador CV CR</div></div><div class="di" data-action="budgetGen"><span class="ico">💰</span><div>Presupuesto comercial</div></div></div></div>

 </div>
</div>


<!-- Popup búsqueda en lenguas -->
<div id="popup" class="popup hidden">
  <div class="popup-content">
    <button class="close-btn" onclick="cerrarPopup()">&times;</button>
    <h3>Resultados en lenguas CR</h3>
    <ul id="popupResults"></ul>
  </div>
</div>

<div class="content">
 <div class="ctitle" id="contentTitle">Editor de documentos — WC Corporate</div>
 <div id="dictBox">
  <div id="dictHeader" onclick="toggleDict()">
   <h3>📖 Diccionario — 2450 palabras</h3>
   <span id="dictToggleIcon">▼</span>
  </div>
  <div id="dictBody">
   <input type="text" id="dictSearch" placeholder="Buscar palabra..." oninput="filterDict()">
   <div id="dictResults"></div>
  </div>
 </div>
 <div id="wordart-banner"></div>
 <div id="ruler">◀ 0cm &nbsp;&nbsp;&nbsp; 2 &nbsp;&nbsp;&nbsp; 4 &nbsp;&nbsp;&nbsp; 6 &nbsp;&nbsp;&nbsp; 8 &nbsp;&nbsp;&nbsp; 10 &nbsp;&nbsp;&nbsp; 12 &nbsp;&nbsp;&nbsp; 14 ▶</div>
 <div id="mediaZone"></div>
 <div id="editorPageWrap"><div id="editor" class="tiptap" contenteditable="true" spellcheck="true">
  <h2>Lenguas Indígenas de Costa Rica</h2>
  <p><strong>Bribri:</strong> Hola = Shkëkë</p>
  <p><strong>Cabécar:</strong> Buenos días = Ká bë́rë</p>
  <p><strong>Maleku:</strong> Buenas tardes = Ma lha maráma</p>
  <p><strong>Boruca:</strong> Gracias = Shíi</p>
  <p><strong>Térraba:</strong> Agua = Di</p>
  <p><strong>Ngäbe:</strong> Casa = Ju</p>
  <p>Escribe aquí o usa el menú para insertar contenido...</p>
 </div></div>
</div>

<div class="footer">
 <div class="stats">
  <span id="wordCount">✓ 0 palabras</span>
  <span id="charCount">✓ 0 caracteres</span>
  <span id="trackStatus">✓ Auto-guardado activo</span>
 </div>
 <div class="author">Por Keny Chinchilla Navarro</div>
</div>

<footer class="statusbar" id="statusbar">
  Listo | Palabras: 0 | Lenguas encontradas: 0 | Pendientes: 0 | Validadas: 0 | Corregidas: 0
</footer>

<div class="bottom-nav">
 <button class="nav-btn" id="btnBack">↩</button>
 <button class="nav-btn" id="btnForward">↪</button>
 <button class="nav-btn" id="btnShare">⬆</button>
 <button class="nav-btn" id="btnSave">💾</button>
 <button class="nav-btn" id="btnCopy">⧉</button>
</div>

<div class="toast" id="toast"></div>

<button id="fabBtn" onclick="toggleFab()">⚡ Herramientas<br><span style="font-size:10px;opacity:.85">Corporativas y de Formato</span></button>
<button id="communityBtn" onclick="toggleCommunity()">🌿 Validación<br><span style="font-size:10px;opacity:.85">comunitaria</span></button>
<!-- DISEÑOS CORPORATIVOS -->
<button id="styleBtn" onclick="toggleStylePanel()" style="position:fixed;top:70px;left:12px;z-index:8000;background:linear-gradient(135deg,#1a2942,#0084ff);color:#fff;border:none;border-radius:50px;padding:8px 12px;font-size:11px;font-weight:700;box-shadow:0 4px 20px rgba(0,0,0,.3);cursor:pointer;line-height:1.4;text-align:center;">💼 Diseños<br><span style="font-size:10px;opacity:.85">corporativos</span></button>
<div id="stylePanel" style="display:none;position:fixed;top:130px;left:8px;right:8px;background:#fff;border-radius:20px;box-shadow:0 8px 40px rgba(0,0,0,.2);z-index:7998;padding:16px;max-height:72vh;overflow-y:auto;">
<h4 style="font-size:13px;color:#1a2942;font-weight:700;margin-bottom:12px">💼 Diseños Corporativos</h4>
<button onclick="var e=document.getElementById('editor');var h=document.querySelector('.header');e.style.cssText+='font-family:Arial,sans-serif!important;font-size:14px!important;color:#1a1a1a!important;background:#ffffff!important;';if(h)h.style.background='linear-gradient(135deg,#e9ecef 0%,#dee2e6 100%)';toggleStylePanel();showToast('Profesional ✅')" style="display:block;width:100%;text-align:left;padding:10px 12px;margin-bottom:6px;border:2px solid #1a2942;border-radius:8px;background:#f8f9fa;cursor:pointer;font-size:13px;font-weight:600;color:#1a2942">📋 Profesional</button>
<button onclick="var e=document.getElementById('editor');var h=document.querySelector('.header');e.style.cssText+='font-family:Georgia,serif!important;color:#ffffff!important;background:#1a1a1a!important;';if(h)h.style.background='linear-gradient(135deg,#2c2c2c 0%,#0a0a0a 100%)';toggleStylePanel();showToast('Negro Elegante ✅')" style="display:block;width:100%;text-align:left;padding:10px 12px;margin-bottom:6px;border:2px solid #1a1a1a;border-radius:8px;background:#1a1a1a;cursor:pointer;font-size:13px;font-weight:600;color:#ffffff">⬛ Negro Elegante</button>
<button onclick="var e=document.getElementById('editor');var h=document.querySelector('.header');e.style.cssText+='color:#ffffff!important;background:linear-gradient(135deg,#003da5,#ce1126)!important;';if(h)h.style.background='linear-gradient(135deg,#003da5 0%,#ce1126 100%)';toggleStylePanel();showToast('Costa Rica ✅')" style="display:block;width:100%;text-align:left;padding:10px 12px;margin-bottom:6px;border:2px solid #003da5;border-radius:8px;background:linear-gradient(135deg,#003da5,#ce1126);cursor:pointer;font-size:13px;font-weight:600;color:#ffffff">🇨🇷 Costa Rica</button>
<button onclick="var e=document.getElementById('editor');var h=document.querySelector('.header');e.style.cssText+='color:#ffffff!important;background:#ce1126!important;';if(h)h.style.background='linear-gradient(135deg,#ce1126 0%,#8b0a1a 100%)';toggleStylePanel();showToast('Rojo Corporativo ✅')" style="display:block;width:100%;text-align:left;padding:10px 12px;margin-bottom:6px;border:2px solid #ce1126;border-radius:8px;background:#ce1126;cursor:pointer;font-size:13px;font-weight:600;color:#ffffff">🔴 Rojo Corporativo</button>
<button onclick="var e=document.getElementById('editor');var h=document.querySelector('.header');e.style.cssText+='color:#1a1a1a!important;background:linear-gradient(135deg,#ffd700,#f39c12)!important;';if(h)h.style.background='linear-gradient(135deg,#ffd700 0%,#f39c12 100%)';toggleStylePanel();showToast('Dorado Premium ✅')" style="display:block;width:100%;text-align:left;padding:10px 12px;margin-bottom:6px;border:2px solid #f39c12;border-radius:8px;background:linear-gradient(135deg,#ffd700,#f39c12);cursor:pointer;font-size:13px;font-weight:600;color:#1a1a1a">⭐ Dorado Premium</button>
<button onclick="var e=document.getElementById('editor');var h=document.querySelector('.header');e.style.cssText+='color:#ffffff!important;background:linear-gradient(135deg,#003da5,#0084ff)!important;';if(h)h.style.background='linear-gradient(135deg,#003da5 0%,#0084ff 100%)';toggleStylePanel();showToast('Azul Corporativo ✅')" style="display:block;width:100%;text-align:left;padding:10px 12px;margin-bottom:6px;border:2px solid #003da5;border-radius:8px;background:linear-gradient(135deg,#003da5,#0084ff);cursor:pointer;font-size:13px;font-weight:600;color:#ffffff">🔵 Azul Corporativo</button>
<button onclick="var e=document.getElementById('editor');var h=document.querySelector('.header');e.style.cssText='';if(h)h.style.background='linear-gradient(135deg,#0084ff 0%,#ff6b35 100%)';toggleStylePanel();showToast('Restablecido ✅')" style="display:block;width:100%;text-align:left;padding:10px 12px;margin-bottom:6px;border:2px solid #ddd;border-radius:8px;background:#fff;cursor:pointer;font-size:13px;font-weight:600;color:#666">⬜ Restablecer</button>
<button onclick="toggleStylePanel()" style="width:100%;padding:10px;border:none;border-radius:10px;background:#f0f0f0;cursor:pointer;font-size:14px;font-weight:600;margin-top:4px">✕ Cerrar</button>
</div>

<!-- Panel Herramientas -->
<div id="fabPanel">
 <h4>✏️ Formato rápido</h4>
 <div class="fabrow">
  <button class="fabbtn" style="font-weight:900" onmousedown="saveSelection()" onclick="restoreAndExec('bold')"><b>N</b></button>
  <button class="fabbtn" style="font-style:italic" onmousedown="saveSelection()" onclick="restoreAndExec('italic')"><i>C</i></button>
  <button class="fabbtn" style="text-decoration:underline" onmousedown="saveSelection()" onclick="restoreAndExec('underline')"><u>S</u></button>
  <button class="fabbtn" style="text-decoration:line-through" onmousedown="saveSelection()" onclick="restoreAndExec('strikeThrough')"><s>T</s></button>
  <button class="fabbtn" onmousedown="saveSelection()" onclick="restoreAndExec('justifyLeft')">⬅</button>
  <button class="fabbtn" onmousedown="saveSelection()" onclick="restoreAndExec('justifyCenter')">≡</button>
  <button class="fabbtn" onmousedown="saveSelection()" onclick="restoreAndExec('justifyRight')">➡</button>
  <button class="fabbtn" onmousedown="saveSelection()" onclick="restoreAndExec('justifyFull')">☰</button>
  <button class="fabbtn" onmousedown="saveSelection()" onclick="restoreAndExec('insertUnorderedList')">• Lista</button>
  <button class="fabbtn" onmousedown="saveSelection()" onclick="restoreAndExec('insertOrderedList')">1. Lista</button>
  <button class="fabbtn" onmousedown="saveSelection()" onclick="restoreAndExec('indent')">→ Sang.</button>
  <button class="fabbtn" onmousedown="saveSelection()" onclick="restoreAndExec('outdent')">← Sang.</button>
 </div>
 <h4>📝 Títulos</h4>
 <div class="fabrow">
  <button class="fabbtn" style="font-size:17px;font-weight:900" onmousedown="saveSelection()" onclick="restoreSelection();cmd('formatBlock','H1')">Título 1</button>
  <button class="fabbtn" style="font-size:15px;font-weight:700" onmousedown="saveSelection()" onclick="restoreSelection();cmd('formatBlock','H2')">Título 2</button>
  <button class="fabbtn" style="font-size:14px;font-weight:600" onmousedown="saveSelection()" onclick="restoreSelection();cmd('formatBlock','H3')">Título 3</button>
  <button class="fabbtn" onmousedown="saveSelection()" onclick="restoreSelection();cmd('formatBlock','P')">Normal</button>
 </div>
 <h4>🔤 Tipo de letra</h4>
 <div style="display:flex;flex-direction:column;gap:4px;max-height:160px;overflow-y:auto;margin-bottom:6px;" id="fabFontList"></div>
 <h4>📏 Tamaño</h4>
 <div class="fabrow" id="fabSizeList"></div>
 <h4>🎨 Paleta de colores</h4>
 <div class="cpal" id="colorPalette"></div>
 <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px;">
  <label style="font-size:12px;color:#666;">Personalizado:</label>
  <input type="color" id="fabColorCustom" value="#0084ff" style="width:40px;height:28px;border:none;border-radius:6px;cursor:pointer;">
  <button class="fabbtn" onmousedown="saveSelection()" onclick="restoreSelection();cmd('foreColor',document.getElementById('fabColorCustom').value);showToast('Color aplicado 🎨')">Aplicar</button>
 </div>
 <h4>✨ WC Arte — Diseños CR</h4>
 <div style="display:grid;grid-template-columns:1fr 1fr;gap:5px;margin-bottom:10px;" id="fabWcArteGrid"></div>
 <h4>⚡ Acciones rápidas</h4>
 <div class="fabrow">
  <button class="fabbtn" onclick="cmd('undo')">↩ Deshacer</button>
  <button class="fabbtn" onclick="cmd('redo')">↪ Rehacer</button>
  <button class="fabbtn" onclick="localStorage.setItem('wc-v23',editor.innerHTML);showToast('Guardado 💾')">💾 Guardar</button>
  <button class="fabbtn" onclick="navigator.clipboard.writeText(editor.innerText);showToast('Copiado ✅')">⧉ Copiar</button>
  <button class="fabbtn" onclick="window.print()">🖨️ Imprimir</button>
  <button class="fabbtn" onclick="toggleAI()">🦙 Sibö IA</button>
 </div>
 <div style="text-align:center;margin-top:12px;">
  <button class="btn2" onclick="toggleFab()" style="width:100%">✕ Cerrar panel</button>
 </div>
</div>

<!-- Panel Validación Comunitaria -->
<div id="communityPanel">
 <h4>🌿 Validación comunitaria <button onclick="toggleCommunity()" style="background:none;border:none;font-size:18px;cursor:pointer;color:#999;font-weight:normal">✕</button></h4>
 <ul id="communityList"><li style="color:#aaa;font-size:12px;text-align:center;padding:8px">Sin palabras pendientes</li></ul>
</div>

<!-- DOCUMENTO SEPARADO -->
<div id="docOverlay">
  <div id="docWindow">
    <div class="doc-toolbar" style="flex-wrap:wrap;gap:6px">
      <span class="doc-title" id="docWindowTitle">📄 Documento nuevo</span>
      <button class="ai-quick-btn" onclick="docWindowExport('pdf')">📄 PDF</button>
      <button class="ai-quick-btn" onclick="docWindowExport('word')">📝 DOC</button>
      <button class="ai-quick-btn" onclick="docWindowExport('epub')">📚 EPUB</button>
      <button class="ai-quick-btn" onclick="docWindowExport('rtf')">📋 RTF</button>
      <button class="ai-quick-btn" onclick="docWindowExport('odt')">📄 ODT</button>
      <button class="ai-quick-btn" onclick="docWindowExport('html')">🌐 HTML</button>
      <button class="ai-quick-btn" onclick="docWindowExport('txt')">📃 TXT</button>
      <button class="ai-quick-btn" onclick="docWindowPrint()">🖨️ Imprimir</button>
      <button class="ai-quick-btn" onclick="wcAbrirArchivo('docWindowEditor')">📂 Abrir</button>
      <button class="ai-quick-btn" onclick="docWindowInsertMain()">📋 Insertar</button>
      <button onclick="closeDocWindow()" style="background:none;border:none;font-size:20px;cursor:pointer;color:#999;margin-left:4px">✕</button>
    </div>
    <div class="doc-format-bar" style="display:flex;flex-wrap:wrap;gap:4px;padding:8px 12px;border-bottom:1px solid #eee;background:#fafafa;align-items:center">
      <button class="dw-fmt" onclick="dwCmd('bold')" title="Negrita" style="font-weight:700">N</button>
      <button class="dw-fmt" onclick="dwCmd('italic')" title="Cursiva" style="font-style:italic">I</button>
      <button class="dw-fmt" onclick="dwCmd('underline')" title="Subrayado" style="text-decoration:underline">S</button>
      <button class="dw-fmt" onclick="dwCmd('strikeThrough')" title="Tachado" style="text-decoration:line-through">T</button>
      <span style="width:1px;height:20px;background:#ddd;margin:0 2px"></span>
      <button class="dw-fmt" onclick="dwBlock('H1')" title="Título 1">H1</button>
      <button class="dw-fmt" onclick="dwBlock('H2')" title="Título 2">H2</button>
      <button class="dw-fmt" onclick="dwBlock('H3')" title="Título 3">H3</button>
      <button class="dw-fmt" onclick="dwBlock('P')" title="Párrafo">¶</button>
      <span style="width:1px;height:20px;background:#ddd;margin:0 2px"></span>
      <button class="dw-fmt" onclick="dwColor()" title="Color de letra" style="color:#e74c3c;font-weight:700">A</button>
      <input type="color" id="dwColorPick" style="display:none" onchange="dwApplyColor(this.value)">
      <button class="dw-fmt" onclick="dwHighlight()" title="Resaltar" style="background:#fff59d">H</button>
      <input type="color" id="dwHlPick" value="#ffff00" style="display:none" onchange="dwApplyHighlight(this.value)">
      <select class="dw-fmt" onchange="dwFontSize(this.value)" title="Tamaño" style="padding:2px 4px">
        <option value="">Tamaño</option>
        <option value="1">Muy pequeño</option>
        <option value="2">Pequeño</option>
        <option value="3">Normal</option>
        <option value="4">Mediano</option>
        <option value="5">Grande</option>
        <option value="6">Muy grande</option>
        <option value="7">Enorme</option>
      </select>
      <span style="width:1px;height:20px;background:#ddd;margin:0 2px"></span>
      <button class="dw-fmt" onclick="dwCmd('justifyLeft')" title="Izquierda">⬅</button>
      <button class="dw-fmt" onclick="dwCmd('justifyCenter')" title="Centrar">↔</button>
      <button class="dw-fmt" onclick="dwCmd('justifyRight')" title="Derecha">➡</button>
      <button class="dw-fmt" onclick="dwCmd('justifyFull')" title="Justificar">☰</button>
      <span style="width:1px;height:20px;background:#ddd;margin:0 2px"></span>
      <button class="dw-fmt" onclick="dwCmd('insertUnorderedList')" title="Lista">• Lista</button>
      <button class="dw-fmt" onclick="dwCmd('insertOrderedList')" title="Lista numerada">1. Lista</button>
      <span style="width:1px;height:20px;background:#ddd;margin:0 2px"></span>
      <button class="dw-fmt" onclick="dwMaq('cita')" title="Cita">❝ Cita</button>
      <button class="dw-fmt" onclick="dwMaq('dos')" title="Dos columnas">⬛⬛</button>
      <button class="dw-fmt" onclick="dwMaq('capitulo')" title="Capítulo">📑 Cap.</button>
      <button class="dw-fmt" onclick="dwMaq('sangria')" title="Párrafo editorial">📖</button>
      <button class="dw-fmt" onclick="dwMaq('separador')" title="Separador">✦</button>
    </div>
    <div class="doc-content">
      <div id="docWindowEditor" class="doc-editor" contenteditable="true" spellcheck="true"></div>
    </div>
    <div class="doc-footer">
      <button class="btn2" onclick="closeDocWindow()">Cerrar</button>
    </div>
  </div>
</div>

<!-- FIRMA -->
<div id="annotationOverlay">
  <div id="annotationBox">
    <h3>✍️ Anotación inteligente — Firma</h3>
    <div class="sign-toolbar">
      <div class="sign-color active" style="background:#000" onclick="setSignColor('#000',this)"></div>
      <div class="sign-color" style="background:#0084ff" onclick="setSignColor('#0084ff',this)"></div>
      <div class="sign-color" style="background:#ce1126" onclick="setSignColor('#ce1126',this)"></div>
      <div class="sign-color" style="background:#27ae60" onclick="setSignColor('#27ae60',this)"></div>
      <div style="width:1px;background:#ddd;margin:0 4px"></div>
      <button class="sign-size active" onclick="setSignSize(1.5,this)">Fino</button>
      <button class="sign-size" onclick="setSignSize(3,this)">Medio</button>
      <button class="sign-size" onclick="setSignSize(5,this)">Grueso</button>
      <div style="flex:1"></div>
      <button class="ai-quick-btn" onclick="clearSignCanvas()" style="color:#e74c3c;border-color:#e74c3c">🗑️ Limpiar</button>
    </div>
    <canvas id="signCanvas"></canvas>
    <div style="display:flex;gap:8px;margin-top:12px;justify-content:center;flex-wrap:wrap;">
      <button class="btn1" onclick="insertSignature()">✅ Insertar firma</button>
      <button class="ai-quick-btn" onclick="insertSignature('stamp')">📌 Insertar como sello</button>
      <button class="btn2" onclick="closeAnnotation()">Cancelar</button>
    </div>
  </div>
</div>

<!-- ═══════════════════════════════════════════════════
     ASISTENTE IA — SIBÖ (Meta Llama 3.1 via Groq)
     ═══════════════════════════════════════════════════ -->
<div id="aiPanel">
 <div id="aiBox">
  <h3>
    <span style="font-size:20px;">🦙</span>
    <span style="color:#0084ff;font-size:16px;font-weight:700;">Pura vida mae, soy Sibö</span>
    <span style="font-size:11px;color:#27ae60;background:#e8f8ee;padding:2px 8px;border-radius:10px;margin-left:4px;">Meta Llama · Groq</span>
    <button onclick="toggleAI()" style="margin-left:auto;background:none;border:none;font-size:20px;cursor:pointer;color:#999">✕</button>
  </h3>

  <!-- API Key Box -->
  <div id="apiKeyBox" style="background:#e8f0fe;border:1px solid #4285f4;border-radius:10px;padding:10px 12px;margin-bottom:10px;font-size:12px;">
    <div style="font-weight:600;color:#1a73e8;margin-bottom:6px">🔑 API Key de Groq (Meta Llama — gratis)</div>
    <div style="display:flex;gap:6px">
      <input type="password" id="apiKeyInput" placeholder="gsk_..." style="flex:1;padding:7px 10px;border:1.5px solid #ddd;border-radius:8px;font-size:13px;outline:none;">
      <button onclick="saveApiKey()" style="background:#4285f4;color:#fff;border:none;border-radius:8px;padding:7px 12px;cursor:pointer;font-size:12px;font-weight:600">Guardar</button>
    </div>
    <div style="color:#888;font-size:10px;margin-top:5px">Gratis en <a href="https://console.groq.com/keys" target="_blank" style="color:#4285f4">console.groq.com</a> · Se guarda solo en tu dispositivo</div>
  </div>

  <!-- Acciones rápidas -->
  <div style="display:flex;flex-wrap:wrap;gap:5px;margin-bottom:10px;">
    <button class="ai-quick-btn" onclick="aiQuick('resumen')">📝 Resumen</button>
    <button class="ai-quick-btn" onclick="aiQuick('ensayo')">🎓 Ensayo</button>
    <button class="ai-quick-btn" onclick="aiQuick('introduccion')">📄 Introducción</button>
    <button class="ai-quick-btn" onclick="aiQuick('conclusion')">✅ Conclusión</button>
    <button class="ai-quick-btn" onclick="aiQuick('mejorar')">✨ Mejorar texto</button>
    <button class="ai-quick-btn" onclick="aiQuick('traducir')">🌐 Traducir</button>
    <button class="ai-quick-btn" onclick="aiQuick('nuevo')">📄 Doc nuevo</button>
    <button class="ai-quick-btn" onclick="aiQuick('citas')">📚 Citas APA</button>
  </div>

  <div id="aiMsgs">
   <div class="aib">Pura vida mae, soy Sibö 🦙🇨🇷 Corro con Meta Llama 3.1 en Groq. ¿En qué te ayudo con tu documento?</div>
  </div>
  <div id="aiRow">
   <input type="text" id="aiInp" placeholder="Pregúntame algo mae..." onkeydown="if(event.key==='Enter')sendAI()">
   <button id="aiSend" onclick="sendAI()">➤</button>
  </div>
 </div>
</div>

<!-- MODALES -->
<div class="mo" id="modalPlantillas"><div class="mb"><h3>Plantillas (10)</h3><div class="g2" id="plantillasGrid"></div><div class="mbtns"><button class="btn2" onclick="closeModal('modalPlantillas')">Cerrar</button></div></div></div>
<div class="mo" id="modalWcArte"><div class="mb"><h3>WC Arte</h3><input type="text" class="minput" id="wcArteText" placeholder="Escribe tu texto..."><div id="wcArtePreview" style="font-size:26px;font-weight:900;background:linear-gradient(90deg,#ff6b35,#0084ff,#9b59b6,#27ae60);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;text-align:center;min-height:44px;margin-bottom:12px;letter-spacing:3px;">Vista previa</div><div class="mbtns"><button class="btn1" id="btnInsertWcArte">Insertar</button><button class="btn2" onclick="closeModal('modalWcArte')">Cancelar</button></div></div></div>
<div class="mo" id="modalWcArteGallery"><div class="mb"><h3>WC Arte — Galería CR</h3><p style="font-size:12px;color:#999;text-align:center;margin-bottom:12px;">Toca un diseño y escribe tu texto</p><div id="wcArteGalleryGrid" style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:12px;"></div><div class="mbtns"><button class="btn2" onclick="closeModal('modalWcArteGallery')">Cerrar</button></div></div></div>
<div class="mo" id="modalWcArteLetras"><div class="mb"><h3>WC Arte — Estilos de letras</h3><input type="text" class="minput" id="wcArteLetrasText" placeholder="Escribe tu texto..."><div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:12px;" id="wcArteLetrasGrid"></div><div class="mbtns"><button class="btn2" onclick="closeModal('modalWcArteLetras')">Cerrar</button></div></div></div>
<div class="mo" id="modalColor"><div class="mb"><h3>Color de texto</h3><input type="color" id="colorPicker" value="#0084ff" style="width:100%;height:50px;border:none;cursor:pointer;border-radius:10px;margin-bottom:12px;"><div class="cpal" id="colorPickerPalette" style="margin-bottom:12px;"></div><div class="mbtns"><button class="btn1" id="btnApplyColor">Aplicar color</button><button class="btn2" onclick="closeModal('modalColor')">Cancelar</button></div></div></div>
<div class="mo" id="modalShapes"><div class="mb"><h3>Formas (20)</h3><div class="sgrid" id="shapesGrid"></div><div class="mbtns"><button class="btn2" onclick="closeModal('modalShapes')">Cerrar</button></div></div></div>
<div class="mo" id="modalCharts"><div class="mb"><h3>Gráficos (10)</h3><div class="cgrid" id="chartsGrid"></div><div class="mbtns"><button class="btn2" onclick="closeModal('modalCharts')">Cerrar</button></div></div></div>
<div class="mo" id="modalColumns"><div class="mb"><h3>Columnas de texto</h3><div class="g2" style="margin-bottom:12px;"><button class="tcard" onclick="insertColumns(2)"><span class="ico">▥</span>2 columnas</button><button class="tcard" onclick="insertColumns(3)"><span class="ico">▦</span>3 columnas</button></div><div class="mbtns"><button class="btn2" onclick="closeModal('modalColumns')">Cerrar</button></div></div></div>
<div class="mo" id="modalFontSize"><div class="mb"><h3>Tamaño de fuente</h3><div class="g2" style="margin-bottom:12px;"><button class="tcard" onmousedown="saveSelection()" onclick="restoreSelection();cmd('fontSize','1');closeModal('modalFontSize');showToast('✅')"><span class="ico" style="font-size:10px">A</span>8pt</button><button class="tcard" onmousedown="saveSelection()" onclick="restoreSelection();cmd('fontSize','2');closeModal('modalFontSize');showToast('✅')"><span class="ico" style="font-size:12px">A</span>10pt</button><button class="tcard" onmousedown="saveSelection()" onclick="restoreSelection();cmd('fontSize','3');closeModal('modalFontSize');showToast('✅')"><span class="ico" style="font-size:15px">A</span>12pt</button><button class="tcard" onmousedown="saveSelection()" onclick="restoreSelection();cmd('fontSize','4');closeModal('modalFontSize');showToast('✅')"><span class="ico" style="font-size:18px">A</span>14pt</button><button class="tcard" onmousedown="saveSelection()" onclick="restoreSelection();cmd('fontSize','5');closeModal('modalFontSize');showToast('✅')"><span class="ico" style="font-size:22px">A</span>18pt</button><button class="tcard" onmousedown="saveSelection()" onclick="restoreSelection();cmd('fontSize','6');closeModal('modalFontSize');showToast('✅')"><span class="ico" style="font-size:26px">A</span>24pt</button><button class="tcard" onmousedown="saveSelection()" onclick="restoreSelection();cmd('fontSize','7');closeModal('modalFontSize');showToast('✅')"><span class="ico" style="font-size:32px">A</span>36pt</button></div><div class="mbtns"><button class="btn2" onclick="closeModal('modalFontSize')">Cerrar</button></div></div></div>
<div class="mo" id="modalFontFamily"><div class="mb"><h3>Tipo de letra</h3><div style="display:flex;flex-direction:column;gap:5px;margin-bottom:12px;" id="fontFamilyGrid"></div><div class="mbtns"><button class="btn2" onclick="closeModal('modalFontFamily')">Cerrar</button></div></div></div>
<div class="mo" id="modalLineSpacing"><div class="mb"><h3>Interlineado</h3><div class="g2" style="margin-bottom:12px;"><button class="tcard" onclick="editor.style.lineHeight='1';closeModal('modalLineSpacing');showToast('✅')">Simple (1)</button><button class="tcard" onclick="editor.style.lineHeight='1.15';closeModal('modalLineSpacing');showToast('✅')">1.15</button><button class="tcard" onclick="editor.style.lineHeight='1.5';closeModal('modalLineSpacing');showToast('✅')">1.5</button><button class="tcard" onclick="editor.style.lineHeight='2';closeModal('modalLineSpacing');showToast('✅')">Doble (2)</button><button class="tcard" onclick="editor.style.lineHeight='2.5';closeModal('modalLineSpacing');showToast('✅')">2.5</button><button class="tcard" onclick="editor.style.lineHeight='3';closeModal('modalLineSpacing');showToast('✅')">Triple (3)</button></div><div class="mbtns"><button class="btn2" onclick="closeModal('modalLineSpacing')">Cerrar</button></div></div></div>
<div class="mo" id="modalIVA"><div class="mb"><h3>🧮 Calculadora IVA Costa Rica</h3>
<label style="font-size:12px;color:#666;display:block;margin-bottom:4px">Monto (₡ o $)</label>
<input type="number" class="minput" id="ivaMonto" placeholder="Ej: 50000" inputmode="decimal">
<label style="font-size:12px;color:#666;display:block;margin-bottom:6px">Tasa de IVA</label>
<div class="g2" style="margin-bottom:12px;" id="ivaTasaGrid">
<button class="tcard iva-tasa active" data-tasa="13" onclick="selectIvaTasa(13,this)"><span class="ico">🧾</span>13% General</button>
<button class="tcard iva-tasa" data-tasa="4" onclick="selectIvaTasa(4,this)"><span class="ico">🏨</span>4% Reducida</button>
<button class="tcard iva-tasa" data-tasa="2" onclick="selectIvaTasa(2,this)"><span class="ico">💊</span>2% Medicinas</button>
<button class="tcard iva-tasa" data-tasa="1" onclick="selectIvaTasa(1,this)"><span class="ico">🌽</span>1% Canasta básica</button>
</div>
<div id="ivaResultado" style="background:#f0f7ff;border-radius:10px;padding:14px;margin-bottom:12px;font-size:13px;color:#333;display:none">
<div style="display:flex;justify-content:space-between;margin-bottom:4px"><span>Subtotal:</span><strong id="ivaSubtotalOut">—</strong></div>
<div style="display:flex;justify-content:space-between;margin-bottom:4px"><span id="ivaTasaLabel">IVA (13%):</span><strong id="ivaMontoOut">—</strong></div>
<div style="display:flex;justify-content:space-between;border-top:1px solid #cfe2ff;padding-top:6px;margin-top:4px"><span style="font-weight:700">Total:</span><strong id="ivaTotalOut" style="color:#0084ff">—</strong></div>
</div>
<div class="mbtns">
<button class="btn1" onclick="calcularIVA()">Calcular</button>
<button class="btn2" id="ivaInsertarBtn" onclick="insertarIVAEnDocumento()" style="display:none">Insertar en documento</button>
<button class="btn2" onclick="closeModal('modalIVA')">Cerrar</button>
</div>
</div></div>
<div class="mo" id="modalAPA"><div class="mb"><h3>📚 Generador de Referencias APA 7</h3>
<label style="font-size:12px;color:#666;display:block;margin-bottom:6px">Tipo de fuente</label>
<div class="g2" style="margin-bottom:10px;" id="apaTipoGrid">
<button class="tcard apa-tipo active" data-tipo="libro" onclick="selectApaTipo('libro',this)"><span class="ico">📖</span>Libro</button>
<button class="tcard apa-tipo" data-tipo="articulo" onclick="selectApaTipo('articulo',this)"><span class="ico">📄</span>Artículo</button>
<button class="tcard apa-tipo" data-tipo="web" onclick="selectApaTipo('web',this)"><span class="ico">🌐</span>Página web</button>
<button class="tcard apa-tipo" data-tipo="tesis" onclick="selectApaTipo('tesis',this)"><span class="ico">🎓</span>Tesis</button>
</div>
<input type="text" class="minput" id="apaAutor" placeholder="Autor (Apellido, N.)">
<input type="text" class="minput" id="apaAnio" placeholder="Año (ej: 2024)" inputmode="numeric">
<input type="text" class="minput" id="apaTitulo" placeholder="Título de la obra">
<input type="text" class="minput" id="apaExtra" placeholder="Editorial / Revista / Universidad">
<input type="text" class="minput" id="apaUrl" placeholder="URL (solo si es página web)" style="display:none" id="apaUrlInput">
<div id="apaResultado" style="background:#f0f7ff;border-radius:10px;padding:14px;margin:10px 0;font-size:13px;color:#333;display:none;font-style:italic;line-height:1.5"></div>
<div class="mbtns">
<button class="btn1" onclick="generarReferenciaAPA()">Generar</button>
<button class="btn2" id="apaInsertarBtn" onclick="insertarReferenciaAPA()" style="display:none">Insertar en documento</button>
<button class="btn2" onclick="closeModal('modalAPA')">Cerrar</button>
</div>
</div></div>
<div class="mo" id="modalImagenIA"><div class="mb"><h3>🎨 Generador de imágenes IA</h3>
<p style="font-size:11px;color:#999;text-align:center;margin-bottom:10px">Pollinations · Gratis · Sin límites</p>
<textarea class="minput" id="imgIaPrompt" placeholder="Describe la imagen que quieres generar... ej: paisaje de Costa Rica con volcán al atardecer" rows="3"></textarea>
<div id="imgIaPreviewWrap" style="display:none;text-align:center;margin:12px 0">
<img id="imgIaPreview" style="max-width:100%;border-radius:10px;box-shadow:0 4px 16px rgba(0,0,0,.15)">
</div>
<div id="imgIaLoading" style="display:none;text-align:center;padding:20px;color:#888;font-size:13px">🎨 Generando imagen, un momento...</div>
<div class="mbtns">
<button class="btn1" onclick="generarImagenIA()">Generar</button>
<button class="btn2" id="imgIaInsertarBtn" onclick="insertarImagenIA()" style="display:none">Insertar en documento</button>
<button class="btn2" onclick="closeModal('modalImagenIA')">Cerrar</button>
</div>
</div></div>
<div class="mo" id="modalLiquidacion"><div class="mb"><h3>💼 Liquidación Laboral CR</h3>
<label style="font-size:12px;color:#666;display:block;margin-bottom:4px">Salario mensual (₡)</label>
<input type="number" class="minput" id="liqSalario" placeholder="Ej: 450000" inputmode="decimal">
<label style="font-size:12px;color:#666;display:block;margin-bottom:4px">Fecha de ingreso</label>
<input type="date" class="minput" id="liqFechaIngreso">
<label style="font-size:12px;color:#666;display:block;margin-bottom:4px">Fecha de salida</label>
<input type="date" class="minput" id="liqFechaSalida">
<label style="font-size:12px;color:#666;display:block;margin-bottom:6px">Motivo del cese</label>
<div class="g2" style="margin-bottom:12px;" id="liqMotivoGrid">
<button class="tcard liq-motivo active" data-motivo="injustificado" onclick="selectLiqMotivo('injustificado',this)"><span class="ico">⚖️</span>Despido sin causa</button>
<button class="tcard liq-motivo" data-motivo="justificado" onclick="selectLiqMotivo('justificado',this)"><span class="ico">🚫</span>Despido con causa</button>
<button class="tcard liq-motivo" data-motivo="renuncia" onclick="selectLiqMotivo('renuncia',this)"><span class="ico">📤</span>Renuncia voluntaria</button>
</div>
<div id="liqResultado" style="background:#f0f7ff;border-radius:10px;padding:14px;margin-bottom:12px;font-size:13px;color:#333;display:none"></div>
<div class="mbtns">
<button class="btn1" onclick="calcularLiquidacion()">Calcular</button>
<button class="btn2" id="liqInsertarBtn" onclick="insertarLiquidacion()" style="display:none">Insertar en documento</button>
<button class="btn2" onclick="closeModal('modalLiquidacion')">Cerrar</button>
</div>
</div></div>
<div class="mo" id="modalEmailAsistente"><div class="mb"><h3>📧 Respuestas de correo</h3>
<label style="font-size:12px;color:#666;display:block;margin-bottom:4px">Correo recibido (pega el texto o resume de qué trata)</label>
<textarea class="minput" id="emailRecibido" placeholder="Ej: El cliente pregunta si podemos extender el plazo de entrega..." rows="3"></textarea>
<label style="font-size:12px;color:#666;display:block;margin-bottom:6px">Tono de la respuesta</label>
<div class="g2" style="margin-bottom:10px;" id="emailTonoGrid">
<button class="tcard email-tono active" data-tono="formal" onclick="selectEmailTono('formal',this)"><span class="ico">🎩</span>Formal</button>
<button class="tcard email-tono" data-tono="cordial" onclick="selectEmailTono('cordial',this)"><span class="ico">🤝</span>Cordial</button>
<button class="tcard email-tono" data-tono="firme" onclick="selectEmailTono('firme',this)"><span class="ico">📌</span>Firme</button>
<button class="tcard email-tono" data-tono="disculpa" onclick="selectEmailTono('disculpa',this)"><span class="ico">🙏</span>Disculpa</button>
</div>
<textarea class="minput" id="emailIntencion" placeholder="¿Qué querés responder o lograr con esta respuesta? (opcional, ayuda a Sibö)" rows="2"></textarea>
<div class="mbtns">
<button class="btn1" onclick="generarRespuestaCorreo()">Generar con Sibö</button>
<button class="btn2" onclick="closeModal('modalEmailAsistente')">Cerrar</button>
</div>
</div></div>
<div class="mo" id="modalQR"><div class="mb"><h3>📱 Código QR</h3>
<input type="text" class="minput" id="qrTexto" placeholder="URL o texto a codificar... ej: https://wc-corporate.cr">
<div id="qrPreviewWrap" style="display:none;text-align:center;margin:14px 0">
<img id="qrPreview" style="border-radius:8px;border:1px solid #eee;padding:8px;background:#fff">
</div>
<div class="mbtns">
<button class="btn1" onclick="generarQR()">Generar</button>
<button class="btn2" id="qrInsertarBtn" onclick="insertarQR()" style="display:none">Insertar en documento</button>
<button class="btn2" onclick="closeModal('modalQR')">Cerrar</button>
</div>
</div></div>
<div class="mo" id="modalOrgChart"><div class="mb"><h3>🏢 Organigrama</h3>
<p style="font-size:11px;color:#999;margin-bottom:8px">Una persona/cargo por línea. Usa una tabulación o "-" al inicio para indicar nivel inferior.</p>
<textarea class="minput" id="orgTexto" placeholder="Gerente General
- Gerente de Ventas
- Gerente de Finanzas
-- Contador
-- Tesorero" rows="6"></textarea>
<div class="mbtns">
<button class="btn1" onclick="generarOrgChart()">Insertar organigrama</button>
<button class="btn2" onclick="closeModal('modalOrgChart')">Cerrar</button>
</div>
</div></div>
<div class="mo" id="modalRentaCCSS"><div class="mb"><h3>🏛️ Renta e Impuesto al Salario CR 2026</h3>
<label style="font-size:12px;color:#666;display:block;margin-bottom:4px">Salario bruto mensual (₡)</label>
<input type="number" class="minput" id="rentaSalario" placeholder="Ej: 1500000" inputmode="decimal">
<label style="font-size:12px;color:#666;display:block;margin-bottom:6px">Créditos fiscales</label>
<div style="display:flex;gap:10px;margin-bottom:12px;align-items:center">
<label style="font-size:13px;flex:1">👶 Hijos dependientes: <input type="number" id="rentaHijos" value="0" min="0" style="width:50px;padding:4px;border:1px solid #ddd;border-radius:6px;margin-left:6px"></label>
</div>
<div style="display:flex;gap:10px;margin-bottom:12px;align-items:center">
<label style="font-size:13px"><input type="checkbox" id="rentaConyuge"> 💍 Tiene crédito por cónyuge sin ingresos</label>
</div>
<div id="rentaResultado" style="background:#f0f7ff;border-radius:10px;padding:14px;margin-bottom:12px;font-size:13px;color:#333;display:none"></div>
<div class="mbtns">
<button class="btn1" onclick="calcularRentaCCSS()">Calcular</button>
<button class="btn2" id="rentaInsertarBtn" onclick="insertarRentaCCSS()" style="display:none">Insertar en documento</button>
<button class="btn2" onclick="closeModal('modalRentaCCSS')">Cerrar</button>
</div>
</div></div>
<div class="mo" id="modalTraductorIndigena"><div class="mb"><h3>🌿 Traductor lenguas indígenas CR</h3>
<div class="g2" style="margin-bottom:10px" id="tradDireccionGrid">
<button class="tcard trad-direccion active" data-dir="es" onclick="selectTradDireccion('es',this)"><span class="ico">🇨🇷</span>Español → Lengua</button>
<button class="tcard trad-direccion" data-dir="indigena" onclick="selectTradDireccion('indigena',this)"><span class="ico">🌿</span>Lengua → Español</button>
</div>
<select class="minput" id="tradLenguaOrigen" style="display:none">
<option value="Bribri">Bribri</option>
<option value="Cabécar">Cabécar</option>
<option value="Maleku">Maleku</option>
<option value="Ngäbe">Ngäbe</option>
<option value="Boruca">Boruca</option>
<option value="Térraba">Térraba</option>
</select>
<input type="text" class="minput" id="tradPalabra" placeholder="Escribe una palabra en español..." onkeyup="if(event.key==='Enter')buscarTraduccionIndigena()">
<div id="tradResultado" style="background:#f0fff4;border-radius:10px;padding:14px;margin-bottom:12px;font-size:14px;color:#333;display:none"></div>
<div class="mbtns">
<button class="btn1" onclick="buscarTraduccionIndigena()">Buscar</button>
<button class="btn2" id="tradInsertarBtn" onclick="insertarTraduccionIndigena()" style="display:none">Insertar en documento</button>
<button class="btn2" onclick="closeModal('modalTraductorIndigena')">Cerrar</button>
</div>
</div></div>
<div class="mo" id="modalHorasExtra"><div class="mb"><h3>⏱️ Calculadora de horas extra CR</h3>
<label style="font-size:12px;color:#666;display:block;margin-bottom:4px">Salario bruto mensual (₡)</label>
<input type="number" class="minput" id="heSalario" placeholder="Ej: 450000" inputmode="decimal">
<label style="font-size:12px;color:#666;display:block;margin-bottom:6px">Tipo de jornada</label>
<div class="g2" style="margin-bottom:10px" id="heJornadaGrid">
<button class="tcard he-jornada active" data-jornada="208" onclick="selectHeJornada('208',this)"><span class="ico">☀️</span>Diurna</button>
<button class="tcard he-jornada" data-jornada="180" onclick="selectHeJornada('180',this)"><span class="ico">🌗</span>Mixta</button>
<button class="tcard he-jornada" data-jornada="156" onclick="selectHeJornada('156',this)"><span class="ico">🌙</span>Nocturna</button>
</div>
<label style="font-size:12px;color:#666;display:block;margin-bottom:4px">Cantidad de horas extra</label>
<input type="number" class="minput" id="heHoras" placeholder="Ej: 5" inputmode="decimal">
<label style="font-size:12px;color:#666;display:block;margin-bottom:6px">Tipo de día</label>
<div class="g2" style="margin-bottom:12px" id="heTipoDiaGrid">
<button class="tcard he-tipodia active" data-mult="1.5" onclick="selectHeTipoDia('1.5',this)"><span class="ico">📅</span>Día ordinario (×1.5)</button>
<button class="tcard he-tipodia" data-mult="2" onclick="selectHeTipoDia('2',this)"><span class="ico">🎉</span>Descanso/feriado (×2)</button>
</div>
<div id="heResultado" style="background:#f0f7ff;border-radius:10px;padding:14px;margin-bottom:12px;font-size:13px;color:#333;display:none"></div>
<div class="mbtns">
<button class="btn1" onclick="calcularHorasExtra()">Calcular</button>
<button class="btn2" id="heInsertarBtn" onclick="insertarHorasExtra()" style="display:none">Insertar en documento</button>
<button class="btn2" onclick="closeModal('modalHorasExtra')">Cerrar</button>
</div>
</div></div>
<div class="mo" id="modalConstanciaSalarial"><div class="mb"><h3>📃 Constancia salarial CR</h3>
<input type="text" class="minput" id="csNombre" placeholder="Nombre completo del trabajador">
<input type="text" class="minput" id="csCedula" placeholder="Cédula del trabajador">
<input type="text" class="minput" id="csPuesto" placeholder="Puesto que ocupa">
<input type="number" class="minput" id="csSalario" placeholder="Salario bruto mensual (₡)" inputmode="decimal">
<input type="text" class="minput" id="csEmpresa" placeholder="Nombre de la empresa">
<input type="text" class="minput" id="csFechaIngreso" placeholder="Fecha de ingreso (ej: 15 de marzo de 2022)">
<div class="mbtns">
<button class="btn1" onclick="generarConstanciaSalarial()">Generar constancia</button>
<button class="btn2" onclick="closeModal('modalConstanciaSalarial')">Cerrar</button>
</div>
</div></div>
<div class="mo" id="modalOficioDGT"><div class="mb"><h3>📨 Oficio DGT / Hacienda</h3>
<input type="text" class="minput" id="odNombre" placeholder="Nombre o razón social del solicitante">
<input type="text" class="minput" id="odCedula" placeholder="Cédula física o jurídica">
<select class="minput" id="odTipoTramite">
<option value="">Selecciona el tipo de gestión...</option>
<option value="Solicitud de devolución de impuestos">Solicitud de devolución de impuestos</option>
<option value="Solicitud de exoneración">Solicitud de exoneración</option>
<option value="Aclaración de declaración">Aclaración de declaración</option>
<option value="Solicitud de fraccionamiento de pago">Solicitud de fraccionamiento de pago</option>
<option value="Respuesta a requerimiento de información">Respuesta a requerimiento de información</option>
<option value="Otro">Otro (especificar abajo)</option>
</select>
<textarea class="minput" id="odDetalle" placeholder="Detalle de la gestión o motivo del oficio..." rows="3"></textarea>
<div class="mbtns">
<button class="btn1" onclick="generarOficioDGT()">Generar oficio</button>
<button class="btn2" onclick="closeModal('modalOficioDGT')">Cerrar</button>
</div>
</div></div>
<div class="mo" id="modalFlashcards"><div class="mb"><h3>🎴 Practicar vocabulario CR</h3>
<select class="minput" id="fcLenguaSelect" onchange="reiniciarFlashcards()">
<option value="Bribri">Bribri</option>
<option value="Cabécar">Cabécar</option>
<option value="Maleku">Maleku</option>
<option value="Ngäbe">Ngäbe</option>
<option value="Boruca">Boruca</option>
<option value="Térraba">Térraba</option>
</select>
<div id="fcProgreso" style="text-align:center;font-size:12px;color:#999;margin-bottom:10px">Cargando...</div>
<div id="fcCardWrap" style="background:linear-gradient(135deg,#0084ff,#27ae60);border-radius:16px;padding:36px 20px;text-align:center;margin-bottom:14px;min-height:120px;display:flex;align-items:center;justify-content:center;cursor:pointer" onclick="voltearFlashcard()">
<div id="fcCardTexto" style="color:#fff;font-size:22px;font-weight:700">Cargando...</div>
</div>
<p style="text-align:center;font-size:12px;color:#999;margin-bottom:14px">Toca la tarjeta para ver la traducción</p>
<div class="mbtns">
<button class="btn2" onclick="flashcardAnterior()">⬅ Anterior</button>
<button class="btn1" onclick="flashcardSiguiente()">Siguiente ➡</button>
</div>
<div class="mbtns">
<button class="btn2" onclick="closeModal('modalFlashcards')">Cerrar</button>
</div>
</div></div>
<div class="mo" id="modalComentarios"><div class="mb"><h3>💬 Comentarios</h3>
<div id="comentariosLista" style="margin-bottom:12px;font-size:13px;color:#333;max-height:240px;overflow-y:auto"></div>
<textarea class="minput" id="comentarioTexto" placeholder="Escribe tu comentario sobre el texto seleccionado o el documento..." rows="2"></textarea>
<div class="mbtns">
<button class="btn1" onclick="agregarComentario()">💬 Agregar comentario</button>
<button class="btn2" onclick="closeModal('modalComentarios')">Cerrar</button>
</div>
</div></div>
<div class="mo" id="modalVersiones"><div class="mb"><h3>🕐 Historial de versiones</h3>
<div id="versionesLista" style="margin-bottom:12px;font-size:13px;color:#333;max-height:280px;overflow-y:auto"></div>
<div class="mbtns">
<button class="btn1" onclick="guardarVersionActual()">💾 Guardar versión actual</button>
<button class="btn2" onclick="closeModal('modalVersiones')">Cerrar</button>
</div>
</div></div>
<div class="mo" id="modalBookmarks"><div class="mb"><h3>📌 Marcadores y referencias</h3>
<div id="bookmarksLista" style="margin-bottom:12px;font-size:13px;color:#333;max-height:240px;overflow-y:auto"></div>
<input type="text" class="minput" id="bookmarkNombre" placeholder="Nombre del marcador (ej: Sección de precios)">
<div class="mbtns">
<button class="btn1" onclick="agregarMarcador()">📌 Agregar marcador aquí</button>
<button class="btn2" onclick="closeModal('modalBookmarks')">Cerrar</button>
</div>
</div></div>
<div class="mo" id="modalEquation"><div class="mb"><h3>Editor de ecuaciones</h3><div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-bottom:12px;" id="equationGrid"></div><textarea class="minput" id="customEquation" placeholder="Escribe tu ecuación: E = mc²" rows="2"></textarea><div class="mbtns"><button class="btn1" onclick="insertCustomEquation()">Insertar</button><button class="btn2" onclick="closeModal('modalEquation')">Cerrar</button></div></div></div>
<div class="mo" id="modalSymbol"><div class="mb"><h3>Símbolos especiales</h3><div style="display:grid;grid-template-columns:repeat(8,1fr);gap:6px;margin-bottom:12px;" id="symbolGrid"></div><div class="mbtns"><button class="btn2" onclick="closeModal('modalSymbol')">Cerrar</button></div></div></div>
<div class="mo" id="modalPortapapeles"><div class="mb"><h3>Portapapeles</h3><p style="font-size:12px;color:#888;margin-bottom:12px;">Toca un elemento para pegarlo.</p><div id="clipboardList"></div><div class="mbtns"><button class="btn2" onclick="clipboardHistory=[];renderClipboard();showToast('Limpiado')">Limpiar</button><button class="btn2" onclick="closeModal('modalPortapapeles')">Cerrar</button></div></div></div>
<div class="mo" id="modalBackground"><div class="mb"><h3>Fondo de página</h3><div style="display:grid;grid-template-columns:repeat(6,1fr);gap:6px;margin-bottom:12px;" id="bgColorGrid"></div><div style="display:flex;align-items:center;gap:8px;margin-bottom:12px;"><label style="font-size:12px;color:#666;">Personalizado:</label><input type="color" id="bgColorCustom" value="#ffffff" style="width:40px;height:28px;border:none;border-radius:6px;cursor:pointer;"><button class="fabbtn" onclick="document.querySelector('.content').style.background=document.getElementById('bgColorCustom').value;editor.style.background=document.getElementById('bgColorCustom').value;closeModal('modalBackground');showToast('Fondo aplicado 🎨')">Aplicar</button></div><div class="mbtns"><button class="btn2" onclick="document.querySelector('.content').style.background='#fff';editor.style.background='#fff';closeModal('modalBackground')">Quitar fondo</button></div></div></div>

<input type="file" id="fileInputImage" accept="image/*" style="display:none">
<input type="file" id="fileInputVideo" accept="video/*" style="display:none">
<input type="file" id="fileInputAny" style="display:none">

<!-- MODAL EXPORTAR -->
<div id="exportOverlay">
  <div id="exportBox">
    <div class="exp-title">Exportar documento</div>
    <div class="exp-item" onclick="exportAs('pdf')"><div class="exp-left"><div class="exp-icon">📄</div><div><div class="exp-name">PDF</div><div class="exp-desc">Documento portátil, listo para imprimir</div></div></div></div>
    <div class="exp-item" onclick="exportAs('word')"><div class="exp-left"><div class="exp-icon">📝</div><div><div class="exp-name">Documento DOC</div><div class="exp-desc">Documento de texto enriquecido (.doc)</div></div></div></div>
    <div class="exp-item" onclick="exportAs('rtf')"><div class="exp-left"><div class="exp-icon">📋</div><div><div class="exp-name">RTF</div><div class="exp-desc">Formato de texto enriquecido</div></div></div></div>
    <div class="exp-item" onclick="exportAs('txt')"><div class="exp-left"><div class="exp-icon">📃</div><div><div class="exp-name">Texto sin formato</div><div class="exp-desc">Solo texto plano (.txt)</div></div></div></div>
    <div class="exp-item" onclick="exportAs('html')"><div class="exp-left"><div class="exp-icon">🌐</div><div><div class="exp-name">HTML</div><div class="exp-desc">Página web con formato completo</div></div></div></div>
    <div class="exp-item" onclick="exportAs('odt')"><div class="exp-left"><div class="exp-icon">📂</div><div><div class="exp-name">ODT</div><div class="exp-desc">Documento de texto abierto (.odt)</div></div></div></div>
    <div class="exp-item" onclick="exportAs('epub')"><div class="exp-left"><div class="exp-icon">📚</div><div><div class="exp-name">EPUB</div><div class="exp-desc">Libro digital para eReaders</div></div></div></div>
    <button class="exp-cancel" onclick="closeExport()">Cancelar</button>
  </div>
</div>

<!-- diccionario cargado desde GitHub Pages -->
<script>

/* ============================================================
   MÓDULO: Comunidad + Diccionario — Lenguas Indígenas CR
   ============================================================ */
const wcDatabase = {
  bribri:  {agua:"aba",fuego:"chä",tierra:"itö",casa:"yö"},
  cabecar: {agua:"yök",fuego:"sëk",tierra:"duö",casa:"wák"},
  maleku:  {agua:"toku",fuego:"kira",tierra:"naku",casa:"jiri"},
  boruca:  {agua:"unk",fuego:"tö",tierra:"dru",casa:"kro"},
  ngabe:   {agua:"dru",fuego:"kira",tierra:"noke",casa:"bri"},
  huetar:  {agua:"desconocido",fuego:"desconocido",tierra:"desconocido",casa:"desconocido"},
  brunca:  {agua:"unk",fuego:"tö",tierra:"dru",casa:"kro",hola:"danzö",gracias:"shíi"}
};
const nuevasPalabras = [];

function buscarEnCR(palabra) {
  const resultados = [];
  for (let lengua in wcDatabase) {
    if (wcDatabase[lengua][palabra.toLowerCase()]) {
      resultados.push({lengua, traduccion: wcDatabase[lengua][palabra.toLowerCase()]});
    }
  }
  return resultados.length ? resultados : "No encontrado en lenguas de Costa Rica";
}

function buscarSeleccion() {
  const sel = window.getSelection().toString().trim();
  if (!sel) { showToast('Selecciona una palabra primero'); return; }
  const res = buscarEnCR(sel);
  const list = document.getElementById('popupResults');
  list.innerHTML = '';
  if (typeof res === 'string') {
    list.innerHTML = \`<li style="color:#999">\${res}</li>\`;
  } else {
    res.forEach(r => { list.innerHTML += \`<li><b>\${r.lengua}:</b> \${r.traduccion}</li>\`; });
  }
  actualizarStatusbar(sel.length, typeof res === 'string' ? 0 : res.length);
  document.getElementById('popup').classList.remove('hidden');
}

function cerrarPopup() { document.getElementById('popup').classList.add('hidden'); }

function escucharIdioma() {
  const SRec = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SRec) { showToast('Reconocimiento de voz no disponible'); return; }
  const rec = new SRec();
  rec.lang = 'es-CR';
  rec.onresult = (e) => {
    const palabra = e.results[0][0].transcript.trim().toLowerCase();
    registrarNuevaPalabra('bribri', palabra);
    showToast(\`"\${palabra}" añadida como pendiente 🌿\`);
  };
  rec.onerror = () => showToast('Error al escuchar. Intenta de nuevo.');
  rec.start();
  showToast('Escuchando... habla ahora 🎤');
}

function registrarNuevaPalabra(lang, palabra) {
  nuevasPalabras.push({lang, palabra, estado:'pendiente'});
  renderCommunityPanel();
  actualizarStatusbar();
}

function validarPalabra(index) {
  const item = nuevasPalabras[index];
  wcDatabase[item.lang][item.palabra] = item.palabra;
  item.estado = 'validado';
  renderCommunityPanel(); actualizarStatusbar();
  showToast('Palabra validada ✅');
}

function editarPalabra(index) {
  const nueva = prompt('Ingrese la traducción correcta:');
  if (nueva) {
    const item = nuevasPalabras[index];
    wcDatabase[item.lang][item.palabra] = nueva;
    item.estado = 'corregido';
    renderCommunityPanel(); actualizarStatusbar();
    showToast('Palabra corregida ✏️');
  }
}

function renderCommunityPanel() {
  const list = document.getElementById('communityList');
  if (!nuevasPalabras.length) {
    list.innerHTML = '<li style="color:#aaa;font-size:12px;text-align:center;padding:8px;border:none;background:none">Sin palabras pendientes</li>';
    return;
  }
  list.innerHTML = '';
  nuevasPalabras.forEach((item, i) => {
    const color = item.estado==='validado'?'#d4edda':item.estado==='corregido'?'#fff3cd':'#fde8e8';
    list.innerHTML += \`<li><div style="margin-bottom:4px"><b>\${item.lang}:</b> <em>\${item.palabra}</em></div>
      <span style="font-size:10px;background:\${color};border-radius:4px;padding:1px 7px">\${item.estado}</span>
      <div style="margin-top:6px;display:flex;gap:4px">
        <button onclick="validarPalabra(\${i})" style="font-size:11px;padding:2px 8px;border:1px solid #27ae60;border-radius:4px;background:#d4edda;cursor:pointer">✔ Validar</button>
        <button onclick="editarPalabra(\${i})" style="font-size:11px;padding:2px 8px;border:1px solid #f39c12;border-radius:4px;background:#fff3cd;cursor:pointer">✏ Editar</button>
      </div></li>\`;
  });
}

function contarEstado(e) { return nuevasPalabras.filter(p => p.estado===e).length; }

function actualizarStatusbar(palabras=0, lenguas=0) {
  const sb = document.getElementById('statusbar');
  if (sb) sb.textContent = \`Listo | Palabras: \${palabras} | Lenguas encontradas: \${lenguas} | Pendientes: \${contarEstado('pendiente')} | Validadas: \${contarEstado('validado')} | Corregidas: \${contarEstado('corregido')}\`;
}

function toggleCommunity() {
  const panel = document.getElementById('communityPanel');
  const fab = document.getElementById('fabPanel');
  fab.classList.remove('show');
  panel.classList.toggle('show');
}

/* Diccionario reducido (muestra de entradas clave) */
var DICT_EMBEBIDO = {"version":"v24","total":2515,"cols":["es","bribri","cabecar","maleku","boruca","ngabe","terraba"],"data":[["Hola","Shkëkë","Ká bë́rë","Ma lha","Shka / Danzö","Ngüe",""],["Adiós","Ëk","Yë́","Yü","Bë / Bë dö","Döi","ta tóeh"],["Gracias","Ëyö","Ká","Shíi","Shíi","Jä","shkë"],["Buenos días","Ká bë́rë","Ká bë́rë","Ma lha maráma","Danzö tö","—",""],["Buenas tardes","Shke","Yë bë","Ma lha","Shka drö","—",""],["Buenas noches","Ëyö sula","Yë sula","Ma lha sula","Danzö sula","—",""],["Por favor","Ëyö bë","Ká bë","Shíi la","—","—",""],["De nada","Ëyö","Ká yë","Shíi nöla","Shíi tö","—",""],["Perdón","Ëk bë","Yë bë","—","—","—",""],["Sí","Ë","Ë","Ë","Ë","Ë","ëë"],["No","Kë","Kë","Kë","Kë","Kë","ñ"],["¿Cómo estás?","Dör bë","Yë bë","Ma lha","Tö bë","—",""],["Bien","Yöbë","Yöbë","Yöla","Yöb","—",""],["Mal","Kë yöbë","Kë yöbë","Kë yöla","Kë yöb","—",""],["Bienvenido","Ëyö bë yö","Ká bë wák","Shíi nori jiri","Shíi tö kro","—",""],["Agua","Aba","Yök","Toku","di","Dru","dï"],["Fuego","Chä","Sëk","Kira","chicrah","Kira","kong"],["Tierra","Itö","Duö","Naku","Dru","Noke","no"],["Aire","Yëk","Yëk","Yëku","Yök","Yëa","cong mong"],["Lluvia","Ükö","Ükö","Nöku","Ëkö","Nüa","shunió"],["Viento","Yëk","Yëk","Yëku","Yök","Yëa",""],["Sol","Iriria","Diá","Tâu","Brún","Krâ","ëk"],["Luna","Sula","Sö","Ulë","Dör","Krün","sii"],["Estrella","Sula kö","Sö kö","Ulë nöri","horumra","Krün ngwa","lucero"],["Cielo","Sibö","Sibö","Tâurë","Bü","Krâ","comong copevógo"],["Nube","Yëk kö","Ükö kö","Nöku lha","—","Nüa kra",""],["Rayo","Chä yëk","Sëk yëk","Kira nöku","Tö yök","Kira yëa",""],["Trueno","Yëk chä","Yëk sëk","Nöku kira","—","—",""],["Mar","Ditsö","Datë","Tâna","Drö","Dre","dorung"],["Río","Diá","Diá","Tana","Tö","Dru",""],["Lago","Diá yö","Diá wák","Tana jiri","—","Dru bri",""],["Montaña","Tsirú","Tsirú","Nöla","Krö","Ngo",""],["Bosque","Wö tsö","Wë tsö","Nöri nöla","Drö tsö","Bare ngo",""],["Árbol","Wö","Wë","Nöri","Drö","Bare",""],["Flor","Wö kë","Wë kë","Nöri köri","Drö köri","Bare kra","ip irón"],["Hoja","Wö tsö","Wë tsö","Nöri lha","—","Bare lha","cróga"],["Raíz","Wö aba","Wë yök","Nöri toku","—","Bare dru",""],["Fruta","Wö ukö","Wë ukö","Nöri naka","crang vah","Bare ngüa",""],["Semilla","Wö kë","Wë kë","Nöri köri","—","Bare kra",""],["Piedra","Kë","Kë","Köri","Kö","Kra",""],["Arena","Kë aba","Kë yök","Köri toku","up","Kra dru","ará"],["Barro","Itö aba","Duö yök","Naku toku","Dru unk","Noke dru","querúng"],["Volcán","Tsirú chä","Tsirú sëk","Nöla kira","Krö tö","Ngo kira",""],["Valle","Tsirú itö","Tsirú duö","Nöla naku","—","Ngo noke",""],["Playa","Ditsö itö","Datë duö","Tâna naku","Drö dru","Dre noke",""],["Cueva","Kë yö","Kë wák","Köri jiri","Kö kro","Kra bri",""],["Cascada","Aba tsirú","Yök tsirú","Toku nöla","Unk krö","Dru ngo","iguéng"],["Isla","Ditsö yö","Datë wák","Tâna jiri","—","Dre bri","isla"],["Jaguar","Tsirú kö","Tsirú kö","—","—","Ngwa",""],["Puma","Tsirú yëk","Tsirú yëk","—","—","Ngwa yëa",""],["Danta","Tsirú diá","Tsirú diá","—","nai","Ngwa dru","so"],["Mono","Bë tsö","Bë tsö","—","—","Ngwä tsö",""],["Serpiente","Ditsö","Datë","Nöku","Drö","Dre",""],["Pájaro","Sö","Sö","Sëku","Sök","Soa",""],["Lapa roja","Sö chä","Sö sëk","Sëku kira","—","Soa kira",""],["Quetzal","Sö kë","Sö kë","Sëku köri","—","Soa kra",""],["Tucán","Sö wö","Sö wë","Sëku nöri","—","Soa bare",""],["Colibrí","Sö iriria","Sö diá","Sëku tâu","brung tzús","Soa krâ","turéh voh"],["Pez","Diá","Diá","Tana","Tö","Dru",""],["Tortuga","Kë tsö","Kë tsö","Köri nöri","—","Kra ngwa",""],["Cocodrilo","Diá tsö","Diá tsö","Tana nöri","—","Dru tsö",""],["Rana","Aba tsö","Yök tsö","Toku nöri","—","Dru tsö",""],["Mariposa","Sö kë","Sö kë","Sëku köri","—","Soa kra","tíng"],["Abeja","Wö sö","Wë sö","Nöri sëku","but criéh","Bare soa","or"],["Hormiga","Kë sö","Kë sö","Köri sëku","—","Kra soa","song voh"],["Perro","Tsirú bë","Tsirú bë","Nöri nori","—","Ngwa migä",""],["Gato","Tsirú yë","Tsirú yë","Nöri nula","bis","Ngwa micha","nítchi"],["Venado","Tsirú wö","Tsirú wë","—","—","Ngwa bare",""],["Murciélago","Sö sula","Sö sula","Sëku ulë","—","Soa krün",""],["Araña","Kë bë","Kë bë","Köri nori","ájque","Kra migä","diéh"],["Iguana","Kë diá","Kë diá","Köri tana","—","Kra dru","fuong"],["Loro","Sö kö","Sö kö","Sëku köri","—","Soa kra","loro"],["Águila","Sö körö","Sö körö","Sëku köra","su","Soa ngora",""],["Búho","Sö sula","Sö sula","Sëku ulë","cúj que","Soa krün",""],["Delfín","Diá yöbë","Diá yöbë","Tana yöla","—","Dru yoa",""],["Ballena","Diá körö","Diá körö","Tana köra","dibí","Dru ngora","ballena"],["Tiburón","Diá kö","Diá kö","Tana kira","—","Dru ngwa",""],["Cabeza","Bë kö","Bë kö","Nori köri","sagrá","Migä kra","(bor) cogo"],["Cara","Bë tsö","Bë tsö","Nori nöri","ong","Migä tsö","rimeva"],["Ojo","Bë iriria","Bë diá","Nori tâu","—","Migä krâ",""],["Nariz","Bë yëk","Bë yëk","Nori yëku","—","Migä yëa",""],["Boca","Bë ukö","Bë ukö","Nori naka","—","Migä ngüa",""],["Oído","Bë sö","Bë sö","Nori sëku","—","Migä soa",""],["Mano","Bë kë","Bë kë","Nori köri","—","Migä kra","orcvo"],["Pie","Bë itö","Bë duö","Nori naku","—","Migä noke",""],["Corazón","Síniri","Síniri","Nöchi","Chö","Ngü","(bor) furú"],["Sangre","Bë chä","Bë sëk","Nori kira","—","Migä kira",""],["Cabello","Bë wö","Bë wë","Nori nöri","chijt ca","Migä bare","cóng so"],["Diente","Bë kë","Bë kë","Nori köri","casa","Migä kra","(bor) cogvó"],["Lengua","Bë ditsö","Bë datë","Nori tana","—","Migä dre","quercvó"],["Brazo","Bë wö","Bë wë","Nori nöri","ba yuréh","Migä bare","(bor) bróguedoh"],["Pierna","Bë itö","Bë duö","Nori naku","—","Migä noke",""],["Pecho","Bë aba","Bë yök","Nori toku","—","Migä dru",""],["Estómago","Bë ukö","Bë ukö","Nori naka","—","Migä ngüa",""],["Rodilla","Bë itö kö","Bë duö kö","Nori naku köri","—","Migä noke kra",""],["Hombro","Bë wö kö","Bë wë kö","Nori nöri köri","—","Migä bare kra",""],["Cuello","Bë kö aba","Bë kö yök","Nori köri toku","cuello","Migä kra dru","cuello"],["Cerebro","Bë kö iriria","Bë kö diá","Nori köri tâu","—","Migä kra krâ",""],["Piel","Bë tsö","Bë tsö","Nori nöri","—","Migä tsö",""],["Niño","Kë","Rë","Ichi","Chö","Ngwä","sõ"],["Niña","Kë yë","Rë yë","Ichi nula","Chö ën","Ngwä micha",""],["Mujer","Yë","Yë","Nula","Ën","Micha","shko"],["Hombre","Bë","Bë","Nori","Brö","Migä","shkílu"],["Madre","Në","Në","Nöchi","Nö","Nan",""],["Padre","Bë","Bë","Nori","Bö","Bab",""],["Hijo","Kë bë","Rë bë","Ichi nori","Chö brö","Ngwä migä",""],["Hija","Kë yë","Rë yë","Ichi nula","Chö ën","Ngwä micha",""],["Hermano","Bë tsö","Bë tsö","Nori tsö","—","Migä tsö",""],["Hermana","Yë tsö","Yë tsö","Nula tsö","—","Micha tsö",""],["Abuelo","Bë kö","Bë kö","Nori köri","Abuelo","Migä kra","Abuelo, bogún"],["Abuela","Yë kö","Yë kö","Nula köri","—","Micha kra",""],["Familia","Tsö","Tsö","Nöla","Tsö","Ngwa",""],["Amigo","Bë yöbë","Bë yöbë","Nori yöla","—","Migä yoa",""],["Esposo","Bë yë","Bë yë","Nori nula","at cong át","Migä micha",""],["Esposa","Yë bë","Yë bë","Nula nori","adra mat","Micha migä",""],["Bebé","Kë aba","Rë yök","Ichi toku","Chö unk","Ngwä dru",""],["Anciano","Bë kö kö","Bë kö kö","Nori köri","—","Migä kra",""],["Joven","Kë yöbë","Rë yöbë","Ichi yöla","—","Ngwä yoa",""],["Comunidad","Tsö yö","Tsö wák","Nöla jiri","Tsö kro","Ngwa bri",""],["Pueblo","Tsö yö","Tsö wák","Nöla jiri","Tsö kro","Ngwa bri",""],["Cacique","Bë kö tsö","Bë kö tsö","Nori köri kira","aj chíg va","Migä kra ngwa","quéh"],["Chamán","Bë sö kö","Bë sö kö","Nori sëku köri","—","Migä soa kra",""],["Casa","Yö","Wák","Jiri","uh","Bri","u"],["Puerta","Yö bë","Wák bë","Jiri nori","Kro brö","Bri migä",""],["Ventana","Yö iriria","Wák diá","Jiri tâu","—","Bri krâ",""],["Cocina","Yö chä","Wák sëk","Jiri kira","Kro tö","Bri kira",""],["Techo","Yö kö","Wák kö","Jiri köri","—","Bri kra",""],["Cama","Yö tsö","Wák tsö","Jiri nöri","antáh","Bri bare","ión ta búcruh"],["Mesa","Yö kë","Wák kë","Jiri köri","—","Bri kra","mesa"],["Hamaca","Yö tsö","Wák tsö","Jiri nöri","—","Bri bare",""],["Comida","Ukö","Ukö","Naka","Kë","Ngüa",""],["Maíz","Ëkö","Ëkö","Ëku","Ëkö","Ngwa","do"],["Yuca","Itö ukö","Duö ukö","Naku naka","—","Noke ngüa",""],["Plátano","Wö ukö","Wë ukö","Nöri naka","—","Bare ngüa",""],["Carne","Tsirú ukö","Tsirú ukö","Nöri naka","Tsö kë","Ngwa ngüa","deri"],["Pescado","Diá ukö","Diá ukö","Tana naka","Tö kë","Dru ngüa",""],["Sal","Kë ukö","Kë ukö","Köri naka","—","Kra ngüa",""],["Miel","Wö sö ukö","Wë sö ukö","Nöri sëku naka","—","Bare soa ngüa",""],["Chicha","Aba tsö","Yök tsö","Toku nöri","—","Dru tsö",""],["Cacao","Wö ukö kö","Wë ukö kö","Nöri naka köri","—","Bare ngüa kra",""],["Frijol","Kë ukö","Kë ukö","Köri naka","suép","Kra ngüa","ta tzo moyóne"],["Arroz","Ëkö kë","Ëkö kë","Ëku köri","—","Ngwa kra",""],["Leche","Tsirú aba","Tsirú yök","Nöri toku","—","Ngwa dru","leche"],["Pan","Ëkö yö","Ëkö wák","Ëku jiri","—","Ngwa bri",""],["Pejibaye","Wö ukö kö","Wë ukö kö","Nöri naka köri","—","Bare ngüa kra",""],["Papaya","Wö ukö aba","Wë ukö yök","Nöri naka toku","—","Bare ngüa dru",""],["Piña","Wö ukö chä","Wë ukö sëk","Nöri naka kira","—","Bare ngüa kira",""],["Aguacate","Wö ukö kë","Wë ukö kë","Nöri naka köri","—","Bare ngüa kra",""],["Mango","Wö ukö iriria","Wë ukö diá","Nöri naka tâu","—","Bare ngüa krâ",""],["Guayaba","Wö ukö yöbë","Wë ukö yöbë","Nöri naka yöla","—","Bare ngüa yoa",""],["Achiote","Wö yëkö","Wë yëkö","Nöri yëku","críc","Bare yëa","shúng shah"],["Tabaco","Wö sö","Wë sö","Nöri sëku","—","Bare soa",""],["Rojo","Yëkö","Yëkö","Yëku","Yëk","Yëa",""],["Azul","Diá kö","Diá kö","Tana köri","turinat","Dru kra","dindíngeh"],["Verde","Wö yöbë","Wë yöbë","Nöri yöla","—","Bare yoa",""],["Amarillo","Iriria kö","Diá kö","Tâu köri","Brún köri","Krâ kra",""],["Blanco","Skabë","Skabë","Ska","Skab","Skoa","fru rúne"],["Negro","Kirö","Kirö","Kira","Kir","Kiroa",""],["Morado","Wö chä kö","Wë sëk kö","Nöri kira köri","—","Bare kira kra",""],["Naranja","Iriria yëkö","Diá yëkö","Tâu yëku","—","Krâ yëa",""],["Uno","Étse","Étse","Öchi","Éts / Öts","Kia",""],["Dos","Bötsi","Bötsi","Böra","Böts","Bro",""],["Tres","Mën","Mën","Möri","Mën","Men",""],["Cuatro","Bötsi bötsi","Bötsi bötsi","Böra böra","—","Bro bro",""],["Cinco","Étse bötsi","Étse bötsi","Öchi böra","—","Kia bro",""],["Seis","Mën bötsi","Mën bötsi","Möri böra","—","Men bro",""],["Siete","Étse mën","Étse mën","Öchi möri","—","Kia men",""],["Ocho","Bötsi mën","Bötsi mën","Böra möri","—","Bro men",""],["Nueve","Mën mën","Mën mën","Möri möri","—","Men men",""],["Diez","Étse kö","Étse kö","Öchi köri","—","Kia kra",""],["Veinte","Bötsi kö","Bötsi kö","Böra köri","—","Bro kra",""],["Cien","Mën kö","Mën kö","Möri köri","—","Men kra",""],["Mil","Kö kö kö","Kö kö kö","Köri köri köri","—","Kra kra kra",""],["Día","Iriria","Diá","Tâu","Brún","Krâ","debá"],["Noche","Sula","Sula","Ulë","Dör sula","Krün",""],["Mañana","Iriria yöbë","Diá yöbë","Tâu yöla","—","Krâ yoa","ibóna"],["Tarde","Iriria kö","Diá kö","Tâu köri","—","Krâ kra",""],["Hoy","Iriria bë","Diá bë","Tâu nori","—","Krâ migä","héri"],["Ayer","Iriria ëk","Diá ëk","Tâu yü","biic","Krâ döi","cup queh"],["Año","Iriria kö tsö","Diá kö tsö","Tâu köri nöri","—","Krâ kra tsö",""],["Mes","Sula kö","Sula kö","Ulë köri","—","Krün kra","moc"],["Semana","Iriria kë","Diá kë","Tâu köri","—","Krâ kra",""],["Siempre","Iriria kö kö","Diá kö kö","Tâu köri köri","—","Krâ kra kra",""],["Nunca","Kë iriria","Kë diá","Kë tâu","—","Kë krâ",""],["Ahora","Iriria bë kö","Diá bë kö","Tâu nori köri","cha","Krâ migä kra","mánish-te"],["Antes","Iriria ëk","Diá ëk","Tâu yü","—","Krâ döi",""],["Después","Iriria tsö","Diá tsö","Tâu nöri","—","Krâ tsö",""],["Lunes","Iriria étse","Diá étse","Tâu öchi","—","Krâ kia",""],["Martes","Iriria bötsi","Diá bötsi","Tâu böra","—","Krâ bro",""],["Miércoles","Iriria mën","Diá mën","Tâu möri","—","Krâ men",""],["Jueves","Iriria kö","Diá kö","Tâu köri","—","Krâ kra",""],["Viernes","Iriria tsö","Diá tsö","Tâu nöri","—","Krâ tsö",""],["Sábado","Iriria kë","Diá kë","Tâu köri","—","Krâ kra",""],["Domingo","Iriria sibö","Diá sibö","Tâu töcu","—","Krâ ngöbe",""],["Caminar","Ditsö bë","Datë bë","Nara nori","—","Dre migä",""],["Correr","Ditsö yöbë","Datë yöbë","Nara yöla","badec chuáh","Dre yoa","fa hic so"],["Comer","Ukö bë","Ukö bë","Naka nori","Kë brö","Ngüa migä","fayóso"],["Beber","Aba bë","Yök bë","Toku nori","Unk brö","Dru migä","yóso"],["Dormir","Sula bë","Sula bë","Ulë nori","ca bráh","Krün migä","ta péeh"],["Hablar","Bë tsö","Bë tsö","Nori nöri","—","Migä tsö",""],["Escuchar","Sö bë","Sö bë","Sëku nori","dójo ga","Soa migä","voi (yoi) doso"],["Ver","Iriria bë","Diá bë","Tâu nori","—","Krâ migä",""],["Trabajar","Bë kö","Bë kö","Nori köri","—","Migä kra",""],["Jugar","Bë yöbë","Bë yöbë","Nori yöla","—","Migä yoa",""],["Cantar","Sö bë yöbë","Sö bë yöbë","Sëku nori yöla","ba taba yengá","Soa migä yoa","tati (omia)"],["Bailar","Bë iriria","Bë diá","Nori tâu","dé cui guí","Migä krâ","shto táñung"],["Pescar","Diá bë","Diá bë","Tana nori","Tö brö","Dru migä",""],["Sembrar","Wö kë bë","Wë kë bë","Nöri köri nori","—","Bare kra migä",""],["Cazar","Tsirú bë","Tsirú bë","Nöri nori","deq churá teh","Ngwa migä","shitoú uróṛvi"],["Nadar","Aba bë","Yök bë","Toku nori","—","Dru migä",""],["Amar","Bë yöbë tsö","Bë yöbë tsö","Nori yöla nöri","—","Migä yoa tsö",""],["Morir","Bë ëk","Bë ëk","Nori yü","—","Migä döi",""],["Nacer","Kë bë","Rë bë","Ichi nori","Chö brö","Ngwä migä",""],["Curar","Bë sö kö","Bë sö kö","Nori sëku köri","ténga","Migä soa kra","duró mneso"],["Enseñar","Bë kë tsö","Bë kë tsö","Nori köri nöri","i bing ra","Migä kra tsö",""],["Aprender","Kë bë tsö","Rë bë tsö","Ichi nori nöri","—","Ngwä migä tsö",""],["Pensar","Bë kö kë","Bë kö kë","Nori köri kë","—","Migä kra kë",""],["Reír","Bë yöbë kë","Bë yöbë kë","Nori yöla kë","—","Migä yoa kë",""],["Llorar","Bë aba kë","Bë yök kë","Nori toku kë","—","Migä dru kë",""],["Construir","Yö bë","Wák bë","Jiri nori","Kro brö","Bri migä",""],["Cocinar","Ukö chä bë","Ukö sëk bë","Naka kira nori","Kë tö brö","Ngüa kira migä",""],["Lavar","Aba bë kö","Yök bë kö","Toku nori köri","—","Dru migä kra",""],["Crecer","Körö bë","Körö bë","Köra nori","Kör brö","Ngora migä","cun"],["Escribir","Bë kë","Bë kë","Nori köri","—","Migä kra",""],["Leer","Bë kë tsö","Bë kë tsö","Nori köri nöri","—","Migä kra tsö",""],["Soñar","Sula bë kö","Sula bë kö","Ulë nori köri","—","Krün migä kra",""],["Rezar","Sibö bë kö","Sibö bë kö","Töcu nori köri","Sibö brö kö","Ngöbe migä kra",""],["Proteger","Bë yöbë bë kö","Bë yöbë bë kö","Nori yöla nori köri","—","Migä yoa migä kra",""],["Compartir","Tsö bë","Tsö bë","Nöla nori","Tsö brö","Ngwa migä",""],["Ayudar","Tsö yöbë bë","Tsö yöbë bë","Nöla yöla nori","á zai yúra","Ngwa yoa migä","tai yorcoso"],["Buscar","Ëyö bë","Ká bë","Shíi nori","día","Jä migä","himréh soh"],["Encontrar","Ëyö bë kö","Ká bë kö","Shíi nori köri","—","Jä migä kra",""],["Dar","Bë tsö","Bë tsö","Nori nöri","at cadoá","Migä tsö","quemo tuvósvorcong"],["Traer","Bë ditsö","Bë datë","Nori tana","—","Migä dre",""],["Subir","Tsirú bë","Tsirú bë","Nöla nori","—","Ngo migä",""],["Bajar","Itö bë","Duö bë","Naku nori","cha át tuá","Noke migä","fa obrongsuh"],["Entrar","Yö bë","Wák bë","Jiri nori","Kro brö","Bri migä","pa potios uíro"],["Salir","Kë yö bë","Kë wák bë","Kë jiri nori","—","Kë bri migä",""],["Grande","Körö","Körö","Köra","Kör","Ngora","cvoquis quis"],["Pequeño","Kikë","Kikë","Kiki","Kik","Kika",""],["Bueno","Yöbë","Yöbë","Yöla","morén","Yoa","cóbe"],["Malo","Kë yöbë","Kë yöbë","Kë yöla","—","Kë yoa","oe"],["Fuerte","Bë kö","Bë kö","Nori köri","—","Migä kra",""],["Rápido","Ditsö yöbë","Datë yöbë","Nara yöla","—","Dre yoa",""],["Lento","Kë ditsö","Kë datë","Kë nara","—","Kë dre",""],["Caliente","Chä bë","Sëk bë","Kira nori","Tö brö","Kira migä","ta cri yóntso"],["Frío","Aba kë","Yök kë","Toku köri","Unk kë","Dru kra",""],["Nuevo","Kë yöbë","Kë yöbë","Ichi yöla","—","Ngwä yoa",""],["Viejo","Kö kö","Kö kö","Köri köri","—","Kra kra",""],["Alto","Tsirú bë","Tsirú bë","Nöla nori","Krö brö","Ngo migä",""],["Bajo","Itö bë","Duö bë","Naku nori","Dru brö","Noke migä",""],["Mucho","Kö tsö","Kö tsö","Köri nöri","—","Kra tsö",""],["Poco","Kikë tsö","Kikë tsö","Kiki nöri","—","Kika tsö",""],["Sagrado","Sibö bë","Sibö bë","Töcu nori","Sibö brö","Ngöbe migä",""],["Limpio","Aba yöbë","Yök yöbë","Toku yöla","Unk yöb","Dru yoa","feru brune"],["Feliz","Yöbë kö","Yöbë kö","Yöla köri","—","Yoa kra",""],["Triste","Kë yöbë kö","Kë yöbë kö","Kë yöla köri","—","Kë yoa kra",""],["Dios","Sibö","Sibö","Töcu","Sibö","Ngöbe","sebu"],["Espíritu","Bë sö","Bë sö","Nori sëku","—","Migä soa",""],["Sueño","Sula bë","Sula bë","Ulë nori","—","Krün migä",""],["Ritual","Bë kö tsö","Bë kö tsö","Nori köri nöri","—","Migä kra tsö",""],["Ofrenda","Ukö sibö","Ukö sibö","Naka töcu","Kë sibö","Ngüa ngöbe",""],["Ancestro","Bë kö kö","Bë kö kö","Nori köri köri","—","Migä kra kra",""],["Tradición","Bë tsö kö","Bë tsö kö","Nori nöri köri","—","Migä tsö kra",""],["Leyenda","Bë tsö sö","Bë tsö sö","Nori nöri sëku","—","Migä tsö soa",""],["Ceremonia","Bë kö sö","Bë kö sö","Nori köri sëku","—","Migä kra soa",""],["Alma","Bë sö iriria","Bë sö diá","Nori sëku tâu","huíc","Migä soa krâ",""],["Naturaleza","Itö tsö","Duö tsö","Naku nöri","—","Noke tsö",""],["Camino","Ditsö","Datë","Nara","Drö","Dre","cotón"],["Mercado","Ukö yö","Ukö wák","Naka jiri","Kë kro","Ngüa bri",""],["Escuela","Bë kë yö","Bë kë wák","Nori köri jiri","—","Migä kra bri",""],["Iglesia","Sibö yö","Sibö wák","Töcu jiri","Sibö kro","Ngöbe bri","sebu uh"],["Campo","Itö yöbë","Duö yöbë","Naku yöla","Dru yöb","Noke yoa","cvogoró góh"],["Territorio","Itö tsö","Duö tsö","Naku nöri","Dru tsö","Noke tsö",""],["Salud","Bë yöbë","Bë yöbë","Nori yöla","—","Migä yoa",""],["Enfermedad","Kë bë yöbë","Kë bë yöbë","Kë nori yöla","cheebruh","Kë migä yoa","suróh"],["Dolor","Bë kë kö","Bë kë kö","Nori köri kö","—","Migä kra kö",""],["Medicina","Bë sö yöbë","Bë sö yöbë","Nori sëku yöla","—","Migä soa yoa",""],["Planta medicinal","Wö sö yöbë","Wë sö yöbë","Nöri sëku yöla","—","Bare soa yoa",""],["Curación","Bë sö","Bë sö","Nori sëku","—","Migä soa",""],["Nacimiento","Kë bë","Rë bë","Ichi nori","Chö brö","Ngwä migä",""],["Muerte","Bë ëk","Bë ëk","Nori yü","—","Migä döi",""],["Hacha","Kë bë","Kë bë","Köri nori","—","Kra migä",""],["Cuchillo","Kë ditsö","Kë datë","Köri tana","ej dí","Kra dre","drung machete / drungva"],["Arco","Wö kë","Wë kë","Nöri köri","—","Bare kra",""],["Flecha","Wö ditsö","Wë datë","Nöri tana","tún casa","Bare dre","shcrung eh"],["Canoa","Ditsö yö","Datë wák","Nara jiri","—","Dre bri",""],["Canasta","Wö yö","Wë wák","Nöri jiri","co ohcráng","Bare bri","ónt shah"],["Cuerda","Wö bë","Wë bë","Nöri nori","mecate","Bare migä","quiúm rah"],["Terremoto","Itö yëk","Duö yëk","Naku yëku","—","Noke yëa",""],["Inundación","Aba kö","Yök kö","Toku köri","—","Dru kra",""],["Sequía","Kë aba","Kë yök","Kë toku","—","Kë dru",""],["Arcoíris","Iriria kö sö","Diá kö sö","Tâu köri sëku","—","Krâ kra soa",""],["Niebla","Yëk kö","Yëk kö","Yëku köri","—","Yëa kra",""],["Relámpago","Chä iriria","Sëk diá","Kira tâu","Tö brún","Kira krâ",""],["Humo","Chä yëk","Sëk yëk","Kira yëku","Tö yök","Kira yëa",""],["Ceniza","Chä itö","Sëk duö","Kira naku","Tö dru","Kira noke","rúngsha"],["Polvo","Itö kikë","Duö kikë","Naku kiki","—","Noke kika",""],["Lodo","Itö aba","Duö yök","Naku toku","Dru unk","Noke dru","crushungva"],["Corriente","Diá ditsö","Diá datë","Tana nara","—","Dru dre",""],["Marea","Ditsö kö","Datë kö","Tâna köri","—","Dre kra",""],["Ola","Ditsö bë","Datë bë","Tâna nori","—","Dre migä",""],["Sombra","Iriria kë","Diá kë","Tâu köri","—","Krâ kra",""],["Luz","Iriria yöbë","Diá yöbë","Tâu yöla","—","Krâ yoa","she híng"],["Oscuridad","Sula kirö","Sula kirö","Ulë kira","—","Krün kiroa",""],["Conocimiento","Bë kë tsö","Bë kë tsö","Nori köri nöri","—","Migä kra tsö",""],["Sabiduría","Bë kö kë","Bë kö kë","Nori köri kë","—","Migä kra kë",""],["Historia","Bë tsö kö","Bë tsö kö","Nori nöri köri","—","Migä tsö kra",""],["Canción","Sö yöbë","Sö yöbë","Sëku yöla","—","Soa yoa",""],["Danza","Bë iriria","Bë diá","Nori tâu","—","Migä krâ",""],["Cuento","Bë tsö","Bë tsö","Nori nöri","—","Migä tsö",""],["Libro","Bë kë tsö","Bë kë tsö","Nori köri nöri","—","Migä kra tsö",""],["Maestro","Bë kë bë kö","Bë kë bë kö","Nori köri nori köri","—","Migä kra migä kra",""],["Música","Sö bë kö","Sö bë kö","Sëku nori köri","—","Soa migä kra",""],["Tambor","Sö bë kë","Sö bë kë","Sëku nori köri","—","Soa migä kra",""],["Flauta","Yëk sö","Yëk sö","Yëku sëku","—","Yëa soa",""],["Collar","Bë kö sö","Bë kö sö","Nori köri sëku","chujuráh","Migä kra soa","ófricroh"],["Pluma","Sö tsö","Sö tsö","Sëku nöri","—","Soa bare",""],["Máscara","Bë tsö iriria","Bë tsö diá","Nori nöri tâu","—","Migä tsö krâ",""],["Paz","Yöbë tsö","Yöbë tsö","Yöla nöri","—","Yoa tsö",""],["Guerra","Kë yöbë tsö","Kë yöbë tsö","Kë yöla nöri","—","Kë yoa tsö",""],["Justicia","Yöbë bë kö","Yöbë bë kö","Yöla nori köri","—","Yoa migä kra",""],["Respeto","Bë yöbë kö","Bë yöbë kö","Nori yöla köri","—","Migä yoa kra",""],["Solidaridad","Tsö yöbë bë","Tsö yöbë bë","Nöla yöla nori","—","Ngwa yoa migä",""],["Amor","Bë yöbë kö","Bë yöbë kö","Nori yöla köri","—","Migä yoa kra",""],["Miedo","Kë bë","Kë bë","Kë nori","—","Kë migä",""],["Valor","Bë kö yöbë","Bë kö yöbë","Nori köri yöla","—","Migä kra yoa",""],["Esperanza","Iriria bë yöbë","Diá bë yöbë","Tâu nori yöla","—","Krâ migä yoa",""],["Gratitud","Ëyö kö","Ká kö","Shíi köri","—","Jä kra",""],["Costa Rica","Ditsö itö yöbë","Datë duö yöbë","Tâna naku yöla","—","Dre noke yoa",""],["Talamanca","Tsirú kö","Tsirú kö","Nöla köri","—","Ngo kra",""],["Chirripó","Tsirú kö kö","Tsirú kö kö","Nöla köri köri","—","Ngo kra kra",""],["Arenal","Tsirú chä kö","Tsirú sëk kö","Nöla kira köri","—","Ngo kira kra",""],["Guanacaste","Itö wö kö","Duö wë kö","Naku nöri köri","—","Noke bare kra",""],["Caribe","Ditsö yëkö","Datë yëkö","Tâna yëku","—","Dre yëa",""],["Pacífico","Ditsö yöbë kö","Datë yöbë kö","Tâna yöla köri","—","Dre yoa kra",""],["Árbol del mundo","Wö sibö","Wë sibö","Nöri töcu","—","Bare ngöbe",""],["Tierra madre","Itö në","Duö në","Naku nöchi","—","Noke nan",""],["Agua sagrada","Aba sibö","Yök sibö","Toku töcu","Unk sibö","Dru ngöbe",""],["Fuego sagrado","Chä sibö","Sëk sibö","Kira töcu","Tö sibö","Kira ngöbe",""],["Creador","Sibö bë","Sibö bë","Töcu nori","Sibö brö","Ngöbe migä",""],["Paraíso","Sibö yö","Sibö wák","Töcu jiri","Sibö kro","Ngöbe bri",""],["Bendición","Sibö yöbë","Sibö yöbë","Töcu yöla","Sibö yöb","Ngöbe yoa",""],["Norte","Yëk kö","Yëk kö","Yëku köri","—","Yëa kra",""],["Sur","Itö kö","Duö kö","Naku köri","—","Noke kra",""],["Este","Iriria bë","Diá bë","Tâu nori","—","Krâ migä",""],["Oeste","Iriria ëk","Diá ëk","Tâu yü","—","Krâ döi",""],["Arriba","Tsirú bë","Tsirú bë","Nöla nori","ahatí","Ngo migä","co móngsh co"],["Abajo","Itö bë","Duö bë","Naku nori","diái","Noke migä","túshca"],["Lejos","Ditsö kö","Datë kö","Nara köri","—","Dre kra","fola"],["Cerca","Ditsö kikë","Datë kikë","Nara kiki","—","Dre kika",""],["Calor","Chä bë","Sëk bë","Kira nori","Tö brö","Kira migä","cri yóntso"],["Fresco","Aba yöbë","Yök yöbë","Toku yöla","—","Dru yoa",""],["Húmedo","Aba bë kö","Yök bë kö","Toku nori köri","—","Dru migä kra","ta púctongfi"],["Seco","Kë aba","Kë yök","Kë toku","—","Kë dru",""],["Largo","Ditsö körö","Datë körö","Nara köra","—","Dre ngora",""],["Corto","Ditsö kikë","Datë kikë","Nara kiki","—","Dre kika",""],["Ancho","Itö körö","Duö körö","Naku köra","—","Noke ngora",""],["Todo","Kö kö","Kö kö","Köri köri","—","Kra kra",""],["Nada","Kë kö","Kë kö","Kë köri","—","Kë kra",""],["Lleno","Kö körö","Kö körö","Köri köra","—","Kra ngora",""],["Vacío","Kë kö","Kë kö","Kë köri","—","Kë kra",""],["Con","Tsö bë","Tsö bë","Nöri nori","—","Tsö migä",""],["Sin","Kë tsö","Kë tsö","Kë nöri","—","Kë tsö",""],["Más","Kö tsö","Kö tsö","Köri nöri","—","Kra tsö","hin tzo"],["Menos","Kikë tsö","Kikë tsö","Kiki nöri","—","Kika tsö",""],["También","Tsö bë kö","Tsö bë kö","Nöri nori köri","—","Tsö migä kra",""],["Porque","Bë tsö kö","Bë tsö kö","Nori nöri köri","—","Migä tsö kra",""],["Cuando","Iriria bë","Diá bë","Tâu nori","i gréh","Krâ migä",""],["Donde","Yö bë","Wák bë","Jiri nori","—","Bri migä",""],["Tapir","Tsirú diá körö","Tsirú diá körö","Nöri tana köra","—","Ngwa dru ngora",""],["Perezoso","Tsirú kë lento","Tsirú kë lento","Nöri köri lento","—","Ngwa kra kë",""],["Pizote","Tsirú kë kö","Tsirú kë kö","Nöri köri kö","—","Ngwa kra kö",""],["Tepezcuintle","Tsirú ukö kö","Tsirú ukö kö","Nöri naka köri","—","Ngwa ngüa kra",""],["Guatusa","Tsirú kë yëk","Tsirú kë yëk","Nöri köri yëku","—","Ngwa kra yëa",""],["Saíno","Tsirú kö kö","Tsirú kö kö","Nöri köri kö","—","Ngwa kra kö",""],["Tigrillo","Tsirú kö","Tsirú kö","Nöri köri","—","Ngwa kra",""],["Mono araña","Bë tsö ditsö","Bë tsö datë","Nöri tsö tana","—","Ngwä tsö dre",""],["Mono congo","Bë tsö kö","Bë tsö kö","Nöri tsö köri","—","Ngwä tsö kra",""],["Mono carablanca","Bë tsö skabë","Bë tsö skabë","Nöri tsö ska","—","Ngwä tsö skoa",""],["Boa constrictor","Ditsö körö","Datë körö","Nöku köra","—","Dre ngora",""],["Guacamaya verde","Sö wö yöbë","Sö wë yöbë","Sëku nöri yöla","—","Soa bare yoa",""],["Águila harpía","Sö körö tsirú","Sö körö tsirú","Sëku köra nöri","—","Soa ngora ngwa",""],["Yigüirro","Sö yöbë","Sö yöbë","Sëku yöla","—","Soa yoa",""],["Zanate","Sö kirö","Sö kirö","Sëku kira","—","Soa kiroa",""],["Garza","Sö aba","Sö yök","Sëku toku","—","Soa dru",""],["Manatí","Diá tsirú","Diá tsirú","Tana nöri","—","Dru ngwa",""],["Caimán","Diá itö","Diá duö","Tana naku","cu","Dru noke","cu"],["Sapo","Aba kë","Yök kë","Toku köri","—","Dru kra",""],["Cangrejo","Diá kë","Diá kë","Tana köri","croc","Dru kra","(bor) dreáh"],["Luciérnaga","Sö iriria","Sö diá","Sëku tâu","—","Soa krâ",""],["Mosquito","Sö kikë","Sö kikë","Sëku kiki","—","Soa kika",""],["Escorpión","Kë chä","Kë sëk","Köri kira","fua cúh","Kra kira","ting"],["Tarántula","Kë bë körö","Kë bë körö","Köri nori köra","—","Kra migä ngora",""],["Sábila","Wö sö aba","Wë sö yök","Nöri sëku toku","—","Bare soa dru",""],["Manzanilla","Wö sö kë","Wë sö kë","Nöri sëku köri","—","Bare soa kra",""],["Jengibre","Wö sö kë","Wë sö kë","Nöri sëku köri","—","Bare soa kra",""],["Cedro","Wö kë kö","Wë kë kö","Nöri köri kö","urun cráh","Bare kra kö","urú"],["Ceiba","Wö kö körö","Wë kö körö","Nöri köri köra","—","Bare kra ngora",""],["Caoba","Wö kë kö kö","Wë kë kö kö","Nöri köri kö kö","—","Bare kra kö kö",""],["Palma","Wö kö","Wë kö","Nöri köri","—","Bare kra",""],["Bambú","Wö ditsö","Wë datë","Nöri tana","—","Bare dre",""],["Orquídea","Wö kë sö","Wë kë sö","Nöri köri sëku","—","Bare kra soa",""],["Heliconia","Wö kë iriria","Wë kë diá","Nöri köri tâu","—","Bare kra krâ",""],["Chayote","Wö ukö kë","Wë ukö kë","Nöri naka köri","zová va","Bare ngüa kra","shuron"],["Ñame","Itö ukö kö","Duö ukö kö","Naku naka köri","—","Noke ngüa kra",""],["Guanábana","Wö ukö yöbë","Wë ukö yöbë","Nöri naka yöla","—","Bare ngüa yoa",""],["Nance","Wö ukö kë yëkö","Wë ukö kë yëkö","Nöri naka köri yëku","—","Bare ngüa kra yëa",""],["Cas","Wö ukö aba","Wë ukö yök","Nöri naka toku","—","Bare ngüa dru",""],["Hacha","Kë bë","Kë bë","Köri nori","—","Kra migä",""],["Antorcha","Chä wö","Sëk wë","Kira nöri","Tö drö","Kira bare",""],["Tinaja","Aba yö kë","Yök wák kë","Toku jiri köri","—","Dru bri kra",""],["Calabaza","Wö ukö yö","Wë ukö wák","Nöri naka jiri","—","Bare ngüa bri",""],["Mochila","Wö yö bë","Wë wák bë","Nöri jiri nori","—","Bare bri migä",""],["Manta","Yë tsö kö","Yë tsö kö","Nula nöri köri","—","Micha tsö kra",""],["Velorio","Bë ëk tsö","Bë ëk tsö","Nori yü nöri","—","Migä döi tsö",""],["Boda","Bë yë kö tsö","Bë yë kö tsö","Nori nula köri nöri","—","Migä micha kra tsö",""],["Fiesta","Tsö yöbë bë","Tsö yöbë bë","Nöla yöla nori","—","Ngwa yoa migä",""],["Reunión","Tsö bë","Tsö bë","Nöla nori","Tsö brö","Ngwa migä",""],["Minga","Tsö bë kö","Tsö bë kö","Nöla nori köri","—","Ngwa migä kra",""],["Artesanía","Bë kö yöbë","Bë kö yöbë","Nori köri yöla","—","Migä kra yoa",""],["Pintura","Bë yëkö kö","Bë yëkö kö","Nori yëku köri","—","Migä yëa kra",""],["Tejedor","Yë tsö bë kö","Yë tsö bë kö","Nula nöri nori köri","—","Micha tsö migä kra",""],["Curandero","Bë sö kö","Bë sö kö","Nori sëku köri","—","Migä soa kra",""],["Agricultor","Itö ukö bë","Duö ukö bë","Naku naka nori","—","Noke ngüa migä",""],["Pescador","Diá bë kö","Diá bë kö","Tana nori köri","—","Dru migä kra",""],["Cazador","Tsirú bë kö","Tsirú bë kö","Nöri nori köri","—","Ngwa migä kra",""],["Guardián","Bë yöbë bë kö","Bë yöbë bë kö","Nori yöla nori köri","—","Migä yoa migä kra",""],["Líder","Bë kö tsö","Bë kö tsö","Nori köri nöri","—","Migä kra tsö",""],["Sabio","Bë kö kë yöbë","Bë kö kë yöbë","Nori köri kë yöla","—","Migä kra kë yoa",""],["Valiente","Bë kö yöbë","Bë kö yöbë","Nori köri yöla","—","Migä kra yoa",""],["Generoso","Tsö bë yöbë","Tsö bë yöbë","Nöla nori yöla","—","Ngwa migä yoa",""],["Honesto","Yöbë bë kö","Yöbë bë kö","Yöla nori köri","—","Yoa migä kra",""],["Humilde","Kikë bë yöbë","Kikë bë yöbë","Kiki nori yöla","—","Kika migä yoa",""],["Libre","Bë yöbë tsö kö","Bë yöbë tsö kö","Nori yöla nöri köri","—","Migä yoa tsö kra","libre"],["Identidad","Bë kö yö","Bë kö wák","Nori köri jiri","—","Migä kra bri",""],["Armonía","Yöbë tsö","Yöbë tsö","Yöla nöri","—","Yoa tsö",""],["Equilibrio","Bötsi yöbë","Bötsi yöbë","Böra yöla","—","Bro yoa",""],["Reciprocidad","Bë kë bë","Bë kë bë","Nori köri nori","—","Migä kra migä",""],["Soberanía","Bë yöbë tsö","Bë yöbë tsö","Nori yöla nöri","—","Migä yoa tsö",""],["Dignidad","Bë kö kö yöbë","Bë kö kö yöbë","Nori köri köri yöla","—","Migä kra kra yoa",""],["Resistencia","Bë kö yöbë kö","Bë kö yöbë kö","Nori köri yöla köri","—","Migä kra yoa kra",""],["Autonomía","Bë yöbë tsö kö","Bë yöbë tsö kö","Nori yöla nöri köri","—","Migä yoa tsö kra",""],["Lengua viva","Bë ditsö yöbë","Bë datë yöbë","Nori tana yöla","—","Migä dre yoa",""],["Mi tierra","Itö bë","Duö bë","Naku nori","Dru brö","Noke migä",""],["Mi lengua","Bë ditsö bë","Bë datë bë","Nori tana nori","—","Migä dre migä",""],["Mi pueblo","Tsö yö bë","Tsö wák bë","Nöla jiri nori","Tsö kro brö","Ngwa bri migä",""],["Nuestra tierra","Itö tsö","Duö tsö","Naku nöri","Dru tsö","Noke tsö",""],["Soy bribri","Bë bribri","—","—","—","—",""],["Soy brunca","—","—","—","Brö brunca","—",""],["El agua es vida","Aba bë yöbë","Yök bë yöbë","Toku nori yöla","Unk brö yöb","Dru migä yoa",""],["El bosque respira","Wö tsö bë yëk","Wë tsö bë yëk","Nöri nöla nori yëku","—","Bare ngo migä yëa",""],["Cuidar la tierra","Itö bë kö","Duö bë kö","Naku nori köri","—","Noke migä kra",""],["Vivir en armonía","Yöbë tsö bë","Yöbë tsö bë","Yöla nöri nori","—","Yoa tsö migä",""],["Gracias por todo","Ëyö kö kö","Ká kö kö","Shíi köri köri","Shíi kör","Jä kra kra",""],["Buen viaje","Yöbë ditsö","Yöbë datë","Yöla nara","—","Yoa dre",""],["Hasta luego","Iriria tsö bë","Diá tsö bë","Tâu nöri nori","—","Krâ tsö migä",""],["Que tengas buen día","Iriria yöbë bë","Diá yöbë bë","Tâu yöla nori","—","Krâ yoa migä",""],["La luna alumbra","Sula iriria bë","Sula diá bë","Ulë tâu nori","—","Krün krâ migä",""],["La tierra es nuestra","Itö tsö kö","Duö tsö kö","Naku nöri köri","—","Noke tsö kra",""],["Defender la vida","Bë yöbë kö bë","Bë yöbë kö bë","Nori yöla köri nori","—","Migä yoa kra migä",""],["Preservar la lengua","Bë ditsö bë kö","Bë datë bë kö","Nori tana nori köri","—","Migä dre migä kra",""],["Amanecer","Iriria kë bë","Diá kë bë","Tâu köri nori","cáqui bá ara","Krâ kra migä",""],["Atardecer","Iriria ëk bë","Diá ëk bë","Tâu yü nori","—","Krâ döi migä",""],["Mediodía","Iriria kö bötsi","Diá kö bötsi","Tâu köri böra","—","Krâ kra bro",""],["Madrugada","Sula iriria","Sula diá","Ulë tâu","—","Krün krâ",""],["Estación seca","Kë aba iriria","Kë yök diá","Kë toku tâu","—","Kë dru krâ",""],["Estación lluviosa","Ükö iriria","Ükö diá","Nöku tâu","—","Nüa krâ",""],["Solsticio","Iriria kö kö","Diá kö kö","Tâu köri köri","—","Krâ kra kra",""],["Aurora","Iriria yöbë kë","Diá yöbë kë","Tâu yöla köri","humrá cri","Krâ yoa kra",""],["Horizonte","Ditsö iriria","Datë diá","Tâna tâu","—","Dre krâ",""],["Planeta","Itö kö kö","Duö kö kö","Naku köri köri","—","Noke kra kra",""],["Galaxia","Sula kö kö","Sula kö kö","Ulë köri köri","—","Krün kra kra",""],["Eclipse","Iriria kë kö","Diá kë kö","Tâu köri kö","—","Krâ kra kö",""],["Diccionario","Bë ditsö kö kö","Bë datë kö kö","Nori tana köri köri","—","Migä dre kra kra",""],["Traducción","Bë ditsö bötsi","Bë datë bötsi","Nori tana böra","—","Migä dre bro",""],["Idioma","Bë ditsö","Bë datë","Nori tana","—","Migä dre",""],["Palabra","Bë tsö","Bë tsö","Nori nöri","—","Migä tsö",""],["Nombre","Bë kö","Bë kö","Nori köri","—","Migä kra",""],["Silencio","Kë sö","Kë sö","Kë sëku","—","Kë soa",""],["Voz","Bë sö","Bë sö","Nori sëku","—","Migä soa",""],["Trabajo","Bë kö","Bë kö","Nori köri","—","Migä kra",""],["Dinero","Kë kö","Kë kö","Köri köri","—","Kra kra",""],["Trueque","Bë kë bë","Bë kë bë","Nori köri nori","—","Migä kra migä",""],["Cosecha","Wö ukö kö","Wë ukö kö","Nöri naka köri","—","Bare ngüa kra",""],["Pesca","Diá bë kö","Diá bë kö","Tana nori köri","—","Dru migä kra",""],["Caza","Tsirú bë kö","Tsirú bë kö","Nöri nori köri","—","Ngwa migä kra",""],["Tierra cultivada","Itö ukö","Duö ukö","Naku naka","—","Noke ngüa",""],["Baño ritual","Aba bë sö","Yök bë sö","Toku nori sëku","—","Dru migä soa",""],["Humo sagrado","Chä sibö","Sëk sibö","Kira töcu","Tö sibö","Kira ngöbe",""],["Ayuno","Kë ukö bë","Kë ukö bë","Kë naka nori","—","Kë ngüa migä",""],["Purificación","Aba sibö bë","Yök sibö bë","Toku töcu nori","—","Dru ngöbe migä",""],["Iniciación","Kë bë sibö","Rë bë sibö","Ichi nori töcu","—","Ngwä migä ngöbe",""],["Mundo de arriba","Sibö tsirú","Sibö tsirú","Töcu nöla","—","Ngöbe ngo",""],["Mundo de abajo","Sibö itö","Sibö duö","Töcu naku","—","Ngöbe noke",""],["Infancia","Kë kö","Rë kö","Ichi köri","Chö kör","Ngwä kra",""],["Juventud","Kë yöbë kö","Rë yöbë kö","Ichi yöla köri","—","Ngwä yoa kra",""],["Vejez","Kö kö kö","Kö kö kö","Köri köri köri","—","Kra kra kra",""],["Renacer","Kë bë tsö","Rë bë tsö","Ichi nori nöri","—","Ngwä migä tsö",""],["Transformación","Bë bötsi kö","Bë bötsi kö","Nori böra köri","—","Migä bro kra",""],["Bienestar","Bë yöbë kö kö","Bë yöbë kö kö","Nori yöla köri köri","—","Migä yoa kra kra",""],["Fortaleza","Bë kö kö","Bë kö kö","Nori köri köri","—","Migä kra kra",""],["Agradecimiento","Ëyö sibö","Ká sibö","Shíi töcu","Shíi sibö","Jä ngöbe",""],["Oración sagrada","Sibö bë tsö","Sibö bë tsö","Töcu nori nöri","—","Ngöbe migä tsö",""],["Canto sagrado","Sö sibö","Sö sibö","Sëku töcu","—","Soa ngöbe",""],["Danza ritual","Bë iriria sibö","Bë diá sibö","Nori tâu töcu","—","Migä krâ ngöbe",""],["Tierra sagrada","Itö sibö","Duö sibö","Naku töcu","Dru sibö","Noke ngöbe",""],["Pueblo originario","Tsö yö kö kö","Tsö wák kö kö","Nöla jiri köri köri","—","Ngwa bri kra kra",""],["Espíritu del bosque","Wö tsö bë sö","Wë tsö bë sö","Nöri nöla nori sëku","—","Bare ngo migä soa",""],["Memoria","Bë kö bë kö","Bë kö bë kö","Nori köri nori köri","—","Migä kra migä kra",""],["Territorio ancestral","Itö bë kö kö","Duö bë kö kö","Naku nori köri köri","—","Noke migä kra kra",""],["Sembrar maíz","Ëkö kë bë","Ëkö kë bë","Ëku köri nori","—","Ngwa kra migä",""],["Pescar en el río","Diá diá bë","Diá diá bë","Tana tana nori","—","Dru dru migä",""],["Honrar a los ancestros","Bë kö kö ëyö","Bë kö kö ká","Nori köri köri shíi","—","Migä kra kra jä",""],["Transmitir conocimiento","Bë kë tsö bë","Bë kë tsö bë","Nori köri nöri nori","—","Migä kra tsö migä",""],["Enero","Sula étse kö","Sula étse kö","Ulë öchi köri","—","Krün kia kra",""],["Febrero","Sula bötsi kö","Sula bötsi kö","Ulë böra köri","—","Krün bro kra",""],["Marzo","Sula mën kö","Sula mën kö","Ulë möri köri","—","Krün men kra",""],["Once","Étse kö étse","Étse kö étse","Öchi köri öchi","—","Kia kra kia",""],["Doce","Étse kö bötsi","Étse kö bötsi","Öchi köri böra","—","Kia kra bro",""],["Treinta","Mën kö","Mën kö","Möri köri","—","Men kra",""],["Primero","Étse yöbë","Étse yöbë","Öchi yöla","—","Kia yoa",""],["Segundo","Bötsi yöbë","Bötsi yöbë","Böra yöla","—","Bro yoa",""],["Último","Kë kö yöbë","Kë kö yöbë","Kë köri yöla","—","Kë kra yoa",""],["Rezador","Sibö bë kö","Sibö bë kö","Töcu nori köri","—","Ngöbe migä kra",""],["Comadrona","Yë kë bë kö","Yë rë bë kö","Nula ichi nori köri","—","Micha ngwä migä kra",""],["Sacerdote","Sibö bë kö kö","Sibö bë kö kö","Töcu nori köri köri","—","Ngöbe migä kra kra",""],["Mensajero","Bë tsö sö kö","Bë tsö sö kö","Nori nöri sëku köri","—","Migä tsö soa kra",""],["Nieto","Kë kë bë","Rë rë bë","Ichi ichi nori","—","Ngwä ngwä migä",""],["Primo","Kë tsö bë","Rë tsö bë","Ichi nöri nori","—","Ngwä tsö migä",""],["Suegro","Bë kö yë","Bë kö yë","Nori köri nula","—","Migä kra micha",""],["Suegra","Yë kö bë","Yë kö bë","Nula köri nori","—","Micha kra migä",""],["Cuñado","Bë tsö bë","Bë tsö bë","Nori nöri nori","boóc","Migä tsö migä","(ba) cac"],["Padrino","Sibö bë","Sibö bë","Töcu nori","—","Ngöbe migä",""],["Madrina","Sibö yë","Sibö yë","Töcu nula","—","Ngöbe micha",""],["Descansar","Sula bë kë","Sula bë kë","Ulë nori köri","—","Krün migä kra",""],["Bañarse","Aba bë","Yök bë","Toku nori","dec yá ayó","Dru migä","yebono shitó ve"],["Despertar","Iriria bë","Diá bë","Tâu nori","ba cá ish dah","Krâ migä","cheng so"],["Visitar","Bë yö bë","Bë wák bë","Nori jiri nori","—","Migä bri migä",""],["Esperar","Kë ditsö bë","Kë datë bë","Kë nara nori","—","Kë dre migä",""],["Recordar","Bë kö bë","Bë kö bë","Nori köri nori","—","Migä kra migä",""],["Olvidar","Kë bë kö","Kë bë kö","Kë nori köri","—","Kë migä kra",""],["Encender","Chä bë","Sëk bë","Kira nori","Tö brö","Kira migä","vor coso"],["Apagar","Kë chä bë","Kë sëk bë","Kë kira nori","—","Kë kira migä",""],["Abrir","Yö bë kö","Wák bë kö","Jiri nori köri","achat cájaga","Bri migä kra","co opéra"],["Cerrar","Kë yö bë","Kë wák bë","Kë jiri nori","du ah","Kë bri migä","bong sas"],["Caer","Itö bë","Duö bë","Naku nori","tru urá","Noke migä","ta surin ó eh bogonóh"],["Lanzar","Ditsö bë","Datë bë","Tana nori","—","Dre migä",""],["Dibujar","Bë yëkö bë","Bë yëkö bë","Nori yëku nori","—","Migä yëa migä",""],["Sentir","Síniri bë","Síniri bë","Nöchi nori","Chö brö","Ngü migä",""],["Tejer","Yë tsö bë","Yë tsö bë","Nula nöri nori","—","Micha tsö migä",""],["Cosechar","Wö ukö bë","Wë ukö bë","Nöri naka nori","—","Bare ngüa migä",""],["Orar","Sibö bë","Sibö bë","Töcu nori","Sibö brö","Ngöbe migä",""],["Sanar","Bë sö yöbë bë","Bë sö yöbë bë","Nori sëku yöla nori","—","Migä soa yoa migä",""],["Vapor medicinal","Chä wö sö","Sëk wë sö","Kira nöri sëku","—","Kira bare soa",""],["Respetar","Bë yöbë kö bë","Bë yöbë kö bë","Nori yöla köri nori","—","Migä yoa kra migä",""],["Amar a la naturaleza","Itö bë yöbë","Duö bë yöbë","Naku nori yöla","—","Noke migä yoa",""],["Proteger el bosque","Wö tsö bë kö","Wë tsö bë kö","Nöri nöla nori köri","—","Bare ngo migä kra",""],["Barco","Ditsö yö kö","Datë wák kö","Nara jiri köri","—","Dre bri kra",""],["Avión","Sö ditsö kö","Sö datë kö","Sëku nara köri","—","Soa dre kra",""],["Hospital","Bë sö yö kö","Bë sö wák kö","Nori sëku jiri köri","—","Migä soa bri kra",""],["Teléfono","Bë sö kö kë","Bë sö kö kë","Nori sëku köri kë","—","Migä soa kra kë",""],["Radio","Sö kë kö","Sö kë kö","Sëku köri kö","—","Soa kra kö",""],["Maremoto","Ditsö yëk","Datë yëk","Tâna yëku","—","Dre yëa",""],["Ciclón","Yëk kö kö","Yëk kö kö","Yëku köri köri","—","Yëa kra kra",""],["Aguacero","Ükö körö","Ükö körö","Nöku köra","—","Nüa ngora",""],["Llovizna","Ükö kikë","Ükö kikë","Nöku kiki","—","Nüa kika",""],["Crecida","Diá körö kö","Diá körö kö","Tana köra köri","—","Dru ngora kra",""],["Derrumbe","Tsirú itö","Tsirú duö","Nöla naku","—","Ngo noke",""],["Manglar","Wö ditsö","Wë datë","Nöri tâna","—","Bare dre",""],["Arrecife","Kë ditsö","Kë datë","Köri tâna","—","Kra dre",""],["Sabana","Itö yöbë körö","Duö yöbë körö","Naku yöla köra","—","Noke yoa ngora",""],["Quebrada","Diá kikë","Diá kikë","Tana kiki","—","Dru kika",""],["Manantial","Aba yöbë kë","Yök yöbë kë","Toku yöla köri","—","Dru yoa kra",""],["Pozo","Aba kë yö","Yök kë wák","Toku köri jiri","—","Dru kra bri",""],["Páramo","Itö tsirú kö","Duö tsirú kö","Naku nöla köri","—","Noke ngo kra",""],["Fuerza y valor","Kö yöbë","Kö yöbë","Köri yöla","—","Kra yoa",""],["Mucho amor","Ëyö kö bë","Ká kö bë","Shíi köri nori","—","Jä kra migä",""],["Con permiso","Ëyö yö bë","Ká wák bë","Shíi jiri nori","—","Jä bri migä",""],["Hasta mañana","Iriria tsö iriria","Diá tsö diá","Tâu nöri tâu","—","Krâ tsö krâ",""],["Buena suerte","Yöbë iriria","Yöbë diá","Yöla tâu","—","Yoa krâ",""],["Somos un pueblo","Tsö bë kö","Tsö bë kö","Nöla nori köri","—","Ngwa migä kra",""],["Cuidemos la tierra","Itö bë kö kö","Duö bë kö kö","Naku nori köri köri","—","Noke migä kra kra",""],["Camina con bien","Ditsö yöbë bë","Datë yöbë bë","Nara yöla nori","—","Dre yoa migä",""],["El sol sale","Iriria ditsö bë","Diá datë bë","Tâu nara nori","—","Krâ dre migä",""],["La lluvia bendice","Ükö sibö bë","Ükö sibö bë","Nöku töcu nori","—","Nüa ngöbe migä",""],["Nos vemos mañana","Iriria tsö bë","Diá tsö bë","Tâu nöri nori","—","Krâ tsö migä",""],["Abuela materna","Yë kö në","Yë kö në","Nula köri nöchi","—","Micha kra nan",""],["Bisabuelo","Bë kö kö kö","Bë kö kö kö","Nori köri köri köri","—","Migä kra kra kra",""],["Pariente","Bë tsö kö","Bë tsö kö","Nori nöri köri","—","Migä tsö kra",""],["Viuda","Yë ëk bë","Yë ëk bë","Nula yü nori","—","Micha döi migä",""],["Viudo","Bë ëk yë","Bë ëk yë","Nori yü nula","—","Migä döi micha",""],["Huérfano","Kë kö","Rë kö","Ichi köri kë","—","Ngwä kra kë",""],["Mellizos","Kë bötsi","Rë bötsi","Ichi böra","—","Ngwä bro",""],["Embarazada","Yë kë bë","Yë rë bë","Nula ichi nori","—","Micha ngwä migä",""],["Partera","Yë kë bë kö","Yë rë bë kö","Nula ichi nori köri","—","Micha ngwä migä kra",""],["Parto","Kë aba bë","Rë yök bë","Ichi toku nori","—","Ngwä dru migä",""],["Lactancia","Tsirú aba kë","Tsirú yök kë","Nöri toku köri","—","Ngwa dru kra",""],["Pubertad","Kë yöbë kö","Rë yöbë kö","Ichi yöla köri","—","Ngwä yoa kra",""],["Menstruación","Bë chä kö","Bë sëk kö","Nori kira köri","—","Migä kira kra",""],["Luto","Bë ëk tsö kö","Bë ëk tsö kö","Nori yü nöri köri","—","Migä döi tsö kra",""],["Duelo","Bë ëk sö","Bë ëk sö","Nori yü sëku","—","Migä döi soa",""],["Sepelio","Itö bë ëk","Duö bë ëk","Naku nori yü","—","Noke migä döi",""],["Resurrección","Kë bë tsö","Rë bë tsö","Ichi nori nöri","—","Ngwä migä tsö",""],["Venganza","Kë yöbë bë","Kë yöbë bë","Kë yöla nori","—","Kë yoa migä",""],["Perdón (acto)","Ëk bë yöbë","Ëk bë yöbë","Yü nori yöla","—","Döi migä yoa",""],["Reconciliación","Bë tsö yöbë kö","Bë tsö yöbë kö","Nori nöri yöla köri","—","Migä tsö yoa kra",""],["Promesa","Bë tsö kö yöbë","Bë tsö kö yöbë","Nori nöri köri yöla","—","Migä tsö kra yoa",""],["Secreto","Kë sö bë","Kë sö bë","Kë sëku nori","—","Kë soa migä",""],["Mentira","Kë yöbë bë tsö","Kë yöbë bë tsö","Kë yöla nori nöri","—","Kë yoa migä tsö",""],["Verdad","Yöbë bë tsö","Yöbë bë tsö","Yöla nori nöri","—","Yoa migä tsö",""],["Asamblea","Tsö kö bë","Tsö kö bë","Nöla köri nori","—","Ngwa kra migä",""],["Convite","Tsö yöbë kö","Tsö yöbë kö","Nöla yöla köri","—","Ngwa yoa kra",""],["Liderazgo","Bë kö tsö kö","Bë kö tsö kö","Nori köri nöri köri","—","Migä kra tsö kra",""],["Conflicto","Kë bë tsö","Kë bë tsö","Kë nori nöri","—","Kë migä tsö",""],["Acuerdo","Bë tsö kö yöbë","Bë tsö kö yöbë","Nori nöri köri yöla","—","Migä tsö kra yoa",""],["Alianza","Bë tsö yöbë","Bë tsö yöbë","Nori nöri yöla","—","Migä tsö yoa",""],["Norma","Bë yöbë kö","Bë yöbë kö","Nori yöla köri","—","Migä yoa kra",""],["Ley","Yöbë kö bë","Yöbë kö bë","Yöla köri nori","—","Yoa kra migä",""],["Castigo","Kë yöbë bë kö","Kë yöbë bë kö","Kë yöla nori köri","—","Kë yoa migä kra",""],["Recompensa","Yöbë bë kö","Yöbë bë kö","Yöla nori köri","—","Yoa migä kra",""],["Autoridad","Bë kö kö","Bë kö kö","Nori köri köri","—","Migä kra kra",""],["Obediencia","Bë kö sö","Bë kö sö","Nori köri sëku","—","Migä kra soa",""],["Desobediencia","Kë bë kö sö","Kë bë kö sö","Kë nori köri sëku","—","Kë migä kra soa",""],["Rebeldía","Kë yöbë bë","Kë yöbë bë","Kë yöla nori","—","Kë yoa migä",""],["Coraje","Bë kö yöbë","Bë kö yöbë","Nori köri yöla","—","Migä kra yoa",""],["Cobardía","Kë bë kö","Kë bë kö","Kë nori köri","—","Kë migä kra",""],["Pereza","Kë bë kö","Kë bë kö","Kë nori köri","—","Kë migä kra",""],["Envidia","Kë bë yöbë kö","Kë bë yöbë kö","Kë nori yöla köri","—","Kë migä yoa kra",""],["Celos","Kë bë tsö","Kë bë tsö","Kë nori nöri","—","Kë migä tsö",""],["Alegría","Yöbë bë","Yöbë bë","Yöla nori","—","Yoa migä",""],["Tristeza","Kë yöbë bë","Kë yöbë bë","Kë yöla nori","—","Kë yoa migä",""],["Enojo","Kë bë sö","Kë bë sö","Kë nori sëku","—","Kë migä soa",""],["Sorpresa","Bë kö bë","Bë kö bë","Nori köri nori","—","Migä kra migä",""],["Asombro","Bë kö iriria","Bë kö diá","Nori köri tâu","—","Migä kra krâ",""],["Vergüenza","Kë bë tsö","Kë bë tsö","Kë nori nöri","—","Kë migä tsö",""],["Orgullo","Bë kö kö yöbë","Bë kö kö yöbë","Nori köri köri yöla","—","Migä kra kra yoa",""],["Nostalgia","Bë kö bë ëk","Bë kö bë ëk","Nori köri nori yü","—","Migä kra migä döi",""],["Anhelo","Bë yöbë kö","Bë yöbë kö","Nori yöla köri","—","Migä yoa kra",""],["Soledad","Bë kö kë tsö","Bë kö kë tsö","Nori köri kë nöri","—","Migä kra kë tsö",""],["Compasión","Síniri bë yöbë","Síniri bë yöbë","Nöchi nori yöla","—","Ngü migä yoa",""],["Generosidad","Tsö bë yöbë kö","Tsö bë yöbë kö","Nöla nori yöla köri","—","Ngwa migä yoa kra",""],["Hospitalidad","Yö bë yöbë","Wák bë yöbë","Jiri nori yöla","—","Bri migä yoa",""],["Deseo","Bë yöbë","Bë yöbë","Nori yöla","—","Migä yoa",""],["Sueño (deseo)","Bë yöbë kö","Bë yöbë kö","Nori yöla köri","—","Migä yoa kra",""],["Pesadilla","Kë sula bë","Kë sula bë","Kë ulë nori","—","Kë krün migä",""],["Visión","Iriria bë kö","Diá bë kö","Tâu nori köri","—","Krâ migä kra",""],["Profecía","Bë tsö sibö kö","Bë tsö sibö kö","Nori nöri töcu köri","—","Migä tsö ngöbe kra",""],["Presagio","Bë sö kö","Bë sö kö","Nori sëku köri","—","Migä soa kra",""],["Ombligo del mundo","Itö kö bë","Duö kö bë","Naku köri nori","—","Noke kra migä",""],["Origen del universo","Sibö itö kö bë","Sibö duö kö bë","Töcu naku köri nori","—","Ngöbe noke kra migä",""],["Serpiente emplumada","Ditsö sö","Datë sö","Nöku sëku","—","Dre soa",""],["Trueno sagrado","Yëk sibö","Yëk sibö","Yëku töcu","—","Yëa ngöbe",""],["Inframundo","Itö kë","Duö kë","Naku köri","—","Noke kra",""],["Maldición","Kë sibö bë","Kë sibö bë","Kë töcu nori","—","Kë ngöbe migä",""],["Hechizo","Bë sö kë","Bë sö kë","Nori sëku kë","—","Migä soa kra",""],["Planta sagrada","Wö sibö","Wë sibö","Nöri töcu","—","Bare ngöbe",""],["Animal sagrado","Tsirú sibö","Tsirú sibö","Nöri töcu","—","Ngwa ngöbe",""],["Guarda espíritu","Bë sö yöbë bë","Bë sö yöbë bë","Nori sëku yöla nori","—","Migä soa yoa migä",""],["Tótem","Tsirú bë kö","Tsirú bë kö","Nöri nori köri","—","Ngwa migä kra",""],["Tabú","Kë bë kö","Kë bë kö","Kë nori köri","—","Kë migä kra",""],["Chamánica","Bë sö kö kë","Bë sö kö kë","Nori sëku köri kë","—","Migä soa kra kë",""],["Medicina tradicional","Wö sö yöbë kö","Wë sö yöbë kö","Nöri sëku yöla köri","—","Bare soa yoa kra",""],["Ungüento","Bë sö aba","Bë sö yök","Nori sëku toku","—","Migä soa dru",""],["Infusión","Aba wö sö","Yök wë sö","Toku nöri sëku","—","Dru bare soa",""],["Poción","Aba sö kö","Yök sö kö","Toku sëku köri","—","Dru soa kra",""],["Cataplasma","Wö sö itö bë","Wë sö duö bë","Nöri sëku naku nori","—","Bare soa noke migä",""],["Fiebre","Chä bë kë","Sëk bë kë","Kira nori köri","che ebrúng","Kira migä kra","drung sho"],["Herida","Bë yëkö","Bë yëkö","Nori yëku","—","Migä yëa",""],["Fractura","Bë kë kö","Bë kë kö","Nori köri kö","—","Migä kra kö",""],["Veneno","Kë aba kö","Kë yök kö","Kë toku köri","—","Kë dru kra",""],["Antídoto","Bë sö kö","Bë sö kö","Nori sëku köri","—","Migä soa kra",""],["Curandero mayor","Bë sö kö körö","Bë sö kö körö","Nori sëku köri köra","—","Migä soa kra ngora",""],["Aprendiz","Kë bë kë","Rë bë kë","Ichi nori köri","—","Ngwä migä kra",""],["Discípulo","Kë bë tsö kö","Rë bë tsö kö","Ichi nori nöri köri","—","Ngwä migä tsö kra",""],["Ofrenda floral","Wö kë sibö","Wë kë sibö","Nöri köri töcu","—","Bare kra ngöbe",""],["Ofrenda de maíz","Ëkö ukö sibö","Ëkö ukö sibö","Ëku naka töcu","—","Ngwa ngüa ngöbe",""],["Ofrenda de cacao","Wö ukö kö sibö","Wë ukö kö sibö","Nöri naka köri töcu","—","Bare ngüa kra ngöbe",""],["Vasija ceremonial","Aba yö sibö","Yök wák sibö","Toku jiri töcu","—","Dru bri ngöbe",""],["Bastón sagrado","Wö ditsö sibö","Wë datë sibö","Nöri tana töcu","—","Bare dre ngöbe",""],["Plumas sagradas","Sö tsö sibö","Sö tsö sibö","Sëku nöri töcu","—","Soa bare ngöbe",""],["Pintura corporal","Bë yëkö kö","Bë yëkö kö","Nori yëku köri","—","Migä yëa kra",""],["Tatuaje ritual","Bë yëkö sibö","Bë yëkö sibö","Nori yëku töcu","—","Migä yëa ngöbe",""],["Vestimenta tradicional","Yë tsö kö bë","Yë tsö kö bë","Nula nöri köri nori","—","Micha tsö kra migä",""],["Tocado","Bë kö kë kö","Bë kö kë kö","Nori köri kë köri","—","Migä kra kë kra",""],["Brazalete","Bë kë kö sö","Bë kë kö sö","Nori köri kö sëku","—","Migä kra kö soa",""],["Penacho","Sö tsö kö","Sö tsö kö","Sëku nöri köri","—","Soa bare kra",""],["Maraca","Sö bë kë","Sö bë kë","Sëku nori köri","—","Soa migä kra",""],["Flauta de bambú","Yëk wö ditsö","Yëk wë datë","Yëku nöri tana","—","Yëa bare dre",""],["Caparazón","Kë tsö","Kë tsö","Köri nöri","—","Kra tsö",""],["Telar","Yë tsö kë","Yë tsö kë","Nula nöri köri","—","Micha tsö kra",""],["Huso","Yë tsö aba","Yë tsö yök","Nula nöri toku","—","Micha tsö dru",""],["Guacal","Wö yö aba","Wë wák yök","Nöri jiri toku","cuáh","Bare bri dru","i yúc"],["Trapiche","Ëkö kë kö","Ëkö kë kö","Ëku köri kö","—","Ngwa kra kö",""],["Pilón","Kë ukö kö","Kë ukö kö","Köri naka köri","—","Kra ngüa kra",""],["Fogón","Chä yö","Sëk wák","Kira jiri","Tö kro","Kira bri","derár"],["Comal","Chä kë yö","Sëk kë wák","Kira köri jiri","—","Kira kra bri",""],["Jícara","Wö yö","Wë wák","Nöri jiri","—","Bare bri",""],["Olla de barro","Itö yö","Duö wák","Naku jiri","—","Noke bri",""],["Cerbatana","Yëk wö ditsö","Yëk wë datë","Yëku nöri tana","crang bot","Yëa bare dre","mócroh"],["Honda (arma)","Kë ditsö bë","Kë datë bë","Köri tana nori","—","Kra dre migä",""],["Arpón","Diá ditsö kë","Diá datë kë","Tana tana köri","—","Dru dre kra",""],["Trampa de animales","Tsirú kë yö","Tsirú kë wák","Nöri köri jiri","—","Ngwa kra bri",""],["Red de pesca","Diá bë kö","Diá bë kö","Tana nori köri","—","Dru migä kra",""],["Anzuelo","Diá kë","Diá kë","Tana köri","su","Dru kra",""],["Remo","Ditsö yö bë","Datë wák bë","Nara jiri nori","—","Dre bri migä",""],["Vela (barco)","Ditsö yö yëk","Datë wák yëk","Nara jiri yëku","—","Dre bri yëa",""],["Ancla","Ditsö kë kö","Datë kë kö","Nara köri kö","—","Dre kra kö",""],["Semilla de maíz","Ëkö kë","Ëkö kë","Ëku köri","—","Ngwa kra",""],["Surco","Itö ditsö","Duö datë","Naku nara","—","Noke dre",""],["Milpa","Ëkö itö","Ëkö duö","Ëku naku","—","Ngwa noke","te"],["Barbecho","Itö kë","Duö kë","Naku köri","—","Noke kra",""],["Roza","Wö tsö kë bë","Wë tsö kë bë","Nöri nöla köri nori","—","Bare ngo kra migä",""],["Guardar semillas","Wö kë yö bë","Wë kë wák bë","Nöri köri jiri nori","—","Bare kra bri migä",""],["Desgranar","Ëkö kë bë","Ëkö kë bë","Ëku köri nori","—","Ngwa kra migä",""],["Moler","Kë ukö bë","Kë ukö bë","Köri naka nori","—","Kra ngüa migä",""],["Fermentar","Aba tsö bë","Yök tsö bë","Toku nöri nori","—","Dru tsö migä",""],["Ahumar","Chä wö bë","Sëk wë bë","Kira nöri nori","—","Kira bare migä",""],["Salar","Kë ukö bë","Kë ukö bë","Köri naka nori","—","Kra ngüa migä",""],["Secar al sol","Iriria kë bë","Diá kë bë","Tâu köri nori","—","Krâ kra migä",""],["Cazar con flecha","Wö ditsö tsirú bë","Wë datë tsirú bë","Nöri tana nöri nori","—","Bare dre ngwa migä",""],["Rastrear","Tsirú bë kö","Tsirú bë kö","Nöri nori köri","—","Ngwa migä kra",""],["Trepar","Wö tsirú bë","Wë tsirú bë","Nöri nöla nori","—","Bare ngo migä",""],["Zambullirse","Aba kikë bë","Yök kikë bë","Toku kiki nori","—","Dru kika migä",""],["Remar","Ditsö yö bë","Datë wák bë","Nara jiri nori","—","Dre bri migä",""],["Navegar","Ditsö bë kö","Datë bë kö","Nara nori köri","—","Dre migä kra",""],["Escalar","Tsirú bë","Tsirú bë","Nöla nori","—","Ngo migä",""],["Saltar","Kë bë","Kë bë","Kë nori","—","Kë migä",""],["Agacharse","Itö bë","Duö bë","Naku nori","—","Noke migä",""],["Girar","Kë kö bë","Kë kö bë","Kë köri nori","—","Kë kra migä",""],["Soplar","Yëk bë","Yëk bë","Yëku nori","—","Yëa migä",""],["Silbar","Bë yëk sö","Bë yëk sö","Nori yëku sëku","—","Migä yëa soa",""],["Susurrar","Bë kikë sö","Bë kikë sö","Nori kiki sëku","—","Migä kika soa",""],["Gritar","Bë körö sö","Bë körö sö","Nori köra sëku","bacá saa","Migä ngora soa","úri"],["Llamar","Bë sö kö","Bë sö kö","Nori sëku köri","—","Migä soa kra",""],["Responder","Bë tsö bë","Bë tsö bë","Nori nöri nori","—","Migä tsö migä",""],["Preguntar","Bë tsö kë","Bë tsö kë","Nori nöri kë","—","Migä tsö kë",""],["Contar (historia)","Bë tsö kö","Bë tsö kö","Nori nöri köri","—","Migä tsö kra",""],["Adivinar","Bë kö sö","Bë kö sö","Nori köri sëku","—","Migä kra soa",""],["Soñar despierto","Iriria sula bë","Diá sula bë","Tâu ulë nori","—","Krâ krün migä",""],["Invocar","Sibö bë sö","Sibö bë sö","Töcu nori sëku","—","Ngöbe migä soa",""],["Consagrar","Sibö bë yöbë kö","Sibö bë yöbë kö","Töcu nori yöla köri","—","Ngöbe migä yoa kra",""],["Ofrendar","Ukö sibö bë","Ukö sibö bë","Naka töcu nori","—","Ngüa ngöbe migä",""],["Sacrificar","Tsirú sibö bë","Tsirú sibö bë","Nöri töcu nori","—","Ngwa ngöbe migä",""],["Purificarse","Aba sibö bë","Yök sibö bë","Toku töcu nori","—","Dru ngöbe migä",""],["Meditar","Bë kö kë tsö","Bë kö kë tsö","Nori köri kë nöri","—","Migä kra kë tsö",""],["Soñar con espíritus","Bë sö sula","Bë sö sula","Nori sëku ulë","—","Migä soa krün",""],["Comunicar con ancestros","Bë kö kö sö bë","Bë kö kö sö bë","Nori köri köri sëku nori","—","Migä kra kra soa migä",""],["Celebrar","Tsö yöbë bë","Tsö yöbë bë","Nöla yöla nori","—","Ngwa yoa migä",""],["Caminar en silencio","Ditsö kë sö bë","Datë kë sö bë","Nara kë sëku nori","—","Dre kë soa migä",""],["Observar la naturaleza","Itö tsö iriria bë","Duö tsö diá bë","Naku nöri tâu nori","—","Noke tsö krâ migä",""],["Escuchar el viento","Yëk sö bë","Yëk sö bë","Yëku sëku nori","—","Yëa soa migä",""],["Beber agua de río","Diá aba bë","Diá yök bë","Tana toku nori","—","Dru dru migä",""],["Dormir bajo las estrellas","Sula kö sula bë","Sö kö sula bë","Ulë nöri ulë nori","—","Krün ngwa krün migä",""],["Respirar aire puro","Yëk yöbë bë","Yëk yöbë bë","Yëku yöla nori","—","Yëa yoa migä",""],["Palco","Yö kö kö","Wák kö kö","Jiri köri köri","—","Bri kra kra",""],["Choza","Yö kikë","Wák kikë","Jiri kiki","Kro kik","Bri kika",""],["Maloca","Yö körö","Wák körö","Jiri köra","Kro kör","Bri ngora",""],["Bohío","Yö kë","Wák kë","Jiri köri","Kro kö","Bri kra",""],["Tambor grande","Sö bë kë körö","Sö bë kë körö","Sëku nori köri köra","—","Soa migä kra ngora",""],["Chirimía","Yëk sö kö","Yëk sö kö","Yëku sëku köri","—","Yëa soa kra",""],["Sonaja","Sö kë tsö","Sö kë tsö","Sëku köri nöri","—","Soa kra tsö",""],["Caracol marino","Kë ditsö sö","Kë datë sö","Köri tâna sëku","—","Kra dre soa",""],["Cuero de tambor","Sö bë kë tsö","Sö bë kë tsö","Sëku nori köri nöri","—","Soa migä kra tsö",""],["Silbato ritual","Bë yëk sö sibö","Bë yëk sö sibö","Nori yëku sëku töcu","—","Migä yëa soa ngöbe",""],["Tejido de palma","Wö kö tsö bë","Wë kö tsö bë","Nöri köri nöri nori","—","Bare kra tsö migä",""],["Tinte natural","Wö yëkö","Wë yëkö","Nöri yëku","—","Bare yëa",""],["Bordado","Yë tsö kö","Yë tsö kö","Nula nöri köri","—","Micha tsö kra",""],["Macramé","Wö bë tsö","Wë bë tsö","Nöri nori nöri","—","Bare migä tsö",""],["Cerámica","Itö yö bë","Duö wák bë","Naku jiri nori","—","Noke bri migä",""],["Talla en madera","Wö kë bë kö","Wë kë bë kö","Nöri köri nori köri","—","Bare kra migä kra",""],["Joyería ritual","Kö sö sibö bë","Kö sö sibö bë","Köri sëku töcu nori","—","Kra soa ngöbe migä",""],["Mochila de fique","Wö yö kö bë","Wë wák kö bë","Nöri jiri köri nori","—","Bare bri kra migä",""],["Collar de conchas","Kë ditsö kö sö","Kë datë kö sö","Köri tâna köri sëku","—","Kra dre kra soa",""],["Camino de piedra","Ditsö kë","Datë kë","Nara köri","—","Dre kra",""],["Puente colgante","Ditsö diá wö","Datë diá wë","Nara tana nöri","—","Dre dru bare",""],["Canoa de tronco","Wö ditsö yö","Wë datë wák","Nöri nara jiri","—","Bare dre bri",""],["Terracería","Itö ditsö bë","Duö datë bë","Naku nara nori","—","Noke dre migä",""],["Irrigación","Aba ditsö bë","Yök datë bë","Toku nara nori","—","Dru dre migä",""],["Acueducto","Aba ditsö yö","Yök datë wák","Toku nara jiri","—","Dru dre bri",""],["Cerrojo","Yö kë bë","Wák kë bë","Jiri köri nori","—","Bri kra migä",""],["Granero","Ukö yö kö","Ukö wák kö","Naka jiri köri","—","Ngüa bri kra",""],["Reservorio","Aba yö kö","Yök wák kö","Toku jiri köri","—","Dru bri kra",""],["Patio ceremonial","Itö yö sibö","Duö wák sibö","Naku jiri töcu","—","Noke bri ngöbe",""],["Mirador","Iriria yö kö","Diá wák kö","Tâu jiri köri","—","Krâ bri kra",""],["Embarcadero","Ditsö yö itö","Datë wák duö","Nara jiri naku","—","Dre bri noke",""],["Fogata ritual","Chä tsö sibö","Sëk tsö sibö","Kira nöri töcu","—","Kira tsö ngöbe",""],["Manglares","Wö ditsö kö","Wë datë kö","Nöri tâna köri","—","Bare dre kra",""],["Humedal","Aba itö kö","Yök duö kö","Toku naku köri","—","Dru noke kra",""],["Pantano","Aba itö","Yök duö","Toku naku","—","Dru noke",""],["Cenote","Aba kë yö kö","Yök kë wák kö","Toku köri jiri köri","—","Dru kra bri kra",""],["Acantilado","Tsirú kë kö","Tsirú kë kö","Nöla köri kö","—","Ngo kra kö",""],["Barranca","Itö kë kö","Duö kë kö","Naku köri kö","—","Noke kra kö",""],["Llanura","Itö yöbë","Duö yöbë","Naku yöla","—","Noke yoa",""],["Praderas","Itö wö yöbë","Duö wë yöbë","Naku nöri yöla","—","Noke bare yoa",""],["Desierto","Itö kë aba","Duö kë yök","Naku kë toku","—","Noke kë dru",""],["Nevado","Tsirú aba kë","Tsirú yök kë","Nöla toku köri","—","Ngo dru kra",""],["Nieve","Aba kë","Yök kë","Toku köri","—","Dru kra",""],["Hielo","Aba kë kö","Yök kë kö","Toku köri köri","—","Dru kra kra",""],["Rocío","Aba sö","Yök sö","Toku sëku","—","Dru soa",""],["Escarcha","Aba kë sö","Yök kë sö","Toku köri sëku","—","Dru kra soa",""],["Granizo","Kë aba kö","Kë yök kö","Kë toku köri","—","Kë dru kra",""],["Ventisca","Yëk aba kö","Yëk yök kö","Yëku toku köri","—","Yëa dru kra",""],["Tormenta","Yëk ükö kö","Yëk ükö kö","Yëku nöku köri","—","Yëa nüa kra",""],["Tifón","Yëk körö kö","Yëk körö kö","Yëku köra köri","—","Yëa ngora kra",""],["Tornado","Yëk kö bë","Yëk kö bë","Yëku köri nori","—","Yëa kra migä",""],["Bruma","Yëk kë","Yëk kë","Yëku köri","—","Yëa kra",""],["Neblina","Yëk kö","Yëk kö","Yëku köri","—","Yëa kra",""],["Vapor","Chä aba","Sëk yök","Kira toku","—","Kira dru",""],["Viento favorable","Yëk yöbë","Yëk yöbë","Yëku yöla","—","Yëa yoa",""],["Brisa","Yëk kikë","Yëk kikë","Yëku kiki","—","Yëa kika",""],["Huracán","Yëk körö kö","Yëk körö kö","Yëku köra köri","—","Yëa ngora kra",""],["Terral","Itö yëk","Duö yëk","Naku yëku","—","Noke yëa",""],["Meteoro","Sula kë bë","Sö kë bë","Ulë köri nori","—","Krün kra migä",""],["Cometa","Sula kë ditsö","Sö kë datë","Ulë köri nara","—","Krün kra dre",""],["Constelación","Sula kö tsö","Sö kö tsö","Ulë köri nöri","—","Krün kra tsö",""],["Vía Láctea","Sula ditsö körö","Sö datë körö","Ulë nara köra","—","Krün dre ngora",""],["Venus (planeta)","Iriria sula","Diá sö","Tâu ulë","—","Krâ krün",""],["Solsticio de invierno","Iriria kë kö","Diá kë kö","Tâu köri kö","—","Krâ kra kö",""],["Solsticio de verano","Iriria kö kö","Diá kö kö","Tâu köri köri","—","Krâ kra kra",""],["Equinoccio","Iriria bötsi","Diá bötsi","Tâu böra","—","Krâ bro",""],["Ciclo lunar","Sula kö bë","Sula kö bë","Ulë köri nori","—","Krün kra migä",""],["Luna nueva","Sula kë","Sula kë","Ulë köri","—","Krün kra",""],["Luna llena","Sula körö","Sula körö","Ulë köra","—","Krün ngora",""],["Luna menguante","Sula kikë bë","Sula kikë bë","Ulë kiki nori","—","Krün kika migä",""],["Luna creciente","Sula yöbë bë","Sula yöbë bë","Ulë yöla nori","—","Krün yoa migä",""],["Calendario sagrado","Iriria kö sibö","Diá kö sibö","Tâu köri töcu","—","Krâ kra ngöbe",""],["Ciclo agrícola","Ëkö itö kö","Ëkö duö kö","Ëku naku köri","—","Ngwa noke kra",""],["Temporada de pesca","Diá bë iriria","Diá bë diá","Tana nori tâu","—","Dru migä krâ",""],["Época de siembra","Wö kë bë iriria","Wë kë bë diá","Nöri köri nori tâu","—","Bare kra migä krâ",""],["Tiempo de cosecha","Wö ukö iriria","Wë ukö diá","Nöri naka tâu","—","Bare ngüa krâ",""],["Tiempo de lluvia","Ükö iriria","Ükö diá","Nöku tâu","—","Nüa krâ",""],["Tiempo seco","Kë aba iriria","Kë yök diá","Kë toku tâu","—","Kë dru krâ",""],["Amanecer sagrado","Iriria kë sibö","Diá kë sibö","Tâu köri töcu","—","Krâ kra ngöbe",""],["Puesta de sol","Iriria ëk kö","Diá ëk kö","Tâu yü köri","—","Krâ döi kra",""],["Noche sin luna","Sula kë tsö","Sula kë tsö","Ulë köri nöri","—","Krün kra tsö",""],["Noche estrellada","Sula kö tsö","Sula kö tsö","Ulë köri nöri","—","Krün kra tsö",""],["Oscuridad sagrada","Sula kirö sibö","Sula kirö sibö","Ulë kira töcu","—","Krün kiroa ngöbe",""],["Luz sagrada","Iriria sibö","Diá sibö","Tâu töcu","—","Krâ ngöbe",""],["Fuente de vida","Aba yöbë bë","Yök yöbë bë","Toku yöla nori","—","Dru yoa migä",""],["Semilla sagrada","Wö kë sibö","Wë kë sibö","Nöri köri töcu","—","Bare kra ngöbe",""],["Fruto sagrado","Wö ukö sibö","Wë ukö sibö","Nöri naka töcu","—","Bare ngüa ngöbe",""],["Raíz sagrada","Wö aba sibö","Wë yök sibö","Nöri toku töcu","—","Bare dru ngöbe",""],["Río sagrado","Diá sibö","Diá sibö","Tana töcu","—","Dru ngöbe",""],["Montaña sagrada","Tsirú sibö","Tsirú sibö","Nöla töcu","Krö sibö","Ngo ngöbe",""],["Lago sagrado","Diá yö sibö","Diá wák sibö","Tana jiri töcu","—","Dru bri ngöbe",""],["Bosque sagrado","Wö tsö sibö","Wë tsö sibö","Nöri nöla töcu","—","Bare ngo ngöbe",""],["Cueva sagrada","Kë yö sibö","Kë wák sibö","Köri jiri töcu","—","Kra bri ngöbe",""],["Piedra sagrada","Kë sibö","Kë sibö","Köri töcu","Kö sibö","Kra ngöbe",""],["Usted","Bë","Bë","Nori","Brö","Migä",""],["Nosotros","Tsö","Tsö","Nöri","Tsö","Ngwa",""],["Ellos","Bë tsö","Bë tsö","Nori tsö","diirój","Migä tsö","oba quimre"],["Aquí","Yö bë","Wák bë","Jiri nori","hué eh","Bri migä",""],["Allá","Kë yö","Kë wák","Kë jiri","doa háta","Kë bri",""],["Este (pronombre)","Bë","Bë","Nori","—","Migä",""],["¿Qué?","Dö bë","Dö bë","Dö nori","—","Dö migä",""],["¿Quién?","Bë kö","Bë kö","Nori köri","—","Migä kra",""],["¿Cuánto?","Kö tsö","Kö tsö","Köri nöri","—","Kra tsö",""],["¿Por qué?","Bë tsö kö","Bë tsö kö","Nori nöri köri","—","Migä tsö kra",""],["¿Cómo?","Bë kö","Bë kö","Nori köri","—","Migä kra",""],["¿Dónde?","Yö bë","Wák bë","Jiri nori","—","Bri migä",""],["¿Cuándo?","Iriria bë","Diá bë","Tâu nori","—","Krâ migä",""],["Morder","Bë ukö","Bë ukö","Nori naka","—","Migä ngüa",""],["Pellizcar","Kë bë tsö","Kë bë tsö","Kë nori nöri","—","Kë migä tsö",""],["Acariciar","Bë yöbë","Bë yöbë","Nori yöla","—","Migä yoa",""],["Abrazar","Tsö bë kö","Tsö bë kö","Nöri nori köri","—","Tsö migä kra",""],["Besar","Bë tsö iriria","Bë tsö diá","Nori nöri tâu","—","Migä tsö krâ",""],["Señalar","Bë ditsö","Bë datë","Nori tana","—","Migä dre",""],["Contar números","Kö bë","Kö bë","Köri nori","—","Kra migä",""],["Medir","Bötsi bë","Bötsi bë","Böra nori","—","Bro migä",""],["Pesar","Kö itö bë","Kö duö bë","Köri naku nori","—","Kra noke migä",""],["Comparar","Bötsi bë kö","Bötsi bë kö","Böra nori köri","cha amó aráh","Bro migä kra","ñiágro yóso"],["Elegir","Yöbë bë","Yöbë bë","Yöla nori","—","Yoa migä",""],["Rechazar","Kë bë","Kë bë","Kë nori","—","Kë migä",""],["Aceptar","Yöbë bë kö","Yöbë bë kö","Yöla nori köri","—","Yoa migä kra",""],["Tolerar","Kö bë kö","Kö bë kö","Köri nori köri","—","Kra migä kra",""],["Oponerse","Kë bë kö","Kë bë kö","Kë nori köri","—","Kë migä kra",""],["Negociar","Bë kë bë","Bë kë bë","Nori köri nori","—","Migä kra migä",""],["Intercambiar","Bë kë bë tsö","Bë kë bë tsö","Nori köri nori nöri","—","Migä kra migä tsö",""],["Robar","Kë bë tsö","Kë bë tsö","Kë nori nöri","—","Kë migä tsö",""],["Devolver","Bë ëk tsö","Bë ëk tsö","Nori yü nöri","—","Migä döi tsö",""],["Prestar","Bë tsö kë","Bë tsö kë","Nori nöri kë","—","Migä tsö kë",""],["Pedir prestado","Kë tsö bë","Kë tsö bë","Kë nöri nori","—","Kë tsö migä",""],["Reunirse","Tsö bë","Tsö bë","Nöla nori","Tsö brö","Ngwa migä",""],["Separarse","Kë tsö bë","Kë tsö bë","Kë nöla nori","—","Kë ngwa migä",""],["Seguir","Ditsö bë kö","Datë bë kö","Nara nori köri","—","Dre migä kra",""],["Huir","Kë ditsö bë","Kë datë bë","Kë nara nori","—","Kë dre migä",""],["Perseguir","Ditsö yöbë bë","Datë yöbë bë","Nara yöla nori","—","Dre yoa migä",""],["Alcanzar","Ditsö kö bë","Datë kö bë","Nara köri nori","crújuga ashát","Dre kra migä",""],["Cruzar","Ditsö bötsi bë","Datë bötsi bë","Nara böra nori","—","Dre bro migä",""],["Rodear","Kë kö ditsö bë","Kë kö datë bë","Kë köri nara nori","—","Kë kra dre migä",""],["Jalar","Bë bë kö","Bë bë kö","Nori nori köri","—","Migä migä kra",""],["Empujar","Bë kö bë","Bë kö bë","Nori köri nori","ca atzúnga","Migä kra migä","pos coso"],["Cargar","Bë tsö bë","Bë tsö bë","Nori nöri nori","ong téh chi jah","Migä tsö migä","tafafáni"],["Soltar","Kë bë bë","Kë bë bë","Kë nori nori","—","Kë migä migä",""],["Atar","Wö bë bë","Wë bë bë","Nöri nori nori","ínga","Bare migä migä","crotengsoh"],["Desatar","Kë wö bë","Kë wë bë","Kë nöri nori","shúng ah","Kë bare migä","cong so"],["Colgar","Tsirú bë kë","Tsirú bë kë","Nöla nori köri","cruuh chuínga","Ngo migä kra","poyóng so"],["Enterrar","Itö bë","Duö bë","Naku nori","—","Noke migä",""],["Desenterrar","Kë itö bë","Kë duö bë","Kë naku nori","—","Kë noke migä",""],["Plantar","Wö bë","Wë bë","Nöri nori","—","Bare migä",""],["Regar","Aba wö bë","Yök wë bë","Toku nöri nori","—","Dru bare migä",""],["Podar","Wö kë bë","Wë kë bë","Nöri köri nori","—","Bare kra migä",""],["Cortar madera","Wö kë bë","Wë kë bë","Nöri köri nori","—","Bare kra migä",""],["Tallar piedra","Kë bë kö","Kë bë kö","Köri nori köri","—","Kra migä kra",""],["Teñir","Yëkö bë kö","Yëkö bë kö","Yëku nori köri","—","Yëa migä kra",""],["Coser","Yë kë bë","Yë kë bë","Nula köri nori","—","Micha kra migä",""],["Hilar","Wö bë kö","Wë bë kö","Nöri nori köri","—","Bare migä kra",""],["Asar","Chä ukö bë","Sëk ukö bë","Kira naka nori","mar ishí","Kira ngüa migä","to su borcón"],["Hervir","Aba chä bë","Yök sëk bë","Toku kira nori","—","Dru kira migä",""],["Hornear","Chä kë bë","Sëk kë bë","Kira köri nori","—","Kira kra migä",""],["Mezclar","Bötsi ukö bë","Bötsi ukö bë","Böra naka nori","—","Bro ngüa migä",""],["Pelar","Wö ukö kë bë","Wë ukö kë bë","Nöri naka köri nori","—","Bare ngüa kra migä",""],["Picar (cocina)","Kë ukö bë","Kë ukö bë","Kë naka nori","—","Kë ngüa migä",""],["Servir comida","Ukö bë tsö","Ukö bë tsö","Naka nori nöri","—","Ngüa migä tsö",""],["Brindar","Aba yöbë bë","Yök yöbë bë","Toku yöla nori","—","Dru yoa migä",""],["Ayunar","Kë ukö bë","Kë ukö bë","Kë naka nori","—","Kë ngüa migä",""],["Sanar una herida","Bë yëkö sö bë","Bë yëkö sö bë","Nori yëku sëku nori","—","Migä yëa soa migä",""],["Aplicar medicina","Wö sö bë kö","Wë sö bë kö","Nöri sëku nori köri","—","Bare soa migä kra",""],["Sudar","Aba chä bë","Yök sëk bë","Toku kira nori","—","Dru kira migä",""],["Toser","Bë yëk kö","Bë yëk kö","Nori yëku köri","—","Migä yëa kra",""],["Estornudar","Bë yëk tsö","Bë yëk tsö","Nori yëku nöri","—","Migä yëa tsö",""],["Sangrar","Bë chä bë","Bë sëk bë","Nori kira nori","—","Migä kira migä",""],["Cicatrizar","Bë yöbë bë","Bë yöbë bë","Nori yöla nori","—","Migä yoa migä",""],["Nacer de nuevo","Kë bë tsö","Rë bë tsö","Ichi nori nöri","—","Ngwä migä tsö",""],["Ofrenda de humo","Chä yëk sibö","Sëk yëk sibö","Kira yëku töcu","—","Kira yëa ngöbe",""],["Ritual de lluvia","Ükö sibö bë","Ükö sibö bë","Nöku töcu nori","—","Nüa ngöbe migä",""],["Danza del jaguar","Bë iriria tsirú kö","Bë diá tsirú kö","Nori tâu nöri köri","—","Migä krâ ngwa kra",""],["Canto al amanecer","Sö iriria kë bë","Sö diá kë bë","Sëku tâu köri nori","—","Soa krâ kra migä",""],["Ceremonia de fuego","Chä tsö sibö","Sëk tsö sibö","Kira nöri töcu","Tö tsö sibö","Kira tsö ngöbe",""],["Ritual de agua","Aba bë sibö","Yök bë sibö","Toku nori töcu","Unk brö sibö","Dru migä ngöbe",""],["Ceremonia de siembra","Wö kë sibö bë","Wë kë sibö bë","Nöri köri töcu nori","—","Bare kra ngöbe migä",""],["Ritual de cosecha","Wö ukö sibö bë","Wë ukö sibö bë","Nöri naka töcu nori","—","Bare ngüa ngöbe migä",""],["Iniciación masculina","Bë kë sibö","Bë rë sibö","Nori ichi töcu","—","Migä ngwä ngöbe",""],["Iniciación femenina","Yë kë sibö","Yë rë sibö","Nula ichi töcu","—","Micha ngwä ngöbe",""],["Ayuno ritual","Kë ukö sibö","Kë ukö sibö","Kë naka töcu","—","Kë ngüa ngöbe",""],["Baño ritual de hierbas","Aba wö sö sibö","Yök wë sö sibö","Toku nöri sëku töcu","—","Dru bare soa ngöbe",""],["Velada chamánica","Sula bë sö kö","Sula bë sö kö","Ulë nori sëku köri","—","Krün migä soa kra",""],["Trance ritual","Bë sö kö kö","Bë sö kö kö","Nori sëku köri köri","—","Migä soa kra kra",""],["Cuatro puntos cardinales","Kö bötsi bötsi","Kö bötsi bötsi","Köri böra böra","—","Kra bro bro",""],["Centro del mundo","Itö kö bë sibö","Duö kö bë sibö","Naku köri nori töcu","—","Noke kra migä ngöbe",""],["Dualidad","Bötsi kö bë","Bötsi kö bë","Böra köri nori","—","Bro kra migä",""],["Ciclo de vida","Bë kö bë","Bë kö bë","Nori köri nori","—","Migä kra migä",""],["Renacimiento","Kë bë tsö kö","Rë bë tsö kö","Ichi nori nöri köri","—","Ngwä migä tsö kra",""],["Eterno","Kö kö kö bë","Kö kö kö bë","Köri köri köri nori","—","Kra kra kra migä",""],["Infinito","Kö kö kë kö","Kö kö kë kö","Köri köri kë köri","—","Kra kra kë kra",""],["Creación","Sibö bë kö","Sibö bë kö","Töcu nori köri","Sibö brö kör","Ngöbe migä kra",""],["Destrucción","Kë sibö bë","Kë sibö bë","Kë töcu nori","—","Kë ngöbe migä",""],["Transformación sagrada","Bë bötsi sibö","Bë bötsi sibö","Nori böra töcu","—","Migä bro ngöbe",""],["Espíritu del agua","Aba bë sö","Yök bë sö","Toku nori sëku","Unk brö sö","Dru migä soa",""],["Espíritu del fuego","Chä bë sö","Sëk bë sö","Kira nori sëku","Tö brö sö","Kira migä soa",""],["Espíritu del viento","Yëk bë sö","Yëk bë sö","Yëku nori sëku","Yök brö sö","Yëa migä soa",""],["Espíritu de la tierra","Itö bë sö","Duö bë sö","Naku nori sëku","Dru brö sö","Noke migä soa",""],["Dueño del monte","Tsirú bë kö","Tsirú bë kö","Nöla nori köri","—","Ngo migä kra",""],["Madre tierra","Itö në","Duö në","Naku nöchi","Dru nö","Noke nan",""],["Padre sol","Iriria bë","Diá bë","Tâu nori","Brún bö","Krâ bab",""],["Abuela luna","Sula yë kö","Sula yë kö","Ulë nula köri","—","Krün micha kra",""],["Abuelo fuego","Chä bë kö","Sëk bë kö","Kira nori köri","Tö bö kö","Kira migä kra",""],["Hermano árbol","Wö bë tsö","Wë bë tsö","Nöri nori nöri","—","Bare migä tsö",""],["Hermana luna","Sula yë tsö","Sula yë tsö","Ulë nula nöri","—","Krün micha tsö",""],["Tejido sagrado","Yë tsö sibö","Yë tsö sibö","Nula nöri töcu","—","Micha tsö ngöbe",""],["Barro sagrado","Itö sibö","Duö sibö","Naku töcu","Dru sibö","Noke ngöbe",""],["Nuestro creador","Sibö tsö","Sibö tsö","Töcu nöri","Sibö tsö","Ngöbe ngwa",""],["Nuestra madre","Në tsö","Në tsö","Nöchi nöri","Nö tsö","Nan ngwa",""],["Nuestro padre","Bë tsö","Bë tsö","Nori nöri","Bö tsö","Bab ngwa",""],["Guardianes del bosque","Wö tsö bë kö tsö","Wë tsö bë kö tsö","Nöri nöla nori köri nöri","—","Bare ngo migä kra tsö",""],["Protectores del agua","Aba bë yöbë tsö","Yök bë yöbë tsö","Toku nori yöla nöri","—","Dru migä yoa tsö",""],["Custodios del fuego","Chä bë kö tsö","Sëk bë kö tsö","Kira nori köri nöri","—","Kira migä kra tsö",""],["Todos somos uno","Kö kö tsö bë","Kö kö tsö bë","Köri köri nöla nori","—","Kra kra ngwa migä",""],["La vida es sagrada","Bë yöbë sibö","Bë yöbë sibö","Nori yöla töcu","—","Migä yoa ngöbe",""],["Respeta la naturaleza","Itö tsö bë yöbë kö","Duö tsö bë yöbë kö","Naku nöri nori yöla köri","—","Noke tsö migä yoa kra",""],["Cuida el agua","Aba bë kö bë","Yök bë kö bë","Toku nori köri nori","Unk brö kör","Dru migä kra migä",""],["No contamines el río","Kë kë yöbë diá","Kë kë yöbë diá","Kë kë yöla tana","—","Kë kë yoa dru",""],["Sembremos juntos","Wö kë bë tsö","Wë kë bë tsö","Nöri köri nori nöri","—","Bare kra migä tsö",""],["Cosechemos en comunidad","Wö ukö bë tsö yö","Wë ukö bë tsö wák","Nöri naka nori nöla jiri","—","Bare ngüa migä ngwa bri",""],["Escuchemos a los ancianos","Bë kö kö sö bë","Bë kö kö sö bë","Nori köri köri sëku nori","—","Migä kra kra soa migä",""],["Aprendamos la lengua","Bë ditsö kë bë","Bë datë kë bë","Nori tana köri nori","—","Migä dre kra migä",""],["Cantemos al sol","Sö iriria bë tsö","Sö diá bë tsö","Sëku tâu nori nöri","—","Soa krâ migä tsö",""],["Bailemos bajo la luna","Bë iriria sula bë","Bë diá sula bë","Nori tâu ulë nori","—","Migä krâ krün migä",""],["Honremos la memoria","Bë kö bë kö ëyö","Bë kö bë kö ká","Nori köri nori köri shíi","—","Migä kra migä kra jä",""],["Vivir con dignidad","Bë yöbë kö kö bë","Bë yöbë kö kö bë","Nori yöla köri köri nori","—","Migä yoa kra kra migä",""],["Nuestras raíces","Wö aba tsö","Wë yök tsö","Nöri toku nöri","—","Bare dru tsö",""],["Lengua ancestral","Bë ditsö kö kö","Bë datë kö kö","Nori tana köri köri","—","Migä dre kra kra",""],["Costumbre sagrada","Bë tsö kö sibö","Bë tsö kö sibö","Nori nöri köri töcu","—","Migä tsö kra ngöbe",""],["Legado cultural","Bë tsö kö kö","Bë tsö kö kö","Nori nöri köri köri","—","Migä tsö kra kra",""],["Pueblo en resistencia","Tsö yö kë yöbë kö","Tsö wák kë yöbë kö","Nöla jiri kë yöla köri","—","Ngwa bri kë yoa kra",""],["Tierra viva","Itö yöbë","Duö yöbë","Naku yöla","Dru yöb","Noke yoa",""],["Raíces profundas","Wö aba körö","Wë yök körö","Nöri toku köra","—","Bare dru ngora",""],["Caminos antiguos","Ditsö kö kö","Datë kö kö","Nara köri köri","—","Dre kra kra",""],["Palabras de los mayores","Bë tsö bë kö kö","Bë tsö bë kö kö","Nori nöri nori köri köri","—","Migä tsö migä kra kra",""],["Cantos milenarios","Sö yöbë kö kö kö","Sö yöbë kö kö kö","Sëku yöla köri köri köri","—","Soa yoa kra kra kra",""],["Danzas sagradas","Bë iriria sibö tsö","Bë diá sibö tsö","Nori tâu töcu nöri","—","Migä krâ ngöbe tsö",""],["Ríos eternos","Diá kö kö kö","Diá kö kö kö","Tana köri köri köri","—","Dru kra kra kra",""],["Selva protectora","Wö tsö yöbë bë","Wë tsö yöbë bë","Nöri nöla yöla nori","—","Bare ngo yoa migä",""],["Agua que da vida","Aba bë yöbë kö","Yök bë yöbë kö","Toku nori yöla köri","Unk brö yöb kör","Dru migä yoa kra",""],["Fuego que purifica","Chä bë sibö bë","Sëk bë sibö bë","Kira nori töcu nori","—","Kira migä ngöbe migä",""],["Viento que cura","Yëk bë sö yöbë","Yëk bë sö yöbë","Yëku nori sëku yöla","—","Yëa migä soa yoa",""],["Tierra que alimenta","Itö bë ukö bë","Duö bë ukö bë","Naku nori naka nori","—","Noke migä ngüa migä",""],["Sol que guía","Iriria bë ditsö bë","Diá bë datë bë","Tâu nori nara nori","—","Krâ migä dre migä",""],["Luna que alumbra","Sula bë iriria bë","Sula bë diá bë","Ulë nori tâu nori","—","Krün migä krâ migä",""],["Estrella que orienta","Sula kö bë ditsö","Sö kö bë datë","Ulë nöri nori nara","—","Krün ngwa migä dre",""],["Planta que sana","Wö bë sö yöbë","Wë bë sö yöbë","Nöri nori sëku yöla","—","Bare migä soa yoa",""],["Animal que enseña","Tsirú bë kë tsö","Tsirú bë kë tsö","Nöri nori köri nöri","—","Ngwa migä kra tsö",""],["Piedra que recuerda","Kë bë kö bë","Kë bë kö bë","Köri nori köri nori","—","Kra migä kra migä",""],["Mar que conecta","Ditsö bë tsö bë","Datë bë tsö bë","Tâna nori nöri nori","—","Dre migä tsö migä",""],["Montaña que sostiene","Tsirú bë kö bë","Tsirú bë kö bë","Nöla nori köri nori","—","Ngo migä kra migä",""],["Bosque que respira","Wö tsö bë yëk","Wë tsö bë yëk","Nöri nöla nori yëku","—","Bare ngo migä yëa",""],["Cigarro sagrado","Wö sö sibö","Wë sö sibö","Nöri sëku töcu","—","Bare soa ngöbe",""],["Amanecer (verbo)","Iriria kë","Diá kë","Tâu köri","Brún kö","Krâ kra",""],["Oscurecer","Sula bë","Sula bë","Ulë nori","Dör sula bë","Krün migä",""],["Llover","Ükö bë","Ükö bë","Nöku nori","Ëkö brö","Nüa migä",""],["Tronar","Yëk chä bë","Yëk sëk bë","Yëku kira nori","—","Yëa kira migä",""],["Brillar","Iriria yöbë","Diá yöbë","Tâu yöla","Brún yöb","Krâ yoa",""],["Fluir","Aba ditsö","Yök datë","Toku nara","Unk drö","Dru dre",""],["Crecer (planta)","Wö körö bë","Wë körö bë","Nöri köra nori","—","Bare ngora migä",""],["Florecer","Wö kë yöbë","Wë kë yöbë","Nöri köri yöla","—","Bare kra yoa",""],["Secar (sol)","Iriria kë bë","Diá kë bë","Tâu köri nori","—","Krâ kra migä",""],["Inundar","Aba körö bë","Yök körö bë","Toku köra nori","—","Dru ngora migä",""],["Talar","Wö kë bë","Wë kë bë","Nöri köri nori","—","Bare kra migä",""],["Cosechar frijol","Kë ukö bë","Kë ukö bë","Köri naka nori","—","Kra ngüa migä",""],["Regar cultivo","Aba ëkö bë","Yök ëkö bë","Toku ëku nori","—","Dru ngwa migä",""],["Pescar con red","Diá kö bë","Diá kö bë","Tana köri nori","—","Dru kra migä",""],["Tejer canasta","Wö yö bë","Wë wák bë","Nöri jiri nori","—","Bare bri migä",""],["Tallar madera","Wö kë kö bë","Wë kë kö bë","Nöri köri kö nori","—","Bare kra kö migä",""],["Teñir tela","Yë yëkö bë","Yë yëkö bë","Nula yëku nori","—","Micha yëa migä",""],["Curar herida","Bë yëkö sö bë","Bë yëkö sö bë","Nori yëku sëku nori","—","Migä yëa soa migä",""],["Preparar medicina","Wö sö bë","Wë sö bë","Nöri sëku nori","—","Bare soa migä",""],["Coatí","Tsirú kö","Tsirú kö","Nöri kö","—","Ngwa kö",""],["Armadillo","Kë tsö bë","Kë tsö bë","Köri nöri","—","Kra tsö",""],["Mapache","Tsirú yë kö","Tsirú yë kö","Nöri yë köri","—","Ngwa micha kra",""],["Zorro","Tsirú kë kö","Tsirú kë kö","Nöri kë köri","—","Ngwa kë kra",""],["Nutria","Diá tsirú","Diá tsirú","Tana nöri","—","Dru ngwa",""],["Delfín rosado","Diá yöbë iriria","Diá yöbë diá","Tana yöla tâu","—","Dru yoa krâ",""],["Tucúquere","Sö sula kö","Sö sula kö","Sëku ulë köri","—","Soa krün kra",""],["Martín pescador","Sö diá kö","Sö diá kö","Sëku tana köri","—","Soa dru kra",""],["Garza blanca","Sö aba skabë","Sö yök skabë","Sëku toku ska","cais suat","Soa dru skoa","hong"],["Pelícano","Sö ditsö körö","Sö datë körö","Sëku nara köra","—","Soa dre ngora",""],["Fragata","Sö ditsö kö","Sö datë kö","Sëku nara köri","—","Soa dre kra",""],["Tiburón martillo","Diá kö kë","Diá kö kë","Tana köri köri","—","Dru kra kra",""],["Raya","Diá tsö","Diá tsö","Tana nöri","—","Dru tsö",""],["Pulpo","Diá bë kö","Diá bë kö","Tana nori köri","—","Dru migä kra",""],["Langosta","Diá kë körö","Diá kë körö","Tana köri köra","—","Dru kra ngora",""],["Camarón","Diá kë kikë","Diá kë kikë","Tana köri kiki","—","Dru kra kika",""],["Almeja","Diá kë bötsi","Diá kë bötsi","Tana köri böra","—","Dru kra bro",""],["Caracol terrestre","Kë aba ditsö","Kë yök datë","Köri toku nara","—","Kra dru dre",""],["Lombriz","Itö bë","Duö bë","Naku nori","—","Noke migä","shtóh"],["Ciempiés","Kë ditsö kö","Kë datë kö","Köri nara köri","—","Kra dre kra",""],["Pochote","Wö kë körö","Wë kë körö","Nöri köri köra","—","Bare kra ngora",""],["Cristóbal","Wö kö kë","Wë kö kë","Nöri köri kë","—","Bare kra kë",""],["Guácimo","Wö ukö kö","Wë ukö kö","Nöri naka köri","—","Bare ngüa kra",""],["Mastate","Wö yë kö","Wë yë kö","Nöri nula köri","—","Bare micha kra",""],["Palo de balsa","Wö kikë","Wë kikë","Nöri kiki","—","Bare kika",""],["Higuerón","Wö körö kö","Wë körö kö","Nöri köra köri","—","Bare ngora kra",""],["Guanacaste (árbol)","Wö itö kö","Wë duö kö","Nöri naku köri","—","Bare noke kra",""],["Níspero","Wö ukö bötsi","Wë ukö bötsi","Nöri naka böra","—","Bare ngüa bro",""],["Anona","Wö ukö kikë","Wë ukö kikë","Nöri naka kiki","shosová","Bare ngüa kika",""],["Jocote","Wö ukö yëkö","Wë ukö yëkö","Nöri naka yëku","—","Bare ngüa yëa",""],["Marañón","Wö ukö kö kë","Wë ukö kö kë","Nöri naka köri kë","—","Bare ngüa kra kë",""],["Tiquizque","Itö ukö bötsi","Duö ukö bötsi","Naku naka böra","—","Noke ngüa bro",""],["Tiquisque","Itö ukö mën","Duö ukö mën","Naku naka möri","—","Noke ngüa men",""],["Camote","Itö ukö kö","Duö ukö kö","Naku naka köri","—","Noke ngüa kra",""],["Malanga","Itö ukö körö","Duö ukö körö","Naku naka köra","—","Noke ngüa ngora",""],["Pejibaye silvestre","Wö ukö itö","Wë ukö duö","Nöri naka naku","—","Bare ngüa noke",""],["Corozo","Wö ukö tsö","Wë ukö tsö","Nöri naka nöri","—","Bare ngüa tsö",""],["Helecho","Wö kö tsö","Wë kö tsö","Nöri köri nöri","—","Bare kra tsö",""],["Musgo","Wö aba kö","Wë yök kö","Nöri toku köri","—","Bare dru kra",""],["Hongo sagrado","Wö sö sibö","Wë sö sibö","Nöri sëku töcu","—","Bare soa ngöbe",""],["Río Reventazón","Diá yëk körö","Diá yëk körö","Tana yëku köra","—","Dru yëa ngora",""],["Río Tempisque","Diá itö kö","Diá duö kö","Tana naku köri","—","Dru noke kra",""],["Río Sarapiquí","Diá tsirú kikë","Diá tsirú kikë","Tana nöla kiki","—","Dru ngo kika",""],["Parque Nacional","Itö yöbë bë kö","Duö yöbë bë kö","Naku yöla nori köri","—","Noke yoa migä kra",""],["Reserva Indígena","Itö tsö kö","Duö tsö kö","Naku nöri köri","Dru tsö kö","Noke tsö kra",""],["Cordillera Central","Tsirú kö bötsi","Tsirú kö bötsi","Nöla köri böra","—","Ngo kra bro",""],["Cordillera Talamanca","Tsirú Talamanca","Tsirú Talamanca","Nöla Talamanca","—","Ngo Talamanca",""],["Valle Central","Itö kö bötsi","Duö kö bötsi","Naku köri böra","—","Noke kra bro",""],["Zona Norte","Itö yëk kö","Duö yëk kö","Naku yëku köri","—","Noke yëa kra",""],["Zona Sur","Itö itö kö","Duö duö kö","Naku naku köri","—","Noke noke kra",""],["Limón","Ditsö yëkö","Datë yëkö","Tâna yëku","—","Dre yëa",""],["Puntarenas","Ditsö kë körö","Datë kë körö","Tâna köri köra","—","Dre kra ngora",""],["Heredia","Tsirú kö kë","Tsirú kö kë","Nöla köri kë","—","Ngo kra kë",""],["Alajuela","Tsirú iriria kö","Tsirú diá kö","Nöla tâu köri","—","Ngo krâ kra",""],["Cartago","Tsirú kë kë","Tsirú kë kë","Nöla köri köri","—","Ngo kra kra",""],["San José","Yö sibö","Wák sibö","Jiri töcu","Kro sibö","Bri ngöbe",""],["Sierpe","Ditsö tsirú","Datë tsirú","Tâna nöla","—","Dre ngo",""],["Boruca","—","—","—","Boruca / Brunca","—",""],["Térraba","—","—","—","Térraba","—",""],["Salitre","Kë aba kö","Kë yök kö","Kë toku köri","—","Kë dru kra",""],["Buenos Aires","Yëk yöbë","Yëk yöbë","Yëku yöla","—","Yëa yoa",""],["Paz interior","Síniri yöbë","Síniri yöbë","Nöchi yöla","Chö yöb","Ngü yoa",""],["Gozo","Yöbë kö kö","Yöbë kö kö","Yöla köri köri","—","Yoa kra kra",""],["Serenidad","Síniri kë","Síniri kë","Nöchi köri","Chö kö","Ngü kra",""],["Angustia","Síniri kë yöbë","Síniri kë yöbë","Nöchi kë yöla","—","Ngü kë yoa",""],["Desesperación","Kë bë yöbë kö","Kë bë yöbë kö","Kë nori yöla köri","—","Kë migä yoa kra",""],["Ternura","Bë yöbë kikë","Bë yöbë kikë","Nori yöla kiki","—","Migä yoa kika",""],["Lealtad","Bë yöbë kö","Bë yöbë kö","Nori yöla köri","—","Migä yoa kra",""],["Paciencia","Kë ditsö bë kö","Kë datë bë kö","Kë nara nori köri","—","Kë dre migä kra",""],["Sabiduría ancestral","Bë kö kö kë","Bë kö kö kë","Nori köri köri kë","—","Migä kra kra kë",""],["Intuición","Síniri sö","Síniri sö","Nöchi sëku","Chö sö","Ngü soa",""],["Determinación","Bë kö yöbë","Bë kö yöbë","Nori köri yöla","—","Migä kra yoa",""],["Entusiasmo","Bë yöbë kö","Bë yöbë kö","Nori yöla köri","—","Migä yoa kra",""],["Melancolía","Síniri kë kö","Síniri kë kö","Nöchi kë köri","—","Ngü kë kra",""],["Tranquilidad","Síniri yöbë kö","Síniri yöbë kö","Nöchi yöla köri","—","Ngü yoa kra",""],["Arrepentimiento","Bë ëk kö","Bë ëk kö","Nori yü köri","—","Migä döi kra",""],["Espíritu guardián","Bë sö yöbë","Bë sö yöbë","Nori sëku yöla","—","Migä soa yoa",""],["Energía vital","Bë yöbë sö","Bë yöbë sö","Nori yöla sëku","—","Migä yoa soa",""],["Mundo espiritual","Sibö itö tsö","Sibö duö tsö","Töcu naku nöri","—","Ngöbe noke tsö",""],["Viaje al más allá","Ditsö sibö kö","Datë sibö kö","Nara töcu köri","—","Dre ngöbe kra",""],["Conexión cósmica","Bë tsö sibö","Bë tsö sibö","Nori nöri töcu","—","Migä tsö ngöbe",""],["Ser supremo","Sibö körö","Sibö körö","Töcu köra","Sibö kör","Ngöbe ngora",""],["Espíritu maligno","Bë sö kë","Bë sö kë","Nori sëku kë","—","Migä soa kë",""],["Lugar sagrado","Yö sibö","Wák sibö","Jiri töcu","Kro sibö","Bri ngöbe",""],["Ofrenda de chicha","Aba tsö sibö","Yök tsö sibö","Toku nöri töcu","—","Dru tsö ngöbe",""],["Canto de sanación","Sö sö yöbë","Sö sö yöbë","Sëku sëku yöla","—","Soa soa yoa",""],["Pluma de poder","Sö tsö sibö","Sö tsö sibö","Sëku nöri töcu","—","Soa bare ngöbe",""],["Máscara ritual","Bë tsö sibö","Bë tsö sibö","Nori nöri töcu","—","Migä tsö ngöbe",""],["Tambor de curación","Sö bë sö","Sö bë sö","Sëku nori sëku","—","Soa migä soa",""],["Incienso sagrado","Wö sö chä sibö","Wë sö sëk sibö","Nöri sëku kira töcu","—","Bare soa kira ngöbe",""],["Altar ceremonial","Yö sibö bë kö","Wák sibö bë kö","Jiri töcu nori köri","—","Bri ngöbe migä kra",""],["Piedra de poder","Kë sibö kö","Kë sibö kö","Köri töcu köri","Kö sibö kö","Kra ngöbe kra",""],["Vara de mando","Wö ditsö kö","Wë datë kö","Nöri tana köri","—","Bare dre kra",""],["Corona de plumas","Sö tsö bë kö","Sö tsö bë kö","Sëku nöri nori köri","—","Soa bare migä kra",""],["Collar sagrado","Kö sö sibö","Kö sö sibö","Köri sëku töcu","—","Kra soa ngöbe",""],["Hablar en lengua","Bë ditsö bë","Bë datë bë","Nori tana nori","—","Migä dre migä",""],["Aprender Bribri","Bribri kë bë","—","—","—","—",""],["Enseñar lengua","Bë ditsö kë bë","Bë datë kë bë","Nori tana köri nori","—","Migä dre kra migä",""],["Escribir en Bribri","Bribri kë kö bë","—","—","—","—",""],["Pronunciar","Bë ditsö sö","Bë datë sö","Nori tana sëku","—","Migä dre soa",""],["Traducir","Bë ditsö bötsi","Bë datë bötsi","Nori tana böra","—","Migä dre bro",""],["Lengua materna","Bë ditsö në","Bë datë në","Nori tana nöchi","—","Migä dre nan",""],["Revitalización lingüística","Bë ditsö yöbë kö","Bë datë yöbë kö","Nori tana yöla köri","—","Migä dre yoa kra",""],["Narración oral","Bë tsö sö kö","Bë tsö sö kö","Nori nöri sëku köri","—","Migä tsö soa kra",""],["Canto tradicional","Sö tsö kö bë","Sö tsö kö bë","Sëku nöri köri nori","—","Soa tsö kra migä",""],["Rosa","Bë chä kikë","Bë sëk kikë","Nori kira kiki","—","Migä kira kika",""],["Café","Itö yëkö","Duö yëkö","Naku yëku","—","Noke yëa",""],["Gris","Skabë kirö","Skabë kirö","Ska kira","Skab kir","Skoa kiroa",""],["Dorado","Iriria kë","Diá kë","Tâu köri","Brún köri","Krâ kra",""],["Plateado","Iriria skabë","Diá skabë","Tâu ska","—","Krâ skoa",""],["Turquesa","Diá kö yöbë","Diá kö yöbë","Tana köri yöla","—","Dru kra yoa",""],["Índigo","Sula kö","Sula kö","Ulë köri","Dör köri","Krün kra",""],["Escarlata","Yëkö körö","Yëkö körö","Yëku köra","Yëk kör","Yëa ngora",""],["Celeste","Diá kö kikë","Diá kö kikë","Tana köri kiki","—","Dru kra kika",""],["Magenta","Bë chä körö","Bë sëk körö","Nori kira köra","—","Migä kira ngora",""],["Transparente","Kë yöbë kö","Kë yöbë kö","Kë yöla köri","—","Kë yoa kra",""],["Brillante","Iriria yöbë kö","Diá yöbë kö","Tâu yöla köri","—","Krâ yoa kra",""],["Opaco","Kë iriria","Kë diá","Kë tâu","—","Kë krâ",""],["Claro","Iriria kikë","Diá kikë","Tâu kiki","moreng","Krâ kika","tzuré teng"],["Oscuro","Sula kö","Sula kö","Ulë köri","—","Krün kra",""],["Trece","Étse kö mën","Étse kö mën","Öchi köri möri","—","Kia kra men",""],["Catorce","Étse kö bötsi bötsi","Étse kö bötsi bötsi","Öchi köri böra böra","—","Kia kra bro bro",""],["Quince","Étse kö étse bötsi","Étse kö étse bötsi","Öchi köri öchi böra","—","Kia kra kia bro",""],["Cuarenta","Bötsi bötsi kö","Bötsi bötsi kö","Böra böra köri","—","Bro bro kra",""],["Cincuenta","Étse bötsi kö","Étse bötsi kö","Öchi böra köri","—","Kia bro kra",""],["Sesenta","Mën bötsi kö","Mën bötsi kö","Möri böra köri","—","Men bro kra",""],["Setenta","Étse mën kö","Étse mën kö","Öchi möri köri","—","Kia men kra",""],["Ochenta","Bötsi mën kö","Bötsi mën kö","Böra möri köri","—","Bro men kra",""],["Noventa","Mën mën kö","Mën mën kö","Möri möri köri","—","Men men kra",""],["Medio","Bötsi bötsi","Bötsi bötsi","Böra böra","—","Bro bro",""],["Cuarto","Bötsi bötsi bötsi bötsi","Bötsi bötsi bötsi bötsi","Böra böra böra böra","—","Bro bro bro bro",""],["Frente","Bë kö iriria","Bë kö diá","Nori köri tâu","hua túj","Migä kra krâ","tzén teh"],["Mejilla","Bë tsö aba","Bë tsö yök","Nori nöri toku","—","Migä tsö dru",""],["Mentón","Bë ukö kö","Bë ukö kö","Nori naka köri","—","Migä ngüa kra",""],["Cuero cabelludo","Bë kö wö","Bë kö wë","Nori köri nöri","—","Migä kra bare",""],["Ceja","Bë iriria wö","Bë diá wë","Nori tâu nöri","dicaishí","Migä krâ bare","(bor) vópevota"],["Pestaña","Bë iriria kö","Bë diá kö","Nori tâu köri","—","Migä krâ kra",""],["Iris","Bë iriria tsö","Bë diá tsö","Nori tâu nöri","—","Migä krâ tsö",""],["Tímpano","Bë sö kö","Bë sö kö","Nori sëku köri","—","Migä soa kra",""],["Encía","Bë kë aba","Bë kë yök","Nori köri toku","—","Migä kra dru",""],["Paladar","Bë ukö kö","Bë ukö kö","Nori naka köri","—","Migä ngüa kra",""],["Garganta","Bë kö aba kö","Bë kö yök kö","Nori köri toku köri","crohíh","Migä kra dru kra","(bor) querso"],["Nuca","Bë kö ëk","Bë kö ëk","Nori köri yü","—","Migä kra döi",""],["Espalda","Bë ëk kö","Bë ëk kö","Nori yü köri","cheng cuáh","Migä döi kra","(bor) cocsó"],["Cadera","Bë itö kö","Bë duö kö","Nori naku köri","—","Migä noke kra",""],["Tobillo","Bë itö kë","Bë duö kë","Nori naku köri","—","Migä noke kra",""],["Talón","Bë itö ëk","Bë duö ëk","Nori naku yü","—","Migä noke döi",""],["Dedo del pie","Bë itö kë","Bë duö kë","Nori naku köri","crascvá","Migä noke kra",""],["Uña","Bë kë kö","Bë kë kö","Nori köri köri","—","Migä kra kra",""],["Vena","Bë chä ditsö","Bë sëk datë","Nori kira tana","—","Migä kira dre",""],["Músculo","Bë kö bë","Bë kö bë","Nori köri nori","—","Migä kra migä",""],["Hueso","Bë kë","Bë kë","Nori köri","—","Migä kra","ba debogro"],["Tendón","Bë wö kë","Bë wë kë","Nori nöri köri","—","Migä bare kra",""],["Articulación","Bë kë bötsi","Bë kë bötsi","Nori köri böra","—","Migä kra bro",""],["Festival","Tsö yöbë kö","Tsö yöbë kö","Nöla yöla köri","—","Ngwa yoa kra",""],["Peregrinación","Ditsö sibö","Datë sibö","Nara töcu","Drö sibö","Dre ngöbe",""],["Iniciación guerrera","Bë kö sibö","Bë kö sibö","Nori köri töcu","—","Migä kra ngöbe",""],["Torneo de danza","Bë iriria tsö","Bë diá tsö","Nori tâu nöri","—","Migä krâ tsö",""],["Concurso de canto","Sö yöbë tsö","Sö yöbë tsö","Sëku yöla nöri","—","Soa yoa tsö",""],["Asamblea comunal","Tsö kö bë","Tsö kö bë","Nöla köri nori","Tsö kö brö","Ngwa kra migä",""],["Intercambio cultural","Tsö bë kë","Tsö bë kë","Nöla nori köri","—","Ngwa migä kra",""],["Mercado tradicional","Ukö yö kö","Ukö wák kö","Naka jiri köri","Kë kro kö","Ngüa bri kra",""],["Feria indígena","Tsö ukö yö","Tsö ukö wák","Nöla naka jiri","—","Ngwa ngüa bri",""],["Exposición artesanal","Bë kö tsö yö","Bë kö tsö wák","Nori köri nöri jiri","—","Migä kra tsö bri",""],["Mortero","Kë ukö bë","Kë ukö bë","Köri naka nori","—","Kra ngüa migä",""],["Mano de mortero","Kë ukö bë kë","Kë ukö bë kë","Köri naka nori köri","—","Kra ngüa migä kra",""],["Cedazo","Wö kë bë","Wë kë bë","Nöri köri nori","—","Bare kra migä",""],["Machete","Kë ditsö körö","Kë datë körö","Köri tana köra","—","Kra dre ngora","drung"],["Pala","Itö bë kë","Duö bë kë","Naku nori köri","—","Noke migä kra",""],["Azadón","Itö bë kë körö","Duö bë kë körö","Naku nori köri köra","—","Noke migä kra ngora",""],["Coa","Itö bë","Duö bë","Naku nori","—","Noke migä",""],["Nasa (trampa de pez)","Diá yö kë","Diá wák kë","Tana jiri köri","—","Dru bri kra",""],["Lanza","Wö ditsö kë","Wë datë kë","Nöri tana köri","—","Bare dre kra",""],["Escudo","Bë yöbë kë","Bë yöbë kë","Nori yöla köri","—","Migä yoa kra",""],["Flauta de caña","Yëk wö kö","Yëk wë kö","Yëku nöri köri","—","Yëa bare kra",""],["Tambor de guerra","Sö bë kë kö","Sö bë kë kö","Sëku nori köri kö","—","Soa migä kra kö",""],["Pito ceremonial","Bë yëk sibö","Bë yëk sibö","Nori yëku töcu","—","Migä yëa ngöbe",""],["Bolsa de cuero","Tsirú yö","Tsirú wák","Nöri jiri","—","Ngwa bri",""],["Vasija de cerámica","Itö yö kö","Duö wák kö","Naku jiri köri","—","Noke bri kra",""],["Piedra de moler","Kë ukö kö","Kë ukö kö","Köri naka köri","—","Kra ngüa kra",""],["Telar vertical","Yë tsö kö kö","Yë tsö kö kö","Nula nöri köri köri","—","Micha tsö kra kra",""],["Calima","Yëk kö kö","Yëk kö kö","Yëku köri köri","—","Yëa kra kra",""],["Llovizna fina","Ükö kikë kö","Ükö kikë kö","Nöku kiki köri","—","Nüa kika kra",""],["Aguacero fuerte","Ükö körö","Ükö körö","Nöku köra","Ëkö kör","Nüa ngora",""],["Calor sofocante","Chä körö bë","Sëk körö bë","Kira köra nori","—","Kira ngora migä",""],["Frío intenso","Aba kë körö","Yök kë körö","Toku köri köra","—","Dru kra ngora",""],["Viento del norte","Yëk kö","Yëk kö","Yëku köri","—","Yëa kra",""],["Brisa marina","Yëk ditsö","Yëk datë","Yëku tâna","—","Yëa dre",""],["Neblina de montaña","Tsirú yëk kö","Tsirú yëk kö","Nöla yëku köri","—","Ngo yëa kra",""],["Tormenta eléctrica","Chä yëk kö","Sëk yëk kö","Kira yëku köri","—","Kira yëa kra",""],["Cielo despejado","Sibö yöbë","Sibö yöbë","Tâurë yöla","Bü yöb","Krâ yoa",""],["Escuela comunitaria","Bë kë yö tsö","Bë kë wák tsö","Nori köri jiri nöri","—","Migä kra bri tsö",""],["Maestro indígena","Bë kë bë kö tsö","Bë kë bë kö tsö","Nori köri nori köri nöri","—","Migä kra migä kra tsö",""],["Estudiante","Kë bë tsö bë","Rë bë tsö bë","Ichi nori nöri nori","—","Ngwä migä tsö migä",""],["Conocimiento sagrado","Bë kë sibö","Bë kë sibö","Nori köri töcu","—","Migä kra ngöbe",""],["Libro de leyendas","Bë kë tsö sibö","Bë kë tsö sibö","Nori köri nöri töcu","—","Migä kra tsö ngöbe",""],["Historia oral","Bë tsö sö","Bë tsö sö","Nori nöri sëku","—","Migä tsö soa",""],["Transmisión cultural","Tsö bë kë bë","Tsö bë kë bë","Nöla nori köri nori","—","Ngwa migä kra migä",""],["Alfabeto Bribri","Bribri kë kö","—","—","—","—",""],["Gramática Bribri","Bribri bë ditsö kö","—","—","—","—",""],["Dialectos","Bë ditsö bötsi","Bë datë bötsi","Nori tana böra","—","Migä dre bro",""],["Partera tradicional","Yë kë bë sibö","Yë rë bë sibö","Nula ichi nori töcu","—","Micha ngwä migä ngöbe",""],["Sobador","Bë sö kö","Bë sö kö","Nori sëku köri","—","Migä soa kra",""],["Hierbero","Wö sö bë kö","Wë sö bë kö","Nöri sëku nori köri","—","Bare soa migä kra",""],["Baño de vapor","Chä aba bë","Sëk yök bë","Kira toku nori","—","Kira dru migä",""],["Limpia espiritual","Aba sibö kë bë","Yök sibö kë bë","Toku töcu köri nori","—","Dru ngöbe kra migä",""],["Emplasto de hierbas","Wö sö itö bë","Wë sö duö bë","Nöri sëku naku nori","—","Bare soa noke migä",""],["Miel de abeja silvestre","Wö sö ukö","Wë sö ukö","Nöri sëku naka","—","Bare soa ngüa",""],["Savia medicinal","Wö aba sö","Wë yök sö","Nöri toku sëku","—","Bare dru soa",""],["Aceite de coco","Wö ukö aba","Wë ukö yök","Nöri naka toku","—","Bare ngüa dru",""],["Té de guanábana","Aba wö ukö yöbë","Yök wë ukö yöbë","Toku nöri naka yöla","—","Dru bare ngüa yoa",""],["Despertar temprano","Iriria kë yöbë bë","Diá kë yöbë bë","Tâu köri yöla nori","—","Krâ kra yoa migä",""],["Desayunar","Ukö iriria bë","Ukö diá bë","Naka tâu nori","—","Ngüa krâ migä",""],["Almorzar","Ukö bötsi bë","Ukö bötsi bë","Naka böra nori","—","Ngüa bro migä",""],["Cenar","Ukö sula bë","Ukö sula bë","Naka ulë nori","—","Ngüa krün migä",""],["Bañarse en río","Diá aba bë","Diá yök bë","Tana toku nori","—","Dru dru migä",""],["Lavar ropa","Yë aba bë","Yë yök bë","Nula toku nori","—","Micha dru migä",""],["Tender ropa","Yë iriria bë","Yë diá bë","Nula tâu nori","—","Micha krâ migä",""],["Barrer","Yö kë bë","Wák kë bë","Jiri köri nori","uchí cá ching","Bri kra migä","shtó quih"],["Cocinar chicha","Aba tsö chä bë","Yök tsö sëk bë","Toku nöri kira nori","—","Dru tsö kira migä",""],["Moler maíz","Ëkö ukö bë","Ëkö ukö bë","Ëku naka nori","—","Ngwa ngüa migä",""],["Cargar agua","Aba bë tsö bë","Yök bë tsö bë","Toku nori nöri nori","—","Dru migä tsö migä",""],["Buscar leña","Wö chä bë","Wë sëk bë","Nöri kira nori","—","Bare kira migä",""],["Encender fogón","Chä yö bë","Sëk wák bë","Kira jiri nori","Tö kro brö","Kira bri migä",""],["Dormir en hamaca","Yö tsö sula bë","Wák tsö sula bë","Jiri nöri ulë nori","—","Bri bare krün migä",""],["Visitar vecinos","Tsö yö bë kö bë","Tsö wák bë kö bë","Nöla jiri nori köri nori","—","Ngwa bri migä kra migä",""],["Pura vida","Yöbë ditsö","Yöbë datë","Yöla nara","Yöb drö","Yoa dre",""],["Vivir bien","Yöbë bë","Yöbë bë","Yöla nori","Yöb brö","Yoa migä",""],["Buen vivir","Yöbë bë kö","Yöbë bë kö","Yöla nori köri","Yöb brö kö","Yoa migä kra",""],["Respeto a la tierra","Itö bë yöbë kö","Duö bë yöbë kö","Naku nori yöla köri","Dru brö yöb kö","Noke migä yoa kra",""],["Cuidado del agua","Aba bë kö","Yök bë kö","Toku nori köri","Unk brö kö","Dru migä kra",""],["Protección del bosque","Wö tsö bë kö","Wë tsö bë kö","Nöri nöla nori köri","—","Bare ngo migä kra",""],["Unidad del pueblo","Tsö yö bë kö","Tsö wák bë kö","Nöla jiri nori köri","Tsö kro brö kö","Ngwa bri migä kra",""],["Justicia comunitaria","Yöbë tsö bë","Yöbë tsö bë","Yöla nöla nori","—","Yoa ngwa migä",""],["Derechos indígenas","Tsö yö yöbë kö","Tsö wák yöbë kö","Nöla jiri yöla köri","—","Ngwa bri yoa kra",""],["Autodeterminación","Tsö yöbë kö kö","Tsö yöbë kö kö","Nöla yöla köri köri","—","Ngwa yoa kra kra",""],["Espiritualidad indígena","Tsö sibö kö","Tsö sibö kö","Nöla töcu köri","Tsö sibö kö","Ngwa ngöbe kra",""],["Respeto a los mayores","Bë kö kö yöbë kö","Bë kö kö yöbë kö","Nori köri köri yöla köri","—","Migä kra kra yoa kra",""],["Reciprocidad comunal","Bë kë bë tsö","Bë kë bë tsö","Nori köri nori nöri","—","Migä kra migä tsö",""],["Equilibrio con la naturaleza","Bötsi itö tsö","Bötsi duö tsö","Böra naku nöri","—","Bro noke tsö",""],["Memoria histórica","Bë kö bë kö kö","Bë kö bë kö kö","Nori köri nori köri köri","—","Migä kra migä kra kra",""],["Rancho (construcción)","Yö kö","Wák kö","Jiri köri","Kro kö","Bri kra",""],["Techo de paja","Yö kö wö","Wák kö wë","Jiri köri nöri","—","Bri kra bare",""],["Piso de tierra","Yö itö","Wák duö","Jiri naku","Kro dru","Bri noke",""],["Pared de caña","Yö wö bötsi","Wák wë bötsi","Jiri nöri böra","—","Bri bare bro",""],["Columna de madera","Yö wö kö","Wák wë kö","Jiri nöri köri","—","Bri bare kra",""],["Escalera","Yö tsirú bë","Wák tsirú bë","Jiri nöla nori","uj duvá","Bri ngo migä","escalera"],["Fogón central","Chä yö kö","Sëk wák kö","Kira jiri köri","Tö kro kö","Kira bri kra",""],["Granero elevado","Ukö yö tsirú","Ukö wák tsirú","Naka jiri nöla","—","Ngüa bri ngo",""],["Puente de guadua","Ditsö diá wö ditsö","Datë diá wë datë","Nara tana nöri tana","—","Dre dru bare dre",""],["Cercado","Itö bë kö","Duö bë kö","Naku nori köri","—","Noke migä kra",""],["Sendero","Ditsö kikë","Datë kikë","Nara kiki","Drö kik","Dre kika",""],["Canoa sagrada","Ditsö yö sibö","Datë wák sibö","Nara jiri töcu","—","Dre bri ngöbe",""],["Tamal de maíz","Ëkö ukö yö","Ëkö ukö wák","Ëku naka jiri","—","Ngwa ngüa bri",""],["Caldo de plátano","Wö ukö aba bë","Wë ukö yök bë","Nöri naka toku nori","—","Bare ngüa dru migä",""],["Atol de maíz","Ëkö aba","Ëkö yök","Ëku toku","Ëkö unk","Ngwa dru",""],["Chicha fuerte","Aba tsö körö","Yök tsö körö","Toku nöri köra","—","Dru tsö ngora",""],["Cocinado en hojas","Ukö wö tsö bë","Ukö wë tsö bë","Naka nöri nöri nori","—","Ngüa bare tsö migä",""],["Fruta fermentada","Wö ukö aba tsö","Wë ukö yök tsö","Nöri naka toku nöri","—","Bare ngüa dru tsö",""],["Carne ahumada","Tsirú ukö chä","Tsirú ukö sëk","Nöri naka kira","—","Ngwa ngüa kira",""],["Pescado asado","Diá ukö chä","Diá ukö sëk","Tana naka kira","Tö kë kira","Dru ngüa kira",""],["Tortilla de maíz","Ëkö bë","Ëkö bë","Ëku nori","Ëkö brö","Ngwa migä",""],["Sopa de yuca","Itö ukö aba","Duö ukö yök","Naku naka toku","—","Noke ngüa dru",""],["Dulce de pejibaye","Wö ukö kö yöbë","Wë ukö kö yöbë","Nöri naka köri yöla","—","Bare ngüa kra yoa",""],["Bebida de cacao","Wö ukö kö aba","Wë ukö kö yök","Nöri naka köri toku","—","Bare ngüa kra dru",""],["Arte plumario","Sö tsö bë kö","Sö tsö bë kö","Sëku nöri nori köri","—","Soa bare migä kra",""],["Tallado en piedra","Kë bë kö kö","Kë bë kö kö","Köri nori köri köri","—","Kra migä kra kra",""],["Pintura en barro","Itö yëkö kö","Duö yëkö kö","Naku yëku köri","—","Noke yëa kra",""],["Diseño geométrico","Bë kö kë bötsi","Bë kö kë bötsi","Nori köri kë böra","—","Migä kra kë bro",""],["Motivo espiral","Kë kö bë","Kë kö bë","Köri köri nori","—","Kra kra migä",""],["Símbolo solar","Iriria kë","Diá kë","Tâu köri","Brún köri","Krâ kra",""],["Símbolo lunar","Sula kë","Sula kë","Ulë köri","Dör köri","Krün kra",""],["Bordado tradicional","Yë tsö kö","Yë tsö kö","Nula nöri köri","—","Micha tsö kra",""],["Traje ceremonial","Yë tsö sibö","Yë tsö sibö","Nula nöri töcu","—","Micha tsö ngöbe",""],["Vestimenta diaria","Yë tsö bë","Yë tsö bë","Nula nöri nori","—","Micha tsö migä",""],["Orejera","Bë sö kö","Bë sö kö","Nori sëku köri","—","Migä soa kra",""],["Nariguera","Bë yëk kö","Bë yëk kö","Nori yëku köri","—","Migä yëa kra",""],["Pectoral","Bë aba kö","Bë yök kö","Nori toku köri","—","Migä dru kra",""],["Cinturón ceremonial","Bë itö sibö","Bë duö sibö","Nori naku töcu","—","Migä noke ngöbe",""],["Sandalia","Bë itö kë","Bë duö kë","Nori naku köri","—","Migä noke kra",""],["Buenos días, ¿cómo amaneció?","Iriria yöbë bë","Diá yöbë bë","Tâu yöla nori","—","Krâ yoa migä",""],["Que tenga buen día","Yöbë iriria bë","Yöbë diá bë","Yöla tâu nori","—","Yoa krâ migä",""],["Venga a comer","Ukö bë yö bë","Ukö bë wák bë","Naka nori jiri nori","—","Ngüa migä bri migä",""],["El agua es sagrada","Aba bë sibö","Yök bë sibö","Toku nori töcu","Unk brö sibö","Dru migä ngöbe",""],["La tierra nos da vida","Itö bë yöbë bë","Duö bë yöbë bë","Naku nori yöla nori","Dru brö yöb brö","Noke migä yoa migä",""],["Somos hijos de la tierra","Itö kë bë tsö","Duö rë bë tsö","Naku ichi nori nöri","—","Noke ngwä migä tsö",""],["El río habla","Diá bë tsö","Diá bë tsö","Tana nori nöri","Tö brö tsö","Dru migä tsö",""],["Las estrellas nos guían","Sula kö bë ditsö","Sö kö bë datë","Ulë nöri nori nara","—","Krün ngwa migä dre",""],["Sibö nos protege","Sibö bë yöbë bë","Sibö bë yöbë bë","Töcu nori yöla nori","Sibö brö yöb brö","Ngöbe migä yoa migä",""],["Gracias por la lluvia","Ëyö ükö","Ká ükö","Shíi nöku","Shíi ëkö","Jä nüa",""],["Que el fuego te caliente","Chä bë kö yöbë","Sëk bë kö yöbë","Kira nori köri yöla","Tö brö kö yöb","Kira migä kra yoa",""],["El jaguar es sagrado","Tsirú kö sibö","Tsirú kö sibö","Nöri köri töcu","—","Ngwa kra ngöbe",""],["Cuidemos a los niños","Kë bë kö tsö","Rë bë kö tsö","Ichi nori köri nöri","Chö brö kö tsö","Ngwä migä kra tsö",""],["La selva es nuestra casa","Wö tsö yö tsö","Wë tsö wák tsö","Nöri nöla jiri nöri","—","Bare ngo bri tsö",""],["Nuestros ancestros nos hablan","Bë kö kö tsö bë tsö","Bë kö kö tsö bë tsö","Nori köri köri nöri nori nöri","—","Migä kra kra tsö migä tsö",""],["Estrella del amanecer","Sula kö iriria kë","Sö kö diá kë","Ulë nöri tâu köri","—","Krün ngwa krâ kra",""],["Estrella del norte","Sula kö kö","Sö kö kö","Ulë nöri köri","—","Krün ngwa kra",""],["Pléyades","Sula kö tsö","Sö kö tsö","Ulë nöri nöri","—","Krün ngwa tsö",""],["Cruz del Sur","Sula kö itö","Sö kö duö","Ulë nöri naku","—","Krün ngwa noke",""],["Vía Láctea sagrada","Sula ditsö sibö","Sö datë sibö","Ulë nara töcu","—","Krün dre ngöbe",""],["Eclipse de sol","Iriria kë kö","Diá kë kö","Tâu köri kö","—","Krâ kra kö",""],["Eclipse de luna","Sula kë kö","Sula kë kö","Ulë köri kö","—","Krün kra kö",""],["Luna de cosecha","Sula ukö","Sula ukö","Ulë naka","—","Krün ngüa",""],["Luna de siembra","Sula wö kë","Sula wë kë","Ulë nöri köri","—","Krün bare kra",""],["Año nuevo indígena","Iriria kö tsö yöbë","Diá kö tsö yöbë","Tâu köri nöri yöla","—","Krâ kra tsö yoa",""],["Solsticio sagrado","Iriria kö sibö","Diá kö sibö","Tâu köri töcu","—","Krâ kra ngöbe",""],["Lluvia de estrellas","Sula kö ükö","Sö kö ükö","Ulë nöri nöku","—","Krün ngwa nüa",""],["Constelación del jaguar","Sula kö tsirú kö","Sö kö tsirú kö","Ulë nöri nöri köri","—","Krün ngwa ngwa kra",""],["Constelación de la serpiente","Sula kö ditsö","Sö kö datë","Ulë nöri nöku","—","Krün ngwa dre",""],["Señales del cielo","Sibö kë sö","Sibö kë sö","Töcu köri sëku","—","Ngöbe kra soa",""],["Origen del maíz","Ëkö bë kë","Ëkö bë kë","Ëku nori köri","—","Ngwa migä kra",""],["Creación del ser humano","Bë bë sibö","Bë bë sibö","Nori nori töcu","—","Migä migä ngöbe",""],["Diluvio primordial","Aba körö kö","Yök körö kö","Toku köra köri","—","Dru ngora kra",""],["El árbol cósmico","Wö sibö körö","Wë sibö körö","Nöri töcu köra","—","Bare ngöbe ngora",""],["Serpiente de agua","Ditsö aba","Datë yök","Nöku toku","—","Dre dru",""],["Jaguar de fuego","Tsirú kö chä","Tsirú kö sëk","Nöri köri kira","—","Ngwa kra kira",""],["Águila del trueno","Sö körö yëk","Sö körö yëk","Sëku köra yëku","—","Soa ngora yëa",""],["Héroe cultural","Bë kö tsö","Bë kö tsö","Nori köri nöri","—","Migä kra tsö",""],["Dios del maíz","Sibö ëkö","Sibö ëkö","Töcu ëku","Sibö ëkö","Ngöbe ngwa",""],["Diosa de la lluvia","Sibö yë ükö","Sibö yë ükö","Töcu nula nöku","—","Ngöbe micha nüa",""],["Guardián del bosque","Wö tsö bë kö","Wë tsö bë kö","Nöri nöla nori köri","—","Bare ngo migä kra",""],["Ser de la oscuridad","Sula kirö bë","Sula kirö bë","Ulë kira nori","—","Krün kiroa migä",""],["Transformación animal","Tsirú bötsi kö","Tsirú bötsi kö","Nöri böra köri","—","Ngwa bro kra",""],["Mundo subterráneo","Itö kë kö","Duö kë kö","Naku kë köri","—","Noke kë kra",""],["Líder espiritual","Bë sö kö körö","Bë sö kö körö","Nori sëku köri köra","—","Migä soa kra ngora",""],["Consejo de ancianos","Bë kö kö tsö","Bë kö kö tsö","Nori köri köri nöri","—","Migä kra kra tsö",""],["Alianza matrimonial","Bë yë tsö","Bë yë tsö","Nori nula nöri","—","Migä micha tsö",""],["Clan matrilineal","Në tsö kö","Në tsö kö","Nöchi nöri köri","Nö tsö kö","Nan tsö kra",""],["Linaje paterno","Bë tsö kö","Bë tsö kö","Nori nöri köri","—","Migä tsö kra",""],["Hermanos de clan","Tsö bë tsö","Tsö bë tsö","Nöri nori nöri","—","Tsö migä tsö",""],["Ceremonia de boda","Bë yë tsö sibö","Bë yë tsö sibö","Nori nula nöri töcu","—","Migä micha tsö ngöbe",""],["Rito de pubertad","Kë yöbë sibö","Rë yöbë sibö","Ichi yöla töcu","—","Ngwä yoa ngöbe",""],["Periodo de luto","Bë ëk tsö kö","Bë ëk tsö kö","Nori yü nöri köri","—","Migä döi tsö kra",""],["Ceremonia fúnebre","Bë ëk sibö","Bë ëk sibö","Nori yü töcu","—","Migä döi ngöbe",""],["Nombre de nacimiento","Kë bë kö","Rë bë kö","Ichi nori köri","Chö brö kö","Ngwä migä kra",""],["Nombre sagrado","Bë kö sibö","Bë kö sibö","Nori köri töcu","—","Migä kra ngöbe",""],["Tabú alimentario","Ukö kë kö","Ukö kë kö","Naka köri köri","—","Ngüa kë kra",""],["Restricción ritual","Bë kö kë sibö","Bë kö kë sibö","Nori köri kë töcu","—","Migä kra kë ngöbe",""],["Obligación comunal","Tsö bë kö","Tsö bë kö","Nöla nori köri","Tsö brö kö","Ngwa migä kra",""],["Quetzal resplandeciente","Sö kë körö","Sö kë körö","Sëku köri köra","—","Soa kra ngora",""],["Yigüirro (pájaro nacional)","Sö yöbë kö","Sö yöbë kö","Sëku yöla köri","—","Soa yoa kra",""],["Guaria morada (flor nacional)","Wö kë kö morado","Wë kë kö morado","Nöri köri kö morado","—","Bare kra kö morado",""],["Árbol de Guanacaste (árbol nacional)","Wö itö kö körö","Wë duö kö körö","Nöri naku köri köra","—","Bare noke kra ngora",""],["Venado cola blanca","Tsirú wö skabë","Tsirú wë skabë","Nöri nöri ska","—","Ngwa bare skoa",""],["Manatí del Caribe","Diá tsirú ditsö","Diá tsirú datë","Tana nöri tâna","—","Dru ngwa dre",""],["Tortuga baula","Kë tsö ditsö körö","Kë tsö datë körö","Köri nöri tâna köra","—","Kra tsö dre ngora",""],["Tortuga verde","Kë tsö wö yöbë","Kë tsö wë yöbë","Köri nöri nöri yöla","—","Kra tsö bare yoa",""],["Delfín manchado","Diá yöbë yëkö","Diá yöbë yëkö","Tana yöla yëku","—","Dru yoa yëa",""],["Mono tití","Bë tsö kikë","Bë tsö kikë","Nöri tsö kiki","—","Ngwä tsö kika",""],["Lapa verde","Sö wö yöbë","Sö wë yöbë","Sëku nöri yöla","—","Soa bare yoa",""],["Tejón","Tsirú kë bötsi","Tsirú kë bötsi","Nöri köri böra","—","Ngwa kra bro",""],["Chancho de monte","Tsirú ukö kö","Tsirú ukö kö","Nöri naka köri","—","Ngwa ngüa kra",""],["Boa esmeralda","Ditsö wö yöbë","Datë wë yöbë","Nöku nöri yöla","—","Dre bare yoa",""],["Rana de ojos rojos","Aba kë iriria yëkö","Yök kë diá yëkö","Toku nöri tâu yëku","—","Dru kra krâ yëa",""],["Mariposa morfo azul","Sö kë diá kö","Sö kë diá kö","Sëku köri tana köri","—","Soa kra dru kra",""],["Hormiga bala","Kë sö körö","Kë sö körö","Köri sëku köra","—","Kra soa ngora",""],["Escarabajo hércules","Kë yöbë körö","Kë yöbë körö","Köri yöla köra","—","Kra yoa ngora",""],["Coral","Diá kë chä","Diá kë sëk","Tana köri kira","—","Dru kra kira",""],["Caballito de mar","Diá tsirú kikë","Diá tsirú kikë","Tana nöri kiki","—","Dru ngwa kika",""],["Tejedor de sueños","Sula tsö bë kö","Sula tsö bë kö","Ulë nöri nori köri","—","Krün tsö migä kra",""],["Contador de historias","Bë tsö sö kö","Bë tsö sö kö","Nori nöri sëku köri","—","Migä tsö soa kra",""],["Guardián de semillas","Wö kë yö bë","Wë kë wák bë","Nöri köri jiri nori","—","Bare kra bri migä",""],["Protector del agua","Aba bë yöbë bë","Yök bë yöbë bë","Toku nori yöla nori","Unk brö yöb brö","Dru migä yoa migä",""],["Guía espiritual","Bë sö ditsö bë","Bë sö datë bë","Nori sëku nara nori","—","Migä soa dre migä",""],["Médico tradicional","Bë sö yöbë kö","Bë sö yöbë kö","Nori sëku yöla köri","—","Migä soa yoa kra",""],["Rezador comunitario","Sibö bë tsö","Sibö bë tsö","Töcu nori nöri","Sibö brö tsö","Ngöbe migä tsö",""],["Danzante ritual","Bë iriria sibö","Bë diá sibö","Nori tâu töcu","—","Migä krâ ngöbe",""],["Músico ceremonial","Sö bë sibö kö","Sö bë sibö kö","Sëku nori töcu köri","—","Soa migä ngöbe kra",""],["Guerrero","Bë kö yöbë körö","Bë kö yöbë körö","Nori köri yöla köra","—","Migä kra yoa ngora",""],["Mensajero comunal","Bë tsö sö tsö","Bë tsö sö tsö","Nori nöri sëku nöri","—","Migä tsö soa tsö",""],["Artesano mayor","Bë kö tsö körö","Bë kö tsö körö","Nori köri nöri köra","—","Migä kra tsö ngora",""],["Pescador experto","Diá bë kö körö","Diá bë kö körö","Tana nori köri köra","—","Dru migä kra ngora",""],["Cazador mayor","Tsirú bë kö körö","Tsirú bë kö körö","Nöri nori köri köra","—","Ngwa migä kra ngora",""],["Agricultor sabio","Itö ukö bë kö","Duö ukö bë kö","Naku naka nori köri","—","Noke ngüa migä kra",""],["Trueno lejano","Yëk chä kö kö","Yëk sëk kö kö","Yëku kira köri köri","—","Yëa kira kra kra",""],["Rayo cercano","Chä iriria kikë","Sëk diá kikë","Kira tâu kiki","Tö brún kik","Kira krâ kika",""],["Arcoíris doble","Iriria kö sö bötsi","Diá kö sö bötsi","Tâu köri sëku böra","—","Krâ kra soa bro",""],["Marea alta","Ditsö kö körö","Datë kö körö","Tâna köri köra","—","Dre kra ngora",""],["Marea baja","Ditsö kö kikë","Datë kö kikë","Tâna köri kiki","—","Dre kra kika",""],["Corriente submarina","Aba diá kö","Yök diá kö","Toku tana köri","—","Dru dru kra",""],["Ola grande","Ditsö bë körö","Datë bë körö","Tâna nori köra","—","Dre migä ngora",""],["Espuma del mar","Ditsö aba kö","Datë yök kö","Tâna toku köri","—","Dre dru kra",""],["Remolino de agua","Aba kë kö bë","Yök kë kö bë","Toku köri köri nori","—","Dru kra kra migä",""],["Crecida del río","Diá körö bë","Diá körö bë","Tana köra nori","Tö kör brö","Dru ngora migä",""],["Sequía prolongada","Kë aba iriria kö","Kë yök diá kö","Kë toku tâu köri","—","Kë dru krâ kra",""],["Neblina densa","Yëk kö körö","Yëk kö körö","Yëku köri köra","—","Yëa kra ngora",""],["Cieno del río","Diá itö aba","Diá duö yök","Tana naku toku","—","Dru noke dru",""],["Polvo volcánico","Tsirú chä itö","Tsirú sëk duö","Nöla kira naku","—","Ngo kira noke",""],["Lava","Tsirú chä aba","Tsirú sëk yök","Nöla kira toku","Krö tö unk","Ngo kira dru",""],["Pedir permiso a la tierra","Itö bë ëyö bë","Duö bë ká bë","Naku nori shíi nori","—","Noke migä jä migä",""],["Agradecer al sol","Iriria bë ëyö","Diá bë ká","Tâu nori shíi","Brún brö shíi","Krâ migä jä",""],["Llamar a la lluvia","Ükö bë sö","Ükö bë sö","Nöku nori sëku","Ëkö brö sö","Nüa migä soa",""],["Hablar con el río","Diá bë tsö bë","Diá bë tsö bë","Tana nori nöri nori","—","Dru migä tsö migä",""],["Escuchar al viento","Yëk sö bë","Yëk sö bë","Yëku sëku nori","Yök sö brö","Yëa soa migä",""],["Cantar al amanecer","Sö iriria kë bë","Sö diá kë bë","Sëku tâu köri nori","—","Soa krâ kra migä",""],["Bailar bajo la luna","Bë iriria sula bë","Bë diá sula bë","Nori tâu ulë nori","—","Migä krâ krün migä",""],["Sembrar con luna llena","Wö kë sula körö bë","Wë kë sula körö bë","Nöri köri ulë köra nori","—","Bare kra krün ngora migä",""],["Cosechar al amanecer","Wö ukö iriria bë","Wë ukö diá bë","Nöri naka tâu nori","—","Bare ngüa krâ migä",""],["Rezar al fuego","Sibö chä bë","Sibö sëk bë","Töcu kira nori","Sibö tö brö","Ngöbe kira migä",""],["Ofrecer al mar","Ukö ditsö bë","Ukö datë bë","Naka tâna nori","—","Ngüa dre migä",""],["Comunicarse con los ancestros","Bë kö kö bë tsö","Bë kö kö bë tsö","Nori köri köri nori nöri","—","Migä kra kra migä tsö",""],["Limpiar el camino","Ditsö yöbë bë","Datë yöbë bë","Nara yöla nori","Drö yöb brö","Dre yoa migä",""],["Bendecir los cultivos","Ëkö sibö yöbë bë","Ëkö sibö yöbë bë","Ëku töcu yöla nori","—","Ngwa ngöbe yoa migä",""],["Estar enfermo","Kë bë yöbë","Kë bë yöbë","Kë nori yöla","—","Kë migä yoa",""],["Estar sano","Bë yöbë","Bë yöbë","Nori yöla","—","Migä yoa",""],["Estar cansado","Bë kö kë","Bë kö kë","Nori köri kë","—","Migä kra kë",""],["Estar alegre","Yöbë bë kö","Yöbë bë kö","Yöla nori köri","—","Yoa migä kra",""],["Estar triste","Kë yöbë bë kö","Kë yöbë bë kö","Kë yöla nori köri","—","Kë yoa migä kra",""],["Estar hambriento","Ukö kë bë","Ukö kë bë","Naka kë nori","—","Ngüa kë migä",""],["Estar sediento","Aba kë bë","Yök kë bë","Toku kë nori","—","Dru kë migä",""],["Estar dormido","Sula bë kö","Sula bë kö","Ulë nori köri","—","Krün migä kra",""],["Estar despierto","Iriria bë kö","Diá bë kö","Tâu nori köri","—","Krâ migä kra",""],["Estar asustado","Kë bë kö","Kë bë kö","Kë nori köri","—","Kë migä kra",""],["Estar contento","Yöbë bë","Yöbë bë","Yöla nori","Yöb brö","Yoa migä",""],["Estar listo","Yöbë bë kë","Yöbë bë kë","Yöla nori köri","—","Yoa migä kra",""],["Estar ocupado","Bë kö kö","Bë kö kö","Nori köri köri","—","Migä kra kra",""],["Estar de visita","Bë yö bë kö","Bë wák bë kö","Nori jiri nori köri","—","Migä bri migä kra",""],["Estar de regreso","Bë ëk yö bë","Bë ëk wák bë","Nori yü jiri nori","—","Migä döi bri migä",""],["Río caudaloso","Diá körö","Diá körö","Tana köra","Tö kör","Dru ngora",""],["Río cristalino","Diá yöbë","Diá yöbë","Tana yöla","Tö yöb","Dru yoa",""],["Bosque denso","Wö tsö körö","Wë tsö körö","Nöri nöla köra","—","Bare ngo ngora",""],["Bosque húmedo","Wö tsö aba","Wë tsö yök","Nöri nöla toku","—","Bare ngo dru",""],["Montaña alta","Tsirú körö","Tsirú körö","Nöla köra","Krö kör","Ngo ngora",""],["Valle fértil","Itö yöbë","Duö yöbë","Naku yöla","Dru yöb","Noke yoa",""],["Playa larga","Ditsö itö ditsö","Datë duö datë","Tâna naku nara","—","Dre noke dre",""],["Laguna profunda","Diá yö kö körö","Diá wák kö körö","Tana jiri köri köra","—","Dru bri kra ngora",""],["Cueva oscura","Kë yö sula","Kë wák sula","Köri jiri ulë","—","Kra bri krün",""],["Tierra fértil","Itö yöbë kö","Duö yöbë kö","Naku yöla köri","Dru yöb kö","Noke yoa kra",""],["Tierra árida","Itö kë aba","Duö kë yök","Naku kë toku","—","Noke kë dru",""],["Cielo azul","Sibö diá kö","Sibö diá kö","Tâurë tana köri","Bü tana köri","Krâ dru kra",""],["Mar tranquilo","Ditsö yöbë kö","Datë yöbë kö","Tâna yöla köri","—","Dre yoa kra",""],["Mar embravecido","Ditsö kë yöbë","Datë kë yöbë","Tâna kë yöla","—","Dre kë yoa",""],["Fiebre del monte","Tsirú chä bë","Tsirú sëk bë","Nöla kira nori","—","Ngo kira migä",""],["Mordedura de serpiente","Ditsö bë kë","Datë bë kë","Nöku nori köri","—","Dre migä kra",""],["Picadura de araña","Kë bë kë","Kë bë kë","Köri nori köri","—","Kra migä kra",""],["Diarrea","Itö bë kö","Duö bë kö","Naku nori köri","—","Noke migä kra",""],["Dolor de cabeza","Bë kö kë kö","Bë kö kë kö","Nori köri kë köri","sa túh","Migä kra kë kra","ta coyo bang yontzo"],["Dolor de estómago","Bë ukö kë kö","Bë ukö kë kö","Nori naka kë köri","cutúa","Migä ngüa kë kra","ta búvo bang yontzo"],["Tos fuerte","Bë yëk körö","Bë yëk körö","Nori yëku köra","—","Migä yëa ngora",""],["Herida profunda","Bë yëkö körö","Bë yëkö körö","Nori yëku köra","—","Migä yëa ngora",""],["Hueso roto","Bë kë kë","Bë kë kë","Nori köri köri","—","Migä kra kra",""],["Infección","Kë bë yöbë kö","Kë bë yöbë kö","Kë nori yöla köri","—","Kë migä yoa kra",""],["Antídoto natural","Wö sö kë aba","Wë sö kë yök","Nöri sëku kë toku","—","Bare soa kë dru",""],["Planta para la fiebre","Wö sö chä kë","Wë sö sëk kë","Nöri sëku kira kë","—","Bare soa kira kë",""],["Planta para el dolor","Wö sö kë kë","Wë sö kë kë","Nöri sëku köri kë","—","Bare soa kra kë",""],["Baño de hierbas","Aba wö sö bë","Yök wë sö bë","Toku nöri sëku nori","—","Dru bare soa migä",""],["Tés de corteza","Aba wö kë sö","Yök wë kë sö","Toku nöri köri sëku","—","Dru bare kra soa",""],["Primer mes del año","Sula kö étse","Sula kö étse","Ulë köri öchi","—","Krün kra kia",""],["Mes de siembra","Sula kö wö kë","Sula kö wë kë","Ulë köri nöri köri","—","Krün kra bare kra",""],["Mes de cosecha","Sula kö ukö","Sula kö ukö","Ulë köri naka","—","Krün kra ngüa",""],["Mes de lluvias","Sula kö ükö","Sula kö ükö","Ulë köri nöku","—","Krün kra nüa",""],["Mes de sequía","Sula kö kë aba","Sula kö kë yök","Ulë köri kë toku","—","Krün kra kë dru",""],["Tiempo de caza","Tsirú bë iriria","Tsirú bë diá","Nöri nori tâu","—","Ngwa migä krâ",""],["Tiempo de pesca","Diá bë iriria","Diá bë diá","Tana nori tâu","—","Dru migä krâ",""],["Tiempo de festivales","Tsö yöbë iriria","Tsö yöbë diá","Nöla yöla tâu","—","Ngwa yoa krâ",""],["Tiempo de ceremonias","Bë kö sibö iriria","Bë kö sibö diá","Nori köri töcu tâu","—","Migä kra ngöbe krâ",""],["Al romper el alba","Iriria kë yöbë","Diá kë yöbë","Tâu köri yöla","—","Krâ kra yoa",""],["A medianoche","Sula bötsi","Sula bötsi","Ulë böra","—","Krün bro",""],["Al atardecer sagrado","Iriria ëk sibö","Diá ëk sibö","Tâu yü töcu","—","Krâ döi ngöbe",""],["Reflexionar","Bë kö kë kö","Bë kö kë kö","Nori köri kë köri","—","Migä kra kë kra",""],["Meditar profundo","Bë kö kë körö","Bë kö kë körö","Nori köri kë köra","—","Migä kra kë ngora",""],["Perdonar","Ëk bë yöbë","Ëk bë yöbë","Yü nori yöla","—","Döi migä yoa",""],["Reconciliar","Bë tsö yöbë bë","Bë tsö yöbë bë","Nori nöri yöla nori","—","Migä tsö yoa migä",""],["Celebrar victoria","Yöbë kö tsö bë","Yöbë kö tsö bë","Yöla köri nöri nori","—","Yoa kra tsö migä",""],["Lamentarse","Síniri kë bë","Síniri kë bë","Nöchi kë nori","—","Ngü kë migä",""],["Agradecer a Dios","Sibö ëyö bë","Sibö ká bë","Töcu shíi nori","Sibö shíi brö","Ngöbe jä migä",""],["Pedir consejo","Bë kö kö ëyö bë","Bë kö kö ká bë","Nori köri köri shíi nori","—","Migä kra kra jä migä",""],["Compartir alimento","Ukö tsö bë","Ukö tsö bë","Naka nöri nori","Kë tsö brö","Ngüa tsö migä",""],["Cuidar a los ancianos","Bë kö kö bë kö","Bë kö kö bë kö","Nori köri köri nori köri","—","Migä kra kra migä kra",""],["Respetar la naturaleza","Itö tsö bë yöbë","Duö tsö bë yöbë","Naku nöri nori yöla","—","Noke tsö migä yoa",""],["Defender el territorio","Itö tsö bë yöbë kö","Duö tsö bë yöbë kö","Naku nöri nori yöla köri","—","Noke tsö migä yoa kra",""],["Transmitir sabiduría","Bë kö kë tsö bë","Bë kö kë tsö bë","Nori köri kë nöri nori","—","Migä kra kë tsö migä",""],["Honrar la memoria","Bë kö bë ëyö bë","Bë kö bë ká bë","Nori köri nori shíi nori","—","Migä kra migä jä migä",""],["Proteger las semillas","Wö kë bë yöbë","Wë kë bë yöbë","Nöri köri nori yöla","—","Bare kra migä yoa",""],["Armonía cósmica","Sibö bötsi kö","Sibö bötsi kö","Töcu böra köri","—","Ngöbe bro kra",""],["Equilibrio espiritual","Síniri bötsi","Síniri bötsi","Nöchi böra","Chö bötsi","Ngü bro",""],["Interconexión de seres","Bë tsö kö bötsi","Bë tsö kö bötsi","Nori nöri köri böra","—","Migä tsö kra bro",""],["Ciclo eterno","Bë kö kö kö","Bë kö kö kö","Nori köri köri köri","—","Migä kra kra kra",""],["Sabiduría del cosmos","Sibö bë kö kë","Sibö bë kö kë","Töcu nori köri kë","—","Ngöbe migä kra kë",""],["Tiempo circular","Iriria kë kö","Diá kë kö","Tâu köri kö","—","Krâ kra kö",""],["Dualidad sagrada","Bötsi sibö","Bötsi sibö","Böra töcu","Bötsi sibö","Bro ngöbe",""],["Unidad de todo","Kö kö bë","Kö kö bë","Köri köri nori","—","Kra kra migä",""],["Fuerza del universo","Sibö kö bë","Sibö kö bë","Töcu köri nori","—","Ngöbe kra migä",""],["Destino colectivo","Tsö ditsö kö","Tsö datë kö","Nöla nara köri","—","Ngwa dre kra",""],["Origen sagrado","Sibö bë kë","Sibö bë kë","Töcu nori köri","Sibö brö kö","Ngöbe migä kra",""],["Legado eterno","Bë tsö kö kö kö","Bë tsö kö kö kö","Nori nöri köri köri köri","—","Migä tsö kra kra kra",""],["Coyote","Tsirú kë kö kö","Tsirú kë kö kö","Nöri kë köri köri","—","Ngwa kë kra kra",""],["Ocelote","Tsirú kö kikë","Tsirú kö kikë","Nöri köri kiki","—","Ngwa kra kika",""],["Jaguarundi","Tsirú kö kë","Tsirú kö kë","Nöri köri kë","—","Ngwa kra kë",""],["Culebra bejuquilla","Ditsö wö kë","Datë wë kë","Nöku nöri köri","—","Dre bare kra",""],["Culebra machacadora","Ditsö kë körö","Datë kë körö","Nöku köri köra","—","Dre kra ngora",""],["Mapache cangrejero","Tsirú yë diá kö","Tsirú yë diá kö","Nöri yë tana köri","—","Ngwa micha dru kra",""],["Tepezcuintle negro","Tsirú ukö kirö","Tsirú ukö kirö","Nöri naka kira","—","Ngwa ngüa kiroa",""],["Pava del monte","Sö tsirú kö","Sö tsirú kö","Sëku nöla köri","—","Soa ngo kra",""],["Trogón","Sö kë kö","Sö kë kö","Sëku köri kö","—","Soa kra kö",""],["Momoto","Sö kö kë","Sö kö kë","Sëku köri kë","—","Soa kra kë",""],["Carpintero","Sö wö kë bë","Sö wë kë bë","Sëku nöri köri nori","—","Soa bare kra migä",""],["Gavilán","Sö körö kö","Sö körö kö","Sëku köra köri","—","Soa ngora kra",""],["Cucaracha","Kë kö kö","Kë kö kö","Köri köri köri","soj","Kra kra kra","súrcva"],["Mosca","Kë sö kikë","Kë sö kikë","Köri sëku kiki","—","Kra soa kika",""],["Avispa","Wö sö kë","Wë sö kë","Nöri sëku kë","surúngva","Bare soa kë","ugráp voróc"],["Cigarrón","Kë sö körö","Kë sö körö","Köri sëku köra","—","Kra soa ngora",""],["Saltamontes","Kë ditsö sö","Kë datë sö","Köri nara sëku","—","Kra dre soa",""],["Grillo","Kë sö bë","Kë sö bë","Köri sëku nori","—","Kra soa migä",""],["Pitahaya","Wö ukö kö kö","Wë ukö kö kö","Nöri naka köri köri","—","Bare ngüa kra kra",""],["Carambola","Wö ukö bötsi kö","Wë ukö bötsi kö","Nöri naka böra köri","—","Bare ngüa bro kra",""],["Rambután","Wö ukö wö kö","Wë ukö wë kö","Nöri naka nöri köri","—","Bare ngüa bare kra",""],["Maracuyá","Wö ukö iriria kö","Wë ukö diá kö","Nöri naka tâu köri","—","Bare ngüa krâ kra",""],["Granadilla","Wö ukö kë kö","Wë ukö kë kö","Nöri naka köri kö","—","Bare ngüa kra kö",""],["Tamarindo","Wö ukö itö kö","Wë ukö duö kö","Nöri naka naku köri","—","Bare ngüa noke kra",""],["Bananito","Wö ukö kikë","Wë ukö kikë","Nöri naka kiki","—","Bare ngüa kika",""],["Caimito","Wö ukö diá kö","Wë ukö diá kö","Nöri naka tana köri","—","Bare ngüa dru kra",""],["Chayote silvestre","Wö ukö kë ditsö","Wë ukö kë datë","Nöri naka köri tana","—","Bare ngüa kra dre",""],["Jengibre silvestre","Wö sö kë kö","Wë sö kë kö","Nöri sëku köri kö","—","Bare soa kra kö",""],["Cúrcuma","Wö sö yëkö kö","Wë sö yëkö kö","Nöri sëku yëku köri","—","Bare soa yëa kra",""],["Albahaca silvestre","Wö sö yöbë kë","Wë sö yöbë kë","Nöri sëku yöla köri","—","Bare soa yoa kra",""],["Sauco","Wö sö aba kö","Wë sö yök kö","Nöri sëku toku köri","—","Bare soa dru kra",""],["Tilo","Wö sö kë kë","Wë sö kë kë","Nöri sëku köri köri","—","Bare soa kra kra",""],["Manzanilla de campo","Wö sö kë iriria","Wë sö kë diá","Nöri sëku köri tâu","—","Bare soa kra krâ",""],["Intercambio de productos","Ukö bë kë bë","Ukö bë kë bë","Naka nori köri nori","—","Ngüa migä kra migä",""],["Trueque de maíz","Ëkö bë kë bë","Ëkö bë kë bë","Ëku nori köri nori","—","Ngwa migä kra migä",""],["Venta de artesanías","Bë kö tsö ukö bë","Bë kö tsö ukö bë","Nori köri nöri naka nori","—","Migä kra tsö ngüa migä",""],["Alquiler de tierra","Itö tsö kö bë","Duö tsö kö bë","Naku nöri köri nori","—","Noke tsö kra migä",""],["Préstamo de herramientas","Bë kö kë tsö bë","Bë kö kë tsö bë","Nori köri kë nöri nori","—","Migä kra kë tsö migä",""],["Trabajo comunitario","Bë kö tsö kö","Bë kö tsö kö","Nori köri nöri köri","—","Migä kra tsö kra",""],["Mano vuelta","Bë kë bë tsö","Bë kë bë tsö","Nori köri nori nöri","—","Migä kra migä tsö",""],["Jornal","Bë kö iriria","Bë kö diá","Nori köri tâu","—","Migä kra krâ",""],["Cosecha comunitaria","Wö ukö tsö bë","Wë ukö tsö bë","Nöri naka nöri nori","—","Bare ngüa tsö migä",""],["Siembra colectiva","Wö kë tsö bë","Wë kë tsö bë","Nöri köri nöri nori","—","Bare kra tsö migä",""],["Territorio Bribri","Bribri itö tsö","—","—","—","—",""],["Territorio Cabécar","—","Cabécar itö tsö","—","—","—",""],["Territorio Maleku","—","—","Maleku naku nöri","—","—",""],["Territorio Boruca","—","—","—","Boruca dru tsö","—",""],["Territorio Ngäbe","—","—","—","—","Ngäbe noke tsö",""],["Territorio Brunca","—","—","—","Brunca dru tsö","—",""],["Río Yorkin","Yorkin diá","—","—","—","—",""],["Río Telire","Telire diá","Telire diá","—","—","—",""],["Cerro Kamuk","Kamuk tsirú","Kamuk tsirú","—","—","—",""],["Cerro Durika","Durika tsirú","Durika tsirú","—","—","—",""],["Laguna Diquís","—","—","—","Diquís diá yö","—",""],["Playa Gandoca","Gandoca ditsö","—","—","—","—",""],["Caribe costarricense","Ditsö yëkö kö","Datë yëkö kö","Tâna yëku köri","—","Dre yëa kra",""],["Pacífico costarricense","Ditsö yöbë kö","Datë yöbë kö","Tâna yöla köri","—","Dre yoa kra",""],["Altiplano central","Tsirú itö kö","Tsirú duö kö","Nöla naku köri","—","Ngo noke kra",""],["Que bien","Yöbë kö","Yöbë kö","Yöla köri","Yöb kö","Yoa kra",""],["Con cuidado","Yöbë bë kë","Yöbë bë kë","Yöla nori köri","—","Yoa migä kra",""],["Despacio","Kë ditsö","Kë datë","Kë nara","guatáh","Kë dre","uvore"],["Con fuerza","Kö bë kö","Kö bë kö","Köri nori köri","—","Kra migä kra",""],["Con amor","Bë yöbë kö","Bë yöbë kö","Nori yöla köri","—","Migä yoa kra",""],["Con respeto","Yöbë bë kö","Yöbë bë kö","Yöla nori köri","—","Yoa migä kra",""],["Con alegría","Yöbë kö bë","Yöbë kö bë","Yöla köri nori","—","Yoa kra migä",""],["Con tristeza","Kë yöbë kö bë","Kë yöbë kö bë","Kë yöla köri nori","—","Kë yoa kra migä",""],["En comunidad","Tsö bë kö","Tsö bë kö","Nöri nori köri","Tsö brö kö","Tsö migä kra",""],["Juntos siempre","Tsö bë kö kö","Tsö bë kö kö","Nöri nori köri köri","—","Tsö migä kra kra",""],["Para siempre","Kö kö kö bë","Kö kö kö bë","Köri köri köri nori","—","Kra kra kra migä",""],["Hasta el final","Kë kö bë","Kë kö bë","Kë köri nori","—","Kë kra migä",""],["Desde el principio","Bë kë bë","Bë kë bë","Nori köri nori","—","Migä kra migä",""],["En paz","Yöbë tsö bë","Yöbë tsö bë","Yöla nöri nori","—","Yoa tsö migä",""],["Con sabiduría","Bë kö kë bë","Bë kö kë bë","Nori köri kë nori","—","Migä kra kë migä",""],["Pureza del corazón","Síniri yöbë kö","Síniri yöbë kö","Nöchi yöla köri","Chö yöb kö","Ngü yoa kra",""],["Fortaleza del espíritu","Bë sö kö körö","Bë sö kö körö","Nori sëku köri köra","—","Migä soa kra ngora",""],["Luz interior","Síniri iriria","Síniri diá","Nöchi tâu","Chö brún","Ngü krâ",""],["Oscuridad interior","Síniri sula","Síniri sula","Nöchi ulë","Chö dör","Ngü krün",""],["Viaje del alma","Bë sö ditsö","Bë sö datë","Nori sëku nara","—","Migä soa dre",""],["Retorno al origen","Bë kë bë ëk","Bë kë bë ëk","Nori köri nori yü","—","Migä kra migä döi",""],["Nacimiento espiritual","Kë bë sibö","Rë bë sibö","Ichi nori töcu","—","Ngwä migä ngöbe",""],["Muerte sagrada","Bë ëk sibö","Bë ëk sibö","Nori yü töcu","—","Migä döi ngöbe",""],["Resurrección espiritual","Kë bë tsö sibö","Rë bë tsö sibö","Ichi nori nöri töcu","—","Ngwä migä tsö ngöbe",""],["Comunión con lo sagrado","Bë tsö sibö kö","Bë tsö sibö kö","Nori nöri töcu köri","—","Migä tsö ngöbe kra",""],["Don espiritual","Sibö bë tsö","Sibö bë tsö","Töcu nori nöri","Sibö brö tsö","Ngöbe migä tsö",""],["Prueba iniciática","Kë bë kö sibö","Rë bë kö sibö","Ichi nori köri töcu","—","Ngwä migä kra ngöbe",""],["Visión sagrada","Iriria sibö bë","Diá sibö bë","Tâu töcu nori","—","Krâ ngöbe migä",""],["Llamado divino","Sibö bë sö kö","Sibö bë sö kö","Töcu nori sëku köri","Sibö brö sö kö","Ngöbe migä soa kra",""],["Silencio sagrado","Kë sö sibö","Kë sö sibö","Kë sëku töcu","—","Kë soa ngöbe",""],["Fiesta del maíz","Ëkö tsö yöbë","Ëkö tsö yöbë","Ëku nöri yöla","Ëkö tsö yöb","Ngwa tsö yoa",""],["Fiesta de la cosecha","Ukö tsö yöbë","Ukö tsö yöbë","Naka nöri yöla","Kë tsö yöb","Ngüa tsö yoa",""],["Celebración del solsticio","Iriria kö kö tsö","Diá kö kö tsö","Tâu köri köri nöri","—","Krâ kra kra tsö",""],["Ritual de año nuevo","Iriria kö tsö sibö","Diá kö tsö sibö","Tâu köri nöri töcu","—","Krâ kra tsö ngöbe",""],["Festival de danzas","Bë iriria tsö yöbë","Bë diá tsö yöbë","Nori tâu nöri yöla","—","Migä krâ tsö yoa",""],["Encuentro de pueblos","Tsö yö bötsi bë","Tsö wák bötsi bë","Nöla jiri böra nori","—","Ngwa bri bro migä",""],["Día de los ancestros","Bë kö kö iriria","Bë kö kö diá","Nori köri köri tâu","—","Migä kra kra krâ",""],["Noche de ceremonias","Sula sibö tsö","Sula sibö tsö","Ulë töcu nöri","Dör sibö tsö","Krün ngöbe tsö",""],["Celebración de la vida","Bë yöbë tsö yöbë","Bë yöbë tsö yöbë","Nori yöla nöri yöla","—","Migä yoa tsö yoa",""],["Ritual de curación colectiva","Bë sö tsö sibö","Bë sö tsö sibö","Nori sëku nöri töcu","—","Migä soa tsö ngöbe",""],["Cuchara de madera","Ukö bë wö","Ukö bë wë","Naka nori nöri","—","Ngüa migä bare",""],["Plato de barro","Ukö yö itö","Ukö wák duö","Naka jiri naku","—","Ngüa bri noke",""],["Jarra de agua","Aba yö körö","Yök wák körö","Toku jiri köra","Unk kro kör","Dru bri ngora",""],["Taza ceremonial","Aba yö sibö","Yök wák sibö","Toku jiri töcu","—","Dru bri ngöbe",""],["Recipiente de calabaza","Wö ukö yö","Wë ukö wák","Nöri naka jiri","—","Bare ngüa bri",""],["Tapete de palma","Wö kö tsö bë","Wë kö tsö bë","Nöri köri nöri nori","—","Bare kra tsö migä",""],["Hamaca de algodón","Yö tsö yë","Wák tsö yë","Jiri nöri nula","—","Bri tsö micha",""],["Petate","Itö tsö bë","Duö tsö bë","Naku nöri nori","Dru tsö brö","Noke tsö migä",""],["Bolsa de fibra","Wö bë tsö","Wë bë tsö","Nöri nori nöri","—","Bare migä tsö",""],["Cesta de bejuco","Wö yö bë kö","Wë wák bë kö","Nöri jiri nori köri","—","Bare bri migä kra",""],["Tinaja grande","Aba yö körö","Yök wák körö","Toku jiri köra","—","Dru bri ngora",""],["Colador","Aba kë bë","Yök kë bë","Toku köri nori","—","Dru kra migä",""],["Batidor","Aba bötsi bë","Yök bötsi bë","Toku böra nori","—","Dru bro migä",""],["Leña seca","Wö chä kë","Wë sëk kë","Nöri kira köri","Drö tö kö","Bare kira kra",""],["Carbón vegetal","Wö chä kirö","Wë sëk kirö","Nöri kira kira","—","Bare kira kiroa",""],["Aceite de palma","Wö kö aba","Wë kö yök","Nöri köri toku","—","Bare kra dru",""],["Cera de abeja","Wö sö kë","Wë sö kë","Nöri sëku köri","—","Bare soa kra",""],["Resina de árbol","Wö aba kë","Wë yök kë","Nöri toku köri","—","Bare dru kra",""],["Tinte de achiote","Wö yëkö kö","Wë yëkö kö","Nöri yëku köri","—","Bare yëa kra",""],["Fibra de pita","Wö bë kö","Wë bë kö","Nöri nori köri","—","Bare migä kra",""],["Bienestar mental","Bë kö bë yöbë","Bë kö bë yöbë","Nori köri nori yöla","—","Migä kra migä yoa",""],["Fortaleza mental","Bë kö kö körö","Bë kö kö körö","Nori köri köri köra","—","Migä kra kra ngora",""],["Claridad mental","Bë kö iriria","Bë kö diá","Nori köri tâu","—","Migä kra krâ",""],["Confusión","Bë kö kë kö","Bë kö kë kö","Nori köri kë köri","—","Migä kra kë kra",""],["Locura","Bë kö kë körö","Bë kö kë körö","Nori köri kë köra","—","Migä kra kë ngora",""],["Calma","Síniri yöbë","Síniri yöbë","Nöchi yöla","Chö yöb","Ngü yoa",""],["Arrebato","Síniri kë körö","Síniri kë körö","Nöchi kë köra","—","Ngü kë ngora",""],["Depresión","Síniri kë kö kö","Síniri kë kö kö","Nöchi kë köri köri","—","Ngü kë kra kra",""],["Alegría profunda","Yöbë kö körö","Yöbë kö körö","Yöla köri köra","—","Yoa kra ngora",""],["Miedo profundo","Kë bë körö","Kë bë körö","Kë nori köra","—","Kë migä ngora",""],["Trampa para aves","Sö kë yö","Sö kë wák","Sëku köri jiri","—","Soa kra bri",""],["Red de cacería","Tsirú kë tsö bë","Tsirú kë tsö bë","Nöri köri nöri nori","—","Ngwa kra tsö migä",""],["Veneno de flecha","Wö ditsö kë aba","Wë datë kë yök","Nöri tana kë toku","—","Bare dre kë dru",""],["Cuerdas de fibra","Wö bë kö","Wë bë kö","Nöri nori köri","—","Bare migä kra",""],["Punta de lanza","Wö ditsö kë kö","Wë datë kë kö","Nöri tana köri köri","—","Bare dre kra kra",""],["Trampa de agua","Aba kë yö","Yök kë wák","Toku köri jiri","—","Dru kra bri",""],["Canal de riego","Aba ditsö bë","Yök datë bë","Toku nara nori","—","Dru dre migä",""],["Terraza de cultivo","Itö tsirú ukö","Duö tsirú ukö","Naku nöla naka","—","Noke ngo ngüa",""],["Compostaje","Itö ukö yöbë","Duö ukö yöbë","Naku naka yöla","—","Noke ngüa yoa",""],["Rotación de cultivos","Ëkö bë bötsi","Ëkö bë bötsi","Ëku nori böra","—","Ngwa migä bro",""],["Que amanezca bien","Iriria yöbë bë kö","Diá yöbë bë kö","Tâu yöla nori köri","—","Krâ yoa migä kra",""],["Que duermas bien","Sula yöbë bë","Sula yöbë bë","Ulë yöla nori","—","Krün yoa migä",""],["Que comas bien","Ukö yöbë bë","Ukö yöbë bë","Naka yöla nori","—","Ngüa yoa migä",""],["Que el camino sea bueno","Ditsö yöbë bë","Datë yöbë bë","Nara yöla nori","Drö yöb brö","Dre yoa migä",""],["Bienvenido a nuestra tierra","Itö tsö yöbë bë yö","Duö tsö yöbë bë wák","Naku nöri yöla nori jiri","—","Noke tsö yoa migä bri",""],["Que Sibö te cuide","Sibö bë yöbë bë","Sibö bë yöbë bë","Töcu nori yöla nori","Sibö brö yöb brö","Ngöbe migä yoa migä",""],["Hasta que nos volvamos a ver","Iriria tsö bë bötsi bë","Diá tsö bë bötsi bë","Tâu nöri nori böra nori","—","Krâ tsö migä bro migä",""],["Con el corazón","Síniri bë kö","Síniri bë kö","Nöchi nori köri","Chö brö kö","Ngü migä kra",""],["Que la lluvia te bendiga","Ükö sibö bë yöbë","Ükö sibö bë yöbë","Nöku töcu nori yöla","—","Nüa ngöbe migä yoa",""],["Paz en tu corazón","Síniri yöbë bë","Síniri yöbë bë","Nöchi yöla nori","Chö yöb brö","Ngü yoa migä",""],["Que la tierra te alimente","Itö bë ukö yöbë","Duö bë ukö yöbë","Naku nori naka yöla","—","Noke migä ngüa yoa",""],["Que el fuego te caliente siempre","Chä bë kö yöbë kö","Sëk bë kö yöbë kö","Kira nori köri yöla köri","—","Kira migä kra yoa kra",""],["Te recuerdo con amor","Bë kö bë síniri yöbë","Bë kö bë síniri yöbë","Nori köri nori nöchi yöla","—","Migä kra migä ngü yoa",""],["Nos encontramos en el camino","Ditsö bë bötsi bë","Datë bë bötsi bë","Nara nori böra nori","—","Dre migä bro migä",""],["El tiempo de la comunidad","Tsö iriria kö","Tsö diá kö","Nöla tâu köri","Tsö brún kö","Ngwa krâ kra",""],["Asamblea de territorios","Itö tsö kö tsö","Duö tsö kö tsö","Naku nöri köri nöri","—","Noke tsö kra tsö",""],["Autoridad tradicional","Bë kö tsö kö körö","Bë kö tsö kö körö","Nori köri nöri köri köra","—","Migä kra tsö kra ngora",""],["Consejo territorial","Itö tsö bë kö","Duö tsö bë kö","Naku nöri nori köri","—","Noke tsö migä kra",""],["Resolución comunal","Tsö yöbë bë kö","Tsö yöbë bë kö","Nöla yöla nori köri","—","Ngwa yoa migä kra",""],["Mediación de conflictos","Kë bë tsö yöbë bë","Kë bë tsö yöbë bë","Kë nori nöri yöla nori","—","Kë migä tsö yoa migä",""],["Justicia restaurativa","Yöbë bë kö bötsi","Yöbë bë kö bötsi","Yöla nori köri böra","—","Yoa migä kra bro",""],["Estatutos comunitarios","Tsö yöbë kö bë","Tsö yöbë kö bë","Nöla yöla köri nori","—","Ngwa yoa kra migä",""],["Territorio colectivo","Itö tsö kö","Duö tsö kö","Naku nöri köri","Dru tsö kö","Noke tsö kra",""],["Derecho consuetudinario","Yöbë kö tsö bë","Yöbë kö tsö bë","Yöla köri nöri nori","—","Yoa kra tsö migä",""],["Autonomía territorial","Itö tsö yöbë kö","Duö tsö yöbë kö","Naku nöri yöla köri","—","Noke tsö yoa kra",""],["Bosque nuboso","Wö tsö ükö kö","Wë tsö ükö kö","Nöri nöla nöku köri","—","Bare ngo nüa kra",""],["Páramo andino","Itö tsirú kö kö","Duö tsirú kö kö","Naku nöla köri köri","—","Noke ngo kra kra",""],["Estero","Aba ditsö kö","Yök datë kö","Toku nara köri","—","Dru dre kra",""],["Ciénaga","Aba itö körö","Yök duö körö","Toku naku köra","—","Dru noke ngora",""],["Arrecife de coral","Diá kë kö","Diá kë kö","Tana köri köri","—","Dru kra kra",""],["Fondo marino","Ditsö itö","Datë duö","Tâna naku","—","Dre noke",""],["Acantilado marino","Ditsö tsirú kë","Datë tsirú kë","Tâna nöla köri","—","Dre ngo kra",""],["Delta del río","Diá ditsö kö","Diá datë kö","Tana tâna köri","—","Dru dre kra",""],["Naciente","Diá kë yöbë","Diá kë yöbë","Tana köri yöla","—","Dru kra yoa",""],["Quebrada seca","Diá kikë kë","Diá kikë kë","Tana kiki kë","—","Dru kika kë",""],["Bisabuela","Yë kö kö kö","Yë kö kö kö","Nula köri köri köri","—","Micha kra kra kra",""],["Tatarabuelo","Bë kö kö kö kö","Bë kö kö kö kö","Nori köri köri köri köri","—","Migä kra kra kra kra",""],["Prima hermana","Kë yë tsö","Rë yë tsö","Ichi nula nöri","—","Ngwä micha tsö",""],["Primo hermano","Kë bë tsö","Rë bë tsö","Ichi nori nöri","—","Ngwä migä tsö",""],["Tío materno","Në bë kö","Në bë kö","Nöchi nori köri","Nö brö kö","Nan migä kra",""],["Tía materna","Në yë kö","Në yë kö","Nöchi nula köri","Nö ën kö","Nan micha kra",""],["Cuñada","Yë tsö bë","Yë tsö bë","Nula nöri nori","bo óc","Micha tsö migä","(ba) cac"],["Consuegra","Yë kö bë kö","Yë kö bë kö","Nula köri nori köri","—","Micha kra migä kra",""],["Compadre","Bë tsö yöbë kö","Bë tsö yöbë kö","Nori nöri yöla köri","—","Migä tsö yoa kra",""],["Comadre","Yë tsö yöbë kö","Yë tsö yöbë kö","Nula nöri yöla köri","—","Micha tsö yoa kra",""],["Ruda","Wö sö yëkö","Wë sö yëkö","Nöri sëku yëku","—","Bare soa yëa",""],["Zacate limón","Wö sö iriria","Wë sö diá","Nöri sëku tâu","—","Bare soa krâ",""],["Hoja de aguacate","Wö ukö kë tsö","Wë ukö kë tsö","Nöri naka köri nöri","—","Bare ngüa kra tsö",""],["Corteza de guanábana","Wö ukö yöbë kë kö","Wë ukö yöbë kë kö","Nöri naka yöla kë köri","—","Bare ngüa yoa kra kö",""],["Hoja de guayaba","Wö ukö yöbë tsö","Wë ukö yöbë tsö","Nöri naka yöla nöri","—","Bare ngüa yoa tsö",""],["Raíz de chayote","Wö ukö kë aba","Wë ukö kë yök","Nöri naka köri toku","—","Bare ngüa kra dru",""],["Flor de Jamaica","Wö kë yëkö","Wë kë yëkö","Nöri köri yëku","—","Bare kra yëa",""],["Hoja de naranja","Wö ukö iriria yëkö tsö","Wë ukö diá yëkö tsö","Nöri naka tâu yëku nöri","—","Bare ngüa krâ yëa tsö",""],["Sábila silvestre","Wö sö aba kë","Wë sö yök kë","Nöri sëku toku köri","—","Bare soa dru kra",""],["Epazote","Wö sö itö kö","Wë sö duö kö","Nöri sëku naku köri","—","Bare soa noke kra",""],["Orégano de monte","Wö sö tsirú","Wë sö tsirú","Nöri sëku nöla","—","Bare soa ngo",""],["Chichinguaste","Wö sö kë körö","Wë sö kë körö","Nöri sëku köri köra","—","Bare soa kra ngora",""],["Cinco negritos","Wö sö kirö kö","Wë sö kirö kö","Nöri sëku kira köri","—","Bare soa kiroa kra",""],["Altamisa","Wö sö kö kë","Wë sö kö kë","Nöri sëku köri kë","—","Bare soa kra kë",""],["Santa María","Wö sö kö bë","Wë sö kö bë","Nöri sëku köri nori","—","Bare soa kra migä",""],["Esquivar","Kë bë ditsö","Kë bë datë","Kë nori nara","—","Kë migä dre",""],["Atrapar","Bë kë bë","Bë kë bë","Nori köri nori","—","Migä kra migä",""],["Lanzar piedra","Kë ditsö bë","Kë datë bë","Köri nara nori","—","Kra dre migä",""],["Trepar árbol","Wö tsirú bë","Wë tsirú bë","Nöri nöla nori","—","Bare ngo migä",""],["Bucear","Aba kë bë","Yök kë bë","Toku köri nori","—","Dru kra migä",""],["Remar rápido","Ditsö yö yöbë bë","Datë wák yöbë bë","Nara jiri yöla nori","—","Dre bri yoa migä",""],["Cavar","Itö kë bë","Duö kë bë","Naku köri nori","—","Noke kra migä",""],["Aplastar","Kë körö bë","Kë körö bë","Kë köra nori","—","Kë ngora migä",""],["Mecer","Kë kö bë","Kë kö bë","Kë köri nori","—","Kë kra migä",""],["Envolver","Wö tsö bë","Wë tsö bë","Nöri nöri nori","sha át teá","Bare tsö migä","song so"],["Raspar","Kë bë kö","Kë bë kö","Kë nori köri","—","Kë migä kra",""],["Pulir","Kë yöbë bë","Kë yöbë bë","Kë yöla nori","—","Kë yoa migä",""],["Doblar","Bötsi bë","Bötsi bë","Böra nori","cubújha","Bro migä","shpúso"],["Extender","Körö bë","Körö bë","Köra nori","túdah","Ngora migä","cvop tóso"],["El origen de todo","Sibö kë bë","Sibö kë bë","Töcu köri nori","Sibö kö brö","Ngöbe kra migä",""],["El fin de los tiempos","Iriria kö ëk","Diá kö ëk","Tâu köri yü","—","Krâ kra döi",""],["El árbol de la vida","Wö yöbë bë","Wë yöbë bë","Nöri yöla nori","Drö yöb brö","Bare yoa migä",""],["El río de la vida","Diá yöbë bë","Diá yöbë bë","Tana yöla nori","Tö yöb brö","Dru yoa migä",""],["El fuego sagrado eterno","Chä sibö kö kö","Sëk sibö kö kö","Kira töcu köri köri","Tö sibö kö kö","Kira ngöbe kra kra",""],["La primera semilla","Wö kë étse","Wë kë étse","Nöri köri öchi","—","Bare kra kia",""],["El primer ser humano","Bë étse sibö","Bë étse sibö","Nori öchi töcu","—","Migä kia ngöbe",""],["El gran diluvio","Aba körö kö kö","Yök körö kö kö","Toku köra köri köri","—","Dru ngora kra kra",""],["La creación del maíz","Sibö ëkö bë","Sibö ëkö bë","Töcu ëku nori","Sibö ëkö brö","Ngöbe ngwa migä",""],["El dios de la lluvia","Sibö ükö","Sibö ükö","Töcu nöku","—","Ngöbe nüa",""],["La diosa madre","Sibö në","Sibö në","Töcu nöchi","Sibö nö","Ngöbe nan",""],["El señor del inframundo","Sibö itö kë kö","Sibö duö kë kö","Töcu naku kë köri","—","Ngöbe noke kë kra",""],["La serpiente cósmica","Ditsö sibö körö","Datë sibö körö","Nöku töcu köra","—","Dre ngöbe ngora",""],["El jaguar del sol","Tsirú kö iriria","Tsirú kö diá","Nöri köri tâu","—","Ngwa kra krâ",""],["El pájaro del trueno","Sö yëk kö","Sö yëk kö","Sëku yëku köri","—","Soa yëa kra",""],["El espíritu del maíz","Ëkö bë sö","Ëkö bë sö","Ëku nori sëku","Ëkö brö sö","Ngwa migä soa",""],["El guardián de los sueños","Sula bë sö bë","Sula bë sö bë","Ulë nori sëku nori","—","Krün migä soa migä",""],["La luna nueva sagrada","Sula kë sibö","Sula kë sibö","Ulë köri töcu","—","Krün kra ngöbe",""],["El sol de medianoche","Iriria sula bötsi","Diá sula bötsi","Tâu ulë böra","—","Krâ krün bro",""],["La montaña sagrada mayor","Tsirú sibö körö","Tsirú sibö körö","Nöla töcu köra","Krö sibö kör","Ngo ngöbe ngora",""],["Época ancestral","Bë kö kö iriria","Bë kö kö diá","Nori köri köri tâu","—","Migä kra kra krâ",""],["Tiempos antiguos","Iriria kö kö kö","Diá kö kö kö","Tâu köri köri köri","—","Krâ kra kra kra",""],["Guerra antigua","Kë yöbë tsö kö kö","Kë yöbë tsö kö kö","Kë yöla nöri köri köri","—","Kë yoa tsö kra kra",""],["Paz duradera","Yöbë tsö kö kö","Yöbë tsö kö kö","Yöla nöri köri köri","—","Yoa tsö kra kra",""],["Alianza de pueblos","Tsö yö bë tsö","Tsö wák bë tsö","Nöla jiri nori nöri","—","Ngwa bri migä tsö",""],["Conquista resistida","Kë yöbë kö bë kö","Kë yöbë kö bë kö","Kë yöla köri nori köri","—","Kë yoa kra migä kra",""],["Resistencia cultural","Tsö bë kë yöbë kö","Tsö bë kë yöbë kö","Nöla nori kë yöla köri","—","Ngwa migä kë yoa kra",""],["Renacer del pueblo","Tsö yö kë bë tsö","Tsö wák kë bë tsö","Nöla jiri köri nori nöri","—","Ngwa bri kra migä tsö",""],["Memoria viva","Bë kö bë yöbë","Bë kö bë yöbë","Nori köri nori yöla","—","Migä kra migä yoa",""],["Tradición que perdura","Bë tsö kö kö kö","Bë tsö kö kö kö","Nori nöri köri köri köri","—","Migä tsö kra kra kra",""],["Lengua viva del pueblo","Bë ditsö tsö yöbë","Bë datë tsö yöbë","Nori tana nöla yöla","—","Migä dre tsö yoa",""],["Canción de cuna","Sö kë bë kö","Sö rë bë kö","Sëku ichi nori köri","—","Soa ngwä migä kra",""],["Canción de guerra","Sö kë yöbë körö","Sö kë yöbë körö","Sëku kë yöla köra","—","Soa kë yoa ngora",""],["Canción de amor","Sö síniri yöbë","Sö síniri yöbë","Sëku nöchi yöla","—","Soa ngü yoa",""],["Canción de siembra","Sö wö kë bë","Sö wë kë bë","Sëku nöri köri nori","—","Soa bare kra migä",""],["Canción de lluvia","Sö ükö","Sö ükö","Sëku nöku","Sök ëkö","Soa nüa",""],["Canción del amanecer","Sö iriria kë","Sö diá kë","Sëku tâu köri","—","Soa krâ kra",""],["Canción de despedida","Sö ëk bë","Sö ëk bë","Sëku yü nori","—","Soa döi migä",""],["Danza de la lluvia","Bë iriria ükö","Bë diá ükö","Nori tâu nöku","—","Migä krâ nüa",""],["Danza del sol","Bë iriria iriria","Bë diá diá","Nori tâu tâu","—","Migä krâ krâ",""],["Danza de la serpiente","Bë iriria ditsö","Bë diá datë","Nori tâu nöku","—","Migä krâ dre",""],["Danza del viento","Bë iriria yëk","Bë diá yëk","Nori tâu yëku","—","Migä krâ yëa",""],["Leyenda del Chirripó","Bë tsö Chirripó","Bë tsö Chirripó","—","—","—",""],["Leyenda del Irazú","Bë tsö Irazú chä","Bë tsö Irazú sëk","—","—","—",""],["Suelo volcánico","Itö tsirú chä","Duö tsirú sëk","Naku nöla kira","—","Noke ngo kira",""],["Suelo arcilloso","Itö aba kö","Duö yök kö","Naku toku köri","—","Noke dru kra",""],["Suelo arenoso","Itö kë kö","Duö kë kö","Naku köri köri","—","Noke kra kra",""],["Abono natural","Itö ukö yöbë","Duö ukö yöbë","Naku naka yöla","—","Noke ngüa yoa",""],["Semilla criolla","Wö kë bë tsö","Wë kë bë tsö","Nöri köri nori nöri","—","Bare kra migä tsö",""],["Variedad nativa","Wö kë tsö","Wë kë tsö","Nöri köri nöri","—","Bare kra tsö",""],["Banco de semillas","Wö kë yö kö","Wë kë wák kö","Nöri köri jiri köri","—","Bare kra bri kra",""],["Policultivo","Ëkö tsö bötsi bë","Ëkö tsö bötsi bë","Ëku nöri böra nori","—","Ngwa tsö bro migä",""],["Sistema milpa","Ëkö itö kö","Ëkö duö kö","Ëku naku köri","—","Ngwa noke kra",""],["Quema controlada","Itö chä yöbë","Duö sëk yöbë","Naku kira yöla","—","Noke kira yoa",""],["Antiguo","Kö kö bë","Kö kö bë","Köri köri nori","—","Kra kra migä",""],["Brillante como el sol","Iriria yöbë körö","Diá yöbë körö","Tâu yöla köra","—","Krâ yoa ngora",""],["Oscuro como la noche","Sula kirö körö","Sula kirö körö","Ulë kira köra","—","Krün kiroa ngora",""],["Fresco como el río","Diá aba yöbë","Diá yök yöbë","Tana toku yöla","—","Dru dru yoa",""],["Firme como la montaña","Tsirú kö bë","Tsirú kö bë","Nöla köri nori","—","Ngo kra migä",""],["Suave como el viento","Yëk kikë yöbë","Yëk kikë yöbë","Yëku kiki yöla","—","Yëa kika yoa",""],["Duro como la piedra","Kë körö bë","Kë körö bë","Köri köra nori","—","Kra ngora migä",""],["Profundo como el mar","Ditsö körö bë","Datë körö bë","Tâna köra nori","—","Dre ngora migä",""],["Alto como el árbol","Wö tsirú bë","Wë tsirú bë","Nöri nöla nori","—","Bare ngo migä",""],["Pequeño como el colibrí","Sö iriria kikë","Sö diá kikë","Sëku tâu kiki","—","Soa krâ kika",""],["Grande como el jaguar","Tsirú kö körö","Tsirú kö körö","Nöri köri köra","—","Ngwa kra ngora",""],["Rápido como el viento","Yëk yöbë ditsö","Yëk yöbë datë","Yëku yöla nara","—","Yëa yoa dre",""],["Lento como la tortuga","Kë tsö kë ditsö","Kë tsö kë datë","Köri nöri kë nara","—","Kra tsö kë dre",""],["Sabio como el anciano","Bë kö kö kë yöbë","Bë kö kö kë yöbë","Nori köri köri kë yöla","—","Migä kra kra kë yoa",""],["Aprender del bosque","Wö tsö kë bë","Wë tsö kë bë","Nöri nöla köri nori","—","Bare ngo kra migä",""],["Aprender del río","Diá kë bë","Diá kë bë","Tana köri nori","—","Dru kra migä",""],["Aprender de los mayores","Bë kö kö kë bë","Bë kö kö kë bë","Nori köri köri köri nori","—","Migä kra kra kra migä",""],["Enseñanza de la tierra","Itö bë kë tsö","Duö bë kë tsö","Naku nori köri nöri","—","Noke migä kra tsö",""],["Sabiduría del fuego","Chä bë kö kë","Sëk bë kö kë","Kira nori köri kë","—","Kira migä kra kë",""],["Conocimiento del cielo","Sibö bë kö kë","Sibö bë kö kë","Töcu nori köri kë","—","Ngöbe migä kra kë",""],["Escuchar para aprender","Sö bë kë bë","Sö bë kë bë","Sëku nori köri nori","—","Soa migä kra migä",""],["Observar para entender","Iriria bë bë kö","Diá bë bë kö","Tâu nori nori köri","—","Krâ migä migä kra",""],["Practicar con respeto","Yöbë bë kö bë","Yöbë bë kö bë","Yöla nori köri nori","—","Yoa migä kra migä",""],["Transmitir con amor","Bë tsö síniri yöbë bë","Bë tsö síniri yöbë bë","Nori nöri nöchi yöla nori","—","Migä tsö ngü yoa migä",""],["Polinización","Wö kë sö bë","Wë kë sö bë","Nöri köri sëku nori","—","Bare kra soa migä",""],["Germinación","Wö kë kë bë","Wë kë kë bë","Nöri köri köri nori","—","Bare kra kra migä",""],["Fotosíntesis","Wö iriria ukö bë","Wë diá ukö bë","Nöri tâu naka nori","—","Bare krâ ngüa migä",""],["Migración de aves","Sö ditsö kö","Sö datë kö","Sëku nara köri","—","Soa dre kra",""],["Desove de tortugas","Kë tsö kë bë","Kë tsö kë bë","Köri nöri köri nori","—","Kra tsö kra migä",""],["Época de apareamiento","Tsirú bötsi bë iriria","Tsirú bötsi bë diá","Nöri böra nori tâu","—","Ngwa bro migä krâ",""],["Ciclo del agua","Aba bë kö","Yök bë kö","Toku nori köri","Unk brö kö","Dru migä kra",""],["Ciclo del bosque","Wö tsö bë kö","Wë tsö bë kö","Nöri nöla nori köri","—","Bare ngo migä kra",""],["Sucesión ecológica","Wö tsö kö bötsi","Wë tsö kö bötsi","Nöri nöla köri böra","—","Bare ngo kra bro",""],["Equilibrio del ecosistema","Itö tsö bötsi kö","Duö tsö bötsi kö","Naku nöri böra köri","—","Noke tsö bro kra",""],["¿De dónde venís?","Yö ëk bë","Wák ëk bë","Jiri yü nori","—","Bri döi migä",""],["¿A dónde vás?","Yö bë ditsö","Wák bë datë","Jiri nori nara","—","Bri migä dre",""],["¿Qué buscás?","Dö bë ëyö bë","Dö bë ká bë","Dö nori shíi nori","—","Dö migä jä migä",""],["¿Cuántos años tenés?","Kö iriria kö tsö bë","Kö diá kö tsö bë","Köri tâu köri nöri nori","—","Kra krâ kra tsö migä",""],["¿Tenés familia aquí?","Tsö yö bë kö bë","Tsö wák bë kö bë","Nöla jiri nori köri nori","—","Ngwa bri migä kra migä",""],["¿Cómo se llama esto?","Bë kö dö bë","Bë kö dö bë","Nori köri dö nori","—","Migä kra dö migä",""],["No entiendo","Kë bë kö bë tsö","Kë bë kö bë tsö","Kë nori köri nori nöri","—","Kë migä kra migä tsö",""],["Hablá más despacio","Bë ditsö kë ditsö bë","Bë datë kë datë bë","Nori tana kë nara nori","—","Migä dre kë dre migä",""],["Repití por favor","Bë bötsi bë ëyö","Bë bötsi bë ká","Nori böra nori shíi","—","Migä bro migä jä",""],["¿Podés ayudarme?","Tsö yöbë bë bë kö bë","Tsö yöbë bë bë kö bë","Nöla yöla nori nori köri nori","—","Ngwa yoa migä migä kra migä",""],["Deforestación","Wö tsö kë kö","Wë tsö kë kö","Nöri nöla kë köri","—","Bare ngo kë kra",""],["Reforestación","Wö tsö yöbë bë","Wë tsö yöbë bë","Nöri nöla yöla nori","—","Bare ngo yoa migä",""],["Contaminación del agua","Aba kë yöbë kö","Yök kë yöbë kö","Toku kë yöla köri","—","Dru kë yoa kra",""],["Protección del manglar","Wö ditsö bë yöbë","Wë datë bë yöbë","Nöri tâna nori yöla","—","Bare dre migä yoa",""],["Invasión del territorio","Itö tsö kë bë kö","Duö tsö kë bë kö","Naku nöri kë nori köri","—","Noke tsö kë migä kra",""],["Recuperación de tierras","Itö tsö yöbë bë","Duö tsö yöbë bë","Naku nöri yöla nori","Dru tsö yöb brö","Noke tsö yoa migä",""],["Zona de amortiguamiento","Itö kö yöbë","Duö kö yöbë","Naku köri yöla","—","Noke kra yoa",""],["Corredor biológico","Tsirú ditsö bötsi","Tsirú datë bötsi","Nöri nara böra","—","Ngwa dre bro",""],["Zona núcleo","Itö kö kö kö","Duö kö kö kö","Naku köri köri köri","—","Noke kra kra kra",""],["Área protegida","Itö yöbë bë kö","Duö yöbë bë kö","Naku yöla nori köri","—","Noke yoa migä kra",""],["Monzón","Ükö körö kö","Ükö körö kö","Nöku köra köri","—","Nüa ngora kra",""],["Estiaje","Kë aba iriria kö","Kë yök diá kö","Kë toku tâu köri","—","Kë dru krâ kra",""],["Invierno caribeño","Ükö ditsö kö kö","Ükö datë kö kö","Nöku tâna köri köri","—","Nüa dre kra kra",""],["Verano pacífico","Kë aba ditsö kö","Kë yök datë kö","Kë toku tâna köri","—","Kë dru dre kra",""],["Bruma matutina","Yëk kö iriria kë","Yëk kö diá kë","Yëku köri tâu köri","—","Yëa kra krâ kra",""],["Aguacero nocturno","Ükö körö sula","Ükö körö sula","Nöku köra ulë","—","Nüa ngora krün",""],["Viento sur fuerte","Yëk itö körö","Yëk duö körö","Yëku naku köra","—","Yëa noke ngora",""],["Calor húmedo","Chä aba bë","Sëk yök bë","Kira toku nori","—","Kira dru migä",""],["Frío seco","Aba kë kë aba","Yök kë kë yök","Toku köri kë toku","—","Dru kra kë dru",""],["Tormenta tropical","Yëk ükö ditsö kö","Yëk ükö datë kö","Yëku nöku tâna köri","—","Yëa nüa dre kra",""],["Contemplar","Iriria bë kö kö","Diá bë kö kö","Tâu nori köri köri","—","Krâ migä kra kra",""],["Intuir","Síniri sö bë","Síniri sö bë","Nöchi sëku nori","—","Ngü soa migä",""],["Imaginar","Síniri kö bë","Síniri kö bë","Nöchi köri nori","—","Ngü kra migä",""],["Recordar con amor","Bë kö bë síniri yöbë","Bë kö bë síniri yöbë","Nori köri nori nöchi yöla","—","Migä kra migä ngü yoa",""],["Olvidar el dolor","Kë bë kë kö bë","Kë bë kë kö bë","Kë nori köri köri nori","—","Kë migä kra kra migä",""],["Aceptar el cambio","Bötsi bë yöbë bë","Bötsi bë yöbë bë","Böra nori yöla nori","—","Bro migä yoa migä",""],["Fluir con la vida","Yöbë ditsö bë","Yöbë datë bë","Yöla nara nori","—","Yoa dre migä",""],["Conectar con la tierra","Itö bë tsö bë","Duö bë tsö bë","Naku nori nöri nori","—","Noke migä tsö migä",""],["Escuchar al corazón","Síniri sö bë","Síniri sö bë","Nöchi sëku nori","Chö sö brö","Ngü soa migä",""],["Barracuda","Diá ditsö kë","Diá datë kë","Tana nara köri","—","Dru dre kra",""],["Pez espada","Diá kë ditsö","Diá kë datë","Tana köri tana","—","Dru kra dre",""],["Manta raya","Diá tsö körö","Diá tsö körö","Tana nöri köra","—","Dru tsö ngora",""],["Morena","Diá ditsö kirö","Diá datë kirö","Tana nara kira","—","Dru dre kiroa",""],["Pez globo","Diá körö kö","Diá körö kö","Tana köra köri","—","Dru ngora kra",""],["Pez loro","Diá sö kö","Diá sö kö","Tana sëku köri","—","Dru soa kra",""],["Estrella de mar","Diá sula kö","Diá sö kö","Tana ulë köri","—","Dru krün kra",""],["Erizo de mar","Diá kë kö","Diá kë kö","Tana köri köri","—","Dru kra kra",""],["Cangrejo ermitaño","Diá kë yö","Diá kë wák","Tana köri jiri","—","Dru kra bri",""],["Pepino de mar","Diá ukö bë","Diá ukö bë","Tana naka nori","—","Dru ngüa migä",""],["Árbol de balsa","Wö kikë körö","Wë kikë körö","Nöri kiki köra","—","Bare kika ngora",""],["Palo de sangre","Wö chä kö","Wë sëk kö","Nöri kira köri","—","Bare kira kra",""],["Árbol poró","Wö sö kö","Wë sö kö","Nöri sëku köri","—","Bare soa kra",""],["Árbol botarrama","Wö kë kö kö","Wë kë kö kö","Nöri köri köri köri","—","Bare kra kra kra",""],["Guarumo","Wö tsö kikë","Wë tsö kikë","Nöri nöri kiki","cóo cva","Bare tsö kika","serung noh"],["Platanillo silvestre","Wö ukö kë kö","Wë ukö kë kö","Nöri naka köri köri","—","Bare ngüa kra kra",""],["Caña agria","Wö ditsö kë","Wë datë kë","Nöri tana köri","—","Bare dre kra",""],["Bijagua","Wö aba kë","Wë yök kë","Nöri toku köri","—","Bare dru kra",""],["Teocinte","Ëkö kö kö","Ëkö kö kö","Ëku köri köri","—","Ngwa kra kra",""],["Maíz pozolero","Ëkö aba yö","Ëkö yök wák","Ëku toku jiri","—","Ngwa dru bri",""],["Quijongo","Sö bë kë wö","Sö bë kë wë","Sëku nori köri nöri","—","Soa migä kra bare",""],["Marimba de tecomates","Sö bë kë wö kö","Sö bë kë wë kö","Sëku nori köri nöri köri","—","Soa migä kra bare kra",""],["Pito de carrizo","Yëk wö ditsö kö","Yëk wë datë kö","Yëku nöri tana köri","—","Yëa bare dre kra",""],["Caracol de llamado","Kë ditsö sö kö","Kë datë sö kö","Köri tâna sëku köri","—","Kra dre soa kra",""],["Tambor de cuero de venado","Sö bë kë tsirú wö","Sö bë kë tsirú wë","Sëku nori köri nöri nöri","—","Soa migä kra ngwa bare",""],["Raspador ritual","Kë bë sö sibö","Kë bë sö sibö","Köri nori sëku töcu","—","Kra migä soa ngöbe",""],["Flauta travesera","Yëk wö kö kö","Yëk wë kö kö","Yëku nöri köri köri","—","Yëa bare kra kra",""],["Ocarina de barro","Yëk itö yö","Yëk duö wák","Yëku naku jiri","—","Yëa noke bri",""],["Sonaja de semillas","Sö kë wö kë","Sö kë wë kë","Sëku köri nöri köri","—","Soa kra bare kra",""],["Tamborcillo","Sö bë kë kikë","Sö bë kë kikë","Sëku nori köri kiki","—","Soa migä kra kika",""],["La vida es un regalo","Bë yöbë sibö tsö","Bë yöbë sibö tsö","Nori yöla töcu nöri","—","Migä yoa ngöbe tsö",""],["El respeto es sagrado","Yöbë bë kö sibö","Yöbë bë kö sibö","Yöla nori köri töcu","—","Yoa migä kra ngöbe",""],["La naturaleza es nuestra madre","Itö tsö në","Duö tsö në","Naku nöri nöchi","Dru tsö nö","Noke tsö nan",""],["El conocimiento es poder","Bë kö kë kö körö","Bë kö kë kö körö","Nori köri kë köri köra","—","Migä kra kë kra ngora",""],["La comunidad es fortaleza","Tsö yö körö kö","Tsö wák körö kö","Nöla jiri köra köri","Tsö kro kör kö","Ngwa bri ngora kra",""],["La palabra es compromiso","Bë tsö kö yöbë","Bë tsö kö yöbë","Nori nöri köri yöla","—","Migä tsö kra yoa",""],["El silencio habla","Kë sö bë tsö","Kë sö bë tsö","Kë sëku nori nöri","—","Kë soa migä tsö",""],["La música une","Sö bë kö tsö bë","Sö bë kö tsö bë","Sëku nori köri nöri nori","—","Soa migä kra tsö migä",""],["La danza libera","Bë iriria yöbë tsö kö","Bë diá yöbë tsö kö","Nori tâu yöla nöri köri","—","Migä krâ yoa tsö kra",""],["La tierra nos recuerda","Itö bë kö bë","Duö bë kö bë","Naku nori köri nori","Dru brö kö brö","Noke migä kra migä",""],["Somos parte del todo","Kö kö tsö bë","Kö kö tsö bë","Köri köri nöri nori","—","Kra kra tsö migä",""],["Todo tiene su tiempo","Kö kö iriria kö bë","Kö kö diá kö bë","Köri köri tâu köri nori","—","Kra kra krâ kra migä",""],["Nada termina todo continúa","Kë kö ëk kö kö bë","Kë kö ëk kö kö bë","Kë köri yü köri köri nori","—","Kë kra döi kra kra migä",""],["El círculo de la vida","Bë yöbë kë kö","Bë yöbë kë kö","Nori yöla köri köri","—","Migä yoa kra kra",""],["Dar y recibir","Bë tsö bë kë bë","Bë tsö bë kë bë","Nori nöri nori köri nori","—","Migä tsö migä kra migä",""],["El que siembra cosecha","Wö kë bë ukö bë","Wë kë bë ukö bë","Nöri köri nori naka nori","—","Bare kra migä ngüa migä",""],["La raíz da el fruto","Wö aba bë ukö","Wë yök bë ukö","Nöri toku nori naka","—","Bare dru migä ngüa",""],["La sombra del árbol protege","Wö kë iriria bë yöbë","Wë kë diá bë yöbë","Nöri köri tâu nori yöla","—","Bare kra krâ migä yoa",""],["El río siempre llega al mar","Diá kö kö ditsö bë","Diá kö kö datë bë","Tana köri köri tâna nori","—","Dru kra kra dre migä",""],["La luna guía al caminante","Sula bë ditsö bë bë","Sula bë datë bë bë","Ulë nori nara nori nori","—","Krün migä dre migä migä",""],["Juego de pelota","Bë yöbë kë kö","Bë yöbë kë kö","Nori yöla köri köri","—","Migä yoa kra kra",""],["Carrera de canoas","Ditsö yö ditsö bë","Datë wák datë bë","Nara jiri nara nori","—","Dre bri dre migä",""],["Lucha tradicional","Bë kö kö bë","Bë kö kö bë","Nori köri köri nori","—","Migä kra kra migä",""],["Tiro al blanco","Wö ditsö bë kë","Wë datë bë kë","Nöri tana nori köri","—","Bare dre migä kra",""],["Pesca en competencia","Diá bë tsö bë","Diá bë tsö bë","Tana nori nöri nori","—","Dru migä tsö migä",""],["Juego de palos","Bë yöbë wö kë","Bë yöbë wë kë","Nori yöla nöri köri","—","Migä yoa bare kra",""],["Torneo de danzas","Bë iriria tsö kö","Bë diá tsö kö","Nori tâu nöri köri","—","Migä krâ tsö kra",""],["Concurso de tejido","Yë tsö tsö bë","Yë tsö tsö bë","Nula nöri nöri nori","—","Micha tsö tsö migä",""],["Juego de ancestros","Bë yöbë bë kö kö","Bë yöbë bë kö kö","Nori yöla nori köri köri","—","Migä yoa migä kra kra",""],["Horizonte sagrado","Ditsö iriria sibö","Datë diá sibö","Tâna tâu töcu","—","Dre krâ ngöbe",""],["Sendero espiritual","Ditsö kikë sibö","Datë kikë sibö","Nara kiki töcu","Drö kik sibö","Dre kika ngöbe",""],["Puerta al cielo","Yö bë sibö","Wák bë sibö","Jiri nori töcu","Kro brö sibö","Bri migä ngöbe",""],["Umbral sagrado","Yö bë kö sibö","Wák bë kö sibö","Jiri nori köri töcu","—","Bri migä kra ngöbe",""],["Cruce de caminos","Ditsö bötsi bë","Datë bötsi bë","Nara böra nori","—","Dre bro migä",""],["Lugar de encuentro","Yö bötsi bë","Wák bötsi bë","Jiri böra nori","Kro bötsi brö","Bri bro migä",""],["Fuente de conocimiento","Bë kö kë yöbë","Bë kö kë yöbë","Nori köri kë yöla","—","Migä kra kë yoa",""],["Centro ceremonial","Yö kö sibö","Wák kö sibö","Jiri köri töcu","Kro kö sibö","Bri kra ngöbe",""],["Círculo sagrado","Kë kö sibö","Kë kö sibö","Köri köri töcu","Kö kö sibö","Kra kra ngöbe",""],["Espacio de sanación","Yö sö yöbë","Wák sö yöbë","Jiri sëku yöla","—","Bri soa yoa",""],["Altar de los ancestros","Yö bë kö kö","Wák bë kö kö","Jiri nori köri köri","—","Bri migä kra kra",""],["Árbol de los sueños","Wö sula bë","Wë sula bë","Nöri ulë nori","—","Bare krün migä",""],["Piedra del origen","Kë sibö kë","Kë sibö kë","Köri töcu köri","Kö sibö kö","Kra ngöbe kra",""],["Agua de la vida eterna","Aba yöbë kö kö","Yök yöbë kö kö","Toku yöla köri köri","Unk yöb kö kö","Dru yoa kra kra",""],["Fuego de la pureza","Chä sibö yöbë","Sëk sibö yöbë","Kira töcu yöla","Tö sibö yöb","Kira ngöbe yoa",""],["Viento de los ancestros","Yëk bë kö kö","Yëk bë kö kö","Yëku nori köri köri","—","Yëa migä kra kra",""],["Tierra de promisión","Itö yöbë sibö","Duö yöbë sibö","Naku yöla töcu","Dru yöb sibö","Noke yoa ngöbe",""],["Abrazarse","—","—","—","dooring cha bá agra","—","fájop horúh ra"],["Abrir la boca","—","—","—","baca sa cátaga","—","facámo copí"],["Acostarse","—","—","—","dec cha áun","—","shiof söivi"],["Acumular","—","—","—","cring a","—","tungsah"],["Adelante","—","—","—","menguájque","—","bómgoh"],["Adentro","—","—","—","uchi cajt","—","fa uiróh"],["Afilar","—","—","—","dequi cha á","—","fáto drungvá hung"],["Afilado","—","—","—","cha a","—","suret enge / drungva beyóntzo"],["Agarrar","—","—","—","chaa crúhuga","—","sháso"],["Aguardar","—","—","—","átena","—","tácoshos"],["Asir","—","—","—","crújuga","—","shás"],["Asustarse","—","—","—","chá a cóng era","—","ta aúshi gá van"],["Atajar","—","—","—","inga","—","cosquíso"],["Brincar","—","—","—","bac chesá","—","fa sorong tzó"],["Brincar (1ra persona)","—","—","—","atic chesará","—",""],["Buscar (1ra persona)","—","—","—","degi di","—",""],["Bajar el río","—","—","—","ruta bang nanire","—","di her"],["Bajar cuesta","—","—","—","do do obáng naníre","—",""],["Beber (1ra persona)","—","—","—","ari djána","—",""],["Ayudar (1ra persona)","—","—","—","atqui ba zai yúra","—",""],["Bailar (2da persona)","—","—","—","ba cui gá","—",""],["Bailar (1ra persona)","—","—","—","chaj crang cui guí","—",""],["Abeja (variante)","—","—","—","but criéh","—",""],["Abeja pequeña","—","—","—","butdoyén","—",""],["Abeja negra","—","—","—","butturinat","—","storá"],["Abejón","—","—","—","serúng","—","rúnuva"],["Ardilla","—","—","—","shuang zit","—",""],["Bicho","—","—","—","surum tzit","—",""],["Aguiluchón","—","—","—","bu","—",""],["Buitre","—","—","—","suh","—","cónua fung"],["Conejo","—","—","—","bih","—","cuerí"],["Congo (mono)","—","—","—","uri","—",""],["Agua corriente","—","—","—","di chuíng","—","di hérhefang"],["Arco iris","—","—","—","d shinus","—","sibuugvó"],["Arena gruesa","—","—","—","up brújca","—","ara evoquisquih"],["Corozo (palma)","—","—","—","tza aguá","—","corozo"],["Cieno / barro","—","—","—","tap","—",""],["Cerro","—","—","—","cactúh","—","crop"],["Cerro largo","—","—","—","cactúh crih","—","crop quís"],["Charco / laguna","—","—","—","djebá","—",""],["Banca","—","—","—","te ecráh","—","crüp"],["Barbacoa","—","—","—","co tang","—","yónta"],["Bastón","—","—","—","aj chíva","—","bara córlo"],["Cacerola","—","—","—","dric zún","—","se bi"],["Calabazo","—","—","—","yún","—","difuru"],["Coco","—","—","—","si agua","—","coco"],["Aquí está","—","—","—","hue eri","—",""],["Camisa","—","—","—","eh huá","—","shíng"],["Cántaro","—","—","—","curéh","—","osebíh"],["Cobija","—","—","—","urung va","—","quini ócra"],["Cáscara","—","—","—","eva ascvá","—","ba cvóta"],["Cepo / trampa","—","—","—","suric tuj","—",""],["Barba","—","—","—","uj zí","—","di song"],["Barba punta","—","—","—","bac cháadi","—",""],["Barriga","—","—","—","cuáh","—","(bór) bugva"],["Blando","—","—","—","yuróocá","—","dio riáh"],["Colorado / rojo","—","—","—","drubat","—",""],["Bonito","—","—","—","cha a múra","—","va aríso"],["Contento / alegre","—","—","—","alegrerí","—",""],["Boca tuya","—","—","—","bacasa","—",""],["Boca del estómago","—","—","—","achi caj","—",""],["Boca del río","—","—","—","dii caj","—",""],["Cojo","—","—","—","cuescarí","—","renco"],["Pantorrilla","—","—","—","croj cráh","—",""],["Abalorio / cuenta","—","—","—","shugiráh","—",""],["Abierto","—","—","—","cáj chi","—","tócsai"],["Abismo","—","—","—","diashí","—","iguén"],["Bribri","Cabécar","Maleku","Boruca","Ngäbe","Brunca",""],["#e8f4fd","#fdf3e8","#e8fdf3","#fde8f4","#f3e8fd","#fdf8e8",""],["Inicio","Archivo","Editar","Insertar","Formato / Herramientas","WC Arte",""],["Home","File","Edit","Insert","Format / Tools","WC Art",""],["Tsö̖","Ña","Ñë","Shu","Forma / Tsi","Arte",""],["Yë","Ká","Bë","Rë","Tsö / Sö","Arte",""],["Lha","Ma","Rá","Má","Töl / Phö","Arte",""],["Tö","Kro","Bë","Drö","Chö / Brö","Arte",""],["Ene","Feb","Mar","Abr","May","Jun",""],["#0084ff","#ff6b35","#27ae60","#9b59b6","#f39c12","#e74c3c",""],["Sem1","Sem2","Sem3","Sem4","Sem5","Sem6",""],["A","B","C","D","E","—",""],["Q1","Q2","Q3","Q4","—","—",""],["L","M","X","J","V","S",""],["#27ae60","—","—","—","—","—",""],["#e74c3c","#0084ff","#27ae60","#ff6b35","#9b59b6","—",""],["N","S","E","O","C","—",""],["#0084ff88","#ff6b3588","#27ae6088","#9b59b688","—","—",""],["α","β","γ","δ","ε / η","ζ",""],["#000","#434343","#666","#999","#ccc / #ff0000","#fff",""],["#ffffff","#fff9f0","#f0f7ff","#f0fff4","#fff0f5 / #fffde7","#f5f0ff",""],["😀","🎉","✅","⚠️","📋 / 🦋","🌿",""],["+(c)+","—","—","—","—","—",""],[" + s.ts + ","—","—","—","—","—",""],["bribri","cabecar","maleku","boruca","ngabe","brunca",""],["Abalorio","—","—","—","shugiráh","—","abalório, obricroh"],["Abeja grande","—","—","—","but","—","bíbra"],["Abeja pequeña colorada","—","—","—","butdoyén","—","durá"],["Aceite","—","—","—","shíc","—","quió"],["Afuera","—","—","—","ucheng i","—","húgash coh"],["Aguacate (árbol)","—","—","—","bucra","—","dovórva cor"],["Aguacate (fruta)","—","—","—","bu vo","—","dovórva"],["Aguardiente","—","—","—","di crátca","—","aguardiente"],["Agudo","—","—","—","cua atún","—","shcúh"],["Aguja","—","—","—","cua atún","—","shcuh"],["Agrio","—","—","—","dún cari","—","shpo óhe"],["Ahogado","—","—","—","chej cri","—","shtenot díroh"],["Ají (chile)","—","—","—","cheba","—",""],["Ala","—","—","—","icá","—",""],["Alacrán","—","—","—","iquí ih","—",""],["Algodón","—","—","—","chebó","—",""],["Alimento","—","—","—","já adéh","—",""],["Allí","—","—","—","ye éh","—",""],["Almendro","—","—","—","chivicomcráh","—",""],["Alto grande","—","—","—","itujta","—",""],["Alzar","—","—","—","eríshi da","—",""],["Amargo","—","—","—","ba acá","—",""],["Amarrar","—","—","—","inga móren","—",""],["Ambos","—","—","—","búuc","—",""],["Amenudo","—","—","—","istá murá","—",""],["Amontonar","—","—","—","críngah","—",""],["Amplio ancho","—","—","—","huáncaeri","—",""],["Andar a pié","—","—","—","másan bacurú scotá","—",""],["Andar de prisa","—","—","—","ba tec chuá","—",""],["Andar poco a poco","—","—","—","batec uháta","—",""],["Andar adelante","—","—","—","dec nenguájque","—",""],["Angosto pequeño","—","—","—","istamurá","—",""],["Ángulo esquina","—","—","—","idru etá","—",""],["Anillo","—","—","—","cu squa heuvá","—",""],["Antier","—","—","—","quibi búuc","—",""],["Antorcha tizón","—","—","—","chicrá","—",""],["Año (verano)","—","—","—","duitqui","—",""],["Año (invierno)","—","—","—","choquitru ura quinge","—",""],["Apagar el fuego","—","—","—","chiqui zona","—",""],["Apuntar bien","—","—","—","tobang icámoreng","—",""],["Árbol delgado","—","—","—","crang doyén","—",""],["Árbol grueso","—","—","—","crang brújca","—",""],["Arco de flecha","—","—","—","tún crá","—","cúncova"],["Ardilla pequeña","—","—","—","shuang zit","—","yedóng"],["Armado","—","—","—","tzóna","—","dúb cvoh"],["Arreglar","—","—","—","cuinga morén","—","shori os yóntso"],["Arribar llegar","—","—","—","bataoh","—",""],["Arrugado (viejo)","—","—","—","crusi shíric","—",""],["Asado","—","—","—","ishi uarí","—","suj súgrih"],["Asidero","—","—","—","mancrá crújuga","—","drungsocu"],["Asiento","—","—","—","té ecra","—","crüp"],["Áspero","—","—","—","shívagri cuíngeh","—","ova shcu yóeh"],["Atado de dulce","—","—","—","búuc","—","seror voshóh"],["Atento","—","—","—","dójoga","—","cocúso"],["Atrás","—","—","—","ichéng ih","—","iléca"],["Ausente","—","—","—","si ane","—","su shén"],["Ave","—","—","—","du","—","sé nuvah"],["Ayote","—","—","—","bat","—","shuráng"],["Azúcar","—","—","—","baburí","—","seróṙ vash"],["Bajar una cuesta","—","—","—","do do obáng naníre","—","fa herbiga"],["Balsa (árbol)","—","—","—","os","—","pung"],["Balsa (canoa)","—","—","—","os cang tojcra","—",""],["Balsa (fruta lana)","—","—","—","os surút","—","pung vo"],["Banana (guineo)","—","—","—","bri duáh","—","ving siguah"],["Barato","—","—","—","tru ucári","—","tunro tíra"],["Barba (punta de)","—","—","—","bac cháadi","—","bii roh"],["Barbudo","—","—","—","bih","—","quéshe vong"],["Barro para tinaja","—","—","—","surá uj chiát","—","sebi shoh"],["Barro para ollas","—","—","—","cureh át","—","sebí shoh"],["Bastante","—","—","—","cri éh","—","hintzoh iontzo"],["Bautizar","—","—","—","dii täh","—","durúgo di tiára"],["Bazo","—","—","—","nom","—","bazo"],["Bejuco","—","—","—","sang cuáh","—","qui shevuah"],["Bello bonito","—","—","—","cha a múra","—","va aríso"],["Bien está bien","—","—","—","moren","—","cóbe"],["Boca (tuya)","—","—","—","bacasa","—","(bor) camuc"],["Boca de estómago","—","—","—","achi caj","—","(bor) furú / quíngoh"],["Boca de río","—","—","—","dii caj","—","di shishca"],["Bodoque","—","—","—","bot cúp","—","chi pote"],["Borracho","—","—","—","quii suj ca","—","erir"],["Borde orilla","—","—","—","dii van","—","(dic) sórego"],["Bostezar","—","—","—","e echúng ra","—","tacac shurigne"],["Botar","—","—","—","bi ung a","—","duvúso"],["Bote","—","—","—","hurú","—","tióng"],["Botella","—","—","—","limeta","—","limeta"],["Bravo","—","—","—","yo dre héri","—","híreh ó eh"],["Breve","—","—","—","doyéng","—","máreng"],["Buey","—","—","—","crang chuj","—",""],["Brujo","—","—","—","duríh","—","ibíh"],["Brujo grande","—","—","—","durih sugróc","—","ibih yóntzo"],["Bulto","—","—","—","ong","—","héruh"],["Caballo","—","—","—","sárocra","—","caballo"],["Cabecera de río","—","—","—","sagrá anté va","—","di (quis) devóvo"],["Cabro de monte","—","—","—","bu tzit","—","fu shuring"],["Cabuya","—","—","—","chijt ca","—","quic"],["Cacao (árbol)","—","—","—","cá u cá","—","co"],["Cacao (grano)","—","—","—","cáu","—","co vó"],["Cacao (mazorca)","—","—","—","etzí cáu astá","—","co cror"],["Cacao maduro","—","—","—","cáu brótca","—","co cvíh"],["Cacao verde","—","—","—","cau zájtca","—","co quisong"],["Cada uno","—","—","—","étze étze","—","dovadovoc / dovadovoshca"],["Cadáver","—","—","—","cojt cári","—","era noéh shín moh"],["Caja (tambor)","—","—","—","quebeh","—","caja (zhung-baile)"],["Calavera","—","—","—","sa agrá","—","yeno cogo"],["Caldo","—","—","—","ri it cha","—","delí rio"],["Calentar","—","—","—","cha aró gra","—","ta toób crirqui"],["Calentura","—","—","—","cheh","—","ta pof gun"],["Calzar un palo","—","—","—","crang zang itá","—","fa cor seríso"],["Calzones","—","—","—","créhva","—","calzón"],["Calvo","—","—","—","zatrét","—","cong so shimeh"],["Callado","—","—","—","tegi ishí","—","su quingeh"],["Callar","—","—","—","bac ása duah","—","fa quin coso"],["Cambiar","—","—","—","atca cambia","—","croso voso"],["Camerón","—","—","—","suáh","—","cus"],["Campo Santo","—","—","—","cactánta","—","iré vóh"],["Candela de hule","—","—","—","but crangbut","—","ibéh gva"],["Canilla","—","—","—","cráscva","—","ta dovo sénoeh"],["Cansado","—","—","—","crascva é eshí","—","fa tóso"],["Caña blanca","—","—","—","bajira suvát","—","soróh"],["Caña gira virota","—","—","—","yój cra","—","corúgroh"],["Caña de azúcar","—","—","—","budi","—","soror boh"],["Capitán","—","—","—","bru bac","—","ba cvong iáh"],["Caracol","—","—","—","soreng","—","yu cúla"],["Carbón","—","—","—","chic chuáh","—","scón cva"],["Carbúnculo","—","—","—","chan","—","fang soh"],["Cargador","—","—","—","curá ac","—","(bor) hangruh"],["Carey","—","—","—","pshéc","—","su"],["Cariblanco","—","—","—","ziní","—","sherí"],["Cariñoso","—","—","—","moréng eh","—","vocov soeh"],["Caro","—","—","—","za áungca","—","tuno oeh"],["Carpintero (ave)","—","—","—","cuj zerót","—","cosená"],["Carrizo","—","—","—","croj cráh","—","querúgrah"],["Casado","—","—","—","do ova","—","ta vuróre vunái"],["Casada","—","—","—","doovarí","—","vuróre vunái"],["Catarro","—","—","—","toh ot","—","to"],["Cautchuc","—","—","—","chi gurís","—","sorúh"],["Cepo","—","—","—","suric tuj","—","corp cuáng"],["Cera","—","—","—","but","—","óncha"],["Cerca cercado","—","—","—","curet","—","sóshcoh"],["Cerdo","—","—","—","cúchi","—","cúchi"],["Cerrar la boca","—","—","—","bacása duah","—","facams bóngsas"],["Chapulín","—","—","—","seg cuá","—","segcuá"],["Charco","—","—","—","djebá","—","djebó"],["Chicha de maíz","—","—","—","cuc cha","—","ho"],["Chicha de yuca","—","—","—","ung cacha","—","ic sha"],["Chicha de pejivalle","—","—","—","suba chá","—","shúcdia"],["Chicharra","—","—","—","shuh","—","sherongmópo"],["Chiflón","—","—","—","diíc shuíng","—","ru berun"],["Chirola de plátano","—","—","—","etzi cranta muáh","—","ibing serú eva"],["Chocolate","—","—","—","di butca","—","chocolate"],["Chorcha","—","—","—","huáco","—","huáco"],["Chupar","—","—","—","ba asa","—","ta ba chúp"],["Chuso de arco","—","—","—","tuncrá","—","suré bra"],["Chuso de acero","—","—","—","tun casa","—","cun cóva"],["Ciego","—","—","—","toét","—","bocva shín"],["Cieno","—","—","—","tap","—","túshcoh"],["Cientopiés","—","—","—","bacrascva quinga","—","ishtóh"],["Cierto es","—","—","—","verdári","—","horóshcoeh"],["Ciervo","—","—","—","suturíc","—","shurúng"],["Cima","—","—","—","cactúh tzit","—","crop quis"],["Cinturón","—","—","—","sovóm ca","—","shquírvoh"],["Circuito","—","—","—","curet tzit","—","quirr"],["Citar","—","—","—","ca uinga","—","to ít tiéba"],["Cobarde","—","—","—","chá acong sujcra","—","cováng cri óeh"],["Coser con hilo","—","—","—","chuvú can tá yu usa","—","chuvung tzec shquiboroc"],["Cocer cocinar","—","—","—","mari dri i","—","fato deriri"],["Codo","—","—","—","codo","—","codo"],["Cojer","—","—","—","chu áh","—","shaso"],["Cola","—","—","—","cuántza","—","frac"],["Cola de mono","—","—","—","nong cuántza","—","du frac"],["Cola de zorro","—","—","—","zoro cuántza","—","zorrofrac"],["Cola de ave","—","—","—","cro cuántza","—","sínua frac"],["Colina","—","—","—","cactú tzit","—","crop drúcuva"],["Colmena","—","—","—","but","—","or"],["Colmillo","—","—","—","casa","—","vacovo"],["Colocar adentro","—","—","—","yu uh ga","—","sus uiroh"],["Colocar derecho","—","—","—","du uca quinga","—","shívesong ombícoeh"],["Colorado","—","—","—","drubat","—","seri ríne"],["Coloradilla","—","—","—","chuc","—","vac"],["Cómo","—","—","—","ishén","—",""],["Cómo se llama","—","—","—","ishénra bacá aquíh","—",""],["Cómo está U","—","—","—","ishoj queréh báqueh","—",""],["Completar","—","—","—","care áh","—","tus berbécten"],["Comprar","—","—","—","tong ah","—","tun réso"],["Comprimir","—","—","—","crujuhgoh","—","cháso"],["Conmigo","—","—","—","cha adecá","—",""],["Contigo","—","—","—","ba amáng","—",""],["Concluir","—","—","—","oc charé","—","tónoeh"],["Conducir","—","—","—","ishúngrang","—","súso"],["Congo","—","—","—","uri","—","bip"],["Conmover","—","—","—","dójoga","—","terin so"],["Conocer","—","—","—","ishida","—","midera"],["Considerar","—","—","—","cho dójoga achet","—","ta cong cot tuvóso"],["Contar","—","—","—","pshang na","—","shtoso"],["Contento","—","—","—","alegrerí","—","tavo covso"],["Contestar","—","—","—","cheáh","—","conióso"],["Contra tí","—","—","—","bacá","—","bób quinshcoh"],["Contraer una enfermedad","—","—","—","che burúh","—","ta suróeh"],["Convenir","—","—","—","moréngre","—","huru róso"],["Conversar","—","—","—","các chuvac","—","faránso shitorán"],["Copa","—","—","—","copa","—","cristal"],["Cordel mecate","—","—","—","cúp cra","—","quiúmrah"],["Corona coronilla","—","—","—","sagra tubún","—","(bor) furúng evadruibo"],["Corona de un árbol","—","—","—","tubun ta","—","cor dovógo"],["Corregir","—","—","—","beáh","—","shtúnso"],["Cortante","—","—","—","ej dóng ri","—","drungva freh"],["Cortar","—","—","—","rej ga","—","sóso"],["Cortar un árbol","—","—","—","cran tasá","—","fato cor si"],["Corteza de árbol","—","—","—","cran tuj","—","rúshura cárcvota"],["Corvo","—","—","—","cvu hát","—","subuhúngeh"],["Cosquillas","—","—","—","churú cá ah","—",""],["Costado","—","—","—","isúdi","—","shiquering oh"],["Costilla","—","—","—","costilla","—","(bor) quin devógra"],["Costal","—","—","—","dja unga","—","saco"],["Cráneo","—","—","—","detcráh","—","yeno cogo"],["Cresa (gusano)","—","—","—","surung","—","shtoh"],["Crespo","—","—","—","saccrís","—","congso serum serum"],["Cristiano (no)","—","—","—","r ra","—",""],["Crudo","—","—","—","táj ca","—","quisóngeh"],["Cruel","—","—","—","cri éh","—","ir oéh"],["Cuajiniquil","—","—","—","zuvi uáh","—","surém nah"],["Cuándo va","—","—","—","i i ga ban dshará","—",""],["Cuántos","—","—","—","bi igríh","—",""],["Cuarto de animal","—","—","—","ee zúcrah","—","ba cvórvo"],["Cubrir","—","—","—","cachi áh","—","bong sáso quing yoso"],["Cuchicheemos","—","—","—","uatá tegrá","—","shiranvor"],["Cucuyo (insecto)","—","—","—","qui us","—",""],["Cuenta (abalorio)","—","—","—","shugiráh","—","ójgricroh"],["Cuerno","—","—","—","crang","—","(ova) su"],["Cuerno de venado","—","—","—","suturi crang","—","shuring su"],["Cuidado","—","—","—","crabe áh","—",""],["Culebra","—","—","—","tebéc","—","bugúr"],["Culebra bequer","—","—","—","rac chíc","—","cúng"],["Culebra colorada","—","—","—","umrah shuáh","—","pegrá shuvo"],["Culebra víbora","—","—","—","brúh","—","bugúr"],["Culleo","—","—","—","culleo","—","culleo"],["Curré","—","—","—","serit","—","shoron"],["Debajo","—","—","—","itébi","—","túsh coh"],["Deber","—","—","—","cura","—","ta pógo tunóh"],["Débil","—","—","—","joró jat","—","suró eh"],["Decir","—","—","—","arán tegrá","—","tanaran"],["Diciendo (yo estoy)","—","—","—","doan tegrá","—","ta suran"],["Dedo de la mano","—","—","—","cu uscoá","—","(bor) sacvo"],["Dejar","—","—","—","aj dah","—","irá yos"],["Delante","—","—","—","néng vah","—","bómgung"],["Delgado","—","—","—","ej dát","—","cro tíra"],["Demarcar","—","—","—","bégui ca","—","ña ñir"],["Déme de comer","—","—","—","adé chá a detá","—","ta cónderi quimvéra"],["Déme agua","—","—","—","adé dita","—","ta sim di"],["Dentro","—","—","—","ju úhgra","—","u hiró"],["Derecho","—","—","—","dú uhca","—","decteng eh"],["Desarreglado","—","—","—","sa ñu engríh","—","shori yorop so oeh"],["Descender","—","—","—","ba avárieh","—","rong so"],["Desgana de comer","—","—","—","cha adit chi","—","vai va shige"],["Desigual","—","—","—","chaatega rehíshi","—","becten sheme"],["Desnudo","—","—","—","butza shí","—","cru dere dere shevong shéme"],["Despedazar","—","—","—","rehegáh","—","sos (bigue mitad)"],["Despedazado","—","—","—","reheguaréh","—","sac ton tostos"],["Despierto","—","—","—","ca ish chenirá","—","ta chen oeh"],["Desvanecerse","—","—","—","sa tu agráh","—","ta bog sóctih"],["Detener","—","—","—","ibagráh","—","mas (cvésh có allí)"],["Detente","—","—","—","cha acrújuga","—",""],["Detrás","—","—","—","cheng ih","—","iléco"],["Deuda","—","—","—","cura","—","bogótuno"],["Diablo","—","—","—","changa","—","oh"],["Diferente","—","—","—","bu ushí","—","obri obri"],["Diluvio","—","—","—","d sho burú","—","shunio"],["Dirección","—","—","—","dúuca","—","shito shaveri"],["Disolver","—","—","—","pshú cujda","—","diangroh"],["Distinto","—","—","—","bu ushí","—","obri obri"],["Distrito","—","—","—","icáqui","—","(bor) coc shcoc mi lugar"],["Divieso","—","—","—","tuj","—","crubring"],["Doblado","—","—","—","cubúj shiríh","—","shpucó"],["Doler","—","—","—","atquing zá unga","—","tabang yontzo"],["Dolor de muela","—","—","—","chinganga tura","—","ta covo bang yontzo"],["Dolorido","—","—","—","za ungráh","—","ta ban"],["Don regalo","—","—","—","gua dógrin átca","—","tasín na"],["Donar","—","—","—","regalar","—","fa sína"],["Dónde está","—","—","—","che erih","—",""],["Dónde vá","—","—","—","cha iban chará","—",""],["Dónde está el agua","—","—","—","che erá dí qui","—",""],["Dormido","—","—","—","cab chira","—","bu péeh"],["Duende","—","—","—","catuj suj cra","—","duende ibí"],["Dulce","—","—","—","babudí","—","soror voshó"],["Duro","—","—","—","zijóng","—","cáng cueh"],["Ebrio","—","—","—","qui it suj cári","—","tabu tuna"],["Eclipse del sol","—","—","—","cacturín","—","bong sará frugió"],["El","—","—","—","iquí","—","quim re"],["El quiere","—","—","—","iqui beyáng","—","quimre bamérqui"],["El no quiere","—","—","—","beyang íshi","—","quimre bamerque she"],["Ella","—","—","—","i abí","—","quimre"],["Elástico","—","—","—","diúngah","—","shóp shih"],["Enagua","—","—","—","cúushí","—","enagua"],["En mi presencia","—","—","—","átca íshta","—","bor bocso"],["Encerrar","—","—","—","du áh","—","bong sáso"],["Encima","—","—","—","igráca","—","baquing go"],["Encolerizar","—","—","—","yot cráh","—","ir óeh"],["Encomendarse a Dios","—","—","—","các shigah sibúc","—","ta cogró qui sebú cong"],["Encontrarse","—","—","—","icúng crah","—","himener irvó"],["Enderezar","—","—","—","duré ah","—","sheveh so"],["Enderezado","—","—","—","duré ah","—","shevéque"],["En donde","—","—","—","yéh","—","quené"],["Enemigo","—","—","—","enemigo","—","(bor) buróyo"],["Está bravo conmigo","—","—","—","chi iváqui aarédeh","—","suírqui borcon"],["Enfermedad de ronchas","—","—","—","orójque","—","herú"],["Enfermo","—","—","—","che ádri","—","suróh"],["Engañar","—","—","—","i cháj crah","—","ta to iábegui"],["Enjugar","—","—","—","tújuga","—","ye tong so"],["Enojado","—","—","—","dshódreha","—","vóc sera"],["Enredar","—","—","—","cha háh","—","chung ing nóre"],["Ensayar tantear","—","—","—","dójo ga","—","teri so"],["Ensuciar","—","—","—","uáh","—","huri so"],["Entender","—","—","—","at qui i uíra morén","—","co cugor (cobe)"],["Entero","—","—","—","hoquéh","—","hún coh"],["Enterar","—","—","—","de qui ibí","—","shi to furiong"],["Entonces","—","—","—","ya asherí","—","etón"],["Enviar","—","—","—","shúng ah","—","fa itira"],["Envuelto","—","—","—","sha át","—","bo begác"],["Equivocación","—","—","—","da icrá","—","ta vo héna eh"],["Erecto","—","—","—","dú uca","—","bégue"],["Escama","—","—","—","ung ojt cvá","—","mas nércva"],["Escara","—","—","—","ojt cvá","—","ta crúctoh"],["Escarabajo","—","—","—","tabuáh","—","bordon"],["Escarbar la tierra","—","—","—","ta burú jugah","—","crung cono"],["Escoba","—","—","—","cva at cvá","—","evaló"],["Escojer","—","—","—","chi yu áh","—","irom néso"],["Esconderse","—","—","—","cha aberáh","—","om neso"],["Escondido","—","—","—","be shíri","—","om ne nóeh"],["Escopeta","—","—","—","bot","—","querí"],["Escupir","—","—","—","suru túnga","—","ta trung tuíh"],["Eso eso es","—","—","—","ya bíri","—","soëní"],["Espaldilla","—","—","—","cuictán","—","cocso devógro"],["Espantarse","—","—","—","ca buru","—","ta upsh gá vana"],["Espante","—","—","—","di ya acóng","—",""],["Espejo","—","—","—","baca ishijduva","—","espejo"],["Espiar","—","—","—","ishdáh","—","iso"],["Espina","—","—","—","cuáh","—","sh cúh"],["Espinarse","—","—","—","ate cra cuah a","—","ta tuvono shcúgo"],["Espíritu malo","—","—","—","yuj cuah","—","ovas soóeh"],["Espíritu bueno","—","—","—","angel de la guardia","—","ángel"],["Espuma","—","—","—","zumo","—","shevó bunsho"],["Estar","—","—","—","hué erá","—","ta soéh"],["Estar parado","—","—","—","ya a shiri","—","ta shong shónqui"],["Estar para llegar","—","—","—","daba gui din chará","—","ta boro to tong"],["Está pesado","—","—","—","zis cári","—","quing oéh"],["Estiércol","—","—","—","shuah","—","so óshan"],["Estivar un bote","—","—","—","crang cuing ah","—","tióng pósh ti"],["Estoy bueno","—","—","—","bii shirá","—","ta su cóbe"],["Estoy cansado","—","—","—","iraj cara","—","ta debo séñoeh"],["Estoy enfermo","—","—","—","cheára","—","ta suróeh"],["Estoy sentado","—","—","—","zaya shirá","—","ta su túsheu"],["Extranjero","—","—","—","eet cagró","—","sigua"],["Exclamar","—","—","—","baca saáh","—","fa uróso"],["Exterior","—","—","—","ucata","—",""],["Extinguir","—","—","—","sonáh","—","turé so"],["Familia mía","—","—","—","arúa orojque","—","(bor) angva bega"],["Fango","—","—","—","suráh","—","crung shuvá"],["Feo","—","—","—","sañúen","—","so oéh"],["Festivo","—","—","—","durij","—","suro so oéh"],["Fierro","—","—","—","dric zún","—","cógvo"],["Filo","—","—","—","i hee díh","—","ba debogo"],["Fin","—","—","—","oc sharíh","—","cáng cueh"],["Firme","—","—","—","brúj cari","—","shcóng eh"],["Flaco","—","—","—","che ádrih","—","cung cova"],["Flojo","—","—","—","aj cá ashíh","—","cólon"],["Flor de maíz","—","—","—","ep surút","—","dirieh"],["Fluido aguado","—","—","—","di vagri","—","shté heng"],["Fluido espeso","—","—","—","orós cari","—","iyúp"],["Frágil","—","—","—","cueh serí do oróh","—","(bor) bógro"],["Fresco para beber","—","—","—","sej cah","—","coc tzénteh"],["Fresco (lugar)","—","—","—","cau híque","—","shta vó"],["Frío (tengo)","—","—","—","za ará","—","coc tzénteh"],["Frío (lugar)","—","—","—","séj cari","—","shivó boh"],["Fruta de liana","—","—","—","zang cva huá","—","di de vogo"],["Fruta para pegar","—","—","—","davác","—","iyúc"],["Fuente","—","—","—","dizít","—","húngashcu"],["Fuera","—","—","—","húcata","—","dobo tóeh"],["Fuerte valiente","—","—","—","áj cari","—","dovo tuc"],["Fuerza (mucha)","—","—","—","aj góng ri quinge","—","iyó"],["Fumar","—","—","—","dová suboh","—","dian"],["Fumar humear","—","—","—","chi itchá","—","queríc queri querii"],["Fundir derretir","—","—","—","suvu hugá","—","iri yontzo"],["Fusil de 2 cañones","—","—","—","bot busot","—",""],["Feroz","—","—","—","curáh","—","iri yontzo"],["Gallina doméstica","—","—","—","coró","—","críro"],["Gallina de monte","—","—","—","ong coró","—","coj dráe"],["Gallina chirascuá","—","—","—","cugrós","—","cuc shurín"],["Gallo","—","—","—","coró cong át","—","críro"],["Gamalote","—","—","—","burúj cah","—","shir vo"],["Gancho","—","—","—","shurí crah","—","shung"],["Garrapata","—","—","—","shat","—","corop cvo"],["Garrote","—","—","—","crang","—","cor"],["Garra de tigre","—","—","—","curah shuréh","—","shara dovong i"],["Garrobo","—","—","—","pshot","—","shor"],["Garrobo (iguana)","—","—","—","erít","—","fuóng"],["Garza negra","—","—","—","cais uagát","—","hong"],["Césped","—","—","—","su tzídroh","—","spam"],["Gavilla","—","—","—","doyén","—","húnana"],["Género (paño)","—","—","—","cúish","—","shuvong"],["Gente","—","—","—","abí","—","yenó"],["Gente india","—","—","—","u udát","—","indio"],["Gente blanca","—","—","—","suát","—","oba crofrúrun"],["Gente negra","—","—","—","turinát","—","oba crosíeh"],["Gilguero","—","—","—","du tzit","—","selén"],["Golondrina","—","—","—","yo yógua","—","yóyo"],["Golpe de mar","—","—","—","quiqui ca atsuma","—","dorung taro"],["Golpear","—","—","—","ibájt crah","—","shpo so"],["Gordo","—","—","—","orep cari","—","sho shóe"],["Gota","—","—","—","cho obrát","—","tun"],["Gotera","—","—","—","o horí","—","u orióne"],["Granada","—","—","—","granada","—","sugeróh"],["Grano de maíz","—","—","—","criera cupquíh","—","ip cvódia"],["Grillo grande","—","—","—","tzéjcva","—",""],["Grillo pequeño","—","—","—","tzit","—",""],["Grueso","—","—","—","brúj cari","—","idos dáden"],["Guaba","—","—","—","gu róoba","—","u góc"],["Guacal (árbol)","—","—","—","táng crah","—","ferú"],["Guacamayo verde","—","—","—","va agát","—","loro"],["Guacamayo colorado","—","—","—","shóoh","—","loro"],["Guachipelín","—","—","—","bu ucráh","—","shi crah"],["Guapote","—","—","—","ung","—","ma"],["Guardar","—","—","—","braáh","—","hine so"],["Guásimo","—","—","—","dián crah","—","shoróh"],["Guatuza","—","—","—","chéh","—","shqueri"],["Guayabo","—","—","—","shuih uáh","—","guayabo"],["Guayaba (fruta)","—","—","—","uáh","—","guayaba bo"],["Guía del camino","—","—","—","sore ecá","—",""],["Guineo","—","—","—","briduáh","—","bíng sígua"],["Güitite","—","—","—","duát crah","—",""],["Gusano de la tierra","—","—","—","serúh","—",""],["vaca","","tsara","","","",""],["La vaca Lola","","Tsara Lola","","","",""],["tiene cabeza","","Irä tsāku ta","","","",""],["y tiene cola","","ñabä marek ta","","","",""],["hace muuu","","i'te wēke Muu","","","",""],["hoja de maíz","","","","","","ep córga"],["hoja de árbol","","","","","","croga"],["hoja de plátano","","","","","","ibin córga"],["hueco","","","","","","bongto"],["huevo","","","","","","(criro) vua"],["hule","","","","","","serú"],["igual","","","","","","bec teng"],["infierno","","","","","","ó uh"],["jugo","","","","","","dió"],["labios","","","","","","cogvó"],["lado","","","","","","sorgo"],["ladrar","","","","","","chi pi crung"],["ladrón","","","","","","nru oeh"],["lágrima","","","","","","bório"],["laguna","","","","","","laguna"],["lagarto","","","","","","cu"],["llama","","","","","","yucáyu"],["llano","","","","","","s dam"],["lengua idioma","","","","","","bor tenocvo"],["leña","","","","","","i erúng"],["león","","","","","","shuring dobóng"],["líquido","","","","","","ánemoeh"],["loco","","","","","","loco"],["lucero","","","","","","lucero"],["macana","","","","","","bacána"],["madera","","","","","","cor"],["mano derecha","","","","","","orcvo derecho"],["manso","","","","","","u eré ve"],["manteca","","","","","","quió"],["marido","","","","","","dobén"],["metal","","","","","","metal"],["Abra en el monte","—","—","—","trabajo","—","párequih"],["Arbol delgado","—","—","—","crang doyén","—","cor crotíra"],["Arbol grueso","—","—","—","crang brújca","—","cor idosdáring"],["Arribar","—","—","—","bataoh","—","atevor sóshco"],["Arrugado","—","—","—","crusi shírie","—","crucúeh"],["Balsa (canoa) para pasar","—","—","—","os cang tojcra","—","quiong"],["Buho","—","—","—","cúj que","—","shu vác"],["Cómo?","—","—","—","ishén","—","só shi ri"],["Cómo se llama?","—","—","—","ishénra bacá aquíh","—","fa cóshi"],["Cómo está U?","—","—","—","ishoj queréh báqueh","—","fa su óri"],["Con migo","—","—","—","cha adecá","—","borto"],["Con tigo","—","—","—","ba amáng","—","bogeto"],["Cosquillas hacer","—","—","—","churú cá ah","—","ta poín oeh"],["Cristiano (soy)","—","—","—","r'-ra","—","taje inóh"],["Cuándo?","—","—","—","i igréh","—","shonuáh?"],["Cuándo va?","—","—","—","i i ga ban dshará","—","fabric shonuáh"],["Cuántos?","—","—","—","bi igríh","—","crobí"],["Cucuyo insecto","—","—","—","qui us","—","sconcvá"],["Cuidado!","—","—","—","crabe áh","—","ira yeb shan"],["Dedo del pié","—","—","—","crascvá","—","(bor) sacvo sheragra"],["Deténte!","—","—","—","cha acrújuga","—","mas"],["Disturbar emporrar","—","—","—","emporrar","—","ta sushtódering"],["Dónde está?","—","—","—","che erih","—","su quené"],["Dónde va?","—","—","—","cha iban chará","—","to quené"],["Dónde está el agua?","—","—","—","che erá dí qui","—","di quené"],["Espante (no se)","—","—","—","di ya acóng","—","fa upsh ga vi sheme"],["Esposa (mi)","—","—","—","adra mat","—","bor vári"],["Esposo (mi)","—","—","—","at cong át","—","bor dobén"],["Exterior (lado)","—","—","—","ucata","—","hugashco"]]};
var dictData = [];
var dictCargado = false;
var DICT_URL = 'https://kacn1z-del.github.io/wc-editorpro/wc-diccionario.json';
function cargarDiccionario(){
  if(dictCargado) return Promise.resolve(dictData);
  return Promise.resolve(DICT_EMBEBIDO).then(function(j){
    var cols = j.cols;
    dictData = j.data.map(function(row){
      var o = {};
      for(var i=0;i<cols.length;i++){ o[cols[i]] = row[i]; }
      return o;
    });
    dictCargado = true;
    var titulo = document.getElementById('dictToggleLabel') || document.querySelector('.dict-toggle');
    var cnt = document.querySelector('[id*="dictCount"]');
    // Actualizar contador en el título
    document.querySelectorAll('*').forEach(function(el){
      if(el.children.length===0 && /Diccionario — \\d+ palabras/.test(el.textContent)){
        el.textContent = '📖 Diccionario — '+dictData.length+' palabras';
      }
    });
    if(typeof filterDict==='function') filterDict('');
    return dictData;
  }).catch(function(e){
    console.log('No se pudo cargar el diccionario:', e);
    return [];
  });
}



let apiSearchTimeout = null;

function toggleDict() {
  if(!dictCargado){ cargarDiccionario(); }
  const body = document.getElementById('dictBody');
  const icon = document.getElementById('dictToggleIcon');
  body.classList.toggle('open');
  icon.style.transform = body.classList.contains('open') ? 'rotate(180deg)' : '';
  if (body.classList.contains('open') && !document.getElementById('dictResults').children.length) filterDict();
}

function filterDict() {
  const q = document.getElementById('dictSearch').value.toLowerCase().trim();
  const res = document.getElementById('dictResults');
  const filtered = q ? dictData.filter(e => Object.values(e).some(v => v.toLowerCase().includes(q))) : dictData;
  res.innerHTML = '';
  if (!filtered.length && !q) {
    res.innerHTML = '<p style="color:#aaa;font-size:13px;text-align:center;padding:10px">Escribe para buscar</p>';
    return;
  }
  filtered.forEach(e => {
    res.innerHTML += \`<div class="dict-entry">
      <div class="dict-word">\${e.es}</div>
      <div class="dict-langs">
        <span class="dict-lang-tag"><b>Bribri:</b> \${e.bribri}</span>
        <span class="dict-lang-tag"><b>Cabécar:</b> \${e.cabecar}</span>
        <span class="dict-lang-tag"><b>Maleku:</b> \${e.maleku}</span>
        <span class="dict-lang-tag" style="background:#e8f5e9"><b>Boruca (Brunca):</b> \${e.boruca}</span>
        <span class="dict-lang-tag"><b>Ngäbe:</b> \${e.ngabe}</span>
      </div></div>\`;
  });
  if (!filtered.length && q) {
    res.innerHTML = \`<p style="color:#aaa;font-size:13px;text-align:center;padding:6px">No encontrado localmente</p>\`;
  }
}

</script>

<script>
/* ============================================================
   MÓDULO PRINCIPAL — WC Corporate Editor v24
   IA: Meta Llama 3.1 via Groq (sin Gemini)
   ============================================================ */
const editor = document.getElementById('editor');
const toast  = document.getElementById('toast');
let savedRange = null, trackOn = false, chartCount = 0, fabBuilt = false, clipboardHistory = [];

function showToast(m) {
  toast.textContent = m;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2500);
}
function openModal(id)  { document.getElementById(id).classList.add('show'); }
function closeModal(id) { document.getElementById(id).classList.remove('show'); }
document.querySelectorAll('.mo').forEach(o => o.addEventListener('click', e => { if (e.target===o) o.classList.remove('show'); }));

function updateStats() {
  const t = editor.innerText;
  const w = t.trim().split(/\\s+/).filter(x => x.length>0).length;
  document.getElementById('wordCount').textContent  = \`✓ \${w} palabras\`;
  document.getElementById('charCount').textContent  = \`✓ \${t.length} caracteres\`;
}
editor.addEventListener('input', function(){ updatePageBreaks(); }); editor.addEventListener('input', updateStats);

function insertHTML(html) {
  editor.focus();
  const sel = window.getSelection();
  if (sel && sel.rangeCount) {
    const r = sel.getRangeAt(0);
    r.deleteContents();
    const d = document.createElement('div');
    d.innerHTML = html;
    const f = document.createDocumentFragment();
    let n, last;
    while ((n = d.firstChild)) { last = f.appendChild(n); }
    r.insertNode(f);
    if (last) { r.setStartAfter(last); r.collapse(true); sel.removeAllRanges(); sel.addRange(r); }
  } else { editor.innerHTML += html; }
  updateStats();
}

function cmd(c, v) { document.execCommand(c, false, v || null); editor.focus(); }

editor.addEventListener('mouseup',  saveSelection);
editor.addEventListener('keyup',    saveSelection);
editor.addEventListener('touchend', saveSelection);

function saveSelection() {
  const s = window.getSelection();
  if (s && s.rangeCount > 0) savedRange = s.getRangeAt(0).cloneRange();
}
function restoreSelection() {
  if (!savedRange) { editor.focus(); return; }
  editor.focus();
  const s = window.getSelection();
  s.removeAllRanges();
  s.addRange(savedRange);
}
function restoreAndExec(c, v) { restoreSelection(); cmd(c, v); }

/* ── IDIOMA ── */
const langs = {
  espanol:{title:'WC Corporate Editor v24',sub:'ULTIMATE PRO UI V26 - ESTÉTICA EJECUTIVA',ct:'Editor de documentos — WC Corporate',menus:['Inicio','Archivo','Editar','Insertar','Formato','WC Arte','Herramientas','Lenguas CR','IA 🦙']},
  ingles: {title:'WC Corporate Editor v24',sub:'ULTIMATE PRO UI V26 - EXECUTIVE AESTHETICS',ct:'Document Editor — WC Corporate',menus:['Home','File','Edit','Insert','Format','WC Art','Tools','CR Languages','AI 🦙']},
  bribri: {title:'WC Corporate Editor v24',sub:'BRIBRI UI - ÑAÑA TSURU',ct:'Tso̖ bribri',menus:['Tsö̖','Ña','Ñë','Shu','Forma','Arte','Tsi','Bribri','IA 🦙']},
  cabecar:{title:'WC Corporate Editor v24',sub:'CABÉCAR UI - KÁ BË́RË',ct:'Yë́ cabécar',menus:['Yë','Ká','Bë','Rë','Tsö','Arte','Sö','Cabécar','IA 🦙']},
  maleku: {title:'WC Corporate Editor v24',sub:'MALEKU UI - MA LHA MARÁMA',ct:'Lha maráma',menus:['Lha','Ma','Rá','Má','Töl','Arte','Phö','Maleku','IA 🦙']},
  brunca: {title:'WC Corporate Editor v24',sub:'BRUNCA UI - BORUCA DANZÖ',ct:'Tö brunca',menus:['Tö','Kro','Bë','Drö','Chö','Arte','Brö','Brunca','IA 🦙']}
};
const menuBtns = document.querySelectorAll('.menu-btn');
function switchLang(lang) {
  const L = langs[lang] || langs.espanol;
  document.getElementById('editorTitle').textContent = L.title;
  document.getElementById('editorSub').textContent   = L.sub;
  document.getElementById('contentTitle').textContent = L.ct;
  menuBtns.forEach((b,i) => { if (L.menus[i]) b.textContent = L.menus[i]; });
  showToast(\`Idioma: \${lang.charAt(0).toUpperCase()+lang.slice(1)} ✅\`);
}

/* ── PLANTILLAS ── */
const plantillas = [
  {icon:'📄',name:'Carta formal',c:'<div style="font-family:Georgia,serif;max-width:16cm;margin:0 auto"><p style="text-align:right;color:#666;font-size:11pt">San José, Costa Rica<br>[Fecha]</p><div style="border-left:4px solid #0084ff;padding-left:14px;margin:20px 0"><p style="margin:0;font-weight:700;color:#1a2942">[Nombre del destinatario]</p><p style="margin:0;color:#666;font-size:11pt">[Cargo / Institución]</p></div><p style="margin-top:24px"><strong>Estimado señor/señora:</strong></p><p style="line-height:1.7">Por medio de la presente me permito comunicarle que...</p><p style="margin-top:50px">Atentamente,</p><div style="margin-top:40px;border-top:1px solid #ccc;width:220px;padding-top:6px"><strong>[Nombre completo]</strong></div></div>'},

  {icon:'📋',name:'Informe ejecutivo',c:'<div style="font-family:Calibri,Arial,sans-serif;max-width:18cm;margin:0 auto"><div style="background:linear-gradient(135deg,#1a2942,#0084ff);color:#fff;padding:28px;border-radius:10px;margin-bottom:24px"><h1 style="margin:0;font-size:26px">INFORME EJECUTIVO</h1><p style="margin:6px 0 0;opacity:.85;font-size:13px">[Nombre del proyecto] · [Fecha]</p></div><h2 style="color:#0084ff;border-bottom:2px solid #0084ff;padding-bottom:6px">1. Resumen ejecutivo</h2><p>El presente informe detalla los resultados...</p><h2 style="color:#0084ff;border-bottom:2px solid #0084ff;padding-bottom:6px">2. Objetivos</h2><table style="width:100%;border-collapse:collapse;margin:10px 0"><tr style="background:#f0f7ff"><td style="padding:8px;border:1px solid #dde"><strong>Objetivo 1</strong></td></tr><tr><td style="padding:8px;border:1px solid #dde"><strong>Objetivo 2</strong></td></tr></table><h2 style="color:#0084ff;border-bottom:2px solid #0084ff;padding-bottom:6px">3. Resultados</h2><p>Los resultados muestran un avance significativo...</p><h2 style="color:#0084ff;border-bottom:2px solid #0084ff;padding-bottom:6px">4. Conclusiones</h2><p>Se concluye que...</p></div>'},

  {icon:'📝',name:'Minuta',c:'<div style="font-family:Calibri,Arial,sans-serif;max-width:17cm;margin:0 auto"><h2 style="text-align:center;color:#fff;background:#1a2942;padding:14px;border-radius:8px">MINUTA DE REUNIÓN</h2><table style="width:100%;border-collapse:collapse;margin:16px 0;font-size:13px"><tr><td style="padding:8px;background:#f0f7ff;border:1px solid #dde;width:30%"><strong>Fecha</strong></td><td style="padding:8px;border:1px solid #dde">___________</td></tr><tr><td style="padding:8px;background:#f0f7ff;border:1px solid #dde"><strong>Hora</strong></td><td style="padding:8px;border:1px solid #dde">___________</td></tr><tr><td style="padding:8px;background:#f0f7ff;border:1px solid #dde"><strong>Participantes</strong></td><td style="padding:8px;border:1px solid #dde">1. ___________<br>2. ___________</td></tr></table><h3 style="color:#0084ff">📌 Temas tratados</h3><p>1. ___________</p><h3 style="color:#0084ff">✅ Acuerdos</h3><p>1. ___________</p></div>'},

  {icon:'📃',name:'Currículum',c:'<div style="font-family:Calibri,Arial,sans-serif;max-width:16cm;margin:0 auto"><div style="background:#1a2942;color:#fff;padding:24px;border-radius:10px;text-align:center;margin-bottom:20px"><h1 style="margin:0;font-size:24px">NOMBRE COMPLETO</h1><p style="margin:6px 0 0;font-size:13px;opacity:.85">📧 correo@email.com &nbsp;|&nbsp; 📱 8888-8888 &nbsp;|&nbsp; San José, Costa Rica</p></div><h3 style="color:#0084ff;border-bottom:2px solid #0084ff;padding-bottom:4px">PERFIL PROFESIONAL</h3><p>Profesional con experiencia en...</p><h3 style="color:#0084ff;border-bottom:2px solid #0084ff;padding-bottom:4px">EXPERIENCIA LABORAL</h3><table style="width:100%;border-collapse:collapse;margin-bottom:14px"><tr><td style="padding:10px;border-left:3px solid #0084ff;background:#f7fafd"><strong>Empresa XYZ</strong> — Cargo<br><span style="color:#888;font-size:12px">2020–2024</span><br>• Logro 1<br>• Logro 2</td></tr></table><h3 style="color:#0084ff;border-bottom:2px solid #0084ff;padding-bottom:4px">EDUCACIÓN</h3><table style="width:100%;border-collapse:collapse"><tr><td style="padding:10px;border-left:3px solid #27ae60;background:#f7fafd"><strong>Universidad</strong> — Carrera<br><span style="color:#888;font-size:12px">2015–2019</span></td></tr></table></div>'},

  {icon:'📑',name:'Contrato',c:'<div style="font-family:Georgia,serif;max-width:17cm;margin:0 auto"><h2 style="text-align:center;color:#1a2942;border-bottom:3px double #1a2942;padding-bottom:10px">CONTRATO DE SERVICIOS</h2><p style="margin-top:20px">Entre los suscritos, <strong>EL CONTRATANTE</strong> y <strong>EL CONTRATADO</strong>, se acuerda lo siguiente:</p><table style="width:100%;border-collapse:collapse;margin:18px 0"><tr><td style="background:#1a2942;color:#fff;padding:8px 12px;font-weight:700">CLÁUSULA PRIMERA: OBJETO</td></tr><tr><td style="padding:12px;border:1px solid #ddd">El presente contrato tiene por objeto...</td></tr><tr><td style="background:#1a2942;color:#fff;padding:8px 12px;font-weight:700">CLÁUSULA SEGUNDA: DURACIÓN</td></tr><tr><td style="padding:12px;border:1px solid #ddd">El contrato tendrá una duración de...</td></tr></table><div style="display:flex;justify-content:space-between;margin-top:60px"><div style="text-align:center;width:45%"><div style="border-top:1px solid #333;padding-top:6px">EL CONTRATANTE</div></div><div style="text-align:center;width:45%"><div style="border-top:1px solid #333;padding-top:6px">EL CONTRATADO</div></div></div></div>'},

  {icon:'🗒️',name:'Acta',c:'<div style="font-family:Calibri,Arial,sans-serif;max-width:17cm;margin:0 auto"><h2 style="text-align:center;color:#fff;background:#7a3b9e;padding:14px;border-radius:8px">ACTA N° ____</h2><p style="background:#f7f0fa;padding:10px;border-radius:6px;margin:16px 0"><strong>Fecha y lugar:</strong> ___________</p><h3 style="color:#7a3b9e">👥 Presentes</h3><p>1. ___________<br>2. ___________</p><h3 style="color:#7a3b9e">📋 Orden del día</h3><p>1. Apertura<br>2. Lectura del acta anterior<br>3. Asuntos varios</p><h3 style="color:#7a3b9e">📝 Desarrollo</h3><p>Se dio inicio a la sesión a las ___ horas...</p></div>'},

  {icon:'📊',name:'Propuesta',c:'<div style="font-family:Calibri,Arial,sans-serif;max-width:18cm;margin:0 auto"><div style="background:linear-gradient(135deg,#0084ff,#00b894);color:#fff;padding:28px;border-radius:10px;text-align:center;margin-bottom:24px"><h1 style="margin:0">PROPUESTA EJECUTIVA</h1><p style="margin:6px 0 0;opacity:.9">Preparada para: [Cliente]</p></div><h2 style="color:#e74c3c">⚠️ Problema</h2><p>El cliente actualmente enfrenta...</p><h2 style="color:#0084ff">💡 Solución propuesta</h2><p>Ofrecemos una solución integral...</p><h2 style="color:#27ae60">💰 Inversión</h2><table style="width:100%;border-collapse:collapse"><tr style="background:#f0f7ff"><th style="padding:10px;border:1px solid #dde;text-align:left">Concepto</th><th style="padding:10px;border:1px solid #dde;text-align:right">Monto</th></tr><tr><td style="padding:10px;border:1px solid #dde">Total estimado</td><td style="padding:10px;border:1px solid #dde;text-align:right">₡ ___________</td></tr></table></div>'},

  {icon:'📰',name:'Boletín',c:'<div style="font-family:Calibri,Arial,sans-serif;max-width:18cm;margin:0 auto"><div style="background:#0084ff;color:#fff;padding:20px;border-radius:8px;text-align:center;margin-bottom:20px"><h1 style="margin:0">📰 BOLETÍN INFORMATIVO</h1><p style="margin:6px 0 0;opacity:.85">Edición N° 1 · [Fecha]</p></div><h2 style="color:#0084ff">Noticias principales</h2><p>Lorem ipsum dolor sit amet...</p><h2 style="color:#0084ff">Eventos próximos</h2><table style="width:100%;border-collapse:collapse"><tr style="background:#f0f7ff"><td style="padding:8px;border:1px solid #dde">Evento 1</td><td style="padding:8px;border:1px solid #dde">[fecha]</td></tr><tr><td style="padding:8px;border:1px solid #dde">Evento 2</td><td style="padding:8px;border:1px solid #dde">[fecha]</td></tr></table></div>'},

  {icon:'🌿',name:'Lenguas Indígenas',c:'<div style="font-family:Calibri,Arial,sans-serif;max-width:18cm;margin:0 auto"><div style="background:linear-gradient(135deg,#27ae60,#1a8a4a);color:#fff;padding:20px;border-radius:8px;text-align:center;margin-bottom:18px"><h2 style="margin:0">🌿 Diccionario Lenguas Indígenas CR</h2></div><table border="1" style="border-collapse:collapse;width:100%"><tr style="background:#27ae60;color:white"><th style="padding:10px">Español</th><th style="padding:10px">Bribri</th><th style="padding:10px">Cabécar</th><th style="padding:10px">Maleku</th></tr><tr style="background:#f7fdf9"><td style="padding:8px">Hola</td><td style="padding:8px">Shkëkë</td><td style="padding:8px">Ká bë́rë</td><td style="padding:8px">Ma lha</td></tr><tr><td style="padding:8px">Agua</td><td style="padding:8px">Aba</td><td style="padding:8px">Yök</td><td style="padding:8px">Toku</td></tr><tr style="background:#f7fdf9"><td style="padding:8px">Gracias</td><td style="padding:8px">Ëyö</td><td style="padding:8px">Ká</td><td style="padding:8px">Shíi</td></tr></table></div>'},

  {icon:'📬',name:'Memorando',c:'<div style="font-family:Calibri,Arial,sans-serif;max-width:17cm;margin:0 auto"><h2 style="text-align:center;color:#1a2942;border-top:3px solid #1a2942;border-bottom:3px solid #1a2942;padding:12px 0">MEMORANDO INTERNO</h2><table style="width:100%;border-collapse:collapse;margin:16px 0;font-size:13px"><tr><td style="padding:8px;background:#f0f7ff;border:1px solid #dde;width:25%"><strong>PARA</strong></td><td style="padding:8px;border:1px solid #dde">___________</td></tr><tr><td style="padding:8px;background:#f0f7ff;border:1px solid #dde"><strong>DE</strong></td><td style="padding:8px;border:1px solid #dde">___________</td></tr><tr><td style="padding:8px;background:#f0f7ff;border:1px solid #dde"><strong>FECHA</strong></td><td style="padding:8px;border:1px solid #dde">___________</td></tr><tr><td style="padding:8px;background:#f0f7ff;border:1px solid #dde"><strong>ASUNTO</strong></td><td style="padding:8px;border:1px solid #dde">___________</td></tr></table><p>Por este medio me permito informarle que...</p><div style="margin-top:50px;border-top:1px solid #ccc;width:220px;padding-top:6px">Firma</div></div>'}
];

const pg = document.getElementById('plantillasGrid');
plantillas.forEach(p => {
  const b = document.createElement('button');
  b.className = 'tcard';
  b.innerHTML = \`<span class="ico">\${p.icon}</span>\${p.name}\`;
  b.onclick = () => { closeModal('modalPlantillas'); openDocWindow(p.c, p.name); showToast(\`Plantilla: \${p.name} ✅\`); };
  pg.appendChild(b);
});

/* ── WC ARTE DISEÑOS CR ── */
const wcD = [
  {e:'🦋',n:'Mariposa',r:t=>\`<div style="text-align:center;padding:14px;background:linear-gradient(135deg,#ff9ff3,#feca57,#ff6b6b,#48dbfb);border-radius:20px;margin:10px 0"><div style="font-size:26px">🦋 🦋</div><div style="font-size:28px;font-weight:900;color:white;text-shadow:2px 2px 6px rgba(0,0,0,.4);letter-spacing:4px">\${t}</div><div style="font-size:26px">🦋 🦋</div></div>\`},
  {e:'🐆',n:'Jaguar',r:t=>\`<div style="text-align:center;padding:14px;background:linear-gradient(135deg,#f9ca24,#f0932b);border-radius:20px;margin:10px 0;border:4px solid #2d3436"><div style="font-size:32px">🐆</div><div style="font-size:28px;font-weight:900;color:#1a1a1a;letter-spacing:5px;text-shadow:2px 2px 0 #fff">\${t}</div></div>\`},
  {e:'🐢',n:'Tortuga',r:t=>\`<div style="text-align:center;padding:14px;background:linear-gradient(180deg,#006994,#00b4d8,#90e0ef);border-radius:50px;margin:10px 0"><div style="font-size:24px">🌊🐢🌊</div><div style="font-size:26px;font-weight:900;color:white;text-shadow:1px 1px 4px rgba(0,0,0,.5);letter-spacing:4px">\${t}</div></div>\`},
  {e:'🦜',n:'Lapa Roja',r:t=>\`<div style="text-align:center;padding:14px;background:linear-gradient(135deg,#e74c3c,#f39c12,#27ae60,#2980b9);border-radius:20px;margin:10px 0"><div style="font-size:36px">🦜</div><div style="font-size:28px;font-weight:900;color:white;text-shadow:2px 2px 0 rgba(0,0,0,.5);letter-spacing:4px">\${t}</div></div>\`},
  {e:'🐸',n:'Rana',r:t=>\`<div style="text-align:center;padding:14px;background:linear-gradient(135deg,#00b894,#00cec9,#fdcb6e);border-radius:20px;margin:10px 0"><div style="font-size:36px">🐸</div><div style="font-size:28px;font-weight:900;background:linear-gradient(90deg,#e17055,#6c5ce7,#00b894);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;letter-spacing:4px">\${t}</div></div>\`},
  {e:'🌿',n:'Bosque',r:t=>\`<div style="text-align:center;padding:16px;background:linear-gradient(180deg,#74b9ff 0%,#a29bfe 30%,#55efc4 65%,#00b894 100%);border-radius:20px;margin:10px 0"><div style="font-size:20px">🌫️🌿🌫️</div><div style="font-size:28px;font-weight:900;color:white;text-shadow:0 2px 10px rgba(0,0,0,.6);letter-spacing:4px;padding:6px 0">\${t}</div><div style="font-size:20px">🌲🌳🌲</div></div>\`},
  {e:'🌋',n:'Volcán',r:t=>\`<div style="text-align:center;padding:14px;background:linear-gradient(180deg,#2d3436,#636e72,#b2bec3);border-radius:20px;margin:10px 0"><div style="font-size:32px">🌋🔥</div><div style="font-size:28px;font-weight:900;color:#fdcb6e;text-shadow:0 0 16px #e17055,2px 2px 0 #2d3436;letter-spacing:4px">\${t}</div></div>\`},
  {e:'🌺',n:'Orquídea',r:t=>\`<div style="text-align:center;padding:14px;background:linear-gradient(135deg,#fd79a8,#e84393,#a29bfe,#6c5ce7);border-radius:20px;margin:10px 0"><div style="font-size:32px">🌸🌺🌸</div><div style="font-size:28px;font-weight:900;color:white;text-shadow:1px 1px 6px rgba(0,0,0,.5);letter-spacing:4px">\${t}</div></div>\`},
  {e:'🇨🇷',n:'Bandera CR',r:t=>\`<div style="text-align:center;margin:10px 0;border-radius:20px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,.25)"><div style="background:#003da5;padding:10px 0"></div><div style="background:#fff;padding:5px 0"></div><div style="background:#ce1126;padding:18px 0"><div style="font-size:28px;font-weight:900;color:white;text-shadow:1px 1px 0 #003da5,3px 3px 8px rgba(0,0,0,.6);letter-spacing:5px">\${t}</div><div style="font-size:13px;color:rgba(255,255,255,.9)">🇨🇷 Costa Rica</div></div><div style="background:#fff;padding:5px 0"></div><div style="background:#003da5;padding:10px 0"></div></div>\`},
  {e:'🌊',n:'Costa Rica Mar',r:t=>\`<div style="text-align:center;padding:16px;background:linear-gradient(180deg,#f39c12 0%,#0984e3 40%,#00cec9 70%,#55efc4 100%);border-radius:20px;margin:10px 0"><div style="font-size:26px">☀️🌴🌊</div><div style="font-size:28px;font-weight:900;color:white;text-shadow:0 2px 10px rgba(0,60,120,.7);letter-spacing:4px;padding:6px 0">\${t}</div><div style="font-size:13px;color:rgba(255,255,255,.9);font-weight:600">Costa Rica 🇨🇷</div></div>\`}
];

/* ── WC ARTE ESTILOS ── */
const wcL = [
  {n:'🔥 Fuego',s:'font-size:28px;font-weight:900;background:linear-gradient(90deg,#ff0000,#ff6b35,#ffd700);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;letter-spacing:3px;'},
  {n:'🌊 Océano',s:'font-size:28px;font-weight:900;background:linear-gradient(90deg,#003da5,#0084ff,#00cec9);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;letter-spacing:3px;'},
  {n:'🌿 Bosque',s:'font-size:28px;font-weight:900;background:linear-gradient(90deg,#27ae60,#2ecc71,#a8e063);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;letter-spacing:3px;'},
  {n:'🌌 Galaxia',s:'font-size:28px;font-weight:900;background:linear-gradient(90deg,#9b59b6,#6c5ce7,#fd79a8);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;letter-spacing:3px;'},
  {n:'🇨🇷 Bandera',s:'font-size:28px;font-weight:900;background:linear-gradient(90deg,#003da5 33%,#ce1126 33%,#ce1126 66%,#003da5 66%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;letter-spacing:3px;'},
  {n:'⭐ Dorado',s:'font-size:28px;font-weight:900;background:linear-gradient(90deg,#f39c12,#ffd700,#f0932b);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;letter-spacing:3px;'},
  {n:'🌈 Arcoíris',s:'font-size:28px;font-weight:900;background:linear-gradient(90deg,#ff0000,#ff9900,#ffff00,#00cc00,#0084ff,#9b59b6);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;letter-spacing:3px;'},
  {n:'❄️ Hielo',s:'font-size:28px;font-weight:900;background:linear-gradient(90deg,#a8edea,#c2e9fb,#dfe9f3);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;letter-spacing:3px;'},
  {n:'🌅 Atardecer',s:'font-size:28px;font-weight:900;background:linear-gradient(90deg,#f093fb,#f5576c,#fda085);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;letter-spacing:3px;'},
  {n:'💚 Neón',s:'font-size:28px;font-weight:900;color:#00ff41;-webkit-text-fill-color:#00ff41;text-shadow:0 0 10px #00ff41,0 0 20px #00ff41;letter-spacing:3px;'},
  {n:'🔩 Cromado',s:'font-size:28px;font-weight:900;background:linear-gradient(180deg,#fff 0%,#aaa 40%,#fff 60%,#666 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;letter-spacing:3px;'},
  {n:'🌴 Tropical',s:'font-size:28px;font-weight:900;background:linear-gradient(90deg,#27ae60,#f39c12,#ce1126,#003da5);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;letter-spacing:3px;'}
];

document.getElementById('wcArteText').addEventListener('input', function() {
  document.getElementById('wcArtePreview').textContent = this.value || 'Vista previa';
});
document.getElementById('btnInsertWcArte').onclick = () => {
  const txt = document.getElementById('wcArteText').value.trim();
  if (!txt) { showToast('Escribe un texto'); return; }
  const b = document.getElementById('wordart-banner');
  b.textContent = txt;
  b.style.cssText = 'display:block;text-align:center;font-size:36px;font-weight:900;background:linear-gradient(90deg,#ff6b35,#0084ff,#9b59b6,#27ae60);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;letter-spacing:4px;margin-bottom:12px;padding:10px;border-radius:12px;';
  closeModal('modalWcArte');
  document.getElementById('wcArteText').value = '';
  showToast('WC Arte insertado ✨');
};

function buildWcArteGrids() {
  const gal = document.getElementById('wcArteGalleryGrid');
  const fab = document.getElementById('fabWcArteGrid');
  if (gal.children.length > 0) return;
  wcD.forEach(d => {
    [gal,fab].forEach(g => {
      const b = document.createElement('button');
      b.className = g===fab ? 'fabbtn' : 'tcard';
      b.style.cssText = 'font-size:12px;text-align:left;padding:8px 10px;';
      b.innerHTML = \`\${d.e} \${d.n}\`;
      b.onclick = () => {
        const t = prompt(\`Texto para "\${d.n}":\`, 'Mi texto');
        if (t && t.trim()) { insertHTML(d.r(t.trim())); if (g===gal) closeModal('modalWcArteGallery'); showToast(\`\${d.e} insertado ✨\`); }
      };
      g.appendChild(b);
    });
  });
  const lg = document.getElementById('wcArteLetrasGrid');
  if (lg && lg.children.length===0) {
    wcL.forEach(s => {
      const div = document.createElement('div');
      div.className = 'wcprev';
      div.style.cssText = s.s;
      div.textContent = s.n;
      div.onclick = () => {
        const txt = document.getElementById('wcArteLetrasText').value.trim() || 'Mi texto';
        insertHTML(\`<div style="text-align:center;padding:10px;margin:8px 0"><span style="\${s.s}">\${txt}</span></div>\`);
        closeModal('modalWcArteLetras');
        showToast('Estilo insertado ✨');
      };
      lg.appendChild(div);
    });
    document.getElementById('wcArteLetrasText').addEventListener('input', function() {
      lg.querySelectorAll('.wcprev').forEach((el,i) => { el.textContent = this.value || wcL[i].n; });
    });
  }
}

/* ── FORMAS ── */
const shapes = [
  {i:'⬛',h:'<div style="width:120px;height:80px;background:linear-gradient(135deg,#0084ff,#0050cc);border-radius:4px;display:inline-block;margin:8px"></div>'},
  {i:'🔵',h:'<div style="width:100px;height:100px;background:linear-gradient(135deg,#0084ff,#9b59b6);border-radius:50%;display:inline-block;margin:8px"></div>'},
  {i:'🔺',h:'<div style="width:0;height:0;border-left:60px solid transparent;border-right:60px solid transparent;border-bottom:100px solid #ff6b35;display:inline-block;margin:8px"></div>'},
  {i:'💎',h:'<div style="width:80px;height:80px;background:linear-gradient(135deg,#00d2ff,#0084ff);transform:rotate(45deg);display:inline-block;margin:24px"></div>'},
  {i:'⭐',h:'<div style="font-size:60px;display:inline-block;margin:8px;color:#f39c12">⭐</div>'},
  {i:'❤️',h:'<div style="font-size:60px;display:inline-block;margin:8px">❤️</div>'},
  {i:'🔷',h:'<div style="width:80px;height:80px;background:linear-gradient(135deg,#0084ff,#27ae60);clip-path:polygon(50% 0%,100% 50%,50% 100%,0% 50%);display:inline-block;margin:8px"></div>'},
  {i:'🔹',h:'<div style="width:120px;height:40px;background:linear-gradient(90deg,#0084ff,#ff6b35);border-radius:20px;display:inline-block;margin:8px"></div>'},
  {i:'🟩',h:'<div style="width:100px;height:100px;background:linear-gradient(135deg,#27ae60,#2ecc71);border-radius:16px;display:inline-block;margin:8px"></div>'},
  {i:'🌟',h:'<div style="font-size:60px;display:inline-block;margin:8px">🌟</div>'},
  {i:'🔲',h:'<div style="width:100px;height:100px;border:6px solid #0084ff;border-radius:4px;display:inline-block;margin:8px"></div>'},
  {i:'⬡',h:'<div style="width:80px;height:80px;background:linear-gradient(135deg,#9b59b6,#ff6b35);clip-path:polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%);display:inline-block;margin:8px"></div>'},
  {i:'➡️',h:'<div style="font-size:60px;display:inline-block;margin:8px">➡️</div>'},
  {i:'🔔',h:'<div style="font-size:60px;display:inline-block;margin:8px">🔔</div>'},
  {i:'🌈',h:'<div style="height:40px;background:linear-gradient(90deg,#ff0000,#ff8c00,#ffff00,#00c800,#0000ff,#8b00ff);border-radius:20px;margin:8px;display:block"></div>'},
  {i:'🟥',h:'<div style="width:100px;height:100px;background:linear-gradient(135deg,#e74c3c,#c0392b);display:inline-block;margin:8px"></div>'},
  {i:'🏠',h:'<div style="font-size:60px;display:inline-block;margin:8px">🏠</div>'},
  {i:'☁️',h:'<div style="font-size:60px;display:inline-block;margin:8px">☁️</div>'},
  {i:'📌',h:'<div style="font-size:60px;display:inline-block;margin:8px">📌</div>'},
  {i:'🎯',h:'<div style="font-size:60px;display:inline-block;margin:8px">🎯</div>'}
];
const sg = document.getElementById('shapesGrid');
shapes.forEach(s => {
  const b = document.createElement('button');
  b.className = 'sbtn'; b.textContent = s.i;
  b.onclick = () => { insertHTML('<p>'+s.h+'</p>'); closeModal('modalShapes'); showToast('Forma insertada ✅'); };
  sg.appendChild(b);
});

/* ── GRÁFICOS ── */
const chartTypes = [
  {n:'Barras',i:'📊',t:'bar',d:[65,59,80,81,56,72],l:['Ene','Feb','Mar','Abr','May','Jun'],c:['#0084ff','#ff6b35','#27ae60','#9b59b6','#f39c12','#e74c3c']},
  {n:'Líneas',i:'📈',t:'line',d:[30,50,40,70,60,90],l:['Sem1','Sem2','Sem3','Sem4','Sem5','Sem6'],c:['#0084ff']},
  {n:'Pastel',i:'🥧',t:'pie',d:[35,25,20,15,5],l:['A','B','C','D','E'],c:['#0084ff','#ff6b35','#27ae60','#9b59b6','#f39c12']},
  {n:'Dona',i:'🍩',t:'doughnut',d:[40,30,20,10],l:['Q1','Q2','Q3','Q4'],c:['#0084ff','#ff6b35','#27ae60','#9b59b6']},
  {n:'Radar',i:'🕸️',t:'radar',d:[80,65,70,90,55,75],l:['A','B','C','D','E','F'],c:['#0084ff']},
  {n:'Área',i:'📉',t:'line',d:[20,40,35,60,55,80],l:['L','M','X','J','V','S'],c:['#27ae60'],fill:true},
  {n:'Barra H',i:'📋',t:'bar',d:[45,67,89,34,56],l:['Rojo','Azul','Verde','Naranja','Morado'],c:['#e74c3c','#0084ff','#27ae60','#ff6b35','#9b59b6'],hz:true},
  {n:'Polar',i:'🌐',t:'polarArea',d:[55,40,70,30,60],l:['N','S','E','O','C'],c:['#0084ff','#ff6b35','#27ae60','#9b59b6','#f39c12']},
  {n:'Burbujas',i:'🫧',t:'bubble',bub:true},
  {n:'Dispersión',i:'✦',t:'scatter',sct:true}
];
const cg = document.getElementById('chartsGrid');
chartTypes.forEach(ct => {
  const b = document.createElement('button');
  b.className = 'cbtn'; b.innerHTML = \`\${ct.i}<br>\${ct.n}\`;
  b.onclick = () => { insertChart(ct); closeModal('modalCharts'); };
  cg.appendChild(b);
});
function insertChart(ct) {
  chartCount++;
  const id = 'ch-'+chartCount;
  const w = document.createElement('div'); w.className = 'cwrap';
  w.innerHTML = \`<button class="cdel" onclick="this.parentElement.remove()">✕</button><canvas id="\${id}"></canvas>\`;
  document.getElementById('mediaZone').appendChild(w);
  const opts = {responsive:true,plugins:{legend:{position:'bottom'}}};
  let cfg;
  if (ct.bub) { cfg={type:'bubble',data:{datasets:[{label:'Datos',data:[{x:10,y:20,r:15},{x:15,y:10,r:10},{x:20,y:30,r:20},{x:5,y:15,r:8}],backgroundColor:['#0084ff88','#ff6b3588','#27ae6088','#9b59b688']}]},options:opts}; }
  else if (ct.sct) { cfg={type:'scatter',data:{datasets:[{label:'Puntos',data:[{x:5,y:10},{x:15,y:25},{x:20,y:15},{x:25,y:30},{x:10,y:5}],backgroundColor:'#0084ff'}]},options:opts}; }
  else { const ds={label:ct.n,data:ct.d,backgroundColor:ct.t==='line'?ct.c[0]+'33':ct.c,borderColor:ct.t==='line'?ct.c[0]:ct.c,borderWidth:2,fill:ct.fill||false,tension:.4}; cfg={type:ct.t,data:{labels:ct.l,datasets:[ds]},options:{...opts,indexAxis:ct.hz?'y':'x'}}; }
  new Chart(document.getElementById(id),cfg);
  showToast(\`Gráfico "\${ct.n}" insertado ✅\`);
}

function tableToChart() {
  const tables = editor.querySelectorAll('table');
  if (!tables.length) { showToast('Inserta una tabla primero'); return; }
  const rows = Array.from(tables[tables.length-1].querySelectorAll('tr'));
  if (rows.length < 2) { showToast('La tabla necesita al menos 2 filas'); return; }
  const headers = Array.from(rows[0].querySelectorAll('th,td')).map(c => c.innerText.trim());
  const labels = [], data = [];
  for (let i=1; i<rows.length; i++) {
    const cells = Array.from(rows[i].querySelectorAll('td,th'));
    if (cells.length > 0) { labels.push(cells[0].innerText.trim()); const v = parseFloat(cells[1]?cells[1].innerText:0); data.push(isNaN(v)?0:v); }
  }
  const cols = ['#0084ff','#ff6b35','#27ae60','#9b59b6','#f39c12','#e74c3c','#00cec9','#fd79a8'];
  chartCount++; const id = 'tc-'+chartCount;
  const w = document.createElement('div'); w.className = 'cwrap';
  w.innerHTML = \`<button class="cdel" onclick="this.parentElement.remove()">✕</button><p style="font-size:12px;color:#666;margin-bottom:6px">📊 Gráfico desde tabla</p><canvas id="\${id}"></canvas>\`;
  document.getElementById('mediaZone').appendChild(w);
  new Chart(document.getElementById(id),{type:'bar',data:{labels,datasets:[{label:headers[1]||'Datos',data,backgroundColor:cols.slice(0,data.length),borderWidth:2,borderRadius:6}]},options:{responsive:true,plugins:{legend:{position:'bottom'}}}});
  showToast('Tabla convertida a gráfico ✅');
}

/* ── ECUACIONES ── */
const equations = [
  {q:'E = mc²',d:'Relatividad'},{q:'a² + b² = c²',d:'Pitágoras'},{q:'A = πr²',d:'Área círculo'},
  {q:'ρ = m/V',d:'Densidad'},{q:'v = d/t',d:'Velocidad'},{q:'F = m·a',d:'Newton'},
  {q:'V = I·R',d:'Ohm'},{q:'Fg = G·m₁m₂/r²',d:'Gravitación'},
  {q:'x = (-b ± √(b²-4ac)) / 2a',d:'Cuadrática'},{q:'eⁱᵖ + 1 = 0',d:'Euler'},
  {q:'Ek = ½mv²',d:'Energía cinética'},{q:'n = m/M',d:'Química'}
];
const eqg = document.getElementById('equationGrid');
equations.forEach(e => {
  const b = document.createElement('button'); b.className = 'eqbtn';
  b.innerHTML = \`<strong>\${e.q}</strong><br><span style="font-size:10px;color:#888">\${e.d}</span>\`;
  b.onclick = () => { insertHTML(\`<p style="font-family:'Courier New',monospace;font-size:16px;background:#f8f9fa;border-left:4px solid #0084ff;padding:10px 14px;border-radius:0 8px 8px 0;margin:8px 0"><strong>\${e.q}</strong> <span style="font-size:12px;color:#666">— \${e.d}</span></p>\`); closeModal('modalEquation'); showToast(\`\${e.q} ✅\`); };
  eqg.appendChild(b);
});
function insertCustomEquation() {
  const eq = document.getElementById('customEquation').value.trim();
  if (!eq) { showToast('Escribe una ecuación'); return; }
  insertHTML(\`<p style="font-family:'Courier New',monospace;font-size:16px;background:#f8f9fa;border-left:4px solid #0084ff;padding:10px 14px;border-radius:0 8px 8px 0;margin:8px 0"><strong>\${eq}</strong></p>\`);
  closeModal('modalEquation'); document.getElementById('customEquation').value = ''; showToast('Ecuación insertada ✅');
}

/* ── SÍMBOLOS ── */
const syms = ['α','β','γ','δ','ε','ζ','η','θ','λ','μ','π','ρ','σ','τ','φ','ψ','ω','Δ','Σ','Ω','∞','√','∫','∂','≈','≠','≤','≥','±','×','÷','°','©','®','™','€','£','¥','¿','¡','ñ','Ñ','á','é','í','ó','ú'];
const smg = document.getElementById('symbolGrid');
syms.forEach(s => {
  const b = document.createElement('button'); b.className = 'fabbtn'; b.style.fontSize = '18px'; b.textContent = s;
  b.onclick = () => { insertHTML(s); closeModal('modalSymbol'); showToast(\`Símbolo: \${s}\`); };
  smg.appendChild(b);
});

/* ── COLOR ── */
document.getElementById('btnApplyColor').onclick = () => {
  const c = document.getElementById('colorPicker').value;
  restoreSelection(); cmd('foreColor',c); closeModal('modalColor'); showToast('Color aplicado 🎨');
};
const palColors = ['#000','#434343','#666','#999','#ccc','#fff','#ff0000','#ff6b35','#ff9900','#ffff00','#00ff00','#00ffff','#0084ff','#0000ff','#9900ff','#ff00ff','#e06666','#f6b26b','#ffd966','#93c47d','#76a5af','#6fa8dc','#8e7cc3','#c27ba0','#cc0000','#e69138','#f1c232','#6aa84f','#45818e','#3d85c8','#674ea7','#a64d79','#ce1126','#003da5','#27ae60','#f39c12','#0084ff','#ff6b35','#9b59b6','#2ecc71'];
[document.getElementById('colorPickerPalette'),document.getElementById('colorPalette')].forEach(pal => {
  if (!pal) return;
  palColors.forEach(color => {
    const sw = document.createElement('button'); sw.className = 'csw';
    sw.style.background = color; sw.style.border = color==='#fff'?'2px solid #ddd':'2px solid transparent';
    sw.onmousedown = () => saveSelection();
    sw.onclick = () => { restoreSelection(); cmd('foreColor',color); showToast('Color aplicado 🎨'); if (pal.id==='colorPickerPalette') closeModal('modalColor'); };
    pal.appendChild(sw);
  });
});

/* ── PORTAPAPELES ── */
function addToClipboard(text,type) {
  if (!text||!text.trim()) return;
  clipboardHistory.unshift({text:text.trim().substring(0,200),type});
  if (clipboardHistory.length>20) clipboardHistory.pop();
}
function renderClipboard() {
  const list = document.getElementById('clipboardList'); list.innerHTML='';
  if (!clipboardHistory.length) { list.innerHTML='<div class="cp-empty">Portapapeles vacío.</div>'; return; }
  clipboardHistory.forEach(item => {
    const d = document.createElement('div'); d.className = 'cp-item';
    d.innerHTML = \`<span class="cpy">\${item.type}</span><span class="cpt">\${item.text}</span>\`;
    d.onclick = () => { restoreSelection(); cmd('insertText',item.text); closeModal('modalPortapapeles'); showToast('Pegado ✅'); };
    list.appendChild(d);
  });
}

/* ── FONDO ── */
const bgColors = ['#ffffff','#fff9f0','#f0f7ff','#f0fff4','#fff0f5','#f5f0ff','#fffde7','#e8f5e9','#e3f2fd','#fce4ec','#ede7f6','#e0f7fa'];
const bgg = document.getElementById('bgColorGrid');
bgColors.forEach(c => {
  const sw = document.createElement('button'); sw.className = 'bgsw';
  sw.style.background = c; sw.style.border = c==='#ffffff'?'2px solid #ddd':'2px solid transparent';
  sw.onclick = () => { document.querySelector('.content').style.background=c; editor.style.background=c; closeModal('modalBackground'); showToast('Fondo aplicado 🎨'); };
  bgg.appendChild(sw);
});

/* ── COLUMNAS ── */
function insertColumns(n) {
  let inner = '';
  for (let i=1; i<=n; i++) inner += \`<div style="border:1px dashed #ccc;padding:10px;border-radius:8px;min-height:80px">Columna \${i}</div>\`;
  insertHTML(\`<div style="display:grid;grid-template-columns:\${Array(n).fill('1fr').join(' ')};gap:12px;margin:8px 0">\${inner}</div><p></p>\`);
  closeModal('modalColumns'); showToast(\`\${n} columnas insertadas ✅\`);
}

/* ── ARCHIVOS ── */
document.getElementById('fileInputImage').addEventListener('change', function() {
  const f = this.files[0]; if (!f) return;
  const r = new FileReader();
  r.onload = e => { insertHTML(\`<p><img src="\${e.target.result}" style="max-width:100%;border-radius:8px;margin:4px 0" alt="\${f.name}"></p>\`); showToast('Imagen cargada ✅'); };
  r.readAsDataURL(f); this.value = '';
});
document.getElementById('fileInputVideo').addEventListener('change', function() {
  const f = this.files[0]; if (!f) return;
  const r = new FileReader();
  r.onload = e => { insertHTML(\`<p><video controls style="max-width:100%;border-radius:8px"><source src="\${e.target.result}" type="\${f.type}"></video></p>\`); showToast('Video cargado ✅'); };
  r.readAsDataURL(f); this.value = '';
});
document.getElementById('fileInputAny').addEventListener('change', function() {
  const f = this.files[0]; if (!f) return;
  const size = f.size<1048576?(f.size/1024).toFixed(1)+' KB':(f.size/1048576).toFixed(1)+' MB';
  const r = new FileReader();
  r.onload = e => { insertHTML(\`<div class="ablock"><span style="font-size:24px">📎</span><div style="flex:1;font-size:13px"><div style="font-weight:600;color:#0066cc">\${f.name}</div><div style="color:#999;font-size:11px">\${size}</div></div><a href="\${e.target.result}" download="\${f.name}" style="background:#0084ff;color:white;border-radius:8px;padding:6px 12px;text-decoration:none;font-size:12px;font-weight:600">Descargar</a></div>\`); showToast(\`Archivo: \${f.name} ✅\`); };
  r.readAsDataURL(f); this.value = '';
});

/* ════════════════════════════════════════════════════
   ASISTENTE IA — SIBÖ · Meta Llama 3.1 via Groq
   (Gemini eliminado completamente)
   ════════════════════════════════════════════════════ */

function toggleAI() {
  const panel = document.getElementById('aiPanel');
  panel.classList.toggle('show');
  // Mostrar estado de la key guardada
  const saved = localStorage.getItem('wc-groq-key');
  if (saved) {
    const box = document.getElementById('apiKeyBox');
    if (box && box.querySelector('#apiKeyInput')) {
      box.style.background = '#d4edda';
      box.style.borderColor = '#27ae60';
      box.innerHTML = '<div style="color:#155724;font-weight:600;font-size:13px">✅ API Key de Groq guardada · <button onclick="clearApiKey()" style="background:none;border:none;color:#721c24;cursor:pointer;font-size:12px;text-decoration:underline">Cambiar</button></div>';
    }
  }
}

function saveApiKey() {
  const key = document.getElementById('apiKeyInput').value.trim();
  if (!key || !key.startsWith('gsk_')) {
    showToast('⚠️ La key de Groq debe empezar con gsk_');
    return;
  }
  localStorage.setItem('wc-groq-key', key);
  document.getElementById('apiKeyBox').style.background = '#d4edda';
  document.getElementById('apiKeyBox').style.borderColor = '#27ae60';
  document.getElementById('apiKeyBox').innerHTML =
    '<div style="color:#155724;font-weight:600;font-size:13px">✅ API Key de Groq guardada correctamente · ' +
    '<button onclick="clearApiKey()" style="background:none;border:none;color:#721c24;cursor:pointer;font-size:12px;text-decoration:underline">Cambiar</button></div>';
  showToast('API Key guardada ✅');
}

function clearApiKey() {
  localStorage.removeItem('wc-groq-key');
  document.getElementById('apiKeyBox').style.background = '#e8f0fe';
  document.getElementById('apiKeyBox').style.borderColor = '#4285f4';
  document.getElementById('apiKeyBox').innerHTML = \`
    <div style="font-weight:600;color:#1a73e8;margin-bottom:6px">🔑 API Key de Groq (Meta Llama — gratis)</div>
    <div style="display:flex;gap:6px">
      <input type="password" id="apiKeyInput" placeholder="gsk_..."
        style="flex:1;padding:7px 10px;border:1.5px solid #ddd;border-radius:8px;font-size:13px;outline:none;">
      <button onclick="saveApiKey()" style="background:#4285f4;color:#fff;border:none;border-radius:8px;padding:7px 12px;cursor:pointer;font-size:12px;font-weight:600">Guardar</button>
    </div>
    <div style="color:#888;font-size:10px;margin-top:5px">
      Gratis en <a href="https://console.groq.com/keys" target="_blank" style="color:#4285f4">console.groq.com</a> · Se guarda solo en tu dispositivo
    </div>\`;
}

async function sendAI() {
  const inp = document.getElementById('aiInp');
  const msg = inp.value.trim();
  if (!msg) return;
  inp.value = '';

  const key = localStorage.getItem('wc-groq-key');
  if (!key) {
    addAIMsg('bot', '⚠️ Mae, primero ingresá tu API Key de Groq arriba y dale Guardar.');
    return;
  }

  addAIMsg('user', msg);
  const td = addAIMsg('bot', '🦙 Sibö está pensando... pura vida mae');
  const ctx = editor.innerText.substring(0, 1200);

  try {
    const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + key,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: [
          {
            role: 'system',
            content: 'Sos Sibö, asistente tico de WC Corporate Editor. ' +
              'Hablás con modismos de Costa Rica (mae, pura vida, tuanis) ' +
              'pero mantenés utilidad profesional y académica. ' +
              'Ayudás a redactar, corregir y mejorar documentos. ' +
              'Para texto largo usá HTML con h2, h3, p, ul, li. ' +
              'Nivel universitario. Respondés siempre en español.'
          },
          {
            role: 'user',
            content: 'Documento actual del editor:\\n"' + ctx + '"\\n\\nSolicitud: ' + msg
          }
        ],
        temperature: 0.7,
        max_tokens: 800
      })
    });

    const data = await res.json();
    td.remove();

    if (data.error) {
      addAIMsg('bot', '⚠️ Error Groq: ' + data.error.message);
      return;
    }

    const reply = data?.choices?.[0]?.message?.content || 'Sin respuesta mae.';
    addAIMsg('bot', reply);

    // Botones de acción
    const btns = document.createElement('div');
    btns.style.cssText = 'display:flex;gap:6px;flex-wrap:wrap;margin-top:4px;';

    const b1 = document.createElement('button');
    b1.className = 'ai-quick-btn';
    b1.textContent = '📋 Insertar en documento';
    b1.onclick = () => {
      insertHTML(reply.includes('<') ? reply : '<p>'+reply.replace(/\\n/g,'</p><p>')+'</p>');
      showToast('Insertado ✅');
    };

    const b2 = document.createElement('button');
    b2.className = 'ai-quick-btn';
    b2.textContent = '📄 Documento nuevo';
    b2.onclick = () => openDocWindow(
      reply.includes('<') ? reply : '<p>'+reply.replace(/\\n/g,'</p><p>')+'</p>',
      'Documento Sibö'
    );

    const b3 = document.createElement('button');
    b3.className = 'ai-quick-btn';
    b3.textContent = '📎 Agregar al final';
    b3.onclick = () => {
      editor.innerHTML += reply.includes('<') ? reply : '<p>'+reply.replace(/\\n/g,'</p><p>')+'</p>';
      updateStats(); showToast('Agregado ✅');
    };

    const b4 = document.createElement('button');
    b4.className = 'ai-quick-btn';
    b4.textContent = '🔄 Regenerar';
    b4.onclick = () => { document.getElementById('aiInp').value = msg; sendAI(); };

    btns.appendChild(b1); btns.appendChild(b2); btns.appendChild(b3); btns.appendChild(b4);
    document.getElementById('aiMsgs').appendChild(btns);

  } catch(e) {
    td.remove();
    addAIMsg('bot', '⚠️ Error de conexión: ' + e.message);
  }
  document.getElementById('aiMsgs').scrollTop = 99999;
}

function addAIMsg(type, text, isTemp=false) {
  const msgs = document.getElementById('aiMsgs');
  const d = document.createElement('div');
  d.className = type==='user' ? 'aiu' : 'aib';
  if (type==='bot' && text.includes('<')) d.innerHTML = text;
  else d.textContent = text;
  msgs.appendChild(d);
  msgs.scrollTop = 99999;
  return d;
}

function aiQuick(tipo) {
  const ctx = editor.innerText.substring(0, 800);
  const prompts = {
    resumen: 'Escribe un resumen académico profesional del siguiente contenido, con estructura clara y nivel universitario: '+(ctx||'Escribe sobre un tema de mi elección'),
    ensayo: 'Escribe un ensayo académico completo de nivel universitario con: introducción con tesis clara, 3 párrafos de desarrollo con argumentos sólidos y citas APA, y conclusión. Usa HTML con etiquetas h2, h3 y p. Tema: '+(ctx||(prompt('¿Sobre qué tema quieres el ensayo?')||'Educación en Costa Rica')),
    introduccion: 'Escribe una introducción académica universitaria para el siguiente texto, con planteamiento del problema, justificación y tesis: '+(ctx||'texto del documento'),
    conclusion: 'Escribe una conclusión académica universitaria para el siguiente texto, resumiendo los puntos clave y proyecciones futuras: '+(ctx||'texto del documento'),
    mejorar: 'Mejora el siguiente texto a nivel universitario, corrigiendo gramática, estilo y cohesión sin cambiar el contenido esencial: '+(ctx||'selecciona texto en el editor primero'),
    traducir: 'Traduce al inglés de forma profesional y académica el siguiente texto: '+(ctx||'texto del documento'),
    nuevo: (()=>{ const tema=prompt('¿Sobre qué tema quieres el documento?'); return tema?\`Crea un documento académico completo sobre: \${tema}. Incluye titulo, introduccion, desarrollo con subtitulos, conclusion y referencias en formato APA. Usa HTML con h1, h2, h3, p, ul. Nivel universitario.\`:null; })(),
    citas: 'Agrega citas académicas en formato APA 7ma edición al siguiente texto, buscando fuentes relevantes y reales: '+(ctx||'texto del documento'),
    sentimiento: 'Analiza el tono y sentimiento del siguiente texto. Indica si es positivo, negativo, neutral, formal, informal o urgente, y explica brevemente por qué: '+(ctx||'selecciona texto en el editor primero'),
    originalidad: 'Evalúa qué tan original y bien fundamentado parece el siguiente texto, sin acusar de plagio directamente, solo dando una valoración cualitativa y sugerencias para mejorar la originalidad: '+(ctx||'texto del documento'),
    preguntas: 'Genera 5 preguntas de comprensión o estudio basadas en el siguiente texto, de nivel universitario: '+(ctx||'texto del documento'),
    factcheck: 'Revisa el siguiente texto y señala si contiene afirmaciones que parezcan dudosas, exageradas o que requieran verificación adicional, explicando por qué: '+(ctx||'texto del documento'),
    correccionCR: 'Corrige y mejora el siguiente texto como redacción formal de Costa Rica (oficio, carta, informe o documento legal), ajustando ortografía, gramática, formalidad y estructura típica de documentos costarricenses, sin cambiar el sentido del contenido: '+(ctx||'selecciona texto en el editor primero'),
    discurso: (()=>{ const tema=prompt('¿Sobre qué tema o motivo es el discurso? (ej: graduación, inauguración, homenaje)'); return tema?\`Escribe un discurso formal y emotivo en español sobre: \${tema}. Debe tener una apertura que capte atención, desarrollo con 2-3 ideas centrales, y un cierre memorable. Tono cálido pero profesional, estilo costarricense. Extensión moderada (entre 250 y 400 palabras).\`:null; })(),
    reciboTimbre: 'Genera un modelo de recibo de timbre fiscal de Costa Rica en formato de documento, con espacios para: nombre del emisor, nombre del receptor, monto en colones, concepto del pago, número de timbre fiscal, fecha y firma. Usa HTML con tabla y estructura formal típica costarricense.',
    contratoHoras: 'Genera un modelo de contrato de trabajo por horas conforme a la legislación laboral de Costa Rica, con cláusulas para: identificación de las partes, objeto del contrato, tarifa por hora en colones, horario, duración, obligaciones de ambas partes, y firma. Usa HTML con encabezados y estructura legal formal costarricense.',
    denunciaLaboral: 'Genera un modelo de denuncia laboral ante el Ministerio de Trabajo y Seguridad Social (MTSS) de Costa Rica, con espacios para: datos del denunciante, datos del patrono denunciado, hechos denunciados, fundamento legal aplicable, y petitoria. Usa HTML con estructura formal de documento legal costarricense.',
    facturaElectronica: 'Genera un modelo de factura electrónica de Costa Rica en formato de documento de texto (no XML real), siguiendo la estructura del esquema v4.3 de Hacienda: datos del emisor (nombre, cédula jurídica, domicilio fiscal), datos del receptor, número de consecutivo, fecha de emisión, detalle de bienes/servicios con cantidad, precio unitario, IVA y total, y condición de venta. Usa HTML con tabla. Aclara al inicio que es un modelo de referencia y no sustituye la factura electrónica oficial generada por un sistema certificado ante Hacienda.',
    contratoArrendamiento: 'Genera un modelo de contrato de arrendamiento de Costa Rica conforme a la Ley N° 7527 (Ley General de Arrendamientos Urbanos y Suburbanos), con cláusulas para: identificación de arrendador y arrendatario, descripción del inmueble, monto de renta en colones, plazo, depósito de garantía, obligaciones de las partes, y firma. Usa HTML con estructura legal formal costarricense.',
    estatutosSA: 'Genera un modelo de estatutos de Sociedad Anónima conforme al Código de Comercio de Costa Rica, con cláusulas para: denominación social, domicilio, objeto social, capital social y acciones, órganos de administración (junta directiva, fiscalía), duración, y disposiciones generales. Usa HTML con estructura legal formal costarricense tipo escritura.',
    licitacionPublica: 'Genera un modelo de cartel de licitación pública de Costa Rica conforme a la Ley N° 7494 (Contratación Administrativa) y el sistema SICOP, con secciones para: objeto de la contratación, especificaciones técnicas, requisitos de admisibilidad, criterios de evaluación, plazo de entrega, y condiciones generales. Usa HTML con estructura formal de documento administrativo costarricense.',
    actaReunion: 'Genera un modelo de acta de reunión de Costa Rica, con secciones para: fecha y hora, lugar, lista de asistentes, orden del día, desarrollo de los temas tratados, acuerdos adoptados, y espacio de firmas. Usa HTML con estructura formal de acta corporativa costarricense.',
    cartaPoder: 'Genera un modelo de carta poder notarial de Costa Rica, con espacios para: datos del otorgante, datos del apoderado, facultades otorgadas, vigencia, y espacio para firma y notas notariales. Usa HTML con estructura formal legal costarricense.',
    declaracionJurada: 'Genera un modelo de declaración jurada de Costa Rica, con espacios para: datos del declarante (nombre, cédula), objeto de la declaración, texto de los hechos declarados bajo juramento, advertencia de responsabilidad por falsedad, fecha y firma. Usa HTML con estructura formal legal costarricense.',
    ndaContract: 'Genera un modelo de contrato de confidencialidad (NDA) de Costa Rica, con cláusulas para: identificación de las partes, definición de información confidencial, obligaciones de confidencialidad, duración, excepciones, penalidades por incumplimiento, y firma. Usa HTML con estructura legal formal costarricense.',
    correosInst: 'Genera un modelo de correo institucional formal de Costa Rica, con encabezado de saludo protocolario, cuerpo claro y conciso, y despedida formal apropiada para comunicación entre instituciones o empresas costarricenses. Usa HTML con párrafos bien estructurados.',
    cvGenerator: 'Genera un modelo de currículum vitae profesional adaptado al formato costarricense, con secciones para: datos personales, perfil profesional, experiencia laboral, educación, habilidades, e idiomas. Usa HTML con encabezados claros y estructura profesional.',
    budgetGen: 'Genera un modelo de presupuesto comercial de Costa Rica en formato de documento, con secciones para: datos de la empresa, datos del cliente, detalle de productos o servicios con cantidad, precio unitario, subtotal, IVA y total en colones, condiciones de pago, y vigencia de la oferta. Usa HTML con tabla.',
    hashtagSEO: 'Genera 15 hashtags relevantes y optimizados para SEO en redes sociales (Instagram, LinkedIn y TikTok) sobre el siguiente contenido o tema, agrupados por plataforma: '+(ctx||'pregúntame sobre qué tema quieres los hashtags'),
    contractAI: 'Genera un modelo de contrato general adaptado a la legislación de Costa Rica para el siguiente propósito o contexto, con cláusulas de identificación de partes, objeto, obligaciones, plazo, y firma: '+(ctx||'describe en el editor para qué tipo de contrato necesitas ayuda, o indícamelo aquí en el chat'),
    autocompletar: 'Continúa el siguiente texto de forma natural y coherente con el mismo estilo y tono, escribiendo solo 2-3 frases más de continuación (no repitas el texto original, solo la continuación): '+(ctx||'escribe algo en el editor primero para que pueda continuar tu idea'),
    ortografia: 'Revisa la ortografía y gramática del siguiente texto en español y devuelve el texto corregido completo, manteniendo el mismo contenido y sentido, solo corrigiendo errores: '+(ctx||'selecciona o escribe texto en el editor primero'),
    oficiosDGT: 'Genera un modelo de oficio formal dirigido a la Dirección General de Tributación (DGT) o al Ministerio de Hacienda de Costa Rica, con estructura protocolaria: encabezado con fecha y destinatario, asunto, cuerpo del oficio explicando la solicitud o gestión tributaria, y despedida formal con espacio de firma. Usa HTML con estructura formal de documento administrativo costarricense.',
  };
  const p = prompts[tipo];
  if (!p) return;
  document.getElementById('aiInp').value = p;
  sendAI();
}

/* ── FAB HERRAMIENTAS ── */
function buildFabPanel() {
  if (fabBuilt) return; fabBuilt = true;
  const fonts = [{n:'Arial',f:'Arial,sans-serif'},{n:'Times New Roman',f:"'Times New Roman',serif"},{n:'Georgia',f:'Georgia,serif'},{n:'Verdana',f:'Verdana,sans-serif'},{n:'Courier New',f:"'Courier New',monospace"},{n:'Trebuchet MS',f:"'Trebuchet MS',sans-serif"},{n:'Impact',f:'Impact,sans-serif'},{n:'Palatino',f:'Palatino,serif'},{n:'Garamond',f:'Garamond,serif'},{n:'Comic Sans MS',f:"'Comic Sans MS',cursive"},{n:'Tahoma',f:'Tahoma,sans-serif'},{n:'Lucida Console',f:"'Lucida Console',monospace"}];
  const sizes = [{l:'8pt',v:'1'},{l:'10pt',v:'2'},{l:'12pt',v:'3'},{l:'14pt',v:'4'},{l:'18pt',v:'5'},{l:'24pt',v:'6'},{l:'36pt',v:'7'}];
  const fl = document.getElementById('fabFontList');
  fonts.forEach(f => { const b=document.createElement('button'); b.className='fbtn'; b.style.fontFamily=f.f; b.textContent=\`\${f.n} — El texto de muestra\`; b.onmousedown=()=>saveSelection(); b.onclick=()=>{restoreSelection();cmd('fontName',f.n);showToast(\`Fuente: \${f.n} ✅\`);}; fl.appendChild(b); });
  const sl = document.getElementById('fabSizeList');
  sizes.forEach(s => { const b=document.createElement('button'); b.className='fabbtn'; b.textContent=s.l; b.onmousedown=()=>saveSelection(); b.onclick=()=>{restoreSelection();cmd('fontSize',s.v);showToast(\`Tamaño: \${s.l} ✅\`);}; sl.appendChild(b); });
  buildWcArteGrids();
  const ffg = document.getElementById('fontFamilyGrid');
  if (ffg && !ffg.children.length) { fonts.forEach(f => { const b=document.createElement('button'); b.className='fbtn'; b.style.fontFamily=f.f; b.textContent=\`\${f.n} — El texto de muestra\`; b.onmousedown=()=>saveSelection(); b.onclick=()=>{restoreSelection();cmd('fontName',f.n);closeModal('modalFontFamily');showToast(\`Fuente: \${f.n} ✅\`);}; ffg.appendChild(b); }); }
}

function toggleFab() {
  const p = document.getElementById('fabPanel');
  const c = document.getElementById('communityPanel');
  c.classList.remove('show');
  if (!p.classList.contains('show')) { buildFabPanel(); p.classList.add('show'); } else p.classList.remove('show');
}

document.addEventListener('click', e => {
  const fab  = document.getElementById('fabPanel');
  const com  = document.getElementById('communityPanel');
  const fabB = document.getElementById('fabBtn');
  const comB = document.getElementById('communityBtn');
  if (fab && !fab.contains(e.target) && !fabB.contains(e.target)) fab.classList.remove('show');
  if (com && !com.contains(e.target) && !comB.contains(e.target)) com.classList.remove('show');
});

/* ── MENÚS ── */
document.querySelectorAll('.menu-btn').forEach(btn => {
  btn.addEventListener('click', e => {
    e.stopPropagation();
    const id = 'menu-'+btn.dataset.menu;
    const dd = document.getElementById(id);
    if(dd.classList.contains('show')){ closeAllSheets(); }
    else { openSheet(dd); }
  });
});

document.querySelectorAll('.dropdown').forEach(dd => {
  dd.addEventListener('mousedown', e => { const item=e.target.closest('[data-action]'); if (item) saveSelection(); });
  dd.addEventListener('click', e => {
    e.stopPropagation();
    const item = e.target.closest('[data-action]');
    if (!item) return;
    closeAllSheets();
    handleAction(item.dataset.action);
  });
});

/* ── HANDLEACTION ── */
function showReadingTime() {
  const words = editor.innerText.trim().split(/\\s+/).filter(w => w.length > 0).length;
  const minutes = Math.max(1, Math.round(words / 200));
  showToast(\`⏱️ Tiempo estimado de lectura: \${minutes} min (\${words} palabras)\`);
}

var ivaTasaActual = 13;
var ivaUltimoResultado = null;

function selectIvaTasa(tasa, btn) {
  ivaTasaActual = tasa;
  document.querySelectorAll('.iva-tasa').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('ivaResultado').style.display = 'none';
  document.getElementById('ivaInsertarBtn').style.display = 'none';
}

function formatoColones(n) {
  return '₡' + n.toLocaleString('es-CR', {minimumFractionDigits: 2, maximumFractionDigits: 2});
}

function calcularIVA() {
  const montoInput = document.getElementById('ivaMonto');
  const monto = parseFloat(montoInput.value);
  if (isNaN(monto) || monto <= 0) { showToast('Ingresa un monto válido'); return; }
  const ivaMonto = monto * (ivaTasaActual / 100);
  const total = monto + ivaMonto;
  document.getElementById('ivaSubtotalOut').textContent = formatoColones(monto);
  document.getElementById('ivaTasaLabel').textContent = \`IVA (\${ivaTasaActual}%):\`;
  document.getElementById('ivaMontoOut').textContent = formatoColones(ivaMonto);
  document.getElementById('ivaTotalOut').textContent = formatoColones(total);
  document.getElementById('ivaResultado').style.display = 'block';
  document.getElementById('ivaInsertarBtn').style.display = 'inline-block';
  ivaUltimoResultado = { monto, tasa: ivaTasaActual, ivaMonto, total };
}

function insertarIVAEnDocumento() {
  if (!ivaUltimoResultado) return;
  const r = ivaUltimoResultado;
  const html = \`<table style="border-collapse:collapse;width:100%;margin:10px 0;font-size:13px"><tr style="background:#0084ff;color:#fff"><th style="padding:8px;text-align:left">Cálculo de IVA Costa Rica</th><th style="padding:8px;text-align:right">Monto</th></tr><tr><td style="border:1px solid #ddd;padding:8px">Subtotal</td><td style="border:1px solid #ddd;padding:8px;text-align:right">\${formatoColones(r.monto)}</td></tr><tr><td style="border:1px solid #ddd;padding:8px">IVA (\${r.tasa}%)</td><td style="border:1px solid #ddd;padding:8px;text-align:right">\${formatoColones(r.ivaMonto)}</td></tr><tr style="font-weight:700;background:#f0f7ff"><td style="border:1px solid #ddd;padding:8px">Total</td><td style="border:1px solid #ddd;padding:8px;text-align:right">\${formatoColones(r.total)}</td></tr></table>\`;
  insertHTML(html);
  closeModal('modalIVA');
  showToast('Cálculo de IVA insertado ✅');
}

var apaTipoActual = 'libro';
var apaUltimaReferencia = '';

function selectApaTipo(tipo, btn) {
  apaTipoActual = tipo;
  document.querySelectorAll('.apa-tipo').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('apaResultado').style.display = 'none';
  document.getElementById('apaInsertarBtn').style.display = 'none';
  const urlField = document.getElementById('apaUrl');
  urlField.style.display = (tipo === 'web') ? 'block' : 'none';
  const extraField = document.getElementById('apaExtra');
  if (tipo === 'libro') extraField.placeholder = 'Editorial';
  else if (tipo === 'articulo') extraField.placeholder = 'Revista, volumen(número), páginas';
  else if (tipo === 'web') extraField.placeholder = 'Nombre del sitio web';
  else if (tipo === 'tesis') extraField.placeholder = 'Universidad';
}

function generarReferenciaAPA() {
  const autor = document.getElementById('apaAutor').value.trim();
  const anio = document.getElementById('apaAnio').value.trim();
  const titulo = document.getElementById('apaTitulo').value.trim();
  const extra = document.getElementById('apaExtra').value.trim();
  const url = document.getElementById('apaUrl').value.trim();
  if (!autor || !anio || !titulo) { showToast('Completa autor, año y título'); return; }
  let ref = '';
  if (apaTipoActual === 'libro') {
    ref = \`\${autor} (\${anio}). <em>\${titulo}</em>. \${extra || 'Editorial'}.\`;
  } else if (apaTipoActual === 'articulo') {
    ref = \`\${autor} (\${anio}). \${titulo}. <em>\${extra || 'Nombre de la revista'}</em>.\`;
  } else if (apaTipoActual === 'web') {
    ref = \`\${autor} (\${anio}). <em>\${titulo}</em>. \${extra || 'Nombre del sitio'}. \${url || 'https://'}\`;
  } else if (apaTipoActual === 'tesis') {
    ref = \`\${autor} (\${anio}). <em>\${titulo}</em> [Tesis, \${extra || 'Universidad'}].\`;
  }
  document.getElementById('apaResultado').innerHTML = ref;
  document.getElementById('apaResultado').style.display = 'block';
  document.getElementById('apaInsertarBtn').style.display = 'inline-block';
  apaUltimaReferencia = ref;
}

function insertarReferenciaAPA() {
  if (!apaUltimaReferencia) return;
  insertHTML(\`<p style="font-size:11pt;line-height:1.5;text-indent:-1.27cm;margin-left:1.27cm">\${apaUltimaReferencia}</p>\`);
  closeModal('modalAPA');
  showToast('Referencia APA insertada ✅');
}

var imgIaUltimaUrl = '';

function generarImagenIA() {
  const prompt = document.getElementById('imgIaPrompt').value.trim();
  if (!prompt) { showToast('Describe la imagen primero'); return; }
  document.getElementById('imgIaPreviewWrap').style.display = 'none';
  document.getElementById('imgIaInsertarBtn').style.display = 'none';
  document.getElementById('imgIaLoading').style.display = 'block';
  const encoded = encodeURIComponent(prompt);
  const seed = Math.floor(Math.random() * 100000);
  const url = \`https://image.pollinations.ai/prompt/\${encoded}?width=768&height=768&seed=\${seed}&nologo=true\`;
  const img = document.getElementById('imgIaPreview');
  img.onload = function() {
    document.getElementById('imgIaLoading').style.display = 'none';
    document.getElementById('imgIaPreviewWrap').style.display = 'block';
    document.getElementById('imgIaInsertarBtn').style.display = 'inline-block';
    imgIaUltimaUrl = url;
  };
  img.onerror = function() {
    document.getElementById('imgIaLoading').style.display = 'none';
    showToast('Error generando la imagen, intenta de nuevo');
  };
  img.src = url;
}

function insertarImagenIA() {
  if (!imgIaUltimaUrl) return;
  insertHTML(\`<p style="text-align:center"><img src="\${imgIaUltimaUrl}" style="max-width:100%;border-radius:8px;margin:8px 0"></p>\`);
  closeModal('modalImagenIA');
  showToast('Imagen insertada ✅');
}

var liqMotivoActual = 'injustificado';
var liqUltimoResultado = null;

function selectLiqMotivo(motivo, btn) {
  liqMotivoActual = motivo;
  document.querySelectorAll('.liq-motivo').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('liqResultado').style.display = 'none';
  document.getElementById('liqInsertarBtn').style.display = 'none';
}

function diasPreavisoCR(anios) {
  if (anios < (3/12)) return 0;
  if (anios < 0.5) return 1;
  if (anios < 1) return 15;
  return 30;
}

function diasCesantiaCR(anios) {
  if (anios < (3/12)) return 0;
  if (anios < 1) return 7;
  const tablaPorAnio = [19.5,20,20.5,21,21.25,21.5,22,22.25,22.5,22.75,23];
  let total = 0;
  const aniosCompletos = Math.min(Math.floor(anios), 8);
  for (let i = 0; i < aniosCompletos; i++) {
    total += tablaPorAnio[Math.min(i, tablaPorAnio.length-1)];
  }
  const fraccion = anios - Math.floor(anios);
  if (Math.floor(anios) < 8 && fraccion > 0) {
    total += tablaPorAnio[Math.min(Math.floor(anios), tablaPorAnio.length-1)] * fraccion;
  }
  return total;
}

function calcularLiquidacion() {
  const salario = parseFloat(document.getElementById('liqSalario').value);
  const fIngresoStr = document.getElementById('liqFechaIngreso').value;
  const fSalidaStr = document.getElementById('liqFechaSalida').value;
  if (isNaN(salario) || salario <= 0) { showToast('Ingresa un salario válido'); return; }
  if (!fIngresoStr || !fSalidaStr) { showToast('Ingresa ambas fechas'); return; }
  const fIngreso = new Date(fIngresoStr);
  const fSalida = new Date(fSalidaStr);
  if (fSalida <= fIngreso) { showToast('La fecha de salida debe ser posterior al ingreso'); return; }

  const msPorDia = 1000*60*60*24;
  const diasTotales = (fSalida - fIngreso) / msPorDia;
  const anios = diasTotales / 365.25;
  const salarioDiario = salario / 30;

  let diasPreaviso = 0, diasCesantia = 0;
  if (liqMotivoActual === 'injustificado') {
    diasPreaviso = diasPreavisoCR(anios);
    diasCesantia = diasCesantiaCR(anios);
  } else if (liqMotivoActual === 'justificado') {
    diasPreaviso = 0;
    diasCesantia = 0;
  } else if (liqMotivoActual === 'renuncia') {
    diasPreaviso = 0;
    diasCesantia = 0;
  }

  const montoPreaviso = salarioDiario * diasPreaviso;
  const montoCesantia = salarioDiario * diasCesantia;

  const mesesTrabajados = diasTotales / 30;
  const diasVacacionesProporcional = mesesTrabajados * (12/12);
  const montoVacaciones = salarioDiario * Math.min(diasVacacionesProporcional, mesesTrabajados);
  const vacacionesFinal = salarioDiario * (mesesTrabajados * 1);

  const total = montoPreaviso + montoCesantia + vacacionesFinal;

  liqUltimoResultado = {
    salario, fIngresoStr, fSalidaStr, anios, motivo: liqMotivoActual,
    diasPreaviso, montoPreaviso, diasCesantia, montoCesantia,
    diasVacaciones: mesesTrabajados, montoVacaciones: vacacionesFinal, total
  };

  let html = \`<div style="display:flex;justify-content:space-between;margin-bottom:4px"><span>Tiempo laborado:</span><strong>\${anios.toFixed(2)} años</strong></div>\`;
  html += \`<div style="display:flex;justify-content:space-between;margin-bottom:4px"><span>Preaviso (\${diasPreaviso} días):</span><strong>\${formatoColones(montoPreaviso)}</strong></div>\`;
  html += \`<div style="display:flex;justify-content:space-between;margin-bottom:4px"><span>Cesantía (\${diasCesantia.toFixed(1)} días):</span><strong>\${formatoColones(montoCesantia)}</strong></div>\`;
  html += \`<div style="display:flex;justify-content:space-between;margin-bottom:4px"><span>Vacaciones proporcionales:</span><strong>\${formatoColones(vacacionesFinal)}</strong></div>\`;
  html += \`<div style="display:flex;justify-content:space-between;border-top:1px solid #cfe2ff;padding-top:6px;margin-top:4px"><span style="font-weight:700">Total estimado:</span><strong style="color:#0084ff">\${formatoColones(total)}</strong></div>\`;
  if (liqMotivoActual !== 'injustificado') {
    html += \`<div style="margin-top:8px;font-size:11px;color:#999">* En despido con causa justificada o renuncia voluntaria, no proceden preaviso ni cesantía según el Código de Trabajo. Solo se reconocen vacaciones proporcionales pendientes.</div>\`;
  }

  document.getElementById('liqResultado').innerHTML = html;
  document.getElementById('liqResultado').style.display = 'block';
  document.getElementById('liqInsertarBtn').style.display = 'inline-block';
}

function insertarLiquidacion() {
  if (!liqUltimoResultado) return;
  const r = liqUltimoResultado;
  const motivoLabel = r.motivo === 'injustificado' ? 'Despido sin causa justificada' : (r.motivo === 'justificado' ? 'Despido con causa justificada' : 'Renuncia voluntaria');
  const html = \`<h2 style="text-align:center;color:#1a2942">LIQUIDACIÓN LABORAL — COSTA RICA</h2>
<p><strong>Salario mensual:</strong> \${formatoColones(r.salario)}</p>
<p><strong>Fecha de ingreso:</strong> \${r.fIngresoStr}</p>
<p><strong>Fecha de salida:</strong> \${r.fSalidaStr}</p>
<p><strong>Tiempo laborado:</strong> \${r.anios.toFixed(2)} años</p>
<p><strong>Motivo del cese:</strong> \${motivoLabel}</p>
<table style="border-collapse:collapse;width:100%;margin:14px 0;font-size:13px"><tr style="background:#0084ff;color:#fff"><th style="padding:8px;text-align:left">Concepto</th><th style="padding:8px;text-align:right">Monto</th></tr>
<tr><td style="border:1px solid #ddd;padding:8px">Preaviso (\${r.diasPreaviso} días)</td><td style="border:1px solid #ddd;padding:8px;text-align:right">\${formatoColones(r.montoPreaviso)}</td></tr>
<tr><td style="border:1px solid #ddd;padding:8px">Cesantía (\${r.diasCesantia.toFixed(1)} días)</td><td style="border:1px solid #ddd;padding:8px;text-align:right">\${formatoColones(r.montoCesantia)}</td></tr>
<tr><td style="border:1px solid #ddd;padding:8px">Vacaciones proporcionales</td><td style="border:1px solid #ddd;padding:8px;text-align:right">\${formatoColones(r.montoVacaciones)}</td></tr>
<tr style="font-weight:700;background:#f0f7ff"><td style="border:1px solid #ddd;padding:8px">TOTAL</td><td style="border:1px solid #ddd;padding:8px;text-align:right">\${formatoColones(r.total)}</td></tr></table>
<p style="font-size:11px;color:#999">Cálculo de referencia conforme al Código de Trabajo de Costa Rica (artículo 28-29). No constituye asesoría legal; se recomienda validar con un profesional en derecho laboral antes de formalizar el pago.</p>\`;
  insertHTML(html);
  closeModal('modalLiquidacion');
  showToast('Liquidación insertada ✅');
}

var emailTonoActual = 'formal';

function selectEmailTono(tono, btn) {
  emailTonoActual = tono;
  document.querySelectorAll('.email-tono').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

async function generarRespuestaCorreo() {
  const recibido = document.getElementById('emailRecibido').value.trim();
  const intencion = document.getElementById('emailIntencion').value.trim();
  if (!recibido) { showToast('Describe o pega el correo recibido'); return; }

  const key = localStorage.getItem('wc-groq-key');
  if (!key) {
    showToast('⚠️ Configura tu API Key de Groq en Sibö IA primero');
    toggleAI();
    return;
  }

  const tonoLabels = { formal: 'formal y profesional', cordial: 'cordial y cercano pero profesional', firme: 'firme y directo sin ser grosero', disculpa: 'de disculpa, empático y conciliador' };
  const prompt = \`Escribe una respuesta de correo electrónico en español, tono \${tonoLabels[emailTonoActual]}, en formato de carta formal con saludo inicial y despedida cordial. Correo recibido o contexto: "\${recibido}". \${intencion ? 'Lo que se quiere lograr o responder: '+intencion+'.' : ''} No incluyas asunto, solo el cuerpo de la carta con saludo y firma genérica al final como "[Tu nombre]".\`;

  closeModal('modalEmailAsistente');
  showToast('🦙 Sibö está redactando tu correo...');

  try {
    const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: { 'Authorization': 'Bearer ' + key, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: [
          { role: 'system', content: 'Sos un asistente experto en redacción de correos formales en español de Costa Rica. Respondes solo con el cuerpo de la carta, sin explicaciones adicionales, sin markdown, en párrafos separados por saltos de línea dobles.' },
          { role: 'user', content: prompt }
        ],
        temperature: 0.7,
        max_tokens: 600
      })
    });
    const data = await res.json();
    if (data.error) { showToast('⚠️ Error: ' + data.error.message); return; }
    const reply = data?.choices?.[0]?.message?.content || '';
    if (!reply) { showToast('Sin respuesta de Sibö'); return; }

    const parrafos = reply.split(/\\n\\s*\\n/).filter(p => p.trim()).map(p => \`<p style="margin:0 0 16pt 0">\${p.trim().replace(/\\n/g,'<br>')}</p>\`).join('');
    const cartaHTML = \`<div style="font-family:Georgia,'Times New Roman',serif;font-size:12pt;line-height:1.8;max-width:16cm;margin:24px auto;padding:1.5cm 0">\${parrafos}</div>\`;
    insertHTML(cartaHTML);
    showToast('Respuesta insertada con estilo carta ✅');
  } catch(e) {
    showToast('⚠️ Error de conexión: ' + e.message);
  }
}

var qrUltimaUrl = '';

function generarQR() {
  const texto = document.getElementById('qrTexto').value.trim();
  if (!texto) { showToast('Escribe el texto o URL primero'); return; }
  const encoded = encodeURIComponent(texto);
  const url = \`https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=\${encoded}\`;
  document.getElementById('qrPreview').src = url;
  document.getElementById('qrPreviewWrap').style.display = 'block';
  document.getElementById('qrInsertarBtn').style.display = 'inline-block';
  qrUltimaUrl = url;
}

function insertarQR() {
  if (!qrUltimaUrl) return;
  insertHTML(\`<p style="text-align:center"><img src="\${qrUltimaUrl}" style="border-radius:6px;margin:8px 0" alt="Código QR"></p>\`);
  closeModal('modalQR');
  showToast('Código QR insertado ✅');
}

function generarOrgChart() {
  const texto = document.getElementById('orgTexto').value.trim();
  if (!texto) { showToast('Escribe la estructura primero'); return; }
  const lineas = texto.split('\\n').filter(l => l.trim());
  let html = '<div style="margin:16px 0">';
  lineas.forEach(linea => {
    const nivel = (linea.match(/^-+/) || [''])[0].length;
    const texto2 = linea.replace(/^-+\\s*/, '').trim();
    const indent = nivel * 28;
    const colores = ['#0084ff','#27ae60','#f39c12','#9b59b6'];
    const color = colores[Math.min(nivel, colores.length-1)];
    html += \`<div style="margin-left:\${indent}px;margin-bottom:6px;display:flex;align-items:center;gap:8px">\`;
    if (nivel > 0) html += \`<span style="color:#ccc">└</span>\`;
    html += \`<div style="background:\${color};color:#fff;padding:8px 14px;border-radius:8px;font-size:13px;font-weight:600;display:inline-block">\${texto2}</div></div>\`;
  });
  html += '</div>';
  insertHTML(html);
  closeModal('modalOrgChart');
  showToast('Organigrama insertado ✅');
}

var rentaUltimoResultado = null;

function calcularImpuestoSalario(salarioBruto) {
  const tramos = [
    {hasta: 918000, tasa: 0},
    {hasta: 1347000, tasa: 0.10},
    {hasta: 2364000, tasa: 0.15},
    {hasta: 4727000, tasa: 0.20},
    {hasta: Infinity, tasa: 0.25}
  ];
  let impuesto = 0;
  let anterior = 0;
  for (const t of tramos) {
    if (salarioBruto > anterior) {
      const base = Math.min(salarioBruto, t.hasta) - anterior;
      impuesto += base * t.tasa;
      anterior = t.hasta;
    } else break;
  }
  return impuesto;
}

function calcularRentaCCSS() {
  const salario = parseFloat(document.getElementById('rentaSalario').value);
  if (isNaN(salario) || salario <= 0) { showToast('Ingresa un salario válido'); return; }
  const hijos = parseInt(document.getElementById('rentaHijos').value) || 0;
  const conyuge = document.getElementById('rentaConyuge').checked;

  const ccssObrero = salario * 0.1083;
  const ccssSEM = salario * 0.055;
  const ccssIVM = salario * 0.0433;
  const ccssBP = salario * 0.01;

  const ccssPatronal = salario * 0.2683;

  let impuestoBruto = calcularImpuestoSalario(salario);
  const creditoHijos = hijos * 1710;
  const creditoConyuge = conyuge ? 2590 : 0;
  const totalCreditos = creditoHijos + creditoConyuge;
  const impuestoNeto = Math.max(0, impuestoBruto - totalCreditos);

  const salarioNeto = salario - ccssObrero - impuestoNeto;
  const costoPatronal = salario + ccssPatronal;

  rentaUltimoResultado = { salario, ccssObrero, ccssSEM, ccssIVM, ccssBP, ccssPatronal, impuestoBruto, totalCreditos, impuestoNeto, salarioNeto, costoPatronal, hijos, conyuge };

  let html = \`<div style="font-weight:700;color:#0084ff;margin-bottom:8px">💼 Deducciones del trabajador</div>\`;
  html += \`<div style="display:flex;justify-content:space-between;margin-bottom:3px"><span>CCSS obrero (10.83%):</span><strong>\${formatoColones(ccssObrero)}</strong></div>\`;
  html += \`<div style="display:flex;justify-content:space-between;margin-bottom:3px"><span>Impuesto al salario (bruto):</span><strong>\${formatoColones(impuestoBruto)}</strong></div>\`;
  if (totalCreditos > 0) html += \`<div style="display:flex;justify-content:space-between;margin-bottom:3px;color:#27ae60"><span>Créditos fiscales:</span><strong>-\${formatoColones(totalCreditos)}</strong></div>\`;
  html += \`<div style="display:flex;justify-content:space-between;margin-bottom:8px"><span>Impuesto al salario (neto):</span><strong>\${formatoColones(impuestoNeto)}</strong></div>\`;
  html += \`<div style="display:flex;justify-content:space-between;border-top:1px solid #cfe2ff;padding-top:6px;margin-bottom:10px"><span style="font-weight:700">Salario neto a recibir:</span><strong style="color:#27ae60">\${formatoColones(salarioNeto)}</strong></div>\`;
  html += \`<div style="font-weight:700;color:#0084ff;margin-bottom:8px">🏢 Costo para el patrono</div>\`;
  html += \`<div style="display:flex;justify-content:space-between;margin-bottom:3px"><span>CCSS patronal (26.83%):</span><strong>\${formatoColones(ccssPatronal)}</strong></div>\`;
  html += \`<div style="display:flex;justify-content:space-between;border-top:1px solid #cfe2ff;padding-top:6px"><span style="font-weight:700">Costo laboral total:</span><strong style="color:#0084ff">\${formatoColones(costoPatronal)}</strong></div>\`;
  html += \`<div style="margin-top:10px;font-size:11px;color:#999">* Tramos del Impuesto al Salario y porcentajes CCSS vigentes desde el 1 de enero de 2026 (Decreto 45333-H). Cálculo de referencia; consulte un contador para casos específicos.</div>\`;

  document.getElementById('rentaResultado').innerHTML = html;
  document.getElementById('rentaResultado').style.display = 'block';
  document.getElementById('rentaInsertarBtn').style.display = 'inline-block';
}

function insertarRentaCCSS() {
  if (!rentaUltimoResultado) return;
  const r = rentaUltimoResultado;
  const html = \`<h2 style="text-align:center;color:#1a2942">PLANILLA Y RETENCIONES — COSTA RICA 2026</h2>
<p><strong>Salario bruto mensual:</strong> \${formatoColones(r.salario)}</p>
<table style="border-collapse:collapse;width:100%;margin:14px 0;font-size:13px"><tr style="background:#0084ff;color:#fff"><th style="padding:8px;text-align:left">Concepto</th><th style="padding:8px;text-align:right">Monto</th></tr>
<tr><td style="border:1px solid #ddd;padding:8px">CCSS obrero (10.83%)</td><td style="border:1px solid #ddd;padding:8px;text-align:right">\${formatoColones(r.ccssObrero)}</td></tr>
<tr><td style="border:1px solid #ddd;padding:8px">Impuesto al salario (neto de créditos)</td><td style="border:1px solid #ddd;padding:8px;text-align:right">\${formatoColones(r.impuestoNeto)}</td></tr>
<tr style="font-weight:700;background:#e8f8ee"><td style="border:1px solid #ddd;padding:8px">Salario neto a recibir</td><td style="border:1px solid #ddd;padding:8px;text-align:right">\${formatoColones(r.salarioNeto)}</td></tr>
<tr><td style="border:1px solid #ddd;padding:8px">CCSS patronal (26.83%)</td><td style="border:1px solid #ddd;padding:8px;text-align:right">\${formatoColones(r.ccssPatronal)}</td></tr>
<tr style="font-weight:700;background:#f0f7ff"><td style="border:1px solid #ddd;padding:8px">Costo laboral total para el patrono</td><td style="border:1px solid #ddd;padding:8px;text-align:right">\${formatoColones(r.costoPatronal)}</td></tr></table>
<p style="font-size:11px;color:#999">Cálculo de referencia conforme al Decreto Ejecutivo N° 45333-H (tramos de renta 2026) y porcentajes vigentes de la CCSS desde el 1 de enero de 2026. No constituye asesoría tributaria o laboral oficial; se recomienda validar con un contador antes de formalizar la planilla.</p>\`;
  insertHTML(html);
  closeModal('modalRentaCCSS');
  showToast('Planilla insertada ✅');
}

var tradUltimoResultado = null;
var tradDireccionActual = 'es';

function selectTradDireccion(dir, btn) {
  tradDireccionActual = dir;
  document.querySelectorAll('.trad-direccion').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const selectorLengua = document.getElementById('tradLenguaOrigen');
  const inputPalabra = document.getElementById('tradPalabra');
  if (dir === 'indigena') {
    selectorLengua.style.display = 'block';
    inputPalabra.placeholder = 'Escribe una palabra en la lengua elegida...';
  } else {
    selectorLengua.style.display = 'none';
    inputPalabra.placeholder = 'Escribe una palabra en español...';
  }
  document.getElementById('tradResultado').style.display = 'none';
  document.getElementById('tradInsertarBtn').style.display = 'none';
}

async function buscarTraduccionIndigena() {
  const palabra = document.getElementById('tradPalabra').value.trim().toLowerCase();
  if (!palabra) { showToast('Escribe una palabra primero'); return; }
  document.getElementById('tradResultado').innerHTML = '<span style="color:#888">🔍 Buscando...</span>';
  document.getElementById('tradResultado').style.display = 'block';

  try {
    await cargarDiccionario();
  } catch(e) {}

  if (!dictData || !dictData.length) {
    document.getElementById('tradResultado').innerHTML = '<span style="color:#e74c3c">No se pudo cargar el diccionario. Verifica tu conexión.</span>';
    return;
  }

  const lenguas = ['Bribri','Cabécar','Maleku','Ngäbe','Boruca','Térraba'];
  let encontrado = null;

  if (tradDireccionActual === 'es') {
    encontrado = dictData.find(row => (row['Español']||'').toLowerCase().trim() === palabra);
  } else {
    const lenguaOrigen = document.getElementById('tradLenguaOrigen').value;
    encontrado = dictData.find(row => (row[lenguaOrigen]||'').toLowerCase().trim() === palabra);
  }

  if (!encontrado) {
    document.getElementById('tradResultado').innerHTML = \`<span style="color:#888">No se encontró "\${palabra}" en el diccionario. Intenta con otra palabra.</span>\`;
    document.getElementById('tradInsertarBtn').style.display = 'none';
    return;
  }

  let html = \`<div style="font-weight:700;margin-bottom:8px;color:#27ae60">🇨🇷 \${encontrado['Español']}</div>\`;
  lenguas.forEach(l => {
    const val = encontrado[l];
    if (val) html += \`<div style="display:flex;justify-content:space-between;margin-bottom:4px"><span style="color:#666">\${l}:</span><strong>\${val}</strong></div>\`;
  });
  document.getElementById('tradResultado').innerHTML = html;
  tradUltimoResultado = encontrado;
  document.getElementById('tradInsertarBtn').style.display = 'inline-block';
}

function insertarTraduccionIndigena() {
  if (!tradUltimoResultado) return;
  const r = tradUltimoResultado;
  const lenguas = ['Bribri','Cabécar','Maleku','Ngäbe','Boruca','Térraba'];
  let html = \`<table style="border-collapse:collapse;margin:10px 0;font-size:13px"><tr style="background:#27ae60;color:#fff"><th style="padding:6px 12px;text-align:left">Español</th><th style="padding:6px 12px;text-align:left">\${r['Español']}</th></tr>\`;
  lenguas.forEach(l => {
    if (r[l]) html += \`<tr><td style="border:1px solid #ddd;padding:6px 12px">\${l}</td><td style="border:1px solid #ddd;padding:6px 12px">\${r[l]}</td></tr>\`;
  });
  html += '</table>';
  insertHTML(html);
  closeModal('modalTraductorIndigena');
  showToast('Traducción insertada ✅');
}

var wcBookmarks = [];
var wcComentarios = [];
var wcFootnoteCount = 0;

function generarTOCReal() {
  const headers = editor.querySelectorAll('h1,h2,h3,h4');
  if (!headers.length) { showToast('No hay títulos (H1-H4) en el documento todavía'); return; }
  let html = '<div style="border:1px solid #ddd;border-radius:10px;padding:16px;margin:12px 0" id="wcTocBlock"><h3 style="color:#0084ff;margin-bottom:10px">📑 Tabla de contenido</h3>';
  headers.forEach((h, i) => {
    if (!h.id) h.id = 'wc-toc-' + i;
    const nivel = parseInt(h.tagName.substring(1));
    const indent = (nivel - 1) * 16;
    const texto = h.textContent.trim() || '(Sin título)';
    html += \`<div style="margin-left:\${indent}px;font-size:13px;color:#444;margin-bottom:4px"><a href="#\${h.id}" style="color:#0084ff;text-decoration:none">\${texto}</a></div>\`;
  });
  html += '</div>';
  insertHTML(html);
  showToast(\`Tabla de contenido generada (\${headers.length} títulos) ✅\`);
}

function abrirBookmarks() {
  openModal('modalBookmarks');
  renderBookmarks();
}
function renderBookmarks() {
  const cont = document.getElementById('bookmarksLista');
  if (!wcBookmarks.length) { cont.innerHTML = '<div style="color:#999;text-align:center;padding:12px">Sin marcadores todavía</div>'; return; }
  cont.innerHTML = wcBookmarks.map((b,i) => \`<div style="display:flex;justify-content:space-between;align-items:center;padding:8px;border-bottom:1px solid #eee"><a href="#\${b.id}" onclick="closeModal('modalBookmarks')" style="color:#0084ff;text-decoration:none">📌 \${b.nombre}</a><button onclick="eliminarMarcador(\${i})" style="background:none;border:none;color:#e74c3c;cursor:pointer;font-size:16px">✕</button></div>\`).join('');
}
function agregarMarcador() {
  const nombre = document.getElementById('bookmarkNombre').value.trim();
  if (!nombre) { showToast('Escribe un nombre para el marcador'); return; }
  const id = 'wc-bookmark-' + Date.now();
  insertHTML(\`<span id="\${id}"></span>\`);
  wcBookmarks.push({ id, nombre });
  document.getElementById('bookmarkNombre').value = '';
  renderBookmarks();
  showToast('Marcador agregado 📌');
}
function eliminarMarcador(i) {
  wcBookmarks.splice(i, 1);
  renderBookmarks();
}

function abrirComentarios() {
  openModal('modalComentarios');
  renderComentarios();
}
function renderComentarios() {
  const cont = document.getElementById('comentariosLista');
  if (!wcComentarios.length) { cont.innerHTML = '<div style="color:#999;text-align:center;padding:12px">Sin comentarios todavía</div>'; return; }
  cont.innerHTML = wcComentarios.map((c,i) => \`<div style="background:#fffbe6;border-radius:8px;padding:10px;margin-bottom:8px"><div style="font-size:12px;color:#999;margin-bottom:4px">\${c.fecha}</div><div>\${c.texto}</div><button onclick="eliminarComentario(\${i})" style="background:none;border:none;color:#e74c3c;cursor:pointer;font-size:12px;margin-top:4px">Eliminar</button></div>\`).join('');
}
function agregarComentario() {
  const texto = document.getElementById('comentarioTexto').value.trim();
  if (!texto) { showToast('Escribe un comentario primero'); return; }
  wcComentarios.push({ texto, fecha: new Date().toLocaleString('es-CR') });
  document.getElementById('comentarioTexto').value = '';
  renderComentarios();
  showToast('Comentario agregado 💬');
}
function eliminarComentario(i) {
  wcComentarios.splice(i, 1);
  renderComentarios();
}

function insertarNotaPie() {
  const fn = prompt('Texto de la nota al pie:');
  if (!fn) return;
  wcFootnoteCount++;
  const n = wcFootnoteCount;
  insertHTML(\`<sup style="color:#0084ff">[\${n}]</sup>\`);
  let footer = document.getElementById('wcFootnotesBlock');
  if (!footer) {
    insertHTML(\`<div id="wcFootnotesBlock"><hr style="border:none;border-top:1px solid #ddd;margin:20px 0 8px"></div>\`);
    footer = document.getElementById('wcFootnotesBlock');
  }
  const nota = document.createElement('p');
  nota.style.cssText = 'font-size:11px;color:#666;margin:2px 0';
  nota.innerHTML = \`[\${n}] \${fn}\`;
  footer.appendChild(nota);
  showToast('Nota al pie agregada ✅');
}

var wcVersiones = [];

function abrirVersiones() {
  openModal('modalVersiones');
  renderVersiones();
}
function renderVersiones() {
  const cont = document.getElementById('versionesLista');
  if (!wcVersiones.length) { cont.innerHTML = '<div style="color:#999;text-align:center;padding:12px">Sin versiones guardadas. Guarda la actual para empezar.</div>'; return; }
  cont.innerHTML = wcVersiones.map((v,i) => {
    const palabras = v.html.replace(/<[^>]+>/g,' ').trim().split(/\\s+/).filter(Boolean).length;
    return \`<div style="display:flex;justify-content:space-between;align-items:center;padding:10px;border-bottom:1px solid #eee">
      <div><div style="font-weight:600">\${v.nombre}</div><div style="font-size:11px;color:#999">\${v.fecha} · \${palabras} palabras</div></div>
      <div style="display:flex;gap:6px">
        <button onclick="restaurarVersion(\${i})" style="background:#0084ff;color:#fff;border:none;border-radius:6px;padding:5px 10px;font-size:11px;cursor:pointer">Restaurar</button>
        <button onclick="eliminarVersion(\${i})" style="background:none;border:none;color:#e74c3c;cursor:pointer;font-size:14px">✕</button>
      </div></div>\`;
  }).join('');
}
function guardarVersionActual() {
  const nombre = prompt('Nombre para esta versión (ej: Borrador inicial):', \`Versión \${wcVersiones.length+1}\`);
  if (!nombre) return;
  wcVersiones.push({ nombre, html: editor.innerHTML, fecha: new Date().toLocaleString('es-CR') });
  renderVersiones();
  showToast('Versión guardada 💾');
}
function restaurarVersion(i) {
  if (!confirm(\`¿Restaurar "\${wcVersiones[i].nombre}"? Se perderá el contenido actual no guardado.\`)) return;
  editor.innerHTML = wcVersiones[i].html;
  updateStats();
  updatePageBreaks();
  closeModal('modalVersiones');
  showToast('Versión restaurada ✅');
}
function eliminarVersion(i) {
  wcVersiones.splice(i, 1);
  renderVersiones();
}
function compararVersionesActual() {
  if (wcVersiones.length < 1) { showToast('Guarda al menos una versión primero para comparar'); return; }
  const ultima = wcVersiones[wcVersiones.length - 1];
  const palabrasActual = editor.innerText.trim().split(/\\s+/).filter(Boolean).length;
  const palabrasAnterior = ultima.html.replace(/<[^>]+>/g,' ').trim().split(/\\s+/).filter(Boolean).length;
  const diferencia = palabrasActual - palabrasAnterior;
  const signo = diferencia >= 0 ? '+' : '';
  alert(\`Comparando con "\${ultima.nombre}" (\${ultima.fecha}):\\n\\nPalabras actuales: \${palabrasActual}\\nPalabras en esa versión: \${palabrasAnterior}\\nDiferencia: \${signo}\${diferencia} palabras\`);
}

var wcModoAnterior = null;

function activarZenMode() {
  document.querySelectorAll('.header, .menu-card, .status-bar, #wcToolsFab').forEach(el => el.style.display = 'none');
  editor.style.maxWidth = '700px';
  editor.style.boxShadow = 'none';
  editor.style.border = 'none';
  document.querySelector('.content').style.background = '#fafafa';
  let salir = document.getElementById('wcZenExit');
  if (!salir) {
    salir = document.createElement('button');
    salir.id = 'wcZenExit';
    salir.textContent = '✕ Salir del modo Zen';
    salir.style.cssText = 'position:fixed;top:14px;right:14px;z-index:99999;background:#1a2942;color:#fff;border:none;border-radius:20px;padding:8px 16px;font-size:13px;cursor:pointer;box-shadow:0 2px 10px rgba(0,0,0,.2)';
    salir.onclick = salirZenMode;
    document.body.appendChild(salir);
  }
  showToast('🧘 Modo Zen activado');
}
function salirZenMode() {
  document.querySelectorAll('.header, .menu-card, .status-bar, #wcToolsFab').forEach(el => el.style.display = '');
  editor.style.maxWidth = '';
  editor.style.boxShadow = '';
  editor.style.border = '';
  document.querySelector('.content').style.background = '';
  const salir = document.getElementById('wcZenExit');
  if (salir) salir.remove();
  showToast('Modo Zen desactivado');
}

function activarModoInmersivo() {
  document.querySelectorAll('.header, .menu-card, .status-bar, #wcToolsFab').forEach(el => el.style.display = 'none');
  document.querySelector('.content').style.background = '#1a1a1a';
  editor.style.background = '#1a1a1a';
  editor.style.color = '#e8e8e8';
  editor.style.maxWidth = '680px';
  editor.style.fontSize = '14pt';
  editor.style.lineHeight = '1.9';
  editor.style.boxShadow = 'none';
  editor.style.border = 'none';
  let salir = document.getElementById('wcZenExit');
  if (!salir) {
    salir = document.createElement('button');
    salir.id = 'wcZenExit';
    salir.textContent = '✕ Salir';
    salir.style.cssText = 'position:fixed;top:14px;right:14px;z-index:99999;background:#444;color:#fff;border:none;border-radius:20px;padding:8px 16px;font-size:13px;cursor:pointer';
    salir.onclick = salirModoInmersivo;
    document.body.appendChild(salir);
  }
  showToast('📖 Lectura inmersiva activada');
}
function salirModoInmersivo() {
  document.querySelectorAll('.header, .menu-card, .status-bar, #wcToolsFab').forEach(el => el.style.display = '');
  document.querySelector('.content').style.background = '';
  editor.style.background = '';
  editor.style.color = '';
  editor.style.maxWidth = '';
  editor.style.fontSize = '';
  editor.style.lineHeight = '';
  editor.style.boxShadow = '';
  editor.style.border = '';
  const salir = document.getElementById('wcZenExit');
  if (salir) salir.remove();
}

function activarModoPresentacion() {
  const headers = editor.querySelectorAll('h1');
  if (!headers.length) { showToast('Agrega títulos H1 para dividir tu documento en diapositivas'); return; }
  const slides = [];
  let actual = null;
  editor.childNodes.forEach(node => {
    if (node.nodeType === 1 && node.tagName === 'H1') {
      actual = { titulo: node.textContent, contenido: [] };
      slides.push(actual);
    } else if (actual) {
      actual.contenido.push(node.outerHTML || node.textContent || '');
    }
  });
  if (!slides.length) { showToast('No se pudo generar la presentación'); return; }

  let idx = 0;
  const overlay = document.createElement('div');
  overlay.id = 'wcPresOverlay';
  overlay.style.cssText = 'position:fixed;inset:0;z-index:999999;background:#0d1b2a;color:#fff;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:40px;text-align:center';
  function render() {
    const s = slides[idx];
    overlay.innerHTML = \`
      <div style="max-width:800px">
        <h1 style="font-size:32px;margin-bottom:24px;color:#fff">\${s.titulo}</h1>
        <div style="font-size:16px;line-height:1.6;color:#cdd6e0">\${s.contenido.join('')}</div>
      </div>
      <div style="position:absolute;bottom:20px;display:flex;gap:14px;align-items:center">
        <button id="wcPresPrev" style="background:#fff;color:#0d1b2a;border:none;border-radius:20px;padding:8px 16px;cursor:pointer">⬅ Anterior</button>
        <span style="color:#9ab">\${idx+1} / \${slides.length}</span>
        <button id="wcPresNext" style="background:#fff;color:#0d1b2a;border:none;border-radius:20px;padding:8px 16px;cursor:pointer">Siguiente ➡</button>
      </div>
      <button id="wcPresExit" style="position:absolute;top:16px;right:16px;background:none;border:1px solid #fff;color:#fff;border-radius:20px;padding:6px 14px;cursor:pointer">✕ Salir</button>\`;
    document.getElementById('wcPresPrev').onclick = () => { if (idx>0) { idx--; render(); } };
    document.getElementById('wcPresNext').onclick = () => { if (idx<slides.length-1) { idx++; render(); } };
    document.getElementById('wcPresExit').onclick = () => overlay.remove();
  }
  render();
  document.body.appendChild(overlay);
  showToast('🎬 Modo presentación activado');
}

function abrirWcTools(tab) {
  const panel = document.getElementById('wcToolsPanel');
  panel.classList.add('open');
  const tabBtn = document.querySelector(\`#wcToolsTabs button[data-tab="\${tab}"]\`);
  if (tabBtn) tabBtn.click();
}

function buscarEnDocumento() {
  const termino = prompt('Buscar en el documento:');
  if (!termino) return;
  const texto = editor.innerText;
  const regex = new RegExp(termino, 'gi');
  const coincidencias = texto.match(regex);
  if (!coincidencias) { showToast(\`No se encontró "\${termino}"\`); return; }

  document.querySelectorAll('.wc-search-hl').forEach(el => {
    el.outerHTML = el.innerHTML;
  });
  const walker = document.createTreeWalker(editor, NodeFilter.SHOW_TEXT);
  const nodos = [];
  let n;
  while (n = walker.nextNode()) nodos.push(n);
  let total = 0;
  nodos.forEach(nodo => {
    if (regex.test(nodo.textContent)) {
      const span = document.createElement('span');
      span.innerHTML = nodo.textContent.replace(new RegExp(termino, 'gi'), m => { total++; return \`<mark class="wc-search-hl" style="background:#fff59d">\${m}</mark>\`; });
      nodo.parentNode.replaceChild(span, nodo);
    }
  });
  showToast(\`\${coincidencias.length} coincidencia(s) resaltada(s) ✅\`);
}

function dictarAudioAlEditor() {
  const SRec = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SRec) { showToast('Tu navegador no soporta dictado por voz'); return; }
  const rec = new SRec();
  rec.lang = 'es-CR';
  rec.continuous = true;
  rec.interimResults = false;
  let activo = true;
  rec.onresult = (e) => {
    let textoFinal = '';
    for (let i = e.resultIndex; i < e.results.length; i++) {
      if (e.results[i].isFinal) textoFinal += e.results[i][0].transcript + ' ';
    }
    if (textoFinal.trim()) insertHTML(\`<span>\${textoFinal.trim()} </span>\`);
  };
  rec.onerror = () => { activo = false; showToast('Error en el dictado'); };
  rec.onend = () => {
    if (activo) { try { rec.start(); } catch(e){} }
    else {
      const btn = document.getElementById('wcDictadoStop');
      if (btn) btn.remove();
    }
  };
  rec.start();
  showToast('🎙️ Dictando... habla ahora');

  const stopBtn = document.createElement('button');
  stopBtn.id = 'wcDictadoStop';
  stopBtn.textContent = '⏹ Detener dictado';
  stopBtn.style.cssText = 'position:fixed;bottom:90px;left:16px;z-index:99999;background:#e74c3c;color:#fff;border:none;border-radius:20px;padding:10px 18px;font-size:13px;cursor:pointer;box-shadow:0 2px 10px rgba(0,0,0,.2)';
  stopBtn.onclick = () => { activo = false; rec.stop(); stopBtn.remove(); showToast('Dictado detenido'); };
  document.body.appendChild(stopBtn);
}

function guardarEnNube() {
  try {
    const datos = { html: editor.innerHTML, fecha: new Date().toISOString(), titulo: document.getElementById('contentTitle')?.textContent || 'Documento' };
    localStorage.setItem('wc-cloud-backup', JSON.stringify(datos));
    showToast('☁️ Guardado localmente en este dispositivo (sin servidor en la nube real)');
  } catch(e) {
    showToast('⚠️ No se pudo guardar: ' + e.message);
  }
}

function abrirWhatsappBusiness() {
  const mensaje = prompt('Escribe el mensaje para enviar por WhatsApp Business (o describe qué necesitas y Sibö te ayuda):');
  if (!mensaje) return;
  const url = \`https://wa.me/?text=\${encodeURIComponent(mensaje)}\`;
  window.open(url, '_blank');
}

function exportarHTMLPrincipal() {
  const contenido = editor.innerHTML;
  const full = \`<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Documento</title><style>body{font-family:Calibri,Arial,sans-serif;margin:2.5cm;font-size:12pt;line-height:1.5;color:#000}h1,h2,h3{color:#1a2942}table{border-collapse:collapse;width:100%}td,th{border:1px solid #ddd;padding:8px}</style></head><body>\${contenido}</body></html>\`;
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([full],{type:'text/html'}));
  a.download = 'documento.html'; a.click();
  showToast('HTML descargado ✅');
}

function exportarMarkdownPrincipal() {
  let html = editor.innerHTML;
  let md = html
    .replace(/<h1[^>]*>(.*?)<\\/h1>/gi, '\\n# $1\\n')
    .replace(/<h2[^>]*>(.*?)<\\/h2>/gi, '\\n## $1\\n')
    .replace(/<h3[^>]*>(.*?)<\\/h3>/gi, '\\n### $1\\n')
    .replace(/<strong>(.*?)<\\/strong>/gi, '**$1**')
    .replace(/<b>(.*?)<\\/b>/gi, '**$1**')
    .replace(/<em>(.*?)<\\/em>/gi, '_$1_')
    .replace(/<i>(.*?)<\\/i>/gi, '_$1_')
    .replace(/<li[^>]*>(.*?)<\\/li>/gi, '- $1\\n')
    .replace(/<\\/p>/gi, '\\n\\n')
    .replace(/<[^>]+>/g, '');
  md = md.replace(/\\n{3,}/g, '\\n\\n').trim();
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([md],{type:'text/markdown'}));
  a.download = 'documento.md'; a.click();
  showToast('Markdown descargado ✅');
}

function exportarEPUBPrincipal() {
  const contenido = editor.innerHTML;
  const titulo = document.getElementById('contentTitle')?.textContent || 'Documento';
  const html = \`<?xml version="1.0" encoding="UTF-8"?><!DOCTYPE html><html xmlns="http://www.w3.org/1999/xhtml"><head><meta charset="UTF-8"/><title>\${titulo}</title></head><body>\${contenido}</body></html>\`;
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([html],{type:'application/xhtml+xml'}));
  a.download = 'documento.xhtml';
  a.click();
  showToast('Exportado en formato compatible con EPUB (XHTML) ✅. Para .epub completo, usa un conversor como Calibre.');
}

var wcSpeechUtterance = null;

function leerDocumentoEnVoz() {
  if (!window.speechSynthesis) { showToast('Tu navegador no soporta texto a voz'); return; }
  if (wcSpeechUtterance && speechSynthesis.speaking) {
    speechSynthesis.cancel();
    showToast('Lectura detenida');
    const btn = document.getElementById('wcTtsStop');
    if (btn) btn.remove();
    return;
  }
  const texto = editor.innerText.trim();
  if (!texto) { showToast('El documento está vacío'); return; }
  wcSpeechUtterance = new SpeechSynthesisUtterance(texto);
  wcSpeechUtterance.lang = 'es-CR';
  wcSpeechUtterance.rate = 1;
  wcSpeechUtterance.onend = () => {
    const btn = document.getElementById('wcTtsStop');
    if (btn) btn.remove();
  };
  speechSynthesis.speak(wcSpeechUtterance);
  showToast('🔊 Leyendo documento...');

  let stopBtn = document.getElementById('wcTtsStop');
  if (!stopBtn) {
    stopBtn = document.createElement('button');
    stopBtn.id = 'wcTtsStop';
    stopBtn.textContent = '⏹ Detener lectura';
    stopBtn.style.cssText = 'position:fixed;bottom:90px;left:16px;z-index:99999;background:#0084ff;color:#fff;border:none;border-radius:20px;padding:10px 18px;font-size:13px;cursor:pointer;box-shadow:0 2px 10px rgba(0,0,0,.2)';
    stopBtn.onclick = () => { speechSynthesis.cancel(); stopBtn.remove(); };
    document.body.appendChild(stopBtn);
  }
}

var wcNumALetrasUltimo = '';

function numeroALetras(num) {
  const unidades = ['','un','dos','tres','cuatro','cinco','seis','siete','ocho','nueve'];
  const especiales = {10:'diez',11:'once',12:'doce',13:'trece',14:'catorce',15:'quince',16:'dieciséis',17:'diecisiete',18:'dieciocho',19:'diecinueve',20:'veinte'};
  const decenas = ['','','veinte','treinta','cuarenta','cincuenta','sesenta','setenta','ochenta','noventa'];
  const centenas = ['','ciento','doscientos','trescientos','cuatrocientos','quinientos','seiscientos','setecientos','ochocientos','novecientos'];

  function convertirGrupo(n) {
    if (n === 0) return '';
    if (n === 100) return 'cien';
    if (n < 10) return unidades[n];
    if (n >= 10 && n <= 20) return especiales[n];
    if (n < 30 && n > 20) return 'veinti' + unidades[n - 20];
    if (n < 100) {
      const d = Math.floor(n / 10), u = n % 10;
      return decenas[d] + (u > 0 ? ' y ' + unidades[u] : '');
    }
    const c = Math.floor(n / 100), resto = n % 100;
    return centenas[c] + (resto > 0 ? ' ' + convertirGrupo(resto) : '');
  }

  function convertirMiles(n) {
    if (n === 0) return 'cero';
    if (n < 1000) return convertirGrupo(n);
    const miles = Math.floor(n / 1000), resto = n % 1000;
    let txt = '';
    if (miles === 1) txt = 'mil';
    else txt = convertirGrupo(miles) + ' mil';
    if (resto > 0) txt += ' ' + convertirGrupo(resto);
    return txt;
  }

  function convertirMillones(n) {
    if (n < 1000000) return convertirMiles(n);
    const millones = Math.floor(n / 1000000), resto = n % 1000000;
    let txt = (millones === 1 ? 'un millón' : convertirMiles(millones) + ' millones');
    if (resto > 0) txt += ' ' + convertirMiles(resto);
    return txt;
  }

  const parteEntera = Math.floor(num);
  const centavos = Math.round((num - parteEntera) * 100);
  let resultado = convertirMillones(parteEntera);
  resultado = resultado.charAt(0).toUpperCase() + resultado.slice(1);
  resultado += ' colones';
  if (centavos > 0) resultado += \` con \${centavos}/100\`;
  return resultado;
}

function abrirNumerosALetras() {
  const monto = prompt('Monto en colones a convertir (ej: 450000 o 450000.50):');
  if (!monto) return;
  const num = parseFloat(monto.replace(/,/g, ''));
  if (isNaN(num) || num < 0) { showToast('Ingresa un monto válido'); return; }
  const texto = numeroALetras(num);
  wcNumALetrasUltimo = texto;
  const opcion = confirm(\`\${texto}\\n\\n¿Insertar este texto en el documento?\`);
  if (opcion) {
    insertHTML(\`<span>\${texto}</span>\`);
    showToast('Texto insertado ✅');
  }
}

var heJornadaActual = 208;
var heMultActual = 1.5;
var heUltimoResultado = null;

function selectHeJornada(valor, btn) {
  heJornadaActual = parseFloat(valor);
  document.querySelectorAll('.he-jornada').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}
function selectHeTipoDia(valor, btn) {
  heMultActual = parseFloat(valor);
  document.querySelectorAll('.he-tipodia').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

function calcularHorasExtra() {
  const salario = parseFloat(document.getElementById('heSalario').value);
  const horas = parseFloat(document.getElementById('heHoras').value);
  if (isNaN(salario) || salario <= 0) { showToast('Ingresa un salario válido'); return; }
  if (isNaN(horas) || horas <= 0) { showToast('Ingresa la cantidad de horas extra'); return; }

  const horaOrdinaria = salario / heJornadaActual;
  const tarifaHoraExtra = horaOrdinaria * heMultActual;
  const total = tarifaHoraExtra * horas;

  heUltimoResultado = { salario, horas, jornada: heJornadaActual, mult: heMultActual, horaOrdinaria, tarifaHoraExtra, total };

  const jornadaLabel = heJornadaActual === 208 ? 'Diurna (208 h/mes)' : (heJornadaActual === 180 ? 'Mixta (180 h/mes)' : 'Nocturna (156 h/mes)');
  const diaLabel = heMultActual === 1.5 ? 'Día ordinario (×1.5)' : 'Descanso/feriado (×2)';

  let html = \`<div style="display:flex;justify-content:space-between;margin-bottom:4px"><span>Jornada:</span><strong>\${jornadaLabel}</strong></div>\`;
  html += \`<div style="display:flex;justify-content:space-between;margin-bottom:4px"><span>Hora ordinaria:</span><strong>\${formatoColones(horaOrdinaria)}</strong></div>\`;
  html += \`<div style="display:flex;justify-content:space-between;margin-bottom:4px"><span>Tipo de día:</span><strong>\${diaLabel}</strong></div>\`;
  html += \`<div style="display:flex;justify-content:space-between;margin-bottom:4px"><span>Tarifa hora extra:</span><strong>\${formatoColones(tarifaHoraExtra)}</strong></div>\`;
  html += \`<div style="display:flex;justify-content:space-between;border-top:1px solid #cfe2ff;padding-top:6px;margin-top:4px"><span style="font-weight:700">Total (\${horas} horas):</span><strong style="color:#0084ff">\${formatoColones(total)}</strong></div>\`;
  html += \`<div style="margin-top:8px;font-size:11px;color:#999">* Cálculo de referencia conforme a los artículos 136-144 del Código de Trabajo de Costa Rica. Máximo legal: 4 horas extra/día en jornada diurna, 12 horas diarias totales.</div>\`;

  document.getElementById('heResultado').innerHTML = html;
  document.getElementById('heResultado').style.display = 'block';
  document.getElementById('heInsertarBtn').style.display = 'inline-block';
}

function insertarHorasExtra() {
  if (!heUltimoResultado) return;
  const r = heUltimoResultado;
  const jornadaLabel = r.jornada === 208 ? 'Diurna (208 h/mes)' : (r.jornada === 180 ? 'Mixta (180 h/mes)' : 'Nocturna (156 h/mes)');
  const diaLabel = r.mult === 1.5 ? 'Día ordinario (×1.5)' : 'Descanso/feriado (×2)';
  const html = \`<h2 style="text-align:center;color:#1a2942">CÁLCULO DE HORAS EXTRA — COSTA RICA</h2>
<p><strong>Salario mensual:</strong> \${formatoColones(r.salario)}</p>
<p><strong>Jornada:</strong> \${jornadaLabel}</p>
<table style="border-collapse:collapse;width:100%;margin:14px 0;font-size:13px"><tr style="background:#0084ff;color:#fff"><th style="padding:8px;text-align:left">Concepto</th><th style="padding:8px;text-align:right">Valor</th></tr>
<tr><td style="border:1px solid #ddd;padding:8px">Hora ordinaria</td><td style="border:1px solid #ddd;padding:8px;text-align:right">\${formatoColones(r.horaOrdinaria)}</td></tr>
<tr><td style="border:1px solid #ddd;padding:8px">Tipo de día</td><td style="border:1px solid #ddd;padding:8px;text-align:right">\${diaLabel}</td></tr>
<tr><td style="border:1px solid #ddd;padding:8px">Tarifa hora extra</td><td style="border:1px solid #ddd;padding:8px;text-align:right">\${formatoColones(r.tarifaHoraExtra)}</td></tr>
<tr><td style="border:1px solid #ddd;padding:8px">Horas extra trabajadas</td><td style="border:1px solid #ddd;padding:8px;text-align:right">\${r.horas}</td></tr>
<tr style="font-weight:700;background:#f0f7ff"><td style="border:1px solid #ddd;padding:8px">TOTAL A PAGAR</td><td style="border:1px solid #ddd;padding:8px;text-align:right">\${formatoColones(r.total)}</td></tr></table>
<p style="font-size:11px;color:#999">Cálculo de referencia conforme a los artículos 136-144 del Código de Trabajo de Costa Rica. No constituye asesoría legal; se recomienda validar con un profesional antes de formalizar el pago.</p>\`;
  insertHTML(html);
  closeModal('modalHorasExtra');
  showToast('Cálculo insertado ✅');
}

function generarConstanciaSalarial() {
  const nombre = document.getElementById('csNombre').value.trim();
  const cedula = document.getElementById('csCedula').value.trim();
  const puesto = document.getElementById('csPuesto').value.trim();
  const salario = parseFloat(document.getElementById('csSalario').value);
  const empresa = document.getElementById('csEmpresa').value.trim();
  const fechaIngreso = document.getElementById('csFechaIngreso').value.trim();

  if (!nombre || !cedula || !puesto || isNaN(salario) || !empresa) {
    showToast('Completa todos los campos obligatorios');
    return;
  }

  const salarioEnLetras = numeroALetras(salario);
  const hoy = new Date().toLocaleDateString('es-CR', { day: 'numeric', month: 'long', year: 'numeric' });

  const html = \`<div style="text-align:center;margin-bottom:24px"><h2 style="color:#1a2942">CONSTANCIA SALARIAL</h2></div>
<p>El suscrito, en representación de <strong>\${empresa}</strong>, hace constar que:</p>
<p style="margin:16px 0"><strong>\${nombre}</strong>, portador(a) de la cédula de identidad número <strong>\${cedula}</strong>, labora para esta empresa desde el <strong>\${fechaIngreso || '(fecha de ingreso)'}</strong>, desempeñando el puesto de <strong>\${puesto}</strong>.</p>
<p style="margin:16px 0">Su salario bruto mensual actual es de <strong>\${formatoColones(salario)}</strong> (\${salarioEnLetras}).</p>
<p style="margin:16px 0">Se extiende la presente constancia a solicitud de la persona interesada, para los fines que estime convenientes, en Costa Rica, el \${hoy}.</p>
<div style="margin-top:60px"><p>_________________________________</p><p>Firma autorizada</p><p>\${empresa}</p></div>
<p style="font-size:11px;color:#999;margin-top:20px">Este documento es un modelo de referencia. Verifica que cumpla los requisitos específicos de la institución que la solicita.</p>\`;

  insertHTML(html);
  closeModal('modalConstanciaSalarial');
  showToast('Constancia salarial generada ✅');
}

function generarOficioDGT() {
  const nombre = document.getElementById('odNombre').value.trim();
  const cedula = document.getElementById('odCedula').value.trim();
  const tipoTramite = document.getElementById('odTipoTramite').value;
  const detalle = document.getElementById('odDetalle').value.trim();

  if (!nombre || !cedula || !tipoTramite) {
    showToast('Completa nombre, cédula y tipo de gestión');
    return;
  }

  const hoy = new Date().toLocaleDateString('es-CR', { day: 'numeric', month: 'long', year: 'numeric' });

  const html = \`<div style="text-align:right;margin-bottom:20px">\${hoy}</div>
<p><strong>Señores</strong><br>Dirección General de Tributación<br>Ministerio de Hacienda<br>San José, Costa Rica</p>
<p style="margin-top:20px"><strong>Asunto:</strong> \${tipoTramite}</p>
<p style="margin-top:20px">Estimados señores:</p>
<p style="margin:16px 0">Quien suscribe, <strong>\${nombre}</strong>, portador(a) de la cédula <strong>\${cedula}</strong>, se dirige respetuosamente a esta Dirección General con el fin de plantear la siguiente gestión:</p>
<p style="margin:16px 0">\${detalle || '(Detalle de la gestión a completar)'}</p>
<p style="margin:16px 0">Quedo a la espera de su respuesta y agradezco de antemano la atención brindada a la presente solicitud.</p>
<p style="margin-top:20px">Atentamente,</p>
<div style="margin-top:60px"><p>_________________________________</p><p>\${nombre}</p><p>Cédula: \${cedula}</p></div>
<p style="font-size:11px;color:#999;margin-top:20px">Este documento es un modelo de referencia. Verifica los requisitos específicos vigentes en el sitio de Hacienda antes de presentarlo.</p>\`;

  insertHTML(html);
  closeModal('modalOficioDGT');
  showToast('Oficio generado ✅');
}

var fcMazo = [];
var fcIndiceActual = 0;
var fcVolteada = false;
var fcModalAbierto = false;

async function abrirFlashcards() {
  openModal('modalFlashcards');
  fcModalAbierto = true;
  document.getElementById('fcCardTexto').textContent = 'Cargando...';
  document.getElementById('fcProgreso').textContent = 'Cargando diccionario...';
  try {
    await cargarDiccionario();
  } catch(e) {}
  reiniciarFlashcards();
}

function reiniciarFlashcards() {
  if (!dictData || !dictData.length) {
    document.getElementById('fcCardTexto').textContent = 'No se pudo cargar el diccionario';
    document.getElementById('fcProgreso').textContent = '';
    return;
  }
  const lengua = document.getElementById('fcLenguaSelect').value;
  fcMazo = dictData.filter(row => row['Español'] && row[lengua]);
  // Mezclar el mazo
  for (let i = fcMazo.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [fcMazo[i], fcMazo[j]] = [fcMazo[j], fcMazo[i]];
  }
  fcIndiceActual = 0;
  fcVolteada = false;
  mostrarFlashcardActual();
}

function mostrarFlashcardActual() {
  if (!fcMazo.length) {
    document.getElementById('fcCardTexto').textContent = 'Sin palabras disponibles para esta lengua';
    document.getElementById('fcProgreso').textContent = '';
    return;
  }
  const lengua = document.getElementById('fcLenguaSelect').value;
  const card = fcMazo[fcIndiceActual];
  fcVolteada = false;
  document.getElementById('fcCardTexto').textContent = card['Español'];
  document.getElementById('fcCardWrap').style.background = 'linear-gradient(135deg,#0084ff,#27ae60)';
  document.getElementById('fcProgreso').textContent = \`Tarjeta \${fcIndiceActual + 1} de \${fcMazo.length} · \${lengua}\`;
}

function voltearFlashcard() {
  if (!fcMazo.length) return;
  const lengua = document.getElementById('fcLenguaSelect').value;
  const card = fcMazo[fcIndiceActual];
  fcVolteada = !fcVolteada;
  if (fcVolteada) {
    document.getElementById('fcCardTexto').textContent = card[lengua];
    document.getElementById('fcCardWrap').style.background = 'linear-gradient(135deg,#27ae60,#0084ff)';
  } else {
    document.getElementById('fcCardTexto').textContent = card['Español'];
    document.getElementById('fcCardWrap').style.background = 'linear-gradient(135deg,#0084ff,#27ae60)';
  }
}

function flashcardSiguiente() {
  if (!fcMazo.length) return;
  fcIndiceActual = (fcIndiceActual + 1) % fcMazo.length;
  mostrarFlashcardActual();
}

function flashcardAnterior() {
  if (!fcMazo.length) return;
  fcIndiceActual = (fcIndiceActual - 1 + fcMazo.length) % fcMazo.length;
  mostrarFlashcardActual();
}

function showKeywordDensity() {
  const text = editor.innerText.toLowerCase().replace(/[^a-záéíóúñü\\s]/gi, ' ');
  const stopwords = ['de','la','que','el','en','y','a','los','del','se','las','por','un','para','con','no','una','su','al','lo','como','más','pero','sus','le','ya','o','este','sí','porque','esta','entre','cuando','muy','sin','sobre','también','me','hasta','hay','donde','quien','desde','todo','nos','durante','todos','uno','les','ni','contra','otros','ese','eso','ante','ellos','e','esto','mí','antes','algunos','qué','unos','yo','otro','otras','otra','él','tanto','esa','estos','mucho','quienes','nada','muchos','cual','poco','ella','estar','estas','algunas','algo','nosotros'];
  const words = text.split(/\\s+/).filter(w => w.length > 3 && !stopwords.includes(w));
  const freq = {};
  words.forEach(w => { freq[w] = (freq[w]||0) + 1; });
  const sorted = Object.entries(freq).sort((a,b) => b[1]-a[1]).slice(0,8);
  if (!sorted.length) { showToast('No hay suficiente texto para analizar'); return; }
  let html = '<div style="border:1px solid #ddd;border-radius:10px;padding:14px;margin:12px 0"><h3 style="color:#0084ff;margin-bottom:8px">🔑 Densidad de palabras clave</h3><table style="width:100%;font-size:13px"><tr style="color:#888"><th style="text-align:left;padding:4px">Palabra</th><th style="text-align:right;padding:4px">Veces</th></tr>';
  sorted.forEach(([w,c]) => { html += \`<tr><td style="padding:4px">\${w}</td><td style="text-align:right;padding:4px">\${c}</td></tr>\`; });
  html += '</table></div>';
  insertHTML(html);
  showToast('Densidad de palabras insertada ✅');
}

function handleAction(a) {
  switch(a) {
    case 'maqDosColumnas': maqDosColumnas(); break;
    case 'maqTresColumnas': maqTresColumnas(); break;
    case 'maqUnaColumna': maqUnaColumna(); break;
    case 'maqSangria': maqSangria(); break;
    case 'maqSeparador': maqSeparador(); break;
    case 'maqCitaDestacada': maqCitaDestacada(); break;
    case 'maqCapitulo': maqCapitulo(); break;
    case 'maqPortadaLibro': maqPortadaLibro(); break;

    case 'bold':         restoreSelection(); cmd('bold');          showToast('Negrita ✅');     break;
    case 'italic':       restoreSelection(); cmd('italic');        showToast('Cursiva ✅');     break;
    case 'underline':    restoreSelection(); cmd('underline');     showToast('Subrayado ✅');   break;
    case 'strike':       restoreSelection(); cmd('strikeThrough'); showToast('Tachado ✅');     break;
    case 'h1':           restoreSelection(); cmd('formatBlock','H1'); showToast('Título 1 ✅'); break;
    case 'h2':           restoreSelection(); cmd('formatBlock','H2'); showToast('Título 2 ✅'); break;
    case 'h3':           restoreSelection(); cmd('formatBlock','H3'); showToast('Título 3 ✅'); break;
    case 'bulletList':   restoreSelection(); cmd('insertUnorderedList'); showToast('Lista ✅'); break;
    case 'orderedList':  restoreSelection(); cmd('insertOrderedList');   showToast('Lista num. ✅'); break;
    case 'alignLeft':    restoreSelection(); cmd('justifyLeft');   showToast('Izquierda ✅');  break;
    case 'alignCenter':  restoreSelection(); cmd('justifyCenter'); showToast('Centrado ✅');   break;
    case 'alignRight':   restoreSelection(); cmd('justifyRight');  showToast('Derecha ✅');    break;
    case 'alignJustify': restoreSelection(); cmd('justifyFull');   showToast('Justificado ✅'); break;
    case 'indent':       restoreSelection(); cmd('indent');        showToast('Sangría → ✅');  break;
    case 'outdent':      restoreSelection(); cmd('outdent');       showToast('Sangría ← ✅');  break;
    case 'fontColor':    openModal('modalColor');      break;
    case 'fontSize':     openModal('modalFontSize');   break;
    case 'fontFamily':   buildFabPanel(); openModal('modalFontFamily'); break;
    case 'lineSpacing':  openModal('modalLineSpacing'); break;
    case 'wcarte':       openModal('modalWcArte');     break;
    case 'wcarte-galeria': buildWcArteGrids(); openModal('modalWcArteGallery'); break;
    case 'wcarte-letras':  buildWcArteGrids(); openModal('modalWcArteLetras');  break;
    case 'undo':         cmd('undo'); break;
    case 'redo':         cmd('redo'); break;
    case 'cut':          addToClipboard(window.getSelection().toString(),'Cortado'); cmd('cut');  break;
    case 'copy':         addToClipboard(window.getSelection().toString(),'Copiado'); cmd('copy'); break;
    case 'paste':        cmd('paste'); break;
    case 'selectAll':    cmd('selectAll'); break;
    case 'find': { const t=prompt('Buscar:'); if(!t) break; const r=prompt(\`Reemplazar "\${t}" por:\`); if(r===null) break; editor.innerHTML=editor.innerHTML.split(t).join(r); showToast(\`"\${t}" → "\${r}" ✅\`); break; }
    case 'trackChanges': trackOn=!trackOn; document.getElementById('trackStatus').textContent=trackOn?'🔄 Control de cambios ON':'✓ Auto-guardado activo'; showToast(\`Control de cambios: \${trackOn?'ACTIVADO 🟢':'DESACTIVADO 🔴'}\`); break;
    case 'addComment': { const c=prompt('Comentario:'); if(c){insertHTML(\`<span style="background:#fff3cd;border:1px solid #ffc107;border-radius:4px;padding:1px 6px;font-size:12px;cursor:help" title="\${c}">💬 \${c}</span>\`);showToast('Comentario agregado');} break; }
    case 'comparar':  showToast('Guarda con "Guardar como" para comparar versiones'); break;
    case 'proteger': { const p=prompt('Contraseña para proteger:'); if(p){editor.contentEditable='false';showToast('Documento protegido 🔒');editor.addEventListener('click',function unlock(){const p2=prompt('Contraseña:');if(p2===p){editor.contentEditable='true';showToast('Desprotegido 🔓');editor.removeEventListener('click',unlock);}},{once:true});} break; }
    case 'save':    localStorage.setItem('wc-v23',editor.innerHTML); showToast('Guardado ✅'); break;
    case 'saveAs': openExport(); break;
    case 'exportHtml': exportAs('html'); break;
    case 'exportTxt':  exportAs('txt'); break;
    case 'export':     openExport(); break;
    case 'share':      if(navigator.share) navigator.share({title:'WC Editor',text:editor.innerText}); else{navigator.clipboard.writeText(editor.innerText);showToast('Copiado para compartir');} break;
    case 'insertImage':  document.getElementById('fileInputImage').click(); break;
    case 'insertVideo':  document.getElementById('fileInputVideo').click(); break;
    case 'insertFile':   document.getElementById('fileInputAny').click();   break;
    case 'insertTable':  insertHTML('<table style="border-collapse:collapse;width:100%;margin:8px 0"><tr><th style="border:1px solid #ddd;padding:8px;background:#f0f7ff">Col 1</th><th style="border:1px solid #ddd;padding:8px;background:#f0f7ff">Col 2</th><th style="border:1px solid #ddd;padding:8px;background:#f0f7ff">Col 3</th></tr><tr><td style="border:1px solid #ddd;padding:8px">Dato</td><td style="border:1px solid #ddd;padding:8px">Dato</td><td style="border:1px solid #ddd;padding:8px">Dato</td></tr></table><p></p>'); showToast('Tabla insertada ✅'); break;
    case 'tableToChart': tableToChart(); break;
    case 'insertLink': { const u=prompt('URL:','https://'); const t=prompt('Texto:','Ver enlace'); if(u){insertHTML(\`<a href="\${u}" target="_blank" style="color:#0084ff">\${t||u}</a>\`);showToast('Enlace insertado');} break; }
    case 'insertEmoji': { const list=['😀','🎉','✅','⚠️','📋','🌿','🦋','🌺','💡','🔥','🏆','💎','🌍','🤝','📚','🇨🇷','🌊','🌋','🐆','🦜']; insertHTML(list[Math.floor(Math.random()*list.length)]); break; }
    case 'insertEquation':  openModal('modalEquation');  break;
    case 'insertSymbol':    openModal('modalSymbol');    break;
    case 'insertShape':     openModal('modalShapes');    break;
    case 'insertChart':     openModal('modalCharts');    break;
    case 'insertColumns':   openModal('modalColumns');   break;
    case 'pageBreak':       insertHTML('<hr style="border:none;border-top:2px dashed #aaa;margin:16px 0"><p></p>'); showToast('Salto de página ✅'); break;
    case 'insertHeader': abrirConfigEncabezado('header'); break;
    case 'insertFooter': abrirConfigEncabezado('footer'); break;
    case 'pageNumber': abrirConfigEncabezado('pagenum'); break;
    case 'insertFootnote': { const fn=prompt('Nota al pie:'); if(fn) insertHTML(\`<hr style="border:none;border-top:1px solid #ddd;margin:20px 0 4px"><p style="font-size:11px;color:#666">¹ \${fn}</p>\`); break; }
    case 'insertSignature': openAnnotation(); break;
    case 'insertTOC':    insertHTML('<div style="border:1px solid #ddd;border-radius:10px;padding:16px;margin:12px 0"><h3 style="color:#0084ff;margin-bottom:10px">📑 Tabla de contenido</h3><p style="font-size:13px;color:#666">1. Introducción .............. 1<br>2. Desarrollo ................. 2<br>3. Conclusiones ............. 5<br>4. Bibliografía .............. 6</p></div>'); showToast('Tabla de contenido ✅'); break;
    case 'insertCitation': { const c=prompt('Autor y año (ej: García, 2023):'); if(c) insertHTML(\` <sup style="color:#0084ff;font-size:11px">[\${c}]</sup>\`); break; }
    case 'insertBibliography': insertHTML('<hr><h3>Bibliografía</h3><p style="font-size:13px">Autor, A. (2023). <em>Título del libro</em>. Editorial.</p>'); showToast('Bibliografía ✅'); break;
    case 'insertCaptionImg': { const c=prompt('Título de la imagen:'); if(c) insertHTML(\`<p style="text-align:center;font-size:12px;color:#666;font-style:italic">Figura 1. \${c}</p>\`); break; }
    case 'insertIndex':  insertHTML('<div style="border:1px solid #ddd;border-radius:10px;padding:16px;margin:12px 0"><h3 style="color:#0084ff;margin-bottom:10px">🗂️ Índice analítico</h3><p style="font-size:13px;color:#666">Término A .... 3, 7<br>Término B .... 5, 9</p></div>'); showToast('Índice ✅'); break;
    case 'portapapeles': renderClipboard(); openModal('modalPortapapeles'); break;
    case 'pageBackground': openModal('modalBackground'); break;
    case 'pageBorder':   editor.style.border='4px solid #0084ff'; editor.style.borderRadius='8px'; showToast('Borde aplicado'); break;
    case 'marginNormal': document.querySelector('.content').style.padding='24px 16px 160px'; showToast('Márgenes normales'); break;
    case 'marginNarrow': document.querySelector('.content').style.padding='8px 6px 160px';  showToast('Márgenes estrechos'); break;
    case 'marginWide':   document.querySelector('.content').style.padding='40px 60px 160px'; showToast('Márgenes amplios'); break;
    case 'orientPortrait':  editor.style.minWidth=''; showToast('Orientación vertical'); break;
    case 'orientLandscape': editor.style.minWidth='700px'; showToast('Orientación horizontal'); break;
    case 'sizeA4':     editor.style.maxWidth='794px'; showToast('A4'); break;
    case 'sizeLetter': editor.style.maxWidth='816px'; showToast('Carta'); break;
    case 'sizeLegal':  editor.style.maxWidth='816px'; editor.style.minHeight='1056px'; showToast('Oficio'); break;
    case 'docFormatProfesional': editor.style.cssText+='font-family:Arial,sans-serif;font-size:14px;line-height:1.15;'; showToast('Formato Profesional ✅'); break;
    case 'docFormatAcademico':   editor.style.cssText+="font-family:'Times New Roman',serif;font-size:14px;line-height:2;"; showToast('Formato Académico ✅'); break;
    case 'docFormatCreativo':    editor.style.cssText+='font-family:Georgia,serif;font-size:15px;line-height:1.5;'; showToast('Formato Creativo ✅'); break;
    case 'estiloNormal':    restoreSelection(); cmd('removeFormat'); showToast('Estilo Normal'); break;
    case 'estiloTitulo':    restoreSelection(); cmd('formatBlock','H1'); showToast('Estilo Título'); break;
    case 'estiloSubtitulo': restoreSelection(); cmd('formatBlock','H2'); showToast('Estilo Subtítulo'); break;
    case 'estiloCita': { const sel=window.getSelection().toString()||'Cita destacada...'; insertHTML(\`<blockquote style="border-left:4px solid #0084ff;margin:8px 0;padding:10px 16px;background:#f0f7ff;border-radius:0 8px 8px 0;font-style:italic;color:#444">\${sel}</blockquote>\`); showToast('Estilo Cita'); break; }
    case 'estiloIntensivo': restoreSelection(); cmd('bold'); cmd('italic'); cmd('foreColor','#e74c3c'); showToast('Énfasis intenso'); break;
    case 'spellcheck':  editor.spellcheck=true; showToast('Corrector activado ✅'); break;
    case 'wordcount':   showToast(\`\${editor.innerText.trim().split(/\\s+/).filter(w=>w).length} palabras | \${editor.innerText.length} caracteres\`); break;
    case 'advancedStats': { const t=editor.innerText; const w=t.trim().split(/\\s+/).filter(x=>x.length>0); const sentences=t.split(/[.!?]+/).filter(s=>s.trim().length>0); const avgWordsPerSentence=sentences.length?Math.round(w.length/sentences.length):0; showToast(\`📊 \${w.length} palabras | \${sentences.length} oraciones | \${t.length} caracteres | ~\${avgWordsPerSentence} palabras/oración\`); break; }
    case 'readingTime': showReadingTime(); break;
    case 'keywordDensity': showKeywordDensity(); break;
    case 'sentimentAnalysis': toggleAI(); setTimeout(()=>aiQuick('sentimiento'),300); break;
    case 'originalityCheck': toggleAI(); setTimeout(()=>aiQuick('originalidad'),300); break;
    case 'docSummary': toggleAI(); setTimeout(()=>aiQuick('resumen'),300); break;
    case 'questionGenAI': toggleAI(); setTimeout(()=>aiQuick('preguntas'),300); break;
    case 'factCheckAI': toggleAI(); setTimeout(()=>aiQuick('factcheck'),300); break;
    case 'correctorRedaccion': toggleAI(); setTimeout(()=>aiQuick('correccionCR'),300); break;
    case 'ivaCalc': openModal('modalIVA'); break;
    case 'apaCorrector': openModal('modalAPA'); break;
    case 'speechGen': toggleAI(); setTimeout(()=>aiQuick('discurso'),300); break;
    case 'reciboTimbre': toggleAI(); setTimeout(()=>aiQuick('reciboTimbre'),300); break;
    case 'contratoHoras': toggleAI(); setTimeout(()=>aiQuick('contratoHoras'),300); break;
    case 'denunciaLaboral': toggleAI(); setTimeout(()=>aiQuick('denunciaLaboral'),300); break;
    case 'imagenIA': openModal('modalImagenIA'); break;
    case 'facturaElectronica': toggleAI(); setTimeout(()=>aiQuick('facturaElectronica'),300); break;
    case 'contratoArrendamiento': toggleAI(); setTimeout(()=>aiQuick('contratoArrendamiento'),300); break;
    case 'estatutosSA': toggleAI(); setTimeout(()=>aiQuick('estatutosSA'),300); break;
    case 'licitacionPublica': toggleAI(); setTimeout(()=>aiQuick('licitacionPublica'),300); break;
    case 'liquidacionLaboral': openModal('modalLiquidacion'); break;
    case 'emailAssistant': openModal('modalEmailAsistente'); break;
    case 'actaReunion': toggleAI(); setTimeout(()=>aiQuick('actaReunion'),300); break;
    case 'cartaPoder': toggleAI(); setTimeout(()=>aiQuick('cartaPoder'),300); break;
    case 'declaracionJurada': toggleAI(); setTimeout(()=>aiQuick('declaracionJurada'),300); break;
    case 'ndaContract': toggleAI(); setTimeout(()=>aiQuick('ndaContract'),300); break;
    case 'correosInst': toggleAI(); setTimeout(()=>aiQuick('correosInst'),300); break;
    case 'cvGenerator': toggleAI(); setTimeout(()=>aiQuick('cvGenerator'),300); break;
    case 'budgetGen': toggleAI(); setTimeout(()=>aiQuick('budgetGen'),300); break;
    case 'premTemplates': openModal('modalPlantillas'); break;
    case 'wordView': editor.style.background='#fff'; editor.style.maxWidth='794px'; editor.style.transform='scale(1)'; document.querySelector('.content').style.background='#e8e8ec'; showToast('Vista estilo Word activada ✅'); break;
    case 'ruler': { const r=document.getElementById('ruler'); r.style.display=r.style.display==='none'?'block':'none'; showToast(\`Regla \${r.style.display==='none'?'oculta':'visible'}\`); break; }
    case 'columnsMode': openModal('modalColumns'); break;
    case 'printPreview': editor.style.background='#fff'; editor.style.maxWidth='794px'; window.print(); break;
    case 'stylesPanel': toggleStylePanel(); break;
    case 'docTheme': { const e=document.getElementById('editor'); const h=document.querySelector('.header'); const temas=[{bg:'#ffffff',head:'linear-gradient(135deg,#0084ff,#ff6b35)'},{bg:'#fdf6e3',head:'linear-gradient(135deg,#b58900,#cb4b16)'},{bg:'#f0f4f8',head:'linear-gradient(135deg,#2c3e50,#3498db)'},{bg:'#fff5f5',head:'linear-gradient(135deg,#e74c3c,#c0392b)'}]; const idx=Math.floor(Math.random()*temas.length); e.style.background=temas[idx].bg; if(h) h.style.background=temas[idx].head; showToast('Tema del documento aplicado 🌈'); break; }
    case 'pageBG': openModal('modalBackground'); break;
    case 'shapesPanel': openModal('modalShapes'); break;
    case 'tableGen': openModal('modalColumns'); insertHTML('<table style="border-collapse:collapse;width:100%;margin:8px 0"><tr><th style="border:1px solid #ddd;padding:8px;background:#f0f7ff">Col 1</th><th style="border:1px solid #ddd;padding:8px;background:#f0f7ff">Col 2</th><th style="border:1px solid #ddd;padding:8px;background:#f0f7ff">Col 3</th></tr><tr><td style="border:1px solid #ddd;padding:8px">Dato</td><td style="border:1px solid #ddd;padding:8px">Dato</td><td style="border:1px solid #ddd;padding:8px">Dato</td></tr><tr><td style="border:1px solid #ddd;padding:8px">Dato</td><td style="border:1px solid #ddd;padding:8px">Dato</td><td style="border:1px solid #ddd;padding:8px">Dato</td></tr></table><p></p>'); closeModal('modalColumns'); showToast('Tabla avanzada insertada ✅'); break;
    case 'orgChart': openModal('modalOrgChart'); break;
    case 'signatureCanvas': openAnnotation(); break;
    case 'qrGenerator': openModal('modalQR'); break;
    case 'rentaCalc': openModal('modalRentaCCSS'); break;
    case 'ccssPlanilla': openModal('modalRentaCCSS'); break;
    case 'docChatbot': toggleAI(); break;
    case 'aiAssist': toggleAI(); break;
    case 'docSummarizer': toggleAI(); setTimeout(()=>aiQuick('resumen'),300); break;
    case 'plagDetector': toggleAI(); setTimeout(()=>aiQuick('originalidad'),300); break;
    case 'questionGen': toggleAI(); setTimeout(()=>aiQuick('preguntas'),300); break;
    case 'sentimentDetector': toggleAI(); setTimeout(()=>aiQuick('sentimiento'),300); break;
    case 'factChecker': toggleAI(); setTimeout(()=>aiQuick('factcheck'),300); break;
    case 'hashtagSEO': toggleAI(); setTimeout(()=>aiQuick('hashtagSEO'),300); break;
    case 'contractAI': toggleAI(); setTimeout(()=>aiQuick('contractAI'),300); break;
    case 'traductorIndigena': openModal('modalTraductorIndigena'); break;
    case 'docTranslator': toggleAI(); setTimeout(()=>aiQuick('traducir'),300); break;
    case 'tocPanel': generarTOCReal(); break;
    case 'bookmarks': abrirBookmarks(); break;
    case 'headerFooter': abrirConfigEncabezado('header'); break;
    case 'pageNumbers': abrirConfigEncabezado('pagenum'); break;
    case 'footnotes': insertarNotaPie(); break;
    case 'comments': abrirComentarios(); break;
    case 'versionHistory': abrirVersiones(); break;
    case 'compareVersions': compararVersionesActual(); break;
    case 'zenMode': activarZenMode(); break;
    case 'immersive': activarModoInmersivo(); break;
    case 'presMode': activarModoPresentacion(); break;
    case 'meetingTimer': abrirWcTools('timer'); break;
    case 'tasksPanel': abrirWcTools('kanban'); break;
    case 'tabsMode': showToast('Por ahora usa "📂 Abrir" para trabajar con otro documento; el modo multidocumento está en desarrollo'); break;
    case 'searchHistory': buscarEnDocumento(); break;
    case 'freeImages': openModal('modalImagenIA'); break;
    case 'pdfReader': wcAbrirArchivo('editor'); break;
    case 'audioTranscript': dictarAudioAlEditor(); break;
    case 'cloudSave': guardarEnNube(); break;
    case 'whatsappBiz': abrirWhatsappBusiness(); break;
    case 'htmlExport': exportarHTMLPrincipal(); break;
    case 'mdExport': exportarMarkdownPrincipal(); break;
    case 'epubExport': exportarEPUBPrincipal(); break;
    case 'autocomplete': toggleAI(); setTimeout(()=>aiQuick('autocompletar'),300); break;
    case 'spellCheck': toggleAI(); setTimeout(()=>aiQuick('ortografia'),300); break;
    case 'textToSpeech': leerDocumentoEnVoz(); break;
    case 'constanciaSalarial': openModal('modalConstanciaSalarial'); break;
    case 'horasExtra': openModal('modalHorasExtra'); break;
    case 'oficiosDGT': openModal('modalOficioDGT'); break;
    case 'numerosALetras': abrirNumerosALetras(); break;
    case 'flashcardsIndigenas': abrirFlashcards(); break;
    case 'translateDoc': toggleAI(); setTimeout(()=>{document.getElementById('aiInp').value='Traduce al inglés el contenido del documento';},300); break;
    case 'acceptChange': showToast('Cambio aceptado ✅'); break;
    case 'rejectChange': showToast('Cambio rechazado ❌'); break;
    case 'vistaLectura':   editor.style.background='#fafafa'; showToast('Vista de lectura'); break;
    case 'vistaImpresion': editor.style.background='#fff'; editor.style.maxWidth='794px'; showToast('Diseño de impresión'); break;
    case 'toggleRuler': { const r=document.getElementById('ruler'); r.style.display=r.style.display==='none'?'block':'none'; showToast(\`Regla \${r.style.display==='none'?'oculta':'visible'}\`); break; }
    case 'toggleGrid': { const gi=editor.style.backgroundImage; editor.style.backgroundImage=gi?'':'linear-gradient(rgba(0,132,255,.05) 1px,transparent 1px),linear-gradient(90deg,rgba(0,132,255,.05) 1px,transparent 1px)'; editor.style.backgroundSize='20px 20px'; showToast('Cuadrícula alternada'); break; }
    case 'zoom75':    editor.style.transform='scale(.75)'; editor.style.transformOrigin='top left'; showToast('Zoom: 75%');  break;
    case 'zoom100':   editor.style.transform='scale(1)';   editor.style.transformOrigin='top left'; showToast('Zoom: 100%'); break;
    case 'zoom150':   editor.style.transform='scale(1.5)'; editor.style.transformOrigin='top left'; showToast('Zoom: 150%'); break;
    case 'macros':    showToast('Ctrl+B Negrita | Ctrl+I Cursiva | Ctrl+U Subrayado | Ctrl+Z Deshacer | Ctrl+S Guardar'); break;
    case 'new': {
      const tieneContenido = editor.innerText.trim().length > 0;
      if (tieneContenido && !confirm('¿Crear un documento nuevo? Se perderá el contenido actual si no lo has guardado.')) break;
      editor.innerHTML = '<p>Escribe aquí tu nuevo documento...</p>';
      document.getElementById('contentTitle').textContent = 'Documento nuevo — WC Corporate';
      updateStats();
      updatePageBreaks();
      showToast('📄 Documento nuevo creado ✅');
      break;
    }
    case 'open': { const sv=localStorage.getItem('wc-v23'); if(sv){editor.innerHTML=sv;updateStats();showToast('Documento cargado ✅');}else showToast('No hay documento guardado'); break; }
    case 'plantillas':  openModal('modalPlantillas'); break;
    case 'openAI':      toggleAI(); break;
    case 'aiMejorar':   { const s=window.getSelection().toString(); if(!s){showToast('Selecciona texto primero');break;} toggleAI(); setTimeout(()=>{document.getElementById('aiInp').value='Mejora el siguiente texto a nivel universitario: '+s;sendAI();},400); break; }
    case 'aiResumen':   toggleAI(); setTimeout(()=>aiQuick('resumen'),300); break;
    case 'aiContinuar': toggleAI(); setTimeout(()=>{document.getElementById('aiInp').value='Continúa el siguiente texto de forma natural y coherente, mismo estilo y nivel académico: '+editor.innerText.substring(0,600);sendAI();},400); break;
    case 'aiTraducir':  toggleAI(); setTimeout(()=>aiQuick('traducir'),300); break;
    case 'createEnvelope': insertHTML('<div style="border:2px solid #333;border-radius:8px;padding:24px;max-width:400px;margin:10px auto"><p style="font-size:12px;color:#666">Remitente: _______________</p><div style="text-align:center;margin-top:40px"><p><strong>Destinatario:</strong></p><p>_______________<br>_______________</p></div></div>'); showToast('Sobre creado ✅'); break;
    case 'createLabel':  insertHTML('<div style="border:1px dashed #0084ff;border-radius:6px;padding:12px 16px;display:inline-block;margin:6px;min-width:120px;text-align:center;font-size:12px">🏷️ Etiqueta<br>_______________</div>'); showToast('Etiqueta creada ✅'); break;
    case 'startMerge':   showToast('Prepara tu plantilla y usa "Insertar campos"'); break;
    case 'insertFields': insertHTML(' <span style="background:#fff3cd;border:1px solid #ffc107;border-radius:4px;padding:1px 8px;font-size:13px">«Nombre»</span> '); showToast('Campo insertado ✅'); break;
    case 'previewMerge': showToast('Vista previa: documento formateado correctamente'); break;
    case 'finishMerge':  showToast('Combinación finalizada — exporta con Archivo → Exportar'); break;
    case 'insert-bribri':  insertHTML(' <em>[Bribri: Shkëkë = Hola]</em> ');            showToast('Insertado: Bribri');   break;
    case 'insert-cabecar': insertHTML(' <em>[Cabécar: Ká bë́rë = Buenos días]</em> '); showToast('Insertado: Cabécar');  break;
    case 'insert-maleku':  insertHTML(' <em>[Maleku: Ma lha maráma = Buenas tardes]</em> '); showToast('Insertado: Maleku');  break;
    case 'insert-boruca':  insertHTML(' <em>[Boruca (Brunca): Shíi = Gracias]</em> ');           showToast('Insertado: Boruca');   break;
    case 'insert-teribe':  insertHTML(' <em>[Térraba: Di = Agua]</em> ');               showToast('Insertado: Térraba');  break;
    case 'insert-guaymi':  insertHTML(' <em>[Ngäbe: Bri = Casa]</em> ');                showToast('Insertado: Ngäbe');    break;
    case 'insert-brunca':  insertHTML(' <em>[Brunca: Danzö = Hola]</em> ');             showToast('Insertado: Brunca');   break;
    case 'lang-bribri':    switchLang('bribri');   break;
    case 'lang-cabecar':   switchLang('cabecar');  break;
    case 'lang-maleku':    switchLang('maleku');   break;
    case 'lang-ingles':    switchLang('ingles');   break;
    case 'lang-espanol':   switchLang('espanol');  break;
    case 'lang-brunca':    switchLang('brunca');   break;
    case 'dict-indigena':      showToast('Diccionario: usa el buscador integrado arriba'); break;
    case 'translate-indigena': showToast('Traducción a lengua — próximamente'); break;
    case 'buscar-seleccion':   buscarSeleccion();  break;
    case 'escuchar-idioma':    escucharIdioma();   break;
    default: showToast(\`\${a} — disponible\`);
  }
}

/* ── BOTONES INFERIORES ── */
document.getElementById('btnBack').onclick    = () => cmd('undo');
document.getElementById('btnForward').onclick = () => cmd('redo');
document.getElementById('btnSave').onclick    = () => { localStorage.setItem('wc-v23',editor.innerHTML); showToast('Guardado 💾'); };
document.getElementById('btnCopy').onclick    = () => { addToClipboard(editor.innerText,'Copiado'); navigator.clipboard.writeText(editor.innerText); showToast('Texto copiado ⧉'); };
document.getElementById('btnShare').onclick   = async () => { if(navigator.share) await navigator.share({title:'WC Editor',text:editor.innerText}); else{navigator.clipboard.writeText(editor.innerText);showToast('Copiado para compartir');} };

document.addEventListener('keydown', e => { if(e.ctrlKey && e.key==='s'){e.preventDefault();localStorage.setItem('wc-v23',editor.innerHTML);showToast('Guardado 💾');} });

/* ── DOCUMENTO SEPARADO ── */
function openDocWindow(content,title) {
  document.getElementById('docWindowTitle').textContent = '📄 '+(title||'Documento nuevo');
  document.getElementById('docWindowEditor').innerHTML = content||'<p>Escribe aquí...</p>';
  document.getElementById('docOverlay').classList.add('show');
}
function closeDocWindow() { document.getElementById('docOverlay').classList.remove('show'); }

function docWindowPrint() {
  var content = document.getElementById('docWindowEditor').innerHTML;
  wcPrintHTML('<!DOCTYPE html><html><head><meta charset="UTF-8"><style>body{font-family:Calibri,Arial,sans-serif;margin:2.5cm;font-size:12pt;line-height:1.6;}h1,h2,h3{color:#1a2942;}table{border-collapse:collapse;width:100%;}td,th{border:1px solid #ddd;padding:8px;}@media print{body{margin:1cm;}}</style></head><body>'+content+'</body></html>');
}
function docWindowExportTxt() {
  const text = document.getElementById('docWindowEditor').innerText;
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([text],{type:'text/plain'}));
  a.download = 'documento.txt'; a.click(); showToast('TXT descargado ✅');
}
function docWindowExportHtml() {
  const content = document.getElementById('docWindowEditor').innerHTML;
  const full = \`<!DOCTYPE html><html><head><meta charset="UTF-8"><style>body{font-family:Arial,sans-serif;margin:2.5cm;font-size:12pt;line-height:1.6;}h1,h2,h3{color:#333;}table{border-collapse:collapse;width:100%;}td,th{border:1px solid #ddd;padding:8px;}</style></head><body>\${content}</body></html>\`;
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([full],{type:'text/html'}));
  a.download = 'documento.html'; a.click(); showToast('HTML descargado ✅');
}
function docWindowInsertMain() {
  editor.innerHTML += document.getElementById('docWindowEditor').innerHTML;
  updateStats(); closeDocWindow(); showToast('Insertado en el editor principal ✅');
}

/* ── FIRMA ── */
let signCtx, signDrawing=false, signColor='#000', signSize=1.5;

function initSignCanvas() {
  const canvas = document.getElementById('signCanvas');
  canvas.width = canvas.offsetWidth; canvas.height = 220;
  signCtx = canvas.getContext('2d');
  signCtx.lineCap='round'; signCtx.lineJoin='round';
  signCtx.strokeStyle=signColor; signCtx.lineWidth=signSize;
  canvas.addEventListener('mousedown', e=>{signDrawing=true;const p=getPos(e,canvas);signCtx.beginPath();signCtx.moveTo(p.x,p.y);});
  canvas.addEventListener('mousemove', e=>{if(!signDrawing)return;const p=getPos(e,canvas);signCtx.lineTo(p.x,p.y);signCtx.stroke();});
  canvas.addEventListener('mouseup',   ()=>signDrawing=false);
  canvas.addEventListener('mouseleave',()=>signDrawing=false);
  canvas.addEventListener('touchstart',e=>{e.preventDefault();signDrawing=true;const p=getPos(e.touches[0],canvas);signCtx.beginPath();signCtx.moveTo(p.x,p.y);},{passive:false});
  canvas.addEventListener('touchmove', e=>{e.preventDefault();if(!signDrawing)return;const p=getPos(e.touches[0],canvas);signCtx.lineTo(p.x,p.y);signCtx.stroke();},{passive:false});
  canvas.addEventListener('touchend',  ()=>signDrawing=false);
}
function getPos(e,canvas){const r=canvas.getBoundingClientRect();return{x:(e.clientX||e.pageX)-r.left,y:(e.clientY||e.pageY)-r.top};}
function setSignColor(color,el){signColor=color;signCtx.strokeStyle=color;document.querySelectorAll('.sign-color').forEach(c=>c.classList.remove('active'));el.classList.add('active');}
function setSignSize(size,el){signSize=size;signCtx.lineWidth=size;document.querySelectorAll('.sign-size').forEach(b=>b.classList.remove('active'));el.classList.add('active');}
function clearSignCanvas(){const canvas=document.getElementById('signCanvas');signCtx.clearRect(0,0,canvas.width,canvas.height);}
function openAnnotation(){document.getElementById('annotationOverlay').classList.add('show');setTimeout(initSignCanvas,100);}
function closeAnnotation(){document.getElementById('annotationOverlay').classList.remove('show');}
function insertSignature(mode){
  const canvas=document.getElementById('signCanvas');
  const dataUrl=canvas.toDataURL('image/png');
  let style=mode==='stamp'?'max-width:120px;height:60px;border:2px solid #0084ff;border-radius:50%;padding:4px;display:inline-block;margin:4px;':'max-width:200px;height:80px;display:block;margin:8px 0;';
  insertHTML(\`<img src="\${dataUrl}" style="\${style}" alt="Firma">\`);
  closeAnnotation(); showToast(mode==='stamp'?'Sello insertado ✅':'Firma insertada ✅');
}

/* ── EXPORTAR ── */
function getCleanHTML() {
  return \`<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Documento WC Editor</title>
<style>*{margin:0;padding:0;box-sizing:border-box;}body{font-family:Arial,sans-serif;margin:2.5cm;font-size:12pt;line-height:1.7;color:#000;}
h1{font-size:2em;margin:16px 0 8px;}h2{font-size:1.5em;margin:14px 0 6px;}h3{font-size:1.2em;margin:12px 0 4px;}
p{margin:6px 0;}ul,ol{padding-left:24px;margin:6px 0;}table{border-collapse:collapse;width:100%;margin:8px 0;}
td,th{border:1px solid #ccc;padding:8px;}img{max-width:100%;}
blockquote{border-left:4px solid #0084ff;margin:8px 0;padding:10px 16px;background:#f0f7ff;}
@media print{body{margin:1.5cm;}@page{margin:1.5cm;}}</style></head><body>\${editor.innerHTML}</body></html>\`;
}

function openExport()  { document.getElementById('exportOverlay').classList.add('show'); }
function closeExport() { document.getElementById('exportOverlay').classList.remove('show'); }

async function exportAs(format) {
  closeExport();
  var textOnly = editor.innerText;
  var title = (editor.querySelector('h1')?editor.querySelector('h1').innerText.slice(0,40):'documento').replace(/[^\\w\\s-]/g,'').trim()||'documento';
  switch(format) {
    case 'pdf': {
      showToast('Generando PDF...');
      try {
        if(typeof html2canvas==='undefined'||typeof window.jspdf==='undefined'){
          wcPrintHTML(getCleanHTML()); showToast('Usa Guardar como PDF en el diálogo'); break;
        }
        var jsPDF = window.jspdf.jsPDF;
        var canvas = await html2canvas(editor, {scale:2, backgroundColor:'#ffffff', useCORS:true});
        var img = canvas.toDataURL('image/jpeg', 0.95);
        var pdf = new jsPDF('p','mm','a4');
        var pw = pdf.internal.pageSize.getWidth();
        var ph = pdf.internal.pageSize.getHeight();
        var iw = pw;
        var ih = canvas.height * pw / canvas.width;
        var totalPages = Math.max(1, Math.ceil(ih / ph));
        function drawHF(pageNum){
          pdf.setFontSize(9);
          pdf.setTextColor(130,130,130);
          if(wcDocHeader && wcDocHeader.enabled && wcDocHeader.text){
            pdf.text(wcDocHeader.text, pw/2, 8, {align:'center'});
          }
          var footParts = [];
          if(wcDocFooter && wcDocFooter.enabled && wcDocFooter.text){ footParts.push(wcDocFooter.text); }
          if(wcPageNum && wcPageNum.enabled){
            var pnText = wcPageNum.format.replace('{n}', pageNum).replace('{total}', totalPages);
            if(wcPageNum.position==='header'){ pdf.text(pnText, pw-12, 8, {align:'right'}); }
            else { footParts.push(pnText); }
          }
          if(footParts.length){ pdf.text(footParts.join('    '), pw/2, ph-6, {align:'center'}); }
        }
        var y = 0;
        var topMargin = (wcDocHeader && wcDocHeader.enabled) ? 12 : 0;
        pdf.addImage(img, 'JPEG', 0, topMargin, iw, ih);
        drawHF(1);
        var rem = ih - (ph - topMargin);
        var pageN = 1;
        while(rem > 0){
          pdf.addPage();
          pageN++;
          y = topMargin - (ph - topMargin) * (pageN-1);
          pdf.addImage(img, 'JPEG', 0, y, iw, ih);
          drawHF(pageN);
          rem -= ph;
        }
        pdf.save(title+'.pdf');
        /* preview */
      } catch(e){
        wcPrintHTML(getCleanHTML()); showToast('Usa Guardar como PDF en el diálogo');
      }
      break;
    }
    case 'word': {
      var wordHTML="<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><meta name=ProgId content=Word.Document><style>body{font-family:Calibri,Arial,sans-serif;font-size:12pt;margin:2.5cm;line-height:1.5;}h1{font-size:16pt;font-weight:bold;}h2{font-size:14pt;font-weight:bold;}h3{font-size:12pt;font-weight:bold;}p{margin:6pt 0;text-align:justify;}table{border-collapse:collapse;width:100%;}td,th{border:1pt solid #ccc;padding:6pt;}blockquote{border-left:3pt solid #0084ff;padding-left:12pt;color:#34495e;font-style:italic;}</style></head><body>"+editor.innerHTML+"</body></html>";
      wcDownload(new Blob(['\\ufeff'+wordHTML],{type:'application/msword'}), title+'.doc', 'application/msword'); /* preview */ break;
    }
    case 'rtf': {
      var rtf="{\\\\rtf1\\\\ansi\\\\deff0\\n{\\\\fonttbl{\\\\f0 Calibri;}}\\n\\\\f0\\\\fs23\\n"+textOnly.replace(/\\n/g,'\\\\par\\n')+"\\n}";
      wcDownload(new Blob([rtf],{type:'application/rtf'}), title+'.rtf', 'application/rtf'); /* preview */ break;
    }
    case 'epub': {
      showToast('Generando EPUB...');
      try {
        if(typeof JSZip==='undefined'){ showToast('EPUB no disponible'); break; }
        var zip = new JSZip();
        zip.file('mimetype','application/epub+zip',{compression:'STORE'});
        var meta = zip.folder('META-INF');
        meta.file('container.xml','<?xml version="1.0" encoding="UTF-8"?>\\n<container version="1.0" xmlns="urn:oasis:names:tc:opendocument:xmlns:container">\\n<rootfiles><rootfile full-path="OEBPS/content.opf" media-type="application/oebps-package+xml"/></rootfiles>\\n</container>');
        var oebps = zip.folder('OEBPS');
        var uid = 'wc-'+Date.now();
        var bodyHTML = editor.innerHTML;
        var chapterXHTML = '<?xml version="1.0" encoding="utf-8"?>\\n<!DOCTYPE html>\\n<html xmlns="http://www.w3.org/1999/xhtml"><head><title>'+title+'</title><link rel="stylesheet" type="text/css" href="style.css"/></head><body>'+bodyHTML+'</body></html>';
        oebps.file('chapter1.xhtml', chapterXHTML);
        oebps.file('style.css','body{font-family:serif;line-height:1.6;margin:1em;}h1{font-size:1.6em;}h2{font-size:1.3em;}p{margin:0.6em 0;text-align:justify;}blockquote{border-left:3px solid #0084ff;padding-left:1em;font-style:italic;color:#555;}');
        oebps.file('content.opf','<?xml version="1.0" encoding="utf-8"?>\\n<package xmlns="http://www.idpf.org/2007/opf" version="3.0" unique-identifier="bookid"><metadata xmlns:dc="http://purl.org/dc/elements/1.1/"><dc:identifier id="bookid">'+uid+'</dc:identifier><dc:title>'+title+'</dc:title><dc:language>es</dc:language><dc:creator>WC Corporate Editor</dc:creator><meta property="dcterms:modified">'+new Date().toISOString().split('.')[0]+'Z</meta></metadata><manifest><item id="nav" href="nav.xhtml" media-type="application/xhtml+xml" properties="nav"/><item id="ch1" href="chapter1.xhtml" media-type="application/xhtml+xml"/><item id="css" href="style.css" media-type="text/css"/></manifest><spine><itemref idref="ch1"/></spine></package>');
        oebps.file('nav.xhtml','<?xml version="1.0" encoding="utf-8"?>\\n<!DOCTYPE html>\\n<html xmlns="http://www.w3.org/1999/xhtml" xmlns:epub="http://www.idpf.org/2007/ops"><head><title>'+title+'</title></head><body><nav epub:type="toc" id="toc"><h1>Contenido</h1><ol><li><a href="chapter1.xhtml">'+title+'</a></li></ol></nav></body></html>');
        var blob = await zip.generateAsync({type:'blob', mimeType:'application/epub+zip'});
        wcDownload(blob, title+'.epub');
        /* preview */
      } catch(e){ showToast('Error EPUB: '+e.message); }
      break;
    }
    case 'odt': {
      wcDownload(new Blob([getCleanHTML()],{type:'application/vnd.oasis.opendocument.text'}), title+'.odt', 'application/vnd.oasis.opendocument.text'); /* preview */ break;
    }
    case 'html': {
      wcDownload(new Blob([getCleanHTML()],{type:'text/html;charset=utf-8'}), title+'.html', 'text/html;charset=utf-8'); /* preview */ break;
    }
    case 'txt': {
      wcDownload(new Blob([textOnly],{type:'text/plain;charset=utf-8'}), title+'.txt', 'text/plain;charset=utf-8'); /* preview */ break;
    }
  }
}

/* ── ARRANQUE ── */
const saved = localStorage.getItem('wc-v23');
if (saved) editor.innerHTML = saved;
updateStats();
renderCommunityPanel();
setInterval(()=>localStorage.setItem('wc-v23',editor.innerHTML), 30000);

/* ── MAQUETACIÓN DE LIBROS v24 ── */
function maqDosColumnas(){
  insertHTML('<div style="display:grid;grid-template-columns:1fr 1fr;gap:24px;margin:14px 0;text-align:justify"><div>Columna izquierda. Escribe aquí el contenido de la primera columna del libro.</div><div>Columna derecha. Aquí va el contenido de la segunda columna.</div></div><p></p>');
  showToast('Dos columnas');
}
function maqTresColumnas(){
  insertHTML('<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:18px;margin:14px 0;text-align:justify"><div>Columna 1...</div><div>Columna 2...</div><div>Columna 3...</div></div><p></p>');
  showToast('Tres columnas');
}
function maqUnaColumna(){
  insertHTML('<div style="max-width:34em;margin:14px auto;text-align:justify;line-height:1.7">Contenido de la columna central. Ideal para el cuerpo de un libro o ensayo.</div><p></p>');
  showToast('Una columna');
}
function maqSangria(){
  var s=window.getSelection(); var t=(s&&s.toString().trim())?s.toString():'Inicio del párrafo con sangría editorial, como en los libros impresos profesionales.';
  restoreSelection();
  insertHTML('<p style="text-indent:2.2em;text-align:justify;line-height:1.75;margin:6px 0">'+t+'</p>');
  showToast('Párrafo editorial');
}
function maqSeparador(){
  insertHTML('<div style="text-align:center;margin:26px 0;color:#0084ff;font-size:20px;letter-spacing:10px">— ✦ —</div>');
  showToast('Separador');
}
function maqCitaDestacada(){
  var s=window.getSelection(); var t=(s&&s.toString().trim())?s.toString():'Escribe aquí la cita destacada del capítulo.';
  restoreSelection();
  insertHTML('<blockquote style="border-left:4px solid #0084ff;margin:22px 8px;padding:14px 22px;background:#f0f7ff;border-radius:0 8px 8px 0;font-style:italic;font-size:1.12em;color:#1a237e">'+t+'</blockquote><p></p>');
  showToast('Cita destacada');
}
function maqCapitulo(){
  var s=window.getSelection(); var t=(s&&s.toString().trim())?s.toString():'Título del capítulo';
  restoreSelection();
  insertHTML('<div style="page-break-before:always;margin:40px 0 24px;text-align:center"><div style="color:#0084ff;font-size:13px;letter-spacing:4px;text-transform:uppercase">Capítulo</div><h1 style="font-size:2em;margin:8px 0;border:none">'+t+'</h1><div style="color:#0084ff;font-size:18px;letter-spacing:8px;margin-top:8px">— ✦ —</div></div><p></p>');
  showToast('Capítulo de libro');
}
function maqPortadaLibro(){
  var s=window.getSelection(); var t=(s&&s.toString().trim())?s.toString():'Título del Libro';
  restoreSelection();
  insertHTML('<div style="page-break-after:always;min-height:60vh;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;border:2px solid #0084ff;border-radius:12px;padding:50px 30px;margin:14px 0;background:linear-gradient(135deg,#f0f7ff,#fff)"><div style="color:#0084ff;font-size:14px;letter-spacing:6px;text-transform:uppercase;margin-bottom:20px">WC Corporate</div><h1 style="font-size:2.6em;margin:14px 0;border:none;color:#1a237e">'+t+'</h1><div style="width:80px;height:3px;background:#0084ff;margin:18px 0"></div><div style="color:#666;font-style:italic;margin-top:14px">Subtítulo o autor</div></div><p></p>');
  showToast('Portada de libro');
}

/* ── EXPORTADORES VENTANA DOCUMENTO v24 ── */
async function docWindowExport(format){
  var dw = document.getElementById('docWindowEditor');
  if(!dw){ showToast('Sin documento'); return; }
  var html = dw.innerHTML;
  var textOnly = dw.innerText;
  var title = (dw.querySelector('h1')?dw.querySelector('h1').innerText.slice(0,40):'documento').replace(/[^\\w\\s-]/g,'').trim()||'documento';
  switch(format){
    case 'pdf': {
      showToast('Generando PDF...');
      try{
        if(typeof html2canvas==='undefined'||typeof window.jspdf==='undefined'){
          wcPrintHTML('<html><head><meta charset=UTF-8><style>body{font-family:Calibri,Arial;margin:2.5cm;line-height:1.6}</style></head><body>'+html+'</body></html>'); break;
        }
        var jsPDF=window.jspdf.jsPDF;
        var canvas=await html2canvas(dw,{scale:2,backgroundColor:'#ffffff',useCORS:true});
        var img=canvas.toDataURL('image/jpeg',0.95);
        var pdf=new jsPDF('p','mm','a4');
        var pw=pdf.internal.pageSize.getWidth(), ph=pdf.internal.pageSize.getHeight();
        var ih=canvas.height*pw/canvas.width, y=0;
        pdf.addImage(img,'JPEG',0,y,pw,ih);
        var rem=ih-ph;
        while(rem>0){ pdf.addPage(); y=rem-ih; pdf.addImage(img,'JPEG',0,y,pw,ih); rem-=ph; }
        pdf.save(title+'.pdf'); /* preview */
      }catch(e){ showToast('Error PDF'); }
      break;
    }
    case 'word': {
      var wordHTML="<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><meta name=ProgId content=Word.Document><style>body{font-family:Calibri,Arial,sans-serif;font-size:12pt;margin:2.5cm;line-height:1.5;}h1{font-size:16pt;font-weight:bold;}h2{font-size:14pt;font-weight:bold;}p{margin:6pt 0;text-align:justify;}</style></head><body>"+html+"</body></html>";
      wcDownload(new Blob(['\\ufeff'+wordHTML],{type:'application/msword'}), title+'.doc', 'application/msword'); /* preview */ break;
    }
    case 'rtf': {
      var rtf="{\\\\rtf1\\\\ansi\\\\deff0\\n{\\\\fonttbl{\\\\f0 Calibri;}}\\n\\\\f0\\\\fs23\\n"+textOnly.replace(/\\n/g,'\\\\par\\n')+"\\n}";
      wcDownload(new Blob([rtf],{type:'application/rtf'}), title+'.rtf', 'application/rtf'); /* preview */ break;
    }
    case 'epub': {
      showToast('Generando EPUB...');
      try{
        if(typeof JSZip==='undefined'){ showToast('EPUB no disponible'); break; }
        var zip=new JSZip();
        zip.file('mimetype','application/epub+zip',{compression:'STORE'});
        zip.folder('META-INF').file('container.xml','<?xml version="1.0" encoding="UTF-8"?>\\n<container version="1.0" xmlns="urn:oasis:names:tc:opendocument:xmlns:container"><rootfiles><rootfile full-path="OEBPS/content.opf" media-type="application/oebps-package+xml"/></rootfiles></container>');
        var oebps=zip.folder('OEBPS'); var uid='wc-'+Date.now();
        oebps.file('chapter1.xhtml','<?xml version="1.0" encoding="utf-8"?>\\n<!DOCTYPE html>\\n<html xmlns="http://www.w3.org/1999/xhtml"><head><title>'+title+'</title><link rel="stylesheet" type="text/css" href="style.css"/></head><body>'+html+'</body></html>');
        oebps.file('style.css','body{font-family:serif;line-height:1.6;margin:1em;}h1{font-size:1.6em;}p{margin:0.6em 0;text-align:justify;}');
        oebps.file('content.opf','<?xml version="1.0" encoding="utf-8"?>\\n<package xmlns="http://www.idpf.org/2007/opf" version="3.0" unique-identifier="bookid"><metadata xmlns:dc="http://purl.org/dc/elements/1.1/"><dc:identifier id="bookid">'+uid+'</dc:identifier><dc:title>'+title+'</dc:title><dc:language>es</dc:language><dc:creator>WC Corporate Editor</dc:creator><meta property="dcterms:modified">'+new Date().toISOString().split('.')[0]+'Z</meta></metadata><manifest><item id="nav" href="nav.xhtml" media-type="application/xhtml+xml" properties="nav"/><item id="ch1" href="chapter1.xhtml" media-type="application/xhtml+xml"/><item id="css" href="style.css" media-type="text/css"/></manifest><spine><itemref idref="ch1"/></spine></package>');
        oebps.file('nav.xhtml','<?xml version="1.0" encoding="utf-8"?>\\n<!DOCTYPE html>\\n<html xmlns="http://www.w3.org/1999/xhtml" xmlns:epub="http://www.idpf.org/2007/ops"><head><title>'+title+'</title></head><body><nav epub:type="toc"><h1>Contenido</h1><ol><li><a href="chapter1.xhtml">'+title+'</a></li></ol></nav></body></html>');
        var blob=await zip.generateAsync({type:'blob',mimeType:'application/epub+zip'});
        wcDownload(blob, title+'.epub'); /* preview */
      }catch(e){ showToast('Error EPUB'); }
      break;
    }
    case 'odt': {
      var full='<!DOCTYPE html><html><head><meta charset=UTF-8><style>body{font-family:Calibri,Arial;margin:2.5cm;line-height:1.6}</style></head><body>'+html+'</body></html>';
      wcDownload(new Blob([full],{type:'application/vnd.oasis.opendocument.text'}), title+'.odt', 'application/vnd.oasis.opendocument.text'); /* preview */ break;
    }
    case 'html': {
      var full='<!DOCTYPE html><html><head><meta charset=UTF-8><title>'+title+'</title><style>body{font-family:Calibri,Arial;margin:2.5cm;line-height:1.7;max-width:800px}h1{font-size:2em}p{text-align:justify}</style></head><body>'+html+'</body></html>';
      wcDownload(new Blob([full],{type:'text/html;charset=utf-8'}), title+'.html', 'text/html;charset=utf-8'); /* preview */ break;
    }
    case 'txt': {
      wcDownload(new Blob([textOnly],{type:'text/plain;charset=utf-8'}), title+'.txt', 'text/plain;charset=utf-8'); /* preview */ break;
    }
  }
}

/* ── DESCARGA ROBUSTA (funciona en desktop y móvil) ── */
function wcDownload(content, filename, mime){
  var blob = (content instanceof Blob) ? content : new Blob([content], {type:mime||'application/octet-stream'});
  wcPreview(blob, filename, mime);
}
function wcPreview(blob, filename, mime){
  var ext = (filename.split('.').pop()||'').toLowerCase();
  var url = URL.createObjectURL(blob);
  // Formatos que el navegador puede MOSTRAR directamente: pdf, html, txt
  var viewable = (ext==='pdf'||ext==='html'||ext==='htm'||ext==='txt');
  // Intentar abrir en pestaña/visor
  var win = window.open(url, '_blank');
  if(win){
    showToast('Abriendo '+ext.toUpperCase()+'...');
    return;
  }
  // Si el popup fue bloqueado: mostrar un panel con vista previa + botones
  wcShowPreviewPanel(blob, url, filename, ext, viewable);
}
function wcShowPreviewPanel(blob, url, filename, ext, viewable){
  var old = document.getElementById('__wcPrev'); if(old) old.remove();
  var ov = document.createElement('div');
  ov.id='__wcPrev';
  ov.style.cssText='position:fixed;inset:0;z-index:99999;background:rgba(0,0,0,.55);display:flex;align-items:center;justify-content:center;padding:16px';
  var box = document.createElement('div');
  box.style.cssText='background:#fff;border-radius:14px;max-width:600px;width:100%;max-height:88vh;overflow:hidden;display:flex;flex-direction:column;box-shadow:0 12px 40px rgba(0,0,0,.4)';
  var head = document.createElement('div');
  head.style.cssText='padding:14px 18px;border-bottom:1px solid #eee;display:flex;align-items:center;justify-content:space-between';
  head.innerHTML='<div style="font-weight:700;color:#1a2942">Vista previa — '+filename+'</div>';
  var closeX = document.createElement('button');
  closeX.textContent='✕'; closeX.style.cssText='background:none;border:none;font-size:20px;color:#999;cursor:pointer';
  closeX.onclick=function(){ ov.remove(); };
  head.appendChild(closeX);
  var body = document.createElement('div');
  body.style.cssText='padding:0;overflow:auto;flex:1;background:#f0f0f3';
  var sheet = document.createElement('div');
  sheet.style.cssText='background:#fff;margin:16px auto;max-width:21cm;padding:2cm 1.8cm;box-shadow:0 2px 12px rgba(0,0,0,.12);font-family:Calibri,Segoe UI,Arial,sans-serif;font-size:11.5pt;line-height:1.6;color:#1a1a1a;min-height:60vh';
  sheet.innerHTML='<div style="text-align:center;color:#999;padding:40px">Cargando vista previa...</div>';
  body.appendChild(sheet);

  if(ext==='pdf'){
    sheet.style.padding='0'; sheet.style.background='transparent'; sheet.style.boxShadow='none';
    sheet.innerHTML='<iframe src="'+url+'" style="width:100%;height:64vh;border:none;background:#fff;border-radius:6px"></iframe>';
  } else if(ext==='txt'){
    var rd=new FileReader();
    rd.onload=function(){ sheet.innerHTML='<pre style="white-space:pre-wrap;font-family:inherit;margin:0">'+rd.result.replace(/&/g,'&amp;').replace(/</g,'&lt;')+'</pre>'; };
    rd.readAsText(blob);
  } else if(ext==='html'||ext==='htm'){
    var rd2=new FileReader();
    rd2.onload=function(){ var m=rd2.result.match(/<body[^>]*>([\\s\\S]*?)<\\/body>/i); sheet.innerHTML = m?m[1]:rd2.result; };
    rd2.readAsText(blob);
  } else if(ext==='epub'){
    wcRenderEpubPreview(blob, sheet);
  } else if(ext==='odt'){
    wcRenderOdtPreview(blob, sheet);
  } else if(ext==='doc'||ext==='docx'){
    wcRenderDocPreview(blob, sheet, url);
  } else if(ext==='rtf'){
    var rd3=new FileReader();
    rd3.onload=function(){ var txt=rd3.result.replace(/\\\\par[d]?/g,'\\n').replace(/\\{[^{}]*\\}/g,'').replace(/\\\\[a-z]+-?\\d* ?/g,'').trim(); sheet.innerHTML='<pre style="white-space:pre-wrap;font-family:inherit;margin:0">'+txt.replace(/</g,'&lt;')+'</pre>'; };
    rd3.readAsText(blob);
  } else {
    sheet.innerHTML='<div style="text-align:center;padding:40px;color:#444"><div style="font-size:44px">📄</div><div style="margin:12px 0;font-weight:600">Archivo '+ext.toUpperCase()+' listo</div></div>';
  }

  var foot = document.createElement('div');
  foot.style.cssText='padding:12px 18px;border-top:1px solid #eee;display:flex;gap:10px;justify-content:flex-end;background:#fff';
  var openBtn = document.createElement('a');
  openBtn.href=url; openBtn.target='_blank'; openBtn.rel='noopener'; openBtn.download=filename;
  openBtn.textContent='Guardar archivo';
  openBtn.style.cssText='background:#0084ff;color:#fff;padding:10px 20px;border-radius:9px;font-weight:600;text-decoration:none';
  foot.appendChild(openBtn);
  box.appendChild(head); box.appendChild(body); box.appendChild(foot);
  ov.appendChild(box);
  document.body.appendChild(ov);
}
function wcRenderEpubPreview(blob, sheet){
  if(typeof JSZip==='undefined'){ sheet.innerHTML='<div style="padding:30px;text-align:center;color:#777">Vista previa no disponible sin conexión</div>'; return; }
  JSZip.loadAsync(blob).then(function(zip){
    var xhtmlFile=null;
    zip.forEach(function(path,file){ if(/chapter1\\.xhtml$|\\.xhtml$/i.test(path) && !xhtmlFile) xhtmlFile=file; });
    if(!xhtmlFile){ sheet.innerHTML='<div style="padding:30px;color:#777">Sin contenido legible</div>'; return; }
    xhtmlFile.async('string').then(function(txt){
      var m=txt.match(/<body[^>]*>([\\s\\S]*?)<\\/body>/i);
      sheet.innerHTML = m?m[1]:txt;
    });
  }).catch(function(){ sheet.innerHTML='<div style="padding:30px;color:#777">No se pudo leer el archivo</div>'; });
}
function wcRenderOdtPreview(blob, sheet){
  if(typeof JSZip==='undefined'){ sheet.innerHTML='<div style="padding:30px;text-align:center;color:#777">Vista previa no disponible</div>'; return; }
  // Nuestro ODT es HTML envuelto; intentar leer como texto
  var rd=new FileReader();
  rd.onload=function(){ var m=rd.result.match(/<body[^>]*>([\\s\\S]*?)<\\/body>/i); sheet.innerHTML = m?m[1]:rd.result; };
  rd.readAsText(blob);
}
function wcRenderDocPreview(blob, sheet, url){
  // Nuestro .doc es HTML de Office; mostrar su body
  var rd=new FileReader();
  rd.onload=function(){
    var html=rd.result;
    var m=html.match(/<body[^>]*>([\\s\\S]*?)<\\/body>/i);
    sheet.innerHTML = m?m[1]:html;
  };
  rd.readAsText(blob);
}

/* ── IMPRESIÓN VÍA IFRAME (no bloqueada por el navegador) ── */
function wcPrintHTML(html){
  var existing = document.getElementById('__wcPrintFrame');
  if(existing) existing.remove();
  var f = document.createElement('iframe');
  f.id = '__wcPrintFrame';
  f.style.position='fixed'; f.style.right='0'; f.style.bottom='0';
  f.style.width='0'; f.style.height='0'; f.style.border='0';
  document.body.appendChild(f);
  var d = f.contentWindow.document;
  d.open(); d.write(html); d.close();
  setTimeout(function(){
    try{ f.contentWindow.focus(); f.contentWindow.print(); }
    catch(e){ showToast('Error al imprimir'); }
  }, 500);
}

/* ── ABRIR / IMPORTAR ARCHIVOS PARA EDITAR ── */
function wcAbrirArchivo(targetId){
  var inp = document.createElement('input');
  inp.type='file';
  inp.accept='.epub,.doc,.docx,.odt,.pdf,.html,.htm,.txt,.rtf';
  inp.style.display='none';
  document.body.appendChild(inp);
  inp.onchange=function(){
    var file = inp.files[0];
    if(!file){ inp.remove(); return; }
    var ext = (file.name.split('.').pop()||'').toLowerCase();
    var target = document.getElementById(targetId||'editor');
    showToast('Abriendo '+ext.toUpperCase()+'...');
    if(ext==='txt'){
      var r=new FileReader(); r.onload=function(){ target.innerHTML='<p>'+r.result.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/\\n\\n+/g,'</p><p>').replace(/\\n/g,'<br>')+'</p>'; updateStats&&updateStats(); showToast('Documento abierto'); }; r.readAsText(file);
    } else if(ext==='html'||ext==='htm'){
      var r2=new FileReader(); r2.onload=function(){ var m=r2.result.match(/<body[^>]*>([\\s\\S]*?)<\\/body>/i); target.innerHTML = m?m[1]:r2.result; updateStats&&updateStats(); showToast('Documento abierto'); }; r2.readAsText(file);
    } else if(ext==='rtf'){
      var r3=new FileReader(); r3.onload=function(){ var t=r3.result.replace(/\\\\par[d]?/g,'\\n').replace(/\\{[^{}]*\\}/g,'').replace(/\\\\[a-z]+-?\\d* ?/g,'').trim(); target.innerHTML='<p>'+t.replace(/</g,'&lt;').replace(/\\n/g,'</p><p>')+'</p>'; updateStats&&updateStats(); showToast('Documento abierto'); }; r3.readAsText(file);
    } else if(ext==='docx'){
      if(typeof mammoth==='undefined'){ showToast('Necesita conexión para abrir DOCX'); inp.remove(); return; }
      var r4=new FileReader();
      r4.onload=function(){ mammoth.convertToHtml({arrayBuffer:r4.result}).then(function(res){ target.innerHTML=res.value; updateStats&&updateStats(); showToast('Documento abierto'); }).catch(function(){ showToast('No se pudo abrir el archivo'); }); };
      r4.readAsArrayBuffer(file);
    } else if(ext==='doc'){
      var r5=new FileReader(); r5.onload=function(){ var m=r5.result.match(/<body[^>]*>([\\s\\S]*?)<\\/body>/i); target.innerHTML = m?m[1]:('<p>'+r5.result.replace(/<[^>]+>/g,' ').replace(/\\s+/g,' ').trim()+'</p>'); updateStats&&updateStats(); showToast('Documento abierto'); }; r5.readAsText(file);
    } else if(ext==='odt'){
      var r6=new FileReader(); r6.onload=function(){ var m=r6.result.match(/<body[^>]*>([\\s\\S]*?)<\\/body>/i); target.innerHTML = m?m[1]:r6.result; updateStats&&updateStats(); showToast('Documento abierto'); }; r6.readAsText(file);
    } else if(ext==='epub'){
      if(typeof JSZip==='undefined'){ showToast('Necesita conexión para abrir EPUB'); inp.remove(); return; }
      var r7=new FileReader();
      r7.onload=function(){
        JSZip.loadAsync(r7.result).then(function(zip){
          var chapters=[];
          var paths=[];
          zip.forEach(function(path,f){ if(/\\.xhtml$|\\.html$/i.test(path)) paths.push(path); });
          paths.sort();
          var proms=paths.map(function(p){ return zip.file(p).async('string'); });
          Promise.all(proms).then(function(arr){
            var html='';
            arr.forEach(function(txt){ var m=txt.match(/<body[^>]*>([\\s\\S]*?)<\\/body>/i); html += (m?m[1]:'')+'<div style="page-break-after:always"></div>'; });
            target.innerHTML = html || '<p>Libro vacío</p>';
            updateStats&&updateStats(); showToast('Libro abierto');
          });
        }).catch(function(){ showToast('No se pudo abrir el libro'); });
      };
      r7.readAsArrayBuffer(file);
    } else if(ext==='pdf'){
      if(typeof pdfjsLib==='undefined' && typeof window['pdfjs-dist/build/pdf']==='undefined'){ showToast('Necesita conexión para abrir PDF'); inp.remove(); return; }
      var lib = window.pdfjsLib || window['pdfjs-dist/build/pdf'];
      if(lib && lib.GlobalWorkerOptions && !lib.GlobalWorkerOptions.workerSrc){ lib.GlobalWorkerOptions.workerSrc='https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js'; }
      var r8=new FileReader();
      r8.onload=function(){
        lib.getDocument({data:r8.result}).promise.then(function(pdf){
          var pages=[];
          for(var i=1;i<=pdf.numPages;i++) pages.push(i);
          var txt='';
          var seq=Promise.resolve();
          pages.forEach(function(n){
            seq=seq.then(function(){ return pdf.getPage(n).then(function(page){ return page.getTextContent().then(function(tc){ txt+='<p>'+tc.items.map(function(it){return it.str;}).join(' ')+'</p>'; }); }); });
          });
          seq.then(function(){ target.innerHTML=txt||'<p>PDF sin texto extraíble</p>'; updateStats&&updateStats(); showToast('PDF abierto'); });
        }).catch(function(){ showToast('No se pudo abrir el PDF'); });
      };
      r8.readAsArrayBuffer(file);
    }
    inp.remove();
  };
  inp.click();
}

/* ── HERRAMIENTAS DE FORMATO PARA VENTANA DOCUMENTO ── */
function dwCmd(command, value){
  var ed = document.getElementById('docWindowEditor');
  if(!ed) return;
  ed.focus();
  try{ document.execCommand(command, false, value||null); }catch(e){}
  ed.focus();
}
function dwInsertHTML(html){
  var ed = document.getElementById('docWindowEditor');
  if(!ed) return;
  ed.focus();
  try{ document.execCommand('insertHTML', false, html); }
  catch(e){ ed.innerHTML += html; }
  ed.focus();
}
function dwColor(){
  var input = document.getElementById('dwColorPick');
  if(input) input.click();
}
function dwApplyColor(val){ dwCmd('foreColor', val); }
function dwHighlight(){
  var input = document.getElementById('dwHlPick');
  if(input) input.click();
}
function dwApplyHighlight(val){ dwCmd('hiliteColor', val); dwCmd('backColor', val); }
function dwFontSize(val){ if(val) dwCmd('fontSize', val); }
function dwBlock(tag){ dwCmd('formatBlock', tag); }
function dwMaq(tipo){
  var html='';
  if(tipo==='dos') html='<div style="display:grid;grid-template-columns:1fr 1fr;gap:24px;margin:14px 0;text-align:justify"><div>Columna 1...</div><div>Columna 2...</div></div><p></p>';
  else if(tipo==='cita') html='<blockquote style="border-left:4px solid #0084ff;margin:20px 8px;padding:12px 20px;background:#f0f7ff;border-radius:0 8px 8px 0;font-style:italic;font-size:1.1em;color:#1a237e">Cita destacada...</blockquote><p></p>';
  else if(tipo==='separador') html='<div style="text-align:center;margin:24px 0;color:#0084ff;font-size:18px;letter-spacing:8px">— ✦ —</div>';
  else if(tipo==='capitulo') html='<div style="page-break-before:always;margin:36px 0 20px;text-align:center"><div style="color:#0084ff;font-size:12px;letter-spacing:4px;text-transform:uppercase">Capítulo</div><h1 style="font-size:1.9em;margin:8px 0;border:none">Título del capítulo</h1><div style="color:#0084ff;font-size:16px;letter-spacing:8px">— ✦ —</div></div><p></p>';
  else if(tipo==='sangria') html='<p style="text-indent:2.2em;text-align:justify;line-height:1.75">Párrafo con sangría editorial...</p>';
  dwInsertHTML(html);
}

/* ── HOJA DESLIZANTE (BOTTOM SHEET) ── */
var _sheetOrigParent = {};
function openSheet(dd){
  document.querySelectorAll('.dropdown').forEach(function(d){ if(d!==dd && d.classList.contains('show')) _closeSheet(d); });
  // Mover al body para escapar del backdrop-filter del contenedor
  if(dd.parentNode && dd.parentNode !== document.body){
    _sheetOrigParent[dd.id] = dd.parentNode;
    document.body.appendChild(dd);
  }
  var bd = document.getElementById('menuBackdrop');
  if(bd) bd.classList.add('show');
  // Forzar reflow para que la animación corra
  void dd.offsetWidth;
  dd.classList.add('show');
  document.body.style.overflow='hidden';
}
function _closeSheet(dd){
  dd.classList.remove('show');
  // Devolver al contenedor original tras la animación
  var orig = _sheetOrigParent[dd.id];
  if(orig){
    setTimeout(function(){ if(!dd.classList.contains('show') && orig){ orig.appendChild(dd); } }, 320);
  }
}
function closeAllSheets(){
  document.querySelectorAll('.dropdown').forEach(function(d){ _closeSheet(d); });
  var bd = document.getElementById('menuBackdrop');
  if(bd) bd.classList.remove('show');
  document.body.style.overflow='';
}

/* ── DIBUJAR SALTOS DE PÁGINA (estilo Word) ── */
var _pageHeightCm = 27.94; /* altura página carta */
function cmToPx(cm){
  var probe = document.createElement('div');
  probe.style.cssText='position:absolute;height:'+cm+'cm;visibility:hidden';
  document.body.appendChild(probe);
  var px = probe.offsetHeight;
  probe.remove();
  return px;
}
var _pageBreakTimer = null;
function updatePageBreaks(){
  if(_pageBreakTimer) clearTimeout(_pageBreakTimer);
  _pageBreakTimer = setTimeout(_doUpdatePageBreaks, 250);
}
function _doUpdatePageBreaks(){
  var wrap = document.getElementById('editorPageWrap');
  var ed = document.getElementById('editor');
  if(!wrap || !ed) return;
  // Quitar saltos previos
  wrap.querySelectorAll('.page-break-line').forEach(function(el){ el.remove(); });
  var pageH = cmToPx(_pageHeightCm);
  if(pageH < 50) return;
  var total = ed.offsetHeight;
  var numPages = Math.floor(total / pageH);
  var edTop = ed.offsetTop;
  for(var p=1; p<=numPages; p++){
    var line = document.createElement('div');
    line.className='page-break-line';
    line.style.top = (edTop + pageH*p - 12) + 'px';
    line.setAttribute('data-page','Pág. '+(p+1));
    wrap.appendChild(line);
  }
  // Actualizar contador si existe
  var pc = document.getElementById('pageCountLabel');
  if(pc) pc.textContent = (numPages+1) + (numPages+1===1?' página':' páginas');
}

try{ var _e=document.getElementById('editor'); if(_e){ _e.addEventListener('input',updatePageBreaks); setTimeout(updatePageBreaks,1000); } }catch(e){}

/* HF SYSTEM - encabezado pie numeracion */
var wcDocHeader = { text:'', enabled:false };
var wcDocFooter = { text:'', enabled:false };
var wcPageNum   = { enabled:false, format:'Página {n} de {total}', position:'footer' };

function abrirConfigEncabezado(tipo){
  var existing = document.getElementById('__hfPanel'); if(existing) existing.remove();
  var ov = document.createElement('div');
  ov.id='__hfPanel';
  ov.style.cssText='position:fixed;inset:0;z-index:100000;background:rgba(0,0,0,.45);display:flex;align-items:center;justify-content:center;padding:18px';
  var titulo = tipo==='header'?'Encabezado':(tipo==='footer'?'Pie de página':'Numeración de páginas');
  var cur = tipo==='header'?wcDocHeader:(tipo==='footer'?wcDocFooter:null);
  var inner = '<div style="background:#fff;border-radius:14px;max-width:440px;width:100%;padding:22px;box-shadow:0 12px 40px rgba(0,0,0,.3)">';
  inner += '<div style="font-weight:700;font-size:17px;color:#1a2942;margin-bottom:16px">'+titulo+'</div>';
  if(tipo==='pagenum'){
    inner += '<label style="display:block;font-size:13px;color:#555;margin-bottom:6px">Formato</label>';
    inner += '<select id="__pnFormat" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:8px;margin-bottom:14px">';
    inner += '<option value="Página {n} de {total}">Página 1 de N</option>';
    inner += '<option value="{n}">Solo el número</option>';
    inner += '<option value="- {n} -">- 1 -</option>';
    inner += '<option value="Pág. {n}">Pág. 1</option>';
    inner += '</select>';
    inner += '<label style="display:block;font-size:13px;color:#555;margin-bottom:6px">Posición</label>';
    inner += '<select id="__pnPos" style="width:100%;padding:9px;border:1px solid #ddd;border-radius:8px;margin-bottom:16px">';
    inner += '<option value="footer">Pie de página</option>';
    inner += '<option value="header">Encabezado</option>';
    inner += '</select>';
  } else {
    var val = cur ? cur.text.replace(/"/g,'&quot;') : '';
    inner += '<label style="display:block;font-size:13px;color:#555;margin-bottom:6px">Texto</label>';
    inner += '<input id="__hfText" type="text" value="'+val+'" placeholder="Escribe aquí..." style="width:100%;padding:10px;border:1px solid #ddd;border-radius:8px;margin-bottom:8px;box-sizing:border-box">';
    inner += '<div style="font-size:11px;color:#999;margin-bottom:16px">Aparecerá en todas las páginas al exportar a PDF.</div>';
  }
  inner += '<div style="display:flex;gap:10px;justify-content:flex-end">';
  inner += '<button id="__hfCancel" style="padding:9px 16px;border:1px solid #ddd;background:#fff;border-radius:8px;cursor:pointer">Cancelar</button>';
  if(tipo!=='pagenum' && cur && cur.enabled){
    inner += '<button id="__hfRemove" style="padding:9px 16px;border:1px solid #e74c3c;background:#fff;color:#e74c3c;border-radius:8px;cursor:pointer">Quitar</button>';
  }
  inner += '<button id="__hfApply" style="padding:9px 18px;border:none;background:#0084ff;color:#fff;border-radius:8px;cursor:pointer;font-weight:600">Aplicar</button>';
  inner += '</div></div>';
  ov.innerHTML = inner;
  document.body.appendChild(ov);
  if(tipo==='pagenum'){
    document.getElementById('__pnFormat').value = wcPageNum.format;
    document.getElementById('__pnPos').value = wcPageNum.position;
  }
  document.getElementById('__hfCancel').onclick = function(){ ov.remove(); };
  document.getElementById('__hfApply').onclick = function(){ guardarEncabezado(tipo); };
  var rem = document.getElementById('__hfRemove');
  if(rem) rem.onclick = function(){ quitarEncabezado(tipo); };
}
function guardarEncabezado(tipo){
  if(tipo==='header'){ var h=document.getElementById('__hfText'); wcDocHeader.text=h?h.value:''; wcDocHeader.enabled=!!wcDocHeader.text; }
  else if(tipo==='footer'){ var f=document.getElementById('__hfText'); wcDocFooter.text=f?f.value:''; wcDocFooter.enabled=!!wcDocFooter.text; }
  else if(tipo==='pagenum'){ wcPageNum.format=document.getElementById('__pnFormat').value; wcPageNum.position=document.getElementById('__pnPos').value; wcPageNum.enabled=true; }
  var p=document.getElementById('__hfPanel'); if(p) p.remove();
  actualizarVistaEncabezados();
  if(typeof showToast==='function') showToast(tipo==='pagenum'?'Numeración activada':(tipo==='header'?'Encabezado aplicado':'Pie aplicado'));
}
function quitarEncabezado(tipo){
  if(tipo==='header'){ wcDocHeader.enabled=false; wcDocHeader.text=''; }
  else if(tipo==='footer'){ wcDocFooter.enabled=false; wcDocFooter.text=''; }
  var p=document.getElementById('__hfPanel'); if(p) p.remove();
  actualizarVistaEncabezados();
  if(typeof showToast==='function') showToast('Quitado');
}
function actualizarVistaEncabezados(){
  var ed = document.getElementById('editor');
  if(!ed) return;
  var old = document.getElementById('__hfPreviewTop'); if(old) old.remove();
  var oldB = document.getElementById('__hfPreviewBot'); if(oldB) oldB.remove();
  if(wcDocHeader.enabled){
    var t=document.createElement('div'); t.id='__hfPreviewTop';
    t.style.cssText='font-size:9pt;color:#888;border-bottom:0.5pt solid #ccc;padding-bottom:3px;margin-bottom:14px;font-family:Calibri,Carlito,sans-serif';
    t.textContent=wcDocHeader.text;
    ed.insertBefore(t, ed.firstChild);
  }
  if(wcDocFooter.enabled){
    var b=document.createElement('div'); b.id='__hfPreviewBot';
    b.style.cssText='font-size:9pt;color:#888;border-top:0.5pt solid #ccc;padding-top:3px;margin-top:14px;font-family:Calibri,Carlito,sans-serif';
    b.textContent=wcDocFooter.text;
    ed.appendChild(b);
  }
}

try{ setTimeout(cargarDiccionario, 1500); }catch(e){}
</script>
<script>
function toggleStylePanel(){
  var p=document.getElementById('stylePanel');
  if(p.style.display==='block'){ p.style.display='none'; }
  else { p.style.display='block'; }
}
document.addEventListener('click',function(e){
  var btn=document.getElementById('styleBtn');
  var panel=document.getElementById('stylePanel');
  if(!panel||!btn) return;
  if(btn.contains(e.target)) return;
  if(panel.contains(e.target)) return;
  panel.style.display='none';
},true);
</script>
<!-- Colaboración en tiempo real (Firebase) -->
<!-- Módulo Firebase (doc sync) movido al <head> para carga temprana -->
<!-- Panel Kanban + Temporizador -->
<style>
  #wcToolsFab{position:fixed;bottom:90px;right:16px;z-index:9999;width:54px;height:54px;border-radius:50%;background:#3b82f6;color:#fff;font-size:22px;border:none;box-shadow:0 4px 12px rgba(0,0,0,.4);display:flex;align-items:center;justify-content:center}
  #wcToolsPanel{position:fixed;bottom:0;left:0;right:0;max-height:75vh;background:#1e1e1e;color:#eee;border-radius:16px 16px 0 0;box-shadow:0 -4px 20px rgba(0,0,0,.5);z-index:9999;display:none;flex-direction:column;font-family:sans-serif}
  #wcToolsPanel.open{display:flex}
  #wcToolsTabs{display:flex;border-bottom:1px solid #333}
  #wcToolsTabs button{flex:1;padding:12px;background:none;border:none;color:#aaa;font-weight:bold}
  #wcToolsTabs button.active{color:#3b82f6;border-bottom:2px solid #3b82f6}
  #wcToolsBody{padding:12px;overflow-y:auto}
  #wcToolsClose{position:absolute;top:8px;right:12px;background:none;border:none;color:#aaa;font-size:20px}

  /* Kanban */
  .wcKanbanCols{display:flex;gap:8px;overflow-x:auto}
  .wcKanbanCol{flex:1;min-width:140px;background:#262626;border-radius:8px;padding:8px}
  .wcKanbanCol h4{margin:0 0 8px;font-size:13px;color:#888;text-transform:uppercase}
  .wcKanbanCard{background:#333;border-radius:6px;padding:8px;margin-bottom:6px;font-size:14px}
  .wcKanbanCard .actions{display:flex;justify-content:space-between;margin-top:6px;font-size:13px}
  .wcKanbanCard button{background:none;border:none;color:#aaa;font-size:15px;padding:2px 6px}
  #wcKanbanInput{display:flex;gap:6px;margin-bottom:10px}
  #wcKanbanInput input{flex:1;padding:8px;border-radius:6px;border:none;background:#333;color:#eee}
  #wcKanbanInput button{padding:8px 12px;border-radius:6px;border:none;background:#3b82f6;color:#fff}

  /* Timer */
  #wcTimerDisplay{font-size:48px;text-align:center;font-weight:bold;margin:16px 0;font-family:monospace}
  .wcTimerBtns{display:flex;gap:8px;justify-content:center;flex-wrap:wrap}
  .wcTimerBtns button{padding:10px 16px;border-radius:8px;border:none;background:#333;color:#eee;font-size:15px}
  .wcTimerBtns button.primary{background:#3b82f6}
  #wcTimerPresets{display:flex;gap:6px;justify-content:center;margin-top:12px}
  #wcTimerPresets button{padding:6px 10px;border-radius:6px;border:none;background:#262626;color:#aaa}
</style>

<button id="wcToolsFab">🛠️</button>

<div id="wcToolsPanel">
  <button id="wcToolsClose">✕</button>
  <div id="wcToolsTabs">
    <button data-tab="kanban" class="active">📋 Kanban</button>
    <button data-tab="timer">⏱️ Temporizador</button>
  </div>
  <div id="wcToolsBody">
    <!-- Kanban -->
    <div id="wcTabKanban">
      <div id="wcKanbanInput">
        <input type="text" id="wcKanbanNewTask" placeholder="Nueva tarea...">
        <button id="wcKanbanAddBtn">Agregar</button>
      </div>
      <div class="wcKanbanCols">
        <div class="wcKanbanCol" data-col="pendiente"><h4>Pendiente</h4><div class="wcKanbanList"></div></div>
        <div class="wcKanbanCol" data-col="progreso"><h4>En progreso</h4><div class="wcKanbanList"></div></div>
        <div class="wcKanbanCol" data-col="hecho"><h4>Hecho</h4><div class="wcKanbanList"></div></div>
      </div>
    </div>
    <!-- Timer -->
    <div id="wcTabTimer" style="display:none">
      <div id="wcTimerDisplay">25:00</div>
      <div id="wcTimerPresets">
        <button data-min="5">5m</button>
        <button data-min="10">10m</button>
        <button data-min="15">15m</button>
        <button data-min="25">25m</button>
        <button data-min="60">60m</button>
      </div>
      <div class="wcTimerBtns" style="margin-top:14px">
        <button id="wcTimerStart" class="primary">▶ Iniciar</button>
        <button id="wcTimerPause">⏸ Pausar</button>
        <button id="wcTimerReset">⟲ Reiniciar</button>
      </div>
    </div>
  </div>
</div>

<!-- Módulo Firebase (kanban/timer) movido al <head> para carga temprana -->
<button onclick="const r=prompt('Código de sala:',localStorage.getItem('wc-fb-room')||'sala1');if(r){localStorage.setItem('wc-fb-room',r);location.reload();}" style="position:fixed;bottom:200px;right:12px;z-index:8000;background:#e74c3c;color:#fff;border:none;border-radius:50%;width:44px;height:44px;font-size:18px;cursor:pointer;box-shadow:0 4px 14px rgba(231,76,60,.4)" title="Cambiar sala">👥</button>

<!-- wc-v25-bundle1..4, features32..45 y patch.js ahora se cargan
     desde el <head> (ver arriba). -->


</body>
</html>

`;
