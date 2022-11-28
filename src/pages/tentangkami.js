import Head from "next/head";
import Image from "next/legacy/image";
import Headers from "components/Headers";
import Footer from "components/Footer"

export default function tentangkami() {
  return (
    <div className="">
      <Head>
        <title>Pelni Agencies</title>
        <meta name="description" content="Web Pelni Agencies" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full absolute z-10 py-5">
        <Headers />
        <div className="w-full mb-10">
          <Image src="/images/coverTentangKami.png" width={1440} height={272} alt="kapal pelni"/>
        </div>
        <div className="px-16">
          <div className="mb-8">
            <h1 className="text-4xl font-semibold mb-4">Tentang Kami</h1>
            <p className=" text-sm text-justify">
              PELNI adalah perusahaan pelayaran BUMN terbesar di Indonesia yang
              salah satu bisnis usahanya adalah menyediakan layanan keagenan
              kapal. Berlokasi di Jl. Gajah Mada No. 14, Jakarta Pusat,
              Sebagaimana diatur dalam Undang-undang no 17 Tahun 2008 bahwa
              tentang agen umum yaitu perusahaan angkutan laut yang didirikan
              untuk melakukan usaha keagenan kapal, yang ditunjuk oleh
              perusahaan angkutan laut asing untuk mengurus kepentingan kapalnya
              selama berada di Indonesia. lebih spesifiknya dijelaskan lagi pada
              pasal 11 ayat 5 bahwa perusahaan angkutan laut asing (kapal asing)
              yang melakukan kegiatan angkutan laut ke atau dari pelabuhan
              Indonesia yang terbuka untuk perdagangan luar negeri secara
              berkesinambungan dapat menunjuk perwakilannya di Indonesia.
            </p>
            <br/>
            <p className="text-sm text-justify">
              PELNI AGENCIES telah melayani hampir 80% kapal asing yang memasuki
              wilayah perairan Indonesia juga kapal-kapal lokal. Memiliki 46
              Kantor cabang yang tersebar di berbagai kota, PT PELNI (Persero)
              menjalankan usaha keagenan kapal dengan pengalaman lebih dari 20
              Tahun, PT PELNI menawarkan jasa antara lain yaitu pengurusan
              surat-surat perijinan kapal untuk melakukan kegiatan di pelabuhan,
              sampai urusan keagenan kapal bagi para pemilik barang dan kapal.
              Dalam pelayanan keagenan, PELNI AGENCIES telah menjadi perusahaan
              modern yang mengikuti perkembangan teknologi dalam Bisnis
              Pelayaran.
            </p>
          </div>
          <div className="">
            <h1 className="text-4xl font-semibold mb-4">Visi dan Misi Pelni Shipping Agencies</h1>
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-black/50">Visi</h2>
              <li className="list-none text-sm">
                Menjadi Perusahaan Pelayaran dan Logistik Maritim Terkemuka di
                Asia Tenggara
              </li>
            </div>
            <div className="mb-10">
              <h2 className="text-xl font-semibold text-black/50">Misi</h2>
              <ul className="pl-4 list-decimal">
                <li className="">
                  Menjamin aksesibilitas masyarakat dengan mengelola angkutan
                  laut untuk menunjang terwujudnya Wawasan Nusantara
                </li>
                <li>
                  Mengelola dan mengembangkan usaha logistik maritim di
                  Indonesia dan Asia Tenggara
                </li>
                <li>
                  Meningkatkan nilai perusahaan melalui kreativitas, inovasi,
                  digitalisasi proses bisnis, dan pengembangan sumber daya
                  manusia untuk mencapai pertumbuhan yang berkesinambungan
                </li>
                <li>
                  Menjalankan usaha secara adil dengan memperhatikan azas
                  manfaat bagi semua pemangku kepentingan dengan menerapkan
                  prinsip good corporate governance
                </li>
                <li>
                  Berkontribusi positif terhadap negara dan karyawan, serta
                  berperan aktif dalam pembangunan lingkungan dan pelayanan
                  kepada masyarakat
                </li>
              </ul>
            </div>
            <div className="mb-24">
              <h1 className="text-4xl font-semibold mb-4">Kenapa Memilih Keagenan Kapal Pelni ?</h1>
              <ul className="pl-4 list-decimal">
                <li>Keagenan PELNI adalah unit usaha yang menyediakan jasa
                  layanan keagenan kapal yang bekerja secara profesional
                </li>
                <li>Kami fokus terhadap pemenuhan kebutuhan dan kepuasan pelanggan
                </li>
                <li>Memiliki kemampuan untuk berkoordinasi dalam mengelola
                  operasi pelabuhan yang rumit
                </li>
                <li>Mengedepankan keahlian, pengalaman, dan teknologi yang
                  diperlukan dalam bisnis kami
                </li>
                <li>Fokus dalam pengelolaan sumber daya manusia yang terampil
                </li>
                <li>Di bawah pengawasan negara sehingga kepatuhan hukum
                  terjamin
                </li>
                <li>Didukung oleh lebih dari 80 cabang, cabang pembantu dan
                  terminal poin
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
