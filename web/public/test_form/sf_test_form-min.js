(()=>{"use strict";const e=document.querySelectorAll(".form-test-element:not(.todo)"),t=function(e){var t={"&":"&amp;",'"':"&quot;","'":"&#039;","<":"&lt;",">":"&gt;"};return(e+"").replace(/[<>&"']/g,(function(e){return t[e]}))};e.forEach(e=>{let r=e.querySelector(".result > div").innerHTML.trim(),l=e.querySelector(".twig"),o=l.dataset.args.trim(),c=Boolean(l.dataset.isWidget),n=(new DOMParser).parseFromString(r,"text/html"),i=document.createComment("Other .form-check nodes");n.body.querySelectorAll(".form-collection .form-check:not(:first-child)").forEach(e=>{e.replaceWith(i)}),i=document.createComment("Other .custom-control nodes"),n.body.querySelectorAll(".form-collection .custom-control:not(:first-child)").forEach(e=>{e.replaceWith(i)}),i=document.createComment("Other `optgroup` nodes"),n.body.querySelectorAll("select optgroup:not(:first-child)").forEach(e=>{e.replaceWith(i)}),i=document.createComment("Other `option` nodes"),n.body.querySelectorAll("select option:not(:first-child)").forEach(e=>{e.replaceWith(i)}),r=(r=n.body.innerHTML).replace(/\s{2,}/g," ").replace(/>/g,">\n").replace(/</g,"\n<").replace(/\n{2,}/g,"\n"),e.querySelector(".markup").innerHTML='<pre><code class="language-markup">'+t(html_beautify(r,{indent_inner_html:!0,indent_size:2,indent_char:" ",wrap_line_length:40,brace_style:"expand",preserve_newlines:!0,max_preserve_newlines:5,indent_handlebars:!1,extra_liners:["/html"]}))+"</code></pre>",o&&(o=JSON.stringify(JSON.parse(o),null,2).replace("/[]/","{}")),l.innerHTML='<pre><code class="language-twig">{{ '+(c?"form_widget":"form_row")+"(form.xxxx"+(o?", "+t(o):"")+") }}</code></pre>"}),Prism.highlightAll(!0);const r=document.querySelectorAll("h2, .form-test-element h3");let l="";r.forEach((e,t)=>{let o=e.id;o||(o=e.innerText.toLowerCase().replace(/todo$/,"").replace(/[ |\W]+/g,"_"),e.id=o);let c=`<a href="#${o}">${e.innerHTML}</a>`;e.insertAdjacentHTML("beforeend",'<a href="#top" class="badge-link badge badge-secondary initialism">top</a>'+`<a href="#${o}" class="badge-link badge badge-primary initialism">link</a>`),"H2"===e.tagName?(t>0&&(l+="</ul></li>"),l+="<li>"+c+"<ul>"):l+="<li>"+c+"</li>",t===r.length-1&&(l+="</ul></li>")}),document.getElementById("toc").innerHTML=`<ul>${l}</ul>`})(),(()=>{"use strict";const e=document.querySelectorAll(".form-multiselect"),t=e=>{let t=[];e.querySelectorAll('[type="checkbox"]:checked, [type="radio"]:checked').forEach(e=>{t.push(e.closest(".form-check").querySelector("label").innerText.trim())}),e.querySelector(".form-multiselect-placeholder").innerText=t.join(", ")};e.forEach(e=>{e.querySelectorAll('[type="checkbox"], [type="radio"]').forEach(r=>{r.addEventListener("click",()=>{t(e)},!1)}),t(e)})})();
//# sourceMappingURL=sf_test_form-min.js.map