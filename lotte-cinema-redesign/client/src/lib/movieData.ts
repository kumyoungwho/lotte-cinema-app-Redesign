// Lotte Cinema — Movie Data Store
// Design: Swiss International Typographic Style

export interface Movie {
  id: number;
  title: string;
  titleKo: string;
  genre: string[];
  rating: number;
  ageRating: string;
  duration: number; // minutes
  releaseDate: string;
  director: string;
  cast: string[];
  synopsis: string;
  poster: string;
  backdrop: string;
  isNowPlaying: boolean;
  isComingSoon: boolean;
  bookingRate: number; // percentage
  format: string[];
}

const HERO_BANNER = "https://private-us-east-1.manuscdn.com/sessionFile/9meFJwmlWr0zEZX6pKIjti/sandbox/9XNhkwWzGP7Hkc20izF32F-img-1_1772097528000_na1fn_bG90dGUtaGVyby1iYW5uZXI.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvOW1lRkp3bWxXcjB6RVpYNnBLSWp0aS9zYW5kYm94LzlYTmhrd1d6R1A3SGtjMjBpekYzMkYtaW1nLTFfMTc3MjA5NzUyODAwMF9uYTFmbl9iRzkwZEdVdGFHVnlieTFpWVc1dVpYSS5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=SHCcSxgeU6-WMxhgM960Bsv2X9Gccrco3A4VCrM6FidT0UifexdmfXYO~Xf8~cYWfFloqw-pYhv-sJjXl0oxDdAgzIkpdYhMvwxNC2Sdxjp0w2JwhphrzY-tkHW1h3RuxgT3QE-K3wDiYOaWvYSJ4DaZSS3EIhpDnKXVAJH7RWHg9JERv9R7aZs8oBKv9lCvgkU51dO1sdtJHoeULPsVYGoPkgORT0f8hYwMfYFcqHts-rypuBPC7bUNw16j0~Uc91DO~-TR-aqeNjHeKIkcuEJXvyWWA0CResDooZHL4ABjG0-d5kChA-oHuCms5V~2w6HykTMOQpHIVgfh0hp82w__";

const MOVIE_1 = "https://private-us-east-1.manuscdn.com/sessionFile/9meFJwmlWr0zEZX6pKIjti/sandbox/9XNhkwWzGP7Hkc20izF32F-img-2_1772097528000_na1fn_bG90dGUtbW92aWUtMQ.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvOW1lRkp3bWxXcjB6RVpYNnBLSWp0aS9zYW5kYm94LzlYTmhrd1d6R1A3SGtjMjBpekYzMkYtaW1nLTJfMTc3MjA5NzUyODAwMF9uYTFmbl9iRzkwZEdVdGJXOTJhV1V0TVEuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=nd1pSGJyWRgtJHfdGcBtqsnyKNbakON1DR13p~VYBC3YLEGCODTH9YfHdCDS9HA5NRH5-WtUW1KlL1A2BBpF0pqkU0UESu0edW57eupSJ5Sd-u63gDlCGjGIp6mnKzYjXRLsta4LfPVGAinFJE0W6sPK73ES5jHPFbAISQsCanjh~Uf804pAfRDMFe5hQarijLZuVOqX0sBkyF08qt8ql9F4TBTeNmVY1~eMdvSFr4UYRTW5nD0nu2FWIuAa0RoEw~4~Ic9X7M5e-Hyoiko0ofpF9VOHGAckeXX-1IRVsjbYEMfroV05dXlVD0Ijfb3h5-aiGJiLqzQvzZ2ZLWeepA__";

const MOVIE_2 = "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=500&q=80"; // Seoul Midnight - romantic drama

const MOVIE_3 = "https://private-us-east-1.manuscdn.com/sessionFile/9meFJwmlWr0zEZX6pKIjti/sandbox/9XNhkwWzGP7Hkc20izF32F-img-4_1772097532000_na1fn_bG90dGUtbW92aWUtMw.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvOW1lRkp3bWxXcjB6RVpYNnBLSWp0aS9zYW5kYm94LzlYTmhrd1d6R1A3SGtjMjBpekYzMkYtaW1nLTRfMTc3MjA5NzUzMjAwMF9uYTFmbl9iRzkwZEdVdGJXOTJhV1V0TXcuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=CRB0hV7Zi8tcEVl2YTpejBNNr8XmVvQTc7jnDymY7wOjczfsSwLu8QTMw318ddgH5WPz1URfMgmNBWKQT0W~Dt2Rk9ezIoonizT3dnAKakmDAYNy1kM5BhF31cyf1kBNvNglu1tQBqBb-MF5ksp4Vp7rW588HTkpO-oc52kDkzEWsakYfVRU9eD5pu6nT-~M5J-cbLwz7RArAQXzHPIM8f5W5tYpyVsa9Lw-u-cwDnMcBUWpCLxcXWbVrtRsRem218I445IACtW1GZlbKxbX12umKrOQbAGpCGqoaQbHxxYOBTrIOMfQtCOQ3Q~Ie5U4GYfuwDu~BvHRjnZh9jwEXQ__";

