(function(){"use strict";const yl=()=>{};var Bi={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $i=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},El=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const s=n[e++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=n[e++];t[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=n[e++],a=n[e++],u=n[e++],h=((s&7)<<18|(o&63)<<12|(a&63)<<6|u&63)-65536;t[r++]=String.fromCharCode(55296+(h>>10)),t[r++]=String.fromCharCode(56320+(h&1023))}else{const o=n[e++],a=n[e++];t[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|a&63)}}return t.join("")},qi={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const o=n[s],a=s+1<n.length,u=a?n[s+1]:0,h=s+2<n.length,d=h?n[s+2]:0,p=o>>2,v=(o&3)<<4|u>>4;let R=(u&15)<<2|d>>6,C=d&63;h||(C=64,a||(R=64)),r.push(e[p],e[v],e[R],e[C])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray($i(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):El(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const o=e[n.charAt(s++)],u=s<n.length?e[n.charAt(s)]:0;++s;const d=s<n.length?e[n.charAt(s)]:64;++s;const v=s<n.length?e[n.charAt(s)]:64;if(++s,o==null||u==null||d==null||v==null)throw new Tl;const R=o<<2|u>>4;if(r.push(R),d!==64){const C=u<<4&240|d>>2;if(r.push(C),v!==64){const P=d<<6&192|v;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Tl extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const vl=function(n){const t=$i(n);return qi.encodeByteArray(t,!0)},Ln=function(n){return vl(n).replace(/\./g,"")},Il=function(n){try{return qi.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wl(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Al=()=>wl().__FIREBASE_DEFAULTS__,Rl=()=>{if(typeof process>"u"||typeof Bi>"u")return;const n=Bi.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},bl=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&Il(n[1]);return t&&JSON.parse(t)},jr=()=>{try{return yl()||Al()||Rl()||bl()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Sl=n=>{var t,e;return(e=(t=jr())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},Cl=n=>{const t=Sl(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},ji=()=>{var n;return(n=jr())===null||n===void 0?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vl(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",s=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Ln(JSON.stringify(e)),Ln(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dl(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function kl(){var n;const t=(n=jr())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Nl(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Ml(){return!kl()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function zi(){try{return typeof indexedDB=="object"}catch{return!1}}function Hi(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var o;t(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(e){t(e)}})}function Ll(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ol="FirebaseError";class zt extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=Ol,Object.setPrototypeOf(this,zt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,On.prototype.create)}}class On{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},s=`${this.service}/${t}`,o=this.errors[t],a=o?xl(o,r):"Error",u=`${this.serviceName}: ${a} (${s}).`;return new zt(s,u,r)}}function xl(n,t){return n.replace(Fl,(e,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const Fl=/\{\$([^}]+)}/g;function xn(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const s of e){if(!r.includes(s))return!1;const o=n[s],a=t[s];if(Gi(o)&&Gi(a)){if(!xn(o,a))return!1}else if(o!==a)return!1}for(const s of r)if(!e.includes(s))return!1;return!0}function Gi(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ul=1e3,Bl=2,$l=4*60*60*1e3,ql=.5;function Ki(n,t=Ul,e=Bl){const r=t*Math.pow(e,n),s=Math.round(ql*r*(Math.random()-.5)*2);return Math.min($l,r+s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(n){return n&&n._delegate?n._delegate:n}class Ot{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ue="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new Pl;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Hl(t))try{this.getOrInitializeService({instanceIdentifier:ue})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(t=ue){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=ue){return this.instances.has(t)}getOptions(t=ue){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,a]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(o);r===u&&a.resolve(s)}return s}onInit(t,e){var r;const s=this.normalizeInstanceIdentifier(e),o=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(s,o);const a=this.instances.get(s);return a&&t(a,s),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const s of r)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:zl(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=ue){return this.component?this.component.multipleInstances?t:ue:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function zl(n){return n===ue?void 0:n}function Hl(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new jl(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var z;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(z||(z={}));const Kl={debug:z.DEBUG,verbose:z.VERBOSE,info:z.INFO,warn:z.WARN,error:z.ERROR,silent:z.SILENT},Wl=z.INFO,Ql={[z.DEBUG]:"log",[z.VERBOSE]:"log",[z.INFO]:"info",[z.WARN]:"warn",[z.ERROR]:"error"},Yl=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),s=Ql[t];if(s)console[s](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class zr{constructor(t){this.name=t,this._logLevel=Wl,this._logHandler=Yl,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in z))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Kl[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,z.DEBUG,...t),this._logHandler(this,z.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,z.VERBOSE,...t),this._logHandler(this,z.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,z.INFO,...t),this._logHandler(this,z.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,z.WARN,...t),this._logHandler(this,z.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,z.ERROR,...t),this._logHandler(this,z.ERROR,...t)}}const Xl=(n,t)=>t.some(e=>n instanceof e);let Wi,Qi;function Jl(){return Wi||(Wi=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Zl(){return Qi||(Qi=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Yi=new WeakMap,Hr=new WeakMap,Xi=new WeakMap,Gr=new WeakMap,Kr=new WeakMap;function th(n){const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{e(Ht(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",o),n.addEventListener("error",a)});return t.then(e=>{e instanceof IDBCursor&&Yi.set(e,n)}).catch(()=>{}),Kr.set(t,n),t}function eh(n){if(Hr.has(n))return;const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{e(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});Hr.set(n,t)}let Wr={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return Hr.get(n);if(t==="objectStoreNames")return n.objectStoreNames||Xi.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Ht(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function nh(n){Wr=n(Wr)}function rh(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(Qr(this),t,...e);return Xi.set(r,t.sort?t.sort():[t]),Ht(r)}:Zl().includes(n)?function(...t){return n.apply(Qr(this),t),Ht(Yi.get(this))}:function(...t){return Ht(n.apply(Qr(this),t))}}function sh(n){return typeof n=="function"?rh(n):(n instanceof IDBTransaction&&eh(n),Xl(n,Jl())?new Proxy(n,Wr):n)}function Ht(n){if(n instanceof IDBRequest)return th(n);if(Gr.has(n))return Gr.get(n);const t=sh(n);return t!==n&&(Gr.set(n,t),Kr.set(t,n)),t}const Qr=n=>Kr.get(n);function Ji(n,t,{blocked:e,upgrade:r,blocking:s,terminated:o}={}){const a=indexedDB.open(n,t),u=Ht(a);return r&&a.addEventListener("upgradeneeded",h=>{r(Ht(a.result),h.oldVersion,h.newVersion,Ht(a.transaction),h)}),e&&a.addEventListener("blocked",h=>e(h.oldVersion,h.newVersion,h)),u.then(h=>{o&&h.addEventListener("close",()=>o()),s&&h.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),u}const ih=["get","getKey","getAll","getAllKeys","count"],oh=["put","add","delete","clear"],Yr=new Map;function Zi(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(Yr.get(t))return Yr.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,s=oh.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(s||ih.includes(e)))return;const o=async function(a,...u){const h=this.transaction(a,s?"readwrite":"readonly");let d=h.store;return r&&(d=d.index(u.shift())),(await Promise.all([d[e](...u),s&&h.done]))[0]};return Yr.set(t,o),o}nh(n=>({...n,get:(t,e,r)=>Zi(t,e)||n.get(t,e,r),has:(t,e)=>!!Zi(t,e)||n.has(t,e)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ah{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(ch(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function ch(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Xr="@firebase/app",to="0.11.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xt=new zr("@firebase/app"),uh="@firebase/app-compat",lh="@firebase/analytics-compat",hh="@firebase/analytics",dh="@firebase/app-check-compat",fh="@firebase/app-check",ph="@firebase/auth",mh="@firebase/auth-compat",gh="@firebase/database",_h="@firebase/data-connect",yh="@firebase/database-compat",Eh="@firebase/functions",Th="@firebase/functions-compat",vh="@firebase/installations",Ih="@firebase/installations-compat",wh="@firebase/messaging",Ah="@firebase/messaging-compat",Rh="@firebase/performance",bh="@firebase/performance-compat",Sh="@firebase/remote-config",Ch="@firebase/remote-config-compat",Ph="@firebase/storage",Vh="@firebase/storage-compat",Dh="@firebase/firestore",kh="@firebase/vertexai",Nh="@firebase/firestore-compat",Mh="firebase",Lh="11.5.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jr="[DEFAULT]",Oh={[Xr]:"fire-core",[uh]:"fire-core-compat",[hh]:"fire-analytics",[lh]:"fire-analytics-compat",[fh]:"fire-app-check",[dh]:"fire-app-check-compat",[ph]:"fire-auth",[mh]:"fire-auth-compat",[gh]:"fire-rtdb",[_h]:"fire-data-connect",[yh]:"fire-rtdb-compat",[Eh]:"fire-fn",[Th]:"fire-fn-compat",[vh]:"fire-iid",[Ih]:"fire-iid-compat",[wh]:"fire-fcm",[Ah]:"fire-fcm-compat",[Rh]:"fire-perf",[bh]:"fire-perf-compat",[Sh]:"fire-rc",[Ch]:"fire-rc-compat",[Ph]:"fire-gcs",[Vh]:"fire-gcs-compat",[Dh]:"fire-fst",[Nh]:"fire-fst-compat",[kh]:"fire-vertex","fire-js":"fire-js",[Mh]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fn=new Map,xh=new Map,Zr=new Map;function eo(n,t){try{n.container.addComponent(t)}catch(e){xt.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function Gt(n){const t=n.name;if(Zr.has(t))return xt.debug(`There were multiple attempts to register component ${t}.`),!1;Zr.set(t,n);for(const e of Fn.values())eo(e,n);for(const e of xh.values())eo(e,n);return!0}function ts(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function Fh(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uh={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Kt=new On("app","Firebase",Uh);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bh{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ot("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Kt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $h=Lh;function no(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Jr,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw Kt.create("bad-app-name",{appName:String(s)});if(e||(e=ji()),!e)throw Kt.create("no-options");const o=Fn.get(s);if(o){if(xn(e,o.options)&&xn(r,o.config))return o;throw Kt.create("duplicate-app",{appName:s})}const a=new Gl(s);for(const h of Zr.values())a.addComponent(h);const u=new Bh(e,r,a);return Fn.set(s,u),u}function qh(n=Jr){const t=Fn.get(n);if(!t&&n===Jr&&ji())return no();if(!t)throw Kt.create("no-app",{appName:n});return t}function Dt(n,t,e){var r;let s=(r=Oh[n])!==null&&r!==void 0?r:n;e&&(s+=`-${e}`);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const u=[`Unable to register library "${s}" with version "${t}":`];o&&u.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&u.push("and"),a&&u.push(`version name "${t}" contains illegal characters (whitespace or "/")`),xt.warn(u.join(" "));return}Gt(new Ot(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jh="firebase-heartbeat-database",zh=1,We="firebase-heartbeat-store";let es=null;function ro(){return es||(es=Ji(jh,zh,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(We)}catch(e){console.warn(e)}}}}).catch(n=>{throw Kt.create("idb-open",{originalErrorMessage:n.message})})),es}async function Hh(n){try{const e=(await ro()).transaction(We),r=await e.objectStore(We).get(io(n));return await e.done,r}catch(t){if(t instanceof zt)xt.warn(t.message);else{const e=Kt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});xt.warn(e.message)}}}async function so(n,t){try{const r=(await ro()).transaction(We,"readwrite");await r.objectStore(We).put(t,io(n)),await r.done}catch(e){if(e instanceof zt)xt.warn(e.message);else{const r=Kt.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});xt.warn(r.message)}}}function io(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gh=1024,Kh=30;class Wh{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Yh(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=oo();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats.length>Kh){const a=Xh(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){xt.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=oo(),{heartbeatsToSend:r,unsentEntries:s}=Qh(this._heartbeatsCache.heartbeats),o=Ln(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return xt.warn(e),""}}}function oo(){return new Date().toISOString().substring(0,10)}function Qh(n,t=Gh){const e=[];let r=n.slice();for(const s of n){const o=e.find(a=>a.agent===s.agent);if(o){if(o.dates.push(s.date),ao(e)>t){o.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),ao(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class Yh{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return zi()?Hi().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await Hh(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return so(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return so(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function ao(n){return Ln(JSON.stringify({version:2,heartbeats:n})).length}function Xh(n){if(n.length===0)return-1;let t=0,e=n[0].date;for(let r=1;r<n.length;r++)n[r].date<e&&(e=n[r].date,t=r);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jh(n){Gt(new Ot("platform-logger",t=>new ah(t),"PRIVATE")),Gt(new Ot("heartbeat",t=>new Wh(t),"PRIVATE")),Dt(Xr,to,n),Dt(Xr,to,"esm2017"),Dt("fire-js","")}Jh("");var Zh="firebase",td="11.5.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Dt(Zh,td,"app");var co=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Wt,uo;(function(){var n;/** @license

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */function t(E,m){function _(){}_.prototype=m.prototype,E.D=m.prototype,E.prototype=new _,E.prototype.constructor=E,E.C=function(y,T,w){for(var g=Array(arguments.length-2),$t=2;$t<arguments.length;$t++)g[$t-2]=arguments[$t];return m.prototype[T].apply(y,g)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,e),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(E,m,_){_||(_=0);var y=Array(16);if(typeof m=="string")for(var T=0;16>T;++T)y[T]=m.charCodeAt(_++)|m.charCodeAt(_++)<<8|m.charCodeAt(_++)<<16|m.charCodeAt(_++)<<24;else for(T=0;16>T;++T)y[T]=m[_++]|m[_++]<<8|m[_++]<<16|m[_++]<<24;m=E.g[0],_=E.g[1],T=E.g[2];var w=E.g[3],g=m+(w^_&(T^w))+y[0]+3614090360&4294967295;m=_+(g<<7&4294967295|g>>>25),g=w+(T^m&(_^T))+y[1]+3905402710&4294967295,w=m+(g<<12&4294967295|g>>>20),g=T+(_^w&(m^_))+y[2]+606105819&4294967295,T=w+(g<<17&4294967295|g>>>15),g=_+(m^T&(w^m))+y[3]+3250441966&4294967295,_=T+(g<<22&4294967295|g>>>10),g=m+(w^_&(T^w))+y[4]+4118548399&4294967295,m=_+(g<<7&4294967295|g>>>25),g=w+(T^m&(_^T))+y[5]+1200080426&4294967295,w=m+(g<<12&4294967295|g>>>20),g=T+(_^w&(m^_))+y[6]+2821735955&4294967295,T=w+(g<<17&4294967295|g>>>15),g=_+(m^T&(w^m))+y[7]+4249261313&4294967295,_=T+(g<<22&4294967295|g>>>10),g=m+(w^_&(T^w))+y[8]+1770035416&4294967295,m=_+(g<<7&4294967295|g>>>25),g=w+(T^m&(_^T))+y[9]+2336552879&4294967295,w=m+(g<<12&4294967295|g>>>20),g=T+(_^w&(m^_))+y[10]+4294925233&4294967295,T=w+(g<<17&4294967295|g>>>15),g=_+(m^T&(w^m))+y[11]+2304563134&4294967295,_=T+(g<<22&4294967295|g>>>10),g=m+(w^_&(T^w))+y[12]+1804603682&4294967295,m=_+(g<<7&4294967295|g>>>25),g=w+(T^m&(_^T))+y[13]+4254626195&4294967295,w=m+(g<<12&4294967295|g>>>20),g=T+(_^w&(m^_))+y[14]+2792965006&4294967295,T=w+(g<<17&4294967295|g>>>15),g=_+(m^T&(w^m))+y[15]+1236535329&4294967295,_=T+(g<<22&4294967295|g>>>10),g=m+(T^w&(_^T))+y[1]+4129170786&4294967295,m=_+(g<<5&4294967295|g>>>27),g=w+(_^T&(m^_))+y[6]+3225465664&4294967295,w=m+(g<<9&4294967295|g>>>23),g=T+(m^_&(w^m))+y[11]+643717713&4294967295,T=w+(g<<14&4294967295|g>>>18),g=_+(w^m&(T^w))+y[0]+3921069994&4294967295,_=T+(g<<20&4294967295|g>>>12),g=m+(T^w&(_^T))+y[5]+3593408605&4294967295,m=_+(g<<5&4294967295|g>>>27),g=w+(_^T&(m^_))+y[10]+38016083&4294967295,w=m+(g<<9&4294967295|g>>>23),g=T+(m^_&(w^m))+y[15]+3634488961&4294967295,T=w+(g<<14&4294967295|g>>>18),g=_+(w^m&(T^w))+y[4]+3889429448&4294967295,_=T+(g<<20&4294967295|g>>>12),g=m+(T^w&(_^T))+y[9]+568446438&4294967295,m=_+(g<<5&4294967295|g>>>27),g=w+(_^T&(m^_))+y[14]+3275163606&4294967295,w=m+(g<<9&4294967295|g>>>23),g=T+(m^_&(w^m))+y[3]+4107603335&4294967295,T=w+(g<<14&4294967295|g>>>18),g=_+(w^m&(T^w))+y[8]+1163531501&4294967295,_=T+(g<<20&4294967295|g>>>12),g=m+(T^w&(_^T))+y[13]+2850285829&4294967295,m=_+(g<<5&4294967295|g>>>27),g=w+(_^T&(m^_))+y[2]+4243563512&4294967295,w=m+(g<<9&4294967295|g>>>23),g=T+(m^_&(w^m))+y[7]+1735328473&4294967295,T=w+(g<<14&4294967295|g>>>18),g=_+(w^m&(T^w))+y[12]+2368359562&4294967295,_=T+(g<<20&4294967295|g>>>12),g=m+(_^T^w)+y[5]+4294588738&4294967295,m=_+(g<<4&4294967295|g>>>28),g=w+(m^_^T)+y[8]+2272392833&4294967295,w=m+(g<<11&4294967295|g>>>21),g=T+(w^m^_)+y[11]+1839030562&4294967295,T=w+(g<<16&4294967295|g>>>16),g=_+(T^w^m)+y[14]+4259657740&4294967295,_=T+(g<<23&4294967295|g>>>9),g=m+(_^T^w)+y[1]+2763975236&4294967295,m=_+(g<<4&4294967295|g>>>28),g=w+(m^_^T)+y[4]+1272893353&4294967295,w=m+(g<<11&4294967295|g>>>21),g=T+(w^m^_)+y[7]+4139469664&4294967295,T=w+(g<<16&4294967295|g>>>16),g=_+(T^w^m)+y[10]+3200236656&4294967295,_=T+(g<<23&4294967295|g>>>9),g=m+(_^T^w)+y[13]+681279174&4294967295,m=_+(g<<4&4294967295|g>>>28),g=w+(m^_^T)+y[0]+3936430074&4294967295,w=m+(g<<11&4294967295|g>>>21),g=T+(w^m^_)+y[3]+3572445317&4294967295,T=w+(g<<16&4294967295|g>>>16),g=_+(T^w^m)+y[6]+76029189&4294967295,_=T+(g<<23&4294967295|g>>>9),g=m+(_^T^w)+y[9]+3654602809&4294967295,m=_+(g<<4&4294967295|g>>>28),g=w+(m^_^T)+y[12]+3873151461&4294967295,w=m+(g<<11&4294967295|g>>>21),g=T+(w^m^_)+y[15]+530742520&4294967295,T=w+(g<<16&4294967295|g>>>16),g=_+(T^w^m)+y[2]+3299628645&4294967295,_=T+(g<<23&4294967295|g>>>9),g=m+(T^(_|~w))+y[0]+4096336452&4294967295,m=_+(g<<6&4294967295|g>>>26),g=w+(_^(m|~T))+y[7]+1126891415&4294967295,w=m+(g<<10&4294967295|g>>>22),g=T+(m^(w|~_))+y[14]+2878612391&4294967295,T=w+(g<<15&4294967295|g>>>17),g=_+(w^(T|~m))+y[5]+4237533241&4294967295,_=T+(g<<21&4294967295|g>>>11),g=m+(T^(_|~w))+y[12]+1700485571&4294967295,m=_+(g<<6&4294967295|g>>>26),g=w+(_^(m|~T))+y[3]+2399980690&4294967295,w=m+(g<<10&4294967295|g>>>22),g=T+(m^(w|~_))+y[10]+4293915773&4294967295,T=w+(g<<15&4294967295|g>>>17),g=_+(w^(T|~m))+y[1]+2240044497&4294967295,_=T+(g<<21&4294967295|g>>>11),g=m+(T^(_|~w))+y[8]+1873313359&4294967295,m=_+(g<<6&4294967295|g>>>26),g=w+(_^(m|~T))+y[15]+4264355552&4294967295,w=m+(g<<10&4294967295|g>>>22),g=T+(m^(w|~_))+y[6]+2734768916&4294967295,T=w+(g<<15&4294967295|g>>>17),g=_+(w^(T|~m))+y[13]+1309151649&4294967295,_=T+(g<<21&4294967295|g>>>11),g=m+(T^(_|~w))+y[4]+4149444226&4294967295,m=_+(g<<6&4294967295|g>>>26),g=w+(_^(m|~T))+y[11]+3174756917&4294967295,w=m+(g<<10&4294967295|g>>>22),g=T+(m^(w|~_))+y[2]+718787259&4294967295,T=w+(g<<15&4294967295|g>>>17),g=_+(w^(T|~m))+y[9]+3951481745&4294967295,E.g[0]=E.g[0]+m&4294967295,E.g[1]=E.g[1]+(T+(g<<21&4294967295|g>>>11))&4294967295,E.g[2]=E.g[2]+T&4294967295,E.g[3]=E.g[3]+w&4294967295}r.prototype.u=function(E,m){m===void 0&&(m=E.length);for(var _=m-this.blockSize,y=this.B,T=this.h,w=0;w<m;){if(T==0)for(;w<=_;)s(this,E,w),w+=this.blockSize;if(typeof E=="string"){for(;w<m;)if(y[T++]=E.charCodeAt(w++),T==this.blockSize){s(this,y),T=0;break}}else for(;w<m;)if(y[T++]=E[w++],T==this.blockSize){s(this,y),T=0;break}}this.h=T,this.o+=m},r.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var m=1;m<E.length-8;++m)E[m]=0;var _=8*this.o;for(m=E.length-8;m<E.length;++m)E[m]=_&255,_/=256;for(this.u(E),E=Array(16),m=_=0;4>m;++m)for(var y=0;32>y;y+=8)E[_++]=this.g[m]>>>y&255;return E};function o(E,m){var _=u;return Object.prototype.hasOwnProperty.call(_,E)?_[E]:_[E]=m(E)}function a(E,m){this.h=m;for(var _=[],y=!0,T=E.length-1;0<=T;T--){var w=E[T]|0;y&&w==m||(_[T]=w,y=!1)}this.g=_}var u={};function h(E){return-128<=E&&128>E?o(E,function(m){return new a([m|0],0>m?-1:0)}):new a([E|0],0>E?-1:0)}function d(E){if(isNaN(E)||!isFinite(E))return v;if(0>E)return D(d(-E));for(var m=[],_=1,y=0;E>=_;y++)m[y]=E/_|0,_*=4294967296;return new a(m,0)}function p(E,m){if(E.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(E.charAt(0)=="-")return D(p(E.substring(1),m));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=d(Math.pow(m,8)),y=v,T=0;T<E.length;T+=8){var w=Math.min(8,E.length-T),g=parseInt(E.substring(T,T+w),m);8>w?(w=d(Math.pow(m,w)),y=y.j(w).add(d(g))):(y=y.j(_),y=y.add(d(g)))}return y}var v=h(0),R=h(1),C=h(16777216);n=a.prototype,n.m=function(){if(k(this))return-D(this).m();for(var E=0,m=1,_=0;_<this.g.length;_++){var y=this.i(_);E+=(0<=y?y:4294967296+y)*m,m*=4294967296}return E},n.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(P(this))return"0";if(k(this))return"-"+D(this).toString(E);for(var m=d(Math.pow(E,6)),_=this,y="";;){var T=rt(_,m).g;_=$(_,T.j(m));var w=((0<_.g.length?_.g[0]:_.h)>>>0).toString(E);if(_=T,P(_))return w+y;for(;6>w.length;)w="0"+w;y=w+y}},n.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function P(E){if(E.h!=0)return!1;for(var m=0;m<E.g.length;m++)if(E.g[m]!=0)return!1;return!0}function k(E){return E.h==-1}n.l=function(E){return E=$(this,E),k(E)?-1:P(E)?0:1};function D(E){for(var m=E.g.length,_=[],y=0;y<m;y++)_[y]=~E.g[y];return new a(_,~E.h).add(R)}n.abs=function(){return k(this)?D(this):this},n.add=function(E){for(var m=Math.max(this.g.length,E.g.length),_=[],y=0,T=0;T<=m;T++){var w=y+(this.i(T)&65535)+(E.i(T)&65535),g=(w>>>16)+(this.i(T)>>>16)+(E.i(T)>>>16);y=g>>>16,w&=65535,g&=65535,_[T]=g<<16|w}return new a(_,_[_.length-1]&-2147483648?-1:0)};function $(E,m){return E.add(D(m))}n.j=function(E){if(P(this)||P(E))return v;if(k(this))return k(E)?D(this).j(D(E)):D(D(this).j(E));if(k(E))return D(this.j(D(E)));if(0>this.l(C)&&0>E.l(C))return d(this.m()*E.m());for(var m=this.g.length+E.g.length,_=[],y=0;y<2*m;y++)_[y]=0;for(y=0;y<this.g.length;y++)for(var T=0;T<E.g.length;T++){var w=this.i(y)>>>16,g=this.i(y)&65535,$t=E.i(T)>>>16,yn=E.i(T)&65535;_[2*y+2*T]+=g*yn,F(_,2*y+2*T),_[2*y+2*T+1]+=w*yn,F(_,2*y+2*T+1),_[2*y+2*T+1]+=g*$t,F(_,2*y+2*T+1),_[2*y+2*T+2]+=w*$t,F(_,2*y+2*T+2)}for(y=0;y<m;y++)_[y]=_[2*y+1]<<16|_[2*y];for(y=m;y<2*m;y++)_[y]=0;return new a(_,0)};function F(E,m){for(;(E[m]&65535)!=E[m];)E[m+1]+=E[m]>>>16,E[m]&=65535,m++}function G(E,m){this.g=E,this.h=m}function rt(E,m){if(P(m))throw Error("division by zero");if(P(E))return new G(v,v);if(k(E))return m=rt(D(E),m),new G(D(m.g),D(m.h));if(k(m))return m=rt(E,D(m)),new G(D(m.g),m.h);if(30<E.g.length){if(k(E)||k(m))throw Error("slowDivide_ only works with positive integers.");for(var _=R,y=m;0>=y.l(E);)_=Pt(_),y=Pt(y);var T=ot(_,1),w=ot(y,1);for(y=ot(y,2),_=ot(_,2);!P(y);){var g=w.add(y);0>=g.l(E)&&(T=T.add(_),w=g),y=ot(y,1),_=ot(_,1)}return m=$(E,T.j(m)),new G(T,m)}for(T=v;0<=E.l(m);){for(_=Math.max(1,Math.floor(E.m()/m.m())),y=Math.ceil(Math.log(_)/Math.LN2),y=48>=y?1:Math.pow(2,y-48),w=d(_),g=w.j(m);k(g)||0<g.l(E);)_-=y,w=d(_),g=w.j(m);P(w)&&(w=R),T=T.add(w),E=$(E,g)}return new G(T,E)}n.A=function(E){return rt(this,E).h},n.and=function(E){for(var m=Math.max(this.g.length,E.g.length),_=[],y=0;y<m;y++)_[y]=this.i(y)&E.i(y);return new a(_,this.h&E.h)},n.or=function(E){for(var m=Math.max(this.g.length,E.g.length),_=[],y=0;y<m;y++)_[y]=this.i(y)|E.i(y);return new a(_,this.h|E.h)},n.xor=function(E){for(var m=Math.max(this.g.length,E.g.length),_=[],y=0;y<m;y++)_[y]=this.i(y)^E.i(y);return new a(_,this.h^E.h)};function Pt(E){for(var m=E.g.length+1,_=[],y=0;y<m;y++)_[y]=E.i(y)<<1|E.i(y-1)>>>31;return new a(_,E.h)}function ot(E,m){var _=m>>5;m%=32;for(var y=E.g.length-_,T=[],w=0;w<y;w++)T[w]=0<m?E.i(w+_)>>>m|E.i(w+_+1)<<32-m:E.i(w+_);return new a(T,E.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,uo=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=p,Wt=a}).apply(typeof co<"u"?co:typeof self<"u"?self:typeof window<"u"?window:{});var Un=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var lo,Qe,ho,Bn,ns,fo,po,mo;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(i,c,l){return i==Array.prototype||i==Object.prototype||(i[c]=l.value),i};function e(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof Un=="object"&&Un];for(var c=0;c<i.length;++c){var l=i[c];if(l&&l.Math==Math)return l}throw Error("Cannot find global object")}var r=e(this);function s(i,c){if(c)t:{var l=r;i=i.split(".");for(var f=0;f<i.length-1;f++){var I=i[f];if(!(I in l))break t;l=l[I]}i=i[i.length-1],f=l[i],c=c(f),c!=f&&c!=null&&t(l,i,{configurable:!0,writable:!0,value:c})}}function o(i,c){i instanceof String&&(i+="");var l=0,f=!1,I={next:function(){if(!f&&l<i.length){var A=l++;return{value:c(A,i[A]),done:!1}}return f=!0,{done:!0,value:void 0}}};return I[Symbol.iterator]=function(){return I},I}s("Array.prototype.values",function(i){return i||function(){return o(this,function(c,l){return l})}});/** @license

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */var a=a||{},u=this||self;function h(i){var c=typeof i;return c=c!="object"?c:i?Array.isArray(i)?"array":c:"null",c=="array"||c=="object"&&typeof i.length=="number"}function d(i){var c=typeof i;return c=="object"&&i!=null||c=="function"}function p(i,c,l){return i.call.apply(i.bind,arguments)}function v(i,c,l){if(!i)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var I=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(I,f),i.apply(c,I)}}return function(){return i.apply(c,arguments)}}function R(i,c,l){return R=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:v,R.apply(null,arguments)}function C(i,c){var l=Array.prototype.slice.call(arguments,1);return function(){var f=l.slice();return f.push.apply(f,arguments),i.apply(this,f)}}function P(i,c){function l(){}l.prototype=c.prototype,i.aa=c.prototype,i.prototype=new l,i.prototype.constructor=i,i.Qb=function(f,I,A){for(var V=Array(arguments.length-2),Q=2;Q<arguments.length;Q++)V[Q-2]=arguments[Q];return c.prototype[I].apply(f,V)}}function k(i){const c=i.length;if(0<c){const l=Array(c);for(let f=0;f<c;f++)l[f]=i[f];return l}return[]}function D(i,c){for(let l=1;l<arguments.length;l++){const f=arguments[l];if(h(f)){const I=i.length||0,A=f.length||0;i.length=I+A;for(let V=0;V<A;V++)i[I+V]=f[V]}else i.push(f)}}class ${constructor(c,l){this.i=c,this.j=l,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function F(i){return/^[\s\xa0]*$/.test(i)}function G(){var i=u.navigator;return i&&(i=i.userAgent)?i:""}function rt(i){return rt[" "](i),i}rt[" "]=function(){};var Pt=G().indexOf("Gecko")!=-1&&!(G().toLowerCase().indexOf("webkit")!=-1&&G().indexOf("Edge")==-1)&&!(G().indexOf("Trident")!=-1||G().indexOf("MSIE")!=-1)&&G().indexOf("Edge")==-1;function ot(i,c,l){for(const f in i)c.call(l,i[f],f,i)}function E(i,c){for(const l in i)c.call(void 0,i[l],l,i)}function m(i){const c={};for(const l in i)c[l]=i[l];return c}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function y(i,c){let l,f;for(let I=1;I<arguments.length;I++){f=arguments[I];for(l in f)i[l]=f[l];for(let A=0;A<_.length;A++)l=_[A],Object.prototype.hasOwnProperty.call(f,l)&&(i[l]=f[l])}}function T(i){var c=1;i=i.split(":");const l=[];for(;0<c&&i.length;)l.push(i.shift()),c--;return i.length&&l.push(i.join(":")),l}function w(i){u.setTimeout(()=>{throw i},0)}function g(){var i=gi;let c=null;return i.g&&(c=i.g,i.g=i.g.next,i.g||(i.h=null),c.next=null),c}class $t{constructor(){this.h=this.g=null}add(c,l){const f=yn.get();f.set(c,l),this.h?this.h.next=f:this.g=f,this.h=f}}var yn=new $(()=>new Yg,i=>i.reset());class Yg{constructor(){this.next=this.g=this.h=null}set(c,l){this.h=c,this.g=l,this.next=null}reset(){this.next=this.g=this.h=null}}let En,Tn=!1,gi=new $t,yu=()=>{const i=u.Promise.resolve(void 0);En=()=>{i.then(Xg)}};var Xg=()=>{for(var i;i=g();){try{i.h.call(i.g)}catch(l){w(l)}var c=yn;c.j(i),100>c.h&&(c.h++,i.next=c.g,c.g=i)}Tn=!1};function se(){this.s=this.s,this.C=this.C}se.prototype.s=!1,se.prototype.ma=function(){this.s||(this.s=!0,this.N())},se.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function mt(i,c){this.type=i,this.g=this.target=c,this.defaultPrevented=!1}mt.prototype.h=function(){this.defaultPrevented=!0};var Jg=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var i=!1,c=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const l=()=>{};u.addEventListener("test",l,c),u.removeEventListener("test",l,c)}catch{}return i}();function vn(i,c){if(mt.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i){var l=this.type=i.type,f=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;if(this.target=i.target||i.srcElement,this.g=c,c=i.relatedTarget){if(Pt){t:{try{rt(c.nodeName);var I=!0;break t}catch{}I=!1}I||(c=null)}}else l=="mouseover"?c=i.fromElement:l=="mouseout"&&(c=i.toElement);this.relatedTarget=c,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=typeof i.pointerType=="string"?i.pointerType:Zg[i.pointerType]||"",this.state=i.state,this.i=i,i.defaultPrevented&&vn.aa.h.call(this)}}P(vn,mt);var Zg={2:"touch",3:"pen",4:"mouse"};vn.prototype.h=function(){vn.aa.h.call(this);var i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var Ar="closure_listenable_"+(1e6*Math.random()|0),t_=0;function e_(i,c,l,f,I){this.listener=i,this.proxy=null,this.src=c,this.type=l,this.capture=!!f,this.ha=I,this.key=++t_,this.da=this.fa=!1}function Rr(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function br(i){this.src=i,this.g={},this.h=0}br.prototype.add=function(i,c,l,f,I){var A=i.toString();i=this.g[A],i||(i=this.g[A]=[],this.h++);var V=yi(i,c,f,I);return-1<V?(c=i[V],l||(c.fa=!1)):(c=new e_(c,this.src,A,!!f,I),c.fa=l,i.push(c)),c};function _i(i,c){var l=c.type;if(l in i.g){var f=i.g[l],I=Array.prototype.indexOf.call(f,c,void 0),A;(A=0<=I)&&Array.prototype.splice.call(f,I,1),A&&(Rr(c),i.g[l].length==0&&(delete i.g[l],i.h--))}}function yi(i,c,l,f){for(var I=0;I<i.length;++I){var A=i[I];if(!A.da&&A.listener==c&&A.capture==!!l&&A.ha==f)return I}return-1}var Ei="closure_lm_"+(1e6*Math.random()|0),Ti={};function Eu(i,c,l,f,I){if(Array.isArray(c)){for(var A=0;A<c.length;A++)Eu(i,c[A],l,f,I);return null}return l=Iu(l),i&&i[Ar]?i.K(c,l,d(f)?!!f.capture:!1,I):n_(i,c,l,!1,f,I)}function n_(i,c,l,f,I,A){if(!c)throw Error("Invalid event type");var V=d(I)?!!I.capture:!!I,Q=Ii(i);if(Q||(i[Ei]=Q=new br(i)),l=Q.add(c,l,f,V,A),l.proxy)return l;if(f=r_(),l.proxy=f,f.src=i,f.listener=l,i.addEventListener)Jg||(I=V),I===void 0&&(I=!1),i.addEventListener(c.toString(),f,I);else if(i.attachEvent)i.attachEvent(vu(c.toString()),f);else if(i.addListener&&i.removeListener)i.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return l}function r_(){function i(l){return c.call(i.src,i.listener,l)}const c=s_;return i}function Tu(i,c,l,f,I){if(Array.isArray(c))for(var A=0;A<c.length;A++)Tu(i,c[A],l,f,I);else f=d(f)?!!f.capture:!!f,l=Iu(l),i&&i[Ar]?(i=i.i,c=String(c).toString(),c in i.g&&(A=i.g[c],l=yi(A,l,f,I),-1<l&&(Rr(A[l]),Array.prototype.splice.call(A,l,1),A.length==0&&(delete i.g[c],i.h--)))):i&&(i=Ii(i))&&(c=i.g[c.toString()],i=-1,c&&(i=yi(c,l,f,I)),(l=-1<i?c[i]:null)&&vi(l))}function vi(i){if(typeof i!="number"&&i&&!i.da){var c=i.src;if(c&&c[Ar])_i(c.i,i);else{var l=i.type,f=i.proxy;c.removeEventListener?c.removeEventListener(l,f,i.capture):c.detachEvent?c.detachEvent(vu(l),f):c.addListener&&c.removeListener&&c.removeListener(f),(l=Ii(c))?(_i(l,i),l.h==0&&(l.src=null,c[Ei]=null)):Rr(i)}}}function vu(i){return i in Ti?Ti[i]:Ti[i]="on"+i}function s_(i,c){if(i.da)i=!0;else{c=new vn(c,this);var l=i.listener,f=i.ha||i.src;i.fa&&vi(i),i=l.call(f,c)}return i}function Ii(i){return i=i[Ei],i instanceof br?i:null}var wi="__closure_events_fn_"+(1e9*Math.random()>>>0);function Iu(i){return typeof i=="function"?i:(i[wi]||(i[wi]=function(c){return i.handleEvent(c)}),i[wi])}function gt(){se.call(this),this.i=new br(this),this.M=this,this.F=null}P(gt,se),gt.prototype[Ar]=!0,gt.prototype.removeEventListener=function(i,c,l,f){Tu(this,i,c,l,f)};function Et(i,c){var l,f=i.F;if(f)for(l=[];f;f=f.F)l.push(f);if(i=i.M,f=c.type||c,typeof c=="string")c=new mt(c,i);else if(c instanceof mt)c.target=c.target||i;else{var I=c;c=new mt(f,i),y(c,I)}if(I=!0,l)for(var A=l.length-1;0<=A;A--){var V=c.g=l[A];I=Sr(V,f,!0,c)&&I}if(V=c.g=i,I=Sr(V,f,!0,c)&&I,I=Sr(V,f,!1,c)&&I,l)for(A=0;A<l.length;A++)V=c.g=l[A],I=Sr(V,f,!1,c)&&I}gt.prototype.N=function(){if(gt.aa.N.call(this),this.i){var i=this.i,c;for(c in i.g){for(var l=i.g[c],f=0;f<l.length;f++)Rr(l[f]);delete i.g[c],i.h--}}this.F=null},gt.prototype.K=function(i,c,l,f){return this.i.add(String(i),c,!1,l,f)},gt.prototype.L=function(i,c,l,f){return this.i.add(String(i),c,!0,l,f)};function Sr(i,c,l,f){if(c=i.i.g[String(c)],!c)return!0;c=c.concat();for(var I=!0,A=0;A<c.length;++A){var V=c[A];if(V&&!V.da&&V.capture==l){var Q=V.listener,ht=V.ha||V.src;V.fa&&_i(i.i,V),I=Q.call(ht,f)!==!1&&I}}return I&&!f.defaultPrevented}function wu(i,c,l){if(typeof i=="function")l&&(i=R(i,l));else if(i&&typeof i.handleEvent=="function")i=R(i.handleEvent,i);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:u.setTimeout(i,c||0)}function Au(i){i.g=wu(()=>{i.g=null,i.i&&(i.i=!1,Au(i))},i.l);const c=i.h;i.h=null,i.m.apply(null,c)}class i_ extends se{constructor(c,l){super(),this.m=c,this.l=l,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Au(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function In(i){se.call(this),this.h=i,this.g={}}P(In,se);var Ru=[];function bu(i){ot(i.g,function(c,l){this.g.hasOwnProperty(l)&&vi(c)},i),i.g={}}In.prototype.N=function(){In.aa.N.call(this),bu(this)},In.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ai=u.JSON.stringify,o_=u.JSON.parse,a_=class{stringify(i){return u.JSON.stringify(i,void 0)}parse(i){return u.JSON.parse(i,void 0)}};function Ri(){}Ri.prototype.h=null;function Su(i){return i.h||(i.h=i.i())}function Cu(){}var wn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function bi(){mt.call(this,"d")}P(bi,mt);function Si(){mt.call(this,"c")}P(Si,mt);var Ie={},Pu=null;function Cr(){return Pu=Pu||new gt}Ie.La="serverreachability";function Vu(i){mt.call(this,Ie.La,i)}P(Vu,mt);function An(i){const c=Cr();Et(c,new Vu(c))}Ie.STAT_EVENT="statevent";function Du(i,c){mt.call(this,Ie.STAT_EVENT,i),this.stat=c}P(Du,mt);function Tt(i){const c=Cr();Et(c,new Du(c,i))}Ie.Ma="timingevent";function ku(i,c){mt.call(this,Ie.Ma,i),this.size=c}P(ku,mt);function Rn(i,c){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){i()},c)}function bn(){this.g=!0}bn.prototype.xa=function(){this.g=!1};function c_(i,c,l,f,I,A){i.info(function(){if(i.g)if(A)for(var V="",Q=A.split("&"),ht=0;ht<Q.length;ht++){var K=Q[ht].split("=");if(1<K.length){var _t=K[0];K=K[1];var yt=_t.split("_");V=2<=yt.length&&yt[1]=="type"?V+(_t+"="+K+"&"):V+(_t+"=redacted&")}}else V=null;else V=A;return"XMLHTTP REQ ("+f+") [attempt "+I+"]: "+c+`
`+l+`
`+V})}function u_(i,c,l,f,I,A,V){i.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+I+"]: "+c+`
`+l+`
`+A+" "+V})}function ze(i,c,l,f){i.info(function(){return"XMLHTTP TEXT ("+c+"): "+h_(i,l)+(f?" "+f:"")})}function l_(i,c){i.info(function(){return"TIMEOUT: "+c})}bn.prototype.info=function(){};function h_(i,c){if(!i.g)return c;if(!c)return null;try{var l=JSON.parse(c);if(l){for(i=0;i<l.length;i++)if(Array.isArray(l[i])){var f=l[i];if(!(2>f.length)){var I=f[1];if(Array.isArray(I)&&!(1>I.length)){var A=I[0];if(A!="noop"&&A!="stop"&&A!="close")for(var V=1;V<I.length;V++)I[V]=""}}}}return Ai(l)}catch{return c}}var Pr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Nu={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ci;function Vr(){}P(Vr,Ri),Vr.prototype.g=function(){return new XMLHttpRequest},Vr.prototype.i=function(){return{}},Ci=new Vr;function ie(i,c,l,f){this.j=i,this.i=c,this.l=l,this.R=f||1,this.U=new In(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Mu}function Mu(){this.i=null,this.g="",this.h=!1}var Lu={},Pi={};function Vi(i,c,l){i.L=1,i.v=Mr(qt(c)),i.m=l,i.P=!0,Ou(i,null)}function Ou(i,c){i.F=Date.now(),Dr(i),i.A=qt(i.v);var l=i.A,f=i.R;Array.isArray(f)||(f=[String(f)]),Yu(l.i,"t",f),i.C=0,l=i.j.J,i.h=new Mu,i.g=pl(i.j,l?c:null,!i.m),0<i.O&&(i.M=new i_(R(i.Y,i,i.g),i.O)),c=i.U,l=i.g,f=i.ca;var I="readystatechange";Array.isArray(I)||(I&&(Ru[0]=I.toString()),I=Ru);for(var A=0;A<I.length;A++){var V=Eu(l,I[A],f||c.handleEvent,!1,c.h||c);if(!V)break;c.g[V.key]=V}c=i.H?m(i.H):{},i.m?(i.u||(i.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.A,i.u,i.m,c)):(i.u="GET",i.g.ea(i.A,i.u,null,c)),An(),c_(i.i,i.u,i.A,i.l,i.R,i.m)}ie.prototype.ca=function(i){i=i.target;const c=this.M;c&&jt(i)==3?c.j():this.Y(i)},ie.prototype.Y=function(i){try{if(i==this.g)t:{const yt=jt(this.g);var c=this.g.Ba();const Ke=this.g.Z();if(!(3>yt)&&(yt!=3||this.g&&(this.h.h||this.g.oa()||rl(this.g)))){this.J||yt!=4||c==7||(c==8||0>=Ke?An(3):An(2)),Di(this);var l=this.g.Z();this.X=l;e:if(xu(this)){var f=rl(this.g);i="";var I=f.length,A=jt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){we(this),Sn(this);var V="";break e}this.h.i=new u.TextDecoder}for(c=0;c<I;c++)this.h.h=!0,i+=this.h.i.decode(f[c],{stream:!(A&&c==I-1)});f.length=0,this.h.g+=i,this.C=0,V=this.h.g}else V=this.g.oa();if(this.o=l==200,u_(this.i,this.u,this.A,this.l,this.R,yt,l),this.o){if(this.T&&!this.K){e:{if(this.g){var Q,ht=this.g;if((Q=ht.g?ht.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!F(Q)){var K=Q;break e}}K=null}if(l=K)ze(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ki(this,l);else{this.o=!1,this.s=3,Tt(12),we(this),Sn(this);break t}}if(this.P){l=!0;let Vt;for(;!this.J&&this.C<V.length;)if(Vt=d_(this,V),Vt==Pi){yt==4&&(this.s=4,Tt(14),l=!1),ze(this.i,this.l,null,"[Incomplete Response]");break}else if(Vt==Lu){this.s=4,Tt(15),ze(this.i,this.l,V,"[Invalid Chunk]"),l=!1;break}else ze(this.i,this.l,Vt,null),ki(this,Vt);if(xu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),yt!=4||V.length!=0||this.h.h||(this.s=1,Tt(16),l=!1),this.o=this.o&&l,!l)ze(this.i,this.l,V,"[Invalid Chunked Response]"),we(this),Sn(this);else if(0<V.length&&!this.W){this.W=!0;var _t=this.j;_t.g==this&&_t.ba&&!_t.M&&(_t.j.info("Great, no buffering proxy detected. Bytes received: "+V.length),Fi(_t),_t.M=!0,Tt(11))}}else ze(this.i,this.l,V,null),ki(this,V);yt==4&&we(this),this.o&&!this.J&&(yt==4?ll(this.j,this):(this.o=!1,Dr(this)))}else P_(this.g),l==400&&0<V.indexOf("Unknown SID")?(this.s=3,Tt(12)):(this.s=0,Tt(13)),we(this),Sn(this)}}}catch{}finally{}};function xu(i){return i.g?i.u=="GET"&&i.L!=2&&i.j.Ca:!1}function d_(i,c){var l=i.C,f=c.indexOf(`
`,l);return f==-1?Pi:(l=Number(c.substring(l,f)),isNaN(l)?Lu:(f+=1,f+l>c.length?Pi:(c=c.slice(f,f+l),i.C=f+l,c)))}ie.prototype.cancel=function(){this.J=!0,we(this)};function Dr(i){i.S=Date.now()+i.I,Fu(i,i.I)}function Fu(i,c){if(i.B!=null)throw Error("WatchDog timer not null");i.B=Rn(R(i.ba,i),c)}function Di(i){i.B&&(u.clearTimeout(i.B),i.B=null)}ie.prototype.ba=function(){this.B=null;const i=Date.now();0<=i-this.S?(l_(this.i,this.A),this.L!=2&&(An(),Tt(17)),we(this),this.s=2,Sn(this)):Fu(this,this.S-i)};function Sn(i){i.j.G==0||i.J||ll(i.j,i)}function we(i){Di(i);var c=i.M;c&&typeof c.ma=="function"&&c.ma(),i.M=null,bu(i.U),i.g&&(c=i.g,i.g=null,c.abort(),c.ma())}function ki(i,c){try{var l=i.j;if(l.G!=0&&(l.g==i||Ni(l.h,i))){if(!i.K&&Ni(l.h,i)&&l.G==3){try{var f=l.Da.g.parse(c)}catch{f=null}if(Array.isArray(f)&&f.length==3){var I=f;if(I[0]==0){t:if(!l.u){if(l.g)if(l.g.F+3e3<i.F)Br(l),Fr(l);else break t;xi(l),Tt(18)}}else l.za=I[1],0<l.za-l.T&&37500>I[2]&&l.F&&l.v==0&&!l.C&&(l.C=Rn(R(l.Za,l),6e3));if(1>=$u(l.h)&&l.ca){try{l.ca()}catch{}l.ca=void 0}}else Re(l,11)}else if((i.K||l.g==i)&&Br(l),!F(c))for(I=l.Da.g.parse(c),c=0;c<I.length;c++){let K=I[c];if(l.T=K[0],K=K[1],l.G==2)if(K[0]=="c"){l.K=K[1],l.ia=K[2];const _t=K[3];_t!=null&&(l.la=_t,l.j.info("VER="+l.la));const yt=K[4];yt!=null&&(l.Aa=yt,l.j.info("SVER="+l.Aa));const Ke=K[5];Ke!=null&&typeof Ke=="number"&&0<Ke&&(f=1.5*Ke,l.L=f,l.j.info("backChannelRequestTimeoutMs_="+f)),f=l;const Vt=i.g;if(Vt){const qr=Vt.g?Vt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(qr){var A=f.h;A.g||qr.indexOf("spdy")==-1&&qr.indexOf("quic")==-1&&qr.indexOf("h2")==-1||(A.j=A.l,A.g=new Set,A.h&&(Mi(A,A.h),A.h=null))}if(f.D){const Ui=Vt.g?Vt.g.getResponseHeader("X-HTTP-Session-Id"):null;Ui&&(f.ya=Ui,X(f.I,f.D,Ui))}}l.G=3,l.l&&l.l.ua(),l.ba&&(l.R=Date.now()-i.F,l.j.info("Handshake RTT: "+l.R+"ms")),f=l;var V=i;if(f.qa=fl(f,f.J?f.ia:null,f.W),V.K){qu(f.h,V);var Q=V,ht=f.L;ht&&(Q.I=ht),Q.B&&(Di(Q),Dr(Q)),f.g=V}else cl(f);0<l.i.length&&Ur(l)}else K[0]!="stop"&&K[0]!="close"||Re(l,7);else l.G==3&&(K[0]=="stop"||K[0]=="close"?K[0]=="stop"?Re(l,7):Oi(l):K[0]!="noop"&&l.l&&l.l.ta(K),l.v=0)}}An(4)}catch{}}var f_=class{constructor(i,c){this.g=i,this.map=c}};function Uu(i){this.l=i||10,u.PerformanceNavigationTiming?(i=u.performance.getEntriesByType("navigation"),i=0<i.length&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Bu(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function $u(i){return i.h?1:i.g?i.g.size:0}function Ni(i,c){return i.h?i.h==c:i.g?i.g.has(c):!1}function Mi(i,c){i.g?i.g.add(c):i.h=c}function qu(i,c){i.h&&i.h==c?i.h=null:i.g&&i.g.has(c)&&i.g.delete(c)}Uu.prototype.cancel=function(){if(this.i=ju(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function ju(i){if(i.h!=null)return i.i.concat(i.h.D);if(i.g!=null&&i.g.size!==0){let c=i.i;for(const l of i.g.values())c=c.concat(l.D);return c}return k(i.i)}function p_(i){if(i.V&&typeof i.V=="function")return i.V();if(typeof Map<"u"&&i instanceof Map||typeof Set<"u"&&i instanceof Set)return Array.from(i.values());if(typeof i=="string")return i.split("");if(h(i)){for(var c=[],l=i.length,f=0;f<l;f++)c.push(i[f]);return c}c=[],l=0;for(f in i)c[l++]=i[f];return c}function m_(i){if(i.na&&typeof i.na=="function")return i.na();if(!i.V||typeof i.V!="function"){if(typeof Map<"u"&&i instanceof Map)return Array.from(i.keys());if(!(typeof Set<"u"&&i instanceof Set)){if(h(i)||typeof i=="string"){var c=[];i=i.length;for(var l=0;l<i;l++)c.push(l);return c}c=[],l=0;for(const f in i)c[l++]=f;return c}}}function zu(i,c){if(i.forEach&&typeof i.forEach=="function")i.forEach(c,void 0);else if(h(i)||typeof i=="string")Array.prototype.forEach.call(i,c,void 0);else for(var l=m_(i),f=p_(i),I=f.length,A=0;A<I;A++)c.call(void 0,f[A],l&&l[A],i)}var Hu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function g_(i,c){if(i){i=i.split("&");for(var l=0;l<i.length;l++){var f=i[l].indexOf("="),I=null;if(0<=f){var A=i[l].substring(0,f);I=i[l].substring(f+1)}else A=i[l];c(A,I?decodeURIComponent(I.replace(/\+/g," ")):"")}}}function Ae(i){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,i instanceof Ae){this.h=i.h,kr(this,i.j),this.o=i.o,this.g=i.g,Nr(this,i.s),this.l=i.l;var c=i.i,l=new Vn;l.i=c.i,c.g&&(l.g=new Map(c.g),l.h=c.h),Gu(this,l),this.m=i.m}else i&&(c=String(i).match(Hu))?(this.h=!1,kr(this,c[1]||"",!0),this.o=Cn(c[2]||""),this.g=Cn(c[3]||"",!0),Nr(this,c[4]),this.l=Cn(c[5]||"",!0),Gu(this,c[6]||"",!0),this.m=Cn(c[7]||"")):(this.h=!1,this.i=new Vn(null,this.h))}Ae.prototype.toString=function(){var i=[],c=this.j;c&&i.push(Pn(c,Ku,!0),":");var l=this.g;return(l||c=="file")&&(i.push("//"),(c=this.o)&&i.push(Pn(c,Ku,!0),"@"),i.push(encodeURIComponent(String(l)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l=this.s,l!=null&&i.push(":",String(l))),(l=this.l)&&(this.g&&l.charAt(0)!="/"&&i.push("/"),i.push(Pn(l,l.charAt(0)=="/"?E_:y_,!0))),(l=this.i.toString())&&i.push("?",l),(l=this.m)&&i.push("#",Pn(l,v_)),i.join("")};function qt(i){return new Ae(i)}function kr(i,c,l){i.j=l?Cn(c,!0):c,i.j&&(i.j=i.j.replace(/:$/,""))}function Nr(i,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);i.s=c}else i.s=null}function Gu(i,c,l){c instanceof Vn?(i.i=c,I_(i.i,i.h)):(l||(c=Pn(c,T_)),i.i=new Vn(c,i.h))}function X(i,c,l){i.i.set(c,l)}function Mr(i){return X(i,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),i}function Cn(i,c){return i?c?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function Pn(i,c,l){return typeof i=="string"?(i=encodeURI(i).replace(c,__),l&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function __(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var Ku=/[#\/\?@]/g,y_=/[#\?:]/g,E_=/[#\?]/g,T_=/[#\?@]/g,v_=/#/g;function Vn(i,c){this.h=this.g=null,this.i=i||null,this.j=!!c}function oe(i){i.g||(i.g=new Map,i.h=0,i.i&&g_(i.i,function(c,l){i.add(decodeURIComponent(c.replace(/\+/g," ")),l)}))}n=Vn.prototype,n.add=function(i,c){oe(this),this.i=null,i=He(this,i);var l=this.g.get(i);return l||this.g.set(i,l=[]),l.push(c),this.h+=1,this};function Wu(i,c){oe(i),c=He(i,c),i.g.has(c)&&(i.i=null,i.h-=i.g.get(c).length,i.g.delete(c))}function Qu(i,c){return oe(i),c=He(i,c),i.g.has(c)}n.forEach=function(i,c){oe(this),this.g.forEach(function(l,f){l.forEach(function(I){i.call(c,I,f,this)},this)},this)},n.na=function(){oe(this);const i=Array.from(this.g.values()),c=Array.from(this.g.keys()),l=[];for(let f=0;f<c.length;f++){const I=i[f];for(let A=0;A<I.length;A++)l.push(c[f])}return l},n.V=function(i){oe(this);let c=[];if(typeof i=="string")Qu(this,i)&&(c=c.concat(this.g.get(He(this,i))));else{i=Array.from(this.g.values());for(let l=0;l<i.length;l++)c=c.concat(i[l])}return c},n.set=function(i,c){return oe(this),this.i=null,i=He(this,i),Qu(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[c]),this.h+=1,this},n.get=function(i,c){return i?(i=this.V(i),0<i.length?String(i[0]):c):c};function Yu(i,c,l){Wu(i,c),0<l.length&&(i.i=null,i.g.set(He(i,c),k(l)),i.h+=l.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],c=Array.from(this.g.keys());for(var l=0;l<c.length;l++){var f=c[l];const A=encodeURIComponent(String(f)),V=this.V(f);for(f=0;f<V.length;f++){var I=A;V[f]!==""&&(I+="="+encodeURIComponent(String(V[f]))),i.push(I)}}return this.i=i.join("&")};function He(i,c){return c=String(c),i.j&&(c=c.toLowerCase()),c}function I_(i,c){c&&!i.j&&(oe(i),i.i=null,i.g.forEach(function(l,f){var I=f.toLowerCase();f!=I&&(Wu(this,f),Yu(this,I,l))},i)),i.j=c}function w_(i,c){const l=new bn;if(u.Image){const f=new Image;f.onload=C(ae,l,"TestLoadImage: loaded",!0,c,f),f.onerror=C(ae,l,"TestLoadImage: error",!1,c,f),f.onabort=C(ae,l,"TestLoadImage: abort",!1,c,f),f.ontimeout=C(ae,l,"TestLoadImage: timeout",!1,c,f),u.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=i}else c(!1)}function A_(i,c){const l=new bn,f=new AbortController,I=setTimeout(()=>{f.abort(),ae(l,"TestPingServer: timeout",!1,c)},1e4);fetch(i,{signal:f.signal}).then(A=>{clearTimeout(I),A.ok?ae(l,"TestPingServer: ok",!0,c):ae(l,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(I),ae(l,"TestPingServer: error",!1,c)})}function ae(i,c,l,f,I){try{I&&(I.onload=null,I.onerror=null,I.onabort=null,I.ontimeout=null),f(l)}catch{}}function R_(){this.g=new a_}function b_(i,c,l){const f=l||"";try{zu(i,function(I,A){let V=I;d(I)&&(V=Ai(I)),c.push(f+A+"="+encodeURIComponent(V))})}catch(I){throw c.push(f+"type="+encodeURIComponent("_badmap")),I}}function Lr(i){this.l=i.Ub||null,this.j=i.eb||!1}P(Lr,Ri),Lr.prototype.g=function(){return new Or(this.l,this.j)},Lr.prototype.i=function(i){return function(){return i}}({});function Or(i,c){gt.call(this),this.D=i,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(Or,gt),n=Or.prototype,n.open=function(i,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=i,this.A=c,this.readyState=1,kn(this)},n.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};i&&(c.body=i),(this.D||u).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Dn(this)),this.readyState=0},n.Sa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,kn(this)),this.g&&(this.readyState=3,kn(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Xu(this)}else i.text().then(this.Ra.bind(this),this.ga.bind(this))};function Xu(i){i.j.read().then(i.Pa.bind(i)).catch(i.ga.bind(i))}n.Pa=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var c=i.value?i.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!i.done}))&&(this.response=this.responseText+=c)}i.done?Dn(this):kn(this),this.readyState==3&&Xu(this)}},n.Ra=function(i){this.g&&(this.response=this.responseText=i,Dn(this))},n.Qa=function(i){this.g&&(this.response=i,Dn(this))},n.ga=function(){this.g&&Dn(this)};function Dn(i){i.readyState=4,i.l=null,i.j=null,i.v=null,kn(i)}n.setRequestHeader=function(i,c){this.u.append(i,c)},n.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],c=this.h.entries();for(var l=c.next();!l.done;)l=l.value,i.push(l[0]+": "+l[1]),l=c.next();return i.join(`\r
`)};function kn(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(Or.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function Ju(i){let c="";return ot(i,function(l,f){c+=f,c+=":",c+=l,c+=`\r
`}),c}function Li(i,c,l){t:{for(f in l){var f=!1;break t}f=!0}f||(l=Ju(l),typeof i=="string"?l!=null&&encodeURIComponent(String(l)):X(i,c,l))}function Z(i){gt.call(this),this.headers=new Map,this.o=i||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(Z,gt);var S_=/^https?$/i,C_=["POST","PUT"];n=Z.prototype,n.Ha=function(i){this.J=i},n.ea=function(i,c,l,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);c=c?c.toUpperCase():"GET",this.D=i,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ci.g(),this.v=this.o?Su(this.o):Su(Ci),this.g.onreadystatechange=R(this.Ea,this);try{this.B=!0,this.g.open(c,String(i),!0),this.B=!1}catch(A){Zu(this,A);return}if(i=l||"",l=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var I in f)l.set(I,f[I]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const A of f.keys())l.set(A,f.get(A));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(l.keys()).find(A=>A.toLowerCase()=="content-type"),I=u.FormData&&i instanceof u.FormData,!(0<=Array.prototype.indexOf.call(C_,c,void 0))||f||I||l.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[A,V]of l)this.g.setRequestHeader(A,V);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{nl(this),this.u=!0,this.g.send(i),this.u=!1}catch(A){Zu(this,A)}};function Zu(i,c){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=c,i.m=5,tl(i),xr(i)}function tl(i){i.A||(i.A=!0,Et(i,"complete"),Et(i,"error"))}n.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=i||7,Et(this,"complete"),Et(this,"abort"),xr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),xr(this,!0)),Z.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?el(this):this.bb())},n.bb=function(){el(this)};function el(i){if(i.h&&typeof a<"u"&&(!i.v[1]||jt(i)!=4||i.Z()!=2)){if(i.u&&jt(i)==4)wu(i.Ea,0,i);else if(Et(i,"readystatechange"),jt(i)==4){i.h=!1;try{const V=i.Z();t:switch(V){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break t;default:c=!1}var l;if(!(l=c)){var f;if(f=V===0){var I=String(i.D).match(Hu)[1]||null;!I&&u.self&&u.self.location&&(I=u.self.location.protocol.slice(0,-1)),f=!S_.test(I?I.toLowerCase():"")}l=f}if(l)Et(i,"complete"),Et(i,"success");else{i.m=6;try{var A=2<jt(i)?i.g.statusText:""}catch{A=""}i.l=A+" ["+i.Z()+"]",tl(i)}}finally{xr(i)}}}}function xr(i,c){if(i.g){nl(i);const l=i.g,f=i.v[0]?()=>{}:null;i.g=null,i.v=null,c||Et(i,"ready");try{l.onreadystatechange=f}catch{}}}function nl(i){i.I&&(u.clearTimeout(i.I),i.I=null)}n.isActive=function(){return!!this.g};function jt(i){return i.g?i.g.readyState:0}n.Z=function(){try{return 2<jt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(i){if(this.g){var c=this.g.responseText;return i&&c.indexOf(i)==0&&(c=c.substring(i.length)),o_(c)}};function rl(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.H){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function P_(i){const c={};i=(i.g&&2<=jt(i)&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<i.length;f++){if(F(i[f]))continue;var l=T(i[f]);const I=l[0];if(l=l[1],typeof l!="string")continue;l=l.trim();const A=c[I]||[];c[I]=A,A.push(l)}E(c,function(f){return f.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Nn(i,c,l){return l&&l.internalChannelParams&&l.internalChannelParams[i]||c}function sl(i){this.Aa=0,this.i=[],this.j=new bn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Nn("failFast",!1,i),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Nn("baseRetryDelayMs",5e3,i),this.cb=Nn("retryDelaySeedMs",1e4,i),this.Wa=Nn("forwardChannelMaxRetries",2,i),this.wa=Nn("forwardChannelRequestTimeoutMs",2e4,i),this.pa=i&&i.xmlHttpFactory||void 0,this.Xa=i&&i.Tb||void 0,this.Ca=i&&i.useFetchStreams||!1,this.L=void 0,this.J=i&&i.supportsCrossDomainXhr||!1,this.K="",this.h=new Uu(i&&i.concurrentRequestLimit),this.Da=new R_,this.P=i&&i.fastHandshake||!1,this.O=i&&i.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=i&&i.Rb||!1,i&&i.xa&&this.j.xa(),i&&i.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&i&&i.detectBufferingProxy||!1,this.ja=void 0,i&&i.longPollingTimeout&&0<i.longPollingTimeout&&(this.ja=i.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=sl.prototype,n.la=8,n.G=1,n.connect=function(i,c,l,f){Tt(0),this.W=i,this.H=c||{},l&&f!==void 0&&(this.H.OSID=l,this.H.OAID=f),this.F=this.X,this.I=fl(this,null,this.W),Ur(this)};function Oi(i){if(il(i),i.G==3){var c=i.U++,l=qt(i.I);if(X(l,"SID",i.K),X(l,"RID",c),X(l,"TYPE","terminate"),Mn(i,l),c=new ie(i,i.j,c),c.L=2,c.v=Mr(qt(l)),l=!1,u.navigator&&u.navigator.sendBeacon)try{l=u.navigator.sendBeacon(c.v.toString(),"")}catch{}!l&&u.Image&&(new Image().src=c.v,l=!0),l||(c.g=pl(c.j,null),c.g.ea(c.v)),c.F=Date.now(),Dr(c)}dl(i)}function Fr(i){i.g&&(Fi(i),i.g.cancel(),i.g=null)}function il(i){Fr(i),i.u&&(u.clearTimeout(i.u),i.u=null),Br(i),i.h.cancel(),i.s&&(typeof i.s=="number"&&u.clearTimeout(i.s),i.s=null)}function Ur(i){if(!Bu(i.h)&&!i.s){i.s=!0;var c=i.Ga;En||yu(),Tn||(En(),Tn=!0),gi.add(c,i),i.B=0}}function V_(i,c){return $u(i.h)>=i.h.j-(i.s?1:0)?!1:i.s?(i.i=c.D.concat(i.i),!0):i.G==1||i.G==2||i.B>=(i.Va?0:i.Wa)?!1:(i.s=Rn(R(i.Ga,i,c),hl(i,i.B)),i.B++,!0)}n.Ga=function(i){if(this.s)if(this.s=null,this.G==1){if(!i){this.U=Math.floor(1e5*Math.random()),i=this.U++;const I=new ie(this,this.j,i);let A=this.o;if(this.S&&(A?(A=m(A),y(A,this.S)):A=this.S),this.m!==null||this.O||(I.H=A,A=null),this.P)t:{for(var c=0,l=0;l<this.i.length;l++){e:{var f=this.i[l];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break e}f=void 0}if(f===void 0)break;if(c+=f,4096<c){c=l;break t}if(c===4096||l===this.i.length-1){c=l+1;break t}}c=1e3}else c=1e3;c=al(this,I,c),l=qt(this.I),X(l,"RID",i),X(l,"CVER",22),this.D&&X(l,"X-HTTP-Session-Id",this.D),Mn(this,l),A&&(this.O?c="headers="+encodeURIComponent(String(Ju(A)))+"&"+c:this.m&&Li(l,this.m,A)),Mi(this.h,I),this.Ua&&X(l,"TYPE","init"),this.P?(X(l,"$req",c),X(l,"SID","null"),I.T=!0,Vi(I,l,null)):Vi(I,l,c),this.G=2}}else this.G==3&&(i?ol(this,i):this.i.length==0||Bu(this.h)||ol(this))};function ol(i,c){var l;c?l=c.l:l=i.U++;const f=qt(i.I);X(f,"SID",i.K),X(f,"RID",l),X(f,"AID",i.T),Mn(i,f),i.m&&i.o&&Li(f,i.m,i.o),l=new ie(i,i.j,l,i.B+1),i.m===null&&(l.H=i.o),c&&(i.i=c.D.concat(i.i)),c=al(i,l,1e3),l.I=Math.round(.5*i.wa)+Math.round(.5*i.wa*Math.random()),Mi(i.h,l),Vi(l,f,c)}function Mn(i,c){i.H&&ot(i.H,function(l,f){X(c,f,l)}),i.l&&zu({},function(l,f){X(c,f,l)})}function al(i,c,l){l=Math.min(i.i.length,l);var f=i.l?R(i.l.Na,i.l,i):null;t:{var I=i.i;let A=-1;for(;;){const V=["count="+l];A==-1?0<l?(A=I[0].g,V.push("ofs="+A)):A=0:V.push("ofs="+A);let Q=!0;for(let ht=0;ht<l;ht++){let K=I[ht].g;const _t=I[ht].map;if(K-=A,0>K)A=Math.max(0,I[ht].g-100),Q=!1;else try{b_(_t,V,"req"+K+"_")}catch{f&&f(_t)}}if(Q){f=V.join("&");break t}}}return i=i.i.splice(0,l),c.D=i,f}function cl(i){if(!i.g&&!i.u){i.Y=1;var c=i.Fa;En||yu(),Tn||(En(),Tn=!0),gi.add(c,i),i.v=0}}function xi(i){return i.g||i.u||3<=i.v?!1:(i.Y++,i.u=Rn(R(i.Fa,i),hl(i,i.v)),i.v++,!0)}n.Fa=function(){if(this.u=null,ul(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var i=2*this.R;this.j.info("BP detection timer enabled: "+i),this.A=Rn(R(this.ab,this),i)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Tt(10),Fr(this),ul(this))};function Fi(i){i.A!=null&&(u.clearTimeout(i.A),i.A=null)}function ul(i){i.g=new ie(i,i.j,"rpc",i.Y),i.m===null&&(i.g.H=i.o),i.g.O=0;var c=qt(i.qa);X(c,"RID","rpc"),X(c,"SID",i.K),X(c,"AID",i.T),X(c,"CI",i.F?"0":"1"),!i.F&&i.ja&&X(c,"TO",i.ja),X(c,"TYPE","xmlhttp"),Mn(i,c),i.m&&i.o&&Li(c,i.m,i.o),i.L&&(i.g.I=i.L);var l=i.g;i=i.ia,l.L=1,l.v=Mr(qt(c)),l.m=null,l.P=!0,Ou(l,i)}n.Za=function(){this.C!=null&&(this.C=null,Fr(this),xi(this),Tt(19))};function Br(i){i.C!=null&&(u.clearTimeout(i.C),i.C=null)}function ll(i,c){var l=null;if(i.g==c){Br(i),Fi(i),i.g=null;var f=2}else if(Ni(i.h,c))l=c.D,qu(i.h,c),f=1;else return;if(i.G!=0){if(c.o)if(f==1){l=c.m?c.m.length:0,c=Date.now()-c.F;var I=i.B;f=Cr(),Et(f,new ku(f,l)),Ur(i)}else cl(i);else if(I=c.s,I==3||I==0&&0<c.X||!(f==1&&V_(i,c)||f==2&&xi(i)))switch(l&&0<l.length&&(c=i.h,c.i=c.i.concat(l)),I){case 1:Re(i,5);break;case 4:Re(i,10);break;case 3:Re(i,6);break;default:Re(i,2)}}}function hl(i,c){let l=i.Ta+Math.floor(Math.random()*i.cb);return i.isActive()||(l*=2),l*c}function Re(i,c){if(i.j.info("Error code "+c),c==2){var l=R(i.fb,i),f=i.Xa;const I=!f;f=new Ae(f||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||kr(f,"https"),Mr(f),I?w_(f.toString(),l):A_(f.toString(),l)}else Tt(2);i.G=0,i.l&&i.l.sa(c),dl(i),il(i)}n.fb=function(i){i?(this.j.info("Successfully pinged google.com"),Tt(2)):(this.j.info("Failed to ping google.com"),Tt(1))};function dl(i){if(i.G=0,i.ka=[],i.l){const c=ju(i.h);(c.length!=0||i.i.length!=0)&&(D(i.ka,c),D(i.ka,i.i),i.h.i.length=0,k(i.i),i.i.length=0),i.l.ra()}}function fl(i,c,l){var f=l instanceof Ae?qt(l):new Ae(l);if(f.g!="")c&&(f.g=c+"."+f.g),Nr(f,f.s);else{var I=u.location;f=I.protocol,c=c?c+"."+I.hostname:I.hostname,I=+I.port;var A=new Ae(null);f&&kr(A,f),c&&(A.g=c),I&&Nr(A,I),l&&(A.l=l),f=A}return l=i.D,c=i.ya,l&&c&&X(f,l,c),X(f,"VER",i.la),Mn(i,f),f}function pl(i,c,l){if(c&&!i.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=i.Ca&&!i.pa?new Z(new Lr({eb:l})):new Z(i.pa),c.Ha(i.J),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function ml(){}n=ml.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function $r(){}$r.prototype.g=function(i,c){return new wt(i,c)};function wt(i,c){gt.call(this),this.g=new sl(c),this.l=i,this.h=c&&c.messageUrlParams||null,i=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(i?i["X-WebChannel-Content-Type"]=c.messageContentType:i={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(i?i["X-WebChannel-Client-Profile"]=c.va:i={"X-WebChannel-Client-Profile":c.va}),this.g.S=i,(i=c&&c.Sb)&&!F(i)&&(this.g.m=i),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!F(c)&&(this.g.D=c,i=this.h,i!==null&&c in i&&(i=this.h,c in i&&delete i[c])),this.j=new Ge(this)}P(wt,gt),wt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},wt.prototype.close=function(){Oi(this.g)},wt.prototype.o=function(i){var c=this.g;if(typeof i=="string"){var l={};l.__data__=i,i=l}else this.u&&(l={},l.__data__=Ai(i),i=l);c.i.push(new f_(c.Ya++,i)),c.G==3&&Ur(c)},wt.prototype.N=function(){this.g.l=null,delete this.j,Oi(this.g),delete this.g,wt.aa.N.call(this)};function gl(i){bi.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var c=i.__sm__;if(c){t:{for(const l in c){i=l;break t}i=void 0}(this.i=i)&&(i=this.i,c=c!==null&&i in c?c[i]:void 0),this.data=c}else this.data=i}P(gl,bi);function _l(){Si.call(this),this.status=1}P(_l,Si);function Ge(i){this.g=i}P(Ge,ml),Ge.prototype.ua=function(){Et(this.g,"a")},Ge.prototype.ta=function(i){Et(this.g,new gl(i))},Ge.prototype.sa=function(i){Et(this.g,new _l)},Ge.prototype.ra=function(){Et(this.g,"b")},$r.prototype.createWebChannel=$r.prototype.g,wt.prototype.send=wt.prototype.o,wt.prototype.open=wt.prototype.m,wt.prototype.close=wt.prototype.close,mo=function(){return new $r},po=function(){return Cr()},fo=Ie,ns={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Pr.NO_ERROR=0,Pr.TIMEOUT=8,Pr.HTTP_ERROR=6,Bn=Pr,Nu.COMPLETE="complete",ho=Nu,Cu.EventType=wn,wn.OPEN="a",wn.CLOSE="b",wn.ERROR="c",wn.MESSAGE="d",gt.prototype.listen=gt.prototype.K,Qe=Cu,Z.prototype.listenOnce=Z.prototype.L,Z.prototype.getLastError=Z.prototype.Ka,Z.prototype.getLastErrorCode=Z.prototype.Ba,Z.prototype.getStatus=Z.prototype.Z,Z.prototype.getResponseJson=Z.prototype.Oa,Z.prototype.getResponseText=Z.prototype.oa,Z.prototype.send=Z.prototype.ea,Z.prototype.setWithCredentials=Z.prototype.Ha,lo=Z}).apply(typeof Un<"u"?Un:typeof self<"u"?self:typeof window<"u"?window:{});const go="@firebase/firestore",_o="4.7.10";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}dt.UNAUTHENTICATED=new dt(null),dt.GOOGLE_CREDENTIALS=new dt("google-credentials-uid"),dt.FIRST_PARTY=new dt("first-party-uid"),dt.MOCK_USER=new dt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let be="11.5.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const le=new zr("@firebase/firestore");function Se(){return le.logLevel}function N(n,...t){if(le.logLevel<=z.DEBUG){const e=t.map(rs);le.debug(`Firestore (${be}): ${n}`,...e)}}function Ft(n,...t){if(le.logLevel<=z.ERROR){const e=t.map(rs);le.error(`Firestore (${be}): ${n}`,...e)}}function Ce(n,...t){if(le.logLevel<=z.WARN){const e=t.map(rs);le.warn(`Firestore (${be}): ${n}`,...e)}}function rs(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(n="Unexpected state"){const t=`FIRESTORE (${be}) INTERNAL ASSERTION FAILED: `+n;throw Ft(t),new Error(t)}function W(n,t){n||x()}function B(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class M extends zt{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class ed{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(dt.UNAUTHENTICATED))}shutdown(){}}class nd{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class rd{constructor(t){this.t=t,this.currentUser=dt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){W(this.o===void 0);let r=this.i;const s=h=>this.i!==r?(r=this.i,e(h)):Promise.resolve();let o=new Qt;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Qt,t.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const h=o;t.enqueueRetryable(async()=>{await h.promise,await s(this.currentUser)})},u=h=>{N("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(h=>u(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?u(h):(N("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Qt)}},0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(N("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(W(typeof r.accessToken=="string"),new yo(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return W(t===null||typeof t=="string"),new dt(t)}}class sd{constructor(t,e,r){this.l=t,this.h=e,this.P=r,this.type="FirstParty",this.user=dt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.T.set("Authorization",t),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class id{constructor(t,e,r){this.l=t,this.h=e,this.P=r}getToken(){return Promise.resolve(new sd(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(dt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Eo{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class od{constructor(t,e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,Fh(t)&&t.settings.appCheckToken&&(this.V=t.settings.appCheckToken)}start(t,e){W(this.o===void 0);const r=o=>{o.error!=null&&N("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.R;return this.R=o.token,N("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const s=o=>{N("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?s(o):N("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new Eo(this.V));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(W(typeof e.token=="string"),this.R=e.token,new Eo(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ad(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function To(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=ad(40);for(let o=0;o<s.length;++o)r.length<20&&s[o]<e&&(r+=t.charAt(s[o]%62))}return r}}function q(n,t){return n<t?-1:n>t?1:0}function ss(n,t){let e=0;for(;e<n.length&&e<t.length;){const r=n.codePointAt(e),s=t.codePointAt(e);if(r!==s){if(r<128&&s<128)return q(r,s);{const o=To(),a=cd(o.encode(Io(n,e)),o.encode(Io(t,e)));return a!==0?a:q(r,s)}}e+=r>65535?2:1}return q(n.length,t.length)}function Io(n,t){return n.codePointAt(t)>65535?n.substring(t,t+2):n.substring(t,t+1)}function cd(n,t){for(let e=0;e<n.length&&e<t.length;++e)if(n[e]!==t[e])return q(n[e],t[e]);return q(n.length,t.length)}function Pe(n,t,e){return n.length===t.length&&n.every((r,s)=>e(r,t[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wo=-62135596800,Ao=1e6;class st{static now(){return st.fromMillis(Date.now())}static fromDate(t){return st.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor((t-1e3*e)*Ao);return new st(e,r)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new M(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new M(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<wo)throw new M(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new M(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Ao}_compareTo(t){return this.seconds===t.seconds?q(this.nanoseconds,t.nanoseconds):q(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds-wo;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{static fromTimestamp(t){return new U(t)}static min(){return new U(new st(0,0))}static max(){return new U(new st(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ro="__name__";class kt{constructor(t,e,r){e===void 0?e=0:e>t.length&&x(),r===void 0?r=t.length-e:r>t.length-e&&x(),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return kt.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof kt?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let s=0;s<r;s++){const o=kt.compareSegments(t.get(s),e.get(s));if(o!==0)return o}return q(t.length,e.length)}static compareSegments(t,e){const r=kt.isNumericId(t),s=kt.isNumericId(e);return r&&!s?-1:!r&&s?1:r&&s?kt.extractNumericId(t).compare(kt.extractNumericId(e)):ss(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Wt.fromString(t.substring(4,t.length-2))}}class Y extends kt{construct(t,e,r){return new Y(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new M(S.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(s=>s.length>0))}return new Y(e)}static emptyPath(){return new Y([])}}const ud=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ct extends kt{construct(t,e,r){return new ct(t,e,r)}static isValidIdentifier(t){return ud.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ct.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Ro}static keyField(){return new ct([Ro])}static fromServerFormat(t){const e=[];let r="",s=0;const o=()=>{if(r.length===0)throw new M(S.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let a=!1;for(;s<t.length;){const u=t[s];if(u==="\\"){if(s+1===t.length)throw new M(S.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[s+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new M(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=h,s+=2}else u==="`"?(a=!a,s++):u!=="."||a?(r+=u,s++):(o(),s++)}if(o(),a)throw new M(S.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ct(e)}static emptyPath(){return new ct([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(t){this.path=t}static fromPath(t){return new O(Y.fromString(t))}static fromName(t){return new O(Y.fromString(t).popFirst(5))}static empty(){return new O(Y.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Y.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return Y.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new O(new Y(t.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ye=-1;function ld(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=U.fromTimestamp(r===1e9?new st(e+1,0):new st(e,r));return new Yt(s,O.empty(),t)}function hd(n){return new Yt(n.readTime,n.key,Ye)}class Yt{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new Yt(U.min(),O.empty(),Ye)}static max(){return new Yt(U.max(),O.empty(),Ye)}}function dd(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=O.comparator(n.documentKey,t.documentKey),e!==0?e:q(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fd="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class pd{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ve(n){if(n.code!==S.FAILED_PRECONDITION||n.message!==fd)throw n;N("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&x(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new b((r,s)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,s)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof b?e:b.resolve(e)}catch(e){return b.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):b.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):b.reject(e)}static resolve(t){return new b((e,r)=>{e(t)})}static reject(t){return new b((e,r)=>{r(t)})}static waitFor(t){return new b((e,r)=>{let s=0,o=0,a=!1;t.forEach(u=>{++s,u.next(()=>{++o,a&&o===s&&e()},h=>r(h))}),a=!0,o===s&&e()})}static or(t){let e=b.resolve(!1);for(const r of t)e=e.next(s=>s?b.resolve(s):r());return e}static forEach(t,e){const r=[];return t.forEach((s,o)=>{r.push(e.call(this,s,o))}),this.waitFor(r)}static mapArray(t,e){return new b((r,s)=>{const o=t.length,a=new Array(o);let u=0;for(let h=0;h<o;h++){const d=h;e(t[d]).next(p=>{a[d]=p,++u,u===o&&r(a)},p=>s(p))}})}static doWhile(t,e){return new b((r,s)=>{const o=()=>{t()===!0?e().next(()=>{o()},s):r()};o()})}}function md(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function De(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.oe(r),this._e=r=>e.writeSequenceNumber(r))}oe(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this._e&&this._e(t),t}}$n.ae=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const is=-1;function qn(n){return n==null}function jn(n){return n===0&&1/n==-1/0}function gd(n){return typeof n=="number"&&Number.isInteger(n)&&!jn(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bo="";function _d(n){let t="";for(let e=0;e<n.length;e++)t.length>0&&(t=So(t)),t=yd(n.get(e),t);return So(t)}function yd(n,t){let e=t;const r=n.length;for(let s=0;s<r;s++){const o=n.charAt(s);switch(o){case"\0":e+="";break;case bo:e+="";break;default:e+=o}}return e}function So(n){return n+bo+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Co(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function he(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function Po(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(t,e){this.comparator=t,this.root=e||ut.EMPTY}insert(t,e){return new J(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,ut.BLACK,null,null))}remove(t){return new J(this.comparator,this.root.remove(t,this.comparator).copy(null,null,ut.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return e+r.left.size;s<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new zn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new zn(this.root,t,this.comparator,!1)}getReverseIterator(){return new zn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new zn(this.root,t,this.comparator,!0)}}class zn{constructor(t,e,r,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&s&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class ut{constructor(t,e,r,s,o){this.key=t,this.value=e,this.color=r??ut.RED,this.left=s??ut.EMPTY,this.right=o??ut.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,s,o){return new ut(t??this.key,e??this.value,r??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let s=this;const o=r(t,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(t,e,r),null):o===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ut.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return ut.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,ut.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,ut.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw x();const t=this.left.check();if(t!==this.right.check())throw x();return t+(this.isRed()?0:1)}}ut.EMPTY=null,ut.RED=!0,ut.BLACK=!1,ut.EMPTY=new class{constructor(){this.size=0}get key(){throw x()}get value(){throw x()}get color(){throw x()}get left(){throw x()}get right(){throw x()}copy(t,e,r,s,o){return this}insert(t,e,r){return new ut(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(t){this.comparator=t,this.data=new J(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Vo(this.data.getIterator())}getIteratorFrom(t){return new Vo(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof it)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new it(this.comparator);return e.data=t,e}}class Vo{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(t){this.fields=t,t.sort(ct.comparator)}static empty(){return new St([])}unionWith(t){let e=new it(ct.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new St(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Pe(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Do("Invalid base64 string: "+o):o}}(t);return new lt(e)}static fromUint8Array(t){const e=function(s){let o="";for(let a=0;a<s.length;++a)o+=String.fromCharCode(s[a]);return o}(t);return new lt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let s=0;s<e.length;s++)r[s]=e.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return q(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}lt.EMPTY_BYTE_STRING=new lt("");const Ed=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Xt(n){if(W(!!n),typeof n=="string"){let t=0;const e=Ed.exec(n);if(W(!!e),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:tt(n.seconds),nanos:tt(n.nanos)}}function tt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Jt(n){return typeof n=="string"?lt.fromBase64String(n):lt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ko="server_timestamp",No="__type__",Mo="__previous_value__",Lo="__local_write_time__";function os(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{})[No])===null||e===void 0?void 0:e.stringValue)===ko}function Hn(n){const t=n.mapValue.fields[Mo];return os(t)?Hn(t):t}function Xe(n){const t=Xt(n.mapValue.fields[Lo].timestampValue);return new st(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Td{constructor(t,e,r,s,o,a,u,h,d){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=s,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=u,this.longPollingOptions=h,this.useFetchStreams=d}}const Gn="(default)";class Je{constructor(t,e){this.projectId=t,this.database=e||Gn}static empty(){return new Je("","")}get isDefaultDatabase(){return this.database===Gn}isEqual(t){return t instanceof Je&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oo="__type__",vd="__max__",Kn={mapValue:{}},xo="__vector__",Wn="value";function Zt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?os(n)?4:wd(n)?9007199254740991:Id(n)?10:11:x()}function Nt(n,t){if(n===t)return!0;const e=Zt(n);if(e!==Zt(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return Xe(n).isEqual(Xe(t));case 3:return function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const a=Xt(s.timestampValue),u=Xt(o.timestampValue);return a.seconds===u.seconds&&a.nanos===u.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(s,o){return Jt(s.bytesValue).isEqual(Jt(o.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(s,o){return tt(s.geoPointValue.latitude)===tt(o.geoPointValue.latitude)&&tt(s.geoPointValue.longitude)===tt(o.geoPointValue.longitude)}(n,t);case 2:return function(s,o){if("integerValue"in s&&"integerValue"in o)return tt(s.integerValue)===tt(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const a=tt(s.doubleValue),u=tt(o.doubleValue);return a===u?jn(a)===jn(u):isNaN(a)&&isNaN(u)}return!1}(n,t);case 9:return Pe(n.arrayValue.values||[],t.arrayValue.values||[],Nt);case 10:case 11:return function(s,o){const a=s.mapValue.fields||{},u=o.mapValue.fields||{};if(Co(a)!==Co(u))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(u[h]===void 0||!Nt(a[h],u[h])))return!1;return!0}(n,t);default:return x()}}function Ze(n,t){return(n.values||[]).find(e=>Nt(e,t))!==void 0}function ke(n,t){if(n===t)return 0;const e=Zt(n),r=Zt(t);if(e!==r)return q(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return q(n.booleanValue,t.booleanValue);case 2:return function(o,a){const u=tt(o.integerValue||o.doubleValue),h=tt(a.integerValue||a.doubleValue);return u<h?-1:u>h?1:u===h?0:isNaN(u)?isNaN(h)?0:-1:1}(n,t);case 3:return Fo(n.timestampValue,t.timestampValue);case 4:return Fo(Xe(n),Xe(t));case 5:return ss(n.stringValue,t.stringValue);case 6:return function(o,a){const u=Jt(o),h=Jt(a);return u.compareTo(h)}(n.bytesValue,t.bytesValue);case 7:return function(o,a){const u=o.split("/"),h=a.split("/");for(let d=0;d<u.length&&d<h.length;d++){const p=q(u[d],h[d]);if(p!==0)return p}return q(u.length,h.length)}(n.referenceValue,t.referenceValue);case 8:return function(o,a){const u=q(tt(o.latitude),tt(a.latitude));return u!==0?u:q(tt(o.longitude),tt(a.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return Uo(n.arrayValue,t.arrayValue);case 10:return function(o,a){var u,h,d,p;const v=o.fields||{},R=a.fields||{},C=(u=v[Wn])===null||u===void 0?void 0:u.arrayValue,P=(h=R[Wn])===null||h===void 0?void 0:h.arrayValue,k=q(((d=C==null?void 0:C.values)===null||d===void 0?void 0:d.length)||0,((p=P==null?void 0:P.values)===null||p===void 0?void 0:p.length)||0);return k!==0?k:Uo(C,P)}(n.mapValue,t.mapValue);case 11:return function(o,a){if(o===Kn.mapValue&&a===Kn.mapValue)return 0;if(o===Kn.mapValue)return 1;if(a===Kn.mapValue)return-1;const u=o.fields||{},h=Object.keys(u),d=a.fields||{},p=Object.keys(d);h.sort(),p.sort();for(let v=0;v<h.length&&v<p.length;++v){const R=ss(h[v],p[v]);if(R!==0)return R;const C=ke(u[h[v]],d[p[v]]);if(C!==0)return C}return q(h.length,p.length)}(n.mapValue,t.mapValue);default:throw x()}}function Fo(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return q(n,t);const e=Xt(n),r=Xt(t),s=q(e.seconds,r.seconds);return s!==0?s:q(e.nanos,r.nanos)}function Uo(n,t){const e=n.values||[],r=t.values||[];for(let s=0;s<e.length&&s<r.length;++s){const o=ke(e[s],r[s]);if(o)return o}return q(e.length,r.length)}function Ne(n){return as(n)}function as(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=Xt(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return Jt(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return O.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",s=!0;for(const o of e.values||[])s?s=!1:r+=",",r+=as(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let s="{",o=!0;for(const a of r)o?o=!1:s+=",",s+=`${a}:${as(e.fields[a])}`;return s+"}"}(n.mapValue):x()}function Qn(n){switch(Zt(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Hn(n);return t?16+Qn(t):16;case 5:return 2*n.stringValue.length;case 6:return Jt(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,o)=>s+Qn(o),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return he(r.fields,(o,a)=>{s+=o.length+Qn(a)}),s}(n.mapValue);default:throw x()}}function Bo(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function cs(n){return!!n&&"integerValue"in n}function us(n){return!!n&&"arrayValue"in n}function $o(n){return!!n&&"nullValue"in n}function qo(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Yn(n){return!!n&&"mapValue"in n}function Id(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{})[Oo])===null||e===void 0?void 0:e.stringValue)===xo}function tn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return he(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=tn(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=tn(n.arrayValue.values[e]);return t}return Object.assign({},n)}function wd(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===vd}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(t){this.value=t}static empty(){return new At({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!Yn(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=tn(e)}setAll(t){let e=ct.emptyPath(),r={},s=[];t.forEach((a,u)=>{if(!e.isImmediateParentOf(u)){const h=this.getFieldsMap(e);this.applyChanges(h,r,s),r={},s=[],e=u.popLast()}a?r[u.lastSegment()]=tn(a):s.push(u.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,r,s)}delete(t){const e=this.field(t.popLast());Yn(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Nt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=e.mapValue.fields[t.get(r)];Yn(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,r){he(e,(s,o)=>t[s]=o);for(const s of r)delete t[s]}clone(){return new At(tn(this.value))}}function jo(n){const t=[];return he(n.fields,(e,r)=>{const s=new ct([e]);if(Yn(r)){const o=jo(r.mapValue).fields;if(o.length===0)t.push(s);else for(const a of o)t.push(s.child(a))}else t.push(s)}),new St(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(t,e,r,s,o,a,u){this.key=t,this.documentType=e,this.version=r,this.readTime=s,this.createTime=o,this.data=a,this.documentState=u}static newInvalidDocument(t){return new ft(t,0,U.min(),U.min(),U.min(),At.empty(),0)}static newFoundDocument(t,e,r,s){return new ft(t,1,e,U.min(),r,s,0)}static newNoDocument(t,e){return new ft(t,2,e,U.min(),U.min(),At.empty(),0)}static newUnknownDocument(t,e){return new ft(t,3,e,U.min(),U.min(),At.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(U.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=At.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=At.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=U.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof ft&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new ft(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(t,e){this.position=t,this.inclusive=e}}function zo(n,t,e){let r=0;for(let s=0;s<n.position.length;s++){const o=t[s],a=n.position[s];if(o.field.isKeyField()?r=O.comparator(O.fromName(a.referenceValue),e.key):r=ke(a,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ho(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!Nt(n.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(t,e="asc"){this.field=t,this.dir=e}}function Ad(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{}class et extends Go{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new bd(t,e,r):e==="array-contains"?new Pd(t,r):e==="in"?new Vd(t,r):e==="not-in"?new Dd(t,r):e==="array-contains-any"?new kd(t,r):new et(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new Sd(t,r):new Cd(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(ke(e,this.value)):e!==null&&Zt(this.value)===Zt(e)&&this.matchesComparison(ke(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return x()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ct extends Go{constructor(t,e){super(),this.filters=t,this.op=e,this.ce=null}static create(t,e){return new Ct(t,e)}matches(t){return Ko(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function Ko(n){return n.op==="and"}function Wo(n){return Rd(n)&&Ko(n)}function Rd(n){for(const t of n.filters)if(t instanceof Ct)return!1;return!0}function ls(n){if(n instanceof et)return n.field.canonicalString()+n.op.toString()+Ne(n.value);if(Wo(n))return n.filters.map(t=>ls(t)).join(",");{const t=n.filters.map(e=>ls(e)).join(",");return`${n.op}(${t})`}}function Qo(n,t){return n instanceof et?function(r,s){return s instanceof et&&r.op===s.op&&r.field.isEqual(s.field)&&Nt(r.value,s.value)}(n,t):n instanceof Ct?function(r,s){return s instanceof Ct&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((o,a,u)=>o&&Qo(a,s.filters[u]),!0):!1}(n,t):void x()}function Yo(n){return n instanceof et?function(e){return`${e.field.canonicalString()} ${e.op} ${Ne(e.value)}`}(n):n instanceof Ct?function(e){return e.op.toString()+" {"+e.getFilters().map(Yo).join(" ,")+"}"}(n):"Filter"}class bd extends et{constructor(t,e,r){super(t,e,r),this.key=O.fromName(r.referenceValue)}matches(t){const e=O.comparator(t.key,this.key);return this.matchesComparison(e)}}class Sd extends et{constructor(t,e){super(t,"in",e),this.keys=Xo("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Cd extends et{constructor(t,e){super(t,"not-in",e),this.keys=Xo("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Xo(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>O.fromName(r.referenceValue))}class Pd extends et{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return us(e)&&Ze(e.arrayValue,this.value)}}class Vd extends et{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Ze(this.value.arrayValue,e)}}class Dd extends et{constructor(t,e){super(t,"not-in",e)}matches(t){if(Ze(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!Ze(this.value.arrayValue,e)}}class kd extends et{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!us(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>Ze(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nd{constructor(t,e=null,r=[],s=[],o=null,a=null,u=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=s,this.limit=o,this.startAt=a,this.endAt=u,this.le=null}}function Jo(n,t=null,e=[],r=[],s=null,o=null,a=null){return new Nd(n,t,e,r,s,o,a)}function hs(n){const t=B(n);if(t.le===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>ls(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),qn(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>Ne(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>Ne(r)).join(",")),t.le=e}return t.le}function ds(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!Ad(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!Qo(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!Ho(n.startAt,t.startAt)&&Ho(n.endAt,t.endAt)}function fs(n){return O.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(t,e=null,r=[],s=[],o=null,a="F",u=null,h=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=s,this.limit=o,this.limitType=a,this.startAt=u,this.endAt=h,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function Md(n,t,e,r,s,o,a,u){return new Me(n,t,e,r,s,o,a,u)}function Zo(n){return new Me(n)}function ta(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function ea(n){return n.collectionGroup!==null}function nn(n){const t=B(n);if(t.he===null){t.he=[];const e=new Set;for(const o of t.explicitOrderBy)t.he.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let u=new it(ct.comparator);return a.filters.forEach(h=>{h.getFlattenedFilters().forEach(d=>{d.isInequality()&&(u=u.add(d.field))})}),u})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.he.push(new en(o,r))}),e.has(ct.keyField().canonicalString())||t.he.push(new en(ct.keyField(),r))}return t.he}function Mt(n){const t=B(n);return t.Pe||(t.Pe=Ld(t,nn(n))),t.Pe}function Ld(n,t){if(n.limitType==="F")return Jo(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(s=>{const o=s.dir==="desc"?"asc":"desc";return new en(s.field,o)});const e=n.endAt?new Xn(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Xn(n.startAt.position,n.startAt.inclusive):null;return Jo(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function ps(n,t){const e=n.filters.concat([t]);return new Me(n.path,n.collectionGroup,n.explicitOrderBy.slice(),e,n.limit,n.limitType,n.startAt,n.endAt)}function ms(n,t,e){return new Me(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function Jn(n,t){return ds(Mt(n),Mt(t))&&n.limitType===t.limitType}function na(n){return`${hs(Mt(n))}|lt:${n.limitType}`}function Le(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(s=>Yo(s)).join(", ")}]`),qn(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(s=>Ne(s)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(s=>Ne(s)).join(",")),`Target(${r})`}(Mt(n))}; limitType=${n.limitType})`}function Zn(n,t){return t.isFoundDocument()&&function(r,s){const o=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):O.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,t)&&function(r,s){for(const o of nn(r))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0}(n,t)&&function(r,s){for(const o of r.filters)if(!o.matches(s))return!1;return!0}(n,t)&&function(r,s){return!(r.startAt&&!function(a,u,h){const d=zo(a,u,h);return a.inclusive?d<=0:d<0}(r.startAt,nn(r),s)||r.endAt&&!function(a,u,h){const d=zo(a,u,h);return a.inclusive?d>=0:d>0}(r.endAt,nn(r),s))}(n,t)}function Od(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function ra(n){return(t,e)=>{let r=!1;for(const s of nn(n)){const o=xd(s,t,e);if(o!==0)return o;r=r||s.field.isKeyField()}return 0}}function xd(n,t,e){const r=n.field.isKeyField()?O.comparator(t.key,e.key):function(o,a,u){const h=a.data.field(o),d=u.data.field(o);return h!==null&&d!==null?ke(h,d):x()}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return x()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[s,o]of r)if(this.equalsFn(s,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return void(s[o]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[e]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){he(this.inner,(e,r)=>{for(const[s,o]of r)t(s,o)})}isEmpty(){return Po(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fd=new J(O.comparator);function Ut(){return Fd}const sa=new J(O.comparator);function rn(...n){let t=sa;for(const e of n)t=t.insert(e.key,e);return t}function ia(n){let t=sa;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function fe(){return sn()}function oa(){return sn()}function sn(){return new de(n=>n.toString(),(n,t)=>n.isEqual(t))}const Ud=new J(O.comparator),Bd=new it(O.comparator);function j(...n){let t=Bd;for(const e of n)t=t.add(e);return t}const $d=new it(q);function qd(){return $d}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gs(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:jn(t)?"-0":t}}function aa(n){return{integerValue:""+n}}function jd(n,t){return gd(t)?aa(t):gs(n,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(){this._=void 0}}function zd(n,t,e){return n instanceof on?function(s,o){const a={fields:{[No]:{stringValue:ko},[Lo]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&os(o)&&(o=Hn(o)),o&&(a.fields[Mo]=o),{mapValue:a}}(e,t):n instanceof an?ua(n,t):n instanceof cn?la(n,t):function(s,o){const a=ca(s,o),u=ha(a)+ha(s.Ie);return cs(a)&&cs(s.Ie)?aa(u):gs(s.serializer,u)}(n,t)}function Hd(n,t,e){return n instanceof an?ua(n,t):n instanceof cn?la(n,t):e}function ca(n,t){return n instanceof er?function(r){return cs(r)||function(o){return!!o&&"doubleValue"in o}(r)}(t)?t:{integerValue:0}:null}class on extends tr{}class an extends tr{constructor(t){super(),this.elements=t}}function ua(n,t){const e=da(t);for(const r of n.elements)e.some(s=>Nt(s,r))||e.push(r);return{arrayValue:{values:e}}}class cn extends tr{constructor(t){super(),this.elements=t}}function la(n,t){let e=da(t);for(const r of n.elements)e=e.filter(s=>!Nt(s,r));return{arrayValue:{values:e}}}class er extends tr{constructor(t,e){super(),this.serializer=t,this.Ie=e}}function ha(n){return tt(n.integerValue||n.doubleValue)}function da(n){return us(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gd{constructor(t,e){this.field=t,this.transform=e}}function Kd(n,t){return n.field.isEqual(t.field)&&function(r,s){return r instanceof an&&s instanceof an||r instanceof cn&&s instanceof cn?Pe(r.elements,s.elements,Nt):r instanceof er&&s instanceof er?Nt(r.Ie,s.Ie):r instanceof on&&s instanceof on}(n.transform,t.transform)}class Wd{constructor(t,e){this.version=t,this.transformResults=e}}class Bt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Bt}static exists(t){return new Bt(void 0,t)}static updateTime(t){return new Bt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function nr(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class rr{}function fa(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new ya(n.key,Bt.none()):new ln(n.key,n.data,Bt.none());{const e=n.data,r=At.empty();let s=new it(ct.comparator);for(let o of t.fields)if(!s.has(o)){let a=e.field(o);a===null&&o.length>1&&(o=o.popLast(),a=e.field(o)),a===null?r.delete(o):r.set(o,a),s=s.add(o)}return new pe(n.key,r,new St(s.toArray()),Bt.none())}}function Qd(n,t,e){n instanceof ln?function(s,o,a){const u=s.value.clone(),h=ga(s.fieldTransforms,o,a.transformResults);u.setAll(h),o.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,t,e):n instanceof pe?function(s,o,a){if(!nr(s.precondition,o))return void o.convertToUnknownDocument(a.version);const u=ga(s.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(ma(s)),h.setAll(u),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()}(n,t,e):function(s,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,e)}function un(n,t,e,r){return n instanceof ln?function(o,a,u,h){if(!nr(o.precondition,a))return u;const d=o.value.clone(),p=_a(o.fieldTransforms,h,a);return d.setAll(p),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,t,e,r):n instanceof pe?function(o,a,u,h){if(!nr(o.precondition,a))return u;const d=_a(o.fieldTransforms,h,a),p=a.data;return p.setAll(ma(o)),p.setAll(d),a.convertToFoundDocument(a.version,p).setHasLocalMutations(),u===null?null:u.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(v=>v.field))}(n,t,e,r):function(o,a,u){return nr(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):u}(n,t,e)}function Yd(n,t){let e=null;for(const r of n.fieldTransforms){const s=t.data.field(r.field),o=ca(r.transform,s||null);o!=null&&(e===null&&(e=At.empty()),e.set(r.field,o))}return e||null}function pa(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Pe(r,s,(o,a)=>Kd(o,a))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class ln extends rr{constructor(t,e,r,s=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class pe extends rr{constructor(t,e,r,s,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function ma(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function ga(n,t,e){const r=new Map;W(n.length===e.length);for(let s=0;s<e.length;s++){const o=n[s],a=o.transform,u=t.data.field(o.field);r.set(o.field,Hd(a,u,e[s]))}return r}function _a(n,t,e){const r=new Map;for(const s of n){const o=s.transform,a=e.data.field(s.field);r.set(s.field,zd(o,a,t))}return r}class ya extends rr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Xd extends rr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{constructor(t,e,r,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(t.key)&&Qd(o,t,r[s])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=un(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=un(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=oa();return this.mutations.forEach(s=>{const o=t.get(s.key),a=o.overlayedDocument;let u=this.applyToLocalView(a,o.mutatedFields);u=e.has(s.key)?null:u;const h=fa(a,u);h!==null&&r.set(s.key,h),a.isValidDocument()||a.convertToNoDocument(U.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),j())}isEqual(t){return this.batchId===t.batchId&&Pe(this.mutations,t.mutations,(e,r)=>pa(e,r))&&Pe(this.baseMutations,t.baseMutations,(e,r)=>pa(e,r))}}class _s{constructor(t,e,r,s){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=s}static from(t,e,r){W(t.mutations.length===r.length);let s=function(){return Ud}();const o=t.mutations;for(let a=0;a<o.length;a++)s=s.insert(o[a].key,r[a].version);return new _s(t,e,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var nt,H;function ef(n){switch(n){case S.OK:return x();case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0;default:return x()}}function Ea(n){if(n===void 0)return Ft("GRPC error has no .code"),S.UNKNOWN;switch(n){case nt.OK:return S.OK;case nt.CANCELLED:return S.CANCELLED;case nt.UNKNOWN:return S.UNKNOWN;case nt.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case nt.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case nt.INTERNAL:return S.INTERNAL;case nt.UNAVAILABLE:return S.UNAVAILABLE;case nt.UNAUTHENTICATED:return S.UNAUTHENTICATED;case nt.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case nt.NOT_FOUND:return S.NOT_FOUND;case nt.ALREADY_EXISTS:return S.ALREADY_EXISTS;case nt.PERMISSION_DENIED:return S.PERMISSION_DENIED;case nt.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case nt.ABORTED:return S.ABORTED;case nt.OUT_OF_RANGE:return S.OUT_OF_RANGE;case nt.UNIMPLEMENTED:return S.UNIMPLEMENTED;case nt.DATA_LOSS:return S.DATA_LOSS;default:return x()}}(H=nt||(nt={}))[H.OK=0]="OK",H[H.CANCELLED=1]="CANCELLED",H[H.UNKNOWN=2]="UNKNOWN",H[H.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",H[H.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",H[H.NOT_FOUND=5]="NOT_FOUND",H[H.ALREADY_EXISTS=6]="ALREADY_EXISTS",H[H.PERMISSION_DENIED=7]="PERMISSION_DENIED",H[H.UNAUTHENTICATED=16]="UNAUTHENTICATED",H[H.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",H[H.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",H[H.ABORTED=10]="ABORTED",H[H.OUT_OF_RANGE=11]="OUT_OF_RANGE",H[H.UNIMPLEMENTED=12]="UNIMPLEMENTED",H[H.INTERNAL=13]="INTERNAL",H[H.UNAVAILABLE=14]="UNAVAILABLE",H[H.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nf=new Wt([4294967295,4294967295],0);function Ta(n){const t=To().encode(n),e=new uo;return e.update(t),new Uint8Array(e.digest())}function va(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new Wt([e,r],0),new Wt([s,o],0)]}class ys{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new hn(`Invalid padding: ${e}`);if(r<0)throw new hn(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new hn(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new hn(`Invalid padding when bitmap length is 0: ${e}`);this.Ee=8*t.length-e,this.de=Wt.fromNumber(this.Ee)}Ae(t,e,r){let s=t.add(e.multiply(Wt.fromNumber(r)));return s.compare(nf)===1&&(s=new Wt([s.getBits(0),s.getBits(1)],0)),s.modulo(this.de).toNumber()}Re(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.Ee===0)return!1;const e=Ta(t),[r,s]=va(e);for(let o=0;o<this.hashCount;o++){const a=this.Ae(r,s,o);if(!this.Re(a))return!1}return!0}static create(t,e,r){const s=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),a=new ys(o,s,e);return r.forEach(u=>a.insert(u)),a}insert(t){if(this.Ee===0)return;const e=Ta(t),[r,s]=va(e);for(let o=0;o<this.hashCount;o++){const a=this.Ae(r,s,o);this.Ve(a)}}Ve(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class hn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(t,e,r,s,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const s=new Map;return s.set(t,dn.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new sr(U.min(),s,new J(q),Ut(),j())}}class dn{constructor(t,e,r,s,o){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new dn(r,e,j(),j(),j())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(t,e,r,s){this.me=t,this.removedTargetIds=e,this.key=r,this.fe=s}}class Ia{constructor(t,e){this.targetId=t,this.ge=e}}class wa{constructor(t,e,r=lt.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=s}}class Aa{constructor(){this.pe=0,this.ye=Ra(),this.we=lt.EMPTY_BYTE_STRING,this.Se=!1,this.be=!0}get current(){return this.Se}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.be}Ce(t){t.approximateByteSize()>0&&(this.be=!0,this.we=t)}Fe(){let t=j(),e=j(),r=j();return this.ye.forEach((s,o)=>{switch(o){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:r=r.add(s);break;default:x()}}),new dn(this.we,this.Se,t,e,r)}Me(){this.be=!1,this.ye=Ra()}xe(t,e){this.be=!0,this.ye=this.ye.insert(t,e)}Oe(t){this.be=!0,this.ye=this.ye.remove(t)}Ne(){this.pe+=1}Be(){this.pe-=1,W(this.pe>=0)}Le(){this.be=!0,this.Se=!0}}class rf{constructor(t){this.ke=t,this.qe=new Map,this.Qe=Ut(),this.$e=or(),this.Ue=or(),this.Ke=new J(q)}We(t){for(const e of t.me)t.fe&&t.fe.isFoundDocument()?this.Ge(e,t.fe):this.ze(e,t.key,t.fe);for(const e of t.removedTargetIds)this.ze(e,t.key,t.fe)}je(t){this.forEachTarget(t,e=>{const r=this.He(e);switch(t.state){case 0:this.Je(e)&&r.Ce(t.resumeToken);break;case 1:r.Be(),r.De||r.Me(),r.Ce(t.resumeToken);break;case 2:r.Be(),r.De||this.removeTarget(e);break;case 3:this.Je(e)&&(r.Le(),r.Ce(t.resumeToken));break;case 4:this.Je(e)&&(this.Ye(e),r.Ce(t.resumeToken));break;default:x()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.qe.forEach((r,s)=>{this.Je(s)&&e(s)})}Ze(t){const e=t.targetId,r=t.ge.count,s=this.Xe(e);if(s){const o=s.target;if(fs(o))if(r===0){const a=new O(o.path);this.ze(e,a,ft.newNoDocument(a,U.min()))}else W(r===1);else{const a=this.et(e);if(a!==r){const u=this.tt(t),h=u?this.nt(u,t,a):1;if(h!==0){this.Ye(e);const d=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(e,d)}}}}}tt(t){const e=t.ge.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:o=0}=e;let a,u;try{a=Jt(r).toUint8Array()}catch(h){if(h instanceof Do)return Ce("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{u=new ys(a,s,o)}catch(h){return Ce(h instanceof hn?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return u.Ee===0?null:u}nt(t,e,r){return e.ge.count===r-this.st(t,e.targetId)?0:2}st(t,e){const r=this.ke.getRemoteKeysForTarget(e);let s=0;return r.forEach(o=>{const a=this.ke.it(),u=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;t.mightContain(u)||(this.ze(e,o,null),s++)}),s}ot(t){const e=new Map;this.qe.forEach((o,a)=>{const u=this.Xe(a);if(u){if(o.current&&fs(u.target)){const h=new O(u.target.path);this._t(h).has(a)||this.ut(a,h)||this.ze(a,h,ft.newNoDocument(h,t))}o.ve&&(e.set(a,o.Fe()),o.Me())}});let r=j();this.Ue.forEach((o,a)=>{let u=!0;a.forEachWhile(h=>{const d=this.Xe(h);return!d||d.purpose==="TargetPurposeLimboResolution"||(u=!1,!1)}),u&&(r=r.add(o))}),this.Qe.forEach((o,a)=>a.setReadTime(t));const s=new sr(t,e,this.Ke,this.Qe,r);return this.Qe=Ut(),this.$e=or(),this.Ue=or(),this.Ke=new J(q),s}Ge(t,e){if(!this.Je(t))return;const r=this.ut(t,e.key)?2:0;this.He(t).xe(e.key,r),this.Qe=this.Qe.insert(e.key,e),this.$e=this.$e.insert(e.key,this._t(e.key).add(t)),this.Ue=this.Ue.insert(e.key,this.ct(e.key).add(t))}ze(t,e,r){if(!this.Je(t))return;const s=this.He(t);this.ut(t,e)?s.xe(e,1):s.Oe(e),this.Ue=this.Ue.insert(e,this.ct(e).delete(t)),this.Ue=this.Ue.insert(e,this.ct(e).add(t)),r&&(this.Qe=this.Qe.insert(e,r))}removeTarget(t){this.qe.delete(t)}et(t){const e=this.He(t).Fe();return this.ke.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Ne(t){this.He(t).Ne()}He(t){let e=this.qe.get(t);return e||(e=new Aa,this.qe.set(t,e)),e}ct(t){let e=this.Ue.get(t);return e||(e=new it(q),this.Ue=this.Ue.insert(t,e)),e}_t(t){let e=this.$e.get(t);return e||(e=new it(q),this.$e=this.$e.insert(t,e)),e}Je(t){const e=this.Xe(t)!==null;return e||N("WatchChangeAggregator","Detected inactive target",t),e}Xe(t){const e=this.qe.get(t);return e&&e.De?null:this.ke.lt(t)}Ye(t){this.qe.set(t,new Aa),this.ke.getRemoteKeysForTarget(t).forEach(e=>{this.ze(t,e,null)})}ut(t,e){return this.ke.getRemoteKeysForTarget(t).has(e)}}function or(){return new J(O.comparator)}function Ra(){return new J(O.comparator)}const sf={asc:"ASCENDING",desc:"DESCENDING"},of={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},af={and:"AND",or:"OR"};class cf{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Es(n,t){return n.useProto3Json||qn(t)?t:{value:t}}function ar(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function ba(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function uf(n,t){return ar(n,t.toTimestamp())}function Lt(n){return W(!!n),U.fromTimestamp(function(e){const r=Xt(e);return new st(r.seconds,r.nanos)}(n))}function Ts(n,t){return vs(n,t).canonicalString()}function vs(n,t){const e=function(s){return new Y(["projects",s.projectId,"databases",s.database])}(n).child("documents");return t===void 0?e:e.child(t)}function Sa(n){const t=Y.fromString(n);return W(Na(t)),t}function Is(n,t){return Ts(n.databaseId,t.path)}function ws(n,t){const e=Sa(t);if(e.get(1)!==n.databaseId.projectId)throw new M(S.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new M(S.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new O(Pa(e))}function Ca(n,t){return Ts(n.databaseId,t)}function lf(n){const t=Sa(n);return t.length===4?Y.emptyPath():Pa(t)}function As(n){return new Y(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Pa(n){return W(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Va(n,t,e){return{name:Is(n,t),fields:e.value.mapValue.fields}}function hf(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:x()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],o=function(d,p){return d.useProto3Json?(W(p===void 0||typeof p=="string"),lt.fromBase64String(p||"")):(W(p===void 0||p instanceof Buffer||p instanceof Uint8Array),lt.fromUint8Array(p||new Uint8Array))}(n,t.targetChange.resumeToken),a=t.targetChange.cause,u=a&&function(d){const p=d.code===void 0?S.UNKNOWN:Ea(d.code);return new M(p,d.message||"")}(a);e=new wa(r,s,o,u||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=ws(n,r.document.name),o=Lt(r.document.updateTime),a=r.document.createTime?Lt(r.document.createTime):U.min(),u=new At({mapValue:{fields:r.document.fields}}),h=ft.newFoundDocument(s,o,a,u),d=r.targetIds||[],p=r.removedTargetIds||[];e=new ir(d,p,h.key,h)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=ws(n,r.document),o=r.readTime?Lt(r.readTime):U.min(),a=ft.newNoDocument(s,o),u=r.removedTargetIds||[];e=new ir([],u,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=ws(n,r.document),o=r.removedTargetIds||[];e=new ir([],o,s,null)}else{if(!("filter"in t))return x();{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:o}=r,a=new tf(s,o),u=r.targetId;e=new Ia(u,a)}}return e}function df(n,t){let e;if(t instanceof ln)e={update:Va(n,t.key,t.value)};else if(t instanceof ya)e={delete:Is(n,t.key)};else if(t instanceof pe)e={update:Va(n,t.key,t.data),updateMask:vf(t.fieldMask)};else{if(!(t instanceof Xd))return x();e={verify:Is(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(o,a){const u=a.transform;if(u instanceof on)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof an)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof cn)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof er)return{fieldPath:a.field.canonicalString(),increment:u.Ie};throw x()}(0,r))),t.precondition.isNone||(e.currentDocument=function(s,o){return o.updateTime!==void 0?{updateTime:uf(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:x()}(n,t.precondition)),e}function ff(n,t){return n&&n.length>0?(W(t!==void 0),n.map(e=>function(s,o){let a=s.updateTime?Lt(s.updateTime):Lt(o);return a.isEqual(U.min())&&(a=Lt(o)),new Wd(a,s.transformResults||[])}(e,t))):[]}function pf(n,t){return{documents:[Ca(n,t.path)]}}function mf(n,t){const e={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=Ca(n,s);const o=function(d){if(d.length!==0)return ka(Ct.create(d,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const a=function(d){if(d.length!==0)return d.map(p=>function(R){return{field:Oe(R.field),direction:yf(R.dir)}}(p))}(t.orderBy);a&&(e.structuredQuery.orderBy=a);const u=Es(n,t.limit);return u!==null&&(e.structuredQuery.limit=u),t.startAt&&(e.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(t.endAt)),{ht:e,parent:s}}function gf(n){let t=lf(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let s=null;if(r>0){W(r===1);const p=e.from[0];p.allDescendants?s=p.collectionId:t=t.child(p.collectionId)}let o=[];e.where&&(o=function(v){const R=Da(v);return R instanceof Ct&&Wo(R)?R.getFilters():[R]}(e.where));let a=[];e.orderBy&&(a=function(v){return v.map(R=>function(P){return new en(xe(P.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(R))}(e.orderBy));let u=null;e.limit&&(u=function(v){let R;return R=typeof v=="object"?v.value:v,qn(R)?null:R}(e.limit));let h=null;e.startAt&&(h=function(v){const R=!!v.before,C=v.values||[];return new Xn(C,R)}(e.startAt));let d=null;return e.endAt&&(d=function(v){const R=!v.before,C=v.values||[];return new Xn(C,R)}(e.endAt)),Md(t,s,a,o,u,"F",h,d)}function _f(n,t){const e=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return x()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Da(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=xe(e.unaryFilter.field);return et.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=xe(e.unaryFilter.field);return et.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=xe(e.unaryFilter.field);return et.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=xe(e.unaryFilter.field);return et.create(a,"!=",{nullValue:"NULL_VALUE"});default:return x()}}(n):n.fieldFilter!==void 0?function(e){return et.create(xe(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return x()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return Ct.create(e.compositeFilter.filters.map(r=>Da(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return x()}}(e.compositeFilter.op))}(n):x()}function yf(n){return sf[n]}function Ef(n){return of[n]}function Tf(n){return af[n]}function Oe(n){return{fieldPath:n.canonicalString()}}function xe(n){return ct.fromServerFormat(n.fieldPath)}function ka(n){return n instanceof et?function(e){if(e.op==="=="){if(qo(e.value))return{unaryFilter:{field:Oe(e.field),op:"IS_NAN"}};if($o(e.value))return{unaryFilter:{field:Oe(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(qo(e.value))return{unaryFilter:{field:Oe(e.field),op:"IS_NOT_NAN"}};if($o(e.value))return{unaryFilter:{field:Oe(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Oe(e.field),op:Ef(e.op),value:e.value}}}(n):n instanceof Ct?function(e){const r=e.getFilters().map(s=>ka(s));return r.length===1?r[0]:{compositeFilter:{op:Tf(e.op),filters:r}}}(n):x()}function vf(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Na(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(t,e,r,s,o=U.min(),a=U.min(),u=lt.EMPTY_BYTE_STRING,h=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=u,this.expectedCount=h}withSequenceNumber(t){return new te(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new te(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new te(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new te(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class If{constructor(t){this.Tt=t}}function wf(n){const t=gf({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?ms(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Af{constructor(){this.Tn=new Rf}addToCollectionParentIndex(t,e){return this.Tn.add(e),b.resolve()}getCollectionParents(t,e){return b.resolve(this.Tn.getEntries(e))}addFieldIndex(t,e){return b.resolve()}deleteFieldIndex(t,e){return b.resolve()}deleteAllFieldIndexes(t){return b.resolve()}createTargetIndexes(t,e){return b.resolve()}getDocumentsMatchingTarget(t,e){return b.resolve(null)}getIndexType(t,e){return b.resolve(0)}getFieldIndexes(t,e){return b.resolve([])}getNextCollectionGroupToUpdate(t){return b.resolve(null)}getMinOffset(t,e){return b.resolve(Yt.min())}getMinOffsetFromCollectionGroup(t,e){return b.resolve(Yt.min())}updateCollectionGroup(t,e,r){return b.resolve()}updateIndexEntries(t,e){return b.resolve()}}class Rf{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e]||new it(Y.comparator),o=!s.has(r);return this.index[e]=s.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e];return s&&s.has(r)}getEntries(t){return(this.index[t]||new it(Y.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ma={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},La=41943040;class vt{static withCacheSize(t){return new vt(t,vt.DEFAULT_COLLECTION_PERCENTILE,vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */vt.DEFAULT_COLLECTION_PERCENTILE=10,vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,vt.DEFAULT=new vt(La,vt.DEFAULT_COLLECTION_PERCENTILE,vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),vt.DISABLED=new vt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(t){this.$n=t}next(){return this.$n+=2,this.$n}static Un(){return new Fe(0)}static Kn(){return new Fe(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oa="LruGarbageCollector",bf=1048576;function xa([n,t],[e,r]){const s=q(n,e);return s===0?q(t,r):s}class Sf{constructor(t){this.Hn=t,this.buffer=new it(xa),this.Jn=0}Yn(){return++this.Jn}Zn(t){const e=[t,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(e);else{const r=this.buffer.last();xa(e,r)<0&&(this.buffer=this.buffer.delete(r).add(e))}}get maxValue(){return this.buffer.last()[0]}}class Cf{constructor(t,e,r){this.garbageCollector=t,this.asyncQueue=e,this.localStore=r,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(t){N(Oa,`Garbage collection scheduled in ${t}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){De(e)?N(Oa,"Ignoring IndexedDB error during garbage collection: ",e):await Ve(e)}await this.er(3e5)})}}class Pf{constructor(t,e){this.tr=t,this.params=e}calculateTargetCount(t,e){return this.tr.nr(t).next(r=>Math.floor(e/100*r))}nthSequenceNumber(t,e){if(e===0)return b.resolve($n.ae);const r=new Sf(e);return this.tr.forEachTarget(t,s=>r.Zn(s.sequenceNumber)).next(()=>this.tr.rr(t,s=>r.Zn(s))).next(()=>r.maxValue)}removeTargets(t,e,r){return this.tr.removeTargets(t,e,r)}removeOrphanedDocuments(t,e){return this.tr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(N("LruGarbageCollector","Garbage collection skipped; disabled"),b.resolve(Ma)):this.getCacheSize(t).next(r=>r<this.params.cacheSizeCollectionThreshold?(N("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Ma):this.ir(t,e))}getCacheSize(t){return this.tr.getCacheSize(t)}ir(t,e){let r,s,o,a,u,h,d;const p=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(v=>(v>this.params.maximumSequenceNumbersToCollect?(N("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${v}`),s=this.params.maximumSequenceNumbersToCollect):s=v,a=Date.now(),this.nthSequenceNumber(t,s))).next(v=>(r=v,u=Date.now(),this.removeTargets(t,r,e))).next(v=>(o=v,h=Date.now(),this.removeOrphanedDocuments(t,r))).next(v=>(d=Date.now(),Se()<=z.DEBUG&&N("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-p}ms
	Determined least recently used ${s} in `+(u-a)+`ms
	Removed ${o} targets in `+(h-u)+`ms
	Removed ${v} documents in `+(d-h)+`ms
Total Duration: ${d-p}ms`),b.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:o,documentsRemoved:v})))}}function Vf(n,t){return new Pf(n,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Df{constructor(){this.changes=new de(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,ft.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?b.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kf{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nf{constructor(t,e,r,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(r!==null&&un(r.mutation,s,St.empty(),st.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,j()).next(()=>r))}getLocalViewOfDocuments(t,e,r=j()){const s=fe();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,r).next(o=>{let a=rn();return o.forEach((u,h)=>{a=a.insert(u,h.overlayedDocument)}),a}))}getOverlayedDocuments(t,e){const r=fe();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,j()))}populateOverlays(t,e,r){const s=[];return r.forEach(o=>{e.has(o)||s.push(o)}),this.documentOverlayCache.getOverlays(t,s).next(o=>{o.forEach((a,u)=>{e.set(a,u)})})}computeViews(t,e,r,s){let o=Ut();const a=sn(),u=function(){return sn()}();return e.forEach((h,d)=>{const p=r.get(d.key);s.has(d.key)&&(p===void 0||p.mutation instanceof pe)?o=o.insert(d.key,d):p!==void 0?(a.set(d.key,p.mutation.getFieldMask()),un(p.mutation,d,p.mutation.getFieldMask(),st.now())):a.set(d.key,St.empty())}),this.recalculateAndSaveOverlays(t,o).next(h=>(h.forEach((d,p)=>a.set(d,p)),e.forEach((d,p)=>{var v;return u.set(d,new kf(p,(v=a.get(d))!==null&&v!==void 0?v:null))}),u))}recalculateAndSaveOverlays(t,e){const r=sn();let s=new J((a,u)=>a-u),o=j();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(a=>{for(const u of a)u.keys().forEach(h=>{const d=e.get(h);if(d===null)return;let p=r.get(h)||St.empty();p=u.applyToLocalView(d,p),r.set(h,p);const v=(s.get(u.batchId)||j()).add(h);s=s.insert(u.batchId,v)})}).next(()=>{const a=[],u=s.getReverseIterator();for(;u.hasNext();){const h=u.getNext(),d=h.key,p=h.value,v=oa();p.forEach(R=>{if(!o.has(R)){const C=fa(e.get(R),r.get(R));C!==null&&v.set(R,C),o=o.add(R)}}),a.push(this.documentOverlayCache.saveOverlays(t,d,v))}return b.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,s){return function(a){return O.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):ea(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,s):this.getDocumentsMatchingCollectionQuery(t,e,r,s)}getNextDocuments(t,e,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,s).next(o=>{const a=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,s-o.size):b.resolve(fe());let u=Ye,h=o;return a.next(d=>b.forEach(d,(p,v)=>(u<v.largestBatchId&&(u=v.largestBatchId),o.get(p)?b.resolve():this.remoteDocumentCache.getEntry(t,p).next(R=>{h=h.insert(p,R)}))).next(()=>this.populateOverlays(t,d,o)).next(()=>this.computeViews(t,h,d,j())).next(p=>({batchId:u,changes:ia(p)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new O(e)).next(r=>{let s=rn();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,r,s){const o=e.collectionGroup;let a=rn();return this.indexManager.getCollectionParents(t,o).next(u=>b.forEach(u,h=>{const d=function(v,R){return new Me(R,null,v.explicitOrderBy.slice(),v.filters.slice(),v.limit,v.limitType,v.startAt,v.endAt)}(e,h.child(o));return this.getDocumentsMatchingCollectionQuery(t,d,r,s).next(p=>{p.forEach((v,R)=>{a=a.insert(v,R)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,e,r,s){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,s))).next(a=>{o.forEach((h,d)=>{const p=d.getKey();a.get(p)===null&&(a=a.insert(p,ft.newInvalidDocument(p)))});let u=rn();return a.forEach((h,d)=>{const p=o.get(h);p!==void 0&&un(p.mutation,d,St.empty(),st.now()),Zn(e,d)&&(u=u.insert(h,d))}),u})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mf{constructor(t){this.serializer=t,this.dr=new Map,this.Ar=new Map}getBundleMetadata(t,e){return b.resolve(this.dr.get(e))}saveBundleMetadata(t,e){return this.dr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:Lt(s.createTime)}}(e)),b.resolve()}getNamedQuery(t,e){return b.resolve(this.Ar.get(e))}saveNamedQuery(t,e){return this.Ar.set(e.name,function(s){return{name:s.name,query:wf(s.bundledQuery),readTime:Lt(s.readTime)}}(e)),b.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lf{constructor(){this.overlays=new J(O.comparator),this.Rr=new Map}getOverlay(t,e){return b.resolve(this.overlays.get(e))}getOverlays(t,e){const r=fe();return b.forEach(e,s=>this.getOverlay(t,s).next(o=>{o!==null&&r.set(s,o)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((s,o)=>{this.Et(t,e,o)}),b.resolve()}removeOverlaysForBatchId(t,e,r){const s=this.Rr.get(r);return s!==void 0&&(s.forEach(o=>this.overlays=this.overlays.remove(o)),this.Rr.delete(r)),b.resolve()}getOverlaysForCollection(t,e,r){const s=fe(),o=e.length+1,a=new O(e.child("")),u=this.overlays.getIteratorFrom(a);for(;u.hasNext();){const h=u.getNext().value,d=h.getKey();if(!e.isPrefixOf(d.path))break;d.path.length===o&&h.largestBatchId>r&&s.set(h.getKey(),h)}return b.resolve(s)}getOverlaysForCollectionGroup(t,e,r,s){let o=new J((d,p)=>d-p);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===e&&d.largestBatchId>r){let p=o.get(d.largestBatchId);p===null&&(p=fe(),o=o.insert(d.largestBatchId,p)),p.set(d.getKey(),d)}}const u=fe(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((d,p)=>u.set(d,p)),!(u.size()>=s)););return b.resolve(u)}Et(t,e,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Rr.get(s.largestBatchId).delete(r.key);this.Rr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new Zd(e,r));let o=this.Rr.get(e);o===void 0&&(o=j(),this.Rr.set(e,o)),this.Rr.set(e,o.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of{constructor(){this.sessionToken=lt.EMPTY_BYTE_STRING}getSessionToken(t){return b.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,b.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(){this.Vr=new it(at.mr),this.gr=new it(at.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(t,e){const r=new at(t,e);this.Vr=this.Vr.add(r),this.gr=this.gr.add(r)}yr(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.wr(new at(t,e))}Sr(t,e){t.forEach(r=>this.removeReference(r,e))}br(t){const e=new O(new Y([])),r=new at(e,t),s=new at(e,t+1),o=[];return this.gr.forEachInRange([r,s],a=>{this.wr(a),o.push(a.key)}),o}Dr(){this.Vr.forEach(t=>this.wr(t))}wr(t){this.Vr=this.Vr.delete(t),this.gr=this.gr.delete(t)}vr(t){const e=new O(new Y([])),r=new at(e,t),s=new at(e,t+1);let o=j();return this.gr.forEachInRange([r,s],a=>{o=o.add(a.key)}),o}containsKey(t){const e=new at(t,0),r=this.Vr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class at{constructor(t,e){this.key=t,this.Cr=e}static mr(t,e){return O.comparator(t.key,e.key)||q(t.Cr,e.Cr)}static pr(t,e){return q(t.Cr,e.Cr)||O.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xf{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Fr=1,this.Mr=new it(at.mr)}checkEmpty(t){return b.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,s){const o=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Jd(o,e,r,s);this.mutationQueue.push(a);for(const u of s)this.Mr=this.Mr.add(new at(u.key,o)),this.indexManager.addToCollectionParentIndex(t,u.key.path.popLast());return b.resolve(a)}lookupMutationBatch(t,e){return b.resolve(this.Or(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,s=this.Nr(r),o=s<0?0:s;return b.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return b.resolve(this.mutationQueue.length===0?is:this.Fr-1)}getAllMutationBatches(t){return b.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new at(e,0),s=new at(e,Number.POSITIVE_INFINITY),o=[];return this.Mr.forEachInRange([r,s],a=>{const u=this.Or(a.Cr);o.push(u)}),b.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new it(q);return e.forEach(s=>{const o=new at(s,0),a=new at(s,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([o,a],u=>{r=r.add(u.Cr)})}),b.resolve(this.Br(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,s=r.length+1;let o=r;O.isDocumentKey(o)||(o=o.child(""));const a=new at(new O(o),0);let u=new it(q);return this.Mr.forEachWhile(h=>{const d=h.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(u=u.add(h.Cr)),!0)},a),b.resolve(this.Br(u))}Br(t){const e=[];return t.forEach(r=>{const s=this.Or(r);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){W(this.Lr(e.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Mr;return b.forEach(e.mutations,s=>{const o=new at(s.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.Mr=r})}qn(t){}containsKey(t,e){const r=new at(e,0),s=this.Mr.firstAfterOrEqual(r);return b.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,b.resolve()}Lr(t,e){return this.Nr(t)}Nr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Or(t){const e=this.Nr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ff{constructor(t){this.kr=t,this.docs=function(){return new J(O.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,s=this.docs.get(r),o=s?s.size:0,a=this.kr(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return b.resolve(r?r.document.mutableCopy():ft.newInvalidDocument(e))}getEntries(t,e){let r=Ut();return e.forEach(s=>{const o=this.docs.get(s);r=r.insert(s,o?o.document.mutableCopy():ft.newInvalidDocument(s))}),b.resolve(r)}getDocumentsMatchingQuery(t,e,r,s){let o=Ut();const a=e.path,u=new O(a.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(u);for(;h.hasNext();){const{key:d,value:{document:p}}=h.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||dd(hd(p),r)<=0||(s.has(p.key)||Zn(e,p))&&(o=o.insert(p.key,p.mutableCopy()))}return b.resolve(o)}getAllFromCollectionGroup(t,e,r,s){x()}qr(t,e){return b.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new Uf(this)}getSize(t){return b.resolve(this.size)}}class Uf extends Df{constructor(t){super(),this.Ir=t}applyChanges(t){const e=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?e.push(this.Ir.addEntry(t,s)):this.Ir.removeEntry(r)}),b.waitFor(e)}getFromCache(t,e){return this.Ir.getEntry(t,e)}getAllFromCache(t,e){return this.Ir.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bf{constructor(t){this.persistence=t,this.Qr=new de(e=>hs(e),ds),this.lastRemoteSnapshotVersion=U.min(),this.highestTargetId=0,this.$r=0,this.Ur=new Rs,this.targetCount=0,this.Kr=Fe.Un()}forEachTarget(t,e){return this.Qr.forEach((r,s)=>e(s)),b.resolve()}getLastRemoteSnapshotVersion(t){return b.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return b.resolve(this.$r)}allocateTargetId(t){return this.highestTargetId=this.Kr.next(),b.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.$r&&(this.$r=e),b.resolve()}zn(t){this.Qr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Kr=new Fe(e),this.highestTargetId=e),t.sequenceNumber>this.$r&&(this.$r=t.sequenceNumber)}addTargetData(t,e){return this.zn(e),this.targetCount+=1,b.resolve()}updateTargetData(t,e){return this.zn(e),b.resolve()}removeTargetData(t,e){return this.Qr.delete(e.target),this.Ur.br(e.targetId),this.targetCount-=1,b.resolve()}removeTargets(t,e,r){let s=0;const o=[];return this.Qr.forEach((a,u)=>{u.sequenceNumber<=e&&r.get(u.targetId)===null&&(this.Qr.delete(a),o.push(this.removeMatchingKeysForTargetId(t,u.targetId)),s++)}),b.waitFor(o).next(()=>s)}getTargetCount(t){return b.resolve(this.targetCount)}getTargetData(t,e){const r=this.Qr.get(e)||null;return b.resolve(r)}addMatchingKeys(t,e,r){return this.Ur.yr(e,r),b.resolve()}removeMatchingKeys(t,e,r){this.Ur.Sr(e,r);const s=this.persistence.referenceDelegate,o=[];return s&&e.forEach(a=>{o.push(s.markPotentiallyOrphaned(t,a))}),b.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.Ur.br(e),b.resolve()}getMatchingKeysForTargetId(t,e){const r=this.Ur.vr(e);return b.resolve(r)}containsKey(t,e){return b.resolve(this.Ur.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa{constructor(t,e){this.Wr={},this.overlays={},this.Gr=new $n(0),this.zr=!1,this.zr=!0,this.jr=new Of,this.referenceDelegate=t(this),this.Hr=new Bf(this),this.indexManager=new Af,this.remoteDocumentCache=function(s){return new Ff(s)}(r=>this.referenceDelegate.Jr(r)),this.serializer=new If(e),this.Yr=new Mf(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Lf,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.Wr[t.toKey()];return r||(r=new xf(e,this.referenceDelegate),this.Wr[t.toKey()]=r),r}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(t,e,r){N("MemoryPersistence","Starting transaction:",t);const s=new $f(this.Gr.next());return this.referenceDelegate.Zr(),r(s).next(o=>this.referenceDelegate.Xr(s).next(()=>o)).toPromise().then(o=>(s.raiseOnCommittedEvent(),o))}ei(t,e){return b.or(Object.values(this.Wr).map(r=>()=>r.containsKey(t,e)))}}class $f extends pd{constructor(t){super(),this.currentSequenceNumber=t}}class bs{constructor(t){this.persistence=t,this.ti=new Rs,this.ni=null}static ri(t){return new bs(t)}get ii(){if(this.ni)return this.ni;throw x()}addReference(t,e,r){return this.ti.addReference(r,e),this.ii.delete(r.toString()),b.resolve()}removeReference(t,e,r){return this.ti.removeReference(r,e),this.ii.add(r.toString()),b.resolve()}markPotentiallyOrphaned(t,e){return this.ii.add(e.toString()),b.resolve()}removeTarget(t,e){this.ti.br(e.targetId).forEach(s=>this.ii.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(o=>this.ii.add(o.toString()))}).next(()=>r.removeTargetData(t,e))}Zr(){this.ni=new Set}Xr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return b.forEach(this.ii,r=>{const s=O.fromPath(r);return this.si(t,s).next(o=>{o||e.removeEntry(s,U.min())})}).next(()=>(this.ni=null,e.apply(t)))}updateLimboDocument(t,e){return this.si(t,e).next(r=>{r?this.ii.delete(e.toString()):this.ii.add(e.toString())})}Jr(t){return 0}si(t,e){return b.or([()=>b.resolve(this.ti.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.ei(t,e)])}}class cr{constructor(t,e){this.persistence=t,this.oi=new de(r=>_d(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=Vf(this,e)}static ri(t,e){return new cr(t,e)}Zr(){}Xr(t){return b.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}nr(t){const e=this.sr(t);return this.persistence.getTargetCache().getTargetCount(t).next(r=>e.next(s=>r+s))}sr(t){let e=0;return this.rr(t,r=>{e++}).next(()=>e)}rr(t,e){return b.forEach(this.oi,(r,s)=>this.ar(t,r,s).next(o=>o?b.resolve():e(s)))}removeTargets(t,e,r){return this.persistence.getTargetCache().removeTargets(t,e,r)}removeOrphanedDocuments(t,e){let r=0;const s=this.persistence.getRemoteDocumentCache(),o=s.newChangeBuffer();return s.qr(t,a=>this.ar(t,a,e).next(u=>{u||(r++,o.removeEntry(a,U.min()))})).next(()=>o.apply(t)).next(()=>r)}markPotentiallyOrphaned(t,e){return this.oi.set(e,t.currentSequenceNumber),b.resolve()}removeTarget(t,e){const r=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,e,r){return this.oi.set(r,t.currentSequenceNumber),b.resolve()}removeReference(t,e,r){return this.oi.set(r,t.currentSequenceNumber),b.resolve()}updateLimboDocument(t,e){return this.oi.set(e,t.currentSequenceNumber),b.resolve()}Jr(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=Qn(t.data.value)),e}ar(t,e,r){return b.or([()=>this.persistence.ei(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const s=this.oi.get(e);return b.resolve(s!==void 0&&s>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(t,e,r,s){this.targetId=t,this.fromCache=e,this.Hi=r,this.Ji=s}static Yi(t,e){let r=j(),s=j();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new Ss(t,e.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qf{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jf{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return Ml()?8:md(Dl())>0?6:4}()}initialize(t,e){this.ns=t,this.indexManager=e,this.Zi=!0}getDocumentsMatchingQuery(t,e,r,s){const o={result:null};return this.rs(t,e).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.ss(t,e,s,r).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new qf;return this._s(t,e,a).next(u=>{if(o.result=u,this.Xi)return this.us(t,e,a,u.size)})}).next(()=>o.result)}us(t,e,r,s){return r.documentReadCount<this.es?(Se()<=z.DEBUG&&N("QueryEngine","SDK will not create cache indexes for query:",Le(e),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),b.resolve()):(Se()<=z.DEBUG&&N("QueryEngine","Query:",Le(e),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ts*s?(Se()<=z.DEBUG&&N("QueryEngine","The SDK decides to create cache indexes for query:",Le(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Mt(e))):b.resolve())}rs(t,e){if(ta(e))return b.resolve(null);let r=Mt(e);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=ms(e,null,"F"),r=Mt(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(o=>{const a=j(...o);return this.ns.getDocuments(t,a).next(u=>this.indexManager.getMinOffset(t,r).next(h=>{const d=this.cs(e,u);return this.ls(e,d,a,h.readTime)?this.rs(t,ms(e,null,"F")):this.hs(t,d,e,h)}))})))}ss(t,e,r,s){return ta(e)||s.isEqual(U.min())?b.resolve(null):this.ns.getDocuments(t,r).next(o=>{const a=this.cs(e,o);return this.ls(e,a,r,s)?b.resolve(null):(Se()<=z.DEBUG&&N("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Le(e)),this.hs(t,a,e,ld(s,Ye)).next(u=>u))})}cs(t,e){let r=new it(ra(t));return e.forEach((s,o)=>{Zn(t,o)&&(r=r.add(o))}),r}ls(t,e,r,s){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}_s(t,e,r){return Se()<=z.DEBUG&&N("QueryEngine","Using full collection scan to execute query:",Le(e)),this.ns.getDocumentsMatchingQuery(t,e,Yt.min(),r)}hs(t,e,r,s){return this.ns.getDocumentsMatchingQuery(t,r,s).next(o=>(e.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cs="LocalStore",zf=3e8;class Hf{constructor(t,e,r,s){this.persistence=t,this.Ps=e,this.serializer=s,this.Ts=new J(q),this.Is=new de(o=>hs(o),ds),this.Es=new Map,this.ds=t.getRemoteDocumentCache(),this.Hr=t.getTargetCache(),this.Yr=t.getBundleCache(),this.As(r)}As(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Nf(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.Ts))}}function Gf(n,t,e,r){return new Hf(n,t,e,r)}async function Ua(n,t){const e=B(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let s;return e.mutationQueue.getAllMutationBatches(r).next(o=>(s=o,e.As(t),e.mutationQueue.getAllMutationBatches(r))).next(o=>{const a=[],u=[];let h=j();for(const d of s){a.push(d.batchId);for(const p of d.mutations)h=h.add(p.key)}for(const d of o){u.push(d.batchId);for(const p of d.mutations)h=h.add(p.key)}return e.localDocuments.getDocuments(r,h).next(d=>({Rs:d,removedBatchIds:a,addedBatchIds:u}))})})}function Kf(n,t){const e=B(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=t.batch.keys(),o=e.ds.newChangeBuffer({trackRemovals:!0});return function(u,h,d,p){const v=d.batch,R=v.keys();let C=b.resolve();return R.forEach(P=>{C=C.next(()=>p.getEntry(h,P)).next(k=>{const D=d.docVersions.get(P);W(D!==null),k.version.compareTo(D)<0&&(v.applyToRemoteDocument(k,d),k.isValidDocument()&&(k.setReadTime(d.commitVersion),p.addEntry(k)))})}),C.next(()=>u.mutationQueue.removeMutationBatch(h,v))}(e,r,t,o).next(()=>o.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(u){let h=j();for(let d=0;d<u.mutationResults.length;++d)u.mutationResults[d].transformResults.length>0&&(h=h.add(u.batch.mutations[d].key));return h}(t))).next(()=>e.localDocuments.getDocuments(r,s))})}function Ba(n){const t=B(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Hr.getLastRemoteSnapshotVersion(e))}function Wf(n,t){const e=B(n),r=t.snapshotVersion;let s=e.Ts;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const a=e.ds.newChangeBuffer({trackRemovals:!0});s=e.Ts;const u=[];t.targetChanges.forEach((p,v)=>{const R=s.get(v);if(!R)return;u.push(e.Hr.removeMatchingKeys(o,p.removedDocuments,v).next(()=>e.Hr.addMatchingKeys(o,p.addedDocuments,v)));let C=R.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(v)!==null?C=C.withResumeToken(lt.EMPTY_BYTE_STRING,U.min()).withLastLimboFreeSnapshotVersion(U.min()):p.resumeToken.approximateByteSize()>0&&(C=C.withResumeToken(p.resumeToken,r)),s=s.insert(v,C),function(k,D,$){return k.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=zf?!0:$.addedDocuments.size+$.modifiedDocuments.size+$.removedDocuments.size>0}(R,C,p)&&u.push(e.Hr.updateTargetData(o,C))});let h=Ut(),d=j();if(t.documentUpdates.forEach(p=>{t.resolvedLimboDocuments.has(p)&&u.push(e.persistence.referenceDelegate.updateLimboDocument(o,p))}),u.push(Qf(o,a,t.documentUpdates).next(p=>{h=p.Vs,d=p.fs})),!r.isEqual(U.min())){const p=e.Hr.getLastRemoteSnapshotVersion(o).next(v=>e.Hr.setTargetsMetadata(o,o.currentSequenceNumber,r));u.push(p)}return b.waitFor(u).next(()=>a.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,h,d)).next(()=>h)}).then(o=>(e.Ts=s,o))}function Qf(n,t,e){let r=j(),s=j();return e.forEach(o=>r=r.add(o)),t.getEntries(n,r).next(o=>{let a=Ut();return e.forEach((u,h)=>{const d=o.get(u);h.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(u)),h.isNoDocument()&&h.version.isEqual(U.min())?(t.removeEntry(u,h.readTime),a=a.insert(u,h)):!d.isValidDocument()||h.version.compareTo(d.version)>0||h.version.compareTo(d.version)===0&&d.hasPendingWrites?(t.addEntry(h),a=a.insert(u,h)):N(Cs,"Ignoring outdated watch update for ",u,". Current version:",d.version," Watch version:",h.version)}),{Vs:a,fs:s}})}function Yf(n,t){const e=B(n);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=is),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function Xf(n,t){const e=B(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return e.Hr.getTargetData(r,t).next(o=>o?(s=o,b.resolve(s)):e.Hr.allocateTargetId(r).next(a=>(s=new te(t,a,"TargetPurposeListen",r.currentSequenceNumber),e.Hr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=e.Ts.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.Ts=e.Ts.insert(r.targetId,r),e.Is.set(t,r.targetId)),r})}async function Ps(n,t,e){const r=B(n),s=r.Ts.get(t),o=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",o,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!De(a))throw a;N(Cs,`Failed to update sequence numbers for target ${t}: ${a}`)}r.Ts=r.Ts.remove(t),r.Is.delete(s.target)}function $a(n,t,e){const r=B(n);let s=U.min(),o=j();return r.persistence.runTransaction("Execute query","readwrite",a=>function(h,d,p){const v=B(h),R=v.Is.get(p);return R!==void 0?b.resolve(v.Ts.get(R)):v.Hr.getTargetData(d,p)}(r,a,Mt(t)).next(u=>{if(u)return s=u.lastLimboFreeSnapshotVersion,r.Hr.getMatchingKeysForTargetId(a,u.targetId).next(h=>{o=h})}).next(()=>r.Ps.getDocumentsMatchingQuery(a,t,e?s:U.min(),e?o:j())).next(u=>(Jf(r,Od(t),u),{documents:u,gs:o})))}function Jf(n,t,e){let r=n.Es.get(t)||U.min();e.forEach((s,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.Es.set(t,r)}class qa{constructor(){this.activeTargetIds=qd()}Ds(t){this.activeTargetIds=this.activeTargetIds.add(t)}vs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}bs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Zf{constructor(){this.ho=new qa,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.ho.Ds(t),this.Po[t]||"not-current"}updateQueryState(t,e,r){this.Po[t]=e}removeLocalQueryTarget(t){this.ho.vs(t)}isLocalQueryTarget(t){return this.ho.activeTargetIds.has(t)}clearQueryState(t){delete this.Po[t]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(t){return this.ho.activeTargetIds.has(t)}start(){return this.ho=new qa,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tp{To(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ja="ConnectivityMonitor";class za{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(t){this.Vo.push(t)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){N(ja,"Network connectivity changed: AVAILABLE");for(const t of this.Vo)t(0)}Ro(){N(ja,"Network connectivity changed: UNAVAILABLE");for(const t of this.Vo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ur=null;function Vs(){return ur===null?ur=function(){return 268435456+Math.round(2147483648*Math.random())}():ur++,"0x"+ur.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ds="RestConnection",ep={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class np{get fo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.po=e+"://"+t.host,this.yo=`projects/${r}/databases/${s}`,this.wo=this.databaseId.database===Gn?`project_id=${r}`:`project_id=${r}&database_id=${s}`}So(t,e,r,s,o){const a=Vs(),u=this.bo(t,e.toUriEncodedString());N(Ds,`Sending RPC '${t}' ${a}:`,u,r);const h={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(h,s,o),this.vo(t,u,h,r).then(d=>(N(Ds,`Received RPC '${t}' ${a}: `,d),d),d=>{throw Ce(Ds,`RPC '${t}' ${a} failed with error: `,d,"url: ",u,"request:",r),d})}Co(t,e,r,s,o,a){return this.So(t,e,r,s,o)}Do(t,e,r){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+be}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((s,o)=>t[o]=s),r&&r.headers.forEach((s,o)=>t[o]=s)}bo(t,e){const r=ep[t];return`${this.po}/v1/${e}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rp{constructor(t){this.Fo=t.Fo,this.Mo=t.Mo}xo(t){this.Oo=t}No(t){this.Bo=t}Lo(t){this.ko=t}onMessage(t){this.qo=t}close(){this.Mo()}send(t){this.Fo(t)}Qo(){this.Oo()}$o(){this.Bo()}Uo(t){this.ko(t)}Ko(t){this.qo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pt="WebChannelConnection";class sp extends np{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}vo(t,e,r,s){const o=Vs();return new Promise((a,u)=>{const h=new lo;h.setWithCredentials(!0),h.listenOnce(ho.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case Bn.NO_ERROR:const p=h.getResponseJson();N(pt,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(p)),a(p);break;case Bn.TIMEOUT:N(pt,`RPC '${t}' ${o} timed out`),u(new M(S.DEADLINE_EXCEEDED,"Request time out"));break;case Bn.HTTP_ERROR:const v=h.getStatus();if(N(pt,`RPC '${t}' ${o} failed with status:`,v,"response text:",h.getResponseText()),v>0){let R=h.getResponseJson();Array.isArray(R)&&(R=R[0]);const C=R==null?void 0:R.error;if(C&&C.status&&C.message){const P=function(D){const $=D.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf($)>=0?$:S.UNKNOWN}(C.status);u(new M(P,C.message))}else u(new M(S.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new M(S.UNAVAILABLE,"Connection failed."));break;default:x()}}finally{N(pt,`RPC '${t}' ${o} completed.`)}});const d=JSON.stringify(s);N(pt,`RPC '${t}' ${o} sending request:`,s),h.send(e,"POST",d,r,15)})}Wo(t,e,r){const s=Vs(),o=[this.po,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=mo(),u=po(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(h.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(h.useFetchStreams=!0),this.Do(h.initMessageHeaders,e,r),h.encodeInitMessageHeaders=!0;const p=o.join("");N(pt,`Creating RPC '${t}' stream ${s}: ${p}`,h);const v=a.createWebChannel(p,h);let R=!1,C=!1;const P=new rp({Fo:D=>{C?N(pt,`Not sending because RPC '${t}' stream ${s} is closed:`,D):(R||(N(pt,`Opening RPC '${t}' stream ${s} transport.`),v.open(),R=!0),N(pt,`RPC '${t}' stream ${s} sending:`,D),v.send(D))},Mo:()=>v.close()}),k=(D,$,F)=>{D.listen($,G=>{try{F(G)}catch(rt){setTimeout(()=>{throw rt},0)}})};return k(v,Qe.EventType.OPEN,()=>{C||(N(pt,`RPC '${t}' stream ${s} transport opened.`),P.Qo())}),k(v,Qe.EventType.CLOSE,()=>{C||(C=!0,N(pt,`RPC '${t}' stream ${s} transport closed`),P.Uo())}),k(v,Qe.EventType.ERROR,D=>{C||(C=!0,Ce(pt,`RPC '${t}' stream ${s} transport errored:`,D),P.Uo(new M(S.UNAVAILABLE,"The operation could not be completed")))}),k(v,Qe.EventType.MESSAGE,D=>{var $;if(!C){const F=D.data[0];W(!!F);const G=F,rt=(G==null?void 0:G.error)||(($=G[0])===null||$===void 0?void 0:$.error);if(rt){N(pt,`RPC '${t}' stream ${s} received error:`,rt);const Pt=rt.status;let ot=function(_){const y=nt[_];if(y!==void 0)return Ea(y)}(Pt),E=rt.message;ot===void 0&&(ot=S.INTERNAL,E="Unknown error status: "+Pt+" with message "+rt.message),C=!0,P.Uo(new M(ot,E)),v.close()}else N(pt,`RPC '${t}' stream ${s} received:`,F),P.Ko(F)}}),k(u,fo.STAT_EVENT,D=>{D.stat===ns.PROXY?N(pt,`RPC '${t}' stream ${s} detected buffering proxy`):D.stat===ns.NOPROXY&&N(pt,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{P.$o()},0),P}}function ks(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lr(n){return new cf(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(t,e,r=1e3,s=1.5,o=6e4){this.Ti=t,this.timerId=e,this.Go=r,this.zo=s,this.jo=o,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(t){this.cancel();const e=Math.floor(this.Ho+this.e_()),r=Math.max(0,Date.now()-this.Yo),s=Math.max(0,e-r);s>0&&N("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ho} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,s,()=>(this.Yo=Date.now(),t())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ga="PersistentStream";class Ka{constructor(t,e,r,s,o,a,u,h){this.Ti=t,this.n_=r,this.r_=s,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=u,this.listener=h,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new Ha(t,e)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(t){this.E_(),this.stream.send(t)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(t,e){this.E_(),this.d_(),this.a_.cancel(),this.i_++,t!==4?this.a_.reset():e&&e.code===S.RESOURCE_EXHAUSTED?(Ft(e.toString()),Ft("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):e&&e.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Lo(e)}A_(){}auth(){this.state=1;const t=this.R_(this.i_),e=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.i_===e&&this.V_(r,s)},r=>{t(()=>{const s=new M(S.UNKNOWN,"Fetching auth token failed: "+r.message);return this.m_(s)})})}V_(t,e){const r=this.R_(this.i_);this.stream=this.f_(t,e),this.stream.xo(()=>{r(()=>this.listener.xo())}),this.stream.No(()=>{r(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(s=>{r(()=>this.m_(s))}),this.stream.onMessage(s=>{r(()=>++this.__==1?this.g_(s):this.onNext(s))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(t){return N(Ga,`close with error: ${t}`),this.stream=null,this.close(4,t)}R_(t){return e=>{this.Ti.enqueueAndForget(()=>this.i_===t?e():(N(Ga,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ip extends Ka{constructor(t,e,r,s,o,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,s,a),this.serializer=o}f_(t,e){return this.connection.Wo("Listen",t,e)}g_(t){return this.onNext(t)}onNext(t){this.a_.reset();const e=hf(this.serializer,t),r=function(o){if(!("targetChange"in o))return U.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?U.min():a.readTime?Lt(a.readTime):U.min()}(t);return this.listener.p_(e,r)}y_(t){const e={};e.database=As(this.serializer),e.addTarget=function(o,a){let u;const h=a.target;if(u=fs(h)?{documents:pf(o,h)}:{query:mf(o,h).ht},u.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){u.resumeToken=ba(o,a.resumeToken);const d=Es(o,a.expectedCount);d!==null&&(u.expectedCount=d)}else if(a.snapshotVersion.compareTo(U.min())>0){u.readTime=ar(o,a.snapshotVersion.toTimestamp());const d=Es(o,a.expectedCount);d!==null&&(u.expectedCount=d)}return u}(this.serializer,t);const r=_f(this.serializer,t);r&&(e.labels=r),this.I_(e)}w_(t){const e={};e.database=As(this.serializer),e.removeTarget=t,this.I_(e)}}class op extends Ka{constructor(t,e,r,s,o,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,s,a),this.serializer=o}get S_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.S_&&this.b_([])}f_(t,e){return this.connection.Wo("Write",t,e)}g_(t){return W(!!t.streamToken),this.lastStreamToken=t.streamToken,W(!t.writeResults||t.writeResults.length===0),this.listener.D_()}onNext(t){W(!!t.streamToken),this.lastStreamToken=t.streamToken,this.a_.reset();const e=ff(t.writeResults,t.commitTime),r=Lt(t.commitTime);return this.listener.v_(r,e)}C_(){const t={};t.database=As(this.serializer),this.I_(t)}b_(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>df(this.serializer,r))};this.I_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ap{}class cp extends ap{constructor(t,e,r,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=s,this.F_=!1}M_(){if(this.F_)throw new M(S.FAILED_PRECONDITION,"The client has already been terminated.")}So(t,e,r,s){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.So(t,vs(e,r),s,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new M(S.UNKNOWN,o.toString())})}Co(t,e,r,s,o){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,u])=>this.connection.Co(t,vs(e,r),s,a,u,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new M(S.UNKNOWN,a.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class up{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(t){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.L_("Offline")))}set(t){this.Q_(),this.x_=0,t==="Online"&&(this.N_=!1),this.L_(t)}L_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}k_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(Ft(e),this.N_=!1):N("OnlineStateTracker",e)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const me="RemoteStore";class lp{constructor(t,e,r,s,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.U_=[],this.K_=new Map,this.W_=new Set,this.G_=[],this.z_=o,this.z_.To(a=>{r.enqueueAndForget(async()=>{ge(this)&&(N(me,"Restarting streams for network reachability change."),await async function(h){const d=B(h);d.W_.add(4),await fn(d),d.j_.set("Unknown"),d.W_.delete(4),await hr(d)}(this))})}),this.j_=new up(r,s)}}async function hr(n){if(ge(n))for(const t of n.G_)await t(!0)}async function fn(n){for(const t of n.G_)await t(!1)}function Wa(n,t){const e=B(n);e.K_.has(t.targetId)||(e.K_.set(t.targetId,t),Os(e)?Ls(e):Ue(e).c_()&&Ms(e,t))}function Ns(n,t){const e=B(n),r=Ue(e);e.K_.delete(t),r.c_()&&Qa(e,t),e.K_.size===0&&(r.c_()?r.P_():ge(e)&&e.j_.set("Unknown"))}function Ms(n,t){if(n.H_.Ne(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(U.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}Ue(n).y_(t)}function Qa(n,t){n.H_.Ne(t),Ue(n).w_(t)}function Ls(n){n.H_=new rf({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),lt:t=>n.K_.get(t)||null,it:()=>n.datastore.serializer.databaseId}),Ue(n).start(),n.j_.B_()}function Os(n){return ge(n)&&!Ue(n).u_()&&n.K_.size>0}function ge(n){return B(n).W_.size===0}function Ya(n){n.H_=void 0}async function hp(n){n.j_.set("Online")}async function dp(n){n.K_.forEach((t,e)=>{Ms(n,t)})}async function fp(n,t){Ya(n),Os(n)?(n.j_.q_(t),Ls(n)):n.j_.set("Unknown")}async function pp(n,t,e){if(n.j_.set("Online"),t instanceof wa&&t.state===2&&t.cause)try{await async function(s,o){const a=o.cause;for(const u of o.targetIds)s.K_.has(u)&&(await s.remoteSyncer.rejectListen(u,a),s.K_.delete(u),s.H_.removeTarget(u))}(n,t)}catch(r){N(me,"Failed to remove targets %s: %s ",t.targetIds.join(","),r),await dr(n,r)}else if(t instanceof ir?n.H_.We(t):t instanceof Ia?n.H_.Ze(t):n.H_.je(t),!e.isEqual(U.min()))try{const r=await Ba(n.localStore);e.compareTo(r)>=0&&await function(o,a){const u=o.H_.ot(a);return u.targetChanges.forEach((h,d)=>{if(h.resumeToken.approximateByteSize()>0){const p=o.K_.get(d);p&&o.K_.set(d,p.withResumeToken(h.resumeToken,a))}}),u.targetMismatches.forEach((h,d)=>{const p=o.K_.get(h);if(!p)return;o.K_.set(h,p.withResumeToken(lt.EMPTY_BYTE_STRING,p.snapshotVersion)),Qa(o,h);const v=new te(p.target,h,d,p.sequenceNumber);Ms(o,v)}),o.remoteSyncer.applyRemoteEvent(u)}(n,e)}catch(r){N(me,"Failed to raise snapshot:",r),await dr(n,r)}}async function dr(n,t,e){if(!De(t))throw t;n.W_.add(1),await fn(n),n.j_.set("Offline"),e||(e=()=>Ba(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{N(me,"Retrying IndexedDB access"),await e(),n.W_.delete(1),await hr(n)})}function Xa(n,t){return t().catch(e=>dr(n,e,t))}async function fr(n){const t=B(n),e=ee(t);let r=t.U_.length>0?t.U_[t.U_.length-1].batchId:is;for(;mp(t);)try{const s=await Yf(t.localStore,r);if(s===null){t.U_.length===0&&e.P_();break}r=s.batchId,gp(t,s)}catch(s){await dr(t,s)}Ja(t)&&Za(t)}function mp(n){return ge(n)&&n.U_.length<10}function gp(n,t){n.U_.push(t);const e=ee(n);e.c_()&&e.S_&&e.b_(t.mutations)}function Ja(n){return ge(n)&&!ee(n).u_()&&n.U_.length>0}function Za(n){ee(n).start()}async function _p(n){ee(n).C_()}async function yp(n){const t=ee(n);for(const e of n.U_)t.b_(e.mutations)}async function Ep(n,t,e){const r=n.U_.shift(),s=_s.from(r,t,e);await Xa(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await fr(n)}async function Tp(n,t){t&&ee(n).S_&&await async function(r,s){if(function(a){return ef(a)&&a!==S.ABORTED}(s.code)){const o=r.U_.shift();ee(r).h_(),await Xa(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,s)),await fr(r)}}(n,t),Ja(n)&&Za(n)}async function tc(n,t){const e=B(n);e.asyncQueue.verifyOperationInProgress(),N(me,"RemoteStore received new credentials");const r=ge(e);e.W_.add(3),await fn(e),r&&e.j_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.W_.delete(3),await hr(e)}async function vp(n,t){const e=B(n);t?(e.W_.delete(2),await hr(e)):t||(e.W_.add(2),await fn(e),e.j_.set("Unknown"))}function Ue(n){return n.J_||(n.J_=function(e,r,s){const o=B(e);return o.M_(),new ip(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{xo:hp.bind(null,n),No:dp.bind(null,n),Lo:fp.bind(null,n),p_:pp.bind(null,n)}),n.G_.push(async t=>{t?(n.J_.h_(),Os(n)?Ls(n):n.j_.set("Unknown")):(await n.J_.stop(),Ya(n))})),n.J_}function ee(n){return n.Y_||(n.Y_=function(e,r,s){const o=B(e);return o.M_(),new op(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{xo:()=>Promise.resolve(),No:_p.bind(null,n),Lo:Tp.bind(null,n),D_:yp.bind(null,n),v_:Ep.bind(null,n)}),n.G_.push(async t=>{t?(n.Y_.h_(),await fr(n)):(await n.Y_.stop(),n.U_.length>0&&(N(me,`Stopping write stream with ${n.U_.length} pending writes`),n.U_=[]))})),n.Y_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(t,e,r,s,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=s,this.removalCallback=o,this.deferred=new Qt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,s,o){const a=Date.now()+r,u=new xs(t,e,a,s,o);return u.start(r),u}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new M(S.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Fs(n,t){if(Ft("AsyncQueue",`${t}: ${n}`),De(n))return new M(S.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{static emptySet(t){return new Be(t.comparator)}constructor(t){this.comparator=t?(e,r)=>t(e,r)||O.comparator(e.key,r.key):(e,r)=>O.comparator(e.key,r.key),this.keyedMap=rn(),this.sortedSet=new J(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Be)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(!s.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new Be;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(){this.Z_=new J(O.comparator)}track(t){const e=t.doc.key,r=this.Z_.get(e);r?t.type!==0&&r.type===3?this.Z_=this.Z_.insert(e,t):t.type===3&&r.type!==1?this.Z_=this.Z_.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.Z_=this.Z_.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.Z_=this.Z_.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.Z_=this.Z_.remove(e):t.type===1&&r.type===2?this.Z_=this.Z_.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.Z_=this.Z_.insert(e,{type:2,doc:t.doc}):x():this.Z_=this.Z_.insert(e,t)}X_(){const t=[];return this.Z_.inorderTraversal((e,r)=>{t.push(r)}),t}}class $e{constructor(t,e,r,s,o,a,u,h,d){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=u,this.excludesMetadataChanges=h,this.hasCachedResults=d}static fromInitialDocuments(t,e,r,s,o){const a=[];return e.forEach(u=>{a.push({type:0,doc:u})}),new $e(t,e,Be.emptySet(e),a,r,s,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Jn(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==r[s].type||!e[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ip{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(t=>t.ra())}}class wp{constructor(){this.queries=nc(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(e,r){const s=B(e),o=s.queries;s.queries=nc(),o.forEach((a,u)=>{for(const h of u.ta)h.onError(r)})})(this,new M(S.ABORTED,"Firestore shutting down"))}}function nc(){return new de(n=>na(n),Jn)}async function Ap(n,t){const e=B(n);let r=3;const s=t.query;let o=e.queries.get(s);o?!o.na()&&t.ra()&&(r=2):(o=new Ip,r=t.ra()?0:1);try{switch(r){case 0:o.ea=await e.onListen(s,!0);break;case 1:o.ea=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(a){const u=Fs(a,`Initialization of query '${Le(t.query)}' failed`);return void t.onError(u)}e.queries.set(s,o),o.ta.push(t),t.sa(e.onlineState),o.ea&&t.oa(o.ea)&&Us(e)}async function Rp(n,t){const e=B(n),r=t.query;let s=3;const o=e.queries.get(r);if(o){const a=o.ta.indexOf(t);a>=0&&(o.ta.splice(a,1),o.ta.length===0?s=t.ra()?0:1:!o.na()&&t.ra()&&(s=2))}switch(s){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function bp(n,t){const e=B(n);let r=!1;for(const s of t){const o=s.query,a=e.queries.get(o);if(a){for(const u of a.ta)u.oa(s)&&(r=!0);a.ea=s}}r&&Us(e)}function Sp(n,t,e){const r=B(n),s=r.queries.get(t);if(s)for(const o of s.ta)o.onError(e);r.queries.delete(t)}function Us(n){n.ia.forEach(t=>{t.next()})}var Bs,rc;(rc=Bs||(Bs={}))._a="default",rc.Cache="cache";class Cp{constructor(t,e,r){this.query=t,this.aa=e,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=r||{}}oa(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new $e(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.ua?this.la(t)&&(this.aa.next(t),e=!0):this.ha(t,this.onlineState)&&(this.Pa(t),e=!0),this.ca=t,e}onError(t){this.aa.error(t)}sa(t){this.onlineState=t;let e=!1;return this.ca&&!this.ua&&this.ha(this.ca,t)&&(this.Pa(this.ca),e=!0),e}ha(t,e){if(!t.fromCache||!this.ra())return!0;const r=e!=="Offline";return(!this.options.Ta||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}la(t){if(t.docChanges.length>0)return!0;const e=this.ca&&this.ca.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}Pa(t){t=$e.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.ua=!0,this.aa.next(t)}ra(){return this.options.source!==Bs.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{constructor(t){this.key=t}}class ic{constructor(t){this.key=t}}class Pp{constructor(t,e){this.query=t,this.fa=e,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=j(),this.mutatedKeys=j(),this.ya=ra(t),this.wa=new Be(this.ya)}get Sa(){return this.fa}ba(t,e){const r=e?e.Da:new ec,s=e?e.wa:this.wa;let o=e?e.mutatedKeys:this.mutatedKeys,a=s,u=!1;const h=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((p,v)=>{const R=s.get(p),C=Zn(this.query,v)?v:null,P=!!R&&this.mutatedKeys.has(R.key),k=!!C&&(C.hasLocalMutations||this.mutatedKeys.has(C.key)&&C.hasCommittedMutations);let D=!1;R&&C?R.data.isEqual(C.data)?P!==k&&(r.track({type:3,doc:C}),D=!0):this.va(R,C)||(r.track({type:2,doc:C}),D=!0,(h&&this.ya(C,h)>0||d&&this.ya(C,d)<0)&&(u=!0)):!R&&C?(r.track({type:0,doc:C}),D=!0):R&&!C&&(r.track({type:1,doc:R}),D=!0,(h||d)&&(u=!0)),D&&(C?(a=a.add(C),o=k?o.add(p):o.delete(p)):(a=a.delete(p),o=o.delete(p)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const p=this.query.limitType==="F"?a.last():a.first();a=a.delete(p.key),o=o.delete(p.key),r.track({type:1,doc:p})}return{wa:a,Da:r,ls:u,mutatedKeys:o}}va(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,s){const o=this.wa;this.wa=t.wa,this.mutatedKeys=t.mutatedKeys;const a=t.Da.X_();a.sort((p,v)=>function(C,P){const k=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return x()}};return k(C)-k(P)}(p.type,v.type)||this.ya(p.doc,v.doc)),this.Ca(r),s=s!=null&&s;const u=e&&!s?this.Fa():[],h=this.pa.size===0&&this.current&&!s?1:0,d=h!==this.ga;return this.ga=h,a.length!==0||d?{snapshot:new $e(this.query,t.wa,o,a,t.mutatedKeys,h===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ma:u}:{Ma:u}}sa(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new ec,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(t){return!this.fa.has(t)&&!!this.wa.has(t)&&!this.wa.get(t).hasLocalMutations}Ca(t){t&&(t.addedDocuments.forEach(e=>this.fa=this.fa.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.fa=this.fa.delete(e)),this.current=t.current)}Fa(){if(!this.current)return[];const t=this.pa;this.pa=j(),this.wa.forEach(r=>{this.xa(r.key)&&(this.pa=this.pa.add(r.key))});const e=[];return t.forEach(r=>{this.pa.has(r)||e.push(new ic(r))}),this.pa.forEach(r=>{t.has(r)||e.push(new sc(r))}),e}Oa(t){this.fa=t.gs,this.pa=j();const e=this.ba(t.documents);return this.applyChanges(e,!0)}Na(){return $e.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const $s="SyncEngine";class Vp{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class Dp{constructor(t){this.key=t,this.Ba=!1}}class kp{constructor(t,e,r,s,o,a){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.La={},this.ka=new de(u=>na(u),Jn),this.qa=new Map,this.Qa=new Set,this.$a=new J(O.comparator),this.Ua=new Map,this.Ka=new Rs,this.Wa={},this.Ga=new Map,this.za=Fe.Kn(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function Np(n,t,e=!0){const r=fc(n);let s;const o=r.ka.get(t);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),s=o.view.Na()):s=await oc(r,t,e,!0),s}async function Mp(n,t){const e=fc(n);await oc(e,t,!0,!1)}async function oc(n,t,e,r){const s=await Xf(n.localStore,Mt(t)),o=s.targetId,a=n.sharedClientState.addLocalQueryTarget(o,e);let u;return r&&(u=await Lp(n,t,o,a==="current",s.resumeToken)),n.isPrimaryClient&&e&&Wa(n.remoteStore,s),u}async function Lp(n,t,e,r,s){n.Ha=(v,R,C)=>async function(k,D,$,F){let G=D.view.ba($);G.ls&&(G=await $a(k.localStore,D.query,!1).then(({documents:E})=>D.view.ba(E,G)));const rt=F&&F.targetChanges.get(D.targetId),Pt=F&&F.targetMismatches.get(D.targetId)!=null,ot=D.view.applyChanges(G,k.isPrimaryClient,rt,Pt);return dc(k,D.targetId,ot.Ma),ot.snapshot}(n,v,R,C);const o=await $a(n.localStore,t,!0),a=new Pp(t,o.gs),u=a.ba(o.documents),h=dn.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",s),d=a.applyChanges(u,n.isPrimaryClient,h);dc(n,e,d.Ma);const p=new Vp(t,e,a);return n.ka.set(t,p),n.qa.has(e)?n.qa.get(e).push(t):n.qa.set(e,[t]),d.snapshot}async function Op(n,t,e){const r=B(n),s=r.ka.get(t),o=r.qa.get(s.targetId);if(o.length>1)return r.qa.set(s.targetId,o.filter(a=>!Jn(a,t))),void r.ka.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Ps(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),e&&Ns(r.remoteStore,s.targetId),qs(r,s.targetId)}).catch(Ve)):(qs(r,s.targetId),await Ps(r.localStore,s.targetId,!0))}async function xp(n,t){const e=B(n),r=e.ka.get(t),s=e.qa.get(r.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),Ns(e.remoteStore,r.targetId))}async function Fp(n,t,e){const r=Hp(n);try{const s=await function(a,u){const h=B(a),d=st.now(),p=u.reduce((C,P)=>C.add(P.key),j());let v,R;return h.persistence.runTransaction("Locally write mutations","readwrite",C=>{let P=Ut(),k=j();return h.ds.getEntries(C,p).next(D=>{P=D,P.forEach(($,F)=>{F.isValidDocument()||(k=k.add($))})}).next(()=>h.localDocuments.getOverlayedDocuments(C,P)).next(D=>{v=D;const $=[];for(const F of u){const G=Yd(F,v.get(F.key).overlayedDocument);G!=null&&$.push(new pe(F.key,G,jo(G.value.mapValue),Bt.exists(!0)))}return h.mutationQueue.addMutationBatch(C,d,$,u)}).next(D=>{R=D;const $=D.applyToLocalDocumentSet(v,k);return h.documentOverlayCache.saveOverlays(C,D.batchId,$)})}).then(()=>({batchId:R.batchId,changes:ia(v)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),function(a,u,h){let d=a.Wa[a.currentUser.toKey()];d||(d=new J(q)),d=d.insert(u,h),a.Wa[a.currentUser.toKey()]=d}(r,s.batchId,e),await pn(r,s.changes),await fr(r.remoteStore)}catch(s){const o=Fs(s,"Failed to persist write");e.reject(o)}}async function ac(n,t){const e=B(n);try{const r=await Wf(e.localStore,t);t.targetChanges.forEach((s,o)=>{const a=e.Ua.get(o);a&&(W(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.Ba=!0:s.modifiedDocuments.size>0?W(a.Ba):s.removedDocuments.size>0&&(W(a.Ba),a.Ba=!1))}),await pn(e,r,t)}catch(r){await Ve(r)}}function cc(n,t,e){const r=B(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const s=[];r.ka.forEach((o,a)=>{const u=a.view.sa(t);u.snapshot&&s.push(u.snapshot)}),function(a,u){const h=B(a);h.onlineState=u;let d=!1;h.queries.forEach((p,v)=>{for(const R of v.ta)R.sa(u)&&(d=!0)}),d&&Us(h)}(r.eventManager,t),s.length&&r.La.p_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Up(n,t,e){const r=B(n);r.sharedClientState.updateQueryState(t,"rejected",e);const s=r.Ua.get(t),o=s&&s.key;if(o){let a=new J(O.comparator);a=a.insert(o,ft.newNoDocument(o,U.min()));const u=j().add(o),h=new sr(U.min(),new Map,new J(q),a,u);await ac(r,h),r.$a=r.$a.remove(o),r.Ua.delete(t),js(r)}else await Ps(r.localStore,t,!1).then(()=>qs(r,t,e)).catch(Ve)}async function Bp(n,t){const e=B(n),r=t.batch.batchId;try{const s=await Kf(e.localStore,t);lc(e,r,null),uc(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await pn(e,s)}catch(s){await Ve(s)}}async function $p(n,t,e){const r=B(n);try{const s=await function(a,u){const h=B(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let p;return h.mutationQueue.lookupMutationBatch(d,u).next(v=>(W(v!==null),p=v.keys(),h.mutationQueue.removeMutationBatch(d,v))).next(()=>h.mutationQueue.performConsistencyCheck(d)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(d,p,u)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,p)).next(()=>h.localDocuments.getDocuments(d,p))})}(r.localStore,t);lc(r,t,e),uc(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await pn(r,s)}catch(s){await Ve(s)}}function uc(n,t){(n.Ga.get(t)||[]).forEach(e=>{e.resolve()}),n.Ga.delete(t)}function lc(n,t,e){const r=B(n);let s=r.Wa[r.currentUser.toKey()];if(s){const o=s.get(t);o&&(e?o.reject(e):o.resolve(),s=s.remove(t)),r.Wa[r.currentUser.toKey()]=s}}function qs(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.qa.get(t))n.ka.delete(r),e&&n.La.Ja(r,e);n.qa.delete(t),n.isPrimaryClient&&n.Ka.br(t).forEach(r=>{n.Ka.containsKey(r)||hc(n,r)})}function hc(n,t){n.Qa.delete(t.path.canonicalString());const e=n.$a.get(t);e!==null&&(Ns(n.remoteStore,e),n.$a=n.$a.remove(t),n.Ua.delete(e),js(n))}function dc(n,t,e){for(const r of e)r instanceof sc?(n.Ka.addReference(r.key,t),qp(n,r)):r instanceof ic?(N($s,"Document no longer in limbo: "+r.key),n.Ka.removeReference(r.key,t),n.Ka.containsKey(r.key)||hc(n,r.key)):x()}function qp(n,t){const e=t.key,r=e.path.canonicalString();n.$a.get(e)||n.Qa.has(r)||(N($s,"New document in limbo: "+e),n.Qa.add(r),js(n))}function js(n){for(;n.Qa.size>0&&n.$a.size<n.maxConcurrentLimboResolutions;){const t=n.Qa.values().next().value;n.Qa.delete(t);const e=new O(Y.fromString(t)),r=n.za.next();n.Ua.set(r,new Dp(e)),n.$a=n.$a.insert(e,r),Wa(n.remoteStore,new te(Mt(Zo(e.path)),r,"TargetPurposeLimboResolution",$n.ae))}}async function pn(n,t,e){const r=B(n),s=[],o=[],a=[];r.ka.isEmpty()||(r.ka.forEach((u,h)=>{a.push(r.Ha(h,t,e).then(d=>{var p;if((d||e)&&r.isPrimaryClient){const v=d?!d.fromCache:(p=e==null?void 0:e.targetChanges.get(h.targetId))===null||p===void 0?void 0:p.current;r.sharedClientState.updateQueryState(h.targetId,v?"current":"not-current")}if(d){s.push(d);const v=Ss.Yi(h.targetId,d);o.push(v)}}))}),await Promise.all(a),r.La.p_(s),await async function(h,d){const p=B(h);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",v=>b.forEach(d,R=>b.forEach(R.Hi,C=>p.persistence.referenceDelegate.addReference(v,R.targetId,C)).next(()=>b.forEach(R.Ji,C=>p.persistence.referenceDelegate.removeReference(v,R.targetId,C)))))}catch(v){if(!De(v))throw v;N(Cs,"Failed to update sequence numbers: "+v)}for(const v of d){const R=v.targetId;if(!v.fromCache){const C=p.Ts.get(R),P=C.snapshotVersion,k=C.withLastLimboFreeSnapshotVersion(P);p.Ts=p.Ts.insert(R,k)}}}(r.localStore,o))}async function jp(n,t){const e=B(n);if(!e.currentUser.isEqual(t)){N($s,"User change. New user:",t.toKey());const r=await Ua(e.localStore,t);e.currentUser=t,function(o,a){o.Ga.forEach(u=>{u.forEach(h=>{h.reject(new M(S.CANCELLED,a))})}),o.Ga.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await pn(e,r.Rs)}}function zp(n,t){const e=B(n),r=e.Ua.get(t);if(r&&r.Ba)return j().add(r.key);{let s=j();const o=e.qa.get(t);if(!o)return s;for(const a of o){const u=e.ka.get(a);s=s.unionWith(u.view.Sa)}return s}}function fc(n){const t=B(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=ac.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=zp.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Up.bind(null,t),t.La.p_=bp.bind(null,t.eventManager),t.La.Ja=Sp.bind(null,t.eventManager),t}function Hp(n){const t=B(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Bp.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=$p.bind(null,t),t}class pr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=lr(t.databaseInfo.databaseId),this.sharedClientState=this.Za(t),this.persistence=this.Xa(t),await this.persistence.start(),this.localStore=this.eu(t),this.gcScheduler=this.tu(t,this.localStore),this.indexBackfillerScheduler=this.nu(t,this.localStore)}tu(t,e){return null}nu(t,e){return null}eu(t){return Gf(this.persistence,new jf,t.initialUser,this.serializer)}Xa(t){return new Fa(bs.ri,this.serializer)}Za(t){return new Zf}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}pr.provider={build:()=>new pr};class Gp extends pr{constructor(t){super(),this.cacheSizeBytes=t}tu(t,e){W(this.persistence.referenceDelegate instanceof cr);const r=this.persistence.referenceDelegate.garbageCollector;return new Cf(r,t.asyncQueue,e)}Xa(t){const e=this.cacheSizeBytes!==void 0?vt.withCacheSize(this.cacheSizeBytes):vt.DEFAULT;return new Fa(r=>cr.ri(r,e),this.serializer)}}class zs{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>cc(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=jp.bind(null,this.syncEngine),await vp(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new wp}()}createDatastore(t){const e=lr(t.databaseInfo.databaseId),r=function(o){return new sp(o)}(t.databaseInfo);return function(o,a,u,h){return new cp(o,a,u,h)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,s,o,a,u){return new lp(r,s,o,a,u)}(this.localStore,this.datastore,t.asyncQueue,e=>cc(this.syncEngine,e,0),function(){return za.D()?new za:new tp}())}createSyncEngine(t,e){return function(s,o,a,u,h,d,p){const v=new kp(s,o,a,u,h,d);return p&&(v.ja=!0),v}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(s){const o=B(s);N(me,"RemoteStore shutting down."),o.W_.add(5),await fn(o),o.z_.shutdown(),o.j_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}zs.provider={build:()=>new zs};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kp{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.iu(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.iu(this.observer.error,t):Ft("Uncaught Error in snapshot listener:",t.toString()))}su(){this.muted=!0}iu(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ne="FirestoreClient";class Wp{constructor(t,e,r,s,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=s,this.user=dt.UNAUTHENTICATED,this.clientId=vo.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async a=>{N(ne,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(N(ne,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Qt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=Fs(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function Hs(n,t){n.asyncQueue.verifyOperationInProgress(),N(ne,"Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Ua(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function pc(n,t){n.asyncQueue.verifyOperationInProgress();const e=await Qp(n);N(ne,"Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>tc(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>tc(t.remoteStore,s)),n._onlineComponents=t}async function Qp(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){N(ne,"Using user provided OfflineComponentProvider");try{await Hs(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(s){return s.name==="FirebaseError"?s.code===S.FAILED_PRECONDITION||s.code===S.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(e))throw e;Ce("Error using user provided cache. Falling back to memory cache: "+e),await Hs(n,new pr)}}else N(ne,"Using default OfflineComponentProvider"),await Hs(n,new Gp(void 0));return n._offlineComponents}async function mc(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(N(ne,"Using user provided OnlineComponentProvider"),await pc(n,n._uninitializedComponentsProvider._online)):(N(ne,"Using default OnlineComponentProvider"),await pc(n,new zs))),n._onlineComponents}function Yp(n){return mc(n).then(t=>t.syncEngine)}async function Xp(n){const t=await mc(n),e=t.eventManager;return e.onListen=Np.bind(null,t.syncEngine),e.onUnlisten=Op.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=Mp.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=xp.bind(null,t.syncEngine),e}function Jp(n,t,e={}){const r=new Qt;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,u,h,d){const p=new Kp({next:R=>{p.su(),a.enqueueAndForget(()=>Rp(o,v)),R.fromCache&&h.source==="server"?d.reject(new M(S.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(R)},error:R=>d.reject(R)}),v=new Cp(u,p,{includeMetadataChanges:!0,Ta:!0});return Ap(o,v)}(await Xp(n),n.asyncQueue,t,e,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gc(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _c=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yc(n,t,e){if(!e)throw new M(S.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function Zp(n,t,e,r){if(t===!0&&r===!0)throw new M(S.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function Ec(n){if(!O.isDocumentKey(n))throw new M(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Tc(n){if(O.isDocumentKey(n))throw new M(S.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function mr(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":x()}function gr(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new M(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=mr(n);throw new M(S.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vc="firestore.googleapis.com",Ic=!0;class wc{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new M(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=vc,this.ssl=Ic}else this.host=t.host,this.ssl=(e=t.ssl)!==null&&e!==void 0?e:Ic;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=La;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<bf)throw new M(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Zp("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=gc((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new M(S.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new M(S.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new M(S.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class _r{constructor(t,e,r,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new wc({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new M(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new M(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new wc(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new ed;switch(r.type){case"firstParty":return new id(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new M(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=_c.get(e);r&&(N("ComponentProvider","Removing Datastore"),_c.delete(e),r.terminate())}(this),Promise.resolve()}}function tm(n,t,e,r={}){var s;const o=(n=gr(n,_r))._getSettings(),a=Object.assign(Object.assign({},o),{emulatorOptions:n._getEmulatorOptions()}),u=`${t}:${e}`;o.host!==vc&&o.host!==u&&Ce("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h=Object.assign(Object.assign({},o),{host:u,ssl:!1,emulatorOptions:r});if(!xn(h,a)&&(n._setSettings(h),r.mockUserToken)){let d,p;if(typeof r.mockUserToken=="string")d=r.mockUserToken,p=dt.MOCK_USER;else{d=Vl(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const v=r.mockUserToken.sub||r.mockUserToken.user_id;if(!v)throw new M(S.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new dt(v)}n._authCredentials=new nd(new yo(d,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new _e(this.firestore,t,this._query)}}class Rt{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new re(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Rt(this.firestore,t,this._key)}}class re extends _e{constructor(t,e,r){super(t,e,Zo(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Rt(this.firestore,null,new O(t))}withConverter(t){return new re(this.firestore,t,this._path)}}function Ac(n,t,...e){if(n=ce(n),yc("collection","path",t),n instanceof _r){const r=Y.fromString(t,...e);return Tc(r),new re(n,null,r)}{if(!(n instanceof Rt||n instanceof re))throw new M(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Y.fromString(t,...e));return Tc(r),new re(n.firestore,null,r)}}function em(n,t,...e){if(n=ce(n),arguments.length===1&&(t=vo.newId()),yc("doc","path",t),n instanceof _r){const r=Y.fromString(t,...e);return Ec(r),new Rt(n,null,new O(r))}{if(!(n instanceof Rt||n instanceof re))throw new M(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Y.fromString(t,...e));return Ec(r),new Rt(n.firestore,n instanceof re?n.converter:null,new O(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rc="AsyncQueue";class bc{constructor(t=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new Ha(this,"async_queue_retry"),this.Su=()=>{const r=ks();r&&N(Rc,"Visibility state changed to "+r.visibilityState),this.a_.t_()},this.bu=t;const e=ks();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Su)}get isShuttingDown(){return this.mu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Du(),this.vu(t)}enterRestrictedMode(t){if(!this.mu){this.mu=!0,this.yu=t||!1;const e=ks();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.Su)}}enqueue(t){if(this.Du(),this.mu)return new Promise(()=>{});const e=new Qt;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Vu.push(t),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(t){if(!De(t))throw t;N(Rc,"Operation failed with retryable error: "+t)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(t){const e=this.bu.then(()=>(this.pu=!0,t().catch(r=>{this.gu=r,this.pu=!1;const s=function(a){let u=a.message||"";return a.stack&&(u=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),u}(r);throw Ft("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.pu=!1,r))));return this.bu=e,e}enqueueAfterDelay(t,e,r){this.Du(),this.wu.indexOf(t)>-1&&(e=0);const s=xs.createAndSchedule(this,t,e,r,o=>this.Fu(o));return this.fu.push(s),s}Du(){this.gu&&x()}verifyOperationInProgress(){}async Mu(){let t;do t=this.bu,await t;while(t!==this.bu)}xu(t){for(const e of this.fu)if(e.timerId===t)return!0;return!1}Ou(t){return this.Mu().then(()=>{this.fu.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.fu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Mu()})}Nu(t){this.wu.push(t)}Fu(t){const e=this.fu.indexOf(t);this.fu.splice(e,1)}}class Gs extends _r{constructor(t,e,r,s){super(t,e,r,s),this.type="firestore",this._queue=new bc,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new bc(t),this._firestoreClient=void 0,await t}}}function nm(n,t){const e=typeof n=="object"?n:qh(),r=typeof n=="string"?n:Gn,s=ts(e,"firestore").getImmediate({identifier:r});if(!s._initialized){const o=Cl("firestore");o&&tm(s,...o)}return s}function Sc(n){if(n._terminated)throw new M(S.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||rm(n),n._firestoreClient}function rm(n){var t,e,r;const s=n._freezeSettings(),o=function(u,h,d,p){return new Td(u,h,d,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,gc(p.experimentalLongPollingOptions),p.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new Wp(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&function(u){const h=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(h),_online:h}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(t){this._byteString=t}static fromBase64String(t){try{return new qe(lt.fromBase64String(t))}catch(e){throw new M(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new qe(lt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new M(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ct(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new M(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new M(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return q(this._lat,t._lat)||q(this._long,t._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(r,s){if(r.length!==s.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==s[o])return!1;return!0}(this._values,t._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sm=/^__.*__$/;class im{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new pe(t,this.data,this.fieldMask,e,this.fieldTransforms):new ln(t,this.data,e,this.fieldTransforms)}}function Cc(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw x()}}class Xs{constructor(t,e,r,s,o,a){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=s,o===void 0&&this.Bu(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(t){return new Xs(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.ku({path:r,Qu:!1});return s.$u(t),s}Uu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.ku({path:r,Qu:!1});return s.Bu(),s}Ku(t){return this.ku({path:void 0,Qu:!0})}Wu(t){return yr(t,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}Bu(){if(this.path)for(let t=0;t<this.path.length;t++)this.$u(this.path.get(t))}$u(t){if(t.length===0)throw this.Wu("Document fields must not be empty");if(Cc(this.Lu)&&sm.test(t))throw this.Wu('Document fields cannot begin and end with "__"')}}class om{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||lr(t)}ju(t,e,r,s=!1){return new Xs({Lu:t,methodName:e,zu:r,path:ct.emptyPath(),Qu:!1,Gu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Pc(n){const t=n._freezeSettings(),e=lr(n._databaseId);return new om(n._databaseId,!!t.ignoreUndefinedProperties,e)}function am(n,t,e,r,s,o={}){const a=n.ju(o.merge||o.mergeFields?2:0,t,e,s);kc("Data must be an object, but it was:",a,r);const u=Vc(r,a);let h,d;if(o.merge)h=new St(a.fieldMask),d=a.fieldTransforms;else if(o.mergeFields){const p=[];for(const v of o.mergeFields){const R=um(t,v,e);if(!a.contains(R))throw new M(S.INVALID_ARGUMENT,`Field '${R}' is specified in your field mask but missing from your input data.`);hm(p,R)||p.push(R)}h=new St(p),d=a.fieldTransforms.filter(v=>h.covers(v.field))}else h=null,d=a.fieldTransforms;return new im(new At(u),h,d)}class Js extends Ws{_toFieldTransform(t){return new Gd(t.path,new on)}isEqual(t){return t instanceof Js}}function cm(n,t,e,r=!1){return Zs(e,n.ju(r?4:3,t))}function Zs(n,t){if(Dc(n=ce(n)))return kc("Unsupported field value:",t,n),Vc(n,t);if(n instanceof Ws)return function(r,s){if(!Cc(s.Lu))throw s.Wu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Wu(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(s);o&&s.fieldTransforms.push(o)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.Qu&&t.Lu!==4)throw t.Wu("Nested arrays are not supported");return function(r,s){const o=[];let a=0;for(const u of r){let h=Zs(u,s.Ku(a));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),a++}return{arrayValue:{values:o}}}(n,t)}return function(r,s){if((r=ce(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return jd(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=st.fromDate(r);return{timestampValue:ar(s.serializer,o)}}if(r instanceof st){const o=new st(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ar(s.serializer,o)}}if(r instanceof Qs)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof qe)return{bytesValue:ba(s.serializer,r._byteString)};if(r instanceof Rt){const o=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw s.Wu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Ts(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Ys)return function(a,u){return{mapValue:{fields:{[Oo]:{stringValue:xo},[Wn]:{arrayValue:{values:a.toArray().map(d=>{if(typeof d!="number")throw u.Wu("VectorValues must only contain numeric values.");return gs(u.serializer,d)})}}}}}}(r,s);throw s.Wu(`Unsupported field value: ${mr(r)}`)}(n,t)}function Vc(n,t){const e={};return Po(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):he(n,(r,s)=>{const o=Zs(s,t.qu(r));o!=null&&(e[r]=o)}),{mapValue:{fields:e}}}function Dc(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof st||n instanceof Qs||n instanceof qe||n instanceof Rt||n instanceof Ws||n instanceof Ys)}function kc(n,t,e){if(!Dc(e)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(e)){const r=mr(e);throw r==="an object"?t.Wu(n+" a custom object"):t.Wu(n+" "+r)}}function um(n,t,e){if((t=ce(t))instanceof Ks)return t._internalPath;if(typeof t=="string")return Nc(n,t);throw yr("Field path arguments must be of type string or ",n,!1,void 0,e)}const lm=new RegExp("[~\\*/\\[\\]]");function Nc(n,t,e){if(t.search(lm)>=0)throw yr(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new Ks(...t.split("."))._internalPath}catch{throw yr(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function yr(n,t,e,r,s){const o=r&&!r.isEmpty(),a=s!==void 0;let u=`Function ${t}() called with invalid data`;e&&(u+=" (via `toFirestore()`)"),u+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=` in field ${r}`),a&&(h+=` in document ${s}`),h+=")"),new M(S.INVALID_ARGUMENT,u+n+h)}function hm(n,t){return n.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(t,e,r,s,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Rt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new dm(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(ti("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class dm extends Mc{data(){return super.data()}}function ti(n,t){return typeof t=="string"?Nc(n,t):t instanceof Ks?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fm(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new M(S.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ei{}class Lc extends ei{}function pm(n,t,...e){let r=[];t instanceof ei&&r.push(t),r=r.concat(e),function(o){const a=o.filter(h=>h instanceof ri).length,u=o.filter(h=>h instanceof ni).length;if(a>1||a>0&&u>0)throw new M(S.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class ni extends Lc{constructor(t,e,r){super(),this._field=t,this._op=e,this._value=r,this.type="where"}static _create(t,e,r){return new ni(t,e,r)}_apply(t){const e=this._parse(t);return Fc(t._query,e),new _e(t.firestore,t.converter,ps(t._query,e))}_parse(t){const e=Pc(t.firestore);return function(o,a,u,h,d,p,v){let R;if(d.isKeyField()){if(p==="array-contains"||p==="array-contains-any")throw new M(S.INVALID_ARGUMENT,`Invalid Query. You can't perform '${p}' queries on documentId().`);if(p==="in"||p==="not-in"){xc(v,p);const P=[];for(const k of v)P.push(Oc(h,o,k));R={arrayValue:{values:P}}}else R=Oc(h,o,v)}else p!=="in"&&p!=="not-in"&&p!=="array-contains-any"||xc(v,p),R=cm(u,a,v,p==="in"||p==="not-in");return et.create(d,p,R)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}class ri extends ei{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new ri(t,e)}_parse(t){const e=this._queryConstraints.map(r=>r._parse(t)).filter(r=>r.getFilters().length>0);return e.length===1?e[0]:Ct.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(s,o){let a=s;const u=o.getFlattenedFilters();for(const h of u)Fc(a,h),a=ps(a,h)}(t._query,e),new _e(t.firestore,t.converter,ps(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class si extends Lc{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new si(t,e)}_apply(t){const e=function(s,o,a){if(s.startAt!==null)throw new M(S.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new M(S.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new en(o,a)}(t._query,this._field,this._direction);return new _e(t.firestore,t.converter,function(s,o){const a=s.explicitOrderBy.concat([o]);return new Me(s.path,s.collectionGroup,a,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(t._query,e))}}function mm(n,t="asc"){const e=t,r=ti("orderBy",n);return si._create(r,e)}function Oc(n,t,e){if(typeof(e=ce(e))=="string"){if(e==="")throw new M(S.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!ea(t)&&e.indexOf("/")!==-1)throw new M(S.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const r=t.path.child(Y.fromString(e));if(!O.isDocumentKey(r))throw new M(S.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Bo(n,new O(r))}if(e instanceof Rt)return Bo(n,e._key);throw new M(S.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${mr(e)}.`)}function xc(n,t){if(!Array.isArray(n)||n.length===0)throw new M(S.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Fc(n,t){const e=function(s,o){for(const a of s)for(const u of a.getFlattenedFilters())if(o.indexOf(u.op)>=0)return u.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new M(S.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new M(S.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class gm{convertValue(t,e="none"){switch(Zt(t)){case 0:return null;case 1:return t.booleanValue;case 2:return tt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Jt(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw x()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return he(t,(s,o)=>{r[s]=this.convertValue(o,e)}),r}convertVectorValue(t){var e,r,s;const o=(s=(r=(e=t.fields)===null||e===void 0?void 0:e[Wn].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(a=>tt(a.doubleValue));return new Ys(o)}convertGeoPoint(t){return new Qs(tt(t.latitude),tt(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=Hn(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(Xe(t));default:return null}}convertTimestamp(t){const e=Xt(t);return new st(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=Y.fromString(t);W(Na(r));const s=new Je(r.get(1),r.get(3)),o=new O(r.popFirst(5));return s.isEqual(e)||Ft(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _m(n,t,e){let r;return r=n?n.toFirestore(t):t,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class ym extends Mc{constructor(t,e,r,s,o,a){super(t,e,r,s,a),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Tr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(ti("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}}class Tr extends ym{data(t={}){return super.data(t)}}class Em{constructor(t,e,r,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new Er(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new Tr(this._firestore,this._userDataWriter,r.key,r,new Er(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new M(S.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(s,o){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(u=>{const h=new Tr(s._firestore,s._userDataWriter,u.doc.key,u.doc,new Er(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);return u.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(u=>o||u.type!==3).map(u=>{const h=new Tr(s._firestore,s._userDataWriter,u.doc.key,u.doc,new Er(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,p=-1;return u.type!==0&&(d=a.indexOf(u.doc.key),a=a.delete(u.doc.key)),u.type!==1&&(a=a.add(u.doc),p=a.indexOf(u.doc.key)),{type:Tm(u.type),doc:h,oldIndex:d,newIndex:p}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Tm(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return x()}}class vm extends gm{constructor(t){super(),this.firestore=t}convertBytes(t){return new qe(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Rt(this.firestore,null,e)}}function Im(n){n=gr(n,_e);const t=gr(n.firestore,Gs),e=Sc(t),r=new vm(t);return fm(n._query),Jp(e,n._query).then(s=>new Em(t,r,n,s))}function wm(n,t){const e=gr(n.firestore,Gs),r=em(n),s=_m(n.converter,t);return Am(e,[am(Pc(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,Bt.exists(!1))]).then(()=>r)}function Am(n,t){return function(r,s){const o=new Qt;return r.asyncQueue.enqueueAndForget(async()=>Fp(await Yp(r),s,o)),o.promise}(Sc(n),t)}function Rm(){return new Js("serverTimestamp")}(function(t,e=!0){(function(s){be=s})($h),Gt(new Ot("firestore",(r,{instanceIdentifier:s,options:o})=>{const a=r.getProvider("app").getImmediate(),u=new Gs(new rd(r.getProvider("auth-internal")),new od(a,r.getProvider("app-check-internal")),function(d,p){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new M(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Je(d.options.projectId,p)}(a,s),a);return o=Object.assign({useFetchStreams:e},o),u._setSettings(o),u},"PUBLIC").setMultipleInstances(!0)),Dt(go,_o,t),Dt(go,_o,"esm2017")})();const Uc="@firebase/installations",ii="0.6.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bc=1e4,$c=`w:${ii}`,qc="FIS_v2",bm="https://firebaseinstallations.googleapis.com/v1",Sm=60*60*1e3,Cm="installations",Pm="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vm={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ye=new On(Cm,Pm,Vm);function jc(n){return n instanceof zt&&n.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zc({projectId:n}){return`${bm}/projects/${n}/installations`}function Hc(n){return{token:n.token,requestStatus:2,expiresIn:km(n.expiresIn),creationTime:Date.now()}}async function Gc(n,t){const r=(await t.json()).error;return ye.create("request-failed",{requestName:n,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Kc({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function Dm(n,{refreshToken:t}){const e=Kc(n);return e.append("Authorization",Nm(t)),e}async function Wc(n){const t=await n();return t.status>=500&&t.status<600?n():t}function km(n){return Number(n.replace("s","000"))}function Nm(n){return`${qc} ${n}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mm({appConfig:n,heartbeatServiceProvider:t},{fid:e}){const r=zc(n),s=Kc(n),o=t.getImmediate({optional:!0});if(o){const d=await o.getHeartbeatsHeader();d&&s.append("x-firebase-client",d)}const a={fid:e,authVersion:qc,appId:n.appId,sdkVersion:$c},u={method:"POST",headers:s,body:JSON.stringify(a)},h=await Wc(()=>fetch(r,u));if(h.ok){const d=await h.json();return{fid:d.fid||e,registrationStatus:2,refreshToken:d.refreshToken,authToken:Hc(d.authToken)}}else throw await Gc("Create Installation",h)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qc(n){return new Promise(t=>{setTimeout(t,n)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lm(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Om=/^[cdef][\w-]{21}$/,oi="";function xm(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const e=Fm(n);return Om.test(e)?e:oi}catch{return oi}}function Fm(n){return Lm(n).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vr(n){return`${n.appName}!${n.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yc=new Map;function Xc(n,t){const e=vr(n);Jc(e,t),Um(e,t)}function Jc(n,t){const e=Yc.get(n);if(e)for(const r of e)r(t)}function Um(n,t){const e=Bm();e&&e.postMessage({key:n,fid:t}),$m()}let Ee=null;function Bm(){return!Ee&&"BroadcastChannel"in self&&(Ee=new BroadcastChannel("[Firebase] FID Change"),Ee.onmessage=n=>{Jc(n.data.key,n.data.fid)}),Ee}function $m(){Yc.size===0&&Ee&&(Ee.close(),Ee=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qm="firebase-installations-database",jm=1,Te="firebase-installations-store";let ai=null;function ci(){return ai||(ai=Ji(qm,jm,{upgrade:(n,t)=>{switch(t){case 0:n.createObjectStore(Te)}}})),ai}async function Ir(n,t){const e=vr(n),s=(await ci()).transaction(Te,"readwrite"),o=s.objectStore(Te),a=await o.get(e);return await o.put(t,e),await s.done,(!a||a.fid!==t.fid)&&Xc(n,t.fid),t}async function Zc(n){const t=vr(n),r=(await ci()).transaction(Te,"readwrite");await r.objectStore(Te).delete(t),await r.done}async function wr(n,t){const e=vr(n),s=(await ci()).transaction(Te,"readwrite"),o=s.objectStore(Te),a=await o.get(e),u=t(a);return u===void 0?await o.delete(e):await o.put(u,e),await s.done,u&&(!a||a.fid!==u.fid)&&Xc(n,u.fid),u}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ui(n){let t;const e=await wr(n.appConfig,r=>{const s=zm(r),o=Hm(n,s);return t=o.registrationPromise,o.installationEntry});return e.fid===oi?{installationEntry:await t}:{installationEntry:e,registrationPromise:t}}function zm(n){const t=n||{fid:xm(),registrationStatus:0};return eu(t)}function Hm(n,t){if(t.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(ye.create("app-offline"));return{installationEntry:t,registrationPromise:s}}const e={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=Gm(n,e);return{installationEntry:e,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:Km(n)}:{installationEntry:t}}async function Gm(n,t){try{const e=await Mm(n,t);return Ir(n.appConfig,e)}catch(e){throw jc(e)&&e.customData.serverCode===409?await Zc(n.appConfig):await Ir(n.appConfig,{fid:t.fid,registrationStatus:0}),e}}async function Km(n){let t=await tu(n.appConfig);for(;t.registrationStatus===1;)await Qc(100),t=await tu(n.appConfig);if(t.registrationStatus===0){const{installationEntry:e,registrationPromise:r}=await ui(n);return r||e}return t}function tu(n){return wr(n,t=>{if(!t)throw ye.create("installation-not-found");return eu(t)})}function eu(n){return Wm(n)?{fid:n.fid,registrationStatus:0}:n}function Wm(n){return n.registrationStatus===1&&n.registrationTime+Bc<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qm({appConfig:n,heartbeatServiceProvider:t},e){const r=Ym(n,e),s=Dm(n,e),o=t.getImmediate({optional:!0});if(o){const d=await o.getHeartbeatsHeader();d&&s.append("x-firebase-client",d)}const a={installation:{sdkVersion:$c,appId:n.appId}},u={method:"POST",headers:s,body:JSON.stringify(a)},h=await Wc(()=>fetch(r,u));if(h.ok){const d=await h.json();return Hc(d)}else throw await Gc("Generate Auth Token",h)}function Ym(n,{fid:t}){return`${zc(n)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function li(n,t=!1){let e;const r=await wr(n.appConfig,o=>{if(!ru(o))throw ye.create("not-registered");const a=o.authToken;if(!t&&Zm(a))return o;if(a.requestStatus===1)return e=Xm(n,t),o;{if(!navigator.onLine)throw ye.create("app-offline");const u=eg(o);return e=Jm(n,u),u}});return e?await e:r.authToken}async function Xm(n,t){let e=await nu(n.appConfig);for(;e.authToken.requestStatus===1;)await Qc(100),e=await nu(n.appConfig);const r=e.authToken;return r.requestStatus===0?li(n,t):r}function nu(n){return wr(n,t=>{if(!ru(t))throw ye.create("not-registered");const e=t.authToken;return ng(e)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function Jm(n,t){try{const e=await Qm(n,t),r=Object.assign(Object.assign({},t),{authToken:e});return await Ir(n.appConfig,r),e}catch(e){if(jc(e)&&(e.customData.serverCode===401||e.customData.serverCode===404))await Zc(n.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Ir(n.appConfig,r)}throw e}}function ru(n){return n!==void 0&&n.registrationStatus===2}function Zm(n){return n.requestStatus===2&&!tg(n)}function tg(n){const t=Date.now();return t<n.creationTime||n.creationTime+n.expiresIn<t+Sm}function eg(n){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:t})}function ng(n){return n.requestStatus===1&&n.requestTime+Bc<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rg(n){const t=n,{installationEntry:e,registrationPromise:r}=await ui(t);return r?r.catch(console.error):li(t).catch(console.error),e.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sg(n,t=!1){const e=n;return await ig(e),(await li(e,t)).token}async function ig(n){const{registrationPromise:t}=await ui(n);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function og(n){if(!n||!n.options)throw hi("App Configuration");if(!n.name)throw hi("App Name");const t=["projectId","apiKey","appId"];for(const e of t)if(!n.options[e])throw hi(e);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function hi(n){return ye.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const su="installations",ag="installations-internal",cg=n=>{const t=n.getProvider("app").getImmediate(),e=og(t),r=ts(t,"heartbeat");return{app:t,appConfig:e,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},ug=n=>{const t=n.getProvider("app").getImmediate(),e=ts(t,su).getImmediate();return{getId:()=>rg(e),getToken:s=>sg(e,s)}};function lg(){Gt(new Ot(su,cg,"PUBLIC")),Gt(new Ot(ag,ug,"PRIVATE"))}lg(),Dt(Uc,ii),Dt(Uc,ii,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iu="analytics",hg="firebase_id",dg="origin",fg=60*1e3,pg="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",di="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const It=new zr("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mg={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},bt=new On("analytics","Analytics",mg);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gg(n){if(!n.startsWith(di)){const t=bt.create("invalid-gtag-resource",{gtagURL:n});return It.warn(t.message),""}return n}function ou(n){return Promise.all(n.map(t=>t.catch(e=>e)))}function _g(n,t){let e;return window.trustedTypes&&(e=window.trustedTypes.createPolicy(n,t)),e}function yg(n,t){const e=_g("firebase-js-sdk-policy",{createScriptURL:gg}),r=document.createElement("script"),s=`${di}?l=${n}&id=${t}`;r.src=e?e==null?void 0:e.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function Eg(n){let t=[];return Array.isArray(window[n])?t=window[n]:window[n]=t,t}async function Tg(n,t,e,r,s,o){const a=r[s];try{if(a)await t[a];else{const h=(await ou(e)).find(d=>d.measurementId===s);h&&await t[h.appId]}}catch(u){It.error(u)}n("config",s,o)}async function vg(n,t,e,r,s){try{let o=[];if(s&&s.send_to){let a=s.send_to;Array.isArray(a)||(a=[a]);const u=await ou(e);for(const h of a){const d=u.find(v=>v.measurementId===h),p=d&&t[d.appId];if(p)o.push(p);else{o=[];break}}}o.length===0&&(o=Object.values(t)),await Promise.all(o),n("event",r,s||{})}catch(o){It.error(o)}}function Ig(n,t,e,r){async function s(o,...a){try{if(o==="event"){const[u,h]=a;await vg(n,t,e,u,h)}else if(o==="config"){const[u,h]=a;await Tg(n,t,e,r,u,h)}else if(o==="consent"){const[u,h]=a;n("consent",u,h)}else if(o==="get"){const[u,h,d]=a;n("get",u,h,d)}else if(o==="set"){const[u]=a;n("set",u)}else n(o,...a)}catch(u){It.error(u)}}return s}function wg(n,t,e,r,s){let o=function(...a){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(o=window[s]),window[s]=Ig(o,n,t,e),{gtagCore:o,wrappedGtag:window[s]}}function Ag(n){const t=window.document.getElementsByTagName("script");for(const e of Object.values(t))if(e.src&&e.src.includes(di)&&e.src.includes(n))return e;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rg=30,bg=1e3;class Sg{constructor(t={},e=bg){this.throttleMetadata=t,this.intervalMillis=e}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,e){this.throttleMetadata[t]=e}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const au=new Sg;function Cg(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function Pg(n){var t;const{appId:e,apiKey:r}=n,s={method:"GET",headers:Cg(r)},o=pg.replace("{app-id}",e),a=await fetch(o,s);if(a.status!==200&&a.status!==304){let u="";try{const h=await a.json();!((t=h.error)===null||t===void 0)&&t.message&&(u=h.error.message)}catch{}throw bt.create("config-fetch-failed",{httpStatus:a.status,responseMessage:u})}return a.json()}async function Vg(n,t=au,e){const{appId:r,apiKey:s,measurementId:o}=n.options;if(!r)throw bt.create("no-app-id");if(!s){if(o)return{measurementId:o,appId:r};throw bt.create("no-api-key")}const a=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},u=new Ng;return setTimeout(async()=>{u.abort()},fg),cu({appId:r,apiKey:s,measurementId:o},a,u,t)}async function cu(n,{throttleEndTimeMillis:t,backoffCount:e},r,s=au){var o;const{appId:a,measurementId:u}=n;try{await Dg(r,t)}catch(h){if(u)return It.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${u} provided in the "measurementId" field in the local Firebase config. [${h==null?void 0:h.message}]`),{appId:a,measurementId:u};throw h}try{const h=await Pg(n);return s.deleteThrottleMetadata(a),h}catch(h){const d=h;if(!kg(d)){if(s.deleteThrottleMetadata(a),u)return It.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${u} provided in the "measurementId" field in the local Firebase config. [${d==null?void 0:d.message}]`),{appId:a,measurementId:u};throw h}const p=Number((o=d==null?void 0:d.customData)===null||o===void 0?void 0:o.httpStatus)===503?Ki(e,s.intervalMillis,Rg):Ki(e,s.intervalMillis),v={throttleEndTimeMillis:Date.now()+p,backoffCount:e+1};return s.setThrottleMetadata(a,v),It.debug(`Calling attemptFetch again in ${p} millis`),cu(n,v,r,s)}}function Dg(n,t){return new Promise((e,r)=>{const s=Math.max(t-Date.now(),0),o=setTimeout(e,s);n.addEventListener(()=>{clearTimeout(o),r(bt.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function kg(n){if(!(n instanceof zt)||!n.customData)return!1;const t=Number(n.customData.httpStatus);return t===429||t===500||t===503||t===504}class Ng{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function Mg(n,t,e,r,s){if(s&&s.global){n("event",e,r);return}else{const o=await t,a=Object.assign(Object.assign({},r),{send_to:o});n("event",e,a)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lg(){if(zi())try{await Hi()}catch(n){return It.warn(bt.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return It.warn(bt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Og(n,t,e,r,s,o,a){var u;const h=Vg(n);h.then(C=>{e[C.measurementId]=C.appId,n.options.measurementId&&C.measurementId!==n.options.measurementId&&It.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${C.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(C=>It.error(C)),t.push(h);const d=Lg().then(C=>{if(C)return r.getId()}),[p,v]=await Promise.all([h,d]);Ag(o)||yg(o,p.measurementId),s("js",new Date);const R=(u=a==null?void 0:a.config)!==null&&u!==void 0?u:{};return R[dg]="firebase",R.update=!0,v!=null&&(R[hg]=v),s("config",p.measurementId,R),p.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xg{constructor(t){this.app=t}_delete(){return delete mn[this.app.options.appId],Promise.resolve()}}let mn={},uu=[];const lu={};let fi="dataLayer",Fg="gtag",hu,du,fu=!1;function Ug(){const n=[];if(Nl()&&n.push("This is a browser extension environment."),Ll()||n.push("Cookies are not available."),n.length>0){const t=n.map((r,s)=>`(${s+1}) ${r}`).join(" "),e=bt.create("invalid-analytics-context",{errorInfo:t});It.warn(e.message)}}function Bg(n,t,e){Ug();const r=n.options.appId;if(!r)throw bt.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)It.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw bt.create("no-api-key");if(mn[r]!=null)throw bt.create("already-exists",{id:r});if(!fu){Eg(fi);const{wrappedGtag:o,gtagCore:a}=wg(mn,uu,lu,fi,Fg);du=o,hu=a,fu=!0}return mn[r]=Og(n,uu,lu,t,hu,fi,e),new xg(n)}function $g(n,t,e,r){n=ce(n),Mg(du,mn[n.app.options.appId],t,e,r).catch(s=>It.error(s))}const pu="@firebase/analytics",mu="0.10.12";function qg(){Gt(new Ot(iu,(t,{options:e})=>{const r=t.getProvider("app").getImmediate(),s=t.getProvider("installations-internal").getImmediate();return Bg(r,s,e)},"PUBLIC")),Gt(new Ot("analytics-internal",n,"PRIVATE")),Dt(pu,mu),Dt(pu,mu,"esm2017");function n(t){try{const e=t.getProvider(iu).getImmediate();return{logEvent:(r,s,o)=>$g(e,r,s,o)}}catch(e){throw bt.create("interop-component-reg-failed",{reason:e})}}}qg();const jg=no({apiKey:"AIzaSyDTp17mp34dX47aQBswgGWTyzimOJawrbg",authDomain:"tradey-86d5c.firebaseapp.com",projectId:"tradey-86d5c",storageBucket:"tradey-86d5c.firebasestorage.app",messagingSenderId:"1042076341500",appId:"1:1042076341500:web:d716dddff66c58e652f379",measurementId:"G-YBXWY1GY4D"}),gu=nm(jg);async function zg(n){try{return(await wm(Ac(gu,"items"),{...n,timestamp:Rm()})).id}catch(t){throw new Error("Error adding item: "+t.message)}}async function Hg(){const n=pm(Ac(gu,"items"),mm("timestamp","desc"));try{const t=await Im(n),e=[];return t.forEach(r=>{var o,a;const s=r.data();e.push({id:r.id,...s,timestamp:((a=(o=s.timestamp)==null?void 0:o.toDate)==null?void 0:a.call(o))||new Date})}),e}catch(t){throw new Error("Error fetching items: "+t.message)}}let je=null,pi=[],gn=[];const ve=new Map,Gg=()=>{const n=localStorage.getItem("geocache");if(n){const t=JSON.parse(n);for(const[e,r]of Object.entries(t))ve.set(e,r.coords),gn.push({address:e,fullAddress:r.fullAddress,coords:r.coords})}},_u=()=>{const n={};ve.forEach((t,e)=>{const r=gn.find(s=>s.address===e);n[e]={coords:t,fullAddress:r?r.fullAddress:e}}),localStorage.setItem("geocache",JSON.stringify(n))};function Kg(){if(je)return;Gg(),je=L.map("map").setView([1.9441,30.0619],13),L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(je);const n=document.getElementById("address-list");n&&(n.innerHTML="<h4>Pinned Locations</h4><p>No locations to display. Perform a search to see pinned locations.</p>")}const Wg=n=>new Promise(t=>setTimeout(t,n));async function Qg(n){if(ve.has(n))return ve.get(n);try{const t=`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(n)}&format=json&limit=1&addressdetails=1`,r=await(await fetch(t,{headers:{"User-Agent":"LostAndFoundTracker/1.0 (your-email@example.com)"}})).json();if(r.length>0){const{lat:s,lon:o,display_name:a}=r[0],u=[parseFloat(s),parseFloat(o)];return ve.set(n,u),gn.push({address:n,fullAddress:a,coords:u}),_u(),u}}catch(t){console.warn(`Nominatim geocoding failed for "${n}":`,t)}try{const e=`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(n)}.json?access_token=pk.eyJ1IjoiZWJpdGVjaCIsImEiOiJjbThxMWpvZzEwNzcyMm1zaHdqYWs0aDE0In0.WWDbJkiV_ICjVIO9wWw_ZQ`,s=await(await fetch(e)).json();if(s.features&&s.features.length>0){const[o,a]=s.features[0].center,u=s.features[0].place_name,h=[a,o];return ve.set(n,h),gn.push({address:n,fullAddress:u,coords:h}),_u(),h}}catch(t){console.error(`Mapbox geocoding failed for "${n}":`,t)}return null}async function mi(n){pi.forEach(o=>o.remove()),pi=[];const t=[...new Set(n.map(o=>o.location_desc).filter(Boolean))];for(let o=0;o<t.length;o++){const a=t[o];await Qg(a),o<t.length-1&&await Wg(1e3)}const e=new Map;for(const o of n){const a=o.location_desc;if(!a)continue;const u=ve.get(a);if(!u)continue;const h=u.join(",");e.has(h)||e.set(h,[]),e.get(h).push(o)}const r=[];e.forEach((o,a)=>{const[u,h]=a.split(",").map(parseFloat),d=o.map(v=>`
            <b>${v.title}</b><br>
            ${v.description||"No description"}
        `).join("<hr>"),p=L.marker([u,h]).addTo(je).bindPopup(d);pi.push(p),r.push([u,h])}),r.length>0?je.fitBounds(r,{padding:[50,50]}):je.setView([1.9441,30.0619],13);const s=document.getElementById("address-list");if(s)if(s.innerHTML="<h4>Pinned Locations</h4>",e.size===0)s.innerHTML+="<p>No locations to display. Perform a search to see pinned locations.</p>";else{const o=[];if(e.forEach((a,u)=>{const h=gn.find(d=>d.coords.join(",")===u);h&&o.push(h.fullAddress)}),o.length>0){const a=document.createElement("ul");o.forEach(u=>{const h=document.createElement("li");h.textContent=u,a.appendChild(h)}),s.appendChild(a)}else s.innerHTML+="<p>No addresses found for the pinned locations.</p>"}}async function _n(n="all",t=""){const e=document.getElementById("items-list"),r=document.getElementById("search-feedback");if(!e){console.error("Items list element not found!");return}e.innerHTML="",r?(console.log("Feedback element found:",r),r.innerHTML=""):console.warn("Search feedback element not found!");try{const s=await Hg();console.log("Fetched items:",s);const o=new RegExp(t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),"i"),a=s.filter(u=>(n==="all"||u.status===n)&&((u.title?o.test(u.title):!1)||(u.description?o.test(u.description):!1)));if(console.log("Filtered items:",a),r&&(a.length===0?r.innerHTML="0 items matched":r.innerHTML=`${a.length} item${a.length===1?"":"s"} matched`,console.log("Feedback message set to:",r.innerHTML)),a.length===0){e.innerHTML="<p class='no-items'>No items found</p>",await mi([]);return}a.forEach(u=>{const h=document.createElement("div");h.classList.add("item-card");const d=u.title.split(" - "),p=d[0]||"Untitled Item",v=d[1]||"Date unknown";h.innerHTML=`
                <div class="card-body">
                    <div class="card-header">
                        <h4 class="card-title">${p}</h4>
                        <small class="timestamp">${v}</small>
                    </div>
                    <span class="status-badge ${u.status==="found"?"status-found":u.status==="lost"?"status-lost":""}">${u.status?u.status.toUpperCase():"UNKNOWN"}</span>
                    <p class="card-text">${u.description||"No description provided."}</p>
                    <div class="item-details">
                        <p><strong>Location:</strong> ${u.location_desc||"Not specified"}</p>
                        <p data-contact-info><strong>Contact:</strong> ${u.contact_info||"Not provided"}</p>
                    </div>
                    ${u.image_link?`
                    <div class="card-image">
                        <img src="${u.image_link}" alt="${p}" class="item-image">
                    </div>`:""}
                </div>
            `,e.appendChild(h)}),await mi(a)}catch(s){console.error("Error fetching items:",s),e.innerHTML=`
            <div class="alert alert-danger">
                Error loading items. Please refresh the page.
                ${s.message?`<div class="error-detail">${s.message}</div>`:""}
            </div>
        `,r&&(r.innerHTML="Error loading items."),await mi([])}}document.addEventListener("DOMContentLoaded",()=>{console.log("DOM fully loaded"),Kg();const n=document.getElementById("report-form"),t=document.getElementById("keyword-search-btn"),e=document.getElementById("keyword-search"),r=document.getElementById("statusTabs"),s=document.getElementById("report-date"),o=document.getElementById("item-title"),a=document.getElementById("reportModal"),u=document.getElementById("report-btn"),h=document.getElementById("report-modal-toggle"),d=document.getElementById("report-modal-close"),p=document.getElementById("report-modal-cancel"),v=document.getElementById("navbar-toggle"),R=document.getElementById("navbarNav");_n();const C=()=>{if(n&&(console.log("Resetting form state"),n.reset(),n.classList.remove("was-validated"),n.querySelectorAll(".form-input, .form-select").forEach(P=>{P.classList.remove("is-invalid"),P.setCustomValidity(""),P.setAttribute("data-pristine","true")}),s&&(s.valueAsDate=new Date),o)){const P=new Date,k=String(P.getDate()).padStart(2,"0"),D=String(P.getMonth()+1).padStart(2,"0"),$=P.getFullYear(),F=`${k}/${D}/${$}`;o.placeholder=`e.g., Lost Wallet - ${F}`,o.value=""}};if(v&&R&&v.addEventListener("click",()=>{console.log("Navbar toggle clicked"),R.classList.toggle("show")}),u&&u.addEventListener("click",()=>{console.log("Report button clicked"),a&&(C(),a.classList.add("show"))}),h&&h.addEventListener("click",P=>{P.preventDefault(),console.log("Report modal toggle clicked"),a&&(C(),a.classList.add("show"))}),d&&d.addEventListener("click",()=>{console.log("Modal close clicked"),a&&a.classList.remove("show")}),p&&p.addEventListener("click",()=>{console.log("Modal cancel clicked"),a&&a.classList.remove("show")}),a&&a.addEventListener("click",P=>{P.target===a&&a.classList.remove("show")}),s&&o){const P=new Date;s.valueAsDate=P;const k=String(P.getDate()).padStart(2,"0"),D=String(P.getMonth()+1).padStart(2,"0"),$=P.getFullYear(),F=`${k}/${D}/${$}`;o.placeholder=`e.g., Lost Wallet - ${F}`,s.addEventListener("change",function(){const G=new Date(this.value),rt=String(G.getDate()).padStart(2,"0"),Pt=String(G.getMonth()+1).padStart(2,"0"),ot=G.getFullYear(),E=`${rt}/${Pt}/${ot}`,m=o.value.split(" - ")[0]||"";o.value=m?`${m} - ${E}`:"",o.placeholder=`e.g., Lost Wallet - ${E}`})}n&&(n.querySelectorAll(".form-input, .form-select").forEach(P=>{P.addEventListener("input",()=>{P.setAttribute("data-pristine","false"),P.classList.remove("is-invalid"),P.setCustomValidity("")})}),n.addEventListener("submit",async P=>{if(P.preventDefault(),!n.checkValidity()){P.stopPropagation(),n.classList.add("was-validated"),n.querySelectorAll(".form-input, .form-select").forEach($=>{$.validity.valid||$.classList.add("is-invalid")});return}const k=o.value.trim();if(k.match(/.+\s-\s\d{2}\/\d{2}\/\d{4}/))o.setCustomValidity("");else{o.classList.add("is-invalid"),o.setCustomValidity("Invalid format"),P.stopPropagation(),n.classList.add("was-validated");return}const D=n.querySelector("#submit-btn");D.disabled=!0,D.classList.add("loading");try{const $={title:k,description:document.getElementById("description").value,location_desc:document.getElementById("location-desc").value,image_link:document.getElementById("image-link").value||"",contact_info:document.getElementById("contact-info").value,status:document.getElementById("item-status").value,item_type:document.getElementById("item-type").value,report_date:s.value};await zg($),console.log("Item added:",$),n.reset(),s.valueAsDate=new Date,o.placeholder=`e.g., Lost Wallet - ${new Date().toLocaleDateString("en-GB")}`,n.classList.remove("was-validated"),a&&a.classList.remove("show");const F=document.createElement("div");F.className="alert alert-success",F.innerHTML=`
                    <strong>Success!</strong> Item reported successfully.
                    <button type="button" class="alert-close">×</button>
                `,document.body.appendChild(F),setTimeout(()=>F.remove(),3e3),F.querySelector(".alert-close").addEventListener("click",()=>F.remove()),_n()}catch($){console.error("Error reporting item:",$);const F=document.createElement("div");F.className="alert alert-danger",F.innerHTML=`
                    <strong>Error!</strong> ${$.message}
                    <button type="button" class="alert-close">×</button>
                `,document.body.appendChild(F),setTimeout(()=>F.remove(),3e3),F.querySelector(".alert-close").addEventListener("click",()=>F.remove())}finally{D.disabled=!1,D.classList.remove("loading")}})),t&&e&&(t.addEventListener("click",()=>{const P=e.value;console.log("Search clicked, query:",P),_n("all",P)}),e.addEventListener("keypress",P=>{if(P.key==="Enter"){P.preventDefault();const k=e.value;console.log("Search triggered by Enter key, query:",k),_n("all",k)}})),r&&r.addEventListener("click",P=>{const k=P.target.closest(".tab-link");if(k&&k.dataset.status){console.log("Tab clicked:",k.dataset.status),document.querySelectorAll(".tab-link").forEach($=>$.classList.remove("active")),k.classList.add("active");const D=document.getElementById("keyword-search").value;_n(k.dataset.status,D)}})})})();
