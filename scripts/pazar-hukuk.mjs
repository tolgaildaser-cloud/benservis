// scripts/pazar-hukuk.mjs — Pazaryeri e-ticaret belgeleri (10 Eki 2026).
// Tolga: "kvkk, mesafeli satış sözleşmesi vb, eticaret için gerekli dokümanları da eklemek gerekli"
// → satıcı: "Orient Global Ltd. Şti." · metin: "Ben taslaklayayım" (FE taslağı; canlıdan önce
// avukat kontrolü önerildi).
// YK #175 (15 Eki 2026, Tolga: "taslak ibarelerini kaldır, kullan"): sayfalardaki "taslaktır" uyarı kutusu
// kaldırıldı; belgeler yürürlükte metin olarak kullanılır.
//
// Dayanak: 6502 sayılı Tüketicinin Korunması Hakkında Kanun · Mesafeli Sözleşmeler Yönetmeliği
// (RG 27.11.2014, 29188) · 6698 sayılı KVKK md.10 ve Aydınlatma Yükümlülüğü Tebliği.
//
// ⛔ SATICI BİLGİSİ TEK YERDE: aşağıdaki SATICI nesnesi. Boş (null) alan sayfada kırmızı
//    "[EKSİK: …]" olarak basılır ve `src/pazar-hukuk.test.js` CI'ı kırmızıda tutar →
//    eksik satıcı bilgisiyle yayına çıkılamaz.
// ⛔ Sayfalar noindex ve sitemap dışı (sözleşme metni arama sonucu değil, sepetten açılır). /pazar
//    12 Eki 2026'da (YK #173) indekse açıldı; belgelerin açılması ayrı karardır, burada değişmedi.
// ⛔ Mevcut /gizlilik/ (Tolga onaylı, Benservis şahıs işletmesi) DEĞİŞMEDİ; pazaryeri
//    siparişinin veri sorumlusu farklı olduğu için aydınlatma metni ayrı sayfadır.

// Kaynak: Türkiye Ticaret Sicili Gazetesi 10 Ağu 2026, sayı 11640, ilan 170462 (sicil + MERSİS);
// VKN finans kayıtları. ❓ Ünvanın yazımı vergi levhasından teyit edilmeli.
export const SATICI = {
  // YK #188 (25 Eki 2026, Tolga: "tutarlılık için heryerde benservis"): alıcının gördüğü işletme adı. Yasal unvan
  // ve MERSİS aşağıda AYNEN kalır (Mesafeli Sözleşmeler Yönetmeliği md.5/1-b); bu satır unvanın yerine geçmez.
  isletmeAdi: "Benservis",
  unvan: "Orient Global Tarımsal Üretim ve Sanayi Ticaret Ltd. Şti.",
  mersis: "0647069188200001",
  sicil: "İstanbul Ticaret Sicili 326252-5",
  vkn: "6470691882",
  adres: "Suadiye Mah. Bağdat Cad. Ark 399 Plaza, Kadıköy / İstanbul", // Tolga, 11 Eki 2026 (Yönetmelik md.5/1-b)
  telefon: "0530 710 55 85",
  eposta: "info@benservis.com",
  kep: null, // varsa yazılır; zorunlu değil ("varsa")
  platform: "Benservis (www.benservis.com)",
};
const ZORUNLU = ["unvan", "mersis", "adres", "telefon", "eposta"];
export const eksikSaticiAlanlari = () => ZORUNLU.filter((k) => !SATICI[k]);

export const PAZAR_HUKUK_GUNCELLEME = "27 Ekim 2026"; // YK #191: kargo tutarı + eşik yazıldı, ödeme metni canlıyla (havale/EFT) uyumlu
import { KARGO_TL, UCRETSIZ_KARGO_ESIK_TL } from "../src/kargo.js";
import { HAVALE_SURE_SAAT } from "../src/havale.js";
const KARGO_SURE = "3 (üç) iş günü";

