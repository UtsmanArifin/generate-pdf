import { useRef } from "react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import svg from "./Header.png"
import "./App.css";

const App = () => {
  const inputRef = useRef(null);
  const printDocument = () => {
    html2canvas(inputRef.current).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "JPEG", 0, 0);
      pdf.save("download.pdf");
    });
  };
  return (
    <>
      <div >
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <div >
          <button onClick={printDocument}>Print</button>
        </div>
        <div id="divToPrint" ref={inputRef}>
          <div className="PDF">
            <img id="img-header" src={svg} width="550px"></img>
            {/* <div>INTERNAL MEMO</div>
            <div>Nomor : 007/NSTEL/MBA/X/2022</div>
            <div>Tanggal : 24 Oktober 2022</div>
            <div>You Can add any component here</div> */}
            <div className="pdf-body">
              <p style={{lineHeight: '0px'}}>INTERNAL MEMO</p>
              <div>
                <table style={{borderCollapse: 'collapse'}}>
                  <tr>
                    <td>Nomor</td>
                    <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: </td>
                  </tr>
                  <tr>
                    <td>Tanggal</td>
                    <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: </td>
                  </tr>
                  <tr>
                    <td>Kepada</td>
                    <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: - Bp. Bernard Martian </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Bp. Bernard Martian </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Bp. Bernard Martian </td>
                  </tr>
                  <tr>
                    <td>Dari</td>
                    <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: </td>
                    <td>  </td>
                  </tr>
                  <tr>
                    <td>Perihal</td>
                    <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: </td>
                  </tr>
                  <br></br>
                  <tr style={{borderBottom: '1pt solid black', borderColor: 'black'}}>
                    <td></td>
                    <td style={{minWidth: '30vw'}}></td>
                  </tr>
                  <br></br>
                  <tr>
                    <td><b>TUJUAN</b></td>
                    <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: Mendapatkan Persetujuan Sewa</td>
                  </tr>
                </table>
                <br></br>
                <b>LATAR BELAKANG:</b>
                <p>Pengajuan ini disampaikan dengan pertimbangan sebagai berikut :
                  <ol type="1" style={{lineHeight: '16px', textAlign:'justify'}}>
                    <li>Akan berakhirnya kontrak kerjasama sewa antara PT. Narindo Solusi Telekomunikasi dengan Bpk Syahrir Tauhid untuk sewa Tempat TAP Sekayu pada tanggal 01 November 2022.</li>
                    <li>Masih dibutuhkannya ruangan kerja untuk kantor TAP Sekayu, maka dari itu kami memohon izin untuk Pengajuan Sewa Baru Gedung TAP Sekayu</li>
                  </ol>
                </p>
                <p style={{lineHeight: '16px', textAlign:'justify'}}>
                  <b>USULAN PERSETUJUAN</b>
                  Berdasarkan latar belakang di atas, dengan ini kami mengajukan permohonan persetujuan management untuk pengajuan Sewa Baru Gedung TAP Sekayu selama <b>1 Tahun</b> dengan rincian sebagai berikut :
                  {/* <table style={{marginLeft:'5%'}}>
                    <tr>
                      <td><b>1.&nbsp;&nbsp;&nbsp;&nbsp;Lokasi Gedung</b></td>
                      <td>: Jl. Kol. Wahid Udin No 559 F Sekayu Kab. Musi Banyuasin</td>
                    </tr>
                    <tr>
                      <td><b>2.&nbsp;&nbsp;&nbsp;&nbsp;Jumlah Lantai</b></td>
                      <td>: 1 Ruko 2 Lantai</td>
                    </tr>
                    <tr>
                      <td><b>3.&nbsp;&nbsp;&nbsp;&nbsp;Daya Listrik</b></td>
                      <td>: 5.500 Watt</td>
                    </tr>
                    <tr>
                      <td><b>4.&nbsp;&nbsp;&nbsp;&nbsp;Periode Sewa</b></td>
                      <td>: 01 November 2022 s.d 30 Oktober 2023</td>
                    </tr>
                    <tr>
                      <td><b>5.&nbsp;&nbsp;&nbsp;&nbsp;Biaya Sewa</b></td>
                      <td>: Rp 42.500.000,- / 1 Tahun (Nominal yang ditransfer ke pemilik)</td>
                    </tr>
                    <tr>
                      <td><b>6.&nbsp;&nbsp;&nbsp;&nbsp;Pajak 4 Ayat 2</b></td>
                      <td>: Rp 4.250.000,- (Pajak ditanggung PT. Narindo Solusi Telekomunikasi)</td>
                    </tr>
                    <tr>
                      <td><b>7.&nbsp;&nbsp;&nbsp;&nbsp;Besar Beban Sewa</b></td>
                      <td>: Rp 46.750.000,- / 1 Tahun </td>
                    </tr>
                    <tr>
                      <td><b>8.&nbsp;&nbsp;&nbsp;&nbsp;Pembayaran</b></td>
                      <td>: Transfer ke rek SUMSEL BABEL dengan <br></br>
                      </td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>&nbsp;&nbsp;&nbsp;No. Rek 1400.123.867 a.n SYAHRIR TAUHID IR.H.MM </td>
                    </tr>
                    <tr>
                      <td><b>9.&nbsp;&nbsp;&nbsp;Batas Waktu</b></td>
                      <td>: 31 Oktober 2022 <br></br>
                      </td>
                    </tr>
                    <tr>
                      <td><b>10.&nbsp;Alasan</b></td>
                      <td>: 31 Oktober 2022 <br></br>
                      </td>
                    </tr>
                    
                  </table> */}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default App;
