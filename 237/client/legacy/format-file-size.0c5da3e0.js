function t(t){var B=1e3;if(Math.abs(t)<B)return t+" B";var a=["KB","MB","GB","TB","PB","EB","ZB","YB"],r=-1;do{t/=B,++r}while(Math.round(10*Math.abs(t))/10>=B&&r<a.length-1);return t.toFixed(1)+" "+a[r]}export{t as f};