const alan = (k, etiket) =>
  SATICI[k] ? SATICI[k] : `<strong style="color:#DC2626">[EKSİK: ${etiket}]</strong>`;
const SATICI_TABLO = `<table><tbody>
<tr><th>İşletme adı</th><td>${SATICI.isletmeAdi}</td></tr>
<tr><th>Unvan</th><td>${alan("unvan", "unvan")}</td></tr>
<tr><th>MERSİS No</th><td>${alan("mersis", "MERSİS")}</td></tr>
<tr><th>Ticaret sicil</th><td>${alan("sicil", "sicil")}</td></tr>
<tr><th>Vergi kimlik no</th><td>${alan("vkn", "VKN")}</td></tr>
<tr><th>Açık adres</th><td>${alan("adres", "açık adres")}</td></tr>
<tr><th>Telefon</th><td>${alan("telefon", "telefon")}</td></tr>
<tr><th>E-posta</th><td>${SATICI.eposta ? `<a href="mailto:${SATICI.eposta}">${SATICI.eposta}</a>` : alan("eposta", "e-posta")}</td></tr>
${SATICI.kep ? `<tr><th>KEP</th><td>${SATICI.kep}</td></tr>` : ""}
<tr><th>Satış platformu</th><td>${SATICI.platform}</td></tr>
</tbody></table>`;

const CAPRAZ = `<p class="kat-not">İlgili belgeler: <a href="/on-bilgilendirme-formu/">Ön Bilgilendirme Formu</a> · <a href="/mesafeli-satis-sozlesmesi/">Mesafeli Satış Sözleşmesi</a> · <a href="/iade-ve-cayma/">İade, Cayma ve Teslimat</a> · <a href="/pazaryeri-aydinlatma-metni/">Pazaryeri Aydınlatma Metni</a> · <a href="/pazar">Pazaryerine dön</a></p>`;

