import { useRef } from "react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import "./App.css";
import Header from "./Header.png"
import Footer from "./Footer.png"

const App = () => {
  const inputRef = useRef(null);
  const printDocument = async () => {
    html2canvas(inputRef.current).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "JPEG", 0, 0);
      pdf.save("download.pdf");
    });
  };
  return (
      <div className="PDF">
        {/* <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2> */}
        {/* <div>
          <button onClick={printDocument}>Print</button>
        </div> */}
        {/* <div id="divToPrint" ref={inputRef}> */}
          {/* <div> */}
            <img id="img-header" src={Header} width="20cm"></img>
            <div className="pdf-body">
                <a>INTERNAL MEMO</a>
                <table style={{borderCollapse: "collapse"}}>
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
                        <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: - Bp. Bernard Martian
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Bp. Bernard
                            Martian </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Bp. Bernard
                            Martian </td>
                    </tr>
                    <tr>
                        <td>Dari</td>
                        <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: </td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td>Perihal</td>
                        <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: </td>
                    </tr>
                    <tr style={{borderBottom: "1pt solid black", borderColor: "black"}}>
                        <td></td>
                        <td style={{width: "100%"}}>
                        </td>
                    </tr>
                    <tr>
                        <td><b>TUJUAN</b></td>
                        <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: Mendapatkan Persetujuan
                            Sewa</td>
                    </tr>
                </table>
                    <p style={{marginTop: "0.5%"}}><b>LATAR BELAKANG:</b><br/>
                    Pengajuan ini disampaikan dengan pertimbangan sebagai berikut :
                    <ol type="1" style={{lineHeight: "16px", textAlign: "justify", marginTop: "1%"}}>
                        <li>Akan berakhirnya kontrak kerjasama sewa antara PT. Narindo Solusi Telekomunikasi dengan Bpk Syahrir
                            Tauhid untuk sewa Tempat TAP Sekayu pada tanggal 01 November 2022.</li>
                        <li>Masih dibutuhkannya ruangan kerja untuk kantor TAP Sekayu, maka dari itu kami memohon izin untuk
                            Pengajuan Sewa Baru Gedung TAP Sekayu</li>
                    </ol>
                    </p>
                    <p style={{lineHeight: "16px", textAlign: "justify", marginTop: "0%"}}>
                        <b>USULAN PERSETUJUAN</b><br/>
                        Berdasarkan latar belakang di atas, dengan ini kami mengajukan permohonan persetujuan management untuk
                        pengajuan Sewa Baru Gedung TAP Sekayu selama <b>1 Tahun</b> dengan rincian sebagai berikut :
                        <table style={{marginLeft: "4%", borderCollapse: "collapse", marginBottom: "1%", textAlign: 'left', fontSize: 14, marginTop: "1%"}}>
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
                                <td>: Transfer ke rek SUMSEL BABEL dengan</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>&nbsp;&nbsp;No. Rek 1400.123.867 a.n SYAHRIR TAUHID IR.H.MM </td>
                            </tr>
                            <tr>
                                <td><b>9.&nbsp;&nbsp;&nbsp;&nbsp;Batas Waktu</b></td>
                                <td>: 31 Oktober 2022</td>
                            </tr>
                            <tr>
                                <td><b>10.&nbsp;&nbsp;Alasan</b></td>
                                <td>: 31 Oktober 2022</td>
                            </tr>
                        </table>
                        Demikian permohonan ini kami sampaikan, dan atas persetujuan yang diberikan kami ucapkan terima kasih.
                    </p>
                    <table style={{width: "100%", borderCollapse: "collapse"}}>
                        <tr>
                            <th style={{fontWeight: "normal", textAlign: "left", width: "5cm"}}>Sekayu, 24 Oktober 2022</th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                        <tr>
                            <td style={{textAlign: "left"}}>Diajukan oleh,</td>
                            <td colspan="2" style={{textAlign: "center"}}>Mengetahui,</td>
                            <td style={{textAlign: "left"}}>Disetujui oleh,</td>
                        </tr>
                        <tr>
                            <td style={{lineHeight: "3cm", color: "white"}}> z</td>
                            <td style={{color: "white"}}>z</td>
                            <td style={{color: "white"}}>z</td>
                            <td style={{color: "white"}}>z</td>
                        </tr>
                        <tr>
                            <td><b><u>Arief Budiman</u></b></td>
                            <td>&nbsp;<b><u>Josephat Christian</u></b></td>
                            <td><b><u>Ridwan Syahman</u></b></td>
                            <td><b><u>Bernard Martian</u></b></td>
                        </tr>
                        <tr>
                            <td style={{width: "30%"}}><b>GM Regional SBP</b></td>
                            <td>&nbsp;<b>Director Of Sales</b></td>
                            <td><b>Chief Of Finance</b></td>
                            <td><b>Chief Of Executive</b></td>
                        </tr>
                    </table>
            </div>
            <img id="img-footer" src={Footer} width="20cm"></img>
          {/* </div> */}
        {/* </div> */}
      </div>
  );
};

export default App;
