!function(){"use strict";(()=>{const e=document.querySelectorAll(".form-test-element:not(.todo)");e.forEach(e=>{let r=e.querySelector(".result > div").innerHTML.trim(),t=e.querySelector(".twig"),n=t.dataset.args.trim(),l=Boolean(t.dataset.isWidget);r=r.replace(/\s{2,}/g," ").replace(/>/g,">\n").replace(/</g,"\n<").replace(/\n{2,}/g,"\n"),e.querySelector(".markup").innerHTML='<pre><code class="language-markup">'+function(e){var r={"&":"&amp;",'"':"&quot;","'":"&#039;","<":"&lt;",">":"&gt;"};return(e+"").replace(/[<>&"']/g,(function(e){return r[e]}))}(html_beautify(r,{indent_inner_html:!0,indent_size:2,indent_char:" ",wrap_line_length:40,brace_style:"expand",preserve_newlines:!0,max_preserve_newlines:5,indent_handlebars:!1,extra_liners:["/html"]}))+"</code></pre>",n&&(n=JSON.stringify(JSON.parse(n),null,2).replace("/[]/","{}")),t.innerHTML='<pre><code class="language-twig">{{ '+(l?"form_widget":"form_row")+"(form.xxxx"+(n?", "+n:"")+") }}</code></pre>"}),Prism.highlightAll(!0);const r=document.querySelectorAll("h2, .form-test-element h3");let t="";r.forEach((e,n)=>{let l=e.id;l||(l=e.innerText.toLowerCase().replace(/todo$/,"").replace(/[ |\W]+/g,"_"),e.id=l);let a=`<a href="#${l}">${e.innerHTML}</a>`;e.insertAdjacentHTML("beforeend",'<a href="#top" class="badge-link badge badge-secondary initialism">top</a>'+`<a href="#${l}" class="badge-link badge badge-primary initialism">link</a>`),"H2"===e.tagName?(n>0&&(t+="</ul></li>"),t+="<li>"+a+"<ul>"):t+="<li>"+a+"</li>",n===r.length-1&&(t+="</ul></li>")}),document.getElementById("toc").innerHTML=`<ul>${t}</ul>`})()}();
//# sourceMappingURL=sf_test_form-min.js.map