const ON_BILGILENDIRME = `<article>
<h1>Ön Bilgilendirme Formu</h1>
<p class="meta">Son güncelleme: ${PAZAR_HUKUK_GUNCELLEME}</p>
<p>Bu form, Mesafeli Sözleşmeler Yönetmeliği'nin 5. maddesi uyarınca, siparişinizi onaylamadan önce sizi bilgilendirmek için hazırlanmıştır. Siparişi onaylamanız, bu formu okuduğunuz anlamına gelir.</p>

<h2>1. Satıcı</h2>
${SATICI_TABLO}

<h2>2. Ürün ve fiyat</h2>
<ul>
<li>Ürünün adı, temel nitelikleri, adedi ve <strong>KDV dahil satış fiyatı</strong> sipariş özetinde ve ürün sayfasında gösterilir.</li>
<li>Fiyatlar Türk lirasıdır ve <strong>tüm vergiler dahildir</strong>.</li>
<li><strong>Teslimat (kargo) ücreti</strong> ürün fiyatına dahil değildir; siparişi onaylamadan önce sipariş özetinde ayrıca gösterilir ve toplam tutara eklenir. Kargolu ürünlerin toplamı <strong>${UCRETSIZ_KARGO_ESIK_TL.toLocaleString("tr-TR")} TL'yi aşan</strong> siparişlerde kargo ücreti sipariş özetinde gösterilir ve aynı tutarda <strong>kargo indirimi</strong> olarak düşülür.</li>
<li>Ürün sayfasındaki fiyat, sipariş onaylanana kadar değişebilir; onaylanan siparişte onay anındaki fiyat geçerlidir.</li>
</ul>

<h2>3. Ödeme</h2>
<p>Ödeme, sipariş adımında sunulan yöntemlerle alınır. Şu an sunulan yöntem <strong>havale / EFT</strong>'dir. Kart ile ödeme açıldığında kart bilgileri lisanslı ödeme kuruluşu tarafından işlenir; satıcıya ve Benservis'e iletilmez.</p>
<p><strong>Havale / EFT ile ödeme:</strong> Bu yöntem seçildiğinde sipariş oluşturulur ve hesap bilgileri, ödenecek tutar ve sipariş numaranız ekranda gösterilir. Ödemeyi açıklamaya sipariş numaranızı yazarak <strong>${HAVALE_SURE_SAAT} saat içinde</strong> yapmanız gerekir. Süre içinde ödeme hesaba geçmezse sipariş kendiliğinden iptal olur ve ikinci el üründeki ayırma kalkar. Teslimat süresi ödemenin hesaba geçtiği andan itibaren işler.</p>

<h2>4. Teslimat</h2>
<ul>
<li>Ürünler, satıcının anlaşmalı tedarikçisinin deposundan <strong>doğrudan</strong> teslimat adresinize gönderilir.</li>
<li>Sipariş, ödemenin onaylanmasından itibaren <strong>tahmini ${KARGO_SURE}</strong> içinde kargoya verilir. Teslim süresi, her durumda siparişten itibaren yasal üst sınır olan <strong>30 günü</strong> aşamaz.</li>
<li>Ürün stokta kalmamışsa ya da teslimat imkânsızlaşırsa durum size bildirilir ve ödediğiniz tutar, bildirim tarihinden itibaren <strong>14 gün</strong> içinde iade edilir.</li>
</ul>

<h2>4A. İkinci el ürünler</h2>
<ul>
<li>"İkinci El" bölümündeki ürünler <strong>kullanılmış</strong> ürünlerdir ve satıcısı yukarıda bilgileri yazılı satıcıdır. Ürünün kontrol sonuçları, değişen parçaları ve garanti durumu (<strong>marka garantisi devam eden</strong>, <strong>Benservis garantili</strong> ya da <strong>garantisiz</strong>) ürün sayfasında ve sipariş özetinde gösterilir.</li>
<li>Teslim şeklini siz seçersiniz: <strong>depodan teslim alma</strong> (ücretsiz), <strong>adrese nakliye</strong> ya da <strong>nakliye ve montaj</strong>. Nakliye ve montaj ücreti ürün bedeline dahil değildir; adresinize göre ayrıca hesaplanır, size bildirilir ve onayınız alınmadan bu hizmet verilmez. Kart ile yalnız ürün bedeli tahsil edilir.</li>
<li>İkinci el ürünlerde de 14 günlük cayma hakkı ve ayıplı mala ilişkin yasal haklarınız geçerlidir; satıştan önce ürün sayfasında açıkça bildirilen kusurlar bu kapsamın dışındadır.</li>
</ul>

<h2>5. Cayma hakkı</h2>
<ul>
<li>Ürünü teslim aldığınız günden itibaren <strong>14 gün</strong> içinde, gerekçe göstermeden ve cezai şart ödemeden sözleşmeden cayabilirsiniz.</li>
<li>Cayma bildirimini süre içinde <a href="mailto:${SATICI.eposta}">${SATICI.eposta}</a> adresine ya da ${alan("telefon", "telefon")} numarasına iletmeniz yeterlidir. Ayrıntı: <a href="/iade-ve-cayma/">İade, Cayma ve Teslimat</a>.</li>
<li>Cayma hakkının kullanılamayacağı haller aynı sayfada sayılmıştır.</li>
</ul>

<h2>6. Uyumluluk ve montaj</h2>
<p>Yedek parçanın cihazınızla uyumlu olduğunu sipariş öncesinde cihazın marka, model ve parça kodu ile teyit etmeniz önerilir; emin değilseniz siparişten önce bize sorabilirsiniz. Gaz, elektrik ve su tesisatına bağlanan parçaların (ör. kombi, ocak, termosifon parçaları) montajının <strong>yetkili ya da yetkin bir servis</strong> tarafından yapılması güvenliğiniz için gereklidir ve üretici garantisinin şartı olabilir.</p>

<h2>7. Garanti ve ayıplı mal</h2>
<p>Ürünlerde üretici veya ithalatçı garantisi geçerlidir. Ayıplı mal durumunda 6502 sayılı Kanun'un 11. maddesindeki seçimlik haklarınızı (sözleşmeden dönme, bedelden indirim, ücretsiz onarım, ayıpsız misliyle değişim) kullanabilirsiniz.</p>

<h2>8. Şikâyet ve uyuşmazlık</h2>
<p>Şikâyetlerinizi yukarıdaki iletişim kanallarından iletebilirsiniz. Uyuşmazlıklarda, Ticaret Bakanlığınca her yıl ilan edilen parasal sınırlar içinde yerleşim yerinizdeki veya işlemin yapıldığı yerdeki <strong>Tüketici Hakem Heyeti</strong>ne, bu sınırları aşan durumlarda <strong>Tüketici Mahkemesi</strong>ne başvurabilirsiniz.</p>
${CAPRAZ}
</article>`;

