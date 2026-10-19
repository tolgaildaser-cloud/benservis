// scripts/uyelik-aydinlatma.mjs — Bireysel Üyelik Aydınlatma Metni + Açık Rıza v1 (YK #172 ÜY-2, 18 Eki 2026).
// /uyelik-aydinlatma-metni/ — /kayit "Üye ol" formundaki zorunlu onay kutusu bu sayfaya bağlanır.
//
// ⛔ METİN DEĞİŞİRSE src/uyelik.js UYELIK_RIZA_V ARTAR (uyeler.riza_metin_v hangi metnin onaylandığını gösterir).
// ⛔ Veri sorumlusu /gizlilik/ ile aynı (Benservis, şahıs işletmesi); pazaryeri siparişi ayrı metindedir.
// ⛔ noindex + sitemap dışı (form metni, arama sonucu değil). #175 çizgisi: "taslak" ibaresi yok, yürürlükte metin.
// Dayanak: 6698 sayılı KVKK md.5, 9, 10, 11 · Aydınlatma Yükümlülüğü Tebliği.

export const UYELIK_AYDINLATMA_GUNCELLEME = "18 Ekim 2026";

export const UYELIK_AYDINLATMA_GOVDE = `<article>
<h1>Bireysel Üyelik Aydınlatma Metni ve Açık Rıza</h1>
<p class="meta">Sürüm 1 · Son güncelleme: ${UYELIK_AYDINLATMA_GUNCELLEME}</p>
<p>Bu metin, Benservis'te bireysel üyelik hesabı açtığınızda ve hesabınıza cihaz eklediğinizde işlenen kişisel veriler için, 6698 sayılı Kişisel Verilerin Korunması Kanunu'nun (KVKK) 10. maddesi uyarınca hazırlanmıştır. Sitenin diğer bölümleri için <a href="/gizlilik/">Gizlilik ve Kişisel Verilerin Korunması</a>, pazaryeri siparişleri için <a href="/pazaryeri-aydinlatma-metni/">Pazaryeri Aydınlatma Metni</a> geçerlidir.</p>

<h2>Veri sorumlusu</h2>
<p><strong>Benservis</strong> — Tolga İldaser (şahıs işletmesi)<br>E-posta: <a href="mailto:info@benservis.com">info@benservis.com</a><br>Telefon: <a href="tel:+905307105585">0530 710 55 85</a></p>

<h2>İşlenen veriler</h2>
<table><thead><tr><th>Kategori</th><th>Veriler</th></tr></thead><tbody>
<tr><td>Hesap</td><td>E-posta adresi, şifre (yalnız şifrelenmiş özeti saklanır, açık hâli kimse tarafından görülemez), isteğe bağlı ad</td></tr>
<tr><td>Cihaz</td><td>Hesabınıza eklediğiniz cihazların kategori, marka, model, seri numarası, satın alma ve garanti bitiş tarihleri</td></tr>
<tr><td>Belge ve görsel</td><td>Yüklediğiniz fatura ve ürün fotoğrafları (yalnız size açık, gizli depoda tutulur)</td></tr>
<tr><td>Onay kayıtları</td><td>Bu metni ve garanti hatırlatma iznini onayladığınız tarih ve metin sürümü</td></tr>
<tr><td>Teknik</td><td>Oturum ve güvenlik kayıtları (giriş zamanı, IP adresi)</td></tr>
</tbody></table>

<h2>Amaçlar ve hukuki sebepler</h2>
<ul>
<li><strong>Üyelik hesabının açılması ve yönetimi (KVKK md.5/2-c, sözleşmenin kurulması ve ifası):</strong> hesabınızı açmak, giriş yapmanızı ve şifre sıfırlamanızı sağlamak, e-posta adresinizi doğrulamak.</li>
<li><strong>Cihazlarım ve garanti takibi (md.5/2-c):</strong> eklediğiniz cihazları, faturalarını ve garanti sürelerini hesabınızda göstermek; cihazınızın tamir geçmişini aynı kayıtta tutmak.</li>
<li><strong>Garanti hatırlatma e-postası (md.5/1, açık rıza):</strong> yalnız ayrıca izin verdiyseniz, garanti bitişinden önce bilgilendirme e-postası göndermek. Bu izni hesabınızdan istediğiniz an kapatabilirsiniz.</li>
<li><strong>Bilgi güvenliği (md.5/2-f, meşru menfaat):</strong> yetkisiz erişimi ve kötüye kullanımı önlemek.</li>
</ul>
<p>Pazarlama amaçlı ticari elektronik ileti, ayrıca açık onayınız alınmadan gönderilmez. Verileriniz reklam amacıyla üçüncü kişilere satılmaz ya da verilmez.</p>

<h2>Aktarılan taraflar</h2>
<ul>
<li><strong>Altyapı sağlayıcıları:</strong> barındırma, veritabanı, dosya depolama ve e-posta gönderimi hizmeti (sunucuları yurt dışında bulunabilir; aktarım KVKK md.9 çerçevesinde yapılır).</li>
<li><strong>Servisler:</strong> yalnız siz bir servis talebi oluşturduğunuzda, talebiniz için gereken bilgiler o servise iletilir; hesabınız ve cihaz listeniz servislerle kendiliğinden paylaşılmaz.</li>
<li><strong>Yetkili kamu kurum ve kuruluşları:</strong> yasal zorunluluk halinde.</li>
</ul>

<h2>Toplama yöntemi</h2>
<p>Veriler, üyelik ve cihaz ekleme formları aracılığıyla elektronik ortamda, doğrudan sizden toplanır.</p>

<h2>Saklama süresi</h2>
<p>Veriler üyeliğiniz sürdüğü müddetçe saklanır. Hesabınızın silinmesini istediğinizde hesap, cihaz kayıtları, faturalar ve fotoğraflar en geç <strong>30 gün</strong> içinde silinir ya da anonim hale getirilir; yasal saklama yükümlülüğü olan kayıtlar bu yükümlülük süresince tutulur.</p>

<h2>Haklarınız (KVKK md.11)</h2>
<p>Kişisel verilerinizin işlenip işlenmediğini öğrenme, bilgi talep etme, amacına uygun kullanılıp kullanılmadığını öğrenme, aktarıldığı tarafları bilme, düzeltilmesini, silinmesini veya yok edilmesini isteme, otomatik analiz sonucuna itiraz etme ve zararın giderilmesini talep etme haklarına sahipsiniz. Açık rızanızı dilediğiniz zaman geri alabilirsiniz; geri alma, önceki işlemlerin hukuka uygunluğunu etkilemez.</p>
<p>Başvurunuzu ve hesap silme talebinizi <a href="mailto:info@benservis.com">info@benservis.com</a> adresine iletebilirsiniz; başvurunuz en geç <strong>30 gün</strong> içinde yanıtlanır.</p>

<h2>Açık rıza beyanı</h2>
<p>Üye olurken işaretlediğiniz kutu şu beyanı içerir: <em>"Üyelik Aydınlatma Metni'ni okudum; hesabımın ve ekleyeceğim cihaz bilgilerinin bu metindeki amaçlarla işlenmesine açık rıza veriyorum."</em> Garanti hatırlatma e-postası için ayrı ve isteğe bağlı bir kutu bulunur; işaretlemezseniz üyeliğiniz yine açılır.</p>
<p class="kat-not">İlgili sayfalar: <a href="/gizlilik/">Gizlilik ve Kişisel Verilerin Korunması</a> · <a href="/kullanim-kosullari/">Kullanım Koşulları</a> · <a href="/kayit">Üyelik</a></p>
</article>`;