const MOVIE_4 = "https://private-us-east-1.manuscdn.com/sessionFile/9meFJwmlWr0zEZX6pKIjti/sandbox/9XNhkwWzGP7Hkc20izF32F-img-5_1772097532000_na1fn_bG90dGUtbW92aWUtNA.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvOW1lRkp3bWxXcjB6RVpYNnBLSWp0aS9zYW5kYm94LzlYTmhrd1d6R1A3SGtjMjBpekYzMkYtaW1nLTVfMTc3MjA5NzUzMjAwMF9uYTFmbl9iRzkwZEdVdGJXOTJhV1V0TkEuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=WdP09~UpEX4ORcbOQ6UYrN5m3HTEmHayDVCWd5GB1csMvU8gxL6TI272zzxEndGd4ckMz860MVSMSOriMZEvzIwriBWyxc-Tk01RSgTJyz-k4vINvCL3M7lrUGyugmitzSdxOHpf1a4gXJZgzUMxbMroRvKnrgKuGYH7LZBPYA2k29sU0Cjc4dBSVNAjXYnEG~w7iiAyVWrVaLHFPpQRdP0uAfo3ZoOnPyUIVmrAl5LFDpQqNQEKO2l8b9HF33dTXbaGKerH3q9nI3DaHjLIgT6FedxHl7fRb6mV1l-pQhuPBetTeCfjQQYZZecGm6zZwxjn0eev5LtGrIRk9sPaMw__";

// Unsplash fallback posters for variety
const UNSPLASH_POSTERS = [
  "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=400&q=80", // dark city
  "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?w=400&q=80", // drama
  "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?w=400&q=80", // abstract
  "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&q=80", // film reel
];