const MESAFELI = `<article>
<h1>Mesafeli Satış Sözleşmesi</h1>
<p class="meta">Son güncelleme: ${PAZAR_HUKUK_GUNCELLEME}</p>

<h2>Madde 1 — Taraflar</h2>
<p><strong>SATICI</strong></p>
${SATICI_TABLO}
<p><strong>ALICI:</strong> Sipariş formunda adı, iletişim ve teslimat bilgileri yer alan kişi (bundan sonra "Alıcı").</p>

<h2>Madde 2 — Konu</h2>
<p>Bu sözleşmenin konusu, Alıcı'nın ${SATICI.platform} üzerindeki pazaryeri bölümünden elektronik ortamda sipariş verdiği ve nitelikleri, adedi ve KDV dahil satış fiyatı sipariş özetinde belirtilen ürünün satışı ve teslimidir. Taraflar, 6502 sayılı Tüketicinin Korunması Hakkında Kanun ve Mesafeli Sözleşmeler Yönetmeliği hükümleri uyarınca hak ve yükümlülüklerini kabul eder.</p>

<h2>Madde 3 — Ürün, fiyat ve ödeme</h2>
<p>3.1. Ürünün temel nitelikleri, adedi, KDV dahil satış fiyatı, teslimat ücreti ve toplam tutarı sipariş özetinde yer alır ve bu sözleşmenin ayrılmaz parçasıdır.</p>
<p>3.2. Teslimat ücreti ürün fiyatına dahil değildir; sipariş onayından önce Alıcı'ya gösterilir ve toplam tutara eklenir.</p>
<p>3.3. Ödeme, sipariş adımında sunulan yöntemlerle yapılır. Şu an sunulan yöntem havale / EFT'dir. Kart ile ödeme açıldığında kart bilgileri lisanslı ödeme kuruluşunca işlenir; Satıcı'ya iletilmez.</p>
<p>3.4. Havale / EFT ile ödemede Alıcı, sipariş sonunda gösterilen hesaba, açıklamaya sipariş numarasını yazarak toplam tutarı sipariş anından itibaren ${HAVALE_SURE_SAAT} saat içinde öder. Ödeme bu süre içinde Satıcı hesabına geçmezse sipariş kendiliğinden iptal olur; taraflar için bir yükümlülük doğmaz. Ödeme, Satıcı hesabına geçtiği anda onaylanmış sayılır.</p>

<h2>Madde 4 — Teslimat</h2>
<p>4.1. Ürün, Satıcı'nın anlaşmalı tedarikçisi tarafından Alıcı'nın bildirdiği teslimat adresine doğrudan gönderilir.</p>
<p>4.2. Ürün, ödemenin onaylanmasından itibaren tahmini ${KARGO_SURE} içinde kargoya verilir; teslim süresi siparişten itibaren 30 günü aşamaz.</p>
<p>4.3. Satıcı, sipariş konusu ürünün tedarikinin imkânsızlaştığını öğrendiği tarihten itibaren 3 gün içinde Alıcı'yı bilgilendirir ve tahsil edilen tutarı en geç 14 gün içinde iade eder.</p>
<p>4.4. Alıcı, teslim sırasında paketi kontrol etmeli; hasarlı paketi teslim almayarak ya da kargo görevlisine tutanak tutturarak teslim almalıdır.</p>

<h2>Madde 4A — İkinci el ürünler</h2>
<p>4A.1. Pazaryerinin "İkinci El" bölümünden satın alınan ürün kullanılmış üründür. Ürünün kontrol sonuçları, değişen parçaları ve garanti sınıfı (marka garantisi devam eden · Benservis garantili · garantisiz) ürün sayfasında ve sipariş özetinde belirtilir ve bu sözleşmenin parçasıdır.</p>
<p>4A.2. İkinci el üründe kargo ücreti uygulanmaz; Alıcı teslim şeklini seçer: depodan teslim alma (ücretsiz), adrese nakliye ya da nakliye ve montaj. Nakliye ve montaj ücreti ürün bedeline dahil değildir, teslim adresine göre ayrıca hesaplanır ve Alıcı'nın onayı alınmadan hizmet verilmez. Ödeme adımında yalnız ürün bedeli tahsil edilir.</p>
<p>4A.3. Alıcı'nın cayma hakkı ve 6502 sayılı Kanun md.11'deki hakları ikinci el üründe de saklıdır; satıştan önce ürün sayfasında açıkça bildirilen kusurlar ayıp sayılmaz.</p>

<h2>Madde 5 — Cayma hakkı</h2>
<p>5.1. Alıcı, ürünü teslim aldığı günden itibaren 14 gün içinde herhangi bir gerekçe göstermeksizin ve cezai şart ödemeksizin sözleşmeden cayma hakkına sahiptir.</p>
<p>5.2. Cayma bildirimi süre içinde Satıcı'nın e-posta adresine ya da telefonuna açık bir beyanla yapılır.</p>
<p>5.3. Alıcı, cayma bildiriminden itibaren 10 gün içinde ürünü Satıcı'nın bildirdiği adrese gönderir. Satıcı'nın bildirdiği anlaşmalı kargo ile yapılan iade gönderiminin masrafı Satıcı'ya aittir.</p>
<p>5.4. Satıcı, cayma bildiriminin kendisine ulaştığı tarihten itibaren 14 gün içinde, tahsil ettiği toplam bedeli Alıcı'nın ödeme yöntemine uygun şekilde iade eder.</p>
<p>5.5. Alıcı, cayma süresi içinde ürünün mutat kullanımı dışında kullanılmasından (ör. montaj sonrası hasar) kaynaklanan değişiklik ve bozulmalardan sorumludur.</p>
<p>5.6. Mesafeli Sözleşmeler Yönetmeliği md.15'te sayılan hallerde cayma hakkı kullanılamaz; bu haller <a href="/iade-ve-cayma/">İade, Cayma ve Teslimat</a> sayfasında listelenmiştir.</p>

<h2>Madde 6 — Garanti ve ayıplı mal</h2>
<p>Ürünlerde üretici veya ithalatçı garantisi geçerlidir. Ayıplı mal halinde Alıcı, 6502 sayılı Kanun md.11'deki seçimlik haklarını kullanabilir. Gaz, elektrik veya su tesisatına bağlanan parçaların montajı yetkin bir servisçe yapılmalıdır; yetkisiz montajdan kaynaklanan arızalar garanti dışında kalabilir.</p>

<h2>Madde 7 — Kişisel veriler</h2>
<p>Alıcı'nın kişisel verileri <a href="/pazaryeri-aydinlatma-metni/">Pazaryeri Aydınlatma Metni</a>'nde açıklanan amaçlarla işlenir.</p>

<h2>Madde 8 — Uyuşmazlık</h2>
<p>Uyuşmazlıklarda Ticaret Bakanlığınca ilan edilen parasal sınırlar dahilinde Alıcı'nın yerleşim yerindeki veya işlemin yapıldığı yerdeki Tüketici Hakem Heyeti, bu sınırları aşan durumlarda Tüketici Mahkemesi yetkilidir.</p>

<h2>Madde 9 — Yürürlük</h2>
<p>Alıcı, siparişi onaylamakla Ön Bilgilendirme Formu'nu ve bu sözleşmeyi okuyup kabul ettiğini beyan eder. Sözleşme, siparişin onaylanmasıyla kurulur; sözleşme metni ve sipariş özeti Alıcı'nın e-posta adresine iletilir ve Satıcı tarafından saklanır.</p>
${CAPRAZ}
</article>`;

