const stocks = [
  {
    "empresa": "AES Tietê (O)",
    "codigoADR": "AESAY",
    "preco": 10,
  },
  {
    "empresa": "AES Tietê (P)",
    "codigoADR": "AESYY",
    "preco": 10,
  },
  {
    "empresa": "AmBev (P)",
    "codigoADR": "ABEV",
    "preco": 10,
  },
  {
    "empresa": "Banco Bradesco (P)",
    "codigoADR": "BBD",
    "preco": 10,
  },
  {
    "empresa": "Banco do Brasil (O)",
    "codigoADR": "BDORY",
    "preco": 10,
  },
  {
    "empresa": "Banco Santander",
    "codigoADR": "BSBR",
    "preco": 10,
  },
  {
    "empresa": "Braskem (P)",
    "codigoADR": "BAK",
    "preco": 10,
  },
  {
    "empresa": "BRF Foods (O)",
    "codigoADR": "BRFS",
    "preco": 10,
  },
  {
    "empresa": "Cemig",
    "codigoADR": "CIG",
    "preco": 10,
  },
  {
    "empresa": "CESP (P)",
    "codigoADR": "CESDY",
    "preco": 10,
  },
  {
    "empresa": "Cielo (P)",
    "codigoADR": "CIOXY",
    "preco": 10,
  },
  {
    "empresa": "Copel (O)",
    "codigoADR": "ELPVY",
    "preco": 10,
  },
  {
    "empresa": "Copel (P)",
    "codigoADR": "ELP",
    "preco": 10,
  },
  {
    "empresa": "Cosan Ltd. (O)",
    "codigoADR": "CZZ",
    "preco": 10,
  },
  {
    "empresa": "CPFL (O)",
    "codigoADR": "CPL",
    "preco": 10,
  },
  {
    "empresa": "CSN (O)",
    "codigoADR": "SID",
    "preco": 10,
  },
  {
    "empresa": "Cyrela Brasil (O)",
    "codigoADR": "CYRBY",
    "preco": 10,
  },
  {
    "empresa": "Eletrobrás (O)",
    "codigoADR": "EBR",
    "preco": 10,
  },
  {
    "empresa": "Eletrobrás (P)",
    "codigoADR": "EBR/B",
    "preco": 10,
  },
  {
    "empresa": "Embraer (O)",
    "codigoADR": "ERJ",
    "preco": 10,
  },
  {
    "empresa": "Fibria Celulose (O)",
    "codigoADR": "FBR",
    "preco": 10,
  },
  {
    "empresa": "Gafisa (O)",
    "codigoADR": "GFA",
    "preco": 10,
  },
  {
    "empresa": "Gerdau (P)",
    "codigoADR": "GGB",
    "preco": 10,
  },
  {
    "empresa": "Gol (P)",
    "codigoADR": "GOL",
    "preco": 10,
  },
  {
    "empresa": "Hypermarcas (O)",
    "codigoADR": "HYPMY",
    "preco": 10,
  },
  {
    "empresa": "Iochpe Maxion (O)",
    "codigoADR": "IOCJY",
    "preco": 10,
  },
  {
    "empresa": "ItauUnibanco (P)",
    "codigoADR": "ITUB",
    "preco": 10,
  },
  {
    "empresa": "JBS (O)",
    "codigoADR": "JBSAY",
    "preco": 10,
  },
  {
    "empresa": "Klabin (P)",
    "codigoADR": "KLBAY",
    "preco": 10,
  },
  {
    "empresa": "PRUMO Logística (O)",
    "codigoADR": "OTCMKTS",
    "preco": 10,
  },
  {
    "empresa": "MMX (O) – 1 GDR",
    "codigoADR": "MMXMY",
    "preco": 10,
  },
  {
    "empresa": "OGX Petróleo (O)",
    "codigoADR": "OGXPY",
    "preco": 10,
  },
  {
    "empresa": "Oi (P)",
    "codigoADR": "OIBR",
    "preco": 10,
  },
  {
    "empresa": "Pão de Açúcar (P)",
    "codigoADR": "CBD",
    "preco": 10,
  },
  {
    "empresa": "PDG Realty (0)",
    "codigoADR": "PDGRY",
    "preco": 10,
  },
  {
    "empresa": "Petrobras (O)",
    "codigoADR": "PBR",
    "preco": 10,
  },
  {
    "empresa": "Petrobras (P)",
    "codigoADR": "PBR/A",
    "preco": 10,
  },
  {
    "empresa": "Rossi Residencial (O)",
    "codigoADR": "RSRZY",
    "preco": 10,
  },
  {
    "empresa": "Sabesp (O)",
    "codigoADR": "SBS",
    "preco": 10,
  },
  {
    "empresa": "Suzano Papel e Celulose (O)",
    "codigoADR": "SUZBY",
    "preco": 10,
  },
  {
    "empresa": "Telefônica Brasil (P)",
    "codigoADR": "VIV",
    "preco": 10,
  },
  {
    "empresa": "TIM Part. (P)",
    "codigoADR": "TSU",
    "preco": 10,
  },
  {
    "empresa": "Tractebel Energia (O)",
    "codigoADR": "TBLEY",
    "preco": 10,
  },
  {
    "empresa": "Transmissão Paulista (P)",
    "codigoADR": "CTPZY",
    "preco": 10,
  },
  {
    "empresa": "Ultrapar Part. (P)",
    "codigoADR": "UGP",
    "preco": 10,
  },
  {
    "empresa": "Usiminas (P)",
    "codigoADR": "USNZY",
    "preco": 10,
  },
  {
    "empresa": "Vale (O)",
    "codigoADR": "VALE",
    "preco": 10,
  },
  {
    "empresa": "Vale (P)",
    "codigoADR": "VALE/P",
    "preco": 10,
  }
 ];

 export default stocks;