export const movies: Movie[] = [
  {
    id: 1,
    title: "Stellar Horizon",
    titleKo: "스텔라 호라이즌",
    genre: ["SF", "액션"],
    rating: 9.2,
    ageRating: "12",
    duration: 148,
    releaseDate: "2026.02.12",
    director: "박준혁",
    cast: ["이민호", "전지현", "마동석"],
    synopsis: "2157년, 인류의 마지막 희망을 위해 우주 끝으로 향하는 특수부대의 사투를 그린 대서사 SF 액션 블록버스터. 압도적인 스케일과 감동적인 이야기로 전 세계를 사로잡다.",
    poster: MOVIE_1,
    backdrop: HERO_BANNER,
    isNowPlaying: true,
    isComingSoon: false,
    bookingRate: 42,
    format: ["2D", "4DX", "IMAX"],
  },
  {
    id: 2,
    title: "Seoul Midnight",
    titleKo: "서울 미드나잇",
    genre: ["로맨스", "드라마"],
    rating: 8.7,
    ageRating: "15",
    duration: 112,
    releaseDate: "2026.02.19",
    director: "김지영",
    cast: ["공유", "손예진", "류준열"],
    synopsis: "서울의 밤하늘 아래, 우연히 만난 두 사람의 운명적인 사랑 이야기. 남산 타워에서 시작된 짧은 만남이 영원한 기억이 되어가는 감동 로맨스.",
    poster: MOVIE_2,
    backdrop: MOVIE_2,
    isNowPlaying: true,
    isComingSoon: false,
    bookingRate: 28,
    format: ["2D"],
  },
  {
    id: 3,
    title: "Shadow Protocol",
    titleKo: "섀도우 프로토콜",
    genre: ["액션", "스릴러"],
    rating: 8.9,
    ageRating: "15",
    duration: 132,
    releaseDate: "2026.02.26",
    director: "최성훈",
    cast: ["마동석", "조진웅", "이선균"],
    synopsis: "대한민국 최정예 특수부대 요원이 국가 기밀 작전을 수행하며 마주치는 예상치 못한 배신과 음모. 빗속의 서울을 배경으로 펼쳐지는 초고속 액션 스릴러.",
    poster: MOVIE_3,
    backdrop: MOVIE_3,
    isNowPlaying: true,
    isComingSoon: false,
    bookingRate: 35,
    format: ["2D", "4DX"],
  },
  {
    id: 4,
    title: "The Lantern Forest",
    titleKo: "랜턴 숲의 비밀",
    genre: ["애니메이션", "가족"],
    rating: 9.5,
    ageRating: "전체",
    duration: 98,
    releaseDate: "2026.01.29",
    director: "스튜디오 미래",
    cast: ["(애니메이션)"],
    synopsis: "마법의 숲에서 길을 잃은 소녀 하나가 빛나는 랜턴을 들고 신비로운 생명체들과 함께 집으로 돌아가는 여정. 온 가족이 함께 즐길 수 있는 따뜻하고 아름다운 애니메이션.",
    poster: MOVIE_4,
    backdrop: MOVIE_4,
    isNowPlaying: true,
    isComingSoon: false,
    bookingRate: 22,
    format: ["2D", "3D"],
  },
  {
    id: 5,
    title: "Phantom City",
    titleKo: "팬텀 시티",
    genre: ["SF", "스릴러"],
    rating: 0,
    ageRating: "15",
    duration: 125,
    releaseDate: "2026.03.14",
    director: "이창동",
    cast: ["송강호", "이병헌"],
    synopsis: "2040년, 가상 도시에서 벌어지는 의식 해킹 사건을 추적하는 형사의 이야기. 현실과 가상의 경계가 무너지는 순간, 진실은 어디에 있는가?",
    poster: UNSPLASH_POSTERS[0],
    backdrop: UNSPLASH_POSTERS[0],
    isNowPlaying: false,
    isComingSoon: true,
    bookingRate: 0,
    format: ["2D", "IMAX"],
  },
  {
    id: 6,
    title: "The Last Bloom",
    titleKo: "마지막 꽃",
    genre: ["드라마"],
    rating: 0,
    ageRating: "12",
    duration: 108,
    releaseDate: "2026.03.26",
    director: "봉준호",
    cast: ["전도연", "설경구", "김태리"],
    synopsis: "한 여인이 생의 마지막 봄을 맞이하며 가족과 화해하고 삶의 의미를 찾아가는 감동적인 여정. 아름다운 자연 속에서 피어나는 인간 드라마.",
    poster: UNSPLASH_POSTERS[1],
    backdrop: UNSPLASH_POSTERS[1],
    isNowPlaying: false,
    isComingSoon: true,
    bookingRate: 0,
    format: ["2D"],
  },
];

export const heroBanner = HERO_BANNER;

export const nowPlayingMovies = movies.filter(m => m.isNowPlaying);
export const comingSoonMovies = movies.filter(m => m.isComingSoon);

export const genres = ["전체", "액션", "로맨스", "SF", "드라마", "애니메이션", "스릴러", "공포", "코미디"];

export const theaters = [
  { id: 1, name: "롯데시네마 건대입구", address: "서울 광진구 아차산로 213", screens: 8 },
  { id: 2, name: "롯데시네마 홍대입구", address: "서울 마포구 양화로 188", screens: 6 },
  { id: 3, name: "롯데시네마 강남", address: "서울 강남구 강남대로 438", screens: 10 },
  { id: 4, name: "롯데시네마 잠실", address: "서울 송파구 올림픽로 240", screens: 12 },
  { id: 5, name: "롯데시네마 월드타워", address: "서울 송파구 올림픽로 300", screens: 14 },
];

export const showtimes = [
  { id: 1, time: "10:00", screen: "1관", format: "2D", availableSeats: 87, totalSeats: 120 },
  { id: 2, time: "12:30", screen: "3관", format: "4DX", availableSeats: 45, totalSeats: 80 },
  { id: 3, time: "14:50", screen: "5관", format: "IMAX", availableSeats: 62, totalSeats: 180 },
  { id: 4, time: "17:20", screen: "1관", format: "2D", availableSeats: 103, totalSeats: 120 },
  { id: 5, time: "19:40", screen: "3관", format: "4DX", availableSeats: 12, totalSeats: 80 },
  { id: 6, time: "22:10", screen: "7관", format: "2D", availableSeats: 98, totalSeats: 120 },
];