const IADE = `<article>
<h1>İade, Cayma ve Teslimat</h1>
<p class="meta">Son güncelleme: ${PAZAR_HUKUK_GUNCELLEME}</p>

<h2>Teslimat</h2>
<ul>
<li>Parçalar anlaşmalı tedarikçinin deposundan doğrudan adresinize gönderilir.</li>
<li>Siparişiniz ödeme onayından itibaren <strong>tahmini ${KARGO_SURE}</strong> içinde kargoya verilir; kargo firmasına göre teslim genellikle 1-3 iş günü daha sürer. Yasal üst sınır siparişten itibaren 30 gündür.</li>
<li>Kargo ücreti ürün fiyatına dahil değildir: <strong>${KARGO_TL} TL</strong>. Sipariş toplamı <strong>${UCRETSIZ_KARGO_ESIK_TL.toLocaleString("tr-TR")} TL'yi aşarsa kargo ücretsizdir</strong> (ücret indirim olarak düşülür). Tutar, siparişi onaylamadan önce gösterilir.</li>
<li>Paketi teslim alırken kontrol edin; hasarlı paketi teslim almayın ya da kargo görevlisine tutanak tutturun.</li>
</ul>

<h2>Cayma hakkı (14 gün)</h2>
<ol>
<li>Ürünü teslim aldığınız günden itibaren <strong>14 gün</strong> içinde <a href="mailto:${SATICI.eposta}">${SATICI.eposta}</a> adresine ya da ${alan("telefon", "telefon")} numarasına cayma bildiriminizi iletin. Sipariş numaranızı yazmanız yeterlidir.</li>
<li>Size iade adresi ve anlaşmalı kargo bilgisi iletilir. Bu kargo ile gönderimde <strong>iade kargo ücreti ödemezsiniz</strong>.</li>
<li>Ürünü bildiriminizden itibaren <strong>10 gün</strong> içinde, mümkünse orijinal ambalajı ve faturasıyla gönderin.</li>
<li>Ödediğiniz toplam tutar, bildiriminizin bize ulaştığı tarihten itibaren <strong>14 gün</strong> içinde ödeme yönteminize iade edilir.</li>
</ol>

<h2>Cayma hakkının kullanılamadığı haller</h2>
<p>Mesafeli Sözleşmeler Yönetmeliği md.15 uyarınca, örneğin şu ürünlerde cayma hakkı kullanılamaz:</p>
<ul>
<li>Sizin isteğiniz veya kişisel ihtiyaçlarınız doğrultusunda özel olarak hazırlanan ya da ölçüye göre kesilen ürünler,</li>
<li>Teslimden sonra ambalajı, bandı, mührü açılmış olup iadesi sağlık ve hijyen açısından uygun olmayan ürünler (ör. kullanılmış su arıtma filtresi),</li>
<li>Teslimden sonra başka ürünlerle karışan ve doğası gereği ayrıştırılması mümkün olmayan ürünler.</li>
</ul>
<p><strong>Kombi baca ürünleri</strong> (baca uzatma borusu, baca dirseği, baca seti): gaz güvenliği ve conta bütünlüğü nedeniyle iade yalnız <strong>ambalajı açılmamış</strong> üründe kabul edilir; ambalajı açılmış ya da monte edilmiş baca ürünü iade alınmaz. Hermetik ve yoğuşmalı kombi bacaları birbirine uymaz; sipariş öncesi kombi tipinizi teyit edin. Ayıplı ya da yanlış gelen üründe aşağıdaki haklarınız saklıdır.</p>
<p>Monte edilmiş ya da kullanılmış parçalarda, mutat kullanım dışında oluşan hasar ve değer kaybından alıcı sorumludur.</p>

<h2>Ayıplı ya da yanlış ürün</h2>
<p>Ürün ayıplı, hasarlı ya da siparişinizden farklı geldiyse bize hemen yazın; fotoğraf eklemeniz süreci hızlandırır. 6502 sayılı Kanun md.11'deki seçimlik haklarınız (dönme, indirim, onarım, değişim) saklıdır; bu durumda iade kargo ücreti satıcıya aittir.</p>

<h2>Satıcı</h2>
${SATICI_TABLO}
${CAPRAZ}
</article>`;

