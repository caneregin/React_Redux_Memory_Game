# React Redux Memory Game
## Yayınlandı: https://630f257540bedd7679cf76e9--jazzy-kataifi-f9b2dc.netlify.app/

## useSelector items ile tüm kart değerleri, totalPoint ile toplam puan, isFinish ile oyun bitmesi kontrolü çekilmiştir. İlk ve ikinci tıklama useState olarak verilmiştir. Eğer ilk tıklama ve ikinci tıklama varsa 2 tıklanan resimin id kullanılarak src'si kontrol edilip redux check ile karşılanmak üzere dispatch ile gönderilir. Eğer 2 resim uyuyorsa eşleşir ve resimler açık kalır 50 puan eklenir. Eşleşmez ise yarım saniye sonra iki resim kapanır. handleChoice kontrolü ile firstClick varsa secondClick içerisine card bilgisi yazılır yoksa firstclick içerisine card bilgisi yazılır.
![memory1](https://user-images.githubusercontent.com/36435160/187645605-60754f09-6d66-4b32-9f0d-6611214e0a2d.png)

## shuffleCards ile oyun her açıldığında ve oyun bitip tekrar oynandığında kartlar karıştırılır. Kart karıştırması dispatch ile redux shuffleData olarak karşılanır. trigger ile açılan kartlar sayılır. Tüm kartlar açıldığında dispatch ile redux finishGame karşılanır. map ile tüm cardlar listelenir.
![memory2](https://user-images.githubusercontent.com/36435160/187646151-8cd1a192-46ab-401c-95fd-6d615890b179.png)

## Card componentine card, flipped, handlechoice prop olarak geçilir. Eğer flipped var ise flipped stili yoksa boş stil verilir. Cart ön ve arkası olarak 2 image vardır. Cart önü image source'a göre gelir. Card arkası sabittir ve tıklanma burada gerçekleşir. Tıklandığında kart rotate ile döner
![memory3](https://user-images.githubusercontent.com/36435160/187646668-7d45b9c9-518e-4d00-a856-ef55de170a33.png)

## initial state items tüm resimlerin id src matched değerleri verilmiştir.
![memory8](https://user-images.githubusercontent.com/36435160/187647630-c7e1a169-16c0-4742-a8a6-5d3e2f6cca09.png)

## reducer check kullanımında tıklanan resim ile tüm resimlerdeki id karşılaştırılıp bulunur. İlgili resimin matched true olarak değiştirilir. Böylece resim gösterilirken artık resimin ön yüzü gösterilecektir. 2 resim olduğundan 25er puandan toplam 50puan eklenir. finish değeri 1 artar ve 30 olduğundan oyun bittiği anlaşılır tekrar oyna butona açığa çıkar. checkFalse eşlenmeme durumudur ve ilgili resimin matched false olarak döner.
![memory8](https://user-images.githubusercontent.com/36435160/187648371-05a19b85-c164-4e74-b439-d82735043192.png)

## decreasePoint başarısız eşleşmelerde 10 puan toplam puandan düşer. shuffleData resimleri karıştırır. finishGame Toplam puanı ve bitiş sayacını sıfırlar.
![memory9](https://user-images.githubusercontent.com/36435160/187648677-02bdb3a5-8c9a-4abd-a064-3848021658f7.png)
