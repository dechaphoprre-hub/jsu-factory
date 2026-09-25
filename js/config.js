/* =========================================================
   ไฟล์นี้คือ "ข้อมูลร้าน" ทั้งหมด — แก้ไฟล์นี้ไฟล์เดียวพอ
   (เปิดด้วย Notepad ได้ แก้เฉพาะข้อความในเครื่องหมาย "..." )
   ========================================================= */

const SITE = {
  // ---------- ข้อมูลโรงงาน ----------
  name: "เจ๊สุมาลีรับจ้างแซ็กรังติดกระดุม",
  shortName: "เจ๊สุมาลี",          // ชื่อสั้นที่แถบบนสุดของเว็บ
  tagline: "รับจ้างแซ็กรัง ติดกระดุม",
  intro:
    "ประสบการณ์มากกว่า 30 ปี รับงาน Order ใหญ่ได้ไม่จำกัด " +
    "มีคุณภาพ ส่งตรงเวลา",

  // ---------- ช่องทางติดต่อ (ช่องไหนไม่มี ให้ปล่อยว่าง "") ----------
  phone: "088-197-9922",           // เบอร์โทรหลัก (ใช้กับปุ่มโทรที่แถบล่างมือถือ)
  phone2: "087-787-9922",          // เบอร์โทรสำรอง (ไม่มีให้ปล่อยว่าง "")
  lineUrl: "https://line.me/ti/p/Z7G7Xsrc-q",  // ลิงก์ LINE (ได้จาก QR Code)
  lineId: "",                      // LINE ID ที่จะโชว์ในหน้าติดต่อ (ถ้าไม่ใส่ จะขึ้นว่า "กดเพื่อแอดไลน์")
  facebook: "",                    // ลิงก์เพจ Facebook เช่น "https://facebook.com/xxxx"
  address: "1014/47 มบ.ศรีเพชร ซอยเพชรเกษม 106 แยก 14 แขวงหนองค้างพลู เขตหนองแขม กรุงเทพมหานคร 10160",
  storefront: "storefront.jpg",    // รูปหน้าตึก (อยู่ในโฟลเดอร์ images/) ให้ลูกค้าหาร้านเจอง่าย
  hours: "จันทร์ - เสาร์  08:00 - 18:00 น. (หยุดวันอาทิตย์)",

  // ลิงก์ Google Map ของร้าน (กด "แชร์" ใน Google Map แล้ว copy ลิงก์มาวางแทนได้)
  googleMapLink: "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent("เจ๊สุมาลีรับจ้างแซ็กรังติดกระดุม"),
  // คำค้นสำหรับแผนที่ที่ฝังในหน้าเว็บ (ถ้าหมุดไม่ตรง ให้เปลี่ยนเป็น Plus Code: "P954+X7 Bangkok")
  mapQuery: "เจ๊สุมาลีรับจ้างแซ็กรังติดกระดุม",

  // ---------- บริการ ----------
  services: [
    { icon: "buttonhole", title: "แซ็กรังดุม", text: "เย็บรังดุมด้วยจักรอุตสาหกรรม เสื้อเชิ้ต เสื้อยูนิฟอร์ม เสื้อโปโล กางเกง" },
    { icon: "button",     title: "ติดกระดุม",  text: "ติดกระดุมแน่น ระยะเท่ากันทุกเม็ด ไม่หลุดง่าย" },
    { icon: "factory",    title: "รับ Order ใหญ่ ไม่จำกัด", text: "รองรับงานโรงงาน งานยูนิฟอร์ม และงานล็อตใหญ่" },
    { icon: "truck",      title: "คุณภาพ ส่งตรงเวลา", text: "ประสบการณ์มากกว่า 30 ปี ตรวจงานก่อนส่งทุกล็อต" },
  ],

  // ---------- รูปผลงาน ----------
  // เอารูปไปใส่ในโฟลเดอร์  images/works/  แล้วเพิ่มชื่อไฟล์ที่นี่ (รูปแรก ๆ จะโชว์ก่อน)
  // category = หมวด (ใช้ทำปุ่มกรอง), caption = คำอธิบายใต้รูป
  works: [
    // --- งานแบรนด์ดัง (โชว์ก่อน) ---
    { file: "work70.jpg", category: "งานแบรนด์ดัง", caption: "ชุดเด็ก Tommy Hilfiger" },
    { file: "work71.jpg", category: "งานแบรนด์ดัง", caption: "เสื้อยูนิฟอร์ม 7-Eleven" },
    { file: "work01.jpg", category: "งานแบรนด์ดัง", caption: "เสื้อเด็ก Calvin Klein กระดุมไม้" },
    { file: "work39.jpg", category: "งานแบรนด์ดัง", caption: "เสื้อยูนิฟอร์ม ไวไว" },
    { file: "work26.jpg", category: "งานแบรนด์ดัง", caption: "เสื้อโปโลยูนิฟอร์ม Shell" },
    { file: "work02.jpg", category: "งานแบรนด์ดัง", caption: "ติดกระดุมไม้ Calvin Klein" },
    { file: "work40.jpg", category: "งานแบรนด์ดัง", caption: "เสื้อโปโลยูนิฟอร์ม ไวไว" },
    { file: "work20.jpg", category: "งานแบรนด์ดัง", caption: "เสื้อโปโลกระทรวงสาธารณสุข" },
    { file: "work03.jpg", category: "งานแบรนด์ดัง", caption: "คอเสื้อเด็ก Calvin Klein" },
    { file: "work41.jpg", category: "งานแบรนด์ดัง", caption: "เสื้อโปโลไวไว กระดุม 3 เม็ด" },
    { file: "work21.jpg", category: "งานแบรนด์ดัง", caption: "ยูนิฟอร์มกระทรวงสาธารณสุข" },
    { file: "work35.jpg", category: "งานแบรนด์ดัง", caption: "เสื้อแจ็กเก็ตยูนิฟอร์ม PTSL" },
    { file: "work10.jpg", category: "งานแบรนด์ดัง", caption: "เสื้อโปโลยูนิฟอร์ม KRUGER" },
    // --- งานทั่วไป ---
    { file: "work61.jpg", category: "โปโล / ยูนิฟอร์ม", caption: "เสื้อโปโลสีกรม" },
    { file: "work68.jpg", category: "โปโล / ยูนิฟอร์ม", caption: "ติดกระดุมเสื้อโปโล งานละเอียด" },
    { file: "work27.jpg", category: "โปโล / ยูนิฟอร์ม", caption: "เสื้อกีฬาสี Sport Day" },
    { file: "work54.jpg", category: "โปโล / ยูนิฟอร์ม", caption: "เสื้อกีฬาวิทยาลัย" },
    { file: "work64.jpg", category: "เชิ้ต / แฟชั่น / เสื้อเด็ก", caption: "เสื้อเชิ้ตลายดอก" },
    { file: "work34.jpg", category: "เชิ้ต / แฟชั่น / เสื้อเด็ก", caption: "เสื้อแฟชั่นระบาย ติดกระดุม" },
    { file: "work48.jpg", category: "โปโล / ยูนิฟอร์ม", caption: "เสื้อโปโลคอปก Button-down" },
    { file: "work53.jpg", category: "เชิ้ต / แฟชั่น / เสื้อเด็ก", caption: "เสื้อไหมพรม ติดกระดุม" },
    { file: "work09.jpg", category: "โปโล / ยูนิฟอร์ม", caption: "แซ็กรังสาบเสื้อโปโล" },
    { file: "work17.jpg", category: "โปโล / ยูนิฟอร์ม", caption: "เสื้อโปโลงานโรงเรียน" },
    { file: "work18.jpg", category: "โปโล / ยูนิฟอร์ม", caption: "แซ็กรังเสื้อโปโลสีขาว" },
    { file: "work24.jpg", category: "โปโล / ยูนิฟอร์ม", caption: "ติดกระดุม 4 รู เสื้อโปโล" },
    { file: "work28.jpg", category: "โปโล / ยูนิฟอร์ม", caption: "แซ็กรัง-ติดกระดุมสาบเสื้อ" },
    { file: "work30.jpg", category: "โปโล / ยูนิฟอร์ม", caption: "ติดกระดุมสาบเสื้อกีฬา" },
    { file: "work31.jpg", category: "โปโล / ยูนิฟอร์ม", caption: "เสื้อกีฬาสีโรงเรียน" },
    { file: "work36.jpg", category: "โปโล / ยูนิฟอร์ม", caption: "เสื้อโปโลยูนิฟอร์มสีกรม" },
    { file: "work37.jpg", category: "โปโล / ยูนิฟอร์ม", caption: "ติดกระดุมสาบเสื้อโปโล" },
    { file: "work38.jpg", category: "โปโล / ยูนิฟอร์ม", caption: "ติดกระดุม 4 รู แน่นหนา" },
    { file: "work49.jpg", category: "โปโล / ยูนิฟอร์ม", caption: "เสื้อโปโลสีดำ" },
    { file: "work55.jpg", category: "โปโล / ยูนิฟอร์ม", caption: "เสื้อ Sportday 2025" },
    { file: "work60.jpg", category: "โปโล / ยูนิฟอร์ม", caption: "เสื้อโปโลวิทยาลัย" },
    { file: "work62.jpg", category: "โปโล / ยูนิฟอร์ม", caption: "เสื้อโปโลสีเทา" },
    { file: "work63.jpg", category: "โปโล / ยูนิฟอร์ม", caption: "แซ็กรังผ้าตาข่าย" },
    { file: "work66.jpg", category: "โปโล / ยูนิฟอร์ม", caption: "ติดกระดุมสาบเสื้อโปโล" },
    { file: "work67.jpg", category: "โปโล / ยูนิฟอร์ม", caption: "สาบกระดุมเสื้อโปโล" },
    { file: "work07.jpg", category: "เชิ้ต / แฟชั่น / เสื้อเด็ก", caption: "เสื้อกั๊กเด็ก ติดกระดุม" },
    { file: "work08.jpg", category: "เชิ้ต / แฟชั่น / เสื้อเด็ก", caption: "เสื้อกั๊กเด็ก ผ้าทวีต" },
    { file: "work42.jpg", category: "เชิ้ต / แฟชั่น / เสื้อเด็ก", caption: "เสื้อเด็กลายสก็อต" },
    { file: "work43.jpg", category: "เชิ้ต / แฟชั่น / เสื้อเด็ก", caption: "ชุดเด็กลายสก็อต" },
    { file: "work44.jpg", category: "เชิ้ต / แฟชั่น / เสื้อเด็ก", caption: "ชุดเด็กระบาย ติดกระดุมหลัง" },
    { file: "work45.jpg", category: "เชิ้ต / แฟชั่น / เสื้อเด็ก", caption: "เสื้อผ้าซาติน" },
    { file: "work46.jpg", category: "เชิ้ต / แฟชั่น / เสื้อเด็ก", caption: "แซ็กรังเสื้อผ้าซาติน" },
    { file: "work47.jpg", category: "เชิ้ต / แฟชั่น / เสื้อเด็ก", caption: "เสื้อเชิ้ตแขนยาว" },
    { file: "work50.jpg", category: "เชิ้ต / แฟชั่น / เสื้อเด็ก", caption: "ติดกระดุมเสื้อผ้าซาติน" },
    { file: "work51.jpg", category: "เชิ้ต / แฟชั่น / เสื้อเด็ก", caption: "เสื้อแฟชั่นผ้าซาติน" },
    { file: "work52.jpg", category: "เชิ้ต / แฟชั่น / เสื้อเด็ก", caption: "เสื้อไหมพรม ล็อตใหญ่" },
    { file: "work65.jpg", category: "เชิ้ต / แฟชั่น / เสื้อเด็ก", caption: "ติดกระดุมเสื้อเชิ้ตลายดอก" },
    // --- เครื่องจักร (เพิ่มรูปเครื่องจักรต่อท้ายตรงนี้) ---
    { file: "work06.jpg", category: "เครื่องจักร", caption: "จักรติดกระดุม JUKI" },
    { file: "work05.jpg", category: "เครื่องจักร", caption: "ช่างประจำจักรติดกระดุม" },
    // --- บรรยากาศโรงงาน ---
    { file: "work11.jpg", category: "บรรยากาศโรงงาน", caption: "งานล็อตใหญ่ในโรงงาน" },
    { file: "work13.jpg", category: "บรรยากาศโรงงาน", caption: "พื้นที่ทำงานในโรงงาน" },
    { file: "work16.jpg", category: "บรรยากาศโรงงาน", caption: "งานเสื้อกีฬาสี ล็อตใหญ่" },
    { file: "work22.jpg", category: "บรรยากาศโรงงาน", caption: "งานเสื้อเชิ้ตล็อตใหญ่" },
    { file: "work23.jpg", category: "บรรยากาศโรงงาน", caption: "ทีมงานคัดแยกงาน" },
    { file: "work25.jpg", category: "บรรยากาศโรงงาน", caption: "ทีมงานตัดด้าย-ตรวจงาน" },
    { file: "work32.jpg", category: "บรรยากาศโรงงาน", caption: "ทีมงานในโรงงาน" },
    { file: "work33.jpg", category: "บรรยากาศโรงงาน", caption: "ไลน์จักรในโรงงาน" },
    { file: "work56.jpg", category: "บรรยากาศโรงงาน", caption: "คัดแยกงานเสื้อเชิ้ตลายทาง" },
    { file: "work57.jpg", category: "บรรยากาศโรงงาน", caption: "งานเข้าโรงงานทุกวัน" },
    { file: "work58.jpg", category: "บรรยากาศโรงงาน", caption: "งานเสื้อลายดอก ล็อตใหญ่" },
    { file: "work59.jpg", category: "บรรยากาศโรงงาน", caption: "ทีมงานตรวจงานก่อนส่ง" },
  ],

  // ---------- คลิปการทำงาน ----------
  // แบบที่ 1: อัปคลิปขึ้น YouTube แล้ววางลิงก์ใน youtube: "..."
  // แบบที่ 2: เอาไฟล์ .mp4 ใส่โฟลเดอร์  videos/  แล้วใส่ชื่อไฟล์ใน file: "..."
  //           คลิปแนวตั้ง (ถ่ายจากมือถือ) ให้ใส่ vertical: true
  videos: [
    { file: "clip1.mp4", poster: "clip1-poster.jpg", vertical: true, title: "ติดกระดุมด้วยจักร JUKI" },
    { file: "clip2.mp4", poster: "clip2-poster.jpg", vertical: true, title: "แซ็กรังเสื้อเชิ้ตลายดอก" },
    { file: "clip3.mp4", poster: "clip3-poster.jpg", vertical: true, title: "แซ็กรังเสื้อไหมพรม" },
    { file: "clip4.mp4", poster: "clip4-poster.jpg", vertical: true, title: "แซ็กรังผ้าสีน้ำตาล" },
    { file: "clip5.mp4", poster: "clip5-poster.jpg", vertical: true, title: "แซ็กรังเสื้อสีชมพู" },
    { file: "clip6.mp4", poster: "clip6-poster.jpg", vertical: true, title: "แซ็กรังสาบเสื้อไหมพรม" },
  ],
};