const AYDINLATMA = `<article>
<h1>Pazaryeri Kişisel Verilerin Korunması Aydınlatma Metni</h1>
<p class="meta">Son güncelleme: ${PAZAR_HUKUK_GUNCELLEME}</p>
<p>Bu metin, ${SATICI.platform} pazaryeri bölümünden verdiğiniz siparişler için, 6698 sayılı Kişisel Verilerin Korunması Kanunu'nun (KVKK) 10. maddesi uyarınca hazırlanmıştır. Sitenin diğer bölümleri için <a href="/gizlilik/">Gizlilik ve Kişisel Verilerin Korunması</a> metni geçerlidir.</p>

<h2>Veri sorumlusu</h2>
${SATICI_TABLO}

<h2>İşlenen veriler</h2>
<table><thead><tr><th>Kategori</th><th>Veriler</th></tr></thead><tbody>
<tr><td>Kimlik ve iletişim</td><td>Ad-soyad, telefon, e-posta</td></tr>
<tr><td>Teslimat ve fatura</td><td>Teslimat adresi, fatura adresi; kurumsal faturada unvan ve vergi numarası</td></tr>
<tr><td>Sipariş</td><td>Sipariş edilen ürünler, tutar, sipariş ve teslimat tarihleri, iade/cayma kayıtları</td></tr>
<tr><td>Ödeme işlemi</td><td>Ödeme sonucu ve işlem numarası; havale / EFT ile ödemede gönderen adı, tutar ve açıklama (banka hesap hareketinden). <strong>Kart ile ödeme açıldığında kart bilgileri ödeme kuruluşunca işlenir, tarafımıza iletilmez.</strong></td></tr>
<tr><td>İletişim kayıtları</td><td>Sipariş, iade ve şikâyet yazışmaları</td></tr>
</tbody></table>

<h2>Amaçlar ve hukuki sebepler</h2>
<ul>
<li><strong>Sözleşmenin kurulması ve ifası (KVKK md.5/2-c):</strong> siparişin alınması, ödemenin tahsili, ürünün tedarikçiden adresinize gönderilmesi, iade ve cayma işlemleri, müşteri hizmetleri.</li>
<li><strong>Hukuki yükümlülük (md.5/2-ç):</strong> fatura düzenlenmesi, ticari ve vergisel kayıtların saklanması, yetkili mercilerin taleplerinin karşılanması.</li>
<li><strong>Meşru menfaat (md.5/2-f):</strong> dolandırıcılığın önlenmesi, hizmet kalitesinin ölçülmesi.</li>
</ul>
<p>Pazarlama amaçlı ticari elektronik ileti, ayrıca açık onayınız alınmadan gönderilmez.</p>

<h2>Aktarılan taraflar</h2>
<ul>
<li><strong>Tedarikçi:</strong> ürün doğrudan tedarikçi deposundan gönderildiği için ad-soyad, telefon ve teslimat adresiniz yalnızca gönderim amacıyla tedarikçiye iletilir.</li>
<li><strong>Kargo şirketi:</strong> teslimat için ad-soyad, telefon ve adres.</li>
<li><strong>Ödeme kuruluşu:</strong> ödemenin alınması ve iadesi için.</li>
<li><strong>Mali müşavir ve e-fatura/e-arşiv hizmet sağlayıcısı:</strong> fatura ve muhasebe kayıtları için.</li>
<li><strong>Altyapı sağlayıcıları:</strong> barındırma ve veritabanı hizmeti (sunucuları yurt dışında bulunabilir; aktarım KVKK md.9 çerçevesinde yapılır).</li>
<li><strong>Yetkili kamu kurum ve kuruluşları:</strong> yasal zorunluluk halinde.</li>
</ul>

<h2>Toplama yöntemi</h2>
<p>Veriler, sipariş ve iletişim formları aracılığıyla elektronik ortamda, doğrudan sizden toplanır.</p>

<h2>Saklama süresi</h2>
<p>Sipariş, fatura ve ödeme kayıtları ticaret ve vergi mevzuatı gereği <strong>10 yıl</strong> saklanır. Süre sonunda veriler silinir, yok edilir ya da anonim hale getirilir.</p>

<h2>Haklarınız (KVKK md.11)</h2>
<p>Kişisel verilerinizin işlenip işlenmediğini öğrenme, bilgi talep etme, amacına uygun kullanılıp kullanılmadığını öğrenme, aktarıldığı tarafları bilme, düzeltilmesini, silinmesini veya yok edilmesini isteme, otomatik analiz sonucuna itiraz etme ve zararın giderilmesini talep etme haklarına sahipsiniz.</p>
<p>Başvurunuzu <a href="mailto:${SATICI.eposta}">${SATICI.eposta}</a> adresine${SATICI.kep ? `, ${SATICI.kep} KEP adresine` : ""} ya da yazılı olarak ${alan("adres", "açık adres")} adresine iletebilirsiniz; başvurunuz en geç <strong>30 gün</strong> içinde yanıtlanır.</p>
${CAPRAZ}
</article>`;

export const PAZAR_HUKUK_SAYFALARI = [
  { dizin: "on-bilgilendirme-formu", title: "Ön Bilgilendirme Formu — Benservis Pazaryeri",
    desc: "Benservis pazaryeri siparişleri için ön bilgilendirme formu: satıcı, fiyat, ödeme, teslimat, cayma hakkı ve şikâyet yolları.", govde: ON_BILGILENDIRME },
  { dizin: "mesafeli-satis-sozlesmesi", title: "Mesafeli Satış Sözleşmesi — Benservis Pazaryeri",
    desc: "Benservis pazaryeri mesafeli satış sözleşmesi: taraflar, ürün ve fiyat, teslimat, cayma hakkı, garanti ve uyuşmazlık.", govde: MESAFELI },
  { dizin: "iade-ve-cayma", title: "İade, Cayma ve Teslimat — Benservis Pazaryeri",
    desc: "Benservis pazaryerinde teslimat süresi, 14 günlük cayma hakkı, iade adımları ve cayma hakkının kullanılamadığı haller.", govde: IADE },
  { dizin: "pazaryeri-aydinlatma-metni", title: "Pazaryeri Aydınlatma Metni — Benservis",
    desc: "Benservis pazaryeri siparişlerinde işlenen kişisel veriler, amaçlar, aktarılan taraflar, saklama süresi ve KVKK md.11 haklarınız.", govde: AYDINLATMA },
];
